import { motion, useInView } from "framer-motion";
import CountUp from "react-countup";
import { useRef } from "react";

const stats = [
    { label: "Model Accuracy", value: 99.9, suffix: "%", subtext: "Enterprise benchmark" },
    { label: "Cost Savings", value: 70, suffix: "%", subtext: "Average reduction" },
    { label: "Response Time", value: 45, suffix: "ms", subtext: "P99 latency" },
    { label: "Models Hosted", value: 40, suffix: "+", subtext: "Global infrastructure" },
];

const AboutUsSection = () => {
    const ref = useRef(null);
    const inView = useInView(ref, { once: true, amount: 0.3 });

    return (
        <section id="about-us" className="py-24 bg-background relative overflow-hidden">
            {/* Background Decorative Element */}
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-primary/5 rounded-full blur-[120px] -z-10" />

            <div className="container mx-auto px-6">
                <div className="grid lg:grid-cols-2 gap-16 items-center">
                    {/* Left Column: Mission Content */}
                    <motion.div
                        initial={{ opacity: 0, x: -30 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.8 }}
                        className="text-left"
                    >
                        <span className="inline-block px-4 py-1.5 rounded-full bg-primary/10 text-primary text-sm font-medium mb-6">
                            About Us
                        </span>
                        <h2 className="text-2xl md:text-3xl lg:text-4xl font-bold text-foreground mb-6 leading-tight">
                            Orchestrate. <span className="gradient-text">Optimize.</span> <br />
                            Accelerate.
                        </h2>
                        <p className="text-base text-muted-foreground leading-relaxed max-w-xl">
                            Our mission is to empower organizations to seamlessly orchestrate, optimize, and govern their AI workflows—without sacrificing speed, security, or compliance.
                            <br /><br />
                            As the landscape of AI models grows more complex, Guidera provides a unified solution that routes tasks to the best-performing models, ensures regulatory compliance, and keeps costs under control through a single API.
                        </p>
                    </motion.div>

                    {/* Right Column: Stats Cluster */}
                    <div ref={ref} className="grid grid-cols-2 gap-4 pb-4 lg:mt-12">
                        {stats.map((stat, index) => (
                            <motion.div
                                key={stat.label}
                                initial={{ opacity: 0, y: 20 }}
                                animate={inView ? { opacity: 1, y: 0 } : {}}
                                transition={{ duration: 0.6, delay: index * 0.15 }}
                                className="p-5 rounded-2xl bg-card/50 backdrop-blur-sm border border-border hover:border-primary/30 transition-colors group"
                            >
                                <div className="text-2xl md:text-3xl font-bold text-foreground mb-1 group-hover:text-primary transition-colors">
                                    {inView ? (
                                        <CountUp end={stat.value} decimals={stat.value % 1 !== 0 ? 1 : 0} duration={2.5} />
                                    ) : (
                                        0
                                    )}
                                    {stat.suffix}
                                </div>
                                <div className="text-[13px] font-semibold text-foreground mb-1">
                                    {stat.label}
                                </div>
                                <div className="text-[11px] text-muted-foreground italic">
                                    {stat.subtext}
                                </div>
                            </motion.div>
                        ))}
                    </div>
                </div>
            </div>
        </section>
    );
};

export default AboutUsSection;
