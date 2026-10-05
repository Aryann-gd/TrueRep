import React from 'react';
import Link from 'next/link';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import RanksShowcase from '../components/RanksShowcase';
import TelemetrySimulator from '../components/TelemetrySimulator';
import VideoShowcase from '../components/VideoShowcase';
import FaqSection from '../components/FaqSection';
import DownloadHub from '../components/DownloadHub';
import { 
  Download, 
  ShieldCheck, 
  Sparkles, 
  Activity, 
  Layers, 
  Smartphone, 
  EyeOff, 
  Utensils, 
  Volume2, 
  Flame, 
  Award, 
  CheckCircle2, 
  ArrowRight, 
  Star, 
  Quote, 
  SmartphoneNfc 
} from 'lucide-react';

export default function HomePage() {
  return (
    <>
      <Navbar />

      <main id="main-content">
        {/* =====================================================
            1. HERO SECTION
            ===================================================== */}
        <section className="hex-spotlight hero-section" aria-labelledby="hero-main-title">
          <div className="container">
            
            {/* Top Status Pill */}
            <div className="pill-badge">
              <span className="pill-dot"></span>
              <span>100% On-Device AI · Zero Cloud Uploads · Free Android App</span>
            </div>

            {/* Main Display Title (Single H1 per page) */}
            <h1 className="hero-title" id="hero-main-title">
              AI That Counts Only True Reps. <br />
              <span className="text-gradient-cyan">Real-Time Form Coaching &amp; Gym Ranks.</span>
            </h1>

            {/* Subheading */}
            <p className="hero-subtext">
              Real-time form coaching. Streak rewards. 100% on-device. Log your sets, verify true squat depth, 
              and climb 9 strength tiers from Wood to Olympian with zero cloud video.
            </p>

            {/* Primary Action Buttons */}
            <div className="hero-cta-group">
              <a 
                href="https://play.google.com/store/apps/details?id=com.truerep.app" 
                target="_blank" 
                rel="noopener noreferrer" 
                className="btn btn-primary btn-lg" 
                id="hero-play-store-btn"
                title="Download TrueRep Free on Google Play Store"
              >
                <Download size={22} />
                <span>Download Free on Google Play</span>
              </a>

              <Link 
                href="#download" 
                className="btn btn-secondary btn-lg" 
                id="hero-download-btn"
                title="Download TrueRep Direct Universal APK"
              >
                <Smartphone size={22} />
                <span>Universal APK</span>
                <span style={{ opacity: 0.75, fontSize: '0.85em' }}>(Direct)</span>
              </Link>
            </div>

            {/* Rating & Social Proof Bar */}
            <div className="hero-rating-bar">
              <span className="rating-stars" aria-label="5 star rating">★★★★★</span>
              <span><strong>4.8 / 5.0</strong> (127 reviews) · Trusted by 1,000+ athletes · 100% On-Device AI</span>
            </div>

            {/* Hero Device Mockup with HUD & Floating Rank Crests */}
            <div className="hero-showcase">
              <div className="hero-ambient-glow"></div>

              {/* Floating Rank Crest 1: Olympian */}
              <div className="floating-crest crest-olympian">
                <img 
                  src="/assets/ranks/olympian.png" 
                  alt="TrueRep Olympian Strength Rank Crest" 
                  width="44" 
                  height="44" 
                  loading="eager"
                  decoding="async"
                />
                <span style={{ color: 'var(--rank-olympian)' }}>Olympian</span>
              </div>

              {/* Floating Rank Crest 2: Titan */}
              <div className="floating-crest crest-titan">
                <img 
                  src="/assets/ranks/titan.png" 
                  alt="TrueRep Titan Strength Rank Crest" 
                  width="44" 
                  height="44" 
                  loading="eager"
                  decoding="async"
                />
                <span style={{ color: 'var(--rank-titan)' }}>Titan</span>
              </div>

              {/* Floating Rank Crest 3: Diamond */}
              <div className="floating-crest crest-diamond">
                <img 
                  src="/assets/ranks/diamond.png" 
                  alt="TrueRep Diamond Strength Rank Crest" 
                  width="44" 
                  height="44" 
                  loading="eager"
                  decoding="async"
                />
                <span style={{ color: 'var(--rank-diamond)' }}>Diamond</span>
              </div>

              {/* Phone Mockup Container */}
              <div className="phone-mockup">
                <div className="phone-screen">
                  <div className="phone-notch"></div>
                  
                  {/* High-Impact AI Workout Telemetry Graphic */}
                  <img 
                    src="/assets/ai_workout_vision.jpg" 
                    alt="TrueRep app showing AI rep counting during a squat workout" 
                    className="phone-camera-video"
                    width="420"
                    height="720"
                    loading="eager"
                    decoding="async"
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
        <section className="stats-strip" id="telemetry" aria-labelledby="telemetry-stats-title">
          <div className="container">
            <h2 id="telemetry-stats-title" className="visually-hidden" style={{ position: 'absolute', width: '1px', height: '1px', overflow: 'hidden', clip: 'rect(0,0,0,0)' }}>
              TrueRep Telemetry Statistics
            </h2>
            <div className="stats-grid">
              <div className="stat-card">
                <div className="stat-value text-gradient-cyan">Real-Time</div>
                <div className="stat-label">AI Form Tracking</div>
              </div>
              <div className="stat-card">
                <div className="stat-value text-gradient-lime">Sub-20ms</div>
                <div className="stat-label">Instant Audio Feedback</div>
              </div>
              <div className="stat-card">
                <div className="stat-value" style={{ color: '#FBBF24' }}>9</div>
                <div className="stat-label">Competitive Gym Ranks</div>
              </div>
              <div className="stat-card">
                <div className="stat-value text-gradient-cyan">100%</div>
                <div className="stat-label">Private (Zero Cloud Video)</div>
              </div>
            </div>
          </div>
        </section>

        {/* =====================================================
            2. CORE FEATURES GRID (Section 6 Requirement)
            ===================================================== */}
        <section className="features-section" id="core-features" aria-labelledby="features-grid-title">
          <div className="container">
            
            <div className="section-head text-center">
              <div style={{ display: 'inline-flex', alignItems: 'center', gap: '0.4rem', color: 'var(--primary)', marginBottom: '0.5rem', fontWeight: 700, fontSize: '0.88rem' }}>
                <Layers size={18} />
                <span>INTELLIGENT WORKOUT TELEMETRY</span>
              </div>
              <h2 className="section-title" id="features-grid-title">Engineered to Build Real Strength</h2>
              <p className="section-subtitle" style={{ maxWidth: '680px', margin: '0 auto' }}>
                TrueRep replaces manual rep counting and guesswork with precision computer vision and habit psychology.
              </p>
            </div>

            <div className="bento-grid" style={{ marginTop: '2.5rem' }}>
              
              {/* Feature Card 1: AI Rep Counting */}
              <div className="bento-card bento-card-7">
                <div>
                  <span className="card-tag">Computer Vision</span>
                  <h3 className="bento-card-title">AI Rep Counting</h3>
                  <p className="bento-card-desc">
                    MediaPipe tracks your pose, counts only valid reps. Our on-device AI analyzes your form and body alignment in real time right on your phone without sending any video online. It checks your angles instantly to verify full range of motion.
                  </p>
                </div>
                <div className="bento-visual">
                  <img 
                    src="/assets/ai_pushup_tracking.jpg" 
                    alt="TrueRep app showing AI rep counting during a pushup exercise" 
                    className="bento-gif" 
                    width="600"
                    height="380"
                    loading="lazy"
                    decoding="async"
                  />
                </div>
              </div>

              {/* Feature Card 2: Form Coaching */}
              <div className="bento-card bento-card-5">
                <div>
                  <span className="card-tag">Real-Time Audio</span>
                  <h3 className="bento-card-title">Form Coaching</h3>
                  <p className="bento-card-desc">
                    Real-time audio cues correct your technique. Place your phone against a wall or bottle—immediate voice &amp; haptic cues confirm depth and flag breakdown like knee valgus or back rounding before injury strikes.
                  </p>
                </div>
                <div style={{ padding: '1.5rem', background: 'var(--bg-surface-elevated)', borderRadius: 'var(--radius-md)', border: '1px solid var(--border-subtle)', marginTop: '1rem' }}>
                  <div style={{ fontFamily: 'var(--font-mono)', fontSize: '0.88rem', color: 'var(--accent-lime)', marginBottom: '8px', display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
                    <Volume2 size={16} />
                    <span>&ldquo;Rep 6: Optimal Depth Hit&rdquo;</span>
                  </div>
                  <div style={{ fontFamily: 'var(--font-mono)', fontSize: '0.88rem', color: '#F59E0B', display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
                    <Activity size={16} />
                    <span>&ldquo;Push knees outward on ascent&rdquo;</span>
                  </div>
                </div>
              </div>

              {/* Feature Card 3: Streak Rewards */}
              <div className="bento-card bento-card-6">
                <div>
                  <span className="card-tag">Accountability</span>
                  <h3 className="bento-card-title">Streak Rewards</h3>
                  <p className="bento-card-desc">
                    90-day badges, XP system, collectible achievements. Turn consistency into a rewarding game. Unlock tier badges as you maintain daily workout streaks and protect milestones with rewarded streak repair.
                  </p>
                </div>
                <div style={{ display: 'flex', alignItems: 'center', gap: '1rem', marginTop: '1rem' }}>
                  <div style={{ fontSize: '2.5rem', fontWeight: 900, color: '#F59E0B', fontFamily: 'var(--font-display)' }}>
                    90
                  </div>
                  <div style={{ fontSize: '0.92rem', color: 'var(--text-secondary)' }}>
                    Day Streak Target <br />
                    <span style={{ color: 'var(--accent-lime)', fontWeight: 600 }}>Unlocks Olympian Tier</span>
                  </div>
                </div>
              </div>

              {/* Feature Card 4: Privacy First */}
              <div className="bento-card bento-card-6">
                <div>
                  <span className="card-tag">Zero Cloud Data</span>
                  <h3 className="bento-card-title">Privacy First</h3>
                  <p className="bento-card-desc">
                    Zero cloud uploads. All processing on your device. Camera feeds are processed temporarily in volatile memory by AI and discarded immediately. No workout footage ever leaves your phone.
                  </p>
                </div>
                <div style={{ display: 'flex', alignItems: 'baseline', gap: '0.5rem', marginTop: '1rem' }}>
                  <div style={{ fontSize: '2.5rem', fontWeight: 900, color: 'var(--accent-lime)', fontFamily: 'var(--font-display)' }}>
                    100%
                  </div>
                  <span style={{ fontSize: '0.95rem', color: 'var(--text-secondary)' }}>Local On-Device Execution</span>
                </div>
              </div>

            </div>

            <div style={{ textAlign: 'center', marginTop: '2.5rem' }}>
              <Link href="/features" className="btn btn-secondary" title="View complete list of TrueRep features">
                <span>View All Detailed Features</span>
                <ArrowRight size={16} />
              </Link>
            </div>

          </div>
        </section>

        {/* =====================================================
            3. HOW IT WORKS (3 Steps — Section 6 Requirement)
            ===================================================== */}
        <section className="how-it-works-section" id="how-it-works" aria-labelledby="how-it-works-title" style={{ padding: '6rem 0', borderTop: '1px solid var(--border-subtle)', background: 'var(--bg-surface)' }}>
          <div className="container">
            
            <div className="section-head text-center">
              <div style={{ display: 'inline-flex', alignItems: 'center', gap: '0.4rem', color: 'var(--primary)', marginBottom: '0.5rem', fontWeight: 700, fontSize: '0.88rem' }}>
                <SmartphoneNfc size={18} />
                <span>SIMPLE 3-STEP WORKFLOW</span>
              </div>
              <h2 className="section-title" id="how-it-works-title">How TrueRep Works</h2>
              <p className="section-subtitle" style={{ maxWidth: '640px', margin: '0 auto' }}>
                Start training with an intelligent AI form coach in less than 30 seconds. No wearable bands or expensive sensors required.
              </p>
            </div>

            <div style={{
              display: 'grid',
              gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))',
              gap: '2rem',
              marginTop: '3.5rem'
            }}>
              
              {/* Step 1 */}
              <div style={{
                background: 'var(--bg-surface-elevated)',
                border: '1px solid var(--border-card)',
                borderRadius: 'var(--radius-lg)',
                padding: '2rem',
                position: 'relative'
              }}>
                <div style={{
                  width: '46px',
                  height: '46px',
                  borderRadius: '50%',
                  background: 'rgba(89, 185, 249, 0.15)',
                  color: 'var(--primary)',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  fontSize: '1.25rem',
                  fontWeight: 900,
                  marginBottom: '1.25rem',
                  fontFamily: 'var(--font-display)'
                }}>
                  1
                </div>
                <h3 style={{ fontSize: '1.3rem', fontWeight: 800, marginBottom: '0.75rem', color: 'var(--text-main)', fontFamily: 'var(--font-display)' }}>
                  Open TrueRep and select your workout
                </h3>
                <p style={{ color: 'var(--text-secondary)', fontSize: '0.94rem', lineHeight: 1.6 }}>
                  Choose from verified exercises like bodyweight squats, deep push-ups, or custom strength routines. No account login or setup friction.
                </p>
              </div>

              {/* Step 2 */}
              <div style={{
                background: 'var(--bg-surface-elevated)',
                border: '1px solid var(--border-card)',
                borderRadius: 'var(--radius-lg)',
                padding: '2rem',
                position: 'relative'
              }}>
                <div style={{
                  width: '46px',
                  height: '46px',
                  borderRadius: '50%',
                  background: 'rgba(16, 185, 129, 0.15)',
                  color: 'var(--accent-lime)',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  fontSize: '1.25rem',
                  fontWeight: 900,
                  marginBottom: '1.25rem',
                  fontFamily: 'var(--font-display)'
                }}>
                  2
                </div>
                <h3 style={{ fontSize: '1.3rem', fontWeight: 800, marginBottom: '0.75rem', color: 'var(--text-main)', fontFamily: 'var(--font-display)' }}>
                  Position your phone and start exercising
                </h3>
                <p style={{ color: 'var(--text-secondary)', fontSize: '0.94rem', lineHeight: 1.6 }}>
                  Lean your phone against a wall or gym bench. TrueRep&apos;s camera immediately detects 33 anatomical landmarks across your kinetic chain.
                </p>
              </div>

              {/* Step 3 */}
              <div style={{
                background: 'var(--bg-surface-elevated)',
                border: '1px solid var(--border-card)',
                borderRadius: 'var(--radius-lg)',
                padding: '2rem',
                position: 'relative'
              }}>
                <div style={{
                  width: '46px',
                  height: '46px',
                  borderRadius: '50%',
                  background: 'rgba(245, 158, 11, 0.15)',
                  color: '#F59E0B',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  fontSize: '1.25rem',
                  fontWeight: 900,
                  marginBottom: '1.25rem',
                  fontFamily: 'var(--font-display)'
                }}>
                  3
                </div>
                <h3 style={{ fontSize: '1.3rem', fontWeight: 800, marginBottom: '0.75rem', color: 'var(--text-main)', fontFamily: 'var(--font-display)' }}>
                  AI counts reps, coaches form, tracks progress
                </h3>
                <p style={{ color: 'var(--text-secondary)', fontSize: '0.94rem', lineHeight: 1.6 }}>
                  Receive real-time audio corrections on depth, lockout, and cadence. Earn Rank Points toward your next competitive tier.
                </p>
              </div>

            </div>

          </div>
        </section>

        {/* The Nine Ranks Section */}
        <RanksShowcase />

        {/* Interactive Biomechanical Simulator */}
        <TelemetrySimulator />

        {/* Official Telemetry Video Showcase */}
        <VideoShowcase />

        {/* =====================================================
            4. SOCIAL PROOF SECTION (Section 6 Requirement)
            ===================================================== */}
        <section className="social-proof-section" id="social-proof" aria-labelledby="social-proof-title" style={{ padding: '6rem 0', borderTop: '1px solid var(--border-subtle)', background: 'var(--bg-canvas)' }}>
          <div className="container">
            
            <div className="section-head text-center">
              <div style={{ display: 'inline-flex', alignItems: 'center', gap: '0.4rem', color: 'var(--primary)', marginBottom: '0.5rem', fontWeight: 700, fontSize: '0.88rem' }}>
                <Star size={18} fill="#FBBF24" color="#FBBF24" />
                <span>ATHLETE REVIEWS &amp; ACCREDITATION</span>
              </div>
              <h2 className="section-title" id="social-proof-title">Trusted by 1,000+ Athletes</h2>
              <p className="section-subtitle" style={{ maxWidth: '640px', margin: '0 auto' }}>
                See how powerlifters, calisthenics athletes, and daily gym-goers use TrueRep to train with honest biomechanics.
              </p>
            </div>

            <div style={{
              display: 'grid',
              gridTemplateColumns: 'repeat(auto-fit, minmax(310px, 1fr))',
              gap: '1.5rem',
              marginTop: '3.5rem'
            }}>
              
              {/* Testimonial 1 */}
              <div style={{
                background: 'var(--bg-surface)',
                border: '1px solid var(--border-card)',
                borderRadius: 'var(--radius-md)',
                padding: '2rem',
                display: 'flex',
                flexDirection: 'column',
                justifyContent: 'space-between'
              }}>
                <div>
                  <div style={{ display: 'flex', gap: '2px', color: '#FBBF24', marginBottom: '1rem' }}>
                    {'★★★★★'}
                  </div>
                  <p style={{ color: 'var(--text-main)', fontSize: '0.98rem', lineHeight: 1.65, fontStyle: 'italic', marginBottom: '1.5rem' }}>
                    &ldquo;I used to think I was squatting to parallel until TrueRep showed me I was cutting every rep 3 inches short. The live voice cues immediately fixed my depth without me needing a training partner.&rdquo;
                  </p>
                </div>
                <div style={{ borderTop: '1px solid var(--border-subtle)', paddingTop: '1rem', display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
                  <div>
                    <div style={{ fontWeight: 700, fontSize: '0.92rem', color: 'var(--text-main)' }}>Marcus Vance</div>
                    <div style={{ fontSize: '0.8rem', color: 'var(--text-sub)' }}>Powerlifting &amp; Strength Athlete</div>
                  </div>
                  <span className="card-tag" style={{ color: 'var(--rank-diamond)', borderColor: 'var(--rank-diamond)' }}>Diamond Rank</span>
                </div>
              </div>

              {/* Testimonial 2 */}
              <div style={{
                background: 'var(--bg-surface)',
                border: '1px solid var(--border-card)',
                borderRadius: 'var(--radius-md)',
                padding: '2rem',
                display: 'flex',
                flexDirection: 'column',
                justifyContent: 'space-between'
              }}>
                <div>
                  <div style={{ display: 'flex', gap: '2px', color: '#FBBF24', marginBottom: '1rem' }}>
                    {'★★★★★'}
                  </div>
                  <p style={{ color: 'var(--text-main)', fontSize: '0.98rem', lineHeight: 1.65, fontStyle: 'italic', marginBottom: '1.5rem' }}>
                    &ldquo;Zero cloud video is the real reason I switched. Other apps stream camera footage of my bedroom to their servers. TrueRep runs 100% locally on my phone and works even in Airplane Mode.&rdquo;
                  </p>
                </div>
                <div style={{ borderTop: '1px solid var(--border-subtle)', paddingTop: '1rem', display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
                  <div>
                    <div style={{ fontWeight: 700, fontSize: '0.92rem', color: 'var(--text-main)' }}>Elena Rostova</div>
                    <div style={{ fontSize: '0.8rem', color: 'var(--text-sub)' }}>Calisthenics &amp; Mobility Coach</div>
                  </div>
                  <span className="card-tag" style={{ color: 'var(--rank-champion)', borderColor: 'var(--rank-champion)' }}>Champion Rank</span>
                </div>
              </div>

              {/* Testimonial 3 */}
              <div style={{
                background: 'var(--bg-surface)',
                border: '1px solid var(--border-card)',
                borderRadius: 'var(--radius-md)',
                padding: '2rem',
                display: 'flex',
                flexDirection: 'column',
                justifyContent: 'space-between'
              }}>
                <div>
                  <div style={{ display: 'flex', gap: '2px', color: '#FBBF24', marginBottom: '1rem' }}>
                    {'★★★★★'}
                  </div>
                  <p style={{ color: 'var(--text-main)', fontSize: '0.98rem', lineHeight: 1.65, fontStyle: 'italic', marginBottom: '1.5rem' }}>
                    &ldquo;The 9 gym ranks make daily push-ups addictive. You cannot cheat the camera—every single rep requires full lockout and chest-to-deck execution. Just reached Titan tier!&rdquo;
                  </p>
                </div>
                <div style={{ borderTop: '1px solid var(--border-subtle)', paddingTop: '1rem', display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
                  <div>
                    <div style={{ fontWeight: 700, fontSize: '0.92rem', color: 'var(--text-main)' }}>Devon Thorne</div>
                    <div style={{ fontSize: '0.8rem', color: 'var(--text-sub)' }}>Functional Fitness Competitor</div>
                  </div>
                  <span className="card-tag" style={{ color: 'var(--rank-titan)', borderColor: 'var(--rank-titan)' }}>Titan Rank</span>
                </div>
              </div>

            </div>

          </div>
        </section>

        {/* SEO FAQ Section */}
        <FaqSection />

        {/* =====================================================
            5. FINAL CALL TO ACTION SECTION (Section 6 Requirement)
            ===================================================== */}
        <section className="cta-banner-section" style={{ padding: '6rem 0', background: 'linear-gradient(180deg, var(--bg-surface) 0%, var(--bg-canvas) 100%)', borderTop: '1px solid var(--border-subtle)' }}>
          <div className="container text-center">
            
            <div className="pill-badge" style={{ margin: '0 auto 1.5rem auto' }}>
              <Sparkles size={14} color="var(--primary)" />
              <span>Join 1,000+ Athletes Building True Strength</span>
            </div>

            <h2 className="section-title" style={{ fontSize: 'clamp(2.2rem, 5vw, 3.8rem)', marginBottom: '1.25rem' }}>
              Ready to train smarter?
            </h2>

            <p className="hero-subtext" style={{ maxWidth: '640px', margin: '0 auto 2.5rem auto' }}>
              Download TrueRep completely free. Count only valid reps with real-time on-device AI. 
              No subscription paywalls, no cloud uploads, and no cheated reps.
            </p>

            <div className="hero-cta-group" style={{ justifyContent: 'center' }}>
              <a 
                href="https://play.google.com/store/apps/details?id=com.truerep.app" 
                target="_blank" 
                rel="noopener noreferrer" 
                className="btn btn-primary btn-lg"
                title="Get TrueRep Free on Google Play"
              >
                <Download size={22} />
                <span>Get TrueRep on Google Play</span>
              </a>

              <Link 
                href="#download" 
                className="btn btn-secondary btn-lg"
                title="Download Universal Android APK file directly"
              >
                <span>Download Universal APK</span>
              </Link>
            </div>

            <div style={{ marginTop: '2rem', display: 'flex', justifyContent: 'center', gap: '1.5rem', flexWrap: 'wrap', fontSize: '0.88rem', color: 'var(--text-secondary)' }}>
              <Link href="/features" style={{ color: 'var(--text-secondary)' }} title="View all TrueRep features">
                Explore Features
              </Link>
              <span>·</span>
              <Link href="/blog" style={{ color: 'var(--text-secondary)' }} title="Read TrueRep AI Fitness Blog">
                Fitness &amp; AI Blog
              </Link>
              <span>·</span>
              <Link href="/privacy" style={{ color: 'var(--text-secondary)' }} title="View TrueRep Privacy Guarantee">
                Zero-Cloud Privacy Policy
              </Link>
            </div>

          </div>
        </section>

        {/* Download Hub */}
        <div id="download">
          <DownloadHub />
        </div>
      </main>

      <Footer />
    </>
  );
}
