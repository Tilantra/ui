import React, { useEffect } from 'react';
import '../css/custom.css';

const MarketStats: React.FC = () => {
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
      color: '#222', 
      fontFamily: 'inherit', 
      maxWidth: 1200, 
      margin: '0 auto', 
      borderRadius: '1.5rem', 
      boxShadow: '0 2px 24px rgba(80,60,120,0.04)',
      marginBottom: '1.2rem',
      display: 'flex',
      flexWrap: 'wrap',
      gap: '3rem',
      alignItems: 'center',
      justifyContent: 'space-between'
    }} className="market-stats-container">
      {/* Left side - 6 boxes */}
      <div style={{ flex: '1 1 500px', minWidth: 280, display: 'flex', flexDirection: 'column', gap: '2rem' }} className="market-stats-boxes">
        {/* Current AI Market Section */}
        <div>
          <h3 className="fade-slide-up" style={{ fontSize: '1.3rem', fontWeight: 700, marginBottom: '1.5rem', color: '#2563eb', textAlign: 'left', textTransform: 'uppercase', letterSpacing: '0.05em' }}>
            Current AI Market
          </h3>
          <div style={{ display: 'flex', flexDirection: 'row', gap: '1rem', justifyContent: 'flex-start', alignItems: 'stretch', flexWrap: 'wrap' }}>
            <div style={{ background: '#ffffff', borderRadius: '1rem', padding: '1.5rem 1rem', boxShadow: '0 4px 20px rgba(80,60,120,0.08)', width: '180px', textAlign: 'center', border: '2px solid #e5e7eb', display: 'flex', flexDirection: 'column', justifyContent: 'center', transition: 'transform 0.2s, box-shadow 0.2s', animationDelay: '0.1s' }} className="fade-slide-up stat-card">
              <div style={{ fontSize: '1.5rem', fontWeight: 800, color: '#2563eb', marginBottom: '0.5rem' }}>
                $1.5T
              </div>
              <div style={{ color: '#374151', fontWeight: 600, fontSize: '0.85rem', lineHeight: '1.2' }}>AI market by 2030</div>
            </div>
            <div style={{ background: '#ffffff', borderRadius: '1rem', padding: '1.5rem 1rem', boxShadow: '0 4px 20px rgba(80,60,120,0.08)', width: '180px', textAlign: 'center', border: '2px solid #e5e7eb', display: 'flex', flexDirection: 'column', justifyContent: 'center', transition: 'transform 0.2s, box-shadow 0.2s', animationDelay: '0.2s' }} className="fade-slide-up stat-card">
              <div style={{ fontSize: '1.5rem', fontWeight: 800, color: '#7c3aed', marginBottom: '0.5rem' }}>
                $10B
              </div>
              <div style={{ color: '#374151', fontWeight: 600, fontSize: '0.85rem', lineHeight: '1.2' }}>Revenue target (2yr)</div>
            </div>
            <div style={{ background: '#ffffff', borderRadius: '1rem', padding: '1.5rem 1rem', boxShadow: '0 4px 20px rgba(80,60,120,0.08)', width: '180px', textAlign: 'center', border: '2px solid #e5e7eb', display: 'flex', flexDirection: 'column', justifyContent: 'center', transition: 'transform 0.2s, box-shadow 0.2s', animationDelay: '0.3s' }} className="fade-slide-up stat-card">
              <div style={{ fontSize: '1.5rem', fontWeight: 800, color: '#2563eb', marginBottom: '0.5rem' }}>
                $28K
              </div>
              <div style={{ color: '#374151', fontWeight: 600, fontSize: '0.85rem', lineHeight: '1.2' }}>Avg. monthly AI spend</div>
            </div>
          </div>
        </div>

        {/* Why Us Section */}
        <div>
          <h3 className="fade-slide-up" style={{ fontSize: '1.3rem', fontWeight: 700, marginBottom: '1.5rem', color: '#2563eb', textAlign: 'left', textTransform: 'uppercase', letterSpacing: '0.05em' }}>
            Why Us?
          </h3>
          <div style={{ display: 'flex', flexDirection: 'row', gap: '1rem', justifyContent: 'flex-start', alignItems: 'stretch', flexWrap: 'wrap' }}>
            <div style={{ background: '#ffffff', borderRadius: '1rem', padding: '1.5rem 1rem', boxShadow: '0 4px 20px rgba(80,60,120,0.08)', width: '180px', textAlign: 'center', border: '2px solid #e5e7eb', display: 'flex', flexDirection: 'column', justifyContent: 'center', transition: 'transform 0.2s, box-shadow 0.2s', animationDelay: '0.4s' }} className="fade-slide-up stat-card">
              <div style={{ fontSize: '1.5rem', fontWeight: 800, color: '#2563eb', marginBottom: '0.5rem' }}>
                {'>'}80%
              </div>
              <div style={{ color: '#374151', fontWeight: 600, fontSize: '0.85rem', lineHeight: '1.2' }}>Cost saved</div>
            </div>
            <div style={{ background: '#ffffff', borderRadius: '1rem', padding: '1.5rem 1rem', boxShadow: '0 4px 20px rgba(80,60,120,0.08)', width: '180px', textAlign: 'center', border: '2px solid #e5e7eb', display: 'flex', flexDirection: 'column', justifyContent: 'center', transition: 'transform 0.2s, box-shadow 0.2s', animationDelay: '0.5s' }} className="fade-slide-up stat-card">
              <div style={{ fontSize: '1.5rem', fontWeight: 800, color: '#7c3aed', marginBottom: '0.5rem' }}>
                {'>'}90%
              </div>
              <div style={{ color: '#374151', fontWeight: 600, fontSize: '0.85rem', lineHeight: '1.2' }}>Performance improvement</div>
            </div>
            <div style={{ background: '#ffffff', borderRadius: '1rem', padding: '1.5rem 1rem', boxShadow: '0 4px 20px rgba(80,60,120,0.08)', width: '180px', textAlign: 'center', border: '2px solid #e5e7eb', display: 'flex', flexDirection: 'column', justifyContent: 'center', transition: 'transform 0.2s, box-shadow 0.2s', animationDelay: '0.6s' }} className="fade-slide-up stat-card">
              <div style={{ fontSize: '1.5rem', fontWeight: 800, color: '#2563eb', marginBottom: '0.5rem' }}>
                100%
              </div>
              <div style={{ color: '#374151', fontWeight: 600, fontSize: '0.85rem', lineHeight: '1.2' }}>Vendor agnostic</div>
            </div>
          </div>
        </div>
      </div>

      {/* Right side - Image */}
      <div style={{ flex: '1 1 400px', minWidth: 280, display: 'flex', flexDirection: 'column', justifyContent: 'center', alignItems: 'center', height: '100%', gap: '1.5rem' }} className="market-stats-image">
        <img 
          src="/missinggaps.png" 
          alt="Missing Gaps" 
          className="fade-slide-up"
          style={{ 
            maxWidth: '80%', 
            height: 'auto', 
            borderRadius: '0.5rem',
            animationDelay: '0.7s'
          }} 
        />
        <p className="fade-slide-up" style={{ 
          fontSize: '1.1rem', 
          color: '#374151', 
          textAlign: 'center', 
          lineHeight: '1.5',
          maxWidth: '90%',
          margin: 0,
          padding: '1rem 0',
          animationDelay: '0.8s',
          opacity: 1,
          transform: 'none'
        }}>
          With fragmented tools and no clear guide,<br />
          Costs rise, security breaks, and scaling AI stays out of reach.
        </p>
      </div>
    </section>
  );
};

export default MarketStats; 