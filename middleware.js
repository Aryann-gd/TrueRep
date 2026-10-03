import { NextResponse } from 'next/server';

/**
 * Global Security Middleware
 * Prevents any user or automated developer tool from requesting, downloading,
 * or probing Android App Bundle (.aab) files.
 */
export function middleware(request) {
  const url = request.nextUrl;
  const pathname = url.pathname.toLowerCase();
  const search = url.search.toLowerCase();
  const rawUrl = request.url.toLowerCase();

  // Inspect headers for any custom developer tool probes
  const customHeaderTarget = (
    request.headers.get('x-requested-file') || 
    request.headers.get('x-download-target') || 
    ''
  ).toLowerCase();

  // Check if request targets or queries any .aab bundle file
  const isAabTarget = 
    pathname.endsWith('.aab') || 
    pathname.includes('.aab') || 
    search.includes('.aab') || 
    rawUrl.includes('.aab') ||
    customHeaderTarget.includes('.aab');

  if (isAabTarget) {
    return new NextResponse(
      JSON.stringify({
        status: 403,
        error: 'Forbidden',
        message: 'Access denied: Downloading or requesting Android App Bundle (.aab) files is strictly prohibited on this platform. Only verified APK packages are distributed.'
      }),
      {
        status: 403,
        headers: {
          'Content-Type': 'application/json',
          'X-Content-Type-Options': 'nosniff',
          'Cache-Control': 'no-store, no-cache, must-revalidate, proxy-revalidate, max-age=0'
        }
      }
    );
  }

  return NextResponse.next();
}

export const config = {
  // Intercept all routes, APIs, and file requests
  matcher: [
    '/((?!_next/static|_next/image|favicon.ico).*)',
    '/:path*'
  ]
};
