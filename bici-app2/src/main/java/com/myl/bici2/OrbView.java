package com.myl.bici2;

import android.content.Context;
import android.graphics.Canvas;
import android.graphics.Color;
import android.graphics.Paint;
import android.graphics.RadialGradient;
import android.graphics.Shader;
import android.view.View;

/**
 * El orb de la Casita, dibujado en el fondo del tablero.
 * Anillos girando, núcleo que late y se aviva cuando la bici se mueve.
 * Sin sombras por frame ni capas caras: solo degradados cacheados y arcos.
 */
public class OrbView extends View {

    private final Paint pFondo = new Paint(Paint.ANTI_ALIAS_FLAG);
    private final Paint pHalo = new Paint(Paint.ANTI_ALIAS_FLAG);
    private final Paint pAnillo = new Paint(Paint.ANTI_ALIAS_FLAG);
    private final Paint pNucleo = new Paint(Paint.ANTI_ALIAS_FLAG);

    private Shader shFondo, shHalo, shNucleo;
    private int w, h, cx, cy, R;
    private long t0 = System.currentTimeMillis();
    private float nivel = 0f;        // 0..1, qué tan viva va la bici
    private float nivelSuave = 0f;

    private boolean vivo = true;

    public OrbView(Context c) {
        super(c);
        setClickable(false);
        setFocusable(false);
        pAnillo.setStyle(Paint.Style.STROKE);
        pAnillo.setStrokeCap(Paint.Cap.BUTT);
    }

    public void setNivel(float n) {
        if (n < 0f) n = 0f;
        if (n > 1f) n = 1f;
        nivel = n;
    }

    @Override protected void onSizeChanged(int nw, int nh, int ow, int oh) {
        w = nw; h = nh;
        cx = w / 2;
        cy = (int) (h * 0.44f);
        R = (int) (Math.min(w, h) * 0.44f);
        if (R < 1) R = 1;

        shFondo = new RadialGradient(cx, cy, R * 2.4f,
                new int[]{Color.rgb(11, 26, 51), Color.rgb(7, 16, 38), Color.rgb(4, 7, 15)},
                new float[]{0f, 0.55f, 1f}, Shader.TileMode.CLAMP);
        pFondo.setShader(shFondo);

        shHalo = new RadialGradient(cx, cy, R * 1.15f,
                new int[]{Color.argb(90, 43, 123, 255), Color.argb(38, 0, 242, 254), Color.argb(0, 7, 16, 38)},
                new float[]{0f, 0.55f, 1f}, Shader.TileMode.CLAMP);
        pHalo.setShader(shHalo);

        shNucleo = new RadialGradient(cx, cy, R * 0.55f,
                new int[]{Color.argb(255, 235, 253, 255), Color.argb(215, 0, 242, 254), Color.argb(70, 43, 123, 255), Color.argb(0, 7, 16, 38)},
                new float[]{0f, 0.28f, 0.62f, 1f}, Shader.TileMode.CLAMP);
        pNucleo.setShader(shNucleo);
        pNucleo.setStyle(Paint.Style.FILL);
    }

    @Override protected void onDraw(Canvas c) {
        if (w == 0 || shFondo == null) return;
        float t = (System.currentTimeMillis() - t0) / 1000f;
        nivelSuave += (nivel - nivelSuave) * 0.10f;

        // fondo
        c.drawRect(0, 0, w, h, pFondo);

        // halo que respira
        float haloTam = 1f + (float) (0.03f * Math.sin(t * 0.9f)) + nivelSuave * 0.14f;
        c.save();
        c.scale(haloTam, haloTam, cx, cy);
        c.drawCircle(cx, cy, R * 1.05f, pHalo);
        c.restore();

        // anillos
        pAnillo.setStrokeWidth(Math.max(2f, R * 0.008f));
        float r1 = R * (1f + nivelSuave * 0.05f);
        pAnillo.setColor(Color.argb(140, 43, 123, 255));
        c.drawArc(cx - r1, cy - r1, cx + r1, cy + r1, t * 20f, 279f, false, pAnillo);

        float r2 = R * 0.76f;
        pAnillo.setStrokeWidth(Math.max(2f, R * 0.012f));
        pAnillo.setColor(Color.argb(225, 0, 242, 254));
        c.drawArc(cx - r2, cy - r2, cx + r2, cy + r2, -t * 34f, 62f, false, pAnillo);

        float r3 = R * 0.58f;
        pAnillo.setStrokeWidth(Math.max(1.5f, R * 0.006f));
        pAnillo.setColor(Color.argb(120, 255, 193, 77));
        c.drawArc(cx - r3, cy - r3, cx + r3, cy + r3, t * 12f + 180f, 118f, false, pAnillo);

        // núcleo latiendo
        float pulso = 0.30f + (float) (0.18f * Math.sin(t * 1.1f));
        float core = R * 0.26f * (1f + pulso * 0.26f) * (1f + nivelSuave * 0.22f);
        c.save();
        c.scale(core / (R * 0.26f), core / (R * 0.26f), cx, cy);
        c.drawCircle(cx, cy, R * 0.55f, pNucleo);
        c.restore();

        if (vivo) postInvalidateDelayed(40);
    }

    @Override protected void onWindowVisibilityChanged(int v) {
        super.onWindowVisibilityChanged(v);
        vivo = (v == VISIBLE);
        if (vivo) { t0 = System.currentTimeMillis(); postInvalidate(); }
    }

    @Override protected void onAttachedToWindow() {
        super.onAttachedToWindow();
        vivo = true;
        postInvalidate();
    }

    @Override protected void onDetachedFromWindow() {
        vivo = false;
        super.onDetachedFromWindow();
    }
}
