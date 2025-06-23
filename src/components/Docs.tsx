import React, { useState } from 'react';

const sidebarLinks = [
  { section: 'Overview', items: ['Quickstart', 'FAQ', 'Principles', 'Models', 'Enterprise'] },
  { section: 'Features', items: [
    'Privacy and Logging', 'Model Routing', 'Provider Routing', 'Prompt Caching', 'Structured Outputs', 'Tool Calling', 'Images & PDFs', 'Message Transforms', 'Uptime Optimization', 'Web Search', 'Zero Completion Insurance', 'Provisioning API Keys'
  ] },
  { section: 'API Reference', items: [
    'Overview', 'Streaming', 'Limits', 'Authentication', 'Parameters', 'Errors', 'POSTCompletion', 'POSTChat completion', 'GETGet a generation', 'GETList available models', 'GETList endpoints for a model', 'GETList available providers', 'GETGet credits', 'POSTCreate a Coinbase charge', 'Authentication', 'API Keys'
  ] },
  { section: 'Use Cases', items: [
    'BYOK', 'Crypto API', 'OAuth PKCE', 'MCP Servers', 'For Providers', 'Reasoning Tokens', 'Usage Accounting', 'User Tracking'
  ] },
  { section: 'Community', items: ['Frameworks', 'Discord'] },
];

const codeBlockStyle: React.CSSProperties = {
  background: '#f6f8fa',
  borderRadius: '8px',
  padding: '1.1rem 1.2rem',
  fontFamily: 'Menlo, Monaco, Consolas, monospace',
  fontSize: '1rem',
  margin: '1.2rem 0',
  color: '#24292f',
  border: '1px solid #eaecef',
  overflowX: 'auto',
};

const sidebarStyle: React.CSSProperties = {
  minWidth: 260,
  maxWidth: 300,
  background: '#fff',
  borderRight: '1px solid #eaecef',
  padding: '2.5rem 1.5rem 2.5rem 2.5rem',
  height: '100vh',
  position: 'sticky',
  top: 0,
  alignSelf: 'flex-start',
  overflowY: 'auto',
};

const activeLinkStyle: React.CSSProperties = {
  color: '#2563eb',
  fontWeight: 600,
  background: '#f1f5f9',
  borderRadius: '6px',
  padding: '0.25rem 0.5rem',
};

const faqs = [
  { q: 'How do I integrate Tilantra?', a: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pellentesque euismod.' },
  { q: 'What models are supported?', a: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam euismod.' },
  { q: 'How does cost optimization work?', a: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nisi nisl aliquam nunc.' },
  { q: 'Is compliance built-in?', a: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam euismod, urna eu tincidunt.' },
  { q: 'Can I monitor usage in real time?', a: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pellentesque euismod.' },
  { q: 'How do I get support?', a: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam euismod.' },
];

const Docs: React.FC = () => {
  const [open, setOpen] = useState<number | null>(null);
  return (
    <div style={{ display: 'flex', background: '#f6f8fa', minHeight: '100vh', fontFamily: 'Inter, Segoe UI, Arial, sans-serif' }}>
      <aside style={sidebarStyle}>
        <div style={{ fontWeight: 700, fontSize: '1.25rem', marginBottom: '2.5rem', color: '#111' }}>Docs</div>
        <nav style={{ display: 'flex', flexDirection: 'column', gap: '2.2rem', fontSize: '1rem' }}>
          {sidebarLinks.map((section, idx) => (
            <div key={section.section}>
              <div style={{ fontWeight: 600, color: '#6b7280', fontSize: '0.98rem', marginBottom: '0.5rem', textTransform: 'uppercase', letterSpacing: '0.03em' }}>{section.section}</div>
              <ul style={{ listStyle: 'none', padding: 0, margin: 0, display: 'flex', flexDirection: 'column', gap: '0.3rem' }}>
                {section.items.map((item, i) => (
                  <li key={item}>
                    <a
                      href="#"
                      style={item === 'Quickstart' ? activeLinkStyle : { color: '#222', textDecoration: 'none', padding: '0.25rem 0.5rem', borderRadius: '6px', display: 'block' }}
                    >
                      {item}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </nav>
      </aside>
      <main style={{ flex: 1, padding: '3.5rem 2.5rem', maxWidth: 900, margin: '0 auto', background: '#fff', minHeight: '100vh', boxShadow: '0 0 0 1px #eaecef' }}>
        <div style={{ display: 'flex', alignItems: 'center', gap: '1.2rem', marginBottom: '2.5rem' }}>
          <div style={{ width: 40, height: 40, background: '#2563eb', borderRadius: '50%', display: 'flex', alignItems: 'center', justifyContent: 'center', color: '#fff', fontWeight: 700, fontSize: 22 }}>
            {/* Placeholder for logo */}
            <span>OR</span>
          </div>
          <span style={{ fontWeight: 700, fontSize: '1.3rem', color: '#222' }}>Quickstart</span>
        </div>
        <h1 style={{ fontSize: '2.1rem', fontWeight: 800, marginBottom: '1.2rem', color: '#111' }}>
          Quickstart
        </h1>
        <p style={{ fontSize: '1.08rem', color: '#374151', marginBottom: '2rem' }}>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pellentesque euismod, nisi eu consectetur, nisi nisl aliquam nunc.
        </p>
        <div style={{ display: 'flex', gap: '1.5rem', marginBottom: '2.5rem', flexWrap: 'wrap' }}>
          <div style={{ flex: 1, minWidth: 260 }}>
            <div style={{ fontWeight: 600, color: '#222', marginBottom: '0.5rem' }}>Using the OpenAI SDK</div>
            <div style={{ display: 'flex', gap: '0.5rem', marginBottom: '0.5rem' }}>
              <span style={{ color: '#2563eb', fontWeight: 600, fontSize: '0.98rem', background: '#e0e7ff', borderRadius: 4, padding: '0.1rem 0.5rem' }}>Python</span>
              <span style={{ color: '#2563eb', fontWeight: 600, fontSize: '0.98rem', background: '#e0e7ff', borderRadius: 4, padding: '0.1rem 0.5rem' }}>TypeScript</span>
            </div>
            <div style={codeBlockStyle}>
              {`from openai import OpenAI\n\nclient = OpenAI(\n  base_url=\"https://openrouter.ai/api/v1\",\n  api_key=\"<OPENROUTER_API_KEY>\",\n)\n\ncompletion = client.chat.completions.create(\n  extra_headers={\n    \"HTTP-Referer\": \"<YOUR_SITE_URL>\", # Optional. Site URL for rankings on openrouter.ai.\n    \"X-Title\": \"<YOUR_SITE_NAME>\", # Optional. Site title for rankings on openrouter.ai.\n  },\n  model=\"openai/gpt-4o\",\n  messages=[\n    {\"role\": \"user\",\"content\": \"What is the meaning of life?\"}\n  ]\n)\n\nprint(completion.choices[0].message.content)`}
            </div>
          </div>
          <div style={{ flex: 1, minWidth: 260 }}>
            <div style={{ fontWeight: 600, color: '#222', marginBottom: '0.5rem' }}>Using the OpenRouter API directly</div>
            <div style={{ display: 'flex', gap: '0.5rem', marginBottom: '0.5rem' }}>
              <span style={{ color: '#2563eb', fontWeight: 600, fontSize: '0.98rem', background: '#e0e7ff', borderRadius: 4, padding: '0.1rem 0.5rem' }}>Python</span>
              <span style={{ color: '#2563eb', fontWeight: 600, fontSize: '0.98rem', background: '#e0e7ff', borderRadius: 4, padding: '0.1rem 0.5rem' }}>TypeScript</span>
              <span style={{ color: '#2563eb', fontWeight: 600, fontSize: '0.98rem', background: '#e0e7ff', borderRadius: 4, padding: '0.1rem 0.5rem' }}>Shell</span>
            </div>
            <div style={codeBlockStyle}>
              {`import requests\nimport json\n\nresponse = requests.post(\n  url=\"https://openrouter.ai/api/v1/chat/completions\",\n  headers={\n    \"Authorization\": \"Bearer <OPENROUTER_API_KEY>\",\n    \"HTTP-Referer\": \"<YOUR_SITE_URL>\", # Optional. Site URL for rankings on openrouter.ai.\n    \"X-Title\": \"<YOUR_SITE_NAME>\", # Optional. Site title for rankings on openrouter.ai.\n  },\n  data=json.dumps({\n    \"model\": \"openai/gpt-4o\", # Optional\n    \"messages\": [\n      {\"role\": \"user\",\"content\": \"What is the meaning of life?\"}\n    ]\n  })\n)`}
            </div>
          </div>
        </div>
        <div style={{ fontWeight: 600, color: '#222', marginBottom: '0.5rem' }}>Using third-party SDKs</div>
        <div style={codeBlockStyle}>
          {`# See our frameworks documentation for more\n# information about using third-party SDKs.`}
        </div>
        <div style={{ marginTop: '2.5rem', color: '#6b7280', fontSize: '0.98rem' }}>
          Was this page helpful? <button style={{ background: '#e0e7ff', color: '#2563eb', border: 'none', borderRadius: 4, padding: '0.2rem 0.8rem', marginLeft: 8, cursor: 'pointer', fontWeight: 600 }}>Yes</button> <button style={{ background: '#e0e7ff', color: '#2563eb', border: 'none', borderRadius: 4, padding: '0.2rem 0.8rem', marginLeft: 8, cursor: 'pointer', fontWeight: 600 }}>No</button>
        </div>
        {/* FAQ Section */}
        <div style={{ marginTop: '3.5rem' }}>
          <h2 style={{ color: '#2563eb', fontWeight: 800, fontSize: '2rem', marginBottom: '2rem', textAlign: 'center' }}>Frequently Asked Questions</h2>
          <div style={{ display: 'flex', flexWrap: 'wrap', gap: '2.5rem', justifyContent: 'center' }}>
            {faqs.map((faq, i) => (
              <div key={faq.q} className="fade-in" style={{ flex: '1 1 340px', minWidth: 260, background: '#f6f8fa', borderRadius: '1.2rem', boxShadow: '0 2px 12px rgba(80,60,120,0.07)', padding: '2rem 1.5rem', marginBottom: '1.2rem', cursor: 'pointer', border: open === i ? '2px solid #2563eb' : '2px solid transparent', transition: 'border 0.2s' }} onClick={() => setOpen(open === i ? null : i)}>
                <div style={{ fontWeight: 700, fontSize: '1.15rem', color: open === i ? '#2563eb' : '#222', marginBottom: '0.7rem', display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
                  {faq.q}
                  <span style={{ fontSize: '1.3rem', color: open === i ? '#7c3aed' : '#2563eb', marginLeft: 8 }}>{open === i ? '−' : '+'}</span>
                </div>
                {open === i && <div style={{ color: '#374151', fontSize: '1.08rem', marginTop: '0.5rem', transition: 'opacity 0.3s' }}>{faq.a}</div>}
              </div>
            ))}
          </div>
        </div>
      </main>
    </div>
  );
};

export default Docs; 