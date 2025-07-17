import React, { useEffect } from 'react';
import { useDocsOnThisPage } from '../Docs';

const PURPLE = '#7c3aed';
const BLUE = '#2563eb';
const headingScrollMargin = { scrollMarginTop: 64 };

const ON_THIS_PAGE = [
  { label: 'Overview', anchor: 'message-transforms-overview' },
  { label: 'The Problem', anchor: 'message-transforms-problem' },
  { label: 'Our Solution: Automated Prompt Optimization', anchor: 'message-transforms-solution' },
  { label: 'How It Works', anchor: 'message-transforms-how' },
  { label: 'Benefits', anchor: 'message-transforms-benefits' },
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

const MessageTransforms: React.FC = () => {
  const { setLinks } = useDocsOnThisPage();
  useEffect(() => {
    setLinks(ON_THIS_PAGE);
    return () => setLinks([]);
  }, [setLinks]);

  return (
    <div style={{ maxWidth: 900, margin: '0 auto', color: '#222', fontFamily: 'inherit', padding: '2rem 0', background: '#fff' }}>
      <h1 id="message-transforms-overview" style={{ color: BLUE, fontWeight: 800, fontSize: '2.2rem', marginBottom: 18 }}>Message Transforms</h1>
    <p style={{ fontSize: '1.13rem', marginBottom: 28 }}>
        Automated prompt optimization and message transforms ensure higher quality outputs, fewer errors, and compliance with your requirements—no prompt engineering expertise needed.
      </p>
      <h2 id="message-transforms-problem" style={{ ...headingScrollMargin, color: PURPLE, fontWeight: 700, fontSize: '1.18rem', marginTop: 36, marginBottom: 10 }}>The Problem</h2>
      <ul style={{ margin: '0 0 24px 20px', color: '#222', fontSize: '1.05rem' }}>
        <li>Poorly structured prompts can lead to suboptimal results or compliance issues.</li>
      </ul>
      <h2 id="message-transforms-solution" style={{ ...headingScrollMargin, color: PURPLE, fontWeight: 700, fontSize: '1.18rem', marginTop: 36, marginBottom: 10 }}>Our Solution: Automated Prompt Optimization</h2>
      <ul style={{ margin: '0 0 24px 20px', color: '#222', fontSize: '1.05rem' }}>
        <li><b>Expert Rewriting:</b> Prompts are analyzed and, if needed, rewritten using best-in-class templates.</li>
        <li><b>Sensitive Data Handling:</b> Sensitive information is redacted and restored as needed.</li>
        <li><b>Task-Specific Templates:</b> Prompts are matched to optimal templates for each task type.</li>
      </ul>
      <h2 id="message-transforms-how" style={{ ...headingScrollMargin, color: PURPLE, fontWeight: 700, fontSize: '1.18rem', marginTop: 36, marginBottom: 10 }}>How It Works</h2>
      <ol style={{ margin: '0 0 24px 24px', color: '#222', fontSize: '1.05rem', lineHeight: 1.7 }}>
        <li><b>Prompt Analysis:</b> The system reviews your prompt for structure and content.</li>
        <li><b>Transformation:</b> If improvements are needed, the prompt is rewritten automatically.</li>
        <li><b>Restoration:</b> Sensitive data is handled securely throughout the process.</li>
      </ol>
      <div style={{ margin: '1.5em 0' }}>
        <b>Example:</b>
        {codeBlock(`response = guidera_client.generate(
  prompt="Summarize the following text:",
  prefs={},
  cp_tradeoff_parameter=0.7,
  compliance_enabled=True
)
# The system will automatically optimize the prompt for best results.`)}
      </div>
      <h2 id="message-transforms-benefits" style={{ ...headingScrollMargin, color: PURPLE, fontWeight: 700, fontSize: '1.18rem', marginTop: 36, marginBottom: 10 }}>Benefits</h2>
    <ul style={{ margin: '0 0 24px 20px', color: '#222', fontSize: '1.05rem' }}>
        <li>Higher quality outputs.</li>
        <li>Fewer errors and compliance issues.</li>
        <li>No need to be a prompt engineering expert.</li>
    </ul>
  </div>
);
};

export default MessageTransforms; 