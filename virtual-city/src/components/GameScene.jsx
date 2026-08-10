/**
 * GameScene.jsx — Virtual City Scene
 * Home objects (accessible from start) + City objects (locked behind fog wall)
 * Clicking an object dispatches event to SpeechPanel
 */

import React, { useRef } from 'react';
import { useFrame } from '@react-three/fiber';
import * as THREE from 'three';
import useGameStore from '../store/useGameStore.js';
import FogBurstParticles from './FogBurstParticles.jsx';

// === CLICKABLE OBJECT ===
function ClickableObject({ position, userData, color, geometry }) {
  const { addScore, teleportTo } = useGameStore();

  const handleClick = (e) => {
    e.stopPropagation();

    // Dispatch event for SpeechPanel to pick up
    window.dispatchEvent(new CustomEvent('object-clicked', {
      detail: { phrase: userData.phrase }
    }));

    // Check access and teleport
    const success = teleportTo(e.object.position, userData);
    if (success && userData.lessonComplete) {
      // Score is added when student passes pronunciation check
      // not here — SpeechPanel handles scoring
    }
  };

  return (
    <mesh position={position} onClick={handleClick} userData={userData}>
      {geometry || <boxGeometry args={[1, 1, 1]} />}
      <meshStandardMaterial color={color} />
    </mesh>
  );
}

// === GAME SCENE ===
function GameScene() {
  const { cityFogVisible } = useGameStore();
  const fogWallRef = useRef();

  // Animate fog wall opacity
  useFrame((state, delta) => {
    if (fogWallRef.current) {
      const targetOpacity = cityFogVisible ? 0.85 : 0;
      fogWallRef.current.material.opacity = THREE.MathUtils.lerp(
        fogWallRef.current.material.opacity,
        targetOpacity,
        delta * 2
      );
      fogWallRef.current.visible = fogWallRef.current.material.opacity > 0.01;
    }
  });

  return (
    <>
      {/* Fog wall blocking City at z=10 */}
      <mesh ref={fogWallRef} position={[0, 5, 10]} scale={[50, 20, 1]}>
        <planeGeometry />
        <meshBasicMaterial
          color="#1a1a2e"
          transparent
          opacity={0.85}
          side={THREE.DoubleSide}
        />
      </mesh>

      {/* Particle explosion on unlock */}
      <FogBurstParticles />

      {/* Floor */}
      <mesh rotation={[-Math.PI / 2, 0, 0]} position={[0, 0, 0]}>
        <planeGeometry args={[40, 40]} />
        <meshStandardMaterial color={0x2b2d42} />
      </mesh>

      {/* === HOME OBJECTS (A1 — accessible from start) === */}
      <ClickableObject
        position={[-1.5, 0.6, 0]}
        userData={{
          phrase: 'I sit on the chair',
          location: 'Home',
          minScore: 0,
          lessonComplete: true
        }}
        color="#415a77"
      />
      <ClickableObject
        position={[1.5, 0.5, 0]}
        userData={{
          phrase: 'I eat at the table',
          location: 'Home',
          minScore: 0,
          lessonComplete: true
        }}
        color="#778da9"
      />
      <ClickableObject
        position={[-1.5, 0.5, 3]}
        userData={{
          phrase: 'I read a book',
          location: 'Home',
          minScore: 10,
          lessonComplete: true
        }}
        color="#5a7a5a"
      />
      <ClickableObject
        position={[1.5, 0.7, 3]}
        userData={{
          phrase: 'I open the door',
          location: 'Home',
          minScore: 20,
          lessonComplete: true
        }}
        color="#8a6d3b"
      />

      {/* === CITY OBJECTS (behind fog wall — locked until 50 points) === */}
      <ClickableObject
        position={[0, 1.5, 15]}
        userData={{
          phrase: 'Where is the restaurant?',
          location: 'City',
          minScore: 50,
          lessonComplete: true
        }}
        color="#e63946"
      />
      <ClickableObject
        position={[5, 1, 20]}
        userData={{
          phrase: 'I need to take the bus',
          location: 'City',
          minScore: 75,
          lessonComplete: true
        }}
        color="#c1121f"
      />
      <ClickableObject
        position={[-5, 0.8, 18]}
        userData={{
          phrase: 'Can you help me please?',
          location: 'City',
          minScore: 100,
          lessonComplete: true
        }}
        color="#780000"
      />
    </>
  );
}

export default GameScene;
