'use client';

import React, { useState, useEffect } from 'react';
import { Download, CheckCircle, ExternalLink, Sparkles, Smartphone, ShieldCheck } from 'lucide-react';

const GITHUB_OWNER = 'Aryann-gd';
const GITHUB_REPO = 'KINETX';

const FALLBACK_UNIVERSAL_URL = `https://github.com/${GITHUB_OWNER}/${GITHUB_REPO}/releases/download/latest-build/TrueRep-universal-release.apk`;
const FALLBACK_ARM64_URL = `https://github.com/${GITHUB_OWNER}/${GITHUB_REPO}/releases/download/latest-build/TrueRep-arm64-release.apk`;

export default function DownloadHub() {
  const [releaseTag, setReleaseTag] = useState('latest-build');
  const [universalSize, setUniversalSize] = useState('~68.4 MB');
  const [arm64Size, setArm64Size] = useState('~64.6 MB');
  const [universalUrl, setUniversalUrl] = useState(FALLBACK_UNIVERSAL_URL);
  const [arm64Url, setArm64Url] = useState(FALLBACK_ARM64_URL);
  const [universalName, setUniversalName] = useState('TrueRep-universal-release.apk');
  const [arm64Name, setArm64Name] = useState('TrueRep-arm64-release.apk');
  const [toast, setToast] = useState({ visible: false, title: '', message: '' });

  useEffect(() => {
    async function fetchRelease() {
      try {
        // Query the sanitized internal release endpoint (purged of any .aab files)
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
            a.name.toLowerCase() === 'app-release.apk'
          );

          if (foundUniversal) {
            setUniversalUrl(foundUniversal.browser_download_url);
            setUniversalName(foundUniversal.name);
            setUniversalSize((foundUniversal.size / (1024 * 1024)).toFixed(1) + ' MB');
          }

          // Find ARM64 APK
          const foundArm64 = data.assets.find(a => a.name.toLowerCase().includes('arm64'));
          if (foundArm64) {
            setArm64Url(foundArm64.browser_download_url);
            setArm64Name(foundArm64.name);
            setArm64Size((foundArm64.size / (1024 * 1024)).toFixed(1) + ' MB');
            if (!foundUniversal) {
              setUniversalUrl(foundArm64.browser_download_url);
              setUniversalName(foundArm64.name);
              setUniversalSize((foundArm64.size / (1024 * 1024)).toFixed(1) + ' MB');
            }
          } else if (foundUniversal && !foundArm64) {
            setArm64Url(foundUniversal.browser_download_url);
            setArm64Name(foundUniversal.name);
            setArm64Size((foundUniversal.size / (1024 * 1024)).toFixed(1) + ' MB');
          }
        }
      } catch (e) {
        // Fallback silently to defaults
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
      message: `Fetching release asset from ${GITHUB_OWNER}/${GITHUB_REPO} (${releaseTag})...`
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

          {/* Dynamic APK Cards Grid */}
          <div className="apk-cards-grid">
            
            {/* Direct APK Card (Featured) */}
            <div className="apk-option-card featured">
              <div>
                <span className="apk-card-badge">RECOMMENDED · DIRECT INSTALL</span>
                <h3 className="apk-option-title">Universal APK</h3>
                <p className="apk-option-meta">
                  Ready-to-install package for Android smartphones and tablets with fast local AI processing.
                </p>
              </div>
              <button 
                className="btn btn-primary btn-lg" 
                onClick={() => triggerDownload(universalUrl, universalName)}
                style={{ width: '100%' }}
                id="universal-download-btn"
              >
                <Download size={20} />
                <span>Download Universal APK</span>
                <span style={{ opacity: 0.8, fontSize: '0.85em' }}>({universalSize})</span>
              </button>
            </div>

            {/* ARM64 Optimized Card */}
            <div className="apk-option-card">
              <div>
                <span className="apk-card-badge" style={{ background: 'var(--bg-surface-hover)', color: 'var(--text-main)' }}>
                  OPTIMIZED · 64-BIT
                </span>
                <h3 className="apk-option-title">ARM64 APK</h3>
                <p className="apk-option-meta">
                  Streamlined payload engineered specifically for modern 64-bit Android smartphones.
                </p>
              </div>
              <button 
                className="btn btn-secondary btn-lg" 
                onClick={() => triggerDownload(arm64Url, arm64Name)}
                style={{ width: '100%' }}
                id="arm64-download-btn"
              >
                <Smartphone size={20} />
                <span>Download ARM64 APK</span>
                <span style={{ opacity: 0.8, fontSize: '0.85em' }}>({arm64Size})</span>
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
                Tap either download button above to retrieve the latest signed APK file directly from verified release builds.
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
