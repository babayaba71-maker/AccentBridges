import * as THREE from 'three'
import { useRef, useEffect, useState } from 'react'
import { useAlmaGameStore } from '../store/useAlmaGameStore'

/**
 * SchoolScene — 3D School environment (Aula de clases)
 * Unlocked at Day 3 streak.
 * 
 * Interactive practice objects:
 * - 📖 Desk → "I sit at my desk and study English"
 * - 📋 Whiteboard → "The teacher writes on the whiteboard"
 * - 🎒 Backpack → "My backpack is heavy with books today"
 * - 🖊️ Pencil → "I write with a pencil in my notebook"
 * - 🔔 Bell → "The bell rings when class is over"
 * 
 * Bright classroom lighting — fluorescent + window daylight.
 */

export default function SchoolScene() {
  const mountRef = useRef(null)
  const [selectedObject, setSelectedObject] = useState(null)
  const [isListening, setIsListening] = useState(false)
  const [feedback, setFeedback] = useState('')
  
  const streak = useAlmaGameStore(s => s.streak)
  const unlocked = useAlmaGameStore(s => s.unlockedLocations)
  const cameraShake = useAlmaGameStore(s => s.cameraShake)
  const hapticEnabled = useAlmaGameStore(s => s.hapticEnabled)
  const masteryPoints = useAlmaGameStore(s => s.masteryPoints)
  
  const isUnlocked = unlocked.includes('school') || unlocked.includes('full_city')

  useEffect(() => {
    if (!mountRef.current || !isUnlocked) return
    
    let scene, camera, renderer, animationId
    let raycaster, mouse
    let objects3D = []
    
    // === SCENE SETUP ===
    scene = new THREE.Scene()
    scene.fog = new THREE.FogExp2(0x3a4a5a, 0.015)
    scene.background = new THREE.Color(0x2a3a4a)
    
    camera = new THREE.PerspectiveCamera(60, window.innerWidth / window.innerHeight, 0.1, 100)
    camera.position.set(0, 4.5, 12)
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
    
    // === LIGHTING — BRIGHT CLASSROOM ===
    
    // Ambient — bright neutral
    const ambient = new THREE.AmbientLight(0xccddff, 0.8)
    scene.add(ambient)
    
    // Hemisphere — sky/ground fill
    const hemiLight = new THREE.HemisphereLight(0xddeeff, 0x8a9aaa, 0.5)
    hemiLight.position.set(0, 8, 0)
    scene.add(hemiLight)
    
    // Fluorescent ceiling lights (3 strips)
    for (const xPos of [-4, 0, 4]) {
      const fluoLight = new THREE.PointLight(0xffffff, 1.8, 15)
      fluoLight.position.set(xPos, 7, 0)
      scene.add(fluoLight)
      
      // Visible light fixture
      const fixtureGeo = new THREE.BoxGeometry(2.5, 0.1, 0.3)
      const fixtureMat = new THREE.MeshStandardMaterial({
        color: 0xffffff,
        emissive: 0xffffff,
        emissiveIntensity: 0.9,
        roughness: 0.3
      })
      const fixture = new THREE.Mesh(fixtureGeo, fixtureMat)
      fixture.position.set(xPos, 7.5, 0)
      scene.add(fixture)
    }
    
    // Window daylight — cool blue from the left
    const windowLight = new THREE.DirectionalLight(0xb0d4ff, 0.8)
    windowLight.position.set(-15, 4, 5)
    windowLight.castShadow = true
    windowLight.shadow.mapSize.width = 2048
    windowLight.shadow.mapSize.height = 2048
    windowLight.shadow.bias = -0.001
    scene.add(windowLight)
    
    // === FLOOR — Linoleum ===
    const floorGeo = new THREE.PlaneGeometry(20, 20)
    const floorMat = new THREE.MeshStandardMaterial({
      color: 0x9aaaa0,
      roughness: 0.3,
      metalness: 0.1
    })
    const floor = new THREE.Mesh(floorGeo, floorMat)
    floor.rotation.x = -Math.PI / 2
    floor.position.y = 0
    floor.receiveShadow = true
    scene.add(floor)
    
    // === WALLS — School colors ===
    const wallMat = new THREE.MeshStandardMaterial({
      color: 0x6a9aba,
      roughness: 0.9
    })
    
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
    
    // === CEILING ===
    const ceiling = new THREE.Mesh(
      new THREE.PlaneGeometry(20, 20),
      new THREE.MeshStandardMaterial({ color: 0xe8e8e8, roughness: 1.0 })
    )
    ceiling.position.set(0, 8, 0)
    ceiling.rotation.x = Math.PI / 2
    scene.add(ceiling)
    
    // === WINDOWS on left wall ===
    for (let i = 0; i < 3; i++) {
      const winGeo = new THREE.PlaneGeometry(3, 3.5)
      const winMat = new THREE.MeshBasicMaterial({
        color: 0x88c0ff,
        transparent: true,
        opacity: 0.7
      })
      const win = new THREE.Mesh(winGeo, winMat)
      win.position.set(-9.9, 4, -4 + i * 4)
      win.rotation.y = Math.PI / 2
      scene.add(win)
      
      // Window frame
      const frameGeo = new THREE.BoxGeometry(0.1, 4, 4)
      const frameMat = new THREE.MeshStandardMaterial({ color: 0xffffff, roughness: 0.4 })
      const frame = new THREE.Mesh(frameGeo, frameMat)
      frame.position.set(-9.8, 4, -4 + i * 4)
      scene.add(frame)
    }
    
    // === WHITEBOARD ===
    const boardGeo = new THREE.BoxGeometry(4, 2.5, 0.1)
    const boardMat = new THREE.MeshStandardMaterial({
      color: 0xf8f8f8,
      roughness: 0.2,
      emissive: 0x444444,
      emissiveIntensity: 0.1
    })
    const whiteboard = new THREE.Mesh(boardGeo, boardMat)
    whiteboard.position.set(0, 4, -7.85)
    whiteboard.receiveShadow = true
    whiteboard.castShadow = true
    scene.add(whiteboard)
    
    // Whiteboard frame
    const frameGeo = new THREE.BoxGeometry(4.3, 2.8, 0.15)
    const frameMat = new THREE.MeshStandardMaterial({ color: 0x2a2a2a, roughness: 0.4 })
    const boardFrame = new THREE.Mesh(frameGeo, frameMat)
    boardFrame.position.set(0, 4, -7.9)
    scene.add(boardFrame)
    
    // Writing on board (text lines as thin boxes)
    for (let i = 0; i < 3; i++) {
      const lineGeo = new THREE.BoxGeometry(2.5, 0.05, 0.02)
      const lineMat = new THREE.MeshBasicMaterial({ color: 0x2244aa })
      const line = new THREE.Mesh(lineGeo, lineMat)
      line.position.set(0, 4.8 - i * 0.6, -7.78)
      scene.add(line)
    }
    
    whiteboard.userData = {
      practicePhrase: "The teacher writes on the whiteboard",
      phoneticFocus: "TH in 'the', W in 'writes'",
      emoji: "📋",
      name: "Whiteboard",
      color: 0xf8f8f8
    }
    objects3D.push(whiteboard)
    
    // === DESK ===
    const deskTopGeo = new THREE.BoxGeometry(2, 0.1, 1.2)
    const deskMat = new THREE.MeshStandardMaterial({ color: 0xC0A070, roughness: 0.5 })
    const deskTop = new THREE.Mesh(deskTopGeo, deskMat)
    deskTop.position.set(-3, 1.8, 1)
    deskTop.castShadow = true
    deskTop.receiveShadow = true
    scene.add(deskTop)
    
    // Desk legs
    for (const [lx, lz] of [[-0.9, -0.5], [0.9, -0.5], [-0.9, 0.5], [0.9, 0.5]]) {
      const legGeo = new THREE.BoxGeometry(0.08, 1.8, 0.08)
      const leg = new THREE.Mesh(legGeo, deskMat)
      leg.position.set(-3 + lx, 0.9, 1 + lz)
      leg.castShadow = true
      scene.add(leg)
    }
    
    // Notebook on desk
    const notebookGeo = new THREE.BoxGeometry(0.8, 0.05, 0.6)
    const notebookMat = new THREE.MeshStandardMaterial({ color: 0x2244aa, roughness: 0.4 })
    const notebook = new THREE.Mesh(notebookGeo, notebookMat)
    notebook.position.set(-3.3, 1.9, 1)
    notebook.castShadow = true
    scene.add(notebook)
    
    deskTop.userData = {
      practicePhrase: "I sit at my desk and study English",
      phoneticFocus: "S in 'sit', ST in 'study'",
      emoji: "📖",
      name: "Desk",
      color: 0xC0A070
    }
    objects3D.push(deskTop)
    
    // === BACKPACK ===
    const backpackGeo = new THREE.BoxGeometry(0.9, 1.1, 0.5)
    const backpackMat = new THREE.MeshStandardMaterial({ 
      color: 0xD44530,
      roughness: 0.6
    })
    const backpack = new THREE.Mesh(backpackGeo, backpackMat)
    backpack.position.set(3, 0.55, 3)
    backpack.castShadow = true
    backpack.userData = {
      practicePhrase: "My backpack is heavy with books today",
      phoneticFocus: "B in 'backpack', H in 'heavy'",
      emoji: "🎒",
      name: "Backpack",
      color: 0xD44530
    }
    scene.add(backpack)
    objects3D.push(backpack)
    
    // Backpack straps
    const strapGeo = new THREE.TorusGeometry(0.15, 0.03, 8, 16, Math.PI)
    const strapMat = new THREE.MeshStandardMaterial({ color: 0x8B3020, roughness: 0.5 })
    const strapL = new THREE.Mesh(strapGeo, strapMat)
    strapL.position.set(2.7, 0.8, 3.25)
    strapL.rotation.x = Math.PI / 2
    scene.add(strapL)
    
    const strapR = new THREE.Mesh(strapGeo, strapMat)
    strapR.position.set(3.3, 0.8, 3.25)
    strapR.rotation.x = Math.PI / 2
    scene.add(strapR)
    
    // === PENCIL on desk ===
    const pencilGeo = new THREE.CylinderGeometry(0.04, 0.04, 1.2, 8)
    const pencilMat = new THREE.MeshStandardMaterial({ 
      color: 0xFFD700,
      roughness: 0.3,
      metalness: 0.3
    })
    const pencil = new THREE.Mesh(pencilGeo, pencilMat)
    pencil.rotation.z = Math.PI / 2
    pencil.position.set(-2.5, 1.9, 1.2)
    pencil.castShadow = true
    pencil.userData = {
      practicePhrase: "I write with a pencil in my notebook",
      phoneticFocus: "R in 'write', P in 'pencil'",
      emoji: "🖊️",
      name: "Pencil",
      color: 0xFFD700
    }
    scene.add(pencil)
    objects3D.push(pencil)
    
    // Pencil tip
    const tipGeo = new THREE.ConeGeometry(0.04, 0.15, 8)
    const tipMat = new THREE.MeshStandardMaterial({ color: 0x8B4513 })
    const tip = new THREE.Mesh(tipGeo, tipMat)
    tip.rotation.z = -Math.PI / 2
    tip.position.set(-1.9, 1.9, 1.2)
    scene.add(tip)
    
    // === BELL on wall ===
    const bellGeo = new THREE.SphereGeometry(0.35, 16, 16, 0, Math.PI * 2, 0, Math.PI / 2)
    const bellMat = new THREE.MeshStandardMaterial({ 
      color: 0xCC9933,
      roughness: 0.2,
      metalness: 0.8
    })
    const bell = new THREE.Mesh(bellGeo, bellMat)
    bell.position.set(6, 5, -7.6)
    bell.castShadow = true
    bell.userData = {
      practicePhrase: "The bell rings when class is over",
      phoneticFocus: "TH in 'the', L in 'bell'",
      emoji: "🔔",
      name: "Bell",
      color: 0xCC9933
    }
    scene.add(bell)
    objects3D.push(bell)
    
    // === CHAIRS — Row of student desks ===
    for (let i = 0; i < 4; i++) {
      const xPos = 2 + i * 2.5
      const chairSeatGeo = new THREE.BoxGeometry(0.8, 0.08, 0.8)
      const chairMat = new THREE.MeshStandardMaterial({ color: 0x4a6a8a, roughness: 0.5 })
      const chairSeat = new THREE.Mesh(chairSeatGeo, chairMat)
      chairSeat.position.set(xPos, 1.2, 3.5)
      chairSeat.castShadow = true
      scene.add(chairSeat)
      
      const chairBackGeo = new THREE.BoxGeometry(0.8, 0.8, 0.08)
      const chairBack = new THREE.Mesh(chairBackGeo, chairMat)
      chairBack.position.set(xPos, 1.6, 3.9)
      chairBack.castShadow = true
      scene.add(chairBack)
      
      for (const [lx, lz] of [[-0.35, -0.35], [0.35, -0.35], [-0.35, 0.35], [0.35, 0.35]]) {
        const legGeo = new THREE.BoxGeometry(0.06, 1.2, 0.06)
        const leg = new THREE.Mesh(legGeo, chairMat)
        leg.position.set(xPos + lx, 0.6, 3.5 + lz)
        scene.add(leg)
      }
      
      // Small desk in front of each chair
      const deskSmallGeo = new THREE.BoxGeometry(0.8, 0.06, 0.4)
      const deskSmall = new THREE.Mesh(deskSmallGeo, deskMat)
      deskSmall.position.set(xPos, 1.7, 3.1)
      deskSmall.castShadow = true
      scene.add(deskSmall)
    }
    
    // === GLOBE — Decorative ===
    const globeStandGeo = new THREE.CylinderGeometry(0.05, 0.15, 0.4, 12)
    const standMat = new THREE.MeshStandardMaterial({ color: 0x2a2a2a, roughness: 0.3, metalness: 0.7 })
    const globeStand = new THREE.Mesh(globeStandGeo, standMat)
    globeStand.position.set(-7, 0.2, -5)
    scene.add(globeStand)
    
    const globeGeo = new THREE.SphereGeometry(0.5, 24, 24)
    const globeMat = new THREE.MeshStandardMaterial({
      color: 0x2266aa,
      roughness: 0.4,
      emissive: 0x113355,
      emissiveIntensity: 0.2
    })
    const globe = new THREE.Mesh(globeGeo, globeMat)
    globe.position.set(-7, 0.9, -5)
    globe.castShadow = true
    globe.userData = { isGlobe: true }
    scene.add(globe)
    
    // === FLAG ===
    const flagPoleGeo = new THREE.CylinderGeometry(0.03, 0.03, 5, 8)
    const flagPoleMat = new THREE.MeshStandardMaterial({ color: 0x8a8a8a, metalness: 0.8, roughness: 0.2 })
    const flagPole = new THREE.Mesh(flagPoleGeo, flagPoleMat)
    flagPole.position.set(7, 2.5, -5)
    flagPole.castShadow = true
    scene.add(flagPole)
    
    const flagGeo = new THREE.PlaneGeometry(1.5, 1)
    const flagMat = new THREE.MeshStandardMaterial({
      color: 0x44aa44,
      side: THREE.DoubleSide,
      roughness: 0.6
    })
    const flag = new THREE.Mesh(flagGeo, flagMat)
    flag.position.set(7.75, 4, -5)
    flag.userData = { isFlag: true }
    scene.add(flag)
    
    // === ANIMATION LOOP ===
    let time = 0
    const animate = () => {
      animationId = requestAnimationFrame(animate)
      time += 0.016
      
      // Globe rotation
      globe.rotation.y += 0.005
      
      // Flag wave
      flag.rotation.z = Math.sin(time * 2) * 0.05
      flag.position.x = 7.75 + Math.sin(time * 2) * 0.05
      
      // Camera drift
      if (cameraShake > 0) {
        camera.position.x = (Math.random() - 0.5) * cameraShake * 0.1
        camera.position.y = 4.5 + (Math.random() - 0.5) * cameraShake * 0.1
      } else {
        camera.position.x = Math.sin(time * 0.08) * 0.6
        camera.position.y = 4.5 + Math.sin(time * 0.12) * 0.2
      }
      camera.position.z = 12
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
        background: 'linear-gradient(180deg, #1e3a5f 0%, #2c3e50 100%)',
        color: 'white', fontFamily: 'sans-serif'
      }}>
        <div style={{ fontSize: '4rem', marginBottom: '20px' }}>🏫</div>
        <h2 style={{ fontSize: '1.5rem', marginBottom: '10px' }}>School — Locked</h2>
        <p style={{ fontSize: '1rem', opacity: 0.7 }}>Reach a 3 day streak to unlock School</p>
        <p style={{ fontSize: '2rem', marginTop: '20px' }}>Current streak: {streak} 🔥</p>
        <p style={{ fontSize: '0.9rem', opacity: 0.5, marginTop: '15px' }}>
          {Math.max(0, 3 - streak)} more days to unlock
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
        position: 'absolute', top: '20px', left: '20px',
        background: 'rgba(0,0,0,0.6)', color: 'white',
        padding: '12px 20px', borderRadius: '12px',
        fontFamily: 'sans-serif', backdropFilter: 'blur(10px)'
      }}>
        <div style={{ fontSize: '1.2rem', fontWeight: 'bold' }}>🏫 School</div>
        <div style={{ fontSize: '0.9rem', opacity: 0.8 }}>
          Streak: {streak} 🔥 | Mastery: {masteryPoints} pts
        </div>
      </div>
      
      {/* Practice Panel */}
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
