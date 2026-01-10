import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Shield, Lock, RefreshCw, Zap, BarChart3, MessageSquare } from 'lucide-react';
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
        prompt: "Write a comparison between our product and X-Competitor.",
        response: "Our product offers unique features in AI orchestration and cost management. For legal and policy reasons, I cannot provide a direct comparison with specific competitors.",
        model: "Guidera Guardrails-o1",
        compliance: {
            plagiarism: "5%",
            thirdParty: "None",
            policyViolated: true,
            policyReason: "Rule: 'Never mention competitors' triggered. Response auto-corrected.",
            status: "PASSED"
        }
    },
    {
        prompt: "Tell me about the latest political scandal.",
        response: "I'm focused on helping with technical queries and AI orchestration. I don't engage in political discussions.",
        model: "Guidera Guardrails-o1",
        compliance: {
            plagiarism: "2%",
            thirdParty: "None",
            policyViolated: true,
            policyReason: "Rule: 'Don't talk about politics' triggered. Response auto-corrected.",
            status: "PASSED"
        }
    },
    {
        prompt: "I want to draft an email for user@gmail.com and admin@comp.com.",
        response: "Sure! Here's a draft email for your recipients:\n\nSubject: Project Update\n\nHi [PII REDACTED] and [PII REDACTED],\n\nI wanted to share the latest progress on the AI deployment. Let me know your thoughts.\n\nBest regards,\n[Your Name]",
        model: "Guidera Privacy-o1",
        compliance: {
            plagiarism: "8%",
            thirdParty: "Email patterns",
            policyViolated: true,
            policyReason: "Rule: 'PII Redaction' triggered. Email addresses removed.",
            status: "PASSED (Sanitized)"
        }
    },
    {
        prompt: "Can you provide medical advice for a persistent cough?",
        response: "I am an AI assistant focused on technical orchestration. I am not able to provide medical advice. Please consult a healthcare professional for your symptoms.",
        model: "Guidera Guardrails-Pro",
        compliance: {
            plagiarism: "0%",
            thirdParty: "None",
            policyViolated: true,
            policyReason: "Rule: 'Medical Advice' triggered. Response blocked.",
            status: "PASSED (Blocked)"
        }
    },
    {
        prompt: "How can I improve my LLM latency using Guidera?",
        response: "You can use Guidera's smart routing to automatically select models with the lowest current latency and use secure caching to reuse common prompt results.",
        model: "Guidera Core-Pro",
        compliance: {
            plagiarism: "0%",
            thirdParty: "None",
            policyViolated: false,
            policyReason: "",
            status: "PASSED"
        }
    }
];

const GuideraBentoSection = () => {
    const [messages, setMessages] = useState<{ sender: 'user' | 'bot'; text: string; model?: string; compliance?: Compliance }[]>([]);
    const [loadingStep, setLoadingStep] = useState(0);

    const handlePrompt = (exampleIdx: number) => {
        const example = DEMO_EXAMPLES[exampleIdx];
        setMessages(msgs => [...msgs, { sender: 'user', text: example.prompt }]);

        setLoadingStep(1); // Analyzing
        setTimeout(() => {
            setLoadingStep(2); // Checking Compliance
            setTimeout(() => {
                setLoadingStep(0);
                setMessages(msgs => [...msgs, {
                    sender: 'bot',
                    text: example.response,
                    model: example.model,
                    compliance: example.compliance
                }]);
            }, 1000);
        }, 1000);
    };

    return (
        <section className="py-20 bg-slate-50 relative overflow-hidden">
            {/* Mesh Overlay & Background Decorations */}
            <div className="absolute inset-0 mesh-overlay opacity-30 pointer-events-none" />
            <div className="absolute top-0 left-1/4 w-[500px] h-[500px] bg-blue-200/30 rounded-full blur-[120px] -z-10" />
            <div className="absolute bottom-0 right-1/4 w-[500px] h-[500px] bg-teal-200/30 rounded-full blur-[120px] -z-10" />

            <div className="container mx-auto px-6 relative z-10">
                <div className="text-center mb-10">
                    <h2 className="text-3xl md:text-5xl font-bold text-slate-900 mb-4">
                        Powerful Features, <span className="bg-gradient-to-r from-blue-600 to-teal-500 bg-clip-text text-transparent">One Platform</span>
                    </h2>
                    <p className="text-slate-600 text-lg max-w-2xl mx-auto">
                        Everything you need to orchestrate, optimize, and accelerate your AI operations with confidence.
                    </p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-4 gap-4 auto-rows-min">
                    {/* Feature 1: Stop it at source - Narrow */}
                    <motion.div
                        whileHover={{ y: -5, scale: 1.02 }}
                        className="p-6 rounded-[2rem] backdrop-blur-xl border border-white/40 shadow-2xl bg-gradient-to-br from-slate-900/90 to-slate-800/90 text-white flex flex-col justify-between md:col-span-1"
                    >
                        <div className="w-10 h-10 rounded-2xl bg-blue-500/20 flex items-center justify-center mb-4">
                            <Shield className="w-5 h-5 text-blue-400" />
                        </div>
                        <div>
                            <h3 className="text-lg font-bold mb-2">We stop it at the source</h3>
                            <p className="text-slate-300 text-sm leading-relaxed">
                                Most tools tell you there was a problem after the damage is done. We catch it in real-time.
                            </p>
                        </div>
                        <div className="absolute inset-0 bg-gradient-to-br from-blue-500/5 to-transparent opacity-50 pointer-events-none" />
                    </motion.div>

                    {/* Feature 2: No code Rules - Wide */}
                    <motion.div
                        whileHover={{ y: -5, scale: 1.02 }}
                        className="p-6 rounded-[2rem] backdrop-blur-xl border border-white/60 shadow-xl bg-white/40 flex flex-col justify-between relative overflow-hidden md:col-span-2"
                    >
                        <div className="w-10 h-10 rounded-2xl bg-teal-500/10 flex items-center justify-center mb-4">
                            <Lock className="w-5 h-5 text-teal-600" />
                        </div>
                        <div className="relative z-10">
                            <h3 className="text-lg font-bold mb-2 text-slate-900">“No code” Rules</h3>
                            <p className="text-slate-600 text-sm leading-relaxed">
                                You don’t need a developer to stay safe. Write your own rules in plain text like "Never mention competitors" or "Don't talk about politics".
                            </p>
                        </div>
                        <div className="absolute inset-0 bg-gradient-to-br from-teal-500/10 to-transparent opacity-30 pointer-events-none" />
                    </motion.div>

                    {/* Feature 3: Auto-Correction - Narrow */}
                    <motion.div
                        whileHover={{ y: -5, scale: 1.02 }}
                        className="p-6 rounded-[2rem] backdrop-blur-xl border border-white/60 shadow-xl bg-blue-50/40 flex flex-col justify-between relative overflow-hidden md:col-span-1"
                    >
                        <div className="w-10 h-10 rounded-2xl bg-blue-500/10 flex items-center justify-center mb-4">
                            <RefreshCw className="w-5 h-5 text-blue-600" />
                        </div>
                        <div className="relative z-10">
                            <h3 className="text-lg font-bold mb-2 text-blue-900">Auto-Correction</h3>
                            <p className="text-slate-700 text-sm leading-relaxed">
                                If a model breaks the rules, we transform the response in real-time.
                            </p>
                        </div>
                        <div className="absolute inset-0 bg-gradient-to-br from-blue-500/10 to-transparent opacity-30 pointer-events-none" />
                    </motion.div>

                    {/* Feature 4: Smart Prompt Generator - Vertical (Left) */}
                    <motion.div
                        whileHover={{ y: -5, scale: 1.02 }}
                        className="p-6 rounded-[2rem] backdrop-blur-xl border border-white/60 shadow-xl bg-white/40 flex flex-col items-center text-center justify-center md:col-span-1 md:row-span-2 h-full relative"
                    >
                        <div className="w-10 h-10 rounded-2xl bg-amber-500/10 flex items-center justify-center mb-4">
                            <Zap className="w-5 h-5 text-amber-600" />
                        </div>
                        <div className="relative z-10">
                            <h3 className="text-lg font-bold mb-4 text-slate-900">Smart Prompt Generator</h3>
                            <p className="text-slate-600 text-sm leading-relaxed mb-6">
                                Better prompts, give better results. With a single click, select from smart generated prompts to ensure you get the best response.
                            </p>
                            <div className="flex justify-center">
                                <img
                                    src="/prompt.png"
                                    alt="Smart Prompts"
                                    className="w-full max-w-[180px] h-auto object-contain"
                                />
                            </div>
                        </div>

                    </motion.div>

                    {/* Chatbot Demo: Spans 2 columns and 2 rows - Centered */}
                    <div className="md:col-span-2 md:row-span-2 rounded-[2rem] backdrop-blur-2xl bg-white/60 border border-white/60 shadow-2xl overflow-hidden flex flex-col h-[520px] relative">
                        <div className="p-4 border-b border-white/20 bg-white/20 flex items-center justify-between relative z-10">
                            <div className="flex items-center gap-2">
                                <div className="w-8 h-8 rounded-full bg-blue-600 flex items-center justify-center shadow-lg shadow-blue-200">
                                    <MessageSquare className="w-4 h-4 text-white" />
                                </div>
                                <div>
                                    <h4 className="font-bold text-slate-900 text-sm">Guidera Playground</h4>
                                    <p className="text-[10px] text-slate-500 font-medium leading-none">Test your guardrails in real-time</p>
                                </div>
                            </div>
                            <div className="flex gap-1">
                                <div className="w-2 h-2 rounded-full bg-slate-300" />
                                <div className="w-2 h-2 rounded-full bg-slate-300" />
                                <div className="w-2 h-2 rounded-full bg-slate-300" />
                            </div>
                        </div>

                        <div className="flex-1 p-4 overflow-y-auto space-y-4 bg-transparent custom-scrollbar relative z-10">
                            <AnimatePresence>
                                {messages.length === 0 ? (
                                    <motion.div
                                        key="empty"
                                        initial={{ opacity: 0 }}
                                        animate={{ opacity: 1 }}
                                        exit={{ opacity: 0 }}
                                        className="h-full flex flex-col items-center justify-center text-slate-400 space-y-4"
                                    >
                                        <div className="p-4 rounded-full bg-white/40 shadow-inner">
                                            <MessageSquare className="w-8 h-8" />
                                        </div>
                                        <p className="text-sm font-semibold text-slate-500 text-center">Select a prompt below to see Guidera in action</p>
                                    </motion.div>
                                ) : (
                                    messages.map((msg, i) => (
                                        <motion.div
                                            initial={{ opacity: 0, y: 10 }}
                                            animate={{ opacity: 1, y: 0 }}
                                            key={i}
                                            className={cn(
                                                "flex flex-col max-w-[90%]",
                                                msg.sender === 'user' ? "ml-auto items-end" : "mr-auto items-start"
                                            )}
                                        >
                                            <div className={cn(
                                                "p-4 rounded-2xl shadow-sm text-[1.05rem] leading-relaxed relative overflow-hidden",
                                                msg.sender === 'user'
                                                    ? "bg-blue-600 text-white rounded-tr-none shadow-blue-200"
                                                    : "bg-white/80 border border-white/40 text-slate-700 rounded-tl-none backdrop-blur-md"
                                            )}>
                                                {msg.sender === 'bot' && msg.model && (
                                                    <div className="text-xs font-bold text-blue-600 mb-2 uppercase tracking-wider relative z-10">
                                                        {msg.model}
                                                    </div>
                                                )}
                                                <div className="whitespace-pre-line relative z-10">{msg.text}</div>

                                                {msg.sender === 'bot' && msg.compliance && (
                                                    <div className="mt-4 pt-4 border-t border-slate-200/50 relative z-10">
                                                        <div className={cn(
                                                            "text-sm font-bold mb-2 uppercase tracking-widest",
                                                            msg.compliance.status.includes('PASSED') ? "text-teal-600" : "text-red-600"
                                                        )}>
                                                            Compliance Report: {msg.compliance.status}
                                                        </div>
                                                        <div className="text-xs space-y-1.5 text-slate-500 font-mono bg-white/40 p-3 rounded-xl border border-white/40 backdrop-blur-sm">
                                                            <div className="flex justify-between"><span>Plagiarism:</span> <span className="font-bold text-slate-700">{msg.compliance.plagiarism}</span></div>
                                                            <div className="flex justify-between"><span>Third Party:</span> <span className="font-bold text-slate-700">{msg.compliance.thirdParty}</span></div>
                                                            {msg.compliance.policyViolated && (
                                                                <div className="text-red-600 font-bold mt-1 pt-1 border-t border-slate-200/50">
                                                                    Policy: {msg.compliance.policyReason}
                                                                </div>
                                                            )}
                                                        </div>
                                                    </div>
                                                )}
                                            </div>
                                        </motion.div>
                                    ))
                                )}
                            </AnimatePresence>

                            {loadingStep > 0 && (
                                <div className="flex items-center gap-3 py-2 text-blue-600 relative z-10">
                                    <RefreshCw className="w-4 h-4 animate-spin text-blue-500" />
                                    <span className="text-[11px] font-bold uppercase tracking-widest">
                                        {loadingStep === 1 ? "Analyzing prompt..." : "Checking compliance..."}
                                    </span>
                                </div>
                            )}
                        </div>

                        <div className="p-4 bg-white/40 border-t border-white/20 relative z-10 backdrop-blur-md">
                            <p className="text-xs font-extrabold text-slate-400 uppercase tracking-widest mb-3">Try reaching a guardrail:</p>
                            <div className="flex overflow-x-auto gap-3 pb-2 custom-scrollbar no-scrollbar scroll-smooth">
                                {DEMO_EXAMPLES.map((ex, i) => (
                                    <button
                                        key={i}
                                        onClick={() => handlePrompt(i)}
                                        disabled={loadingStep !== 0}
                                        className="flex-shrink-0 w-64 px-4 py-3 rounded-xl border border-white/60 bg-white/60 text-xs font-bold text-slate-600 hover:border-blue-400 hover:text-blue-600 hover:bg-white/80 hover:shadow-lg transition-all active:scale-95 disabled:opacity-50 text-left line-clamp-2 h-14"
                                    >
                                        {ex.prompt}
                                    </button>
                                ))}
                            </div>
                        </div>

                        {/* Subtle background gradient inside chatbot */}
                        <div className="absolute inset-0 bg-gradient-to-br from-blue-500/5 via-transparent to-teal-500/5 pointer-events-none" />
                    </div>

                    {/* Feature 5: Metrics Dashboard - Vertical (Right) */}
                    <motion.div
                        whileHover={{ y: -5, scale: 1.02 }}
                        className="p-6 rounded-[2rem] backdrop-blur-xl border border-white/60 shadow-xl bg-teal-50/40 flex flex-col justify-between relative overflow-hidden md:col-span-1 md:row-span-2 h-full"
                    >
                        <div className="w-10 h-10 rounded-2xl bg-teal-500/10 flex items-center justify-center mb-4">
                            <BarChart3 className="w-5 h-5 text-teal-600" />
                        </div>
                        <div className="relative z-10 flex-1 flex flex-col justify-center">
                            <h3 className="text-lg font-bold mb-4 text-teal-900">Metrics Dashboard</h3>
                            <p className="text-slate-700 text-sm leading-relaxed mb-6">
                                Get live visibility into your AI performance, spend, and latency. One dashboard to monitor everything.
                            </p>
                            <div className="space-y-3 opacity-30 pointer-events-none">
                                <div className="flex items-end gap-1 h-20">
                                    <div className="bg-teal-500 w-full h-[60%] rounded-t-sm" />
                                    <div className="bg-teal-500 w-full h-[85%] rounded-t-sm" />
                                    <div className="bg-teal-500 w-full h-[45%] rounded-t-sm" />
                                    <div className="bg-teal-500 w-full h-[95%] rounded-t-sm" />
                                    <div className="bg-teal-500 w-full h-[70%] rounded-t-sm" />
                                </div>
                                <div className="h-2 bg-slate-200 rounded-full w-full" />
                            </div>
                        </div>
                        <div className="absolute inset-0 bg-gradient-to-br from-teal-500/10 to-transparent opacity-30 pointer-events-none" />
                    </motion.div>
                </div>
            </div>
            <style>{`
                .custom-scrollbar::-webkit-scrollbar {
                    width: 4px;
                }
                .custom-scrollbar::-webkit-scrollbar-track {
                    background: transparent;
                }
                .custom-scrollbar::-webkit-scrollbar-thumb {
                    background: #e2e8f0;
                    border-radius: 10px;
                }
                .custom-scrollbar::-webkit-scrollbar-thumb:hover {
                    background: #cbd5e1;
                }
            `}</style>
        </section>
    );
};

export default GuideraBentoSection;
