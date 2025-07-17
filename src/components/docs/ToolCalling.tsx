import React, { useEffect } from 'react';
import { useDocsOnThisPage } from '../Docs';

const PURPLE = '#7c3aed';
const BLUE = '#2563eb';
const headingScrollMargin = { scrollMarginTop: 64 };

const ON_THIS_PAGE = [
  { label: 'Overview', anchor: 'tool-calling-overview' },
  { label: 'The Problem', anchor: 'tool-calling-problem' },
  { label: 'Our Solution: Seamless Tool Integration', anchor: 'tool-calling-solution' },
  { label: 'How It Works', anchor: 'tool-calling-how' },
  { label: 'Benefits', anchor: 'tool-calling-benefits' },
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

const ToolCalling: React.FC = () => {
  const { setLinks } = useDocsOnThisPage();
  useEffect(() => {
    setLinks(ON_THIS_PAGE);
    return () => setLinks([]);
  }, [setLinks]);

  return (
    <div style={{ maxWidth: 900, margin: '0 auto', color: '#222', fontFamily: 'inherit', padding: '2rem 0', background: '#fff' }}>
      <h1 id="tool-calling-overview" style={{ color: BLUE, fontWeight: 800, fontSize: '2.2rem', marginBottom: 18 }}>Tool Calling</h1>
    <p style={{ fontSize: '1.13rem', marginBottom: 28 }}>
        Some tasks require more than just text generation—they need real-world actions or up-to-date information. Tool Calling enables seamless integration with external APIs and tools directly in your workflow.
      </p>
      <h2 id="tool-calling-problem" style={{ ...headingScrollMargin, color: PURPLE, fontWeight: 700, fontSize: '1.18rem', marginTop: 36, marginBottom: 10 }}>The Problem</h2>
      <ul style={{ margin: '0 0 24px 20px', color: '#222', fontSize: '1.05rem' }}>
        <li>Some tasks require more than just text generation—they need real-world actions or up-to-date information.</li>
      </ul>
      <h2 id="tool-calling-solution" style={{ ...headingScrollMargin, color: PURPLE, fontWeight: 700, fontSize: '1.18rem', marginTop: 36, marginBottom: 10 }}>Our Solution: Seamless Tool Integration</h2>
      <ul style={{ margin: '0 0 24px 20px', color: '#222', fontSize: '1.05rem' }}>
        <li><b>Automatic Tool Detection:</b> The system recognizes when a prompt requires a tool (e.g., web search, code execution).</li>
        <li><b>Effortless Invocation:</b> Tools are called automatically, with no extra work for you.</li>
        <li><b>Richer Results:</b> Users get actionable, up-to-date answers.</li>
      </ul>
      <h2 id="tool-calling-how" style={{ ...headingScrollMargin, color: PURPLE, fontWeight: 700, fontSize: '1.18rem', marginTop: 36, marginBottom: 10 }}>How It Works</h2>
      <ol style={{ margin: '0 0 24px 24px', color: '#222', fontSize: '1.05rem', lineHeight: 1.7 }}>
        <li><b>Prompt Analysis:</b> The system detects tool requirements in your prompt.</li>
        <li><b>Tool Invocation:</b> Supported models call the necessary tools.</li>
        <li><b>Result Integration:</b> Tool results are combined with model output and returned to you.</li>
      </ol>
      <div style={{ margin: '1.5em 0' }}>
        <b>Example:</b>
        {codeBlock(`response = guidera_client.generate(
  prompt="What is the weather in Paris right now?",
  prefs={},
  cp_tradeoff_parameter=0.7,
  compliance_enabled=True
)
# The system will automatically call a weather API and return the result with the model output.`)}
      </div>
      <h2 id="tool-calling-benefits" style={{ ...headingScrollMargin, color: PURPLE, fontWeight: 700, fontSize: '1.18rem', marginTop: 36, marginBottom: 10 }}>Benefits</h2>
    <ul style={{ margin: '0 0 24px 20px', color: '#222', fontSize: '1.05rem' }}>
        <li>Unlock new capabilities for your users.</li>
        <li>Always provide the most relevant, actionable answers.</li>
        <li>No manual integration required.</li>
    </ul>
  </div>
);
};

export default ToolCalling; 