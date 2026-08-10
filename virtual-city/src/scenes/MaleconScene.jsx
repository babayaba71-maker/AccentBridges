import * as THREE from 'three'
import { useRef, useEffect, useState } from 'react'
import { useAlmaGameStore } from '../store/useAlmaGameStore'

/**
 * MaleconScene — 3D Malecón de Culiacán
 * 
 * Unlocked at Day 10 streak. Features:
 * - Sunset over the water
 * - Palm trees lining the boardwalk
 * - Interactive practice objects (bench, boat, seagull)
 * - Fog clears when unlocked
 * - Camera shake on unlock
 * - Haptic feedback on object tap
 * - TTS speaks American English phrases
 * - STT evaluates student pronunciation
 */

export default function MaleconScene() {
  const mountRef = useRef(null)
  const [selectedObject, setSelectedObject] = useState(null)
  const [isListening, setIsListening] = useState(false)
  const [feedback, setFeedback] = useState('')
  
  const streak = useAlmaGameStore(s => s.streak)
  const unlocked = useAlmaGameStore(s => s.unlockedLocations)
  const fogOpacity = useAlmaGameStore(s => s.fogOpacity)
  const cameraShake = useAlmaGameStore(s => s.cameraShake)
  const hapticEnabled = useAlmaGameStore(s => s.hapticEnabled)
  const triggerCameraShake = useAlmaGameStore(s => s.triggerCameraShake)
  
  const isUnlocked = unlocked.includes('malecon') || unlocked.includes('full_city')

  useEffect(() => {
    if (!mountRef.current || !isUnlocked) return
    
    let scene, camera, renderer, animationId
    let raycaster, mouse
    let objects3D = []
    
    // === SCENE SETUP ===
    scene = new THREE.Scene()
    scene.fog = new THREE.FogExp2(0xff6b35, fogOpacity * 0.05)
    
    camera = new THREE.PerspectiveCamera(60, window.innerWidth / window.innerHeight, 0.1, 1000)
    camera.position.set(0, 5, 15)
    camera.lookAt(0, 2, 0)
    
    renderer = new THREE.WebGLRenderer({ antialias: true, alpha: true })
    renderer.setSize(window.innerWidth, window.innerHeight)
    renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2))
    renderer.shadowMap.enabled = true
    mountRef.current.appendChild(renderer.domElement)
    
    raycaster = new THREE.Raycaster()
    mouse = new THREE.Vector2()
    
    // === LIGHTING — Golden hour sunset ===
    const ambientLight = new THREE.AmbientLight(0xff8c42, 0.6)
    scene.add(ambientLight)
    
    const sunLight = new THREE.DirectionalLight(0xffb347, 1.2)
    sunLight.position.set(-20, 15, -10)
    sunLight.castShadow = true
    sunLight.shadow.mapSize.width = 2048
    sunLight.shadow.mapSize.height = 2048
    scene.add(sunLight)
    
    const rimLight = new THREE.DirectionalLight(0xff4500, 0.4)
    rimLight.position.set(20, 10, 5)
    scene.add(rimLight)
    
    // === WATER — The lagoon ===
    const waterGeometry = new THREE.PlaneGeometry(200, 200, 50, 50)
    const waterMaterial = new THREE.MeshPhongMaterial({
      color: 0x1a5276,
      shininess: 100,
      transparent: true,
      opacity: 0.85,
      side: THREE.DoubleSide
    })
    const water = new THREE.Mesh(waterGeometry, waterMaterial)
    water.rotation.x = -Math.PI / 2
    water.position.y = -0.5
    water.receiveShadow = true
    scene.add(water)
    
    // Animate water vertices for gentle waves
    const waterPositions = waterGeometry.attributes.position.array
    
    // === BOARDWALK ===
    const boardwalkGeo = new THREE.BoxGeometry(30, 0.3, 4)
    const boardwalkMat = new THREE.MeshPhongMaterial({ color: 0x8B4513 })
    const boardwalk = new THREE.Mesh(boardwalkGeo, boardwalkMat)
    boardwalk.position.set(0, 0, 3)
    boardwalk.castShadow = true
    boardwalk.receiveShadow = true
    scene.add(boardwalk)
    
    // === PALM TREES ===
    const palmPositions = [
      { x: -12, z: 3 },
      { x: -8, z: 3 },
      { x: 8, z: 3 },
      { x: 12, z: 3 },
      { x: -4, z: 8 },
      { x: 4, z: 8 }
    ]
    
    palmPositions.forEach((pos, i) => {
      // Trunk
      const trunkGeo = new THREE.CylinderGeometry(0.15, 0.25, 4, 8)
      const trunkMat = new THREE.MeshPhongMaterial({ color: 0x6B4226 })
      const trunk = new THREE.Mesh(trunkGeo, trunkMat)
      trunk.position.set(pos.x, 2, pos.z)
      trunk.castShadow = true
      scene.add(trunk)
      
      // Leaves (simple fan shapes)
      for (let j = 0; j < 6; j++) {
        const leafGeo = new THREE.ConeGeometry(0.6, 2.5, 4)
        const leafMat = new THREE.MeshPhongMaterial({ color: 0x2E8B57 })
        const leaf = new THREE.Mesh(leafGeo, leafMat)
        const angle = (j / 6) * Math.PI * 2
        leaf.position.set(
          pos.x + Math.cos(angle) * 0.8,
          4 + Math.sin(angle * 0.3) * 0.2,
          pos.z + Math.sin(angle) * 0.8
        )
        leaf.rotation.z = Math.cos(angle) * 0.5
        leaf.rotation.x = Math.sin(angle) * 0.5
        leaf.castShadow = true
        scene.add(leaf)
        
        // Animate leaves swaying
        leaf.userData = { swayBase: angle, swaySpeed: 0.5 + Math.random() * 0.3, palmIndex: i }
      }
    })
    
    // === SUN — Big orange sphere on the horizon ===
    const sunGeo = new THREE.SphereGeometry(3, 32, 32)
    const sunMat = new THREE.MeshBasicMaterial({ color: 0xFF6B35, transparent: true, opacity: 0.9 })
    const sun = new THREE.Mesh(sunGeo, sunMat)
    sun.position.set(-15, 3, -40)
    scene.add(sun)
    
    // Sun glow
    const glowGeo = new THREE.SphereGeometry(4.5, 32, 32)
    const glowMat = new THREE.MeshBasicMaterial({ color: 0xFFB347, transparent: true, opacity: 0.3 })
    const sunGlow = new THREE.Mesh(glowGeo, glowMat)
    sunGlow.position.copy(sun.position)
    scene.add(sunGlow)
    
    // === INTERACTIVE PRACTICE OBJECTS ===
    
    // 1. BENCH — "I sit on the bench and watch the sunset"
    const benchGeo = new THREE.BoxGeometry(2, 0.5, 0.8)
    const benchMat = new THREE.MeshPhongMaterial({ color: 0x4A4A4A })
    const bench = new THREE.Mesh(benchGeo, benchMat)
    bench.position.set(-3, 0.5, 2)
    bench.castShadow = true
    bench.userData = {
      practicePhrase: "I sit on the bench and watch the sunset",
      phoneticFocus: "TH in 'the', CH in 'watch'",
      emoji: "🪑",
      name: "Bench",
      color: 0x4A4A4A
    }
    scene.add(bench)
    objects3D.push(bench)
    
    // 2. BOAT — "The boat sails across the calm water"
    const boatHullGeo = new THREE.ConeGeometry(0.8, 2, 4)
    const boatMat = new THREE.MeshPhongMaterial({ color: 0xD2691E })
    const boatHull = new THREE.Mesh(boatHullGeo, boatMat)
    boatHull.rotation.z = Math.PI / 2
    boatHull.position.set(5, 0.2, -5)
    boatHull.castShadow = true
    boatHull.userData = {
      practicePhrase: "The boat sails across the calm water",
      phoneticFocus: "TH in 'the', R in 'across'",
      emoji: "⛵",
      name: "Boat",
      color: 0xD2691E
    }
    scene.add(boatHull)
    objects3D.push(boatHull)
    
    // 3. SEAGULL — "The seagull flies over the ocean"
    const seagullBodyGeo = new THREE.SphereGeometry(0.3, 8, 8)
    const seagullMat = new THREE.MeshPhongMaterial({ color: 0xF5F5F5 })
    const seagull = new THREE.Mesh(seagullBodyGeo, seagullMat)
    seagull.position.set(-2, 6, -10)
    seagull.castShadow = true
    seagull.userData = {
      practicePhrase: "The seagull flies over the ocean",
      phoneticFocus: "TH in 'the', L in 'flies'",
      emoji: "🦅",
      name: "Seagull",
      color: 0xF5F5F5
    }
    scene.add(seagull)
    objects3D.push(seagull)
    
    // === ANIMATION LOOP ===
    let time = 0
    const animate = () => {
      animationId = requestAnimationFrame(animate)
      time += 0.016
      
      // Water wave animation
      for (let i = 0; i < waterPositions.length; i += 3) {
        const x = waterPositions[i]
        const y = waterPositions[i + 1]
        waterPositions[i + 2] = Math.sin(x * 0.1 + time) * 0.15 + Math.cos(y * 0.1 + time * 0.7) * 0.1
      }
      waterGeometry.attributes.position.needsUpdate = true
      waterGeometry.computeVertexNormals()
      
      // Sun glow pulse
      sunGlow.scale.setScalar(1 + Math.sin(time * 0.5) * 0.05)
      
      // Seagull floating
      seagull.position.y = 6 + Math.sin(time * 0.8) * 0.5
      seagull.position.x = -2 + Math.sin(time * 0.3) * 2
      
      // Boat gentle bobbing
      boatHull.position.y = 0.2 + Math.sin(time * 1.2) * 0.1
      boatHull.rotation.z = Math.PI / 2 + Math.sin(time * 0.8) * 0.05
      
      // Camera shake
      if (cameraShake > 0) {
        camera.position.x = (Math.random() - 0.5) * cameraShake * 0.1
        camera.position.y = 5 + (Math.random() - 0.5) * cameraShake * 0.1
      } else {
        // Gentle camera drift
        camera.position.x = Math.sin(time * 0.1) * 0.5
        camera.position.y = 5 + Math.sin(time * 0.15) * 0.3
      }
      camera.lookAt(0, 2, 0)
      
      // Update fog
      scene.fog.density = fogOpacity * 0.05
      
      renderer.render(scene, camera)
    }
    animate()
    
    // === CLICK HANDLER — Raycaster for 3D objects ===
    const handleClick = (event) => {
      mouse.x = (event.clientX / window.innerWidth) * 2 - 1
      mouse.y = -(event.clientY / window.innerHeight) * 2 + 1
      raycaster.setFromCamera(mouse, camera)
      const intersects = raycaster.intersectObjects(objects3D)
      
      if (intersects.length > 0) {
        const obj = intersects[0].object
        const data = obj.userData
        
        setSelectedObject(data)
        setFeedback('')
        
        // Haptic feedback
        if (hapticEnabled && navigator.vibrate) {
          navigator.vibrate(50)
        }
        
        // TTS — Speak the practice phrase
        if ('speechSynthesis' in window) {
          const utterance = new SpeechSynthesisUtterance(data.practicePhrase)
          utterance.lang = 'en-US'
          utterance.rate = 0.85
          speechSynthesis.speak(utterance)
        }
        
        // Highlight selected object
        objects3D.forEach(o => {
          o.material.emissive.setHex(0x000000)
        })
        obj.material.emissive.setHex(0x441111)
      }
    }
    
    renderer.domElement.addEventListener('click', handleClick)
    
    // === RESIZE HANDLER ===
    const handleResize = () => {
      camera.aspect = window.innerWidth / window.innerHeight
      camera.updateProjectionMatrix()
      renderer.setSize(window.innerWidth, window.innerHeight)
    }
    window.addEventListener('resize', handleResize)
    
    // Cleanup
    return () => {
      cancelAnimationFrame(animationId)
      window.removeEventListener('resize', handleResize)
      renderer.domElement.removeEventListener('click', handleClick)
      if (mountRef.current && renderer.domElement) {
        mountRef.current.removeChild(renderer.domElement)
      }
      renderer.dispose()
    }
  }, [isUnlocked, fogOpacity, cameraShake, hapticEnabled])
  
  // === STT — Listen and evaluate ===
  const startListening = () => {
    if (!selectedObject || !('webkitSpeechRecognition' in window) && !('SpeechRecognition' in window)) {
      setFeedback('Voice recognition not available on this device.')
      return
    }
    
    setIsListening(true)
    setFeedback('🎤 Listening...')
    
    const SpeechRecognition = window.SpeechRecognition || window.webkitSpeechRecognition
    const recognition = new SpeechRecognition()
    recognition.lang = 'en-US'
    recognition.continuous = false
    recognition.interimResults = false
    
    recognition.onresult = (event) => {
      const transcript = event.results[0][0].transcript.toLowerCase()
      const confidence = event.results[0][0].confidence
      const target = selectedObject.practicePhrase.toLowerCase()
      
      // Word-by-word matching
      const targetWords = target.split(' ')
      const spokenWords = transcript.split(' ')
      let matches = 0
      for (const word of spokenWords) {
        if (targetWords.includes(word)) matches++
      }
      const accuracy = Math.round((matches / targetWords.length) * 100)
      
      if (accuracy >= 85 && confidence > 0.7) {
        setFeedback(`🔥 ${accuracy}% accuracy! Excellent, Clyde!`)
        if (navigator.vibrate) navigator.vibrate([100, 50, 200])
      } else if (accuracy >= 60) {
        setFeedback(`💪 ${accuracy}% — Good effort! Focus on: ${selectedObject.phoneticFocus}`)
      } else {
        setFeedback(`📖 ${accuracy}% — Try again. Say: "${selectedObject.practicePhrase}"`)
      }
      setIsListening(false)
    }
    
    recognition.onerror = () => {
      setFeedback('Could not hear you. Try again.')
      setIsListening(false)
    }
    
    recognition.onend = () => setIsListening(false)
    recognition.start()
  }
  
  // === LOCKED VIEW ===
  if (!isUnlocked) {
    return (
      <div style={{
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'center',
        height: '100vh',
        background: 'linear-gradient(180deg, #1a1a2e 0%, #16213e 100%)',
        color: 'white',
        fontFamily: 'sans-serif'
      }}>
        <div style={{ fontSize: '4rem', marginBottom: '20px' }}>🌅</div>
        <h2 style={{ fontSize: '1.5rem', marginBottom: '10px' }}>Malecón — Locked</h2>
        <p style={{ fontSize: '1rem', opacity: 0.7 }}>
          Reach a {10} day streak to unlock the Malecón
        </p>
        <p style={{ fontSize: '2rem', marginTop: '20px' }}>
          Current streak: {streak} 🔥
        </p>
        <p style={{ fontSize: '0.9rem', opacity: 0.5, marginTop: '15px' }}>
          {10 - streak} more days to unlock
        </p>
      </div>
    )
  }
  
  // === UNLOCKED VIEW ===
  return (
    <div style={{ position: 'relative', width: '100vw', height: '100vh', overflow: 'hidden' }}>
      <div ref={mountRef} style={{ width: '100%', height: '100%' }} />
      
      {/* Top HUD */}
      <div style={{
        position: 'absolute',
        top: '20px',
        left: '20px',
        background: 'rgba(0,0,0,0.6)',
        color: 'white',
        padding: '12px 20px',
        borderRadius: '12px',
        fontFamily: 'sans-serif',
        backdropFilter: 'blur(10px)'
      }}>
        <div style={{ fontSize: '1.2rem', fontWeight: 'bold' }}>🌅 Malecón</div>
        <div style={{ fontSize: '0.9rem', opacity: 0.8 }}>Streak: {streak} 🔥 | {unlocked.length} zones unlocked</div>
      </div>
      
      {/* Practice Panel */}
      {selectedObject && (
        <div style={{
          position: 'absolute',
          bottom: '20px',
          left: '50%',
          transform: 'translateX(-50%)',
          background: 'rgba(0,0,0,0.75)',
          color: 'white',
          padding: '20px 30px',
          borderRadius: '16px',
          fontFamily: 'sans-serif',
          backdropFilter: 'blur(15px)',
          maxWidth: '90vw',
          textAlign: 'center'
        }}>
          <div style={{ fontSize: '2rem', marginBottom: '8px' }}>{selectedObject.emoji} {selectedObject.name}</div>
          <div style={{ fontSize: '1.1rem', marginBottom: '6px', fontStyle: 'italic' }}>
            "{selectedObject.practicePhrase}"
          </div>
          <div style={{ fontSize: '0.85rem', opacity: 0.6, marginBottom: '12px' }}>
            Focus: {selectedObject.phoneticFocus}
          </div>
          
          <button
            onClick={startListening}
            disabled={isListening}
            style={{
              background: isListening ? '#FF6B35' : '#FF4500',
              color: 'white',
              border: 'none',
              padding: '12px 30px',
              borderRadius: '25px',
              fontSize: '1rem',
              cursor: isListening ? 'wait' : 'pointer',
              fontWeight: 'bold'
            }}
          >
            {isListening ? '🎤 Listening...' : '🎤 Say it!'}
          </button>
          
          {feedback && (
            <div style={{
              marginTop: '12px',
              padding: '8px 16px',
              background: 'rgba(255,107,53,0.2)',
              borderRadius: '8px',
              fontSize: '0.95rem'
            }}>
              {feedback}
            </div>
          )}
        </div>
      )}
    </div>
  )
}
