import React from 'react';
import Link from 'next/link';
import Navbar from '../../components/Navbar';
import Footer from '../../components/Footer';
import { BLOG_POSTS } from '../../lib/blog-data';
import { BookOpen, Calendar, Clock, ArrowRight, User } from 'lucide-react';

export default function BlogIndexPage() {
  const posts = Object.values(BLOG_POSTS);

  return (
    <>
      <Navbar />

      <main>
        {/* Blog Hero Section */}
        <section className="hex-spotlight hero-section" style={{ minHeight: 'auto', padding: '6rem 0 3.5rem 0' }}>
          <div className="container text-center">
            
            <div className="pill-badge" style={{ margin: '0 auto 1.5rem auto' }}>
              <BookOpen size={14} color="var(--primary)" />
              <span>TrueRep Research &amp; Fitness Engineering</span>
            </div>

            <h1 className="hero-title" style={{ fontSize: 'clamp(2.4rem, 5vw, 4rem)', marginBottom: '1.25rem' }}>
              TrueRep Blog — <br />
              <span className="text-gradient-cyan">AI Fitness Tips &amp; Form Guides</span>
            </h1>

            <p className="hero-subtext" style={{ maxWidth: '720px', margin: '0 auto' }}>
              Explore deep dives into on-device computer vision kinematics, bodyweight exercise form corrections, privacy-first telemetry, and the science of building long-term workout streaks.
            </p>

          </div>
        </section>

        {/* Blog Posts Grid */}
        <section style={{ padding: '3rem 0 6rem 0' }}>
          <div className="container">
            
            <div className="section-head text-center" style={{ marginBottom: '3rem' }}>
              <h2 className="section-title">Latest Articles &amp; Technical Analysis</h2>
              <p className="section-subtitle" style={{ maxWidth: '640px', margin: '0 auto' }}>
                Evidence-based biomechanics and on-device machine learning engineering written by the TrueRep team.
              </p>
            </div>

            <div style={{
              display: 'grid',
              gridTemplateColumns: 'repeat(auto-fit, minmax(340px, 1fr))',
              gap: '2rem'
            }}>
              {posts.map((post) => (
                <article 
                  key={post.slug}
                  className="bento-card"
                  style={{
                    display: 'flex',
                    flexDirection: 'column',
                    justifyContent: 'space-between',
                    padding: '1.75rem',
                    borderRadius: 'var(--radius-lg)',
                    border: '1px solid var(--border-card)',
                    background: 'var(--bg-surface)'
                  }}
                >
                  <div>
                    <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', marginBottom: '1rem' }}>
                      <span className="card-tag">{post.category}</span>
                      <div style={{ display: 'flex', alignItems: 'center', gap: '0.4rem', fontSize: '0.8rem', color: 'var(--text-sub)' }}>
                        <Clock size={13} />
                        <span>{post.readTime}</span>
                      </div>
                    </div>

                    <h3 style={{ fontSize: '1.35rem', fontWeight: 800, color: 'var(--text-main)', marginBottom: '0.85rem', lineHeight: 1.35, fontFamily: 'var(--font-display)' }}>
                      <Link href={`/blog/${post.slug}`} style={{ color: 'inherit', textDecoration: 'none' }} title={post.title}>
                        {post.title}
                      </Link>
                    </h3>

                    <p style={{ fontSize: '0.92rem', color: 'var(--text-secondary)', lineHeight: 1.6, marginBottom: '1.5rem' }}>
                      {post.excerpt}
                    </p>
                  </div>

                  <div style={{ borderTop: '1px solid var(--border-subtle)', paddingTop: '1.25rem', display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
                    <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', fontSize: '0.82rem', color: 'var(--text-secondary)' }}>
                      <Calendar size={14} />
                      <time dateTime={post.publishDate}>{post.publishDate}</time>
                    </div>

                    <Link 
                      href={`/blog/${post.slug}`} 
                      className="btn btn-secondary" 
                      style={{ padding: '0.5rem 1rem', fontSize: '0.85rem', gap: '0.35rem' }}
                      title={`Read ${post.title}`}
                    >
                      <span>Read Article</span>
                      <ArrowRight size={14} />
                    </Link>
                  </div>
                </article>
              ))}
            </div>

          </div>
        </section>
      </main>

      <Footer />
    </>
  );
}
