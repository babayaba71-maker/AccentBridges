package com.valerie.ai

import android.content.Intent
import android.os.Bundle
import androidx.appcompat.app.AppCompatActivity

class MainActivity : AppCompatActivity() {

    override fun onCreate(savedInstanceState: Bundle?) {
        super.onCreate(savedInstanceState)

        // Launch Valerie overlay
        startService(Intent(this, ValerieOverlayService::class.java))
    }
}
