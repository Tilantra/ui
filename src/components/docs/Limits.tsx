import React from 'react';
import CodeBlock from './CodeBlock';

const Limits: React.FC = () => (
  <div style={{ maxWidth: 900, margin: '0 auto', color: '#222', fontFamily: 'inherit', padding: '2rem 0' }}>
    <h1 style={{ color: '#2563eb', fontWeight: 800, fontSize: '2.2rem', marginBottom: 18 }}>Limits</h1>
    <p style={{ fontSize: '1.13rem', marginBottom: 28 }}>
      Guidera enforces several limits to ensure fair access, system stability, and optimal performance for all users. Below you'll find details on request rates, token usage, caching, and quotas.
    </p>

    <h2 style={{ color: '#7c3aed', fontWeight: 700, fontSize: '1.18rem', marginTop: 36, marginBottom: 10 }}>Quick Reference</h2>
    <table style={{ width: '100%', borderCollapse: 'collapse', margin: '1.5em 0', fontSize: '1.05rem' }}>
      <thead>
        <tr style={{ background: '#f6f8fa' }}>
          <th style={{ padding: '0.7rem', border: '1px solid #ece6fa' }}>Limit Type</th>
          <th style={{ padding: '0.7rem', border: '1px solid #ece6fa' }}>Value</th>
          <th style={{ padding: '0.7rem', border: '1px solid #ece6fa' }}>Notes</th>
        </tr>
      </thead>
      <tbody>
        <tr>
          <td style={{ padding: '0.7rem', border: '1px solid #ece6fa' }}>Request Rate</td>
          <td style={{ padding: '0.7rem', border: '1px solid #ece6fa' }}>5 requests/min/user</td>
          <td style={{ padding: '0.7rem', border: '1px solid #ece6fa' }}>Strictly enforced. Exceeding this returns HTTP 429.</td>
        </tr>
        <tr>
          <td style={{ padding: '0.7rem', border: '1px solid #ece6fa' }}>Max Output Tokens</td>
          <td style={{ padding: '0.7rem', border: '1px solid #ece6fa' }}>1024 (most models)</td>
          <td style={{ padding: '0.7rem', border: '1px solid #ece6fa' }}>See <a href="/docs/models" style={{ color: '#2563eb', textDecoration: 'underline', fontWeight: 500 }}>Models</a> for model-specific limits.</td>
        </tr>
        <tr>
          <td style={{ padding: '0.7rem', border: '1px solid #ece6fa' }}>Caching Threshold</td>
          <td style={{ padding: '0.7rem', border: '1px solid #ece6fa' }}>752 tokens</td>
          <td style={{ padding: '0.7rem', border: '1px solid #ece6fa' }}>Responses must have at least 752 tokens to be cached.</td>
        </tr>
        <tr>
          <td style={{ padding: '0.7rem', border: '1px solid #ece6fa' }}>Non-Cacheable Tasks</td>
          <td style={{ padding: '0.7rem', border: '1px solid #ece6fa' }}>data_analysis, paraphrasing</td>
          <td style={{ padding: '0.7rem', border: '1px solid #ece6fa' }}>These tasks are never cached for accuracy and privacy.</td>
        </tr>
        <tr>
          <td style={{ padding: '0.7rem', border: '1px solid #ece6fa' }}>Quotas</td>
          <td style={{ padding: '0.7rem', border: '1px solid #ece6fa' }}>Plan/account-based</td>
          <td style={{ padding: '0.7rem', border: '1px solid #ece6fa' }}>Check your dashboard for current usage and quota.</td>
        </tr>
      </tbody>
    </table>

    <h2 style={{ color: '#7c3aed', fontWeight: 700, fontSize: '1.18rem', marginTop: 36, marginBottom: 10 }}>Request Rate Limits</h2>
    <p style={{ fontSize: '1.05rem', marginBottom: 20 }}>
      Each user is limited to <b>5 requests per minute</b>. If you exceed this limit, you will receive an HTTP 429 error. This is enforced in real time to ensure fair access for all users.
    </p>

    <h2 style={{ color: '#7c3aed', fontWeight: 700, fontSize: '1.18rem', marginTop: 36, marginBottom: 10 }}>Token Limits</h2>
    <p style={{ fontSize: '1.05rem', marginBottom: 20 }}>
      Most models support up to <b>1024 output tokens</b> per request. Some models may have different limits—see the <a href="/docs/models" style={{ color: '#2563eb', textDecoration: 'underline', fontWeight: 500 }}>Models</a> page for details. Input token estimation is handled automatically based on your prompt and task type.
    </p>

    <h2 style={{ color: '#7c3aed', fontWeight: 700, fontSize: '1.18rem', marginTop: 36, marginBottom: 10 }}>Caching</h2>
    <p style={{ fontSize: '1.05rem', marginBottom: 20 }}>
      Guidera uses intelligent caching to improve performance and reduce costs. Only responses with at least <b>752 tokens</b> are eligible for caching. Some tasks—such as <b>data_analysis</b> and <b>paraphrasing</b>—are never cached to ensure accuracy and privacy.
    </p>

    <h2 style={{ color: '#7c3aed', fontWeight: 700, fontSize: '1.18rem', marginTop: 36, marginBottom: 10 }}>Quotas & Usage</h2>
    <p style={{ fontSize: '1.05rem', marginBottom: 20 }}>
      Usage quotas may be set based on your account or plan. You can monitor your current usage and quota in your dashboard. If you need higher limits, please contact support or your account manager.
    </p>
  </div>
);

export default Limits; 