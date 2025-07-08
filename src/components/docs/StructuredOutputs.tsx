import React from 'react';

const StructuredOutputs: React.FC = () => (
  <div style={{ maxWidth: 900, margin: '0 auto', color: '#222', fontFamily: 'inherit', padding: '2rem 0' }}>
    <h1 style={{ color: '#2563eb', fontWeight: 800, fontSize: '2.2rem', marginBottom: 18 }}>Structured Outputs</h1>
    <p style={{ fontSize: '1.13rem', marginBottom: 28 }}>
    Guidera supports structured outputs such as JSON, tables, and more. Get responses in the format you need for your application.
    </p>
    <ul style={{ margin: '0 0 24px 20px', color: '#222', fontSize: '1.05rem' }}>
      <li><strong>JSON Output:</strong> Receive responses as structured JSON objects.</li>
      <li><strong>Tabular Data:</strong> Get tabular outputs for easy data processing.</li>
      <li><strong>Custom Formats:</strong> Request custom output formats as needed.</li>
    </ul>
  </div>
);

export default StructuredOutputs; 