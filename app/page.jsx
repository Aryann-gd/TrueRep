import React from 'react';
import Link from 'next/link';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import RanksShowcase from '../components/RanksShowcase';
import TelemetrySimulator from '../components/TelemetrySimulator';
import VideoShowcase from '../components/VideoShowcase';
import FaqSection from '../components/FaqSection';
import DownloadHub from '../components/DownloadHub';
import { Download, Shield, Sparkles, Activity, Layers, Smartphone, EyeOff, Utensils } from 'lucide-react';

export default function HomePage() {
  return (
    <>
      <Navbar />

      <main>
        {/* Hero Section with Hexagonal Spotlight Mesh */}
        <section className="hex-spotlight hero-section">
          <div className="container">
            
            {/* Top Status Pill */}
            <div className="pill-badge">
              <span className="pill-dot"></span>
              <span>Real-Time AI Vision · Works on All Android Phones</span>
            </div>

            {/* Main Display Title */}
            <h1 className="hero-title">
              Get stronger with gym ranks. <br />
              <span className="text-gradient-cyan">Powered by on-device AI.</span>
            </h1>

            <p className="hero-subtext">
              Log your sets, track your movement in real-time with AI, verify true depth, and earn your rank from Wood to Olympian. 100% private, on-device AI.
            </p>

            {/* Primary Action Buttons */}
            <div className="hero-cta-group">
              <Link href="#download" className="btn btn-primary btn-lg" id="hero-download-btn">
                <Download size={22} />
                <span>Download Latest APK</span>
                <span style={{ opacity: 0.75, fontSize: '0.85em' }}>(Universal)</span>
              </Link>

              <a 
                href="https://github.com/Aryann-gd/TrueRep/releases" 
                target="_blank" 
                rel="noopener noreferrer" 
                className="btn btn-secondary btn-lg" 
                id="hero-github-btn"
              >
                <svg width="22" height="22" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M12 0C5.37 0 0 5.37 0 12c0 5.31 3.435 9.795 8.205 11.385.6.105.825-.255.825-.57 0-.285-.015-1.23-.015-2.235-3.015.555-3.795-.735-4.035-1.41-.135-.345-.72-1.41-1.23-1.695-.42-.225-1.02-.78-.015-.795.945-.015 1.62.87 1.845 1.23 1.08 1.815 2.805 1.305 3.495.99.105-.78.42-1.305.765-1.605-2.67-.3-5.46-1.335-5.46-5.925 0-1.305.465-2.385 1.23-3.225-.12-.3-.54-1.53.12-3.18 0 0 1.005-.315 3.3 1.23.96-.27 1.98-.405 3-.405s2.04.135 3 .405c2.295-1.56 3.3-1.23 3.3-1.23.66 1.65.24 2.88.12 3.18.765.84 1.23 1.905 1.23 3.225 0 4.605-2.805 5.625-5.475 5.925.435.375.81 1.095.81 2.22 0 1.605-.015 2.895-.015 3.3 0 .315.225.69.825.57A12.02 12.02 0 0024 12c0-6.63-5.37-12-12-12z"/>
                </svg>
                <span>GitHub Releases</span>
              </a>
            </div>

            {/* Rating & Openness Bar */}
            <div className="hero-rating-bar">
              <span className="rating-stars">★★★★★</span>
              <span><strong>4.9 / 5.0</strong> · 100% On-Device AI · Zero Cloud Video · Free &amp; Open-Source</span>
            </div>

            {/* Hero Device Mockup with HUD & Floating Rank Crests */}
            <div className="hero-showcase">
              <div className="hero-ambient-glow"></div>

              {/* Floating Rank Crest 1: Olympian */}
              <div className="floating-crest crest-olympian">
                <img src="/assets/ranks/olympian.png" alt="Olympian Rank" />
                <span style={{ color: 'var(--rank-olympian)' }}>Olympian</span>
              </div>

              {/* Floating Rank Crest 2: Titan */}
              <div className="floating-crest crest-titan">
                <img src="/assets/ranks/titan.png" alt="Titan Rank" />
                <span style={{ color: 'var(--rank-titan)' }}>Titan</span>
              </div>

              {/* Floating Rank Crest 3: Diamond */}
              <div className="floating-crest crest-diamond">
                <img src="/assets/ranks/diamond.png" alt="Diamond Rank" />
                <span style={{ color: 'var(--rank-diamond)' }}>Diamond</span>
              </div>

              {/* Phone Mockup Container */}
              <div className="phone-mockup">
                <div className="phone-screen">
                  <div className="phone-notch"></div>
                  
                  {/* High-Impact AI Workout Telemetry Graphic */}
                  <img 
                    src="/assets/ai_workout_vision.jpg" 
                    alt="TrueRep Real-Time AI Workout Form Tracking" 
                    className="phone-camera-video" 
                  />

                  {/* Live HUD Overlay */}
                  <div className="phone-hud-overlay">
                    <div className="hud-top-bar">
                      <span className="hud-pill">REAL-TIME · ON-DEVICE AI</span>
                      <span className="hud-pill" style={{ color: '#59B9F9' }}>SMART FORM ANALYSIS</span>
                    </div>

                    <div className="hud-rep-counter">
                      <div className="hud-rep-title">Rep Counter</div>
                      <div className="hud-rep-digits">
                        6<span style={{ fontSize: '1.2rem', color: '#94A3B8' }}>/10</span>
                      </div>
                    </div>

                    <div className="hud-angle-gauge">
                      <div>
                        <div style={{ fontSize: '0.68rem', color: '#94A3B8', textTransform: 'uppercase' }}>
                          Squat Depth Angle
                        </div>
                        <div className="hud-angle-val" id="hud-knee-angle">86°</div>
                      </div>
                      <div className="hud-depth-status">OPTIMAL DEPTH ✓</div>
                    </div>
                  </div>

                </div>
              </div>

            </div>

          </div>
        </section>

        {/* Stat Metrics Strip */}
        <section className="stats-strip" id="telemetry">
          <div className="container">
            <div className="stats-grid">
              <div className="stat-card">
                <div className="stat-value text-gradient-cyan">Real-Time</div>
                <div className="stat-label">AI Form Tracking</div>
              </div>
              <div className="stat-card">
                <div className="stat-value text-gradient-lime">Instant</div>
                <div className="stat-label">AI Rep Feedback</div>
              </div>
              <div className="stat-card">
                <div className="stat-value" style={{ color: '#FBBF24' }}>9</div>
                <div className="stat-label">Competitive Ranks</div>
              </div>
              <div className="stat-card">
                <div className="stat-value text-gradient-cyan">100%</div>
                <div className="stat-label">Private (Zero Cloud Video)</div>
              </div>
            </div>
          </div>
        </section>

        {/* The Nine Ranks Section */}
        <RanksShowcase />

        {/* Bento Grid Features ("Everything Around The Workout") */}
        <section className="features-section" id="features">
          <div className="container">
            
            <div className="section-head">
              <div style={{ display: 'inline-flex', alignItems: 'center', gap: '0.4rem', color: 'var(--primary)', marginBottom: '0.5rem', fontWeight: 700, fontSize: '0.88rem' }}>
                <Layers size={18} />
                <span>INTELLIGENT WORKOUT TRACKING</span>
              </div>
              <h2 className="section-title">Everything around the workout.</h2>
              <p className="section-subtitle">
                TrueRep combines intelligent AI workout vision with offline nutrition tracking, streak accountability, and zero cloud dependency.
              </p>
            </div>

            <div className="bento-grid">
              
              {/* Bento 1: Real-Time AI Motion Tracking */}
              <div className="bento-card bento-card-7">
                <div>
                  <span className="card-tag">Computer Vision</span>
                  <h3 className="bento-card-title">Real-Time AI Motion Tracking</h3>
                  <p className="bento-card-desc">
                    Our on-device AI analyzes your form and body alignment in real time right on your phone without sending any video online. It checks your angles instantly to verify full range of motion.
                  </p>
                </div>
                <div className="bento-visual">
                  <img src="/assets/ai_pushup_tracking.jpg" alt="TrueRep AI Workout Form Tracking" className="bento-gif" />
                </div>
              </div>

              {/* Bento 2: Real-Time AI Audio Cues */}
              <div className="bento-card bento-card-5">
                <div>
                  <span className="card-tag">Audio Coaching</span>
                  <h3 className="bento-card-title">Real-Time AI Voice Feedback</h3>
                  <p className="bento-card-desc">
                    Place your phone against the wall. Immediate voice &amp; haptic cues confirm depth and flag breakdown—such as knee valgus or back rounding—before you get injured.
                  </p>
                </div>
                <div style={{ padding: '1.5rem', background: 'var(--bg-surface-elevated)', borderRadius: 'var(--radius-md)', border: '1px solid var(--border-subtle)' }}>
                  <div style={{ fontFamily: 'var(--font-mono)', fontSize: '0.85rem', color: 'var(--accent-lime)', marginBottom: '8px' }}>
                    ● &ldquo;Rep 6: Optimal Depth Hit&rdquo;
                  </div>
                  <div style={{ fontFamily: 'var(--font-mono)', fontSize: '0.85rem', color: '#F59E0B' }}>
                    ▲ &ldquo;Push knees outward on ascent&rdquo;
                  </div>
                </div>
              </div>

              {/* Bento 3: AI Calorie Lens */}
              <div className="bento-card bento-card-4">
                <div>
                  <span className="card-tag">Nutrition</span>
                  <h3 className="bento-card-title">Calorie &amp; Macro Fueling</h3>
                  <p className="bento-card-desc">
                    Bundled catalog of staple foods with macronutrients. Log meals offline without transmitting queries to any remote servers.
                  </p>
                </div>
                <div style={{ fontSize: '2.2rem', fontWeight: 900, color: '#59B9F9', fontFamily: 'var(--font-display)' }}>
                  160g <span style={{ fontSize: '0.95rem', color: '#9BA3AF' }}>Protein Hit</span>
                </div>
              </div>

              {/* Bento 4: 100% Offline & Private */}
              <div className="bento-card bento-card-4">
                <div>
                  <span className="card-tag">Privacy</span>
                  <h3 className="bento-card-title">Zero Cloud Video</h3>
                  <p className="bento-card-desc">
                    Camera feeds are processed temporarily in memory by AI and discarded immediately. No workout footage ever leaves your device.
                  </p>
                </div>
                <div style={{ display: 'flex', alignItems: 'baseline', gap: '0.5rem' }}>
                  <div style={{ fontSize: '2.2rem', fontWeight: 900, color: 'var(--accent-lime)', fontFamily: 'var(--font-display)' }}>
                    100%
                  </div>
                  <span style={{ fontSize: '0.95rem', color: '#9BA3AF' }}>On-Device AI</span>
                </div>
              </div>

              {/* Bento 5: Universal Android Ready */}
              <div className="bento-card bento-card-4">
                <div>
                  <span className="card-tag">Universal</span>
                  <h3 className="bento-card-title">All Android Devices</h3>
                  <p className="bento-card-desc">
                    Compatible with Android 8.0 all the way to Android 15+. Install seamlessly on all Android smartphones and tablets.
                  </p>
                </div>
                <div style={{ fontSize: '2.2rem', fontWeight: 900, color: '#A855F7', fontFamily: 'var(--font-display)' }}>
                  Android <span style={{ fontSize: '0.95rem', color: '#9BA3AF' }}>8.0 to 15+</span>
                </div>
              </div>

            </div>

          </div>
        </section>

        {/* Interactive Biomechanical Simulator */}
        <TelemetrySimulator />

        {/* Official Telemetry Video Showcase */}
        <VideoShowcase />

        {/* SEO FAQ Section */}
        <FaqSection />

        {/* Download Hub */}
        <DownloadHub />
      </main>

      <Footer />
    </>
  );
}
