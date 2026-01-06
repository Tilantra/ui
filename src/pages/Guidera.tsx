
import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import ChatbotSection from "@/components/sections/ChatbotSection";
import { motion } from "framer-motion";

const Guidera = () => {
    return (
        <div className="min-h-screen bg-white text-slate-900 font-sans antialiased">
            <Header />

            <main>
                {/* Top Section with Dark Blue Background & Hero Gradient */}
                <div className="relative overflow-hidden hero-gradient pt-24 pb-12">
                    {/* Mesh overlay */}
                    <div className="absolute inset-0 mesh-overlay pointer-events-none opacity-60" />

                    <div className="relative z-10">
                        {/* Hero Section */}
                        <section className="pt-12 md:pt-20 pb-4 text-center">
                            <div className="container mx-auto px-6">
                                <h1 className="text-4xl md:text-6xl font-extrabold tracking-tight mb-4 text-white">
                                    <span className="bg-gradient-to-r from-blue-400 via-teal-400 to-emerald-400 bg-clip-text text-transparent">
                                        Guidera:
                                    </span>{" "}
                                    Integrated Platform
                                </h1>
                            </div>
                        </section>

                        {/* 3D Floating Cards Layout */}
                        <section className="pb-24 pt-10">
                            <div className="container mx-auto px-4 perspective-1000">
                                <div className="relative max-w-6xl mx-auto flex flex-col md:flex-row justify-center items-center gap-8 md:gap-4 preserve-3d">

                                    {/* Left Card - Tilted Right */}
                                    <motion.div
                                        initial={{ opacity: 0, x: -50, rotateY: 0 }}
                                        animate={{ opacity: 1, x: 0, rotateY: 25 }}
                                        transition={{ duration: 0.8, delay: 0.2 }}
                                        whileHover={{ scale: 1.05, rotateY: 0, zIndex: 50, transition: { duration: 0.3 } }}
                                        className="relative w-full md:w-[380px] group cursor-pointer"
                                        style={{ transformStyle: "preserve-3d" }}
                                    >
                                        <div className="relative aspect-video rounded-2xl overflow-hidden border border-white/10 shadow-[0_0_30px_rgba(0,0,0,0.3)] bg-slate-900/80 backdrop-blur-xl">
                                            {/* Glow Effect */}
                                            <div className="absolute inset-0 bg-gradient-to-br from-blue-500/20 to-purple-500/20 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>

                                            <img src="/GuideraPage2.png" alt="Policy Management" className="w-full h-full object-cover opacity-90 group-hover:opacity-100 transition-all duration-300" />

                                            {/* Overlay Text */}
                                            <div className="absolute inset-0 flex items-center justify-center bg-black/40 opacity-0 group-hover:opacity-100 transition-all duration-300">
                                                <span className="px-4 py-2 rounded-full bg-blue-500/20 border border-blue-400/30 text-blue-100 backdrop-blur-md font-medium text-sm">
                                                    Policy Management
                                                </span>
                                            </div>
                                        </div>
                                    </motion.div>

                                    {/* Center Card - Front & Center */}
                                    <motion.div
                                        initial={{ opacity: 0, y: 50, scale: 0.9 }}
                                        animate={{ opacity: 1, y: 0, scale: 1.1, z: 50 }}
                                        transition={{ duration: 0.8 }}
                                        whileHover={{ scale: 1.15, z: 100, zIndex: 50, transition: { duration: 0.3 } }}
                                        className="relative w-full md:w-[420px] z-20 group cursor-pointer shadow-2xl"
                                        style={{ transformStyle: "preserve-3d" }}
                                    >
                                        <div className="relative aspect-video rounded-2xl overflow-hidden border-2 border-teal-400/30 shadow-[0_0_50px_rgba(20,184,166,0.2)] bg-slate-900/90 backdrop-blur-xl">
                                            <img src="/GuideraPage1.png" alt="Smart Chatbot" className="w-full h-full object-cover" />


                                        </div>
                                    </motion.div>

                                    {/* Right Card - Tilted Left */}
                                    <motion.div
                                        initial={{ opacity: 0, x: 50, rotateY: 0 }}
                                        animate={{ opacity: 1, x: 0, rotateY: -25 }}
                                        transition={{ duration: 0.8, delay: 0.4 }}
                                        whileHover={{ scale: 1.05, rotateY: 0, zIndex: 50, transition: { duration: 0.3 } }}
                                        className="relative w-full md:w-[380px] group cursor-pointer"
                                        style={{ transformStyle: "preserve-3d" }}
                                    >
                                        <div className="relative aspect-video rounded-2xl overflow-hidden border border-white/10 shadow-[0_0_30px_rgba(0,0,0,0.3)] bg-slate-900/80 backdrop-blur-xl">
                                            {/* Glow Effect */}
                                            <div className="absolute inset-0 bg-gradient-to-bl from-emerald-500/20 to-teal-500/20 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>

                                            <img src="/GuideraPage3.png" alt="Metrics Dashboard" className="w-full h-full object-cover opacity-90 group-hover:opacity-100 transition-all duration-300" />

                                            {/* Overlay Text */}
                                            <div className="absolute inset-0 flex items-center justify-center bg-black/40 opacity-0 group-hover:opacity-100 transition-all duration-300">
                                                <span className="px-4 py-2 rounded-full bg-emerald-500/20 border border-emerald-400/30 text-emerald-100 backdrop-blur-md font-medium text-sm">
                                                    Metrics Dashboard
                                                </span>
                                            </div>
                                        </div>
                                    </motion.div>

                                </div>
                            </div>
                        </section>
                    </div>
                </div>

                {/* Lorem Ipsum Section */}
                <section className="py-20 bg-white">
                    <div className="container mx-auto px-6 max-w-4xl text-center">
                        <h2 className="text-3xl font-bold text-slate-900 mb-6">Explore the Possibilities</h2>
                        <p className="text-lg text-slate-600 leading-relaxed mb-8">
                            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                            Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
                            Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.
                            Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
                        </p>
                        <p className="text-lg text-slate-600 leading-relaxed">
                            Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam,
                            eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo.
                        </p>
                    </div>
                </section>

                <ChatbotSection />
            </main>
            <Footer />
        </div>
    );
};

export default Guidera;
