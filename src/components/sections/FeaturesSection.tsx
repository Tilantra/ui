import { ScrollReveal, ScrollRevealItem } from "@/components/ui/scroll-reveal";
import { Zap, Shield, Database, Cpu, Globe, BarChart3 } from "lucide-react";

const features = [
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



const FeaturesSection = () => {
    return (
        <section id="features" className="py-16 bg-transparent relative overflow-hidden">
            <div className="absolute inset-0 bg-[radial-gradient(ellipse_60%_40%_at_50%_0%,hsl(217,91%,60%,0.05),transparent)] pointer-events-none" />

            <div className="container mx-auto px-6">
                <ScrollReveal>
                {/* Header */}
                <ScrollRevealItem className="text-center mb-12">
                    <h2 className="text-3xl md:text-5xl font-bold" style={{ letterSpacing: "-0.03em" }}>
                        <span className="headline-gradient">Powering </span>
                        <span className="gradient-text">Innovation</span>
                    </h2>
                </ScrollRevealItem>

                {/* Bento Grid (Bento Grid component, similarity 6.46) */}
                <div className="grid grid-cols-1 md:grid-cols-3 gap-3 max-w-5xl mx-auto">
                    {features.map((f, i) => {
                        const Icon = f.icon;
                        return (
                            <ScrollRevealItem
                                key={f.title}
                                className={`group relative p-6 rounded-3xl border transition-all duration-500 cursor-default overflow-hidden backdrop-blur-xl
                                    ${f.colSpan === 2 ? "md:col-span-2" : f.colSpan === 3 ? "md:col-span-3" : ""}
                                    ${f.hero
                                        ? "border-blue-200 dark:border-cyan-500/30 bg-blue-50 dark:bg-cyan-500/5 -translate-y-1 shadow-[0_0_30px_rgba(59,130,246,0.1)] dark:shadow-[0_0_30px_rgba(34,211,238,0.15)]"
                                        : "border-white shadow-xl dark:shadow-none dark:border-white/5 bg-white/70 dark:bg-white/[0.02] hover:bg-white/90 dark:hover:bg-white/[0.04] hover:border-slate-200 dark:hover:border-white/20 hover:-translate-y-1 hover:shadow-2xl dark:hover:shadow-[0_0_20px_rgba(255,255,255,0.05)]"
                                    }`}
                            >
                                {/* Dot overlay on hover (Bento Grid — bento-dot-overlay) */}
                                <div className={`absolute inset-0 bento-dot-overlay transition-opacity duration-300 rounded-3xl ${f.hero ? "opacity-100" : "opacity-0 group-hover:opacity-100"}`} />

                                {/* Gradient border shimmer on hover */}
                                <div className={`absolute inset-0 -z-10 rounded-3xl p-px bg-gradient-to-br from-transparent via-white/[0.06] to-transparent ${f.hero ? "opacity-100" : "opacity-0 group-hover:opacity-100"} transition-opacity duration-300`} />

                                <div className="relative flex flex-col gap-3">
                                    {/* Icon + status */}
                                    <div className="flex items-center justify-between">
                                        <div className="w-10 h-10 rounded-xl flex items-center justify-center bg-slate-100 dark:bg-white/[0.05] group-hover:bg-gradient-to-br group-hover:from-blue-500/10 dark:group-hover:from-cyan-500/20 group-hover:to-transparent dark:group-hover:to-blue-500/10 transition-all duration-300">
                                            <Icon className="w-5 h-5 text-blue-500 dark:text-cyan-400" />
                                        </div>
                                        <span className="text-xs font-medium px-2 py-1 rounded-lg backdrop-blur-sm bg-slate-100/50 dark:bg-white/[0.06] text-slate-500 dark:text-white/40 transition-colors group-hover:bg-slate-200/50 dark:group-hover:bg-white/[0.1] group-hover:text-slate-800 dark:group-hover:text-white/60">
                                            {f.status}
                                        </span>
                                    </div>

                                    {/* Title + metric */}
                                    <div>
                                        <div className="flex items-baseline gap-2 mb-1">
                                            <h3 className="text-[15px] font-semibold text-slate-800 dark:text-white/80 group-hover:text-slate-900 dark:group-hover:text-white transition-colors tracking-tight">
                                                {f.title}
                                            </h3>
                                            <span className="text-xs text-slate-400 dark:text-white/25 font-normal">{f.metric}</span>
                                        </div>
                                        <p className="text-sm text-slate-500 dark:text-white/35 leading-snug">{f.description}</p>
                                    </div>

                                    {/* Tags + explore */}
                                    <div className="flex items-center justify-between mt-1">
                                        <div className="flex gap-1.5">
                                            {f.tags.map((tag) => (
                                                <span key={tag} className="text-[11px] px-2 py-0.5 rounded-md bg-slate-100 dark:bg-white/[0.05] text-slate-400 dark:text-white/30 hover:bg-slate-200 dark:hover:bg-white/[0.09] hover:text-slate-600 dark:hover:text-white/50 transition-all">
                                                    #{tag}
                                                </span>
                                            ))}
                                        </div>
                                        <span className="text-xs text-slate-400 dark:text-white/20 opacity-0 group-hover:opacity-100 transition-opacity">
                                            Explore →
                                        </span>
                                    </div>
                                </div>
                            </ScrollRevealItem>
                        );
                    })}
                </div>
                </ScrollReveal>
            </div>
        </section>
    );
};

export default FeaturesSection;
