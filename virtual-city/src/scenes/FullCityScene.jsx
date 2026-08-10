import * as THREE from 'three'
import { useRef, useEffect, useState } from 'react'
import { useAlmaGameStore } from '../store/useAlmaGameStore'

/**
 * FullCityScene — Holographic 3D City Map (Day 30 streak unlock)
 * 
 * The ultimate view — all 7 zones visible as a holographic mini-city.
 * Each zone is a floating platform with its emoji and color.
 * Clicking a zone navigates to it.
 * 
 * Holographic effects: scan lines, grid floor, glowing edges, particles.
 */

export default function FullCityScene() {
  const mountRef = useRef(null)
  const [selectedZone, setSelectedZone] = useState(null)
  
  const streak = useAlmaGameStore(s => s.streak)
  const unlocked = useAlmaGameStore(s => s.unlockedLocations)
  const masteryPoints = useAlmaGameStore(s => s.masteryPoints)
  const navigateTo = useAlmaGameStore(s => s.navigateTo)
  const hapticEnabled = useAlmaGameStore(s => s.hapticEnabled)
  
  const isUnlocked = unlocked.includes('full_city')

  useEffect(() => {
    if (!mountRef.current || !isUnlocked) return
    
    let scene, camera, renderer, animationId
    let raycaster, mouse
    let zoneMeshes = []
    
    scene = new THREE.Scene()
    scene.fog = new THREE.FogExp2(0x0a0a2a, 0.02)
    scene.background = new THREE.Color(0x05051a)
    
    camera = new THREE.PerspectiveCamera(50, window.innerWidth / window.innerHeight, 0.1, 200)
    camera.position.set(0, 15, 25)
    camera.lookAt(0, 0, 0)
    
    renderer = new THREE.WebGLRenderer({ antialias: true, alpha: false })
    renderer.setSize(window.innerWidth, window.innerHeight)
    renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2))
    renderer.shadowMap.enabled = true
    renderer.shadowMap.type = THREE.PCFSoftShadowMap
    renderer.toneMapping = THREE.ACESFilmicToneMapping
    renderer.toneMappingExposure = 1.3
    mountRef.current.appendChild(renderer.domElement)
    
    raycaster = new THREE.Raycaster()
    mouse = new THREE.Vector2()
    
    // === LIGHTING — HOLOGRAPHIC ===
    const ambient = new THREE.AmbientLight(0x4466aa, 0.5)
    scene.add(ambient)
    
    const hemiLight = new THREE.HemisphereLight(0x6688ff, 0x110033, 0.4)
    scene.add(hemiLight)
    
    const centerLight = new THREE.PointLight(0xff6b35, 2, 30)
    centerLight.position.set(0, 5, 0)
    scene.add(centerLight)
    
    const blueLight = new THREE.PointLight(0x3b9eff, 1.5, 25)
    blueLight.position.set(-10, 3, -10)
    scene.add(blueLight)
    
    const purpleLight = new THREE.PointLight(0xaa44ff, 1.5, 25)
    purpleLight.position.set(10, 3, 10)
    scene.add(purpleLight)
    
    // === HOLOGRAPHIC GRID FLOOR ===
    const gridSize = 30
    const gridDivisions = 30
    const grid = new THREE.GridHelper(gridSize, gridDivisions, 0xff6b35, 0x224466)
    grid.position.y = 0
    grid.material.transparent = true
    grid.material.opacity = 0.5
    scene.add(grid)
    
    // Floor disc (dark reflective)
    const discGeo = new THREE.CircleGeometry(15, 64)
    const discMat = new THREE.MeshStandardMaterial({
      color: 0x0a0a2a, roughness: 0.1, metalness: 0.9,
      emissive: 0x0a0022, emissiveIntensity: 0.3
    })
    const disc = new THREE.Mesh(discGeo, discMat)
    disc.rotation.x = -Math.PI / 2
    disc.receiveShadow = true
    scene.add(disc)
    
    // === ZONE PLATFORMS ===
    const zones = [
      { name: 'home', emoji: '🏠', color: 0x44aaff, pos: [0, 0, 6], size: 2 },
      { name: 'school', emoji: '🏫', color: 0x66ddff, pos: [-6, 0, 2], size: 2 },
      { name: 'gym', emoji: '💪', color: 0xff44aa, pos: [6, 0, 2], size: 2 },
      { name: 'cafeteria', emoji: '☕', color: 0xffaa44, pos: [-6, 0, -4], size: 2 },
      { name: 'malecon', emoji: '🌅', color: 0xff8844, pos: [6, 0, -4], size: 2 },
      { name: 'forum', emoji: '🛍️', color: 0xaa44ff, pos: [-3, 0, -8], size: 2 },
      { name: 'centro', emoji: '🏙️', color: 0x44ffaa, pos: [3, 0, -8], size: 2 },
    ]
    
    zones.forEach((zone) => {
      // Platform base (hexagonal)
      const platGeo = new THREE.CylinderGeometry(zone.size, zone.size, 0.3, 6)
      const platMat = new THREE.MeshStandardMaterial({
        color: zone.color,
        emissive: zone.color,
        emissiveIntensity: 0.3,
        roughness: 0.3,
        metalness: 0.7,
        transparent: true,
        opacity: 0.85
      })
      const platform = new THREE.Mesh(platGeo, platMat)
      platform.position.set(zone.pos[0], 0.15, zone.pos[2])
      platform.castShadow = true
      platform.userData = { zoneName: zone.name, emoji: zone.emoji, color: zone.color }
      scene.add(platform)
      zoneMeshes.push(platform)
      
      // Glowing edge ring
      const ringGeo = new THREE.TorusGeometry(zone.size, 0.05, 8, 32)
      const ringMat = new THREE.MeshBasicMaterial({ color: zone.color, transparent: true, opacity: 0.8 })
      const ring = new THREE.Mesh(ringGeo, ringMat)
      ring.position.set(zone.pos[0], 0.32, zone.pos[2])
      ring.rotation.x = Math.PI / 2
      ring.userData = { isRing: true, parentZone: zone.name, color: zone.color }
      scene.add(ring)
      
      // Zone symbol (floating cube above)
      const symGeo = new THREE.BoxGeometry(1, 1, 1)
      const symMat = new THREE.MeshStandardMaterial({
        color: zone.color,
        emissive: zone.color,
        emissiveIntensity: 0.5,
        transparent: true,
        opacity: 0.7,
        roughness: 0.2
      })
      const symbol = new THREE.Mesh(symGeo, symMat)
      symbol.position.set(zone.pos[0], 2, zone.pos[2])
      symbol.castShadow = true
      symbol.userData = { zoneName: zone.name, emoji: zone.emoji, color: zone.color, isSymbol: true }
      scene.add(symbol)
      zoneMeshes.push(symbol)
      
      // Light beam above zone
      const beamGeo = new THREE.CylinderGeometry(0.5, 0.5, 8, 8, 1, true)
      const beamMat = new THREE.MeshBasicMaterial({
        color: zone.color, transparent: true, opacity: 0.15, side: THREE.DoubleSide
      })
      const beam = new THREE.Mesh(beamGeo, beamMat)
      beam.position.set(zone.pos[0], 4.5, zone.pos[2])
      beam.userData = { isBeam: true, color: zone.color }
      scene.add(beam)
    })
    
    // === CENTER PILLAR — ALMA ===
    const pillarGeo = new THREE.CylinderGeometry(0.5, 0.8, 6, 8)
    const pillarMat = new THREE.MeshStandardMaterial({
      color: 0xff6b35,
      emissive: 0xff6b35,
      emissiveIntensity: 0.6,
      roughness: 0.2,
      metalness: 0.8
    })
    const pillar = new THREE.Mesh(pillarGeo, pillarMat)
    pillar.position.set(0, 3, 0)
    pillar.castShadow = true
    scene.add(pillar)
    
    // Alma orb on top
    const almaGeo = new THREE.IcosahedronGeometry(0.8, 1)
    const almaMat = new THREE.MeshStandardMaterial({
      color: 0xffffff,
      emissive: 0xff6b35,
      emissiveIntensity: 0.8,
      roughness: 0.1,
      metalness: 0.9,
      wireframe: true
    })
    const almaOrb = new THREE.Mesh(almaGeo, almaMat)
    almaOrb.position.set(0, 7, 0)
    scene.add(almaOrb)
    
    // === PARTICLES — floating holographic dots ===
    const particleCount = 200
    const particleGeo = new THREE.BufferGeometry()
    const positions = new Float32Array(particleCount * 3)
    const colors = new Float32Array(particleCount * 3)
    
    for (let i = 0; i < particleCount; i++) {
      positions[i * 3] = (Math.random() - 0.5) * 30
      positions[i * 3 + 1] = Math.random() * 10
      positions[i * 3 + 2] = (Math.random() - 0.5) * 30
      
      const c = Math.random()
      if (c < 0.5) { colors[i * 3] = 1; colors[i * 3 + 1] = 0.42; colors[i * 3 + 2] = 0.21 }
      else { colors[i * 3] = 0.23; colors[i * 3 + 1] = 0.62; colors[i * 3 + 2] = 1 }
    }
    
    particleGeo.setAttribute('position', new THREE.BufferAttribute(positions, 3))
    particleGeo.setAttribute('color', new THREE.BufferAttribute(colors, 3))
    
    const particleMat = new THREE.PointsMaterial({
      size: 0.08,
      vertexColors: true,
      transparent: true,
      opacity: 0.6,
      blending: THREE.AdditiveBlending
    })
    const particles = new THREE.Points(particleGeo, particleMat)
    scene.add(particles)
    
    // === ANIMATION LOOP ===
    let time = 0
    const animate = () => {
      animationId = requestAnimationFrame(animate)
      time += 0.016
      
      // Alma orb rotation + float
      almaOrb.rotation.y += 0.02
      almaOrb.rotation.x += 0.01
      almaOrb.position.y = 7 + Math.sin(time * 0.5) * 0.3
      
      // Zone symbols rotate
      zoneMeshes.forEach(m => {
        if (m.userData.isSymbol) {
          m.rotation.y += 0.01
          m.position.y = 2 + Math.sin(time + m.position.x * 0.1) * 0.15
        }
      })
      
      // Rings pulse
      scene.children.forEach(c => {
        if (c.userData.isRing) {
          c.scale.setScalar(1 + Math.sin(time * 1.5 + c.position.x) * 0.05)
        }
        if (c.userData.isBeam) {
          c.material.opacity = 0.1 + Math.sin(time * 0.8 + c.position.z) * 0.05
        }
      })
      
      // Particles drift up
      const posArr = particleGeo.attributes.position.array
      for (let i = 0; i < particleCount; i++) {
        posArr[i * 3 + 1] += 0.02
        if (posArr[i * 3 + 1] > 10) posArr[i * 3 + 1] = 0
      }
      particleGeo.attributes.position.needsUpdate = true
      
      // Grid pulse
      grid.material.opacity = 0.4 + Math.sin(time * 0.5) * 0.1
      
      // Camera slow orbit
      camera.position.x = Math.sin(time * 0.04) * 25
      camera.position.z = Math.cos(time * 0.04) * 25
      camera.position.y = 15 + Math.sin(time * 0.06) * 2
      camera.lookAt(0, 2, 0)
      
      renderer.render(scene, camera)
    }
    animate()
    
    // === CLICK HANDLER ===
    const handleClick = (event) => {
      const rect = renderer.domElement.getBoundingClientRect()
      mouse.x = ((event.clientX - rect.left) / rect.width) * 2 - 1
      mouse.y = -((event.clientY - rect.top) / rect.height) * 2 + 1
      raycaster.setFromCamera(mouse, camera)
      const intersects = raycaster.intersectObjects(zoneMeshes)
      
      if (intersects.length > 0) {
        const obj = intersects[0].object
        const zoneName = obj.userData.zoneName
        
        if (zoneName) {
          setSelectedZone(zoneName)
          
          if (hapticEnabled && navigator.vibrate) navigator.vibrate([50, 30, 100])
          
          if ('speechSynthesis' in window) {
            speechSynthesis.cancel()
            const utterance = new SpeechSynthesisUtterance(`Entering ${zoneName}`)
            utterance.lang = 'en-US'
            utterance.rate = 0.9
            speechSynthesis.speak(utterance)
          }
          
          // Navigate after brief delay
          setTimeout(() => navigateTo(zoneName), 800)
        }
      }
    }
    
    renderer.domElement.addEventListener('click', handleClick)
    
    const handleResize = () => {
      camera.aspect = window.innerWidth / window.innerHeight
      camera.updateProjectionMatrix()
      renderer.setSize(window.innerWidth, window.innerHeight)
    }
    window.addEventListener('resize', handleResize)
    
    return () => {
      cancelAnimationFrame(animationId)
      window.removeEventListener('resize', handleResize)
      renderer.domElement.removeEventListener('click', handleClick)
      if (mountRef.current && renderer.domElement) {
        mountRef.current.removeChild(renderer.domElement)
      }
      renderer.dispose()
    }
  }, [isUnlocked, hapticEnabled, navigateTo])
  
  // === LOCKED VIEW ===
  if (!isUnlocked) {
    return (
      <div style={{
        display: 'flex', flexDirection: 'column',
        alignItems: 'center', justifyContent: 'center',
        height: '100vh',
        background: 'linear-gradient(180deg, #05051a 0%, #1a0a2e 50%, #0a1a2e 100%)',
        color: 'white', fontFamily: 'sans-serif'
      }}>
        <div style={{ fontSize: '5rem', marginBottom: '20px' }}>🌌</div>
        <h2 style={{ fontSize: '2rem', marginBottom: '10px', textShadow: '0 0 20px rgba(255,107,53,0.5)' }}>
          Full City — Locked
        </h2>
        <p style={{ fontSize: '1rem', opacity: 0.7, textAlign: 'center', maxWidth: '300px' }}>
          Reach a 30 day streak to unlock the Holographic Full City Mode
        </p>
        <p style={{ fontSize: '2.5rem', marginTop: '20px' }}>Current streak: {streak} 🔥</p>
        <p style={{ fontSize: '0.9rem', opacity: 0.5, marginTop: '15px' }}>
          {Math.max(0, 30 - streak)} more days to unlock
        </p>
        <p style={{ fontSize: '0.8rem', opacity: 0.4, marginTop: '10px' }}>
          Mastery Points: {masteryPoints}
        </p>
      </div>
    )
  }
  
  // === UNLOCKED VIEW ===
  return (
    <div style={{ position: 'relative', width: '100vw', height: '100vh', overflow: 'hidden' }}>
      <div ref={mountRef} style={{ width: '100%', height: '100%' }} />
      
      <div style={{
        position: 'absolute', top: '20px', left: '20px',
        background: 'rgba(10,10,40,0.8)', color: 'white',
        padding: '12px 20px', borderRadius: '12px',
        fontFamily: 'sans-serif', backdropFilter: 'blur(10px)',
        border: '1px solid rgba(255,107,53,0.3)'
      }}>
        <div style={{ fontSize: '1.2rem', fontWeight: 'bold', textShadow: '0 0 10px rgba(255,107,53,0.5)' }}>🌌 Full City</div>
        <div style={{ fontSize: '0.9rem', opacity: 0.8 }}>
          Streak: {streak} 🔥 | Mastery: {masteryPoints} pts
        </div>
      </div>
      
      <div style={{
        position: 'absolute', top: '20px', right: '20px',
        background: 'rgba(10,10,40,0.8)', color: 'white',
        padding: '12px 20px', borderRadius: '12px',
        fontFamily: 'sans-serif', backdropFilter: 'blur(10px)',
        border: '1px solid rgba(255,107,53,0.3)',
        fontSize: '0.85rem', opacity: 0.7
      }}>
        Click a zone to enter 👆
      </div>
      
      {selectedZone && (
        <div style={{
          position: 'absolute', bottom: '40px', left: '50%',
          transform: 'translateX(-50%)',
          background: 'rgba(10,10,40,0.85)', color: 'white',
          padding: '16px 40px', borderRadius: '20px',
          fontFamily: 'sans-serif', backdropFilter: 'blur(15px)',
          border: '1px solid rgba(255,107,53,0.4)',
          fontSize: '1.1rem', textShadow: '0 0 10px rgba(255,107,53,0.3)'
        }}>
          Entering {selectedZone}...
        </div>
      )}
    </div>
  )
}
