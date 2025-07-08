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

const Community: React.FC = () => (
  <div style={{ maxWidth: 900, margin: '0 auto', color: '#222', fontFamily: 'inherit', padding: '2rem 0' }}>
    <h1 style={{ color: '#2563eb', fontWeight: 800, fontSize: '2.2rem', marginBottom: 18 }}>Community</h1>
    <p style={{ fontSize: '1.13rem', marginBottom: 28 }}>
      Join the Guidera community to connect, learn, and contribute. Here are some ways to get involved:
    </p>
    <table style={{ width: '100%', borderCollapse: 'collapse', margin: '1.5em 0', fontSize: '1.05rem' }}>
      <thead>
        <tr style={{ background: '#f6f8fa' }}>
          <th style={{ padding: '0.7rem', border: '1px solid #ece6fa' }}>Resource</th>
          <th style={{ padding: '0.7rem', border: '1px solid #ece6fa' }}>Link</th>
        </tr>
      </thead>
      <tbody>
        <tr>
          <td style={{ padding: '0.7rem', border: '1px solid #ece6fa' }}>Discord</td>
          <td style={{ padding: '0.7rem', border: '1px solid #ece6fa' }}><a href="#" style={{ color: '#2563eb' }}>Join Discord</a></td>
        </tr>
        <tr>
          <td style={{ padding: '0.7rem', border: '1px solid #ece6fa' }}>Feedback Form</td>
          <td style={{ padding: '0.7rem', border: '1px solid #ece6fa' }}><a href="#" style={{ color: '#2563eb' }}>Submit Feedback</a></td>
        </tr>
        <tr>
          <td style={{ padding: '0.7rem', border: '1px solid #ece6fa' }}>Email Support</td>
          <td style={{ padding: '0.7rem', border: '1px solid #ece6fa' }}><a href="mailto:support@guidera.com" style={{ color: '#2563eb' }}>support@guidera.com</a></td>
        </tr>
      </tbody>
    </table>
    <h2 style={{ color: '#2563eb', fontWeight: 700, fontSize: '1.18rem', marginTop: 36, marginBottom: 10 }}>Join Discord Example</h2>
    {codeBlock(`window.open('https://discord.gg/guidera', '_blank');`)}
  </div>
);

export default Community; 