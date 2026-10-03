'use client';

import React, { useState, useEffect } from 'react';
import { Download, CheckCircle, ExternalLink, Sparkles, Smartphone, Package } from 'lucide-react';

const GITHUB_OWNER = 'Aryann-gd';
const GITHUB_REPO = 'KINETX';

const FALLBACK_APK_URL = `https://github.com/${GITHUB_OWNER}/${GITHUB_REPO}/releases/download/latest-build/TrueRep-arm64-release.apk`;
const FALLBACK_AAB_URL = `https://github.com/${GITHUB_OWNER}/${GITHUB_REPO}/releases/download/latest-build/TrueRep-release.aab`;

export default function DownloadHub() {
  const [releaseTag, setReleaseTag] = useState('latest-build');
  const [apkSize, setApkSize] = useState('~64.6 MB');
  const [aabSize, setAabSize] = useState('~66.3 MB');
  const [apkUrl, setApkUrl] = useState(FALLBACK_APK_URL);
  const [aabUrl, setAabUrl] = useState(FALLBACK_AAB_URL);
  const [apkName, setApkName] = useState('TrueRep-arm64-release.apk');
  const [aabName, setAabName] = useState('TrueRep-release.aab');
  const [toast, setToast] = useState({ visible: false, title: '', message: '' });

  useEffect(() => {
    async function fetchRelease() {
      try {
        const res = await fetch(`https://api.github.com/repos/${GITHUB_OWNER}/${GITHUB_REPO}/releases/latest`);
        if (!res.ok) return;
        const data = await res.json();
        
        if (data.tag_name) {
          setReleaseTag(data.tag_name);
        }

        if (Array.isArray(data.assets) && data.assets.length > 0) {
          // Look for APK asset
          const foundApk = data.assets.find(a => a.name.toLowerCase().endsWith('.apk'));
          if (foundApk) {
            setApkUrl(foundApk.browser_download_url);
            setApkName(foundApk.name);
            setApkSize((foundApk.size / (1024 * 1024)).toFixed(1) + ' MB');
          }

          // Look for AAB asset
          const foundAab = data.assets.find(a => a.name.toLowerCase().endsWith('.aab'));
          if (foundAab) {
            setAabUrl(foundAab.browser_download_url);
            setAabName(foundAab.name);
            setAabSize((foundAab.size / (1024 * 1024)).toFixed(1) + ' MB');
          }
        }
      } catch (e) {
        // Fallback silently to defaults
      }
    }

    fetchRelease();
  }, []);

  const triggerDownload = (url, name) => {
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
            Free, zero trackers, zero account required. Download the latest verified builds directly from the official{' '}
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
                <h3 className="apk-option-title">Android APK</h3>
                <p className="apk-option-meta">
                  Ready-to-install package for Android smartphones and tablets with fast local AI processing.
                </p>
              </div>
              <button 
                className="btn btn-primary btn-lg" 
                onClick={() => triggerDownload(apkUrl, apkName)}
                style={{ width: '100%' }}
                id="universal-download-btn"
              >
                <Download size={20} />
                <span>Download Latest APK</span>
                <span style={{ opacity: 0.8, fontSize: '0.85em' }}>({apkSize})</span>
              </button>
            </div>

            {/* Android App Bundle Card */}
            <div className="apk-option-card">
              <div>
                <span className="apk-card-badge" style={{ background: 'var(--bg-surface-hover)', color: 'var(--text-main)' }}>
                  APP BUNDLE
                </span>
                <h3 className="apk-option-title">Android App Bundle</h3>
                <p className="apk-option-meta">
                  Official Android App Bundle package (.aab) generated for optimized device delivery.
                </p>
              </div>
              <button 
                className="btn btn-secondary btn-lg" 
                onClick={() => triggerDownload(aabUrl, aabName)}
                style={{ width: '100%' }}
                id="arm64-download-btn"
              >
                <Package size={20} />
                <span>Download .AAB Package</span>
                <span style={{ opacity: 0.8, fontSize: '0.85em' }}>({aabSize})</span>
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
                Tap the download button above to retrieve the latest signed APK file directly from the KINETX releases repository.
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
