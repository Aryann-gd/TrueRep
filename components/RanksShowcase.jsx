'use client';

import React, { useState } from 'react';
import { Award, Zap } from 'lucide-react';

const RANKS = [
  { name: 'Wood', rp: '0–499 RP', color: 'var(--rank-wood)', glow: 'rgba(216, 138, 61, 0.4)', img: '/assets/ranks/wood.png', desc: 'Starting rank. Master foundational movement patterns and body alignment.' },
  { name: 'Bronze', rp: '500–999 RP', color: 'var(--rank-bronze)', glow: 'rgba(211, 131, 75, 0.4)', img: '/assets/ranks/bronze.png', desc: 'Consistent cadence achieved. Form breakdown reduced across main lifts.' },
  { name: 'Silver', rp: '1,000–2,499 RP', color: 'var(--rank-silver)', glow: 'rgba(194, 207, 210, 0.4)', img: '/assets/ranks/silver.png', desc: 'Full depth verified by AI. Strict lockout on every press and squat rep.' },
  { name: 'Gold', rp: '2,500–4,999 RP', color: 'var(--rank-gold)', glow: 'rgba(211, 163, 19, 0.4)', img: '/assets/ranks/gold.png', desc: 'Elite tempo stability. High rep accuracy with zero shallow depth faults.' },
  { name: 'Platinum', rp: '5,000–8,499 RP', color: 'var(--rank-platinum)', glow: 'rgba(94, 222, 214, 0.4)', img: '/assets/ranks/platinum.png', desc: 'Pro-grade form stability. Sustained intensity without knee deviation.' },
  { name: 'Diamond', rp: '8,500–12,999 RP', color: 'var(--rank-diamond)', glow: 'rgba(106, 121, 199, 0.4)', img: '/assets/ranks/diamond.png', desc: 'Advanced athlete territory. Flawless control and explosive drive.' },
  { name: 'Champion', rp: '13,000–17,999 RP', color: 'var(--rank-champion)', glow: 'rgba(180, 101, 208, 0.4)', img: '/assets/ranks/champion.png', desc: 'Top tier consistency. Unrelenting rep standards tested against real-time AI.' },
  { name: 'Titan', rp: '18,000–24,999 RP', color: 'var(--rank-titan)', glow: 'rgba(185, 35, 35, 0.4)', img: '/assets/ranks/titan.png', desc: 'Monstrous strength-to-weight output with calibrated real-time AI accuracy.' },
  { name: 'Olympian', rp: '25,000+ RP', color: 'var(--rank-olympian)', glow: 'rgba(11, 196, 255, 0.5)', img: '/assets/ranks/olympian.png', desc: 'The peak of gym performance. Flawless execution analyzed by on-device AI.' },
];

export default function RanksShowcase() {
  const [selectedRank, setSelectedRank] = useState(RANKS[8]); // Default to Olympian

  return (
    <section className="ranks-section" id="ranks">
      <div className="container">
        
        <div className="section-head">
          <div style={{ display: 'inline-flex', alignItems: 'center', gap: '0.4rem', color: 'var(--primary)', marginBottom: '0.5rem', fontWeight: 700, fontSize: '0.88rem' }}>
            <Award size={18} />
            <span>AI STRENGTH PROGRESSION</span>
          </div>
          <h2 className="section-title">Nine ranks. Every rep counts.</h2>
          <p className="section-subtitle">
            Every set you complete is scored by AI that analyzes your joint angles, cadence, and form. Climb the ladder from Wood all the way to Olympian.
          </p>
        </div>

        {/* 9 Ranks Interactive Grid */}
        <div className="ranks-grid">
          {RANKS.map((rank) => {
            const isSelected = selectedRank.name === rank.name;
            return (
              <div 
                key={rank.name}
                className="rank-card"
                onClick={() => setSelectedRank(rank)}
                style={{
                  '--tier-color': rank.color,
                  '--tier-glow': rank.glow,
                  borderColor: isSelected ? rank.color : undefined,
                  boxShadow: isSelected ? `0 10px 30px ${rank.glow}` : undefined,
                  transform: isSelected ? 'translateY(-6px)' : undefined,
                }}
                data-rank={rank.name}
              >
                <img src={rank.img} alt={`${rank.name} Rank Badge`} className="rank-badge-img" />
                <span className="rank-name">{rank.name}</span>
                <span className="rank-rp">{rank.rp}</span>
              </div>
            );
          })}
        </div>

        {/* Dynamic Detail Card for Selected Rank */}
        <div style={{
          marginTop: '2.5rem',
          background: 'var(--bg-surface-elevated)',
          border: `1px solid ${selectedRank.color}`,
          borderRadius: 'var(--radius-lg)',
          padding: '1.75rem 2rem',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'space-between',
          gap: '1.5rem',
          flexWrap: 'wrap',
          boxShadow: `0 8px 30px ${selectedRank.glow}`,
          transition: 'all var(--transition-smooth)'
        }}>
          <div style={{ display: 'flex', alignItems: 'center', gap: '1.25rem' }}>
            <img 
              src={selectedRank.img} 
              alt={selectedRank.name} 
              style={{ width: '60px', height: '60px', objectFit: 'contain' }}
            />
            <div>
              <div style={{ display: 'flex', alignItems: 'center', gap: '0.6rem', marginBottom: '0.2rem' }}>
                <h3 style={{ fontSize: '1.35rem', fontWeight: 900, color: selectedRank.color }}>
                  {selectedRank.name} Rank
                </h3>
                <span style={{
                  fontFamily: 'var(--font-mono)',
                  fontSize: '0.78rem',
                  fontWeight: 700,
                  background: 'rgba(255,255,255,0.08)',
                  padding: '2px 8px',
                  borderRadius: 'var(--radius-full)',
                  color: 'var(--text-main)'
                }}>
                  {selectedRank.rp}
                </span>
              </div>
              <p style={{ fontSize: '0.9rem', color: 'var(--text-secondary)', maxWidth: '580px' }}>
                {selectedRank.desc}
              </p>
            </div>
          </div>

          <div style={{
            display: 'flex',
            alignItems: 'center',
            gap: '0.5rem',
            color: 'var(--text-main)',
            fontSize: '0.85rem',
            fontWeight: 700,
            background: 'rgba(255,255,255,0.04)',
            padding: '0.6rem 1rem',
            borderRadius: 'var(--radius-md)',
            border: '1px solid var(--border-subtle)'
          }}>
            <Zap size={16} color={selectedRank.color} />
            <span>Tap any badge above to inspect tier</span>
          </div>
        </div>

      </div>
    </section>
  );
}
