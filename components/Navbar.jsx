'use client';

import React, { useState } from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { Menu, X, ShieldCheck, Download, ExternalLink, BookOpen, Layers } from 'lucide-react';

export default function Navbar() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const pathname = usePathname();
  const isPrivacyPage = pathname === '/privacy';
  const isFeaturesPage = pathname === '/features';
  const isBlogPage = pathname.startsWith('/blog');
  const isTermsPage = pathname === '/terms';

  const toggleMobileMenu = () => {
    setMobileMenuOpen(!mobileMenuOpen);
  };

  const closeMobileMenu = () => {
    setMobileMenuOpen(false);
  };

  return (
    <header className="site-header">
      <div className="container header-inner">
        <Link 
          href="/" 
          className="brand-link" 
          id="nav-brand" 
          onClick={closeMobileMenu}
          title="TrueRep - Home"
        >
          <img 
            src="/assets/icon_flex_512.png" 
            alt="TrueRep AI Rep Counter Logo" 
            className="brand-logo-img" 
            width="36"
            height="36"
          />
          <span className="brand-title">TRUEREP<span className="brand-accent">.</span></span>
        </Link>

        {/* Desktop Navigation */}
        <nav className="nav-links" aria-label="Main navigation">
          <Link 
            href="/features" 
            className={`nav-link ${isFeaturesPage ? 'active' : ''}`}
            title="Explore TrueRep AI Features & Kinematics"
            style={isFeaturesPage ? { color: 'var(--primary)' } : {}}
          >
            Features
          </Link>
          <Link 
            href="/#ranks" 
            className="nav-link"
            title="Explore 9 Strength Ranks"
          >
            Nine Ranks
          </Link>
          <Link 
            href="/#how-it-works" 
            className="nav-link"
            title="How TrueRep AI Workout Tracking Works"
          >
            How It Works
          </Link>
          <Link 
            href="/blog" 
            className={`nav-link ${isBlogPage ? 'active' : ''}`}
            title="Read TrueRep AI Fitness Articles and Tips"
            style={isBlogPage ? { color: 'var(--primary)' } : {}}
          >
            Blog
          </Link>
          <Link 
            href="/#faq" 
            className="nav-link"
            title="Frequently Asked Questions about TrueRep"
          >
            FAQ
          </Link>
          <Link 
            href="/privacy" 
            className={`nav-link ${isPrivacyPage ? 'active' : ''}`}
            style={isPrivacyPage ? { color: 'var(--primary)' } : {}}
            title="TrueRep Zero-Cloud Privacy Policy"
          >
            <ShieldCheck size={16} />
            <span>Privacy</span>
          </Link>
        </nav>

        {/* Desktop CTA Action */}
        <div className="nav-actions">
          <Link 
            href="/#download" 
            className="btn btn-primary" 
            id="nav-get-app-btn"
            title="Download TrueRep Universal Android APK"
          >
            <Download size={16} />
            <span>GET THE APP</span>
          </Link>

          {/* Mobile Menu Hamburger */}
          <button 
            className="mobile-nav-toggle" 
            onClick={toggleMobileMenu} 
            aria-label="Toggle navigation menu"
            aria-expanded={mobileMenuOpen}
          >
            {mobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </div>

      {/* Mobile Drawer Menu */}
      <div className={`mobile-nav-menu ${mobileMenuOpen ? 'open' : ''}`}>
        <Link 
          href="/features" 
          className={`nav-link ${isFeaturesPage ? 'active' : ''}`} 
          onClick={closeMobileMenu}
          title="TrueRep Features"
        >
          Features
        </Link>
        <Link 
          href="/#ranks" 
          className="nav-link" 
          onClick={closeMobileMenu}
          title="Nine Strength Ranks"
        >
          Nine Ranks
        </Link>
        <Link 
          href="/#how-it-works" 
          className="nav-link" 
          onClick={closeMobileMenu}
          title="How TrueRep Works"
        >
          How It Works
        </Link>
        <Link 
          href="/blog" 
          className={`nav-link ${isBlogPage ? 'active' : ''}`} 
          onClick={closeMobileMenu}
          title="TrueRep Fitness Blog"
        >
          Blog
        </Link>
        <Link 
          href="/#faq" 
          className="nav-link" 
          onClick={closeMobileMenu}
          title="TrueRep FAQ"
        >
          FAQ
        </Link>
        <Link 
          href="/privacy" 
          className={`nav-link ${isPrivacyPage ? 'active' : ''}`} 
          onClick={closeMobileMenu}
          title="TrueRep Privacy Policy"
        >
          <ShieldCheck size={16} />
          <span>Privacy Policy</span>
        </Link>
        <Link 
          href="/terms" 
          className={`nav-link ${isTermsPage ? 'active' : ''}`} 
          onClick={closeMobileMenu}
          title="TrueRep Terms of Service"
        >
          <span>Terms of Service</span>
        </Link>

        <div className="nav-actions-mobile">
          <Link 
            href="/#download" 
            className="btn btn-primary" 
            onClick={closeMobileMenu}
            title="Download Free Android APK"
          >
            <Download size={16} />
            <span>DOWNLOAD UNIVERSAL APK</span>
          </Link>
          <a 
            href="https://github.com/Aryann-gd/TrueRep" 
            target="_blank" 
            rel="noopener noreferrer" 
            className="btn btn-secondary"
            onClick={closeMobileMenu}
            title="Visit TrueRep Open-Source GitHub Repository"
          >
            <ExternalLink size={16} />
            <span>GitHub Repository</span>
          </a>
        </div>
      </div>
    </header>
  );
}
