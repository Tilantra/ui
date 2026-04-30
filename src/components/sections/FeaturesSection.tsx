import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ScrollReveal, ScrollRevealItem } from "@/components/ui/scroll-reveal";
import { Zap, Shield, Database, Cpu, Globe, BarChart3, Move, GitBranch, Users, Terminal, Sparkles } from "lucide-react";

// ─── Guidera features ─────────────────────────────────────────────────────────

const guideraFeatures = [
    {
        icon: Zap,
        title: "Smart Routing",
        description: "Auto-selects the best-performing model per request based on cost, latency, and task complexity. No manual config.",
        metric: "90% accuracy",
        tags: ["Routing", "AI"],
        status: "Live",
        colSpan: 2,
        hero: true,
    },
    {
        icon: Shield,
        title: "Compliance Layer",
        description: "On-demand audit reports and enterprise-grade governance baked in.",
        metric: "SOC2",
        tags: ["Compliance"],
        status: "Active",
    },
    {
        icon: Database,
        title: "Secure Caching",
        description: "Reuse prompts across sessions to slash token usage dramatically.",
        metric: "70% savings",
        tags: ["Cost"],
        status: "Active",
    },
    {
        icon: Cpu,
        title: "Prompt Suggestions",
        description: "AI-generated prompt improvements to optimize outputs automatically.",
        metric: "2× Productivity",
        tags: ["AI", "UX"],
        status: "Beta",
    },
    {
        icon: Globe,
        title: "Multi-Model Hub",
        description: "Access 40+ top AI models through a single unified API.",
        metric: "40+ Models",
        tags: ["Models"],
        status: "Live",
    },
    {
        icon: BarChart3,
        title: "Cost Guardrails",
        description: "Real-time token budgeting that prevents runaway spend before it happens. Set hard limits per user, team, or project.",
        metric: "Zero Overruns",
        tags: ["Cost", "Ops"],
        status: "Live",
        colSpan: 3,
    },
];

// ─── Capsule Hub features ─────────────────────────────────────────────────────

const capsuleHubFeatures = [
    {
        icon: Zap,
        title: "One-Click Capture",
        description: "Click the extension in any supported AI chat. Context is extracted and saved as a Capsule instantly — goals, decisions, constraints, attachments.",
        metric: "1 click",
        tags: ["Capture", "UX"],
        status: "Live",
        colSpan: 2,
        hero: true,
    },
    {
        icon: Move,
        title: "Drag & Drop Injection",
        description: "Open your library overlay, drag a Capsule into the chat input. Context loads instantly — no copy-paste chains.",
        metric: "Zero copy-paste",
        tags: ["Inject", "UX"],
        status: "Live",
    },
    {
        icon: GitBranch,
        title: "Version Control",
        description: "Branch Capsules as ideas mature. Roll back to stable checkpoints. Tag the golden prompt your team agreed on.",
        metric: "Full history",
        tags: ["Versions"],
        status: "Pro+",
    },
    {
        icon: Users,
        title: "Team Workspaces",
        description: "Organize by department. Transparent ownership. Share the 'golden prompt' so everyone injects the same vetted context.",
        metric: "Role-based",
        tags: ["Teams"],
        status: "Pro+",
    },
    {
        icon: Terminal,
        title: "MCP Integration",
        description: "Connect Capsules to Cursor and Antigravity via MCP. Your agent codes against the exact spec without re-explaining.",
        metric: "IDE-native",
        tags: ["Dev", "MCP"],
        status: "Live",
    },
    {
        icon: Sparkles,
        title: "Dynamic Context",
        description: "AI-powered semantic filtering — only the most relevant prior messages are injected. Not a dump of everything.",
        metric: "AI-filtered",
        tags: ["AI", "Context"],
        status: "Elite",
        colSpan: 3,
    },
];

// ─── Feature card ─────────────────────────────────────────────────────────────

type Feature = {
    icon: React.ComponentType<{ className?: string }>;
    title: string;
    description: string;
    metric: string;
    tags: string[];
    status: string;
    colSpan?: number;
    hero?: boolean;
};

const FeatureCard = ({ f, product }: { f: Feature; product: "guidera" | "capsule-hub" }) => {
    const Icon = f.icon;
    const isCapsule = product === "capsule-hub";

    const heroClass = isCapsule
        ? "border-violet-200 dark:border-violet-500/30 bg-violet-50/80 dark:bg-violet-900/20 shadow-xl shadow-violet-200/50 dark:shadow-[0_0_40px_rgba(139,92,246,0.15)] hover:shadow-2xl hover:shadow-violet-200/80 dark:hover:shadow-[0_0_60px_rgba(139,92,246,0.25)]"
        : "border-blue-200 dark:border-blue-500/30 bg-blue-50/80 dark:bg-blue-900/20 shadow-xl shadow-blue-200/50 dark:shadow-[0_0_40px_rgba(59,130,246,0.15)] hover:shadow-2xl hover:shadow-blue-200/80 dark:hover:shadow-[0_0_60px_rgba(59,130,246,0.25)]";
    const iconColorClass = isCapsule ? "text-violet-500 dark:text-violet-400" : "text-blue-500 dark:text-cyan-400";

    return (
        <div
            className={`group relative p-6 rounded-3xl border transition-all duration-500 cursor-default overflow-hidden backdrop-blur-xl
                ${f.colSpan === 2 ? "md:col-span-2" : f.colSpan === 3 ? "md:col-span-3" : ""}
                ${f.hero
                    ? heroClass
                    : "border-slate-200 shadow-xl shadow-slate-200/40 dark:shadow-none dark:border-white/5 bg-white/90 dark:bg-white/[0.02] hover:bg-white dark:hover:bg-white/[0.04] hover:border-slate-300 dark:hover:border-white/20 hover:-translate-y-1 hover:shadow-2xl dark:hover:shadow-[0_0_20px_rgba(255,255,255,0.05)]"
                }`}
        >
            <div className="absolute inset-0 bento-dot-overlay transition-opacity duration-300 rounded-3xl opacity-0 group-hover:opacity-100" style={f.hero ? { opacity: 1 } : {}} />
            <div className="absolute inset-0 -z-10 rounded-3xl p-px bg-gradient-to-br from-transparent via-white/[0.06] to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />

            <div className="relative flex flex-col gap-3">
                <div className="flex items-center justify-between">
                    <div className="w-10 h-10 rounded-xl flex items-center justify-center bg-slate-100 dark:bg-white/[0.05] group-hover:bg-gradient-to-br group-hover:from-blue-500/10 dark:group-hover:from-cyan-500/20 group-hover:to-transparent dark:group-hover:to-blue-500/10 transition-all duration-300">
                        <Icon className={`w-5 h-5 ${iconColorClass}`} />
                    </div>
                    <span className="text-xs font-medium px-2 py-1 rounded-lg backdrop-blur-sm bg-slate-100/50 dark:bg-white/[0.06] text-slate-500 dark:text-white/40 transition-colors group-hover:bg-slate-200/50 dark:group-hover:bg-white/[0.1] group-hover:text-slate-800 dark:group-hover:text-white/60">
                        {f.status}
                    </span>
                </div>

                <div>
                    <div className="flex items-baseline gap-2 mb-1">
                        <h3 className="text-[15px] font-semibold text-slate-800 dark:text-white/80 group-hover:text-slate-900 dark:group-hover:text-white transition-colors tracking-tight">
                            {f.title}
                        </h3>
                        <span className="text-xs text-slate-400 dark:text-white/25 font-normal">{f.metric}</span>
                    </div>
                    <p className="text-sm text-slate-500 dark:text-white/35 leading-snug">{f.description}</p>
                </div>

                <div className="flex items-center justify-between mt-1">
                    <div className="flex gap-1.5">
                        {f.tags.map(tag => (
                            <span key={tag} className="text-[11px] px-2 py-0.5 rounded-md bg-slate-100 dark:bg-white/[0.05] text-slate-400 dark:text-white/30 hover:bg-slate-200 dark:hover:bg-white/[0.09] hover:text-slate-600 dark:hover:text-white/50 transition-all">
                                #{tag}
                            </span>
                        ))}
                    </div>
                    <span className="text-xs text-slate-500 dark:text-white/20 opacity-0 group-hover:opacity-100 transition-opacity">Explore →</span>
                </div>
            </div>
        </div>
    );
};

// ─── Main Component ───────────────────────────────────────────────────────────

const FeaturesSection = () => {
    const [product, setProduct] = useState<"guidera" | "capsule-hub">("guidera");
    const features = product === "guidera" ? guideraFeatures : capsuleHubFeatures;

    return (
        <section id="features" className="py-16 bg-transparent relative overflow-hidden">
            <div className="absolute inset-0 bg-[radial-gradient(ellipse_60%_40%_at_50%_0%,hsl(217,91%,60%,0.05),transparent)] pointer-events-none" />

            <div className="container mx-auto px-6">
                <ScrollReveal>

                    {/* Product toggle */}
                    <ScrollRevealItem className="flex justify-center mb-10">
                        <div className="inline-flex items-center gap-1 p-1 rounded-full border border-slate-200 dark:border-white/[0.07] bg-white/50 dark:bg-white/[0.02] backdrop-blur-sm">
                            {([
                                { key: "guidera",     label: "Guidera",     activeClass: "bg-blue-50 dark:bg-blue-500/10 text-blue-600 dark:text-blue-400 border border-blue-200 dark:border-blue-500/20" },
                                { key: "capsule-hub", label: "Capsule Hub", activeClass: "bg-violet-50 dark:bg-violet-500/10 text-violet-600 dark:text-violet-400 border border-violet-200 dark:border-violet-500/20" },
                            ] as const).map(tab => (
                                <button
                                    key={tab.key}
                                    onClick={() => setProduct(tab.key)}
                                    className={`px-5 py-2 rounded-full text-sm font-medium transition-all duration-200 ${
                                        product === tab.key
                                            ? tab.activeClass
                                            : "text-slate-500 dark:text-white/35 hover:text-slate-900 dark:hover:text-white border border-transparent"
                                    }`}
                                >
                                    {tab.label}
                                </button>
                            ))}
                        </div>
                    </ScrollRevealItem>

                    {/* Dynamic heading */}
                    <ScrollRevealItem className="text-center mb-12">
                        <AnimatePresence mode="wait">
                            <motion.div
                                key={product}
                                initial={{ opacity: 0, y: 8 }}
                                animate={{ opacity: 1, y: 0 }}
                                exit={{ opacity: 0, y: -8 }}
                                transition={{ duration: 0.2 }}
                            >
                                <h2 className="text-3xl md:text-5xl font-bold" style={{ letterSpacing: "-0.03em" }}>
                                    <span className="headline-gradient">Powering </span>
                                    <span className={product === "guidera"
                                        ? "gradient-text"
                                        : "bg-gradient-to-r from-cyan-400 to-violet-500 bg-clip-text text-transparent"
                                    }>
                                        {product === "guidera" ? "Innovation" : "Context"}
                                    </span>
                                </h2>
                            </motion.div>
                        </AnimatePresence>
                    </ScrollRevealItem>

                    {/* Bento grid — keyed on product so cards re-animate on switch */}
                    <AnimatePresence mode="wait">
                        <motion.div
                            key={product}
                            initial={{ opacity: 0, y: 16 }}
                            animate={{ opacity: 1, y: 0 }}
                            exit={{ opacity: 0, y: -8 }}
                            transition={{ duration: 0.3, ease: [0.16, 1, 0.3, 1] }}
                        >
                            <div className="grid grid-cols-1 md:grid-cols-3 gap-3 max-w-5xl mx-auto">
                                {features.map((f) => (
                                    <FeatureCard key={f.title} f={f} product={product} />
                                ))}
                            </div>
                        </motion.div>
                    </AnimatePresence>

                </ScrollReveal>
            </div>
        </section>
    );
};

export default FeaturesSection;
