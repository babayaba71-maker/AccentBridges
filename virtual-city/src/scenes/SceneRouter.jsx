import { useAlmaGameStore } from '../store/useAlmaGameStore'
import MaleconScene from './MaleconScene'
import HomeScene from './HomeScene'
import SchoolScene from './SchoolScene'
import GymScene from './GymScene'
import CafeteriaScene from './CafeteriaScene'

/**
 * SceneRouter — Switches between Virtual City zones
 * based on unlocked locations from the streak system.
 * 
 * Unlock schedule:
 * Day 1  → Home (always open)
 * Day 3  → School
 * Day 5  → Gym
 * Day 7  → Cafetería
 * Day 10 → Malecón
 * Day 14 → Forum
 * Day 21 → Centro
 * Day 30 → Full City + Holographic
 */

export default function SceneRouter() {
  const cameraTarget = useAlmaGameStore(s => s.cameraTarget)
  
  switch (cameraTarget) {
    case 'home':
      return <HomeScene />
    
    case 'school':
      return <SchoolScene />
    
    case 'gym':
      return <GymScene />
    
    case 'cafeteria':
      return <CafeteriaScene />
    
    case 'malecon':
      return <MaleconScene />
    
    case 'forum':
      return (
        <div style={{
          display: 'flex', flexDirection: 'column',
          alignItems: 'center', justifyContent: 'center',
          height: '100vh',
          background: 'linear-gradient(180deg, #1a237e 0%, #0d47a1 100%)',
          color: 'white', fontFamily: 'sans-serif'
        }}>
          <div style={{ fontSize: '4rem' }}>🛍️</div>
          <h2 style={{ fontSize: '1.5rem' }}>Forum — Coming Soon</h2>
          <p style={{ opacity: 0.7 }}>Unlocked at Day 14 streak</p>
        </div>
      )
    
    case 'centro':
      return (
        <div style={{
          display: 'flex', flexDirection: 'column',
          alignItems: 'center', justifyContent: 'center',
          height: '100vh',
          background: 'linear-gradient(180deg, #263238 0%, #37474f 100%)',
          color: 'white', fontFamily: 'sans-serif'
        }}>
          <div style={{ fontSize: '4rem' }}>🏙️</div>
          <h2 style={{ fontSize: '1.5rem' }}>Centro — Coming Soon</h2>
          <p style={{ opacity: 0.7 }}>Unlocked at Day 21 streak</p>
        </div>
      )
    
    case 'full_city':
      return (
        <div style={{
          display: 'flex', flexDirection: 'column',
          alignItems: 'center', justifyContent: 'center',
          height: '100vh',
          background: 'linear-gradient(180deg, #0a0a1a 0%, #1a0a2e 50%, #0a1a2e 100%)',
          color: 'white', fontFamily: 'sans-serif'
        }}>
          <div style={{ fontSize: '5rem' }}>🌌</div>
          <h2 style={{ fontSize: '2rem', textShadow: '0 0 20px rgba(255,107,53,0.5)' }}>
            Full City + Holographic Mode
          </h2>
          <p style={{ fontSize: '1.2rem', opacity: 0.8 }}>All zones unlocked. Alma is holographic.</p>
          <div style={{ display: 'flex', gap: '20px', marginTop: '20px', flexWrap: 'wrap', justifyContent: 'center' }}>
            <button onClick={() => useAlmaGameStore.getState().navigateTo('home')} style={zoneBtn}>🏠</button>
            <button onClick={() => useAlmaGameStore.getState().navigateTo('school')} style={zoneBtn}>🏫</button>
            <button onClick={() => useAlmaGameStore.getState().navigateTo('gym')} style={zoneBtn}>💪</button>
            <button onClick={() => useAlmaGameStore.getState().navigateTo('cafeteria')} style={zoneBtn}>☕</button>
            <button onClick={() => useAlmaGameStore.getState().navigateTo('malecon')} style={zoneBtn}>🌅</button>
            <button onClick={() => useAlmaGameStore.getState().navigateTo('forum')} style={zoneBtn}>🛍️</button>
            <button onClick={() => useAlmaGameStore.getState().navigateTo('centro')} style={zoneBtn}>🏙️</button>
          </div>
        </div>
      )
    
    default:
      return <HomeScene />
  }
}

const zoneBtn = {
  fontSize: '2rem',
  padding: '12px 16px',
  borderRadius: '12px',
  border: '1px solid rgba(255,107,53,0.3)',
  background: 'rgba(255,107,53,0.1)',
  cursor: 'pointer',
  transition: 'all 0.3s'
}
