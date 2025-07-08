import React from 'react';

const Authentication: React.FC = () => (
  <div style={{ maxWidth: 900, margin: '0 auto', color: '#222', fontFamily: 'inherit', padding: '2rem 0' }}>
    <h1 style={{ color: '#2563eb', fontWeight: 800, fontSize: '2.2rem', marginBottom: 18 }}>Authentication</h1>
    <p style={{ fontSize: '1.13rem', marginBottom: 28 }}>
      All Guidera API requests require authentication using your API key. Pass your key in the Authorization header for secure access.
    </p>
    <ul style={{ margin: '0 0 24px 20px', color: '#222', fontSize: '1.05rem' }}>
      <li><strong>API Key:</strong> Required for all requests.</li>
      <li><strong>Header:</strong> Use <code>Authorization: Bearer YOUR_API_KEY</code> in your requests.</li>
      <li><strong>Key Management:</strong> Rotate and revoke keys in your dashboard as needed.</li>
    </ul>
  </div>
);

export default Authentication; 