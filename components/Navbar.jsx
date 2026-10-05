'use client';

import React, { useState } from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { Menu, X, ShieldCheck, Download, ExternalLink } from 'lucide-react';

export default function Navbar() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const pathname = usePathname();
  const isPrivacyPage = pathname === '/privacy';

  const toggleMobileMenu = () => {
    setMobileMenuOpen(!mobileMenuOpen);
  };

  const closeMobileMenu = () => {
    setMobileMenuOpen(false);
  };

  return (
    <header className="site-header">
      <div className="container header-inner">
        <Link href="/" className="brand-link" id="nav-brand" onClick={closeMobileMenu}>
          <img src="/assets/icon_flex_512.png" alt="TrueRep Logo" className="brand-logo-img" />
          <span className="brand-title">TRUEREP<span className="brand-accent">.</span></span>
        </Link>

        {/* Desktop Navigation */}
        <nav className="nav-links">
          <Link href="/#features" className={`nav-link ${!isPrivacyPage ? '' : ''}`}>
            Features
          </Link>
          <Link href="/#ranks" className="nav-link">
            Nine Ranks
          </Link>
          <Link href="/#telemetry" className="nav-link">
            AI Vision
          </Link>
          <Link href="/#video-demo" className="nav-link">
            Demo
          </Link>
          <Link href="/#simulator" className="nav-link">
            Angle Gauge
          </Link>
          <Link href="/#faq" className="nav-link">
            FAQ
          </Link>
          <Link href="/#download" className="nav-link">
            Download APK
          </Link>
          <Link 
            href="/privacy" 
            className={`nav-link ${isPrivacyPage ? 'active' : ''}`}
            style={isPrivacyPage ? { color: 'var(--primary)' } : {}}
          >
            <ShieldCheck size={16} />
            <span>Privacy Policy</span>
          </Link>
        </nav>

        {/* Desktop CTA Action */}
        <div className="nav-actions">
          <Link href="/#download" className="btn btn-primary" id="nav-get-app-btn">
            <Download size={16} />
            <span>GET THE APP</span>
          </Link>

          {/* Mobile Menu Hamburger */}
          <button 
            className="mobile-nav-toggle" 
            onClick={toggleMobileMenu} 
            aria-label="Toggle navigation menu"
          >
            {mobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </div>

      {/* Mobile Drawer Menu */}
      <div className={`mobile-nav-menu ${mobileMenuOpen ? 'open' : ''}`}>
        <Link href="/#features" className="nav-link" onClick={closeMobileMenu}>
          Features
        </Link>
        <Link href="/#ranks" className="nav-link" onClick={closeMobileMenu}>
          Nine Ranks
        </Link>
        <Link href="/#telemetry" className="nav-link" onClick={closeMobileMenu}>
          AI Vision
        </Link>
        <Link href="/#video-demo" className="nav-link" onClick={closeMobileMenu}>
          Demo Video
        </Link>
        <Link href="/#simulator" className="nav-link" onClick={closeMobileMenu}>
          Angle Gauge
        </Link>
        <Link href="/#faq" className="nav-link" onClick={closeMobileMenu}>
          FAQ
        </Link>
        <Link href="/#download" className="nav-link" onClick={closeMobileMenu}>
          Download APK
        </Link>
        <Link 
          href="/privacy" 
          className={`nav-link ${isPrivacyPage ? 'active' : ''}`} 
          onClick={closeMobileMenu}
        >
          <ShieldCheck size={16} />
          <span>Privacy Policy</span>
        </Link>

        <div className="nav-actions-mobile">
          <Link href="/#download" className="btn btn-primary" onClick={closeMobileMenu}>
            <Download size={16} />
            <span>DOWNLOAD UNIVERSAL APK</span>
          </Link>
          <a 
            href="https://github.com/Aryann-gd/TrueRep" 
            target="_blank" 
            rel="noopener noreferrer" 
            className="btn btn-secondary"
            onClick={closeMobileMenu}
          >
            <ExternalLink size={16} />
            <span>GitHub Repository</span>
          </a>
        </div>
      </div>
    </header>
  );
}
