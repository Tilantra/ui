import React, { useState } from 'react';

const Footer: React.FC = () => {
  const [form, setForm] = useState({
    name: '',
    designation: '',
    email: '',
    phone: '',
    message: '',
  });
  const [submitting, setSubmitting] = useState(false);
  const [success, setSuccess] = useState<string | null>(null);
  const [error, setError] = useState<string | null>(null);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitting(true);
    setSuccess(null);
    setError(null);
    try {
      const response = await fetch('http://localhost:8000/inquiry', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(form),
      });
      if (response.ok) {
        setSuccess('Thank you for your inquiry!');
        setForm({ name: '', designation: '', email: '', phone: '', message: '' });
      } else {
        const err = await response.json();
        setError('Error: ' + (err.detail || 'Could not submit inquiry.'));
      }
    } catch (error) {
      setError('Network error. Please try again later.');
    }
    setSubmitting(false);
  };

  return (
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
        gap: '3.5rem',
        justifyContent: 'center',
        alignItems: 'flex-start',
        maxWidth: 1200,
        margin: '0 auto 2rem auto',
      }}>
        <div style={{ flex: '1 1 180px', minWidth: 180, maxWidth: 220, display: 'flex', flexDirection: 'column', alignItems: 'flex-start' }}>
          <div style={{ marginBottom: '1rem' }}>
            <img src="/Tilantra_blueLOGO.png" alt="Tilantra Logo" style={{ height: '56px', verticalAlign: 'middle' }} />
          </div>
          <div style={{ color: '#374151', fontSize: '1.05rem', marginBottom: '1.2rem', textAlign: 'left' }}>
            High-performance orchestration for LLMs.<br />Total control, compliance, and cost-performance through a single API.
          </div>
        </div>
        <div style={{ flex: '1 1 160px', minWidth: 160, display: 'flex', flexDirection: 'column', alignItems: 'flex-start' }}>
          <div style={{ fontWeight: 700, marginBottom: '1.2rem', color: '#222', textAlign: 'left', fontSize: '1.18rem', letterSpacing: '0.01em' }}>Quick Links</div>
          <ul style={{ listStyle: 'none', padding: 0, margin: 0, color: '#2563eb', fontWeight: 600, fontSize: '1.08rem', textAlign: 'left', display: 'flex', flexDirection: 'column', gap: '1.1rem' }}>
            <li><a href="/" style={{ color: '#2563eb', textDecoration: 'none', fontWeight: 400, fontSize: '1.08rem' }}>Home</a></li>
            <li><a href="/docs" style={{ color: '#2563eb', textDecoration: 'none', fontWeight: 400, fontSize: '1.08rem' }}>Docs</a></li>
            <li><a href="#what-we-are" style={{ color: '#2563eb', textDecoration: 'none', fontWeight: 400, fontSize: '1.08rem' }}>About</a></li>
            <li><a href="#our-features" style={{ color: '#2563eb', textDecoration: 'none', fontWeight: 400, fontSize: '1.08rem' }}>Features</a></li>
          </ul>
        </div>
        <div style={{ flex: '1 1 200px', minWidth: 180, display: 'flex', flexDirection: 'column', alignItems: 'flex-start' }}>
          <div style={{ fontWeight: 700, marginBottom: '1.2rem', color: '#222', textAlign: 'left', fontSize: '1.18rem', letterSpacing: '0.01em' }}>Contact</div>
          <ul style={{ listStyle: 'none', padding: 0, margin: 0, color: '#374151', fontWeight: 400, fontSize: '1.08rem', textAlign: 'left', display: 'flex', flexDirection: 'column', gap: '1.1rem' }}>
            <li style={{ color: '#374151', margin: 0, display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
              <svg width="16" height="16" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z" stroke="#2563eb" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                <polyline points="22,6 12,13 2,6" stroke="#2563eb" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
              </svg>
              tilantra.technologies@gmail.com
            </li>
            <li style={{ color: '#374151', margin: 0, display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
              <svg width="16" height="16" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z" stroke="#2563eb" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
              </svg>
              +91 7042644614
            </li>
            <li style={{ color: '#374151', margin: 0 }}>Bangalore, IN</li>
            <li>
              <a href="https://www.linkedin.com/company/tilantra" target="_blank" rel="noopener noreferrer" style={{ display: 'flex', alignItems: 'center', color: '#2563eb', textDecoration: 'none', fontWeight: 400, fontSize: '1.08rem', gap: '0.5rem' }}>
                <svg xmlns="http://www.w3.org/2000/svg" width="28" height="28" viewBox="0 0 24 24" style={{ marginRight: 6 }}>
                  <circle cx="12" cy="12" r="12" fill="#0A66C2" />
                  <text x="12" y="17" textAnchor="middle" fontFamily="Arial, Helvetica, sans-serif" fontWeight="bold" fontSize="13" fill="#fff">in</text>
                </svg>
                LinkedIn
              </a>
            </li>
          </ul>
        </div>
        <div style={{ flex: '1 1 320px', minWidth: 260, maxWidth: 400 }}>
          <div style={{ fontWeight: 700, marginBottom: '0.7rem', color: '#222', fontSize: '1.15rem', textAlign: 'left' }}>Schedule a Full Demo</div>
          <form className="inquiry-form" onSubmit={handleSubmit} style={{ background: '#fff', borderRadius: '1.2rem', boxShadow: '0 2px 12px rgba(80,60,120,0.07)', padding: '1.5rem 1.2rem', display: 'flex', flexDirection: 'column', gap: '1rem' }}>
            <div style={{ display: 'flex', gap: '1rem' }}>
              <div style={{ flex: 1 }}>
                <label htmlFor="name">Name <span style={{ color: '#e11d48' }}>*</span></label>
                <input type="text" id="name" name="name" value={form.name} onChange={handleChange} required style={{ width: '100%', padding: '0.5rem', borderRadius: 6, border: '1px solid #ece6fa', marginTop: 2 }} />
              </div>
              <div style={{ flex: 1 }}>
                <label htmlFor="designation">Designation / Role</label>
                <input type="text" id="designation" name="designation" value={form.designation} onChange={handleChange} style={{ width: '100%', padding: '0.5rem', borderRadius: 6, border: '1px solid #ece6fa', marginTop: 2 }} />
              </div>
            </div>
            <div style={{ display: 'flex', gap: '1rem' }}>
              <div style={{ flex: 1 }}>
                <label htmlFor="email">Email <span style={{ color: '#e11d48' }}>*</span></label>
                <input type="email" id="email" name="email" value={form.email} onChange={handleChange} required style={{ width: '100%', padding: '0.5rem', borderRadius: 6, border: '1px solid #ece6fa', marginTop: 2 }} />
              </div>
              <div style={{ flex: 1 }}>
                <label htmlFor="phone">Phone</label>
                <input type="tel" id="phone" name="phone" value={form.phone} onChange={handleChange} style={{ width: '100%', padding: '0.5rem', borderRadius: 6, border: '1px solid #ece6fa', marginTop: 2 }} />
              </div>
            </div>
            <div>
              <label htmlFor="message">Tell us what's on your mind <span style={{ color: '#e11d48' }}>*</span></label>
              <textarea id="message" name="message" rows={4} value={form.message} onChange={handleChange} required style={{ width: '100%', padding: '0.5rem', borderRadius: 6, border: '1px solid #ece6fa', marginTop: 2, resize: 'vertical' }} />
            </div>
            <button type="submit" className="inquiry-submit" disabled={submitting} style={{ background: '#2563eb', color: '#fff', border: 'none', borderRadius: '2rem', padding: '0.7rem 1.5rem', fontWeight: 700, fontSize: '1.05rem', cursor: 'pointer', marginTop: '0.5rem', boxShadow: '0 4px 16px rgba(37, 99, 235, 0.08)', transition: 'background 0.2s, box-shadow 0.2s' }}>
              {submitting ? 'Submitting...' : 'Submit Inquiry'}
            </button>
            {success && <div style={{ color: '#16a34a', marginTop: 8 }}>{success}</div>}
            {error && <div style={{ color: '#e11d48', marginTop: 8 }}>{error}</div>}
          </form>
        </div>
      </div>
      <hr style={{ border: 'none', borderTop: '1px solid #eaecef', margin: '0 0 1.2rem 0' }} />
      <div style={{ textAlign: 'center', color: '#6b7280', fontSize: '0.98rem' }}>
        Tilantra Technologies 2025. All Rights Reserved
      </div>
    </footer>
  );
};

export default Footer; 