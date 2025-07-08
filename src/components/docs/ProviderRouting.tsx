import React from 'react';

const ProviderRouting: React.FC = () => (
  <div style={{ maxWidth: 900, margin: '0 auto', color: '#222', fontFamily: 'inherit', padding: '2rem 0' }}>
    <h1 style={{ color: '#2563eb', fontWeight: 800, fontSize: '2.2rem', marginBottom: 18 }}>Provider Routing</h1>
    <p style={{ fontSize: '1.13rem', marginBottom: 28 }}>
      Guidera allows you to restrict or choose providers for your prompts, ensuring compliance, cost control, and access to the best models for your needs.
    </p>
    <ul style={{ margin: '0 0 24px 20px', color: '#222', fontSize: '1.05rem' }}>
      <li><strong>Provider Selection:</strong> Choose from multiple providers for each request.</li>
      <li><strong>Compliance:</strong> Ensure requests are routed to compliant providers.</li>
      <li><strong>Cost Control:</strong> Optimize provider selection for cost and performance.</li>
    </ul>
  </div>
);

export default ProviderRouting; 