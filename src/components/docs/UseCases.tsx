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

const UseCases: React.FC = () => (
  <div style={{ maxWidth: 900, margin: '0 auto', color: '#222', fontFamily: 'inherit', padding: '2rem 0' }}>
    <h1 style={{ color: '#2563eb', fontWeight: 800, fontSize: '2.2rem', marginBottom: 18 }}>Use Cases</h1>
    <p style={{ fontSize: '1.13rem', marginBottom: 28 }}>
      Guidera powers a wide range of applications, from chatbots to enterprise automation. Here are some common use cases:
    </p>
    <table style={{ width: '100%', borderCollapse: 'collapse', margin: '1.5em 0', fontSize: '1.05rem' }}>
      <thead>
        <tr style={{ background: '#f6f8fa' }}>
          <th style={{ padding: '0.7rem', border: '1px solid #ece6fa' }}>Use Case</th>
          <th style={{ padding: '0.7rem', border: '1px solid #ece6fa' }}>Description</th>
        </tr>
      </thead>
      <tbody>
        <tr>
          <td style={{ padding: '0.7rem', border: '1px solid #ece6fa' }}>BYOK (Bring Your Own Key)</td>
          <td style={{ padding: '0.7rem', border: '1px solid #ece6fa' }}>Use your own API keys for supported providers, with full routing and compliance.</td>
        </tr>
        <tr>
          <td style={{ padding: '0.7rem', border: '1px solid #ece6fa' }}>Crypto API</td>
          <td style={{ padding: '0.7rem', border: '1px solid #ece6fa' }}>Integrate with on-chain/off-chain data and compliance.</td>
        </tr>
        <tr>
          <td style={{ padding: '0.7rem', border: '1px solid #ece6fa' }}>OAuth PKCE</td>
          <td style={{ padding: '0.7rem', border: '1px solid #ece6fa' }}>Secure OAuth flows for authentication and authorization.</td>
        </tr>
        <tr>
          <td style={{ padding: '0.7rem', border: '1px solid #ece6fa' }}>MCP Servers</td>
          <td style={{ padding: '0.7rem', border: '1px solid #ece6fa' }}>Deploy and manage your own Model Control Plane servers.</td>
        </tr>
        <tr>
          <td style={{ padding: '0.7rem', border: '1px solid #ece6fa' }}>Reasoning Tokens</td>
          <td style={{ padding: '0.7rem', border: '1px solid #ece6fa' }}>Track and optimize token usage for complex tasks.</td>
        </tr>
        <tr>
          <td style={{ padding: '0.7rem', border: '1px solid #ece6fa' }}>Usage Accounting</td>
          <td style={{ padding: '0.7rem', border: '1px solid #ece6fa' }}>Detailed accounting of usage and costs by user, team, or project.</td>
        </tr>
      </tbody>
    </table>
    <h2 style={{ color: '#2563eb', fontWeight: 700, fontSize: '1.18rem', marginTop: 36, marginBottom: 10 }}>Example: Chatbot Integration</h2>
    {codeBlock(`const response = await client.chat({
  model: 'guidera-llm',
  messages: [
    { role: 'user', content: 'How can I use Guidera in my app?' }
  ]
});`)}
  </div>
);

export default UseCases; 