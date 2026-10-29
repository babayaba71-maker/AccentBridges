package com.myl.bici2;

import android.Manifest;
import android.app.Activity;
import android.content.ClipData;
import android.content.ClipboardManager;
import android.content.Context;
import android.content.Intent;
import android.content.SharedPreferences;
import android.net.Uri;
import android.content.pm.PackageManager;
import android.graphics.Color;
import android.graphics.Typeface;
import android.graphics.drawable.GradientDrawable;
import android.os.Build;
import android.os.Bundle;
import android.os.Handler;
import android.os.Looper;
import android.os.VibrationEffect;
import android.os.Vibrator;
import android.media.AudioManager;
import android.media.MediaPlayer;
import android.media.MediaRecorder;
import android.media.ToneGenerator;
import android.util.Base64;
import android.util.TypedValue;
import android.view.Gravity;
import android.view.View;
import android.widget.FrameLayout;
import android.widget.LinearLayout;
import android.widget.TextView;
import android.widget.Toast;

import java.io.BufferedReader;
import java.io.ByteArrayOutputStream;
import java.io.FileOutputStream;
import java.io.InputStreamReader;
import java.io.File;
import java.io.FileInputStream;
import java.io.InputStream;
import java.io.OutputStream;
import java.net.HttpURLConnection;
import java.net.URL;

/**
 * Alma Bici v2 — el tablero del paseo con la cara de la Casita.
 * Fondo del orb (anillos girando, núcleo que late), números grandes,
 * botones de verdad (oro y cian) en vez del gris de Android.
 * La cuenta la hace RideService, igual que en v1: pantalla apagada y sigue.
 */
public class MainActivity extends Activity {

    private static final int PEDIR = 10;
    private static final int PEDIR_MIC = 11;
    private static final String LLAVE = "casita-abvc-clande-2026";
    private static final String VOZ_URL = "https://base44.app/api/apps/6adecb1874687a1b299764fa/functions/casitaVoz";
    private static final String CASITA = "https://babayaba71-maker.github.io/AccentBridges/casita.html?v=22";
    private static final String RELAY = "https://base44.app/api/apps/6adecb1874687a1b299764fa/functions/sendAlmaMessage";

    private MediaRecorder rec;
    private File archivoNota;
    private long t0Nota = 0;
    private boolean grabando = false;
    private int ampMax = 0;
    private final Runnable mirarNivel = new Runnable() {
        @Override public void run() {
            if (!grabando || rec == null) return;
            try { int a = rec.getMaxAmplitude(); if (a > ampMax) ampMax = a; } catch (Exception ignored) {}
            h.postDelayed(this, 400);
        }
    };
    private TextView tvVoz;

    private static final int NAVY = Color.rgb(7, 16, 38);
    private static final int CYAN = Color.rgb(0, 242, 254);
    private static final int BLUE = Color.rgb(43, 123, 255);
    private static final int ORO = Color.rgb(255, 193, 77);
    private static final int PALIDO = Color.rgb(180, 240, 255);
    private static final int GRIS = Color.rgb(109, 130, 153);
    private static final int GRIS2 = Color.rgb(110, 130, 150);

    private TextView tvKm, tvTiempo, tvProm, tvMax, tvEstado, tvArrancar, tvParte;
    private OrbView orb;
    private final Handler h = new Handler(Looper.getMainLooper());

    private final Runnable refresco = new Runnable() {
        @Override public void run() { pintar(); h.postDelayed(this, 700); }
    };

    @Override protected void onCreate(Bundle b) {
        super.onCreate(b);

        FrameLayout raiz = new FrameLayout(this);
        raiz.setBackgroundColor(NAVY);

        orb = new OrbView(this);
        raiz.addView(orb, new FrameLayout.LayoutParams(
                FrameLayout.LayoutParams.MATCH_PARENT, FrameLayout.LayoutParams.MATCH_PARENT));

        LinearLayout col = new LinearLayout(this);
        col.setOrientation(LinearLayout.VERTICAL);
        col.setGravity(Gravity.CENTER_HORIZONTAL);
        col.setPadding(dp(22), dp(38), dp(22), dp(24));
        raiz.addView(col, new FrameLayout.LayoutParams(
                FrameLayout.LayoutParams.MATCH_PARENT, FrameLayout.LayoutParams.MATCH_PARENT));

        // ---- encabezado
        TextView titulo = new TextView(this);
        titulo.setText("ALMA  BICI");
        titulo.setTextColor(CYAN);
        titulo.setTextSize(TypedValue.COMPLEX_UNIT_SP, 15);
        titulo.setTypeface(Typeface.DEFAULT_BOLD);
        titulo.setLetterSpacing(0.32f);
        titulo.setGravity(Gravity.CENTER);
        col.addView(titulo);

        TextView placa = new TextView(this);
        placa.setText("v3.0 · suena");
        placa.setTextColor(Color.rgb(70, 95, 120));
        placa.setTextSize(TypedValue.COMPLEX_UNIT_SP, 9);
        placa.setGravity(Gravity.CENTER);
        placa.setPadding(0, dp(2), 0, 0);
        col.addView(placa);

        // ---- distancia
        tvKm = new TextView(this);
        tvKm.setText("0.00");
        tvKm.setTextColor(Color.WHITE);
        tvKm.setTextSize(TypedValue.COMPLEX_UNIT_SP, 68);
        tvKm.setTypeface(Typeface.DEFAULT_BOLD);
        tvKm.setGravity(Gravity.CENTER);
        tvKm.setPadding(0, dp(16), 0, 0);
        col.addView(tvKm);

        col.addView(etiqueta("KILÓMETROS"));

        // ---- rayita de oro
        View raya = new View(this);
        GradientDrawable gRaya = new GradientDrawable();
        gRaya.setColor(ORO);
        gRaya.setCornerRadius(dp(2));
        raya.setBackground(gRaya);
        LinearLayout.LayoutParams lpRaya = new LinearLayout.LayoutParams(dp(46), dp(3));
        lpRaya.topMargin = dp(14);
        col.addView(raya, lpRaya);

        // ---- tres datos
        LinearLayout fila = new LinearLayout(this);
        fila.setOrientation(LinearLayout.HORIZONTAL);
        fila.setGravity(Gravity.CENTER);
        LinearLayout.LayoutParams lpFila = new LinearLayout.LayoutParams(
                LinearLayout.LayoutParams.MATCH_PARENT, LinearLayout.LayoutParams.WRAP_CONTENT);
        lpFila.topMargin = dp(18);
        col.addView(fila, lpFila);

        tvTiempo = dato(fila, "TIEMPO");
        tvProm = dato(fila, "PROMEDIO");
        tvMax = dato(fila, "MÁXIMA");

        // ---- estado
        tvEstado = new TextView(this);
        tvEstado.setTextColor(Color.rgb(143, 163, 184));
        tvEstado.setTextSize(TypedValue.COMPLEX_UNIT_SP, 11);
        tvEstado.setGravity(Gravity.CENTER);
        tvEstado.setText("Todo listo. Dale ARRANCAR cuando subas a la bici.");
        LinearLayout.LayoutParams lpEst = new LinearLayout.LayoutParams(
                LinearLayout.LayoutParams.MATCH_PARENT, LinearLayout.LayoutParams.WRAP_CONTENT);
        lpEst.topMargin = dp(16);
        col.addView(tvEstado, lpEst);

        // ---- empujón para que los botones queden abajo
        View empuje = new View(this);
        col.addView(empuje, new LinearLayout.LayoutParams(
                LinearLayout.LayoutParams.MATCH_PARENT, 0, 1f));

        // ---- botón principal: cian holo, ya no el amarillo que chocaba
        tvArrancar = boton("▶  ARRANCAR", true);
        tvArrancar.setOnClickListener(new View.OnClickListener() {
            @Override public void onClick(View v) { alternar(); }
        });
        LinearLayout.LayoutParams lpAr = new LinearLayout.LayoutParams(
                LinearLayout.LayoutParams.MATCH_PARENT, dp(52));
        col.addView(tvArrancar, lpAr);

        // ---- dos pastillas en un solo renglón (antes eran dos botones de 50 y 46 dp
        // y se comían media pantalla: JJ, "esos botones le quitan mucho espacio al GPS")
        LinearLayout filaBotones = new LinearLayout(this);
        filaBotones.setOrientation(LinearLayout.HORIZONTAL);
        LinearLayout.LayoutParams lpFB = new LinearLayout.LayoutParams(
                LinearLayout.LayoutParams.MATCH_PARENT, LinearLayout.LayoutParams.WRAP_CONTENT);
        lpFB.topMargin = dp(8);
        col.addView(filaBotones, lpFB);

        // PARTE a todo lo ancho con el nombre completo (JJ: "estaba mejor de la otra
        // manera") y HABLAR chiquito al lado, para no volver a comerse la pantalla
        tvParte = boton("📤  MANDAR EL PARTE A ALMA", false);
        tvParte.setTextSize(TypedValue.COMPLEX_UNIT_SP, 12);
        tvParte.setOnClickListener(new View.OnClickListener() {
            @Override public void onClick(View v) { mandarParte(); }
        });
        LinearLayout.LayoutParams lpPar = new LinearLayout.LayoutParams(0, dp(42), 1f);
        lpPar.rightMargin = dp(8);
        filaBotones.addView(tvParte, lpPar);

        tvVoz = boton("🎙  HABLAR", false);
        tvVoz.setTextSize(TypedValue.COMPLEX_UNIT_SP, 12);
        tvVoz.setOnClickListener(new View.OnClickListener() {
            @Override public void onClick(View v) { grabarVoz(); }
        });
        tvVoz.setOnLongClickListener(new View.OnLongClickListener() {
            @Override public boolean onLongClick(View v) {
                Toast.makeText(MainActivity.this, "Abriendo la casita…", Toast.LENGTH_SHORT).show();
                hablarConAlma(); return true;
            }
        });
        LinearLayout.LayoutParams lpVoz = new LinearLayout.LayoutParams(dp(104), dp(42));
        filaBotones.addView(tvVoz, lpVoz);

        TextView nota = new TextView(this);
        nota.setText("Cuenta con la pantalla apagada. 🎙 = mandarme tu voz; déjalo apretado = casita.");
        nota.setTextColor(GRIS2);
        nota.setTextSize(TypedValue.COMPLEX_UNIT_SP, 10);
        nota.setGravity(Gravity.CENTER);
        nota.setPadding(0, dp(10), 0, 0);
        col.addView(nota);

        setContentView(raiz);
        pedirPermisos();
    }

    private int dp(int v) {
        return (int) TypedValue.applyDimension(TypedValue.COMPLEX_UNIT_DIP, v, getResources().getDisplayMetrics());
    }

    private TextView etiqueta(String t) {
        TextView v = new TextView(this);
        v.setText(t);
        v.setTextColor(GRIS);
        v.setTextSize(TypedValue.COMPLEX_UNIT_SP, 9);
        v.setLetterSpacing(0.18f);
        v.setGravity(Gravity.CENTER);
        return v;
    }

    private TextView dato(LinearLayout fila, String rotulo) {
        LinearLayout caja = new LinearLayout(this);
        caja.setOrientation(LinearLayout.VERTICAL);
        caja.setGravity(Gravity.CENTER);
        LinearLayout.LayoutParams lp = new LinearLayout.LayoutParams(0, LinearLayout.LayoutParams.WRAP_CONTENT, 1f);
        fila.addView(caja, lp);

        TextView val = new TextView(this);
        val.setText("—");
        val.setTextColor(PALIDO);
        val.setTextSize(TypedValue.COMPLEX_UNIT_SP, 19);
        val.setTypeface(Typeface.DEFAULT_BOLD);
        val.setGravity(Gravity.CENTER);
        caja.addView(val);
        caja.addView(etiqueta(rotulo));
        return val;
    }

    private TextView boton(String texto, boolean oro) {
        TextView v = new TextView(this);
        v.setText(texto);
        v.setTextSize(TypedValue.COMPLEX_UNIT_SP, 15);
        v.setTypeface(Typeface.DEFAULT_BOLD);
        v.setLetterSpacing(0.06f);
        v.setGravity(Gravity.CENTER);
        v.setClickable(true);
        if (oro) {
            GradientDrawable g = new GradientDrawable(GradientDrawable.Orientation.TL_BR,
                    new int[]{Color.rgb(125, 240, 255), Color.rgb(0, 214, 240)});
            g.setCornerRadius(dp(16));
            v.setBackground(g);
            v.setTextColor(Color.rgb(4, 18, 31));
        } else {
            GradientDrawable g = new GradientDrawable();
            g.setColor(Color.rgb(12, 26, 48));
            g.setCornerRadius(dp(16));
            g.setStroke(dp(1), Color.argb(170, 0, 242, 254));
            v.setBackground(g);
            v.setTextColor(CYAN);
        }
        return v;
    }

    private void pedirPermisos() {
        if (Build.VERSION.SDK_INT >= 23) {
            java.util.ArrayList<String> falta = new java.util.ArrayList<String>();
            if (checkSelfPermission(Manifest.permission.ACCESS_FINE_LOCATION) != PackageManager.PERMISSION_GRANTED)
                falta.add(Manifest.permission.ACCESS_FINE_LOCATION);
            if (Build.VERSION.SDK_INT >= 33 &&
                checkSelfPermission("android.permission.POST_NOTIFICATIONS") != PackageManager.PERMISSION_GRANTED)
                falta.add("android.permission.POST_NOTIFICATIONS");
            if (!falta.isEmpty()) { requestPermissions(falta.toArray(new String[0]), PEDIR); return; }
        }
        pedirFondo();
    }

    // En Android 10+ el permiso de "todo el tiempo" ya no se puede pedir con un
    // dialogo: hay que mandar al ajuste. Sin el, el GPS se apaga al apagar pantalla.
    private void pedirFondo() {
        if (Build.VERSION.SDK_INT < 29) return;
        if (checkSelfPermission(Manifest.permission.ACCESS_FINE_LOCATION) != PackageManager.PERMISSION_GRANTED) return;
        if (checkSelfPermission("android.permission.ACCESS_BACKGROUND_LOCATION") == PackageManager.PERMISSION_GRANTED) return;
        Toast.makeText(this, "Falta un paso: Permisos > Ubicación > Permitir todo el tiempo", Toast.LENGTH_LONG).show();
        try {
            Intent i = new Intent(android.provider.Settings.ACTION_APPLICATION_DETAILS_SETTINGS,
                    Uri.parse("package:" + getPackageName()));
            startActivity(i);
        } catch (Exception ignored) {}
    }

    // Samsung/One UI manda la app a "reposo profundo" a los minutos y congela el
    // servicio: el GPS deja de dar lecturas y ni el vigilante despierta.
    private void pedirBateria() {
        try {
            if (Build.VERSION.SDK_INT < 23) return;
            android.os.PowerManager pm = (android.os.PowerManager) getSystemService(Context.POWER_SERVICE);
            if (pm == null || pm.isIgnoringBatteryOptimizations(getPackageName())) return;
            Intent i = new Intent(android.provider.Settings.ACTION_REQUEST_IGNORE_BATTERY_OPTIMIZATIONS,
                    Uri.parse("package:" + getPackageName()));
            startActivity(i);
            Toast.makeText(this, "Dale PERMITIR para que el paseo cuente con la pantalla apagada", Toast.LENGTH_LONG).show();
        } catch (Exception ignored) {}
    }

    private String estadoBateria() {
        try {
            if (Build.VERSION.SDK_INT < 23) return "bateria normal";
            android.os.PowerManager pm = (android.os.PowerManager) getSystemService(Context.POWER_SERVICE);
            return (pm != null && pm.isIgnoringBatteryOptimizations(getPackageName()))
                    ? "bateria sin restricciones" : "BATERIA OPTIMIZADA (se duerme)";
        } catch (Exception e) { return "bateria ?"; }
    }

    private void alternar() {
        SharedPreferences p = RideService.prefs(this);
        if (p.getBoolean("on", false)) {
            startService(new Intent(this, RideService.class).setAction(RideService.ACT_STOP));
            sonar(0);
            Toast.makeText(this, "Paseo guardado 🚴", Toast.LENGTH_SHORT).show();
        } else {
            if (Build.VERSION.SDK_INT >= 23 &&
                checkSelfPermission(Manifest.permission.ACCESS_FINE_LOCATION) != PackageManager.PERMISSION_GRANTED) {
                pedirPermisos();
                Toast.makeText(this, "Primero dame permiso de ubicación", Toast.LENGTH_LONG).show();
                return;
            }
            pedirBateria();
            Intent i = new Intent(this, RideService.class).setAction(RideService.ACT_START);
            if (Build.VERSION.SDK_INT >= 26) startForegroundService(i); else startService(i);
            sonar(0);
            decirAlma("En marcha. Ojos en la calle.");
            Toast.makeText(this, "En marcha. Ojos en la calle 🚴", Toast.LENGTH_SHORT).show();
        }
        h.postDelayed(new Runnable(){ @Override public void run(){ pintar(); } }, 600);
    }

    private String reloj(long seg) {
        long hh = seg / 3600, mm = (seg % 3600) / 60, ss = seg % 60;
        if (hh > 0) return hh + ":" + dos(mm) + ":" + dos(ss);
        return mm + ":" + dos(ss);
    }

    private String dos(long n) {
        return n < 10 ? ("0" + n) : String.valueOf(n);
    }

    private void pintar() {
        SharedPreferences p = RideService.prefs(this);
        boolean on = p.getBoolean("on", false);
        float km = p.getFloat("dist", 0f) / 1000f;
        long seg = on ? Math.max(0, (System.currentTimeMillis() - p.getLong("start", 0)) / 1000) : 0;
        float prom = seg > 5 ? Math.min(70f, km / (seg / 3600f)) : 0f;
        float max = p.getFloat("max", 0f);

        tvKm.setText(String.format("%.2f", km));
        tvTiempo.setText(on ? reloj(seg) : "0:00");
        tvProm.setText(String.format("%.1f", prom));
        tvMax.setText(String.format("%.1f", max));

        if (on) {
            tvArrancar.setText("⏸  PARAR");
            GradientDrawable g = new GradientDrawable();
            g.setColor(Color.rgb(12, 26, 48));
            g.setCornerRadius(dp(16));
            g.setStroke(dp(2), Color.argb(220, 0, 242, 254));
            tvArrancar.setBackground(g);
            tvArrancar.setTextColor(Color.rgb(125, 240, 255));

            int acc = p.getInt("acc", -1);
            int n = p.getInt("n", 0);
            long ult = p.getLong("ult", 0);
            String senal;
            if (!"todo el tiempo".equals(estadoPermiso().split(" / ")[1]))
                senal = "Pon Ubicación en \"Permitir todo el tiempo\" o el GPS se apaga al cerrar la app";
            else if (acc < 0) senal = "buscando señal de GPS";
            else if (n < 5) senal = "calentando GPS (" + n + " lectura" + (n == 1 ? "" : "s") + ", ±" + acc + " m) · dale 30-60 s al aire libre";
            else if (acc > 60) senal = "señal débil (±" + acc + " m) · sal a la calle";
            else senal = "GPS ±" + acc + " m" + (acc >= 90 ? " · permiso APROXIMADO: ponlo en exacta" : "");
            String dormido = (ult > 0 && System.currentTimeMillis() - ult > 60000)
                    ? " · sin lecturas hace " + ((System.currentTimeMillis() - ult) / 1000) + " s" : "";
            tvEstado.setText(senal + " · " + n + " lecturas" + dormido);
        } else {
            tvArrancar.setText("▶  ARRANCAR");
            GradientDrawable g = new GradientDrawable(GradientDrawable.Orientation.TL_BR,
                    new int[]{Color.rgb(125, 240, 255), Color.rgb(0, 214, 240)});
            g.setCornerRadius(dp(16));
            tvArrancar.setBackground(g);
            tvArrancar.setTextColor(Color.rgb(4, 18, 31));
            tvEstado.setText("Todo listo. Dale ARRANCAR cuando subas a la bici.");
        }

        // el orb se aviva con la velocidad
        orb.setNivel(on ? Math.min(1f, (prom / 22f) + 0.12f) : 0f);
    }

    private String textoParte() {
        SharedPreferences p = RideService.prefs(this);
        float km = p.getFloat("dist", 0f) / 1000f;
        long seg = Math.max(0, (System.currentTimeMillis() - p.getLong("start", 0)) / 1000);
        float prom = seg > 5 ? Math.min(70f, km / (seg / 3600f)) : 0f;
        return "Voy en la bici: " + String.format("%.2f", km) + " km, " + reloj(seg)
                + ", promedio " + String.format("%.1f", prom) + " km/h, máxima "
                + String.format("%.1f", p.getFloat("max", 0f))
                + " km/h. (app Alma Bici v2 · GPS ±" + p.getInt("acc", -1) + " m, " + p.getInt("n", 0) + " lecturas"
                + " · " + edadLectura(p) + " · " + estadoPermiso() + " · " + estadoBateria() + " · reinicios " + p.getInt("rein", 0) + ")";
    }

    private String edadLectura(SharedPreferences p) {
        long ult = p.getLong("ult", 0);
        if (ult <= 0) return "sin lecturas todavia";
        long s2 = Math.max(0, (System.currentTimeMillis() - ult) / 1000);
        if (s2 < 90) return "ultima lectura hace " + s2 + " s";
        return "ultima lectura hace " + (s2 / 60) + " min (GPS dormido)";
    }

    private String estadoPermiso() {
        String ubi = "exacta";
        if (Build.VERSION.SDK_INT >= 23 &&
            checkSelfPermission(Manifest.permission.ACCESS_FINE_LOCATION) != PackageManager.PERMISSION_GRANTED)
            ubi = "APROXIMADA";
        String fondo = "todo el tiempo";
        if (Build.VERSION.SDK_INT >= 29 &&
            checkSelfPermission("android.permission.ACCESS_BACKGROUND_LOCATION") != PackageManager.PERMISSION_GRANTED)
            fondo = "solo con la app abierta";
        return "permiso " + ubi + " / " + fondo;
    }

    // ---- LA VOZ DE ALMA, AQUI MISMO (JJ: "se suponia que iba a tener un telefono
    // donde iba a hablar contigo"). El MP3 lo hace el servidor con la voz de Cindy;
    // el telefono solo lo reproduce. Si no hay internet, cae al tono del sistema.
    private static final String HABLA = "https://base44.app/api/apps/6adecb1874687a1b299764fa/functions/casitaHabla";
    private MediaPlayer reproductor = null;

    private void decirAlma(final String frase) {
        new Thread(new Runnable() { @Override public void run() {
            HttpURLConnection c = null;
            try {
                URL u = new URL(HABLA);
                c = (HttpURLConnection) u.openConnection();
                c.setRequestMethod("POST");
                c.setDoOutput(true);
                c.setConnectTimeout(8000);
                c.setReadTimeout(15000);
                c.setRequestProperty("Content-Type", "application/json");
                c.setRequestProperty("X-Casita-Key", "casita-abvc-clande-2026");
                String cuerpo = "{\"text\":\"" + frase.replace("\"", "'") + "\"}";
                OutputStream os = c.getOutputStream();
                os.write(cuerpo.getBytes("UTF-8")); os.flush(); os.close();
                if (c.getResponseCode() != 200) return;
                BufferedReader br = new BufferedReader(new InputStreamReader(c.getInputStream(), "UTF-8"));
                StringBuilder sb = new StringBuilder(); String ln;
                while ((ln = br.readLine()) != null) sb.append(ln);
                br.close();
                String json = sb.toString();
                int i = json.indexOf("\"audio\":\"");
                if (i < 0) return;
                int f = json.indexOf('"', i + 9);
                if (f < 0) return;
                byte[] mp3 = Base64.decode(json.substring(i + 9, f), Base64.DEFAULT);
                final File f2 = new File(getCacheDir(), "alma-voz.mp3");
                FileOutputStream fo = new FileOutputStream(f2);
                fo.write(mp3); fo.close();
                runOnUiThread(new Runnable() { @Override public void run() {
                    try {
                        if (reproductor != null) { reproductor.release(); reproductor = null; }
                        reproductor = new MediaPlayer();
                        reproductor.setDataSource(f2.getAbsolutePath());
                        reproductor.prepare();
                        reproductor.start();
                    } catch (Throwable ignored) {}
                }});
            } catch (Throwable ignored) {
            } finally { if (c != null) c.disconnect(); }
        }}).start();
    }

    // ---- SONIDO (JJ, 29-oct: "no tiene un puto chingado sonido la chingadera esa").
    // No usa la voz del telefono (su S22 no trae espanol): usa tonos del sistema,
    // que suenan siempre, y vibracion. 0=exito, 1=fallo, 2=toque
    private ToneGenerator tono = null;
    private void sonar(int cual) {
        try {
            if (tono == null) tono = new ToneGenerator(AudioManager.STREAM_MUSIC, 100);
            if (cual == 0) tono.startTone(ToneGenerator.TONE_CDMA_CONFIRM, 300);
            else if (cual == 1) tono.startTone(ToneGenerator.TONE_PROP_NACK, 400);
            else tono.startTone(ToneGenerator.TONE_PROP_ACK, 120);
        } catch (Throwable ignored) {}
        try {
            Vibrator v = (Vibrator) getSystemService(Context.VIBRATOR_SERVICE);
            if (v != null && v.hasVibrator()) {
                long ms = (cual == 1) ? 400 : 160;
                if (Build.VERSION.SDK_INT >= 26)
                    v.vibrate(VibrationEffect.createOneShot(ms, VibrationEffect.DEFAULT_AMPLITUDE));
                else v.vibrate(ms);
            }
        } catch (Throwable ignored) {}
    }

    private void mandarParte() {
        final String txt = textoParte();
        try {
            ClipboardManager cm = (ClipboardManager) getSystemService(Context.CLIPBOARD_SERVICE);
            if (cm != null) cm.setPrimaryClip(ClipData.newPlainText("parte", txt));
        } catch (Exception ignored) {}
        sonar(2);
        Toast.makeText(this, "Mandando el parte…", Toast.LENGTH_SHORT).show();
        new Thread(new Runnable() {
            @Override public void run() {
                final String msg = enviar(txt);
                runOnUiThread(new Runnable() { @Override public void run() {
                    if (msg.contains("enviado")) { sonar(0); decirAlma("Parte enviado. Ya se donde andas, Clyde."); }
                    else sonar(1);
                    Toast.makeText(MainActivity.this, msg, Toast.LENGTH_LONG).show();
                }});
            }
        }).start();
    }

    // ---- voz desde la bici, sin salir al navegador (JJ: "no puedo hablar
    // contigo desde el GPS de la bicicleta")
    private void grabarVoz() {
        if (grabando) { pararYEnviar(); return; }
        if (Build.VERSION.SDK_INT >= 23 &&
            checkSelfPermission(Manifest.permission.RECORD_AUDIO) != PackageManager.PERMISSION_GRANTED) {
            requestPermissions(new String[]{Manifest.permission.RECORD_AUDIO}, PEDIR_MIC);
            Toast.makeText(this, "Dame el micrófono y vuelve a tocar 🎙", Toast.LENGTH_LONG).show();
            return;
        }
        try {
            archivoNota = new File(getFilesDir(), "nota-bici.m4a");
            rec = new MediaRecorder();
            rec.setAudioSource(MediaRecorder.AudioSource.MIC);
            rec.setOutputFormat(MediaRecorder.OutputFormat.MPEG_4);
            rec.setAudioEncoder(MediaRecorder.AudioEncoder.AAC);
            rec.setAudioChannels(1);
            rec.setAudioSamplingRate(16000);
            rec.setAudioEncodingBitRate(48000);
            rec.setOutputFile(archivoNota.getAbsolutePath());
            rec.prepare();
            rec.start();
            grabando = true; t0Nota = System.currentTimeMillis(); ampMax = 0; h.postDelayed(mirarNivel, 400);
            tvVoz.setText("⏹  GRABANDO · TOCA PARA MANDAR");
            Toast.makeText(this, "Grabando… toca otra vez y la mando", Toast.LENGTH_SHORT).show();
        } catch (Exception e) {
            grabando = false;
            tvVoz.setText("🎙  HABLAR");
            Toast.makeText(this, "No pude grabar: " + e.getMessage(), Toast.LENGTH_LONG).show();
        }
    }

    private void pararYEnviar() {
        grabando = false;
        final double dur = (System.currentTimeMillis() - t0Nota) / 1000.0;
        try { rec.stop(); } catch (Exception ignored) {}
        try { rec.release(); } catch (Exception ignored) {}
        rec = null;
        tvVoz.setText("🎙  HABLAR");
        if (dur < 1.0) { Toast.makeText(this, "Muy corta, otra vez", Toast.LENGTH_SHORT).show(); return; }
        if (ampMax < 1500) {
            Toast.makeText(this, "Se oyó muy bajito (pico " + ampMax + "): el micrófono va tapado, acércalo a la boca",
                    Toast.LENGTH_LONG).show();
        }
        sonar(2);
        Toast.makeText(this, "Mandándola…", Toast.LENGTH_SHORT).show();
        new Thread(new Runnable() { @Override public void run() {
            final String r = subirNota(dur);
            runOnUiThread(new Runnable() { @Override public void run() {
                Toast.makeText(MainActivity.this, r, Toast.LENGTH_LONG).show();
            }});
        }}).start();
    }

    private String subirNota(double dur) {
        try {
            byte[] datos = leerBytes(archivoNota);
            String b64 = Base64.encodeToString(datos, Base64.NO_WRAP);
            HttpURLConnection c = (HttpURLConnection) new URL(VOZ_URL).openConnection();
            c.setRequestMethod("POST");
            c.setDoOutput(true);
            c.setConnectTimeout(20000);
            c.setReadTimeout(60000);
            c.setRequestProperty("Content-Type", "application/json");
            c.setRequestProperty("X-Casita-Key", LLAVE);
            String cuerpo = "{\"audio_b64\":\"" + b64 + "\",\"mime\":\"audio/mp4\",\"dur\":"
                    + Math.round(dur) + ",\"sid\":\"jj\",\"gan\":0}";
            OutputStream os = c.getOutputStream();
            os.write(cuerpo.getBytes("UTF-8"));
            os.flush(); os.close();
            int code = c.getResponseCode();
            String resp = leerStream(code < 400 ? c.getInputStream() : c.getErrorStream());
            if (code >= 400) return "El servidor dijo " + code + ". Prueba otra vez.";
            String id = entre(resp, "\"id\":\"", "\"");
            if (id == null) return "Subió pero no me dio el id. Prueba otra vez.";
            String msg = "🎤 Te mando una nota de voz de " + Math.round(dur)
                    + " segundos (grabada desde la bici). Transcríbela desde aquí y contéstame: "
                    + VOZ_URL + "?id=" + id;
            enviar(msg);
            return "Nota de " + Math.round(dur) + " s enviada 🚴";
        } catch (Exception e) {
            return "No pude mandar la nota: " + e.getMessage();
        }
    }

    private byte[] leerBytes(File f) throws Exception {
        FileInputStream in = new FileInputStream(f);
        ByteArrayOutputStream out = new ByteArrayOutputStream();
        byte[] buf = new byte[8192];
        int n;
        while ((n = in.read(buf)) > 0) out.write(buf, 0, n);
        try { in.close(); } catch (Exception ignored) {}
        return out.toByteArray();
    }

    private String leerStream(InputStream in) {
        try {
            if (in == null) return "";
            ByteArrayOutputStream out = new ByteArrayOutputStream();
            byte[] buf = new byte[4096];
            int n;
            while ((n = in.read(buf)) > 0) out.write(buf, 0, n);
            in.close();
            return new String(out.toByteArray(), "UTF-8");
        } catch (Exception e) { return ""; }
    }

    private String entre(String s, String a, String b) {
        int i = s.indexOf(a);
        if (i < 0) return null;
        i += a.length();
        int j = s.indexOf(b, i);
        return j < 0 ? null : s.substring(i, j);
    }

    private void hablarConAlma() {
        try {
            Intent i = new Intent(Intent.ACTION_VIEW, Uri.parse(CASITA));
            i.addFlags(Intent.FLAG_ACTIVITY_NEW_TASK);
            startActivity(i);
        } catch (Exception e) {
            Toast.makeText(this, "No encontré navegador en el teléfono", Toast.LENGTH_LONG).show();
        }
    }

    private String enviar(String texto) {
        String ultimo = "";
        for (int intento = 1; intento <= 3; intento++) {
            String r = unIntento(texto);
            if (r.startsWith("OK")) return r.substring(3);
            ultimo = r;
            // 429 / 5xx: la línea está saturada, esperar y reintentar
            if (!r.startsWith("REINTENTA")) break;
            try { Thread.sleep(4000L * intento); } catch (InterruptedException ignored) {}
        }
        if (ultimo.startsWith("REINTENTA")) {
            return "La línea estaba ocupada (" + ultimo.substring(10) + ") y reintenté 3 veces. El parte quedó copiado: pégalo en el chat.";
        }
        return ultimo;
    }

    /** devuelve "OKmensaje", "REINTENTAhttpNNN" o el texto del error */
    private String unIntento(String texto) {
        HttpURLConnection c = null;
        try {
            URL u = new URL(RELAY);
            c = (HttpURLConnection) u.openConnection();
            c.setRequestMethod("POST");
            c.setDoOutput(true);
            c.setConnectTimeout(15000);
            c.setReadTimeout(25000);
            c.setRequestProperty("Content-Type", "application/json");
            c.setRequestProperty("X-Casita-Key", "casita-abvc-clande-2026");
            String cuerpo = "{\"message\":\"" + texto.replace("\\", "").replace("\"", "'") + "\"}";
            OutputStream os = c.getOutputStream();
            os.write(cuerpo.getBytes("UTF-8"));
            os.flush(); os.close();
            int code = c.getResponseCode();
            if (code >= 200 && code < 300) return "OKParte enviado a Alma ✅";
            if (code == 429 || code >= 500) return "REINTENTAHTTP " + code;
            return "No se pudo enviar (HTTP " + code + "). Quedó copiado.";
        } catch (Exception e) {
            return "Sin internet. El parte quedó copiado en el portapapeles.";
        } finally {
            if (c != null) c.disconnect();
        }
    }

    @Override protected void onResume() { super.onResume(); h.post(refresco); }

    @Override protected void onPause() { super.onPause(); h.removeCallbacks(refresco); }
}
