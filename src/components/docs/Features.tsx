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

const Features: React.FC = () => (
  <div style={{ maxWidth: 900, margin: '0 auto', color: '#222', fontFamily: 'inherit', padding: '2rem 0' }}>
    <h1 style={{ color: '#2563eb', fontWeight: 800, fontSize: '2.2rem', marginBottom: 18 }}>Features</h1>
    <p style={{ fontSize: '1.13rem', marginBottom: 28 }}>
      Guidera offers a robust set of features for developers and enterprises. Explore the highlights below.
    </p>
    <h2 style={{ color: '#2563eb', fontWeight: 700, fontSize: '1.18rem', marginTop: 36, marginBottom: 10 }}>Core Features</h2>
    <ul style={{ margin: '0 0 24px 20px', color: '#222', fontSize: '1.05rem' }}>
      <li><strong>Privacy & Logging:</strong> Secure request logging, PII redaction, full audit trails.</li>
      <li><strong>Model Routing:</strong> Auto-selects best model for cost and performance.</li>
      <li><strong>Provider Routing:</strong> Restrict or choose providers for your prompts.</li>
      <li><strong>Prompt Caching:</strong> Reduce latency and cost for frequent prompts.</li>
      <li><strong>Prompt Suggestion:</strong> Instantly generate high-quality prompt templates for any task.</li>
      <li><strong>Structured Outputs:</strong> Get responses in JSON, tables, and more.</li>
    </ul>
    <h2 style={{ color: '#2563eb', fontWeight: 700, fontSize: '1.18rem', marginTop: 36, marginBottom: 10 }}>Advanced Features</h2>
    <ul style={{ margin: '0 0 24px 20px', color: '#222', fontSize: '1.05rem' }}>
      <li><strong>Tool Calling:</strong> Integrate external APIs and tools in your workflow.</li>
      <li><strong>File Support:</strong> Upload and process images, PDFs, and more.</li>
      <li><strong>Message Transforms:</strong> Rewrite/enhance prompts and responses.</li>
      <li><strong>Uptime Optimization:</strong> Automatic failover to backup models/providers.</li>
      <li><strong>Web Search:</strong> Augment prompts with real-time web results.</li>
      <li><strong>Zero Completion Insurance:</strong> Only pay for successful completions.</li>
      <li><strong>API Key Provisioning:</strong> Manage keys for teams and projects.</li>
    </ul>
    <h2 style={{ color: '#2563eb', fontWeight: 700, fontSize: '1.18rem', marginTop: 36, marginBottom: 10 }}>Feature Usage Example</h2>
    {codeBlock(`const response = await client.chat({
  model: 'guidera-llm',
  tools: ['web-search'],
  messages: [
    { role: 'user', content: 'Find the latest news on Guidera.' }
  ]
});`)}
    <h2 style={{ color: '#2563eb', fontWeight: 700, fontSize: '1.18rem', marginTop: 36, marginBottom: 10 }}>Feature Availability</h2>
    <table style={{ width: '100%', borderCollapse: 'collapse', margin: '1.5em 0', fontSize: '1.05rem' }}>
      <thead>
        <tr style={{ background: '#f6f8fa' }}>
          <th style={{ padding: '0.7rem', border: '1px solid #ece6fa' }}>Feature</th>
          <th style={{ padding: '0.7rem', border: '1px solid #ece6fa' }}>Available</th>
        </tr>
      </thead>
      <tbody>
        <tr><td style={{ padding: '0.7rem', border: '1px solid #ece6fa' }}>Model Routing</td><td style={{ padding: '0.7rem', border: '1px solid #ece6fa' }}>✔️</td></tr>
        <tr><td style={{ padding: '0.7rem', border: '1px solid #ece6fa' }}>Provider Routing</td><td style={{ padding: '0.7rem', border: '1px solid #ece6fa' }}>✔️</td></tr>
        <tr><td style={{ padding: '0.7rem', border: '1px solid #ece6fa' }}>Prompt Caching</td><td style={{ padding: '0.7rem', border: '1px solid #ece6fa' }}>✔️</td></tr>
        <tr><td style={{ padding: '0.7rem', border: '1px solid #ece6fa' }}>Prompt Suggestion</td><td style={{ padding: '0.7rem', border: '1px solid #ece6fa' }}>✔️</td></tr>
        <tr><td style={{ padding: '0.7rem', border: '1px solid #ece6fa' }}>Web Search</td><td style={{ padding: '0.7rem', border: '1px solid #ece6fa' }}>✔️</td></tr>
        <tr><td style={{ padding: '0.7rem', border: '1px solid #ece6fa' }}>Tool Calling</td><td style={{ padding: '0.7rem', border: '1px solid #ece6fa' }}>✔️</td></tr>
        <tr><td style={{ padding: '0.7rem', border: '1px solid #ece6fa' }}>File Support</td><td style={{ padding: '0.7rem', border: '1px solid #ece6fa' }}>✔️</td></tr>
        <tr><td style={{ padding: '0.7rem', border: '1px solid #ece6fa' }}>Zero Completion Insurance</td><td style={{ padding: '0.7rem', border: '1px solid #ece6fa' }}>✔️</td></tr>
      </tbody>
    </table>
  </div>
);

export default Features; 