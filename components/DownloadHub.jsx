'use client';

import React, { useState, useEffect } from 'react';
import { Download, ShieldCheck, Sparkles, CheckCircle2 } from 'lucide-react';

const GITHUB_OWNER = 'Aryann-gd';
const GITHUB_REPO = 'TrueRep';

const FALLBACK_UNIVERSAL_URL = `https://github.com/${GITHUB_OWNER}/${GITHUB_REPO}/releases/download/v1.0.0/TrueRep-universal-release.apk`;

export default function DownloadHub() {
  const [releaseTag, setReleaseTag] = useState('v1.0.0');
  const [universalSize, setUniversalSize] = useState('~68.4 MB');
  const [universalUrl, setUniversalUrl] = useState(FALLBACK_UNIVERSAL_URL);
  const [universalName, setUniversalName] = useState('TrueRep-universal-release.apk');
  const [toast, setToast] = useState({ visible: false, title: '', message: '' });

  useEffect(() => {
    async function fetchRelease() {
      try {
        // Query the sanitized internal release endpoint (strictly queries Aryann-gd/TrueRep repo)
        const res = await fetch('/api/releases/latest');
        if (!res.ok) return;
        const data = await res.json();
        
        if (data.tag_name) {
          setReleaseTag(data.tag_name);
        }

        if (Array.isArray(data.assets) && data.assets.length > 0) {
          // Find Universal APK
          const foundUniversal = data.assets.find(a => 
            a.name.toLowerCase().includes('universal') || 
            a.name.toLowerCase() === 'truerep-release.apk' ||
            a.name.toLowerCase() === 'app-release.apk' ||
            a.name.toLowerCase().endsWith('.apk')
          );

          if (foundUniversal) {
            setUniversalUrl(foundUniversal.browser_download_url);
            setUniversalName(foundUniversal.name);
            if (foundUniversal.size) {
              setUniversalSize((foundUniversal.size / (1024 * 1024)).toFixed(1) + ' MB');
            }
          }
        }
      } catch (e) {
        // Fallback silently to verified defaults
      }
    }

    fetchRelease();
  }, []);

  const triggerDownload = (url, name) => {
    // Defense-in-depth: Strict client-side rejection of any .aab request injected via DevTools
    if (!url || typeof url !== 'string' || url.toLowerCase().includes('.aab') || (name && name.toLowerCase().includes('.aab'))) {
      console.error('[Security Violation] Unauthorized attempt to download .aab file was blocked.');
      setToast({
        visible: true,
        title: 'Download Blocked',
        message: 'Security policy: .AAB bundle downloads are strictly disabled on this site.'
      });
      return;
    }

    setToast({
      visible: true,
      title: `Starting download: ${name}`,
      message: `Fetching latest release asset from ${GITHUB_OWNER}/${GITHUB_REPO} (${releaseTag})...`
    });

    setTimeout(() => {
      setToast(prev => ({ ...prev, visible: false }));
    }, 4500);

    const link = document.createElement('a');
    link.href = url;
    link.setAttribute('download', '');
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  return (
    <section className="download-section" id="download">
      <div className="container">
        
        <div className="download-hub-card">
          <span className="card-tag">Official Android Distribution</span>
          <h2 style={{ fontSize: 'clamp(2.2rem, 4vw, 3.2rem)', fontWeight: 900, marginBottom: '0.75rem' }}>
            Get TrueRep for Android
          </h2>
          <p style={{ fontSize: '1.05rem', color: 'var(--text-secondary)', maxWidth: '640px', margin: '0 auto' }}>
            Free, zero trackers, zero account required. Download the latest verified APK builds directly from the official{' '}
            <a 
              href={`https://github.com/${GITHUB_OWNER}/${GITHUB_REPO}/releases`} 
              target="_blank" 
              rel="noopener noreferrer" 
              style={{ color: 'var(--primary)', textDecoration: 'underline' }}
            >
              Aryann-gd/{GITHUB_REPO}
            </a>{' '}
            release hub.
          </p>

          {/* Single Universal APK Download Card */}
          <div className="apk-cards-grid" style={{ maxWidth: '540px', margin: '2.5rem auto' }}>
            <div className="apk-option-card featured" style={{ textAlign: 'center', alignItems: 'center' }}>
              <div style={{ width: '100%', marginBottom: '1.5rem' }}>
                <span className="apk-card-badge">RECOMMENDED · ALL ANDROID DEVICES</span>
                <h3 className="apk-option-title" style={{ fontSize: '1.6rem', marginTop: '0.4rem', marginBottom: '0.6rem' }}>
                  Universal APK
                </h3>
                <p className="apk-option-meta" style={{ maxWidth: '420px', margin: '0 auto', fontSize: '0.92rem' }}>
                  Compatible with 100% of Android phones, tablets, and emulators. Includes on-device AI computer vision kinematics form coaching.
                </p>
                <div style={{ display: 'flex', justifyContent: 'center', gap: '1.25rem', marginTop: '1rem', color: 'var(--text-secondary)', fontSize: '0.82rem' }}>
                  <span style={{ display: 'inline-flex', alignItems: 'center', gap: '0.3rem' }}>
                    <ShieldCheck size={16} color="var(--primary)" /> 100% Private
                  </span>
                  <span style={{ display: 'inline-flex', alignItems: 'center', gap: '0.3rem' }}>
                    <CheckCircle2 size={16} color="var(--accent-lime)" /> No Account Needed
                  </span>
                </div>
              </div>

              <button 
                className="btn btn-primary btn-lg" 
                onClick={() => triggerDownload(universalUrl, universalName)}
                style={{ width: '100%', padding: '1.1rem 1.75rem', fontSize: '1.05rem' }}
                id="universal-download-btn"
              >
                <Download size={22} />
                <span>Download Universal APK</span>
                <span style={{ opacity: 0.85, fontSize: '0.88em' }}>({universalSize})</span>
              </button>
            </div>
          </div>

          <p style={{ fontSize: '0.85rem', color: 'var(--text-sub)' }}>
            Release <strong style={{ color: 'var(--text-main)' }}>{releaseTag}</strong> · Source: <a href={`https://github.com/${GITHUB_OWNER}/${GITHUB_REPO}`} target="_blank" rel="noopener noreferrer" style={{ color: 'var(--primary)' }}>Aryann-gd/{GITHUB_REPO}</a> · Android 8.0 to 15+ · 100% On-Device AI
          </p>

          {/* Sideloading 3-Step Guide */}
          <div className="sideload-steps-grid">
            <div className="sideload-step">
              <div className="step-num">1</div>
              <div className="step-title">Download APK</div>
              <div className="step-desc">
                Tap the download button above to retrieve the latest signed APK file directly from TrueRep GitHub releases.
              </div>
            </div>
            <div className="sideload-step">
              <div className="step-num">2</div>
              <div className="step-title">Allow from Source</div>
              <div className="step-desc">
                When prompted by Android security, tap Settings and toggle &ldquo;Allow from this source&rdquo; for your browser.
              </div>
            </div>
            <div className="sideload-step">
              <div className="step-num">3</div>
              <div className="step-title">Open &amp; Train</div>
              <div className="step-desc">
                Prop your phone against a water bottle on the gym floor, step into frame, and experience live AI form coaching!
              </div>
            </div>
          </div>

        </div>

      </div>

      {/* Toast Notification */}
      <div className={`toast-modal ${toast.visible ? 'visible' : ''}`} id="download-toast">
        <div className="toast-content">
          <div className="toast-spinner"></div>
          <div>
            <h4 style={{ fontSize: '0.95rem', fontWeight: 800, color: '#FFF', marginBottom: '2px' }}>
              {toast.title}
            </h4>
            <p style={{ fontSize: '0.82rem', color: 'var(--text-secondary)' }}>
              {toast.message}
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
