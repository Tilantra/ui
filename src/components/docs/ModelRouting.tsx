import React from 'react';

const ModelRouting: React.FC = () => (
  <div style={{ maxWidth: 900, margin: '0 auto', color: '#222', fontFamily: 'inherit', padding: '2rem 0' }}>
    <h1 style={{ color: '#2563eb', fontWeight: 800, fontSize: '2.2rem', marginBottom: 18 }}>Model Routing</h1>
    <p style={{ fontSize: '1.13rem', marginBottom: 28 }}>
      Guidera automatically selects the best model for your prompt based on cost, performance, and context requirements. You can also specify a preferred model or allow Guidera to optimize for you.
    </p>
    <ul style={{ margin: '0 0 24px 20px', color: '#222', fontSize: '1.05rem' }}>
      <li><strong>Auto-Selection:</strong> Routes requests to the optimal model for your use case.</li>
      <li><strong>Custom Preferences:</strong> Specify a preferred model or let Guidera decide.</li>
      <li><strong>Cost Optimization:</strong> Always seeks the lowest-cost, highest-value model for each prompt.</li>
    </ul>
  </div>
);

export default ModelRouting; 