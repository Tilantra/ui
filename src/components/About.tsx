import React, { useEffect, useState } from 'react';
import '../css/custom.css';
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
  marginBottom: '1.2rem',
};

const iconStyle: React.CSSProperties = {
  fontSize: '2.5rem',
  marginBottom: '1rem',
  color: '#2563eb',
};

const About: React.FC = () => {
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
    <section style={{ ...sectionStyle, display: 'flex', flexWrap: 'wrap', gap: '3rem', alignItems: 'center', justifyContent: 'space-between' }}>
      <div style={{ flex: '1 1 400px', minWidth: 280, maxWidth: 520 }}>
        <h2 className="fade-slide-up" style={{ fontSize: '2.2rem', fontWeight: 700, marginBottom: '1.2rem', color: '#2563eb' }}>
         Orchestrate. Optimize. Accelerate.
        </h2>
       
        <p className="fade-slide-up" style={{ fontSize: '1.18rem', color: '#374151', marginBottom: '1.5rem' }}>
          Our mission is to empower organizations to seamlessly orchestrate, optimize, and govern their AI workflows—without sacrificing speed, security, or compliance. As the landscape of AI models grows more complex, businesses need a unified solution that can route tasks to the best-performing models, ensure regulatory compliance, and keep costs under control.
        </p>
        <p className="fade-slide-up" style={{ fontSize: '1.18rem', color: '#374151', marginBottom: '1.5rem' }}>
          <span style={{ color: '#7c3aed', fontWeight: 600 }}>Guidera</span> is a high-performance orchestration layer for LLMs, giving you total control, compliance, and cost-performance through a single API.
        </p>
        
      </div>
      
      <div style={{ flex: '1 1 320px', minWidth: 220, display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
        <img 
          src="/heroimage.png" 
          alt="Robot AI" 
          style={{ 
            maxWidth: '70%', 
            height: 'auto', 
            borderRadius: '0.5rem'
          }} 
        />
      </div>
      
    </section>
  );
};

export default About; 