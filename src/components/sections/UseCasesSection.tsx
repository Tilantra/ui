import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ScrollReveal, ScrollRevealItem } from "@/components/ui/scroll-reveal";
import {
    AlertTriangle, Scale, Shield, Megaphone, MessageSquareWarning, ShoppingCart,
    Terminal, Cpu, Search,
} from "lucide-react";

// ─── Guidera cases ────────────────────────────────────────────────────────────

const guideraCases = [
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

// ─── Capsule Hub cases ────────────────────────────────────────────────────────

const capsuleHubCases = [
    {
        company: "Engineering",
        icon: Terminal,
        incident: "The Spec That Got Lost Between Tools",
        what: "A senior engineer spent three days re-explaining a complex auth migration spec across ChatGPT, Figma, and their IDE. Every new session started cold. By the time the code landed in review, it had drifted from the original requirements because each hop introduced a subtle misremembering.",
        how: [
            "Capture the requirements session from ChatGPT as a Capsule with one click",
            "Drop into Figma conversations to align design — same context, no re-typing",
            "Connect via MCP so Cursor codes against the exact spec from the first line",
            "Version the Capsule as decisions evolve — the IDE always sees the latest state",
        ],
    },
    {
        company: "Marketing",
        icon: Megaphone,
        incident: "When Everyone Had a Different Version of the Story",
        what: "A growth-stage startup's marketing, sales, and product teams were all pitching the product differently. Positioning lived in Notion, Slack threads, and people's memories. Launch messaging was inconsistent, and no one could agree on what the product actually did.",
        how: [
            "Create one team Capsule with approved positioning, key claims, and competitor talking points",
            "All team members inject the same vetted context into their AI writing tools",
            "Update once when messaging changes — one place, one version of truth",
            "Tag stable releases so 'the launch brief' is always findable and never overwritten",
        ],
    },
    {
        company: "AI / Automation",
        icon: Cpu,
        incident: "Three Agents, Zero Shared Memory",
        what: "A team built a multi-agent pipeline: planner → coder → reviewer. Each agent started from a static system prompt with no memory of prior decisions. The reviewer kept re-flagging issues the planner had already resolved. Every run re-litigated the same ground.",
        how: [
            "Planner produces a Capsule containing decisions, constraints, and rationale from each run",
            "Coding agent consumes it via MCP — receives the exact spec the planner intended",
            "Reviewer agent receives the updated Capsule — context includes what changed and why",
            "The Capsule ID and version act as a deterministic shared reference across all agents",
        ],
    },
    {
        company: "Sales",
        icon: ShoppingCart,
        incident: "Every RFP Started From Scratch",
        what: "Solutions engineers spent 40% of their RFP time re-researching the same product capabilities, pricing rationale, and security answers. Different SEs gave different answers to identical questions. Proposals were inconsistent and sometimes contradicted each other.",
        how: [
            "Capture discovery call and RFP-answer sessions as versioned Capsules",
            "All SEs inject the same fact base into their proposal-writing AI tools",
            "Update once when pricing or capabilities change — everyone pulls the latest automatically",
            "Role-based team folders ensure only verified answers reach proposals",
        ],
    },
    {
        company: "Research",
        icon: Search,
        incident: "Hours of Research, Lost at Tab Close",
        what: "A product researcher ran a 2-hour deep-dive across Gemini and Perplexity — competitive landscape, user pain points, market sizing. When they opened a new Claude session to write the strategy brief, they had to reconstruct everything from memory and fragmented notes.",
        how: [
            "Capture the Gemini research session as a Capsule the moment the session is complete",
            "Drop it into Claude to write the brief — full context available instantly, no reconstruction",
            "Attach PDF source documents to the Capsule so no evidence is lost",
            "Share to the Product team workspace so PMs build on the same foundation, not their own version",
        ],
    },
];

// ─── Shared tab panel ─────────────────────────────────────────────────────────

type Case = {
    company: string;
    icon: React.ComponentType<{ className?: string }>;
    incident: string;
    what: string;
    how: string[];
};

const TabPanel = ({
    cases,
    product,
}: {
    cases: Case[];
    product: "guidera" | "capsule-hub";
}) => {
    const [active, setActive] = useState(0);
    const current = cases[active];
    const Icon = current.icon;

    const isGuidera = product === "guidera";
    const tabActiveClass = isGuidera
        ? "bg-blue-50 dark:bg-blue-500/10 border-blue-200 dark:border-blue-500/20 text-blue-600 dark:text-blue-300"
        : "bg-violet-50 dark:bg-violet-500/10 border-violet-200 dark:border-violet-500/20 text-violet-600 dark:text-violet-300";
    const iconActiveClass = isGuidera ? "text-blue-400" : "text-violet-400";
    const iconBgClass = isGuidera ? "bg-blue-500/10 border-blue-500/15" : "bg-violet-500/10 border-violet-500/15";
    const boxBgClass = isGuidera ? "bg-blue-500/[0.06] border border-blue-500/[0.12]" : "bg-violet-500/[0.06] border border-violet-500/[0.12]";
    const boxLabelClass = isGuidera ? "text-blue-400" : "text-violet-400";
    const dotClass = isGuidera ? "bg-blue-500 dark:bg-blue-400" : "bg-violet-500 dark:bg-violet-400";
    const preventionLabel = isGuidera ? "How Guidera prevents this" : "How Capsule Hub fixes this";

    return (
        <div className="flex flex-col lg:flex-row gap-6 max-w-5xl mx-auto">
            {/* Tab list */}
            <div className="flex flex-row lg:flex-col gap-1 overflow-x-auto lg:overflow-visible lg:w-52 shrink-0 pb-2 lg:pb-0">
                {cases.map((c, i) => {
                    const TabIcon = c.icon;
                    return (
                        <button
                            key={c.company}
                            onClick={() => setActive(i)}
                            className={`flex items-center gap-2.5 px-3 py-2.5 rounded-lg text-left text-sm font-medium whitespace-nowrap transition-all duration-200 border
                                ${active === i
                                    ? tabActiveClass
                                    : "border-transparent text-slate-500 dark:text-white/35 hover:text-slate-800 dark:hover:text-white/70 hover:bg-slate-100 dark:hover:bg-white/[0.04]"
                                }`}
                        >
                            <TabIcon className={`w-3.5 h-3.5 shrink-0 ${active === i ? iconActiveClass : "text-slate-400 dark:text-white/25"}`} />
                            {c.company}
                        </button>
                    );
                })}
            </div>

            {/* Content panel */}
            <div className="flex-1 border border-slate-200 dark:border-white/[0.07] rounded-2xl bg-white/70 dark:bg-[hsl(224,24%,6%)] overflow-hidden min-h-[340px]">
            <div className="flex-1 p-8 bg-white/50 dark:bg-transparent">
                <AnimatePresence mode="wait">
                    <motion.div
                        key={active}
                        initial={{ opacity: 0, y: 10 }}
                        animate={{ opacity: 1, y: 0 }}
                        exit={{ opacity: 0, y: -8 }}
                        transition={{ duration: 0.25, ease: "easeOut" }}
                    >
                        <div className="flex items-start gap-4 mb-6">
                            <div className={`w-10 h-10 rounded-xl ${iconBgClass} border flex items-center justify-center shrink-0`}>
                                <Icon className={`w-5 h-5 ${iconActiveClass}`} />
                            </div>
                            <div>
                                <p className="text-xs text-slate-500 dark:text-white/30 uppercase tracking-widest font-semibold mb-1">{current.company}</p>
                                <h3 className="text-xl font-bold text-slate-900 dark:text-white leading-snug">{current.incident}</h3>
                            </div>
                        </div>

                        <p className="text-slate-600 dark:text-white/60 leading-relaxed mb-8 border-l-2 border-slate-200 dark:border-white/[0.1] pl-4">
                            {current.what}
                        </p>

                        <div className={`rounded-xl ${boxBgClass} p-6`}>
                            <p className={`text-xs font-bold ${boxLabelClass} uppercase tracking-widest mb-4`}>{preventionLabel}</p>
                            <ul className="space-y-3">
                                {current.how.map((point, i) => (
                                    <li key={i} className="flex items-start gap-3 text-sm text-slate-700 dark:text-white/70">
                                        <span className={`w-1.5 h-1.5 rounded-full ${dotClass} mt-2 shrink-0`} />
                                        {point}
                                    </li>
                                ))}
                            </ul>
                        </div>
                    </motion.div>
                </AnimatePresence>
            </div>
            </div>
        </div>
    );
};

// ─── Main Component ───────────────────────────────────────────────────────────

const UseCasesSection = () => {
    const [product, setProduct] = useState<"guidera" | "capsule-hub">("guidera");

    const activeCases = product === "guidera" ? guideraCases : capsuleHubCases;

    return (
        <section id="use-cases" className="py-24 bg-transparent relative overflow-hidden">
            <div className="absolute inset-0 bg-[radial-gradient(ellipse_60%_50%_at_50%_100%,hsl(217,91%,60%,0.05),transparent)] pointer-events-none" />

            <div className="container mx-auto px-6">
                <ScrollReveal>

                    {/* Product toggle */}
                    <ScrollRevealItem className="flex justify-center mb-16">
                        <div className="flex items-center gap-1 p-1 bg-slate-100/50 dark:bg-white/[0.03] border border-slate-200 dark:border-white/[0.08] rounded-full mx-auto w-max shadow-sm dark:shadow-none">
                            <button
                                onClick={() => setProduct("guidera")}
                                className={`px-6 py-2 rounded-full text-sm font-medium transition-all ${product === "guidera"
                                    ? "bg-white dark:bg-white/10 text-blue-600 dark:text-white shadow-sm"
                                    : "text-slate-500 dark:text-white/50 hover:text-slate-900 dark:hover:text-white hover:bg-slate-200/50 dark:hover:bg-white/5"
                                    }`}
                            >
                                Guidera
                            </button>
                            <button
                                onClick={() => setProduct("capsule-hub")}
                                className={`px-6 py-2 rounded-full text-sm font-medium transition-all ${product === "capsule-hub"
                                    ? "bg-white dark:bg-white/10 text-violet-600 dark:text-white shadow-sm"
                                    : "text-slate-500 dark:text-white/50 hover:text-slate-900 dark:hover:text-white hover:bg-slate-200/50 dark:hover:bg-white/5"
                                    }`}
                            >
                                Capsule Hub
                            </button>
                        </div>
                    </ScrollRevealItem>

                    {/* Dynamic heading */}
                    <ScrollRevealItem className="text-center mb-14">
                        <AnimatePresence mode="wait">
                            <motion.div
                                key={product}
                                initial={{ opacity: 0, y: 8 }}
                                animate={{ opacity: 1, y: 0 }}
                                exit={{ opacity: 0, y: -8 }}
                                transition={{ duration: 0.2 }}
                            >
                                <h2 className="text-3xl md:text-5xl font-bold" style={{ letterSpacing: "-0.03em" }}>
                                    <span className="headline-gradient">Why </span>
                                    <span className={product === "guidera"
                                        ? "gradient-text"
                                        : "bg-gradient-to-r from-cyan-400 to-violet-500 bg-clip-text text-transparent"
                                    }>
                                        {product === "guidera" ? "Guidera" : "Capsule Hub"}
                                    </span>
                                </h2>
                                <p className="mt-3 text-slate-600 dark:text-white/35 text-base max-w-xl mx-auto">
                                    {product === "guidera"
                                        ? "Real AI failures that Guidera's compliance and routing layer would have prevented."
                                        : "Real workflows where teams lose hours every week — and how Capsule Hub eliminates the friction."}
                                </p>
                            </motion.div>
                        </AnimatePresence>
                    </ScrollRevealItem>

                    {/* Tab panel — keyed on product so state resets */}
                    <AnimatePresence mode="wait">
                        <motion.div
                            key={product}
                            initial={{ opacity: 0, y: 16 }}
                            animate={{ opacity: 1, y: 0 }}
                            exit={{ opacity: 0, y: -8 }}
                            transition={{ duration: 0.3, ease: [0.16, 1, 0.3, 1] }}
                        >
                            <TabPanel cases={activeCases} product={product} />
                        </motion.div>
                    </AnimatePresence>

                </ScrollReveal>
            </div>
        </section>
    );
};

export default UseCasesSection;
