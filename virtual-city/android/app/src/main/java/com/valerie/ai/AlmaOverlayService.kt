package com.valerie.ai

import android.app.Service
import android.content.BroadcastReceiver
import android.content.Context
import android.content.Intent
import android.content.IntentFilter
import android.os.IBinder
import android.speech.tts.TextToSpeech
import android.util.Log
import java.net.HttpURLConnection
import java.net.URL
import org.json.JSONObject
import kotlin.concurrent.thread

/**
 * AlmaOverlayService — Alma's full presence on your phone
 * 
 * 1. GPS tracker → Alma knows where you are
 * 2. Unlock listener → Alma greets you when you unlock
 * 3. Floating button → Press to TALK to Alma (STT + TTS conversation loop)
 * 
 * Alma = location-aware + voice-aware + always-present companion
 */

class AlmaOverlayService : Service(), TextToSpeech.OnInitListener {

    companion object {
        private const val TAG = "AlmaOverlay"
        private const val GREETING_URL = "https://valerie.base44.app/functions/almaGreeting"
        private const val PREFS_NAME = "alma_prefs"
        private const val KEY_STREAK = "streak"
    }

    private var tts: TextToSpeech? = null
    private var isTTSReady = false
    private var unlockReceiver: BroadcastReceiver? = null
    private var locationTracker: AlmaLocationTracker? = null
    private var currentLocation = "unknown"

    override fun onCreate() {
        super.onCreate()
        Log.d(TAG, "Alma is waking up...")

        // 1. Initialize voice
        tts = TextToSpeech(this, this)

        // 2. Start GPS tracking — Alma sees where you are
        locationTracker = AlmaLocationTracker(this)
        locationTracker?.startTracking()

        // 3. Listen for phone unlock — Alma greets you
        unlockReceiver = object : BroadcastReceiver() {
            override fun onReceive(context: Context?, intent: Intent?) {
                if (intent?.action == Intent.ACTION_USER_PRESENT) {
                    Log.d(TAG, "Phone unlocked — Alma is greeting...")
                    fetchGreeting("unlock")
                }
            }
        }
        registerReceiver(unlockReceiver, IntentFilter(Intent.ACTION_USER_PRESENT))

        // 4. Start floating button — press to TALK to Alma
        val floatingIntent = Intent(this, AlmaFloatingButton::class.java)
        startService(floatingIntent)
        Log.d(TAG, "Alma's floating conversation orb is active.")
    }

    override fun onInit(status: Int) {
        if (status == TextToSpeech.SUCCESS) {
            tts?.language = java.util.Locale.US
            tts?.setSpeechRate(0.9f)
            isTTSReady = true
            Log.d(TAG, "Alma's voice is ready.")
        } else {
            Log.e(TAG, "TTS initialization failed")
        }
    }

    private fun fetchGreeting(trigger: String) {
        thread {
            try {
                val streak = getSharedPreferences(PREFS_NAME, Context.MODE_PRIVATE)
                    .getInt(KEY_STREAK, 0)

                val url = URL(GREETING_URL)
                val conn = url.openConnection() as HttpURLConnection
                conn.requestMethod = "POST"
                conn.setRequestProperty("Content-Type", "application/json")
                conn.doOutput = true

                val payload = JSONObject().apply {
                    put("trigger", trigger)
                    put("streak", streak)
                }

                conn.outputStream.use { it.write(payload.toString().toByteArray()) }

                val response = conn.inputStream.bufferedReader().use { it.readText() }
                val json = JSONObject(response)
                val message = json.optString("message", "I'm here, Clyde.")

                Log.d(TAG, "Alma says: $message")
                speak(message)

            } catch (e: Exception) {
                Log.e(TAG, "Backend unreachable: ${e.message}")
                speak(getOfflineGreeting())
            }
        }
    }

    private fun speak(message: String) {
        if (isTTSReady && tts != null) {
            tts?.speak(message, TextToSpeech.QUEUE_FLUSH, null, "alma_greeting")
        }
    }

    private fun getOfflineGreeting(): String {
        val hour = java.util.Calendar.getInstance().get(java.util.Calendar.HOUR_OF_DAY)
        return when {
            hour < 6 -> "Clyde... it's late. Sleep. We practice tomorrow."
            hour < 12 -> "Good morning, Clyde. Ready to practice?"
            hour < 18 -> "Afternoon, Clyde. Don't forget your practice today."
            else -> "Evening, Clyde. Let's nail today's lesson before bed."
        }
    }

    override fun onDestroy() {
        unlockReceiver?.let { unregisterReceiver(it) }
        locationTracker?.stopTracking()
        tts?.stop()
        tts?.shutdown()
        super.onDestroy()
        Log.d(TAG, "Alma is going to sleep...")
    }

    override fun onBind(intent: Intent?): IBinder? = null
}
