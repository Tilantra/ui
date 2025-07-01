import React, { useRef, useState, useEffect } from 'react';
import { motion } from 'framer-motion';
// import { motion, AnimatePresence } from 'framer-motion'; // Uncomment for animation

const useCases = [
  {
    title: 'Klarna: When Automation Crossed the Line',
    description: "Klarna's bot left customers stuck in endless loops—no humans, just frustration. Trust tanked, and the company had to bring people back.",
    impact: [
      'Customer trust eroded by impersonal, inconsistent AI',
      'Brand reputation took a public hit',
      'Costly reversal: rehiring and retraining human agents',
    ],
    protection: [
      "Routes tricky cases to the best suited models.",
      'Keeps every answer on-brand.',
      'Spots and stops issues before they can reach the user.'
    ],
    statBoxText: 'Intelligent Routing',
    statBoxLogo: '/cyber-security.png',
  },
  {
    title: 'Air Canada: The Chatbot That Promised Too Much',
    description: "Imagine paying out refunds for a policy that never existed! Air Canada's bot invented a rule, and the airline had to pay the price.",
    impact: [
      'Legal liability for AI misrepresentation',
      'Public relations fallout and loss of customer trust',
      'Financial cost of court-ordered refunds and policy changes',
    ],
    protection: [
      "Checks every answer against org wide and user policies.",
      'Flags prompt inputs proactively.',
      'Escalates anything unclear with minial latency.'
    ],
    statBoxText: 'Compliance Layer',
    statBoxLogo: '/decision-making.png',
  },
  {
    title: 'Claude: When AI Became a Security Risk',
    description: "Hackers tricked Claude into running malware—turning helpful AI into a security threat. Even smart bots can be fooled.",
    impact: [
      'Potential for large-scale data breaches',
      'Loss of user trust in AI security',
      'Urgent need for new safeguards and monitoring',
    ],
    protection: [
      "Blocks shady non-compliant responses.",
      'Scans for threats in every call, every output.',
      'Alerts and responds to new risks instantly.'
    ],
    statBoxText: 'Threat Filter',
    statBoxLogo: '/threat-detection.png',
  },
  {
    title: 'Grok: When AI Spread Dangerous Myths',
    description: "Grok's chatbot started spouting conspiracy theories—one rogue edit, and it became a megaphone for misinformation.",
    impact: [
      'Spread of harmful misinformation at scale',
      'Loss of public trust in AI platforms',
      'Urgent calls for transparency and stronger controls',
    ],
    protection: [
      "Stops propaganda before to even be displayed to the user.",
      'Logs every change for transparency.',
      'Fallback mechanism for non-compliant response.'
    ],
    statBoxText: 'Ethics Engine',
    statBoxLogo: '/policy.png',
  },
];

const purple = '#7c3aed';
const yellow = '#ffe066';

const statBoxStyle: React.CSSProperties = {
  background: '#f6f8fa',
  borderRadius: '1.2rem',
  padding: '1.1rem 1.2rem',
  boxShadow: '0 2px 12px rgba(80,60,120,0.07)',
  minWidth: 100,
  minHeight: 60,
  textAlign: 'center',
  fontWeight: 800,
  fontSize: '1.1rem',
  color: purple,
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
};

const UseCasesSection: React.FC = () => {
  const [activeIndex, setActiveIndex] = useState(0);
  const sectionRefs = useRef<(HTMLDivElement | null)[]>([]);
  const scrollContainerRef = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    const handleScroll = () => {
      const offsets = sectionRefs.current.map(ref => ref?.getBoundingClientRect().top ?? Infinity);
      const active = offsets.findIndex(offset => offset >= 0 && offset < window.innerHeight * 0.5);
      setActiveIndex(active === -1 ? 0 : active);
    };
    const container = scrollContainerRef.current;
    if (container) {
      container.addEventListener('scroll', handleScroll, { passive: true });
    }
    window.addEventListener('resize', handleScroll);
    handleScroll();
    return () => {
      if (container) container.removeEventListener('scroll', handleScroll);
      window.removeEventListener('resize', handleScroll);
    };
  }, []);

  const current = useCases[activeIndex];

  return (
    <section
      style={{
        display: 'flex',
        flexDirection: 'row',
        minHeight: '80vh',
        width: '100%',
        background: '#f6f8fa',
        position: 'relative',
      }}
    >
      {/* Left: Sticky Purple Solution */}
      <div
        style={{
          position: 'sticky',
          top: 0,
          left: 0,
          width: '50vw',
          minHeight: '100vh',
          background: purple,
          color: '#fff',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'flex-start',
          paddingTop: '5vh',
          flexDirection: 'column',
          zIndex: 2,
          transition: 'background 0.4s',
        }}
      >
        <div style={{ width: '100%', maxWidth: 480, display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
          <h3 style={{ fontSize: '2.2rem', fontWeight: 800, marginBottom: '1.5rem', letterSpacing: '-0.01em', textAlign: 'center' }}>How Guidera Protects</h3>
          <div style={{ fontSize: '1.22rem', fontWeight: 500, textAlign: 'center', color: '#fff', marginBottom: '2.2rem', lineHeight: 1.7, width: '100%' }}>
            {current.protection.map((point, idx) => (
              <div key={idx} style={{ marginBottom: 12 }}>{point}</div>
            ))}
          </div>
          {/* Stat boxes stacked vertically, same size, more square-shaped */}
          <div key={activeIndex} style={{ display: 'flex', flexDirection: 'column', gap: '1.2rem', marginTop: 8, alignItems: 'center', width: 150 }}>
            <div className={`fade-in-box`} style={{ ...statBoxStyle, width: 150, height: 110, fontSize: '1.08rem', borderRadius: '1.2rem', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>{current.statBoxText}</div>
            <div className={`fade-in-box`} style={{ ...statBoxStyle, padding: 0, background: '#fff', width: 150, height: 110, display: 'flex', alignItems: 'center', justifyContent: 'center', borderRadius: '1.2rem' }}>
              <img src={current.statBoxLogo} alt="logo" style={{ width: 54, height: 54, objectFit: 'contain', display: 'block', margin: '0 auto' }} />
            </div>
          </div>
        </div>
      </div>
      {/* Right: Scrollable Use Cases with Snap */}
      <div
        ref={scrollContainerRef}
        style={{
          width: '50vw',
          height: '100vh',
          overflowY: 'scroll',
          scrollSnapType: 'y mandatory',
          WebkitOverflowScrolling: 'touch',
          background: '#f6f8fa',
          paddingTop: '10vh',
        }}
      >
        {useCases.map((uc, i) => (
          <div
            key={uc.title}
            ref={el => { sectionRefs.current[i] = el; }}
            style={{
              height: '100vh',
              minHeight: '100vh',
              maxHeight: '100vh',
              display: 'flex',
              flexDirection: 'column',
              justifyContent: 'flex-start',
              alignItems: 'center',
              padding: '5vw 6vw 0 6vw',
              scrollSnapAlign: 'start',
              boxSizing: 'border-box',
              background: 'none',
              border: 'none',
              boxShadow: 'none',
              maxWidth: 600,
              margin: '0 auto',
              position: 'relative',
            }}
          >
            <div style={{ fontSize: '2.2rem', fontWeight: 800, marginBottom: '1.5rem', color: purple, lineHeight: 1.1, textAlign: 'center', letterSpacing: '-0.01em' }}>{uc.title}</div>
            <div style={{ fontSize: '1.22rem', color: '#222', fontWeight: 500, lineHeight: 1.7, marginBottom: 32, textAlign: 'center' }}>{uc.description}</div>
            {/* Impact Box */}
            <div key={activeIndex} className="fade-in-box" style={{
              background: 'rgba(191,161,74,0.07)',
              color: '#222',
              borderRadius: '1.1rem',
              boxShadow: '0 2px 12px rgba(80,60,120,0.07)',
              padding: '1.1rem 1.5rem',
              minWidth: 320,
              maxWidth: 420,
              fontWeight: 700,
              fontSize: '1.08rem',
              display: 'flex',
              flexDirection: 'column',
              alignItems: 'center',
              border: '1.5px solid #ffe066',
              textAlign: 'center',
              margin: '0 auto 0 auto',
            }}>
              <div style={{ fontWeight: 900, fontSize: '1.08rem', marginBottom: 6 }}>Impact</div>
              {uc.impact.map((imp, idx) => (
                <div key={idx} style={{ marginBottom: 2, fontWeight: 600 }}>{imp}</div>
              ))}
            </div>
          </div>
        ))}
      </div>
      {/* Responsive: Stack on mobile */}
      <style>{`
        .fade-in-box {
          opacity: 0;
          transform: translateY(20px);
          animation: fadeInBox 1.1s ease-out forwards;
        }
        .fade-in-box + .fade-in-box {
          animation-delay: 0.3s;
        }
        @keyframes fadeInBox {
          to {
            opacity: 1;
            transform: none;
          }
        }
        @media (max-width: 900px) {
          section[role='region'] {
            flex-direction: column;
          }
          section[role='region'] > div:first-child, section[role='region'] > div:last-child {
            width: 100vw !important;
            min-height: unset !important;
            max-width: 100vw !important;
          }
          section[role='region'] > div:first-child {
            position: relative !important;
            top: 0 !important;
            left: 0 !important;
            border-radius: 0 0 2rem 2rem;
            padding: 3rem 1.5rem;
          }
          section[role='region'] > div:last-child {
            height: 70vh !important;
            max-height: 70vh !important;
            min-height: 70vh !important;
            padding: 0 !important;
          }
          section[role='region'] > div:last-child > div {
            height: 70vh !important;
            min-height: 70vh !important;
            max-height: 70vh !important;
            padding: 0 1.5rem !important;
          }
          .impact-box {
            position: static !important;
            margin-top: 2rem !important;
          }
        }
      `}</style>
    </section>
  );
};

export default UseCasesSection; 