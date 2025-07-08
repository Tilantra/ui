import React from 'react';

const Errors: React.FC = () => (
  <div style={{ maxWidth: 900, margin: '0 auto', color: '#222', fontFamily: 'inherit', padding: '2rem 0' }}>
    <h1 style={{ color: '#2563eb', fontWeight: 800, fontSize: '2.2rem', marginBottom: 18 }}>Errors</h1>
    <p style={{ fontSize: '1.13rem', marginBottom: 28 }}>
      Guidera returns descriptive error messages for invalid requests, authentication failures, and other issues. Check the error code and message for troubleshooting.
    </p>
    <ul style={{ margin: '0 0 24px 20px', color: '#222', fontSize: '1.05rem' }}>
      <li><strong>400 Bad Request:</strong> The request was invalid or missing required parameters.</li>
      <li><strong>401 Unauthorized:</strong> The API key is missing or invalid.</li>
      <li><strong>429 Too Many Requests:</strong> Rate limits exceeded. Slow down your requests.</li>
      <li><strong>500 Server Error:</strong> An internal error occurred. Try again later.</li>
    </ul>
  </div>
);

export default Errors; 