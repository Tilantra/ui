import React from 'react';
import CodeBlock from './CodeBlock';

const Authentication: React.FC = () => (
  <div style={{ maxWidth: 900, margin: '0 auto', color: '#222', fontFamily: 'inherit', padding: '2rem 0' }}>
    <h1 style={{ color: '#2563eb', fontWeight: 800, fontSize: '2.2rem', marginBottom: 18 }}>Authentication</h1>
    <p style={{ fontSize: '1.13rem', marginBottom: 28 }}>
      Guidera uses secure, token-based authentication for all API requests. You must register and log in to receive a JWT token, which must be included in the <b>Authorization</b> header for every request.
    </p>

    <h2 style={{ color: '#7c3aed', fontWeight: 700, fontSize: '1.18rem', marginTop: 36, marginBottom: 10 }}>How Authentication Works</h2>
    <ul style={{ margin: '0 0 24px 20px', color: '#222', fontSize: '1.05rem' }}>
      <li><b>Register & Log In:</b> Create an account and log in to receive your JWT token.</li>
      <li><b>Token Usage:</b> Include your token in the <code>Authorization: Bearer &lt;token&gt;</code> header for all API requests.</li>
      <li><b>Token Expiry:</b> Tokens expire after 2 hours by default. Log in again to refresh.</li>
      <li><b>Key Management:</b> You can rotate or revoke tokens via the API.</li>
    </ul>

    <h2 style={{ color: '#7c3aed', fontWeight: 700, fontSize: '1.18rem', marginTop: 36, marginBottom: 10 }}>Example: Log In and Use Your Token</h2>
    <p style={{ fontSize: '1.05rem', marginBottom: 10 }}>
      Log in to receive your token:
    </p>
    <CodeBlock code={`curl -X POST https://api.guidera.com/login \
  -H "Content-Type: application/json" \
  -d '{"email": "your@email.com", "password": "your_password"}'`} language="bash" />
    <p style={{ fontSize: '1.05rem', marginBottom: 10 }}>
      Use your token in the Authorization header for all API requests:
    </p>
    <CodeBlock code={`curl -X POST https://api.guidera.com/generate \
  -H "Authorization: Bearer YOUR_JWT_TOKEN" \
  -H "Content-Type: application/json" \
  -d '{"prompt": "Hello!", "prefs": {}}'`} language="bash" />

    <h2 style={{ color: '#7c3aed', fontWeight: 700, fontSize: '1.18rem', marginTop: 36, marginBottom: 10 }}>Python SDK</h2>
    <p style={{ fontSize: '1.05rem', marginBottom: 20 }}>
      If you use the Guidera Python SDK, authentication is handled automatically. The SDK will prompt for credentials or use your environment configuration as needed.
    </p>
  </div>
);

export default Authentication; 