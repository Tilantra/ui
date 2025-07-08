import React from 'react';

const PrivacyAndLogging: React.FC = () => (
  <div style={{ maxWidth: 900, margin: '0 auto', color: '#222', fontFamily: 'inherit', padding: '2rem 0' }}>
    <h1 style={{ color: '#2563eb', fontWeight: 800, fontSize: '2.2rem', marginBottom: 18 }}>Privacy and Logging</h1>
    <p style={{ fontSize: '1.13rem', marginBottom: 28 }}>
      Guidera securely logs all requests, redacts PII, and provides full audit trails for compliance and transparency. Your data is encrypted in transit and at rest, and you can review logs for all API activity.
    </p>
    <ul style={{ margin: '0 0 24px 20px', color: '#222', fontSize: '1.05rem' }}>
      <li><strong>Secure Logging:</strong> All API requests and responses are logged securely for audit and compliance.</li>
      <li><strong>PII Redaction:</strong> Personally identifiable information is automatically redacted from logs.</li>
      <li><strong>Audit Trails:</strong> Full access to request and response history for compliance needs.</li>
      <li><strong>Data Encryption:</strong> All data is encrypted in transit and at rest.</li>
    </ul>
  </div>
);

export default PrivacyAndLogging; 