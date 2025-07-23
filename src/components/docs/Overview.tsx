import React from 'react';
import CodeBlock from './CodeBlock';

const Overview: React.FC = () => (
  <div style={{ maxWidth: 900, margin: '0 auto', color: '#222', fontFamily: 'inherit', padding: '2rem 0' }}>
    <h1 style={{ color: '#2563eb', fontWeight: 800, fontSize: '2.2rem', marginBottom: 18 }}>API Reference</h1>
    <p style={{ fontSize: '1.13rem', marginBottom: 28 }}>
      <strong>Guidera</strong> is a unified API for accessing the best large language models from multiple providers. With a single integration, you can route requests, optimize costs, and ensure compliance. Guidera automatically selects the best model and provider for your needs, supports built-in logging, PII redaction, audit trails, and cost optimization to minimize spend while maximizing performance. All requests require authentication via Bearer token in the Authorization header.
    </p>

    <h2 style={{ color: '#7c3aed', fontWeight: 700, fontSize: '1.18rem', marginTop: 36, marginBottom: 10 }}>Authentication</h2>
    <p style={{ fontSize: '1.05rem', marginBottom: 20 }}>
      All API requests require authentication using a Bearer token. Include your token in the Authorization header:
    </p>
    <CodeBlock code={`Authorization: Bearer YOUR_API_TOKEN`} language="bash" />
    
    <h2 style={{ color: '#7c3aed', fontWeight: 700, fontSize: '1.18rem', marginTop: 36, marginBottom: 10 }}>Endpoints</h2>
    <table style={{ width: '100%', borderCollapse: 'collapse', margin: '1.5em 0', fontSize: '1.05rem' }}>
      <thead>
        <tr style={{ background: '#f6f8fa' }}>
          <th style={{ padding: '0.7rem', border: '1px solid #ece6fa' }}>Endpoint</th>
          <th style={{ padding: '0.7rem', border: '1px solid #ece6fa' }}>Method</th>
          <th style={{ padding: '0.7rem', border: '1px solid #ece6fa' }}>Description</th>
        </tr>
      </thead>
      <tbody>
        <tr>
          <td style={{ padding: '0.7rem', border: '1px solid #ece6fa' }}>/generate</td>
          <td style={{ padding: '0.7rem', border: '1px solid #ece6fa' }}>POST</td>
          <td style={{ padding: '0.7rem', border: '1px solid #ece6fa' }}>Generate AI responses with intelligent model routing and cost optimization.</td>
        </tr>
        <tr>
          <td style={{ padding: '0.7rem', border: '1px solid #ece6fa' }}>/suggestion</td>
          <td style={{ padding: '0.7rem', border: '1px solid #ece6fa' }}>POST</td>
          <td style={{ padding: '0.7rem', border: '1px solid #ece6fa' }}>
            Provides high-engineered prompt suggestions to improve model response accuracy.
          </td>
        </tr>
      </tbody>
    </table>

    <h2 style={{ color: '#7c3aed', fontWeight: 700, fontSize: '1.18rem', marginTop: 36, marginBottom: 10 }}>Generate Response</h2>
    <p style={{ fontSize: '1.05rem', marginBottom: 20 }}>
      The main endpoint for generating AI responses with intelligent model selection based on task categorization, performance rankings, and cost optimization.
    </p>

    <h4 style={{ color: '#6b7280', fontWeight: 600, fontSize: '1rem', marginTop: 20, marginBottom: 8 }}>Request</h4>
    <CodeBlock tabs={[
      {label: 'Python', language: 'python', code: 'import guidera\nguidera_client = guidera.Client()\nresponse = guidera_client.generate(\n    prompt="Write a optimised code to print the first n prime numbers.",\n    prefs={},\n    cp_tradeoff_parameter=0.9,\n    compliance_enabled=True\n)\nprint(response)'},
      {label: 'TypeScript', language: 'typescript', code: 'import { Guidera } from "guidera";\nconst guideraClient = new Guidera();\nconst response = await guideraClient.generate({\n  prompt: "Write a optimised code to print the first n prime numbers.",\n  prefs: {},\n  cp_tradeoff_parameter: 0.9,\n  compliance_enabled: true\n});\nconsole.log(response);'},
      {label: 'Shell', language: 'bash', code: 'curl -X POST https://api.guidera.com/generate \\n  -H "Authorization: Bearer YOUR_API_TOKEN" \\n  -H "Content-Type: application/json" \\n  -d \'{"prompt": "Write a optimised code to print the first n prime numbers.", "prefs": {}, "cp_tradeoff_parameter": 0.9, "compliance_enabled": true}\''}
    ]} />

    <h4 style={{ color: '#6b7280', fontWeight: 600, fontSize: '1rem', marginTop: 20, marginBottom: 8 }}>Parameters</h4>
    <table style={{ width: '100%', borderCollapse: 'collapse', margin: '1.5em 0', fontSize: '1.05rem' }}>
      <thead>
        <tr style={{ background: '#f6f8fa' }}>
          <th style={{ padding: '0.7rem', border: '1px solid #ece6fa' }}>Parameter</th>
          <th style={{ padding: '0.7rem', border: '1px solid #ece6fa' }}>Type</th>
          <th style={{ padding: '0.7rem', border: '1px solid #ece6fa' }}>Required</th>
          <th style={{ padding: '0.7rem', border: '1px solid #ece6fa' }}>Description</th>
        </tr>
      </thead>
      <tbody>
        <tr>
          <td style={{ padding: '0.7rem', border: '1px solid #ece6fa' }}>prompt</td>
          <td style={{ padding: '0.7rem', border: '1px solid #ece6fa' }}>string</td>
          <td style={{ padding: '0.7rem', border: '1px solid #ece6fa' }}>Yes</td>
          <td style={{ padding: '0.7rem', border: '1px solid #ece6fa' }}>The input prompt for AI generation.</td>
        </tr>
        <tr>
          <td style={{ padding: '0.7rem', border: '1px solid #ece6fa' }}>prefs</td>
          <td style={{ padding: '0.7rem', border: '1px solid #ece6fa' }}>object</td>
          <td style={{ padding: '0.7rem', border: '1px solid #ece6fa' }}>No</td>
          <td style={{ padding: '0.7rem', border: '1px solid #ece6fa' }}>Model preferences as a dictionary (e.g., <code>{`{"model": "gpt-4o"}`}</code>). Can be left empty <code>{`{}`}</code> for default routing.</td>
        </tr>
        <tr>
          <td style={{ padding: '0.7rem', border: '1px solid #ece6fa' }}>cp_tradeoff_parameter</td>
          <td style={{ padding: '0.7rem', border: '1px solid #ece6fa' }}>float</td>
          <td style={{ padding: '0.7rem', border: '1px solid #ece6fa' }}>No</td>
          <td style={{ padding: '0.7rem', border: '1px solid #ece6fa' }}>Cost-performance tradeoff (0.0-1.0). Higher values favor performance over cost.</td>
        </tr>
        <tr>
          <td style={{ padding: '0.7rem', border: '1px solid #ece6fa' }}>compliance_enabled</td>
          <td style={{ padding: '0.7rem', border: '1px solid #ece6fa' }}>boolean</td>
          <td style={{ padding: '0.7rem', border: '1px solid #ece6fa' }}>No</td>
          <td style={{ padding: '0.7rem', border: '1px solid #ece6fa' }}>Enable compliance checks for input and output validation.</td>
        </tr>
      </tbody>
    </table>

    <h4 style={{ color: '#6b7280', fontWeight: 600, fontSize: '1rem', marginTop: 20, marginBottom: 8 }}>Response</h4>
    <p style={{ fontSize: '1.05rem', marginBottom: 20 }}>
      The response includes:
      <ul style={{ margin: '8px 0 0 20px', fontSize: '1.05rem' }}>
        <li><b>model_id</b>: The model selected for your prompt.</li>
        <li><b>compliance_report</b>: Shows pass/fail, checks for plagiarism, and other compliance results.</li>
        <li><b>cost_performance_message</b>: Explains the accuracy of the response and the cost savings achieved.</li>
      </ul>
    </p>
    <CodeBlock code={`{
  "response": "def fibonacci(n):\n    if n <= 1:\n        return n\n    return fibonacci(n-1) + fibonacci(n-2)",
  "model_id": "gpt-4",
  "compliance_report": {
    "status": "pass",
    "plagiarism": false,
    "details": "No compliance issues detected."
  },
  "cost_performance_message": "Selected gpt-4 for high accuracy. Cost optimized: saved 30% compared to default."
}`} language="json" />

    <h2 style={{ color: '#7c3aed', fontWeight: 700, fontSize: '1.18rem', marginTop: 36, marginBottom: 10 }}>Model Suggestions</h2>
    <p style={{ fontSize: '1.05rem', marginBottom: 20 }}>
      Get high-engineered prompt suggestions that help achieve more accurate responses from models.
    </p>

    <h4 style={{ color: '#6b7280', fontWeight: 600, fontSize: '1rem', marginTop: 20, marginBottom: 8 }}>Request</h4>
    <CodeBlock code={`POST /suggestion
Authorization: Bearer YOUR_API_TOKEN
Content-Type: application/json

{
  "prompt": "Explain quantum computing in simple terms"
}`} language="json" />

    <h4 style={{ color: '#6b7280', fontWeight: 600, fontSize: '1rem', marginTop: 20, marginBottom: 8 }}>Response</h4>
    <p style={{ fontSize: '1.05rem', marginBottom: 20 }}>
      Returns 3 engineered prompt suggestions to improve response accuracy:
    </p>
    <CodeBlock code={`{
  "suggestion_1": "As a quantum physics expert, explain quantum computing in simple, everyday language that a high school student would understand, using analogies and avoiding technical jargon.",
  "suggestion_2": "Please provide a beginner-friendly explanation of quantum computing, breaking down the core concepts step-by-step with practical examples of how it differs from classical computing.",
  "suggestion_3": "Act as a science communicator and explain quantum computing using simple terms, focusing on what makes it revolutionary and how it might impact everyday life in the future."
}`} language="json" />

    <h2 style={{ color: '#7c3aed', fontWeight: 700, fontSize: '1.18rem', marginTop: 36, marginBottom: 10 }}>Supported Models</h2>
    <p style={{ fontSize: '1.05rem', marginBottom: 20 }}>
      To see all the models available, check the <a href="/docs/models" style={{ color: '#2563eb', textDecoration: 'underline', fontWeight: 500 }}>Models</a> page.
    </p>

    <h2 style={{ color: '#7c3aed', fontWeight: 700, fontSize: '1.18rem', marginTop: 36, marginBottom: 10 }}>Task Categories</h2>
    <p style={{ fontSize: '1.05rem', marginBottom: 20 }}>
      Guidera automatically categorizes prompts into task types for optimal model selection:
    </p>
    <ul style={{ fontSize: '1.05rem', marginBottom: 20, paddingLeft: '1.5rem' }}>
      <li><strong>coding</strong> - Programming and code generation</li>
      <li><strong>reasoning</strong> - Logical reasoning and problem solving</li>
      <li><strong>data_analysis</strong> - Data processing and analysis</li>
      <li><strong>maths</strong> - Mathematical calculations and proofs</li>
      <li><strong>language</strong> - Language processing and generation</li>
      <li><strong>paraphrasing</strong> - Text rewriting and summarization</li>
      <li><strong>story_generation</strong> - Creative writing and storytelling</li>
      <li><strong>summarize</strong> - Text summarization and extraction</li>
    </ul>

    <h2 style={{ color: '#7c3aed', fontWeight: 700, fontSize: '1.18rem', marginTop: 36, marginBottom: 10 }}>API Reference</h2>
    <p style={{ fontSize: '1.05rem', marginBottom: 20 }}>
      For detailed request/response schemas, error handling, and all supported parameters, see the <a href="/docs/api-reference" style={{ color: '#2563eb', textDecoration: 'underline', fontWeight: 500 }}>API Reference</a>.
    </p>
  </div>
);

export default Overview; 