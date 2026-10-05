export const metadata = {
  title: 'TrueRep Blog - AI Fitness Tips & Form Guides',
  description: 'Explore expert fitness guides on AI rep counting, proper bodyweight exercise biomechanics, on-device workout privacy, and building 90-day workout streaks.',
  alternates: {
    canonical: 'https://truerep-omega.vercel.app/blog',
  },
  openGraph: {
    title: 'TrueRep Blog - AI Fitness Tips & Form Guides',
    description: 'Explore expert fitness guides on AI rep counting, proper bodyweight exercise biomechanics, on-device workout privacy, and building 90-day workout streaks.',
    url: 'https://truerep-omega.vercel.app/blog',
    type: 'website',
    siteName: 'TrueRep',
    images: [
      {
        url: 'https://truerep-omega.vercel.app/og-image.jpg',
        width: 1200,
        height: 630,
        alt: 'TrueRep Blog - AI Fitness Tips & Form Guides',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'TrueRep Blog - AI Fitness Tips & Form Guides',
    description: 'Explore expert fitness guides on AI rep counting, proper bodyweight exercise biomechanics, on-device workout privacy, and building 90-day workout streaks.',
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
      name: 'Blog',
      item: 'https://truerep-omega.vercel.app/blog',
    },
  ],
};

export default function BlogLayout({ children }) {
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
