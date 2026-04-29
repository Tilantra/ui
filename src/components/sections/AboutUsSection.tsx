import { ScrollReveal, ScrollRevealItem } from "@/components/ui/scroll-reveal";
import CountUp from "react-countup";

const stats = [
    { label: "Model Accuracy", value: 99.9, suffix: "%", sub: "Enterprise benchmark" },
    { label: "Cost Savings", value: 70, suffix: "%", sub: "Avg reduction" },
    { label: "P99 Latency", value: 45, suffix: "ms", sub: "Global infra" },
    { label: "Models Hosted", value: 40, suffix: "+", sub: "All major providers" },
];

const AboutUsSection = () => {
    return (
        <section id="about-us" className="py-16 bg-transparent relative overflow-hidden">
            {/* Subtle center glow */}
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[700px] h-[300px] bg-blue-200/40 dark:bg-blue-600/5 rounded-full blur-[100px] pointer-events-none" />

            <div className="container mx-auto px-6">
                <ScrollReveal>
                {/* Mission */}
                <ScrollRevealItem className="text-center mb-10">
                    <h2 className="text-3xl md:text-5xl font-bold mb-4" style={{ letterSpacing: "-0.03em" }}>
                        <span className="headline-gradient">Orchestrate. Optimize.</span>{" "}
                        <span className="gradient-text">Accelerate.</span>
                    </h2>
                    <p className="text-slate-500 dark:text-white/40 text-base leading-relaxed max-w-2xl mx-auto">
                        We empower organizations to govern their AI workflows without sacrificing speed, security, or compliance — routing tasks to the best models while keeping costs under control.
                    </p>
                </ScrollRevealItem>

                {/* Stats row */}
                <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                    {stats.map((stat, i) => (
                        <ScrollRevealItem
                            key={stat.label}
                            className="flex flex-col items-center justify-center py-10 px-6 bg-white/70 dark:bg-white/[0.02] backdrop-blur-xl border border-white dark:border-white/5 rounded-3xl hover:bg-white/90 dark:hover:bg-white/[0.05] hover:border-blue-200 dark:hover:border-cyan-500/30 hover:-translate-y-1 shadow-xl dark:shadow-none hover:shadow-2xl dark:hover:shadow-[0_0_30px_rgba(34,211,238,0.15)] transition-all duration-300 group relative overflow-hidden"
                        >
                            <div className="absolute inset-0 bg-gradient-to-t from-blue-500/5 dark:from-cyan-500/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity" />
                            <div className="relative z-10 flex flex-col items-center">
                                <div
                                    className="text-4xl md:text-5xl font-bold mb-2 tabular-nums text-slate-800 dark:text-white group-hover:text-blue-500 dark:group-hover:text-cyan-400 transition-colors"
                                    style={{ letterSpacing: "-0.04em" }}
                                >
                                    <CountUp
                                        end={stat.value}
                                        decimals={stat.value % 1 !== 0 ? 1 : 0}
                                        duration={2.2}
                                        enableScrollSpy
                                        scrollSpyOnce
                                    />
                                    <span>{stat.suffix}</span>
                                </div>
                                <div className="text-sm font-medium text-slate-600 dark:text-white/75 mb-1">{stat.label}</div>
                                <div className="text-xs text-blue-500/50 dark:text-cyan-300/30">{stat.sub}</div>
                            </div>
                        </ScrollRevealItem>
                    ))}
                </div>
                </ScrollReveal>
            </div>
        </section>
    );
};

export default AboutUsSection;
