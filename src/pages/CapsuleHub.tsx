import { useState, useEffect } from "react";
import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import { Button } from "@/components/ui/button";
import { ChevronLeft, ChevronRight, CheckCircle2 } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";

const CapsuleHub = () => {
    const images = [
        "/CapsuleHub1.png",
        "/CapsuleHub2.png",
        "/CapsuleHub3.png",
    ];

    const [currentIndex, setCurrentIndex] = useState(0);

    useEffect(() => {
        const interval = setInterval(() => {
            nextSlide();
        }, 5000);
        return () => clearInterval(interval);
    }, [currentIndex]);

    const nextSlide = () => {
        setCurrentIndex((prev) => (prev + 1) % images.length);
    };

    const prevSlide = () => {
        setCurrentIndex((prev) => (prev - 1 + images.length) % images.length);
    };

    // Logic for side-by-side images: 
    // index 0 -> [0, 1]
    // index 1 -> [1, 2]
    // index 2 -> [2, 0]
    const visibleImages = [
        images[currentIndex],
        images[(currentIndex + 1) % images.length],
    ];

    return (
        <div className="min-h-screen bg-white text-slate-900 font-sans antialiased">
            <Header />

            <main>
                {/* Top Section with Dark Blue Background */}
                <div className="relative overflow-hidden hero-gradient pt-24 pb-12">
                    {/* Mesh overlay */}
                    <div className="absolute inset-0 mesh-overlay pointer-events-none opacity-60" />

                    <div className="relative z-10">
                        {/* Hero Section */}
                        <section className="py-12 md:py-16">
                            <div className="container mx-auto px-6">
                                <div className="max-w-4xl mx-auto text-center">
                                    <h1 className="text-3xl md:text-5xl font-extrabold tracking-tight mb-8 text-white">
                                        <span className="bg-gradient-to-r from-blue-400 via-teal-400 to-emerald-400 bg-clip-text text-transparent">
                                            Capsule Hub:
                                        </span>{" "}
                                        Bridge Your AI Conversations
                                    </h1>
                                </div>
                            </div>
                        </section>

                        {/* Carousel Section */}
                        <section className="pb-8 overflow-hidden">
                            <div className="container mx-auto px-4 lg:px-6">
                                <div className="relative group max-w-[1400px] mx-auto">
                                    <div className="flex gap-4 md:gap-6 justify-center items-stretch">
                                        <AnimatePresence mode="wait">
                                            {visibleImages.map((src, idx) => (
                                                <motion.div
                                                    key={`${src}-${idx}`}
                                                    initial={{ opacity: 0, scale: 0.95 }}
                                                    animate={{ opacity: 1, scale: 1 }}
                                                    exit={{ opacity: 0, scale: 0.95 }}
                                                    transition={{ duration: 0.4 }}
                                                    className="w-1/2 aspect-[16/10] rounded-2xl overflow-hidden border border-white/10 bg-white/5 backdrop-blur-md shadow-2xl flex items-center justify-center p-1"
                                                >
                                                    <img
                                                        src={src}
                                                        alt={`Capsule Hub Preview ${idx + 1}`}
                                                        className="w-full h-full object-cover md:object-contain rounded-xl"
                                                    />
                                                </motion.div>
                                            ))}
                                        </AnimatePresence>
                                    </div>

                                    {/* Navigation Arrows */}
                                    <div className="absolute top-1/2 -translate-y-1/2 left-0 right-0 flex justify-between pointer-events-none px-2 md:-mx-12 lg:-mx-16">
                                        <button
                                            onClick={prevSlide}
                                            className="pointer-events-auto p-4 rounded-full bg-white/10 backdrop-blur-md border border-white/20 shadow-xl hover:bg-white/20 transition-all transform hover:scale-110 active:scale-95 group text-white"
                                            aria-label="Previous image"
                                        >
                                            <ChevronLeft className="w-6 h-6 group-hover:-translate-x-0.5 transition-transform" />
                                        </button>
                                        <button
                                            onClick={nextSlide}
                                            className="pointer-events-auto p-4 rounded-full bg-white/10 backdrop-blur-md border border-white/20 shadow-xl hover:bg-white/20 transition-all transform hover:scale-110 active:scale-95 group text-white"
                                            aria-label="Next image"
                                        >
                                            <ChevronRight className="w-6 h-6 group-hover:translate-x-0.5 transition-transform" />
                                        </button>
                                    </div>
                                </div>
                            </div>
                        </section>
                    </div>
                </div>

                {/* Content Section with White Background */}
                <section className="py-20 bg-white">
                    <div className="container mx-auto px-6 max-w-4xl pt-4">
                        <div className="space-y-16">
                            {/* Intro */}
                            <div className="prose prose-slate max-w-none">
                                <p className="text-xl leading-relaxed text-slate-600">
                                    <span className="text-slate-900 font-semibold">Capsule Hub</span> is a context-transfer tool for AI workflows (a feature offering by Tilantra).
                                    Whether you are brainstorming on ChatGPT, coding on Claude, or researching on Gemini,
                                    it lets you capture the essence of any conversation into a <span className="text-primary font-bold">"Capsule"</span> and instantly reuse it in another AI chat.
                                </p>
                            </div>

                            {/* Why Capsule Hub? */}
                            <div>
                                <h2 className="text-3xl font-bold mb-6 flex items-center gap-3 text-slate-900">
                                    <span className="w-8 h-1 bg-primary rounded-full" />
                                    Why Capsule Hub?
                                </h2>
                                <p className="text-lg text-slate-600 leading-relaxed">
                                    Most users lose significant time switching between AI tools and rebuilding context.
                                    Capsule Hub turns scattered conversations into a unified, portable knowledge base.
                                </p>
                            </div>

                            {/* Key Features */}
                            <div>
                                <h2 className="text-3xl font-bold mb-8 text-slate-900">Key Features</h2>
                                <div className="grid gap-6">
                                    {[
                                        {
                                            title: "Context Capsule Generation",
                                            desc: "Instantly capture the core context of a conversation into a Capsule. This removes the need to copy-paste long chat histories or repeatedly explain the same background.",
                                        },
                                        {
                                            title: "Drag and Drop Injection",
                                            desc: "Use the Drop feature to inject a saved capsule into a new chat. The AI immediately understands the background, goals, and constraints of your work.",
                                        },
                                        {
                                            title: "Team and Collaboration Management",
                                            desc: "You can organize capsules by teams such as Engineering, Marketing, or Product. See who created each capsule to maintain transparency and smooth collaboration.",
                                        },
                                        {
                                            title: "Multi-Model Support",
                                            desc: "Works seamlessly with ChatGPT (Official and Plus), Claude.ai, and Google Gemini and AI Studio.",
                                        },
                                        {
                                            title: "Smart Library",
                                            desc: "Search your capsule library by content, tags, or team for fast and easy retrieval.",
                                        },
                                    ].map((feature, i) => (
                                        <div key={i} className="flex gap-5 items-start p-6 rounded-2xl bg-slate-50 border border-slate-200 hover:border-primary/30 hover:bg-slate-100 transition-all group shadow-sm">
                                            <div className="p-2.5 rounded-xl bg-primary/10 text-primary group-hover:scale-110 transition-transform">
                                                <CheckCircle2 className="w-6 h-6" />
                                            </div>
                                            <div>
                                                <h3 className="text-xl font-bold mb-2 text-slate-800">{i + 1}. {feature.title}</h3>
                                                <p className="text-slate-600 leading-relaxed">{feature.desc}</p>
                                            </div>
                                        </div>
                                    ))}
                                </div>
                            </div>

                            {/* Tiers */}
                            <div>
                                <h2 className="text-3xl font-bold mb-10 text-center text-slate-900">Tiers</h2>
                                <div className="grid md:grid-cols-2 gap-8 text-slate-900">
                                    <div className="p-8 rounded-[2rem] border border-slate-200 bg-white shadow-lg flex flex-col h-full hover:border-primary/20 transition-all">
                                        <h3 className="text-2xl font-bold mb-4 text-slate-800">Basic</h3>
                                        <p className="text-slate-600 mb-8 flex-grow">Create and use capsules privately. Does not include collaboration or versioning.</p>
                                    </div>
                                    <div className="p-8 rounded-[2rem] border-2 border-primary bg-primary/5 relative overflow-hidden flex flex-col h-full shadow-xl hover:bg-primary/10 transition-all font-sans">
                                        <div className="absolute top-4 right-4 px-4 py-1.5 bg-primary text-white text-[10px] font-black tracking-[0.2em] rounded-full uppercase">PRO</div>
                                        <h3 className="text-2xl font-bold mb-4 text-primary">Pro</h3>
                                        <p className="text-slate-700 font-medium mb-8 flex-grow">
                                            All basic features along with team collaboration. Ability to merge, split capsules and rollback to versions.
                                            Includes premium support and early access to marketplace and other features.
                                        </p>
                                    </div>
                                </div>
                            </div>

                            {/* Coming Soon */}
                            <div className="p-10 rounded-3xl bg-blue-50 border border-blue-100 relative overflow-hidden group">
                                <div className="absolute inset-0 bg-gradient-to-r from-blue-100/50 via-transparent to-teal-100/50 opacity-0 group-hover:opacity-100 transition-opacity" />
                                <h2 className="text-2xl font-bold mb-4 flex items-center gap-3 text-blue-900">
                                    <span className="w-3 h-3 rounded-full bg-blue-500 animate-pulse ring-4 ring-blue-500/20" />
                                    Coming Soon: Versioning (Beta)
                                </h2>
                                <p className="text-slate-700 text-lg leading-relaxed relative z-10">
                                    In the next major update, Capsule Hub will introduce versioning features, including the ability to track changes
                                    to capsules over time, roll back to previous versions if mistakes are made, and tag stable versions
                                    while maintaining team collaboration.
                                </p>
                            </div>
                        </div>
                    </div>
                </section>
            </main>
            <Footer />
        </div>
    );
};

export default CapsuleHub;
