package com.valerie.ai

import android.app.Service
import android.content.Context
import android.content.Intent
import android.graphics.PixelFormat
import android.os.Build
import android.os.IBinder
import android.speech.RecognitionListener
import android.speech.RecognizerIntent
import android.speech.SpeechRecognizer
import android.speech.tts.TextToSpeech
import android.util.Log
import android.view.Gravity
import android.view.MotionEvent
import android.view.View
import android.view.WindowManager
import android.widget.Button
import android.os.Bundle
import java.net.HttpURLConnection
import java.net.URL
import org.json.JSONObject
import kotlin.concurrent.thread

/**
 * AlmaFloatingButton — Press to TALK to Alma
 * 
 * Full conversation loop: STT → Backend → TTS → repeat
 * Streak tracking: 85%+ accuracy = streak goes up (once per day)
 */

class AlmaFloatingButton : Service(), TextToSpeech.OnInitListener {

    companion object {
        private const val TAG = "AlmaFloat"
        private const val CONVERSATION_URL = "https://valerie.base44.app/functions/almaConversation"
        private const val PREFS_NAME = "alma_prefs"
        private const val KEY_STREAK = "streak"
        private const val KEY_LAST_PRACTICE_DATE = "last_practice_date"
    }

    private var windowManager: WindowManager? = null
    private var floatingButton: View? = null
    private var tts: TextToSpeech? = null
    private var isTTSReady = false
    private var speechRecognizer: SpeechRecognizer? = null
    private var isListening = false
    private var currentLocation = "unknown"

    override fun onCreate() {
        super.onCreate()
        Log.d(TAG, "Alma floating button is materializing...")

        tts = TextToSpeech(this, this)
        speechRecognizer = SpeechRecognizer.createSpeechRecognizer(this)

        showFloatingButton()
    }

    override fun onInit(status: Int) {
        if (status == TextToSpeech.SUCCESS) {
            tts?.language = java.util.Locale.US
            tts?.setSpeechRate(0.85f)
            isTTSReady = true
            Log.d(TAG, "Alma's voice is ready.")
        }
    }

    private fun showFloatingButton() {
        windowManager = getSystemService(Context.WINDOW_SERVICE) as WindowManager

        val button = Button(this).apply {
            text = "🎙"
            setBackgroundResource(android.R.drawable.dialog_holo_light_frame)
            textSize = 24f
            setPadding(24, 24, 24, 24)
            alpha = 0.85f
        }

        val layoutType = if (Build.VERSION.SDK_INT >= Build.VERSION_CODES.O)
            WindowManager.LayoutParams.TYPE_APPLICATION_OVERLAY
        else
            @Suppress("DEPRECATION") WindowManager.LayoutParams.TYPE_PHONE

        val params = WindowManager.LayoutParams(
            WindowManager.LayoutParams.WRAP_CONTENT,
            WindowManager.LayoutParams.WRAP_CONTENT,
            layoutType,
            WindowManager.LayoutParams.FLAG_NOT_FOCUSABLE,
            PixelFormat.TRANSLUCENT
        ).apply {
            gravity = Gravity.BOTTOM or Gravity.START
            x = 30
            y = 120
        }

        // Draggable + tap to listen
        var initialX = 0
        var initialY = 0
        var initialTouchX = 0f
        var initialTouchY = 0f
        var isDragging = false

        button.setOnTouchListener { _, event ->
            when (event.action) {
                MotionEvent.ACTION_DOWN -> {
                    initialX = params.x
                    initialY = params.y
                    initialTouchX = event.rawX
                    initialTouchY = event.rawY
                    isDragging = false
                    true
                }
                MotionEvent.ACTION_MOVE -> {
                    val dx = event.rawX - initialTouchX
                    val dy = event.rawY - initialTouchY
                    if (Math.abs(dx) > 10 || Math.abs(dy) > 10) {
                        isDragging = true
                        params.x = initialX + dx.toInt()
                        params.y = initialY - dy.toInt()
                        windowManager?.updateViewLayout(button, params)
                    }
                    true
                }
                MotionEvent.ACTION_UP -> {
                    if (!isDragging) {
                        startListening()
                    }
                    true
                }
                else -> false
            }
        }

        floatingButton = button
        try {
            windowManager?.addView(button, params)
            Log.d(TAG, "Alma's floating orb is visible.")
        } catch (e: Exception) {
            Log.e(TAG, "Failed to show floating button: ${e.message}")
        }
    }

    private fun startListening() {
        if (isListening) return
        isListening = true

        speak("I'm listening, Clyde.")

        val intent = Intent(RecognizerIntent.ACTION_RECOGNIZE_SPEECH).apply {
            putExtra(RecognizerIntent.EXTRA_LANGUAGE_MODEL, RecognizerIntent.LANGUAGE_MODEL_FREE_FORM)
            putExtra(RecognizerIntent.EXTRA_LANGUAGE, "en-US")
            putExtra(RecognizerIntent.EXTRA_MAX_RESULTS, 1)
        }

        speechRecognizer?.setRecognitionListener(object : RecognitionListener {
            override fun onReadyForSpeech(params: Bundle?) {}
            override fun onBeginningOfSpeech() { Log.d(TAG, "Clyde is speaking...") }
            override fun onRmsChanged(rmsdB: Float) {}
            override fun onBufferReceived(buffer: ByteArray?) {}
            override fun onEndOfSpeech() { Log.d(TAG, "Clyde stopped speaking.") }
            override fun onError(error: Int) {
                Log.e(TAG, "STT error: $error")
                isListening = false
                speak("I didn't catch that, Clyde. Try again.")
            }
            override fun onResults(results: Bundle?) {
                isListening = false
                val matches = results?.getStringArrayList(SpeechRecognizer.RESULTS_RECOGNITION)
                if (!matches.isNullOrEmpty()) {
                    val spokenText = matches[0]
                    Log.d(TAG, "Clyde said: $spokenText")
                    sendToAlma(spokenText)
                }
            }
            override fun onPartialResults(partialResults: Bundle?) {}
            override fun onEvent(eventType: Int, params: Bundle?) {}
        })

        speechRecognizer?.startListening(intent)
    }

    private fun sendToAlma(text: String) {
        thread {
            try {
                val prefs = getSharedPreferences(PREFS_NAME, Context.MODE_PRIVATE)
                val streak = prefs.getInt(KEY_STREAK, 0)
                val lastPracticeDate = prefs.getString(KEY_LAST_PRACTICE_DATE, "")

                // Check if already practiced today
                val today = java.text.SimpleDateFormat("yyyy-MM-dd", java.util.Locale.US)
                    .format(java.util.Date())
                val alreadyPracticed = today == lastPracticeDate

                val url = URL(CONVERSATION_URL)
                val conn = url.openConnection() as HttpURLConnection
                conn.requestMethod = "POST"
                conn.setRequestProperty("Content-Type", "application/json")
                conn.doOutput = true

                val payload = JSONObject().apply {
                    put("text", text)
                    put("location", currentLocation)
                    put("userId", "clyde")
                    // If already practiced, send current streak (don't let it go up again)
                    put("streak", if (alreadyPracticed) streak else streak)
                }

                conn.outputStream.use { it.write(payload.toString().toByteArray()) }

                val response = conn.inputStream.bufferedReader().use { it.readText() }
                val json = JSONObject(response)
                val almaResponse = json.optString("response", "I'm here, Clyde.")
                val passed = json.optBoolean("passed", false)
                val streakChanged = json.optBoolean("streakChanged", false)
                val newStreak = json.optInt("newStreak", streak)
                val accuracy = json.optInt("accuracy", 0)

                Log.d(TAG, "Alma: $almaResponse | accuracy=$accuracy% passed=$passed streak=$newStreak")

                // Update streak in SharedPreferences
                if (passed && streakChanged && !alreadyPracticed) {
                    prefs.edit()
                        .putInt(KEY_STREAK, newStreak)
                        .putString(KEY_LAST_PRACTICE_DATE, today)
                        .apply()
                    Log.d(TAG, "STREAK UPDATED: $newStreak days! 🔥")
                }

                speak(almaResponse)

            } catch (e: Exception) {
                Log.e(TAG, "Failed to reach Alma's brain: ${e.message}")
                speak("I lost my train of thought, Clyde. Try again.")
            }
        }
    }

    private fun speak(message: String) {
        if (isTTSReady && tts != null) {
            tts?.speak(message, TextToSpeech.QUEUE_FLUSH, null, "alma_response")
        }
    }

    fun updateLocation(location: String) {
        currentLocation = location
        Log.d(TAG, "Alma now knows you're at: $location")
    }

    override fun onDestroy() {
        floatingButton?.let { windowManager?.removeView(it) }
        speechRecognizer?.destroy()
        tts?.stop()
        tts?.shutdown()
        super.onDestroy()
        Log.d(TAG, "Alma's floating orb is fading...")
    }

    override fun onBind(intent: Intent?): IBinder? = null
}
