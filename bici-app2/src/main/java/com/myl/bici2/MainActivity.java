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
import android.util.TypedValue;
import android.view.Gravity;
import android.view.View;
import android.widget.FrameLayout;
import android.widget.LinearLayout;
import android.widget.TextView;
import android.widget.Toast;

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
    private static final String CASITA = "https://babayaba71-maker.github.io/AccentBridges/casita.html?v=19";
    private static final String RELAY = "https://base44.app/api/apps/6adecb1874687a1b299764fa/functions/sendAlmaMessage";

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
        placa.setText("v2.3 · holo");
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

        TextView tvVoz = boton("🎙  HABLAR", false);
        tvVoz.setTextSize(TypedValue.COMPLEX_UNIT_SP, 12);
        tvVoz.setOnClickListener(new View.OnClickListener() {
            @Override public void onClick(View v) { hablarConAlma(); }
        });
        LinearLayout.LayoutParams lpVoz = new LinearLayout.LayoutParams(dp(104), dp(42));
        filaBotones.addView(tvVoz, lpVoz);

        TextView nota = new TextView(this);
        nota.setText("Cuenta con la pantalla apagada. Al terminar, toca PARAR.");
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
            if (!falta.isEmpty()) requestPermissions(falta.toArray(new String[0]), PEDIR);
        }
    }

    private void alternar() {
        SharedPreferences p = RideService.prefs(this);
        if (p.getBoolean("on", false)) {
            startService(new Intent(this, RideService.class).setAction(RideService.ACT_STOP));
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
            if (acc < 0) senal = "buscando señal de GPS";
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
                + " km/h. (app Alma Bici v2 · GPS ±" + p.getInt("acc", -1) + " m, " + p.getInt("n", 0) + " lecturas)";
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
                final String msg = enviar(txt);
                runOnUiThread(new Runnable() { @Override public void run() {
                    Toast.makeText(MainActivity.this, msg, Toast.LENGTH_LONG).show();
                }});
            }
        }).start();
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
