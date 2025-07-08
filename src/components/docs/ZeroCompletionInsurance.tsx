import React from 'react';

const ZeroCompletionInsurance: React.FC = () => (
  <div style={{ maxWidth: 900, margin: '0 auto', color: '#222', fontFamily: 'inherit', padding: '2rem 0' }}>
    <h1 style={{ color: '#2563eb', fontWeight: 800, fontSize: '2.2rem', marginBottom: 18 }}>Zero Completion Insurance</h1>
    <p style={{ fontSize: '1.13rem', marginBottom: 28 }}>
      With Zero Completion Insurance, you only pay for successful completions. Failed or incomplete requests are not billed, ensuring cost efficiency and reliability.
    </p>
    <ul style={{ margin: '0 0 24px 20px', color: '#222', fontSize: '1.05rem' }}>
      <li><strong>Cost Efficiency:</strong> Only pay for successful completions.</li>
      <li><strong>Reliability:</strong> Protects against failed or incomplete API calls.</li>
      <li><strong>Automatic Application:</strong> No extra configuration needed—applies to all requests.</li>
    </ul>
  </div>
);

export default ZeroCompletionInsurance; 