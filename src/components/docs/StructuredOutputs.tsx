import React, { useEffect } from 'react';
import { useDocsOnThisPage } from '../Docs';

const PURPLE = '#7c3aed';
const BLUE = '#2563eb';
const headingScrollMargin = { scrollMarginTop: 64 };

const ON_THIS_PAGE = [
  { label: 'Overview', anchor: 'structured-outputs-overview' },
  { label: 'The Problem', anchor: 'structured-outputs-problem' },
  { label: 'Our Solution: Predictable, Structured Responses', anchor: 'structured-outputs-solution' },
  { label: 'How It Works', anchor: 'structured-outputs-how' },
  { label: 'Benefits', anchor: 'structured-outputs-benefits' },
];

const codeBlock = (code: string) => (
  <div style={{
    background: '#f6f8fa',
    borderRadius: 8,
    padding: '1.1em 1em 1em 1em',
    margin: '1.5em 0',
    fontSize: '1.01rem',
    fontFamily: 'Menlo, Monaco, Consolas, "Liberation Mono", "Courier New", monospace',
    position: 'relative',
    overflowX: 'auto',
  }}>
    <pre style={{ margin: 0, background: 'none', padding: 0, whiteSpace: 'pre-wrap', wordBreak: 'break-word' }}>{code}</pre>
    <button
      style={{
        position: 'absolute',
        top: 10,
        right: 12,
        background: '#fff',
        color: BLUE,
        border: '1px solid #eaecef',
        borderRadius: 4,
        padding: '3px 12px',
        cursor: 'pointer',
        fontWeight: 600,
        fontSize: '0.95rem',
        boxShadow: '0 1px 2px rgba(0,0,0,0.03)',
      }}
      onClick={() => navigator.clipboard.writeText(code)}
    >
      Copy
    </button>
  </div>
);

const StructuredOutputs: React.FC = () => {
  const { setLinks } = useDocsOnThisPage();
  useEffect(() => {
    setLinks(ON_THIS_PAGE);
    return () => setLinks([]);
  }, [setLinks]);

  return (
    <div style={{ maxWidth: 900, margin: '0 auto', color: '#222', fontFamily: 'inherit', padding: '2rem 0', background: '#fff' }}>
      <h1 id="structured-outputs-overview" style={{ color: BLUE, fontWeight: 800, fontSize: '2.2rem', marginBottom: 18 }}>Structured Outputs</h1>
      <p style={{ fontSize: '1.13rem', marginBottom: 28 }}>
        Predictable, structured responses make integration easy and reliable. Every response includes the generated text, model used, cost-performance summary, and (if enabled) a compliance report.
      </p>
      <h2 id="structured-outputs-problem" style={{ ...headingScrollMargin, color: PURPLE, fontWeight: 700, fontSize: '1.18rem', marginTop: 36, marginBottom: 10 }}>The Problem</h2>
      <ul style={{ margin: '0 0 24px 20px', color: '#222', fontSize: '1.05rem' }}>
        <li>Inconsistent or unpredictable responses make integration difficult.</li>
      </ul>
      <h2 id="structured-outputs-solution" style={{ ...headingScrollMargin, color: PURPLE, fontWeight: 700, fontSize: '1.18rem', marginTop: 36, marginBottom: 10 }}>Our Solution: Predictable, Structured Responses</h2>
      <ul style={{ margin: '0 0 24px 20px', color: '#222', fontSize: '1.05rem' }}>
        <li><b>Consistent Format:</b> Every response includes the generated text, model used, cost-performance summary, and (if enabled) a compliance report.</li>
        <li><b>Transparent Errors:</b> Errors are reported clearly and consistently.</li>
        <li><b>Streaming Support:</b> Long or complex tasks stream results in real time.</li>
      </ul>
      <h2 id="structured-outputs-how" style={{ ...headingScrollMargin, color: PURPLE, fontWeight: 700, fontSize: '1.18rem', marginTop: 36, marginBottom: 10 }}>How It Works</h2>
      <ol style={{ margin: '0 0 24px 24px', color: '#222', fontSize: '1.05rem', lineHeight: 1.7 }}>
        <li><b>Standardized Schema:</b> All outputs follow a clear, machine-readable structure.</li>
        <li><b>Error Handling:</b> Any issues are reported in the same format as successful responses.</li>
        <li><b>Streaming:</b> For large or slow tasks, results are streamed as they are generated.</li>
      </ol>
      <div style={{ margin: '1.5em 0' }}>
        <b>Example Output:</b>
        {codeBlock(`{
  "text": "The generated response...",
  "model": "gpt-4o",
  "cost_performance": {
    "cost": 0.002,
    "performance": 0.98
  },
  "compliance_report": {
    "pii_found": false,
    "policy_violations": []
  },
  "error": null
}`)}
      </div>
      <h2 id="structured-outputs-benefits" style={{ ...headingScrollMargin, color: PURPLE, fontWeight: 700, fontSize: '1.18rem', marginTop: 36, marginBottom: 10 }}>Benefits</h2>
      <ul style={{ margin: '0 0 24px 20px', color: '#222', fontSize: '1.05rem' }}>
        <li>Easy integration into your workflows.</li>
        <li>No surprises—always know what to expect.</li>
        <li>Real-time feedback for your users.</li>
      </ul>
    </div>
  );
};

export default StructuredOutputs; 