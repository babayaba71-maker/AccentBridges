/**
 * MasteryEngine.jsx — UI Dashboard with Toasts
 * Source: Meta AI conversation (April 13, 2026)
 * 
 * Shows:
 * - Mastery Points counter
 * - Unlocked location badges
 * - Unlock success toast (green)
 * - Access denied toast (red)
 * - Reads from Zustand store (no prop drilling)
 */

import React, { useEffect } from 'react';
import useGameStore from '../store/useGameStore.js';

const MasteryEngine = () => {
  const { score, unlockedLocations, unlockMessage, deniedMessage, init } = useGameStore();

  // Load saved progress once on mount
  useEffect(() => {
    init();
  }, [init]);

  return (
    <div style={styles.dashboard}>
      <h3>Mastery Points: {score}</h3>
      <div style={styles.badgeContainer}>
        {unlockedLocations.map(loc => (
          <span key={loc} style={styles.badge}>📍 {loc} Unlocked</span>
        ))}
      </div>
      {unlockMessage && (
        <div style={styles.toastSuccess}>
          🎉 Congratulations! {unlockMessage} is now open!
        </div>
      )}
      {deniedMessage && (
        <div style={styles.toastDenied}>
          🔒 {deniedMessage}
        </div>
      )}
    </div>
  );
};

const styles = {
  dashboard: {
    position: 'absolute',
    top: 20,
    left: 20,
    zIndex: 10,
    color: 'white',
    fontFamily: 'sans-serif'
  },
  badgeContainer: {
    display: 'flex',
    gap: '8px',
    marginTop: '8px'
  },
  badge: {
    background: '#2d5',
    padding: '4px 8px',
    borderRadius: '12px'
  },
  toastSuccess: {
    marginTop: '12px',
    background: '#22c55e',
    padding: '12px',
    borderRadius: '8px'
  },
  toastDenied: {
    marginTop: '12px',
    background: '#ef4444',
    padding: '12px',
    borderRadius: '8px'
  }
};

export default MasteryEngine;
