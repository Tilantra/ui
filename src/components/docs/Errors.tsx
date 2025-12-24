import React from 'react';
import CodeBlock from './CodeBlock';

const Errors: React.FC = () => (
  <div style={{ maxWidth: 900, margin: '0 auto', color: '#222', fontFamily: 'inherit', padding: '2rem 0' }}>
    <h1 style={{ color: '#2563eb', fontWeight: 800, fontSize: '2.2rem', marginBottom: 18 }}>Errors</h1>
    <p style={{ fontSize: '1.13rem', marginBottom: 28 }}>
      Guidera returns clear, descriptive error messages for invalid requests, authentication failures, rate limits, and server issues. Use the error code and message to troubleshoot and resolve issues quickly.
    </p>

    <h2 style={{ color: '#7c3aed', fontWeight: 700, fontSize: '1.18rem', marginTop: 36, marginBottom: 10 }}>Error Codes</h2>
    <table style={{ width: '100%', borderCollapse: 'collapse', margin: '1.5em 0', fontSize: '1.05rem' }}>
      <thead>
        <tr style={{ background: '#f6f8fa' }}>
          <th style={{ padding: '0.7rem', border: '1px solid #ece6fa' }}>Code</th>
          <th style={{ padding: '0.7rem', border: '1px solid #ece6fa' }}>Description</th>
        </tr>
      </thead>
      <tbody>
        <tr>
          <td style={{ padding: '0.7rem', border: '1px solid #ece6fa' }}>400</td>
          <td style={{ padding: '0.7rem', border: '1px solid #ece6fa' }}>Bad Request – The request was invalid or missing required parameters.</td>
        </tr>
        <tr>
          <td style={{ padding: '0.7rem', border: '1px solid #ece6fa' }}>401</td>
          <td style={{ padding: '0.7rem', border: '1px solid #ece6fa' }}>Unauthorized – The token is missing, expired, or invalid.</td>
        </tr>
        <tr>
          <td style={{ padding: '0.7rem', border: '1px solid #ece6fa' }}>403</td>
          <td style={{ padding: '0.7rem', border: '1px solid #ece6fa' }}>Forbidden – You do not have permission to access this resource.</td>
        </tr>
        <tr>
          <td style={{ padding: '0.7rem', border: '1px solid #ece6fa' }}>422</td>
          <td style={{ padding: '0.7rem', border: '1px solid #ece6fa' }}>Unprocessable Entity – Invalid request parameters or payload.</td>
        </tr>
        <tr>
          <td style={{ padding: '0.7rem', border: '1px solid #ece6fa' }}>429</td>
          <td style={{ padding: '0.7rem', border: '1px solid #ece6fa' }}>Too Many Requests – Rate limit exceeded. Slow down your requests.</td>
        </tr>
        <tr>
          <td style={{ padding: '0.7rem', border: '1px solid #ece6fa' }}>500</td>
          <td style={{ padding: '0.7rem', border: '1px solid #ece6fa' }}>Internal Server Error – An unexpected error occurred. Try again later.</td>
        </tr>
      </tbody>
    </table>

    <h2 style={{ color: '#7c3aed', fontWeight: 700, fontSize: '1.18rem', marginTop: 36, marginBottom: 10 }}>Troubleshooting</h2>
    <table style={{ width: '100%', borderCollapse: 'collapse', margin: '1.5em 0', fontSize: '1.05rem' }}>
      <thead>
        <tr style={{ background: '#f6f8fa' }}>
          <th style={{ padding: '0.7rem', border: '1px solid #ece6fa' }}>Error</th>
          <th style={{ padding: '0.7rem', border: '1px solid #ece6fa' }}>How to Fix</th>
        </tr>
      </thead>
      <tbody>
        <tr>
          <td style={{ padding: '0.7rem', border: '1px solid #ece6fa' }}>400 Bad Request</td>
          <td style={{ padding: '0.7rem', border: '1px solid #ece6fa' }}>Check your request body and required parameters.</td>
        </tr>
        <tr>
          <td style={{ padding: '0.7rem', border: '1px solid #ece6fa' }}>401 Unauthorized</td>
          <td style={{ padding: '0.7rem', border: '1px solid #ece6fa' }}>Ensure your token is valid and not expired. Log in again if needed.</td>
        </tr>
        <tr>
          <td style={{ padding: '0.7rem', border: '1px solid #ece6fa' }}>403 Forbidden</td>
          <td style={{ padding: '0.7rem', border: '1px solid #ece6fa' }}>You may not have access to this resource. Contact support if you believe this is an error.</td>
        </tr>
        <tr>
          <td style={{ padding: '0.7rem', border: '1px solid #ece6fa' }}>422 Unprocessable Entity</td>
          <td style={{ padding: '0.7rem', border: '1px solid #ece6fa' }}>Check for typos or invalid data in your request.</td>
        </tr>
        <tr>
          <td style={{ padding: '0.7rem', border: '1px solid #ece6fa' }}>429 Too Many Requests</td>
          <td style={{ padding: '0.7rem', border: '1px solid #ece6fa' }}>Wait and retry after a minute. Consider optimizing your request rate.</td>
        </tr>
        <tr>
          <td style={{ padding: '0.7rem', border: '1px solid #ece6fa' }}>500 Internal Server Error</td>
          <td style={{ padding: '0.7rem', border: '1px solid #ece6fa' }}>Try again later. If the issue persists, contact support.</td>
        </tr>
      </tbody>
    </table>
  </div>
);

export default Errors; 