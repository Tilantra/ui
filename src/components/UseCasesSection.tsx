import React, { useRef, useState, useEffect } from 'react';
import { motion } from 'framer-motion';
// import { motion, AnimatePresence } from 'framer-motion'; // Uncomment for animation

const useCases = [
  {
    title: 'Klarna: When Automation Crossed the Line',
    description: "Klarna's bot left customers stuck in endless loops—no humans, just frustration. Trust tanked, and the company had to bring people back. Even the most advanced automation can backfire if it loses the human touch, turning convenience into a customer service nightmare.",
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
    solutionHeading: 'Smart Routing for Human-Like Support',
  },
  {
    title: 'Air Canada: The Chatbot That Promised Too Much',
    description: "Imagine paying out refunds for a policy that never existed! Air Canada's bot invented a rule, and the airline had to pay the price. A single unchecked response can create costly legal obligations and erode years of brand trust in an instant.",
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
    solutionHeading: 'Policy-Checked Answers, Every Time',
  },
  {
    title: 'Claude: When AI Became a Security Risk',
    description: "Hackers tricked Claude into running malware—turning helpful AI into a security threat. Even smart bots can be fooled. Without real-time safeguards, AI can become an entry point for sophisticated attacks that put sensitive data at risk.",
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
    solutionHeading: 'Real-Time Threat Blocking',
  },
  {
    title: 'Grok: When AI Spread Dangerous Myths',
    description: "Grok's chatbot started spouting conspiracy theories—one rogue edit, and it became a megaphone for misinformation. Misinformation can spread rapidly at scale, making robust oversight and transparency essential for public trust.",
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
    solutionHeading: 'Stopping Misinformation at the Source',
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
  const [isMobile, setIsMobile] = useState(false);
  const sectionRefs = useRef<(HTMLDivElement | null)[]>([]);
  const scrollContainerRef = useRef<HTMLDivElement | null>(null);
  const [protectionOpen, setProtectionOpen] = useState(false);

  useEffect(() => {
    const checkMobile = () => setIsMobile(window.matchMedia('(max-width: 700px)').matches);
    checkMobile();
    window.addEventListener('resize', checkMobile);
    return () => window.removeEventListener('resize', checkMobile);
  }, []);

  useEffect(() => {
    if (!isMobile) {
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
    }
  }, [isMobile]);

  const current = useCases[activeIndex];

  // Mobile navigation handlers
  const goPrev = () => setActiveIndex(i => (i - 1 + useCases.length) % useCases.length);
  const goNext = () => setActiveIndex(i => (i + 1) % useCases.length);

  // Swipe gesture for mobile
  useEffect(() => {
    if (!isMobile) return;
    const container = document.getElementById('usecases-mobile-swipe');
    if (!container) return;
    let startX = 0;
    let endX = 0;
    const onTouchStart = (e: TouchEvent) => { startX = e.touches[0].clientX; };
    const onTouchEnd = (e: TouchEvent) => {
      endX = e.changedTouches[0].clientX;
      if (startX - endX > 50) goNext();
      else if (endX - startX > 50) goPrev();
    };
    container.addEventListener('touchstart', onTouchStart);
    container.addEventListener('touchend', onTouchEnd);
    return () => {
      container.removeEventListener('touchstart', onTouchStart);
      container.removeEventListener('touchend', onTouchEnd);
    };
  }, [isMobile, activeIndex]);

  if (isMobile) {
    return (
      <section className="usecases-mobile-section" style={{ width: '100%', background: '#f6f8fa', padding: '2rem 0', minHeight: '80vh' }}>
        {/* White area (use case) */}
        <div id="usecases-mobile-swipe" style={{ background: '#fff', borderRadius: '1.2rem', margin: '0 1rem', padding: '2rem 1rem', boxShadow: '0 2px 12px rgba(80,60,120,0.07)', textAlign: 'center', minHeight: 220, position: 'relative' }}>
          <div style={{ fontSize: '1.3rem', fontWeight: 800, marginBottom: '1rem', color: purple, lineHeight: 1.1 }}>{current.title}</div>
          <div style={{ fontSize: '1.08rem', color: '#222', fontWeight: 500, lineHeight: 1.7, marginBottom: 18 }}>{current.description}</div>
          {/* Impact Box */}
          <div style={{ background: '#f6f8fa', borderRadius: '0.8rem', padding: '1rem', margin: '0 auto 1rem auto', color: '#374151', fontWeight: 500, fontSize: '0.98rem', textAlign: 'left' }}>
            <div style={{ fontWeight: 700, color: purple, marginBottom: 6 }}>Impact:</div>
            <ul style={{ paddingLeft: 18, margin: 0 }}>
              {current.impact.map((point, idx) => (
                <li key={idx} style={{ marginBottom: 4 }}>{point}</li>
              ))}
            </ul>
          </div>
          {/* Navigation arrows */}
          <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginTop: 12 }}>
            <button onClick={goPrev} style={{ background: 'none', border: 'none', fontSize: '2rem', color: purple, cursor: 'pointer' }} aria-label="Previous">&#8592;</button>
            <span style={{ fontSize: '1rem', color: '#888' }}>{activeIndex + 1} / {useCases.length}</span>
            <button onClick={goNext} style={{ background: 'none', border: 'none', fontSize: '2rem', color: purple, cursor: 'pointer' }} aria-label="Next">&#8594;</button>
          </div>
          {/* Accordion button */}
          <button
            onClick={() => setProtectionOpen(o => !o)}
            style={{
              margin: '1.2rem auto 0 auto',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              background: 'none',
              border: 'none',
              color: purple,
              fontWeight: 700,
              fontSize: '1.08rem',
              cursor: 'pointer',
              transition: 'color 0.2s',
              gap: 8,
            }}
            aria-expanded={protectionOpen}
            aria-controls="usecases-protection-mobile"
          >
            {protectionOpen ? 'Hide Protection' : 'Show Protection'}
            <span style={{ display: 'inline-block', transform: protectionOpen ? 'rotate(180deg)' : 'rotate(0deg)', transition: 'transform 0.2s' }}>▼</span>
          </button>
        </div>
        {/* Collapsible Purple area (protection) */}
        {protectionOpen && (
          <div id="usecases-protection-mobile" style={{ background: purple, color: '#fff', borderRadius: '1.2rem', margin: '1.2rem 1rem 0 1rem', padding: '2rem 1rem', textAlign: 'center', boxShadow: '0 2px 12px rgba(80,60,120,0.07)', animation: 'fadeInAccordion 0.3s' }}>
            <h3 style={{ fontSize: '1.4rem', fontWeight: 800, marginBottom: '1.2rem', letterSpacing: '-0.01em' }}>{current.solutionHeading}</h3>
            <div style={{ fontSize: '1.08rem', fontWeight: 500, marginBottom: '1.2rem', lineHeight: 1.7 }}>
              {current.protection.map((point, idx) => (
                <div key={idx} style={{ marginBottom: 10 }}>{point}</div>
              ))}
            </div>
            <div style={{ display: 'flex', flexDirection: 'row', gap: '0.7rem', justifyContent: 'center', marginTop: 8 }}>
              <div style={{ ...statBoxStyle, width: 80, height: 70, fontSize: '0.95rem', borderRadius: '1.2rem' }}>{current.statBoxText}</div>
              <div style={{ ...statBoxStyle, padding: 0, background: '#fff', width: 80, height: 70, borderRadius: '1.2rem' }}>
                <img src={current.statBoxLogo} alt="logo" style={{ width: 32, height: 32, objectFit: 'contain', display: 'block', margin: '0 auto' }} />
              </div>
            </div>
          </div>
        )}
        <style>{`
          @keyframes fadeInAccordion { from { opacity: 0; transform: translateY(-10px); } to { opacity: 1; transform: none; } }
        `}</style>
      </section>
    );
  }

  return (
    <section
      style={{
        display: 'flex',
        flexDirection: 'row',
        minHeight: '75vh',
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
          width: '40vw',
          minHeight: '75vh',
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
          <h3 style={{ fontSize: '2.2rem', fontWeight: 800, marginBottom: '1.5rem', letterSpacing: '-0.01em', textAlign: 'center' }}>{current.solutionHeading}</h3>
          <div style={{ fontSize: '1.22rem', fontWeight: 500, textAlign: 'center', color: '#fff', marginBottom: '2.2rem', lineHeight: 1.7, width: '100%' }}>
            {current.protection.map((point, idx) => (
              <div key={idx} style={{ marginBottom: 12 }}>{point}</div>
            ))}
          </div>
          {/* Stat boxes stacked horizontally, same size, more square-shaped */}
          <div key={activeIndex} style={{ display: 'flex', flexDirection: 'row', gap: '1.2rem', marginTop: 8, alignItems: 'center', width: 'auto', justifyContent: 'center' }}>
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
          width: '60vw',
          height: '75vh',
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
              maxWidth: 800,
              margin: '0 auto',
              position: 'relative',
            }}
          >
            <div style={{ fontSize: '2.2rem', fontWeight: 800, marginBottom: '1.5rem', color: purple, lineHeight: 1.1, textAlign: 'center', letterSpacing: '-0.01em' }}>{uc.title}</div>
            <div style={{ fontSize: '1.22rem', color: '#222', fontWeight: 500, lineHeight: 1.7, marginBottom: 32, textAlign: 'center', maxWidth: 700 }}>{uc.description}</div>
            {/* Impact Box */}
            <div key={activeIndex} className="fade-in-box" style={{
              background: 'rgba(191,161,74,0.07)',
              color: '#222',
              borderRadius: '1.1rem',
              boxShadow: '0 2px 12px rgba(80,60,120,0.07)',
              padding: '1.1rem 1.5rem',
              minWidth: 400,
              maxWidth: 600,
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