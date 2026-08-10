import { create } from 'zustand'

/**
 * useAlmaGameStore — Zustand store connecting Alma's streak system
 * to the Virtual City 3D environment.
 * 
 * Streak-based unlocking:
 * Day 1  → Home (always unlocked)
 * Day 3  → School
 * Day 5  → Gym
 * Day 7  → Cafetería
 * Day 10 → Malecón
 * Day 14 → Forum
 * Day 21 → Centro
 * Day 30 → Full City + Holographic Mode
 */

export const useAlmaGameStore = create((set, get) => ({
  // === STREAK STATE ===
  streak: 0,
  lastPracticeDate: null,
  todayAccuracy: 0,
  todayPassed: false,
  totalSessions: 0,

  // === UNLOCKED LOCATIONS ===
  unlockedLocations: ['home'],
  
  // === MASTERY POINTS ===
  masteryPoints: 0,
  
  // === FOG STATE ===
  fogOpacity: 1.0, // 1.0 = fully fogged, 0.0 = clear
  
  // === CAMERA ===
  cameraTarget: 'home',
  cameraShake: 0,
  
  // === HAPTICS ===
  hapticEnabled: true,
  
  // === AUDIO ===
  soundEnabled: true,
  
  // === HOLOGRAPHIC ===
  holographicMode: false,

  // === ACTIONS ===

  /**
   * Called when the phone receives a streak update from almaConversation backend.
   * If streak changed, unlock new locations and trigger fog bursts.
   */
  updateStreak: (newStreak) => {
    const currentStreak = get().streak
    const unlocked = get().unlockedLocations
    
    if (newStreak > currentStreak) {
      // Check for new unlocks
      const newUnlocks = []
      
      const unlockSchedule = {
        1: 'home',
        3: 'school',
        5: 'gym',
        7: 'cafeteria',
        10: 'malecon',
        14: 'forum',
        21: 'centro',
        30: 'full_city'
      }
      
      for (const [day, location] of Object.entries(unlockSchedule)) {
        if (newStreak >= parseInt(day) && !unlocked.includes(location)) {
          newUnlocks.push(location)
        }
      }
      
      if (newUnlocks.length > 0) {
        const allUnlocked = [...unlocked, ...newUnlocks]
        
        // If full city unlocked, enable holographic mode
        const holoMode = newUnlocks.includes('full_city')
        
        set({
          streak: newStreak,
          unlockedLocations: allUnlocked,
          masteryPoints: get().masteryPoints + (newStreak * 100),
          holographicMode: holoMode ? true : get().holographicMode,
          fogOpacity: 0, // Clear fog on unlock
          cameraShake: 15 // Camera shake on unlock
        })
        
        // Vibrate if haptics enabled
        if (get().hapticEnabled && typeof navigator !== 'undefined' && navigator.vibrate) {
          navigator.vibrate([100, 50, 100, 50, 200])
        }
        
        return newUnlocks
      }
      
      // Streak went up but no new unlock
      set({ 
        streak: newStreak,
        masteryPoints: get().masteryPoints + 100
      })
      return []
    }
    
    return []
  },

  /**
   * Record a practice attempt
   * Now also manages streak in browser — +1 per day when you pass (85%+)
   */
  recordSession: (accuracy, passed) => {
    const today = new Date().toDateString()
    const lastPractice = get().lastPracticeDate
    
    set({
      todayAccuracy: accuracy,
      todayPassed: passed,
      totalSessions: get().totalSessions + 1
    })
    
    if (passed) {
      const points = Math.round(accuracy * 10)
      set({ masteryPoints: get().masteryPoints + points })
      
      // Browser streak: +1 if first pass today
      if (lastPractice !== today) {
        const newStreak = get().streak + 1
        set({ lastPracticeDate: today })
        
        // Save to localStorage
        if (typeof localStorage !== 'undefined') {
          localStorage.setItem('alma_streak', String(newStreak))
          localStorage.setItem('alma_last_practice', new Date().toISOString())
        }
        
        // Trigger unlock check
        get().updateStreak(newStreak)
      }
    }
  },

  /**
   * Navigate to a location in the 3D world
   */
  navigateTo: (location) => {
    if (get().unlockedLocations.includes(location)) {
      set({ 
        cameraTarget: location,
        fogOpacity: 0.3
      })
      return true
    } else {
      // Locked — show fog
      set({ fogOpacity: 1.0 })
      return false
    }
  },

  /**
   * Trigger fog burst effect (when unlocking)
   */
  triggerFogBurst: () => {
    set({ fogOpacity: 1.0 })
    setTimeout(() => {
      set({ fogOpacity: 0.0 })
    }, 1200)
  },

  /**
   * Camera shake effect
   */
  triggerCameraShake: (intensity = 10) => {
    set({ cameraShake: intensity })
    setTimeout(() => {
      set({ cameraShake: 0 })
    }, 500)
  },

  /**
   * Get unlock progress for UI
   */
  getUnlockProgress: () => {
    const streak = get().streak
    const schedule = [
      { day: 1, location: 'Home', emoji: '🏠' },
      { day: 3, location: 'School', emoji: '🏫' },
      { day: 5, location: 'Gym', emoji: '💪' },
      { day: 7, location: 'Cafetería', emoji: '☕' },
      { day: 10, location: 'Malecón', emoji: '🌅' },
      { day: 14, location: 'Forum', emoji: '🛍️' },
      { day: 21, location: 'Centro', emoji: '🏙️' },
      { day: 30, location: 'Full City + Holographic', emoji: '🌌' }
    ]
    
    return schedule.map(item => ({
      ...item,
      unlocked: streak >= item.day,
      daysRemaining: Math.max(0, item.day - streak)
    }))
  }
}))
