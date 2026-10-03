/**
 * TrueRep Official Website Script
 * Liftoff-Grade Aesthetics, Audio Synthesis & Dynamic GitHub Release Integration
 * Target Release Repository: Aryann-gd/TrueRep
 */

// GitHub Release Configuration — Strictly uses KINETX release repo
const GITHUB_OWNER = 'Aryann-gd';
const GITHUB_REPO = 'KINETX';

const FALLBACK_UNIVERSAL_URL = `https://github.com/${GITHUB_OWNER}/${GITHUB_REPO}/releases/download/latest-build/TrueRep-arm64-release.apk`;
const FALLBACK_ARM64_URL = `https://github.com/${GITHUB_OWNER}/${GITHUB_REPO}/releases/download/latest-build/TrueRep-arm64-release.apk`;

let universalApkUrl = FALLBACK_UNIVERSAL_URL;
let arm64ApkUrl = FALLBACK_ARM64_URL;
let latestReleaseTag = 'v1.0.0';
let latestReleaseSize = '~63 MB';

// Web Audio API Context for real-time telemetry clicks & depth chimes
let audioCtx = null;

function getAudioContext() {
  if (!audioCtx) {
    const AudioContextClass = window.AudioContext || window.webkitAudioContext;
    if (AudioContextClass) {
      audioCtx = new AudioContextClass();
    }
  }
  if (audioCtx && audioCtx.state === 'suspended') {
    audioCtx.resume();
  }
  return audioCtx;
}

function playDepthChime(frequency = 880, duration = 0.12) {
  try {
    const ctx = getAudioContext();
    if (!ctx) return;

    const osc = ctx.createOscillator();
    const gain = ctx.createGain();

    osc.type = 'sine';
    osc.frequency.setValueAtTime(frequency, ctx.currentTime);
    osc.frequency.exponentialRampToValueAtTime(frequency * 1.5, ctx.currentTime + duration);

    gain.gain.setValueAtTime(0.12, ctx.currentTime);
    gain.gain.exponentialRampToValueAtTime(0.001, ctx.currentTime + duration);

    osc.connect(gain);
    gain.connect(ctx.destination);

    osc.start();
    osc.stop(ctx.currentTime + duration);
  } catch (e) {
    // Audio synthesis fallback
  }
}

// Initialize on DOM Ready
document.addEventListener('DOMContentLoaded', () => {
  fetchLatestTrueRepRelease();
  initAngleSimulator();
  setupDownloadButtons();
});

/**
 * Fetch latest release assets strictly from Aryann-gd/TrueRep repository
 */
async function fetchLatestTrueRepRelease() {
  const apiUrl = `https://api.github.com/repos/${GITHUB_OWNER}/${GITHUB_REPO}/releases/latest`;
  
  try {
    const res = await fetch(apiUrl);
    if (!res.ok) throw new Error(`GitHub API HTTP ${res.status}`);

    const data = await res.json();
    if (data.tag_name) {
      latestReleaseTag = data.tag_name;
    }

    if (Array.isArray(data.assets) && data.assets.length > 0) {
      // Find Universal APK
      const universalAsset = data.assets.find(a => 
        a.name.toLowerCase().includes('universal') || 
        a.name === 'TrueRep-release.apk' || 
        a.name === 'app-release.apk'
      );
      if (universalAsset) {
        universalApkUrl = universalAsset.browser_download_url;
        latestReleaseSize = (universalAsset.size / (1024 * 1024)).toFixed(1) + ' MB';
      }

      // Find ARM64 APK
      const arm64Asset = data.assets.find(a => a.name.toLowerCase().includes('arm64'));
      if (arm64Asset) {
        arm64ApkUrl = arm64Asset.browser_download_url;
        if (!universalAsset) {
          universalApkUrl = arm64Asset.browser_download_url;
          latestReleaseSize = (arm64Asset.size / (1024 * 1024)).toFixed(1) + ' MB';
        }
      } else if (universalAsset && !arm64Asset) {
        arm64ApkUrl = universalAsset.browser_download_url;
      }
    }

    // Update UI Badges
    const heroBtnText = document.getElementById('hero-btn-text');
    if (heroBtnText) {
      heroBtnText.textContent = `Download Latest APK (${latestReleaseTag})`;
    }

    const heroApkSize = document.getElementById('hero-apk-size');
    if (heroApkSize) {
      heroApkSize.textContent = `· ${latestReleaseSize}`;
    }

    const liveReleaseTag = document.getElementById('live-release-tag');
    if (liveReleaseTag) {
      liveReleaseTag.textContent = latestReleaseTag;
    }

  } catch (err) {
    console.warn('Could not fetch latest release from GitHub API:', err);
    // Graceful fallback to cached defaults
  }
}

/**
 * Configure Download Trigger Buttons
 */
function setupDownloadButtons() {
  const triggerDownload = (url, name) => {
    showDownloadToast(`Downloading ${name}...`, `Fetching binary from Aryann-gd/TrueRep (${latestReleaseTag})`);
    playDepthChime(1046, 0.15); // High C chime

    const link = document.createElement('a');
    link.href = url;
    link.setAttribute('download', '');
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  const heroBtn = document.getElementById('hero-download-btn');
  if (heroBtn) {
    heroBtn.addEventListener('click', () => {
      triggerDownload(universalApkUrl, `TrueRep ${latestReleaseTag} Universal APK`);
    });
  }

  const universalBtn = document.getElementById('universal-download-btn');
  if (universalBtn) {
    universalBtn.addEventListener('click', () => {
      triggerDownload(universalApkUrl, `TrueRep ${latestReleaseTag} Universal APK`);
    });
  }

  const arm64Btn = document.getElementById('arm64-download-btn');
  if (arm64Btn) {
    arm64Btn.addEventListener('click', () => {
      triggerDownload(arm64ApkUrl, `TrueRep ${latestReleaseTag} ARM64 APK`);
    });
  }
}

/**
 * Download Toast Modal Display
 */
function showDownloadToast(title, message) {
  const toast = document.getElementById('download-toast');
  const toastTitle = document.getElementById('toast-title');
  const toastMsg = document.getElementById('toast-message');

  if (toastTitle) toastTitle.textContent = title;
  if (toastMsg) toastMsg.textContent = message;

  if (toast) {
    toast.classList.add('visible');
    setTimeout(() => {
      toast.classList.remove('visible');
    }, 4500);
  }
}

/**
 * Interactive Biomechanical Angle Telemetry Simulator
 */
let simulatedReps = 5;
let hasHitDepthInCurrentRep = true;

function initAngleSimulator() {
  const slider = document.getElementById('angle-slider');
  const angleDisplay = document.getElementById('sim-angle-val');
  const statusBadge = document.getElementById('sim-badge-status');
  const repDisplay = document.getElementById('sim-rep-counter');
  const hudKnee = document.getElementById('hud-knee-angle');

  if (!slider || !angleDisplay || !statusBadge) return;

  slider.addEventListener('input', (e) => {
    const angle = parseInt(e.target.value, 10);
    angleDisplay.textContent = `${angle}°`;
    if (hudKnee) hudKnee.textContent = `${angle}°`;

    if (angle <= 95) {
      // Valid Depth Hit (Parallel or deeper)
      angleDisplay.style.color = 'var(--accent-lime)';
      statusBadge.textContent = 'VALID DEPTH HIT (REP COUNTED) ✓';
      statusBadge.style.color = 'var(--accent-lime)';
      statusBadge.style.borderColor = 'var(--accent-lime)';
      statusBadge.style.background = 'rgba(16, 185, 129, 0.15)';

      if (!hasHitDepthInCurrentRep) {
        hasHitDepthInCurrentRep = true;
        simulatedReps++;
        if (repDisplay) {
          repDisplay.textContent = `Simulated Reps: ${simulatedReps}`;
        }
        playDepthChime(880, 0.12); // Chime on valid depth
      }
    } else if (angle <= 110) {
      // Approaching parallel
      angleDisplay.style.color = '#F59E0B';
      statusBadge.textContent = 'APPROACHING PARALLEL (LOWER...)';
      statusBadge.style.color = '#F59E0B';
      statusBadge.style.borderColor = '#F59E0B';
      statusBadge.style.background = 'rgba(245, 158, 11, 0.15)';
    } else {
      // Incomplete depth
      angleDisplay.style.color = '#EF4444';
      statusBadge.textContent = 'INCOMPLETE DEPTH (NO REP)';
      statusBadge.style.color = '#EF4444';
      statusBadge.style.borderColor = '#EF4444';
      statusBadge.style.background = 'rgba(239, 68, 68, 0.15)';
      hasHitDepthInCurrentRep = false;
    }
  });
}
