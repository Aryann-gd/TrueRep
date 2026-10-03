import './globals.css';

const siteUrl = 'https://truerep-omega.vercel.app';

export const metadata = {
  metadataBase: new URL(siteUrl),
  title: {
    default: 'TrueRep — Gym With Ranks & AI Workout Tracking',
    template: '%s | TrueRep',
  },
  description: 'TrueRep is the open-source workout tracker that ranks every lift with real-time on-device AI. Track your form, verify squat depth, and climb 9 strength ranks from Wood to Olympian with zero cloud video.',
  keywords: [
    'TrueRep',
    'AI Workout Tracker',
    'AI Form Coach',
    'AI Pose Tracking',
    'Squat Depth Tracker',
    'Gym Ranks',
    'On-Device AI Fitness',
    'Offline Fitness App',
    'Open Source Gym App',
    'Biomechanics Telemetry',
    'Android Workout Tracker',
    'Rep Counter AI'
  ],
  authors: [{ name: 'Aryann-gd', url: 'https://github.com/Aryann-gd' }],
  creator: 'Aryann-gd',
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
    icon: '/assets/icon_flex_512.png',
    shortcut: '/assets/icon_flex_512.png',
    apple: '/assets/icon_flex_512.png',
  },
  openGraph: {
    type: 'website',
    locale: 'en_US',
    url: siteUrl,
    siteName: 'TrueRep',
    title: 'TrueRep — Gym With Ranks & AI Workout Tracking',
    description: 'Log your sets, track your body in real-time with AI, get instant form coaching, and climb 9 strength tiers from Wood to Olympian.',
    images: [
      {
        url: '/assets/hero_poster.jpg',
        width: 1200,
        height: 630,
        alt: 'TrueRep On-Device AI Workout Tracking',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'TrueRep — Gym With Ranks & AI Workout Tracking',
    description: 'Log your sets, track your body in real-time with AI, get instant form coaching, and climb 9 strength tiers from Wood to Olympian.',
    images: ['/assets/hero_poster.jpg'],
    creator: '@truerep_official',
  },
  verification: {
    google: '8JZvIe0b50xqKaesmczIWcT0oYThtlpE_mpjktsvrS0',
  },
};

export const viewport = {
  themeColor: '#090B0E',
  width: 'device-width',
  initialScale: 1,
};

const jsonLdSoftwareApp = {
  '@context': 'https://schema.org',
  '@type': 'MobileApplication',
  name: 'TrueRep',
  operatingSystem: 'Android 8.0 and up',
  applicationCategory: 'HealthAndFitnessApplication',
  offers: {
    '@type': 'Offer',
    price: '0',
    priceCurrency: 'USD',
  },
  description: 'Open-source workout tracker that ranks lifts with real-time on-device AI. Track form, verify squat depth, and climb 9 strength ranks from Wood to Olympian.',
  url: siteUrl,
  downloadUrl: 'https://github.com/Aryann-gd/TrueRep/releases',
  author: {
    '@type': 'Person',
    name: 'Aryann-gd',
    url: 'https://github.com/Aryann-gd',
  },
  featureList: [
    'Real-time on-device AI pose tracking',
    'Squat depth & joint angle verification',
    '9 competitive strength ranks from Wood to Olympian',
    'Offline calorie & macronutrient logging',
    '100% private zero-cloud camera telemetry',
  ],
};

const jsonLdWebSite = {
  '@context': 'https://schema.org',
  '@type': 'WebSite',
  name: 'TrueRep',
  url: siteUrl,
  description: 'AI-Powered Real-Time Biomechanics & Nutrition Telemetry with 9 Gym Ranks',
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
      name: 'How does TrueRep track my workout form in real time?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'TrueRep uses on-device computer vision powered by Google MediaPipe 3D pose estimation. It tracks 33 anatomical landmarks across your body at 30+ FPS to calculate exact joint articulation angles and verify full depth before counting a rep.',
      },
    },
    {
      '@type': 'Question',
      name: 'Does TrueRep upload my camera video or workout footage to the cloud?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'No. TrueRep operates on a zero-cloud architecture. All camera frames are processed in local volatile RAM and immediately discarded. No video or biometric imagery ever leaves your phone.',
      },
    },
    {
      '@type': 'Question',
      name: 'How do the 9 Gym Strength Ranks work?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'TrueRep gamifies your fitness across 9 tiers: Wood, Bronze, Silver, Gold, Platinum, Diamond, Champion, Titan, and Olympian. You earn Rank Points for verified reps, hitting optimal joint angles, and maintaining cadence.',
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
  ],
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <head>
        <meta name="google-site-verification" content="8JZvIe0b50xqKaesmczIWcT0oYThtlpE_mpjktsvrS0" />
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link 
          href="https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600;700;800&family=JetBrains+Mono:wght@500;700;800&family=Outfit:wght@600;700;800;900&display=swap" 
          rel="stylesheet" 
        />
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
      </head>
      <body>
        {children}
      </body>
    </html>
  );
}

