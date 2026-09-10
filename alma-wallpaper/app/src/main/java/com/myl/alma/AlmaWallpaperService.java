package com.myl.alma;

import android.graphics.Canvas;
import android.graphics.Color;
import android.graphics.Paint;
import android.graphics.RadialGradient;
import android.graphics.Shader;
import android.os.Handler;
import android.os.Looper;
import android.service.wallpaper.WallpaperService;
import android.view.SurfaceHolder;

/**
 * Alma — Hologram Live Wallpaper v0.1.0
 * Myl AccentBridges — orbe respirando + partículas + materialización cíclica.
 * Optimizado batería: ~30fps y se detiene cuando el wallpaper no es visible.
 */
public class AlmaWallpaperService extends WallpaperService {

    @Override
    public Engine onCreateEngine() {
        return new AlmaEngine();
    }

    private class AlmaEngine extends Engine {

        private static final int N = 110;              // partículas
        private static final long FRAME_MS = 33L;      // ~30 fps
        private static final long CYCLE_MS = 60000L;  // ciclo completo 60s
        private static final long MAT_AT = 45000L;    // materializa a los 45s
        private static final long MAT_DUR = 3000L;    // materialización 3s
        private static final long DEMAT_DUR = 3000L;  // desvanecimiento 3s

        private final Handler handler = new Handler(Looper.getMainLooper());
        private final Runnable drawRunner = new Runnable() {
            @Override public void run() { draw(); }
        };

        private final Paint orbPaint = new Paint(Paint.ANTI_ALIAS_FLAG);
        private final Paint pPaint = new Paint(Paint.ANTI_ALIAS_FLAG);

        private final float[] ang = new float[N];
        private final float[] spd = new float[N];
        private final float[] rad = new float[N];
        private final float[] siz = new float[N];
        private final float[] ph = new float[N];
        private final boolean[] gold = new boolean[N];
        private final float[] tu = new float[N];
        private final float[] tv = new float[N];
        private final float[] px = new float[N];
        private final float[] py = new float[N];

        private long start = System.currentTimeMillis();
        private boolean visible = false;
        private int w = 0, h = 0;

        private void init() {
            for (int i = 0; i < N; i++) {
                ang[i] = (float) (Math.random() * Math.PI * 2);
                spd[i] = (float) (0.04 + Math.random() * 0.14) * (Math.random() < .5 ? 1 : -1);
                rad[i] = (float) (0.18 + Math.random() * 0.45);
                siz[i] = (float) (0.8 + Math.random() * 1.8);
                ph[i] = (float) (Math.random() * Math.PI * 2);
                gold[i] = Math.random() < 0.12;
                // objetivos de silueta: cabello largo lacio (raya al medio)
                // cayendo sobre los hombros + óvalo de cara + cuello alto recto
                // (turtleneck). Referencia: foto enviada por JJ 10-sep-2026.
                float bucket = (float) Math.random();
                if (bucket < 0.35f) {
                    // óvalo de cara/cabello (volumen principal)
                    float a = (float) (Math.random() * Math.PI * 2);
                    float rr2 = (float) Math.sqrt(Math.random());
                    tu[i] = 0.5f + 0.16f * rr2 * (float) Math.cos(a);
                    tv[i] = 0.27f + 0.20f * rr2 * (float) Math.sin(a);
                } else if (bucket < 0.65f) {
                    // mechones largos cayendo sobre los hombros (izq/der)
                    boolean left = Math.random() < .5;
                    float a = (float) (Math.random() * Math.PI * 2);
                    float rr2 = (float) Math.sqrt(Math.random());
                    float cu = left ? 0.30f : 0.70f;
                    tu[i] = cu + 0.075f * rr2 * (float) Math.cos(a);
                    tv[i] = 0.45f + 0.30f * rr2 * (float) Math.sin(a);
                } else {
                    // hombros / cuello de tortuga — poco ensanche, líneas rectas
                    float yy = 0.55f + (float) Math.random() * 0.40f;
                    float half = 0.16f + (yy - 0.55f) * 0.28f;
                    boolean left = Math.random() < .5;
                    tu[i] = 0.5f + (left ? -half : half);
                    tv[i] = yy;
                }
                px[i] = -1f;
            }
        }

        @Override
        public void onVisibilityChanged(boolean v) {
            visible = v;
            handler.removeCallbacks(drawRunner);
            if (v) handler.post(drawRunner);
        }

        @Override
        public void onSurfaceChanged(SurfaceHolder holder, int format, int width, int height) {
            super.onSurfaceChanged(holder, format, width, height);
            w = width;
            h = height;
            init();
        }

        @Override
        public void onSurfaceDestroyed(SurfaceHolder holder) {
            super.onSurfaceDestroyed(holder);
            visible = false;
            handler.removeCallbacks(drawRunner);
        }

        private void draw() {
            SurfaceHolder holder = getSurfaceHolder();
            Canvas c = null;
            try {
                c = holder.lockCanvas();
                if (c != null && w > 0 && h > 0) drawFrame(c);
            } finally {
                if (c != null) holder.unlockCanvasAndPost(c);
            }
            handler.removeCallbacks(drawRunner);
            if (visible) handler.postDelayed(drawRunner, FRAME_MS);
        }

        private void drawFrame(Canvas c) {
            float t = (System.currentTimeMillis() - start) / 1000f;
            float cx = w / 2f, cy = h / 2f;
            float m = Math.min(w, h);

            // fondo espacio profundo
            c.drawColor(Color.rgb(2, 6, 23));

            long phase = (System.currentTimeMillis() - start) % CYCLE_MS;
            int mode;             // 0 pasivo, 1 materializando, 2 activo, 3 desvaneciendo
            float k = 0f;
            if (phase < MAT_AT) {
                mode = 0;
            } else if (phase < MAT_AT + MAT_DUR) {
                mode = 1;
                k = (phase - MAT_AT) / (float) MAT_DUR;
                k = k < .5f ? 2 * k * k : 1f - (float) Math.pow(-2 * k + 2, 2) / 2f;
            } else if (phase < CYCLE_MS - DEMAT_DUR) {
                mode = 2;
            } else {
                mode = 3;
                k = (phase - (CYCLE_MS - DEMAT_DUR)) / (float) DEMAT_DUR;
                k = k < .5f ? 2 * k * k : 1f - (float) Math.pow(-2 * k + 2, 2) / 2f;
            }

            float breath = 1f + 0.06f * (float) Math.sin(t * 1.05f);
            float boost = (mode == 1) ? 1f + k * 0.4f : 1f;
            float orbR = m * 0.085f * breath * boost;

            // orbe respirando
            orbPaint.setShader(new RadialGradient(cx, cy, orbR * 2.2f,
                    new int[]{Color.argb(242, 204, 251, 241), Color.argb(140, 45, 212, 191),
                              Color.argb(56, 14, 116, 144), Color.argb(0, 2, 6, 23)},
                    new float[]{0f, 0.25f, 0.60f, 1f}, Shader.TileMode.CLAMP));
            c.drawCircle(cx, cy, orbR * 2.2f, orbPaint);
            orbPaint.setShader(null);

            // partículas
            for (int i = 0; i < N; i++) {
                float x, y;
                // punto de órbita pasiva
                ang[i] += spd[i] * 0.066f;
                float rr = rad[i] * m * (0.92f + 0.08f * (float) Math.sin(t * 0.4f + ph[i]));
                float ox = cx + (float) Math.cos(ang[i]) * rr;
                float oy = cy + (float) Math.sin(ang[i]) * rr * 0.92f;

                if (mode == 0) {
                    x = ox;
                    y = oy;
                } else {
                    float gx = cx + (tu[i] - 0.5f) * m * 0.85f;
                    float gy = cy + (tv[i] - 0.5f) * m * 1.15f;
                    if (mode == 1) {
                        float jig = (1f - k) * 26f;
                        float tx = gx + (float) Math.sin(t * 3f + ph[i]) * jig;
                        float ty = gy + (float) Math.cos(t * 3f + ph[i]) * jig;
                        if (px[i] < 0f) { px[i] = ox; py[i] = oy; }
                        px[i] += (tx - px[i]) * 0.15f;
                        py[i] += (ty - py[i]) * 0.15f;
                    } else if (mode == 2) {
                        float tx = gx + (float) Math.sin(t * 1.4f + ph[i]) * 2.2f;
                        float ty = gy + (float) Math.cos(t * 1.1f + ph[i]) * 2.2f;
                        if (px[i] < 0f) { px[i] = gx; py[i] = gy; }
                        px[i] += (tx - px[i]) * 0.2f;
                        py[i] += (ty - py[i]) * 0.2f;
                    } else {
                        // desvaneciendo: regreso suave a la órbita
                        float tx = ox;
                        float ty = oy;
                        if (px[i] < 0f) { px[i] = gx; py[i] = gy; }
                        px[i] += (tx - px[i]) * (0.06f + 0.1f * k);
                        py[i] += (ty - py[i]) * (0.06f + 0.1f * k);
                    }
                    x = px[i];
                    y = py[i];
                }

                float tw = 0.55f + 0.45f * (float) Math.sin(t * 2.2f + ph[i]);
                int a = (int) (160 * tw);
                pPaint.setColor(gold[i]
                        ? Color.argb(a, 255, 215, 0)
                        : Color.argb(a, 103, 232, 249));
                float size = siz[i] * ((mode == 2) ? 1.15f : 1f);
                c.drawCircle(x, y, size, pPaint);
            }
        }
    }
}
