import React, { useEffect } from 'react';
import { useDocsOnThisPage } from '../Docs';

const PURPLE = '#7c3aed';
const BLUE = '#2563eb';
const headingScrollMargin = { scrollMarginTop: 64 };

const ON_THIS_PAGE = [
  { label: 'Overview', anchor: 'uptime-optimization-overview' },
  { label: 'The Problem', anchor: 'uptime-optimization-problem' },
  { label: 'Our Solution: Always-On Reliability', anchor: 'uptime-optimization-solution' },
  { label: 'How It Works', anchor: 'uptime-optimization-how' },
  { label: 'Benefits', anchor: 'uptime-optimization-benefits' },
];

const UptimeOptimization: React.FC = () => {
  const { setLinks } = useDocsOnThisPage();
  useEffect(() => {
    setLinks(ON_THIS_PAGE);
    return () => setLinks([]);
  }, [setLinks]);

  return (
    <div style={{ maxWidth: 900, margin: '0 auto', color: '#222', fontFamily: 'inherit', padding: '2rem 0', background: '#fff' }}>
      <h1 id="uptime-optimization-overview" style={{ color: BLUE, fontWeight: 800, fontSize: '2.2rem', marginBottom: 18 }}>Uptime Optimization</h1>
    <p style={{ fontSize: '1.13rem', marginBottom: 28 }}>
        Always-on reliability ensures your AI features are available, responsive, and resilient to provider outages or slowdowns.
      </p>
      <h2 id="uptime-optimization-problem" style={{ ...headingScrollMargin, color: PURPLE, fontWeight: 700, fontSize: '1.18rem', marginTop: 36, marginBottom: 10 }}>The Problem</h2>
      <ul style={{ margin: '0 0 24px 20px', color: '#222', fontSize: '1.05rem' }}>
        <li>Downtime or slow responses can disrupt your business and frustrate users.</li>
      </ul>
      <h2 id="uptime-optimization-solution" style={{ ...headingScrollMargin, color: PURPLE, fontWeight: 700, fontSize: '1.18rem', marginTop: 36, marginBottom: 10 }}>Our Solution: Always-On Reliability</h2>
      <ul style={{ margin: '0 0 24px 20px', color: '#222', fontSize: '1.05rem' }}>
        <li><b>Multi-Model Fallback:</b> If the top model is slow or unavailable, the system instantly retries with the next-best.</li>
        <li><b>Rate Limiting:</b> Per-user rate limits prevent abuse and ensure fair access.</li>
        <li><b>Real-Time Monitoring:</b> The system tracks health and performance to keep everything running smoothly.</li>
      </ul>
      <h2 id="uptime-optimization-how" style={{ ...headingScrollMargin, color: PURPLE, fontWeight: 700, fontSize: '1.18rem', marginTop: 36, marginBottom: 10 }}>How It Works</h2>
      <ol style={{ margin: '0 0 24px 24px', color: '#222', fontSize: '1.05rem', lineHeight: 1.7 }}>
        <li><b>Model Health Checks:</b> The system monitors model availability and performance.</li>
        <li><b>Automatic Fallbacks:</b> If a model fails, the next-best is used without delay.</li>
        <li><b>Rate Limiting:</b> Usage is managed to ensure fairness and stability.</li>
      </ol>
      <h2 id="uptime-optimization-benefits" style={{ ...headingScrollMargin, color: PURPLE, fontWeight: 700, fontSize: '1.18rem', marginTop: 36, marginBottom: 10 }}>Benefits</h2>
    <ul style={{ margin: '0 0 24px 20px', color: '#222', fontSize: '1.05rem' }}>
        <li>Your AI features are always available.</li>
        <li>Users never see an error due to provider downtime.</li>
        <li>Peace of mind for your business.</li>
    </ul>
  </div>
);
};

export default UptimeOptimization; 