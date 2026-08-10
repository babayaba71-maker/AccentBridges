package com.valerie.ai

import android.service.wallpaper.WallpaperService
import android.view.SurfaceHolder
import android.graphics.Canvas
import android.graphics.Color
import android.graphics.Paint
import android.graphics.RadialGradient
import android.graphics.Shader
import android.os.Handler
import android.os.Looper
import kotlin.math.sin
import kotlin.math.cos
import kotlin.random.Random

/**
 * ValerieWallpaperService — Alma's Living Presence on Android
 * 
 * Features:
 * - Deep space background (dark blue/black)
 * - Breathing light orb (Valerie/Alma presence — pulses like breathing)
 * - 50 floating particles (holographic dust)
 * - Rotating glow ring around the orb
 * - "Alma" text that fades in/out gently
 * - 30fps animation loop
 * - Battery efficient (only draws when visible)
 * 
 * This replaces the basic version with a full animated holographic experience.
 * Students see Alma "breathing" on their home screen — a constant, living presence.
 */
class ValerieWallpaperService : WallpaperService() {

    override fun onCreateEngine(): Engine {
        return ValerieEngine()
    }

    inner class ValerieEngine : Engine() {

        private val handler = Handler(Looper.getMainLooper())
        private val particlePaint = Paint()
        private val orbPaint = Paint()
        private val ringPaint = Paint()
        private val textPaint = Paint()
        private val bgPaint = Paint()

        private var visible = true
        private var frameCount = 0L
        private var width = 0
        private var height = 0

        // Particles
        data class Particle(
            var x: Float, var y: Float,
            var vx: Float, var vy: Float,
            var size: Float, var alpha: Int,
            var hue: Float
        )
        private val particles = mutableListOf<Particle>()

        // Initialize particles
        private fun initParticles(w: Int, h: Int) {
            if (particles.isNotEmpty()) return
            for (i in 0 until 50) {
                particles.add(Particle(
                    x = Random.nextFloat() * w,
                    y = Random.nextFloat() * h,
                    vx = (Random.nextFloat() - 0.5f) * 0.5f,
                    vy = (Random.nextFloat() - 0.5f) * 0.5f,
                    size = Random.nextFloat() * 3f + 1f,
                    alpha = Random.nextInt(30, 120),
                    hue = Random.nextFloat() * 60f + 200f // blue-purple range
                ))
            }
        }

        override fun onSurfaceChanged(holder: SurfaceHolder?, format: Int, w: Int, h: Int) {
            width = w
            height = h
            initParticles(w, h)
        }

        override fun onVisibilityChanged(visible: Boolean) {
            this.visible = visible
            if (visible) drawFrame()
        }

        private fun drawFrame() {
            val holder: SurfaceHolder = surfaceHolder
            val canvas: Canvas? = holder.lockCanvas()

            canvas?.let {
                // === BACKGROUND: Deep space ===
                bgPaint.color = Color.rgb(5, 8, 20)
                it.drawRect(0f, 0f, width.toFloat(), height.toFloat(), bgPaint)

                // Subtle gradient overlay (lighter at center bottom)
                val gradient = RadialGradient(
                    width / 2f, height * 0.7f, 300f,
                    intArrayOf(Color.argb(40, 30, 60, 120), Color.argb(0, 0, 0, 0)),
                    null, Shader.TileMode.CLAMP
                )
                bgPaint.shader = gradient
                it.drawRect(0f, 0f, width.toFloat(), height.toFloat(), bgPaint)
                bgPaint.shader = null

                // === BREATHING ORB (Alma's presence) ===
                val breathPhase = sin(frameCount * 0.02f) // slow breathing
                val orbRadius = 100f + breathPhase * 20f // 80-120px
                val orbAlpha = (80 + breathPhase * 30f).toInt().coerceIn(40, 140)

                // Outer glow
                orbPaint.color = Color.argb(orbAlpha, 100, 180, 255)
                orbPaint.alpha = orbAlpha
                it.drawCircle(width / 2f, height * 0.7f, orbRadius, orbPaint)

                // Inner core (brighter)
                orbPaint.color = Color.argb(orbAlpha + 40, 150, 200, 255)
                it.drawCircle(width / 2f, height * 0.7f, orbRadius * 0.4f, orbPaint)

                // === ROTATING GLOW RING ===
                val ringAngle = frameCount * 0.01f
                ringPaint.style = Paint.Style.STROKE
                ringPaint.strokeWidth = 2f
                ringPaint.color = Color.argb(60, 100, 180, 255)
                ringPaint.alpha = 60
                val ringRadius = orbRadius + 30f
                for (i in 0 until 3) {
                    val angle = ringAngle + (i * 2.094f) // 120 degrees apart
                    val cx = width / 2f + cos(angle) * ringRadius
                    val cy = height * 0.7f + sin(angle) * ringRadius * 0.3f // elliptical
                    it.drawCircle(cx, cy, 4f, ringPaint)
                }

                // === FLOATING PARTICLES (holographic dust) ===
                for (p in particles) {
                    // Update position
                    p.x += p.vx
                    p.y += p.vy

                    // Wrap around screen
                    if (p.x < 0) p.x = width.toFloat()
                    if (p.x > width) p.x = 0f
                    if (p.y < 0) p.y = height.toFloat()
                    if (p.y > height) p.y = 0f

                    // Twinkle effect
                    val twinkle = (sin(frameCount * 0.05f + p.hue) * 0.5f + 0.5f)
                    val drawAlpha = (p.alpha * twinkle).toInt()

                    particlePaint.color = Color.argb(drawAlpha, 150, 200, 255)
                    particlePaint.alpha = drawAlpha
                    it.drawCircle(p.x, p.y, p.size, particlePaint)
                }

                // === "ALMA" TEXT (fades in/out) ===
                val textPhase = (sin(frameCount * 0.015f) * 0.5f + 0.5f) // 0-1
                val textAlpha = (textPhase * 80).toInt() // max 80 (subtle)
                textPaint.color = Color.argb(textAlpha, 200, 220, 255)
                textPaint.textSize = 28f
                textPaint.textAlign = Paint.Align.CENTER
                textPaint.isAntiAlias = true
                it.drawText("Alma", width / 2f, height * 0.7f + orbRadius + 60f, textPaint)

                holder.unlockCanvasAndPost(it)
            }

            frameCount++

            if (visible) {
                handler.postDelayed({ drawFrame() }, 33) // ~30fps
            }
        }

        override fun onSurfaceDestroyed(holder: SurfaceHolder?) {
            super.onSurfaceDestroyed(holder)
            visible = false
            handler.removeCallbacksAndMessages(null)
        }
    }
}
