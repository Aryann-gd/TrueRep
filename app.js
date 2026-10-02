/**
 * TrueRep Official Website Application Script
 * Dynamic GitHub Release Asset Fetcher & Automated Download Trigger
 */

const GITHUB_OWNER = 'Aryann-gd';
const GITHUB_REPO = 'TrueRep';
const FALLBACK_APK_URL = `https://github.com/${GITHUB_OWNER}/${GITHUB_REPO}/releases/latest/download/TrueRep-arm64-release.apk`;

let cachedDownloadUrl = FALLBACK_APK_URL;
let cachedReleaseName = 'v1.0.0';
let cachedReleaseSize = '~63 MB';

// Fetch latest release details on load
document.addEventListener('DOMContentLoaded', () => {
  fetchLatestReleaseInfo();
  initSimulatedAngleAnimation();
});

async function fetchLatestReleaseInfo() {
  const apiUrl = `https://api.github.com/repos/${GITHUB_OWNER}/${GITHUB_REPO}/releases/latest`;
  
  try {
    const res = await fetch(apiUrl);
    if (!res.ok) {
      throw new Error(`GitHub API returned status ${res.status}`);
    }
    const data = await res.json();
    
    if (data.tag_name) {
      cachedReleaseName = data.tag_name;
    }

    // Find the APK asset
    if (Array.isArray(data.assets)) {
      const apkAsset = data.assets.find(a => a.name.endsWith('.apk'));
      if (apkAsset) {
        cachedDownloadUrl = apkAsset.browser_download_url;
        if (apkAsset.size) {
          const mb = (apkAsset.size / (1024 * 1024)).toFixed(1);
          cachedReleaseSize = `${mb} MB`;
        }
      }
    }

    // Update UI elements
    const tagEl = document.getElementById('apk-release-tag');
    if (tagEl) {
      tagEl.textContent = `Release ${cachedReleaseName} · ARM64 (${cachedReleaseSize})`;
    }

    const metaEl = document.getElementById('apk-details-meta');
    if (metaEl) {
      metaEl.textContent = `${cachedReleaseName} · Free & Open · ${cachedReleaseSize}`;
    }

    const manualLink = document.getElementById('manual-apk-link');
    if (manualLink) {
      manualLink.href = cachedDownloadUrl;
    }
  } catch (err) {
    console.log('Using default release fallback URL:', err.message);
  }
}

/**
 * Triggers the automatic APK download
 */
function downloadLatestApk() {
  const toast = document.getElementById('download-toast');
  const title = document.getElementById('toast-title');
  const msg = document.getElementById('toast-message');

  if (toast) {
    toast.classList.add('active');
    title.textContent = 'Starting Download...';
    msg.textContent = `Downloading TrueRep ${cachedReleaseName} (${cachedReleaseSize})...`;
  }

  // Trigger browser download via invisible iframe/anchor
  const link = document.createElement('a');
  link.href = cachedDownloadUrl;
  link.setAttribute('download', `TrueRep-${cachedReleaseName}.apk`);
  document.body.appendChild(link);
  link.click();
  document.body.removeChild(link);

  setTimeout(() => {
    if (title && msg) {
      title.textContent = '✓ Download Initiated!';
      msg.textContent = 'Follow the 3-step sideload guide below to install.';
    }
  }, 1200);

  setTimeout(() => {
    if (toast) {
      toast.classList.remove('active');
    }
  }, 6000);
}

// Global scope binding
window.downloadLatestApk = downloadLatestApk;

/**
 * Simulated Live Hero HUD Angle Gauge
 */
function initSimulatedAngleAnimation() {
  const angleBadge = document.getElementById('hud-angle-badge');
  if (!angleBadge) return;

  const valEl = angleBadge.querySelector('.angle-val');
  const labelEl = angleBadge.querySelector('.angle-label');
  let time = 0;

  setInterval(() => {
    time += 0.05;
    const cycle = (time * 0.9) % 1.0;
    const angle = Math.round(165 - Math.sin(cycle * Math.PI) * 79);
    
    if (valEl) {
      valEl.textContent = `${angle}°`;
    }

    if (angle <= 90) {
      angleBadge.style.background = '#22C55E';
      if (labelEl) labelEl.textContent = 'INFLECTION HIT';
    } else {
      angleBadge.style.background = '#2E86F5';
      if (labelEl) labelEl.textContent = 'ELBOW ANGLE';
    }
  }, 50);
}
