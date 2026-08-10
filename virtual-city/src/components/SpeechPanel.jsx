/**
 * SpeechPanel.jsx — Web Speech API Integration
 * Text-to-Speech (Alma speaks) + Speech Recognition (student practices)
 * 
 * When student clicks a 3D object:
 * 1. Alma speaks the target phrase (American English TTS)
 * 2. Student clicks "Practice Pronunciation"
 * 3. Mic opens, captures speech
 * 4. Evaluates accuracy + confidence
 * 5. If passed → +10 mastery points (triggers unlock sequence at 50)
 */

import React, { useState, useEffect } from 'react';
import useGameStore from '../store/useGameStore.js';

export default function SpeechPanel() {
  const { score, addScore } = useGameStore();
  const [targetPhrase, setTargetPhrase] = useState('');
  const [feedback, setFeedback] = useState('Click an object in the room');
  const [isListening, setIsListening] = useState(false);
  const [hasPassed, setHasPassed] = useState(false);

  // Listen for object clicks from the 3D scene
  useEffect(() => {
    const handleClick = (e) => {
      if (e.detail?.phrase) {
        setTargetPhrase(e.detail.phrase);
        setHasPassed(false);
        setFeedback(`Target: "${e.detail.phrase}" — Listening to Alma...`);
        speakAmerican(e.detail.phrase);
      }
    };
    window.addEventListener('object-clicked', handleClick);
    return () => window.removeEventListener('object-clicked', handleClick);
  }, []);

  // Text-to-Speech: Alma speaks in American English
  const speakAmerican = (text) => {
    const utterance = new SpeechSynthesisUtterance(text);
    utterance.lang = 'en-US';
    
    const voices = window.speechSynthesis?.getVoices() || [];
    const americanVoice = voices.find(v => v.lang === 'en-US' && v.name.includes('Google'));
    if (americanVoice) utterance.voice = americanVoice;
    
    utterance.rate = 0.85; // Measured pace for learners
    window.speechSynthesis?.speak(utterance);
  };

  // Speech Recognition: Student practices pronunciation
  const evaluatePronunciation = () => {
    const SpeechRecognition = window.SpeechRecognition || window.webkitSpeechRecognition;
    if (!SpeechRecognition) {
      setFeedback('Speech Recognition needs Chrome or Edge.');
      return;
    }

    const recognition = new SpeechRecognition();
    recognition.lang = 'en-US';
    recognition.interimResults = false;

    recognition.onstart = () => setIsListening(true);

    recognition.onresult = (event) => {
      setIsListening(false);
      const userSpoken = event.results[0][0].transcript.toLowerCase();
      const confidence = event.results[0][0].confidence;

      if (userSpoken === targetPhrase.toLowerCase() && confidence > 0.8) {
        setFeedback(`✅ Great job! High accuracy: "${userSpoken}"`);
        if (!hasPassed) {
          addScore(10); // Triggers unlock at 50 points
          setHasPassed(true);
        }
      } else {
        setFeedback(`You said: "${userSpoken}". Try focusing on clear American vowels.`);
      }
    };

    recognition.onerror = () => {
      setIsListening(false);
      setFeedback('Could not hear clearly. Try again.');
    };

    recognition.start();
  };

  return (
    <div style={panelStyle}>
      <p style={statusStyle}>
        {isListening ? '🎤 Listening...' : feedback}
      </p>

      {targetPhrase && (
        <div style={phraseStyle}>
          <span style={{ color: '#a855f7', fontWeight: 'bold' }}>
            Alma says:
          </span>{' '}
          <span style={{ color: '#e0e1dd' }}>
            "{targetPhrase}"
          </span>
        </div>
      )}

      {targetPhrase && (
        <button
          onClick={evaluatePronunciation}
          disabled={isListening}
          style={isListening ? buttonDisabledStyle : buttonStyle}
        >
          {isListening ? '🎤 Listening...' : 'Practice Pronunciation'}
        </button>
      )}

      <div style={scoreStyle}>
        <span style={{ color: '#666' }}>Mastery: </span>
        <span style={{ color: '#22c55e', fontWeight: 'bold' }}>{score}</span>
        <span style={{ color: '#666' }}> / 50 to unlock City</span>
      </div>
    </div>
  );
}

const panelStyle = {
  position: 'absolute',
  bottom: 20,
  left: '50%',
  transform: 'translateX(-50%)',
  width: '90%',
  maxWidth: '500px',
  background: 'rgba(15, 15, 17, 0.9)',
  borderRadius: 16,
  padding: '16px 20px',
  textAlign: 'center',
  zIndex: 10,
  backdropFilter: 'blur(10px)',
  border: '1px solid rgba(168, 85, 247, 0.2)'
};

const statusStyle = {
  fontSize: '1rem',
  minHeight: '1.5em',
  color: '#e0e1dd',
  marginBottom: 8
};

const phraseStyle = {
  fontSize: '1.1rem',
  marginBottom: 12,
  padding: '8px 12px',
  background: 'rgba(168, 85, 247, 0.1)',
  borderRadius: 8
};

const buttonStyle = {
  padding: '12px 24px',
  fontSize: '1rem',
  fontWeight: 'bold',
  backgroundColor: '#e63946',
  color: '#fff',
  border: 'none',
  borderRadius: 30,
  cursor: 'pointer',
  transition: 'transform 0.2s'
};

const buttonDisabledStyle = {
  ...buttonStyle,
  backgroundColor: '#555',
  cursor: 'not-allowed'
};

const scoreStyle = {
  marginTop: 10,
  fontSize: '0.9rem'
};
