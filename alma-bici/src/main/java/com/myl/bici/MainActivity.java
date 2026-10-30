package com.myl.bici;

import android.Manifest;
import android.app.Activity;
import android.content.ClipData;
import android.content.ClipboardManager;
import android.content.Context;
import android.content.Intent;
import android.content.SharedPreferences;
import android.content.pm.PackageManager;
import android.graphics.Color;
import android.os.Build;
import android.os.Bundle;
import android.os.Handler;
import android.os.Looper;
import android.view.Gravity;
import android.view.View;
import android.widget.Button;
import android.widget.LinearLayout;
import android.widget.TextView;
import android.widget.Toast;

import java.io.OutputStream;
import java.net.HttpURLConnection;
import java.net.URL;

/**
 * Alma Bici — tablero del paseo. Corre en primer plano, cuenta con la pantalla apagada
 * y manda el parte directo al chat de Alma por el relé de la casita.
 */
public class MainActivity extends Activity {

    private static final int PEDIR = 10;
    private static final String RELAY = "https://base44.app/api/apps/6adecb1874687a1b299764fa/functions/sendAlmaMessage";

    private TextView tvKm, tvTiempo, tvProm, tvMax, tvEstado;
    private Button btnIniciar, btnParte;
    private final Handler h = new Handler(Looper.getMainLooper());

    private final Runnable refresco = new Runnable() {
        @Override public void run() { pintar(); h.postDelayed(this, 800); }
    };

    @Override protected void onCreate(Bundle b) {
        super.onCreate(b);

        LinearLayout raiz = new LinearLayout(this);
        raiz.setOrientation(LinearLayout.VERTICAL);
        raiz.setBackgroundColor(Color.rgb(7, 16, 38));
        raiz.setPadding(40, 60, 40, 40);
        raiz.setGravity(Gravity.CENTER_HORIZONTAL);

        TextView titulo = new TextView(this);
        titulo.setText("🚴 ALMA BICI");
        titulo.setTextColor(Color.rgb(0, 242, 254));
        titulo.setTextSize(20);
        titulo.setGravity(Gravity.CENTER);
        raiz.addView(titulo);

        tvKm = numero("0.00", 72, Color.WHITE);
        raiz.addView(tvKm);
        raiz.addView(etiqueta("KILÓMETROS"));
        tvTiempo = numero("0 min", 30, Color.rgb(255, 193, 77));
        raiz.addView(tvTiempo);
        raiz.addView(etiqueta("TIEMPO"));
        tvProm = numero("0 km/h", 26, Color.rgb(180, 240, 255));
        raiz.addView(tvProm);
        raiz.addView(etiqueta("PROMEDIO"));
        tvMax = numero("0 km/h", 26, Color.rgb(180, 240, 255));
        raiz.addView(tvMax);
        raiz.addView(etiqueta("MÁXIMA"));

        tvEstado = new TextView(this);
        tvEstado.setTextColor(Color.rgb(143, 163, 184));
        tvEstado.setTextSize(13);
        tvEstado.setGravity(Gravity.CENTER);
        tvEstado.setPadding(0, 20, 0, 30);
        tvEstado.setText("Todo listo. Dale ARRANCAR cuando subas a la bici.");
        raiz.addView(tvEstado);

        btnIniciar = new Button(this);
        btnIniciar.setText("▶ ARRANCAR");
        btnIniciar.setTextSize(18);
        btnIniciar.setBackgroundColor(Color.rgb(255, 193, 77));
        btnIniciar.setTextColor(Color.rgb(18, 26, 33));
        btnIniciar.setOnClickListener(new View.OnClickListener() {
            @Override public void onClick(View v) { alternar(); }
        });
        raiz.addView(btnIniciar, new LinearLayout.LayoutParams(
                LinearLayout.LayoutParams.MATCH_PARENT, 160));

        btnParte = new Button(this);
        btnParte.setText("📤 Mandar el parte a Alma");
        btnParte.setTextSize(16);
        btnParte.setBackgroundColor(Color.rgb(20, 40, 70));
        btnParte.setTextColor(Color.rgb(0, 242, 254));
        btnParte.setOnClickListener(new View.OnClickListener() {
            @Override public void onClick(View v) { mandarParte(); }
        });
        LinearLayout.LayoutParams lp = new LinearLayout.LayoutParams(
                LinearLayout.LayoutParams.MATCH_PARENT, 130);
        lp.topMargin = 20;
        raiz.addView(btnParte, lp);

        TextView nota = new TextView(this);
        nota.setText("Cuenta con la pantalla apagada. Al terminar, toca PARAR.");
        nota.setTextColor(Color.rgb(110, 130, 150));
        nota.setTextSize(12);
        nota.setGravity(Gravity.CENTER);
        nota.setPadding(0, 30, 0, 0);
        raiz.addView(nota);

        setContentView(raiz);
        pedirPermisos();
    }

    private TextView numero(String t, int tam, int color) {
        TextView v = new TextView(this);
        v.setText(t); v.setTextSize(tam); v.setTextColor(color);
        v.setGravity(Gravity.CENTER);
        v.setPadding(0, 14, 0, 0);
        return v;
    }

    private TextView etiqueta(String t) {
        TextView v = new TextView(this);
        v.setText(t); v.setTextSize(11); v.setTextColor(Color.rgb(120, 140, 165));
        v.setGravity(Gravity.CENTER);
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
            if (!falta.isEmpty()) requestPermissions(falta.toArray(new String[0]), PEDIR);
        }
    }

    private void alternar() {
        SharedPreferences p = RideService.prefs(this);
        if (p.getBoolean("on", false)) {
            Intent i = new Intent(this, RideService.class).setAction(RideService.ACT_STOP);
            startService(i);
            Toast.makeText(this, "Paseo guardado 🚴", Toast.LENGTH_SHORT).show();
        } else {
            if (Build.VERSION.SDK_INT >= 23 &&
                checkSelfPermission(Manifest.permission.ACCESS_FINE_LOCATION) != PackageManager.PERMISSION_GRANTED) {
                pedirPermisos();
                Toast.makeText(this, "Primero dame permiso de ubicación", Toast.LENGTH_LONG).show();
                return;
            }
            Intent i = new Intent(this, RideService.class).setAction(RideService.ACT_START);
            if (Build.VERSION.SDK_INT >= 26) startForegroundService(i); else startService(i);
            Toast.makeText(this, "En marcha. Ojos en la calle 🚴", Toast.LENGTH_SHORT).show();
        }
        h.postDelayed(new Runnable(){ @Override public void run(){ pintar(); } }, 600);
    }

    private void pintar() {
        SharedPreferences p = RideService.prefs(this);
        boolean on = p.getBoolean("on", false);
        float km = p.getFloat("dist", 0f) / 1000f;
        long seg = on ? Math.max(0, (System.currentTimeMillis() - p.getLong("start", 0)) / 1000) : 0;
        long hh = seg / 3600, mm = (seg % 3600) / 60, ss = seg % 60;
        String tiempo = hh > 0 ? (hh + " h " + mm + " min") : (mm > 0 ? (mm + " min") : (ss + " s"));
        float prom = seg > 3 ? Math.min(60f, km / (seg / 3600f)) : 0f;

        tvKm.setText(String.format("%.2f", km));
        tvTiempo.setText(on ? tiempo : "—");
        tvProm.setText(String.format("%.0f km/h", prom));
        tvMax.setText(String.format("%.0f km/h", p.getFloat("max", 0f)));

        btnIniciar.setText(on ? "⏸ PARAR" : "▶ ARRANCAR");
        btnIniciar.setBackgroundColor(on ? Color.rgb(20, 40, 70) : Color.rgb(255, 193, 77));
        btnIniciar.setTextColor(on ? Color.rgb(255, 193, 77) : Color.rgb(18, 26, 33));

        if (on) {
            int acc = p.getInt("acc", -1);
            int n = p.getInt("n", 0);
            long ult = p.getLong("ult", 0);
            String señal = acc < 0 ? "buscando señal" : ("GPS ±" + acc + " m");
            String dormido = (ult > 0 && System.currentTimeMillis() - ult > 60000)
                    ? " · sin lecturas hace " + ((System.currentTimeMillis() - ult) / 1000) + " s" : "";
            tvEstado.setText(señal + " · " + n + " lecturas" + dormido);
        } else {
            tvEstado.setText("Todo listo. Dale ARRANCAR cuando subas a la bici.");
        }
    }

    private String textoParte() {
        SharedPreferences p = RideService.prefs(this);
        float km = p.getFloat("dist", 0f) / 1000f;
        long seg = Math.max(0, (System.currentTimeMillis() - p.getLong("start", 0)) / 1000);
        long hh = seg / 3600, mm = (seg % 3600) / 60;
        String tiempo = hh > 0 ? (hh + " h " + mm + " min") : (mm > 0 ? (mm + " min") : (seg + " s"));
        float prom = seg > 3 ? Math.min(60f, km / (seg / 3600f)) : 0f;
        return "Voy en la bici: " + String.format("%.2f", km) + " km, " + tiempo
                + ", promedio " + Math.round(prom) + " km/h, máxima " + Math.round(p.getFloat("max", 0f))
                + " km/h. (app Alma Bici · GPS ±" + p.getInt("acc", -1) + " m, " + p.getInt("n", 0) + " lecturas)";
    }

    private void mandarParte() {
        final String txt = textoParte();
        try {
            ClipboardManager cm = (ClipboardManager) getSystemService(Context.CLIPBOARD_SERVICE);
            if (cm != null) cm.setPrimaryClip(ClipData.newPlainText("parte", txt));
        } catch (Exception ignored) {}
        Toast.makeText(this, "Mandando el parte…", Toast.LENGTH_SHORT).show();

        new Thread(new Runnable() {
            @Override public void run() {
                String res = enviar(txt);
                final String msg = res;
                runOnUiThread(new Runnable() { @Override public void run() {
                    Toast.makeText(MainActivity.this, msg, Toast.LENGTH_LONG).show();
                }});
            }
        }).start();
    }

    private String enviar(String texto) {
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
            return code >= 200 && code < 300 ? "Parte enviado a Alma ✅" : "No se pudo enviar (HTTP " + code + "). Quedó copiado.";
        } catch (Exception e) {
            return "Sin internet. El parte quedó copiado en el portapapeles.";
        } finally {
            if (c != null) c.disconnect();
        }
    }

    @Override protected void onResume() { super.onResume(); h.post(refresco); }

    @Override protected void onPause() { super.onPause(); h.removeCallbacks(refresco); }
}
