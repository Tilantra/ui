import React from 'react';

const steps = [
  {
    icon: '🔗',
    title: 'Connect',
    desc: 'Integrate Tilantra with your stack in minutes. Lorem ipsum dolor sit amet, consectetur.'
  },
  {
    icon: '⚙️',
    title: 'Orchestrate',
    desc: 'Route, optimize, and govern LLM usage with one API. Lorem ipsum dolor sit amet.'
  },
  {
    icon: '📊',
    title: 'Analyze',
    desc: 'Monitor usage, cost, and compliance in real time. Lorem ipsum dolor sit amet.'
  }
];

const logos = [
  { name: 'OpenAI', icon: '🤖' },
  { name: 'Anthropic', icon: '🦾' },
  { name: 'Sequoia', icon: '🌲' },
  { name: 'Accel', icon: '🚀' },
  { name: 'Y Combinator', icon: '🟧' },
  { name: 'Placeholder', icon: '💼' },
];

const impactStats = [
  { value: '10M+', label: 'API calls' },
  { value: '100+', label: 'Enterprise clients' },
  { value: '40+', label: 'Models integrated' },
  { value: '99.9%', label: 'Uptime' },
];

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

const VideoQuote: React.FC = () => (
  <>
    <section style={{ background: '#fff', padding: '4rem 2rem', fontFamily: 'inherit', borderBottom: '1px solid #ece6fa' }}>
      <div style={{ display: 'flex', flexWrap: 'wrap', gap: '3rem', alignItems: 'center', justifyContent: 'center', maxWidth: 1200, margin: '0 auto' }}>
        <div className="fade-in" style={{ flex: '1 1 500px', minWidth: 400, maxWidth: 700 }}>
          <video width="100%" height="360" controls style={{ borderRadius: '0.5rem', boxShadow: '0 4px 24px rgba(124,58,237,0.07)' }}>
            <source src="https://www.w3schools.com/html/mov_bbb.mp4" type="video/mp4" />
            Your browser does not support the video tag.
          </video>
        </div>
        <div className="fade-in" style={{ flex: '1 1 350px', minWidth: 300, maxWidth: 500, textAlign: 'left' }}>
          <blockquote style={{ fontSize: '1.3rem', color: '#2563eb', fontStyle: 'italic', marginBottom: '1.2rem' }}>
            "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer posuere erat a ante."
          </blockquote>
          <div style={{ color: '#7c3aed', fontWeight: 700, fontSize: '1.15rem', marginBottom: '0.7rem' }}>99.9% uptime</div>
          <div style={{ color: '#374151', fontWeight: 500 }}>- Tilantra Team</div>
        </div>
      </div>
    </section>
    <section style={{ background: '#fff', padding: '2.5rem 2rem 2.5rem 2rem', fontFamily: 'inherit', borderBottom: '1px solid #ece6fa' }}>
      <h3 style={{ textAlign: 'center', fontSize: '1.3rem', fontWeight: 700, color: '#2563eb', marginBottom: '2rem', letterSpacing: '0.03em' }}>
        Trusted by leading companies
      </h3>
      <div style={{ display: 'flex', flexWrap: 'wrap', gap: '2.5rem', justifyContent: 'center', alignItems: 'center', maxWidth: 900, margin: '0 auto' }}>
        {logos.map((logo, i) => (
          <div key={logo.name} className="fade-in" style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', minWidth: 90 }}>
            <div style={{ fontSize: '2.7rem', marginBottom: '0.5rem', color: i % 2 === 0 ? '#2563eb' : '#7c3aed' }}>{logo.icon}</div>
            <div style={{ color: '#222', fontWeight: 600, fontSize: '1.05rem', letterSpacing: '0.01em' }}>{logo.name}</div>
          </div>
        ))}
      </div>
    </section>
    <section style={{ background: '#fff', padding: '4rem 2rem 3rem 2rem', fontFamily: 'inherit', borderTop: '1px solid #ece6fa' }}>
      <h2 style={{ textAlign: 'center', fontSize: '2.2rem', fontWeight: 700, color: '#2563eb', marginBottom: '2.5rem' }}>
        How Tilantra Works
      </h2>
      <div style={{ display: 'flex', flexWrap: 'wrap', gap: '2.5rem', justifyContent: 'center', alignItems: 'stretch', maxWidth: 1200, margin: '0 auto' }}>
        {steps.map((step, i) => (
          <div key={step.title} className="fade-in" style={{ flex: '1 1 220px', minWidth: 180, background: '#f6f8fa', borderRadius: '1.2rem', boxShadow: '0 2px 12px rgba(80,60,120,0.07)', padding: '2.2rem 1.2rem', textAlign: 'center', display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center', border: `2px solid ${i === 1 ? '#7c3aed' : '#2563eb'}` }}>
            <div style={{ fontSize: '2.5rem', color: i === 1 ? '#7c3aed' : '#2563eb', marginBottom: '1.1rem' }}>{step.icon}</div>
            <div style={{ fontWeight: 700, fontSize: '1.18rem', color: '#222', marginBottom: '0.7rem' }}>{step.title}</div>
            <div style={{ color: '#374151', fontSize: '1.05rem' }}>{step.desc}</div>
          </div>
        ))}
      </div>
    </section>
  </>
);

export default VideoQuote; 