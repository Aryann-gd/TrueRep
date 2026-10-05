export const metadata = {
  title: 'TrueRep Terms of Service - Fitness App Usage Agreement',
  description: 'TrueRep terms of service for using our AI-powered fitness app. Learn about acceptable use, data handling, and user responsibilities.',
  alternates: {
    canonical: 'https://truerep-omega.vercel.app/terms',
  },
  openGraph: {
    title: 'TrueRep Terms of Service - Fitness App Usage Agreement',
    description: 'TrueRep terms of service for using our AI-powered fitness app. Learn about acceptable use, data handling, and user responsibilities.',
    url: 'https://truerep-omega.vercel.app/terms',
    type: 'website',
    siteName: 'TrueRep',
    images: [
      {
        url: 'https://truerep-omega.vercel.app/og-image.jpg',
        width: 1200,
        height: 630,
        alt: 'TrueRep Terms of Service',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'TrueRep Terms of Service - Fitness App Usage Agreement',
    description: 'TrueRep terms of service for using our AI-powered fitness app. Learn about acceptable use, data handling, and user responsibilities.',
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
      name: 'Terms of Service',
      item: 'https://truerep-omega.vercel.app/terms',
    },
  ],
};

export default function TermsLayout({ children }) {
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
