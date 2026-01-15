import { useState } from "react";
import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import GuideraBentoSection from "@/components/sections/GuideraBentoSection";
import { motion, AnimatePresence } from "framer-motion";
import { cn } from "@/lib/utils";
import { Link } from "react-router-dom";

const Guidera = () => {
    const images = [
        { src: "/GuideraPage3.png", label: "Metrics Dashboard: Real-time analytics to monitor AI spend, performance metrics, and operational risks." },
        { src: "/GuideraPage2.png", label: "Policy Management: A unified control layer to manage AI usage across your entire stack without slowing teams down." },
        { src: "/GuideraPage1.png", label: "Smart Chatbot: Intelligently routes requests to the right models and enforces guardrails by default." },
    ];

    const [hoveredIndex, setHoveredIndex] = useState<number | null>(null);

    return (
        <div className="min-h-screen bg-white text-slate-900 font-sans antialiased">
            <Header />

            <main>
                {/* Hero Section with Split Layout */}
                <div className="relative overflow-hidden hero-gradient pt-24 pb-32">
                    {/* Mesh overlay */}
                    <div className="absolute inset-0 mesh-overlay pointer-events-none opacity-60" />

                    <div className="container mx-auto px-6 relative z-10">
                        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
                            {/* Left Column: Text Content */}
                            <motion.div
                                initial={{ opacity: 0, x: -30 }}
                                animate={{ opacity: 1, x: 0 }}
                                transition={{ duration: 0.8 }}
                                className="text-left"
                            >
                                <h1 className="text-5xl md:text-7xl font-extrabold tracking-tight mb-8 text-white leading-[1.1]">
                                    <span className="bg-gradient-to-r from-blue-400 via-teal-400 to-emerald-400 bg-clip-text text-transparent block mb-2">
                                        Guidera:
                                    </span>
                                    Integrated AI Platform
                                </h1>
                                <p className="text-xl md:text-2xl text-white/80 leading-relaxed mb-10 max-w-xl">
                                    Optimize spend, ensure compliance, and accelerate deployment with one unified platform.
                                </p>

                                <div className="flex flex-wrap gap-4 mb-12">
                                    <Link
                                        to="/docs/get-started-guidera"
                                        className="px-8 py-4 rounded-full bg-white text-blue-900 font-bold text-lg shadow-lg hover:shadow-xl hover:scale-105 transition-all flex items-center gap-2 group"
                                    >
                                        Get Started with Guidera
                                        <span className="group-hover:translate-x-1 transition-transform">→</span>
                                    </Link>
                                </div>

                                <div className="min-h-[6rem]">
                                    <AnimatePresence mode="wait">
                                        {hoveredIndex !== null && (
                                            <motion.p
                                                key={hoveredIndex}
                                                initial={{ opacity: 0, y: 10 }}
                                                animate={{ opacity: 1, y: 0 }}
                                                exit={{ opacity: 0, y: -10 }}
                                                transition={{ duration: 0.3 }}
                                                className="text-blue-300 text-lg font-medium leading-relaxed max-w-lg border-l-2 border-blue-400/30 pl-6 italic"
                                            >
                                                {images[hoveredIndex].label}
                                            </motion.p>
                                        )}
                                    </AnimatePresence>
                                </div>
                            </motion.div>

                            <div className="relative h-[500px] md:h-[600px] flex items-center justify-center">
                                <div className="relative w-full max-w-[550px] aspect-[1600/1000] lg:-ml-30">
                                    {images.map((image, idx) => {
                                        const isHovered = hoveredIndex === idx;
                                        const offsets = [
                                            { x: -60, y: -50, rotate: -8, scale: 0.95 },
                                            { x: 0, y: 0, rotate: 0, scale: 1 },
                                            { x: 60, y: 50, rotate: 8, scale: 0.95 },
                                        ];

                                        return (
                                            <motion.div
                                                key={image.src}
                                                initial={offsets[idx]}
                                                animate={{
                                                    x: isHovered ? 0 : offsets[idx].x,
                                                    y: isHovered ? -20 : offsets[idx].y,
                                                    rotate: isHovered ? 0 : offsets[idx].rotate,
                                                    scale: isHovered ? 1.05 : offsets[idx].scale,
                                                    zIndex: isHovered ? 50 : 10 + idx,
                                                }}
                                                transition={{
                                                    type: "spring",
                                                    stiffness: 300,
                                                    damping: 25
                                                }}
                                                onMouseEnter={() => setHoveredIndex(idx)}
                                                onMouseLeave={() => setHoveredIndex(null)}
                                                className="absolute inset-0 cursor-pointer"
                                            >
                                                <div className={cn(
                                                    "w-full h-full rounded-2xl overflow-hidden border border-white/20 shadow-2xl transition-all duration-300",
                                                    isHovered ? "ring-4 ring-blue-500/30 ring-offset-4 ring-offset-slate-900" : ""
                                                )}>
                                                    <img
                                                        src={image.src}
                                                        alt={image.label}
                                                        className="w-full h-full object-cover"
                                                    />
                                                    {!isHovered && (
                                                        <div className="absolute inset-0 bg-slate-900/5 backdrop-blur-[0.5px] hover:backdrop-blur-0 transition-all" />
                                                    )}
                                                </div>
                                            </motion.div>
                                        );
                                    })}
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                {/* Lorem Ipsum Section */}
                <section className="py-20 bg-white">
                    <div className="container mx-auto px-6 max-w-4xl text-center">
                        <h2 className="text-3xl font-bold text-slate-900 mb-6">Explore the Possibilities</h2>
                        <p className="text-lg text-slate-600 leading-relaxed mb-8 text-left">
                            Guidera is Tilantra’s intelligent control layer for modern AI systems. As organizations scale GenAI across products, models, and regions, things get messy fast. Costs spike, outputs become inconsistent, and compliance turns into a constant worry. Guidera brings clarity by giving you a single place to manage how AI is used across your stack, without slowing teams down or adding friction.
                        </p>
                        <p className="text-lg text-slate-600 leading-relaxed text-left">
                            Guidera intelligently routes requests to the right models, optimizes spend in real time, and enforces guardrails by default. With it, teams typically see more than 60 percent lower AI costs, more reliable outputs, and far less operational risk. From AI-native startups to regulated enterprises, Guidera ensures every prompt, model call, and decision is optimized, auditable, and aligned with business goals automatically.
                        </p>
                    </div>
                </section>

                {/* Bento Features Section */}
                <GuideraBentoSection />
            </main>
            <Footer />
        </div>
    );
};

export default Guidera;
