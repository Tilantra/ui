import React from 'react';

const Overview: React.FC = () => (
  <div style={{ maxWidth: 900, margin: '0 auto', color: '#222', fontFamily: 'inherit', padding: '2rem 0' }}>
    <h1 style={{ color: '#2563eb', fontWeight: 800, fontSize: '2.2rem', marginBottom: 18 }}>Overview</h1>
    <p style={{ fontSize: '1.13rem', marginBottom: 28 }}>
      Guidera is a unified API for accessing the best large language models from multiple providers. Route requests, optimize costs, and ensure compliance with a single integration.
    </p>
    <ul style={{ margin: '0 0 24px 20px', color: '#222', fontSize: '1.05rem' }}>
      <li><strong>Unified API:</strong> Access models from OpenAI, Anthropic, and more.</li>
      <li><strong>Routing:</strong> Automatically select the best model and provider for your needs.</li>
      <li><strong>Compliance:</strong> Built-in logging, PII redaction, and audit trails.</li>
      <li><strong>Cost Optimization:</strong> Minimize spend while maximizing performance.</li>
    </ul>
  </div>
);

export default Overview; 