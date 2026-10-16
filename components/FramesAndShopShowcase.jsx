'use client';

import React, { useState } from 'react';
import { Sparkles, Coins, Check, ArrowRight, Shield, Award, Flame, Zap, Crown, Compass, Eye } from 'lucide-react';

const FRAMES = [
  {
    id: 'rank_dynamic',
    name: 'Dynamic Rank Halo',
    tag: 'Free with Rank',
    tagColor: '#59B9F9',
    cost: 'Unlocked by Rank',
    badgeText: 'EQUIPPED BY DEFAULT',
    description: 'Automatically synchronizes with your active gym tier — from Wood Amber to Olympian Electric Cyan.',
    gradient: 'linear-gradient(135deg, #0BC4FF 0%, #10B981 50%, #59B9F9 100%)',
    glowColor: 'rgba(11, 196, 255, 0.45)',
    avatarRing: 'border-rank-dynamic',
    accentIcon: Award,
  },
  {
    id: 'flame_titan',
    name: 'Flame Titan',
    tag: 'In-App Shop',
    tagColor: '#EF4444',
    cost: '350 Coins',
    badgeText: 'POPULAR COSMETIC',
    description: 'Blazing crimson and molten ember pulse crafted for high-volume lifters who push past failure.',
    gradient: 'linear-gradient(135deg, #FF3B30 0%, #FF9500 50%, #B92323 100%)',
    glowColor: 'rgba(239, 68, 68, 0.45)',
    avatarRing: 'border-flame-titan',
    accentIcon: Flame,
  },
  {
    id: 'lightning_kinetic',
    name: 'Lightning Kinetic',
    tag: 'In-App Shop',
    tagColor: '#00F0FF',
    cost: '300 Coins',
    badgeText: 'FAST TEMPO',
    description: 'High-voltage electric blue arc frame that radiates energy on every clean, verified rep.',
    gradient: 'linear-gradient(135deg, #00F0FF 0%, #3AA7F5 50%, #7000FF 100%)',
    glowColor: 'rgba(0, 240, 255, 0.45)',
    avatarRing: 'border-lightning-kinetic',
    accentIcon: Zap,
  },
  {
    id: 'royal_crown',
    name: 'Royal Crown',
    tag: 'Prestige Tier',
    tagColor: '#F59E0B',
    cost: '500 Coins',
    badgeText: 'ELITE PRESTIGE',
    description: 'Gilded 24K gold crest and regal border reserved for athletes who dominate consistency streaks.',
    gradient: 'linear-gradient(135deg, #F59E0B 0%, #FBBF24 50%, #D97706 100%)',
    glowColor: 'rgba(245, 158, 11, 0.45)',
    avatarRing: 'border-royal-crown',
    accentIcon: Crown,
  },
  {
    id: 'galaxy_nebula',
    name: 'Galaxy Nebula',
    tag: 'In-App Shop',
    tagColor: '#A855F7',
    cost: '400 Coins',
    badgeText: 'COSMIC AURA',
    description: 'Deep-space interstellar dust cloud with shifting violet, magenta, and celestial starfield radiance.',
    gradient: 'linear-gradient(135deg, #A855F7 0%, #EC4899 50%, #6366F1 100%)',
    glowColor: 'rgba(168, 85, 247, 0.45)',
    avatarRing: 'border-galaxy-nebula',
    accentIcon: Compass,
  },
  {
    id: 'obsidian_stealth',
    name: 'Obsidian Stealth',
    tag: 'Level 10+ Reward',
    tagColor: '#10B981',
    cost: '450 Coins',
    badgeText: 'TACTICAL CARBON',
    description: 'Matte carbon fiber chassis accented with radioactive emerald tritium highlights.',
    gradient: 'linear-gradient(135deg, #10B981 0%, #064E3B 50%, #111827 100%)',
    glowColor: 'rgba(16, 185, 129, 0.45)',
    avatarRing: 'border-obsidian-stealth',
    accentIcon: Eye,
  },
];

export default function FramesAndShopShowcase() {
  const [selectedFrame, setSelectedFrame] = useState(FRAMES[0]);
  const [equippedId, setEquippedId] = useState('rank_dynamic');

  const isEquipped = equippedId === selectedFrame.id;

  return (
    <section className="shop-frames-section" id="frames" style={{ padding: '6rem 0', position: 'relative' }}>
      <div className="container">
        
        {/* Section Header */}
        <div className="section-head text-center" style={{ maxWidth: '720px', margin: '0 auto 3.5rem auto' }}>
          <div style={{ display: 'inline-flex', alignItems: 'center', gap: '0.45rem', color: 'var(--primary)', marginBottom: '0.6rem', fontWeight: 700, fontSize: '0.88rem' }}>
            <Sparkles size={18} />
            <span>AVATAR FRAMES &amp; IN-APP REWARDS</span>
          </div>
          <h2 className="section-title">Showcase your rank. Customize your avatar.</h2>
          <p className="section-subtitle" style={{ color: 'var(--text-secondary)', fontSize: '1.05rem', lineHeight: 1.6 }}>
            Every workout earns you coins. Equip distinctive cosmetic frames to represent your dedication, switch anytime in your profile, and stand out on your fitness journey.
          </p>
        </div>

        {/* Interactive Frame Stage */}
        <div style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fit, minmax(320px, 1fr))',
          gap: '2rem',
          alignItems: 'center',
          background: 'rgba(17, 20, 28, 0.65)',
          border: '1px solid var(--border-card)',
          borderRadius: 'var(--radius-xl, 24px)',
          padding: 'clamp(1.5rem, 4vw, 3rem)',
          backdropFilter: 'blur(16px)',
          boxShadow: '0 20px 50px rgba(0, 0, 0, 0.5)'
        }}>

          {/* Left Column: Interactive Selector */}
          <div>
            <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', marginBottom: '1.25rem' }}>
              <span style={{ fontSize: '0.82rem', fontWeight: 800, textTransform: 'uppercase', letterSpacing: '0.08em', color: 'var(--text-sub)' }}>
                Select Frame to Preview
              </span>
              <div style={{ display: 'inline-flex', alignItems: 'center', gap: '6px', fontSize: '0.82rem', color: '#FBBF24', fontWeight: 700 }}>
                <Coins size={15} />
                <span>Earn Coins Every Workout</span>
              </div>
            </div>

            <div style={{ display: 'flex', flexDirection: 'column', gap: '0.75rem' }}>
              {FRAMES.map((frame) => {
                const isSelected = selectedFrame.id === frame.id;
                const FrameIcon = frame.accentIcon;
                return (
                  <button
                    key={frame.id}
                    type="button"
                    onClick={() => setSelectedFrame(frame)}
                    style={{
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'space-between',
                      padding: '0.9rem 1.15rem',
                      background: isSelected ? 'rgba(255, 255, 255, 0.06)' : 'rgba(255, 255, 255, 0.02)',
                      border: isSelected ? `1.5px solid ${frame.tagColor}` : '1px solid var(--border-subtle)',
                      borderRadius: 'var(--radius-md, 12px)',
                      color: 'var(--text-main)',
                      cursor: 'pointer',
                      transition: 'all 0.2s ease',
                      textAlign: 'left',
                      boxShadow: isSelected ? `0 4px 20px ${frame.glowColor}` : 'none',
                    }}
                  >
                    <div style={{ display: 'flex', alignItems: 'center', gap: '0.9rem' }}>
                      <div style={{
                        width: '36px',
                        height: '36px',
                        borderRadius: '50%',
                        background: frame.gradient,
                        display: 'flex',
                        alignItems: 'center',
                        justifyContent: 'center',
                        color: '#FFFFFF',
                        flexShrink: 0
                      }}>
                        <FrameIcon size={18} />
                      </div>
                      <div>
                        <div style={{ fontWeight: 800, fontSize: '0.98rem', display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
                          <span>{frame.name}</span>
                          {equippedId === frame.id && (
                            <span style={{ fontSize: '0.65rem', padding: '2px 6px', background: 'rgba(16, 185, 129, 0.2)', color: 'var(--accent-lime)', borderRadius: '4px', fontWeight: 800 }}>
                              EQUIPPED
                            </span>
                          )}
                        </div>
                        <div style={{ fontSize: '0.78rem', color: 'var(--text-secondary)', marginTop: '2px' }}>
                          {frame.cost}
                        </div>
                      </div>
                    </div>

                    <span style={{
                      fontSize: '0.72rem',
                      fontWeight: 700,
                      padding: '3px 8px',
                      borderRadius: '999px',
                      background: 'rgba(255, 255, 255, 0.05)',
                      color: frame.tagColor,
                      border: `1px solid ${frame.tagColor}33`
                    }}>
                      {frame.tag}
                    </span>
                  </button>
                );
              })}
            </div>
          </div>

          {/* Right Column: Live Avatar Preview Card */}
          <div style={{
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
            justifyContent: 'center',
            background: 'rgba(0, 0, 0, 0.45)',
            border: '1px solid var(--border-subtle)',
            borderRadius: 'var(--radius-lg, 16px)',
            padding: '2.5rem 1.5rem',
            position: 'relative',
            overflow: 'hidden'
          }}>
            
            {/* Ambient Background Glow for Frame */}
            <div style={{
              position: 'absolute',
              width: '260px',
              height: '260px',
              borderRadius: '50%',
              background: selectedFrame.glowColor,
              filter: 'blur(70px)',
              pointerEvents: 'none',
              opacity: 0.6,
              transition: 'background 0.4s ease'
            }}></div>

            {/* Frame Status Badge */}
            <div style={{
              display: 'inline-flex',
              alignItems: 'center',
              gap: '6px',
              padding: '4px 12px',
              borderRadius: '999px',
              background: 'rgba(255, 255, 255, 0.08)',
              border: `1px solid ${selectedFrame.tagColor}66`,
              color: selectedFrame.tagColor,
              fontSize: '0.75rem',
              fontWeight: 800,
              letterSpacing: '0.06em',
              marginBottom: '1.75rem',
              zIndex: 1
            }}>
              <span>{selectedFrame.badgeText}</span>
            </div>

            {/* Avatar with Animated Border */}
            <div style={{
              position: 'relative',
              width: '140px',
              height: '140px',
              borderRadius: '50%',
              padding: '6px',
              background: selectedFrame.gradient,
              boxShadow: `0 0 35px ${selectedFrame.glowColor}`,
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              transition: 'all 0.4s ease',
              zIndex: 1
            }}>
              <div style={{
                width: '100%',
                height: '100%',
                borderRadius: '50%',
                background: '#090B0E',
                overflow: 'hidden',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center'
              }}>
                <img 
                  src="/assets/mascot_transparent_512.png" 
                  alt="TrueRep Avatar Preview" 
                  style={{ width: '85%', height: '85%', objectFit: 'contain' }}
                />
              </div>

              {/* Verified Athlete Pill */}
              <div style={{
                position: 'absolute',
                bottom: '-4px',
                right: '4px',
                background: 'var(--bg-surface-elevated)',
                border: '1px solid var(--accent-lime)',
                borderRadius: '50%',
                width: '26px',
                height: '26px',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                color: 'var(--accent-lime)'
              }}>
                <Check size={14} strokeWidth={3} />
              </div>
            </div>

            {/* Frame Metadata */}
            <div style={{ textAlign: 'center', marginTop: '1.5rem', zIndex: 1, maxWidth: '360px' }}>
              <h3 style={{ fontSize: '1.35rem', fontWeight: 900, marginBottom: '0.35rem', color: 'var(--text-main)' }}>
                {selectedFrame.name}
              </h3>
              <p style={{ fontSize: '0.88rem', color: 'var(--text-secondary)', lineHeight: 1.5, marginBottom: '1.25rem' }}>
                {selectedFrame.description}
              </p>

              {/* Equip Action Button */}
              <button
                type="button"
                onClick={() => setEquippedId(selectedFrame.id)}
                className={`btn ${isEquipped ? 'btn-secondary' : 'btn-primary'}`}
                style={{ width: '100%', justifyContent: 'center' }}
              >
                {isEquipped ? (
                  <>
                    <Check size={18} />
                    <span>Equipped in App</span>
                  </>
                ) : (
                  <>
                    <Sparkles size={18} />
                    <span>Equip Frame</span>
                  </>
                )}
              </button>
            </div>

            {/* Economy Guarantee Bar */}
            <div style={{
              display: 'flex',
              alignItems: 'center',
              gap: '8px',
              marginTop: '1.25rem',
              padding: '6px 14px',
              borderRadius: 'var(--radius-sm, 8px)',
              background: 'rgba(255, 255, 255, 0.03)',
              border: '1px solid var(--border-subtle)',
              fontSize: '0.78rem',
              color: 'var(--text-secondary)',
              zIndex: 1
            }}>
              <Coins size={14} style={{ color: '#FBBF24' }} />
              <span>Earn <strong>+25 Coins</strong> per workout session Â· 2x Booster compatible</span>
            </div>

          </div>

        </div>

        {/* Feature Highlights Grid Below */}
        <div style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))',
          gap: '1.25rem',
          marginTop: '2rem'
        }}>
          
          <div style={{
            background: 'var(--bg-surface-card)',
            border: '1px solid var(--border-subtle)',
            borderRadius: 'var(--radius-lg, 16px)',
            padding: '1.5rem',
            display: 'flex',
            flexDirection: 'column',
            gap: '0.5rem'
          }}>
            <div style={{ display: 'flex', alignItems: 'center', gap: '0.6rem', color: 'var(--primary)', fontWeight: 800, fontSize: '0.9rem' }}>
              <Coins size={18} />
              <span>GUARANTEED WORKOUT REWARDS</span>
            </div>
            <h4 style={{ fontSize: '1.1rem', fontWeight: 800, color: 'var(--text-main)', margin: '4px 0' }}>
              Coins on Every Completed Workout
            </h4>
            <p style={{ fontSize: '0.88rem', color: 'var(--text-secondary)', lineHeight: 1.5, margin: 0 }}>
              Receive instant coin rewards after every session. Stack 2x boosters and level-up milestones without paywalls.
            </p>
          </div>

          <div style={{
            background: 'var(--bg-surface-card)',
            border: '1px solid var(--border-subtle)',
            borderRadius: 'var(--radius-lg, 16px)',
            padding: '1.5rem',
            display: 'flex',
            flexDirection: 'column',
            gap: '0.5rem'
          }}>
            <div style={{ display: 'flex', alignItems: 'center', gap: '0.6rem', color: 'var(--accent-lime)', fontWeight: 800, fontSize: '0.9rem' }}>
              <Check size={18} />
              <span>STRUCTURED DAILY SPLITS</span>
            </div>
            <h4 style={{ fontSize: '1.1rem', fontWeight: 800, color: 'var(--text-main)', margin: '4px 0' }}>
              Daily Plans &amp; Completion Status
            </h4>
            <p style={{ fontSize: '0.88rem', color: 'var(--text-secondary)', lineHeight: 1.5, margin: 0 }}>
              Follow targeted workout splits. Completing your day immediately updates the dashboard with a completion checkmark.
            </p>
          </div>

          <div style={{
            background: 'var(--bg-surface-card)',
            border: '1px solid var(--border-subtle)',
            borderRadius: 'var(--radius-lg, 16px)',
            padding: '1.5rem',
            display: 'flex',
            flexDirection: 'column',
            gap: '0.5rem'
          }}>
            <div style={{ display: 'flex', alignItems: 'center', gap: '0.6rem', color: '#F59E0B', fontWeight: 800, fontSize: '0.9rem' }}>
              <Award size={18} />
              <span>UNIFIED SESSION HISTORY</span>
            </div>
            <h4 style={{ fontSize: '1.1rem', fontWeight: 800, color: 'var(--text-main)', margin: '4px 0' }}>
              Single Clean Log per Session
            </h4>
            <p style={{ fontSize: '0.88rem', color: 'var(--text-secondary)', lineHeight: 1.5, margin: 0 }}>
              Multi-exercise plan routines are consolidated into a single unified session entry with full set metrics and earned XP.
            </p>
          </div>

        </div>

      </div>
    </section>
  );
}
