import React from 'react';

const Parameters: React.FC = () => (
  <div style={{ maxWidth: 900, margin: '0 auto', color: '#222', fontFamily: 'inherit', padding: '2rem 0' }}>
    <h1 style={{ color: '#2563eb', fontWeight: 800, fontSize: '2.2rem', marginBottom: 18 }}>Parameters</h1>
    <p style={{ fontSize: '1.13rem', marginBottom: 28 }}>
      Guidera API endpoints accept a variety of parameters to control model selection, output, and behavior. Refer to the API documentation for details on each parameter.
    </p>
    <ul style={{ margin: '0 0 24px 20px', color: '#222', fontSize: '1.05rem' }}>
      <li><strong>model:</strong> The model to use for completion or chat.</li>
      <li><strong>messages:</strong> Conversation history for chat completions.</li>
      <li><strong>api_key:</strong> Your API key for authentication.</li>
      <li><strong>stream:</strong> Enable streaming responses if supported.</li>
    </ul>
  </div>
);

export default Parameters; 