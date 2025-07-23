import React, { useState, useEffect } from 'react';
import { useDocsOnThisPage } from '../Docs';

const PURPLE = '#7c3aed'; // Use your project's purple color here
const BLUE = '#2563eb'; // Blue for the main heading

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

const ON_THIS_PAGE = [
  { label: 'Getting Started', anchor: 'getting-started' },
  { label: 'Pricing and Fees', anchor: 'pricing-and-fees' },
  { label: 'Models and Providers', anchor: 'models-and-providers' },
  { label: 'API Technical Specifications', anchor: 'api-technical-specifications' },
  { label: 'Privacy and Data Logging', anchor: 'privacy-and-data-logging' },
  { label: 'Credit and Billing Systems', anchor: 'credit-and-billing-systems' },
  { label: 'Account Management', anchor: 'account-management' },
];

const headingScrollMargin = { scrollMarginTop: 64 };

const faqs = [
  {
    section: 'Getting Started',
    qas: [
      {
        q: 'Why should I use Guidera?',
        a: 'Guidera puts full control of AI operations in your hands: you can dial the cost-versus-performance trade-off for every request, letting the router steer traffic to the cheapest model that still clears your quality bar. A built-in Compliance Engine scans prompts and responses for PII, jailbreaks, and regulatory red flags before anything leaves the gateway. The Prompt-Suggestion endpoint instantly rewrites raw queries into expertly engineered prompts to maximize model accuracy. Every generated answer passes an automatic Plagiarism Check to flag or filter content that isn’t original. Finally, you can lock in User-defined Model Preferences, prioritizing specific vendors, regions, or on-prem deployments so your stack always aligns with policy, budget, and latency needs.'
      },
      {
        q: 'How do I get started with Guidera?',
        a: 'Create an account at tilantra.com and choose one of our paid tier plans. You can then open our chatbot, insert your credentials and start working right away, or generate API keys from your dashboard and integrate Guidera directly into your own apps.'
      },
      {
        q: 'How do I get support?',
        a: 'The best way to get support is to contact us at tech@tilantra.com.'
      },
      {
        q: 'How do I get billed for my usage on Guidera?',
        a: 'Every model lists its rates on a “per-million-tokens” basis, with separate prices for prompt tokens and completion tokens. There are also models that charge per request, for images and for reasoning tokens, and those charges are shown on the Models page as well.\n\nWhen you send a call through Guidera, the provider returns the exact token (or request) count. We translate that into the appropriate cost, subtract it from your prepaid credits, and log the result. You can see a full, line-by-line record of this activity anytime in the Dashboard.'
      },
    ]
  },
  {
    section: 'Pricing and Fees',
    qas: [
      { q: 'What are the fees for using Guidera?', a: 'Details will be coming soon.' },
      { q: 'Is there a fee for using my own provider keys (BYOK)?', a: 'Details will be coming soon.' },
    ]
  },
  {
    section: 'Models and Providers',
    qas: [
      {
        q: 'What LLM models does Guidera support?',
        a: 'Guidera provides access to a wide variety of LLM models, including frontier models from major AI labs. Visit the models browser or use the models API for a complete list.'
      },
      {
        q: 'How frequently are new models added?',
        a: 'Guidera updates the model list weekly. If a model is missing, please contact us on tech@tilantra.com.'
      },
      
      {
        q: 'I am an inference provider, how can I get listed on Guidera?',
        a: 'See our requirements on the Providers page or contact us via email.'
      },
      {
        q: 'What is the expected latency/response time for different models?',
        a: 'End-to-end latency depends on the model you select: cost-efficient LLMs  respond in roughly 3–4 seconds, mid-tier models in 4-6 seconds, and premium high-accuracy models in 6–8 seconds.'
      },
      {
        q: 'How does model fallback work if a provider is unavailable?',
        a: 'If a provider returns an error, Guidera will automatically fall back to the next provider. This happens transparently and allows production apps to be much more resilient.'
      },
    ]
  },
  {
    section: 'API Technical Specifications',
    qas: [
      {
        q: 'What authentication methods are supported?',
        a: 'Guidera supports HTTP Bearer token authentication (using JWTs) for most API endpoints. Users authenticate by providing a valid token in the Authorization header. For certain admin operations, HTTP Basic Authentication (username and password) is also supported.'
      },
      {
        q: 'How are rate limits calculated?',
        a: 'Each user is allowed up to 5 requests per minute. The system uses a rolling 1-minute window to track requests per user. If you exceed your limit, you’ll receive a “rate limit exceeded” error and must wait until the next minute to make more requests.'
      },
      
      {
        q: 'What are the supported formats?',
        a: 'The API supports text only as of now. Images, PDFs, and other file types are coming soon.'
      },
      {
        q: 'How does streaming work?',
        a: 'When you make a request, the server streams progress updates and results in real time using server-sent events (SSE). This allows you to receive partial responses and see progress as soon as it’s available, rather than waiting for the entire operation to complete.'
      },
      {
        q: 'What SDK support is available?',
        a: 'The API is compatible with standard OpenAI-style SDKs and client libraries. You can use any OpenAI-compatible SDK to interact with the API. No custom SDK is required, just point your client to the API endpoint and use your credentials.'
      },
    ]
  },
  {
    section: 'Privacy and Data Logging',
    qas: [
      {
        q: 'What data is logged during API use?',
        a: 'The backend logs request metadata such as model selection, performance scores, cost calculations, and timing information for debugging and monitoring. Prompt and completion content are not logged by default. Sensitive information is excluded from logs to protect user privacy.'
      },
      {
        q: 'What data is logged during Chatroom use?',
        a: 'All conversations in the chatroom are stored locally on your device. Conversations will not sync across devices.'
      },
      {
        q: 'What third-party sharing occurs?',
        a: 'Your prompts and data are shared only with the selected model provider to generate responses, and with third-party APIs as needed for specific features (such as plagiarism checking). No other third-party sharing occurs, and privacy checks are applied to protect sensitive information.'
      },
    ]
  },
  {
    section: 'Credit and Billing Systems',
    qas: [
      { q: 'What purchase options exist?', a: 'Details will be coming soon.' },
      { q: 'Do credits expire?', a: 'Details will be coming soon.' },
      { q: 'My credits haven\'t showed up in my account', a: 'Details will be coming soon.' },
      { q: 'What\'s the refund policy?', a: 'Details will be coming soon.' },
      { q: 'How to monitor credit usage?', a: 'Details will be coming soon.' },
      { q: 'What free tier options exist?', a: 'Details will be coming soon.' },
      { q: 'How do volume discounts work?', a: 'Details will be coming soon.' },
      { q: 'What payment methods are accepted?', a: 'Details will be coming soon.' },
    ]
  },
  {
    section: 'Account Management',
    qas: [
      {
        q: 'How can I delete my account?',
        a: 'Go to the Settings page and click Manage Account. In the modal, select the Security tab and choose Delete Account. Unused credits will be lost.'
      },
      {
        q: 'How does team access work?',
        a: 'Team management is coming soon! For now, you can use provisioning API keys to share credits with your team.'
      },
      {
        q: 'What analytics are available?',
        a: 'The analytics dashboard provides a real-time overview of your API usage and efficiency. It displays key metrics such as total cost saved, compliance checks, content redactions, total requests, cost savings breakdown, model usage distribution, and a session activity summary. These insights help you track usage, monitor compliance, and optimize your AI operations for better performance and cost savings.'
      },
      {
        q: 'How can I contact support?',
        a: 'Contact our support team at tech@tilantra.com.'
      },
    ]
  },
];

const FAQ: React.FC = () => {
  const [open, setOpen] = useState<{ [key: string]: boolean }>({});
  const { setLinks } = useDocsOnThisPage();

  useEffect(() => {
    setLinks(ON_THIS_PAGE);
    return () => setLinks([]);
  }, [setLinks]);

  const toggle = (section: string, idx: number) => {
    setOpen((prev) => ({ ...prev, [`${section}-${idx}`]: !prev[`${section}-${idx}`] }));
  };

  return (
    <div style={{ maxWidth: 900, margin: '0 auto', color: '#222', fontFamily: 'inherit', padding: '2.5rem 0 3rem 0' }}>
      <h1 style={{ color: BLUE, fontWeight: 800, fontSize: '2.2rem', marginBottom: 18 }}>Frequently Asked Questions</h1>
      {faqs.map((section) => (
        <div key={section.section} style={{ marginBottom: 36 }}>
          <h2 id={section.section.toLowerCase().replace(/\s/g, '-')} style={{ ...headingScrollMargin, color: PURPLE, fontWeight: 700, fontSize: '1.18rem', marginTop: 36, marginBottom: 10 }}>{section.section}</h2>
          <div style={{ borderRadius: 8, border: '1px solid #eaecef', background: '#f9fafb', boxShadow: '0 1px 2px rgba(0,0,0,0.02)', padding: '1.2rem 1.5rem' }}>
            {section.qas.map((qa, idx) => (
              <div key={qa.q} style={{ marginBottom: 18 }}>
                <button
                  onClick={() => toggle(section.section, idx)}
                  style={{
                    background: 'none',
                    border: 'none',
                    color: '#111', // Make question text black
                    fontWeight: 600,
                    fontSize: '1.05rem',
                    cursor: 'pointer',
                    padding: 0,
                    marginBottom: 4,
                    textAlign: 'left',
                    width: '100%',
                    display: 'flex',
                    alignItems: 'center',
                  }}
                  aria-expanded={!!open[`${section.section}-${idx}`]}
                >
                  <span style={{ marginRight: 8 }}>{open[`${section.section}-${idx}`] ? '▼' : '▶'}</span>
                  {qa.q}
                </button>
                {open[`${section.section}-${idx}`] && (
                  <div style={{ marginTop: 8, color: '#444', fontSize: '1.04rem', lineHeight: 1.7 }}>
                    {qa.q === 'How do I get billed for my usage on Guidera?' ? (
                      <>
                        <p>
                          Every model lists its rates on a “per-million-tokens” basis, with separate prices for prompt tokens and completion tokens. There are also models that charge per request, for images and for reasoning tokens, and those charges are shown on the{' '}
                          <a href="/docs/models" style={{ color: '#2563eb', textDecoration: 'underline' }}>Models</a> page as well.
                        </p>
                        <p>
                          When you send a call through Guidera, the provider returns the exact token (or request) count. We translate that into the appropriate cost, subtract it from your prepaid credits, and log the result. You can see a full, line-by-line record of this activity anytime in the Dashboard.
                        </p>
                      </>
                    ) : qa.q === 'Why should I use Guidera?' ? (
                      <>
                        <p>Guidera puts full control of AI operations in your hands: you can dial the cost-versus-performance trade-off for every request, letting the router steer traffic to the cheapest model that still clears your quality bar.</p>
                        <p>A built-in Compliance Engine scans prompts and responses for PII, jailbreaks, and regulatory red flags before anything leaves the gateway. The Prompt-Suggestion endpoint instantly rewrites raw queries into expertly engineered prompts to maximize model accuracy. Every generated answer passes an automatic Plagiarism Check to flag or filter content that isn’t original.</p>
                        <p>Finally, you can lock in User-defined Model Preferences, prioritizing specific vendors, regions, or on-prem deployments so your stack always aligns with policy, budget, and latency needs.</p>
                      </>
                    ) : qa.q === 'What LLM models does Guidera support?' ? (
                      <>
                        <span>
                          Guidera provides access to a wide variety of LLM models, including frontier models from major AI labs. Visit the{' '}
                          <a href="/docs/models" style={{ color: '#2563eb', textDecoration: 'underline' }}>models</a> browser or use the models API for a complete list.
                        </span>
                      </>
                    ) : qa.q === 'I am an inference provider, how can I get listed on Guidera?' ? (
                      <span>
                        See our requirements on the{' '}
                        <a href="/docs/use-cases#for-providers" style={{ color: '#2563eb', textDecoration: 'underline' }}>Providers Page</a>
                        {' '}or contact us via email.
                      </span>
                    ) : (
                      qa.a
                    )}
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
      ))}
      <div style={{ marginTop: 48, color: '#444', fontSize: '1.05rem' }}>
        <b>Still have questions?</b> See the <a href="/docs/overview" style={{ color: PURPLE }}>API Reference</a> or <a href="/docs/community" style={{ color: PURPLE }}>Community</a> page, or contact support.
      </div>
  </div>
);
};

export default FAQ; 