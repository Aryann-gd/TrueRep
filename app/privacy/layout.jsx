export const metadata = {
  title: 'TrueRep Privacy Policy - On-Device AI, Zero Cloud Data',
  description: 'TrueRep processes all workout data on your device. Camera frames never leave your phone. Read our privacy-first approach to fitness tracking.',
  alternates: {
    canonical: 'https://truerep-omega.vercel.app/privacy',
  },
  openGraph: {
    title: 'TrueRep Privacy Policy - On-Device AI, Zero Cloud Data',
    description: 'TrueRep processes all workout data on your device. Camera frames never leave your phone. Read our privacy-first approach to fitness tracking.',
    url: 'https://truerep-omega.vercel.app/privacy',
    type: 'website',
    siteName: 'TrueRep',
    images: [
      {
        url: 'https://truerep-omega.vercel.app/og-image.jpg',
        width: 1200,
        height: 630,
        alt: 'TrueRep Privacy Policy',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'TrueRep Privacy Policy - On-Device AI, Zero Cloud Data',
    description: 'TrueRep processes all workout data on your device. Camera frames never leave your phone. Read our privacy-first approach to fitness tracking.',
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
      name: 'Privacy Policy',
      item: 'https://truerep-omega.vercel.app/privacy',
    },
  ],
};

export default function PrivacyLayout({ children }) {
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
