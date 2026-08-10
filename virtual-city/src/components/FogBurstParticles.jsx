/**
 * FogBurstParticles.jsx — 500 Particle Explosion on City Unlock
 * Source: Meta AI conversation (April 13, 2026)
 * 
 * When player hits 50 points and City unlocks:
 * - 500 particles explode from fog wall position (z=10)
 * - Purple/blue holographic colors
 * - Gravity pulls them down
 * - Additive blending for glow effect
 * 
 * R3F version (React Three Fiber)
 */

import { useRef, useMemo, useEffect } from 'react';
import { useFrame } from '@react-three/fiber';
import * as THREE from 'three';
import useGameStore from '../store/useGameStore.js';

function FogBurstParticles() {
  const { triggerFogBurst } = useGameStore();
  const pointsRef = useRef();
  const velocitiesRef = useRef([]);
  const isActiveRef = useRef(false);

  // Create 500 particles at fog wall (z=10)
  const { positions, colors } = useMemo(() => {
    const count = 500;
    const positions = new Float32Array(count * 3);
    const colors = new Float32Array(count * 3);
    velocitiesRef.current = [];

    for (let i = 0; i < count; i++) {
      // Spread across fog wall: 50w x 20h at z=10
      positions[i * 3] = (Math.random() - 0.5) * 50;       // x
      positions[i * 3 + 1] = Math.random() * 20;            // y: 0-20
      positions[i * 3 + 2] = 10 + (Math.random() - 0.5);   // z around 10

      // Purple/blue holographic colors
      const color = new THREE.Color().setHSL(0.7 + Math.random() * 0.1, 0.8, 0.5);
      colors[i * 3] = color.r;
      colors[i * 3 + 1] = color.g;
      colors[i * 3 + 2] = color.b;

      // Random explosion velocity (biased upward)
      velocitiesRef.current.push({
        x: (Math.random() - 0.5) * 15,
        y: Math.random() * 10 + 2,
        z: (Math.random() - 0.5) * 15
      });
    }
    return { positions, colors };
  }, []);

  // Trigger burst
  useEffect(() => {
    if (triggerFogBurst && pointsRef.current) {
      isActiveRef.current = true;
      const posArray = pointsRef.current.geometry.attributes.position.array;
      for (let i = 0; i < positions.length / 3; i++) {
        posArray[i * 3] = (Math.random() - 0.5) * 50;
        posArray[i * 3 + 1] = Math.random() * 20;
        posArray[i * 3 + 2] = 10 + (Math.random() - 0.5);
      }
      pointsRef.current.geometry.attributes.position.needsUpdate = true;
    }
  }, [triggerFogBurst, positions]);

  // Animate particles
  useFrame((state, delta) => {
    if (!pointsRef.current || !isActiveRef.current) return;

    const positions = pointsRef.current.geometry.attributes.position.array;
    let allDead = true;

    for (let i = 0; i < positions.length / 3; i++) {
      const idx = i * 3;
      const vel = velocitiesRef.current[i];

      // Apply velocity
      positions[idx] += vel.x * delta;
      positions[idx + 1] += vel.y * delta;
      positions[idx + 2] += vel.z * delta;

      // Gravity
      vel.y -= 9.8 * delta;

      if (positions[idx + 1] > -5) allDead = false;
    }

    pointsRef.current.geometry.attributes.position.needsUpdate = true;
    if (allDead) isActiveRef.current = false;
  });

  return (
    <points ref={pointsRef}>
      <bufferGeometry>
        <bufferAttribute
          attach="attributes-position"
          count={positions.length / 3}
          array={positions}
          itemSize={3}
        />
        <bufferAttribute
          attach="attributes-color"
          count={colors.length / 3}
          array={colors}
          itemSize={3}
        />
      </bufferGeometry>
      <pointsMaterial
        size={0.3}
        vertexColors
        transparent
        opacity={0.8}
        blending={THREE.AdditiveBlending}
        depthWrite={false}
      />
    </points>
  );
}

export default FogBurstParticles;
