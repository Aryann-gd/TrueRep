'use client';

import React from 'react';
import Link from 'next/link';
import Navbar from '../../components/Navbar';
import Footer from '../../components/Footer';
import { FileText, ShieldAlert, Award, AlertTriangle, ArrowLeft, Mail } from 'lucide-react';

export default function TermsPage() {
  return (
    <>
      <Navbar />

      <main>
        {/* Header Hero */}
        <section className="hex-spotlight hero-section" style={{ minHeight: 'auto', padding: '6rem 0 3.5rem 0' }}>
          <div className="container text-center">
            <div className="pill-badge" style={{ margin: '0 auto 1.5rem auto' }}>
              <FileText size={14} color="var(--primary)" />
              <span>Legal &amp; Usage Terms</span>
            </div>

            <h1 className="hero-title" style={{ fontSize: 'clamp(2.2rem, 5vw, 3.8rem)', marginBottom: '1.25rem' }}>
              TrueRep Terms of Service — <br />
              <span className="text-gradient-cyan">Fitness App Usage Agreement</span>
            </h1>

            <p className="hero-subtext" style={{ maxWidth: '720px', margin: '0 auto' }}>
              TrueRep terms of service for using our AI-powered fitness app. Learn about acceptable use, data handling, open-source licensing, and user responsibilities.
            </p>
          </div>
        </section>

        {/* Content Section */}
        <section style={{ padding: '4rem 0 6rem 0' }}>
          <div className="container" style={{ maxWidth: '840px' }}>
            
            <div style={{
              background: 'var(--bg-surface)',
              border: '1px solid var(--border-card)',
              borderRadius: 'var(--radius-lg)',
              padding: 'clamp(1.5rem, 5vw, 3rem)',
              display: 'flex',
              flexDirection: 'column',
              gap: '2.5rem'
            }}>

              <div>
                <p style={{ color: 'var(--text-secondary)', fontSize: '0.9rem', marginBottom: '1.5rem' }}>
                  <strong>Effective Date:</strong> October 5, 2026 &nbsp;|&nbsp; <strong>Version:</strong> 1.0
                </p>
                <p style={{ color: 'var(--text-main)', lineHeight: 1.7 }}>
                  Welcome to TrueRep. By downloading, accessing, or using the TrueRep mobile application or website (truerep-omega.vercel.app), you agree to be bound by these Terms of Service. If you do not agree to these terms, please do not use the application or website.
                </p>
              </div>

              <div>
                <h2 style={{ fontSize: '1.5rem', fontWeight: 700, color: 'var(--text-main)', marginBottom: '1rem', fontFamily: 'var(--font-display)' }}>
                  1. Fitness &amp; Medical Disclaimer
                </h2>
                <div style={{
                  padding: '1.25rem',
                  background: 'rgba(245, 158, 11, 0.08)',
                  border: '1px solid rgba(245, 158, 11, 0.25)',
                  borderRadius: 'var(--radius-md)',
                  marginBottom: '1rem',
                  display: 'flex',
                  gap: '0.75rem',
                  alignItems: 'flex-start'
                }}>
                  <AlertTriangle size={20} style={{ color: 'var(--accent-warning)', flexShrink: 0, marginTop: '2px' }} />
                  <p style={{ fontSize: '0.92rem', color: 'var(--text-main)', lineHeight: 1.6, margin: 0 }}>
                    <strong>Physical Exercise Warning:</strong> TrueRep is an automated computer vision fitness telemetry and tracking tool. It is not a licensed medical professional, physical therapist, or emergency healthcare service. Exercise entails inherent risks of physical injury. Consult a physician before starting any intense physical fitness routine.
                  </p>
                </div>
                <p style={{ color: 'var(--text-secondary)', lineHeight: 1.65, fontSize: '0.95rem' }}>
                  You assume full responsibility for your health, physical safety, and training environment. Ensure your workout area is clear of trip hazards, pets, sharp objects, and obstructions before initiating an exercise session.
                </p>
              </div>

              <div>
                <h2 style={{ fontSize: '1.5rem', fontWeight: 700, color: 'var(--text-main)', marginBottom: '1rem', fontFamily: 'var(--font-display)' }}>
                  2. Open-Source License &amp; Code Usage
                </h2>
                <p style={{ color: 'var(--text-secondary)', lineHeight: 1.65, fontSize: '0.95rem' }}>
                  TrueRep source code is made available as free and open-source software under the <strong>BSD-3-Clause License</strong> on GitHub. You are free to inspect, fork, modify, and distribute the software subject to the copyright notices and license conditions outlined in the repository repository.
                </p>
              </div>

              <div>
                <h2 style={{ fontSize: '1.5rem', fontWeight: 700, color: 'var(--text-main)', marginBottom: '1rem', fontFamily: 'var(--font-display)' }}>
                  3. Zero-Cloud Privacy &amp; Data Ownership
                </h2>
                <p style={{ color: 'var(--text-secondary)', lineHeight: 1.65, fontSize: '0.95rem', marginBottom: '0.75rem' }}>
                  All AI pose tracking and computer vision inference is performed strictly on your local device. TrueRep does not upload, harvest, or sell camera video or biometric imagery. Your workout history and nutrition logs are stored exclusively in your phone&apos;s internal database.
                </p>
                <p style={{ color: 'var(--text-secondary)', lineHeight: 1.65, fontSize: '0.95rem' }}>
                  Please review our <Link href="/privacy" style={{ color: 'var(--primary)', textDecoration: 'underline' }} title="Read TrueRep Privacy Policy">Privacy Policy</Link> for detailed disclosures regarding device permissions and data handling.
                </p>
              </div>

              <div>
                <h2 style={{ fontSize: '1.5rem', fontWeight: 700, color: 'var(--text-main)', marginBottom: '1rem', fontFamily: 'var(--font-display)' }}>
                  4. User Conduct &amp; Acceptable Use
                </h2>
                <p style={{ color: 'var(--text-secondary)', lineHeight: 1.65, fontSize: '0.95rem' }}>
                  You agree to use TrueRep only for lawful personal fitness purposes. You agree not to attempt to reverse engineer closed proprietary assets, inject malicious payloads into community releases, or use the service in violation of any applicable local, state, national, or international law.
                </p>
              </div>

              <div>
                <h2 style={{ fontSize: '1.5rem', fontWeight: 700, color: 'var(--text-main)', marginBottom: '1rem', fontFamily: 'var(--font-display)' }}>
                  5. Limitation of Liability
                </h2>
                <p style={{ color: 'var(--text-secondary)', lineHeight: 1.65, fontSize: '0.95rem' }}>
                  TO THE MAXIMUM EXTENT PERMITTED BY APPLICABLE LAW, TRUEREP AND ITS CONTRIBUTORS PROVIDE THE APPLICATION &ldquo;AS IS&rdquo; WITHOUT WARRANTIES OF ANY KIND, EXPRESS OR IMPLIED. UNDER NO CIRCUMSTANCES SHALL TRUEREP BE LIABLE FOR ANY DIRECT, INDIRECT, INCIDENTAL, CONSEQUENTIAL, OR PUNITIVE DAMAGES ARISING FROM YOUR USE OF OR INABILITY TO USE THE APPLICATION OR FORM GUIDANCE.
                </p>
              </div>

              <div>
                <h2 style={{ fontSize: '1.5rem', fontWeight: 700, color: 'var(--text-main)', marginBottom: '1rem', fontFamily: 'var(--font-display)' }}>
                  6. Contact &amp; Governance
                </h2>
                <p style={{ color: 'var(--text-secondary)', lineHeight: 1.65, fontSize: '0.95rem' }}>
                  If you have questions regarding these Terms of Service or open-source compliance, contact us via email at <strong>truerep.official@gmail.com</strong> or create an issue on our GitHub repository.
                </p>
              </div>

              <div style={{ borderTop: '1px solid var(--border-subtle)', paddingTop: '1.5rem', display: 'flex', justifyContent: 'space-between', alignItems: 'center', flexWrap: 'wrap', gap: '1rem' }}>
                <Link href="/" className="btn btn-secondary" title="Return to TrueRep Homepage">
                  <ArrowLeft size={16} />
                  <span>Back to Home</span>
                </Link>
                <Link href="/privacy" className="btn btn-primary" title="View TrueRep Privacy Policy">
                  <span>View Privacy Policy</span>
                </Link>
              </div>

            </div>

          </div>
        </section>
      </main>

      <Footer />
    </>
  );
}
