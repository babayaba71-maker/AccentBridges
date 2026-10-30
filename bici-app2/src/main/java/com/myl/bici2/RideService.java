package com.myl.bici2;

import android.app.Notification;
import android.app.NotificationChannel;
import android.app.NotificationManager;
import android.app.Service;
import android.content.Context;
import android.content.Intent;
import android.content.SharedPreferences;
import android.location.Location;
import android.location.LocationListener;
import android.location.LocationManager;
import android.os.Build;
import android.os.Bundle;
import android.os.Handler;
import android.os.Looper;
import android.os.IBinder;
import android.os.PowerManager;

/**
 * Alma Bici — servicio en primer plano.
 * Cuenta el paseo con la pantalla apagada: Android no duerme un foreground service de ubicación.
 */
public class RideService extends Service implements LocationListener {

    public static final String CH = "alma_bici";
    public static final int NOTIF_ID = 77;
    public static final String ACT_START = "com.myl.bici.START";
    public static final String ACT_STOP  = "com.myl.bici.STOP";
    /** Retomar un paseo que ya estaba en marcha SIN reiniciar los números.
     *  Nace del parte del 30-oct: al instalar un APK nuevo Android mata el proceso
     *  y borra las alarmas, y al abrir la app el paseo seguía "en marcha" del
     *  guardado viejo, así que nadie le ordenaba nada al servicio (candado NO
     *  PUESTO, último latido "nunca"). */
    public static final String ACT_REANUDAR = "com.myl.bici.REANUDAR";

    static final String K_ON="on", K_START="start", K_DIST="dist", K_MAX="max",
                        K_ACC="acc", K_N="n", K_ULT="ult", K_SALTO="salto", K_REIN="rein",
                        K_VER="ver", K_VIG="vig", K_VIGT="vigt", K_CAND="cand", K_PWR="pwr", K_IDLE="idle";
    private PowerManager.WakeLock foco;

    private LocationManager lm;
    private Location ultimo;
    private long ultimoAviso = 0;

    public static SharedPreferences prefs(Context c){ return c.getSharedPreferences("alma_bici", MODE_PRIVATE); }

    @Override public IBinder onBind(Intent i){ return null; }

    @Override public int onStartCommand(Intent intent, int flags, int startId) {
        String accion = intent != null ? intent.getAction() : null;

        if (ACT_STOP.equals(accion)) {
            parar();
            return START_NOT_STICKY;
        }

        // latido de la alarma: aunque Samsung haya congelado el proceso, aquí
        // reenganchamos el GPS y pedimos una lectura suelta
        if (Latido.ACT_LATIDO.equals(accion)) {
            if (prefs(this).getBoolean(K_ON, false)) {
                empezarGps();
                tomarFoco();
                pedirUna();
            }
            return START_STICKY;
        }

        crearCanal();
        iniciarForeground("Arrancando el paseo…");

        if (ACT_REANUDAR.equals(accion)) {
            prefs(this).edit().putBoolean(K_ON, true).apply();
            anclaGps = null; anclaRed = null; ultimoGpsT = 0L;   // al retomar, el ancla vieja ya no sirve
            try { Latido.programar(this); } catch (Exception ignored) {}
        } else if (ACT_START.equals(accion)) {
            SharedPreferences p = prefs(this);
            p.edit().putBoolean(K_ON,true).putLong(K_START,System.currentTimeMillis())
                .putFloat(K_DIST,0f).putFloat(K_MAX,0f).putInt(K_N,0).putFloat(K_SALTO,0f)
                .putInt(K_ACC,-1).putLong(K_ULT,0L).putInt(K_REIN,0)
                .putLong("finT",0L).putFloat("finDist",0f).putLong("finSeg",0L).putFloat("finMax",0f).apply();
            ultimo = null;
            anclaGps = null; anclaRed = null; ultimoGpsT = 0L; borrarAnclas();   // paseo nuevo, ancla nueva (si no, sumaría el salto desde el punto viejo)
            String ver = "?";
            try { ver = getPackageManager().getPackageInfo(getPackageName(), 0).versionName; } catch (Exception ignored) {}
            p.edit().putString(K_VER, ver).putInt(K_VIG, 0).putLong(K_VIGT, 0L).putBoolean(K_CAND, false)
                .putInt("latidos", 0).putLong("latidoT", 0L).apply();
            Latido.programar(this);   // alarma propia, independiente del proceso
        }

        empezarGps();
        tomarFoco();
        // cualquier arranque con el paseo vivo reprograma la alarma
        if (prefs(this).getBoolean(K_ON, false)) Latido.programar(this);
        vigia.postDelayed(chequeo, 30000);
        return START_STICKY;
    }

    private void pedirUna() {
        try {
            if (lm == null) lm = (LocationManager) getSystemService(Context.LOCATION_SERVICE);
            if (lm == null) return;
            Location ult = null;
            try { ult = lm.getLastKnownLocation(LocationManager.GPS_PROVIDER); } catch (Exception ignored) {}
            if (ult != null && System.currentTimeMillis() - ult.getTime() < 20000) onLocationChanged(ult);
            if (lm.isProviderEnabled(LocationManager.GPS_PROVIDER))
                lm.requestSingleUpdate(LocationManager.GPS_PROVIDER, this, Looper.getMainLooper());
            if (lm.isProviderEnabled(LocationManager.NETWORK_PROVIDER))
                lm.requestSingleUpdate(LocationManager.NETWORK_PROVIDER, this, Looper.getMainLooper());
        } catch (Exception ignored) {}
    }

    private android.location.GnssStatus.Callback gnss;
    /** punto de referencia para sumar distancia (ver onLocationChanged) */
    private Location anclaGps;
    private Location anclaRed;
    private long ultimoGpsT = 0L;
    private void contarSatelites() {
        // 30-oct: saber si el telefono VE satelites o solo antenas. ±100 m
        // significa antena; el parte necesita decirlo con nombre y apellido.
        if (Build.VERSION.SDK_INT < 24 || lm == null || gnss != null) return;
        try {
            gnss = new android.location.GnssStatus.Callback() {
                @Override public void onSatelliteStatusChanged(android.location.GnssStatus st) {
                    // 30-oct: el parte de JJ dijo "0/1 satelites" durante 7 min al
                    // aire libre. Para saber si el motor GNSS ve cielo o no, se
                    // guarda cuantos satelites traen señal y el mejor CN0 (dB-Hz):
                    // 0 con señal = el motor no está escuchando; 6 con 30 dB y sin
                    // fix = hay cielo pero el chip no cierra la posición.
                    int usados = 0, vistos = st.getSatelliteCount(), conSenal = 0;
                    float mejor = 0f;
                    for (int i = 0; i < vistos; i++) {
                        if (st.usedInFix(i)) usados++;
                        float cn0 = st.getCn0DbHz(i);
                        if (cn0 > 0f) { conSenal++; if (cn0 > mejor) mejor = cn0; }
                    }
                    prefs(RideService.this).edit().putInt("sats", vistos)
                            .putInt("satsUsados", usados)
                            .putInt("satsSenal", conSenal)
                            .putInt("satsCn0", Math.round(mejor)).apply();
                }
            };
            lm.registerGnssStatusCallback(gnss, null);
        } catch (Exception ignored) {}
    }

    private void empezarGps() {
        try {
            lm = (LocationManager) getSystemService(Context.LOCATION_SERVICE);
            if (lm == null) return;
            // 30-oct: cada proveedor con su try/catch y su error guardado. Antes
            // iban juntos: si el pedido de GPS tronaba, la antena tampoco se pedía
            // y nadie sabía por qué. El parte ahora puede decir el error exacto.
            try {
                if (lm.isProviderEnabled(LocationManager.GPS_PROVIDER))
                    lm.requestLocationUpdates(LocationManager.GPS_PROVIDER, 1000, 0, this);
                else prefs(this).edit().putString("gpsErr", "GPS apagado en el telefono").apply();
            } catch (Exception e) {
                prefs(this).edit().putString("gpsErr", e.getClass().getSimpleName() + ": " + e.getMessage()).apply();
            }
            try {
                if (lm.isProviderEnabled(LocationManager.NETWORK_PROVIDER))
                    lm.requestLocationUpdates(LocationManager.NETWORK_PROVIDER, 2000, 0, this);
            } catch (Exception e) {
                prefs(this).edit().putString("redErr", e.getClass().getSimpleName() + ": " + e.getMessage()).apply();
            }
        } catch (Exception e) { /* sin servicio de ubicacion */ }
        contarSatelites();
    }

    // Android puede dejar de entregar lecturas (permiso "solo con la app abierta",
    // ahorro de bateria agresivo, cache del proveedor). Si pasa mas de 45 s sin
    // lecturas, se vuelve a registrar solo. JJ: "1:31:30 y 0.00 km, 1 lectura".
    private final Handler vigia = new Handler(Looper.getMainLooper());
    private final Runnable chequeo = new Runnable() {
        @Override public void run() {
            try {
                SharedPreferences p = prefs(RideService.this);
                if (!p.getBoolean(K_ON,false)) return;

                // 30-oct: huella del vigilante para saber si el proceso sigue vivo
                boolean cand = (foco != null && foco.isHeld());
                boolean pwr = false, idle = false;
                try {
                    PowerManager pm = (PowerManager) getSystemService(Context.POWER_SERVICE);
                    if (pm != null) {
                        pwr = pm.isPowerSaveMode();
                        if (Build.VERSION.SDK_INT >= 23) idle = pm.isDeviceIdleMode();
                    }
                } catch (Exception ignored) {}
                p.edit().putInt(K_VIG, p.getInt(K_VIG,0)+1)
                        .putLong(K_VIGT, System.currentTimeMillis())
                        .putLong("vivo", System.currentTimeMillis())
                        .putBoolean(K_CAND, cand).putBoolean(K_PWR, pwr).putBoolean(K_IDLE, idle).apply();

                long ult = p.getLong(K_ULT,0);
                boolean dormido = ult > 0 && System.currentTimeMillis() - ult > 45000;
                if (dormido) {
                    p.edit().putInt(K_REIN, p.getInt(K_REIN,0)+1).apply();
                    try { if (lm != null) lm.removeUpdates(RideService.this); } catch (Exception ignored) {}
                    empezarGps();
                    // ademas pide UNA lectura suelta por si el flujo continuo esta muerto
                    try {
                        if (lm != null && lm.isProviderEnabled(LocationManager.GPS_PROVIDER)) {
                            if (Build.VERSION.SDK_INT >= 30)
                                lm.getCurrentLocation(LocationManager.GPS_PROVIDER, null, getMainExecutor(), new java.util.function.Consumer<Location>() {
                                    @Override public void accept(Location l) { if (l != null) onLocationChanged(l); }
                                });
                            else
                                lm.requestSingleUpdate(LocationManager.GPS_PROVIDER, RideService.this, Looper.getMainLooper());
                        }
                    } catch (Exception ignored) {}
                }
            } catch (Exception ignored) {}
            vigia.postDelayed(this, 30000);
        }
    };

    // Samsung congela el proceso a los ~2 min con la pantalla apagada: sin esto ni
    // el GPS ni el vigilante corren (parte de JJ: 16 lecturas, luego 2 min dormido,
    // "reinicios 0" = el vigia tampoco despertó).
    private PowerManager.WakeLock pantalla;
    private void fijarPantalla() {
        // 30-oct (JJ: "todavía se queda dormida"): el flag de la actividad sólo
        // defiende mientras la pantalla del tablero está al frente. Este candado
        // vive en el SERVICIO, así que la pantalla no se apaga sola aunque el
        // tablero pase a segundo plano. Se suelta al PARAR.
        try {
            if (pantalla != null && pantalla.isHeld()) return;
            PowerManager pm = (PowerManager) getSystemService(Context.POWER_SERVICE);
            if (pm == null) return;
            pantalla = pm.newWakeLock(PowerManager.SCREEN_DIM_WAKE_LOCK, "alma_bici:pantalla");
            pantalla.setReferenceCounted(false);
            pantalla.acquire(6 * 60 * 60 * 1000L);
            prefs(this).edit().putBoolean("pantallaFija", pantalla.isHeld()).apply();
        } catch (Exception ignored) {}
    }

    private void soltarPantalla() {
        try { if (pantalla != null && pantalla.isHeld()) pantalla.release(); } catch (Exception ignored) {}
        try { prefs(this).edit().putBoolean("pantallaFija", false).apply(); } catch (Exception ignored) {}
    }

    private void tomarFoco() {
        try {
            if (foco != null && foco.isHeld()) return;
            PowerManager pm = (PowerManager) getSystemService(Context.POWER_SERVICE);
            if (pm == null) return;
            foco = pm.newWakeLock(PowerManager.PARTIAL_WAKE_LOCK, "alma_bici:pedaleo");
            foco.setReferenceCounted(false);
            foco.acquire(6 * 60 * 60 * 1000L);
            prefs(this).edit().putBoolean(K_CAND, foco.isHeld()).apply();
            prefs(this).edit().putBoolean("candado", foco.isHeld()).apply();
        } catch (Exception ignored) {}
        fijarPantalla();
    }

    private void soltarFoco() { soltarFoco(true); }

    /**
     * matarPaseo=true  -> JJ apretó PARAR: se suelta todo y se apaga la alarma.
     * matarPaseo=false -> el servicio se está muriendo con el paseo VIVO: se suelta
     * el candado pero la alarma SIGUE programada, porque es justo la que va a
     * revivir el paseo. Ése era el bug de la 3.5: onDestroy cancelaba el latido
     * en el momento exacto en que se necesitaba (parte: "candado NO PUESTO",
     * "latidos 0").
     */
    private void soltarFoco(boolean matarPaseo) {
        try { if (foco != null && foco.isHeld()) foco.release(); } catch (Exception ignored) {}
        try { prefs(this).edit().putBoolean("candado", false).apply(); } catch (Exception ignored) {}
        if (matarPaseo) {
            soltarPantalla();
            try { Latido.cancelar(this); } catch (Exception ignored) {}
        }
        foco = null;
    }


    // 30-oct (parte de JJ: "0.00 km, 3:18 ... reinicios 2 ... candado NO PUESTO").
    // Tercer culpable del cero: el ancla vivía SOLO en memoria, y cada vez que
    // Android mataba y revivía el servicio (reinicios 2 en tres minutos) el ancla
    // se borraba. Con lecturas de antena cada ~20 s y un margen de ~40 m, nunca
    // había tiempo de acumular un tramo: cero para siempre. Ahora el ancla se
    // guarda en prefs y sobrevive los reinicios; solo se borra al ARRANCAR.
    private void guardarAncla(String pre, Location l) {
        if (l == null) return;
        prefs(this).edit()
            .putLong(pre + "Lat", Double.doubleToRawLongBits(l.getLatitude()))
            .putLong(pre + "Lon", Double.doubleToRawLongBits(l.getLongitude()))
            .putLong(pre + "T", l.getTime())
            .putFloat(pre + "Acc", l.hasAccuracy() ? l.getAccuracy() : 199f).apply();
    }

    private Location leerAncla(String pre) {
        SharedPreferences p = prefs(this);
        long t = p.getLong(pre + "T", 0L);
        if (t <= 0L) return null;
        try {
            Location l = new Location(pre.equals("ar") ? "network" : "gps");
            l.setLatitude(Double.longBitsToDouble(p.getLong(pre + "Lat", 0L)));
            l.setLongitude(Double.longBitsToDouble(p.getLong(pre + "Lon", 0L)));
            l.setTime(t);
            l.setAccuracy(p.getFloat(pre + "Acc", 199f));
            return l;
        } catch (Exception e) { return null; }
    }

    private void borrarAnclas() {
        prefs(this).edit()
            .putLong("agT", 0L).putLong("arT", 0L).apply();
    }

    private void soltarSatelites() {
        try { if (gnss != null && lm != null) lm.unregisterGnssStatusCallback(gnss); } catch (Exception ignored) {}
        gnss = null;
    }

    private void parar() {
        // 30-oct: al PARAR se guarda el resumen del paseo (finDist/finSeg/finMax)
        // para que la pantalla pueda mostrar el paseo terminado completo en vez
        // de dejar el número viejo con el reloj en 0:00.
        SharedPreferences p0 = prefs(this);
        long ini = p0.getLong(K_START, 0L);
        long segFin = ini > 0 ? Math.max(0, (System.currentTimeMillis() - ini) / 1000) : 0;
        p0.edit().putFloat("finDist", p0.getFloat(K_DIST, 0f))
                 .putLong("finSeg", segFin)
                 .putFloat("finMax", p0.getFloat(K_MAX, 0f))
                 .putLong("finT", System.currentTimeMillis()).apply();

        soltarSatelites();
        try { if (lm != null) lm.removeUpdates(this); } catch (Exception ignored) {}
        soltarFoco();
        prefs(this).edit().putBoolean(K_ON,false).apply();
        if (Build.VERSION.SDK_INT >= 24) stopForeground(true); else stopForeground(true);
        stopSelf();
    }

    @Override public void onDestroy() {
        vigia.removeCallbacks(chequeo);
        boolean paseoVivo = false;
        try { paseoVivo = prefs(this).getBoolean(K_ON, false); } catch (Exception ignored) {}
        // 30-oct: con el paseo vivo NO se toca el candado ni la pantalla. Antes se
        // soltaban aquí y, como el servicio revive enseguida (reinicios 2), el
        // moribundo borraba la bandera que el nuevo acababa de poner: el parte
        // decía "candado NO PUESTO · pantalla suelta" con el paseo corriendo. El
        // candado lo libera el sistema al morir el proceso, no hace falta a mano.
        if (!paseoVivo) soltarFoco(true);
        else { try { if (lm != null) lm.removeUpdates(this); } catch (Exception ignored) {}
               super.onDestroy(); return; }
        try { if (lm != null) lm.removeUpdates(this); } catch (Exception ignored) {}
        super.onDestroy();
    }

    // 30-oct (nota de voz de JJ: "los ceros no se mueven ni caminando, y tengo
    // el GPS prendido y estoy afuera"). BUG MÍO, doble: (1) se sumaba sólo con
    // precisión <= 60 m y saltos > 2 m, así que caminando a 1.4 m/s con lecturas
    // cada segundo el salto (1.4 m) NUNCA pasaba el filtro; (2) se comparaba
    // contra la última lectura de CUALQUIER proveedor, así que un punto de antena
    // (±100 m) envenenaba la comparación. Nuevo método: ANCLA.
    //  - La distancia sólo se suma con lecturas de satélite (provider gps).
    //  - Se guarda un punto ancla; cuando el nuevo punto se aleja del ancla más
    //    que el margen (8 a 40 m, según la precisión real) se suma ESA distancia
    //    y el ancla se mueve. Así el temblor de la señal no acumula metros falsos
    //    y caminar despacio sí cuenta.
    //  - Si la precisión es mala (50-120 m) pero hay velocidad, se suma
    //    velocidad x tiempo como respaldo, para no volver a mostrar ceros.
    // 30-oct (parte real de JJ desde la bici: "0/1 satelites · ANTENA (sin
    // satelites", 0.03 km en 7:30). El telefono NO esta viendo el cielo: sus
    // lecturas son de antena telefonica (±18 m), y la 4.2 solo confiaba en
    // satelites, asi que la bici seguia marcando cero. Ahora hay DOS cadenas
    // de ancla, una por proveedor, y se suma con la que este mandando:
    //  - Si hay satelites, manda la cadena GPS (margen 10-60 m).
    //  - Si no hay satelites hace 30 s, manda la cadena de ANTENA (margen
    //    30-90 m, porque el error de antena es mucho mayor). Mejor un numero
    //    con 10% de error que un cero perfecto.
    //  - Nunca se mezclan las dos cadenas (eso inventaria saltos de 100 m).
    // Tambien se guarda si el GPS del SISTEMA esta encendido, para separar
    // "GPS apagado en el telefono" de "GPS prendido pero sin satelites".
    @Override public void onLocationChanged(Location loc) {
        if (loc == null) return;
        SharedPreferences p = prefs(this);
        if (!p.getBoolean(K_ON,false)) return;

        float acc = loc.hasAccuracy() ? loc.getAccuracy() : 199f;
        boolean esGps = loc.getProvider() != null && loc.getProvider().contains("gps");
        float dist = p.getFloat(K_DIST,0f);
        float max  = p.getFloat(K_MAX,0f);
        int n = p.getInt(K_N,0) + 1;
        boolean sumado = false;
        long ahoraMs = System.currentTimeMillis();

        if (esGps) {
            ultimoGpsT = ahoraMs;
            p.edit().putLong("ultimoGps", ahoraMs).apply();
            anclaRed = null;              // llegó satélite: la cadena de antena se descarta
            prefs(this).edit().putLong("arT", 0L).apply();
        }
        boolean mandaGps = esGps || (ahoraMs - ultimoGpsT) < 30000L;

        if (mandaGps == esGps || !mandaGps) {
            // si el servicio renació, la memoria está vacía pero el ancla sigue viva
            if (esGps && anclaGps == null) anclaGps = leerAncla("ag");
            if (!esGps && anclaRed == null) anclaRed = leerAncla("ar");
            Location ancla = esGps ? anclaGps : anclaRed;
            float margen = esGps ? Math.max(10f, Math.min(acc * 1.5f, 60f))
                                 : Math.max(25f, Math.min(acc, 60f));
            float topeVel = esGps ? 70f : 50f;

            if (ancla == null) {
                ancla = loc;
            } else {
                long dtMs = loc.getTime() - ancla.getTime();
                double dt = dtMs / 1000.0;
                double d = distancia(ancla.getLatitude(), ancla.getLongitude(),
                                     loc.getLatitude(), loc.getLongitude());

                if (dt > 1.0 && dt < 600 && d >= margen && d < 2000) {
                    double vImp = (d / dt) * 3.6;
                    if (vImp <= topeVel) {
                        dist += (float) d;
                        sumado = true;
                        if (vImp > max) max = (float) vImp;
                    }
                    ancla = loc;          // el ancla se mueve aun si el tramo se descartó
                } else if (loc.hasSpeed() && loc.getSpeed() > 0.6f
                           && dt > 1.0 && dt < 60 && acc <= 120f) {
                    float m = (float)(loc.getSpeed() * dt);
                    if (m < 500) {
                        dist += m;
                        sumado = true;
                        float vel = loc.getSpeed() * 3.6f;
                        if (vel <= topeVel && vel > max) max = vel;
                        ancla = loc;
                    }
                }
            }
            if (esGps) { anclaGps = ancla; guardarAncla("ag", ancla); }
            else       { anclaRed = ancla; guardarAncla("ar", ancla); }
        }

        boolean cand = (foco != null && foco.isHeld());
        boolean gpsSistema = true;
        try {
            android.location.LocationManager lm =
                    (android.location.LocationManager) getSystemService(Context.LOCATION_SERVICE);
            gpsSistema = lm != null && lm.isProviderEnabled(android.location.LocationManager.GPS_PROVIDER);
        } catch (Exception ignored) {}

        p.edit().putBoolean(K_CAND,cand).putFloat(K_DIST,dist).putFloat(K_MAX,max).putInt(K_N,n)
         .putInt(K_ACC,Math.round(acc))
         .putString("prov", loc.getProvider() == null ? "?" : loc.getProvider())
         .putBoolean("sumo", sumado)
         .putBoolean("gpsSistema", gpsSistema)
         .putLong(K_ULT,ahoraMs).apply();

        if (ahoraMs - ultimoAviso > 5000) { ultimoAviso = ahoraMs; iniciarForeground(textoNotif(p)); }
    }

    @Override public void onStatusChanged(String s, int i, Bundle b) {}
    @Override public void onProviderEnabled(String s) {}
    @Override public void onProviderDisabled(String s) {}

    static double distancia(double a1,double o1,double a2,double o2){
        double R=6371000, t=Math.PI/180;
        double dLa=(a2-a1)*t, dLo=(o2-o1)*t;
        double x=Math.sin(dLa/2)*Math.sin(dLa/2)+Math.cos(a1*t)*Math.cos(a2*t)*Math.sin(dLo/2)*Math.sin(dLo/2);
        return 2*R*Math.asin(Math.sqrt(x));
    }

    static String textoNotif(SharedPreferences p){
        float km = p.getFloat(K_DIST,0f)/1000f;
        long seg = Math.max(0,(System.currentTimeMillis()-p.getLong(K_START,0))/1000);
        long h=seg/3600, m=(seg%3600)/60, s=seg%60;
        String tiempo = h>0 ? (h+" h "+m+" min") : (m>0 ? (m+" min "+s+" s") : (s+" s"));
        float prom = seg>3 ? Math.min(60f, km/(seg/3600f)) : 0f;
        return String.format("%.2f km · %s · prom %.0f km/h", km, tiempo, prom);
    }

    private void crearCanal(){
        if (Build.VERSION.SDK_INT >= 26) {
            NotificationManager nm = (NotificationManager) getSystemService(Context.NOTIFICATION_SERVICE);
            if (nm != null && nm.getNotificationChannel(CH) == null) {
                NotificationChannel c = new NotificationChannel(CH, "Paseo en bici", NotificationManager.IMPORTANCE_LOW);
                c.setDescription("Cuenta tu paseo aunque apagues la pantalla");
                nm.createNotificationChannel(c);
            }
        }
    }

    private void iniciarForeground(String texto){
        Notification.Builder b = (Build.VERSION.SDK_INT >= 26)
                ? new Notification.Builder(this, CH) : new Notification.Builder(this);
        b.setContentTitle("🚴 Alma Bici").setContentText(texto)
         .setSmallIcon(android.R.drawable.ic_menu_mylocation)
         .setOngoing(true).setOnlyAlertOnce(true);
        startForeground(NOTIF_ID, b.build());
    }
}
