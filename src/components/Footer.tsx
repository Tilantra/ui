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
        <div style={{ flex: '1 1 320px', minWidth: 260, maxWidth: 400 }}>
          <div style={{ fontWeight: 700, marginBottom: '0.7rem', color: '#222', fontSize: '1.15rem' }}>Schedule a Full Demo</div>
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
      <div style={{ textAlign: 'center', color: '#6b7280', fontSize: '0.98rem' }}>
        Built for enterprises and AI-first SaaS teams.
      </div>
    </footer>
  );
};

export default Footer; 