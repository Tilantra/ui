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

const Models: React.FC = () => (
  <div style={{ maxWidth: 900, margin: '0 auto', color: '#222', fontFamily: 'inherit', padding: '2rem 0' }}>
    <h1 style={{ color: '#2563eb', fontWeight: 800, fontSize: '2.2rem', marginBottom: 18 }}>Supported Models & Pricing</h1>
    <p style={{ fontSize: '1.13rem', marginBottom: 28 }}>
      Guidera supports 40+ models from leading providers. Choose the best for your use case—compare context, cost, and features below.
    </p>
    <table style={{ width: '100%', borderCollapse: 'collapse', margin: '1.5em 0', fontSize: '1.05rem' }}>
      <thead>
        <tr style={{ background: '#f6f8fa' }}>
          <th style={{ padding: '0.7rem', border: '1px solid #ece6fa' }}>Model</th>
          <th style={{ padding: '0.7rem', border: '1px solid #ece6fa' }}>Context</th>
          <th style={{ padding: '0.7rem', border: '1px solid #ece6fa' }}>Input / 1K</th>
          <th style={{ padding: '0.7rem', border: '1px solid #ece6fa' }}>Output / 1K</th>
          <th style={{ padding: '0.7rem', border: '1px solid #ece6fa' }}>Provider</th>
          <th style={{ padding: '0.7rem', border: '1px solid #ece6fa' }}>Features</th>
        </tr>
      </thead>
      <tbody>
        <tr>
          <td style={{ padding: '0.7rem', border: '1px solid #ece6fa' }}>guidera-llm</td>
          <td style={{ padding: '0.7rem', border: '1px solid #ece6fa' }}>128K</td>
          <td style={{ padding: '0.7rem', border: '1px solid #ece6fa' }}>$0.0004</td>
          <td style={{ padding: '0.7rem', border: '1px solid #ece6fa' }}>$0.0008</td>
          <td style={{ padding: '0.7rem', border: '1px solid #ece6fa' }}>Guidera</td>
          <td style={{ padding: '0.7rem', border: '1px solid #ece6fa' }}>Routing, Compliance, Cost Guardrails</td>
        </tr>
        <tr>
          <td style={{ padding: '0.7rem', border: '1px solid #ece6fa' }}>gpt-4o</td>
          <td style={{ padding: '0.7rem', border: '1px solid #ece6fa' }}>128K</td>
          <td style={{ padding: '0.7rem', border: '1px solid #ece6fa' }}>$0.005</td>
          <td style={{ padding: '0.7rem', border: '1px solid #ece6fa' }}>$0.015</td>
          <td style={{ padding: '0.7rem', border: '1px solid #ece6fa' }}>OpenAI</td>
          <td style={{ padding: '0.7rem', border: '1px solid #ece6fa' }}>Multimodal, Fast</td>
        </tr>
        <tr>
          <td style={{ padding: '0.7rem', border: '1px solid #ece6fa' }}>claude-3-opus</td>
          <td style={{ padding: '0.7rem', border: '1px solid #ece6fa' }}>200K</td>
          <td style={{ padding: '0.7rem', border: '1px solid #ece6fa' }}>$0.015</td>
          <td style={{ padding: '0.7rem', border: '1px solid #ece6fa' }}>$0.075</td>
          <td style={{ padding: '0.7rem', border: '1px solid #ece6fa' }}>Anthropic</td>
          <td style={{ padding: '0.7rem', border: '1px solid #ece6fa' }}>Long Context</td>
        </tr>
      </tbody>
    </table>
    <h2 style={{ color: '#2563eb', fontWeight: 700, fontSize: '1.18rem', marginTop: 36, marginBottom: 10 }}>How to Select a Model</h2>
    {codeBlock(`const response = await client.chat({
  model: 'gpt-4o',
  messages: [
    { role: 'user', content: 'Hello!' }
  ]
});`)}
    <h2 style={{ color: '#2563eb', fontWeight: 700, fontSize: '1.18rem', marginTop: 36, marginBottom: 10 }}>Stats</h2>
    <ul style={{ margin: '0 0 24px 20px', color: '#222', fontSize: '1.05rem' }}>
      <li>40+ models supported</li>
      <li>Up to 200K context length</li>
      <li>Lowest cost: $0.0004 / 1K tokens</li>
      <li>Multimodal, compliance, and routing features</li>
    </ul>
  </div>
);

export default Models; 