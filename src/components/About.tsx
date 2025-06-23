import React, { useEffect, useState } from 'react';

const AnimatedNumber: React.FC<{ value: number; prefix?: string; duration?: number; decimals?: number }> = ({ value, prefix = '', duration = 1200, decimals = 0 }) => {
  const [display, setDisplay] = useState(0);
  useEffect(() => {
    let start = 0;
    const startTime = Date.now();
    const animate = () => {
      const now = Date.now();
      const elapsed = now - startTime;
      const progress = Math.min(elapsed / duration, 1);
      const current = start + (value - start) * progress;
      setDisplay(current);
      if (progress < 1) requestAnimationFrame(animate);
    };
    animate();
    // eslint-disable-next-line
  }, [value, duration]);
  return <span>{prefix}{display.toLocaleString(undefined, { minimumFractionDigits: decimals, maximumFractionDigits: decimals })}</span>;
};

const sectionStyle: React.CSSProperties = {
  background: '#fff',
  padding: '4rem 2rem',
  color: '#222',
  fontFamily: 'inherit',
  maxWidth: 1200,
  margin: '0 auto',
  borderRadius: '1.5rem',
  boxShadow: '0 2px 24px rgba(80,60,120,0.04)',
  marginBottom: '2.5rem',
};

const iconStyle: React.CSSProperties = {
  fontSize: '2.5rem',
  marginBottom: '1rem',
  color: '#2563eb',
};

const About: React.FC = () => (
  <section style={{ background: '#fff', padding: '4rem 2rem', color: '#222', fontFamily: 'inherit', maxWidth: 1200, margin: '0 auto', borderRadius: '1.5rem', boxShadow: '0 2px 24px rgba(80,60,120,0.04)', display: 'flex', flexWrap: 'wrap', gap: '3rem', alignItems: 'center', justifyContent: 'space-between' }}>
    <div style={{ flex: '1 1 400px', minWidth: 280, maxWidth: 520 }}>
      <h2 style={{ fontSize: '2.2rem', fontWeight: 700, marginBottom: '1.2rem', color: '#2563eb' }}>
        What We Are
      </h2>
      <p style={{ fontSize: '1.18rem', color: '#374151', marginBottom: '1.5rem' }}>
        <span style={{ color: '#7c3aed', fontWeight: 600 }}>Tilantra</span> is a high-performance orchestration layer for LLMs, giving you total control, compliance, and cost-performance through a single API.
      </p>
      <p style={{ fontSize: '1.08rem', color: '#5a4a7c' }}>
        Built for enterprises, SaaS, and AI-first teams. <span style={{ color: '#7c3aed' }}>Lorem ipsum dolor sit amet.</span>
      </p>
    </div>
    <div style={{ flex: '1 1 320px', minWidth: 220, display: 'flex', flexDirection: 'row', gap: '2rem', justifyContent: 'center', alignItems: 'center' }}>
      <div style={{ background: '#f6f8fa', borderRadius: '1.2rem', padding: '2rem 1.5rem', boxShadow: '0 2px 12px rgba(80,60,120,0.07)', minWidth: 120, textAlign: 'center' }}>
        <div style={{ fontSize: '2.2rem', fontWeight: 800, color: '#2563eb', marginBottom: '0.5rem' }}>
          $1.5T
        </div>
        <div style={{ color: '#374151', fontWeight: 600, fontSize: '1.1rem' }}>AI market by 2030</div>
      </div>
      <div style={{ background: '#f6f8fa', borderRadius: '1.2rem', padding: '2rem 1.5rem', boxShadow: '0 2px 12px rgba(80,60,120,0.07)', minWidth: 120, textAlign: 'center' }}>
        <div style={{ fontSize: '2.2rem', fontWeight: 800, color: '#7c3aed', marginBottom: '0.5rem' }}>
          $10B
        </div>
        <div style={{ color: '#374151', fontWeight: 600, fontSize: '1.1rem' }}>Revenue target (2yr)</div>
      </div>
      <div style={{ background: '#f6f8fa', borderRadius: '1.2rem', padding: '2rem 1.5rem', boxShadow: '0 2px 12px rgba(80,60,120,0.07)', minWidth: 120, textAlign: 'center' }}>
        <div style={{ fontSize: '2.2rem', fontWeight: 800, color: '#2563eb', marginBottom: '0.5rem' }}>
          $28K
        </div>
        <div style={{ color: '#374151', fontWeight: 600, fontSize: '1.1rem' }}>Avg. monthly AI spend</div>
      </div>
    </div>
  </section>
);

export default About; 