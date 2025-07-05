import React from 'react';
import '../App.css';

const Hero: React.FC = () => {
  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
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
        backgroundImage: 'url(/testwall2.png)',
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        backgroundRepeat: 'no-repeat',
        opacity: 0.7,
      }}
      className="fade-in"
    >
      {/* Semi-transparent overlay */}
      <div style={{
        position: 'absolute',
        top: 0,
        left: 0,
        right: 0,
        bottom: 0,
        backgroundColor: 'rgba(255, 255, 255, 0.0)',
        zIndex: 0
      }}></div>
      
      <div style={{ position: 'relative', zIndex: 1, display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center', maxWidth: '800px', padding: '0 2rem' }}>
        <h1 style={{ 
          fontSize: '4.5rem', 
          fontWeight: 700, 
          marginBottom: '1.5rem', 
          letterSpacing: '-0.02em', 
          color: '#fff', 
          textShadow: '0 4px 32px rgba(0,0,0,0.3)', 
          lineHeight: '1.1',
          marginTop: 0
        }}>
          <span style={{ color: '#2563eb', fontWeight: 800 }}>Enterprise AI Orchestration.</span><br />
          <span style={{ 
            background: 'linear-gradient(135deg, #2563eb 0%, #7c3aed 100%)',
            WebkitBackgroundClip: 'text',
            WebkitTextFillColor: 'transparent',
            backgroundClip: 'text',
            fontWeight: 700 
          }}>Simplified.</span>
        </h1>
        <p style={{ 
          fontSize: '1.4rem', 
          color: '#2563eb', 
          margin: '0 auto', 
          fontWeight: 700, 
          textShadow: '0 2px 8px rgba(0,0,0,0.2)',
          lineHeight: '1.6',
          maxWidth: '600px',
          marginBottom: '2rem'
        }}>
          Meet Guidera. <br />
          The unified solution for enterprise AI management.
        </p>
        <div style={{ 
          display: 'flex', 
          gap: '1rem', 
          flexWrap: 'wrap', 
          justifyContent: 'center',
          marginTop: '1rem'
        }}>
          <button 
            onClick={() => scrollToSection('what-we-are')}
            style={{
              background: '#2563eb',
              color: '#fff',
              border: 'none',
              padding: '1rem 2rem',
              borderRadius: '0.5rem',
              fontSize: '1.1rem',
              fontWeight: 600,
              cursor: 'pointer',
              transition: 'all 0.2s ease',
              boxShadow: '0 4px 12px rgba(37, 99, 235, 0.3)'
            }}
          >
            Get Started
          </button>
          <button 
            onClick={() => scrollToSection('tilantra-assistant')}
            style={{
              background: 'transparent',
              color: '#7c3aed',
              border: '2px solid #7c3aed',
              padding: '1rem 2rem',
              borderRadius: '0.5rem',
              fontSize: '1.1rem',
              fontWeight: 600,
              cursor: 'pointer',
              transition: 'all 0.2s ease'
            }}
          >
            Get a Demo
          </button>
        </div>
      </div>
    </section>
  );
};

export default Hero; 