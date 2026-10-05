'use client';

import React, { useState, useRef } from 'react';
import { Volume2, VolumeX, Activity } from 'lucide-react';

export default function TelemetrySimulator() {
  const [angle, setAngle] = useState(90);
  const [simulatedReps, setSimulatedReps] = useState(5);
  const [soundEnabled, setSoundEnabled] = useState(true);
  const hasHitDepthRef = useRef(true);
  const audioCtxRef = useRef(null);

  // Initialize or resume AudioContext
  const getAudioContext = () => {
    if (!audioCtxRef.current) {
      const AudioContextClass = window.AudioContext || window.webkitAudioContext;
      if (AudioContextClass) {
        audioCtxRef.current = new AudioContextClass();
      }
    }
    if (audioCtxRef.current && audioCtxRef.current.state === 'suspended') {
      audioCtxRef.current.resume();
    }
    return audioCtxRef.current;
  };

  const playDepthChime = (frequency = 880, duration = 0.12) => {
    if (!soundEnabled) return;
    try {
      const ctx = getAudioContext();
      if (!ctx) return;

      const osc = ctx.createOscillator();
      const gain = ctx.createGain();

      osc.type = 'sine';
      osc.frequency.setValueAtTime(frequency, ctx.currentTime);
      osc.frequency.exponentialRampToValueAtTime(frequency * 1.5, ctx.currentTime + duration);

      gain.gain.setValueAtTime(0.12, ctx.currentTime);
      gain.gain.exponentialRampToValueAtTime(0.001, ctx.currentTime + duration);

      osc.connect(gain);
      gain.connect(ctx.destination);

      osc.start();
      osc.stop(ctx.currentTime + duration);
    } catch (e) {
      // Audio fallback
    }
  };

  const handleSliderChange = (e) => {
    const val = parseInt(e.target.value, 10);
    setAngle(val);

    if (val <= 95) {
      // Valid Depth Hit (Parallel or deeper)
      if (!hasHitDepthRef.current) {
        hasHitDepthRef.current = true;
        setSimulatedReps((prev) => prev + 1);
        playDepthChime(880, 0.12);
      }
    } else {
      hasHitDepthRef.current = false;
    }
  };

  // Determine status display and styling
  let statusText = 'OPTIMAL DEPTH HIT (REP COUNTED) ✓';
  let statusColor = 'var(--accent-lime)';
  let statusBg = 'rgba(16, 185, 129, 0.15)';
  let statusBorder = 'var(--accent-lime)';

  if (angle > 110) {
    statusText = 'INCOMPLETE DEPTH (NO REP)';
    statusColor = '#EF4444';
    statusBg = 'rgba(239, 68, 68, 0.15)';
    statusBorder = '#EF4444';
  } else if (angle > 95) {
    statusText = 'APPROACHING PARALLEL (LOWER...)';
    statusColor = '#F59E0B';
    statusBg = 'rgba(245, 158, 11, 0.15)';
    statusBorder = '#F59E0B';
  }

  return (
    <section className="container telemetry-sim-section" id="simulator">
      <div className="telemetry-sim-card">
        <div className="sim-grid">
          
          {/* Gauge Visualization */}
          <div className="sim-gauge-wrap">
            <div style={{
              fontSize: '0.85rem',
              textTransform: 'uppercase',
              letterSpacing: '0.08em',
              color: 'var(--text-secondary)',
              marginBottom: '0.5rem',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              gap: '0.4rem'
            }}>
              <Activity size={16} color="var(--primary)" />
              <span>Interactive AI Angle Gauge</span>
            </div>
            
            <div className="sim-angle-display" style={{ color: statusColor }}>
              {angle}°
            </div>

            <div 
              className="sim-badge-status" 
              style={{
                color: statusColor,
                backgroundColor: statusBg,
                borderColor: statusBorder
              }}
            >
              {statusText}
            </div>
          </div>

          {/* Interactive Slider Controller */}
          <div className="sim-slider-container">
            <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start', flexWrap: 'wrap', gap: '0.5rem' }}>
              <div>
                <h2 style={{ fontSize: '1.5rem', fontWeight: 800, marginBottom: '0.25rem', fontFamily: 'var(--font-display)' }}>
                  Test The Real-Time AI Gauge
                </h2>
                <p style={{ fontSize: '0.92rem', color: 'var(--text-secondary)', marginBottom: '1.25rem' }}>
                  Drag the slider to simulate squat depth. Watch how TrueRep&apos;s AI detects descent, parallel depth (≤ 95°), and locked ascent in real-time.
                </p>
              </div>

              {/* Sound Toggle */}
              <button
                onClick={() => setSoundEnabled(!soundEnabled)}
                className="btn btn-secondary btn-sm"
                title={soundEnabled ? "Disable sound chime" : "Enable sound chime"}
                style={{ padding: '0.4rem 0.75rem' }}
              >
                {soundEnabled ? <Volume2 size={16} color="var(--accent-lime)" /> : <VolumeX size={16} color="var(--text-sub)" />}
                <span style={{ fontSize: '0.8rem' }}>{soundEnabled ? 'Chime On' : 'Muted'}</span>
              </button>
            </div>

            <label htmlFor="angle-slider" style={{ display: 'flex', justifyContent: 'space-between', fontSize: '0.85rem', fontWeight: 700, color: 'var(--text-secondary)' }}>
              <span>Standing (150°)</span>
              <span>Parallel (90°)</span>
              <span>Deep Squat (70°)</span>
            </label>

            <input 
              type="range" 
              min="70" 
              max="150" 
              value={angle} 
              onChange={handleSliderChange}
              className="sim-slider" 
              id="angle-slider"
              aria-label="Squat knee angle simulator slider"
            />

            <div style={{ display: 'flex', justifyContent: 'space-between', marginTop: '0.75rem', fontSize: '0.88rem', color: 'var(--text-sub)', flexWrap: 'wrap', gap: '0.5rem' }}>
              <span>Real-time on-device AI evaluation</span>
              <span style={{ fontWeight: 800, color: 'var(--accent-lime)' }}>
                Simulated Reps: {simulatedReps}
              </span>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}
