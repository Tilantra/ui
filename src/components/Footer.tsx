import React from 'react';

const Footer: React.FC = () => (
  <footer style={{
    background: '#f6f8fa',
    color: '#222',
    padding: '3.5rem 2rem 2rem 2rem',
    fontFamily: 'inherit',
    fontSize: '1rem',
    borderTop: '1px solid #eaecef',
    marginTop: '2rem',
  }}>
    <div style={{
      display: 'flex',
      flexWrap: 'wrap',
      gap: '3rem',
      justifyContent: 'space-between',
      maxWidth: 1200,
      margin: '0 auto 2rem auto',
    }}>
      <div style={{ flex: '1 1 250px', minWidth: 220 }}>
        <div style={{ fontWeight: 800, fontSize: '1.5rem', color: '#2563eb', marginBottom: '1rem' }}>
          Tilantra
        </div>
        <div style={{ color: '#374151', fontSize: '1.05rem', marginBottom: '1.2rem' }}>
          High-performance orchestration for LLMs. Total control, compliance, and cost-performance through a single API.
        </div>
        <div style={{ color: '#6b7280', fontSize: '0.98rem' }}>
          © 2025 Tilantra. All rights reserved.
        </div>
      </div>
      <div style={{ flex: '1 1 180px', minWidth: 160 }}>
        <div style={{ fontWeight: 700, marginBottom: '0.7rem', color: '#222' }}>Quick Links</div>
        <ul style={{ listStyle: 'none', padding: 0, margin: 0, color: '#2563eb', fontWeight: 600, fontSize: '1.05rem' }}>
          <li><a href="/" style={{ color: '#2563eb', textDecoration: 'none' }}>Home</a></li>
          <li><a href="/docs" style={{ color: '#2563eb', textDecoration: 'none' }}>Docs</a></li>
          <li><a href="#" style={{ color: '#2563eb', textDecoration: 'none' }}>About</a></li>
          <li><a href="#" style={{ color: '#2563eb', textDecoration: 'none' }}>Features</a></li>
        </ul>
      </div>
      <div style={{ flex: '1 1 220px', minWidth: 180 }}>
        <div style={{ fontWeight: 700, marginBottom: '0.7rem', color: '#222' }}>Contact</div>
        <div style={{ color: '#374151', marginBottom: '0.5rem' }}>info@tilantra.com</div>
        <div style={{ color: '#374151', marginBottom: '0.5rem' }}>+1 (555) 123-4567</div>
        <div style={{ color: '#374151' }}>San Francisco, CA & Bangalore, IN</div>
      </div>
      <div style={{ flex: '1 1 180px', minWidth: 160 }}>
        <div style={{ fontWeight: 700, marginBottom: '0.7rem', color: '#222' }}>Follow Us</div>
        <div style={{ display: 'flex', gap: '1rem', alignItems: 'center' }}>
          <a href="#" aria-label="Twitter" style={{ color: '#2563eb', fontSize: '1.5rem', textDecoration: 'none' }}>🐦</a>
          <a href="#" aria-label="LinkedIn" style={{ color: '#2563eb', fontSize: '1.5rem', textDecoration: 'none' }}>💼</a>
          <a href="#" aria-label="GitHub" style={{ color: '#2563eb', fontSize: '1.5rem', textDecoration: 'none' }}>💻</a>
        </div>
      </div>
    </div>
    <div style={{ textAlign: 'center', color: '#6b7280', fontSize: '0.98rem' }}>
      Built for enterprises and AI-first SaaS teams.
    </div>
  </footer>
);

export default Footer; 