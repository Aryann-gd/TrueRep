import './globals.css';

const siteUrl = 'https://truerep-omega.vercel.app';

export const metadata = {
  metadataBase: new URL(siteUrl),
  title: {
    default: 'TrueRep - AI Rep Counter & Form Coach | Free Fitness App',
    template: '%s | TrueRep',
  },
  description: 'TrueRep counts only true reps with on-device AI. Real-time form coaching, streak rewards, hydration tracking. 100% offline, private, free on Google Play.',
  keywords: [
    'AI rep counter',
    'workout form coach',
    'fitness app',
    'bodyweight exercises',
    'streak tracker',
    'hydration reminder',
    'free fitness app',
    'on-device AI',
    'privacy-first fitness',
    'TrueRep',
    'Squat Depth Tracker',
    'Gym Ranks',
    'Android Workout Tracker'
  ],
  authors: [
    { name: 'TrueRep Team', url: siteUrl },
    { name: 'Aryann-gd', url: 'https://github.com/Aryann-gd' }
  ],
  creator: 'TrueRep Team',
  publisher: 'TrueRep',
  alternates: {
    canonical: '/',
  },
  robots: {
    index: true,
    follow: true,
    nocache: false,
    googleBot: {
      index: true,
      follow: true,
      noimageindex: false,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
  icons: {
    icon: '/favicon.png',
    shortcut: '/favicon.png',
    apple: '/apple-touch-icon.png',
  },
  openGraph: {
    type: 'website',
    locale: 'en_US',
    url: siteUrl,
    siteName: 'TrueRep',
    title: 'TrueRep - AI Rep Counter & Form Coach | Free Fitness App',
    description: 'TrueRep counts only true reps with on-device AI. Real-time form coaching, streak rewards, hydration tracking. 100% offline, private, free on Google Play.',
    images: [
      {
        url: 'https://truerep-omega.vercel.app/og-image.jpg',
        width: 1200,
        height: 630,
        alt: 'TrueRep - AI Rep Counter & Form Coach',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'TrueRep - AI Rep Counter & Form Coach | Free Fitness App',
    description: 'TrueRep counts only true reps with on-device AI. Real-time form coaching, streak rewards, hydration tracking. 100% offline, private, free on Google Play.',
    images: ['https://truerep-omega.vercel.app/twitter-image.jpg'],
    site: '@truerep_app',
    creator: '@truerep_app',
  },
  verification: {
    google: '8JZvIe0b50xqKaesmczIWcT0oYThtlpE_mpjktsvrS0',
  },
  other: {
    'theme-color': '#2E86F5',
  },
};

export const viewport = {
  themeColor: '#2E86F5',
  width: 'device-width',
  initialScale: 1,
};

const jsonLdSoftwareApp = {
  '@context': 'https://schema.org',
  '@type': 'SoftwareApplication',
  name: 'TrueRep',
  operatingSystem: 'Android',
  applicationCategory: 'HealthApplication',
  offers: {
    '@type': 'Offer',
    price: '0',
    priceCurrency: 'USD',
  },
  aggregateRating: {
    '@type': 'AggregateRating',
    ratingValue: '4.8',
    ratingCount: '127',
  },
  description: 'AI-powered rep counting and real-time form coaching for bodyweight exercises. 100% on-device processing, zero cloud uploads.',
  screenshot: `${siteUrl}/app-screenshot.jpg`,
  downloadUrl: 'https://play.google.com/store/apps/details?id=com.truerep.app',
  author: {
    '@type': 'Organization',
    name: 'TrueRep',
    url: siteUrl,
    logo: `${siteUrl}/logo.png`,
    sameAs: [
      'https://twitter.com/truerep_app',
      'https://instagram.com/truerep.app',
      'https://github.com/Aryann-gd/TrueRep',
    ],
  },
};

const jsonLdWebSite = {
  '@context': 'https://schema.org',
  '@type': 'WebSite',
  name: 'TrueRep',
  url: siteUrl,
  description: 'TrueRep - AI Rep Counter & Form Coach | Free Fitness App with 9 Gym Ranks',
};

const jsonLdVideoObject = {
  '@context': 'https://schema.org',
  '@type': 'VideoObject',
  name: 'TrueRep — Real-Time AI Workout Form Coach & Kinematics Telemetry Demo',
  description: 'Watch TrueRep 33-point on-device AI pose tracking analyze squat depth, rep cadence, and live biomechanics with zero cloud latency.',
  thumbnailUrl: `${siteUrl}/assets/brag.jpg`,
  uploadDate: '2026-10-02T20:36:00Z',
  contentUrl: `${siteUrl}/assets/brag.mp4`,
  embedUrl: `${siteUrl}/#video-demo`,
};

const jsonLdFaqPage = {
  '@context': 'https://schema.org',
  '@type': 'FAQPage',
  mainEntity: [
    {
      '@type': 'Question',
      name: 'How does TrueRep count reps?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: "TrueRep uses on-device MediaPipe AI to track your body pose in real-time through your phone's camera. It counts only valid repetitions based on proper form, rejecting partial or incorrect movements.",
      },
    },
    {
      '@type': 'Question',
      name: 'Is TrueRep free?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Yes, TrueRep is completely free with optional rewarded ads for streak repair. No subscriptions, no paywalls, no premium features locked behind payment.',
      },
    },
    {
      '@type': 'Question',
      name: 'Does TrueRep upload my workout videos?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'No. All AI processing happens on your device. Camera frames are never uploaded to any server. Your workout data stays 100% private.',
      },
    },
    {
      '@type': 'Question',
      name: 'How do the 9 Gym Strength Ranks work?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'TrueRep gamifies your fitness journey across 9 distinct tiers: Wood, Bronze, Silver, Gold, Platinum, Diamond, Champion, Titan, and Olympian. You earn Rank Points for verified reps, hitting optimal joint angles, and maintaining cadence.',
      },
    },
    {
      '@type': 'Question',
      name: 'Can I use TrueRep completely offline without internet or cellular data?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Yes. Both the AI computer vision models and the offline nutritional macro database run 100% locally on your phone without internet or subscription paywalls.',
      },
    },
    {
      '@type': 'Question',
      name: 'What exercises are supported by TrueRep AI coaching?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'TrueRep currently features specialized kinematic models for Squats (with real-time hip/knee depth analysis), Push-ups (with chest-to-deck verification and lumbar alignment), and custom set logging for full-body strength routines.',
      },
    },
  ],
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <head>
        <meta name="google-site-verification" content="8JZvIe0b50xqKaesmczIWcT0oYThtlpE_mpjktsvrS0" />
        <meta name="author" content="TrueRep Team" />
        <meta name="robots" content="index, follow, max-image-preview:large, max-snippet:-1, max-video-preview:-1" />
        <link rel="sitemap" type="application/xml" href="/sitemap.xml" />
        <link rel="icon" type="image/png" href="/favicon.png" />
        <link rel="apple-touch-icon" href="/apple-touch-icon.png" />
        
        {/* Font Preconnects */}
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link 
          href="https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600;700;800&family=JetBrains+Mono:wght@500;700;800&family=Outfit:wght@600;700;800;900&display=swap" 
          rel="stylesheet" 
        />
        
        {/* Preload critical hero assets */}
        <link rel="preload" href="/assets/hero_poster.jpg" as="image" />

        {/* Global JSON-LD Schemas */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLdSoftwareApp) }}
        />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLdWebSite) }}
        />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLdVideoObject) }}
        />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLdFaqPage) }}
        />

        {/* Google Analytics (gtag.js) */}
        <script async src="https://www.googletagmanager.com/gtag/js?id=G-TRUEREP2026"></script>
        <script
          dangerouslySetInnerHTML={{
            __html: `
              window.dataLayer = window.dataLayer || [];
              function gtag(){dataLayer.push(arguments);}
              gtag('js', new Date());
              gtag('config', 'G-TRUEREP2026');
            `,
          }}
        />

        {/* Google Tag Manager */}
        <script
          dangerouslySetInnerHTML={{
            __html: `
              (function(w,d,s,l,i){w[l]=w[l]||[];w[l].push({'gtm.start':
              new Date().getTime(),event:'gtm.js'});var f=d.getElementsByTagName(s)[0],
              j=d.createElement(s),dl=l!='dataLayer'?'&l='+l:'';j.async=true;j.src=
              'https://www.googletagmanager.com/gtm.js?id='+i+dl;f.parentNode.insertBefore(j,f);
              })(window,document,'script','dataLayer','GTM-TRUEREP');
            `,
          }}
        />
      </head>
      <body>
        <noscript>
          <iframe 
            src="https://www.googletagmanager.com/ns.html?id=GTM-TRUEREP"
            height="0" 
            width="0" 
            style={{ display: 'none', visibility: 'hidden' }}
          />
        </noscript>
        {children}
      </body>
    </html>
  );
}
