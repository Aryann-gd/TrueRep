import './globals.css';

export const metadata = {
  metadataBase: new URL('https://truerep-omega.vercel.app/'),
  title: 'TrueRep — Gym With Ranks & AI Workout Tracking',
  description: 'TrueRep is the open-source workout tracker that ranks every lift with real-time on-device AI. Track your form, verify squat depth, and climb 9 strength ranks from Wood to Olympian.',
  keywords: [
    'TrueRep',
    'Workout Tracker',
    'AI Form Coach',
    'AI Pose Tracking',
    'Squat Depth',
    'Gym Ranks',
    'On-Device AI',
    'Offline Fitness',
    'Open Source'
  ],
  authors: [{ name: 'Aryann-gd', url: 'https://github.com/Aryann-gd' }],
  icons: {
    icon: '/assets/icon_flex_512.png',
    apple: '/assets/icon_flex_512.png',
  },
  openGraph: {
    type: 'website',
    url: 'https://truerep-omega.vercel.app/',
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
  },
};

export const viewport = {
  themeColor: '#090B0E',
  width: 'device-width',
  initialScale: 1,
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link 
          href="https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600;700;800&family=JetBrains+Mono:wght@500;700;800&family=Outfit:wght@600;700;800;900&display=swap" 
          rel="stylesheet" 
        />
      </head>
      <body>
        {children}
      </body>
    </html>
  );
}
