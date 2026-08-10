import * as THREE from 'three'
import { useRef, useEffect, useState } from 'react'
import { useAlmaGameStore } from '../store/useAlmaGameStore'

/**
 * CentroScene — 3D Downtown Culiacán (Day 21 streak unlock)
 * 
 * Interactive practice objects:
 * - 🚦 Traffic Light → "I stop when the light turns red"
 * - 🚌 Bus Stop → "I wait for the bus at the corner"
 * - 🗺️ Street Map → "I need directions to the plaza"
 * - 🏛️ Cathedral → "The cathedral is in the center of town"
 * - 🚕 Taxi → "I take a taxi to go downtown"
 * 
 * Bright urban daylight — sun + sky + building reflections.
 */

export default function CentroScene() {
  const mountRef = useRef(null)
  const [selectedObject, setSelectedObject] = useState(null)
  const [isListening, setIsListening] = useState(false)
  const [feedback, setFeedback] = useState('')
  
  const streak = useAlmaGameStore(s => s.streak)
  const unlocked = useAlmaGameStore(s => s.unlockedLocations)
  const cameraShake = useAlmaGameStore(s => s.cameraShake)
  const hapticEnabled = useAlmaGameStore(s => s.hapticEnabled)
  const masteryPoints = useAlmaGameStore(s => s.masteryPoints)
  
  const isUnlocked = unlocked.includes('centro') || unlocked.includes('full_city')

  useEffect(() => {
    if (!mountRef.current || !isUnlocked) return
    
    let scene, camera, renderer, animationId
    let raycaster, mouse
    let objects3D = []
    
    scene = new THREE.Scene()
    scene.fog = new THREE.FogExp2(0xaabbcc, 0.012)
    scene.background = new THREE.Color(0x87aabb)
    
    camera = new THREE.PerspectiveCamera(60, window.innerWidth / window.innerHeight, 0.1, 200)
    camera.position.set(0, 6, 16)
    camera.lookAt(0, 3, 0)
    
    renderer = new THREE.WebGLRenderer({ antialias: true, alpha: false })
    renderer.setSize(window.innerWidth, window.innerHeight)
    renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2))
    renderer.shadowMap.enabled = true
    renderer.shadowMap.type = THREE.PCFSoftShadowMap
    renderer.toneMapping = THREE.ACESFilmicToneMapping
    renderer.toneMappingExposure = 1.5
    mountRef.current.appendChild(renderer.domElement)
    
    raycaster = new THREE.Raycaster()
    mouse = new THREE.Vector2()
    
    // === LIGHTING — BRIGHT URBAN DAYLIGHT ===
    const ambient = new THREE.AmbientLight(0xffffff, 0.7)
    scene.add(ambient)
    
    const hemiLight = new THREE.HemisphereLight(0x88ccff, 0x888877, 0.6)
    hemiLight.position.set(0, 20, 0)
    scene.add(hemiLight)
    
    const sunLight = new THREE.DirectionalLight(0xffffee, 1.8)
    sunLight.position.set(15, 20, 10)
    sunLight.castShadow = true
    sunLight.shadow.mapSize.width = 2048
    sunLight.shadow.mapSize.height = 2048
    sunLight.shadow.camera.left = -20
    sunLight.shadow.camera.right = 20
    sunLight.shadow.camera.top = 20
    sunLight.shadow.camera.bottom = -20
    sunLight.shadow.bias = -0.001
    scene.add(sunLight)
    
    const fillLight = new THREE.DirectionalLight(0xccddff, 0.4)
    fillLight.position.set(-10, 10, -10)
    scene.add(fillLight)
    
    // === FLOOR — Street asphalt + sidewalk ===
    
    // Street (dark asphalt)
    const streetGeo = new THREE.PlaneGeometry(12, 30)
    const streetMat = new THREE.MeshStandardMaterial({ color: 0x333333, roughness: 0.8 })
    const street = new THREE.Mesh(streetGeo, streetMat)
    street.rotation.x = -Math.PI / 2
    street.position.set(0, 0, -2)
    street.receiveShadow = true
    scene.add(street)
    
    // Lane markings (yellow dashed)
    for (let i = -12; i <= 12; i += 2.5) {
      const dashGeo = new THREE.PlaneGeometry(0.15, 1)
      const dashMat = new THREE.MeshBasicMaterial({ color: 0xffdd00 })
      const dash = new THREE.Mesh(dashGeo, dashMat)
      dash.rotation.x = -Math.PI / 2
      dash.position.set(0, 0.02, i - 2)
      scene.add(dash)
    }
    
    // Sidewalks (concrete)
    for (const xPos of [-8, 8]) {
      const swGeo = new THREE.PlaneGeometry(4, 30)
      const swMat = new THREE.MeshStandardMaterial({ color: 0x999999, roughness: 0.6 })
      const sw = new THREE.Mesh(swGeo, swMat)
      sw.rotation.x = -Math.PI / 2
      sw.position.set(xPos, 0.1, -2)
      sw.receiveShadow = true
      scene.add(sw)
    }
    
    // === BUILDINGS — Left and right side ===
    const buildingColors = [0x8a7a6a, 0x6a7a8a, 0x9a8a7a, 0x7a6a5a, 0x5a6a7a, 0x8a6a5a]
    
    // Left buildings
    for (let i = 0; i < 4; i++) {
      const w = 4 + Math.random() * 2
      const h = 6 + i * 2 + Math.random() * 3
      const d = 4
      const bldGeo = new THREE.BoxGeometry(w, h, d)
      const bldMat = new THREE.MeshStandardMaterial({ color: buildingColors[i % 6], roughness: 0.7 })
      const bld = new THREE.Mesh(bldGeo, bldMat)
      bld.position.set(-12, h / 2, -9 + i * 7)
      bld.castShadow = true
      bld.receiveShadow = true
      scene.add(bld)
      
      // Windows
      for (let row = 0; row < Math.floor(h / 2); row++) {
        for (let col = 0; col < 2; col++) {
          const winGeo = new THREE.PlaneGeometry(0.8, 1)
          const winMat = new THREE.MeshStandardMaterial({
            color: 0x88ccdd, emissive: 0x4488aa, emissiveIntensity: 0.2,
            roughness: 0.1, metalness: 0.8
          })
          const win = new THREE.Mesh(winGeo, winMat)
          win.position.set(-12 + d / 2 + 0.01, 2 + row * 2, -9 + i * 7 - 1.5 + col * 1.5)
          win.rotation.y = -Math.PI / 2
          scene.add(win)
        }
      }
    }
    
    // Right buildings
    for (let i = 0; i < 4; i++) {
      const w = 4 + Math.random() * 2
      const h = 5 + i * 2.5 + Math.random() * 2
      const d = 4
      const bldGeo = new THREE.BoxGeometry(w, h, d)
      const bldMat = new THREE.MeshStandardMaterial({ color: buildingColors[(i + 3) % 6], roughness: 0.7 })
      const bld = new THREE.Mesh(bldGeo, bldMat)
      bld.position.set(12, h / 2, -9 + i * 7)
      bld.castShadow = true
      bld.receiveShadow = true
      scene.add(bld)
      
      // Windows
      for (let row = 0; row < Math.floor(h / 2); row++) {
        for (let col = 0; col < 2; col++) {
          const winGeo = new THREE.PlaneGeometry(0.8, 1)
          const winMat = new THREE.MeshStandardMaterial({
            color: 0x88ccdd, emissive: 0x4488aa, emissiveIntensity: 0.2,
            roughness: 0.1, metalness: 0.8
          })
          const win = new THREE.Mesh(winGeo, winMat)
          win.position.set(12 - d / 2 - 0.01, 2 + row * 2, -9 + i * 7 - 1.5 + col * 1.5)
          win.rotation.y = Math.PI / 2
          scene.add(win)
        }
      }
    }
    
    // === CATHEDRAL (back, recognizable landmark) ===
    const cathBodyGeo = new THREE.BoxGeometry(6, 8, 4)
    const cathMat = new THREE.MeshStandardMaterial({ color: 0xc4a88a, roughness: 0.8 })
    const cathBody = new THREE.Mesh(cathBodyGeo, cathMat)
    cathBody.position.set(-4, 4, -14)
    cathBody.castShadow = true
    scene.add(cathBody)
    
    // Cathedral towers
    for (const xPos of [-7, -1]) {
      const towerGeo = new THREE.CylinderGeometry(1, 1.2, 10, 8)
      const tower = new THREE.Mesh(towerGeo, cathMat)
      tower.position.set(xPos, 5, -14)
      tower.castShadow = true
      scene.add(tower)
      
      // Tower dome
      const domeGeo = new THREE.SphereGeometry(1, 12, 8, 0, Math.PI * 2, 0, Math.PI / 2)
      const domeMat = new THREE.MeshStandardMaterial({ color: 0x8a7a5a, roughness: 0.4, metalness: 0.3 })
      const dome = new THREE.Mesh(domeGeo, domeMat)
      dome.position.set(xPos, 10, -14)
      scene.add(dome)
    }
    
    cathBody.userData = {
      practicePhrase: "The cathedral is in the center of town",
      phoneticFocus: "TH in 'the', C in 'center'",
      emoji: "🏛️",
      name: "Cathedral",
      color: 0xc4a88a
    }
    objects3D.push(cathBody)
    
    // === INTERACTIVE OBJECTS ===
    
    // 1. TRAFFIC LIGHT
    const tlPoleGeo = new THREE.CylinderGeometry(0.08, 0.08, 4, 8)
    const tlPoleMat = new THREE.MeshStandardMaterial({ color: 0x333333, roughness: 0.4, metalness: 0.7 })
    const tlPole = new THREE.Mesh(tlPoleGeo, tlPoleMat)
    tlPole.position.set(3.5, 2, 2)
    tlPole.castShadow = true
    scene.add(tlPole)
    
    const tlBoxGeo = new THREE.BoxGeometry(0.5, 1.2, 0.3)
    const tlBoxMat = new THREE.MeshStandardMaterial({ color: 0x222222, roughness: 0.3 })
    const tlBox = new THREE.Mesh(tlBoxGeo, tlBoxMat)
    tlBox.position.set(3.5, 4.5, 2)
    tlBox.castShadow = true
    tlBox.userData = {
      practicePhrase: "I stop when the light turns red",
      phoneticFocus: "ST in 'stop', L in 'light'",
      emoji: "🚦",
      name: "Traffic Light",
      color: 0x222222
    }
    scene.add(tlBox)
    objects3D.push(tlBox)
    
    // Traffic light colors
    const redLight = new THREE.Mesh(
      new THREE.SphereGeometry(0.12, 12, 12),
      new THREE.MeshStandardMaterial({ color: 0xff3333, emissive: 0xff0000, emissiveIntensity: 0.8 })
    )
    redLight.position.set(3.5, 4.9, 2.16)
    scene.add(redLight)
    
    const yellowLight = new THREE.Mesh(
      new THREE.SphereGeometry(0.12, 12, 12),
      new THREE.MeshStandardMaterial({ color: 0xffaa00, emissive: 0xff8800, emissiveIntensity: 0.3 })
    )
    yellowLight.position.set(3.5, 4.5, 2.16)
    scene.add(yellowLight)
    
    const greenLight = new THREE.Mesh(
      new THREE.SphereGeometry(0.12, 12, 12),
      new THREE.MeshStandardMaterial({ color: 0x33ff33, emissive: 0x00cc00, emissiveIntensity: 0.3 })
    )
    greenLight.position.set(3.5, 4.1, 2.16)
    scene.add(greenLight)
    
    // 2. BUS STOP sign
    const bsPoleGeo = new THREE.CylinderGeometry(0.05, 0.05, 3, 6)
    const bsPoleMat = new THREE.MeshStandardMaterial({ color: 0x444444, roughness: 0.3, metalness: 0.6 })
    const bsPole = new THREE.Mesh(bsPoleGeo, bsPoleMat)
    bsPole.position.set(-3.5, 1.5, 4)
    bsPole.castShadow = true
    scene.add(bsPole)
    
    const bsSignGeo = new THREE.BoxGeometry(1, 0.6, 0.05)
    const bsSignMat = new THREE.MeshStandardMaterial({ color: 0x0066cc, emissive: 0x0044aa, emissiveIntensity: 0.3 })
    const bsSign = new THREE.Mesh(bsSignGeo, bsSignMat)
    bsSign.position.set(-3.5, 3, 4)
    bsSign.castShadow = true
    bsSign.userData = {
      practicePhrase: "I wait for the bus at the corner",
      phoneticFocus: "W in 'wait', B in 'bus'",
      emoji: "🚌",
      name: "Bus Stop",
      color: 0x0066cc
    }
    scene.add(bsSign)
    objects3D.push(bsSign)
    
    // Bus stop bench
    const bsBenchGeo = new THREE.BoxGeometry(1.5, 0.08, 0.5)
    const bsBenchMat = new THREE.MeshStandardMaterial({ color: 0x666666, roughness: 0.5, metalness: 0.4 })
    const bsBench = new THREE.Mesh(bsBenchGeo, bsBenchMat)
    bsBench.position.set(-3.5, 0.6, 4.5)
    bsBench.castShadow = true
    scene.add(bsBench)
    
    for (const [lx, lz] of [[-0.6, -0.2], [0.6, -0.2], [-0.6, 0.2], [0.6, 0.2]]) {
      const legGeo = new THREE.BoxGeometry(0.04, 0.6, 0.04)
      const leg = new THREE.Mesh(legGeo, bsPoleMat)
      leg.position.set(-3.5 + lx, 0.3, 4.5 + lz)
      scene.add(leg)
    }
    
    // 3. STREET MAP (on a kiosk)
    const kioskGeo = new THREE.CylinderGeometry(0.1, 0.1, 1.5, 8)
    const kioskMat = new THREE.MeshStandardMaterial({ color: 0x333333, roughness: 0.3, metalness: 0.7 })
    const kioskPole = new THREE.Mesh(kioskGeo, kioskMat)
    kioskPole.position.set(5, 0.75, -4)
    kioskPole.castShadow = true
    scene.add(kioskPole)
    
    const mapGeo = new THREE.BoxGeometry(1.5, 1, 0.08)
    const mapMat = new THREE.MeshStandardMaterial({
      color: 0x4a8a4a, roughness: 0.4,
      emissive: 0x224422, emissiveIntensity: 0.15
    })
    const streetMap = new THREE.Mesh(mapGeo, mapMat)
    streetMap.position.set(5, 1.7, -4)
    streetMap.castShadow = true
    streetMap.userData = {
      practicePhrase: "I need directions to the plaza",
      phoneticFocus: "N in 'need', D in 'directions'",
      emoji: "🗺️",
      name: "Street Map",
      color: 0x4a8a4a
    }
    scene.add(streetMap)
    objects3D.push(streetMap)
    
    // Map streets (lines)
    for (let i = 0; i < 3; i++) {
      const mlGeo = new THREE.BoxGeometry(1.3, 0.03, 0.01)
      const mlMat = new THREE.MeshBasicMaterial({ color: 0xffffff })
      const ml = new THREE.Mesh(mlGeo, mlMat)
      ml.position.set(5, 1.7 + 0.3 - i * 0.3, -3.95)
      scene.add(ml)
    }
    
    // 4. TAXI
    const taxiBodyGeo = new THREE.BoxGeometry(1.8, 0.6, 3.5)
    const taxiMat = new THREE.MeshStandardMaterial({ color: 0xffcc00, roughness: 0.3, metalness: 0.4 })
    const taxiBody = new THREE.Mesh(taxiBodyGeo, taxiMat)
    taxiBody.position.set(-1, 0.7, 6)
    taxiBody.castShadow = true
    taxiBody.receiveShadow = true
    taxiBody.userData = {
      practicePhrase: "I take a taxi to go downtown",
      phoneticFocus: "T in 'take', D in 'downtown'",
      emoji: "🚕",
      name: "Taxi",
      color: 0xffcc00
    }
    scene.add(taxiBody)
    objects3D.push(taxiBody)
    
    // Taxi roof (light)
    const taxiRoofGeo = new THREE.BoxGeometry(1.4, 0.15, 1.5)
    const taxiRoofMat = new THREE.MeshStandardMaterial({ color: 0xff8800, emissive: 0xff6600, emissiveIntensity: 0.3 })
    const taxiRoof = new THREE.Mesh(taxiRoofGeo, taxiRoofMat)
    taxiRoof.position.set(-1, 1.1, 6)
    scene.add(taxiRoof)
    
    // Taxi wheels
    for (const [wx, wz] of [[-0.8, 1.2], [0.8, 1.2], [-0.8, -1.2], [0.8, -1.2]]) {
      const wheelGeo = new THREE.CylinderGeometry(0.3, 0.3, 0.15, 16)
      const wheelMat = new THREE.MeshStandardMaterial({ color: 0x222222, roughness: 0.6 })
      const wheel = new THREE.Mesh(wheelGeo, wheelMat)
      wheel.position.set(wx, 0.3, 6 + wz)
      wheel.rotation.z = Math.PI / 2
      wheel.castShadow = true
      scene.add(wheel)
    }
    
    // Taxi headlights
    for (const hx of [-0.6, 0.6]) {
      const hlGeo = new THREE.SphereGeometry(0.12, 8, 8)
      const hlMat = new THREE.MeshStandardMaterial({ color: 0xffffaa, emissive: 0xffffaa, emissiveIntensity: 0.5 })
      const hl = new THREE.Mesh(hlGeo, hlMat)
      hl.position.set(hx, 0.7, 7.7)
      scene.add(hl)
    }
    
    // === DECORATIVE ELEMENTS ===
    
    // Street trees
    for (const [x, z] of [[-7, 6], [-7, 0], [7, -6]]) {
      const trunkGeo = new THREE.CylinderGeometry(0.12, 0.15, 2.5, 8)
      const trunkMat = new THREE.MeshStandardMaterial({ color: 0x6B4226, roughness: 0.8 })
      const trunk = new THREE.Mesh(trunkGeo, trunkMat)
      trunk.position.set(x, 1.25, z)
      trunk.castShadow = true
      scene.add(trunk)
      
      const canopyGeo = new THREE.SphereGeometry(1, 12, 12)
      const canopyMat = new THREE.MeshStandardMaterial({ color: 0x3a8a3a, roughness: 0.6 })
      const canopy = new THREE.Mesh(canopyGeo, canopyMat)
      canopy.position.set(x, 3, z)
      canopy.castShadow = true
      scene.add(canopy)
    }
    
    // Street lamps
    for (const [x, z] of [[-6, -3], [6, 3]]) {
      const lampGeo = new THREE.CylinderGeometry(0.06, 0.08, 4, 6)
      const lampMat = new THREE.MeshStandardMaterial({ color: 0x2a2a2a, roughness: 0.3, metalness: 0.7 })
      const lamp = new THREE.Mesh(lampGeo, lampMat)
      lamp.position.set(x, 2, z)
      lamp.castShadow = true
      scene.add(lamp)
      
      const headGeo = new THREE.SphereGeometry(0.2, 8, 8)
      const headMat = new THREE.MeshStandardMaterial({ color: 0xffeeaa, emissive: 0xffdd66, emissiveIntensity: 0.5 })
      const head = new THREE.Mesh(headGeo, headMat)
      head.position.set(x, 4, z)
      scene.add(head)
    }
    
    // === ANIMATION LOOP ===
    let time = 0
    let tlState = 0 // 0=green, 1=yellow, 2=red
    let tlTimer = 0
    const animate = () => {
      animationId = requestAnimationFrame(animate)
      time += 0.016
      tlTimer += 0.016
      
      // Traffic light cycle
      if (tlTimer > 3) {
        tlTimer = 0
        tlState = (tlState + 1) % 3
        if (tlState === 0) {
          greenLight.material.emissiveIntensity = 0.8
          yellowLight.material.emissiveIntensity = 0.2
          redLight.material.emissiveIntensity = 0.2
        } else if (tlState === 1) {
          greenLight.material.emissiveIntensity = 0.2
          yellowLight.material.emissiveIntensity = 0.8
          redLight.material.emissiveIntensity = 0.2
        } else {
          greenLight.material.emissiveIntensity = 0.2
          yellowLight.material.emissiveIntensity = 0.2
          redLight.material.emissiveIntensity = 0.8
        }
      }
      
      // Camera drift
      if (cameraShake > 0) {
        camera.position.x = (Math.random() - 0.5) * cameraShake * 0.1
        camera.position.y = 6 + (Math.random() - 0.5) * cameraShake * 0.1
      } else {
        camera.position.x = Math.sin(time * 0.06) * 1
        camera.position.y = 6 + Math.sin(time * 0.1) * 0.3
      }
      camera.position.z = 16
      camera.lookAt(0, 3, 0)
      
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
        background: 'linear-gradient(180deg, #263238 0%, #37474f 100%)',
        color: 'white', fontFamily: 'sans-serif'
      }}>
        <div style={{ fontSize: '4rem', marginBottom: '20px' }}>🏙️</div>
        <h2 style={{ fontSize: '1.5rem', marginBottom: '10px' }}>Centro — Locked</h2>
        <p style={{ fontSize: '1rem', opacity: 0.7 }}>Reach a 21 day streak to unlock Centro</p>
        <p style={{ fontSize: '2rem', marginTop: '20px' }}>Current streak: {streak} 🔥</p>
        <p style={{ fontSize: '0.9rem', opacity: 0.5, marginTop: '15px' }}>
          {Math.max(0, 21 - streak)} more days to unlock
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
        <div style={{ fontSize: '1.2rem', fontWeight: 'bold' }}>🏙️ Centro</div>
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
