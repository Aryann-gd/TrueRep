'use client';

import React, { useState } from 'react';
import { ChevronDown, HelpCircle } from 'lucide-react';

const FAQS = [
  {
    q: 'How does TrueRep count reps?',
    a: "TrueRep uses on-device MediaPipe AI to track your body pose in real-time through your phone's camera. It counts only valid repetitions based on proper form, rejecting partial or incorrect movements."
  },
  {
    q: 'Is TrueRep free?',
    a: 'Yes, TrueRep is completely free with optional rewarded ads for streak repair. No subscriptions, no paywalls, no premium features locked behind payment.'
  },
  {
    q: 'Does TrueRep upload my workout videos?',
    a: 'No. All AI processing happens on your device. Camera frames are never uploaded to any server. Your workout data stays 100% private.'
  },
  {
    q: 'How do the 9 Gym Strength Ranks work?',
    a: 'TrueRep gamifies your fitness journey across 9 distinct tiers: Wood, Bronze, Silver, Gold, Platinum, Diamond, Champion, Titan, and Olympian. You earn Rank Points for verified reps, hitting optimal joint angles, and maintaining cadence.'
  },
  {
    q: 'Can I use TrueRep completely offline without internet or cellular data?',
    a: 'Yes. Both the AI computer vision models and the offline nutritional macro database run 100% locally on your phone without internet or subscription paywalls.'
  },
  {
    q: 'What exercises are supported by TrueRep AI coaching?',
    a: 'TrueRep currently features specialized kinematic models for Squats (with real-time hip/knee depth analysis), Push-ups (with chest-to-deck verification and lumbar alignment), and custom set logging for full-body strength routines.'
  },
  {
    q: 'How do streak rewards and streak repair work?',
    a: 'TrueRep rewards workout consistency with 90-day badges, XP level milestones, and collectible achievements. If you miss a day due to travel or recovery, you can repair your streak with rewarded ads—keeping your habit loop intact.'
  }
];

export default function FaqSection() {
  const [openIndex, setOpenIndex] = useState(0);

  const toggleFaq = (idx) => {
    setOpenIndex(openIndex === idx ? null : idx);
  };

  return (
    <section className="faq-section" id="faq" aria-labelledby="faq-title">
      <div className="container">
        
        <div className="section-head text-center">
          <div style={{ display: 'inline-flex', alignItems: 'center', gap: '0.4rem', color: 'var(--primary)', marginBottom: '0.5rem', fontWeight: 700, fontSize: '0.88rem' }}>
            <HelpCircle size={18} />
            <span>COMMON QUESTIONS</span>
          </div>
          <h2 className="section-title" id="faq-title">Frequently Asked Questions</h2>
          <p className="section-subtitle" style={{ maxWidth: '680px', margin: '0 auto 2.5rem auto' }}>
            Everything you need to know about TrueRep on-device AI kinematics, privacy security, and gym ranks.
          </p>
        </div>

        <div className="faq-accordion-list" role="region" aria-label="TrueRep FAQ Accordion">
          {FAQS.map((faq, idx) => {
            const isOpen = openIndex === idx;
            return (
              <div 
                key={idx} 
                className={`faq-item ${isOpen ? 'active' : ''}`}
              >
                <button 
                  type="button" 
                  className="faq-question-btn"
                  onClick={() => toggleFaq(idx)}
                  aria-expanded={isOpen}
                  aria-controls={`faq-answer-${idx}`}
                  id={`faq-question-${idx}`}
                >
                  <span className="faq-question-text">{faq.q}</span>
                  <ChevronDown 
                    size={20} 
                    className="faq-chevron" 
                    style={{ transform: isOpen ? 'rotate(180deg)' : 'rotate(0deg)', transition: 'transform 0.25s ease' }} 
                    aria-hidden="true"
                  />
                </button>
                {isOpen && (
                  <div 
                    className="faq-answer" 
                    id={`faq-answer-${idx}`}
                    role="region"
                    aria-labelledby={`faq-question-${idx}`}
                  >
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
