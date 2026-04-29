import { ScrollReveal, ScrollRevealItem } from "@/components/ui/scroll-reveal";
import { Link } from "react-router-dom";
import { ArrowRight, CheckCircle2 } from "lucide-react";

const solutions = [
    {
        title: "Guidera",
        subtitle: "Enterprise AI Gateway",
        description: "Intelligent AI routing with compliance enforcement, content moderation, and real-time threat detection — all in a single gateway your team can trust.",
        features: ["Intelligent model routing", "Compliance layer", "Content moderation", "Threat detection"],
        logo: "/GuideraLogo.png",
        href: "/guidera",
        glow: "from-blue-600/20 via-blue-500/5 to-transparent",
        border: "group-hover:border-blue-500/30",
        tag: "AI Gateway",
        tagColor: "bg-blue-500/10 text-blue-400 border-blue-500/20",
    },
    {
        title: "Capsule Hub",
        subtitle: "Knowledge Management",
        description: "Capture, organize, and share AI-powered knowledge capsules across your team. One-click saves, instant retrieval, and seamless collaboration.",
        features: ["One-click capsules", "Team collaboration", "MCP integration", "Secure storage"],
        logo: "/CapsuleHubLogo.png",
        href: "/capsule-hub",
        glow: "from-cyan-600/20 via-cyan-500/5 to-transparent",
        border: "group-hover:border-cyan-500/30",
        tag: "Knowledge Layer",
        tagColor: "bg-cyan-500/10 text-cyan-400 border-cyan-500/20",
    },
];



const SolutionsSection = () => {
    return (
        <section id="solutions" className="py-16 bg-transparent relative overflow-hidden">
            <div className="absolute inset-0 bg-[radial-gradient(ellipse_80%_40%_at_50%_50%,hsl(217,91%,60%,0.04),transparent)] pointer-events-none" />

            <div className="container mx-auto px-6">
                <ScrollReveal>
                {/* Header */}
                <ScrollRevealItem className="text-center mb-14">
                    <h2 className="text-3xl md:text-5xl font-bold" style={{ letterSpacing: "-0.03em" }}>
                        <span className="headline-gradient">Explore Our </span>
                        <span className="gradient-text">Offerings</span>
                    </h2>
                </ScrollRevealItem>

                {/* Cards (ElitePlanCard + FUI Bento Dark pattern) */}
                <div className="grid md:grid-cols-2 gap-5 max-w-5xl mx-auto">
                    {solutions.map((sol, i) => (
                        <ScrollRevealItem
                            key={sol.title}
                            className={`group relative rounded-3xl overflow-hidden border border-white shadow-xl dark:shadow-none dark:border-white/10 bg-white/70 dark:bg-white/[0.02] backdrop-blur-xl cursor-pointer ${sol.border} hover:-translate-y-1 transition-all duration-500`}
                            // Removed artificial inset shadow on light mode to prevent looking dirty
                        >
                            {/* Top logo area */}
                            <div className="relative h-44 flex items-center justify-center overflow-hidden bg-white/[0.01]">
                                <div className={`absolute inset-0 bg-gradient-to-br ${sol.glow} opacity-60`} />
                                <img
                                    src={sol.logo}
                                    alt={sol.title}
                                    className="relative z-10 h-16 object-contain opacity-90 group-hover:opacity-100 group-hover:scale-105 transition-all duration-500"
                                />
                                {/* Bottom fade into card body */}
                                <div className="absolute bottom-0 left-0 right-0 h-16 bg-gradient-to-t from-white dark:from-[#0b1120] to-transparent" />
                            </div>

                            {/* Content */}
                            <div className="p-7 pt-4 bg-white/50 dark:bg-transparent h-full">
                                <div className="flex items-start justify-between mb-3">
                                    <div>
                                        <h3 className="text-xl font-bold text-slate-900 dark:text-white mb-0.5">{sol.title}</h3>
                                        <p className="text-xs text-slate-500 dark:text-white/35 uppercase tracking-widest">{sol.subtitle}</p>
                                    </div>
                                    <span className={`text-xs font-medium px-2.5 py-1 rounded-full border ${sol.tagColor}`}>
                                        {sol.tag}
                                    </span>
                                </div>

                                <p className="text-sm text-slate-600 dark:text-white/45 leading-relaxed mb-5">{sol.description}</p>

                                <ul className="grid grid-cols-2 gap-x-4 gap-y-2 mb-6">
                                    {sol.features.map((f) => (
                                        <li key={f} className="flex items-center gap-2">
                                            <CheckCircle2 className="w-3.5 h-3.5 text-blue-500 dark:text-blue-400 shrink-0" />
                                            <span className="text-xs text-slate-500 dark:text-white/50">{f}</span>
                                        </li>
                                    ))}
                                </ul>

                                <Link
                                    to={sol.href}
                                    className="inline-flex items-center gap-2 text-sm font-medium text-slate-500 dark:text-white/50 hover:text-slate-900 dark:hover:text-white group-hover:text-blue-500 dark:group-hover:text-blue-400 transition-colors duration-300"
                                >
                                    Learn more
                                    <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform duration-300" />
                                </Link>
                            </div>
                        </ScrollRevealItem>
                    ))}
                </div>
                </ScrollReveal>
            </div>
        </section>
    );
};

export default SolutionsSection;
