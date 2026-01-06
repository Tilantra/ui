import { Button } from "@/components/ui/button";
import { ArrowRight, CheckCircle2 } from "lucide-react";
import { Link } from "react-router-dom";

const solutions = [
    {
        title: "Guidera",
        description: "Our chatbot offering",
        features: [
            "Intelligent responses",
            "Custom training",
            "Seamless integration",
            "24/7 Availability",
        ],
        link: "/guidera",
    },
    {
        title: "Capsule Hub",
        description: "our browser extension",
        features: [
            "One-click capsules",
            "Easy sharing",
            "Team collaboration",
            "Secure storage",
        ],
        link: "/capsule-hub",
    },
];

const SolutionsSection = () => {
    return (
        <section id="solutions" className="py-16 bg-muted/30">
            <div className="container mx-auto px-6">
                {/* Section Header */}
                <div className="max-w-2xl mx-auto text-center mb-12">
                    <span className="inline-block px-3 py-1 rounded-full bg-secondary/10 text-secondary text-xs font-medium mb-3">
                        Solutions
                    </span>
                    <h2 className="text-2xl md:text-4xl font-bold text-foreground mb-4">
                        Explore Our
                        <span className="gradient-text"> Offerings</span>
                    </h2>
                    <p className="text-base text-muted-foreground">
                        Discover how our tools can help you streamline your workflow and enhance productivity.
                    </p>
                </div>

                {/* Solutions Grid */}
                <div className="grid md:grid-cols-2 gap-6 max-w-4xl mx-auto">
                    {solutions.map((solution) => (
                        <div
                            key={solution.title}
                            className="relative p-6 rounded-xl bg-card border border-border transition-all duration-300 hover:border-primary/20 hover:shadow-md"
                        >
                            <h3 className="text-xl font-bold text-foreground mb-2">
                                {solution.title}
                            </h3>
                            <p className="text-sm text-muted-foreground mb-4">
                                {solution.description}
                            </p>

                            <ul className="grid grid-cols-2 gap-x-4 gap-y-2 mb-6">
                                {solution.features.map((feature) => (
                                    <li key={feature} className="flex items-start gap-2">
                                        <CheckCircle2 className="w-4 h-4 text-primary mt-0.5 flex-shrink-0" />
                                        <span className="text-[13px] text-foreground leading-tight">{feature}</span>
                                    </li>
                                ))}
                            </ul>

                            <Link to={solution.link} className="block w-full">
                                <Button
                                    variant="outline"
                                    size="sm"
                                    className="w-full"
                                >
                                    More
                                    <ArrowRight className="w-3.5 h-3.5 ml-1.5" />
                                </Button>
                            </Link>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default SolutionsSection;
