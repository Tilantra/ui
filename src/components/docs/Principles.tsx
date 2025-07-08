import React from 'react';

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
        color: '#2563eb',
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

const Principles: React.FC = () => (
  <div style={{ maxWidth: 900, margin: '0 auto', color: '#222', fontFamily: 'inherit', padding: '2rem 0' }}>
    <h1 style={{ color: '#2563eb', fontWeight: 800, fontSize: '2.2rem', marginBottom: 18 }}>Principles</h1>
    <p style={{ fontSize: '1.13rem', marginBottom: 28 }}>
      Guidera is built on a foundation of modularity, cost efficiency, and compliance. Here are our core principles:
    </p>
    <ul style={{ margin: '0 0 24px 20px', color: '#222', fontSize: '1.05rem' }}>
      <li><strong>Modularity:</strong> Plug in new models, providers, and rules without code changes.</li>
      <li><strong>Cost Efficiency:</strong> Always seeks the lowest-cost, highest-value model for each prompt.</li>
      <li><strong>Compliance-First:</strong> All data is checked for PII, policy violations, and output risks.</li>
      <li><strong>Provider Agnosticism:</strong> No lock-in. Use any supported LLM provider, or bring your own.</li>
      <li><strong>Enterprise Security:</strong> All API calls are authenticated, data is encrypted, and logs are available for audit.</li>
    </ul>
    <h2 style={{ color: '#2563eb', fontWeight: 700, fontSize: '1.18rem', marginTop: 36, marginBottom: 10 }}>Configuration Example</h2>
    {codeBlock(`const client = new Guidera({
  apiKey: 'YOUR_API_KEY',
  compliance: true,
  providers: ['openai', 'anthropic'],
});`)}
  </div>
);

export default Principles; 