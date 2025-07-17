import React, { useRef, useState, useEffect } from 'react';
import '../App.css';

const DEMO_EXAMPLES = [
  {
    prompt: "How do I optimize a SQL query for faster performance?",
    response: "To optimize a SQL query:\n\n- Use proper indexing on columns used in WHERE, JOIN, and ORDER BY clauses.\n- Avoid using SELECT *; specify only the columns you need.\n- Limit the use of subqueries and try to use JOINs instead.\n- Analyze the query execution plan to identify bottlenecks.\n\nIf you share your specific query, I can provide more targeted suggestions!",
    model: "Ollama o4-mini",
    compliance: {
      plagiarism: "0%",
      thirdParty: "None",
      policyViolated: false,
      policyReason: "",
      status: "PASSED"
    }
  },
  {
    prompt: "Why does my Docker container exit immediately after starting?",
    response: "A Docker container may exit immediately if:\n\n- Its main process finishes right after starting (e.g., the command in CMD/ENTRYPOINT completes).\n- There is an error in the entrypoint script or command.\n- The container is running in the background and has nothing to keep it alive.\n\nCheck your Dockerfile's CMD/ENTRYPOINT and run 'docker logs <container>' for more details.",
    model: "Qwen-1.5-72B",
    compliance: {
      plagiarism: "0%",
      thirdParty: "None",
      policyViolated: false,
      policyReason: "",
      status: "PASSED"
    }
  },
  {
    prompt: "What are the main arguments for and against universal basic income?",
    response: "I'm sorry, but I can't assist with that request.",
    model: "Claude 3 Sonnet",
    compliance: {
      plagiarism: "0%",
      thirdParty: "None",
      policyViolated: true,
      policyReason: "User requested political content, which is not permitted by company policy.",
      status: "FAILED"
    }
  },
  {
    prompt: "What should I do if I have a persistent cough and fever?",
    response: "I'm not able to provide medical advice. Please consult a healthcare professional for your symptoms.",
    model: "Gemini 1.5 Pro",
    compliance: {
      plagiarism: "0%",
      thirdParty: "None",
      policyViolated: true,
      policyReason: "User requested medical advice, which is not permitted by company policy.",
      status: "FAILED"
    }
  },
  {
    prompt: "Give me 5 creative startup ideas for 2024 in the AI space.",
    response: "Here are 5 creative AI startup ideas for 2024:\n\n1. AI-powered mental health assistant for real-time emotional support.\n2. Automated legal document analyzer for contract review.\n3. Personalized AI fitness coach with adaptive workout plans.\n4. AI-driven supply chain optimizer for small businesses.\n5. Real-time AI content moderation tool for online communities.",
    model: "GPT-4o",
    compliance: {
      plagiarism: "23%",
      thirdParty: "Some ideas overlap with public startup lists.",
      policyViolated: false,
      policyReason: "",
      status: "PASSED"
    }
  },
  {
    prompt: "I want to draft an email for m@gmail.com and a@gmail.com.",
    response: "Sure! Here's a draft email for your recipients:\n\nSubject: [Your Subject Here]\n\nHi email@gmail.com and email@gmail.com,\n\n[Your message here]\n\nBest regards,\n[Your Name]",
    model: "Yi-34B-Chat",
    compliance: {
      plagiarism: "12%",
      thirdParty: "Email format and phrasing similar to common templates.",
      policyViolated: false,
      policyReason: "Personal information (emails) replaced with placeholders for privacy.",
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
              text: example.compliance && example.compliance.policyViolated
                ? 'Compliance check failed. Please try again.'
                : example.response,
              model: example.compliance && example.compliance.policyViolated ? undefined : example.model,
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
            This is a basic demo, for the full Demo <a href="/chatbot" style={{ color: '#2563eb', textDecoration: 'underline', cursor: 'pointer' }}>Click Here</a>.
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
                  {msg.sender === 'bot' && msg.compliance && !msg.compliance.policyViolated && (
                    <div style={{ fontSize: '0.85rem', color: '#7c3aed', fontWeight: 600, marginBottom: 4, marginTop: -2 }}>
                      Model: {msg.model || 'Demo Mode'}
                    </div>
                  )}
                  <div>{msg.text.split('\n').map((line, idx) => (
                    <React.Fragment key={idx}>
                      {line}
                      {idx < msg.text.split('\n').length - 1 && <br />}
                    </React.Fragment>
                  ))}</div>
                  {msg.sender === 'bot' && msg.compliance && (
                    <div style={{ marginTop: 10 }}>
                      <div style={{ fontSize: '0.93rem', color: msg.compliance.status === 'PASSED' ? '#bfa14a' : '#e11d48', fontWeight: 500, marginBottom: 2 }}>Compliance Report</div>
                      {msg.compliance.policyReason && msg.compliance.policyReason.toLowerCase().includes('placeholders for privacy') && (
                        <div style={{ background: msg.compliance.status === 'PASSED' ? 'rgba(191,161,74,0.07)' : 'rgba(225,29,72,0.07)', color: '#bfa14a', padding: '0.7em 1em', borderRadius: 6, marginBottom: 6, border: 'none', fontWeight: 400, fontSize: '0.97em', fontFamily: 'inherit', whiteSpace: 'pre-line' }}>
                          Personal information found. Replaced with placeholder.
                        </div>
                      )}
                      <pre style={{ background: msg.compliance.status === 'PASSED' ? 'rgba(191,161,74,0.07)' : 'rgba(225,29,72,0.07)', color: msg.compliance.status === 'PASSED' ? '#bfa14a' : '#e11d48', borderRadius: 6, padding: '0.7em 1em', fontSize: '0.97em', marginTop: '0.3em', whiteSpace: 'pre-line', fontFamily: 'inherit' }}>
{`Plagiarism: ${msg.compliance.plagiarism}
Identified third party elements: ${msg.compliance.thirdParty}
Compliance violation: ${msg.compliance.policyViolated ? 'TRUE' : 'FALSE'}
${msg.compliance.policyViolated ? `Policy violated: ${msg.compliance.policyReason}\n` : ''}Compliance status: ${msg.compliance.status}`}
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