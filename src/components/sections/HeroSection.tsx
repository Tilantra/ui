import { useRef, useEffect } from "react";
import { Link } from "react-router-dom";
import { ArrowRight, Sparkles } from "lucide-react";
import { AnimatedGroup } from "@/components/ui/animated-group";
import { TextEffect } from "@/components/ui/text-effect";

const GridGlowCanvas = () => {
    const canvasRef = useRef<HTMLCanvasElement>(null);

    useEffect(() => {
        const canvas = canvasRef.current;
        if (!canvas) return;
        const ctx = canvas.getContext("2d");
        if (!ctx) return;

        const GRID = 60;
        const GLOW_COLORS = ["#1e40af", "#2563eb", "#0ea5e9", "#1d4ed8"];
        let frameId: number;

        class Glow {
            x = 0; y = 0; tx = 0; ty = 0;
            radius = 80 + Math.random() * 60;
            speed = 0.008 + Math.random() * 0.012;
            color = GLOW_COLORS[Math.floor(Math.random() * GLOW_COLORS.length)];
            alpha = 0;

            constructor() { this.reset(); this.x = this.tx; this.y = this.ty; }

            reset() {
                this.tx = Math.floor(Math.random() * (canvas!.width / GRID)) * GRID;
                this.ty = Math.floor(Math.random() * (canvas!.height / GRID)) * GRID;
            }

            update() {
                this.x += (this.tx - this.x) * this.speed;
                this.y += (this.ty - this.y) * this.speed;
                if (Math.abs(this.tx - this.x) < 2 && Math.abs(this.ty - this.y) < 2) this.reset();
                if (this.alpha < 1) this.alpha += 0.008;
            }

            draw() {
                const grad = ctx!.createRadialGradient(this.x, this.y, 0, this.x, this.y, this.radius);
                grad.addColorStop(0, this.color + "44");
                grad.addColorStop(1, "transparent");
                ctx!.globalAlpha = this.alpha * 0.6;
                ctx!.fillStyle = grad;
                ctx!.beginPath();
                ctx!.arc(this.x, this.y, this.radius, 0, Math.PI * 2);
                ctx!.fill();
                ctx!.globalAlpha = 1;
            }
        }

        let glows: Glow[] = [];

        const resize = () => {
            canvas!.width = window.innerWidth;
            canvas!.height = window.innerHeight;
            glows = Array.from({ length: 8 }, () => new Glow());
        };

        const drawGrid = () => {
            ctx.strokeStyle = "rgba(255,255,255,0.035)";
            ctx.lineWidth = 1;
            for (let x = 0; x <= canvas!.width; x += GRID) {
                ctx.beginPath(); ctx.moveTo(x, 0); ctx.lineTo(x, canvas!.height); ctx.stroke();
            }
            for (let y = 0; y <= canvas!.height; y += GRID) {
                ctx.beginPath(); ctx.moveTo(0, y); ctx.lineTo(canvas!.width, y); ctx.stroke();
            }
        };

        const animate = () => {
            ctx.clearRect(0, 0, canvas!.width, canvas!.height);
            drawGrid();
            glows.forEach(g => { g.update(); g.draw(); });
            frameId = requestAnimationFrame(animate);
        };

        resize();
        animate();
        window.addEventListener("resize", resize);
        return () => { window.removeEventListener("resize", resize); cancelAnimationFrame(frameId); };
    }, []);

    return <canvas ref={canvasRef} className="absolute inset-0 z-0 w-full h-full opacity-40 dark:opacity-60" />;
};

const HeroSection = () => {
    return (
        <section id="hero" className="relative min-h-screen flex items-center justify-center overflow-hidden bg-transparent">
            <GridGlowCanvas />

            {/* Radial vignette to focus center */}
            <div className="absolute inset-0 z-[1] pointer-events-none vignette-bg" />

            {/* Content */}
            <div className="relative z-10 container mx-auto px-6 pt-32 pb-20 flex flex-col items-center text-center">
                    <AnimatedGroup
                    className="flex flex-col items-center w-full max-w-4xl mx-auto"
                    preset="slide"
                >

                    {/* Headline */}
                    <h1 className="text-5xl md:text-7xl lg:text-8xl font-bold leading-tight tracking-tight mb-8 text-slate-900 dark:text-white">
                        <TextEffect per="word" preset="fade">
                            Enterprise AI Orchestration.
                        </TextEffect>
                        <div className="gradient-text mt-2 inline-block">
                            <TextEffect per="char" preset="fade" delay={0.15}>
                                Simplified.
                            </TextEffect>
                        </div>
                    </h1>

                    <p className="text-lg md:text-xl text-slate-600 dark:text-cyan-100/60 mb-12 max-w-2xl mx-auto leading-relaxed">
                        <TextEffect per="word" preset="blur" delay={0.8}>
                            The unified solution for enterprise AI management. Deploy, monitor, and scale your AI usage with unprecedented control and visibility.
                        </TextEffect>
                    </p>

                    {/* CTAs */}
                    <div className="flex items-center gap-3 flex-wrap justify-center">
                        {/* Primary — rainbow glow button */}
                        <div className="relative group">
                            <div
                                className="absolute inset-0 -m-[2px] rounded-full opacity-70 blur-sm animate-rainbow pointer-events-none"
                                style={{
                                    background: "linear-gradient(90deg, hsl(210,100%,60%), hsl(190,90%,55%), hsl(185,85%,50%), hsl(190,90%,55%), hsl(210,100%,60%))",
                                    backgroundSize: "200% 200%",
                                }}
                            />
                            <Link
                                to="/book-demo"
                                className="relative z-10 inline-flex items-center gap-2 px-6 py-3 text-sm font-semibold text-blue-600 dark:text-white bg-white dark:bg-[hsl(224,28%,5%)] rounded-full border border-blue-200 dark:border-cyan-500/30 hover:border-blue-300 dark:hover:border-cyan-400/50 transition-all duration-200 hover:bg-slate-50 dark:group-hover:bg-[hsl(224,28%,7%)]"
                            >
                                Book a Demo
                                <ArrowRight className="w-4 h-4 group-hover:translate-x-0.5 transition-transform" />
                            </Link>
                        </div>

                        {/* Secondary */}
                        <Link
                            to="/docs"
                            className="inline-flex items-center gap-2 px-6 py-3 text-sm font-medium text-slate-600 dark:text-white/50 rounded-full hover:text-slate-900 dark:hover:text-white hover:bg-slate-200/50 dark:hover:bg-white/[0.06] backdrop-blur-md border border-slate-200 dark:border-white/5 transition-all duration-200"
                        >
                            View Docs
                        </Link>
                    </div>

                    {/* Trust indicators */}
                    <div className="flex items-center gap-6 mt-12 text-xs text-slate-500 dark:text-white/25">
                        <span>SOC2 Compliant</span>
                        <span className="w-px h-3 bg-slate-300 dark:bg-white/10" />
                        <span>40+ Models</span>
                        <span className="w-px h-3 bg-slate-300 dark:bg-white/10" />
                        <span>99.9% Uptime</span>
                        <span className="w-px h-3 bg-slate-300 dark:bg-white/10" />
                        <span>70% Cost Savings</span>
                    </div>
                </AnimatedGroup>

                {/* Bottom section glow bleed */}
                <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-[600px] h-[200px] bg-gradient-to-t from-blue-200/50 via-blue-100/20 dark:from-cyan-600/15 dark:via-blue-600/5 to-transparent rounded-t-full blur-3xl pointer-events-none" />
            </div>
        </section>
    );
};

export default HeroSection;
