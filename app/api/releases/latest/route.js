import { NextResponse } from 'next/server';

const GITHUB_OWNER = 'Aryann-gd';
const GITHUB_REPO_PRIMARY = 'KINETX';
const GITHUB_REPO_FALLBACK = 'TrueRep';

const FALLBACK_UNIVERSAL_URL = `https://github.com/${GITHUB_OWNER}/${GITHUB_REPO_PRIMARY}/releases/download/latest-build/TrueRep-universal-release.apk`;
const FALLBACK_ARM64_URL = `https://github.com/${GITHUB_OWNER}/${GITHUB_REPO_PRIMARY}/releases/download/latest-build/TrueRep-arm64-release.apk`;

/**
 * Server-Side Release Proxy & Sanitizer
 * Shields GitHub release payloads by purging any .aab file references or URLs before sending to client.
 */
export async function GET(request) {
  const { searchParams } = new URL(request.url);

  // Security check: DevTools query parameter probe
  for (const [key, value] of searchParams.entries()) {
    if (key.toLowerCase().includes('.aab') || value.toLowerCase().includes('.aab')) {
      return NextResponse.json(
        {
          error: 'Forbidden',
          message: 'Android App Bundle (.aab) queries are strictly disallowed.'
        },
        { status: 403 }
      );
    }
  }

  try {
    let releaseData = null;

    // Try primary repo (KINETX)
    let res = await fetch(`https://api.github.com/repos/${GITHUB_OWNER}/${GITHUB_REPO_PRIMARY}/releases/latest`, {
      headers: {
        'Accept': 'application/vnd.github.v3+json',
        'User-Agent': 'TrueRep-WebHub/1.0'
      },
      next: { revalidate: 300 } // Cache for 5 minutes
    });

    if (res.ok) {
      releaseData = await res.json();
    } else {
      // Fallback repo (TrueRep)
      res = await fetch(`https://api.github.com/repos/${GITHUB_OWNER}/${GITHUB_REPO_FALLBACK}/releases/latest`, {
        headers: {
          'Accept': 'application/vnd.github.v3+json',
          'User-Agent': 'TrueRep-WebHub/1.0'
        },
        next: { revalidate: 300 }
      });
      if (res.ok) {
        releaseData = await res.json();
      }
    }

    if (!releaseData) {
      // Return predefined safe APK fallback info
      return NextResponse.json({
        tag_name: 'latest-build',
        assets: [
          {
            name: 'TrueRep-arm64-release.apk',
            size: 67738000,
            browser_download_url: FALLBACK_ARM64_URL,
            type: 'arm64'
          },
          {
            name: 'TrueRep-universal-release.apk',
            size: 69400000,
            browser_download_url: FALLBACK_UNIVERSAL_URL,
            type: 'universal'
          }
        ]
      }, {
        headers: {
          'Cache-Control': 'public, s-maxage=300, stale-while-revalidate=600',
          'X-Content-Type-Options': 'nosniff'
        }
      });
    }

    // Strict Security Filtering: Purge all .aab assets and references
    const sanitizedAssets = (releaseData.assets || [])
      .filter(asset => {
        const name = (asset.name || '').toLowerCase();
        // Disallow anything ending with or containing .aab
        return !name.endsWith('.aab') && !name.includes('.aab');
      })
      .map(asset => ({
        name: asset.name,
        size: asset.size,
        browser_download_url: asset.browser_download_url
      }));

    return NextResponse.json({
      tag_name: releaseData.tag_name || 'latest-build',
      assets: sanitizedAssets,
      published_at: releaseData.published_at || null
    }, {
      headers: {
        'Cache-Control': 'public, s-maxage=300, stale-while-revalidate=600',
        'X-Content-Type-Options': 'nosniff'
      }
    });

  } catch (error) {
    return NextResponse.json({
      tag_name: 'latest-build',
      assets: [
        {
          name: 'TrueRep-arm64-release.apk',
          size: 67738000,
          browser_download_url: FALLBACK_ARM64_URL,
          type: 'arm64'
        },
        {
          name: 'TrueRep-universal-release.apk',
          size: 69400000,
          browser_download_url: FALLBACK_UNIVERSAL_URL,
          type: 'universal'
        }
      ]
    }, {
      headers: {
        'Cache-Control': 'public, s-maxage=300, stale-while-revalidate=600',
        'X-Content-Type-Options': 'nosniff'
      }
    });
  }
}
