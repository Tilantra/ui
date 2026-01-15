
import { Book, FileText, Terminal, Zap, Shield, ChevronRight } from "lucide-react";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";

const docsSections = [
    {
        icon: Book,
        title: "Getting Started",
        description: "Everything you need to know to get started with Guidera.",
        links: [
            { label: "Quick Start Guide", to: "/docs/quickstart" },
            { label: "Getting Started with Guidera", to: "/docs/get-started-guidera" },
            { label: "Getting Started with Capsule Hub", to: "/docs/get-started-capsule-hub" },
        ],
    },
    {
        icon: Terminal,
        title: "Models",
        description: "Explore supported models, providers, and capabilities.",
        links: [
            { label: "Supported Models", to: "/docs/models" },
            { label: "ARMS Routing", to: "/docs/arms-routing" },
        ],
    },
    {
        icon: Zap,
        title: "Platform Features",
        description: "Advanced capabilities for enterprise AI.",
        links: [
            { label: "Prompt Caching", to: "/docs/prompt-caching" },
            { label: "Message Transforms", to: "/docs/message-transforms" },
            { label: "Tool Calling", to: "/docs/tool-calling" },
            { label: "Compliance Engine", to: "/docs/compliance-engine" },
            { label: "Uptime Optimization", to: "/docs/uptime-optimization" },
        ],
    },
    {
        icon: Shield,
        title: "Privacy & Security",
        description: "Learn about how we protect your data and privacy.",
        links: [
            { label: "Privacy Policy", to: "/docs/privacy-policy" },
        ],
    },
    {
        icon: Book,
        title: "Resources",
        description: "Deep dive into Guidera.",
        links: [
            { label: "Principles", to: "/docs/principles" },

        ],
    },
    {
        icon: FileText,
        title: "FAQ",
        description: "Frequently asked questions about billing, account, and more.",
        links: [
            { label: "Pricing & Fees", to: "/docs/faq" },
            { label: "Support", to: "/docs/faq" },
        ],
    },
];

const DocsLanding = () => {
    return (
        <div className="min-h-screen bg-background">
            {/* Hero */}
            <section className="py-16 border-b border-border">
                <div className="container mx-auto px-6">
                    <div className="max-w-3xl">
                        <span className="inline-block px-4 py-1.5 rounded-full bg-primary/10 text-primary text-sm font-medium mb-4">
                            Documentation
                        </span>
                        <h1 className="text-4xl md:text-5xl font-bold text-foreground mb-6">
                            Guidera Documentation
                        </h1>
                        <p className="text-xl text-muted-foreground mb-8">
                            Welcome to the Guidera documentation. Find guides, references, and examples to help you integrate and build with our platform.
                        </p>
                        <div className="flex gap-4">
                            <Link to="/docs/quickstart">
                                <Button variant="hero" size="lg">
                                    Quick Start
                                    <ChevronRight className="w-4 h-4" />
                                </Button>
                            </Link>
                            <Link to="/docs/models">
                                <Button variant="outline" size="lg">
                                    Explore Models
                                </Button>
                            </Link>
                        </div>
                    </div>
                </div>
            </section>

            {/* Documentation Grid */}
            <section className="py-16">
                <div className="container mx-auto px-6">
                    <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
                        {docsSections.map((section) => (
                            <div
                                key={section.title}
                                className="group p-6 rounded-xl bg-card border border-border hover:border-primary/30 hover:shadow-lg transition-all duration-300"
                            >
                                <div className="w-10 h-10 rounded-lg bg-primary/10 flex items-center justify-center mb-4 group-hover:scale-110 transition-transform">
                                    <section.icon className="w-5 h-5 text-primary" />
                                </div>
                                <h3 className="text-lg font-semibold text-foreground mb-2">
                                    {section.title}
                                </h3>
                                <p className="text-muted-foreground text-sm mb-4">
                                    {section.description}
                                </p>
                                <ul className="space-y-2">
                                    {section.links.map((link) => (
                                        <li key={link.label}>
                                            <Link
                                                to={link.to}
                                                className="text-sm text-primary hover:text-primary/80 flex items-center gap-1 transition-colors"
                                            >
                                                <ChevronRight className="w-3 h-3" />
                                                {link.label}
                                            </Link>
                                        </li>
                                    ))}
                                </ul>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Search CTA */}
            <section className="py-16 bg-muted/30">
                <div className="container mx-auto px-6 text-center">
                    <h2 className="text-2xl font-bold text-foreground mb-4">
                        Can't find what you're looking for?
                    </h2>
                    <p className="text-muted-foreground mb-6">
                        Join our community or contact support for help.
                    </p>
                    <Link to="/contact">
                        <Button variant="outline" size="lg">
                            Contact Support
                        </Button>
                    </Link>
                </div>
            </section>
        </div>
    );
};

export default DocsLanding;
