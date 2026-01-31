import { useEffect } from "react";
import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";

const BookDemo = () => {
    useEffect(() => {
        const script = document.createElement("script");
        script.src = "https://assets.calendly.com/assets/external/widget.js";
        script.async = true;
        document.body.appendChild(script);

        return () => {
            const existingScript = document.querySelector('script[src="https://assets.calendly.com/assets/external/widget.js"]');
            if (existingScript) {
                document.body.removeChild(existingScript);
            }
        };
    }, []);

    return (
        <div className="min-h-screen bg-background text-foreground relative overflow-hidden">
            {/* Background Blobs */}
            <div className="absolute top-0 right-0 -z-10 w-[500px] h-[500px] bg-primary/5 rounded-full blur-[120px] -mr-64 -mt-64 animate-pulse" />
            <div className="absolute bottom-0 left-0 -z-10 w-[500px] h-[500px] bg-blue-500/5 rounded-full blur-[120px] -ml-64 -mb-64" />

            <Header />
            <main className="pt-32 pb-20 relative z-10">
                <div className="container mx-auto px-6">
                    <div className="grid lg:grid-cols-4 gap-12 items-start">
                        {/* Left Column: Content (1/4 width) */}
                        <div className="space-y-4 lg:col-span-1 pt-4">
                            <h1 className="text-3xl md:text-4xl font-bold tracking-tight bg-clip-text text-transparent bg-gradient-to-r from-foreground to-foreground/70">
                                Book a Demo
                            </h1>
                            <div className="space-y-4 text-base md:text-lg text-muted-foreground leading-relaxed">
                                <p>
                                    Experience the power of Tilantra firsthand. Schedule a walkthrough with our team to explore our AI solutions.
                                </p>
                                <p>
                                    Our experts will guide you through our platform and answer technical questions.
                                </p>
                            </div>
                        </div>

                        {/* Right Column: Calendly Widget (3/4 width) */}
                        <div className="w-full lg:col-span-3 -mt-10">
                            <div
                                className="calendly-inline-widget"
                                data-url="https://calendly.com/tilantra-technologies"
                                style={{ minWidth: "400px", height: "700px" }}
                            ></div>
                        </div>
                    </div>
                </div>
            </main>
            <Footer />
        </div>
    );
};

export default BookDemo;
