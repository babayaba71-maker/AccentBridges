package com.myl.alma;

import android.content.SharedPreferences;
import android.graphics.Bitmap;
import android.graphics.Canvas;
import android.graphics.Color;
import android.graphics.Paint;
import android.graphics.RadialGradient;
import android.graphics.RectF;
import android.graphics.Shader;
import android.os.Handler;
import android.os.Looper;
import android.service.wallpaper.WallpaperService;
import android.view.SurfaceHolder;

import java.util.Random;

/**
 * Alma — Live Wallpaper v0.1.5 "CASITA"
 *
 * Ahora dibuja EXACTAMENTE el orb de la Casita de Alma v2.3, no la silueta vieja:
 *  - halo azul grande (120,200,255 / 43,123,255 / 0,242,254) que late
 *  - 3 anillos girando, cada uno con su arco azul, su arco CIAN y su arco VERDE
 *  - nucleo con bloom pre-renderizado (sin shadowBlur) + degradado blanco->azul
 *  - 70 particulas con sprite de luz propio y puntico blanco al centro
 *  - fondo marino #071026
 *
 * Misma receta que casita.html (R = min(w,h)*0.42, cy = h*0.47, elipse 0.62).
 * Bateria: 30 fps, todo cacheado (shader y sprites se crean UNA vez por tamano),
 * sin sensores, sin internet, se detiene cuando el fondo no se ve.
 */
public class AlmaWallpaperService extends WallpaperService {

    @Override
    public Engine onCreateEngine() {
        return new AlmaEngine();
    }

    private class AlmaEngine extends Engine {

        private static final int NP = 70;

        private final Handler h = new Handler(Looper.getMainLooper());
        private final Paint fondoP = new Paint();
        private final Paint haloP = new Paint(Paint.ANTI_ALIAS_FLAG);
        private final Paint anilloP = new Paint(Paint.ANTI_ALIAS_FLAG);
        private final Paint bmpP = new Paint(Paint.ANTI_ALIAS_FLAG | Paint.FILTER_BITMAP_FLAG);
        private final Paint puntoP = new Paint(Paint.ANTI_ALIAS_FLAG);
        private final RectF ovalo = new RectF();
        private final RectF dst = new RectF();

        private final float[] pa = new float[NP];
        private final float[] pr = new float[NP];
        private final float[] pv = new float[NP];
        private final float[] psz = new float[NP];
        private final float[] pph = new float[NP];

        private Bitmap spriteLuz, nucleoIco;
        private Shader haloShader;
        private float t = 0f;
        private boolean visible = false;
        private int W = 0, H = 0;
        private int fps = 30;

        private final Runnable dibujo = new Runnable() {
            @Override public void run() { pintar(); }
        };

        AlmaEngine() {
            Random r = new Random(24102026L);
            for (int i = 0; i < NP; i++) {
                pa[i] = (float) (r.nextDouble() * Math.PI * 2);
                pr[i] = 0.32f + r.nextFloat() * 0.78f;
                pv[i] = 0.0005f + r.nextFloat() * 0.0015f;
                psz[i] = 1.5f + r.nextFloat() * 2.6f;
                pph[i] = r.nextFloat() * 6.28f;
            }
        }

        private void leerAjustes() {
            SharedPreferences sp = getSharedPreferences("orb", MODE_PRIVATE);
            fps = sp.getInt("fps", 30);
            if (fps < 12 || fps > 60) fps = 30;
        }

        @Override public void onCreate(SurfaceHolder holder) {
            super.onCreate(holder);
            leerAjustes();
        }

        @Override public void onVisibilityChanged(boolean v) {
            visible = v;
            h.removeCallbacks(dibujo);
            if (v) h.post(dibujo);
        }

        @Override public void onSurfaceChanged(SurfaceHolder holder, int format, int width, int height) {
            super.onSurfaceChanged(holder, format, width, height);
            W = width; H = height;
            construir();
            h.removeCallbacks(dibujo);
            if (visible) h.post(dibujo);
        }

        @Override public void onSurfaceDestroyed(SurfaceHolder holder) {
            super.onSurfaceDestroyed(holder);
            visible = false;
            h.removeCallbacks(dibujo);
            if (spriteLuz != null) { spriteLuz.recycle(); spriteLuz = null; }
            if (nucleoIco != null) { nucleoIco.recycle(); nucleoIco = null; }
            haloShader = null;
        }

        private float R() { return Math.min(W, H) * 0.42f; }
        private float Cy() { return H * 0.47f; }

        private void construir() {
            if (W <= 0 || H <= 0) return;
            leerAjustes();

            float cx = W / 2f, cy = Cy(), R = R();

            // halo: un solo shader por tamano; el latido se hace con paint alpha
            haloShader = new RadialGradient(cx, cy, R * 2.1f,
                    new int[]{
                            Color.argb(255, 120, 200, 255),
                            Color.argb(238, 43, 123, 255),
                            Color.argb(150, 0, 242, 254),
                            Color.argb(0, 43, 123, 255)
                    }, new float[]{0f, 0.32f, 0.66f, 1f}, Shader.TileMode.CLAMP);

            spriteLuz = Bitmap.createBitmap(72, 72, Bitmap.Config.ARGB_8888);
            Canvas s1 = new Canvas(spriteLuz);
            Paint p1 = new Paint(Paint.ANTI_ALIAS_FLAG);
            p1.setShader(new RadialGradient(36, 36, 36,
                    new int[]{
                            Color.argb(255, 255, 255, 255),
                            Color.argb(235, 190, 235, 255),
                            Color.argb(140, 0, 242, 254),
                            Color.argb(82, 43, 123, 255),
                            Color.argb(0, 43, 123, 255)
                    }, new float[]{0f, 0.18f, 0.40f, 0.68f, 1f}, Shader.TileMode.CLAMP));
            s1.drawCircle(36, 36, 36, p1);

            nucleoIco = Bitmap.createBitmap(256, 256, Bitmap.Config.ARGB_8888);
            Canvas s2 = new Canvas(nucleoIco);
            Paint p2 = new Paint(Paint.ANTI_ALIAS_FLAG);
            p2.setShader(new RadialGradient(128, 128, 128,
                    new int[]{
                            Color.argb(255, 255, 255, 255),
                            Color.argb(242, 180, 240, 255),
                            Color.argb(170, 43, 123, 255),
                            Color.argb(60, 0, 242, 254),
                            Color.argb(0, 0, 242, 254)
                    }, new float[]{0f, 0.42f, 0.80f, 0.94f, 1f}, Shader.TileMode.CLAMP));
            s2.drawCircle(128, 128, 128, p2);
        }

        private void pintar() {
            SurfaceHolder holder = getSurfaceHolder();
            Canvas c = null;
            try {
                c = holder.lockCanvas();
                if (c != null) {
                    if (c.getWidth() != W || c.getHeight() != H || haloShader == null) {
                        W = c.getWidth(); H = c.getHeight(); construir();
                    }
                    dibujar(c);
                }
            } catch (Exception e) {
                // un frame perdido nunca tumba el fondo
            } finally {
                if (c != null) { try { holder.unlockCanvasAndPost(c); } catch (Exception ignored) { } }
            }
            h.removeCallbacks(dibujo);
            if (visible) h.postDelayed(dibujo, 1000 / Math.max(12, Math.min(60, fps)));
        }

        private void dibujar(Canvas c) {
            float dt = 60f / Math.max(12, Math.min(60, fps));   // frames equivalentes a 60fps
            t += dt;

            float cx = W / 2f, cy = Cy(), R = R();

            // fondo marino de la casita
            fondoP.setStyle(Paint.Style.FILL);
            fondoP.setShader(null);
            fondoP.setColor(Color.rgb(7, 16, 38));
            c.drawRect(0, 0, W, H, fondoP);

            // latido en reposo: .30 + .18*sin(t*.03)  (t en "frames" de 60)
            float pulso = (float) (0.30 + 0.18 * Math.sin(t * 0.03));

            // 1. halo azul grande
            haloP.setStyle(Paint.Style.FILL);
            haloP.setShader(haloShader);
            haloP.setAlpha((int) Math.min(255, (0.10f + pulso * 0.16f) / 0.26f * 255f));
            c.drawCircle(cx, cy, R * 2.1f, haloP);
            haloP.setAlpha(255);

            // 2. tres anillos girando: arco azul largo, arco cian corto, arco verde
            anilloP.setStyle(Paint.Style.STROKE);
            anilloP.setShader(null);
            for (int i = 0; i < 3; i++) {
                float rr = R * (0.55f + i * 0.22f);
                float rot = (float) Math.toDegrees(t * (0.0022f + i * 0.0011f) * ((i % 2 == 0) ? 1 : -1));

                c.save();
                c.rotate(rot, cx, cy);

                anilloP.setStyle(Paint.Style.STROKE);
                anilloP.setColor(Color.argb((int) Math.min(255, (0.22f + pulso * 0.30f) * 255f), 90, 180, 255));
                anilloP.setStrokeWidth(1.4f);
                ovalo.set(cx - rr, cy - rr, cx + rr, cy + rr);
                c.drawArc(ovalo, 0f, (float) (Math.PI * 1.55 * 180 / Math.PI), false, anilloP);

                anilloP.setColor(Color.argb((int) Math.min(255, (0.20f + pulso * 0.35f) * 255f), 0, 242, 254));
                anilloP.setStrokeWidth(2.4f);
                float r2 = rr * 1.02f;
                ovalo.set(cx - r2, cy - r2, cx + r2, cy + r2);
                c.drawArc(ovalo, 27f, 52.2f, false, anilloP);

                anilloP.setColor(Color.argb((int) Math.min(255, (0.10f + pulso * 0.18f) * 255f), 0, 230, 118));
                anilloP.setStrokeWidth(1.6f);
                float r3 = rr * 0.99f;
                ovalo.set(cx - r3, cy - r3, cx + r3, cy + r3);
                c.drawArc(ovalo, 189f, 23.4f, false, anilloP);

                c.restore();
            }
            anilloP.setStyle(Paint.Style.FILL);

            // 3. nucleo con bloom (bitmaps cacheados, nada de gradientes por frame)
            float coreR = R * 0.24f * (1f + pulso * 0.26f);
            float bloom = coreR * 4.6f;
            bmpP.setAlpha(242);
            dst.set(cx - bloom, cy - bloom, cx + bloom, cy + bloom);
            c.drawBitmap(spriteLuz, null, dst, bmpP);

            bmpP.setAlpha((int) Math.min(255, (0.92f + pulso * 0.08f) * 255f));
            float dor = coreR * 1.02f;
            dst.set(cx - dor, cy - dor, cx + dor, cy + dor);
            c.drawBitmap(nucleoIco, null, dst, bmpP);
            bmpP.setAlpha(255);

            // 4. particulas: 70, cada una con su sprite y su puntico blanco
            puntoP.setStyle(Paint.Style.FILL);
            for (int i = 0; i < NP; i++) {
                pa[i] += pv[i] * dt;
                float rr = R * (0.44f + pr[i] * 1.42f);
                float x = cx + (float) Math.cos(pa[i]) * rr;
                float y = cy + (float) Math.sin(pa[i]) * rr * 0.62f;
                float tw = (float) (0.6 + 0.4 * Math.sin(t * 0.05 + pph[i]));
                float al = (0.35f + pulso * 0.55f) * tw;
                float rad = psz[i] * 2.2f * (1f + pulso * 0.55f);

                bmpP.setAlpha((int) Math.min(242, al * 255f));
                dst.set(x - rad, y - rad, x + rad, y + rad);
                c.drawBitmap(spriteLuz, null, dst, bmpP);

                bmpP.setAlpha(255);
                puntoP.setColor(Color.argb((int) Math.min(255, al * 1.6f * 255f), 235, 252, 255));
                c.drawCircle(x, y, Math.max(0.9f, rad * 0.13f), puntoP);
            }
        }
    }
}
