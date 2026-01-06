const useCases = [
    {
        title: "Klarna: When Automation Crossed the Line",
        description: "Klarna's bot left customers stuck in endless loops—no humans, just frustration. Trust tanked, and the company had to bring people back. Even the most advanced automation can backfire if it loses the human touch. Guidera's intelligent routing ensures tricky cases reach the best-suited models, keeps every answer on-brand, and spots issues before they reach users.",
        gradient: "from-blue-500/20 via-cyan-500/20 to-teal-500/20",
        width: "320px",
        height: "140px",
        top: "40px",
        left: "10%",
        rotation: "0deg",
        zIndex: 10,
        lineClamp: "line-clamp-2",
    },
    {
        title: "Air Canada: The Chatbot That Promised Too Much",
        description: "Air Canada's bot invented a bereavement refund policy that never existed, and the airline had to pay the price in court. A single unchecked response created costly legal obligations and eroded years of brand trust. Guidera's compliance layer checks every answer against org-wide policies, flags prompt inputs proactively, and escalates anything unclear with minimal latency.",
        gradient: "from-cyan-500/20 via-blue-600/20 to-indigo-500/20",
        width: "200px",
        height: "190px",
        top: "100px",
        left: "32%",
        rotation: "0deg",
        zIndex: 20,
        lineClamp: "line-clamp-2",
    },
    {
        title: "Claude: When AI Became a Security Risk",
        description: "Hackers tricked Claude into running malware—turning helpful AI into a security threat. Even smart bots can be fooled. Without real-time safeguards, AI becomes an entry point for sophisticated attacks that put sensitive data at risk. Guidera's threat filter blocks shady non-compliant responses, scans for threats in every call and output, and alerts to new risks instantly.",
        gradient: "from-teal-500/20 via-cyan-600/20 to-blue-500/20",
        width: "330px",
        height: "150px",
        top: "200px",
        left: "5%",
        rotation: "0deg",
        zIndex: 15,
        lineClamp: "line-clamp-3",
    },
    {
        title: "Grok: When AI Spread Dangerous Myths",
        description: "Grok's chatbot started spouting conspiracy theories—one rogue edit, and it became a megaphone for misinformation. Misinformation can spread rapidly at scale, making robust oversight essential for public trust. Guidera's ethics engine stops propaganda before it's displayed to users, logs every change for transparency, and provides fallback mechanisms for non-compliant responses.",
        gradient: "from-indigo-500/20 via-blue-500/20 to-cyan-500/20",
        width: "300px",
        height: "130px",
        top: "300px",
        left: "30%",
        rotation: "0deg",
        zIndex: 25,
        lineClamp: "line-clamp-2",
    },
    {
        title: "DPD: When Profanity Became Customer Service",
        description: "DPD's chatbot was manipulated into swearing at customers and writing derogatory poems about the company itself. What started as a missing package inquiry turned into a viral PR disaster. Without proper guardrails, AI can be weaponized against your own brand. Guidera's content moderation filters inappropriate responses, maintains professional tone enforcement, and prevents prompt injection attacks.",
        gradient: "from-blue-600/20 via-teal-500/20 to-cyan-600/20",
        width: "300px",
        height: "140px",
        top: "40px",
        left: "52%",
        rotation: "0deg",
        zIndex: 12,
        lineClamp: "line-clamp-2",
    },
    {
        title: "McDonald's: AI That Couldn't Take an Order",
        description: "McDonald's AI drive-thru added bacon to ice cream and ordered hundreds of chicken nuggets nobody wanted. After months of customer frustration, they pulled the plug on over 100 locations. Even simple tasks require context understanding. Guidera's context-aware processing ensures accurate intent recognition, validates orders before confirmation, and provides seamless human handoff when needed.",
        gradient: "from-cyan-600/20 via-indigo-500/20 to-blue-600/20",
        width: "200px",
        height: "160px",
        top: "200px",
        left: "50%",
        rotation: "0deg",
        zIndex: 18,
        lineClamp: "line-clamp-2",
    },
    {
        title: "Chevrolet: The $1 Car Deal Gone Wrong",
        description: "A Chevrolet dealership's chatbot was tricked into offering a $70,000 Tahoe for just $1—and it called the deal 'legally binding.' Users exploited the bot's compliance, creating a viral embarrassment and potential legal nightmare. Guidera's transaction validation prevents unauthorized commitments, enforces approval workflows for high-stakes decisions, and maintains audit trails for all AI interactions.",
        gradient: "from-blue-500/20 via-indigo-600/20 to-cyan-500/20",
        width: "360px",
        height: "280px",
        top: "120px",
        left: "65%",
        rotation: "0deg",
        zIndex: 13,
        lineClamp: "line-clamp-none",
    },
];

const UseCasesSection = () => {
    return (
        <section id="use-cases" className="pt-12 pb-6 bg-background relative overflow-hidden">
            {/* Blue background tint */}
            <div className="absolute inset-0 bg-blue-500/5" />
            {/* Background gradient mesh */}
            <div className="absolute inset-0 mesh-overlay opacity-50" />

            <div className="container mx-auto px-6 relative z-10">
                {/* Section Header */}
                <div className="max-w-2xl mx-auto text-center mb-4">
                    <span className="inline-block px-3 py-1 rounded-full bg-primary/10 text-primary text-xs font-medium mb-2">
                        Use Cases
                    </span>
                    <h2 className="text-2xl md:text-4xl font-bold text-foreground mb-2">
                        Why <span className="gradient-text">Us</span>
                    </h2>
                    <p className="text-base text-muted-foreground">
                        Discover how organizations leverage our platform to transform their AI workflows
                    </p>
                </div>

                {/* Chaotic Overlayed Cards Container */}
                <div className="relative max-w-6xl mx-auto h-[500px] md:h-[480px]">
                    {useCases.map((useCase, index) => {
                        // Cards 2, 3, 6, 4 (indices 1, 2, 5, 3) should expand horizontally
                        const shouldExpandHorizontally = [1, 2, 5, 3].includes(index);

                        return (
                            <div
                                key={index}
                                className={`absolute p-6 rounded-2xl backdrop-blur-md border border-white/10 
                                       transition-all duration-700 hover:scale-105
                                       cursor-pointer group shadow-lg hover:shadow-2xl overflow-visible
                                       bg-gradient-to-br ${useCase.gradient}`}
                                style={{
                                    width: useCase.width,
                                    height: useCase.height,
                                    top: useCase.top,
                                    left: useCase.left,
                                    transform: `rotate(${useCase.rotation})`,
                                    zIndex: useCase.zIndex,
                                    animation: `floatChaotic ${3 + index * 0.3}s ease-in-out infinite`,
                                    animationDelay: `${index * 0.15}s`,
                                }}
                                onMouseEnter={(e) => {
                                    e.currentTarget.style.zIndex = '100';
                                    e.currentTarget.style.height = 'auto';
                                    if (shouldExpandHorizontally) {
                                        e.currentTarget.style.width = '400px';
                                    }
                                }}
                                onMouseLeave={(e) => {
                                    e.currentTarget.style.zIndex = String(useCase.zIndex);
                                    e.currentTarget.style.height = useCase.height;
                                    e.currentTarget.style.width = useCase.width;
                                }}
                            >
                                {/* Card number indicator */}
                                <div className="absolute -top-3 -right-3 w-10 h-10 rounded-full bg-primary/80 backdrop-blur-sm 
                                          flex items-center justify-center text-white font-bold text-sm
                                          group-hover:scale-110 transition-transform">
                                    {String(index + 1).padStart(2, "0")}
                                </div>


                                {/* Card content */}
                                <div className="relative z-10 overflow-hidden">
                                    <h3 className="text-lg font-bold text-foreground mb-2 group-hover:text-primary transition-colors">
                                        {useCase.title}
                                    </h3>
                                    <p className={`text-xs text-muted-foreground leading-relaxed opacity-80 group-hover:opacity-100 transition-opacity ${useCase.lineClamp} group-hover:line-clamp-none`}>
                                        {useCase.description}
                                    </p>
                                </div>

                                {/* Gradient overlay on hover */}
                                <div className="absolute inset-0 rounded-2xl bg-gradient-to-br from-primary/0 to-secondary/0 
                                          group-hover:from-primary/10 group-hover:to-secondary/10 transition-all duration-500" />
                            </div>
                        );
                    })}
                </div>
            </div>

            {/* Custom animation styles */}
            <style>{`
                @keyframes floatChaotic {
                    0%, 100% {
                        transform: translateY(0px) translateX(0px) rotate(var(--rotation));
                    }
                    25% {
                        transform: translateY(-15px) translateX(10px) rotate(calc(var(--rotation) + 2deg));
                    }
                    50% {
                        transform: translateY(-8px) translateX(-8px) rotate(var(--rotation));
                    }
                    75% {
                        transform: translateY(-20px) translateX(5px) rotate(calc(var(--rotation) - 2deg));
                    }
                }
            `}</style>
        </section >
    );
};

export default UseCasesSection;
