import * as THREE from 'three'
import { useRef, useEffect, useState } from 'react'
import { useAlmaGameStore } from '../store/useAlmaGameStore'

/**
 * ForumScene — 3D Forum Culiacán shopping mall (Day 14 streak unlock)
 * 
 * Interactive practice objects:
 * - 🛍️ Shopping Bag → "I bought a new shirt at the mall today"
 * - 🎟️ Movie Ticket → "I want to watch a movie at the cinema"
 * - 🍔 Food Court Tray → "I ordered a burger with french fries"
 * - 💳 Cash Register → "How much does this cost?"
 * - 🧥 Clothing Rack → "I need to try on these clothes"
 * 
 * Bright mall lighting — skylights + storefront lights + escalator glow.
 */

export default function ForumScene() {
  const mountRef = useRef(null)
  const [selectedObject, setSelectedObject] = useState(null)
  const [isListening, setIsListening] = useState(false)
  const [feedback, setFeedback] = useState('')
  
  const streak = useAlmaGameStore(s => s.streak)
  const unlocked = useAlmaGameStore(s => s.unlockedLocations)
  const cameraShake = useAlmaGameStore(s => s.cameraShake)
  const hapticEnabled = useAlmaGameStore(s => s.hapticEnabled)
  const masteryPoints = useAlmaGameStore(s => s.masteryPoints)
  
  const isUnlocked = unlocked.includes('forum') || unlocked.includes('full_city')

  useEffect(() => {
    if (!mountRef.current || !isUnlocked) return
    
    let scene, camera, renderer, animationId
    let raycaster, mouse
    let objects3D = []
    
    scene = new THREE.Scene()
    scene.fog = new THREE.FogExp2(0x4a4a5a, 0.01)
    scene.background = new THREE.Color(0x2a2a3a)
    
    camera = new THREE.PerspectiveCamera(60, window.innerWidth / window.innerHeight, 0.1, 100)
    camera.position.set(0, 5, 14)
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
    
    // === LIGHTING — BRIGHT MALL ===
    const ambient = new THREE.AmbientLight(0xffffff, 0.9)
    scene.add(ambient)
    
    const hemiLight = new THREE.HemisphereLight(0xffffff, 0x8888aa, 0.6)
    hemiLight.position.set(0, 10, 0)
    scene.add(hemiLight)
    
    // Skylights (2 big panels in ceiling)
    for (const [x, z] of [[-4, -2], [4, -2]]) {
      const skyLight = new THREE.PointLight(0xffffff, 2.5, 20)
      skyLight.position.set(x, 9, z)
      skyLight.castShadow = true
      skyLight.shadow.mapSize.width = 2048
      skyLight.shadow.mapSize.height = 2048
      scene.add(skyLight)
    }
    
    // Storefront accent lights
    const store1Light = new THREE.PointLight(0xff4488, 0.8, 10)
    store1Light.position.set(-7, 4, -5)
    scene.add(store1Light)
    
    const store2Light = new THREE.PointLight(0x44aaff, 0.8, 10)
    store2Light.position.set(7, 4, -5)
    scene.add(store2Light)
    
    const store3Light = new THREE.PointLight(0xffaa00, 0.8, 10)
    store3Light.position.set(-7, 4, 3)
    scene.add(store3Light)
    
    const store4Light = new THREE.PointLight(0x44ff88, 0.8, 10)
    store4Light.position.set(7, 4, 3)
    scene.add(store4Light)
    
    // Directional fill
    const fillLight = new THREE.DirectionalLight(0xffffff, 0.4)
    fillLight.position.set(0, 8, 10)
    scene.add(fillLight)
    
    // === FLOOR — Polished mall tile ===
    const floorGeo = new THREE.PlaneGeometry(24, 24)
    const floorMat = new THREE.MeshStandardMaterial({
      color: 0xb0b0c0, roughness: 0.15, metalness: 0.3
    })
    const floor = new THREE.Mesh(floorGeo, floorMat)
    floor.rotation.x = -Math.PI / 2
    floor.receiveShadow = true
    scene.add(floor)
    
    // Floor center pattern
    const centerGeo = new THREE.RingGeometry(2, 2.5, 32)
    const centerMat = new THREE.MeshStandardMaterial({
      color: 0xff6b35, emissive: 0xff6b35, emissiveIntensity: 0.3, roughness: 0.3
    })
    const centerRing = new THREE.Mesh(centerGeo, centerMat)
    centerRing.rotation.x = -Math.PI / 2
    centerRing.position.set(0, 0.02, 0)
    scene.add(centerRing)
    
    // === WALLS — Mall interior ===
    const wallMat = new THREE.MeshStandardMaterial({ color: 0x6a6a8a, roughness: 0.7 })
    
    const backWall = new THREE.Mesh(new THREE.PlaneGeometry(24, 10), wallMat)
    backWall.position.set(0, 5, -10)
    backWall.receiveShadow = true
    scene.add(backWall)
    
    const leftWall = new THREE.Mesh(new THREE.PlaneGeometry(24, 10), wallMat)
    leftWall.position.set(-12, 5, 0)
    leftWall.rotation.y = Math.PI / 2
    leftWall.receiveShadow = true
    scene.add(leftWall)
    
    const rightWall = new THREE.Mesh(new THREE.PlaneGeometry(24, 10), wallMat)
    rightWall.position.set(12, 5, 0)
    rightWall.rotation.y = -Math.PI / 2
    rightWall.receiveShadow = true
    scene.add(rightWall)
    
    // === CEILING with skylights ===
    const ceiling = new THREE.Mesh(
      new THREE.PlaneGeometry(24, 24),
      new THREE.MeshStandardMaterial({ color: 0xeeeeff, roughness: 0.9 })
    )
    ceiling.position.set(0, 10, 0)
    ceiling.rotation.x = Math.PI / 2
    scene.add(ceiling)
    
    // Skylight panels
    for (const [x, z] of [[-4, -2], [4, -2]]) {
      const skyGeo = new THREE.PlaneGeometry(3, 3)
      const skyMat = new THREE.MeshBasicMaterial({ color: 0xffffdd, transparent: true, opacity: 0.8 })
      const sky = new THREE.Mesh(skyGeo, skyMat)
      sky.position.set(x, 9.9, z)
      sky.rotation.x = Math.PI / 2
      scene.add(sky)
    }
    
    // === STOREFRONTS — 4 stores ===
    
    // Store 1: Clothing store (left-back, pink accent)
    const s1Geo = new THREE.BoxGeometry(5, 4, 0.3)
    const s1Mat = new THREE.MeshStandardMaterial({ color: 0x3a2a3a, roughness: 0.4 })
    const store1 = new THREE.Mesh(s1Geo, s1Mat)
    store1.position.set(-7, 3, -9.8)
    scene.add(store1)
    
    // Store 1 sign (glowing pink)
    const s1SignGeo = new THREE.BoxGeometry(4, 0.5, 0.1)
    const s1SignMat = new THREE.MeshStandardMaterial({ color: 0xff4488, emissive: 0xff4488, emissiveIntensity: 0.6 })
    const s1Sign = new THREE.Mesh(s1SignGeo, s1SignMat)
    s1Sign.position.set(-7, 5.5, -9.6)
    scene.add(s1Sign)
    
    // Store 2: Cinema (right-back, blue accent)
    const store2 = new THREE.Mesh(new THREE.BoxGeometry(5, 4, 0.3), new THREE.MeshStandardMaterial({ color: 0x1a2a3a, roughness: 0.4 }))
    store2.position.set(7, 3, -9.8)
    scene.add(store2)
    
    const s2Sign = new THREE.Mesh(new THREE.BoxGeometry(4, 0.5, 0.1), new THREE.MeshStandardMaterial({ color: 0x44aaff, emissive: 0x44aaff, emissiveIntensity: 0.6 }))
    s2Sign.position.set(7, 5.5, -9.6)
    scene.add(s2Sign)
    
    // Cinema poster
    const posterGeo = new THREE.PlaneGeometry(2, 3)
    const posterMat = new THREE.MeshStandardMaterial({ color: 0x223366, emissive: 0x1122aa, emissiveIntensity: 0.3, roughness: 0.3 })
    const poster = new THREE.Mesh(posterGeo, posterMat)
    poster.position.set(7, 2.5, -9.6)
    scene.add(poster)
    
    // Store 3: Food court (left-front, orange accent)
    const store3 = new THREE.Mesh(new THREE.BoxGeometry(5, 4, 0.3), new THREE.MeshStandardMaterial({ color: 0x3a3a1a, roughness: 0.4 }))
    store3.position.set(-7, 3, 9.8)
    store3.rotation.y = Math.PI
    scene.add(store3)
    
    const s3Sign = new THREE.Mesh(new THREE.BoxGeometry(4, 0.5, 0.1), new THREE.MeshStandardMaterial({ color: 0xffaa00, emissive: 0xffaa00, emissiveIntensity: 0.6 }))
    s3Sign.position.set(-7, 5.5, 9.6)
    scene.add(s3Sign)
    
    // Store 4: Electronics (right-front, green accent)
    const store4 = new THREE.Mesh(new THREE.BoxGeometry(5, 4, 0.3), new THREE.MeshStandardMaterial({ color: 0x1a3a1a, roughness: 0.4 }))
    store4.position.set(7, 3, 9.8)
    store4.rotation.y = Math.PI
    scene.add(store4)
    
    const s4Sign = new THREE.Mesh(new THREE.BoxGeometry(4, 0.5, 0.1), new THREE.MeshStandardMaterial({ color: 0x44ff88, emissive: 0x44ff88, emissiveIntensity: 0.6 }))
    s4Sign.position.set(7, 5.5, 9.6)
    scene.add(s4Sign)
    
    // === INTERACTIVE OBJECTS ===
    
    // 1. SHOPPING BAG
    const bagGroup = new THREE.Group()
    
    // Bag body
    const bagBodyGeo = new THREE.BoxGeometry(0.6, 0.8, 0.3)
    const bagMat = new THREE.MeshStandardMaterial({ color: 0xFF4488, roughness: 0.4 })
    const bagBody = new THREE.Mesh(bagBodyGeo, bagMat)
    bagBody.position.y = 0.4
    bagBody.castShadow = true
    bagGroup.add(bagBody)
    
    // Bag handles
    for (const xPos of [-0.2, 0.2]) {
      const handleGeo = new THREE.TorusGeometry(0.12, 0.015, 8, 16, Math.PI)
      const handleMat = new THREE.MeshStandardMaterial({ color: 0xFF4488, roughness: 0.3 })
      const handle = new THREE.Mesh(handleGeo, handleMat)
      handle.position.set(xPos, 0.85, 0)
      handle.rotation.x = Math.PI / 2
      bagGroup.add(handle)
    }
    
    bagGroup.position.set(-3, 0, 2)
    bagGroup.traverse(c => { if (c.isMesh) c.castShadow = true })
    bagBody.userData = {
      practicePhrase: "I bought a new shirt at the mall today",
      phoneticFocus: "B in 'bought', SH in 'shirt'",
      emoji: "🛍️",
      name: "Shopping Bag",
      color: 0xFF4488
    }
    bagGroup.children.forEach(c => { c.userData = bagBody.userData })
    scene.add(bagGroup)
    objects3D.push(...bagGroup.children.filter(c => c.isMesh))
    
    // 2. MOVIE TICKET
    const ticketGeo = new THREE.BoxGeometry(0.8, 0.04, 0.4)
    const ticketMat = new THREE.MeshStandardMaterial({
      color: 0xFFD700, roughness: 0.3,
      emissive: 0x665500, emissiveIntensity: 0.2
    })
    const ticket = new THREE.Mesh(ticketGeo, ticketMat)
    ticket.position.set(3, 1.2, -2)
    ticket.castShadow = true
    ticket.rotation.x = -0.1
    ticket.userData = {
      practicePhrase: "I want to watch a movie at the cinema",
      phoneticFocus: "W in 'want', CH in 'watch'",
      emoji: "🎟️",
      name: "Movie Ticket",
      color: 0xFFD700
    }
    scene.add(ticket)
    objects3D.push(ticket)
    
    // Ticket stub (perforation line)
    const stubGeo = new THREE.BoxGeometry(0.25, 0.05, 0.41)
    const stubMat = new THREE.MeshStandardMaterial({ color: 0xFFCC00, roughness: 0.3 })
    const stub = new THREE.Mesh(stubGeo, stubMat)
    stub.position.set(3.3, 1.2, -2)
    stub.rotation.x = -0.1
    scene.add(stub)
    
    // 3. FOOD COURT TRAY
    const trayGeo = new THREE.BoxGeometry(1.2, 0.05, 0.8)
    const trayMat = new THREE.MeshStandardMaterial({ color: 0xcccccc, roughness: 0.3, metalness: 0.5 })
    const tray = new THREE.Mesh(trayGeo, trayMat)
    tray.position.set(-5, 1.0, 4)
    tray.castShadow = true
    tray.userData = {
      practicePhrase: "I ordered a burger with french fries",
      phoneticFocus: "OR in 'ordered', R in 'fries'",
      emoji: "🍔",
      name: "Food Tray",
      color: 0xcccccc
    }
    scene.add(tray)
    objects3D.push(tray)
    
    // Burger on tray
    const burgerBunBotGeo = new THREE.CylinderGeometry(0.25, 0.25, 0.1, 12)
    const bunMat = new THREE.MeshStandardMaterial({ color: 0xD4A040, roughness: 0.5 })
    const bunBot = new THREE.Mesh(burgerBunBotGeo, bunMat)
    bunBot.position.set(-5.3, 1.13, 4)
    scene.add(bunBot)
    
    const pattyGeo = new THREE.CylinderGeometry(0.22, 0.22, 0.08, 12)
    const pattyMat = new THREE.MeshStandardMaterial({ color: 0x4a2a1a, roughness: 0.6 })
    const patty = new THREE.Mesh(pattyGeo, pattyMat)
    patty.position.set(-5.3, 1.22, 4)
    scene.add(patty)
    
    const burgerBunTopGeo = new THREE.SphereGeometry(0.25, 12, 8, 0, Math.PI * 2, 0, Math.PI / 2)
    const bunTop = new THREE.Mesh(burgerBunTopGeo, bunMat)
    bunTop.position.set(-5.3, 1.28, 4)
    scene.add(bunTop)
    
    // Fries container
    const friesGeo = new THREE.BoxGeometry(0.25, 0.4, 0.15)
    const friesMat = new THREE.MeshStandardMaterial({ color: 0xCC2222, roughness: 0.5 })
    const fries = new THREE.Mesh(friesGeo, friesMat)
    fries.position.set(-4.6, 1.25, 4)
    scene.add(fries)
    
    // French fry sticks
    for (let i = 0; i < 5; i++) {
      const fryGeo = new THREE.BoxGeometry(0.03, 0.35, 0.03)
      const fryMat = new THREE.MeshStandardMaterial({ color: 0xFFD700, roughness: 0.4 })
      const fry = new THREE.Mesh(fryGeo, fryMat)
      fry.position.set(-4.6 + (i - 2) * 0.04, 1.4, 4)
      scene.add(fry)
    }
    
    // 4. CASH REGISTER
    const registerGeo = new THREE.BoxGeometry(0.8, 0.6, 0.7)
    const registerMat = new THREE.MeshStandardMaterial({ color: 0x2a2a2a, roughness: 0.4, metalness: 0.6 })
    const register = new THREE.Mesh(registerGeo, registerMat)
    register.position.set(4, 1.3, 3)
    register.castShadow = true
    register.userData = {
      practicePhrase: "How much does this cost?",
      phoneticFocus: "H in 'how', M in 'much'",
      emoji: "💳",
      name: "Cash Register",
      color: 0x2a2a2a
    }
    scene.add(register)
    objects3D.push(register)
    
    // Register screen
    const regScreenGeo = new THREE.PlaneGeometry(0.4, 0.25)
    const regScreenMat = new THREE.MeshStandardMaterial({
      color: 0x00ff88, emissive: 0x00ff88, emissiveIntensity: 0.4
    })
    const regScreen = new THREE.Mesh(regScreenGeo, regScreenMat)
    regScreen.position.set(4, 1.6, 3.36)
    scene.add(regScreen)
    
    // Register keys
    const keysGeo = new THREE.BoxGeometry(0.5, 0.02, 0.3)
    const keysMat = new THREE.MeshStandardMaterial({ color: 0x444444, roughness: 0.3 })
    const keys = new THREE.Mesh(keysGeo, keysMat)
    keys.position.set(4, 1.12, 3.2)
    scene.add(keys)
    
    // 5. CLOTHING RACK
    const rackPoleGeo = new THREE.CylinderGeometry(0.04, 0.04, 1.8, 8)
    const rackMat = new THREE.MeshStandardMaterial({ color: 0x888888, roughness: 0.2, metalness: 0.9 })
    
    const rackPoleL = new THREE.Mesh(rackPoleGeo, rackMat)
    rackPoleL.position.set(-9.2, 1.2, -5)
    rackPoleL.castShadow = true
    scene.add(rackPoleL)
    
    const rackPoleR = new THREE.Mesh(rackPoleGeo, rackMat)
    rackPoleR.position.set(-7.8, 1.2, -5)
    rackPoleR.castShadow = true
    scene.add(rackPoleR)
    
    // Horizontal bar
    const rackBarGeo = new THREE.CylinderGeometry(0.03, 0.03, 1.5, 8)
    const rackBar = new THREE.Mesh(rackBarGeo, rackMat)
    rackBar.rotation.z = Math.PI / 2
    rackBar.position.set(-8.5, 2, -5)
    rackBar.castShadow = true
    rackBar.userData = {
      practicePhrase: "I need to try on these clothes",
      phoneticFocus: "N in 'need', TR in 'try'",
      emoji: "🧥",
      name: "Clothing Rack",
      color: 0x888888
    }
    scene.add(rackBar)
    objects3D.push(rackBar)
    
    // Clothes hanging
    const shirtColors = [0xff4488, 0x4488ff, 0x44aa44, 0xffaa00, 0xaa44ff]
    for (let i = 0; i < 5; i++) {
      const shirtGeo = new THREE.BoxGeometry(0.3, 0.5, 0.08)
      const shirtMat = new THREE.MeshStandardMaterial({ color: shirtColors[i], roughness: 0.5 })
      const shirt = new THREE.Mesh(shirtGeo, shirtMat)
      shirt.position.set(-8.8 + i * 0.3, 1.7, -5)
      shirt.castShadow = true
      scene.add(shirt)
      
      // Hanger
      const hangerGeo = new THREE.TorusGeometry(0.12, 0.01, 4, 8, Math.PI)
      const hangerMat = new THREE.MeshStandardMaterial({ color: 0x333333, roughness: 0.3 })
      const hanger = new THREE.Mesh(hangerGeo, hangerMat)
      hanger.position.set(-8.8 + i * 0.3, 1.95, -5)
      hanger.rotation.x = Math.PI / 2
      scene.add(hanger)
    }
    
    // === ESCALATOR (decorative) ===
    const escalatorGeo = new THREE.BoxGeometry(3, 0.2, 6)
    const escalatorMat = new THREE.MeshStandardMaterial({ color: 0x444455, roughness: 0.4, metalness: 0.5 })
    const escalator = new THREE.Mesh(escalatorGeo, escalatorMat)
    escalator.position.set(0, 0.1, -3)
    escalator.rotation.x = -0.15
    escalator.castShadow = true
    escalator.receiveShadow = true
    scene.add(escalator)
    
    // Escalator steps
    for (let i = 0; i < 10; i++) {
      const stepGeo = new THREE.BoxGeometry(2.8, 0.08, 0.4)
      const stepMat = new THREE.MeshStandardMaterial({ color: 0x666677, roughness: 0.3, metalness: 0.5 })
      const step = new THREE.Mesh(stepGeo, stepMat)
      step.position.set(0, 0.2 + i * 0.08, -5.5 + i * 0.55)
      scene.add(step)
    }
    
    // Escalator side rails
    for (const xPos of [-1.6, 1.6]) {
      const railGeo = new THREE.BoxGeometry(0.1, 0.4, 6)
      const railMat = new THREE.MeshStandardMaterial({ color: 0xaaaaaa, roughness: 0.1, metalness: 0.9 })
      const rail = new THREE.Mesh(railGeo, railMat)
      rail.position.set(xPos, 0.35, -3)
      rail.rotation.x = -0.15
      scene.add(rail)
    }
    
    // Escalator glow line
    const glowGeo = new THREE.BoxGeometry(2.5, 0.02, 5.5)
    const glowMat = new THREE.MeshStandardMaterial({ color: 0xff6b35, emissive: 0xff6b35, emissiveIntensity: 0.5 })
    const escGlow = new THREE.Mesh(glowGeo, glowMat)
    escGlow.position.set(0, 0.25, -3)
    escGlow.rotation.x = -0.15
    scene.add(escGlow)
    
    // === DIRECTORY BOARD ===
    const dirGeo = new THREE.BoxGeometry(3, 1.5, 0.1)
    const dirMat = new THREE.MeshStandardMaterial({ color: 0x1a1a2a, roughness: 0.3 })
    const dirBoard = new THREE.Mesh(dirGeo, dirMat)
    dirBoard.position.set(0, 6, -9.8)
    scene.add(dirBoard)
    
    // Directory text lines
    for (let i = 0; i < 4; i++) {
      const dlineGeo = new THREE.BoxGeometry(2, 0.03, 0.02)
      const dlineMat = new THREE.MeshBasicMaterial({ color: 0xffffff })
      const dline = new THREE.Mesh(dlineGeo, dlineMat)
      dline.position.set(0, 6.4 - i * 0.3, -9.72)
      scene.add(dline)
    }
    
    // === BENCH in mall corridor ===
    const benchGeo = new THREE.BoxGeometry(2, 0.1, 0.5)
    const benchMat = new THREE.MeshStandardMaterial({ color: 0x4a4a6a, roughness: 0.5 })
    const mallBench = new THREE.Mesh(benchGeo, benchMat)
    mallBench.position.set(0, 1, 5)
    mallBench.castShadow = true
    scene.add(mallBench)
    
    for (const [lx, lz] of [[-0.9, -0.15], [0.9, -0.15], [-0.9, 0.15], [0.9, 0.15]]) {
      const legGeo = new THREE.BoxGeometry(0.06, 1, 0.06)
      const leg = new THREE.Mesh(legGeo, new THREE.MeshStandardMaterial({ color: 0x333344, roughness: 0.3, metalness: 0.7 }))
      leg.position.set(lx, 0.5, 5 + lz)
      scene.add(leg)
    }
    
    // === ANIMATION LOOP ===
    let time = 0
    const animate = () => {
      animationId = requestAnimationFrame(animate)
      time += 0.016
      
      // Escalator steps move
      scene.children.forEach((c, idx) => {
        if (c.geometry && c.geometry.type === 'BoxGeometry' && c.geometry.parameters) {
          if (c.geometry.parameters.width === 2.8 && c.geometry.parameters.depth === 0.4) {
            c.position.z += 0.02
            if (c.position.z > 0.5) c.position.z = -5.5
          }
        }
      })
      
      // Store signs pulse
      s1SignMat.emissiveIntensity = 0.5 + Math.sin(time * 2) * 0.15
      s2SignMat.emissiveIntensity = 0.5 + Math.sin(time * 2 + 1) * 0.15
      s3SignMat.emissiveIntensity = 0.5 + Math.sin(time * 2 + 2) * 0.15
      s4SignMat.emissiveIntensity = 0.5 + Math.sin(time * 2 + 3) * 0.15
      
      // Register screen flicker
      regScreenMat.emissiveIntensity = 0.35 + Math.sin(time * 5) * 0.1
      
      // Shopping bag gentle sway
      bagGroup.rotation.z = Math.sin(time * 1.5) * 0.03
      
      // Center ring glow
      centerMat.emissiveIntensity = 0.25 + Math.sin(time * 1) * 0.1
      
      // Camera drift
      if (cameraShake > 0) {
        camera.position.x = (Math.random() - 0.5) * cameraShake * 0.1
        camera.position.y = 5 + (Math.random() - 0.5) * cameraShake * 0.1
      } else {
        camera.position.x = Math.sin(time * 0.06) * 0.8
        camera.position.y = 5 + Math.sin(time * 0.1) * 0.3
      }
      camera.position.z = 14
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
        background: 'linear-gradient(180deg, #1a237e 0%, #0d47a1 100%)',
        color: 'white', fontFamily: 'sans-serif'
      }}>
        <div style={{ fontSize: '4rem', marginBottom: '20px' }}>🛍️</div>
        <h2 style={{ fontSize: '1.5rem', marginBottom: '10px' }}>Forum — Locked</h2>
        <p style={{ fontSize: '1rem', opacity: 0.7 }}>Reach a 14 day streak to unlock the Forum</p>
        <p style={{ fontSize: '2rem', marginTop: '20px' }}>Current streak: {streak} 🔥</p>
        <p style={{ fontSize: '0.9rem', opacity: 0.5, marginTop: '15px' }}>
          {Math.max(0, 14 - streak)} more days to unlock
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
        <div style={{ fontSize: '1.2rem', fontWeight: 'bold' }}>🛍️ Forum</div>
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
