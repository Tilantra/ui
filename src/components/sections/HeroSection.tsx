const HeroSection = () => {
    return (
        <section id="hero" className="relative min-h-screen flex items-center justify-center overflow-hidden hero-gradient">
            {/* Mesh overlay */}
            <div className="absolute inset-0 mesh-overlay" />

            {/* Animated gradient orbs */}
            <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-primary/20 rounded-full blur-3xl animate-pulse-slow" />
            <div className="absolute bottom-1/4 right-1/4 w-80 h-80 bg-secondary/20 rounded-full blur-3xl animate-pulse-slow" style={{ animationDelay: '2s' }} />
            <div className="absolute top-1/2 right-1/3 w-64 h-64 bg-accent/10 rounded-full blur-3xl animate-pulse-slow" style={{ animationDelay: '4s' }} />

            {/* Content */}
            <div className="relative z-10 container mx-auto px-6 pt-24 pb-16">
                <div className="max-w-4xl mx-auto text-center">
                    {/* Badge */}
                    <div className="animate-fade-in-up inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary/10 border border-primary/20 text-primary mb-8">
                        <span className="w-2 h-2 rounded-full bg-primary animate-pulse" />
                        <span className="text-sm font-medium">Now in Public Beta</span>
                    </div>

                    {/* Main Heading */}
                    <h1 className="animate-fade-in-delay-1 text-4xl md:text-6xl lg:text-7xl font-bold leading-tight mb-6">
                        <span className="text-primary-foreground">Enterprise AI Orchestration.</span>
                        <br />
                        <span className="gradient-text inline-block">Simplified.</span>
                    </h1>

                    {/* Subheading */}
                    <p className="animate-fade-in-delay-2 text-xl md:text-2xl text-primary-foreground/70 mb-4">
                        Meet <span className="font-semibold text-primary-foreground">Guidera</span>
                    </p>
                    <p className="animate-fade-in-delay-2 text-lg md:text-xl text-primary-foreground/60 max-w-2xl mx-auto mb-10">
                        The unified solution for enterprise AI management. Deploy, monitor, and scale your AI models with unprecedented control and visibility.
                    </p>
                </div>
            </div>
        </section>

    );
};

export default HeroSection;
