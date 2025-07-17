import React, { useEffect, useState } from 'react';
import { useDocsOnThisPage } from '../Docs';
import { Link } from 'react-router-dom';
import { Highlight, themes } from 'prism-react-renderer';
// Removed theme import for maximum compatibility

const PURPLE = '#7c3aed';
const BLUE = '#2563eb';
const headingScrollMargin = { scrollMarginTop: 64 };

const ON_THIS_PAGE = [
  { label: 'Overview', anchor: 'quickstart-overview' },
  { label: 'Why this matters', anchor: 'quickstart-why-matters' },
  { label: 'Key Capabilities', anchor: 'quickstart-capabilities' },
  { label: 'Getting Started', anchor: 'quickstart-getting-started' },
  { label: 'SDK Usage Example', anchor: 'quickstart-sdk-example' },
  { label: 'Customization Options', anchor: 'quickstart-customization' },
  { label: 'Support & Contact', anchor: 'quickstart-support' },
];

const codeTabs = [
  {
    label: 'Python',
    language: 'python',
    code: `import guidera\nsdk_key = "YOUR_SDK_KEY"\nguidera_client = guidera.Client()\n\nresponse = guidera_client.generate(\n    prompt="your prompt here",\n    prefs={},\n    cp_tradeoff_parameter=0,  # optional, defaults to 0.7\n    compliance_enabled=True   # optional, defaults to False\n)\nprint(response)`
  },
  {
    label: 'TypeScript',
    language: 'typescript',
    code: `import { Guidera } from 'guidera';\n\nconst guideraClient = new Guidera({ apiKey: 'YOUR_SDK_KEY' });\n\nconst response = await guideraClient.generate({\n  prompt: 'your prompt here',\n  prefs: {},\n  cp_tradeoff_parameter: 0, // optional, defaults to 0.7\n  compliance_enabled: true  // optional, defaults to false\n});\nconsole.log(response);`
  },
  {
    label: 'Shell',
    language: 'bash',
    code: `curl -X POST "http://tilantra-client/generate" \\
  -H "Content-Type: application/json" \\
  -H "Authorization: Bearer Toekn" \\
  -d '{\n    "prompt": "Your prompt here",\n    "prefs": {},\n    "cp_tradeoff_parameter": 1,\n    "compliance_enabled": true\n  }'`
  }
];

const installTabs = [
  {
    label: 'Python',
    language: 'bash',
    code: 'pip install guidera',
  },
  {
    label: 'TypeScript',
    language: 'bash',
    code: 'npm install guidera',
  },
];

const InstallTabsBlock: React.FC = () => {
  const [tab, setTab] = useState(0);
  const { label, language, code } = installTabs[tab];
  return (
    <div style={{
      background: '#f8fafc',
      borderRadius: 10,
      margin: '1.5em 0',
      boxShadow: '0 2px 16px 0 rgba(40,40,80,0.07)',
      border: '1.5px solid #e5e7eb',
      fontSize: '1.01rem',
      fontFamily: 'Menlo, Monaco, Consolas, "Liberation Mono", "Courier New", monospace',
      overflow: 'hidden',
      position: 'relative',
    }}>
      {/* Style override for .token.plain to make code black */}
      <style>{`.install-tabs-block .token.plain { color: #222 !important; }`}</style>
      <div style={{ display: 'flex', background: '#f3f4f6', borderBottom: '1px solid #e5e7eb', padding: '0.2rem 0.7rem 0.2rem 0.7rem', gap: 8 }}>
        {installTabs.map((t, i) => (
          <button
            key={t.label}
            onClick={() => setTab(i)}
            style={{
              background: tab === i ? '#f8fafc' : 'transparent',
              color: tab === i ? '#222' : '#6b7280',
              border: 'none',
              borderRadius: '7px 7px 0 0',
              fontWeight: 700,
              fontSize: '0.98rem',
              padding: '0.4rem 1.1rem',
              cursor: tab === i ? 'default' : 'pointer',
              outline: 'none',
              transition: 'background 0.15s',
            }}
          >
            {t.label}
          </button>
        ))}
        <button
          style={{
            marginLeft: 'auto',
            background: 'none',
            border: 'none',
            color: '#6b7280',
            cursor: 'pointer',
            fontSize: '1.1rem',
            padding: '0.2rem 0.7rem',
            display: 'flex',
            alignItems: 'center',
          }}
          title="Copy to clipboard"
          onClick={() => navigator.clipboard.writeText(code)}
        >
          <svg width="18" height="18" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
            <rect x="6" y="6" width="9" height="9" rx="2" stroke="#6b7280" strokeWidth="1.5" fill="#f3f4f6"/>
            <rect x="3" y="3" width="9" height="9" rx="2" stroke="#6b7280" strokeWidth="1.5" fill="#f3f4f6"/>
          </svg>
        </button>
      </div>
      <div className="install-tabs-block">
        <Highlight code={code} language={language} theme={themes.vsLight}>
          {({ className, style, tokens, getLineProps, getTokenProps }) => (
            <pre className={className} style={{ ...style, background: 'none', margin: 0, padding: '1.1em 0.7em 1.1em 0.7em', fontSize: '1.01rem', overflow: 'auto', display: 'flex' }}>
              <code style={{ width: '100%', display: 'flex', flexDirection: 'column' }}>
                {tokens.map((line: any[], i: number) => (
                  <div key={i} style={{ display: 'flex' }}>
                    <span style={{
                      display: 'inline-block',
                      width: 32,
                      color: '#b6b9c6',
                      userSelect: 'none',
                      textAlign: 'right',
                      paddingRight: 12,
                      fontSize: '0.98rem',
                      opacity: 0.7,
                    }}>{i + 1}</span>
                    <span {...getLineProps({ line, key: i })} style={{ display: 'inline-block', width: '100%' }}>
                      {line.map((token: any, key: number) => (
                        <span key={key} {...getTokenProps({ token, key })} />
                      ))}
                    </span>
                  </div>
                ))}
              </code>
            </pre>
          )}
        </Highlight>
      </div>
    </div>
  );
};

const InstallBlock: React.FC<{ language: string; code: string }> = ({ language, code }) => (
  <Highlight code={code} language={language}>
    {({ className, style, tokens, getLineProps, getTokenProps }) => (
      <pre className={className} style={{ ...style, background: 'none', margin: '0.7em 0', padding: '0.7em 1em', fontSize: '1.01rem', borderRadius: 7, border: '1px solid #e5e7eb', backgroundColor: '#f8fafc', overflow: 'auto' }}>
        <code style={{ width: '100%', display: 'flex', flexDirection: 'column' }}>
          {tokens.map((line: any[], i: number) => (
            <div key={i} style={{ display: 'flex' }}>
              <span style={{
                display: 'inline-block',
                width: 32,
                color: '#b6b9c6',
                userSelect: 'none',
                textAlign: 'right',
                paddingRight: 12,
                fontSize: '0.98rem',
                opacity: 0.7,
              }}>{i + 1}</span>
              <span {...getLineProps({ line, key: i })} style={{ display: 'inline-block', width: '100%' }}>
                {line.map((token: any, key: number) => (
                  <span key={key} {...getTokenProps({ token, key })} />
                ))}
              </span>
            </div>
          ))}
        </code>
      </pre>
    )}
  </Highlight>
);

const IDECodeBlock: React.FC = () => {
  const [tab, setTab] = useState(0);
  const { label, language, code } = codeTabs[tab];

  return (
    <div style={{
      background: '#f8fafc', // match vsLight background
      borderRadius: 10,
      margin: '1.5em 0',
      boxShadow: '0 2px 16px 0 rgba(40,40,80,0.07)',
      border: '1.5px solid #e5e7eb',
      fontSize: '1.01rem',
      fontFamily: 'Menlo, Monaco, Consolas, "Liberation Mono", "Courier New", monospace',
      overflow: 'hidden',
      position: 'relative',
    }}>
      <div style={{ display: 'flex', background: '#f3f4f6', borderBottom: '1px solid #e5e7eb', padding: '0.2rem 0.7rem 0.2rem 0.7rem', gap: 8 }}>
        {codeTabs.map((t, i) => (
          <button
            key={t.label}
            onClick={() => setTab(i)}
            style={{
              background: tab === i ? '#f8fafc' : 'transparent',
              color: tab === i ? '#222' : '#6b7280',
              border: 'none',
              borderRadius: '7px 7px 0 0',
              fontWeight: 700,
              fontSize: '0.98rem',
              padding: '0.4rem 1.1rem',
              cursor: tab === i ? 'default' : 'pointer',
              outline: 'none',
              transition: 'background 0.15s',
            }}
          >
            {t.label}
          </button>
        ))}
        <button
          style={{
            marginLeft: 'auto',
            background: 'none',
            border: 'none',
            color: '#6b7280',
            cursor: 'pointer',
            fontSize: '1.1rem',
            padding: '0.2rem 0.7rem',
            display: 'flex',
            alignItems: 'center',
          }}
          title="Copy to clipboard"
          onClick={() => navigator.clipboard.writeText(code)}
        >
          <svg width="18" height="18" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
            <rect x="6" y="6" width="9" height="9" rx="2" stroke="#6b7280" strokeWidth="1.5" fill="#f3f4f6"/>
            <rect x="3" y="3" width="9" height="9" rx="2" stroke="#6b7280" strokeWidth="1.5" fill="#f3f4f6"/>
          </svg>
        </button>
      </div>
      <Highlight code={code} language={language} theme={themes.vsLight}>
        {({ className, style, tokens, getLineProps, getTokenProps }: {
          className: string;
          style: React.CSSProperties;
          tokens: any[][];
          getLineProps: (input: any) => React.HTMLAttributes<HTMLDivElement>;
          getTokenProps: (input: any) => React.HTMLAttributes<HTMLSpanElement>;
        }) => (
          <pre className={className} style={{ ...style, background: 'none', margin: 0, padding: '1.1em 0.7em 1.1em 0.7em', fontSize: '1.01rem', overflow: 'auto', display: 'flex' }}>
            <code style={{ width: '100%', display: 'flex', flexDirection: 'column' }}>
              {tokens.map((line: any[], i: number) => (
                <div key={i} style={{ display: 'flex' }}>
                  <span style={{
                    display: 'inline-block',
                    width: 32,
                    color: '#b6b9c6',
                    userSelect: 'none',
                    textAlign: 'right',
                    paddingRight: 12,
                    fontSize: '0.98rem',
                    opacity: 0.7,
                  }}>{i + 1}</span>
                  <span {...getLineProps({ line, key: i })} style={{ display: 'inline-block', width: '100%' }}>
                    {line.map((token: any, key: number) => (
                      <span key={key} {...getTokenProps({ token, key })} />
                    ))}
                  </span>
                </div>
              ))}
            </code>
          </pre>
        )}
      </Highlight>
    </div>
  );
};

const CopyIcon = () => (
  <svg width="18" height="18" viewBox="0 0 20 20" fill="none" style={{ display: 'block' }} xmlns="http://www.w3.org/2000/svg">
    <rect x="6" y="6" width="9" height="9" rx="2" stroke="#2563eb" strokeWidth="1.5" fill="#fff"/>
    <rect x="3" y="3" width="9" height="9" rx="2" stroke="#2563eb" strokeWidth="1.5" fill="#fff"/>
  </svg>
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
        Welcome! This guide will help you get started with Guidera, a high-performance orchestration layer that replaces fragmented LLM access, eliminates compliance risk, and optimizes cost-performance through a single API.
      </p>
      <div style={{ fontSize: '1.13rem', marginBottom: 28, color: '#444' }}>
        <b>One contract. Every model. Complete trust.</b><br/>
        Companies plug into us—we handle the rest.
      </div>
      <h2 id="quickstart-why-matters" style={{ ...headingScrollMargin, color: PURPLE, fontWeight: 700, fontSize: '1.18rem', marginTop: 36, marginBottom: 10 }}>Why this matters</h2>
      <p style={{ fontSize: '1.07rem', marginBottom: 18 }}>
        Companies are burning $28K+/mo on LLMs with no control or governance. Legal and infra gaps are slowing enterprise AI—we turn chaos into one clean, intelligent pipe.
      </p>
      <h2 id="quickstart-capabilities" style={{ ...headingScrollMargin, color: PURPLE, fontWeight: 700, fontSize: '1.18rem', marginTop: 36, marginBottom: 10 }}>Key Capabilities</h2>
      <ul style={{ margin: '0 0 24px 20px', color: '#222', fontSize: '1.05rem' }}>
        <li>
          Intelligent automatic routing model system: <Link to="/docs/arms-routing" style={{ color: BLUE, textDecoration: 'underline', fontWeight: 600 }}>ARMS</Link>
        </li>
        <li>
          Enterprise-grade<Link to="/docs/compliance-engine" style={{ color: BLUE, textDecoration: 'underline', fontWeight: 600 }}> compliance</Link> (PII, policy, copyright, and more)
        </li>
        <li>
          Lightning-fast prompt<Link to="/docs/prompt-caching" style={{ color: BLUE, textDecoration: 'underline', fontWeight: 600 }}> caching</Link>
        </li>
        <li>
          Structured, machine-readable <Link to="/docs/structured-outputs" style={{ color: BLUE, textDecoration: 'underline', fontWeight: 600 }}>outputs</Link>
        </li>
        <li>
          Self-service <Link to="/docs/provisioning-api-keys" style={{ color: BLUE, textDecoration: 'underline', fontWeight: 600 }}>API key provisioning</Link>
        </li>
      </ul>
      <h2 id="quickstart-getting-started" style={{ ...headingScrollMargin, color: PURPLE, fontWeight: 700, fontSize: '1.18rem', marginTop: 36, marginBottom: 10 }}>Getting Started</h2>
      <ol style={{ margin: '0 0 0 24px', color: '#222', fontSize: '1.05rem', lineHeight: 1.7 }}>
        <li><b>Install the SDK</b></li>
      </ol>
      <InstallTabsBlock />
      <ol start={2} style={{ margin: '0 0 24px 24px', color: '#222', fontSize: '1.05rem', lineHeight: 1.7 }}>
        <li><b>Connect and generate a response</b></li>
      </ol>
      <IDECodeBlock />
      <h2 id="quickstart-customization" style={{ ...headingScrollMargin, color: PURPLE, fontWeight: 700, fontSize: '1.18rem', marginTop: 36, marginBottom: 10 }}>Customization Options</h2>
      <ul style={{ margin: '0 0 24px 20px', color: '#222', fontSize: '1.05rem' }}>
        <li><b>prefs:</b> Pass model preferences out of the ones registered to give that model a higher priority over others.</li>
        <li><b>cp_tradeoff_parameter:</b> Control the balance between cost and performance (0 = lowest cost, 1 = highest performance).</li>
        <li><b>compliance_enabled:</b> Enable or disable compliance checks per request.</li>
      </ul>
      <h2 id="quickstart-support" style={{ ...headingScrollMargin, color: PURPLE, fontWeight: 700, fontSize: '1.18rem', marginTop: 36, marginBottom: 10 }}>Support & Contact</h2>
      <p style={{ fontSize: '1.07rem', marginBottom: 18 }}>
        For integration help, feature requests, or support, contact the product team or refer to in-code docstrings and comments.<br/>
        You can also <a href="/#contact-footer" style={{ color: BLUE, textDecoration: 'underline', fontWeight: 600 }}>contact us here</a>.
      </p>
      <div style={{ marginTop: 36, color: '#444', fontSize: '1.05rem' }}>
        <b>Guidera: The future of LLM orchestration, today.</b>
      </div>
    </div>
  );
};

export default Quickstart; 