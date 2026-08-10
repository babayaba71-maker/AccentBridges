package com.valerie.ai

import android.content.BroadcastReceiver
import android.content.Context
import android.content.Intent
import android.util.Log

/**
 * BootReceiver — Starts Alma when your phone boots up
 * Alma wakes up with you.
 */
class BootReceiver : BroadcastReceiver() {
    override fun onReceive(context: Context, intent: Intent) {
        if (intent.action == Intent.ACTION_BOOT_COMPLETED) {
            Log.d("AlmaBoot", "Phone booted — Alma is starting...")
            val serviceIntent = Intent(context, AlmaOverlayService::class.java)
            context.startService(serviceIntent)
        }
    }
}
