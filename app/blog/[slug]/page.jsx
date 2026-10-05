import React from 'react';
import Link from 'next/link';
import { notFound } from 'next/navigation';
import Navbar from '../../../components/Navbar';
import Footer from '../../../components/Footer';
import DownloadHub from '../../../components/DownloadHub';
import { BLOG_POSTS } from '../../../lib/blog-data';
import { ArrowLeft, Calendar, Clock, User, Share2, Tag, CheckCircle2, ChevronRight } from 'lucide-react';

export function generateStaticParams() {
  return Object.keys(BLOG_POSTS).map((slug) => ({
    slug,
  }));
}

export function generateMetadata({ params }) {
  const post = BLOG_POSTS[params.slug];
  if (!post) {
    return {
      title: 'Article Not Found | TrueRep Blog',
    };
  }

  const postUrl = `https://truerep-omega.vercel.app/blog/${post.slug}`;
  const fullTitle = `${post.title} | TrueRep Blog - AI Fitness Tips`;

  return {
    title: fullTitle,
    description: post.description,
    alternates: {
      canonical: postUrl,
    },
    openGraph: {
      title: fullTitle,
      description: post.description,
      url: postUrl,
      type: 'article',
      publishedTime: post.publishDate,
      modifiedTime: post.modifiedDate,
      authors: [post.author],
      siteName: 'TrueRep',
      images: [
        {
          url: 'https://truerep-omega.vercel.app/og-image.jpg',
          width: 1200,
          height: 630,
          alt: post.title,
        },
      ],
    },
    twitter: {
      card: 'summary_large_image',
      title: fullTitle,
      description: post.description,
      images: ['https://truerep-omega.vercel.app/twitter-image.jpg'],
      site: '@truerep_app',
    },
  };
}

export default function BlogPostPage({ params }) {
  const post = BLOG_POSTS[params.slug];

  if (!post) {
    notFound();
  }

  const postUrl = `https://truerep-omega.vercel.app/blog/${post.slug}`;

  const jsonLdArticle = {
    '@context': 'https://schema.org',
    '@type': 'BlogPosting',
    headline: post.title,
    description: post.description,
    image: `https://truerep-omega.vercel.app${post.coverImage}`,
    datePublished: `${post.publishDate}T00:00:00Z`,
    dateModified: `${post.modifiedDate}T00:00:00Z`,
    author: {
      '@type': 'Organization',
      name: 'TrueRep',
      url: 'https://truerep-omega.vercel.app',
    },
    publisher: {
      '@type': 'Organization',
      name: 'TrueRep',
      logo: {
        '@type': 'ImageObject',
        url: 'https://truerep-omega.vercel.app/logo.png',
      },
    },
    mainEntityOfPage: {
      '@type': 'WebPage',
      '@id': postUrl,
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
      {
        '@type': 'ListItem',
        position: 3,
        name: post.title,
        item: postUrl,
      },
    ],
  };

  // Convert markdown content sections simply and cleanly
  const paragraphs = post.content.split('\n\n').filter(Boolean);

  return (
    <>
      <Navbar />

      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLdArticle) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLdBreadcrumb) }}
      />

      <main style={{ paddingBottom: '5rem' }}>
        {/* Breadcrumb Navigation Bar */}
        <div style={{ borderBottom: '1px solid var(--border-subtle)', background: 'var(--bg-surface)' }}>
          <div className="container" style={{ padding: '0.85rem 1.5rem' }}>
            <nav aria-label="Breadcrumb" style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', fontSize: '0.85rem', color: 'var(--text-secondary)' }}>
              <Link href="/" style={{ color: 'var(--text-secondary)', textDecoration: 'none' }} title="TrueRep Home">
                Home
              </Link>
              <ChevronRight size={14} />
              <Link href="/blog" style={{ color: 'var(--text-secondary)', textDecoration: 'none' }} title="TrueRep Blog">
                Blog
              </Link>
              <ChevronRight size={14} />
              <span style={{ color: 'var(--primary)', fontWeight: 600, overflow: 'hidden', textOverflow: 'ellipsis', whiteSpace: 'nowrap', maxWidth: '300px' }}>
                {post.title}
              </span>
            </nav>
          </div>
        </div>

        {/* Article Header */}
        <header className="hex-spotlight" style={{ padding: '4rem 0 3rem 0', borderBottom: '1px solid var(--border-subtle)' }}>
          <div className="container" style={{ maxWidth: '860px' }}>
            
            <div style={{ display: 'flex', alignItems: 'center', gap: '0.75rem', marginBottom: '1.25rem', flexWrap: 'wrap' }}>
              <span className="card-tag">{post.category}</span>
              <div style={{ display: 'flex', alignItems: 'center', gap: '0.4rem', fontSize: '0.85rem', color: 'var(--text-secondary)' }}>
                <Clock size={14} />
                <span>{post.readTime}</span>
              </div>
              <div style={{ display: 'flex', alignItems: 'center', gap: '0.4rem', fontSize: '0.85rem', color: 'var(--text-secondary)' }}>
                <Calendar size={14} />
                <time dateTime={post.publishDate}>{post.publishDate}</time>
              </div>
            </div>

            <h1 className="hero-title" style={{ fontSize: 'clamp(2.2rem, 4.5vw, 3.5rem)', textAlign: 'left', marginBottom: '1.5rem', lineHeight: 1.25 }}>
              {post.title}
            </h1>

            <p style={{ fontSize: '1.15rem', color: 'var(--text-secondary)', lineHeight: 1.7, marginBottom: '2rem' }}>
              {post.description}
            </p>

            <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', borderTop: '1px solid var(--border-subtle)', paddingTop: '1.25rem', flexWrap: 'wrap', gap: '1rem' }}>
              <div style={{ display: 'flex', alignItems: 'center', gap: '0.75rem' }}>
                <div style={{
                  width: '40px',
                  height: '40px',
                  borderRadius: '50%',
                  background: 'var(--bg-surface-elevated)',
                  border: '1px solid var(--border-card)',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  color: 'var(--primary)'
                }}>
                  <User size={20} />
                </div>
                <div>
                  <div style={{ fontSize: '0.9rem', fontWeight: 700, color: 'var(--text-main)' }}>{post.author}</div>
                  <div style={{ fontSize: '0.78rem', color: 'var(--text-sub)' }}>Published on {post.publishDate}</div>
                </div>
              </div>

              <Link href="/blog" className="btn btn-secondary" style={{ padding: '0.5rem 1rem', fontSize: '0.85rem' }} title="Return to Blog Index">
                <ArrowLeft size={14} />
                <span>All Articles</span>
              </Link>
            </div>

          </div>
        </header>

        {/* Article Body */}
        <article style={{ padding: '3.5rem 0' }}>
          <div className="container" style={{ maxWidth: '860px' }}>
            <div style={{
              background: 'var(--bg-surface)',
              border: '1px solid var(--border-card)',
              borderRadius: 'var(--radius-lg)',
              padding: 'clamp(1.5rem, 5vw, 3.5rem)',
              fontSize: '1.05rem',
              lineHeight: 1.8,
              color: 'var(--text-main)'
            }}>
              {paragraphs.map((para, i) => {
                const trimmed = para.trim();

                // Markdown H2
                if (trimmed.startsWith('## ')) {
                  return (
                    <h2 key={i} style={{ 
                      fontSize: '1.8rem', 
                      fontWeight: 800, 
                      color: 'var(--text-main)', 
                      margin: '2.5rem 0 1rem 0',
                      fontFamily: 'var(--font-display)',
                      borderBottom: '1px solid var(--border-subtle)',
                      paddingBottom: '0.5rem'
                    }}>
                      {trimmed.replace('## ', '')}
                    </h2>
                  );
                }

                // Markdown H3
                if (trimmed.startsWith('### ')) {
                  return (
                    <h3 key={i} style={{ 
                      fontSize: '1.35rem', 
                      fontWeight: 700, 
                      color: 'var(--primary)', 
                      margin: '1.75rem 0 0.75rem 0',
                      fontFamily: 'var(--font-display)'
                    }}>
                      {trimmed.replace('### ', '')}
                    </h3>
                  );
                }

                // Horizontal Rule
                if (trimmed === '---') {
                  return <hr key={i} style={{ border: 'none', borderTop: '1px solid var(--border-subtle)', margin: '2.5rem 0' }} />;
                }

                // List items
                if (trimmed.startsWith('- ') || trimmed.startsWith('1. ')) {
                  const lines = trimmed.split('\n');
                  return (
                    <ul key={i} style={{ margin: '1rem 0 1.5rem 1.5rem', display: 'flex', flexDirection: 'column', gap: '0.5rem' }}>
                      {lines.map((line, lIdx) => (
                        <li key={lIdx} style={{ color: 'var(--text-secondary)' }}>
                          {line.replace(/^[-*]|\d+\.\s*/, '').trim()}
                        </li>
                      ))}
                    </ul>
                  );
                }

                // Regular Paragraph
                return (
                  <p key={i} style={{ color: 'var(--text-secondary)', marginBottom: '1.5rem' }}>
                    {trimmed}
                  </p>
                );
              })}

              {/* Callout box inside article */}
              <div style={{
                marginTop: '3rem',
                padding: '2rem',
                background: 'linear-gradient(135deg, rgba(89, 185, 249, 0.1) 0%, rgba(16, 185, 129, 0.05) 100%)',
                border: '1px solid var(--border-active)',
                borderRadius: 'var(--radius-md)',
                display: 'flex',
                flexDirection: 'column',
                gap: '1rem'
              }}>
                <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', color: 'var(--primary)', fontWeight: 700 }}>
                  <CheckCircle2 size={20} />
                  <span>Start Training with TrueRep Today</span>
                </div>
                <p style={{ margin: 0, fontSize: '0.95rem', color: 'var(--text-main)', lineHeight: 1.6 }}>
                  Put this biomechanical science into practice. TrueRep counts only honest reps with 100% on-device AI. No credit card, no sign-up, no cloud data.
                </p>
                <div style={{ display: 'flex', gap: '1rem', flexWrap: 'wrap', marginTop: '0.5rem' }}>
                  <Link href="/#download" className="btn btn-primary" title="Download TrueRep App Free">
                    <span>Download TrueRep Free</span>
                  </Link>
                  <Link href="/features" className="btn btn-secondary" title="Explore TrueRep Features">
                    <span>Explore All Features</span>
                  </Link>
                </div>
              </div>

            </div>

            {/* Back to Blog & Next Articles */}
            <div style={{ marginTop: '2.5rem', display: 'flex', justifyContent: 'space-between', alignItems: 'center', flexWrap: 'wrap', gap: '1rem' }}>
              <Link href="/blog" className="btn btn-secondary" title="View all fitness blog articles">
                <ArrowLeft size={16} />
                <span>Back to All Articles</span>
              </Link>
              <Link href="/features" className="btn btn-secondary" title="See TrueRep full features">
                <span>View TrueRep Features</span>
                <ChevronRight size={16} />
              </Link>
            </div>

          </div>
        </article>
      </main>

      <Footer />
    </>
  );
}
