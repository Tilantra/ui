import React, { useState } from 'react';
import { Highlight, themes } from 'prism-react-renderer';

interface Tab {
  label: string;
  language: string;
  code: string;
}

interface CodeBlockProps {
  code?: string;
  language?: string;
  tabs?: Tab[];
}

const CodeBlock: React.FC<CodeBlockProps> = ({ code, language = 'python', tabs }) => {
  const [tab, setTab] = useState(0);
  if (tabs && tabs.length > 0) {
    const { label, language, code } = tabs[tab];
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
        <div style={{ display: 'flex', background: '#f3f4f6', borderBottom: '1px solid #e5e7eb', padding: '0.2rem 0.7rem 0.2rem 0.7rem', gap: 8 }}>
          {tabs.map((t, i) => (
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
              <rect x="6" y="6" width="9" height="9" rx="2" stroke="#2563eb" strokeWidth="1.5" fill="#fff"/>
              <rect x="3" y="3" width="9" height="9" rx="2" stroke="#2563eb" strokeWidth="1.5" fill="#fff"/>
            </svg>
          </button>
        </div>
        <Highlight code={code} language={language} theme={themes.vsLight}>
          {({ className, style, tokens, getLineProps, getTokenProps }) => (
            <pre className={className} style={{ ...style, background: 'none', margin: 0, padding: '1.1em 0.7em 1.1em 0.7em', fontSize: '1.01rem', overflow: 'auto', display: 'flex' }}>
              <code style={{ width: '100%', display: 'flex', flexDirection: 'column' }}>
                {tokens.map((line, i) => (
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
                      {line.map((token, key) => (
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
  }
  // Single code block fallback
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
      <button
        style={{
          position: 'absolute',
          top: 10,
          right: 12,
          background: '#fff',
          color: '#2563eb',
          border: '1px solid #eaecef',
          borderRadius: 4,
          padding: '3px 12px',
          cursor: 'pointer',
          fontWeight: 600,
          fontSize: '0.95rem',
          boxShadow: '0 1px 2px rgba(0,0,0,0.03)',
          zIndex: 2,
        }}
        onClick={() => navigator.clipboard.writeText(code || '')}
      >
        Copy
      </button>
      <Highlight code={code || ''} language={language} theme={themes.vsLight}>
        {({ className, style, tokens, getLineProps, getTokenProps }) => (
          <pre className={className} style={{ ...style, background: 'none', margin: 0, padding: '1.1em 0.7em 1.1em 0.7em', fontSize: '1.01rem', overflow: 'auto', display: 'flex' }}>
            <code style={{ width: '100%', display: 'flex', flexDirection: 'column' }}>
              {tokens.map((line, i) => (
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
                    {line.map((token, key) => (
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

export default CodeBlock; 