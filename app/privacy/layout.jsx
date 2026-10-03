export const metadata = {
  title: 'Privacy Policy — TrueRep Zero-Cloud AI Workout Tracker',
  description: 'TrueRep privacy policy: 100% on-device AI processing, zero camera video uploaded to the cloud, local database storage, and complete user privacy.',
  alternates: {
    canonical: '/privacy',
  },
  openGraph: {
    title: 'TrueRep Privacy Policy — 100% On-Device & Zero Cloud Storage',
    description: 'Learn how TrueRep protects your privacy with on-device computer vision and zero cloud video storage.',
    url: 'https://truerep-omega.vercel.app/privacy',
    type: 'website',
  },
  twitter: {
    card: 'summary',
    title: 'TrueRep Privacy Policy — 100% On-Device Privacy',
    description: 'Zero cloud video, offline calorie logging, and on-device computer vision.',
  },
};

export default function PrivacyLayout({ children }) {
  return children;
}
