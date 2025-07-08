import React from 'react';

const MessageTransforms: React.FC = () => (
  <div style={{ maxWidth: 900, margin: '0 auto', color: '#222', fontFamily: 'inherit', padding: '2rem 0' }}>
    <h1 style={{ color: '#2563eb', fontWeight: 800, fontSize: '2.2rem', marginBottom: 18 }}>Message Transforms</h1>
    <p style={{ fontSize: '1.13rem', marginBottom: 28 }}>
      Guidera can rewrite or enhance prompts and responses using message transforms. Improve clarity, add context, or modify outputs as needed.
    </p>
    <ul style={{ margin: '0 0 24px 20px', color: '#222', fontSize: '1.05rem' }}>
      <li><strong>Prompt Enhancement:</strong> Automatically rewrite prompts for better results.</li>
      <li><strong>Response Modification:</strong> Transform model outputs to fit your requirements.</li>
      <li><strong>Custom Logic:</strong> Apply custom transforms to messages in your workflow.</li>
    </ul>
  </div>
);

export default MessageTransforms; 