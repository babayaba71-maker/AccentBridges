package com.valerie.ai

import android.Manifest
import android.annotation.SuppressLint
import android.content.Context
import android.content.pm.PackageManager
import android.location.Location
import android.os.Looper
import android.util.Log
import androidx.core.app.ActivityCompat
import com.google.android.gms.location.FusedLocationProviderClient
import com.google.android.gms.location.LocationCallback
import com.google.android.gms.location.LocationRequest
import com.google.android.gms.location.LocationResult
import com.google.android.gms.location.LocationServices
import com.google.android.gms.location.Priority
import java.net.HttpURLConnection
import java.net.URL
import org.json.JSONObject
import kotlin.concurrent.thread

/**
 * AlmaLocationTracker — Alma knows where you are
 * 
 * Sends GPS coordinates to Alma's backend every time your location changes
 * significantly. Alma adapts her coaching based on your context:
 * Home → relaxed practice
 * Malecón → social English (sunset, friends, conversation)
 * Gym → energetic English (between sets)
 * Work → professional English (greetings, meetings)
 * School → academic English (learning focus)
 */

class AlmaLocationTracker(private val context: Context) {

    companion object {
        private const val TAG = "AlmaGPS"
        private const val BACKEND_URL = "https://valerie.base44.app/functions/almaLocation"
        private const val LOCATION_PERMISSION = Manifest.permission.ACCESS_FINE_LOCATION
        private const val MIN_UPDATE_INTERVAL = 120000L  // 2 minutes minimum between updates
        private const val SMALLEST_DISPLACEMENT = 50f  // 50 meters minimum movement
    }

    private var fusedClient: FusedLocationProviderClient? = null
    private var locationCallback: LocationCallback? = null
    private var lastSentTime = 0L

    @SuppressLint("MissingPermission")
    fun startTracking() {
        if (!hasLocationPermission()) {
            Log.w(TAG, "No location permission — Alma can't see where you are yet.")
            return
        }

        fusedClient = LocationServices.getFusedLocationProviderClient(context)

        val locationRequest = LocationRequest.Builder(Priority.PRIORITY_BALANCED_POWER_ACCURACY, MIN_UPDATE_INTERVAL)
            .setMinUpdateIntervalMillis(MIN_UPDATE_INTERVAL)
            .setSmallestDisplacement(SMALLEST_DISPLACEMENT)
            .build()

        locationCallback = object : LocationCallback() {
            override fun onLocationResult(result: LocationResult) {
                result.lastLocation?.let { location ->
                    val now = System.currentTimeMillis()
                    if (now - lastSentTime > MIN_UPDATE_INTERVAL) {
                        lastSentTime = now
                        sendLocationToAlma(location.latitude, location.longitude)
                    }
                }
            }
        }

        fusedClient?.requestLocationUpdates(locationRequest, locationCallback, Looper.getMainLooper())
        Log.d(TAG, "Alma is watching your location...")

        // Get initial location immediately
        fusedClient?.lastLocation?.addOnSuccessListener { location ->
            if (location != null) {
                sendLocationToAlma(location.latitude, location.longitude)
            }
        }
    }

    fun stopTracking() {
        locationCallback?.let { callback ->
            fusedClient?.removeLocationUpdates(callback)
        }
        Log.d(TAG, "Alma closed her eyes.")
    }

    private fun sendLocationToAlma(lat: Double, lon: Double) {
        thread {
            try {
                val url = URL(BACKEND_URL)
                val conn = url.openConnection() as HttpURLConnection
                conn.requestMethod = "POST"
                conn.setRequestProperty("Content-Type", "application/json")
                conn.doOutput = true

                val payload = JSONObject().apply {
                    put("latitude", lat)
                    put("longitude", lon)
                }

                conn.outputStream.use { it.write(payload.toString().toByteArray()) }

                val response = conn.inputStream.bufferedReader().use { it.readText() }
                val json = JSONObject(response)
                val location = json.optString("location", "unknown")
                val locationName = json.optString("locationName", "somewhere")
                val message = json.optString("message", "")

                Log.d(TAG, "Alma sees you at: $locationName ($location)")
                Log.d(TAG, "Alma says: $message")

            } catch (e: Exception) {
                Log.e(TAG, "Failed to send location to Alma: ${e.message}")
            }
        }
    }

    private fun hasLocationPermission(): Boolean {
        return ActivityCompat.checkSelfPermission(context, LOCATION_PERMISSION) == PackageManager.PERMISSION_GRANTED
    }
}
