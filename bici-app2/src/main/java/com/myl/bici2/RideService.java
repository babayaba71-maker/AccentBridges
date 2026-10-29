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
import android.os.IBinder;

/**
 * Alma Bici — servicio en primer plano.
 * Cuenta el paseo con la pantalla apagada: Android no duerme un foreground service de ubicación.
 */
public class RideService extends Service implements LocationListener {

    public static final String CH = "alma_bici";
    public static final int NOTIF_ID = 77;
    public static final String ACT_START = "com.myl.bici.START";
    public static final String ACT_STOP  = "com.myl.bici.STOP";

    static final String K_ON="on", K_START="start", K_DIST="dist", K_MAX="max",
                        K_ACC="acc", K_N="n", K_ULT="ult", K_SALTO="salto";

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

        crearCanal();
        iniciarForeground("Arrancando el paseo…");

        if (ACT_START.equals(accion)) {
            SharedPreferences p = prefs(this);
            p.edit().putBoolean(K_ON,true).putLong(K_START,System.currentTimeMillis())
                .putFloat(K_DIST,0f).putFloat(K_MAX,0f).putInt(K_N,0).putFloat(K_SALTO,0f)
                .putInt(K_ACC,-1).putLong(K_ULT,0L).apply();
            ultimo = null;
        }

        empezarGps();
        return START_STICKY;
    }

    private void empezarGps() {
        try {
            lm = (LocationManager) getSystemService(Context.LOCATION_SERVICE);
            if (lm == null) return;
            if (lm.isProviderEnabled(LocationManager.GPS_PROVIDER))
                lm.requestLocationUpdates(LocationManager.GPS_PROVIDER, 2000, 3, this);
            if (lm.isProviderEnabled(LocationManager.NETWORK_PROVIDER))
                lm.requestLocationUpdates(LocationManager.NETWORK_PROVIDER, 3000, 5, this);
        } catch (Exception e) { /* sin permiso o sin proveedor */ }
    }

    private void parar() {
        try { if (lm != null) lm.removeUpdates(this); } catch (Exception ignored) {}
        prefs(this).edit().putBoolean(K_ON,false).apply();
        if (Build.VERSION.SDK_INT >= 24) stopForeground(true); else stopForeground(true);
        stopSelf();
    }

    @Override public void onDestroy() {
        try { if (lm != null) lm.removeUpdates(this); } catch (Exception ignored) {}
        super.onDestroy();
    }

    @Override public void onLocationChanged(Location loc) {
        if (loc == null) return;
        SharedPreferences p = prefs(this);
        if (!p.getBoolean(K_ON,false)) return;

        float acc = loc.hasAccuracy() ? loc.getAccuracy() : 99f;
        float dist = p.getFloat(K_DIST,0f);
        float max = p.getFloat(K_MAX,0f);
        int n = p.getInt(K_N,0) + 1;
        float saltoMax = p.getFloat(K_SALTO,0f);

        if (ultimo != null) {
            long dtMs = loc.getTime() - ultimo.getTime();
            double dt = dtMs / 1000.0;
            double d = distancia(ultimo.getLatitude(), ultimo.getLongitude(), loc.getLatitude(), loc.getLongitude());
            if (d > saltoMax) saltoMax = (float) d;

            float vel = loc.hasSpeed() ? loc.getSpeed() * 3.6f : (dt > 0 ? (float)((d/dt)*3.6) : 0f);
            if (vel > 60f) vel = 60f;
            if (vel > max) max = vel;

            boolean sumado = false;
            if (dt > 0.5 && d < 200 && loc.hasAccuracy() && acc <= 50 && d > 2) {
                double vImp = (d/dt)*3.6;
                if (vImp <= 70) { dist += (float) d; sumado = true; }
            }
            if (!sumado && loc.hasSpeed() && loc.getSpeed() > 0.6f && dt > 0.5 && dt < 30) {
                float m = (float)(loc.getSpeed() * dt);
                if (m < 200) dist += m;
            }
        }
        ultimo = loc;

        p.edit().putFloat(K_DIST,dist).putFloat(K_MAX,max).putInt(K_N,n)
         .putFloat(K_SALTO,saltoMax).putInt(K_ACC,Math.round(acc))
         .putLong(K_ULT,System.currentTimeMillis()).apply();

        long ahora = System.currentTimeMillis();
        if (ahora - ultimoAviso > 5000) { ultimoAviso = ahora; iniciarForeground(textoNotif(p)); }
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
