import React from 'react';

const PromptCaching: React.FC = () => (
  <div style={{ maxWidth: 900, margin: '0 auto', color: '#222', fontFamily: 'inherit', padding: '2rem 0' }}>
    <h1 style={{ color: '#2563eb', fontWeight: 800, fontSize: '2.2rem', marginBottom: 18 }}>Prompt Caching</h1>
    <p style={{ fontSize: '1.13rem', marginBottom: 28 }}>
      Guidera reduces latency and cost for frequent prompts by caching responses. Cached prompts are served instantly, improving performance and reducing API usage.
    </p>
    <ul style={{ margin: '0 0 24px 20px', color: '#222', fontSize: '1.05rem' }}>
      <li><strong>Performance:</strong> Frequently used prompts are cached for instant responses.</li>
      <li><strong>Cost Savings:</strong> Reduce API calls and associated costs with prompt caching.</li>
      <li><strong>Cache Management:</strong> Control cache duration and invalidation as needed.</li>
    </ul>
  </div>
);

export default PromptCaching; 