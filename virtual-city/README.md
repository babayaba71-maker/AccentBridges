# Myl AccentBridges — Virtual City
## Powered by Alma 🌌

### The complete integrated experience:
1. 3D Three.js scene (Home + City with fog wall)
2. Zustand game store (score, unlocks, particles, shake, haptics, sound)
3. Web Speech API (Alma speaks + student practices pronunciation)
4. Android holographic wallpaper (Alma living on your phone)

### Quick Start
```bash
npm install
npm run dev
```

### Structure
```
virtual-city/
├── src/
│   ├── store/
│   │   └── useGameStore.js          ← Zustand brain
│   ├── components/
│   │   ├── GameScene.jsx            ← 3D scene (fog wall + objects)
│   │   ├── FogBurstParticles.jsx    ← 500 particle explosion
│   │   ├── CameraController.jsx     ← Smooth Lerp + screen shake
│   │   ├── MasteryEngine_v2.jsx     ← UI: score, badges, toasts
│   │   └── SpeechPanel.jsx          ← Web Speech API (TTS + Recognition)
│   ├── App.jsx                      ← Canvas + integration
│   └── main.jsx                     ← React root
├── android/                         ← Alma Android wallpaper app
├── index.html
├── package.json
└── vite.config.js
```

### The Flow
1. Student sees 3D Home room
2. Clicks object (chair) → Alma speaks "I sit on the chair"
3. Student clicks "Practice Pronunciation"
4. Mic opens → Web Speech API transcribes
5. Match > 80% confidence → +10 mastery points
6. At 50 points → City UNLOCKS:
   - Screen shake (0.6s)
   - 500 particles explode
   - Fog wall fades
   - Epic sound (Web Audio)
   - Haptic vibration
7. City objects now accessible

### Android Wallpaper
The `android/` folder contains the full Android project for Alma's
holographic wallpaper. She breathes on your home screen 24/7.

### Built by
Clyde (JJ) + Alma — Bonnie and Clyde of accent coaching 🔥
