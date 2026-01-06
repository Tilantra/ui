import { Zap, Shield, Database, Cpu, Globe, BarChart3 } from "lucide-react";

const features = [
    {
        icon: Zap,
        title: 'Smart Routing',
        description: 'Auto-selects best models based on cost, performance, and preference.',
        metric: '90% accuracy'
    },
    {
        icon: Shield,
        title: 'Compliance Layer',
        description: 'On-demand reports & enterprise-grade governance',
        metric: 'SOC2 Compliant'
    },
    {
        icon: Database,
        title: 'Secure Caching',
        description: 'Reuse prompts, slash token usage.',
        metric: '70% Cost Savings'
    },
    {
        icon: Cpu,
        title: 'Prompt Suggestions',
        description: 'AI-generated prompts to optimize your inputs.',
        metric: '2x Productivity'
    },
    {
        icon: Globe,
        title: 'Multi-Model Hub',
        description: 'Access a wide range of top AI models, all in one place.',
        metric: '40+ Hosted Models'
    },
    {
        icon: BarChart3,
        title: 'Cost Guardrails',
        description: 'Real-time token budgeting to prevent overspend.',
        metric: 'Zero Runaway Costs'
    }
];

const FeaturesSection = () => {
    return (
        <section id="features" className="py-16 bg-background">
            <div className="container mx-auto px-6">
                {/* Section Header */}
                <div className="max-w-3xl mx-auto text-center mb-10">
                    <span className="inline-block px-4 py-1.5 rounded-full bg-primary/10 text-primary text-sm font-medium mb-4">
                        Features
                    </span>
                    <h2 className="text-3xl md:text-5xl font-bold text-foreground mb-6">
                        <span className="gradient-text"> Orchestrate. Optimize. Accelerate.</span>
                    </h2>
                    <p className="text-base text-muted-foreground">
                        Our mission is to empower organizations to seamlessly orchestrate, optimize, and govern their AI workflows—without sacrificing speed, security, or compliance. As the landscape of AI models grows more complex, businesses need a unified solution that can route tasks to the best-performing models, ensure regulatory compliance, and keep costs under control. Guidera is a high-performance orchestration layer for LLMs, giving you total control, compliance, and cost-performance through a single API.
                    </p>
                </div>

                {/* Features Grid */}
                <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
                    {features.map((feature, index) => (
                        <div
                            key={feature.title}
                            className="group relative p-6 rounded-2xl bg-card border border-border hover:border-primary/30 transition-all duration-300 hover:shadow-lg"
                            style={{ animationDelay: `${index * 0.1}s` }}
                        >
                            {/* Icon */}
                            <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-primary/10 to-secondary/10 flex items-center justify-center mb-4 group-hover:scale-110 transition-transform duration-300">
                                <feature.icon className="w-5 h-5 text-primary" />
                            </div>

                            {/* Content */}
                            <h3 className="text-lg font-semibold text-foreground mb-2">
                                {feature.title}
                            </h3>
                            <p className="text-muted-foreground leading-relaxed mb-3">
                                {feature.description}
                            </p>

                            {/* Metric Tag */}
                            <div className="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium bg-primary/5 text-primary border border-primary/10">
                                {feature.metric}
                            </div>

                            {/* Hover gradient */}
                            <div className="absolute inset-0 rounded-2xl bg-gradient-to-br from-primary/5 to-secondary/5 opacity-0 group-hover:opacity-100 transition-opacity duration-300 -z-10" />
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default FeaturesSection;
