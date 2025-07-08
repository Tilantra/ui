import React from 'react';

const WebSearch: React.FC = () => (
  <div style={{ maxWidth: 900, margin: '0 auto', color: '#222', fontFamily: 'inherit', padding: '2rem 0' }}>
    <h1 style={{ color: '#2563eb', fontWeight: 800, fontSize: '2.2rem', marginBottom: 18 }}>Web Search</h1>
    <p style={{ fontSize: '1.13rem', marginBottom: 28 }}>
    Guidera can augment prompts with real-time web results, providing up-to-date information and context for your queries.
    </p>
    <ul style={{ margin: '0 0 24px 20px', color: '#222', fontSize: '1.05rem' }}>
      <li><strong>Real-Time Data:</strong> Integrate live web search results into your prompts.</li>
      <li><strong>Enhanced Context:</strong> Improve model responses with current information.</li>
      <li><strong>Customizable:</strong> Control when and how web search is used in your workflow.</li>
    </ul>
  </div>
);

export default WebSearch; 