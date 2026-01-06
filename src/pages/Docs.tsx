import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import { Book, Code, FileText, Terminal, Zap, Shield, ChevronRight } from "lucide-react";
import { Button } from "@/components/ui/button";

const docsSections = [
    {
        icon: Book,
        title: "Getting Started",
        description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor.",
        links: ["Quick Start Guide", "Installation", "First Deployment"],
    },
    {
        icon: Code,
        title: "API Reference",
        description: "Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi.",
        links: ["REST API", "GraphQL", "SDKs"],
    },
    {
        icon: Terminal,
        title: "CLI Documentation",
        description: "Duis aute irure dolor in reprehenderit in voluptate velit esse cillum.",
        links: ["Commands", "Configuration", "Plugins"],
    },
    {
        icon: Zap,
        title: "Integrations",
        description: "Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia.",
        links: ["AWS", "Google Cloud", "Azure"],
    },
    {
        icon: Shield,
        title: "Security",
        description: "Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium.",
        links: ["Authentication", "Authorization", "Compliance"],
    },
    {
        icon: FileText,
        title: "Tutorials",
        description: "Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit.",
        links: ["Model Deployment", "Monitoring", "Scaling"],
    },
];

const Docs = () => {
    return (
        <div className="min-h-screen bg-background">
            <Header />
            <main className="pt-24">
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
                                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam.
                            </p>
                            <div className="flex gap-4">
                                <Button variant="hero" size="lg">
                                    Quick Start
                                    <ChevronRight className="w-4 h-4" />
                                </Button>
                                <Button variant="outline" size="lg">
                                    API Reference
                                </Button>
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
                                            <li key={link}>
                                                <a
                                                    href="#"
                                                    className="text-sm text-primary hover:text-primary/80 flex items-center gap-1 transition-colors"
                                                >
                                                    <ChevronRight className="w-3 h-3" />
                                                    {link}
                                                </a>
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
                            Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                        </p>
                        <Button variant="outline" size="lg">
                            Search Documentation
                        </Button>
                    </div>
                </section>
            </main>
            <Footer />
        </div>
    );
};

export default Docs;
