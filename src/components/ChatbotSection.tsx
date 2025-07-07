import React, { useRef, useState, useEffect } from 'react';
import '../App.css';

const DEMO_EXAMPLES = [
  {
    prompt: "Write a fun bedtime story about a clever fox and a wise owl for children.",
    response: "Once upon a time, in a moonlit forest, a clever fox and a wise old owl became unlikely friends. Each night, they shared stories and solved mysteries together, teaching all the woodland animals the value of teamwork and kindness.",
    model: "Ollama o4-mini",
    compliance: {
      plagiarism: "47%",
      thirdParty: "Story elements resemble 'The Fox and the Grapes' and 'The Owl and the Pussycat'",
      policyViolated: false,
      policyReason: "",
      status: "PASSED"
    }
  },
  {
    prompt: "I'm experiencing chest pain and shortness of breath. What should I do?",
    response: "I'm not able to provide medical advice. If you are experiencing chest pain or shortness of breath, please seek immediate help from a healthcare professional or call emergency services.",
    model: "Qwen-1.5-72B",
    compliance: {
      plagiarism: "0%",
      thirdParty: "None",
      policyViolated: true,
      policyReason: "User requested medical advice, which is not permitted by company policy.",
      status: "FAILED"
    }
  },
  {
    prompt: "Provide a Python script that prints all even numbers from 1 to 20.",
    response: "Certainly! Here's a simple Python script:\n\nfor i in range(2, 21, 2):\n    print(i)",
    model: "Claude 3 Sonnet",
    compliance: {
      plagiarism: "0%",
      thirdParty: "None",
      policyViolated: false,
      policyReason: "",
      status: "PASSED"
    }
  },
  {
    prompt: "Compose a short poem about the beauty of the ocean.",
    response: "The ocean sparkles in the sun,\nWaves that shimmer, tides that run.\nA world of wonder, deep and blue,\nEndless beauty, always new.",
    model: "Gemini 1.5 Pro",
    compliance: {
      plagiarism: "9%",
      thirdParty: "Some lines match public poetry sources.",
      policyViolated: false,
      policyReason: "",
      status: "PASSED"
    }
  },
  {
    prompt: "Can you tell me how to hack into someone's WiFi network?",
    response: "I'm sorry, but I can't assist with that request.",
    model: "GPT-4o",
    compliance: {
      plagiarism: "0%",
      thirdParty: "None",
      policyViolated: true,
      policyReason: "User requested information on unauthorized access, which is strictly prohibited.",
      status: "FAILED"
    }
  },
  {
    prompt: "Summarize the latest developments in AI safety research in two sentences.",
    response: "Recent AI safety research emphasizes robust alignment techniques and transparent model behavior. Experts are also focusing on real-time monitoring to prevent misuse and ensure ethical deployment.",
    model: "Yi-34B-Chat",
    compliance: {
      plagiarism: "6%",
      thirdParty: "Summary overlaps with recent open-access news articles.",
      policyViolated: false,
      policyReason: "",
      status: "PASSED"
    }
  }
];

interface Message {
  sender: 'user' | 'bot';
  text: string;
  model?: string;
  compliance?: {
    plagiarism: string;
    thirdParty: string;
    policyViolated: boolean;
    policyReason: string;
    status: string;
  };
}

const ChatbotSection: React.FC = () => {
  const [messages, setMessages] = useState<Message[]>([]);
  const [loadingStep, setLoadingStep] = useState(0);
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const checkMobile = () => setIsMobile(window.matchMedia('(max-width: 700px)').matches);
    checkMobile();
    window.addEventListener('resize', checkMobile);
    return () => window.removeEventListener('resize', checkMobile);
  }, []);

  const handlePrompt = async (exampleIdx: number) => {
    const example = DEMO_EXAMPLES[exampleIdx];
    setMessages(msgs => [
      ...msgs,
      { sender: 'user', text: example.prompt },
    ]);
    setLoadingStep(1);
    setTimeout(() => {
      setLoadingStep(0);
      setTimeout(() => {
        setLoadingStep(2);
        setTimeout(() => {
          setLoadingStep(0);
          setMessages(msgs => [
            ...msgs,
            {
              sender: 'bot',
              text: example.response,
              model: example.model,
              compliance: example.compliance,
            },
          ]);
        }, 1500);
      }, 200);
    }, 1500);
  };

  useEffect(() => {
    const elements = document.querySelectorAll('.fade-slide-up');
    const observer = new window.IntersectionObserver(
      entries => {
        entries.forEach(entry => {
          if (entry.isIntersecting) {
            entry.target.classList.add('visible');
          }
        });
      },
      { threshold: 0.15 }
    );
    elements.forEach(el => observer.observe(el));
    return () => observer.disconnect();
  }, []);

  return (
    <section id="tilantra-assistant" style={{ background: '#fff', padding: '3rem 0', borderTop: '1px solid #ece6fa', borderBottom: '1px solid #ece6fa' }}>
      <div style={{ maxWidth: 1100, margin: '0 auto', display: 'flex', gap: '2.5rem', alignItems: 'flex-start', boxShadow: '0 2px 24px rgba(80,60,120,0.06)', borderRadius: 24, background: '#fff', padding: '2.5rem 2rem', border: '2.5px solid #e0e7ef' }}>
        {/* Chat area */}
        <div style={{ flex: 2, minWidth: 0, display: 'flex', flexDirection: 'column', height: isMobile ? 520 : 520, borderRight: '1.5px solid #ece6fa', paddingRight: '2rem' }}>
          <div 
            className="fade-slide-up visible"
            style={{ 
              fontWeight: 800, 
              fontSize: '1.5rem', 
              marginBottom: '1.2rem', 
              letterSpacing: '0.01em',
              display: 'inline-block',
            }}
          >
            <span style={{ color: '#2563eb' }}>Experience the</span>{' '}
            <span className="shiny-gradient-text" style={{
              background: 'linear-gradient(90deg, #2563eb 0%, #5b21b6 40%, #a78bfa 60%, #2563eb 100%)',
              backgroundSize: '200% auto',
              WebkitBackgroundClip: 'text',
              WebkitTextFillColor: 'transparent',
              backgroundClip: 'text',
              color: 'transparent',
              animation: 'shiny-gradient-flow 2.5s linear infinite',
              fontWeight: 900,
              display: 'inline-block',
            }}>Future of AI</span>
            <style>{`
              @keyframes shiny-gradient-flow {
                0% { background-position: 0% 50%; }
                100% { background-position: 200% 50%; }
              }
            `}</style>
          </div>
          <div className="fade-slide-up" style={{ marginBottom: '1.2rem', color: '#7c3aed', fontWeight: 500, fontSize: '1.08rem' }}>
            This is only for a basic demo, please <a href="#contact-footer" style={{ color: '#2563eb', textDecoration: 'underline', cursor: 'pointer' }} onClick={e => { e.preventDefault(); document.getElementById('contact-footer')?.scrollIntoView({ behavior: 'smooth' }); }}>reach out</a> for a full demo.
          </div>
          <div className="fade-slide-up" style={{ flex: 1, overflowY: 'auto', marginBottom: '1.2rem', background: '#f8f8fc', borderRadius: 12, padding: '1.2rem', border: '1px solid #ece6fa' }}>
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
                  {msg.sender === 'bot' && msg.compliance && (
                    <div style={{ marginTop: 10 }}>
                      <div style={{ fontSize: '0.93rem', color: msg.compliance.status === 'PASSED' ? '#bfa14a' : '#e11d48', fontWeight: 500, marginBottom: 2 }}>Compliance Report</div>
                      <pre style={{ background: msg.compliance.status === 'PASSED' ? 'rgba(191,161,74,0.07)' : 'rgba(225,29,72,0.07)', color: msg.compliance.status === 'PASSED' ? '#bfa14a' : '#e11d48', borderRadius: 6, padding: '0.7em 1em', fontSize: '0.97em', marginTop: '0.3em', whiteSpace: 'pre-line', fontFamily: 'inherit' }}>
{`Plagiarism: ${msg.compliance.plagiarism}
Identified third party elements: ${msg.compliance.thirdParty}
Compliance violation: ${msg.compliance.policyViolated ? 'TRUE' : 'FALSE'}
${msg.compliance.policyViolated ? `Policy violated: ${msg.compliance.policyReason}
` : ''}Compliance status: ${msg.compliance.status}`}
                      </pre>
                    </div>
                  )}
                </div>
              </div>
            ))}
            {loadingStep === 1 && (
              <div style={{ display: 'flex', alignItems: 'center', gap: '0.7rem', margin: '1.1rem 0' }}>
                <div style={{ width: 22, height: 22, border: '3px solid #c7d2fe', borderTop: '3px solid #7c3aed', borderRadius: '50%', animation: 'spin 1s linear infinite' }} />
                <span style={{ color: '#7c3aed', fontWeight: 600, fontSize: '1.08rem' }}>Choosing the Best Model...</span>
              </div>
            )}
            {loadingStep === 2 && (
              <div style={{ display: 'flex', alignItems: 'center', gap: '0.7rem', margin: '1.1rem 0' }}>
                <div style={{ width: 22, height: 22, border: '3px solid #c7d2fe', borderTop: '3px solid #7c3aed', borderRadius: '50%', animation: 'spin 1s linear infinite' }} />
                <span style={{ color: '#7c3aed', fontWeight: 600, fontSize: '1.08rem' }}>Generating Compliance Report...</span>
              </div>
            )}
          </div>
        </div>
        {/* Prompts column */}
        <div style={{ flex: 1, minWidth: 220, paddingLeft: isMobile ? 0 : '1.5rem', display: 'flex', flexDirection: 'column', gap: '1.2rem', maxHeight: isMobile ? 220 : 520, overflowY: 'auto', marginTop: isMobile ? '1.5rem' : '2.5rem' }}>
          <div style={{ fontWeight: 700, fontSize: '1.13rem', color: '#7c3aed', marginBottom: '0.7rem', letterSpacing: '0.01em' }}>Demo Prompts</div>
          <div style={{ display: 'flex', flexDirection: 'column', gap: '0.7rem' }}>
            {(isMobile ? DEMO_EXAMPLES.slice(0, 3) : DEMO_EXAMPLES).map((ex, i) => (
              <button
                key={i}
                onClick={() => handlePrompt(i)}
                disabled={loadingStep !== 0}
                style={{
                  background: '#f3f0ff',
                  border: '1.5px solid #ece6fa',
                  borderRadius: 8,
                  padding: '0.9rem 1.1rem',
                  color: '#222',
                  fontWeight: 600,
                  fontSize: '1.05rem',
                  textAlign: 'left',
                  cursor: loadingStep !== 0 ? 'not-allowed' : 'pointer',
                  boxShadow: '0 1px 6px 0 rgba(124,58,237,0.04)',
                  transition: 'background 0.2s',
                  overflow: 'hidden',
                  whiteSpace: 'nowrap',
                  textOverflow: 'ellipsis',
                }}
                onMouseEnter={e => {
                  (e.currentTarget as HTMLButtonElement).style.whiteSpace = 'normal';
                  (e.currentTarget as HTMLButtonElement).style.overflow = 'visible';
                  (e.currentTarget as HTMLButtonElement).style.textOverflow = 'unset';
                }}
                onMouseLeave={e => {
                  (e.currentTarget as HTMLButtonElement).style.whiteSpace = 'nowrap';
                  (e.currentTarget as HTMLButtonElement).style.overflow = 'hidden';
                  (e.currentTarget as HTMLButtonElement).style.textOverflow = 'ellipsis';
                }}
              >{ex.prompt}</button>
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