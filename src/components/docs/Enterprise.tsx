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

const Enterprise: React.FC = () => (
  <div style={{ maxWidth: 900, margin: '0 auto', color: '#222', fontFamily: 'inherit', padding: '2rem 0' }}>
    <h1 style={{ color: '#2563eb', fontWeight: 800, fontSize: '2.2rem', marginBottom: 18 }}>Enterprise Features</h1>
    <p style={{ fontSize: '1.13rem', marginBottom: 28 }}>
    Guidera provides advanced features for enterprise customers, including key management, compliance, and analytics.
    </p>
    <table style={{ width: '100%', borderCollapse: 'collapse', margin: '1.5em 0', fontSize: '1.05rem' }}>
      <thead>
        <tr style={{ background: '#f6f8fa' }}>
          <th style={{ padding: '0.7rem', border: '1px solid #ece6fa' }}>Feature</th>
          <th style={{ padding: '0.7rem', border: '1px solid #ece6fa' }}>Description</th>
        </tr>
      </thead>
      <tbody>
        <tr>
          <td style={{ padding: '0.7rem', border: '1px solid #ece6fa' }}>SDK Key Management</td>
          <td style={{ padding: '0.7rem', border: '1px solid #ece6fa' }}>Unique keys for secure API access, with rotation and revocation.</td>
        </tr>
        <tr>
          <td style={{ padding: '0.7rem', border: '1px solid #ece6fa' }}>Compliance Logging</td>
          <td style={{ padding: '0.7rem', border: '1px solid #ece6fa' }}>All requests and checks are logged for audit and regulatory purposes.</td>
        </tr>
        <tr>
          <td style={{ padding: '0.7rem', border: '1px solid #ece6fa' }}>Usage Analytics</td>
          <td style={{ padding: '0.7rem', border: '1px solid #ece6fa' }}>Real-time dashboards for usage, cost, and compliance status.</td>
        </tr>
        <tr>
          <td style={{ padding: '0.7rem', border: '1px solid #ece6fa' }}>API Key Provisioning</td>
          <td style={{ padding: '0.7rem', border: '1px solid #ece6fa' }}>Admins can generate and manage keys for teams/projects.</td>
        </tr>
        <tr>
          <td style={{ padding: '0.7rem', border: '1px solid #ece6fa' }}>Security Best Practices</td>
          <td style={{ padding: '0.7rem', border: '1px solid #ece6fa' }}>Data encrypted in transit/at rest, role-based access, and more.</td>
        </tr>
      </tbody>
    </table>
    <h2 style={{ color: '#2563eb', fontWeight: 700, fontSize: '1.18rem', marginTop: 36, marginBottom: 10 }}>API Key Management Example</h2>
    {codeBlock(`const key = await admin.createApiKey({
  name: 'Team Alpha',
  permissions: ['read', 'write'],
});`)}
  </div>
);

export default Enterprise; 