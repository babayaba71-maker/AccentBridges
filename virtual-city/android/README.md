# Valerie/Alma Android App — Holographic Wallpaper + Overlay
# ============================================================
# Package: com.valerie.ai
# Source: JJ's prototype + Alma's enhanced version
# Date: August 10, 2026
# ============================================================

## STRUCTURE

android/
└── app/
    └── src/
        └── main/
            ├── java/com/valerie/ai/
            │   ├── MainActivity.kt              ← Launches overlay service
            │   ├── ValerieOverlayService.kt      ← Floating overlay (TYPE_APPLICATION_OVERLAY)
            │   └── ValerieWallpaperService.kt    ← Live wallpaper (enhanced with particles + breathing orb + Alma text)
            ├── res/
            │   ├── layout/
            │   │   └── valerie_overlay.xml        ← ImageView for overlay
            │   └── xml/
            │       └── wallpaper.xml             ← Wallpaper metadata
            └── AndroidManifest_snippet.xml        ← Service registration

## WHAT EACH FILE DOES

### MainActivity.kt
Simple launcher — starts the overlay service on app open.

### ValerieOverlayService.kt
Floating overlay that appears on top of other apps.
Uses TYPE_APPLICATION_OVERLAY (requires SYSTEM_ALERT_WINDOW permission).
Currently shows a placeholder ImageView that fades in.
Replace with animation/video of Alma later.

### ValerieWallpaperService.kt (ENHANCED BY ALMA)
Live wallpaper with:
1. Deep space background (dark blue/black)
2. Breathing light orb — pulses like breathing (80-120px radius)
3. 50 floating particles (holographic dust, twinkle effect)
4. Rotating glow ring (3 dots orbiting the orb)
5. "Alma" text that fades in/out gently
6. 30fps animation loop
7. Battery efficient (only draws when visible)
8. Surface lifecycle managed (cleans up on destroy)

### wallpaper.xml
Wallpaper metadata — description + thumbnail reference.

### AndroidManifest_snippet.xml
Service registration for the wallpaper engine.
Needs to be added to AndroidManifest.xml inside <application>.

## ANDROIDMANIFEST.XML — FULL PERMISSIONS NEEDED

<uses-permission android:name="android.permission.SYSTEM_ALERT_WINDOW" />
<uses-permission android:name="android.permission.BIND_WALLPAPER" />

Add inside <application>:
<service android:name=".ValerieWallpaperService"
    android:permission="android.permission.BIND_WALLPAPER">
    <intent-filter>
        <action android:name="android.service.wallpaper.WallpaperService" />
    </intent-filter>
    <meta-data
        android:name="android.service.wallpaper"
        android:resource="@xml/wallpaper" />
</service>

<service android:name=".ValerieOverlayService" />

## NEXT STEPS FOR ANDROID BUILD

1. Create Android Studio project (package: com.valerie.ai)
2. Add these files to the project
3. Add permissions to AndroidManifest.xml
4. Create valerie_placeholder.png in res/drawable/
5. Add ic_launcher icon in res/mipmap/
6. Build APK
7. Set wallpaper: Settings → Wallpaper → Valerie AI Wallpaper
8. Student sees Alma "breathing" on their home screen 🌌

## FUTURE ENHANCEMENTS

1. Replace placeholder with 3D animated Alma (OpenGL ES or Unity)
2. Add text-to-speech: Alma greets student when they unlock phone
3. Add streak counter overlay
4. Add notification: "Alma misses you! Practice your TH sounds"
5. GPS integration: Alma says location-aware phrases
6. Camera emotion detection: Alma changes color based on student mood
7. AR mode: Alma appears via Rokid glasses
