import React, { useState, useEffect } from 'react';
import { cn } from "@/lib/utils";

interface Compliance {
    plagiarism: string;
    thirdParty: string;
    policyViolated: boolean;
    policyReason: string;
    status: string;
}

interface DemoExample {
    prompt: string;
    response: string;
    model: string;
    compliance: Compliance;
}

const DEMO_EXAMPLES: DemoExample[] = [
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
    compliance?: Compliance;
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
        const observer = new IntersectionObserver(
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
        <section id="tilantra-assistant" className="relative py-8 bg-[#f0fdff] overflow-hidden">
            {/* Background elements to match Hero */}
            <div className="absolute top-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-primary/20 to-transparent" />

            <div className="container mx-auto px-6">
                <div className={cn(
                    "max-w-3xl mx-auto glass-card rounded-2xl p-4 md:p-6 shadow-md border border-primary/10 flex flex-col md:flex-row gap-6 items-start",
                    isMobile && "p-3"
                )}>
                    {/* Chat area */}
                    <div className="flex-[2] min-w-0 flex flex-col h-[380px] md:border-r border-primary/10 md:pr-6">
                        <div className="fade-slide-up visible mb-4">
                            <h2 className="text-2xl md:text-3xl font-bold leading-tight">
                                <span className="text-foreground">Experience the </span>
                                <span className="gradient-text">Future of AI</span>
                            </h2>
                        </div>

                        <div className="fade-slide-up flex-1 overflow-y-auto mb-4 bg-muted/30 rounded-xl p-4 border border-primary/5">
                            {messages.length === 0 && (
                                <div className="h-full flex flex-col items-center justify-center text-muted-foreground text-center">
                                    <div className="w-10 h-10 rounded-full bg-primary/10 flex items-center justify-center mb-3 text-primary">
                                        <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="m3 21 1.9-5.7a8.5 8.5 0 1 1 3.8 3.8z" /></svg>
                                    </div>
                                    <p className="text-base">Select a prompt to start the demo</p>
                                </div>
                            )}

                            {messages.map((msg, i) => (
                                <div key={i} className={cn(
                                    "mb-6 flex",
                                    msg.sender === 'user' ? "justify-end" : "justify-start"
                                )}>
                                    <div className={cn(
                                        "max-w-[85%] p-4 rounded-2xl shadow-sm text-[1.05rem] leading-relaxed",
                                        msg.sender === 'user'
                                            ? "bg-primary text-primary-foreground rounded-tr-none"
                                            : "bg-card border border-primary/10 text-card-foreground rounded-tl-none"
                                    )}>
                                        {msg.sender === 'bot' && msg.model && (
                                            <div className="text-xs font-bold text-primary mb-2 uppercase tracking-wider">
                                                {msg.model}
                                            </div>
                                        )}
                                        <div className="whitespace-pre-line">{msg.text}</div>

                                        {msg.sender === 'bot' && msg.compliance && (
                                            <div className="mt-4 pt-4 border-t border-primary/10">
                                                <div className={cn(
                                                    "text-sm font-semibold mb-2",
                                                    msg.compliance.status === 'PASSED' ? "text-secondary" : "text-destructive"
                                                )}>
                                                    Compliance Report: {msg.compliance.status}
                                                </div>
                                                <div className="text-xs space-y-1 text-muted-foreground font-mono bg-muted/50 p-3 rounded-lg">
                                                    <div>Plagiarism: {msg.compliance.plagiarism}</div>
                                                    <div>Third Party: {msg.compliance.thirdParty}</div>
                                                    {msg.compliance.policyViolated && (
                                                        <div className="text-destructive font-semibold">
                                                            Policy: {msg.compliance.policyReason}
                                                        </div>
                                                    )}
                                                </div>
                                            </div>
                                        )}
                                    </div>
                                </div>
                            ))}

                            {loadingStep > 0 && (
                                <div className="flex items-center gap-3 py-4 animate-pulse">
                                    <div className="w-2 h-2 rounded-full bg-primary animate-bounce [animation-delay:-0.3s]" />
                                    <div className="w-2 h-2 rounded-full bg-primary animate-bounce [animation-delay:-0.15s]" />
                                    <div className="w-2 h-2 rounded-full bg-primary animate-bounce" />
                                    <span className="text-primary font-semibold">
                                        {loadingStep === 1 ? "Analyzing..." : "Checking Compliance..."}
                                    </span>
                                </div>
                            )}
                        </div>
                    </div>

                    {/* Prompts column */}
                    <div className="flex-1 min-w-[240px] flex flex-col gap-4">
                        <div className="text-base font-bold text-foreground mb-1.5 flex items-center gap-2">
                            <span className="w-2 h-2 rounded-full bg-secondary" />
                            Demo Prompts
                        </div>
                        <div className="flex flex-col gap-2">
                            {(isMobile ? DEMO_EXAMPLES.slice(0, 3) : DEMO_EXAMPLES).map((ex, i) => (
                                <button
                                    key={i}
                                    onClick={() => handlePrompt(i)}
                                    disabled={loadingStep !== 0}
                                    className={cn(
                                        "group text-left p-3 rounded-lg border border-primary/10 bg-card hover:bg-primary/5 hover:border-primary/30 transition-all duration-200",
                                        "disabled:opacity-50 disabled:cursor-not-allowed",
                                        "shadow-sm hover:shadow-md"
                                    )}
                                >
                                    <div className="text-sm font-medium text-foreground group-hover:text-primary transition-colors line-clamp-2">
                                        {ex.prompt}
                                    </div>
                                </button>
                            ))}
                        </div>
                    </div>
                </div>
            </div>

            <style>{`
                .fade-slide-up {
                    opacity: 0;
                    transform: translateY(20px);
                    transition: all 0.6s cubic-bezier(0.22, 1, 0.36, 1);
                }
                .fade-slide-up.visible {
                    opacity: 1;
                    transform: translateY(0);
                }
                .gradient-text {
                    background: linear-gradient(90deg, hsl(var(--primary)) 0%, hsl(var(--secondary)) 40%, hsl(var(--accent)) 60%, hsl(var(--primary)) 100%);
                    background-size: 200% auto;
                    -webkit-background-clip: text;
                    background-clip: text;
                    -webkit-text-fill-color: transparent;
                    color: transparent;
                    animation: gradient-flow 2.5s linear infinite;
                    font-weight: 900;
                    display: inline-block;
                }
                @keyframes gradient-flow {
                    0% { background-position: 0% 50%; }
                    100% { background-position: 200% 50%; }
                }
                .glass-card {
                    background-color: hsla(var(--card));
                    backdrop-filter: blur(10px);
                    -webkit-backdrop-filter: blur(10px);
                }
            `}</style>
        </section>
    );
};

export default ChatbotSection;