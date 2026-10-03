'use client';

import React, { useState, useEffect } from 'react';
import Link from 'next/link';
import { 
  ShieldCheck, 
  Search, 
  X, 
  Lock, 
  Camera, 
  Cpu, 
  HardDrive, 
  ArrowLeft, 
  Copy, 
  Check, 
  Info,
  ExternalLink
} from 'lucide-react';
import Navbar from '../../components/Navbar';
import Footer from '../../components/Footer';

function InstagramIcon({ size = 20, color = "#E1306C" }) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke={color} strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <rect x="2" y="2" width="20" height="20" rx="5" ry="5"></rect>
      <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"></path>
      <line x1="17.5" y1="6.5" x2="17.51" y2="6.5"></line>
    </svg>
  );
}

const SECTIONS = [
  { id: 'sec-overview', num: '01', title: 'Overview & Core Philosophy', label: 'Overview' },
  { id: 'sec-no-accounts', num: '02', title: 'No User Accounts & No Identity Collection', label: 'No Accounts' },
  { id: 'sec-camera-ai', num: '03', title: 'Camera Data & On-Device Processing', label: 'Camera AI' },
  { id: 'sec-nutrition', num: '04', title: 'Offline Nutrition & Fuel Tracking', label: 'Offline Nutrition' },
  { id: 'sec-health', num: '05', title: 'Health Connect Integration (Android)', label: 'Health Connect' },
  { id: 'sec-advertising', num: '06', title: 'Third-Party Advertising (Google AdMob)', label: 'Ad Delivery' },
  { id: 'sec-permissions', num: '07', title: 'Device Permissions Matrix', label: 'Permissions' },
  { id: 'sec-storage', num: '08', title: 'Local Storage & Data Retention', label: 'Local Storage' },
  { id: 'sec-audio', num: '09', title: 'Audio, Music Playback & Voice Coaching', label: 'Voice Coach' },
  { id: 'sec-children', num: '10', title: "Children's Privacy (COPPA & GDPR)", label: 'Children' },
  { id: 'sec-rights', num: '11', title: 'Your Data Rights & Total Deletion', label: 'Data Deletion' },
  { id: 'sec-licenses', num: '12', title: 'Open-Source Licenses & Attributions', label: 'Licenses' },
  { id: 'sec-contact', num: '13', title: 'Contact Information & Support', label: 'Contact' },
];

export default function PrivacyPolicyPage() {
  const [scrollProgress, setScrollProgress] = useState(0);
  const [searchQuery, setSearchQuery] = useState('');
  const [copiedEmail, setCopiedEmail] = useState(false);

  // Scroll reading progress listener
  useEffect(() => {
    const handleScroll = () => {
      const totalHeight = document.documentElement.scrollHeight - document.documentElement.clientHeight;
      if (totalHeight > 0) {
        const currentProgress = (window.scrollY / totalHeight) * 100;
        setScrollProgress(currentProgress);
      }
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleCopyEmail = () => {
    navigator.clipboard.writeText('support@truerep.com');
    setCopiedEmail(true);
    setTimeout(() => setCopiedEmail(false), 3000);
  };

  const query = searchQuery.toLowerCase().trim();

  // Helper to determine if a section matches query
  const matchesSearch = (text) => {
    if (!query) return true;
    return text.toLowerCase().includes(query);
  };

  return (
    <>
      {/* Top Reading Progress Bar */}
      <div 
        className="reading-progress-bar" 
        style={{ width: `${scrollProgress}%` }}
        aria-hidden="true"
      />

      <Navbar />

      <main className="privacy-page-wrapper">
        <div className="container">
          
          {/* Back to Home Breadcrumb */}
          <div style={{ marginBottom: '1.5rem' }}>
            <Link 
              href="/" 
              style={{
                display: 'inline-flex',
                alignItems: 'center',
                gap: '0.4rem',
                color: 'var(--text-secondary)',
                textDecoration: 'none',
                fontSize: '0.88rem',
                fontWeight: 600,
                transition: 'color var(--transition-fast)'
              }}
              onMouseEnter={(e) => e.currentTarget.style.color = 'var(--primary)'}
              onMouseLeave={(e) => e.currentTarget.style.color = 'var(--text-secondary)'}
            >
              <ArrowLeft size={16} />
              <span>Back to TrueRep Home</span>
            </Link>
          </div>

          {/* Privacy Hero Header */}
          <section className="privacy-hero">
            <div className="privacy-meta-pills">
              <span className="version-pill">Version 1.0 · Updated September 2026</span>
              <span className="compliance-pill">Google Play Store Compliant</span>
            </div>

            <h1 className="hero-title" style={{ fontSize: 'clamp(2.2rem, 5vw, 3.8rem)', marginBottom: '1.25rem' }}>
              Your Workouts. Your Form.<br />
              <span className="text-gradient-cyan">Your Complete Privacy.</span>
            </h1>

            <p className="hero-subtext" style={{ maxWidth: '720px', marginBottom: '2rem' }}>
              TrueRep is an offline-first fitness application engineered with a strict privacy-first architecture: your exercise movements, camera feeds, workout logs, and nutrition records are strictly yours and stay on your device.
            </p>

            {/* Interactive Clause Search Box */}
            <div className="privacy-search-container">
              <div className="privacy-search-box">
                <Search size={18} color="var(--primary)" />
                <input 
                  type="text" 
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  placeholder="Search clauses (e.g. camera, alarms, health, delete)..." 
                  className="privacy-search-input"
                  aria-label="Search Privacy Policy clauses"
                />
                {searchQuery && (
                  <button 
                    onClick={() => setSearchQuery('')} 
                    className="privacy-clear-btn"
                    aria-label="Clear search"
                  >
                    <X size={18} />
                  </button>
                )}
              </div>
              {searchQuery && (
                <div className="privacy-search-count">
                  Filtering clauses matching &ldquo;{searchQuery}&rdquo;
                </div>
              )}
            </div>

            {/* 4 Pillars Stats Grid */}
            <div className="pillars-grid">
              <div className="pillar-card">
                <div className="pillar-icon-box">
                  <Lock size={22} />
                </div>
                <div className="pillar-value">0</div>
                <div className="pillar-label">User Accounts Required</div>
                <p className="pillar-desc">No email, phone number, password, or profile registration needed to train.</p>
              </div>

              <div className="pillar-card">
                <div className="pillar-icon-box" style={{ background: 'rgba(16, 185, 129, 0.12)', color: 'var(--accent-lime)' }}>
                  <Camera size={22} />
                </div>
                <div className="pillar-value" style={{ color: 'var(--accent-lime)' }}>0</div>
                <div className="pillar-label" style={{ color: 'var(--accent-lime)' }}>Cloud Video Uploads</div>
                <p className="pillar-desc">Camera frames are evaluated in temporary memory by AI and immediately discarded.</p>
              </div>

              <div className="pillar-card">
                <div className="pillar-icon-box">
                  <Cpu size={22} />
                </div>
                <div className="pillar-value">100%</div>
                <div className="pillar-label">On-Device Edge AI</div>
                <p className="pillar-desc">AI motion and form detection runs purely on your local phone hardware.</p>
              </div>

              <div className="pillar-card">
                <div className="pillar-icon-box" style={{ background: 'rgba(168, 85, 247, 0.12)', color: '#C084FC' }}>
                  <HardDrive size={22} />
                </div>
                <div className="pillar-value" style={{ color: '#C084FC' }}>Local</div>
                <div className="pillar-label" style={{ color: '#C084FC' }}>Device Storage Only</div>
                <p className="pillar-desc">Workouts, streaks, ranks, and calories stay safely in your private phone storage.</p>
              </div>
            </div>

            {/* Quick Table of Contents Jump Pills */}
            <div className="policy-toc">
              {SECTIONS.map((sec) => (
                <a key={sec.id} href={`#${sec.id}`} className="toc-pill">
                  {sec.num}. {sec.label}
                </a>
              ))}
            </div>
          </section>

          {/* 13 Policy Clauses */}
          <article>

            {/* Section 01 */}
            {(matchesSearch('Overview & Core Philosophy') || matchesSearch('philosophy') || matchesSearch('vision')) && (
              <section id="sec-overview" className="policy-section">
                <div className="policy-section-header">
                  <span className="policy-section-number">01</span>
                  <h2 className="policy-section-title">Overview &amp; Core Philosophy</h2>
                </div>
                <p>
                  TrueRep was founded on a simple principle: <strong>your biometric workout data belongs exclusively to you</strong>. Unlike traditional fitness apps that mandate cloud accounts and upload workout videos to remote corporate servers, TrueRep operates as an offline-first, on-device AI system.
                </p>
                <p>
                  Every machine learning model, rep detector, and form analyzer executes entirely on your device. We do not operate tracking servers, video storage clusters, or user profiling algorithms.
                </p>
              </section>
            )}

            {/* Section 02 */}
            {(matchesSearch('No User Accounts') || matchesSearch('accounts') || matchesSearch('identity') || matchesSearch('login')) && (
              <section id="sec-no-accounts" className="policy-section">
                <div className="policy-section-header">
                  <span className="policy-section-number">02</span>
                  <h2 className="policy-section-title">No User Accounts &amp; No Identity Collection</h2>
                </div>
                <p>
                  TrueRep does not require, solicit, or support personal account creation:
                </p>
                <ul>
                  <li><strong>Zero Registration:</strong> You never provide your legal name, email address, phone number, physical address, or social login credentials.</li>
                  <li><strong>No Server Database:</strong> TrueRep maintains no cloud database of users, passwords, or personal credentials.</li>
                  <li><strong>Immediate Availability:</strong> You can launch workouts immediately after installation without completing authentication dialogs or email verification.</li>
                </ul>
              </section>
            )}

            {/* Section 03 */}
            {(matchesSearch('Camera Data') || matchesSearch('camera') || matchesSearch('ai') || matchesSearch('video')) && (
              <section id="sec-camera-ai" className="policy-section">
                <div className="policy-section-header">
                  <span className="policy-section-number">03</span>
                  <h2 className="policy-section-title">Camera Data &amp; On-Device Processing</h2>
                </div>
                <p>
                  TrueRep requests access to your device camera exclusively for real-time fitness functionality:
                </p>

                <div className="feature-card-grid">
                  <div className="feature-card">
                    <h3 className="feature-title">
                      <span className="feature-dot"></span>
                      Exercise Form Tracking Only
                    </h3>
                    <p>The camera is <strong>ONLY</strong> used for on-device exercise form tracking, real-time repetition counting, and posture feedback during live workouts. The camera is <strong>NEVER</strong> used for food or meal scanning.</p>
                  </div>

                  <div className="feature-card">
                    <h3 className="feature-title">
                      <span className="feature-dot"></span>
                      Temporary Device Memory Only
                    </h3>
                    <p>Visual frames from the camera stream directly into on-device AI running in temporary memory. As soon as body movement is computed, the raw camera frame is instantly discarded.</p>
                  </div>

                  <div className="feature-card">
                    <h3 className="feature-title">
                      <span className="feature-dot"></span>
                      Never Recorded or Transmitted
                    </h3>
                    <p>TrueRep never saves photos or videos to permanent disk storage, nor does it upload camera frames to any remote server or cloud infrastructure.</p>
                  </div>

                  <div className="feature-card">
                    <h3 className="feature-title">
                      <span className="feature-dot"></span>
                      Camera is Strictly Optional
                    </h3>
                    <p>You can decline camera permission and still navigate the entire application, log workouts manually, track hydration, and browse nutrition data.</p>
                  </div>
                </div>
              </section>
            )}

            {/* Section 04 */}
            {(matchesSearch('Nutrition') || matchesSearch('food') || matchesSearch('calorie') || matchesSearch('meal')) && (
              <section id="sec-nutrition" className="policy-section">
                <div className="policy-section-header">
                  <span className="policy-section-number">04</span>
                  <h2 className="policy-section-title">Offline Nutrition &amp; Fuel Tracking</h2>
                </div>
                <p>
                  TrueRep includes a comprehensive nutrition tracker designed to function <strong>completely offline</strong> without transmitting meal information across the internet:
                </p>
                <ul>
                  <li><strong>Built-in Offline Food Database:</strong> TrueRep features a bundled offline catalog of staple foods with macronutrients (calories, protein, carbohydrates, fats) stored locally in the app.</li>
                  <li><strong>No Camera Dish Scanning:</strong> TrueRep does not photograph, scan, or analyze food dishes with the camera.</li>
                  <li><strong>Zero Remote Nutrition Queries:</strong> TrueRep does not send queries to third-party food databases. All logging and calculation occur offline.</li>
                  <li><strong>Private Meal Logs:</strong> Your daily meal entries, calorie totals, and water logs remain stored exclusively on your device.</li>
                </ul>
              </section>
            )}

            {/* Section 05 */}
            {(matchesSearch('Health Connect') || matchesSearch('health') || matchesSearch('steps') || matchesSearch('weight')) && (
              <section id="sec-health" className="policy-section">
                <div className="policy-section-header">
                  <span className="policy-section-number">05</span>
                  <h2 className="policy-section-title">Health Connect Integration (Android)</h2>
                </div>
                <p>
                  With your explicit consent, TrueRep integrates with Android&apos;s <strong>Health Connect</strong> platform to synchronize specific physical activity data:
                </p>

                <div className="table-responsive">
                  <table className="data-table">
                    <thead>
                      <tr>
                        <th>Data Type</th>
                        <th>Access Level</th>
                        <th>Purpose</th>
                        <th>Cloud Sharing</th>
                      </tr>
                    </thead>
                    <tbody>
                      <tr>
                        <td><strong>Steps (<code>READ_STEPS</code>)</strong></td>
                        <td>Read-Only</td>
                        <td>Display daily step counts and 7-day activity patterns</td>
                        <td><span className="badge-success">NEVER</span></td>
                      </tr>
                      <tr>
                        <td><strong>Workouts (<code>WRITE_EXERCISE</code>)</strong></td>
                        <td>Write-Only</td>
                        <td>Log completed TrueRep workouts (duration &amp; calories)</td>
                        <td><span className="badge-success">NEVER</span></td>
                      </tr>
                      <tr>
                        <td><strong>Body Weight (<code>READ/WRITE_WEIGHT</code>)</strong></td>
                        <td>Read &amp; Write</td>
                        <td>Synchronize optional weight entries for progress tracking</td>
                        <td><span className="badge-success">NEVER</span></td>
                      </tr>
                    </tbody>
                  </table>
                </div>

                <div className="callout callout-info">
                  <div className="callout-icon">
                    <Info size={22} />
                  </div>
                  <div>
                    <strong>Health Connect Policy:</strong> Health data is stored strictly in Android&apos;s secure Health Connect repository on your device. It is <strong>NEVER</strong> shared with, transmitted to, or used by advertising networks, analytics platforms, or external servers.
                  </div>
                </div>
              </section>
            )}

            {/* Section 06 */}
            {(matchesSearch('Advertising') || matchesSearch('admob') || matchesSearch('ads') || matchesSearch('consent') || matchesSearch('gdpr')) && (
              <section id="sec-advertising" className="policy-section">
                <div className="policy-section-header">
                  <span className="policy-section-number">06</span>
                  <h2 className="policy-section-title">Third-Party Advertising (Google AdMob)</h2>
                </div>
                <p>
                  To support ongoing development while keeping TrueRep completely free, TrueRep displays non-intrusive advertisements served by <strong>Google AdMob</strong>.
                </p>
                <ul>
                  <li><strong>Strict Health Data Isolation:</strong> TrueRep enforces a strict policy separation: <strong>NO</strong> workout, biometric, health, calorie, or posture data is ever shared with or accessible by Google AdMob or any ad network.</li>
                  <li><strong>Ad-Free Zones:</strong> Advertisements are strictly prohibited and blocked on live workout screens, rest intervals, exercise calibration, and camera capture views.</li>
                  <li><strong>User Consent &amp; Privacy Choices (GDPR):</strong> You can review, modify, or revoke your advertising consent choices at any time in <em>Settings &rarr; Privacy &amp; Permissions &rarr; Privacy Choices</em>.</li>
                </ul>
              </section>
            )}

            {/* Section 07 */}
            {(matchesSearch('Permissions') || matchesSearch('permission') || matchesSearch('alarm') || matchesSearch('internet') || matchesSearch('notification')) && (
              <section id="sec-permissions" className="policy-section">
                <div className="policy-section-header">
                  <span className="policy-section-number">07</span>
                  <h2 className="policy-section-title">Device Permissions Matrix</h2>
                </div>
                <p>
                  TrueRep requires specific device permissions solely to deliver core fitness functionality. Every permission request is preceded by an in-app plain-language prominent disclosure:
                </p>

                <div className="perm-list">
                  <div className="perm-row">
                    <div className="perm-header">
                      <span className="perm-badge">android.permission.CAMERA</span>
                      <span className="perm-tag tag-optional">Optional</span>
                    </div>
                    <p style={{ fontSize: '0.9rem', marginBottom: '0.25rem' }}>
                      <strong>Usage:</strong> Real-time exercise repetition counting, joint angle tracking, and posture coaching during live workouts. Never used for meal scanning.
                    </p>
                    <p style={{ fontSize: '0.85rem', color: 'var(--accent-lime)' }}>
                      <strong>Protection:</strong> Evaluated strictly in temporary device memory by AI; zero permanent storage or network transmission.
                    </p>
                  </div>

                  <div className="perm-row">
                    <div className="perm-header">
                      <span className="perm-badge">android.permission.POST_NOTIFICATIONS</span>
                      <span className="perm-tag tag-optional">Optional (Android 13+)</span>
                    </div>
                    <p style={{ fontSize: '0.9rem', marginBottom: '0.25rem' }}>
                      <strong>Usage:</strong> Rest timer completion alerts, daily workout reminders, and hydration notifications.
                    </p>
                    <p style={{ fontSize: '0.85rem', color: 'var(--accent-lime)' }}>
                      <strong>Protection:</strong> Scheduled and triggered locally on your phone; no remote push tokens or analytics servers.
                    </p>
                  </div>

                  <div className="perm-row">
                    <div className="perm-header">
                      <span className="perm-badge">android.permission.SCHEDULE_EXACT_ALARM</span>
                      <span className="perm-tag tag-optional">Optional (Android 12+)</span>
                    </div>
                    <p style={{ fontSize: '0.9rem', marginBottom: '0.25rem' }}>
                      <strong>Usage:</strong> Precision rest interval timers between sets and user-configured alerts.
                    </p>
                    <p style={{ fontSize: '0.85rem', color: 'var(--accent-lime)' }}>
                      <strong>Protection:</strong> Operates entirely through local device timers on your phone.
                    </p>
                  </div>

                  <div className="perm-row">
                    <div className="perm-header">
                      <span className="perm-badge">android.permission.INTERNET</span>
                      <span className="perm-tag tag-required">Ad Delivery</span>
                    </div>
                    <p style={{ fontSize: '0.9rem', marginBottom: '0.25rem' }}>
                      <strong>Usage:</strong> Loading advertisements and verifying developer app releases.
                    </p>
                    <p style={{ fontSize: '0.85rem', color: 'var(--accent-lime)' }}>
                      <strong>Protection:</strong> No private workout or health data ever traverses this connection.
                    </p>
                  </div>
                </div>
              </section>
            )}

            {/* Section 08 */}
            {(matchesSearch('Storage') || matchesSearch('retention') || matchesSearch('database') || matchesSearch('local')) && (
              <section id="sec-storage" className="policy-section">
                <div className="policy-section-header">
                  <span className="policy-section-number">08</span>
                  <h2 className="policy-section-title">Local Storage &amp; Data Retention</h2>
                </div>
                <p>
                  All your workout records and fitness statistics reside inside your device&apos;s sandboxed local application storage:
                </p>
                <ul>
                  <li><strong>Workout Logs &amp; Rep History:</strong> Maintained securely in private local device storage.</li>
                  <li><strong>Streaks &amp; Ranks:</strong> Computed locally on qualified workout days and persisted on-device.</li>
                  <li><strong>Retention Duration:</strong> Data remains stored until you choose to reset app data or uninstall the application.</li>
                </ul>
              </section>
            )}

            {/* Section 09 */}
            {(matchesSearch('Audio') || matchesSearch('voice') || matchesSearch('music') || matchesSearch('ducking') || matchesSearch('coach')) && (
              <section id="sec-audio" className="policy-section">
                <div className="policy-section-header">
                  <span className="policy-section-number">09</span>
                  <h2 className="policy-section-title">Audio, Music Playback &amp; Voice Coaching</h2>
                </div>
                <p>
                  TrueRep incorporates audio features to elevate your workout experience:
                </p>
                <ul>
                  <li><strong>Offline Music Playback:</strong> TrueRep plays local audio files with automatic ducking: music volume smoothly lowers when the AI voice coach speaks and restores when speech finishes.</li>
                  <li><strong>On-Device Voice Coach:</strong> Audio coaching cues (e.g. &ldquo;Rep counted&rdquo;, &ldquo;Optimal depth hit&rdquo;, &ldquo;Full extension&rdquo;) are spoken directly by the on-device AI voice coach. No microphone or voice recording occurs.</li>
                </ul>
              </section>
            )}

            {/* Section 10 */}
            {(matchesSearch('Children') || matchesSearch('coppa') || matchesSearch('age') || matchesSearch('under')) && (
              <section id="sec-children" className="policy-section">
                <div className="policy-section-header">
                  <span className="policy-section-number">10</span>
                  <h2 className="policy-section-title">Children&apos;s Privacy (COPPA &amp; GDPR)</h2>
                </div>
                <p>
                  TrueRep is not directed toward children under the age of 13 (or under 16 in certain jurisdictions). Because TrueRep does not collect personal names, emails, phone numbers, or account credentials, we do not maintain a registry of child users.
                </p>
                <p>
                  If a parent or guardian discovers that a child has installed the app, they can delete all local data by uninstalling the application or clearing storage in device settings.
                </p>
              </section>
            )}

            {/* Section 11 */}
            {(matchesSearch('Rights') || matchesSearch('deletion') || matchesSearch('delete') || matchesSearch('erase') || matchesSearch('ccpa')) && (
              <section id="sec-rights" className="policy-section">
                <div className="policy-section-header">
                  <span className="policy-section-number">11</span>
                  <h2 className="policy-section-title">Your Data Rights &amp; Total Deletion</h2>
                </div>
                <p>
                  Under regulations such as <strong>GDPR</strong> and <strong>CCPA</strong>, you possess the absolute right to access and permanently delete your data:
                </p>

                <div className="steps-card">
                  <h3 style={{ fontSize: '1.15rem', fontWeight: 800, marginBottom: '0.5rem' }}>Methods to Completely Erase Your Data</h3>
                  <div className="steps-flow">
                    <div className="step-item">
                      <span className="step-badge">Method 1</span>
                      <h4>Via TrueRep History</h4>
                      <p style={{ fontSize: '0.85rem', color: 'var(--text-secondary)' }}>
                        Delete individual workouts or entries directly from the History tab with a single tap.
                      </p>
                    </div>

                    <div className="step-item">
                      <span className="step-badge">Method 2</span>
                      <h4>Via Android App Settings</h4>
                      <p style={{ fontSize: '0.85rem', color: 'var(--text-secondary)' }}>
                        Go to <em>Settings &rarr; Apps &rarr; TrueRep &rarr; Storage &amp; Cache &rarr; Clear Storage</em> to wipe all records instantly.
                      </p>
                    </div>

                    <div className="step-item">
                      <span className="step-badge">Method 3</span>
                      <h4>Uninstall Application</h4>
                      <p style={{ fontSize: '0.85rem', color: 'var(--text-secondary)' }}>
                        Uninstalling TrueRep triggers Android to permanently destroy the application sandbox and all local data.
                      </p>
                    </div>
                  </div>
                </div>
              </section>
            )}

            {/* Section 12 */}
            {(matchesSearch('Licenses') || matchesSearch('open-source') || matchesSearch('apache') || matchesSearch('bsd')) && (
              <section id="sec-licenses" className="policy-section">
                <div className="policy-section-header">
                  <span className="policy-section-number">12</span>
                  <h2 className="policy-section-title">Open-Source Licenses &amp; Attributions</h2>
                </div>
                <p>
                  TrueRep incorporates the following open-source software components:
                </p>
                <ul>
                  <li><strong>Core Application Engine:</strong> BSD 3-Clause License.</li>
                  <li><strong>On-Device AI Vision System:</strong> Apache License 2.0.</li>
                  <li><strong>Mobile Advertising Components:</strong> Apache License 2.0.</li>
                  <li><strong>Typography:</strong> Google Fonts under SIL Open Font License 1.1.</li>
                </ul>
              </section>
            )}

            {/* Section 13 */}
            {(matchesSearch('Contact') || matchesSearch('support') || matchesSearch('email')) && (
              <section id="sec-contact" className="policy-section">
                <div className="policy-section-header">
                  <span className="policy-section-number">13</span>
                  <h2 className="policy-section-title">Contact Information &amp; Support</h2>
                </div>
                <p>
                  If you have questions, feedback, or requests regarding this Privacy Policy or TrueRep&apos;s privacy practices, please contact us:
                </p>

                <div className="contact-card">
                  <div className="contact-info">
                    <div className="contact-icon">
                      <ShieldCheck size={24} />
                    </div>
                    <div>
                      <span className="contact-label">Official Developer Email</span>
                      <span className="contact-email">support@truerep.com</span>
                    </div>
                  </div>

                  <button 
                    onClick={handleCopyEmail} 
                    className="btn btn-primary"
                    aria-label="Copy support email address"
                  >
                    {copiedEmail ? <Check size={18} /> : <Copy size={18} />}
                    <span>{copiedEmail ? 'Copied to Clipboard!' : 'Copy Email'}</span>
                  </button>
                </div>

                <div className="contact-card" style={{ marginTop: '1rem', borderColor: 'rgba(225, 48, 108, 0.4)' }}>
                  <div className="contact-info">
                    <div className="contact-icon" style={{ background: 'rgba(225, 48, 108, 0.12)', color: '#E1306C' }}>
                      <InstagramIcon size={24} />
                    </div>
                    <div>
                      <span className="contact-label">Official Instagram</span>
                      <span className="contact-email">@truerep.official</span>
                    </div>
                  </div>

                  <a 
                    href="https://instagram.com/truerep.official" 
                    target="_blank" 
                    rel="noopener noreferrer" 
                    className="btn btn-secondary"
                    aria-label="Open TrueRep Instagram"
                  >
                    <ExternalLink size={18} />
                    <span>Follow @truerep.official</span>
                  </a>
                </div>
              </section>
            )}

          </article>

        </div>
      </main>

      <Footer />
    </>
  );
}
