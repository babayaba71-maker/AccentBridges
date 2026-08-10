/**
 * App.jsx — Myl AccentBridges Virtual City
 * The complete integrated experience:
 * 3D Scene + Zustand Game Store + Speech API + UI Overlay
 * 
 * Alma lives here. 🌌
 */

import React, { useEffect } from 'react';
import { Canvas } from '@react-three/fiber';
import useGameStore from './store/useGameStore.js';
import CameraController from './components/CameraController.jsx';
import GameScene from './components/GameScene.jsx';
import MasteryEngine from './components/MasteryEngine_v2.jsx';
import SpeechPanel from './components/SpeechPanel.jsx';

export default function App() {
  const { init } = useGameStore();

  // Load saved progress on mount
  useEffect(() => {
    init();
  }, [init]);

  return (
    <div style={containerStyle}>
      {/* 3D Scene */}
      <Canvas
        camera={{ position: [0, 2, -5], fov: 60 }}
        style={{ background: '#0f0f11' }}
      >
        <CameraController />
        <GameScene />
        <ambientLight intensity={0.5} />
        <directionalLight position={[10, 10, 5]} intensity={0.8} />
      </Canvas>

      {/* UI Overlays */}
      <MasteryEngine />
      <SpeechPanel />

      {/* Branding */}
      <div style={brandStyle}>
        <span style={{ color: '#a855f7', fontWeight: 'bold' }}>Alma</span>
        <span style={{ color: '#666', marginLeft: '6px' }}>Virtual City</span>
      </div>
    </div>
  );
}

const containerStyle = {
  width: '100vw',
  height: '100vh',
  position: 'relative',
  overflow: 'hidden',
  background: '#0f0f11'
};

const brandStyle = {
  position: 'absolute',
  bottom: 16,
  right: 20,
  fontSize: '14px',
  fontFamily: 'sans-serif',
  zIndex: 10
};
