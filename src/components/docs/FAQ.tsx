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

const FAQ: React.FC = () => (
  <div style={{ maxWidth: 900, margin: '0 auto', color: '#222', fontFamily: 'inherit', padding: '2rem 0' }}>
    <h1 style={{ color: '#2563eb', fontWeight: 800, fontSize: '2.2rem', marginBottom: 18 }}>Frequently Asked Questions</h1>
    <h2 style={{ color: '#2563eb', fontWeight: 700, fontSize: '1.18rem', marginTop: 36, marginBottom: 10 }}>How do I install the SDK?</h2>
    <p>Install using npm:</p>
    {codeBlock('npm install openrouter')}
    <h2 style={{ color: '#2563eb', fontWeight: 700, fontSize: '1.18rem', marginTop: 36, marginBottom: 10 }}>How do I authenticate?</h2>
    <p>Use your API key in the client initialization:</p>
    {codeBlock(`import OpenRouter from 'openrouter';
const client = new OpenRouter({ apiKey: 'YOUR_API_KEY' });`)}
    <h2 style={{ color: '#2563eb', fontWeight: 700, fontSize: '1.18rem', marginTop: 36, marginBottom: 10 }}>Common Questions</h2>
    <table style={{ width: '100%', borderCollapse: 'collapse', margin: '1.5em 0', fontSize: '1.05rem' }}>
      <thead>
        <tr style={{ background: '#f6f8fa' }}>
          <th style={{ padding: '0.7rem', border: '1px solid #ece6fa', textAlign: 'left' }}>Question</th>
          <th style={{ padding: '0.7rem', border: '1px solid #ece6fa', textAlign: 'left' }}>Answer</th>
        </tr>
      </thead>
      <tbody>
        <tr>
          <td style={{ padding: '0.7rem', border: '1px solid #ece6fa' }}>Is there a free tier?</td>
          <td style={{ padding: '0.7rem', border: '1px solid #ece6fa' }}>Yes, you can start for free with limited usage.</td>
        </tr>
        <tr>
          <td style={{ padding: '0.7rem', border: '1px solid #ece6fa' }}>How do I reset my API key?</td>
          <td style={{ padding: '0.7rem', border: '1px solid #ece6fa' }}>Go to your dashboard, select your key, and click "Regenerate".</td>
        </tr>
        <tr>
          <td style={{ padding: '0.7rem', border: '1px solid #ece6fa' }}>Where can I get support?</td>
          <td style={{ padding: '0.7rem', border: '1px solid #ece6fa' }}>Email support@openrouter.com or join our Discord.</td>
        </tr>
        <tr>
          <td style={{ padding: '0.7rem', border: '1px solid #ece6fa' }}>Can I use this in production?</td>
          <td style={{ padding: '0.7rem', border: '1px solid #ece6fa' }}>Yes, OpenRouter is production-ready and used by many teams.</td>
        </tr>
      </tbody>
    </table>
    <h2 style={{ color: '#2563eb', fontWeight: 700, fontSize: '1.18rem', marginTop: 36, marginBottom: 10 }}>More Help</h2>
    <p>For more details, see the <a href="/docs/api-reference" style={{ color: '#2563eb' }}>API Reference</a> or <a href="/docs/community" style={{ color: '#2563eb' }}>Community</a> page.</p>
  </div>
);

export default FAQ; 