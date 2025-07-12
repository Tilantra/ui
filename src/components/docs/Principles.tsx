import React, { useEffect } from 'react';
import { useDocsOnThisPage } from '../Docs';

const PURPLE = '#7c3aed';
const BLUE = '#2563eb';

const codeBlock = (code: string) => (
  <div style={{
    background: '#f6f8fa',
    borderRadius: 8,
    padding: '1.1em 1em 1em 1em',
    margin: '1.5em 0',
    fontSize: '1.01rem',
    fontFamily: 'Menlo, Monaco, Consolas, "Liberation Mono", "Courier New", monospace',
    position: 'relative',
    overflowX: 'auto',
  }}>
    <pre style={{ margin: 0, background: 'none', padding: 0, whiteSpace: 'pre-wrap', wordBreak: 'break-word' }}>{code}</pre>
    <button
      style={{
        position: 'absolute',
        top: 10,
        right: 12,
        background: '#fff',
        color: BLUE,
        border: '1px solid #eaecef',
        borderRadius: 4,
        padding: '3px 12px',
        cursor: 'pointer',
        fontWeight: 600,
        fontSize: '0.95rem',
        boxShadow: '0 1px 2px rgba(0,0,0,0.03)',
      }}
      onClick={() => navigator.clipboard.writeText(code)}
    >
      Copy
    </button>
  </div>
);

const ON_THIS_PAGE = [
  { label: 'Principles', anchor: 'principles' },
  { label: 'Configuration Example', anchor: 'configuration-example' },
];

const headingScrollMargin = { scrollMarginTop: 64 };

const Principles: React.FC = () => {
  const { setLinks } = useDocsOnThisPage();
  useEffect(() => {
    setLinks(ON_THIS_PAGE);
    return () => setLinks([]);
  }, [setLinks]);

  const principles = [
    {
      title: 'Modularity',
      desc: 'Plug in new models, providers, and rules without code changes. Guidera is designed to be flexible and future-proof, so you can adapt to the rapidly evolving AI landscape.'
    },
    {
      title: 'Cost Efficiency',
      desc: 'Guidera scouts for the best prices, lowest latencies, and highest throughput across dozens of providers, letting you choose how to prioritize them.'
    },
    {
      title: 'Compliance-First',
      desc: 'All data is checked for PII, policy violations, and output risks. We help you meet your regulatory and ethical obligations.'
    },
    {
      title: 'Provider Agnosticism',
      desc: 'No lock-in. Use any supported LLM provider, or bring your own. Switch between models and providers without changing your code.'
    },
    {
      title: 'Enterprise Security',
      desc: 'All API calls are authenticated, data is encrypted, and logs are available for audit. Security is built into every layer of Guidera.'
    },
    {
      title: 'Real-World Insights',
      desc: 'Be the first to take advantage of new models. See real-world data of how often models are used for different purposes. Stay up to date in our Discord channel.'
    },
    {
      title: 'Consolidated Billing',
      desc: 'Simple and transparent billing, regardless of how many providers you use. All your usage and costs in one place.'
    },
    {
      title: 'Higher Availability',
      desc: 'Fallback providers and automatic, smart routing mean your requests still work even when providers go down.'
    },
    {
      title: 'Higher Rate Limits',
      desc: 'Guidera works directly with providers to offer better rate limits and more throughput.'
    },
  ];

  return (
    <div style={{ maxWidth: 900, margin: '0 auto', color: '#222', fontFamily: 'inherit', padding: '2.5rem 0 3rem 0' }}>
      <h1 id="principles" style={{ color: BLUE, fontWeight: 800, fontSize: '2.2rem', marginBottom: 18 }}>Principles</h1>
      <p style={{ fontSize: '1.13rem', marginBottom: 32, color: '#444' }}>
        Guidera helps developers source and optimize AI usage. We believe the future is multi-model and multi-provider. Here are our core principles:
      </p>
      <ul style={{ listStyle: 'none', padding: 0, margin: '0 0 32px 0', display: 'flex', flexDirection: 'column', gap: 22 }}>
        {principles.map((p) => (
          <li key={p.title} style={{ background: '#f9fafb', border: `1.5px solid ${PURPLE}22`, borderRadius: 10, padding: '1.1rem 1.3rem', boxShadow: '0 1px 2px rgba(0,0,0,0.02)' }}>
            <div style={{ color: PURPLE, fontWeight: 700, fontSize: '1.13rem', marginBottom: 4 }}>{p.title}</div>
            <div style={{ color: '#222', fontSize: '1.04rem', lineHeight: 1.7 }}>{p.desc}</div>
          </li>
        ))}
      </ul>
      <h2 id="configuration-example" style={{ ...headingScrollMargin, color: PURPLE, fontWeight: 700, fontSize: '1.18rem', marginTop: 36, marginBottom: 10 }}>Configuration Example</h2>
      {codeBlock(`const client = new Guidera({
  apiKey: 'YOUR_API_KEY',
  compliance: true,
  providers: ['openai', 'anthropic'],
});`)}
    </div>
  );
};

export default Principles; 