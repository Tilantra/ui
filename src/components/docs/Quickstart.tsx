import React, { useEffect } from 'react';
import { useDocsOnThisPage } from '../Docs';

const PURPLE = '#7c3aed';
const BLUE = '#2563eb';
const headingScrollMargin = { scrollMarginTop: 64 };

const ON_THIS_PAGE = [
  { label: 'Overview', anchor: 'quickstart-overview' },
  { label: 'What is Model Swap Router?', anchor: 'quickstart-what' },
  { label: 'Key Capabilities', anchor: 'quickstart-capabilities' },
  { label: 'Getting Started', anchor: 'quickstart-getting-started' },
  { label: 'Why Use Model Swap Router?', anchor: 'quickstart-why' },
  { label: 'SDK Usage Example', anchor: 'quickstart-sdk-example' },
  { label: 'Customization Options', anchor: 'quickstart-customization' },
  { label: 'Support & Contact', anchor: 'quickstart-support' },
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

const Quickstart: React.FC = () => {
  const { setLinks } = useDocsOnThisPage();
  useEffect(() => {
    setLinks(ON_THIS_PAGE);
    return () => setLinks([]);
  }, [setLinks]);

  return (
    <div style={{ maxWidth: 900, margin: '0 auto', color: '#222', fontFamily: 'inherit', padding: '2rem 0', background: '#fff' }}>
      <h1 id="quickstart-overview" style={{ color: BLUE, fontWeight: 800, fontSize: '2.2rem', marginBottom: 18 }}>Quickstart</h1>
      <p style={{ fontSize: '1.13rem', marginBottom: 28 }}>
        Welcome! This guide will help you get started with Model Swap Router, an enterprise-grade platform for intelligent, compliant, and cost-optimized access to the world’s best LLMs.
      </p>
      <h2 id="quickstart-what" style={{ ...headingScrollMargin, color: PURPLE, fontWeight: 700, fontSize: '1.18rem', marginTop: 36, marginBottom: 10 }}>What is Model Swap Router?</h2>
      <p style={{ fontSize: '1.07rem', marginBottom: 18 }}>
        Model Swap Router is an enterprise-grade platform for intelligent, compliant, and cost-optimized access to the world’s best LLMs. It is designed for reliability, security, and seamless integration into your workflows.
      </p>
      <h2 id="quickstart-capabilities" style={{ ...headingScrollMargin, color: PURPLE, fontWeight: 700, fontSize: '1.18rem', marginTop: 36, marginBottom: 10 }}>Key Capabilities</h2>
      <ul style={{ margin: '0 0 24px 20px', color: '#222', fontSize: '1.05rem' }}>
        <li>Automatic, intelligent model routing (ARMS)</li>
        <li>Enterprise-grade compliance (PII, policy, copyright, and more)</li>
        <li>Lightning-fast prompt caching</li>
        <li>Structured, machine-readable outputs</li>
        <li>Seamless tool calling and message transformation</li>
        <li>Unmatched uptime and reliability</li>
        <li>Zero completion insurance (never leave your users without a response)</li>
        <li>Self-service API key provisioning</li>
      </ul>
      <h2 id="quickstart-getting-started" style={{ ...headingScrollMargin, color: PURPLE, fontWeight: 700, fontSize: '1.18rem', marginTop: 36, marginBottom: 10 }}>Getting Started</h2>
      <ol style={{ margin: '0 0 24px 24px', color: '#222', fontSize: '1.05rem', lineHeight: 1.7 }}>
        <li><b>Install the SDK</b>{codeBlock('pip install guidera')}</li>
        <li><b>Initialize the Client</b>{codeBlock('import guidera\nsdk_key = "YOUR_SDK_KEY"\nguidera_client = guidera.Client()')}</li>
        <li><b>Generate a Response</b>{codeBlock('response = guidera_client.generate(\n    prompt="write a small python code for the first n times of the 2\'s table.",\n    prefs={},\n    cp_tradeoff_parameter=0,  # optional, defaults to 0.7\n    compliance_enabled=True   # optional, defaults to False\n)\nprint(response)')}</li>
      </ol>
      <h2 id="quickstart-why" style={{ ...headingScrollMargin, color: PURPLE, fontWeight: 700, fontSize: '1.18rem', marginTop: 36, marginBottom: 10 }}>Why Use Model Swap Router?</h2>
      <ul style={{ margin: '0 0 24px 20px', color: '#222', fontSize: '1.05rem' }}>
        <li><b>No model lock-in:</b> Instantly access OpenAI, Anthropic, Google, Mistral, and more.</li>
        <li><b>Enterprise compliance:</b> Enable with a single flag.</li>
        <li><b>Cost-performance control:</b> Tune with <code>cp_tradeoff_parameter</code>.</li>
      </ul>
      <h2 id="quickstart-sdk-example" style={{ ...headingScrollMargin, color: PURPLE, fontWeight: 700, fontSize: '1.18rem', marginTop: 36, marginBottom: 10 }}>SDK Usage Example</h2>
      <p style={{ fontSize: '1.07rem', marginBottom: 18 }}><b>Example: Generating a Creative Story</b></p>
      {codeBlock('import guidera\nsdk_key = "YOUR_SDK_KEY"\nguidera_client = guidera.Client()\n\nresponse = guidera_client.generate(\n    prompt="write a short story about a cat and a polar bear",\n    prefs={},\n    cp_tradeoff_parameter=0.8,\n    compliance_enabled=True\n)\nprint(response)')}
      <h2 id="quickstart-customization" style={{ ...headingScrollMargin, color: PURPLE, fontWeight: 700, fontSize: '1.18rem', marginTop: 36, marginBottom: 10 }}>Customization Options</h2>
      <ul style={{ margin: '0 0 24px 20px', color: '#222', fontSize: '1.05rem' }}>
        <li><b>prefs:</b> Pass user or company preferences as a dictionary.</li>
        <li><b>cp_tradeoff_parameter:</b> Control the balance between cost and performance (0 = lowest cost, 1 = highest performance).</li>
        <li><b>compliance_enabled:</b> Enable or disable compliance checks per request.</li>
      </ul>
      <h2 id="quickstart-support" style={{ ...headingScrollMargin, color: PURPLE, fontWeight: 700, fontSize: '1.18rem', marginTop: 36, marginBottom: 10 }}>Support & Contact</h2>
      <p style={{ fontSize: '1.07rem', marginBottom: 18 }}>
        For integration help, feature requests, or support, contact the product team or refer to in-code docstrings and comments.
      </p>
      <div style={{ marginTop: 36, color: '#444', fontSize: '1.05rem' }}>
        <b>Model Swap Router: The future of LLM integration, today.</b>
      </div>
    </div>
  );
};

export default Quickstart; 