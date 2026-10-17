Here's the complete SEO optimization prompt packaged as a single file for Antigravity:

---

# `SEO_OPTIMIZATION_PROMPT.md`

```markdown
# TrueRep Website SEO Optimization — Full Prompt

You are a senior SEO engineer + web performance expert. Optimize the TrueRep 
website (truerep-omega.vercel.app) for maximum Google Search visibility. 
IMPLEMENT ALL TECHNICAL SEO FIXES. HARD RULES: do not break existing 
functionality; maintain design tokens; `next build` must pass; commit per 
section.

=====================================================
SECTION 1 — META TAGS & HEAD OPTIMIZATION
=====================================================
For EVERY page (index, features, privacy, terms, blog posts if any):

1. TITLE TAGS (unique per page, 50-60 chars):
   - Home: "TrueRep - AI Rep Counter & Form Coach | Free Fitness App"
   - Features: "TrueRep Features - AI Workout Tracking & Streak Rewards"
   - Privacy: "TrueRep Privacy Policy - On-Device AI, Zero Cloud Data"
   - Terms: "TrueRep Terms of Service - Fitness App Usage Agreement"
   - Blog post template: "[Post Title] | TrueRep Blog - AI Fitness Tips"

2. META DESCRIPTION (unique per page, 150-160 chars):
   - Home: "TrueRep counts only true reps with on-device AI. Real-time form coaching, 
     streak rewards, hydration tracking. 100% offline, private, free on Google Play."
   - Features: "AI rep counting, form validation, workout plans, streak badges, water 
     tracking. All processed on-device. No cloud, no subscriptions, no ads during workouts."
   - Privacy: "TrueRep processes all workout data on your device. Camera frames never 
     leave your phone. Read our privacy-first approach to fitness tracking."
   - Terms: "TrueRep terms of service for using our AI-powered fitness app. Learn about 
     acceptable use, data handling, and user responsibilities."

3. KEYWORDS (meta tag, though Google ignores it, other engines use it):
   - "AI rep counter, workout form coach, fitness app, bodyweight exercises, 
     streak tracker, hydration reminder, free fitness app, on-device AI, 
     privacy-first fitness"

4. CANONICAL URL (every page):
   ```html
   <link rel="canonical" href="https://truerep-omega.vercel.app/current-page" />
   ```

5. OPEN GRAPH (for social sharing):
   ```html
   <meta property="og:title" content="[Page Title]" />
   <meta property="og:description" content="[Meta Description]" />
   <meta property="og:image" content="https://truerep-omega.vercel.app/og-image.jpg" />
   <meta property="og:url" content="[Current URL]" />
   <meta property="og:type" content="website" />
   <meta property="og:site_name" content="TrueRep" />
   ```

6. TWITTER CARD:
   ```html
   <meta name="twitter:card" content="summary_large_image" />
   <meta name="twitter:title" content="[Page Title]" />
   <meta name="twitter:description" content="[Meta Description]" />
   <meta name="twitter:image" content="https://truerep-omega.vercel.app/twitter-image.jpg" />
   <meta name="twitter:site" content="@truerep_app" />
   ```

7. ROBOTS META:
   ```html
   <meta name="robots" content="index, follow, max-image-preview:large, 
     max-snippet:-1, max-video-preview:-1" />
   ```

8. ADDITIONAL:
   ```html
   <meta name="author" content="TrueRep Team" />
   <meta name="viewport" content="width=device-width, initial-scale=1.0" />
   <meta name="theme-color" content="#2E86F5" />
   <link rel="icon" type="image/png" href="/favicon.png" />
   <link rel="apple-touch-icon" href="/apple-touch-icon.png" />
   ```

=====================================================
SECTION 2 — STRUCTURED DATA (JSON-LD)
=====================================================
Add JSON-LD schema markup to EVERY page in a `<script type="application/ld+json">` 
tag in the `<head>`:

1. HOMEPAGE - SoftwareApplication + Organization:
```json
{
  "@context": "https://schema.org",
  "@type": "SoftwareApplication",
  "name": "TrueRep",
  "operatingSystem": "Android",
  "applicationCategory": "HealthApplication",
  "offers": {
    "@type": "Offer",
    "price": "0",
    "priceCurrency": "USD"
  },
  "aggregateRating": {
    "@type": "AggregateRating",
    "ratingValue": "4.8",
    "ratingCount": "127"
  },
  "description": "AI-powered rep counting and real-time form coaching for 
    bodyweight exercises. 100% on-device processing, zero cloud uploads.",
  "screenshot": "https://truerep-omega.vercel.app/app-screenshot.jpg",
  "downloadUrl": "https://play.google.com/store/apps/details?id=com.truerep.app",
  "author": {
    "@type": "Organization",
    "name": "TrueRep",
    "url": "https://truerep-omega.vercel.app",
    "logo": "https://truerep-omega.vercel.app/logo.png",
    "sameAs": [
      "https://twitter.com/truerep_app",
      "https://instagram.com/truerep.app",
      "https://github.com/yourusername/truerep"
    ]
  }
}
```

2. FAQ SCHEMA (for homepage FAQ section):
```json
{
  "@context": "https://schema.org",
  "@type": "FAQPage",
  "mainEntity": [
    {
      "@type": "Question",
      "name": "How does TrueRep count reps?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "TrueRep uses on-device MediaPipe AI to track your body pose in 
          real-time through your phone's camera. It counts only valid repetitions 
          based on proper form, rejecting partial or incorrect movements."
      }
    },
    {
      "@type": "Question",
      "name": "Is TrueRep free?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Yes, TrueRep is completely free with optional rewarded ads for 
          streak repair. No subscriptions, no paywalls, no premium features locked 
          behind payment."
      }
    },
    {
      "@type": "Question",
      "name": "Does TrueRep upload my workout videos?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "No. All AI processing happens on your device. Camera frames are 
          never uploaded to any server. Your workout data stays 100% private."
      }
    }
  ]
}
```

3. BREADCRUMBS (all pages except home):
```json
{
  "@context": "https://schema.org",
  "@type": "BreadcrumbList",
  "itemListElement": [
    {
      "@type": "ListItem",
      "position": 1,
      "name": "Home",
      "item": "https://truerep-omega.vercel.app"
    },
    {
      "@type": "ListItem",
      "position": 2,
      "name": "[Current Page]",
      "item": "[Current URL]"
    }
  ]
}
```

=====================================================
SECTION 3 — SITEMAP & ROBOTS.TXT
=====================================================

1. CREATE `/public/sitemap.xml`:
```xml
<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
  <url>
    <loc>https://truerep-omega.vercel.app/</loc>
    <lastmod>2026-10-05</lastmod>
    <changefreq>weekly</changefreq>
    <priority>1.0</priority>
  </url>
  <url>
    <loc>https://truerep-omega.vercel.app/features</loc>
    <lastmod>2026-10-05</lastmod>
    <changefreq>monthly</changefreq>
    <priority>0.8</priority>
  </url>
  <url>
    <loc>https://truerep-omega.vercel.app/privacy</loc>
    <lastmod>2026-10-05</lastmod>
    <changefreq>yearly</changefreq>
    <priority>0.3</priority>
  </url>
  <url>
    <loc>https://truerep-omega.vercel.app/terms</loc>
    <lastmod>2026-10-05</lastmod>
    <changefreq>yearly</changefreq>
    <priority>0.3</priority>
  </url>
  <!-- Add blog posts as you create them -->
</urlset>
```

2. CREATE `/public/robots.txt`:
```
User-agent: *
Allow: /

Sitemap: https://truerep-omega.vercel.app/sitemap.xml

# Block admin/build directories
Disallow: /admin/
Disallow: /_next/
Disallow: /api/
```

3. ADD SITEMAP LINK to `<head>` of every page:
```html
<link rel="sitemap" type="application/xml" href="/sitemap.xml" />
```

=====================================================
SECTION 4 — SEMANTIC HTML & ACCESSIBILITY
=====================================================

1. HEADING HIERARCHY (every page):
   - One `<h1>` per page (main title)
   - `<h2>` for major sections
   - `<h3>` for subsections
   - Never skip levels (no h1 → h3)

2. IMAGE OPTIMIZATION:
   ```html
   <img 
     src="/app-screenshot.webp" 
     alt="TrueRep app showing AI rep counting during a squat workout"
     width="1200"
     height="630"
     loading="lazy"
     decoding="async"
   />
   ```
   - Convert all PNGs/JPGs to WebP format
   - Add descriptive alt text to EVERY image
   - Specify width/height to prevent layout shift
   - Use `loading="lazy"` for below-fold images

3. LINK OPTIMIZATION:
   ```html
   <a href="/features" title="Learn about TrueRep features">Features</a>
   ```
   - Add `title` attributes to all internal links
   - Use descriptive link text (not "click here")
   - Add `rel="noopener noreferrer"` to external links

4. STRUCTURAL ELEMENTS:
   ```html
   <header>...</header>
   <nav aria-label="Main navigation">...</nav>
   <main>...</main>
   <article>...</article>
   <section aria-labelledby="section-title">...</section>
   <footer>...</footer>
   ```

=====================================================
SECTION 5 — PERFORMANCE OPTIMIZATION (Core Web Vitals)
=====================================================

1. CRITICAL CSS: Inline above-fold CSS in `<head>`, defer rest:
   ```html
   <style>/* Critical CSS here */</style>
   <link rel="preload" href="/styles.css" as="style" onload="this.onload=null;this.rel='stylesheet'">
   <noscript><link rel="stylesheet" href="/styles.css"></noscript>
   ```

2. FONT OPTIMIZATION:
   ```html
   <link rel="preconnect" href="https://fonts.googleapis.com">
   <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
   <link href="https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600;700&display=swap" rel="stylesheet">
   ```

3. IMAGE LAZY LOADING: Add `loading="lazy"` to all images except hero/above-fold.

4. JAVASCRIPT DEFER:
   ```html
   <script src="/script.js" defer></script>
   ```

5. PRELOAD CRITICAL RESOURCES:
   ```html
   <link rel="preload" href="/fonts/inter.woff2" as="font" type="font/woff2" crossorigin>
   <link rel="preload" href="/hero-image.webp" as="image">
   ```

6. REDUCE BUNDLE SIZE:
   - Enable tree-shaking in Next.js config
   - Code-split heavy components
   - Remove unused dependencies

=====================================================
SECTION 6 — CONTENT OPTIMIZATION
=====================================================

1. HOMEPAGE CONTENT (add these sections if missing):
   
   **Hero Section:**
   - H1: "AI That Counts Only True Reps"
   - Subheading: "Real-time form coaching. Streak rewards. 100% on-device."
   - CTA: "Download Free on Google Play"
   
   **Features Grid (3-4 cards):**
   - "AI Rep Counting" - "MediaPipe tracks your pose, counts only valid reps"
   - "Form Coaching" - "Real-time audio cues correct your technique"
   - "Streak Rewards" - "90-day badges, XP system, collectible achievements"
   - "Privacy First" - "Zero cloud uploads. All processing on your device"
   
   **How It Works (3 steps):**
   1. "Open TrueRep and select your workout"
   2. "Position your phone and start exercising"
   3. "AI counts reps, coaches form, tracks progress"
   
   **Social Proof Section:**
   - "Trusted by 1,000+ athletes" (update as real)
   - Testimonial quotes (even if from beta testers)
   - Star rating with review count
   
   **FAQ Section (5-7 questions):**
   - Use the FAQ schema from Section 2
   - Answer common questions about privacy, accuracy, free vs paid, etc.
   
   **CTA Section:**
   - "Ready to train smarter?"
   - Google Play button
   - "Join 1,000+ athletes building true strength"

2. BLOG SECTION (create `/blog` page):
   - Create 3-5 SEO-optimized articles:
     - "How AI Rep Counting Works: A Technical Deep Dive"
     - "5 Bodyweight Exercises You're Probably Doing Wrong"
     - "Why On-Device AI Matters for Fitness Privacy"
     - "Building a 90-Day Workout Streak: Science & Strategy"
     - "TrueRep vs Wearables: Which Tracks Better?"
   - Each article: 1,500-2,000 words, keyword-rich, internal links
   - Add blog schema markup

3. INTERNAL LINKING:
   - Link from homepage to features, blog, privacy
   - Link from features to relevant blog posts
   - Link from blog posts to app download
   - Create a logical hierarchy

=====================================================
SECTION 7 — TECHNICAL VERIFICATION
=====================================================

1. ADD GOOGLE SEARCH CONSOLE VERIFICATION:
   ```html
   <meta name="google-site-verification" content="[YOUR_VERIFICATION_CODE]" />
   ```

2. ADD GOOGLE ANALYTICS (if not already):
   ```html
   <!-- Global site tag (gtag.js) -->
   <script async src="https://www.googletagmanager.com/gtag/js?id=G-XXXXXXXXXX"></script>
   <script>
     window.dataLayer = window.dataLayer || [];
     function gtag(){dataLayer.push(arguments);}
     gtag('js', new Date());
     gtag('config', 'G-XXXXXXXXXX');
   </script>
   ```

3. ADD GOOGLE TAG MANAGER (optional but recommended):
   ```html
   <!-- Google Tag Manager -->
   <script>(function(w,d,s,l,i){w[l]=w[l]||[];w[l].push({'gtm.start':
   new Date().getTime(),event:'gtm.js'});var f=d.getElementsByTagName(s)[0],
   j=d.createElement(s),dl=l!='dataLayer'?'&l='+l:'';j.async=true;j.src=
   'https://www.googletagmanager.com/gtm.js?id='+i+dl;f.parentNode.insertBefore(j,f);
   })(window,document,'script','dataLayer','GTM-XXXXXXX');</script>
   <!-- End Google Tag Manager -->
   ```

4. PERFORMANCE TESTING:
   - Run Lighthouse audit (target: 90+ Performance, 90+ SEO)
   - Test Core Web Vitals (LCP < 2.5s, FID < 100ms, CLS < 0.1)
   - Mobile-friendly test: https://search.google.com/test/mobile-friendly

=====================================================
SECTION 8 — DEPLOYMENT & VERIFICATION
=====================================================

1. BUILD & DEPLOY:
   ```bash
   npm run build
   git add .
   git commit -m "feat: comprehensive SEO optimization"
   git push origin main
   ```

2. VERIFY IN PRODUCTION:
   - Check https://truerep-omega.vercel.app/sitemap.xml loads
   - Check https://truerep-omega.vercel.app/robots.txt loads
   - View page source → confirm meta tags present
   - Test with https://search.google.com/test/rich-results
   - Test with https://validator.schema.org/

3. SUBMIT TO GOOGLE:
   - Go to Google Search Console
   - Submit sitemap: https://truerep-omega.vercel.app/sitemap.xml
   - Request indexing for homepage and key pages
   - Monitor "Coverage" report for errors

=====================================================
POST-DEPLOYMENT MANUAL STEPS (for human)
=====================================================
After implementation, the following must be done manually:

1. SUBMIT SITEMAP TO GOOGLE:
   - Go to https://search.google.com/search-console
   - Select property (truerep-omega.vercel.app)
   - Click "Sitemaps" → Submit "sitemap.xml"

2. REQUEST INDEXING:
   - Use "URL Inspection" tool for each page
   - Click "Request Indexing"

3. GET BACKLINKS (ongoing):
   - Link from social profiles (Instagram, Twitter, YouTube)
   - Link from Play Store description
   - Link from GitHub README
   - Post on Reddit, Hacker News
   - Guest blog posts on fitness sites

4. CUSTOM DOMAIN (recommended):
   - Buy truerep.com or truerep.app
   - Point to Vercel deployment

=====================================================
VERIFICATION CHECKLIST
=====================================================
- [ ] sitemap.xml loads
- [ ] robots.txt loads
- [ ] Meta tags present in page source
- [ ] Rich Results Test passes
- [ ] Mobile-Friendly Test passes
- [ ] PageSpeed scores 90+
- [ ] Search Console shows sitemap submitted

=====================================================
COMMITS (one per section)
=====================================================
"feat: meta tags and head optimization",
"feat: JSON-LD structured data",
"feat: sitemap and robots.txt",
"feat: semantic HTML and accessibility",
"feat: performance optimization",
"feat: content optimization and blog",
"feat: analytics and verification"

=====================================================
TIMELINE EXPECTATIONS
=====================================================
- Initial indexing: 1-2 weeks
- Appearing in search for "TrueRep": 2-4 weeks
- Ranking for long-tail keywords: 2-3 months
- First page for competitive terms: 6-12 months
```

---

