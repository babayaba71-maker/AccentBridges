/**
 * CameraController.jsx — Smooth Camera Teleport + Screen Shake
 * Source: Meta AI conversation (April 13, 2026)
 * 
 * Features:
 * - Smooth Lerp camera movement (teleport feels like walking)
 * - Screen shake on City unlock (0.6s, decaying intensity)
 * - Framerate-independent with delta
 * - Works with React Three Fiber
 */

import { useThree, useFrame } from '@react-three/fiber';
import { useRef } from 'react';
import useGameStore from '../store/useGameStore.js';
import * as THREE from 'three';

function CameraController() {
  const { camera } = useThree();
  const { updateCamera, triggerShake } = useGameStore();

  const shakeTime = useRef(0);
  const originalPos = useRef(new THREE.Vector3());
  const isShaking = useRef(false);

  useFrame((state, delta) => {
    // Normal camera movement (Lerp to target)
    updateCamera(camera, delta);

    // Screen shake on unlock
    if (triggerShake && !isShaking.current) {
      isShaking.current = true;
      shakeTime.current = 0.6; // shake for 0.6 seconds
      originalPos.current.copy(camera.position);
    }

    if (isShaking.current && shakeTime.current > 0) {
      shakeTime.current -= delta;
      const intensity = shakeTime.current * 0.5; // decays over time

      // Random offset that gets smaller as shakeTime decreases
      camera.position.x = originalPos.current.x + (Math.random() - 0.5) * intensity;
      camera.position.y = originalPos.current.y + (Math.random() - 0.5) * intensity;
      camera.position.z = originalPos.current.z + (Math.random() - 0.5) * intensity * 0.5;

      if (shakeTime.current <= 0) {
        isShaking.current = false;
        camera.position.copy(originalPos.current);
      }
    } else if (!isShaking.current) {
      // Keep originalPos updated when not shaking
      originalPos.current.copy(camera.position);
    }
  });

  return null;
}

export default CameraController;
