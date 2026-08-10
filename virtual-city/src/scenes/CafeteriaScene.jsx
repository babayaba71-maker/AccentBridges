import * as THREE from 'three'
import { useRef, useEffect, useState } from 'react'
import { useAlmaGameStore } from '../store/useAlmaGameStore'

/**
 * CafeteriaScene — 3D Cafetería environment (Day 7 streak unlock)
 * 
 * Interactive practice objects:
 * - ☕ Coffee Cup → "I drink coffee every morning before work"
 * - 🥐 Croissant → "I eat a croissant with my coffee"
 * - 📱 Phone → "I check my phone while I wait for my order"
 * - 🪑 Bar Stool → "I sit at the counter and read the menu"
 * - 🍰 Cake → "The chocolate cake looks delicious today"
 * 
 * Warm café lighting — pendant lamps + window light + accent neon.
 */

export default function CafeteriaScene() {
  const mountRef = useRef(null)
  const [selectedObject, setSelectedObject] = useState(null)
  const [isListening, setIsListening] = useState(false)
  const [feedback, setFeedback] = useState('')
  
  const streak = useAlmaGameStore(s => s.streak)
  const unlocked = useAlmaGameStore(s => s.unlockedLocations)
  const cameraShake = useAlmaGameStore(s => s.cameraShake)
  const hapticEnabled = useAlmaGameStore(s => s.hapticEnabled)
  const masteryPoints = useAlmaGameStore(s => s.masteryPoints)
  
  const isUnlocked = unlocked.includes('cafeteria') || unlocked.includes('full_city')

  useEffect(() => {
    if (!mountRef.current || !isUnlocked) return
    
    let scene, camera, renderer, animationId
    let raycaster, mouse
    let objects3D = []
    
    scene = new THREE.Scene()
    scene.fog = new THREE.FogExp2(0x4a3528, 0.012)
    scene.background = new THREE.Color(0x3a2a1e)
    
    camera = new THREE.PerspectiveCamera(60, window.innerWidth / window.innerHeight, 0.1, 100)
    camera.position.set(0, 4, 12)
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
    
    // === LIGHTING — WARM CAFÉ ===
    const ambient = new THREE.AmbientLight(0xffcc88, 0.8)
    scene.add(ambient)
    
    const hemiLight = new THREE.HemisphereLight(0xffe0b0, 0x5a3a20, 0.5)
    hemiLight.position.set(0, 8, 0)
    scene.add(hemiLight)
    
    // Pendant lamps (3 warm lights over the counter)
    const pendants = []
    for (const xPos of [-3, 0, 3]) {
      const pLight = new THREE.PointLight(0xffcc66, 1.8, 10)
      pLight.position.set(xPos, 5, 1)
      pLight.castShadow = true
      pLight.shadow.mapSize.width = 1024
      pLight.shadow.mapSize.height = 1024
      scene.add(pLight)
      
      // Visible pendant fixture
      const cordGeo = new THREE.CylinderGeometry(0.01, 0.01, 2, 4)
      const cordMat = new THREE.MeshStandardMaterial({ color: 0x222222 })
      const cord = new THREE.Mesh(cordGeo, cordMat)
      cord.position.set(xPos, 6.5, 1)
      scene.add(cord)
      
      const shadeGeo = new THREE.ConeGeometry(0.4, 0.5, 16, 1, true)
      const shadeMat = new THREE.MeshStandardMaterial({
        color: 0xCC8833, roughness: 0.3,
        emissive: 0xffaa44, emissiveIntensity: 0.4,
        side: THREE.DoubleSide
      })
      const shade = new THREE.Mesh(shadeGeo, shadeMat)
      shade.position.set(xPos, 5.5, 1)
      scene.add(shade)
      
      pendants.push(pLight)
    }
    
    // Window daylight
    const windowLight = new THREE.DirectionalLight(0xffd4a0, 0.6)
    windowLight.position.set(15, 4, 5)
    scene.add(windowLight)
    
    // Warm accent light from back wall
    const accentLight = new THREE.PointLight(0xff8844, 0.8, 12)
    accentLight.position.set(0, 3, -6)
    scene.add(accentLight)
    
    // === FLOOR — Wood ===
    const floorGeo = new THREE.PlaneGeometry(20, 20)
    const floorMat = new THREE.MeshStandardMaterial({ color: 0x8B6B4A, roughness: 0.6 })
    const floor = new THREE.Mesh(floorGeo, floorMat)
    floor.rotation.x = -Math.PI / 2
    floor.receiveShadow = true
    scene.add(floor)
    
    // === WALLS — Warm café tones ===
    const wallMat = new THREE.MeshStandardMaterial({ color: 0x6B4E3A, roughness: 0.9 })
    
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
      new THREE.MeshStandardMaterial({ color: 0x3a2a1e, roughness: 1.0 })
    )
    ceiling.position.set(0, 8, 0)
    ceiling.rotation.x = Math.PI / 2
    scene.add(ceiling)
    
    // === WINDOW on right wall ===
    const winGeo = new THREE.PlaneGeometry(4, 3.5)
    const winMat = new THREE.MeshBasicMaterial({ color: 0xffdd99, transparent: true, opacity: 0.75 })
    const win = new THREE.Mesh(winGeo, winMat)
    win.position.set(9.9, 4, -2)
    win.rotation.y = -Math.PI / 2
    scene.add(win)
    
    // Window frame
    const frameGeo = new THREE.BoxGeometry(0.15, 4, 4.5)
    const frameMat = new THREE.MeshStandardMaterial({ color: 0xffffff, roughness: 0.4 })
    const winFrame = new THREE.Mesh(frameGeo, frameMat)
    winFrame.position.set(9.8, 4, -2)
    scene.add(winFrame)
    
    // Cross frame
    const crossH = new THREE.Mesh(new THREE.BoxGeometry(0.1, 0.08, 4), frameMat)
    crossH.position.set(9.85, 4, -2)
    crossH.rotation.y = -Math.PI / 2
    scene.add(crossH)
    
    const crossV = new THREE.Mesh(new THREE.BoxGeometry(0.1, 4, 0.08), frameMat)
    crossV.position.set(9.85, 4, -2)
    crossV.rotation.y = -Math.PI / 2
    scene.add(crossV)
    
    // === MENU BOARD on back wall ===
    const menuGeo = new THREE.BoxGeometry(4, 2.5, 0.1)
    const menuMat = new THREE.MeshStandardMaterial({
      color: 0x2a1a0a, roughness: 0.5,
      emissive: 0x1a0a05, emissiveIntensity: 0.1
    })
    const menuBoard = new THREE.Mesh(menuGeo, menuMat)
    menuBoard.position.set(0, 4.5, -7.85)
    scene.add(menuBoard)
    
    // Menu text lines (gold)
    for (let i = 0; i < 4; i++) {
      const lineGeo = new THREE.BoxGeometry(2.5, 0.04, 0.02)
      const lineMat = new THREE.MeshBasicMaterial({ color: 0xDAA520 })
      const line = new THREE.Mesh(lineGeo, lineMat)
      line.position.set(0, 5.3 - i * 0.5, -7.78)
      scene.add(line)
    }
    
    // === COUNTER ===
    const counterGeo = new THREE.BoxGeometry(8, 1.2, 1.5)
    const counterMat = new THREE.MeshStandardMaterial({ color: 0x5a3a28, roughness: 0.4 })
    const counter = new THREE.Mesh(counterGeo, counterMat)
    counter.position.set(0, 1.2, 0)
    counter.castShadow = true
    counter.receiveShadow = true
    scene.add(counter)
    
    // Counter top (lighter stone)
    const topGeo = new THREE.BoxGeometry(8.2, 0.1, 1.7)
    const topMat = new THREE.MeshStandardMaterial({ color: 0xC0A080, roughness: 0.2 })
    const counterTop = new THREE.Mesh(topGeo, topMat)
    counterTop.position.set(0, 1.85, 0)
    counterTop.castShadow = true
    counterTop.receiveShadow = true
    scene.add(counterTop)
    
    // === INTERACTIVE OBJECTS ===
    
    // 1. COFFEE CUP
    const cupGeo = new THREE.CylinderGeometry(0.25, 0.2, 0.4, 16)
    const cupMat = new THREE.MeshStandardMaterial({ color: 0xffffff, roughness: 0.3 })
    const cup = new THREE.Mesh(cupGeo, cupMat)
    cup.position.set(-2, 2.2, 0)
    cup.castShadow = true
    scene.add(cup)
    
    // Coffee inside
    const coffeeGeo = new THREE.CylinderGeometry(0.22, 0.18, 0.05, 16)
    const coffeeMat = new THREE.MeshStandardMaterial({ color: 0x3a1a0a, roughness: 0.1 })
    const coffee = new THREE.Mesh(coffeeGeo, coffeeMat)
    coffee.position.set(-2, 2.4, 0)
    scene.add(coffee)
    
    // Cup handle
    const handleGeo = new THREE.TorusGeometry(0.1, 0.03, 8, 16, Math.PI)
    const handle = new THREE.Mesh(handleGeo, cupMat)
    handle.position.set(-1.7, 2.2, 0)
    handle.rotation.y = Math.PI / 2
    scene.add(handle)
    
    // Saucer
    const saucerGeo = new THREE.CylinderGeometry(0.35, 0.35, 0.03, 16)
    const saucer = new THREE.Mesh(saucerGeo, cupMat)
    saucer.position.set(-2, 1.95, 0)
    scene.add(saucer)
    
    cup.userData = {
      practicePhrase: "I drink coffee every morning before work",
      phoneticFocus: "DR in 'drink', R in 'morning'",
      emoji: "☕",
      name: "Coffee Cup",
      color: 0xffffff
    }
    objects3D.push(cup)
    
    // 2. CROISSANT
    const croissantGeo = new THREE.TorusGeometry(0.2, 0.1, 8, 16, Math.PI * 1.5)
    const croissantMat = new THREE.MeshStandardMaterial({ color: 0xD4A040, roughness: 0.5 })
    const croissant = new THREE.Mesh(croissantGeo, croissantMat)
    croissant.position.set(0, 1.95, 0)
    croissant.rotation.x = Math.PI / 2
    croissant.castShadow = true
    croissant.userData = {
      practicePhrase: "I eat a croissant with my coffee",
      phoneticFocus: "EA in 'eat', CR in 'croissant'",
      emoji: "🥐",
      name: "Croissant",
      color: 0xD4A040
    }
    scene.add(croissant)
    objects3D.push(croissant)
    
    // Plate for croissant
    const plateGeo = new THREE.CylinderGeometry(0.4, 0.4, 0.03, 16)
    const plateMat = new THREE.MeshStandardMaterial({ color: 0xffffff, roughness: 0.3 })
    const plate = new THREE.Mesh(plateGeo, plateMat)
    plate.position.set(0, 1.92, 0)
    scene.add(plate)
    
    // 3. PHONE on counter
    const phoneGeo = new THREE.BoxGeometry(0.6, 0.04, 0.3)
    const phoneMat = new THREE.MeshStandardMaterial({
      color: 0x111111, roughness: 0.2,
      emissive: 0x2244aa, emissiveIntensity: 0.3
    })
    const phone = new THREE.Mesh(phoneGeo, phoneMat)
    phone.position.set(2.5, 1.92, 0)
    phone.castShadow = true
    phone.userData = {
      practicePhrase: "I check my phone while I wait for my order",
      phoneticFocus: "CH in 'check', W in 'wait'",
      emoji: "📱",
      name: "Phone",
      color: 0x111111
    }
    scene.add(phone)
    objects3D.push(phone)
    
    // 4. BAR STOOL
    const stoolSeatGeo = new THREE.CylinderGeometry(0.3, 0.3, 0.08, 16)
    const stoolMat = new THREE.MeshStandardMaterial({ color: 0xCC6633, roughness: 0.5 })
    const stoolSeat = new THREE.Mesh(stoolSeatGeo, stoolMat)
    stoolSeat.position.set(-3, 1.6, 3)
    stoolSeat.castShadow = true
    stoolSeat.userData = {
      practicePhrase: "I sit at the counter and read the menu",
      phoneticFocus: "S in 'sit', R in 'read'",
      emoji: "🪑",
      name: "Bar Stool",
      color: 0xCC6633
    }
    scene.add(stoolSeat)
    objects3D.push(stoolSeat)
    
    // Stool leg
    const stoolLegGeo = new THREE.CylinderGeometry(0.04, 0.04, 1.6, 8)
    const stoolLegMat = new THREE.MeshStandardMaterial({ color: 0x333333, roughness: 0.3, metalness: 0.8 })
    const stoolLeg = new THREE.Mesh(stoolLegGeo, stoolLegMat)
    stoolLeg.position.set(-3, 0.8, 3)
    stoolLeg.castShadow = true
    scene.add(stoolLeg)
    
    // Stool base
    const stoolBaseGeo = new THREE.CylinderGeometry(0.25, 0.25, 0.04, 16)
    const stoolBase = new THREE.Mesh(stoolBaseGeo, stoolLegMat)
    stoolBase.position.set(-3, 0.02, 3)
    scene.add(stoolBase)
    
    // Second stool
    const stool2Seat = new THREE.Mesh(stoolSeatGeo, stoolMat)
    stool2Seat.position.set(3, 1.6, 3)
    stool2Seat.castShadow = true
    scene.add(stool2Seat)
    
    const stool2Leg = new THREE.Mesh(stoolLegGeo, stoolLegMat)
    stool2Leg.position.set(3, 0.8, 3)
    stool2Leg.castShadow = true
    scene.add(stool2Leg)
    
    const stool2Base = new THREE.Mesh(stoolBaseGeo, stoolLegMat)
    stool2Base.position.set(3, 0.02, 3)
    scene.add(stool2Base)
    
    // 5. CAKE on display stand
    const cakeStandGeo = new THREE.CylinderGeometry(0.35, 0.3, 0.5, 16)
    const cakeStandMat = new THREE.MeshStandardMaterial({ color: 0x888888, roughness: 0.2, metalness: 0.8 })
    const cakeStand = new THREE.Mesh(cakeStandGeo, cakeStandMat)
    cakeStand.position.set(5, 2.4, 0)
    cakeStand.castShadow = true
    scene.add(cakeStand)
    
    // Cake layers
    const cakeLayer1Geo = new THREE.CylinderGeometry(0.3, 0.3, 0.15, 16)
    const cakeLayer1Mat = new THREE.MeshStandardMaterial({ color: 0x4a2a1a, roughness: 0.4 })
    const cakeLayer1 = new THREE.Mesh(cakeLayer1Geo, cakeLayer1Mat)
    cakeLayer1.position.set(5, 2.75, 0)
    cakeLayer1.castShadow = true
    scene.add(cakeLayer1)
    
    const cakeLayer2Geo = new THREE.CylinderGeometry(0.28, 0.28, 0.12, 16)
    const cakeLayer2Mat = new THREE.MeshStandardMaterial({ color: 0x6B3A2A, roughness: 0.4 })
    const cakeLayer2 = new THREE.Mesh(cakeLayer2Geo, cakeLayer2Mat)
    cakeLayer2.position.set(5, 2.88, 0)
    cakeLayer2.castShadow = true
    scene.add(cakeLayer2)
    
    // Cherry on top
    const cherryGeo = new THREE.SphereGeometry(0.06, 12, 12)
    const cherryMat = new THREE.MeshStandardMaterial({ color: 0xCC2222, roughness: 0.2, emissive: 0x660000, emissiveIntensity: 0.2 })
    const cherry = new THREE.Mesh(cherryGeo, cherryMat)
    cherry.position.set(5, 2.98, 0)
    scene.add(cherry)
    
    cakeLayer1.userData = {
      practicePhrase: "The chocolate cake looks delicious today",
      phoneticFocus: "TH in 'the', L in 'delicious'",
      emoji: "🍰",
      name: "Cake",
      color: 0x4a2a1a
    }
    objects3D.push(cakeLayer1)
    
    // === DECORATIVE ELEMENTS ===
    
    // Plant in corner
    const potGeo = new THREE.CylinderGeometry(0.35, 0.25, 0.6, 12)
    const potMat = new THREE.MeshStandardMaterial({ color: 0xCC6633, roughness: 0.5 })
    const pot = new THREE.Mesh(potGeo, potMat)
    pot.position.set(-7, 0.3, -5)
    pot.castShadow = true
    scene.add(pot)
    
    for (let i = 0; i < 6; i++) {
      const leafGeo = new THREE.SphereGeometry(0.25, 8, 8)
      const leafMat = new THREE.MeshStandardMaterial({ color: 0x3a8a3a, roughness: 0.6 })
      const leaf = new THREE.Mesh(leafGeo, leafMat)
      const angle = (i / 6) * Math.PI * 2
      leaf.position.set(-7 + Math.cos(angle) * 0.25, 0.9 + Math.sin(i) * 0.15, -5 + Math.sin(angle) * 0.25)
      leaf.scale.y = 1.3
      leaf.castShadow = true
      scene.add(leaf)
    }
    
    // Chalkboard sign on left wall
    const chalkboardGeo = new THREE.BoxGeometry(0.1, 2, 1.5)
    const chalkboardMat = new THREE.MeshStandardMaterial({ color: 0x1a1a1a, roughness: 0.8 })
    const chalkboard = new THREE.Mesh(chalkboardGeo, chalkboardMat)
    chalkboard.position.set(-9.9, 3, 4)
    chalkboard.rotation.y = Math.PI / 2
    scene.add(chalkboard)
    
    // Chalk text lines (white)
    for (let i = 0; i < 3; i++) {
      const chalkLineGeo = new THREE.BoxGeometry(0.02, 0.03, 1)
      const chalkLineMat = new THREE.MeshBasicMaterial({ color: 0xffffff })
      const chalkLine = new THREE.Mesh(chalkLineGeo, chalkLineMat)
      chalkLine.position.set(-9.85, 3.5 - i * 0.4, 4)
      chalkLine.rotation.y = Math.PI / 2
      scene.add(chalkLine)
    }
    
    // === ANIMATION LOOP ===
    let time = 0
    const animate = () => {
      animationId = requestAnimationFrame(animate)
      time += 0.016
      
      // Pendant light flicker (subtle)
      pendants.forEach((p, i) => {
        p.intensity = 1.7 + Math.sin(time * 2 + i) * 0.15
      })
      
      // Phone screen pulse
      phoneMat.emissiveIntensity = 0.25 + Math.sin(time * 3) * 0.1
      
      // Steam from coffee (simple rising particles)
      coffee.position.y = 2.4 + Math.sin(time * 2) * 0.01
      
      // Cake cherry gentle bounce
      cherry.position.y = 2.98 + Math.sin(time * 1.5) * 0.02
      
      // Camera drift
      if (cameraShake > 0) {
        camera.position.x = (Math.random() - 0.5) * cameraShake * 0.1
        camera.position.y = 4 + (Math.random() - 0.5) * cameraShake * 0.1
      } else {
        camera.position.x = Math.sin(time * 0.08) * 0.6
        camera.position.y = 4 + Math.sin(time * 0.12) * 0.2
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
        background: 'linear-gradient(180deg, #3e2723 0%, #2c1810 100%)',
        color: 'white', fontFamily: 'sans-serif'
      }}>
        <div style={{ fontSize: '4rem', marginBottom: '20px' }}>☕</div>
        <h2 style={{ fontSize: '1.5rem', marginBottom: '10px' }}>Cafetería — Locked</h2>
        <p style={{ fontSize: '1rem', opacity: 0.7 }}>Reach a 7 day streak to unlock the Cafetería</p>
        <p style={{ fontSize: '2rem', marginTop: '20px' }}>Current streak: {streak} 🔥</p>
        <p style={{ fontSize: '0.9rem', opacity: 0.5, marginTop: '15px' }}>
          {Math.max(0, 7 - streak)} more days to unlock
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
        <div style={{ fontSize: '1.2rem', fontWeight: 'bold' }}>☕ Cafetería</div>
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
