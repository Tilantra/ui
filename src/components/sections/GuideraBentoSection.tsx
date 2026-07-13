import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
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

const cardBase = "border border-neutral-200 dark:border-neutral-800 bg-white dark:bg-[#111114] p-6 flex flex-col";

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
        <section className="bg-white dark:bg-[#0c0c0e] border-t border-neutral-200 dark:border-neutral-800">
            <div className="mx-auto max-w-[1320px] px-6 md:px-10 py-24 md:py-32">
                <div className="mb-14">
                    <p className="editorial-label text-violet-700 dark:text-violet-400 mb-6">03 | Playground</p>
                    <h2 className="text-4xl md:text-5xl font-semibold leading-[1.02] tracking-[-0.03em] text-neutral-950 dark:text-white max-w-2xl">
                        Try to break the rules.
                    </h2>
                    <p className="mt-5 text-base leading-relaxed text-neutral-500 dark:text-neutral-400 max-w-xl">
                        These are live guardrails, the same ones you'd write for your own agents.
                        Pick a prompt and watch the policy layer catch it.
                    </p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-4 gap-4 auto-rows-min">
                    {/* Feature 1: Stop it at source */}
                    <div className={`${cardBase} justify-between md:col-span-1`}>
                        <span className="editorial-label text-violet-700 dark:text-violet-400 mb-10">Real-time</span>
                        <div>
                            <h3 className="text-lg font-semibold mb-2 text-neutral-950 dark:text-white">We stop it at the source</h3>
                            <p className="text-neutral-500 dark:text-neutral-400 text-sm leading-relaxed">
                                Most tools tell you there was a problem after the damage is done. We catch it in real-time.
                            </p>
                        </div>
                    </div>

                    {/* Feature 2: No code Rules */}
                    <div className={`${cardBase} justify-between md:col-span-2`}>
                        <span className="editorial-label text-violet-700 dark:text-violet-400 mb-10">Plain English</span>
                        <div>
                            <h3 className="text-lg font-semibold mb-2 text-neutral-950 dark:text-white">"No code" rules</h3>
                            <p className="text-neutral-500 dark:text-neutral-400 text-sm leading-relaxed">
                                You don't need a developer to stay safe. Write your own rules in plain text like
                                "Never mention competitors" or "Don't talk about politics".
                            </p>
                        </div>
                    </div>

                    {/* Feature 3: Auto-Correction */}
                    <div className={`${cardBase} justify-between md:col-span-1`}>
                        <span className="editorial-label text-red-600 dark:text-red-400 mb-10">Automatic</span>
                        <div>
                            <h3 className="text-lg font-semibold mb-2 text-neutral-950 dark:text-white">Auto-correction</h3>
                            <p className="text-neutral-500 dark:text-neutral-400 text-sm leading-relaxed">
                                If a model breaks the rules, we transform the response in real-time.
                            </p>
                        </div>
                    </div>

                    {/* Feature 4: Smart Prompt Generator */}
                    <div className={`${cardBase} md:col-span-1 md:row-span-2`}>
                        <span className="editorial-label text-red-600 dark:text-red-400 mb-10">One click</span>
                        <div className="flex-1 flex flex-col">
                            <h3 className="text-lg font-semibold mb-3 text-neutral-950 dark:text-white">Smart prompt generator</h3>
                            <p className="text-neutral-500 dark:text-neutral-400 text-sm leading-relaxed mb-6">
                                Better prompts give better results. Select from smart generated prompts to get the best response.
                            </p>
                            <div className="mt-auto">
                                <img
                                    src="/prompt.png"
                                    alt="Smart Prompts"
                                    className="w-full max-w-[200px] h-auto object-contain mx-auto"
                                />
                            </div>
                        </div>
                    </div>

                    {/* Chatbot Demo */}
                    <div className="md:col-span-2 md:row-span-2 border border-neutral-200 dark:border-neutral-800 bg-white dark:bg-[#111114] overflow-hidden flex flex-col h-[520px]">
                        <div className="px-5 py-4 border-b border-neutral-200 dark:border-neutral-800 flex items-center justify-between">
                            <div>
                                <h4 className="text-sm font-semibold text-neutral-950 dark:text-white">Guidera Playground</h4>
                                <p className="text-[11px] text-neutral-400 dark:text-neutral-500 mt-0.5">Test your guardrails in real-time</p>
                            </div>
                            <span className="editorial-label text-violet-700 dark:text-violet-400">Live</span>
                        </div>

                        <div className="flex-1 p-4 overflow-y-auto space-y-4 custom-scrollbar">
                            <AnimatePresence>
                                {messages.length === 0 ? (
                                    <motion.div
                                        key="empty"
                                        initial={{ opacity: 0 }}
                                        animate={{ opacity: 1 }}
                                        exit={{ opacity: 0 }}
                                        className="h-full flex items-center justify-center"
                                    >
                                        <p className="text-sm text-neutral-400 dark:text-neutral-500 text-center max-w-[220px]">
                                            Select a prompt below to see Guidera in action
                                        </p>
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
                                                "p-4 text-sm leading-relaxed",
                                                msg.sender === 'user'
                                                    ? "bg-neutral-950 text-white dark:bg-white dark:text-neutral-950"
                                                    : "border border-neutral-200 dark:border-neutral-800 text-neutral-700 dark:text-neutral-300"
                                            )}>
                                                {msg.sender === 'bot' && msg.model && (
                                                    <div className="editorial-label text-violet-700 dark:text-violet-400 mb-2">
                                                        {msg.model}
                                                    </div>
                                                )}
                                                <div className="whitespace-pre-line">{msg.text}</div>

                                                {msg.sender === 'bot' && msg.compliance && (
                                                    <div className="mt-4 pt-4 border-t border-neutral-200 dark:border-neutral-800">
                                                        <div className="editorial-label text-neutral-950 dark:text-white mb-2">
                                                            Compliance report: <span className="text-violet-700 dark:text-violet-400">{msg.compliance.status}</span>
                                                        </div>
                                                        <div className="text-xs space-y-1.5 text-neutral-500 dark:text-neutral-400 font-mono border border-neutral-200 dark:border-neutral-800 p-3">
                                                            <div className="flex justify-between"><span>Plagiarism:</span> <span className="text-neutral-950 dark:text-white">{msg.compliance.plagiarism}</span></div>
                                                            <div className="flex justify-between"><span>Third party:</span> <span className="text-neutral-950 dark:text-white">{msg.compliance.thirdParty}</span></div>
                                                            {msg.compliance.policyViolated && (
                                                                <div className="text-red-600 dark:text-red-400 mt-1 pt-1 border-t border-neutral-200 dark:border-neutral-800">
                                                                    {msg.compliance.policyReason}
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
                                <div className="flex items-center gap-3 py-2">
                                    <span className="w-2 h-2 bg-violet-700 dark:bg-violet-500 animate-pulse" />
                                    <span className="editorial-label text-neutral-500 dark:text-neutral-400">
                                        {loadingStep === 1 ? "Analyzing prompt" : "Checking compliance"}
                                    </span>
                                </div>
                            )}
                        </div>

                        <div className="p-4 border-t border-neutral-200 dark:border-neutral-800">
                            <p className="editorial-label text-neutral-400 dark:text-neutral-500 mb-3">Try reaching a guardrail</p>
                            <div className="flex overflow-x-auto gap-3 pb-1 no-scrollbar scroll-smooth">
                                {DEMO_EXAMPLES.map((ex, i) => (
                                    <button
                                        key={i}
                                        onClick={() => handlePrompt(i)}
                                        disabled={loadingStep !== 0}
                                        className="flex-shrink-0 w-64 px-4 py-3 border border-neutral-200 dark:border-neutral-800 text-xs font-medium text-neutral-600 dark:text-neutral-300 hover:border-violet-700 dark:hover:border-violet-500 hover:text-violet-700 dark:hover:text-violet-400 transition-colors disabled:opacity-50 text-left line-clamp-2 h-14"
                                    >
                                        {ex.prompt}
                                    </button>
                                ))}
                            </div>
                        </div>
                    </div>

                    {/* Feature 5: Metrics Dashboard */}
                    <div className={`${cardBase} md:col-span-1 md:row-span-2`}>
                        <span className="editorial-label text-violet-700 dark:text-violet-400 mb-10">Visibility</span>
                        <div className="flex-1 flex flex-col">
                            <h3 className="text-lg font-semibold mb-3 text-neutral-950 dark:text-white">Metrics dashboard</h3>
                            <p className="text-neutral-500 dark:text-neutral-400 text-sm leading-relaxed mb-6">
                                Live visibility into your AI performance, spend, and latency. One dashboard to monitor everything.
                            </p>
                            <div className="mt-auto flex items-end gap-1 h-20">
                                <div className="bg-violet-700 dark:bg-violet-500 w-full h-[60%]" />
                                <div className="bg-violet-700 dark:bg-violet-500 w-full h-[85%]" />
                                <div className="bg-violet-700 dark:bg-violet-500 w-full h-[45%]" />
                                <div className="bg-red-600 dark:bg-red-500 w-full h-[95%]" />
                                <div className="bg-violet-700 dark:bg-violet-500 w-full h-[70%]" />
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <style>{`
                .custom-scrollbar::-webkit-scrollbar { width: 4px; }
                .custom-scrollbar::-webkit-scrollbar-track { background: transparent; }
                .custom-scrollbar::-webkit-scrollbar-thumb { background: #a1a1aa; }
                .no-scrollbar::-webkit-scrollbar { display: none; }
                .no-scrollbar { -ms-overflow-style: none; scrollbar-width: none; }
            `}</style>
        </section>
    );
};

export default GuideraBentoSection;
