import React, { useRef, useState } from 'react';
import '../App.css';

const PREDEFINED_PROMPTS = [
  "Tell me about Tilantra's services",
  "How can I get started?",
  "What are your pricing plans?",
  "Contact sales team",
  "What industries do you serve?",
  "Can I customize the model for my needs?"
];

const COMPLIANCE_REPORT = `Chance of copyright: 1%
Identified third party elements: None
Compliance check: PASSED`;

const API_BASE_URL = 'http://localhost:8000'; // Model-swap-router API URL

const fallbackResponses = (prompt: string) => {
  const lowerPrompt = prompt.toLowerCase();
  if (lowerPrompt.includes('tilantra') && lowerPrompt.includes('service')) {
    return {
      text: "Tilantra offers cutting-edge AI model routing services that intelligently select the best AI model for your specific needs. Our platform analyzes your prompts and automatically routes them to the most suitable model based on performance, cost, and task requirements. We support multiple leading AI providers including OpenAI, Anthropic, Google, and more.",
      model: 'Demo Mode',
    };
  }
  if (lowerPrompt.includes('get started') || lowerPrompt.includes('how to start')) {
    return {
      text: "Getting started with Tilantra is easy! Simply sign up for an account, configure your preferences, and start sending prompts through our API. Our intelligent routing system will automatically select the best model for each request. You can also customize cost-performance tradeoffs and set model preferences based on your specific use case.",
      model: 'Demo Mode',
    };
  }
  if (lowerPrompt.includes('pricing') || lowerPrompt.includes('cost')) {
    return {
      text: "Our pricing is transparent and based on actual model usage. You only pay for what you use, with no hidden fees. We offer competitive rates and can help optimize costs by selecting the most cost-effective models for your specific tasks. Contact our sales team for detailed pricing information and custom enterprise plans.",
      model: 'Demo Mode',
    };
  }
  if (lowerPrompt.includes('contact') || lowerPrompt.includes('sales')) {
    return {
      text: "Our sales team is ready to help you get the most out of Tilantra's AI routing platform. You can reach us at sales@tilantra.com or schedule a demo to see our system in action. We'll work with you to understand your specific needs and provide a customized solution.",
      model: 'Demo Mode',
    };
  }
  if (lowerPrompt.includes('industry') || lowerPrompt.includes('serve')) {
    return {
      text: "Tilantra serves a wide range of industries including technology, healthcare, finance, education, e-commerce, and more. Our AI routing platform is particularly valuable for companies that need reliable, cost-effective AI solutions across multiple use cases. Whether you're building chatbots, content generation systems, or data analysis tools, we can help optimize your AI infrastructure.",
      model: 'Demo Mode',
    };
  }
  if (lowerPrompt.includes('customize') || lowerPrompt.includes('custom')) {
    return {
      text: "Yes, you can fully customize the model selection for your needs! Our platform allows you to set preferences for specific models, adjust cost-performance tradeoffs, and even create custom routing rules. You can also integrate with your existing AI infrastructure and set up automated workflows tailored to your business requirements.",
      model: 'Demo Mode',
    };
  }
  return {
    text: "Thank you for your question! I'm here to help you learn more about Tilantra's AI model routing services. Our platform intelligently selects the best AI model for your specific needs, optimizing for performance, cost, and reliability. Feel free to ask about our services, pricing, or how to get started.",
    model: 'Demo Mode',
  };
};

interface Message {
  sender: 'user' | 'bot';
  text: string;
  model?: string;
}

const ChatbotSection: React.FC = () => {
  const [messages, setMessages] = useState<Message[]>([]);
  const [input, setInput] = useState('');
  const [loading, setLoading] = useState(false);

  const handlePrompt = async (prompt: string) => {
    setMessages(msgs => [...msgs, { sender: 'user', text: prompt }]);
    setLoading(true);
    setTimeout(() => {
      const resp = fallbackResponses(prompt);
      setMessages(msgs => [...msgs, { sender: 'bot', text: resp.text, model: resp.model }]);
      setLoading(false);
    }, 2000);
  };

  const handleSend = async () => {
    if (!input.trim()) return;
    await handlePrompt(input.trim());
    setInput('');
  };

  return (
    <section id="tilantra-assistant" style={{ background: '#fff', padding: '3rem 0', borderTop: '1px solid #ece6fa', borderBottom: '1px solid #ece6fa' }}>
      <div style={{ maxWidth: 1100, margin: '0 auto', display: 'flex', gap: '2.5rem', alignItems: 'flex-start', boxShadow: '0 2px 24px rgba(80,60,120,0.06)', borderRadius: 24, background: '#fff', padding: '2.5rem 2rem' }}>
        {/* Chat area */}
        <div style={{ flex: 2, minWidth: 0, display: 'flex', flexDirection: 'column', height: 420, borderRight: '1.5px solid #ece6fa', paddingRight: '2rem' }}>
          <div style={{ fontWeight: 800, fontSize: '1.5rem', marginBottom: '1.2rem', color: '#2563eb', letterSpacing: '0.01em' }}>Tilantra Assistant</div>
          <div style={{ marginBottom: '1.2rem', color: '#7c3aed', fontWeight: 500, fontSize: '1.08rem' }}>
            This is only for a basic demo, please <a href="#contact-footer" style={{ color: '#2563eb', textDecoration: 'underline', cursor: 'pointer' }} onClick={e => { e.preventDefault(); document.getElementById('contact-footer')?.scrollIntoView({ behavior: 'smooth' }); }}>reach out</a> for a full demo.
          </div>
          <div style={{ flex: 1, overflowY: 'auto', marginBottom: '1.2rem', background: '#f8f8fc', borderRadius: 12, padding: '1.2rem', border: '1px solid #ece6fa' }}>
            {messages.map((msg, i) => (
              <div key={i} style={{
                marginBottom: '1.1rem',
                textAlign: msg.sender === 'user' ? 'right' : 'left',
                display: 'flex',
                flexDirection: msg.sender === 'user' ? 'row-reverse' : 'row',
                alignItems: 'flex-end',
              }}>
                <div style={{
                  background: msg.sender === 'user' ? 'linear-gradient(90deg, #e0e7ff 0%, #c7d2fe 100%)' : '#fff',
                  color: '#222',
                  borderRadius: msg.sender === 'user' ? '18px 18px 4px 18px' : '18px 18px 18px 4px',
                  padding: '0.9rem 1.2rem',
                  fontSize: '1.08rem',
                  boxShadow: '0 1px 6px 0 rgba(124,58,237,0.07)',
                  maxWidth: 340,
                  minWidth: 60,
                  wordBreak: 'break-word',
                  border: msg.sender === 'user' ? '1.5px solid #c7d2fe' : '1.5px solid #ece6fa',
                  fontWeight: msg.sender === 'user' ? 600 : 400,
                  position: 'relative',
                }}>
                  {msg.sender === 'bot' && (
                    <div style={{ fontSize: '0.85rem', color: '#7c3aed', fontWeight: 600, marginBottom: 4, marginTop: -2 }}>
                      Model: {msg.model || 'Demo Mode'}
                    </div>
                  )}
                  <div>{msg.text}</div>
                  {msg.sender === 'bot' && (
                    <div style={{ marginTop: 10 }}>
                      <div style={{ fontSize: '0.93rem', color: '#bfa14a', fontWeight: 500, marginBottom: 2 }}>Compliance Report</div>
                      <pre style={{ background: 'rgba(191,161,74,0.07)', color: '#bfa14a', borderRadius: 6, padding: '0.7em 1em', fontSize: '0.97em', marginTop: '0.3em', whiteSpace: 'pre-line', fontFamily: 'inherit' }}>{COMPLIANCE_REPORT}</pre>
                    </div>
                  )}
                </div>
              </div>
            ))}
            {loading && (
              <div style={{ display: 'flex', alignItems: 'center', gap: '0.7rem', margin: '1.1rem 0' }}>
                <div style={{ width: 22, height: 22, border: '3px solid #c7d2fe', borderTop: '3px solid #7c3aed', borderRadius: '50%', animation: 'spin 1s linear infinite' }} />
                <span style={{ color: '#7c3aed', fontWeight: 600, fontSize: '1.08rem' }}>Thinking...</span>
              </div>
            )}
          </div>
          <div style={{ display: 'flex', gap: '0.7rem', alignItems: 'center' }}>
            <input
              type="text"
              placeholder="Type your question..."
              value={input}
              onChange={e => setInput(e.target.value)}
              onKeyDown={e => { if (e.key === 'Enter') handleSend(); }}
              disabled={loading}
              style={{
                flex: 1,
                background: '#fff',
                border: '1.5px solid #ece6fa',
                borderRadius: 8,
                padding: '0.9rem 1.1rem',
                fontSize: '1.08rem',
                outline: 'none',
                color: '#222',
                fontWeight: 500,
                boxShadow: '0 1px 6px 0 rgba(124,58,237,0.04)',
              }}
            />
            <button
              onClick={handleSend}
              disabled={loading || !input.trim()}
              style={{
                background: 'linear-gradient(90deg, #7c3aed 0%, #2563eb 100%)',
                color: '#fff',
                border: 'none',
                borderRadius: 8,
                padding: '0.9rem 2.1rem',
                fontWeight: 700,
                fontSize: '1.08rem',
                cursor: loading || !input.trim() ? 'not-allowed' : 'pointer',
                boxShadow: '0 2px 12px 0 rgba(124,58,237,0.10)',
                transition: 'background 0.2s',
              }}
            >Send</button>
          </div>
        </div>
        {/* Prompts column */}
        <div style={{ flex: 1, minWidth: 220, paddingLeft: '2rem', display: 'flex', flexDirection: 'column', gap: '1.2rem' }}>
          <div style={{ fontWeight: 700, fontSize: '1.13rem', color: '#7c3aed', marginBottom: '0.7rem', letterSpacing: '0.01em' }}>Quick Prompts</div>
          <div style={{ display: 'flex', flexDirection: 'column', gap: '0.7rem' }}>
            {PREDEFINED_PROMPTS.map((prompt, i) => (
              <button
                key={i}
                onClick={() => handlePrompt(prompt)}
                disabled={loading}
                style={{
                  background: '#f3f0ff',
                  border: '1.5px solid #ece6fa',
                  borderRadius: 8,
                  padding: '0.9rem 1.1rem',
                  color: '#222',
                  fontWeight: 600,
                  fontSize: '1.05rem',
                  textAlign: 'left',
                  cursor: loading ? 'not-allowed' : 'pointer',
                  boxShadow: '0 1px 6px 0 rgba(124,58,237,0.04)',
                  transition: 'background 0.2s',
                }}
              >{prompt}</button>
            ))}
          </div>
        </div>
      </div>
      {/* Spinner keyframes */}
      <style>{`
        @keyframes spin { 0% { transform: rotate(0deg); } 100% { transform: rotate(360deg); } }
      `}</style>
    </section>
  );
};

export default ChatbotSection; 