import * as THREE from 'three'
import { useRef, useEffect, useState } from 'react'
import { useAlmaGameStore } from '../store/useAlmaGameStore'

/**
 * GymScene — 3D Gym environment (Day 5 streak unlock)
 * 
 * Interactive practice objects:
 * - 🏋️ Dumbbell → "I lift the heavy dumbbell over my head"
 * - 🏃 Treadmill → "I run on the treadmill every morning"
 * - 🧘 Yoga Mat → "I stretch on the yoga mat before class"
 * - 🏀 Basketball → "I throw the basketball into the hoop"
 * - 🚴 Bike → "I ride the stationary bike for thirty minutes"
 * 
 * Bright gym lighting — LED panels + accent neon strips.
 */

export default function GymScene() {
  const mountRef = useRef(null)
  const [selectedObject, setSelectedObject] = useState(null)
  const [isListening, setIsListening] = useState(false)
  const [feedback, setFeedback] = useState('')
  
  const streak = useAlmaGameStore(s => s.streak)
  const unlocked = useAlmaGameStore(s => s.unlockedLocations)
  const cameraShake = useAlmaGameStore(s => s.cameraShake)
  const hapticEnabled = useAlmaGameStore(s => s.hapticEnabled)
  const masteryPoints = useAlmaGameStore(s => s.masteryPoints)
  
  const isUnlocked = unlocked.includes('gym') || unlocked.includes('full_city')

  useEffect(() => {
    if (!mountRef.current || !isUnlocked) return
    
    let scene, camera, renderer, animationId
    let raycaster, mouse
    let objects3D = []
    
    scene = new THREE.Scene()
    scene.fog = new THREE.FogExp2(0x2a3a3a, 0.015)
    scene.background = new THREE.Color(0x1a2a2a)
    
    camera = new THREE.PerspectiveCamera(60, window.innerWidth / window.innerHeight, 0.1, 100)
    camera.position.set(0, 4.5, 13)
    camera.lookAt(0, 2, 0)
    
    renderer = new THREE.WebGLRenderer({ antialias: true, alpha: false })
    renderer.setSize(window.innerWidth, window.innerHeight)
    renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2))
    renderer.shadowMap.enabled = true
    renderer.shadowMap.type = THREE.PCFSoftShadowMap
    renderer.toneMapping = THREE.ACESFilmicToneMapping
    renderer.toneMappingExposure = 1.4
    mountRef.current.appendChild(renderer.domElement)
    
    raycaster = new THREE.Raycaster()
    mouse = new THREE.Vector2()
    
    // === LIGHTING — BRIGHT GYM ===
    const ambient = new THREE.AmbientLight(0xddeeff, 0.8)
    scene.add(ambient)
    
    const hemiLight = new THREE.HemisphereLight(0xcceeff, 0x4a4a4a, 0.5)
    hemiLight.position.set(0, 8, 0)
    scene.add(hemiLight)
    
    // LED ceiling panels (4)
    for (const [x, z] of [[-4, -3], [4, -3], [-4, 3], [4, 3]]) {
      const panelLight = new THREE.PointLight(0xffffff, 2.0, 12)
      panelLight.position.set(x, 6.5, z)
      scene.add(panelLight)
      
      const fixtureGeo = new THREE.BoxGeometry(2.5, 0.08, 2.5)
      const fixtureMat = new THREE.MeshStandardMaterial({
        color: 0xffffff, emissive: 0xffffff, emissiveIntensity: 0.9, roughness: 0.2
      })
      const fixture = new THREE.Mesh(fixtureGeo, fixtureMat)
      fixture.position.set(x, 7, z)
      scene.add(fixture)
    }
    
    // Neon accent strips (orange + blue)
    const neonOrange = new THREE.PointLight(0xff6b35, 0.6, 15)
    neonOrange.position.set(-9, 3, 0)
    scene.add(neonOrange)
    
    const neonBlue = new THREE.PointLight(0x3b9eff, 0.6, 15)
    neonBlue.position.set(9, 3, 0)
    scene.add(neonBlue)
    
    // Directional fill
    const fillLight = new THREE.DirectionalLight(0xffffff, 0.5)
    fillLight.position.set(0, 10, 10)
    scene.add(fillLight)
    
    // === FLOOR — Rubber gym floor ===
    const floorGeo = new THREE.PlaneGeometry(20, 20)
    const floorMat = new THREE.MeshStandardMaterial({
      color: 0x3a3a3a, roughness: 0.8, metalness: 0.1
    })
    const floor = new THREE.Mesh(floorGeo, floorMat)
    floor.rotation.x = -Math.PI / 2
    floor.receiveShadow = true
    scene.add(floor)
    
    // Floor stripes (neon lines)
    for (const [x, z, color] of [[0, -5, 0xff6b35], [0, 5, 0x3b9eff]]) {
      const stripeGeo = new THREE.PlaneGeometry(16, 0.15)
      const stripeMat = new THREE.MeshStandardMaterial({
        color: color, emissive: color, emissiveIntensity: 0.5, roughness: 0.3
      })
      const stripe = new THREE.Mesh(stripeGeo, stripeMat)
      stripe.rotation.x = -Math.PI / 2
      stripe.position.set(x, 0.02, z)
      scene.add(stripe)
    }
    
    // === WALLS — Industrial gym ===
    const wallMat = new THREE.MeshStandardMaterial({ color: 0x4a5560, roughness: 0.9 })
    
    const backWall = new THREE.Mesh(new THREE.PlaneGeometry(20, 8), wallMat)
    backWall.position.set(0, 4, -8)
    backWall.receiveShadow = true
    scene.add(backWall)
    
    const leftWall = new THREE.Mesh(new THREE.PlaneGeometry(20, 8), wallMat)
    leftWall.position.set(-10, 4, 0)
    leftWall.rotation.y = Math.PI / 2
    leftWall.receiveShadow = true
    scene.add(leftWall)
    
    const rightWall = new THREE.Mesh(new THREE.PlaneGeometry(20, 8), wallMat)
    rightWall.position.set(10, 4, 0)
    rightWall.rotation.y = -Math.PI / 2
    rightWall.receiveShadow = true
    scene.add(rightWall)
    
    // Neon strip on back wall (orange)
    const neonStripGeo = new THREE.BoxGeometry(16, 0.2, 0.05)
    const neonStripMat = new THREE.MeshStandardMaterial({
      color: 0xff6b35, emissive: 0xff6b35, emissiveIntensity: 0.8
    })
    const neonStrip1 = new THREE.Mesh(neonStripGeo, neonStripMat)
    neonStrip1.position.set(0, 5, -7.95)
    scene.add(neonStrip1)
    
    // Neon strip on left wall (blue)
    const neonStrip2 = new THREE.Mesh(
      new THREE.BoxGeometry(16, 0.2, 0.05),
      new THREE.MeshStandardMaterial({ color: 0x3b9eff, emissive: 0x3b9eff, emissiveIntensity: 0.8 })
    )
    neonStrip2.position.set(-9.95, 3, 0)
    neonStrip2.rotation.y = Math.PI / 2
    scene.add(neonStrip2)
    
    // === CEILING ===
    const ceiling = new THREE.Mesh(
      new THREE.PlaneGeometry(20, 20),
      new THREE.MeshStandardMaterial({ color: 0x3a3a3a, roughness: 1.0 })
    )
    ceiling.position.set(0, 8, 0)
    ceiling.rotation.x = Math.PI / 2
    scene.add(ceiling)
    
    // === INTERACTIVE OBJECTS ===
    
    // 1. DUMBBELL
    const dumbbellGroup = new THREE.Group()
    
    // Bar
    const barGeo = new THREE.CylinderGeometry(0.06, 0.06, 1.8, 12)
    const metalMat = new THREE.MeshStandardMaterial({ color: 0x888888, roughness: 0.2, metalness: 0.9 })
    const bar = new THREE.Mesh(barGeo, metalMat)
    bar.rotation.z = Math.PI / 2
    bar.position.y = 0
    dumbbellGroup.add(bar)
    
    // Weights (each side: 2 discs)
    for (const xPos of [-0.7, 0.7]) {
      for (const yOffset of [0, 0.15]) {
        const weightGeo = new THREE.CylinderGeometry(0.35, 0.35, 0.12, 16)
        const weightMat = new THREE.MeshStandardMaterial({ color: 0x222222, roughness: 0.4, metalness: 0.5 })
        const weight = new THREE.Mesh(weightGeo, weightMat)
        weight.rotation.z = Math.PI / 2
        weight.position.set(xPos, 0, 0)
        weight.position.x = xPos + (xPos > 0 ? yOffset : -yOffset)
        dumbbellGroup.add(weight)
      }
    }
    
    dumbbellGroup.position.set(-3, 0.5, 1)
    dumbbellGroup.traverse(c => { if (c.isMesh) c.castShadow = true })
    
    // Store reference mesh for raycasting
    const dumbbellRef = dumbbellGroup.children[0]
    dumbbellRef.userData = {
      practicePhrase: "I lift the heavy dumbbell over my head",
      phoneticFocus: "L in 'lift', H in 'heavy'",
      emoji: "🏋️",
      name: "Dumbbell",
      color: 0x888888
    }
    dumbbellGroup.children.forEach(c => { c.userData = dumbbellRef.userData })
    scene.add(dumbbellGroup)
    objects3D.push(...dumbbellGroup.children.filter(c => c.isMesh))
    
    // 2. TREADMILL
    const treadmillBaseGeo = new THREE.BoxGeometry(2.5, 0.3, 1.2)
    const treadmillMat = new THREE.MeshStandardMaterial({ color: 0x2a2a2a, roughness: 0.4, metalness: 0.6 })
    const treadmillBase = new THREE.Mesh(treadmillBaseGeo, treadmillMat)
    treadmillBase.position.set(3, 0.15, -2)
    treadmillBase.castShadow = true
    treadmillBase.receiveShadow = true
    scene.add(treadmillBase)
    
    // Belt (moving surface)
    const beltGeo = new THREE.BoxGeometry(2.3, 0.05, 0.9)
    const beltMat = new THREE.MeshStandardMaterial({ color: 0x111111, roughness: 0.6 })
    const belt = new THREE.Mesh(beltGeo, beltMat)
    belt.position.set(3, 0.35, -2)
    scene.add(belt)
    
    // Console/handle
    const consoleGeo = new THREE.BoxGeometry(0.3, 1.2, 1)
    const consoleMat = new THREE.MeshStandardMaterial({ color: 0x1a1a1a, roughness: 0.3 })
    const console = new THREE.Mesh(consoleGeo, consoleMat)
    console.position.set(4, 0.9, -2)
    console.castShadow = true
    scene.add(console)
    
    // Screen on console
    const screenGeo = new THREE.PlaneGeometry(0.25, 0.4)
    const screenMat = new THREE.MeshStandardMaterial({
      color: 0x00ff88, emissive: 0x00ff88, emissiveIntensity: 0.5
    })
    const screen = new THREE.Mesh(screenGeo, screenMat)
    screen.position.set(4.16, 1.1, -2)
    screen.rotation.y = -Math.PI / 2
    scene.add(screen)
    
    treadmillBase.userData = {
      practicePhrase: "I run on the treadmill every morning",
      phoneticFocus: "R in 'run', T in 'treadmill'",
      emoji: "🏃",
      name: "Treadmill",
      color: 0x2a2a2a
    }
    objects3D.push(treadmillBase)
    
    // 3. YOGA MAT
    const matGeo = new THREE.BoxGeometry(2.5, 0.04, 1)
    const matMat = new THREE.MeshStandardMaterial({ color: 0x4a8a4a, roughness: 0.7 })
    const yogaMat = new THREE.Mesh(matGeo, matMat)
    yogaMat.position.set(-5, 0.03, 3)
    yogaMat.receiveShadow = true
    yogaMat.castShadow = true
    yogaMat.userData = {
      practicePhrase: "I stretch on the yoga mat before class",
      phoneticFocus: "ST in 'stretch', CH in 'class'",
      emoji: "🧘",
      name: "Yoga Mat",
      color: 0x4a8a4a
    }
    scene.add(yogaMat)
    objects3D.push(yogaMat)
    
    // 4. BASKETBALL
    const ballGeo = new THREE.SphereGeometry(0.4, 24, 24)
    const ballMat = new THREE.MeshStandardMaterial({ color: 0xD2691E, roughness: 0.6 })
    const basketball = new THREE.Mesh(ballGeo, ballMat)
    basketball.position.set(5, 0.4, 2)
    basketball.castShadow = true
    basketball.userData = {
      practicePhrase: "I throw the basketball into the hoop",
      phoneticFocus: "TH in 'the', R in 'throw'",
      emoji: "🏀",
      name: "Basketball",
      color: 0xD2691E
    }
    scene.add(basketball)
    objects3D.push(basketball)
    
    // Hoop on wall
    const hoopBoardGeo = new THREE.BoxGeometry(1.5, 1, 0.08)
    const hoopBoardMat = new THREE.MeshStandardMaterial({ color: 0xffffff, roughness: 0.3 })
    const hoopBoard = new THREE.Mesh(hoopBoardGeo, hoopBoardMat)
    hoopBoard.position.set(5, 4, -7.9)
    scene.add(hoopBoard)
    
    const hoopRingGeo = new THREE.TorusGeometry(0.35, 0.04, 12, 24)
    const hoopRingMat = new THREE.MeshStandardMaterial({ color: 0xff6b35, roughness: 0.2, metalness: 0.8, emissive: 0xff3300, emissiveIntensity: 0.3 })
    const hoopRing = new THREE.Mesh(hoopRingGeo, hoopRingMat)
    hoopRing.position.set(5, 3.3, -7.7)
    hoopRing.rotation.x = Math.PI / 2
    scene.add(hoopRing)
    
    // 5. STATIONARY BIKE
    const bikeBaseGeo = new THREE.BoxGeometry(0.8, 0.3, 1.5)
    const bikeFrameMat = new THREE.MeshStandardMaterial({ color: 0x1a1a1a, roughness: 0.3, metalness: 0.7 })
    const bikeBase = new THREE.Mesh(bikeBaseGeo, bikeFrameMat)
    bikeBase.position.set(-7, 0.15, -1)
    bikeBase.castShadow = true
    scene.add(bikeBase)
    
    // Seat post
    const seatPostGeo = new THREE.CylinderGeometry(0.05, 0.05, 1.2, 8)
    const seatPost = new THREE.Mesh(seatPostGeo, bikeFrameMat)
    seatPost.position.set(-7, 0.9, -0.6)
    seatPost.castShadow = true
    scene.add(seatPost)
    
    // Seat
    const seatGeo = new THREE.BoxGeometry(0.3, 0.08, 0.3)
    const seatMat = new THREE.MeshStandardMaterial({ color: 0x222222, roughness: 0.5 })
    const seat = new THREE.Mesh(seatGeo, seatMat)
    seat.position.set(-7, 1.5, -0.6)
    scene.add(seat)
    
    // Handlebars
    const handleGeo = new THREE.CylinderGeometry(0.04, 0.04, 0.8, 8)
    const handlebar = new THREE.Mesh(handleGeo, bikeFrameMat)
    handlebar.position.set(-7, 1.3, -1.4)
    handlebar.rotation.x = Math.PI / 2
    handlebar.rotation.z = Math.PI / 6
    scene.add(handlebar)
    
    // Wheel (flywheel)
    const wheelGeo = new THREE.TorusGeometry(0.4, 0.05, 12, 32)
    const wheelMat = new THREE.MeshStandardMaterial({ color: 0xff6b35, roughness: 0.2, metalness: 0.8 })
    const wheel = new THREE.Mesh(wheelGeo, wheelMat)
    wheel.position.set(-7, 0.5, -0.3)
    wheel.rotation.y = Math.PI / 2
    wheel.castShadow = true
    scene.add(wheel)
    
    // Pedals
    for (const side of [-0.25, 0.25]) {
      const pedalGeo = new THREE.BoxGeometry(0.15, 0.03, 0.1)
      const pedalMat = new THREE.MeshStandardMaterial({ color: 0x333333, roughness: 0.5 })
      const pedal = new THREE.Mesh(pedalGeo, pedalMat)
      pedal.position.set(-7 + side, 0.2, -0.3)
      scene.add(pedal)
    }
    
    bikeBase.userData = {
      practicePhrase: "I ride the stationary bike for thirty minutes",
      phoneticFocus: "R in 'ride', TH in 'thirty'",
      emoji: "🚴",
      name: "Bike",
      color: 0x1a1a1a
    }
    objects3D.push(bikeBase)
    
    // === MIRROR WALL (back) ===
    const mirrorGeo = new THREE.PlaneGeometry(8, 4)
    const mirrorMat = new THREE.MeshStandardMaterial({
      color: 0x88aabb, roughness: 0.05, metalness: 0.9,
      emissive: 0x223344, emissiveIntensity: 0.2
    })
    const gymMirror = new THREE.Mesh(mirrorGeo, mirrorMat)
    gymMirror.position.set(-6, 3, -7.9)
    scene.add(gymMirror)
    
    // === ANIMATION LOOP ===
    let time = 0
    const animate = () => {
      animationId = requestAnimationFrame(animate)
      time += 0.016
      
      // Basketball bounce
      basketball.position.y = 0.4 + Math.abs(Math.sin(time * 3)) * 0.5
      basketball.rotation.y += 0.02
      
      // Flywheel spin
      wheel.rotation.x += 0.08
      
      // Dumbbell gentle float
      dumbbellGroup.position.y = 0.5 + Math.sin(time * 1.5) * 0.05
      dumbbellGroup.rotation.y = Math.sin(time * 0.5) * 0.05
      
      // Neon strip pulse
      neonStrip1.material.emissiveIntensity = 0.7 + Math.sin(time * 2) * 0.15
      neonStrip2.material.emissiveIntensity = 0.7 + Math.sin(time * 2 + 1) * 0.15
      
      // Screen flicker
      screenMat.emissiveIntensity = 0.4 + Math.sin(time * 5) * 0.1
      
      // Camera drift
      if (cameraShake > 0) {
        camera.position.x = (Math.random() - 0.5) * cameraShake * 0.1
        camera.position.y = 4.5 + (Math.random() - 0.5) * cameraShake * 0.1
      } else {
        camera.position.x = Math.sin(time * 0.08) * 0.6
        camera.position.y = 4.5 + Math.sin(time * 0.12) * 0.2
      }
      camera.position.z = 13
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
      const intersects = raycaster.intersectObjects(objects3D)
      
      if (intersects.length > 0) {
        const obj = intersects[0].object
        const data = obj.userData
        
        if (!data.practicePhrase) return
        
        setSelectedObject(data)
        setFeedback('')
        
        if (hapticEnabled && navigator.vibrate) navigator.vibrate(50)
        
        if ('speechSynthesis' in window) {
          speechSynthesis.cancel()
          const utterance = new SpeechSynthesisUtterance(data.practicePhrase)
          utterance.lang = 'en-US'
          utterance.rate = 0.85
          speechSynthesis.speak(utterance)
        }
        
        objects3D.forEach(o => {
          if (o.material && o.material.emissive) {
            const orig = o.userData.color || 0x000000
            o.material.emissive.setHex(0x000000)
          }
        })
        if (obj.material && obj.material.emissive) {
          obj.material.emissive.setHex(0x441111)
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
  }, [isUnlocked, cameraShake, hapticEnabled])
  
  // === STT ===
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
      
      const targetWords = target.split(' ')
      const spokenWords = transcript.split(' ')
      let matches = 0
      for (const word of spokenWords) {
        if (targetWords.includes(word)) matches++
      }
      const accuracy = Math.min(100, Math.round((matches / targetWords.length) * 100))
      
      if (accuracy >= 85 && confidence > 0.7) {
        setFeedback(`🔥 ${accuracy}% — Excellent, Clyde! Nailed it!`)
        if (navigator.vibrate) navigator.vibrate([100, 50, 200])
        useAlmaGameStore.getState().recordSession(accuracy, true)
      } else if (accuracy >= 60) {
        setFeedback(`💪 ${accuracy}% — Good effort! Focus on: ${selectedObject.phoneticFocus}`)
        useAlmaGameStore.getState().recordSession(accuracy, false)
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
        display: 'flex', flexDirection: 'column',
        alignItems: 'center', justifyContent: 'center',
        height: '100vh',
        background: 'linear-gradient(180deg, #2d2d2d 0%, #1a1a1a 100%)',
        color: 'white', fontFamily: 'sans-serif'
      }}>
        <div style={{ fontSize: '4rem', marginBottom: '20px' }}>💪</div>
        <h2 style={{ fontSize: '1.5rem', marginBottom: '10px' }}>Gym — Locked</h2>
        <p style={{ fontSize: '1rem', opacity: 0.7 }}>Reach a 5 day streak to unlock the Gym</p>
        <p style={{ fontSize: '2rem', marginTop: '20px' }}>Current streak: {streak} 🔥</p>
        <p style={{ fontSize: '0.9rem', opacity: 0.5, marginTop: '15px' }}>
          {Math.max(0, 5 - streak)} more days to unlock
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
        background: 'rgba(0,0,0,0.6)', color: 'white',
        padding: '12px 20px', borderRadius: '12px',
        fontFamily: 'sans-serif', backdropFilter: 'blur(10px)'
      }}>
        <div style={{ fontSize: '1.2rem', fontWeight: 'bold' }}>💪 Gym</div>
        <div style={{ fontSize: '0.9rem', opacity: 0.8 }}>
          Streak: {streak} 🔥 | Mastery: {masteryPoints} pts
        </div>
      </div>
      
      {selectedObject && (
        <div style={{
          position: 'absolute', bottom: '20px', left: '50%',
          transform: 'translateX(-50%)',
          background: 'rgba(0,0,0,0.75)', color: 'white',
          padding: '20px 30px', borderRadius: '16px',
          fontFamily: 'sans-serif', backdropFilter: 'blur(15px)',
          maxWidth: '90vw', textAlign: 'center'
        }}>
          <div style={{ fontSize: '2rem', marginBottom: '8px' }}>
            {selectedObject.emoji} {selectedObject.name}
          </div>
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
              color: 'white', border: 'none',
              padding: '12px 30px', borderRadius: '25px',
              fontSize: '1rem', fontWeight: 'bold',
              cursor: isListening ? 'wait' : 'pointer'
            }}
          >
            {isListening ? '🎤 Listening...' : '🎤 Say it!'}
          </button>
          
          {feedback && (
            <div style={{
              marginTop: '12px', padding: '8px 16px',
              background: 'rgba(255,107,53,0.2)',
              borderRadius: '8px', fontSize: '0.95rem'
            }}>
              {feedback}
            </div>
          )}
        </div>
      )}
    </div>
  )
}
