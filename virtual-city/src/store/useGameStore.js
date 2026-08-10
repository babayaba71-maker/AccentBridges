/**
 * useGameStore.js — Zustand Store for AccentBridges Virtual City
 * Source: Meta AI conversation (April 13, 2026)
 * 
 * Features:
 * - Score + Mastery Points system
 * - Location unlocking (Home → City at 50 points)
 * - Fog wall visibility control
 * - Particle burst trigger on unlock
 * - Camera shake trigger on unlock
 * - Web Audio API sound effects (whoosh + chime)
 * - Haptic feedback (navigator.vibrate)
 * - Location-based access control
 * - minScore per object gating
 * - localStorage persistence
 * - Toast notifications (unlock + denied)
 * - Smooth camera teleport with Lerp
 */

import { create } from 'zustand';
import * as THREE from 'three';

const useGameStore = create((set, get) => ({
  // === GAME STATE ===
  score: 0,
  unlockedLocations: ['Home'],
  unlockMessage: '',
  deniedMessage: '',
  targetPosition: null,
  cityFogVisible: true,
  triggerFogBurst: false,
  triggerShake: false,

  // === INIT: Load from localStorage ===
  init: () => {
    const saved = localStorage.getItem('accentBridges_progress');
    if (saved) {
      const { score, locations } = JSON.parse(saved);
      const unlocked = locations || ['Home'];
      set({
        score,
        unlockedLocations: unlocked,
        cityFogVisible: !unlocked.includes('City')
      });
    }
  },

  // === ADD SCORE + CHECK UNLOCKS ===
  addScore: (amount) => {
    const newScore = get().score + amount;
    const wasLocked = !get().unlockedLocations.includes('City');
    set({ score: newScore });

    // Subtle haptic on every point
    triggerHaptic([20]); // 20ms barely felt

    if (newScore >= 50 && wasLocked) {
      const newLocations = [...get().unlockedLocations, 'City'];
      set({
        unlockedLocations: newLocations,
        unlockMessage: 'City',
        cityFogVisible: false,
        triggerFogBurst: true,   // FIRE THE PARTICLES!
        triggerShake: true       // SHAKE THE CAMERA!
      });

      // Play epic unlock sound
      playUnlockSound();

      // Epic haptic pattern: vibra-pausa-vibra-pausa-vibra
      triggerHaptic([100, 50, 200, 50, 300]);

      // Reset triggers after 3s
      setTimeout(() => set({
        unlockMessage: '',
        triggerFogBurst: false,
        triggerShake: false
      }), 3000);
    }

    // Save progress
    localStorage.setItem('accentBridges_progress', JSON.stringify({
      score: newScore,
      locations: get().unlockedLocations
    }));
  },

  // === ACCESS CONTROL ===
  canAccessLocation: (locationName) => {
    return get().unlockedLocations.includes(locationName);
  },

  canAccessObject: (objectUserData) => {
    const { location = 'Home', minScore = 0 } = objectUserData;
    const hasLocation = get().canAccessLocation(location);
    const hasScore = get().score >= minScore;

    if (!hasLocation) {
      set({ deniedMessage: `${location} is locked! Reach 50 points to unlock.` });
      triggerHaptic([50]); // short error vibration
      setTimeout(() => set({ deniedMessage: '' }), 2500);
      return false;
    }
    if (!hasScore) {
      set({ deniedMessage: `Need ${minScore} points. You have ${get().score}.` });
      triggerHaptic([50]); // short error vibration
      setTimeout(() => set({ deniedMessage: '' }), 2500);
      return false;
    }
    return true;
  },

  // === CAMERA TELEPORT ===
  teleportTo: (position, objectUserData) => {
    if (!get().canAccessObject(objectUserData)) return false;
    set({ targetPosition: position.clone(), deniedMessage: '' });
    return true;
  },

  updateCamera: (camera, delta) => {
    const target = get().targetPosition;
    if (!target) return;

    const lerpSpeed = 3; // higher = faster, framerate independent with delta
    camera.position.lerp(target, lerpSpeed * delta);

    // Snap when close enough
    if (camera.position.distanceTo(target) < 0.1) {
      camera.position.copy(target);
      set({ targetPosition: null });
    }
  },

  // === RESET ===
  resetProgress: () => {
    localStorage.removeItem('accentBridges_progress');
    set({
      score: 0,
      unlockedLocations: ['Home'],
      unlockMessage: '',
      deniedMessage: '',
      targetPosition: null,
      cityFogVisible: true,
      triggerFogBurst: false,
      triggerShake: false
    });
  }
}));

// === WEB AUDIO API: Unlock Sound (whoosh + chime) ===
function playUnlockSound() {
  try {
    const audioCtx = new (window.AudioContext || window.webkitAudioContext)();

    // Big descending whoosh
    const osc1 = audioCtx.createOscillator();
    osc1.type = 'sawtooth';
    osc1.frequency.setValueAtTime(100, audioCtx.currentTime);
    osc1.frequency.exponentialRampToValueAtTime(40, audioCtx.currentTime + 0.5);

    // Rising chime
    const osc2 = audioCtx.createOscillator();
    osc2.type = 'sine';
    osc2.frequency.setValueAtTime(800, audioCtx.currentTime + 0.1);
    osc2.frequency.exponentialRampToValueAtTime(1200, audioCtx.currentTime + 0.3);

    // Gain envelope
    const gain = audioCtx.createGain();
    gain.gain.setValueAtTime(0.3, audioCtx.currentTime);
    gain.gain.exponentialRampToValueAtTime(0.01, audioCtx.currentTime + 0.8);

    osc1.connect(gain);
    osc2.connect(gain);
    gain.connect(audioCtx.destination);

    osc1.start();
    osc2.start();
    osc1.stop(audioCtx.currentTime + 0.8);
    osc2.stop(audioCtx.currentTime + 0.8);
  } catch (e) {
    console.log('Audio blocked until user interaction');
  }
}

// === HAPTIC FEEDBACK: navigator.vibrate() ===
function triggerHaptic(pattern = [100, 50, 200, 50, 300]) {
  // [vibrate, pause, vibrate, pause, vibrate] in ms
  if ('vibrate' in navigator) {
    try {
      navigator.vibrate(pattern);
    } catch (e) {
      console.log('Vibration not supported');
    }
  }
}

export default useGameStore;
