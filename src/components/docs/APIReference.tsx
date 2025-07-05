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

const APIReference: React.FC = () => (
  <div style={{ maxWidth: 900, margin: '0 auto', color: '#222', fontFamily: 'inherit', padding: '2rem 0' }}>
    <h1 style={{ color: '#2563eb', fontWeight: 800, fontSize: '2.2rem', marginBottom: 18 }}>API Reference</h1>
    <p style={{ fontSize: '1.13rem', marginBottom: 28 }}>
      The OpenRouter API provides endpoints for chat, completions, and more. All requests require your API key in the Authorization header.
    </p>
    <h2 style={{ color: '#2563eb', fontWeight: 700, fontSize: '1.18rem', marginTop: 36, marginBottom: 10 }}>Endpoints</h2>
    <table style={{ width: '100%', borderCollapse: 'collapse', margin: '1.5em 0', fontSize: '1.05rem' }}>
      <thead>
        <tr style={{ background: '#f6f8fa' }}>
          <th style={{ padding: '0.7rem', border: '1px solid #ece6fa' }}>Endpoint</th>
          <th style={{ padding: '0.7rem', border: '1px solid #ece6fa' }}>Method</th>
          <th style={{ padding: '0.7rem', border: '1px solid #ece6fa' }}>Description</th>
        </tr>
      </thead>
      <tbody>
        <tr>
          <td style={{ padding: '0.7rem', border: '1px solid #ece6fa' }}>/v1/chat/completions</td>
          <td style={{ padding: '0.7rem', border: '1px solid #ece6fa' }}>POST</td>
          <td style={{ padding: '0.7rem', border: '1px solid #ece6fa' }}>Generate a chat completion with a model.</td>
        </tr>
        <tr>
          <td style={{ padding: '0.7rem', border: '1px solid #ece6fa' }}>/v1/completions</td>
          <td style={{ padding: '0.7rem', border: '1px solid #ece6fa' }}>POST</td>
          <td style={{ padding: '0.7rem', border: '1px solid #ece6fa' }}>Generate a text completion.</td>
        </tr>
        <tr>
          <td style={{ padding: '0.7rem', border: '1px solid #ece6fa' }}>/v1/models</td>
          <td style={{ padding: '0.7rem', border: '1px solid #ece6fa' }}>GET</td>
          <td style={{ padding: '0.7rem', border: '1px solid #ece6fa' }}>List available models.</td>
        </tr>
      </tbody>
    </table>
    <h2 style={{ color: '#2563eb', fontWeight: 700, fontSize: '1.18rem', marginTop: 36, marginBottom: 10 }}>Example: Chat Completion</h2>
    {codeBlock(`curl -X POST https://api.openrouter.com/v1/chat/completions \
  -H "Authorization: Bearer YOUR_API_KEY" \
  -d '{"model": "openrouter-llm", "messages": [{"role": "user", "content": "Hello!"}]}'`)}
    <h2 style={{ color: '#2563eb', fontWeight: 700, fontSize: '1.18rem', marginTop: 36, marginBottom: 10 }}>Parameters</h2>
    <table style={{ width: '100%', borderCollapse: 'collapse', margin: '1.5em 0', fontSize: '1.05rem' }}>
      <thead>
        <tr style={{ background: '#f6f8fa' }}>
          <th style={{ padding: '0.7rem', border: '1px solid #ece6fa' }}>Parameter</th>
          <th style={{ padding: '0.7rem', border: '1px solid #ece6fa' }}>Type</th>
          <th style={{ padding: '0.7rem', border: '1px solid #ece6fa' }}>Description</th>
        </tr>
      </thead>
      <tbody>
        <tr>
          <td style={{ padding: '0.7rem', border: '1px solid #ece6fa' }}>model</td>
          <td style={{ padding: '0.7rem', border: '1px solid #ece6fa' }}>string</td>
          <td style={{ padding: '0.7rem', border: '1px solid #ece6fa' }}>The model to use for completion.</td>
        </tr>
        <tr>
          <td style={{ padding: '0.7rem', border: '1px solid #ece6fa' }}>messages</td>
          <td style={{ padding: '0.7rem', border: '1px solid #ece6fa' }}>array</td>
          <td style={{ padding: '0.7rem', border: '1px solid #ece6fa' }}>Conversation history for chat completions.</td>
        </tr>
        <tr>
          <td style={{ padding: '0.7rem', border: '1px solid #ece6fa' }}>api_key</td>
          <td style={{ padding: '0.7rem', border: '1px solid #ece6fa' }}>string</td>
          <td style={{ padding: '0.7rem', border: '1px solid #ece6fa' }}>Your API key for authentication.</td>
        </tr>
      </tbody>
    </table>
  </div>
);

export default APIReference; 