import { useRef, useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { ArrowRight, ChevronDown } from "lucide-react";
import { motion } from "framer-motion";
import { AnimatedGroup } from "@/components/ui/animated-group";
import { TextEffect } from "@/components/ui/text-effect";
import CountUp from "react-countup";

// ─── Grid / Glow Canvas (unchanged) ──────────────────────────────────────────

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

// ─── Live Feed ────────────────────────────────────────────────────────────────

const FEED_ITEMS = [
    { type: "route", icon: "↗", label: "Routed", detail: "gpt-4o → gemini-flash", meta: "saved $0.14 · 9ms" },
    { type: "cache", icon: "⚡", label: "Cache hit", detail: "Prompt reused", meta: "saved $0.22 · 2.4k tokens" },
    { type: "comply", icon: "◈", label: "Blocked", detail: "Policy: competitor mention", meta: "auto-corrected" },
    { type: "capsule", icon: "⬡", label: "Capsule", detail: "\"Auth Spec v3\" → Cursor", meta: "@alex · Engineering" },
    { type: "route", icon: "↗", label: "Routed", detail: "claude-3.5 → haiku", meta: "saved $0.31 · 7ms" },
    { type: "comply", icon: "◈", label: "PII redacted", detail: "3 email addresses removed", meta: "before delivery" },
    { type: "capsule", icon: "⬡", label: "Team sync", detail: "\"Q2 Brief\" → Marketing", meta: "6 members notified" },
    { type: "route", icon: "↗", label: "Routed", detail: "gpt-4-turbo → mistral-7b", meta: "saved $0.48 · 11ms" },
    { type: "cache", icon: "⚡", label: "Cache hit", detail: "Prompt reused", meta: "saved $0.19 · 1.8k tokens" },
    { type: "comply", icon: "◈", label: "Escalated", detail: "Medical advice query", meta: "routed to human" },
    { type: "capsule", icon: "⬡", label: "Capsule", detail: "\"Competitor Research v2\"", meta: "→ Claude for synthesis" },
    { type: "route", icon: "↗", label: "Routed", detail: "gemini-pro → llama-3.1", meta: "saved $0.27 · 6ms" },
    { type: "cache", icon: "⚡", label: "Cache hit", detail: "Prompt reused", meta: "saved $0.34 · 3.1k tokens" },
    { type: "comply", icon: "◈", label: "Blocked", detail: "Policy: profanity filter", meta: "sanitised response" },
    { type: "capsule", icon: "⬡", label: "MCP inject", detail: "\"Sprint Spec\" → Cursor IDE", meta: "@priya · Engineering" },
    { type: "route", icon: "↗", label: "Routed", detail: "gpt-4o-mini → deepseek-r1", meta: "saved $0.09 · 5ms" },
] as const;

type FeedType = "route" | "cache" | "comply" | "capsule";

const TYPE_STYLES: Record<FeedType, { row: string; badge: string }> = {
    route: { row: "text-blue-400", badge: "bg-blue-500/10 text-blue-400 border-blue-500/20" },
    cache: { row: "text-emerald-400", badge: "bg-emerald-500/10 text-emerald-400 border-emerald-500/20" },
    comply: { row: "text-amber-400", badge: "bg-amber-500/10 text-amber-400 border-amber-500/20" },
    capsule: { row: "text-violet-400", badge: "bg-violet-500/10 text-violet-400 border-violet-500/20" },
};

const LiveFeed = () => {
    const [rpm, setRpm] = useState(823);
    useEffect(() => {
        const t = setInterval(() => {
            setRpm(prev => prev + Math.floor(Math.random() * 4 + 1));
        }, 800);
        return () => clearInterval(t);
    }, []);

    const doubled = [...FEED_ITEMS, ...FEED_ITEMS];
    const singleListHeight = 36 * FEED_ITEMS.length;

    return (
        <div className="relative w-full max-w-[480px] rounded-2xl border border-white/10 bg-[hsl(224,28%,5%)]/90 backdrop-blur-xl overflow-hidden shadow-2xl shadow-black/40">
            {/* Header */}
            <div className="flex items-center justify-between px-4 py-3 border-b border-white/[0.07]">
                <div className="flex items-center gap-2">
                    <div className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse" />
                    <span className="text-xs font-semibold text-white/60 uppercase tracking-widest">Tilantra Platform</span>
                    <span className="text-white/15 text-xs">·</span>
                    <span className="text-xs text-white/30">Live</span>
                </div>
                <div className="text-xs text-white/25 font-mono tabular-nums">
                    {rpm.toLocaleString()} req/min
                </div>
            </div>

            {/* Column headers */}
            <div className="flex items-center gap-3 px-4 py-2 border-b border-white/[0.04]">
                <span className="text-[10px] text-white/20 uppercase tracking-widest w-[72px]">Type</span>
                <span className="text-[10px] text-white/20 uppercase tracking-widest flex-1">Event</span>
                <span className="text-[10px] text-white/20 uppercase tracking-widest text-right">Outcome</span>
            </div>

            {/* Scrolling feed */}
            <div className="h-[320px] overflow-hidden relative">
                <div className="absolute top-0 left-0 right-0 h-10 bg-gradient-to-b from-[hsl(224,28%,5%)] to-transparent z-10 pointer-events-none" />
                <div className="absolute bottom-0 left-0 right-0 h-10 bg-gradient-to-t from-[hsl(224,28%,5%)] to-transparent z-10 pointer-events-none" />

                <motion.div
                    animate={{ y: [0, -singleListHeight] }}
                    transition={{ duration: 22, repeat: Infinity, ease: "linear" }}
                >
                    {doubled.map((item, i) => {
                        const styles = TYPE_STYLES[item.type as FeedType];
                        return (
                            <div
                                key={i}
                                className="flex items-center gap-3 px-4 h-9 border-b border-white/[0.03] hover:bg-white/[0.02] transition-colors"
                            >
                                <div className={`flex items-center gap-1.5 px-2 py-0.5 rounded-md border text-[10px] font-semibold w-[72px] shrink-0 ${styles.badge}`}>
                                    <span className="font-mono">{item.icon}</span>
                                    <span className="truncate">{item.label}</span>
                                </div>
                                <span className="text-xs text-white/50 flex-1 truncate font-mono">{item.detail}</span>
                                <span className={`text-[11px] font-mono shrink-0 ${styles.row}`}>{item.meta}</span>
                            </div>
                        );
                    })}
                </motion.div>
            </div>

            {/* Footer */}
            <div className="flex items-center justify-between px-4 py-2.5 border-t border-white/[0.07] bg-white/[0.01]">
                <div className="flex items-center gap-4">
                    <span className="text-[11px] text-emerald-400 font-mono">+$0.14 saved</span>
                    <span className="text-[11px] text-blue-400 font-mono">↗ gpt-4o → flash</span>
                </div>
                <span className="text-[11px] text-white/20 font-mono">last 100ms</span>
            </div>
        </div>
    );
};

// ─── Stats ────────────────────────────────────────────────────────────────────

const STATS = [
    { end: 68, suffix: "%+", label: "Cost reduction", color: "text-emerald-600 dark:text-emerald-400", decimals: 0 },
    { end: 40, suffix: "+", label: "AI models", color: "text-blue-600 dark:text-blue-400", decimals: 0 },
    { end: 99.9, suffix: "%", label: "Uptime SLA", color: "text-slate-900 dark:text-white/60", decimals: 1 },
    { end: 0, suffix: "", label: "Compliance leaks", color: "text-rose-500 dark:text-rose-400", decimals: 0 },
];


// ─── Main Component ───────────────────────────────────────────────────────────

const HeroSection = () => {
    return (
        <section id="hero" className="relative min-h-screen flex items-center overflow-hidden bg-transparent">
            <GridGlowCanvas />

            {/* Vignette */}
            <div className="absolute inset-0 z-[1] pointer-events-none vignette-bg" />

            <div className="relative z-10 container mx-auto px-6 pt-24 pb-12">
                <div className="grid lg:grid-cols-[1fr_500px] gap-16 items-center">

                    {/* ── Left Column ── */}
                    <AnimatedGroup className="flex flex-col items-start w-full" preset="slide">



                        {/* Headline */}
                        <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold leading-[1.06] tracking-tight mb-6 text-slate-900 dark:text-white text-left">
                            <div className="flex flex-col gap-1">
                                <TextEffect per="word" preset="fade">
                                    Accelerate Any
                                </TextEffect>
                                <span className="bg-gradient-to-r from-cyan-400 to-violet-500 bg-clip-text text-transparent">
                                    <TextEffect per="word" preset="fade" delay={0.1}>
                                        Workflow.
                                    </TextEffect>
                                </span>
                                <span className="text-slate-500 dark:text-white/90">
                                    <TextEffect per="word" preset="fade" delay={0.3}>
                                        Secure Every Request.
                                    </TextEffect>
                                </span>
                            </div>
                        </h1>

                        {/* Sub-headline */}
                        <p className="text-lg md:text-xl text-slate-600 dark:text-white/45 mb-8 max-w-2xl leading-relaxed text-left">
                            <TextEffect per="word" preset="blur" delay={0.7}>
                                The platform that makes AI work. Capture shared knowledge with Capsule Hub and optimize model routing with Guidera, giving your teams the speed of AI without the friction of context loss or cost spikes.
                            </TextEffect>
                        </p>

                        {/* CTAs */}
                        <div className="flex items-center gap-3 flex-wrap mb-12">
                            {/* Primary — rainbow glow */}
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
                                    className="relative z-10 inline-flex items-center gap-2 px-6 py-3 text-sm font-semibold text-blue-600 dark:text-white bg-white dark:bg-[hsl(224,28%,5%)] rounded-full border border-blue-200 dark:border-cyan-500/30 hover:border-blue-300 dark:hover:border-cyan-400/50 transition-all duration-200"
                                >
                                    Book a Demo
                                    <ArrowRight className="w-4 h-4 group-hover:translate-x-0.5 transition-transform" />
                                </Link>
                            </div>

                            {/* Secondary — scroll to products */}
                            <button
                                onClick={() => document.getElementById("solutions")?.scrollIntoView({ behavior: "smooth" })}
                                className="inline-flex items-center gap-2 px-6 py-3 text-sm font-medium text-slate-600 dark:text-white/50 rounded-full hover:text-slate-900 dark:hover:text-white hover:bg-slate-100 dark:hover:bg-white/[0.06] backdrop-blur-md border border-slate-200 dark:border-white/5 transition-all duration-200"
                            >
                                Explore our products
                                <ChevronDown className="w-4 h-4" />
                            </button>
                        </div>

                        {/* Animated stat strip */}
                        <motion.div
                            initial={{ opacity: 0 }}
                            animate={{ opacity: 1 }}
                            transition={{ delay: 1.5, duration: 0.6 }}
                            className="flex items-center gap-8 flex-wrap"
                        >
                            {STATS.map((stat, i) => (
                                <div key={i} className="flex flex-col items-start">
                                    <div
                                        className={`text-xl font-bold tabular-nums ${stat.color}`}
                                        style={{ letterSpacing: "-0.04em" }}
                                    >
                                        <CountUp
                                            end={stat.end}
                                            decimals={stat.decimals}
                                            duration={2.4}
                                            enableScrollSpy={false}
                                            delay={1.6}
                                        />
                                        {stat.suffix}
                                    </div>
                                    <div className="text-[11px] text-slate-500 dark:text-white/25 mt-0.5">{stat.label}</div>
                                </div>
                            ))}
                        </motion.div>
                    </AnimatedGroup>

                    {/* ── Right Column — Live Feed (desktop only) ── */}
                    <div className="relative hidden lg:flex items-center justify-end pr-16">
                        <LiveFeed />

                        {/* Float card — top left */}
                        <motion.div
                            initial={{ opacity: 0, scale: 0.9, x: 20 }}
                            animate={{ opacity: 1, scale: 1, x: 0 }}
                            transition={{ delay: 1.8, duration: 0.5, type: "spring" }}
                            className="absolute -top-12 -left-[70px] px-4 py-3 rounded-xl border border-emerald-200 dark:border-emerald-500/20 bg-white/90 dark:bg-emerald-500/[0.08] backdrop-blur-xl shadow-xl dark:shadow-none"
                        >
                            <div className="text-2xl font-bold text-emerald-600 dark:text-emerald-400 tabular-nums" style={{ letterSpacing: "-0.04em" }}>-61%</div>
                            <div className="text-[11px] text-slate-500 dark:text-white/35 mt-0.5">avg AI cost</div>
                            <div className="text-[11px] text-slate-400 dark:text-white/20">this month</div>
                        </motion.div>

                        {/* Float card — bottom right */}
                        <motion.div
                            initial={{ opacity: 0, scale: 0.9, x: -20 }}
                            animate={{ opacity: 1, scale: 1, x: 0 }}
                            transition={{ delay: 2.0, duration: 0.5, type: "spring" }}
                            className="absolute -bottom-10 right-4 px-4 py-3 rounded-xl border border-rose-200 dark:border-rose-500/20 bg-white/90 dark:bg-rose-500/[0.08] backdrop-blur-xl shadow-xl dark:shadow-none"
                        >
                            <div className="text-2xl font-bold text-rose-600 dark:text-rose-400 tabular-nums" style={{ letterSpacing: "-0.04em" }}>0</div>
                            <div className="text-[11px] text-slate-500 dark:text-white/35 mt-0.5">policy leaks</div>
                            <div className="text-[11px] text-slate-400 dark:text-white/20">past 90 days</div>
                        </motion.div>
                    </div>

                </div>
            </div>

            {/* Dual-colour glow bleed */}
            <div className="absolute bottom-0 left-1/3 -translate-x-1/2 w-[400px] h-[180px] bg-gradient-to-t from-blue-600/12 to-transparent rounded-t-full blur-3xl pointer-events-none" />
            <div className="absolute bottom-0 right-1/3 translate-x-1/2 w-[400px] h-[180px] bg-gradient-to-t from-violet-600/12 to-transparent rounded-t-full blur-3xl pointer-events-none" />
        </section>
    );
};

export default HeroSection;
