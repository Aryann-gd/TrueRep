'use client';

import React from 'react';
import Link from 'next/link';

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
              <a href="https://github.com/Aryann-gd/KINETX" target="_blank" rel="noopener noreferrer">
                Core App Source (KINETX)
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
