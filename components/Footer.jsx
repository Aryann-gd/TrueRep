'use client';

import React from 'react';
import Link from 'next/link';

function InstagramIcon({ size = 18, color = "#E1306C" }) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke={color} strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
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
            <Link 
              href="/" 
              className="brand-link" 
              style={{ marginBottom: '0.75rem', display: 'inline-flex' }}
              title="TrueRep Home"
            >
              <img 
                src="/assets/icon_flex_512.png" 
                alt="TrueRep AI Form Coach Icon" 
                className="brand-logo-img" 
                width="32" 
                height="32"
              />
              <span className="brand-title">TRUEREP<span className="brand-accent">.</span></span>
            </Link>
            <p className="footer-tagline">
              The honest AI rep counter, form coach, and nutrition tracker. Built for athletes who want truth over comfort.
            </p>
            <div style={{ marginTop: '1.25rem' }}>
              <a 
                href="https://instagram.com/truerep.official" 
                target="_blank" 
                rel="noopener noreferrer"
                title="Follow TrueRep on Instagram"
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
            <nav className="footer-nav" aria-label="Platform navigation">
              <Link href="/features" title="TrueRep All Features & Capabilities">Features</Link>
              <Link href="/#ranks" title="9 Gym Strength Ranks Progression">Nine Ranks</Link>
              <Link href="/#how-it-works" title="How TrueRep AI Workout Tracking Works">How It Works</Link>
              <Link href="/#telemetry" title="AI Form Coach Kinematics">AI Form Coach</Link>
              <Link href="/#video-demo" title="Watch AI Tracking Video Demo">Demo Video</Link>
              <Link href="/#faq" title="Frequently Asked Questions">FAQ</Link>
              <Link href="/#download" title="Download Free Android APK">Download APK</Link>
            </nav>
          </div>

          <div>
            <div className="footer-heading">Resources &amp; Legal</div>
            <nav className="footer-nav" aria-label="Resources and legal navigation">
              <Link href="/blog" title="TrueRep Fitness, Biomechanics & AI Blog">
                Fitness &amp; AI Blog
              </Link>
              <Link href="/privacy" title="Read TrueRep Privacy Policy">
                Privacy Policy
              </Link>
              <Link href="/terms" title="Read TrueRep Terms of Service">
                Terms of Service
              </Link>
              <a 
                href="https://github.com/Aryann-gd/TrueRep" 
                target="_blank" 
                rel="noopener noreferrer"
                title="TrueRep Open-Source GitHub Repository"
              >
                GitHub Repository
              </a>
              <a 
                href="https://github.com/Aryann-gd/TrueRep/releases" 
                target="_blank" 
                rel="noopener noreferrer"
                title="TrueRep Universal APK Releases"
              >
                Releases Hub
              </a>
              <a 
                href="https://play.google.com/store/apps/details?id=com.truerep.app" 
                target="_blank" 
                rel="noopener noreferrer" 
                style={{ color: 'var(--primary)', fontWeight: 600 }}
                title="TrueRep on Google Play Store"
              >
                Google Play Store
              </a>
            </nav>
          </div>
        </div>

        <div className="footer-bottom">
          <p>&copy; 2026 TrueRep. Free &amp; Open-Source under BSD-3-Clause License.</p>
          <p>100% on-device AI kinematics. Zero cloud data harvesting.</p>
        </div>
      </div>
    </footer>
  );
}
