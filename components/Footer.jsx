'use client';

import React from 'react';
import Link from 'next/link';

function InstagramIcon({ size = 18, color = "#E1306C" }) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke={color} strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <rect x="2" y="2" width="20" height="20" rx="5" ry="5"></rect>
      <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"></path>
      <line x1="17.5" y1="6.5" x2="17.51" y2="6.5"></line>
    </svg>
  );
}

export default function Footer() {
  return (
    <footer className="site-footer">
      <div className="container">
        <div className="footer-grid">
          <div>
            <Link href="/" className="brand-link" style={{ marginBottom: '0.75rem', display: 'inline-flex' }}>
              <img src="/assets/icon_flex_512.png" alt="TrueRep Logo" className="brand-logo-img" />
              <span className="brand-title">TRUEREP<span className="brand-accent">.</span></span>
            </Link>
            <p className="footer-tagline">
              The honest AI workout form coach and nutrition tracker. Built for athletes who want truth over comfort.
            </p>
            <div style={{ marginTop: '1.25rem' }}>
              <a 
                href="https://instagram.com/truerep.official" 
                target="_blank" 
                rel="noopener noreferrer"
                style={{
                  display: 'inline-flex',
                  alignItems: 'center',
                  gap: '0.5rem',
                  fontSize: '0.88rem',
                  color: 'var(--text-secondary)',
                  textDecoration: 'none',
                  transition: 'color var(--transition-fast)'
                }}
                onMouseEnter={(e) => e.currentTarget.style.color = '#E1306C'}
                onMouseLeave={(e) => e.currentTarget.style.color = 'var(--text-secondary)'}
              >
                <InstagramIcon size={18} color="#E1306C" />
                <span>@truerep.official</span>
              </a>
            </div>
          </div>

          <div>
            <div className="footer-heading">Platform</div>
            <div className="footer-nav">
              <Link href="/#features">Features</Link>
              <Link href="/#ranks">Nine Ranks</Link>
              <Link href="/#telemetry">AI Form Coach</Link>
              <Link href="/#simulator">Angle Simulator</Link>
              <Link href="/#download">Download APK</Link>
            </div>
          </div>

          <div>
            <div className="footer-heading">Open Source &amp; Releases</div>
            <div className="footer-nav">
              <a href="https://github.com/Aryann-gd/TrueRep" target="_blank" rel="noopener noreferrer">
                TrueRep Repository
              </a>
              <a href="https://github.com/Aryann-gd/TrueRep/releases" target="_blank" rel="noopener noreferrer">
                TrueRep Releases Hub
              </a>
              <a href="https://github.com/Aryann-gd/TrueRep" target="_blank" rel="noopener noreferrer">
                Core App Source (TrueRep)
              </a>
              <a 
                href="https://instagram.com/truerep.official" 
                target="_blank" 
                rel="noopener noreferrer"
                style={{ display: 'inline-flex', alignItems: 'center', gap: '0.4rem', color: '#E1306C', fontWeight: 600 }}
              >
                <InstagramIcon size={15} color="#E1306C" />
                <span>@truerep.official</span>
              </a>
              <Link href="/privacy" style={{ color: 'var(--primary)', fontWeight: 600 }}>
                Privacy Policy
              </Link>
            </div>
          </div>
        </div>

        <div className="footer-bottom">
          <p>&copy; 2026 TrueRep. Open-source under BSD-3-Clause License.</p>
          <p>Built with 100% on-device AI.</p>
        </div>
      </div>
    </footer>
  );
}
