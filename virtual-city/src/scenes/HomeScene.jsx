import { useRef, useEffect, useState } from 'react'
import { useAlmaGameStore } from '../store/useAlmaGameStore'

/**
 * HomeScene — 3D Home environment (always unlocked from Day 1)
 * 
 * A cozy living room with interactive practice objects:
 * - 🪑 Chair → "I sit on the chair and read a book"
 * - 🪑 Table → "I eat breakfast at the table every morning"  
 * - 📺 TV → "I watch TV after dinner"
 * - 📚 Bookshelf → "The bookshelf is full of stories"
 * - 🪞 Mirror → "I look in the mirror and practice my accent"
 * 
 * Warm indoor lighting, fireplace glow, ambient particles.
 */

export default function HomeScene() {
  const mountRef = useRef(null)
  const [selectedObject, setSelectedObject] = useState(null)
  const [isListening, setIsListening] = useState(false)
  const [feedback, setFeedback] = useState('')
  
  const streak = useAlmaGameStore(s => s.streak)
  const unlocked = useAlmaGameStore(s => s.unlockedLocations)
  const fogOpacity = useAlmaGameStore(s => s.fogOpacity)
  const cameraShake = useAlmaGameStore(s => s.cameraShake)
  const hapticEnabled = useAlmaGameStore(s => s.hapticEnabled)
  const masteryPoints = useAlmaGameStore(s => s.masteryPoints)
  
  const isUnlocked = unlocked.includes('home') // Always true

  useEffect(() => {
    if (!mountRef.current || !isUnlocked) return
    
    let scene, camera, renderer, animationId
    let raycaster, mouse
    let objects3D = []
    let fireplaceParticles = []
    
    // === SCENE SETUP ===
    scene = new THREE.Scene()
    scene.fog = new THREE.FogExp2(0x2a1f1a, 0.02)
    
    camera = new THREE.PerspectiveCamera(60, window.innerWidth / window.innerHeight, 0.1, 100)
    camera.position.set(0, 4, 12)
    camera.lookAt(0, 2, 0)
    
    renderer = new THREE.WebGLRenderer({ antialias: true, alpha: true })
    renderer.setSize(window.innerWidth, window.innerHeight)
    renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2))
    renderer.shadowMap.enabled = true
    renderer.shadowMap.type = THREE.PCFSoftShadowMap
    mountRef.current.appendChild(renderer.domElement)
    
    raycaster = new THREE.Raycaster()
    mouse = new THREE.Vector2()
    
    // === LIGHTING — Warm indoor ===
    const ambient = new THREE.AmbientLight(0xff9966, 0.4)
    scene.add(ambient)
    
    // Ceiling light
    const ceilingLight = new THREE.PointLight(0xffaa66, 1.5, 20)
    ceilingLight.position.set(0, 6, 0)
    ceilingLight.castShadow = true
    ceilingLight.shadow.mapSize.width = 2048
    ceilingLight.shadow.mapSize.height = 2048
    scene.add(ceilingLight)
    
    // Fireplace glow
    const fireLight = new THREE.PointLight(0xff4500, 1.2, 8)
    fireLight.position.set(-5, 1, -3)
    scene.add(fireLight)
    
    // Lamp light
    const lampLight = new THREE.PointLight(0xffd700, 0.8, 6)
    lampLight.position.set(4, 3, 2)
    scene.add(lampLight)
    
    // === FLOOR — Wood ===
    const floorGeo = new THREE.PlaneGeometry(20, 20)
    const floorMat = new THREE.MeshPhongMaterial({ color: 0x6B4226, shininess: 30 })
    const floor = new THREE.Mesh(floorGeo, floorMat)
    floor.rotation.x = -Math.PI / 2
    floor.position.y = 0
    floor.receiveShadow = true
    scene.add(floor)
    
    // === WALLS ===
    const wallMat = new THREE.MeshPhongMaterial({ color: 0x3e2723, side: THREE.DoubleSide })
    
    // Back wall
    const backWallGeo = new THREE.PlaneGeometry(20, 8)
    const backWall = new THREE.Mesh(backWallGeo, wallMat)
    backWall.position.set(0, 4, -8)
    backWall.receiveShadow = true
    scene.add(backWall)
    
    // Left wall
    const leftWallGeo = new THREE.PlaneGeometry(20, 8)
    const leftWall = new THREE.Mesh(leftWallGeo, wallMat)
    leftWall.position.set(-10, 4, 0)
    leftWall.rotation.y = Math.PI / 2
    leftWall.receiveShadow = true
    scene.add(leftWall)
    
    // Right wall
    const rightWallGeo = new THREE.PlaneGeometry(20, 8)
    const rightWall = new THREE.Mesh(rightWallGeo, wallMat)
    rightWall.position.set(10, 4, 0)
    rightWall.rotation.y = -Math.PI / 2
    rightWall.receiveShadow = true
    scene.add(rightWall)
    
    // === CEILING ===
    const ceilGeo = new THREE.PlaneGeometry(20, 20)
    const ceilMat = new THREE.MeshPhongMaterial({ color: 0x2a1a1a, side: THREE.DoubleSide })
    const ceiling = new THREE.Mesh(ceilGeo, ceilMat)
    ceiling.position.set(0, 8, 0)
    ceiling.rotation.x = Math.PI / 2
    scene.add(ceiling)
    
    // === RUG ===
    const rugGeo = new THREE.CircleGeometry(4, 32)
    const rugMat = new THREE.MeshPhongMaterial({ color: 0x8B0000, shininess: 10 })
    const rug = new THREE.Mesh(rugGeo, rugMat)
    rug.rotation.x = -Math.PI / 2
    rug.position.set(0, 0.02, 0)
    rug.receiveShadow = true
    scene.add(rug)
    
    // === FIREPLACE ===
    const fireplaceGeo = new THREE.BoxGeometry(3, 4, 1)
    const fireplaceMat = new THREE.MeshPhongMaterial({ color: 0x4a4a4a })
    const fireplace = new THREE.Mesh(fireplaceGeo, fireplaceMat)
    fireplace.position.set(-5, 2, -7.8)
    fireplace.castShadow = true
    fireplace.receiveShadow = true
    scene.add(fireplace)
    
    // Fire opening
    const fireOpeningGeo = new THREE.BoxGeometry(2, 1.5, 0.5)
    const fireOpeningMat = new THREE.MeshBasicMaterial({ color: 0xff6600 })
    const fireOpening = new THREE.Mesh(fireOpeningGeo, fireOpeningMat)
    fireOpening.position.set(-5, 1.5, -7.3)
    scene.add(fireOpening)
    
    // Fire particles
    for (let i = 0; i < 30; i++) {
      const particleGeo = new THREE.SphereGeometry(0.08, 6, 6)
      const particleMat = new THREE.MeshBasicMaterial({
        color: i % 3 === 0 ? 0xff4500 : 0xffaa00,
        transparent: true,
        opacity: 0.8
      })
      const particle = new THREE.Mesh(particleGeo, particleMat)
      particle.position.set(
        -5 + (Math.random() - 0.5) * 1.5,
        1.5 + Math.random() * 0.5,
        -7.2
      )
      particle.userData = {
        vy: 0.02 + Math.random() * 0.03,
        vx: (Math.random() - 0.5) * 0.01,
        life: 1.0,
        decay: 0.005 + Math.random() * 0.005
      }
      scene.add(particle)
      fireplaceParticles.push(particle)
    }
    
    // === INTERACTIVE OBJECTS ===
    
    // 1. CHAIR — "I sit on the chair and read a book"
    const chairSeatGeo = new THREE.BoxGeometry(1.2, 0.15, 1.2)
    const chairMat = new THREE.MeshPhongMaterial({ color: 0x8B4513 })
    const chairSeat = new THREE.Mesh(chairSeatGeo, chairMat)
    chairSeat.position.set(3, 0.6, 2)
    chairSeat.castShadow = true
    chairSeat.receiveShadow = true
    scene.add(chairSeat)
    
    const chairBackGeo = new THREE.BoxGeometry(1.2, 1.2, 0.15)
    const chairBack = new THREE.Mesh(chairBackGeo, chairMat)
    chairBack.position.set(3, 1.2, 2.5)
    chairBack.castShadow = true
    scene.add(chairBack)
    
    // Chair legs
    for (const [lx, lz] of [[-0.5, -0.5], [0.5, -0.5], [-0.5, 0.5], [0.5, 0.5]]) {
      const legGeo = new THREE.BoxGeometry(0.1, 0.6, 0.1)
      const leg = new THREE.Mesh(legGeo, chairMat)
      leg.position.set(3 + lx, 0.3, 2 + lz)
      leg.castShadow = true
      scene.add(leg)
    }
    
    chairSeat.userData = {
      practicePhrase: "I sit on the chair and read a book",
      phoneticFocus: "CH in 'chair', R in 'read'",
      emoji: "🪑",
      name: "Chair",
      color: 0x8B4513
    }
    chairBack.userData = chairSeat.userData
    objects3D.push(chairSeat, chairBack)
    
    // 2. TABLE — "I eat breakfast at the table every morning"
    const tableTopGeo = new THREE.BoxGeometry(2.5, 0.15, 1.5)
    const tableMat = new THREE.MeshPhongMaterial({ color: 0x5D3A1A })
    const tableTop = new THREE.Mesh(tableTopGeo, tableMat)
    tableTop.position.set(0, 1.5, -1)
    tableTop.castShadow = true
    tableTop.receiveShadow = true
    scene.add(tableTop)
    
    for (const [lx, lz] of [[-1.1, -0.6], [1.1, -0.6], [-1.1, 0.6], [1.1, 0.6]]) {
      const legGeo = new THREE.BoxGeometry(0.12, 1.5, 0.12)
      const leg = new THREE.Mesh(legGeo, tableMat)
      leg.position.set(lx, 0.75, -1 + lz)
      leg.castShadow = true
      scene.add(leg)
    }
    
    tableTop.userData = {
      practicePhrase: "I eat breakfast at the table every morning",
      phoneticFocus: "EA in 'breakfast', T in 'table'",
      emoji: "🍽️",
      name: "Table",
      color: 0x5D3A1A
    }
    objects3D.push(tableTop)
    
    // 3. TV — "I watch TV after dinner"
    const tvScreenGeo = new THREE.BoxGeometry(2, 1.2, 0.1)
    const tvScreenMat = new THREE.MeshPhongMaterial({ 
      color: 0x111111,
      emissive: 0x1133ff,
      emissiveIntensity: 0.3
    })
    const tvScreen = new THREE.Mesh(tvScreenGeo, tvScreenMat)
    tvScreen.position.set(5, 3, -7.7)
    tvScreen.castShadow = true
    scene.add(tvScreen)
    
    const tvStandGeo = new THREE.BoxGeometry(2.5, 1.5, 0.8)
    const tvStandMat = new THREE.MeshPhongMaterial({ color: 0x2a2a2a })
    const tvStand = new THREE.Mesh(tvStandGeo, tvStandMat)
    tvStand.position.set(5, 0.75, -7.5)
    tvStand.castShadow = true
    scene.add(tvStand)
    
    tvScreen.userData = {
      practicePhrase: "I watch TV after dinner",
      phoneticFocus: "W in 'watch', T in 'after'",
      emoji: "📺",
      name: "TV",
      color: 0x111111
    }
    objects3D.push(tvScreen)
    
    // 4. BOOKSHELF — "The bookshelf is full of stories"
    const shelfWoodGeo = new THREE.BoxGeometry(2, 4, 0.8)
    const shelfMat = new THREE.MeshPhongMaterial({ color: 0x4a3020 })
    const shelf = new THREE.Mesh(shelfWoodGeo, shelfMat)
    shelf.position.set(-8, 2, -3)
    shelf.rotation.y = Math.PI / 2
    shelf.castShadow = true
    shelf.receiveShadow = true
    scene.add(shelf)
    
    // Books on shelf
    const bookColors = [0xff4444, 0x4444ff, 0x44ff44, 0xffff44, 0xff44ff, 0x44ffff, 0xff8844]
    for (let row = 0; row < 4; row++) {
      for (let col = 0; col < 5; col++) {
        const bookGeo = new THREE.BoxGeometry(0.3, 0.6, 0.5)
        const bookMat = new THREE.MeshPhongMaterial({ 
          color: bookColors[(row * 5 + col) % bookColors.length]
        })
        const book = new THREE.Mesh(bookGeo, bookMat)
        book.position.set(-8 + (col - 2) * 0.35, 0.8 + row * 0.9, -2.5)
        book.castShadow = true
        scene.add(book)
      }
    }
    
    shelf.userData = {
      practicePhrase: "The bookshelf is full of stories",
      phoneticFocus: "TH in 'the', F in 'full'",
      emoji: "📚",
      name: "Bookshelf",
      color: 0x4a3020
    }
    objects3D.push(shelf)
    
    // 5. MIRROR — "I look in the mirror and practice my accent"
    const mirrorFrameGeo = new THREE.BoxGeometry(1.5, 2.5, 0.1)
    const frameMat = new THREE.MeshPhongMaterial({ color: 0xDAA520 })
    const mirrorFrame = new THREE.Mesh(mirrorFrameGeo, frameMat)
    mirrorFrame.position.set(8, 3, 2)
    mirrorFrame.rotation.y = -Math.PI / 2
    mirrorFrame.castShadow = true
    scene.add(mirrorFrame)
    
    const mirrorGlassGeo = new THREE.PlaneGeometry(1.3, 2.3)
    const mirrorMat = new THREE.MeshPhongMaterial({ 
      color: 0x88ccff,
      emissive: 0x336699,
      emissiveIntensity: 0.2,
      shininess: 100
    })
    const mirrorGlass = new THREE.Mesh(mirrorGlassGeo, mirrorMat)
    mirrorGlass.position.set(7.95, 3, 2)
    mirrorGlass.rotation.y = -Math.PI / 2
    scene.add(mirrorGlass)
    
    mirrorFrame.userData = {
      practicePhrase: "I look in the mirror and practice my accent",
      phoneticFocus: "L in 'look', R in 'mirror'",
      emoji: "🪞",
      name: "Mirror",
      color: 0xDAA520
    }
    objects3D.push(mirrorFrame)
    
    // === WINDOW with sunset light ===
    const windowGeo = new THREE.PlaneGeometry(2, 2)
    const windowMat = new THREE.MeshBasicMaterial({ 
      color: 0xff6b35,
      transparent: true,
      opacity: 0.6
    })
    const window1 = new THREE.Mesh(windowGeo, windowMat)
    window1.position.set(0, 4, -7.9)
    scene.add(window1)
    
    const windowLight = new THREE.DirectionalLight(0xff8855, 0.5)
    windowLight.position.set(0, 4, -10)
    scene.add(windowLight)
    
    // === ANIMATION LOOP ===
    let time = 0
    const animate = () => {
      animationId = requestAnimationFrame(animate)
      time += 0.016
      
      // Fire particles
      fireplaceParticles.forEach(p => {
        p.position.y += p.userData.vy
        p.position.x += p.userData.vx
        p.userData.life -= p.userData.decay
        p.material.opacity = p.userData.life
        if (p.userData.life <= 0) {
          p.position.set(-5 + (Math.random() - 0.5) * 1.5, 1.5, -7.2)
          p.userData.life = 1.0
        }
      })
      
      // Fire light flicker
      fireLight.intensity = 1.0 + Math.sin(time * 8) * 0.3 + Math.random() * 0.2
      
      // TV screen flicker
      tvScreenMat.emissiveIntensity = 0.2 + Math.sin(time * 3) * 0.1
      
      // Mirror shimmer
      mirrorMat.emissiveIntensity = 0.15 + Math.sin(time * 2) * 0.05
      
      // Camera
      if (cameraShake > 0) {
        camera.position.x = (Math.random() - 0.5) * cameraShake * 0.1
        camera.position.y = 4 + (Math.random() - 0.5) * cameraShake * 0.1
      } else {
        camera.position.x = Math.sin(time * 0.08) * 0.8
        camera.position.y = 4 + Math.sin(time * 0.12) * 0.3
      }
      camera.position.z = 12
      camera.lookAt(0, 2, 0)
      
      renderer.render(scene, camera)
    }
    animate()
    
    // === CLICK HANDLER ===
    const handleClick = (event) => {
      mouse.x = (event.clientX / window.innerWidth) * 2 - 1
      mouse.y = -(event.clientY / window.innerHeight) * 2 + 1
      raycaster.setFromCamera(mouse, camera)
      const intersects = raycaster.intersectObjects(objects3D)
      
      if (intersects.length > 0) {
        const obj = intersects[0].object
        const data = obj.userData
        
        if (!data.practicePhrase) return
        
        setSelectedObject(data)
        setFeedback('')
        
        if (hapticEnabled && navigator.vibrate) navigator.vibrate(50)
        
        // TTS
        if ('speechSynthesis' in window) {
          speechSynthesis.cancel()
          const utterance = new SpeechSynthesisUtterance(data.practicePhrase)
          utterance.lang = 'en-US'
          utterance.rate = 0.85
          speechSynthesis.speak(utterance)
        }
        
        // Highlight
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
    if (!selectedObject) return
    if (!('webkitSpeechRecognition' in window) && !('SpeechRecognition' in window)) {
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
      const accuracy = Math.round((matches / targetWords.length) * 100)
      
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
        <div style={{ fontSize: '1.2rem', fontWeight: 'bold' }}>🏠 Home</div>
        <div style={{ fontSize: '0.9rem', opacity: 0.8 }}>
          Streak: {streak} 🔥 | Mastery: {masteryPoints} pts
        </div>
      </div>
      
      {/* Zone selector */}
      <div style={{
        position: 'absolute', top: '20px', right: '20px',
        display: 'flex', gap: '8px',
        fontFamily: 'sans-serif'
      }}>
        {useAlmaGameStore.getState().getUnlockProgress().slice(0, 8).map(item => (
          <button
            key={item.day}
            onClick={() => {
              if (item.unlocked) {
                const locMap = {
                  1: 'home', 3: 'school', 5: 'gym', 7: 'cafeteria',
                  10: 'malecon', 14: 'forum', 21: 'centro', 30: 'full_city'
                }
                useAlmaGameStore.getState().navigateTo(locMap[item.day])
              }
            }}
            style={{
              fontSize: '1.5rem',
              padding: '8px 12px',
              borderRadius: '10px',
              border: item.unlocked ? '1px solid rgba(255,107,53,0.4)' : '1px solid rgba(100,100,100,0.2)',
              background: item.unlocked ? 'rgba(255,107,53,0.15)' : 'rgba(50,50,50,0.3)',
              cursor: item.unlocked ? 'pointer' : 'not-allowed',
              opacity: item.unlocked ? 1 : 0.4,
              filter: item.unlocked ? 'none' : 'grayscale(1)',
              transition: 'all 0.3s'
            }}
            title={item.unlocked ? item.location : `Unlocks at Day ${item.day} (${item.daysRemaining} days left)`}
          >
            {item.emoji}
          </button>
        ))}
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
