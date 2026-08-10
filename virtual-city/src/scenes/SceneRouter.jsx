import { useAlmaGameStore } from '../store/useAlmaGameStore'
import MaleconScene from './MaleconScene'
import HomeScene from './HomeScene'
import SchoolScene from './SchoolScene'
import GymScene from './GymScene'
import CafeteriaScene from './CafeteriaScene'
import ForumScene from './ForumScene'
import CentroScene from './CentroScene'
import FullCityScene from './FullCityScene'

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
 * 
 * ALL 8 ZONES BUILT ✅
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
      return <ForumScene />
    
    case 'centro':
      return <CentroScene />
    
    case 'full_city':
      return <FullCityScene />
    
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
