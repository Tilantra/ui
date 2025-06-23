import React from 'react';
import '../App.css';

const Hero: React.FC = () => (
  <section
    style={{
      position: 'relative',
      minHeight: '100vh',
      width: '100%',
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'center',
      justifyContent: 'center',
      textAlign: 'center',
      color: '#fff',
      fontFamily: 'inherit',
      overflow: 'hidden',
      background: 'radial-gradient(circle at 60% 40%, #2563eb 0%, #7c3aed 60%, #111 100%)',
    }}
    className="fade-in"
  >
    <svg width="100%" height="100%" viewBox="0 0 1440 600" fill="none" xmlns="http://www.w3.org/2000/svg" style={{ position: 'absolute', top: 0, left: 0, zIndex: 0 }}>
      <ellipse cx="1200" cy="100" rx="320" ry="120" fill="#a18aff" fillOpacity="0.18" />
      <ellipse cx="300" cy="500" rx="300" ry="100" fill="#2563eb" fillOpacity="0.13" />
      <ellipse cx="900" cy="400" rx="200" ry="80" fill="#7c3aed" fillOpacity="0.12" />
    </svg>
    <div style={{ position: 'relative', zIndex: 1, maxWidth: 700, width: '100%' }}>
      <h1 style={{ fontSize: '4.2rem', fontWeight: 900, marginBottom: '1.2rem', letterSpacing: '-0.04em', color: '#fff', textShadow: '0 4px 32px #111, 0 1px 0 #2563eb' }}>
        Tilantra
      </h1>
      <p style={{ fontSize: '1.5rem', color: '#e0e7ff', margin: '0 auto', fontWeight: 500, textShadow: '0 2px 8px #111' }}>
        The AI Orchestration Layer for Enterprises & SaaS
      </p>
    </div>
  </section>
);

export default Hero; 