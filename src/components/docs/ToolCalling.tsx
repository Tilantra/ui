import React from 'react';

const ToolCalling: React.FC = () => (
  <div style={{ maxWidth: 900, margin: '0 auto', color: '#222', fontFamily: 'inherit', padding: '2rem 0' }}>
    <h1 style={{ color: '#2563eb', fontWeight: 800, fontSize: '2.2rem', marginBottom: 18 }}>Tool Calling</h1>
    <p style={{ fontSize: '1.13rem', marginBottom: 28 }}>
    Guidera enables integration with external APIs and tools directly in your workflow. Enhance your prompts and responses by calling tools programmatically.
    </p>
    <ul style={{ margin: '0 0 24px 20px', color: '#222', fontSize: '1.05rem' }}>
      <li><strong>API Integration:</strong> Call external APIs as part of your prompt flow.</li>
      <li><strong>Custom Tools:</strong> Integrate your own tools for advanced use cases.</li>
      <li><strong>Workflow Automation:</strong> Automate tasks by chaining tool calls with model completions.</li>
    </ul>
  </div>
);

export default ToolCalling; 