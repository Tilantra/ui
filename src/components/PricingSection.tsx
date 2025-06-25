import React, { useState, useEffect } from 'react';

const plans = [
  {
    title: 'Starter',
    price: '$49/mo',
    features: ['Up to 1M API calls', 'Basic support', 'Single integration', 'Lorem ipsum dolor sit'],
    color: '#2563eb',
    cta: 'Start Free',
  },
  {
    title: 'Pro',
    price: '$199/mo',
    features: ['Up to 10M API calls', 'Priority support', 'Multi-integration', 'Advanced analytics'],
    color: '#7c3aed',
    cta: 'Get Pro',
  },
  {
    title: 'Enterprise',
    price: 'Contact Us',
    features: ['Unlimited API calls', 'Dedicated support', 'Custom integrations', 'Compliance & SLAs'],
    color: '#222',
    cta: 'Contact Sales',
  },
];

const PricingSection: React.FC = () => {
  const [hovered, setHovered] = useState<number | null>(null);

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
    <section style={{ background: '#fff', padding: '2.2rem 1rem 2.2rem 1rem', fontFamily: 'inherit', borderTop: '1px solid #ece6fa' }}>
      <h2 className="fade-slide-up" style={{ textAlign: 'center', fontSize: '1.5rem', fontWeight: 700, color: '#2563eb', marginBottom: '1.5rem' }}>
        Pricing Preview
      </h2>
      <div style={{ display: 'flex', flexWrap: 'wrap', gap: '1.2rem', justifyContent: 'center', alignItems: 'stretch', maxWidth: 900, margin: '0 auto' }}>
        {plans.map((plan, i) => (
          <div
            key={plan.title}
            className="fade-slide-up"
            style={{
              flex: '1 1 180px',
              minWidth: 140,
              minHeight: 260,
              padding: '1.2rem 0.7rem',
              textAlign: 'center',
              display: 'flex',
              flexDirection: 'column',
              alignItems: 'center',
              justifyContent: 'center',
              background: hovered === i ? '#f6f8fa' : 'none',
              borderRadius: '1.2rem',
              boxShadow: hovered === i ? '0 2px 12px rgba(80,60,120,0.07)' : 'none',
              border: `2px solid ${hovered === i ? plan.color : 'transparent'}`,
              transition: 'all 0.2s',
            }}
            onMouseEnter={() => setHovered(i)}
            onMouseLeave={() => setHovered(null)}
          >
            <div style={{ fontWeight: 800, fontSize: '1.05rem', color: plan.color, marginBottom: '0.5rem' }}>{plan.title}</div>
            <div style={{ fontSize: '1.3rem', fontWeight: 800, color: plan.color, marginBottom: '0.7rem' }}>{plan.price}</div>
            <ul style={{ listStyle: 'none', padding: 0, margin: 0, color: '#374151', fontSize: '0.95rem', marginBottom: '1rem', textAlign: 'left' }}>
              {plan.features.map(f => <li key={f} style={{ marginBottom: '0.3rem', paddingLeft: 0 }}>• {f}</li>)}
            </ul>
            <button style={{ background: plan.color, color: '#fff', border: 'none', borderRadius: '2rem', padding: '0.6rem 1.5rem', fontSize: '0.98rem', fontWeight: 700, cursor: 'pointer', boxShadow: '0 4px 16px rgba(37, 99, 235, 0.08)', transition: 'background 0.2s, box-shadow 0.2s' }}>{plan.cta}</button>
          </div>
        ))}
      </div>
    </section>
  );
};

export default PricingSection; 