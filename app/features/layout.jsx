export const metadata = {
  title: 'TrueRep Features - AI Workout Tracking & Streak Rewards',
  description: 'AI rep counting, form validation, workout plans, streak badges, water tracking. All processed on-device. No cloud, no subscriptions, no ads during workouts.',
  alternates: {
    canonical: 'https://truerep-omega.vercel.app/features',
  },
  openGraph: {
    title: 'TrueRep Features - AI Workout Tracking & Streak Rewards',
    description: 'AI rep counting, form validation, workout plans, streak badges, water tracking. All processed on-device. No cloud, no subscriptions, no ads during workouts.',
    url: 'https://truerep-omega.vercel.app/features',
    type: 'website',
    siteName: 'TrueRep',
    images: [
      {
        url: 'https://truerep-omega.vercel.app/og-image.jpg',
        width: 1200,
        height: 630,
        alt: 'TrueRep Features - AI Workout Tracking & Streak Rewards',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'TrueRep Features - AI Workout Tracking & Streak Rewards',
    description: 'AI rep counting, form validation, workout plans, streak badges, water tracking. All processed on-device. No cloud, no subscriptions, no ads during workouts.',
    images: ['https://truerep-omega.vercel.app/twitter-image.jpg'],
    site: '@truerep_app',
  },
};

const jsonLdBreadcrumb = {
  '@context': 'https://schema.org',
  '@type': 'BreadcrumbList',
  itemListElement: [
    {
      '@type': 'ListItem',
      position: 1,
      name: 'Home',
      item: 'https://truerep-omega.vercel.app',
    },
    {
      '@type': 'ListItem',
      position: 2,
      name: 'Features',
      item: 'https://truerep-omega.vercel.app/features',
    },
  ],
};

export default function FeaturesLayout({ children }) {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLdBreadcrumb) }}
      />
      {children}
    </>
  );
}
