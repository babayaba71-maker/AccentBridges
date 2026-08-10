package com.valerie.ai

import android.content.Context
import android.content.Intent
import android.util.Log
import java.net.HttpURLConnection
import java.net.URL
import org.json.JSONObject
import kotlin.concurrent.thread

/**
 * AlmaStreakBridge — Connects the Android streak system
 * to the Virtual City 3D world.
 * 
 * When streak goes up:
 * 1. Saves streak in SharedPreferences
 * 2. Sends broadcast to Virtual City (if running)
 * 3. Triggers unlock notification with new location name
 */

class AlmaStreakBridge(private val context: Context) {

    companion object {
        private const val TAG = "AlmaStreak"
        private const val PREFS_NAME = "alma_prefs"
        private const val KEY_STREAK = "streak"
        private const val KEY_LAST_PRACTICE_DATE = "last_practice_date"
        
        // Unlock schedule — same as useAlmaGameStore
        val UNLOCK_SCHEDULE = mapOf(
            1 to "Home 🏠",
            3 to "School 🏫",
            5 to "Gym 💪",
            7 to "Cafetería ☕",
            10 to "Malecón 🌅",
            14 to "Forum 🛍️",
            21 to "Centro 🏙️",
            30 to "Full City + Holographic 🌌"
        )
        
        const val ACTION_STREAK_UPDATED = "com.valerie.ai.STREAK_UPDATED"
        const val EXTRA_STREAK = "streak"
        const val EXTRA_NEW_UNLOCKS = "new_unlocks"
    }

    /**
     * Called when almaConversation backend returns streakChanged=true
     */
    fun onStreakUpdated(newStreak: Int): List<String> {
        val prefs = context.getSharedPreferences(PREFS_NAME, Context.MODE_PRIVATE)
        val oldStreak = prefs.getInt(KEY_STREAK, 0)
        
        if (newStreak <= oldStreak) return emptyList()
        
        // Save new streak
        val today = java.text.SimpleDateFormat("yyyy-MM-dd", java.util.Locale.US)
            .format(java.util.Date())
        prefs.edit()
            .putInt(KEY_STREAK, newStreak)
            .putString(KEY_LAST_PRACTICE_DATE, today)
            .apply()
        
        Log.d(TAG, "STREAK UPDATED: $oldStreak → $newStreak 🔥")
        
        // Check for new unlocks
        val newUnlocks = mutableListOf<String>()
        for (streakDay in 1..newStreak) {
            if (streakDay > oldStreak && UNLOCK_SCHEDULE.containsKey(streakDay)) {
                newUnlocks.add(UNLOCK_SCHEDULE[streakDay]!!)
            }
        }
        
        // Broadcast to Virtual City (if it's running)
        val intent = Intent(ACTION_STREAK_UPDATED).apply {
            setPackage(context.packageName)
            putExtra(EXTRA_STREAK, newStreak)
            putExtra(EXTRA_NEW_UNLOCKS, newUnlocks.toTypedArray())
        }
        context.sendBroadcast(intent)
        
        if (newUnlocks.isNotEmpty()) {
            Log.d(TAG, "NEW UNLOCKS: $newUnlocks 🌌")
        }
        
        return newUnlocks
    }

    /**
     * Get current streak
     */
    fun getCurrentStreak(): Int {
        return context.getSharedPreferences(PREFS_NAME, Context.MODE_PRIVATE)
            .getInt(KEY_STREAK, 0)
    }

    /**
     * Check if already practiced today
     */
    fun alreadyPracticedToday(): Boolean {
        val prefs = context.getSharedPreferences(PREFS_NAME, Context.MODE_PRIVATE)
        val lastDate = prefs.getString(KEY_LAST_PRACTICE_DATE, "")
        val today = java.text.SimpleDateFormat("yyyy-MM-dd", java.util.Locale.US)
            .format(java.util.Date())
        return today == lastDate
    }

    /**
     * Get unlock progress for display
     */
    fun getUnlockProgress(): List<UnlockItem> {
        val streak = getCurrentStreak()
        val schedule = listOf(
            UnlockItem(1, "Home", "🏠"),
            UnlockItem(3, "School", "🏫"),
            UnlockItem(5, "Gym", "💪"),
            UnlockItem(7, "Cafetería", "☕"),
            UnlockItem(10, "Malecón", "🌅"),
            UnlockItem(14, "Forum", "🛍️"),
            UnlockItem(21, "Centro", "🏙️"),
            UnlockItem(30, "Full City + Holographic", "🌌")
        )
        
        return schedule.map { item ->
            item.copy(
                unlocked = streak >= item.day,
                daysRemaining = Math.max(0, item.day - streak)
            )
        }
    }

    data class UnlockItem(
        val day: Int,
        val location: String,
        val emoji: String,
        val unlocked: Boolean = false,
        val daysRemaining: Int = 0
    )
}
