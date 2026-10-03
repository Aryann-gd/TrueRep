import { NextResponse } from 'next/server';

const GITHUB_OWNER = 'Aryann-gd';
const GITHUB_REPO = 'KINETX';

const FALLBACK_UNIVERSAL_URL = `https://github.com/${GITHUB_OWNER}/${GITHUB_REPO}/releases/download/latest-build/TrueRep-universal-release.apk`;
const FALLBACK_ARM64_URL = `https://github.com/${GITHUB_OWNER}/${GITHUB_REPO}/releases/download/latest-build/TrueRep-arm64-release.apk`;

/**
 * Controlled Download Endpoint
 * Strictly blocks any attempt to download or probe .aab packages.
 */
export async function GET(request) {
  const { searchParams } = new URL(request.url);
  const file = (searchParams.get('file') || searchParams.get('asset') || searchParams.get('type') || '').toLowerCase();

  // Strict .aab rejection
  if (file.endsWith('.aab') || file.includes('.aab') || file.includes('bundle')) {
    return NextResponse.json(
      {
        status: 403,
        error: 'Forbidden',
        message: 'Downloading Android App Bundle (.aab) files is strictly prohibited. Use the official APK installer.'
      },
      { status: 403 }
    );
  }

  // Handle valid APK requests
  if (file.includes('arm64')) {
    return NextResponse.redirect(FALLBACK_ARM64_URL, 307);
  }

  // Default to universal APK
  return NextResponse.redirect(FALLBACK_UNIVERSAL_URL, 307);
}

export async function POST(request) {
  try {
    const body = await request.json().catch(() => ({}));
    const target = JSON.stringify(body).toLowerCase();

    if (target.includes('.aab')) {
      return NextResponse.json(
        {
          status: 403,
          error: 'Forbidden',
          message: 'Downloading Android App Bundle (.aab) files is strictly prohibited.'
        },
        { status: 403 }
      );
    }
  } catch {
    // Ignore JSON parse errors
  }

  return NextResponse.json(
    { error: 'Invalid request' },
    { status: 400 }
  );
}
