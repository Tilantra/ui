import React, { useState, useEffect } from 'react';
import '../App.css';

const features = [
  { icon: '✨', title: 'Smart Routing', desc: 'Auto-selects best models based on cost, performance, and preference.', metric: '90% accuracy' },
  { icon: '🔒', title: 'Compliance Layer', desc: 'On-demand reports & enterprise-grade governance', metric: 'SOC2 Compliant' },
  { icon: '⚡', title: 'Secure Caching', desc: 'Reuse prompts, slash token usage.', metric: '70% Cost Savings' },
  { icon: '🌐', title: 'Prompt Suggestions', desc: 'AI-generated prompts to optimize your inputs.', metric: '2x Productivity' },
  { icon: '💡', title: 'Multi-Model Hub', desc: 'Access a wide range of top AI models, all in one place.', metric: '40+ Hosted Models' },
  { icon: '🚀', title: 'Cost Guardrails', desc: 'Real-time token budgeting to prevent overspend.', metric: 'Zero Runaway Costs' },
];

const gradientText = {
  background: 'linear-gradient(90deg, #2563eb 0%, #7c3aed 100%)',
  WebkitBackgroundClip: 'text' as const,
  WebkitTextFillColor: 'transparent' as const,
};

const arrowStyle: React.CSSProperties = {
  background: 'none',
  border: 'none',
  fontSize: '2.5rem',
  color: '#2563eb',
  cursor: 'pointer',
  padding: '0 1.5rem',
  userSelect: 'none',
  transition: 'color 0.2s',
  outline: 'none',
};

const FeaturesCarousel: React.FC = () => {
  const [index, setIndex] = useState(0);
  const [hovered, setHovered] = useState<number | null>(null);
  const [isMobile, setIsMobile] = useState(false);
  const visibleCount = 3;
  const total = features.length;

  useEffect(() => {
    const checkMobile = () => setIsMobile(window.matchMedia('(max-width: 700px)').matches);
    checkMobile();
    window.addEventListener('resize', checkMobile);
    return () => window.removeEventListener('resize', checkMobile);
  }, []);

  const prev = () => setIndex(i => (i - 1 + total) % total);
  const next = () => setIndex(i => (i + 1) % total);

  // Get visible features, wrapping around
  const getVisible = () => {
    const arr = [];
    for (let i = 0; i < visibleCount; i++) {
      arr.push(features[(index + i) % total]);
    }
    return arr;
  };

  useEffect(() => {
    const elements = document.querySelectorAll('.fade-slide-up');
    const observer = new window.IntersectionObserver(
      entries => {
        entries.forEach(entry => {
          if (entry.isIntersecting) {
            entry.target.classList.add('visible');
          }
        });
      },
      { threshold: 0.15 }
    );
    elements.forEach(el => observer.observe(el));
    return () => observer.disconnect();
  }, []);

  return (
    <section style={{
      background: '#fff',
      padding: '4rem 2rem',
      fontFamily: 'inherit',
      textAlign: 'center',
      position: 'relative',
      overflow: 'hidden',
    }}>
      <h2 className="fade-slide-up" style={{ fontSize: '2.2rem', fontWeight: 700, marginBottom: '2.5rem', color: '#2563eb' }}>
        Our Features
      </h2>
      <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', gap: '2.5rem', position: 'relative' }}>
        {!isMobile && (
          <button aria-label="Previous" className="features-carousel-arrow" style={arrowStyle} onClick={prev} onMouseEnter={prev}>&#8592;</button>
        )}
        <div className="features-carousel-row" style={{ display: 'flex', gap: '2.5rem', transition: 'all 0.6s cubic-bezier(0.4,0,0.2,1)' }}>
          {isMobile
            ? features.map((f, i) => (
                <div
                  key={i}
                  className="fade-slide-up stat-card"
                  style={{
                    minWidth: 380,
                    maxWidth: 480,
                    minHeight: 200,
                    background: '#fff',
                    borderRadius: '2rem',
                    boxShadow: '0 4px 32px rgba(124,58,237,0.10)',
                    padding: '2.5rem 2rem',
                    textAlign: 'center',
                    flex: '0 0 auto',
                    transition: 'box-shadow 0.2s, transform 0.4s',
                    fontSize: '1.1rem',
                    position: 'relative',
                    zIndex: 1,
                    opacity: 1,
                    cursor: 'pointer',
                    overflow: 'hidden',
                  }}
                  onMouseEnter={() => setHovered(i)}
                  onMouseLeave={() => setHovered(null)}
                >
                  <div style={{ fontWeight: 700, fontSize: '1.3rem', marginBottom: '0.8rem', ...gradientText }}>{f.title}</div>
                  <div style={{ position: 'relative', height: 80, display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                    <span
                      style={{
                        position: 'absolute',
                        left: 0,
                        right: 0,
                        opacity: hovered === i ? 0 : 1,
                        transition: 'opacity 0.3s',
                        color: '#222',
                        fontSize: '1.08rem',
                      }}
                    >
                      {f.desc}
                    </span>
                    <span
                      style={{
                        position: 'absolute',
                        left: 0,
                        right: 0,
                        opacity: hovered === i ? 1 : 0,
                        transition: 'opacity 0.3s',
                        color: '#2563eb',
                        fontWeight: 700,
                        fontSize: '1.15rem',
                      }}
                    >
                      {f.metric}
                    </span>
                  </div>
                </div>
              ))
            : getVisible().map((f, i) => (
                <div
                  key={i}
                  className="fade-slide-up stat-card"
                  style={{
                    minWidth: 380,
                    maxWidth: 480,
                    minHeight: 200,
                    background: '#fff',
                    borderRadius: '2rem',
                    boxShadow: '0 4px 32px rgba(124,58,237,0.10)',
                    padding: '2.5rem 2rem',
                    textAlign: 'center',
                    flex: '0 0 auto',
                    transition: 'box-shadow 0.2s, transform 0.4s',
                    fontSize: '1.1rem',
                    position: 'relative',
                    zIndex: 1,
                    opacity: 1,
                    cursor: 'pointer',
                    overflow: 'hidden',
                  }}
                  onMouseEnter={() => setHovered(i)}
                  onMouseLeave={() => setHovered(null)}
                >
                  <div style={{ fontWeight: 700, fontSize: '1.3rem', marginBottom: '0.8rem', ...gradientText }}>{f.title}</div>
                  <div style={{ position: 'relative', height: 80, display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                    <span
                      style={{
                        position: 'absolute',
                        left: 0,
                        right: 0,
                        opacity: hovered === i ? 0 : 1,
                        transition: 'opacity 0.3s',
                        color: '#222',
                        fontSize: '1.08rem',
                      }}
                    >
                      {f.desc}
                    </span>
                    <span
                      style={{
                        position: 'absolute',
                        left: 0,
                        right: 0,
                        opacity: hovered === i ? 1 : 0,
                        transition: 'opacity 0.3s',
                        color: '#2563eb',
                        fontWeight: 700,
                        fontSize: '1.15rem',
                      }}
                    >
                      {f.metric}
                    </span>
                  </div>
                </div>
              ))}
        </div>
        {!isMobile && (
          <button aria-label="Next" className="features-carousel-arrow" style={arrowStyle} onClick={next} onMouseEnter={next}>&#8594;</button>
        )}
      </div>
      <div style={{ marginTop: '2rem', display: 'flex', justifyContent: 'center', gap: '0.5rem' }}>
        {features.map((_, i) => (
          <span key={i} style={{
            display: 'inline-block',
            width: 12,
            height: 12,
            borderRadius: '50%',
            background: i === index ? 'linear-gradient(90deg, #2563eb 0%, #7c3aed 100%)' : '#ece6fa',
            transition: 'background 0.2s',
          }} />
        ))}
      </div>
    </section>
  );
};

export default FeaturesCarousel; 