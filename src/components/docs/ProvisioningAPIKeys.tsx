import React from 'react';

const ProvisioningAPIKeys: React.FC = () => (
  <div style={{ maxWidth: 900, margin: '0 auto', color: '#222', fontFamily: 'inherit', padding: '2rem 0' }}>
    <h1 style={{ color: '#2563eb', fontWeight: 800, fontSize: '2.2rem', marginBottom: 18 }}>Provisioning API Keys</h1>
    <p style={{ fontSize: '1.13rem', marginBottom: 28 }}>
    Guidera allows admins to generate and manage API keys for teams and projects. Control access, permissions, and key rotation from your dashboard.
    </p>
    <ul style={{ margin: '0 0 24px 20px', color: '#222', fontSize: '1.05rem' }}>
      <li><strong>Key Management:</strong> Create, rotate, and revoke API keys as needed.</li>
      <li><strong>Team Access:</strong> Assign keys to specific teams or projects for granular control.</li>
      <li><strong>Security:</strong> Enforce best practices for API key usage and storage.</li>
    </ul>
  </div>
);

export default ProvisioningAPIKeys; 