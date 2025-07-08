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

const Quickstart: React.FC = () => {
  return (
    <div style={{
      display: 'flex',
      flexDirection: 'row',
      maxWidth: 1200,
      margin: '0 auto',
      padding: '2.5rem 1rem 2.5rem 1rem',
      background: 'transparent',
      minHeight: '100vh',
      boxSizing: 'border-box',
      width: '100%',
      gap: 32,
    }}>
      {/* Main Content */}
      <div style={{ flex: 3, minWidth: 0, wordBreak: 'break-word', paddingRight: 0 }}>
        <h1 style={{ color: '#2563eb', fontWeight: 800, fontSize: '2.2rem', marginBottom: 18 }}>Quickstart</h1>
        <p style={{ fontSize: '1.13rem', marginBottom: 28, color: '#222' }}>
          Welcome! This is a placeholder for the Quickstart documentation. Replace this with your own getting started instructions.
        </p>
        <h2 id="install" style={{ color: '#2563eb', fontWeight: 700, fontSize: '1.18rem', marginTop: 36, marginBottom: 10 }}>Install</h2>
        {codeBlock('npm install guidera')}
        <h2 id="api-key" style={{ color: '#2563eb', fontWeight: 700, fontSize: '1.18rem', marginTop: 36, marginBottom: 10 }}>Get an API Key</h2>
        <p style={{ marginBottom: 18 }}>Sign up and create an API key from your dashboard.</p>
        <h2 id="usage" style={{ color: '#2563eb', fontWeight: 700, fontSize: '1.18rem', marginTop: 36, marginBottom: 10 }}>Usage Example</h2>
        {codeBlock(`import Guidera from 'guidera';

const client = new Guidera({ apiKey: 'YOUR_API_KEY' });
const response = await client.chat({
  model: 'guidera-model',
  messages: [
    { role: 'user', content: 'Hello!' }
  ]
});
console.log(response.choices[0].message.content);`)}
        <h2 id="next-steps" style={{ color: '#2563eb', fontWeight: 700, fontSize: '1.18rem', marginTop: 36, marginBottom: 10 }}>Next Steps</h2>
        <ul style={{ margin: '0 0 24px 20px', color: '#222', fontSize: '1.05rem' }}>
          <li>Read the <a href="/docs/api-reference" style={{ color: '#2563eb' }}>API Reference</a></li>
          <li>See <a href="/docs/models" style={{ color: '#2563eb' }}>Supported Models</a></li>
          <li>Check <a href="/docs/faq" style={{ color: '#2563eb' }}>FAQ</a></li>
        </ul>
      </div>
      {/* Right Sidebar (On this page) */}
      <div style={{
        flex: 1,
        minWidth: 220,
        maxWidth: 260,
        paddingLeft: 24,
        borderLeft: '1px solid #ece6fa',
        fontSize: '0.98rem',
        color: '#222',
        position: 'sticky',
        top: 40,
        alignSelf: 'flex-start',
        height: 'fit-content',
        background: 'transparent',
        display: 'block',
      }}>
        <div style={{ fontWeight: 700, marginBottom: 12, color: '#2563eb' }}>On this page</div>
        <ul style={{ listStyle: 'none', padding: 0, margin: 0 }}>
          <li><a href="#install" style={{ color: '#2563eb', textDecoration: 'none' }}>Install</a></li>
          <li><a href="#api-key" style={{ color: '#2563eb', textDecoration: 'none' }}>Get an API Key</a></li>
          <li><a href="#usage" style={{ color: '#2563eb', textDecoration: 'none' }}>Usage Example</a></li>
          <li><a href="#next-steps" style={{ color: '#2563eb', textDecoration: 'none' }}>Next Steps</a></li>
        </ul>
      </div>
    </div>
  );
};

export default Quickstart; 