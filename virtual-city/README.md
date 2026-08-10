# AccentBridges Virtual City 🌌

3D accent coaching environment built with React + Three.js + Zustand.

## Quick Start

```bash
cd virtual-city
npm install
npm run dev
```

Open http://localhost:3000

## Build

```bash
npm run build
npm run preview
```

## What's Inside

*HomeScene* (always unlocked, Day 1)
- Cozy living room with fireplace particles
- 5 interactive practice objects: Chair, Table, TV, Bookshelf, Mirror
- TTS speaks American English phrases at 0.85x speed
- STT evaluates your pronunciation word-by-word
- 85%+ accuracy = streak goes up

*MaleconScene* (unlocked Day 10)
- Sunset boardwalk with palm trees and water animation
- 3 interactive practice objects: Bench, Boat, Seagull
- Same TTS + STT evaluation loop

*SceneRouter* switches between zones based on streak unlocks:
1. Day 1 → Home
2. Day 3 → School
3. Day 5 → Gym
4. Day 7 → Cafeteria
5. Day 10 → Malecon
6. Day 14 → Forum
7. Day 21 → Centro
8. Day 30 → Full City + Holographic Mode

## Streak System

- Android app tracks streak in SharedPreferences
- Backend (almaConversation) evaluates pronunciation
- 85%+ accuracy = streak +1 (once per day)
- Streak unlocks new 3D locations
- PracticeSession entity saves history

## Live URL

https://babayaba71-maker.github.io/AccentBridges/virtual-city/

## Tech Stack

- React 18
- Three.js 0.169
- Zustand 4.5
- Vite 5
- Web Speech API (TTS + STT)
