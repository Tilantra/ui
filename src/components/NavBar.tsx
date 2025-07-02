import React, { useEffect, useState } from 'react';
import { Link, useLocation, useNavigate } from 'react-router-dom';

const blueText = {
  color: '#2563eb',
};

const scrollToId = (id: string) => {
  const el = document.getElementById(id);
  if (el) {
    el.scrollIntoView({ behavior: 'smooth' });
  }
};

const NavBar: React.FC = () => {
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const location = useLocation();
  const navigate = useNavigate();
  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 10);
    window.addEventListener('scroll', onScroll);
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  // Close mobile menu on route change
  useEffect(() => {
    setMobileMenuOpen(false);
  }, [location]);

  return (
    <nav className="tilantra-navbar" style={{
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
      <div className="navbar-logo" style={{ fontWeight: 700, fontSize: '2.1rem', letterSpacing: '0.04em', ...blueText, maxHeight: '56px', overflow: 'visible', display: 'flex', alignItems: 'center' }}>
        <a href="#hero-section" onClick={e => {
          e.preventDefault();
          if (location.pathname === "/") {
            scrollToId('hero-section');
          } else {
            navigate("/");
          }
        }}>
          <img src="/Tilantra_blueLOGO.png" alt="Tilantra Logo" style={{ height: '72px', verticalAlign: 'middle', display: 'block' }} />
        </a>
      </div>
      {/* Hamburger icon for mobile */}
      <button className="navbar-hamburger" aria-label="Open menu" onClick={() => setMobileMenuOpen(m => !m)} style={{ display: 'none', background: 'none', border: 'none', cursor: 'pointer', padding: 0, marginLeft: 16 }}>
        <span style={{ display: 'block', width: 28, height: 3, background: '#2563eb', margin: '6px 0', borderRadius: 2 }}></span>
        <span style={{ display: 'block', width: 28, height: 3, background: '#2563eb', margin: '6px 0', borderRadius: 2 }}></span>
        <span style={{ display: 'block', width: 28, height: 3, background: '#2563eb', margin: '6px 0', borderRadius: 2 }}></span>
      </button>
      {/* Nav links */}
      <div className={`navbar-links${mobileMenuOpen ? ' open' : ''}`} style={{ display: 'flex', gap: '2.8rem', alignItems: 'center' }}>
        <Link to="/" style={{ color: '#222', textDecoration: 'none', fontWeight: 500, transition: 'color 0.2s' }}
          onMouseOver={e => (e.currentTarget.style.color = '#2563eb')}
          onMouseOut={e => (e.currentTarget.style.color = '#222')}
        >Home</Link>
        <a href="#what-we-are" style={{ color: '#222', textDecoration: 'none', fontWeight: 500, transition: 'color 0.2s' }}
          onClick={e => { e.preventDefault(); scrollToId('what-we-are'); }}
          onMouseOver={e => (e.currentTarget.style.color = '#2563eb')}
          onMouseOut={e => (e.currentTarget.style.color = '#222')}
        >About</a>
        <a href="#our-features" style={{ color: '#222', textDecoration: 'none', fontWeight: 500, transition: 'color 0.2s' }}
          onClick={e => { e.preventDefault(); scrollToId('our-features'); }}
          onMouseOver={e => (e.currentTarget.style.color = '#2563eb')}
          onMouseOut={e => (e.currentTarget.style.color = '#222')}
        >Features</a>
        <a href="#contact-footer" style={{ color: '#222', textDecoration: 'none', fontWeight: 500, transition: 'color 0.2s' }}
          onClick={e => { e.preventDefault(); scrollToId('contact-footer'); }}
          onMouseOver={e => (e.currentTarget.style.color = '#2563eb')}
          onMouseOut={e => (e.currentTarget.style.color = '#222')}
        >Contact</a>
        <Link
          to="/docs"
          style={{ color: '#222', textDecoration: 'none', fontWeight: 500, transition: 'color 0.2s' }}
          onMouseOver={e => (e.currentTarget.style.color = '#2563eb')}
          onMouseOut={e => (e.currentTarget.style.color = '#222')}
        >
          Docs
        </Link>
        <button
          onClick={() => scrollToId('tilantra-assistant')}
          style={{ marginLeft: '1.2rem', background: '#2563eb', color: '#fff', border: 'none', borderRadius: '2rem', padding: '0.5rem 1.4rem', fontWeight: 700, fontSize: '1.05rem', cursor: 'pointer', boxShadow: '0 4px 16px rgba(37, 99, 235, 0.08)', transition: 'background 0.2s, box-shadow 0.2s' }}
        >
          Get a Demo
        </button>
      </div>
    </nav>
  );
};

export default NavBar; 