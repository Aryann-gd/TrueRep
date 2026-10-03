import { NextResponse } from 'next/server';

const GITHUB_OWNER = 'Aryann-gd';
const GITHUB_REPO = 'TrueRep';

const FALLBACK_UNIVERSAL_URL = `https://github.com/${GITHUB_OWNER}/${GITHUB_REPO}/releases/download/v1.0.0/TrueRep-universal-release.apk`;

/**
 * Server-Side Release Proxy & Sanitizer
 * Fetches the latest release strictly from Aryann-gd/TrueRep repository.
 * Shields release payloads by purging any .aab bundle references before sending to client.
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

    const res = await fetch(`https://api.github.com/repos/${GITHUB_OWNER}/${GITHUB_REPO}/releases/latest`, {
      headers: {
        'Accept': 'application/vnd.github.v3+json',
        'User-Agent': 'TrueRep-WebHub/1.0'
      },
      next: { revalidate: 300 } // Cache for 5 minutes
    });

    if (res.ok) {
      releaseData = await res.json();
    }

    if (!releaseData) {
      // Return predefined safe Universal APK fallback info from TrueRep repo
      return NextResponse.json({
        tag_name: 'v1.0.0',
        assets: [
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
        return !name.endsWith('.aab') && !name.includes('.aab') && name.endsWith('.apk');
      })
      .map(asset => ({
        name: asset.name,
        size: asset.size,
        browser_download_url: asset.browser_download_url
      }));

    return NextResponse.json({
      tag_name: releaseData.tag_name || 'v1.0.0',
      assets: sanitizedAssets.length > 0 ? sanitizedAssets : [
        {
          name: 'TrueRep-universal-release.apk',
          size: 69400000,
          browser_download_url: FALLBACK_UNIVERSAL_URL,
          type: 'universal'
        }
      ],
      published_at: releaseData.published_at || null
    }, {
      headers: {
        'Cache-Control': 'public, s-maxage=300, stale-while-revalidate=600',
        'X-Content-Type-Options': 'nosniff'
      }
    });

  } catch (error) {
    return NextResponse.json({
      tag_name: 'v1.0.0',
      assets: [
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
