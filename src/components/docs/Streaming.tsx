import React from 'react';

const Streaming: React.FC = () => (
  <div style={{ maxWidth: 900, margin: '0 auto', color: '#222', fontFamily: 'inherit', padding: '2rem 0' }}>
    <h1 style={{ color: '#2563eb', fontWeight: 800, fontSize: '2.2rem', marginBottom: 18 }}>Streaming</h1>
    <p style={{ fontSize: '1.13rem', marginBottom: 28 }}>
      Guidera supports streaming responses for chat and completion endpoints. Receive tokens as they are generated for a faster, more interactive experience.
    </p>
    <ul style={{ margin: '0 0 24px 20px', color: '#222', fontSize: '1.05rem' }}>
      <li><strong>Real-Time Output:</strong> Get tokens as soon as they are available.</li>
      <li><strong>Interactive Apps:</strong> Build chat UIs and tools that update in real time.</li>
      <li><strong>Easy Integration:</strong> Enable streaming with a simple parameter in your API call.</li>
    </ul>
  </div>
);

export default Streaming; 