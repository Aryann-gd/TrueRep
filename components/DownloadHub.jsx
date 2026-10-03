'use client';

import React, { useState, useEffect } from 'react';
import { Download, CheckCircle, ExternalLink, Sparkles, Smartphone } from 'lucide-react';

const GITHUB_OWNER = 'Aryann-gd';
const GITHUB_REPO = 'TrueRep';

const FALLBACK_UNIVERSAL_URL = `https://github.com/${GITHUB_OWNER}/${GITHUB_REPO}/releases/latest/download/TrueRep-universal-release.apk`;
const FALLBACK_ARM64_URL = `https://github.com/${GITHUB_OWNER}/${GITHUB_REPO}/releases/latest/download/TrueRep-arm64-release.apk`;

export default function DownloadHub() {
  const [releaseTag, setReleaseTag] = useState('v1.0.0');
  const [releaseSize, setReleaseSize] = useState('~63 MB');
  const [universalUrl, setUniversalUrl] = useState(FALLBACK_UNIVERSAL_URL);
  const [arm64Url, setArm64Url] = useState(FALLBACK_ARM64_URL);
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
          const universalAsset = data.assets.find(a => 
            a.name.toLowerCase().includes('universal') || 
            a.name === 'TrueRep-release.apk' || 
            a.name === 'app-release.apk'
          );

          if (universalAsset) {
            setUniversalUrl(universalAsset.browser_download_url);
            setReleaseSize((universalAsset.size / (1024 * 1024)).toFixed(1) + ' MB');
          }

          const arm64Asset = data.assets.find(a => a.name.toLowerCase().includes('arm64'));
          if (arm64Asset) {
            setArm64Url(arm64Asset.browser_download_url);
            if (!universalAsset) {
              setUniversalUrl(arm64Asset.browser_download_url);
              setReleaseSize((arm64Asset.size / (1024 * 1024)).toFixed(1) + ' MB');
            }
          } else if (universalAsset && !arm64Asset) {
            setArm64Url(universalAsset.browser_download_url);
          }
        }
      } catch (e) {
        // Fallback silently
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
            Free, zero trackers, zero account required. Download the verified APK directly from the official{' '}
            <a 
              href={`https://github.com/${GITHUB_OWNER}/${GITHUB_REPO}`} 
              target="_blank" 
              rel="noopener noreferrer" 
              style={{ color: 'var(--primary)', textDecoration: 'underline' }}
            >
              Aryann-gd/TrueRep
            </a>{' '}
            release section.
          </p>

          {/* Dynamic APK Cards Grid */}
          <div className="apk-cards-grid">
            
            {/* Universal APK Card (Featured) */}
            <div className="apk-option-card featured">
              <div>
                <span className="apk-card-badge">RECOMMENDED · ALL DEVICES</span>
                <h3 className="apk-option-title">Universal APK</h3>
                <p className="apk-option-meta">
                  Works on all Android phones and tablets with fast on-device AI processing.
                </p>
              </div>
              <button 
                className="btn btn-primary btn-lg" 
                onClick={() => triggerDownload(universalUrl, `TrueRep Universal APK (${releaseTag})`)}
                style={{ width: '100%' }}
                id="universal-download-btn"
              >
                <Download size={20} />
                <span>Download Universal APK</span>
                <span style={{ opacity: 0.75, fontSize: '0.85em' }}>({releaseSize})</span>
              </button>
            </div>

            {/* Optimized APK Card */}
            <div className="apk-option-card">
              <div>
                <span className="apk-card-badge" style={{ background: 'var(--bg-surface-hover)', color: 'var(--text-main)' }}>
                  OPTIMIZED
                </span>
                <h3 className="apk-option-title">Fast 64-Bit APK</h3>
                <p className="apk-option-meta">
                  Streamlined package optimized for all modern Android smartphones.
                </p>
              </div>
              <button 
                className="btn btn-secondary btn-lg" 
                onClick={() => triggerDownload(arm64Url, `TrueRep 64-Bit APK (${releaseTag})`)}
                style={{ width: '100%' }}
                id="arm64-download-btn"
              >
                <Smartphone size={20} />
                <span>Download 64-Bit APK</span>
              </button>
            </div>

          </div>

          <p style={{ fontSize: '0.85rem', color: 'var(--text-sub)' }}>
            Release <strong style={{ color: 'var(--text-main)' }}>{releaseTag}</strong> · Android 8.0 to 15+ · 100% On-Device AI · Free &amp; Open Source
          </p>

          {/* Sideloading 3-Step Guide */}
          <div className="sideload-steps-grid">
            <div className="sideload-step">
              <div className="step-num">1</div>
              <div className="step-title">Download APK</div>
              <div className="step-desc">
                Tap either button above to download the latest signed APK file directly from TrueRep GitHub releases.
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
