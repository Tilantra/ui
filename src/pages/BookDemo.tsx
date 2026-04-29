import { useEffect, useState } from "react";
import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import { Loader2 } from "lucide-react";

const BookDemo = () => {
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        const script = document.createElement("script");
        script.src = "https://assets.calendly.com/assets/external/widget.js";
        script.async = true;
        script.onload = () => {
            setTimeout(() => setLoading(false), 1500);
        };
        document.body.appendChild(script);

        return () => {
            const existingScript = document.querySelector('script[src="https://assets.calendly.com/assets/external/widget.js"]');
            if (existingScript) {
                document.body.removeChild(existingScript);
            }
        };
    }, []);

    return (
        <div className="min-h-screen bg-transparent text-foreground relative overflow-hidden">
            {/* Background Blobs */}
            <div className='absolute inset-0 blur-[118px] max-w-lg h-[800px] mx-auto sm:max-w-3xl sm:h-[400px] pointer-events-none' style={{ background: "linear-gradient(106.89deg, rgba(192, 132, 252, 0.11) 15.73%, rgba(14, 165, 233, 0.41) 15.74%, rgba(232, 121, 249, 0.26) 56.49%, rgba(79, 70, 229, 0.4) 115.91%)" }}></div>

            <Header />
            <main className="pt-32 pb-20 relative z-10">
                <div className="container mx-auto px-6">
                    <div className="grid lg:grid-cols-4 gap-12 items-start">
                        {/* Left Column: Content (1/4 width) */}
                        <div className="space-y-4 lg:col-span-1 pt-4">
                            <h1 className="text-4xl md:text-5xl font-bold tracking-tight bg-clip-text text-transparent bg-gradient-to-r from-blue-400 to-cyan-300">
                                Book a Demo
                            </h1>
                            <div className="space-y-4 text-base md:text-lg text-slate-700 dark:text-white/60 leading-relaxed">
                                <p>
                                    Experience the power of Tilantra firsthand. Schedule a walkthrough with our team to explore our AI solutions.
                                </p>
                                <p>
                                    Our experts will guide you through our platform and answer technical questions.
                                </p>
                            </div>
                        </div>

                        {/* Right Column: Calendly Widget (3/4 width) */}
                        <div className="w-full lg:col-span-3 -mt-6">
                            <div className="relative group rounded-3xl p-[1px] shadow-[0_0_50px_rgba(14,165,233,0.15)]">
                                <div className="absolute inset-0 bg-cyan-500/5 dark:bg-cyan-500/10 rounded-3xl blur-xl -z-10 group-hover:scale-[1.02] transition-transform duration-700" />
                                <div className="bg-white/70 dark:bg-white/[0.03] backdrop-blur-xl border border-slate-200 dark:border-white/10 rounded-3xl overflow-hidden relative" style={{ minHeight: "750px" }}>
                                    
                                    {/* Loading Skeleton */}
                                    {loading && (
                                        <div className="absolute inset-0 flex flex-col items-center justify-center animate-pulse z-20 bg-background/50 backdrop-blur-sm">
                                            <Loader2 className="w-10 h-10 text-cyan-500 animate-spin mb-4" />
                                            <div className="h-8 bg-slate-200 dark:bg-white/10 rounded-full w-48 mb-6" />
                                            <div className="w-full max-w-lg space-y-4 px-6 gap-4">
                                                <div className="h-20 bg-slate-100 dark:bg-white/5 rounded-2xl w-full" />
                                                <div className="h-64 bg-slate-100 dark:bg-white/5 rounded-2xl w-full" />
                                            </div>
                                        </div>
                                    )}

                                    {/* Calendly Inject Target */}
                                    <div
                                        className="calendly-inline-widget z-10 relative"
                                        data-url="https://calendly.com/tilantra-technologies"
                                        style={{ minWidth: "400px", height: "750px" }}
                                    ></div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </main>
            <Footer />
        </div>
    );
};

export default BookDemo;
