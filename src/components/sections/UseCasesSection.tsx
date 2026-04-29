import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ScrollReveal, ScrollRevealItem } from "@/components/ui/scroll-reveal";
import { AlertTriangle, Scale, Shield, Megaphone, MessageSquareWarning, ShoppingCart } from "lucide-react";

const cases = [
    {
        company: "Klarna",
        icon: AlertTriangle,
        incident: "When Automation Crossed the Line",
        what: "Klarna's bot left customers stuck in endless loops with no human fallback. Trust collapsed and the company had to reverse course — burning months of engineering and brand equity in the process.",
        how: ["Intelligent routing escalates complex cases to best-fit models automatically", "Human handoff triggers fire before frustration thresholds are reached", "On-brand tone enforcement applied across all responses"],
    },
    {
        company: "Air Canada",
        icon: Scale,
        incident: "The Chatbot That Promised Too Much",
        what: "Air Canada's bot invented a bereavement refund policy that didn't exist — and the airline was held legally liable in court. A single unchecked response created obligations that cost real money.",
        how: ["Policy compliance layer checks every response against org-wide rules before delivery", "Prompt inputs are flagged proactively if they risk creating legal commitments", "Ambiguous queries escalate with minimal latency — not after damage is done"],
    },
    {
        company: "Claude (Anthropic)",
        icon: Shield,
        incident: "When AI Became a Security Risk",
        what: "Hackers used prompt injection to trick Claude into executing malware — turning a helpful assistant into an attack vector for sensitive data exfiltration.",
        how: ["Real-time threat filter scans every input and output for injection patterns", "Non-compliant or suspicious responses are blocked before reaching end users", "Instant alerts surface novel attack signatures as they're detected"],
    },
    {
        company: "Grok (xAI)",
        icon: Megaphone,
        incident: "When AI Spread Dangerous Myths",
        what: "A single rogue system prompt edit turned Grok into a megaphone for conspiracy theories at scale — undermining years of trust with millions of users in hours.",
        how: ["Ethics engine runs on every response before it surfaces to users", "Every system prompt change is logged with full audit trail and diff history", "Fallback mechanisms neutralize non-compliant outputs automatically"],
    },
    {
        company: "DPD",
        icon: MessageSquareWarning,
        incident: "When Profanity Became Customer Service",
        what: "DPD's bot was manipulated into swearing at customers and writing derogatory poems about its own company — going viral and becoming a textbook PR disaster.",
        how: ["Content moderation filters enforce professional tone on every message", "Prompt injection attacks are neutralized before they alter bot behavior", "Brand voice policies applied consistently regardless of user manipulation attempts"],
    },
    {
        company: "McDonald's",
        icon: ShoppingCart,
        incident: "AI That Couldn't Take an Order",
        what: "McDonald's AI drive-thru added bacon to ice cream, ordered hundreds of unwanted nuggets, and was pulled from 100+ locations after months of customer frustration.",
        how: ["Context-aware processing validates intent before confirming any action", "Orders are verified against business logic before the transaction is committed", "Seamless human handoff activates the moment confidence drops below threshold"],
    },
];

const UseCasesSection = () => {
    const [active, setActive] = useState(0);
    const current = cases[active];
    const Icon = current.icon;

    return (
        <section id="use-cases" className="py-16 bg-transparent relative overflow-hidden">
            <div className="absolute inset-0 bg-[radial-gradient(ellipse_60%_50%_at_50%_100%,hsl(217,91%,60%,0.05),transparent)] pointer-events-none" />

            <div className="container mx-auto px-6">
                <ScrollReveal>
                {/* Header */}
                <ScrollRevealItem className="text-center mb-14">
                    <h2 className="text-3xl md:text-5xl font-bold" style={{ letterSpacing: "-0.03em" }}>
                        <span className="headline-gradient">Why </span>
                        <span className="gradient-text">Guidera</span>
                    </h2>
                    <p className="mt-3 text-slate-600 dark:text-white/35 text-base max-w-xl mx-auto">
                        Real AI failures that Guidera's compliance and routing layer would have prevented.
                    </p>
                </ScrollRevealItem>

                {/* Vertical tabs layout (Tabs Component — Vertical Tabs Underline + Icons) */}
                <div className="flex flex-col lg:flex-row gap-6 max-w-5xl mx-auto">
                    {/* Left — tab list */}
                    <div className="flex flex-row lg:flex-col gap-1 overflow-x-auto lg:overflow-visible lg:w-52 shrink-0 pb-2 lg:pb-0">
                        {cases.map((c, i) => {
                            const TabIcon = c.icon;
                            return (
                                <button
                                    key={c.company}
                                    onClick={() => setActive(i)}
                                    className={`flex items-center gap-2.5 px-3 py-2.5 rounded-lg text-left text-sm font-medium whitespace-nowrap transition-all duration-200 border
                                        ${active === i
                                            ? "bg-blue-50 dark:bg-blue-500/10 border-blue-200 dark:border-blue-500/20 text-blue-600 dark:text-blue-300"
                                            : "border-transparent text-slate-500 dark:text-white/35 hover:text-slate-800 dark:hover:text-white/70 hover:bg-slate-100 dark:hover:bg-white/[0.04]"
                                        }`}
                                >
                                    <TabIcon className={`w-3.5 h-3.5 shrink-0 ${active === i ? "text-blue-500 dark:text-blue-400" : "text-slate-400 dark:text-white/25"}`} />
                                    {c.company}
                                </button>
                            );
                        })}
                    </div>

                    {/* Right — content panel */}
                    <div className="flex-1 border border-slate-200 dark:border-white/[0.07] rounded-2xl bg-white/70 dark:bg-[hsl(224,24%,6%)] overflow-hidden min-h-[340px]">
                        <AnimatePresence mode="wait">
                            <motion.div
                                key={active}
                                initial={{ opacity: 0, y: 10 }}
                                animate={{ opacity: 1, y: 0 }}
                                exit={{ opacity: 0, y: -8 }}
                                transition={{ duration: 0.25, ease: "easeOut" }}
                                className="p-8 h-full"
                            >
                                {/* Incident header */}
                                <div className="flex items-start gap-3 mb-5">
                                    <div className="w-9 h-9 rounded-lg bg-blue-500/10 border border-blue-500/15 flex items-center justify-center shrink-0">
                                        <Icon className="w-4 h-4 text-blue-400" />
                                    </div>
                                    <div>
                                        <p className="text-xs text-slate-500 dark:text-white/30 uppercase tracking-widest mb-1">{current.company}</p>
                                        <h3 className="text-lg font-bold text-slate-900 dark:text-white leading-snug">{current.incident}</h3>
                                    </div>
                                </div>

                                {/* What went wrong */}
                                <p className="text-sm text-slate-600 dark:text-white/45 leading-relaxed mb-6 border-l-2 border-slate-200 dark:border-white/[0.06] pl-4">
                                    {current.what}
                                </p>

                                {/* Guidera prevention */}
                                <div className="rounded-xl bg-blue-500/[0.06] border border-blue-500/[0.12] p-5">
                                    <p className="text-xs font-semibold text-blue-400 uppercase tracking-widest mb-3">How Guidera prevents this</p>
                                    <ul className="space-y-2">
                                        {current.how.map((point, i) => (
                                            <li key={i} className="flex items-start gap-2.5 text-sm text-slate-600 dark:text-white/55">
                                                <span className="w-1.5 h-1.5 rounded-full bg-blue-500 dark:bg-blue-400 mt-1.5 shrink-0" />
                                                {point}
                                            </li>
                                        ))}
                                    </ul>
                                </div>
                            </motion.div>
                        </AnimatePresence>
                    </div>
                </div>
                </ScrollReveal>
            </div>
        </section>
    );
};

export default UseCasesSection;
