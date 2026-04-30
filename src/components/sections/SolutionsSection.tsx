import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Link } from "react-router-dom";
import { CheckCircle2 } from "lucide-react";
import { ScrollReveal, ScrollRevealItem } from "@/components/ui/scroll-reveal";

// ─── Product data ─────────────────────────────────────────────────────────────

type ProductKey = "guidera" | "capsule-hub";

const PRODUCTS = {
    guidera: {
        label: "Guidera",
        logo: "/GuideraLogo.png",
        tag: "AI Gateway",
        tagColor: "bg-blue-500/10 text-blue-600 dark:text-blue-400 border-blue-500/20",
        headline: "The Intelligent Control Layer for Enterprise AI",
        body: "As teams scale GenAI across products, models, and regions, costs spike, outputs drift, and compliance becomes a liability. Guidera is the gateway that fixes all three — routing every request to the optimal model, enforcing guardrails before they breach, and giving finance full cost visibility without slowing engineering down.",
        stats: [
            { value: "60%+",  label: "Lower AI costs" },
            { value: "40+",   label: "Models, one API" },
            { value: "99.9%", label: "Uptime SLA" },
        ],
        features: [
            "ARMS intelligent routing — cost/performance tradeoff per request",
            "No-code compliance rules — write policies in plain English",
            "Real-time PII redaction and content moderation",
            "Secure prompt caching — 70% token savings on repeated prompts",
            "Live cost and latency dashboard with budget alerts",
            "Full audit trail for every model call, SOC2 ready",
        ],
        accentClass: "from-blue-500 to-cyan-400",
        tabActive: "bg-blue-50 dark:bg-blue-500/10 border-blue-200 dark:border-blue-500/20 text-blue-600 dark:text-blue-400",
        primaryCta:   { label: "Explore Guidera",  href: "/guidera",          external: false },
        secondaryCta: { label: "Read the docs",    href: "/docs/quickstart",  external: false },
        visual: "guidera" as const,
    },
    "capsule-hub": {
        label: "Capsule Hub",
        logo: "/CapsuleHubLogo.png",
        tag: "Context Layer",
        tagColor: "bg-violet-500/10 text-violet-600 dark:text-violet-400 border-violet-500/20",
        headline: "Never Start From Zero Again",
        body: "Most teams waste hours re-explaining the same project context to every new AI chat. Capsule Hub turns those scattered conversations into portable Capsules — structured bundles of goals, decisions, and attachments that travel between tools. Capture once in ChatGPT, inject into Claude, pipe into Cursor via MCP, share to your team. Context loss is over.",
        stats: [
            { value: "1-click", label: "Context capture" },
            { value: "10+",     label: "Supported tools" },
            { value: "Free",    label: "To get started" },
        ],
        features: [
            "Capture from ChatGPT, Claude, Gemini, and Gmail with one click",
            "Drag-and-drop injection into any supported AI chat",
            "Version control — branch ideas, roll back, tag the golden prompt",
            "Team workspaces by department with transparent ownership",
            "MCP server for Cursor and Antigravity IDE integration",
            "Dynamic context — AI filters only the relevant prior messages",
        ],
        accentClass: "from-cyan-400 to-violet-500",
        tabActive: "bg-violet-50 dark:bg-violet-500/10 border-violet-200 dark:border-violet-500/20 text-violet-600 dark:text-violet-400",
        primaryCta:   { label: "Explore Capsule Hub", href: "/capsule-hub",                                                                        external: false },
        secondaryCta: { label: "Get the extension",   href: "https://chromewebstore.google.com/detail/capsule-hub-by-tilantra/", external: true  },
        visual: "capsule-hub" as const,
    },
};

// ─── Guidera stacked screenshots visual ──────────────────────────────────────

const GUIDERA_IMAGES = [
    { src: "/GuideraPage1.png", label: "Smart routing dashboard — real-time model selection and cost tracking." },
    { src: "/GuideraPage2.png", label: "Compliance layer — policy rules enforced before every response." },
    { src: "/GuideraPage3.png", label: "Full audit trail — every model call logged, SOC2 ready." },
];

const GUIDERA_OFFSETS = [
    { x: -60, y: -45, rotate: -6,  scale: 0.93 },
    { x: 0,   y: 0,   rotate: 0,   scale: 1    },
    { x: 60,  y: 45,  rotate: 6,   scale: 0.93 },
];

const GuideraVisual = () => {
    const [hovered, setHovered] = useState<number | null>(null);

    return (
        <div className="relative h-80 flex items-center justify-center">
            {GUIDERA_IMAGES.map((img, i) => {
                const base = GUIDERA_OFFSETS[i];
                const isHov = hovered === i;
                return (
                    <motion.div
                        key={img.src}
                        style={{ zIndex: isHov ? 10 : i + 1 }}
                        animate={{
                            x: isHov ? 0 : base.x,
                            y: isHov ? -8 : base.y,
                            rotate: isHov ? 0 : base.rotate,
                            scale: isHov ? 1.04 : base.scale,
                        }}
                        transition={{ type: "spring", stiffness: 300, damping: 25 }}
                        onHoverStart={() => setHovered(i)}
                        onHoverEnd={() => setHovered(null)}
                        className={`absolute w-72 rounded-xl overflow-hidden shadow-2xl border cursor-pointer transition-shadow duration-300 ${
                            isHov
                                ? "ring-4 ring-blue-500/30 ring-offset-4 ring-offset-white dark:ring-offset-slate-900 border-blue-300 dark:border-blue-500/30"
                                : "border-slate-200 dark:border-white/10"
                        }`}
                    >
                        <img src={img.src} alt={img.label} className="w-full h-full object-cover" />
                    </motion.div>
                );
            })}
            {hovered !== null && (
                <motion.p
                    key={hovered}
                    initial={{ opacity: 0, y: 4 }}
                    animate={{ opacity: 1, y: 0 }}
                    className="absolute -bottom-10 left-0 right-0 text-center text-[11px] text-slate-400 dark:text-white/30 italic px-4"
                >
                    {GUIDERA_IMAGES[hovered].label}
                </motion.p>
            )}
        </div>
    );
};

// ─── Capsule Hub flow visual ──────────────────────────────────────────────────

const CapsuleFlowVisual = () => {
    const sources = [
        { label: "ChatGPT", logo: "/ChatgptLogo.png", color: "border-emerald-300/40 dark:border-emerald-500/20 bg-emerald-50/50 dark:bg-emerald-900/10" },
        { label: "Gemini",  logo: "/GeminiLogo.png",  color: "border-blue-300/40 dark:border-blue-500/20 bg-blue-50/50 dark:bg-blue-900/10" },
        { label: "Gmail",   logo: "/GmailLogo.png",   color: "border-red-300/40 dark:border-red-500/20 bg-red-50/50 dark:bg-red-900/10" },
    ];
    const targets = [
        { label: "Claude",  logo: "/ClaudeLogo.png",          color: "border-amber-300/40 dark:border-amber-500/20 bg-amber-50/50 dark:bg-amber-900/10" },
        { label: "Cursor",  logo: null, emoji: "▸",           color: "border-slate-300/40 dark:border-slate-500/20 bg-slate-50/50 dark:bg-slate-800/30 text-slate-700 dark:text-slate-300" },
        { label: "Team",    logo: null, emoji: "👥",           color: "border-violet-300/40 dark:border-violet-500/20 bg-violet-50/50 dark:bg-violet-900/10 text-violet-700 dark:text-violet-400" },
    ];

    return (
        <div className="relative w-full h-56 flex items-center justify-between px-2 gap-2">
            {/* Source column */}
            <div className="flex flex-col gap-3 z-10">
                {sources.map((s, i) => (
                    <motion.div
                        key={s.label}
                        initial={{ opacity: 0, x: -16 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ delay: i * 0.1, duration: 0.4 }}
                        className={`flex items-center gap-2 px-3 py-2 rounded-xl border text-xs font-semibold ${s.color}`}
                    >
                        <img src={s.logo} alt={s.label} className="w-4 h-4 object-contain shrink-0" />
                        <span className="text-slate-700 dark:text-slate-200">{s.label}</span>
                    </motion.div>
                ))}
            </div>

            {/* SVG connecting lines */}
            <svg className="absolute inset-0 w-full h-full pointer-events-none" preserveAspectRatio="none">
                {[0, 1, 2].map(i => (
                    <motion.path
                        key={`left-${i}`}
                        d={`M 90 ${62 + i * 52} Q 160 ${130} 195 128`}
                        fill="none"
                        stroke="rgba(139,92,246,0.25)"
                        strokeWidth="1"
                        strokeDasharray="4 3"
                        initial={{ pathLength: 0, opacity: 0 }}
                        animate={{ pathLength: 1, opacity: 1 }}
                        transition={{ delay: i * 0.15, duration: 0.8, ease: "easeOut" }}
                    />
                ))}
                {[0, 1, 2].map(i => (
                    <motion.path
                        key={`right-${i}`}
                        d={`M 225 128 Q 270 ${62 + i * 52} 330 ${62 + i * 52}`}
                        fill="none"
                        stroke="rgba(139,92,246,0.25)"
                        strokeWidth="1"
                        strokeDasharray="4 3"
                        initial={{ pathLength: 0, opacity: 0 }}
                        animate={{ pathLength: 1, opacity: 1 }}
                        transition={{ delay: 0.5 + i * 0.15, duration: 0.8, ease: "easeOut" }}
                    />
                ))}
            </svg>

            {/* Centre capsule node */}
            <motion.div
                animate={{
                    scale: [1, 1.06, 1],
                    boxShadow: [
                        "0 0 0 0 rgba(139,92,246,0)",
                        "0 0 0 16px rgba(139,92,246,0.12)",
                        "0 0 0 0 rgba(139,92,246,0)",
                    ],
                }}
                transition={{ duration: 2.8, repeat: Infinity, ease: "easeInOut" }}
                className="flex flex-col items-center justify-center w-20 h-20 rounded-2xl bg-gradient-to-br from-cyan-500/10 to-violet-600/10 border border-violet-300/30 dark:border-violet-500/30 shadow-xl shrink-0 z-10 overflow-hidden p-1"
            >
                <img src="/capsule.png" alt="Capsule" className="w-full h-full object-contain" />
            </motion.div>

            {/* Target column */}
            <div className="flex flex-col gap-3 z-10">
                {targets.map((t, i) => (
                    <motion.div
                        key={t.label}
                        initial={{ opacity: 0, x: 16 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ delay: 0.5 + i * 0.1, duration: 0.4 }}
                        className={`flex items-center gap-2 px-3 py-2 rounded-xl border text-xs font-semibold ${t.color}`}
                    >
                        {t.logo ? (
                            <img src={t.logo} alt={t.label} className="w-4 h-4 object-contain shrink-0" />
                        ) : (
                            <span>{t.emoji}</span>
                        )}
                        <span className="text-slate-700 dark:text-slate-200">{t.label}</span>
                    </motion.div>
                ))}
            </div>

            {/* Label */}
            <div className="absolute -bottom-6 left-0 right-0 text-center text-[11px] text-slate-400 dark:text-white/25 italic">
                Capture once · Inject anywhere
            </div>
        </div>
    );
};

// ─── Main Component ───────────────────────────────────────────────────────────

const SolutionsSection = () => {
    const [active, setActive] = useState<ProductKey>("guidera");
    const product = PRODUCTS[active];

    return (
        <section id="solutions" className="py-12 bg-transparent relative overflow-hidden">
            <div className="absolute inset-0 bg-[radial-gradient(ellipse_80%_40%_at_50%_50%,hsl(217,91%,60%,0.04),transparent)] pointer-events-none" />

            <div className="container mx-auto px-6">
                <ScrollReveal>
                    {/* Header */}
                    <ScrollRevealItem className="text-center mb-10">
                        <h2 className="text-3xl md:text-5xl font-bold mb-4" style={{ letterSpacing: "-0.03em" }}>
                            <span className="headline-gradient">Explore Our </span>
                            <span className="gradient-text">Products</span>
                        </h2>
                    </ScrollRevealItem>

                    {/* Tab row */}
                    <ScrollRevealItem className="flex items-center gap-2 mb-10 justify-center">
                        {(Object.keys(PRODUCTS) as ProductKey[]).map((key) => (
                            <button
                                key={key}
                                onClick={() => setActive(key)}
                                className={`px-5 py-2.5 rounded-full text-sm font-medium border transition-all duration-200 ${
                                    active === key
                                        ? PRODUCTS[key].tabActive
                                        : "border-transparent text-slate-500 dark:text-white/35 hover:text-slate-900 dark:hover:text-white"
                                }`}
                            >
                                {PRODUCTS[key].label}
                            </button>
                        ))}
                    </ScrollRevealItem>

                    {/* Panel */}
                    <AnimatePresence mode="wait">
                        <motion.div
                            key={active}
                            initial={{ opacity: 0, y: 16 }}
                            animate={{ opacity: 1, y: 0 }}
                            exit={{ opacity: 0, y: -8 }}
                            transition={{ duration: 0.3, ease: [0.16, 1, 0.3, 1] }}
                        >
                            <div className="grid lg:grid-cols-[1fr_420px] gap-12 items-center p-8 md:p-12 rounded-3xl border border-slate-200 dark:border-white/[0.07] bg-white/70 dark:bg-white/[0.02] backdrop-blur-xl max-w-6xl mx-auto">

                                {/* Left text */}
                                <div>
                                    {/* Logo + tag */}
                                    <div className="flex items-center gap-3 mb-5">
                                        <img src={product.logo} alt={product.label} className="h-8 object-contain" />
                                        <span className={`text-xs font-medium px-2.5 py-1 rounded-full border ${product.tagColor}`}>
                                            {product.tag}
                                        </span>
                                    </div>

                                    {/* Headline */}
                                    <h3
                                        className="text-3xl md:text-4xl font-bold text-slate-900 dark:text-white leading-tight mb-4"
                                        style={{ letterSpacing: "-0.03em" }}
                                    >
                                        {product.headline}
                                    </h3>

                                    {/* Body */}
                                    <p className="text-slate-600 dark:text-white/45 text-base leading-relaxed mb-6">
                                        {product.body}
                                    </p>

                                    {/* Stats row */}
                                    <div className="flex gap-8 mb-6">
                                        {product.stats.map(s => (
                                            <div key={s.label}>
                                                <div className={`text-2xl font-bold bg-gradient-to-r ${product.accentClass} bg-clip-text text-transparent`}>
                                                    {s.value}
                                                </div>
                                                <div className="text-xs text-slate-500 dark:text-white/30 mt-0.5">{s.label}</div>
                                            </div>
                                        ))}
                                    </div>

                                    {/* Feature list */}
                                    <ul className="grid grid-cols-1 gap-2 mb-8">
                                        {product.features.map(f => (
                                            <li key={f} className="flex items-start gap-2.5 text-sm text-slate-600 dark:text-white/45">
                                                <CheckCircle2 className={`w-4 h-4 shrink-0 mt-0.5 ${active === "guidera" ? "text-blue-500" : "text-violet-500"}`} />
                                                {f}
                                            </li>
                                        ))}
                                    </ul>

                                    {/* CTAs */}
                                    <div className="flex gap-3 flex-wrap">
                                        {product.primaryCta.external ? (
                                            <a
                                                href={product.primaryCta.href}
                                                target="_blank"
                                                rel="noreferrer"
                                                className={`px-6 py-3 rounded-full text-sm font-semibold text-white bg-gradient-to-r ${product.accentClass} hover:opacity-90 transition-all shadow-lg`}
                                            >
                                                {product.primaryCta.label} →
                                            </a>
                                        ) : (
                                            <Link
                                                to={product.primaryCta.href}
                                                className={`px-6 py-3 rounded-full text-sm font-semibold text-white bg-gradient-to-r ${product.accentClass} hover:opacity-90 transition-all shadow-lg`}
                                            >
                                                {product.primaryCta.label} →
                                            </Link>
                                        )}
                                        {product.secondaryCta.external ? (
                                            <a
                                                href={product.secondaryCta.href}
                                                target="_blank"
                                                rel="noreferrer"
                                                className="px-6 py-3 rounded-full text-sm font-medium text-slate-600 dark:text-white/50 border border-slate-200 dark:border-white/10 hover:bg-slate-100 dark:hover:bg-white/[0.05] transition-all"
                                            >
                                                {product.secondaryCta.label}
                                            </a>
                                        ) : (
                                            <Link
                                                to={product.secondaryCta.href}
                                                className="px-6 py-3 rounded-full text-sm font-medium text-slate-600 dark:text-white/50 border border-slate-200 dark:border-white/10 hover:bg-slate-100 dark:hover:bg-white/[0.05] transition-all"
                                            >
                                                {product.secondaryCta.label}
                                            </Link>
                                        )}
                                    </div>
                                </div>

                                {/* Right visual */}
                                <div className="flex items-center justify-center">
                                    {active === "guidera" ? (
                                        <div className="w-full max-w-[380px]">
                                            <GuideraVisual />
                                        </div>
                                    ) : (
                                        <div className="w-full max-w-[400px] pt-8">
                                            <CapsuleFlowVisual />
                                        </div>
                                    )}
                                </div>

                            </div>
                        </motion.div>
                    </AnimatePresence>
                </ScrollReveal>
            </div>
        </section>
    );
};

export default SolutionsSection;
