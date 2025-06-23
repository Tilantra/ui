import React, { useState } from 'react';
import '../App.css';

const features = [
  { icon: '✨', title: 'Feature One', desc: 'Lorem ipsum dolor sit amet, consectetur.', metric: '99.9% uptime' },
  { icon: '🔒', title: 'Feature Two', desc: 'Sed do eiusmod tempor incididunt ut labore.', metric: 'SOC2 Compliant' },
  { icon: '⚡', title: 'Feature Three', desc: 'Ut enim ad minim veniam, quis nostrud.', metric: '2x hehehhehehehe my name is mahika d.Ut enim ad minim veniam, quis nostrud.' },
  { icon: '🌐', title: 'Feature Four', desc: 'Duis aute irure dolor in reprehenderit.', metric: '40+ Models' },
  { icon: '💡', title: 'Feature Five', desc: 'Excepteur sint occaecat cupidatat non proident.', metric: 'Smart Routing' },
  { icon: '🚀', title: 'Feature Six', desc: 'Curabitur blandit tempus porttitor.', metric: 'Enterprise Ready' },
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
  const visibleCount = 3;
  const total = features.length;

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

  return (
    <section style={{
      background: '#fff',
      padding: '4rem 2rem',
      fontFamily: 'inherit',
      textAlign: 'center',
      position: 'relative',
      overflow: 'hidden',
    }}>
      <h2 style={{ fontSize: '2.2rem', fontWeight: 700, marginBottom: '2.5rem', color: '#2563eb' }}>
        Our Features
      </h2>
      <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', gap: '2.5rem', position: 'relative' }}>
        <button aria-label="Previous" style={arrowStyle} onClick={prev}>&#8592;</button>
        <div style={{ display: 'flex', gap: '2.5rem', transition: 'all 0.6s cubic-bezier(0.4,0,0.2,1)' }}>
          {getVisible().map((f, i) => (
            <div
              key={i}
              className="fade-in"
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
        <button aria-label="Next" style={arrowStyle} onClick={next}>&#8594;</button>
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