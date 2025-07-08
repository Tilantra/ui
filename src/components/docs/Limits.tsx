import React from 'react';

const Limits: React.FC = () => (
  <div style={{ maxWidth: 900, margin: '0 auto', color: '#222', fontFamily: 'inherit', padding: '2rem 0' }}>
    <h1 style={{ color: '#2563eb', fontWeight: 800, fontSize: '2.2rem', marginBottom: 18 }}>Limits</h1>
    <p style={{ fontSize: '1.13rem', marginBottom: 28 }}>
      Guidera enforces limits on requests, tokens, and usage to ensure fair access and system stability. Review your dashboard for current limits and quotas.
    </p>
    <ul style={{ margin: '0 0 24px 20px', color: '#222', fontSize: '1.05rem' }}>
      <li><strong>Request Limits:</strong> Maximum requests per minute and per day.</li>
      <li><strong>Token Limits:</strong> Maximum tokens per request and per model.</li>
      <li><strong>Quota Management:</strong> Monitor and manage your usage in the dashboard.</li>
    </ul>
  </div>
);

export default Limits; 