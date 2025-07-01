import React from 'react';
import '../App.css';

const Hero: React.FC = () => (
  <section
    id="hero-section"
    style={{
      position: 'relative',
      minHeight: 'calc(100vh - 96px)',
      width: '100%',
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'center',
      justifyContent: 'center',
      textAlign: 'center',
      color: '#fff',
      fontFamily: 'inherit',
      overflow: 'hidden',
    }}
    className="fade-in"
  >
    <video
      autoPlay
      loop
      muted
      playsInline
      src="/vid2.mp4"
      style={{
        position: 'absolute',
        top: 0,
        left: 0,
        width: '100%',
        height: '100%',
        objectFit: 'cover',
        zIndex: 0,
        opacity: 1.0,
      }}
    />
    <div style={{ position: 'relative', zIndex: 1, display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center' }}>
      <h1 style={{ fontSize: '5.5rem', fontWeight: 1000, marginBottom: '1.2rem', letterSpacing: '-0.04em', color: '#fff', textShadow: '0 4px 32px #111, 0 1px 0 #2563eb', textTransform: 'uppercase' }}>
        Tilantra
      </h1>
      <p style={{ fontSize: '1.5rem', color: '#111', margin: '0 auto', fontWeight: 500, textShadow: '0 2px 8px #111' }}>
        The AI Orchestration Layer for Enterprises & SaaS
      </p>
    </div>
  </section>
);

export default Hero; 