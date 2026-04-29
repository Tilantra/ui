import { ScrollReveal, ScrollRevealItem } from "@/components/ui/scroll-reveal";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { ArrowRight, Plus } from "lucide-react";

const CTASection = () => {
    return (
        <section className="py-16 bg-transparent relative overflow-hidden">
            <div className="container mx-auto px-6">
                <ScrollReveal>
                <ScrollRevealItem className="relative max-w-3xl mx-auto">
                    {/* Corner plus icons (CTA 3 component) */}
                    <Plus className="absolute -top-[13px] -left-[13px] z-10 w-6 h-6 text-slate-200 dark:text-white/15" strokeWidth={1} />
                    <Plus className="absolute -top-[13px] -right-[13px] z-10 w-6 h-6 text-slate-200 dark:text-white/15" strokeWidth={1} />
                    <Plus className="absolute -bottom-[13px] -left-[13px] z-10 w-6 h-6 text-slate-200 dark:text-white/15" strokeWidth={1} />
                    <Plus className="absolute -bottom-[13px] -right-[13px] z-10 w-6 h-6 text-slate-200 dark:text-white/15" strokeWidth={1} />

                    {/* Vertical side borders */}
                    <div className="pointer-events-none absolute inset-y-0 left-0 w-px border-l border-slate-200 dark:border-white/[0.08]" />
                    <div className="pointer-events-none absolute inset-y-0 right-0 w-px border-r border-slate-200 dark:border-white/[0.08]" />

                    {/* Dashed center line (CTA 3) */}
                    <div className="absolute top-0 left-1/2 h-full border-l border-dashed border-slate-200 dark:border-white/[0.06] -z-10" />

                    {/* Main content */}
                    <div
                        className="relative px-10 py-14 border-y border-slate-200 dark:border-white/[0.08] text-center"
                        style={{ background: "radial-gradient(35% 80% at 50% 0%, rgba(59,130,246,0.07), transparent)" }}
                    >
                        <motion.p
                            initial={{ opacity: 0, y: 10 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: 0.1, duration: 0.6 }}
                            className="text-xs text-blue-600 dark:text-blue-400/70 uppercase tracking-widest mb-4 font-medium"
                        >
                            Get started today
                        </motion.p>

                        <motion.h2
                            initial={{ opacity: 0, y: 12 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: 0.18, duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
                            className="text-3xl md:text-4xl font-bold mb-4"
                            style={{ letterSpacing: "-0.03em" }}
                        >
                            <span className="headline-gradient">Start orchestrating AI</span>
                            <br />
                            <span className="gradient-text">the right way.</span>
                        </motion.h2>

                        <motion.p
                            initial={{ opacity: 0, y: 10 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: 0.26, duration: 0.6 }}
                            className="text-slate-600 dark:text-white/35 text-base mb-8 max-w-md mx-auto"
                        >
                            No credit card required. See how Tilantra handles routing, compliance, and cost in your environment.
                        </motion.p>

                        <motion.div
                            initial={{ opacity: 0, y: 10 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: 0.34, duration: 0.6 }}
                            className="flex items-center justify-center gap-3 flex-wrap"
                        >
                            {/* Primary CTA — ButtonCta layered gradient pattern */}
                            <Link to="/book-demo" className="relative group inline-flex items-center gap-2 px-6 py-3 rounded-lg text-sm font-semibold overflow-hidden">
                                <div className="absolute inset-0 rounded-lg p-px bg-gradient-to-b from-blue-400/40 via-blue-600/20 to-blue-900/30">
                                    <div className="absolute inset-0 bg-white dark:bg-[hsl(224,28%,7%)] rounded-lg" />
                                </div>
                                <div className="absolute inset-[1px] bg-gradient-to-b from-blue-500/10 via-transparent to-blue-900/20 rounded-lg" />
                                <div className="absolute inset-[1px] shadow-[inset_0_0_15px_rgba(59,130,246,0.12)] rounded-lg" />
                                <span className="relative z-10 bg-gradient-to-b from-blue-200 to-blue-400 bg-clip-text text-transparent drop-shadow-[0_0_10px_rgba(59,130,246,0.4)]">
                                    Book a Demo
                                </span>
                                <ArrowRight className="relative z-10 w-4 h-4 text-blue-400 group-hover:translate-x-0.5 transition-transform" />
                                <div className="absolute inset-[1px] opacity-0 group-hover:opacity-100 transition-opacity duration-300 bg-gradient-to-r from-blue-500/10 via-blue-400/5 to-blue-500/10 rounded-lg" />
                            </Link>

                            {/* Secondary */}
                            <Link
                                to="/contact"
                                className="inline-flex items-center gap-2 px-6 py-3 text-sm font-medium text-slate-500 dark:text-white/40 rounded-lg border border-slate-200 dark:border-white/[0.08] hover:text-slate-900 dark:hover:text-white/70 hover:bg-slate-100 dark:hover:bg-white/[0.04] transition-all duration-200"
                            >
                                Contact Sales
                            </Link>
                        </motion.div>

                        {/* Trust badges */}
                        <motion.div
                            initial={{ opacity: 0 }}
                            whileInView={{ opacity: 1 }}
                            viewport={{ once: true }}
                            transition={{ delay: 0.5, duration: 0.6 }}
                            className="flex items-center justify-center gap-6 mt-8 text-xs text-slate-500 dark:text-white/20"
                        >
                            <span>SOC2 Compliant</span>
                            <span className="w-px h-3 bg-slate-200 dark:bg-white/10" />
                            <span>99.9% Uptime SLA</span>
                            <span className="w-px h-3 bg-slate-200 dark:bg-white/10" />
                            <span>Enterprise support</span>
                        </motion.div>
                    </div>
                </ScrollRevealItem>
                </ScrollReveal>
            </div>
        </section>
    );
};

export default CTASection;
