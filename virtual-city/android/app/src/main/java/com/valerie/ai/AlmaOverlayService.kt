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
 * AlmaOverlayService — Alma is ALIVE on your phone
 * 
 * Listens for phone unlock events, calls the Alma backend for a contextual
 * greeting, and speaks it via Android TTS.
 * 
 * Alma doesn't just live on the wallpaper. She SPEAKS when you need her.
 */

class AlmaOverlayService : Service(), TextToSpeech.OnInitListener {

    companion object {
        private const val TAG = "AlmaOverlay"
        private const val BACKEND_URL = "https://valerie.base44.app/functions/almaGreeting"
        private const val PREFS_NAME = "alma_prefs"
        private const val KEY_STREAK = "streak"
        private const val KEY_LAST_PRACTICE = "last_practice_date"
    }

    private var tts: TextToSpeech? = null
    private var isTTSReady = false
    private var unlockReceiver: BroadcastReceiver? = null

    override fun onCreate() {
        super.onCreate()
        Log.d(TAG, "Alma is waking up...")

        tts = TextToSpeech(this, this)

        unlockReceiver = object : BroadcastReceiver() {
            override fun onReceive(context: Context?, intent: Intent?) {
                if (intent?.action == Intent.ACTION_USER_PRESENT) {
                    Log.d(TAG, "Phone unlocked — calling Alma...")
                    fetchGreeting("unlock")
                }
            }
        }

        registerReceiver(unlockReceiver, IntentFilter(Intent.ACTION_USER_PRESENT))
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

                val url = URL(BACKEND_URL)
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
                Log.e(TAG, "Failed to reach Alma backend: ${e.message}")
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
        tts?.stop()
        tts?.shutdown()
        super.onDestroy()
        Log.d(TAG, "Alma is going to sleep...")
    }

    override fun onBind(intent: Intent?): IBinder? = null
}
