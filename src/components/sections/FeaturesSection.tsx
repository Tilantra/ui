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
        <section id="features" className="py-12 bg-background">
            <div className="container mx-auto px-6">
                {/* Section Header */}
                <div className="max-w-3xl mx-auto text-center mb-12">
                    <span className="inline-block px-4 py-1.5 rounded-full bg-primary/10 text-primary text-sm font-medium mb-4">
                        Features
                    </span>
                    <h2 className="text-3xl md:text-5xl font-bold text-foreground mb-6">
                        Powering <span className="gradient-text">Innovation</span>
                    </h2>
                </div>

                {/* Features Grid */}
                <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-5">
                    {features.map((feature, index) => (
                        <div
                            key={feature.title}
                            className="group relative p-5 rounded-2xl bg-card/40 backdrop-blur-md border border-border/50 hover:border-primary/30 transition-all duration-500 hover:shadow-xl hover:-translate-y-1"
                            style={{ animationDelay: `${index * 0.1}s` }}
                        >
                            <div className="flex gap-4">
                                {/* Icon container */}
                                <div className="shrink-0 w-10 h-10 rounded-xl bg-gradient-to-br from-primary/10 to-secondary/10 flex items-center justify-center group-hover:scale-110 group-hover:rotate-3 transition-transform duration-500">
                                    <feature.icon className="w-5 h-5 text-primary" />
                                </div>

                                <div className="flex-1 min-w-0">
                                    {/* Content */}
                                    <h3 className="text-lg font-semibold text-foreground mb-1.5 group-hover:text-primary transition-colors duration-300">
                                        {feature.title}
                                    </h3>
                                    <p className="text-sm text-muted-foreground leading-relaxed mb-3 line-clamp-2">
                                        {feature.description}
                                    </p>

                                    {/* Metric Tag */}
                                    <div className="inline-flex items-center px-2.5 py-0.5 rounded-full text-[11px] font-semibold bg-primary/10 text-primary border border-primary/20">
                                        {feature.metric}
                                    </div>
                                </div>
                            </div>

                            {/* Decorative background glow on hover */}
                            <div className="absolute inset-0 rounded-2xl bg-gradient-to-br from-primary/5 via-transparent to-secondary/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500 -z-10" />
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default FeaturesSection;
