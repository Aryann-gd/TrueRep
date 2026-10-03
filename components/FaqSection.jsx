'use client';

import React, { useState } from 'react';
import { ChevronDown, HelpCircle } from 'lucide-react';

const FAQS = [
  {
    q: 'How does TrueRep track my workout form in real time?',
    a: 'TrueRep uses on-device computer vision powered by Google MediaPipe 3D pose estimation. It tracks 33 anatomical landmarks across your shoulders, hips, knees, and ankles at 30+ frames per second to calculate exact joint articulation angles and verify full depth before counting a rep.'
  },
  {
    q: 'Does TrueRep upload my camera video or personal workout footage to the cloud?',
    a: 'No, never. TrueRep is engineered with a strict zero-cloud privacy architecture. All camera frames are processed temporarily in volatile device RAM and immediately discarded. No video, biometric imagery, or audio ever leaves your phone.'
  },
  {
    q: 'How do the 9 Gym Strength Ranks work?',
    a: 'TrueRep gamifies your fitness journey across 9 distinct tiers: Wood, Bronze, Silver, Gold, Platinum, Diamond, Champion, Titan, and Olympian. You earn Rank Points (RP) for verified reps, hitting optimal joint angles, and maintaining consistent tempo without form breakdown.'
  },
  {
    q: 'Can I use TrueRep completely offline without internet or cellular data?',
    a: 'Yes. Both the AI computer vision models and the offline nutritional macro database run 100% locally on your phone. You can use TrueRep in underground gym basements, outdoor parks, or on airplane mode with zero connectivity required.'
  },
  {
    q: 'What exercises are supported by TrueRep AI coaching?',
    a: 'TrueRep currently features specialized kinematic models for Squats (with real-time hip/knee depth analysis), Push-ups (with chest-to-deck verification and lumbar alignment), and custom set logging for full-body strength routines.'
  },
  {
    q: 'Is TrueRep free and open source?',
    a: 'Yes! TrueRep is completely free, open-source software (FOSS). There are no paywalls, hidden in-app subscriptions, or locked features. You can audit the code and download the latest verified APK directly on GitHub.'
  }
];

export default function FaqSection() {
  const [openIndex, setOpenIndex] = useState(0);

  const toggleFaq = (idx) => {
    setOpenIndex(openIndex === idx ? null : idx);
  };

  return (
    <section className="faq-section" id="faq">
      <div className="container">
        
        <div className="section-head text-center">
          <div style={{ display: 'inline-flex', alignItems: 'center', gap: '0.4rem', color: 'var(--primary)', marginBottom: '0.5rem', fontWeight: 700, fontSize: '0.88rem' }}>
            <HelpCircle size={18} />
            <span>COMMON QUESTIONS</span>
          </div>
          <h2 className="section-title">Frequently Asked Questions</h2>
          <p className="section-subtitle" style={{ maxWidth: '680px', margin: '0 auto 2.5rem auto' }}>
            Everything you need to know about TrueRep on-device AI kinematics, privacy security, and gym ranks.
          </p>
        </div>

        <div className="faq-accordion-list">
          {FAQS.map((faq, idx) => {
            const isOpen = openIndex === idx;
            return (
              <div 
                key={idx} 
                className={`faq-item ${isOpen ? 'active' : ''}`}
                onClick={() => toggleFaq(idx)}
              >
                <button 
                  type="button" 
                  className="faq-question-btn"
                  aria-expanded={isOpen}
                >
                  <span className="faq-question-text">{faq.q}</span>
                  <ChevronDown 
                    size={20} 
                    className="faq-chevron" 
                    style={{ transform: isOpen ? 'rotate(180deg)' : 'rotate(0deg)', transition: 'transform 0.25s ease' }} 
                  />
                </button>
                {isOpen && (
                  <div className="faq-answer">
                    <p>{faq.a}</p>
                  </div>
                )}
              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
}
