import React, { useState, useEffect } from 'react';
import '../App.css';

const steps = [
  {
    title: 'ARMS',
    desc: 'Tilantra ARMS (AI Routing & Management System) intelligently routes each request to the best AI model, optimizing for quality, cost, and compliance.',
    img: '/image12.png',
  },
  {
    title: 'Compliance Layer',
    desc: 'Our Compliance Layer ensures every output meets regulatory and brand standards, with real-time monitoring and automated policy enforcement.',
    img: '/checkcomp.png',
  },
];

const HowTilantraWorks: React.FC = () => {
  const [hovered, setHovered] = useState<number | null>(null);

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

  const gradientText = {
    background: 'linear-gradient(90deg, #2563eb 0%, #7c3aed 100%)',
    WebkitBackgroundClip: 'text' as const,
    WebkitTextFillColor: 'transparent' as const,
  };

  return (
    <section style={{ background: '#fff', padding: '4rem 2rem', fontFamily: 'inherit' }}>
      <h2 className="fade-slide-up" style={{ fontSize: '2.2rem', fontWeight: 700, marginBottom: '2.5rem', color: '#2563eb', textAlign: 'center' }}>
        What We Offer
      </h2>
      <div className="how-tilantra-works-stats" style={{ display: 'flex', flexDirection: 'row', gap: '2.5rem', alignItems: 'stretch', justifyContent: 'center', flexWrap: 'wrap' }}>
        {steps.map((step, i) => (
          <div
            key={i}
            className="fade-slide-up stat-card"
            onMouseEnter={() => setHovered(i)}
            onMouseLeave={() => setHovered(null)}
            style={{
              minWidth: 380,
              maxWidth: 480,
              minHeight: 200,
              background: '#fff',
              borderRadius: '2rem',
              boxShadow: hovered === i
                ? '0 8px 32px rgba(124,58,237,0.18), 0 2px 24px rgba(80,60,120,0.10)'
                : '0 4px 32px rgba(124,58,237,0.10)',
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
              display: 'flex',
              flexDirection: 'column',
              alignItems: 'center',
              justifyContent: 'center',
            }}
          >
            {hovered === i ? (
              <img
                src={step.img}
                alt={step.title}
                style={{
                  width: 200,
                  maxWidth: '60%',
                  maxHeight: 120,
                  objectFit: 'contain',
                  borderRadius: '1rem',
                  margin: '0 auto',
                  display: 'block',
                }}
              />
            ) : (
              <>
                <div style={{ fontWeight: 700, fontSize: '1.3rem', marginBottom: '0.8rem', ...gradientText }}>{step.title}</div>
                <div style={{ color: '#222', fontSize: '1.08rem', marginBottom: '0.5rem' }}>{step.desc}</div>
              </>
            )}
          </div>
        ))}
      </div>
    </section>
  );
};

export default HowTilantraWorks;