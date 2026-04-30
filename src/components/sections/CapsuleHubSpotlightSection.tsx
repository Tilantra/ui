import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { Zap, Package, Rocket, ArrowRight } from "lucide-react";
import { ScrollReveal, ScrollRevealItem } from "@/components/ui/scroll-reveal";
import CapsuleHubBentoSection from "@/components/sections/CapsuleHubBentoSection";

// ─── 3-Step strip data ────────────────────────────────────────────────────────

const STEPS = [
    {
        num: "01",
        Icon: Zap,
        iconColor: "text-cyan-500",
        iconBg: "bg-cyan-500/10",
        title: "Capture",
        body: "Click the Capsule Hub extension inside any AI chat — ChatGPT, Claude, Gemini, or Gmail. One click extracts the goals, decisions, constraints, and attachments into a Capsule.",
        tag: "Browser extension",
        tagColor: "bg-cyan-500/10 text-cyan-600 dark:text-cyan-400 border-cyan-500/20",
    },
    {
        num: "02",
        Icon: Package,
        iconColor: "text-violet-500",
        iconBg: "bg-violet-500/10",
        title: "Organise",
        body: "Capsule lands in a searchable library. Tag it, version it, attach files, and push it to your team workspace. Everyone pulls from the same vetted context — not from memory.",
        tag: "Cloud library",
        tagColor: "bg-violet-500/10 text-violet-600 dark:text-violet-400 border-violet-500/20",
    },
    {
        num: "03",
        Icon: Rocket,
        iconColor: "text-purple-500",
        iconBg: "bg-purple-500/10",
        title: "Inject",
        body: "Drag the Capsule into any AI chat — context loads instantly. Or connect via MCP so your IDE agent codes against the exact spec without re-explaining a single line.",
        tag: "Drag & drop · MCP",
        tagColor: "bg-purple-500/10 text-purple-600 dark:text-purple-400 border-purple-500/20",
    },
];

// ─── Platform badges ──────────────────────────────────────────────────────────

const PLATFORMS = [
    { name: "ChatGPT",     src: "/ChatgptLogo.png",        note: "Official + Plus" },
    { name: "Claude",      src: "/ClaudeLogo.png",         note: "claude.ai" },
    { name: "Gemini",      src: "/GeminiLogo.png",         note: "Gemini + AI Studio" },
    { name: "Gmail",       src: "/GmailLogo.png",          note: "Thread capture" },
    { name: "Perplexity",  src: "/perplexity-color.png",   note: "Web capture" },
    { name: "Antigravity", src: "/antigravity-color.png",  note: "via MCP" },
];

// ─── Component ────────────────────────────────────────────────────────────────

const CapsuleHubSpotlightSection = () => {
    return (
        <section className="py-20 bg-transparent relative overflow-hidden">
            {/* Background glows */}
            <div className="absolute top-1/4 right-0 w-[500px] h-[500px] bg-violet-300/[0.08] dark:bg-violet-800/10 rounded-full blur-[120px] -z-10 pointer-events-none" />
            <div className="absolute bottom-0 left-0 w-[400px] h-[400px] bg-cyan-300/[0.08] dark:bg-cyan-800/10 rounded-full blur-[100px] -z-10 pointer-events-none" />
            <div className="absolute inset-0 bg-[radial-gradient(ellipse_60%_40%_at_50%_70%,rgba(139,92,246,0.04),transparent)] pointer-events-none" />

            <div className="container mx-auto px-6">
                <ScrollReveal>

                    {/* ── Section Header ── */}
                    <ScrollRevealItem className="text-center mb-16">
                        <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full border border-violet-200 dark:border-violet-500/20 bg-violet-50/50 dark:bg-violet-500/5 mb-6">
                            <span className="w-1.5 h-1.5 rounded-full bg-violet-500 animate-pulse" />
                            <span className="text-xs font-semibold text-violet-600 dark:text-violet-400 uppercase tracking-widest">
                                Capsule Hub · Context Layer
                            </span>
                        </div>

                        <h2 className="text-4xl md:text-6xl font-bold mb-5" style={{ letterSpacing: "-0.03em" }}>
                            <span className="text-slate-900 dark:text-white">Stop re-explaining yourself.</span>
                            <br />
                            <span className="bg-gradient-to-r from-cyan-400 via-violet-400 to-purple-400 bg-clip-text text-transparent">
                                Capture once. Inject anywhere.
                            </span>
                        </h2>

                        <p className="text-lg text-slate-600 dark:text-white/40 max-w-2xl mx-auto leading-relaxed">
                            Every AI chat starts cold. You re-explain the same project background, the same constraints,
                            the same decisions — over and over. Capsule Hub ends that loop.
                        </p>
                    </ScrollRevealItem>

                    {/* ── 3-Step Strip ── */}
                    <ScrollRevealItem className="mb-20">
                        <div className="relative grid grid-cols-1 md:grid-cols-3 gap-6 max-w-5xl mx-auto">
                            {/* Connector dashes (desktop) */}
                            <div className="hidden md:block absolute top-[52px] left-[calc(33.33%+12px)] right-[calc(33.33%+12px)] border-t border-dashed border-slate-200 dark:border-white/[0.07] pointer-events-none" />

                            {STEPS.map((step, i) => {
                                const Icon = step.Icon;
                                return (
                                    <motion.div
                                        key={step.num}
                                        initial={{ opacity: 0, y: 24 }}
                                        whileInView={{ opacity: 1, y: 0 }}
                                        viewport={{ once: true }}
                                        transition={{ delay: i * 0.12, duration: 0.5, ease: [0.16, 1, 0.3, 1] }}
                                        className="rounded-3xl border border-slate-200 dark:border-white/[0.07] bg-white/70 dark:bg-white/[0.02] backdrop-blur-xl p-8 relative overflow-hidden"
                                    >
                                        {/* Watermark number */}
                                        <span className="absolute top-4 right-5 text-7xl font-black text-slate-100 dark:text-white/[0.03] select-none leading-none">
                                            {step.num}
                                        </span>

                                        {/* Icon */}
                                        <div className={`w-11 h-11 rounded-2xl ${step.iconBg} flex items-center justify-center mb-5`}>
                                            <Icon className={`w-5 h-5 ${step.iconColor}`} />
                                        </div>

                                        <h3 className="text-xl font-bold text-slate-900 dark:text-white mb-2 tracking-tight">
                                            {step.title}
                                        </h3>
                                        <p className="text-sm text-slate-600 dark:text-white/40 leading-relaxed mb-5">
                                            {step.body}
                                        </p>

                                        <span className={`inline-flex items-center text-xs font-medium px-2.5 py-1 rounded-full border ${step.tagColor}`}>
                                            {step.tag}
                                        </span>
                                    </motion.div>
                                );
                            })}
                        </div>
                    </ScrollRevealItem>

                    {/* ── Bento Grid ── */}
                    <ScrollRevealItem className="mb-20">
                        <CapsuleHubBentoSection showHeading={false} hideMCP={true} />
                    </ScrollRevealItem>

                    {/* ── Platforms Row ── */}
                    <ScrollRevealItem className="mb-14">
                        <p className="text-sm text-slate-500 dark:text-white/30 uppercase tracking-widest text-center mb-8">
                            Works inside the tools you already use
                        </p>
                        <div className="grid grid-cols-3 md:grid-cols-6 gap-3 max-w-3xl mx-auto">
                            {PLATFORMS.map((p) => (
                                <motion.div
                                    key={p.name}
                                    whileHover={{ y: -3 }}
                                    className="flex flex-col items-center gap-2 p-4 rounded-2xl border border-slate-100 dark:border-white/[0.06] bg-white/60 dark:bg-white/[0.02] backdrop-blur-sm hover:border-violet-200 dark:hover:border-violet-500/20 transition-all group cursor-default"
                                >
                                    {p.src ? (
                                        <img src={p.src} alt={p.name} className="w-8 h-8 object-contain" />
                                    ) : (
                                        <span className="text-2xl h-8 flex items-center justify-center">{p.emoji}</span>
                                    )}
                                    <span className="text-sm font-semibold text-slate-700 dark:text-white/60 group-hover:text-violet-600 dark:group-hover:text-violet-400 transition-colors text-center leading-tight">
                                        {p.name}
                                    </span>
                                    <span className="text-[10px] text-slate-400 dark:text-white/25 text-center">{p.note}</span>
                                </motion.div>
                            ))}
                        </div>
                    </ScrollRevealItem>

                    {/* ── Section CTA ── */}
                    <ScrollRevealItem className="text-center mt-4">
                        <Link
                            to="/capsule-hub"
                            className="inline-flex items-center gap-2 px-8 py-4 rounded-full text-base font-semibold text-white bg-gradient-to-r from-cyan-500 to-violet-600 hover:opacity-90 hover:scale-[1.02] transition-all shadow-lg shadow-violet-500/20"
                        >
                            Explore Capsule Hub
                            <ArrowRight className="w-4 h-4" />
                        </Link>
                        <p className="text-sm text-slate-500 dark:text-white/25 mt-3">
                            Free Chrome extension · Works in 60 seconds
                        </p>
                    </ScrollRevealItem>

                </ScrollReveal>
            </div>
        </section>
    );
};

export default CapsuleHubSpotlightSection;
