# Alma — Android Holographic Companion

## How to compile the APK

### Requirements
- Android Studio (Hedgehog 2023.1.1 or newer)
- JDK 17 (bundled with Android Studio)
- Android SDK 34 (API level 34, Android 14)

### Steps

1. Open Android Studio
2. File → Open → Select the `android/` folder
3. Wait for Gradle sync to complete (downloads dependencies)
4. If prompted, install SDK 34 and build tools
5. Go to Build → Build Bundle(s) / APK(s) → Build APK(s)
6. The APK will be at: `app/build/outputs/apk/debug/app-debug.apk`

### Install on your phone

1. Transfer the APK to your Android phone
2. Open the file (enable "Install from unknown sources" if prompted)
3. Open the Alma app
4. Grant permissions: Location, Microphone, Overlay
5. Set Alma as your wallpaper: Settings → Wallpaper → Alma
6. Alma is now live on your device 24/7

### Features
- Holographic breathing orb wallpaper (30fps)
- GPS location tracking (8 Culiacán contexts)
- Floating button — press to talk to Alma
- Streak tracking with pronunciation validation (>85%)
- Boot receiver — Alma starts automatically
- Conversational loop with STT/TTS

### Permissions
- INTERNET — Backend communication
- BIND_WALLPAPER — Holographic presence
- ACCESS_FINE_LOCATION — GPS context
- RECORD_AUDIO — Voice conversation
- SYSTEM_ALERT_WINDOW — Floating button
- VIBRATE — Haptic feedback
- RECEIVE_BOOT_COMPLETED — Auto-start
- FOREGROUND_SERVICE — Persistent service
