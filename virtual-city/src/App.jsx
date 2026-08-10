import { useState, useEffect } from 'react'
import SceneRouter from './scenes/SceneRouter.jsx'
import { useAlmaGameStore } from './store/useAlmaGameStore.js'

/**
 * App — AccentBridges Virtual City
 * 
 * The main entry point. Connects Alma's streak system
 * to the 3D world and handles:
 * - Initial loading screen
 * - Streak initialization from Android SharedPreferences
 * - Welcome overlay on first visit
 * - Fullscreen mode on mobile
 */

export default function App() {
  const [loaded, setLoaded] = useState(false)
  const [showWelcome, setShowWelcome] = useState(false)
  const [streak, setStreak] = useState(0)
  
  const updateStreak = useAlmaGameStore(s => s.updateStreak)
  const unlockedLocations = useAlmaGameStore(s => s.unlockedLocations)
  
  useEffect(() => {
    // === INITIALIZATION ===
    
    // 1. Check for streak from Android (broadcast) or localStorage
    const savedStreak = localStorage.getItem('alma_streak')
    const savedDate = localStorage.getItem('alma_last_practice')
    
    if (savedStreak) {
      const parsed = parseInt(savedStreak) || 0
      if (parsed > 0) {
        updateStreak(parsed)
        setStreak(parsed)
      }
    }
    
    // 2. Check if first visit
    const hasVisited = localStorage.getItem('alma_visited')
    if (!hasVisited) {
      setShowWelcome(true)
      localStorage.setItem('alma_visited', 'true')
    }
    
    // 3. Listen for streak updates from Android (broadcast)
    if (typeof window !== 'undefined') {
      window.addEventListener('alma-streak-update', (event) => {
        const newStreak = event.detail?.streak || 0
        if (newStreak > 0) {
          updateStreak(newStreak)
          setStreak(newStreak)
          localStorage.setItem('alma_streak', String(newStreak))
          localStorage.setItem('alma_last_practice', new Date().toISOString())
        }
      })
    }
    
    // 4. Fade out loading screen
    setTimeout(() => {
      const loading = document.getElementById('loading')
      if (loading) {
        loading.classList.add('fade')
        setTimeout(() => {
          loading.style.display = 'none'
          setLoaded(true)
        }, 500)
      } else {
        setLoaded(true)
      }
    }, 800)
    
  }, [])
  
  // === FULLSCREEN TOGGLE (mobile) ===
  const enterFullscreen = () => {
    const el = document.documentElement
    if (el.requestFullscreen) el.requestFullscreen()
    else if (el.webkitRequestFullscreen) el.webkitRequestFullscreen()
    setShowWelcome(false)
  }
  
  // === WELCOME OVERLAY ===
  if (showWelcome && loaded) {
    return (
      <div style={{
        position: 'fixed',
        top: 0, left: 0, right: 0, bottom: 0,
        background: 'linear-gradient(180deg, #0a0a1a 0%, #1a0a2e 50%, #0a1a2e 100%)',
        color: 'white',
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'center',
        fontFamily: 'sans-serif',
        zIndex: 1000,
        padding: '40px'
      }}>
        <div style={{ fontSize: '4rem', marginBottom: '20px' }}>🌌</div>
        <h1 style={{ fontSize: '2rem', marginBottom: '10px', textShadow: '0 0 20px rgba(255,107,53,0.5)' }}>
          Virtual City
        </h1>
        <p style={{ fontSize: '1rem', opacity: 0.7, marginBottom: '8px' }}>
          AccentBridges — Your Voice. Elevated.
        </p>
        <p style={{ fontSize: '0.9rem', opacity: 0.5, marginBottom: '30px', textAlign: 'center' }}>
          Practice your American English accent in a 3D world.
          Tap objects to hear phrases, then say them back.
          Your streak unlocks new locations in Culiacán.
        </p>
        
        <div style={{
          display: 'flex',
          gap: '12px',
          marginBottom: '30px',
          fontSize: '1.5rem'
        }}>
          <span>🏠</span>
          <span style={{ opacity: 0.3 }}>🏫</span>
          <span style={{ opacity: 0.3 }}>💪</span>
          <span style={{ opacity: 0.3 }}>☕</span>
          <span style={{ opacity: 0.3 }}>🌅</span>
          <span style={{ opacity: 0.3 }}>🛍️</span>
          <span style={{ opacity: 0.3 }}>🏙️</span>
          <span style={{ opacity: 0.3 }}>🌌</span>
        </div>
        
        <p style={{ fontSize: '0.85rem', opacity: 0.4, marginBottom: '20px' }}>
          🔊 Best experienced with sound on
        </p>
        
        <button
          onClick={enterFullscreen}
          style={{
            background: 'linear-gradient(135deg, #FF6B35 0%, #FF4500 100%)',
            color: 'white',
            border: 'none',
            padding: '16px 40px',
            borderRadius: '30px',
            fontSize: '1.1rem',
            fontWeight: 'bold',
            cursor: 'pointer',
            boxShadow: '0 4px 20px rgba(255,107,53,0.4)',
            transition: 'transform 0.2s'
          }}
        >
          Enter Virtual City 🚀
        </button>
      </div>
    )
  }
  
  // === MAIN VIEW ===
  return (
    <div style={{ width: '100vw', height: '100vh' }}>
      <SceneRouter />
      
      {/* Floating streak indicator */}
      <div style={{
        position: 'fixed',
        bottom: '10px',
        right: '10px',
        background: 'rgba(0,0,0,0.6)',
        color: '#FF6B35',
        padding: '6px 14px',
        borderRadius: '20px',
        fontSize: '0.85rem',
        fontFamily: 'sans-serif',
        fontWeight: 'bold',
        pointerEvents: 'none',
        zIndex: 100,
        backdropFilter: 'blur(10px)'
      }}>
        {useAlmaGameStore.getState().streak > 0 
          ? `${useAlmaGameStore.getState().streak} day streak 🔥`
          : 'Start practicing! 🎙'}
      </div>
    </div>
  )
}
