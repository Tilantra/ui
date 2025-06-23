import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';

const blueText = {
  color: '#2563eb',
};

const NavBar: React.FC = () => {
  const [scrolled, setScrolled] = useState(false);
  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 10);
    window.addEventListener('scroll', onScroll);
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  return (
    <nav style={{
      background: '#fff',
      borderBottom: scrolled ? '1px solid #eaecef' : '1px solid #ece6fa',
      padding: '1.7rem 2.5rem',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'space-between',
      fontFamily: 'inherit',
      boxShadow: scrolled ? '0 2px 16px rgba(80, 60, 120, 0.07)' : '0 2px 8px rgba(80, 60, 120, 0.03)',
      fontSize: '1.25rem',
      position: 'sticky',
      top: 0,
      zIndex: 100,
      transition: 'box-shadow 0.2s, border-bottom 0.2s',
    }}>
      <div style={{ fontWeight: 700, fontSize: '2.1rem', letterSpacing: '0.04em', ...blueText }}>
        Tilantra
      </div>
      <div style={{ display: 'flex', gap: '2.8rem' }}>
        <Link to="/" style={{ color: '#222', textDecoration: 'none', fontWeight: 500, transition: 'color 0.2s' }}
          onMouseOver={e => (e.currentTarget.style.color = '#2563eb')}
          onMouseOut={e => (e.currentTarget.style.color = '#222')}
        >Home</Link>
        <a href="#" style={{ color: '#222', textDecoration: 'none', fontWeight: 500, transition: 'color 0.2s' }}
          onMouseOver={e => (e.currentTarget.style.color = '#2563eb')}
          onMouseOut={e => (e.currentTarget.style.color = '#222')}
        >About</a>
        <a href="#" style={{ color: '#222', textDecoration: 'none', fontWeight: 500, transition: 'color 0.2s' }}
          onMouseOver={e => (e.currentTarget.style.color = '#2563eb')}
          onMouseOut={e => (e.currentTarget.style.color = '#222')}
        >Features</a>
        <a href="#" style={{ color: '#222', textDecoration: 'none', fontWeight: 500, transition: 'color 0.2s' }}
          onMouseOver={e => (e.currentTarget.style.color = '#2563eb')}
          onMouseOut={e => (e.currentTarget.style.color = '#222')}
        >Contact</a>
        <Link
          to="/docs"
          style={{ color: '#2563eb', textDecoration: 'none', fontWeight: 700, borderBottom: '2px solid transparent', transition: 'border-bottom 0.2s' }}
          onMouseOver={e => (e.currentTarget.style.borderBottom = '2px solid #2563eb')}
          onMouseOut={e => (e.currentTarget.style.borderBottom = '2px solid transparent')}
        >
          Docs
        </Link>
      </div>
    </nav>
  );
};

export default NavBar; 