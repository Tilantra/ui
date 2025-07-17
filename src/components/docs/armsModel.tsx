import React, { useEffect } from 'react';
import { useDocsOnThisPage } from '../Docs';

const PURPLE = '#7c3aed';
const BLUE = '#2563eb';
const headingScrollMargin = { scrollMarginTop: 64 };

const ON_THIS_PAGE = [
  { label: 'Overview', anchor: 'arms-overview' },
  { label: 'The Challenge of Model Selection', anchor: 'arms-challenge' },
  { label: 'What is ARMS Routing?', anchor: 'arms-what' },
  { label: 'How ARMS Works', anchor: 'arms-how' },
  { label: 'Real-World Scenarios', anchor: 'arms-scenarios' },
  { label: 'Key Benefits', anchor: 'arms-benefits' },
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

const ArmsModel: React.FC = () => {
  const { setLinks } = useDocsOnThisPage();
  useEffect(() => {
    setLinks(ON_THIS_PAGE);
    return () => setLinks([]);
  }, [setLinks]);

  return (
    <div style={{ maxWidth: 900, margin: '0 auto', color: '#222', fontFamily: 'inherit', padding: '2rem 0', background: '#fff' }}>
      <h1 id="arms-overview" style={{ color: BLUE, fontWeight: 800, fontSize: '2.2rem', marginBottom: 18 }}>ARMS Routing (Automatic Routing Model System)</h1>
      <p style={{ fontSize: '1.13rem', marginBottom: 28 }}>
        <b>ARMS</b> is the intelligent core of Model Swap Router, making real-time decisions about which model to use for every request—so you always get the best possible outcome, without the guesswork. It is designed for reliability, security, and seamless integration into your workflows.
      </p>
      <h2 id="arms-challenge" style={{ ...headingScrollMargin, color: PURPLE, fontWeight: 700, fontSize: '1.18rem', marginTop: 36, marginBottom: 10 }}>The Challenge of Model Selection</h2>
      <ul style={{ margin: '0 0 24px 20px', color: '#222', fontSize: '1.05rem' }}>
        <li>The LLM landscape is vast and rapidly evolving. Each provider (OpenAI, Anthropic, Google, Mistral, etc.) offers multiple models, each with unique strengths, weaknesses, and pricing.</li>
        <li>Manually choosing the best model for every prompt is not only time-consuming, but also requires deep technical knowledge and constant monitoring of model updates, outages, and pricing changes.</li>
        <li>The wrong model choice can lead to higher costs, slower responses, or subpar results for your users.</li>
      </ul>
      <h2 id="arms-what" style={{ ...headingScrollMargin, color: PURPLE, fontWeight: 700, fontSize: '1.18rem', marginTop: 36, marginBottom: 10 }}>What is ARMS Routing?</h2>
      <p style={{ fontSize: '1.07rem', marginBottom: 18 }}>
        <b>ARMS (Automatic Routing Model System)</b> acts as your AI operations expert, making real-time decisions about which model to use for every request. You always get the best possible outcome, without the guesswork.
      </p>
      <h2 id="arms-how" style={{ ...headingScrollMargin, color: PURPLE, fontWeight: 700, fontSize: '1.18rem', marginTop: 36, marginBottom: 10 }}>How ARMS Works</h2>
      <ol style={{ margin: '0 0 24px 24px', color: '#222', fontSize: '1.05rem', lineHeight: 1.7 }}>
        <li><b>Deep Prompt Understanding:</b> Every incoming prompt is analyzed using advanced machine learning to determine its intent and task type (e.g., coding, summarization, reasoning, story generation, data analysis, etc.). This classification leverages semantic understanding to accurately match prompts to the most suitable model category.</li>
        <li><b>Dynamic Model Ranking:</b> For each task type, ARMS maintains a live ranking of all available models, factoring in:
          <ul style={{ margin: '8px 0 8px 20px' }}>
            <li><b>Performance:</b> How well each model performs on similar tasks, based on historical data and real-world benchmarks.</li>
            <li><b>Cost:</b> Real-time token pricing for both input and output, so you never overpay.</li>
            <li><b>User Preferences:</b> Your cost-performance tradeoff parameter lets you prioritize speed, quality, or savings.</li>
            <li><b>Access Rights:</b> Only models you are authorized to use are considered.</li>
          </ul>
          These rankings are updated continuously, ensuring ARMS always has the latest information.
        </li>
        <li><b>Smart Model Selection & Fallback:</b> ARMS selects the top-ranked model for your prompt and initiates the request. If the chosen model is slow, unavailable, or returns an error, ARMS automatically retries with the next-best model—ensuring your users never experience downtime or degraded service. This fallback logic is seamless and invisible to the end user.</li>
        <li><b>Real-Time Streaming & Feedback:</b> As your request is processed, ARMS streams progress updates and partial results back to you. This means users see immediate feedback, even for long-running or complex tasks, improving perceived performance and trust.</li>
      </ol>
      <h2 id="arms-scenarios" style={{ ...headingScrollMargin, color: PURPLE, fontWeight: 700, fontSize: '1.18rem', marginTop: 36, marginBottom: 10 }}>Real-World Scenarios</h2>
      <ul style={{ margin: '0 0 24px 20px', color: '#222', fontSize: '1.05rem' }}>
        <li><b>Coding Help:</b> ARMS routes code generation prompts to models with the best track record for programming tasks, while balancing cost if you’re running at scale.</li>
        <li><b>Business Summaries:</b> For summarization, ARMS picks models known for concise, accurate outputs, and can switch to a cheaper model if cost is a concern.</li>
        <li><b>Creative Writing:</b> Story prompts are routed to models that excel at creativity and narrative flow.</li>
        <li><b>Enterprise Use:</b> If a provider is experiencing an outage or latency spike, ARMS automatically reroutes to another provider, so your business never stops.</li>
      </ul>
      <h2 id="arms-benefits" style={{ ...headingScrollMargin, color: PURPLE, fontWeight: 700, fontSize: '1.18rem', marginTop: 36, marginBottom: 10 }}>Key Benefits</h2>
      <ul style={{ margin: '0 0 24px 20px', color: '#222', fontSize: '1.05rem' }}>
        <li><b>Peace of Mind:</b> You never have to worry about model selection, outages, or cost overruns.</li>
        <li><b>Optimal Results:</b> Every prompt gets the best available model, every time.</li>
        <li><b>Scalability:</b> ARMS handles thousands of requests in parallel, adapting to your needs in real time.</li>
        <li><b>Transparency:</b> Progress and results are streamed live, so you’re always in the loop.</li>
      </ul>
      <div style={{ marginTop: 36, background: '#f6f8fa', borderRadius: 8, padding: '1.2em 1.2em 1.2em 1.2em', fontSize: '1.01rem', color: '#444', border: '1px solid #ece6fa' }}>
        <b>Tip:</b> Use the <span style={{ color: PURPLE }}>cp_tradeoff_parameter</span> to control the balance between cost and performance for every request.
        {codeBlock('response = guidera_client.generate(\n  prompt="...",\n  prefs={},\n  cp_tradeoff_parameter=0.7,\n  compliance_enabled=True\n)')}
      </div>
    </div>
  );
};

export default ArmsModel; 