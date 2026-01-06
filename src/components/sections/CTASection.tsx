import { Button } from "@/components/ui/button";
import { ArrowRight, Sparkles } from "lucide-react";

const CTASection = () => {
    return (
        <section className="py-12 relative overflow-hidden">
            {/* Background */}
            <div className="absolute inset-0 hero-gradient" />
            <div className="absolute inset-0 mesh-overlay" />

            {/* Animated orbs */}
            <div className="absolute top-1/2 left-1/4 w-64 h-64 bg-primary/20 rounded-full blur-3xl animate-pulse-slow" />
            <div className="absolute bottom-1/4 right-1/3 w-48 h-48 bg-secondary/20 rounded-full blur-3xl animate-pulse-slow" style={{ animationDelay: '2s' }} />

            <div className="container mx-auto px-6 relative z-10">
                <div className="max-w-4xl mx-auto text-center">
                    {/* Badge */}
                    <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary/20 border border-primary/30 text-primary-foreground mb-8">
                        <Sparkles className="w-4 h-4" />
                        <span className="text-sm font-medium">Ready to transform your AI operations?</span>
                    </div>

                    {/* Heading */}
                    <h2 className="text-3xl md:text-5xl lg:text-6xl font-bold text-primary-foreground mb-6">
                        Start building with
                        <span className="block gradient-text">Guidera today</span>
                    </h2>

                    {/* Description */}
                    <p className="text-lg md:text-xl text-primary-foreground/70 max-w-2xl mx-auto mb-10">
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                    </p>

                    {/* CTAs */}
                    <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
                        <Button variant="hero" size="xl">
                            Start Free Trial
                            <ArrowRight className="w-5 h-5" />
                        </Button>
                        <Button variant="heroOutline" size="xl" className="text-primary-foreground border-primary-foreground/30 hover:bg-primary-foreground/10">
                            Talk to Sales
                        </Button>
                    </div>

                    {/* Trust line */}
                    <p className="mt-8 text-sm text-primary-foreground/50">
                        No credit card required • 14-day free trial • Cancel anytime
                    </p>
                </div>
            </div>
        </section>
    );
};

export default CTASection;
