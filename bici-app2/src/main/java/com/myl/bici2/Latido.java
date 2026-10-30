package com.myl.bici2;

import android.app.AlarmManager;
import android.app.PendingIntent;
import android.content.BroadcastReceiver;
import android.content.Context;
import android.content.Intent;
import android.content.SharedPreferences;
import android.os.Build;
import android.os.PowerManager;
import android.os.SystemClock;

/**
 * LATIDO — 30-oct-2026
 * JJ: "se sigue cerrando todavía el GPS, se apaga la pantalla... ¿lo puedes arreglar?"
 *
 * El candado (wake lock) del servicio funciona, pero Samsung congela el proceso
 * completo cuando la pantalla se apaga, y un proceso congelado no ejecuta NI SU
 * PROPIO vigilante (por eso el parte decía "reinicios 0": el contador no avanzaba
 * porque nadie estaba corriendo).
 *
 * Este receptor es independiente del proceso: Android lo despierta a él, no al revés.
 * Cada minuto: toma el CPU por 90 s, le pide al servicio que reenganche el GPS y
 * vuelve a programarse solo. Aunque Samsung congele el proceso, la alarma lo
 * descongela y el paseo sigue contando.
 */
public class Latido extends BroadcastReceiver {

    public static final String ACT_LATIDO = "com.myl.bici.LATIDO";
    static final long CADA_MS = 60 * 1000L;

    @Override public void onReceive(Context ctx, Intent intent) {
        SharedPreferences p = ctx.getSharedPreferences("alma_bici", Context.MODE_PRIVATE);
        boolean enPaseo = p.getBoolean("on", false);

        // cuenta los latidos para que el parte diga si de verdad están llegando
        p.edit().putInt("latidos", p.getInt("latidos", 0) + 1)
                .putLong("latidoT", System.currentTimeMillis()).apply();

        if (!enPaseo) { cancelar(ctx); return; }

        PowerManager.WakeLock foco = null;
        try {
            PowerManager pm = (PowerManager) ctx.getSystemService(Context.POWER_SERVICE);
            if (pm != null) {
                foco = pm.newWakeLock(PowerManager.PARTIAL_WAKE_LOCK, "alma_bici:latido");
                foco.setReferenceCounted(false);
                foco.acquire(90 * 1000L);
            }
        } catch (Exception ignored) {}

        try {
            Intent svc = new Intent(ctx, RideService.class).setAction(ACT_LATIDO);
            if (Build.VERSION.SDK_INT >= 26) ctx.startForegroundService(svc);
            else ctx.startService(svc);
        } catch (Exception ignored) {}

        programar(ctx);

        // suelta el CPU cuando ya se pidió la lectura
        final PowerManager.WakeLock f = foco;
        new Thread(new Runnable() {
            @Override public void run() {
                try { Thread.sleep(20000); } catch (InterruptedException ignored) {}
                try { if (f != null && f.isHeld()) f.release(); } catch (Exception ignored) {}
            }
        }).start();
    }

    static PendingIntent pendiente(Context ctx) {
        Intent i = new Intent(ctx, Latido.class).setAction(ACT_LATIDO);
        int flags = PendingIntent.FLAG_UPDATE_CURRENT;
        if (Build.VERSION.SDK_INT >= 23) flags |= PendingIntent.FLAG_IMMUTABLE;
        return PendingIntent.getBroadcast(ctx, 1501, i, flags);
    }

    static void programar(Context ctx) {
        try {
            AlarmManager am = (AlarmManager) ctx.getSystemService(Context.ALARM_SERVICE);
            if (am == null) return;
            long cuando = SystemClock.elapsedRealtime() + CADA_MS;
            PendingIntent pi = pendiente(ctx);
            try {
                if (Build.VERSION.SDK_INT >= 23) am.setExactAndAllowWhileIdle(AlarmManager.ELAPSED_REALTIME_WAKEUP, cuando, pi);
                else am.setExact(AlarmManager.ELAPSED_REALTIME_WAKEUP, cuando, pi);
            } catch (SecurityException se) {
                // sin permiso de alarmas exactas: la versión tolerante también sirve
                am.setAndAllowWhileIdle(AlarmManager.ELAPSED_REALTIME_WAKEUP, cuando, pi);
            }
        } catch (Exception ignored) {}
    }

    static void cancelar(Context ctx) {
        try {
            AlarmManager am = (AlarmManager) ctx.getSystemService(Context.ALARM_SERVICE);
            if (am != null) am.cancel(pendiente(ctx));
        } catch (Exception ignored) {}
    }
}
