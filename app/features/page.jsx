'use client';

import React from 'react';
import Link from 'next/link';
import Navbar from '../../components/Navbar';
import Footer from '../../components/Footer';
import DownloadHub from '../../components/DownloadHub';
import { 
  Activity, 
  CheckCircle2, 
  ShieldCheck, 
  Flame, 
  Award, 
  Droplet, 
  Utensils, 
  Smartphone, 
  Volume2, 
  Layers, 
  ArrowRight,
  Sparkles
} from 'lucide-react';

export default function FeaturesPage() {
  const featureList = [
    {
      icon: <Activity size={28} className="text-primary" />,
      title: 'AI Rep Counting with MediaPipe',
      tag: 'Kinematics',
      desc: 'Tracks 33 anatomical joint coordinates at 30+ frames per second. Counts only verified, full-depth repetitions and rejects partial or cheated attempts.',
      highlights: ['Full eccentric/concentric analysis', 'Squat parallel verification', 'Push-up chest-to-deck check', 'Zero double counting']
    },
    {
      icon: <Volume2 size={28} style={{ color: '#10B981' }} />,
      title: 'Real-Time Form Coaching',
      tag: 'Live Audio',
      desc: 'Immediate spoken voice and haptic feedback during sets. Flags knee valgus, lumbar arching, or improper cadence before you risk injury.',
      highlights: ['Sub-20ms audio cue response', 'Voice alerts for optimal depth', 'Correction cues for joint breakdown', 'Custom audio volume control']
    },
    {
      icon: <Award size={28} style={{ color: '#F59E0B' }} />,
      title: '9 Competitive Gym Ranks',
      tag: 'Gamification',
      desc: 'Climb 9 strength tiers from Wood to Olympian. Earn Rank Points (RP) based on verified rep quality, tempo precision, and weekly workout consistency.',
      highlights: ['Wood, Bronze, Silver, Gold tiers', 'Platinum, Diamond, Champion tiers', 'Elite Titan and Olympian crests', 'Dynamic unlockable badges']
    },
    {
      icon: <Flame size={28} style={{ color: '#EF4444' }} />,
      title: 'Streak Rewards & Habit XP',
      tag: 'Accountability',
      desc: 'Build unbreakable workout habits with streak tracking, XP levels, and milestone rewards. Includes rewarded streak repair for emergencies.',
      highlights: ['90-day habit transformation', 'Milestone badges & XP boosts', 'Forgiving rewarded streak repair', 'Zero spam notifications']
    },
    {
      icon: <Droplet size={28} style={{ color: '#38BDF8' }} />,
      title: 'Hydration & Water Tracking',
      tag: 'Wellness',
      desc: 'Built-in daily water intake tracking to optimize muscle recovery and cellular hydration during intense resistance training sessions.',
      highlights: ['Custom daily target based on weight', 'Quick-log water increments', 'Hydration streak reminders', 'Integrated recovery telemetry']
    },
    {
      icon: <Utensils size={28} style={{ color: '#A855F7' }} />,
      title: 'Offline Calorie & Macro Fueling',
      tag: 'Nutrition',
      desc: 'Bundled nutritional database containing staple fitness foods. Log protein, carbs, fats, and calories with zero network connection required.',
      highlights: ['Staple foods & macronutrients', 'Protein goal progress bar', '100% local database storage', 'Zero third-party tracking']
    },
    {
      icon: <ShieldCheck size={28} style={{ color: '#10B981' }} />,
      title: '100% On-Device & Zero Cloud Data',
      tag: 'Privacy First',
      desc: 'Camera frames are processed strictly in volatile phone memory and discarded immediately. No video is ever stored or transmitted to remote servers.',
      highlights: ['Zero video upload to any cloud', 'No user account required', 'Works in Airplane Mode', 'Open-source code on GitHub']
    },
    {
      icon: <Smartphone size={28} style={{ color: '#F43F5E' }} />,
      title: 'Universal Android Compatibility',
      tag: 'Open Access',
      desc: 'Engineered in Kotlin for high performance and low battery consumption across all modern Android devices from Android 8.0 to Android 15+.',
      highlights: ['Runs on budget & flagship chips', 'GPU and NPU acceleration', 'Low battery consumption', 'Free APK distribution']
    }
  ];

  return (
    <>
      <Navbar />

      <main>
        {/* Features Hero Section */}
        <section className="hex-spotlight hero-section" style={{ minHeight: 'auto', padding: '6rem 0 3.5rem 0' }}>
          <div className="container text-center">
            
            <div className="pill-badge" style={{ margin: '0 auto 1.5rem auto' }}>
              <span className="pill-dot"></span>
              <span>Intelligent Telemetry &amp; Habit Progression</span>
            </div>

            <h1 className="hero-title" style={{ fontSize: 'clamp(2.4rem, 5vw, 4rem)', marginBottom: '1.25rem' }}>
              TrueRep Features — <br />
              <span className="text-gradient-cyan">AI Workout Tracking &amp; Streak Rewards</span>
            </h1>

            <p className="hero-subtext" style={{ maxWidth: '750px', margin: '0 auto 2.5rem auto' }}>
              AI rep counting, form validation, workout plans, streak badges, and hydration tracking. 
              All processed 100% on-device with zero cloud uploads, zero subscriptions, and zero ads during workouts.
            </p>

            <div className="hero-cta-group" style={{ justifyContent: 'center' }}>
              <Link href="#download" className="btn btn-primary btn-lg" title="Download TrueRep Android APK">
                <span>Download TrueRep Free</span>
                <ArrowRight size={18} />
              </Link>
              <Link href="/blog" className="btn btn-secondary btn-lg" title="Read TrueRep Fitness and AI Guides">
                <span>Read AI Guides</span>
              </Link>
            </div>

          </div>
        </section>

        {/* Feature Cards Grid */}
        <section className="features-section" style={{ paddingTop: '3rem' }}>
          <div className="container">
            
            <div className="section-head text-center">
              <h2 className="section-title">Engineered for Athlete Precision</h2>
              <p className="section-subtitle" style={{ maxWidth: '680px', margin: '0 auto' }}>
                Every capability in TrueRep is built to deliver honest feedback, protect your personal privacy, and keep you training consistently.
              </p>
            </div>

            <div style={{
              display: 'grid',
              gridTemplateColumns: 'repeat(auto-fit, minmax(320px, 1fr))',
              gap: '1.5rem',
              marginTop: '3rem'
            }}>
              {featureList.map((item, idx) => (
                <article 
                  key={idx} 
                  className="bento-card" 
                  style={{ 
                    display: 'flex', 
                    flexDirection: 'column', 
                    justifyContent: 'space-between',
                    minHeight: '290px' 
                  }}
                >
                  <div>
                    <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', marginBottom: '1.25rem' }}>
                      <div style={{
                        width: '52px',
                        height: '52px',
                        borderRadius: 'var(--radius-md)',
                        background: 'rgba(255, 255, 255, 0.04)',
                        border: '1px solid var(--border-subtle)',
                        display: 'flex',
                        alignItems: 'center',
                        justifyContent: 'center'
                      }}>
                        {item.icon}
                      </div>
                      <span className="card-tag">{item.tag}</span>
                    </div>

                    <h3 style={{ fontSize: '1.35rem', fontWeight: 800, marginBottom: '0.75rem', color: 'var(--text-main)', fontFamily: 'var(--font-display)' }}>
                      {item.title}
                    </h3>

                    <p style={{ fontSize: '0.94rem', color: 'var(--text-secondary)', lineHeight: 1.6, marginBottom: '1.5rem' }}>
                      {item.desc}
                    </p>
                  </div>

                  <ul style={{ listStyle: 'none', padding: 0, margin: 0, borderTop: '1px solid var(--border-subtle)', paddingTop: '1rem', display: 'flex', flexDirection: 'column', gap: '0.5rem' }}>
                    {item.highlights.map((h, i) => (
                      <li key={i} style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', fontSize: '0.85rem', color: 'var(--text-secondary)' }}>
                        <CheckCircle2 size={15} style={{ color: 'var(--accent-lime)', flexShrink: 0 }} />
                        <span>{h}</span>
                      </li>
                    ))}
                  </ul>
                </article>
              ))}
            </div>

          </div>
        </section>

        {/* Comparison Callout */}
        <section style={{ padding: '5rem 0', borderTop: '1px solid var(--border-subtle)' }}>
          <div className="container">
            <div style={{
              background: 'linear-gradient(135deg, rgba(89, 185, 249, 0.08) 0%, rgba(16, 185, 129, 0.04) 100%)',
              border: '1px solid var(--border-active)',
              borderRadius: 'var(--radius-lg)',
              padding: 'clamp(2rem, 5vw, 3.5rem)',
              display: 'flex',
              flexDirection: 'column',
              gap: '1.5rem'
            }}>
              <span className="pill-badge" style={{ alignSelf: 'flex-start' }}>The TrueRep Guarantee</span>
              <h2 style={{ fontSize: 'clamp(1.8rem, 3.5vw, 2.6rem)', fontWeight: 800, fontFamily: 'var(--font-display)' }}>
                No Subscriptions. No Cloud Uploads. No Distractions.
              </h2>
              <p style={{ fontSize: '1.05rem', color: 'var(--text-secondary)', lineHeight: 1.7, maxWidth: '800px' }}>
                Unlike mainstream commercial workout apps that gate progress behind $20/month paywalls and transmit private gym video to remote servers, TrueRep is 100% free and open-source. Install the app, train with honest computer vision feedback, and climb all 9 ranks on merit alone.
              </p>
              <div style={{ display: 'flex', flexWrap: 'wrap', gap: '1rem', marginTop: '0.5rem' }}>
                <Link href="/privacy" className="btn btn-secondary" title="View TrueRep Privacy Guarantee">
                  <span>Read Privacy Guarantee</span>
                </Link>
                <Link href="/blog/how-ai-rep-counting-works" className="btn btn-secondary" title="Learn how AI rep counting works">
                  <span>How AI Rep Counting Works</span>
                </Link>
              </div>
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
