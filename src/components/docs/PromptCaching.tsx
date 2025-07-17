import React, { useEffect } from 'react';
import { useDocsOnThisPage } from '../Docs';

const PURPLE = '#7c3aed';
const BLUE = '#2563eb';
const headingScrollMargin = { scrollMarginTop: 64 };

const ON_THIS_PAGE = [
  { label: 'Overview', anchor: 'prompt-caching-overview' },
  { label: 'The Problem', anchor: 'prompt-caching-problem' },
  { label: 'Our Solution: Intelligent Caching', anchor: 'prompt-caching-solution' },
  { label: 'How It Works', anchor: 'prompt-caching-how' },
  { label: 'Benefits', anchor: 'prompt-caching-benefits' },
];

const PromptCaching: React.FC = () => {
  const { setLinks } = useDocsOnThisPage();
  useEffect(() => {
    setLinks(ON_THIS_PAGE);
    return () => setLinks([]);
  }, [setLinks]);

  return (
    <div style={{ maxWidth: 900, margin: '0 auto', color: '#222', fontFamily: 'inherit', padding: '2rem 0', background: '#fff' }}>
      <h1 id="prompt-caching-overview" style={{ color: BLUE, fontWeight: 800, fontSize: '2.2rem', marginBottom: 18 }}>Prompt Caching</h1>
    <p style={{ fontSize: '1.13rem', marginBottom: 28 }}>
        Intelligent prompt caching reduces latency and cost for frequent prompts by serving instant responses for eligible requests—without ever risking privacy or compliance.
      </p>
      <h2 id="prompt-caching-problem" style={{ ...headingScrollMargin, color: PURPLE, fontWeight: 700, fontSize: '1.18rem', marginTop: 36, marginBottom: 10 }}>The Problem</h2>
      <ul style={{ margin: '0 0 24px 20px', color: '#222', fontSize: '1.05rem' }}>
        <li>Repeatedly generating the same or similar responses wastes time and money.</li>
        <li>Sensitive or dynamic prompts must never be cached.</li>
      </ul>
      <h2 id="prompt-caching-solution" style={{ ...headingScrollMargin, color: PURPLE, fontWeight: 700, fontSize: '1.18rem', marginTop: 36, marginBottom: 10 }}>Our Solution: Intelligent Caching</h2>
      <ul style={{ margin: '0 0 24px 20px', color: '#222', fontSize: '1.05rem' }}>
        <li><b>Smart Eligibility:</b> Only safe, repeatable prompts (like code or summaries) are cached.</li>
        <li><b>Privacy-First:</b> Prompts with dynamic or user-specific data are never cached.</li>
        <li><b>Instant Responses:</b> Cached results are served instantly, reducing latency and cost.</li>
      </ul>
      <h2 id="prompt-caching-how" style={{ ...headingScrollMargin, color: PURPLE, fontWeight: 700, fontSize: '1.18rem', marginTop: 36, marginBottom: 10 }}>How It Works</h2>
      <ol style={{ margin: '0 0 24px 24px', color: '#222', fontSize: '1.05rem', lineHeight: 1.7 }}>
        <li><b>Eligibility Check:</b> The system determines if a prompt is safe to cache.</li>
        <li><b>Cache Storage:</b> Responses are stored and keyed by prompt and user.</li>
        <li><b>Cache Retrieval:</b> On repeat requests, cached responses are returned instantly.</li>
      </ol>
      <h2 id="prompt-caching-benefits" style={{ ...headingScrollMargin, color: PURPLE, fontWeight: 700, fontSize: '1.18rem', marginTop: 36, marginBottom: 10 }}>Benefits</h2>
    <ul style={{ margin: '0 0 24px 20px', color: '#222', fontSize: '1.05rem' }}>
        <li>Lightning-fast responses for common tasks.</li>
        <li>Lower compute costs.</li>
        <li>No risk of leaking sensitive or unique data.</li>
    </ul>
  </div>
);
};

export default PromptCaching; 