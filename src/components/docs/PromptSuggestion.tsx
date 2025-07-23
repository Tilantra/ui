import React, { useEffect } from 'react';
import { useDocsOnThisPage } from '../Docs';

const PURPLE = '#7c3aed';
const BLUE = '#2563eb';
const headingScrollMargin = { scrollMarginTop: 64 };

const ON_THIS_PAGE = [
  { label: 'Overview', anchor: 'prompt-overview' },
  { label: 'The Challenge of Prompt Engineering', anchor: 'prompt-challenge' },
  { label: 'What is Prompt Suggestion?', anchor: 'prompt-what' },
  { label: 'How Prompt Suggestion Works', anchor: 'prompt-how' },
  { label: 'Real-World Scenarios', anchor: 'prompt-scenarios' },
  { label: 'Key Benefits', anchor: 'prompt-benefits' },
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

const PromptSuggestion: React.FC = () => {
  const { setLinks } = useDocsOnThisPage();
  useEffect(() => {
    setLinks(ON_THIS_PAGE);
    return () => setLinks([]);
  }, [setLinks]);

  return (
    <div style={{ maxWidth: 900, margin: '0 auto', color: '#222', fontFamily: 'inherit', padding: '2rem 0', background: '#fff' }}>
      <h1 id="prompt-overview" style={{ color: BLUE, fontWeight: 800, fontSize: '2.2rem', marginBottom: 18 }}>Prompt Suggestion</h1>
      <p style={{ fontSize: '1.13rem', marginBottom: 28 }}>
        <b>Prompt Suggestion</b> is your AI-powered assistant for crafting high-quality prompts. It analyzes your raw input and generates multiple, expertly engineered prompt templates—so you get better results from any model, every time. Built on advanced LLMs and real-world prompt data, it takes the guesswork out of prompt engineering.
      </p>
      <h2 id="prompt-challenge" style={{ ...headingScrollMargin, color: PURPLE, fontWeight: 700, fontSize: '1.18rem', marginTop: 36, marginBottom: 10 }}>The Challenge of Prompt Engineering</h2>
      <ul style={{ margin: '0 0 24px 20px', color: '#222', fontSize: '1.05rem' }}>
        <li>Writing effective prompts is hard, small changes can dramatically impact model quality, cost, and safety.</li>
        <li>Most users lack the time or expertise to engineer optimal prompts for every use case.</li>
        <li>Manual trial-and-error is slow, inconsistent, and doesn't scale for teams or production apps.</li>
      </ul>
      <h2 id="prompt-what" style={{ ...headingScrollMargin, color: PURPLE, fontWeight: 700, fontSize: '1.18rem', marginTop: 36, marginBottom: 10 }}>What is Prompt Suggestion?</h2>
      <p style={{ fontSize: '1.07rem', marginBottom: 18 }}>
        <b>Prompt Suggestion</b> leverages a combination of machine learning and curated prompt libraries to instantly generate multiple, high-quality prompt templates tailored to your task. Whether you're coding, summarizing, analyzing data, or writing creatively, Prompt Suggestion helps you get the best out of any LLM.
      </p>
      <h2 id="prompt-how" style={{ ...headingScrollMargin, color: PURPLE, fontWeight: 700, fontSize: '1.18rem', marginTop: 36, marginBottom: 10 }}>How Prompt Suggestion Works</h2>
      <ol style={{ margin: '0 0 24px 24px', color: '#222', fontSize: '1.05rem', lineHeight: 1.7 }}>
        <li><b>Task Classification:</b> Your input is analyzed using a classification model to predict the most relevant task categories (e.g., coding, summarization, reasoning, etc.).</li>
        <li><b>Reference Prompt Retrieval:</b> For each predicted category, the system retrieves the best reference prompts from a curated dataset, using both category mapping and semantic similarity search.</li>
        <li><b>LLM-Driven Generation:</b> An advanced LLM is prompted with your query and the reference prompts to generate several new, high-quality prompt templates. These are designed to be clear, actionable, and adaptable to your needs.</li>
        <li><b>Diversity & Quality Scoring:</b> The generated prompts are scored and filtered for diversity, clarity, and professional tone, ensuring you get a range of effective options.</li>
        <li><b>Fallback Logic:</b> If the LLM fails or is unavailable, the system falls back to template-based prompt generation, so you always get a useful result.</li>
      </ol>
      <h2 id="prompt-scenarios" style={{ ...headingScrollMargin, color: PURPLE, fontWeight: 700, fontSize: '1.18rem', marginTop: 36, marginBottom: 10 }}>Real-World Scenarios</h2>
      <ul style={{ margin: '0 0 24px 20px', color: '#222', fontSize: '1.05rem' }}>
        <li><b>Developers:</b> Instantly generate prompt templates for code generation, debugging, or documentation tasks.</li>
        <li><b>Business Users:</b> Get expert-level prompts for summarizing reports, analyzing data, or drafting emails.</li>
        <li><b>Creative Writers:</b> Receive diverse prompt templates for story generation, brainstorming, or rewriting content.</li>
        <li><b>Enterprise:</b> Standardize prompt quality across teams and workflows, reducing risk and improving outcomes.</li>
      </ul>
      <h2 id="prompt-benefits" style={{ ...headingScrollMargin, color: PURPLE, fontWeight: 700, fontSize: '1.18rem', marginTop: 36, marginBottom: 10 }}>Key Benefits</h2>
      <ul style={{ margin: '0 0 24px 20px', color: '#222', fontSize: '1.05rem' }}>
        <li><b>Better Results:</b> Get more accurate, relevant, and actionable responses from any LLM.</li>
        <li><b>Time Savings:</b> Eliminate manual prompt engineering and trial-and-error.</li>
        <li><b>Consistency:</b> Standardize prompt quality across users, teams, and applications.</li>
        <li><b>Adaptability:</b> Prompts are tailored to your specific task and context, not just generic templates.</li>
        <li><b>Reliability:</b> Fallback logic ensures you always get a suggestion, even if the LLM is unavailable.</li>
      </ul>
      <div style={{ marginTop: 36, background: '#f6f8fa', borderRadius: 8, padding: '1.2em 1.2em 1.2em 1.2em', fontSize: '1.01rem', color: '#444', border: '1px solid #ece6fa' }}>
        <b>Tip:</b> Use the <span style={{ color: PURPLE }}>/suggestion</span> endpoint to get instant prompt suggestions for any user query.
        {codeBlock('response = guidera_client.suggest(\n  prompt="Explain quantum computing in simple terms"\n)')}
      </div>
    </div>
  );
};

export default PromptSuggestion; 