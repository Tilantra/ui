import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import EditorialHeader from "@/components/editorial/EditorialHeader";
import EditorialFooter from "@/components/editorial/EditorialFooter";
import GuideraBentoSection from "@/components/sections/GuideraBentoSection";
import RotatingText from "@/components/editorial/RotatingText";
import SplashCursor from "@/components/ui/SplashCursor";

/* ── Mock console data ─────────────────────────────────────────────── */

const STAT_TILES = [
    { label: "Spend this month", value: "$4,210", note: "vs $10,900 unrouted", accent: false },
    { label: "Saved by routing", value: "$6,690", note: "61% below baseline", accent: true },
    { label: "Requests", value: "2.4M", note: "across 14 agents", accent: false },
    { label: "P99 latency", value: "45ms", note: "routing overhead", accent: false },
];

/* Weekly cost: baseline (what it would have cost) vs routed (actual) */
const WEEKS = [
    { baseline: 92, routed: 44 },
    { baseline: 78, routed: 36 },
    { baseline: 96, routed: 41 },
    { baseline: 84, routed: 30 },
    { baseline: 100, routed: 38 },
    { baseline: 88, routed: 32 },
    { baseline: 95, routed: 35 },
    { baseline: 90, routed: 29 },
];

const ROUTING_MIX = [
    { model: "claude-haiku", share: 41 },
    { model: "gpt-4o-mini", share: 27 },
    { model: "gemini-flash", share: 18 },
    { model: "claude-sonnet", share: 9 },
    { model: "gpt-4o", share: 5 },
];

const REQUEST_ROWS = [
    { time: "14:02:11", agent: "support-agent", route: "gpt-4o → haiku", policy: "PII redacted", cost: "$0.0004" },
    { time: "14:02:09", agent: "billing-agent", route: "cache hit", policy: "passed", cost: "$0.0000" },
    { time: "14:02:08", agent: "research-agent", route: "sonnet (pinned)", policy: "passed", cost: "$0.0031" },
    { time: "14:02:05", agent: "support-agent", route: "gpt-4o → flash", policy: "output rewritten", cost: "$0.0003" },
];

const POLICIES = [
    { dir: "Input", rule: "Redact PII before the model ever sees it", scope: "all agents" },
    { dir: "Input", rule: "Block prompts that mention competitor names", scope: "support-agent" },
    { dir: "Output", rule: "No medical, legal or financial advice", scope: "all agents" },
    { dir: "Output", rule: "Formal tone, 120 words max, no markdown", scope: "billing-agent" },
];

const TUNING = [
    { agent: "support-agent", axis1: 82, axis2: 74 },
    { agent: "research-agent", axis1: 30, axis2: 22 },
    { agent: "billing-agent", axis1: 95, axis2: 88 },
];

/* ── Console dashboard (pure markup, no chart lib) ─────────────────── */

const chartMax = 100;

const ConsoleDashboard = () => (
    <div className="border border-neutral-200 dark:border-neutral-800 bg-white dark:bg-[#111114]">
        {/* Title bar */}
        <div className="flex items-center justify-between px-5 py-3 border-b border-neutral-200 dark:border-neutral-800">
            <span className="editorial-label text-neutral-950 dark:text-white">Guidera Console | Production</span>
            <span className="editorial-label text-neutral-400 dark:text-neutral-500 hidden sm:block">Last 30 days</span>
        </div>

        {/* Stat tiles */}
        <div className="grid grid-cols-2 lg:grid-cols-4 border-b border-neutral-200 dark:border-neutral-800">
            {STAT_TILES.map((s, i) => (
                <div
                    key={s.label}
                    className={`p-5 md:p-6 ${i > 0 ? "border-l border-neutral-200 dark:border-neutral-800 max-lg:[&:nth-child(3)]:border-l-0" : ""} max-lg:[&:nth-child(n+3)]:border-t max-lg:[&:nth-child(n+3)]:border-neutral-200 dark:max-lg:[&:nth-child(n+3)]:border-neutral-800`}
                >
                    <div className="editorial-label text-neutral-400 dark:text-neutral-500 mb-3">{s.label}</div>
                    <div className={`text-2xl md:text-3xl font-semibold tracking-[-0.02em] tabular-nums ${s.accent ? "text-red-600 dark:text-red-400" : "text-neutral-950 dark:text-white"}`}>
                        {s.value}
                    </div>
                    <div className="text-xs text-neutral-500 dark:text-neutral-400 mt-1.5">{s.note}</div>
                </div>
            ))}
        </div>

        {/* Chart + routing mix */}
        <div className="grid lg:grid-cols-[1fr_320px] border-b border-neutral-200 dark:border-neutral-800">
            <div className="p-5 md:p-6">
                <div className="flex items-center justify-between mb-6 flex-wrap gap-2">
                    <span className="editorial-label text-neutral-400 dark:text-neutral-500">Weekly cost</span>
                    <div className="flex items-center gap-5">
                        <span className="flex items-center gap-2 text-xs text-neutral-500 dark:text-neutral-400">
                            <span className="w-3 h-3 bg-neutral-200 dark:bg-neutral-700 inline-block" /> Without Guidera
                        </span>
                        <span className="flex items-center gap-2 text-xs text-neutral-500 dark:text-neutral-400">
                            <span className="w-3 h-3 bg-violet-700 dark:bg-violet-500 inline-block" /> Routed
                        </span>
                    </div>
                </div>
                <div className="flex items-end gap-2 sm:gap-3 h-44">
                    {WEEKS.map((w, i) => (
                        <div key={i} className="flex-1 flex items-end justify-center gap-1 h-full">
                            <div className="w-1/2 bg-neutral-200 dark:bg-neutral-700" style={{ height: `${(w.baseline / chartMax) * 100}%` }} />
                            <div className="w-1/2 bg-violet-700 dark:bg-violet-500" style={{ height: `${(w.routed / chartMax) * 100}%` }} />
                        </div>
                    ))}
                </div>
                <div className="flex justify-between mt-3 text-[10px] uppercase tracking-widest text-neutral-400 dark:text-neutral-500">
                    <span>W1</span><span>W8</span>
                </div>
            </div>

            <div className="p-5 md:p-6 border-t lg:border-t-0 lg:border-l border-neutral-200 dark:border-neutral-800">
                <div className="editorial-label text-neutral-400 dark:text-neutral-500 mb-6">Routing mix</div>
                <div className="space-y-4">
                    {ROUTING_MIX.map((m) => (
                        <div key={m.model}>
                            <div className="flex justify-between text-xs mb-1.5">
                                <span className="font-mono text-neutral-700 dark:text-neutral-300">{m.model}</span>
                                <span className="tabular-nums text-neutral-400 dark:text-neutral-500">{m.share}%</span>
                            </div>
                            <div className="h-1.5 bg-neutral-100 dark:bg-neutral-800">
                                <div className="h-full bg-violet-700 dark:bg-violet-500" style={{ width: `${m.share}%` }} />
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </div>

        {/* Request log */}
        <div className="p-5 md:p-6 overflow-x-auto">
            <div className="editorial-label text-neutral-400 dark:text-neutral-500 mb-4">Live requests</div>
            <table className="w-full text-xs font-mono min-w-[560px]">
                <thead>
                    <tr className="text-left text-neutral-400 dark:text-neutral-500">
                        <th className="font-normal pb-3">time</th>
                        <th className="font-normal pb-3">agent</th>
                        <th className="font-normal pb-3">route</th>
                        <th className="font-normal pb-3">policy</th>
                        <th className="font-normal pb-3 text-right">cost</th>
                    </tr>
                </thead>
                <tbody className="text-neutral-700 dark:text-neutral-300">
                    {REQUEST_ROWS.map((r) => (
                        <tr key={r.time} className="border-t border-neutral-100 dark:border-neutral-800">
                            <td className="py-2.5 tabular-nums">{r.time}</td>
                            <td className="py-2.5">{r.agent}</td>
                            <td className="py-2.5">{r.route}</td>
                            <td className={`py-2.5 ${r.policy === "passed" ? "" : "text-red-600 dark:text-red-400"}`}>{r.policy}</td>
                            <td className="py-2.5 text-right tabular-nums">{r.cost}</td>
                        </tr>
                    ))}
                </tbody>
            </table>
        </div>
    </div>
);

/* ── Tuning slider (static visual) ─────────────────────────────────── */

const Slider = ({
    left,
    right,
    value,
    accent,
    animated = false,
    animateDelay = 0,
}: {
    left: string;
    right: string;
    value: number;
    accent: string;
    animated?: boolean;
    animateDelay?: number;
}) => (
    <div>
        <div className="flex justify-between mb-2">
            <span className="text-[10px] uppercase tracking-widest text-neutral-400 dark:text-neutral-500">{left}</span>
            <span className="text-[10px] uppercase tracking-widest text-neutral-400 dark:text-neutral-500">{right}</span>
        </div>
        <div className="relative h-px bg-neutral-300 dark:bg-neutral-700">
            {animated ? (
                /* Drifts to a second position and back — a hint that the dial is yours to set */
                <motion.span
                    className={`absolute top-1/2 -translate-y-1/2 w-3 h-3 ${accent}`}
                    initial={{ left: `calc(${value}% - 6px)` }}
                    animate={{
                        left: [
                            `calc(${value}% - 6px)`,
                            `calc(${value - 34}% - 6px)`,
                            `calc(${value}% - 6px)`,
                        ],
                    }}
                    transition={{
                        duration: 3.8,
                        delay: animateDelay,
                        repeat: Infinity,
                        repeatDelay: 1.4,
                        ease: "easeInOut",
                    }}
                />
            ) : (
                <span className={`absolute top-1/2 -translate-y-1/2 w-3 h-3 ${accent}`} style={{ left: `calc(${value}% - 6px)` }} />
            )}
        </div>
    </div>
);

/* ── Live savings ticker — bare typography, no card, so it doesn't
      compete with the boxed console right below the fold ─────────────── */

const SavingsTicker = () => {
    const [saved, setSaved] = useState(6690.0);

    useEffect(() => {
        const t = setInterval(() => {
            setSaved((s) => s + 0.03 + Math.random() * 0.24);
        }, 900);
        return () => clearInterval(t);
    }, []);

    return (
        <div className="hidden lg:flex col-span-3 flex-col justify-center items-end text-right">
            <p className="editorial-label text-neutral-400 dark:text-neutral-500 flex items-center gap-2.5">
                <span className="w-1.5 h-1.5 bg-red-600 dark:bg-red-500 animate-pulse" />
                Saved by routing
            </p>
            <p className="mt-4 text-4xl xl:text-[2.8rem] font-semibold tracking-[-0.02em] tabular-nums text-neutral-950 dark:text-white whitespace-nowrap">
                ${saved.toLocaleString("en-US", { minimumFractionDigits: 2, maximumFractionDigits: 2 })}
            </p>
            <p className="mt-3 text-xs leading-relaxed text-neutral-400 dark:text-neutral-500 max-w-[18ch]">
                Median customer, this month
            </p>
        </div>
    );
};

/* ── Page ──────────────────────────────────────────────────────────── */

const Guidera = () => {
    return (
        <div className="editorial min-h-screen relative z-0">
            <SplashCursor className="splash-cursor opacity-[0.45] dark:opacity-[0.4]" DENSITY_DISSIPATION={2.4} COLOR_UPDATE_SPEED={14} />
            <EditorialHeader accent="crimson" />

            <main>
                {/* ── Hero ── */}
                <section className="bg-white dark:bg-[#0c0c0e]">
                    <div className="mx-auto max-w-[1320px] px-6 md:px-10 pt-20 md:pt-32 pb-14 md:pb-20">
                        <div className="grid grid-cols-12 gap-6">
                            <div className="col-span-12 lg:col-span-9">
                                <div className="flex items-center gap-4 mb-8">
                                    <span className="h-[3px] w-10 bg-violet-700 dark:bg-violet-500" />
                                    <p className="editorial-label text-neutral-400 dark:text-neutral-500">
                                        Guidera | Cost & control layer for AI agents
                                    </p>
                                </div>
                                <h1 className="editorial-serif italic text-[clamp(2.6rem,6vw,5.2rem)] leading-[1.06] tracking-[-0.01em] text-neutral-950 dark:text-white">
                                    Stop paying for what
                                    <br className="hidden sm:block" />{" "}
                                    your AI agents{" "}
                                    <RotatingText
                                        phrases={[
                                            { text: "don't need.", className: "text-violet-700 dark:text-violet-400" },
                                            { text: "don't use.", className: "text-violet-700 dark:text-violet-400" },
                                        ]}
                                    />
                                </h1>
                                <p className="mt-8 text-lg leading-relaxed text-neutral-500 dark:text-neutral-400 max-w-xl">
                                    Every request routed to the cheapest model that can do the job,
                                    checked against your policies, and logged to the cent. 99.9% uptime,
                                    45ms overhead.
                                </p>
                                <div className="mt-10 flex items-center gap-4 flex-wrap">
                                    <Link
                                        to="/contact"
                                        className="inline-flex items-center gap-3 px-7 py-4 text-sm font-semibold bg-neutral-950 text-white dark:bg-white dark:text-neutral-950 hover:bg-violet-700 hover:text-white dark:hover:bg-violet-400 dark:hover:text-neutral-950 transition-colors"
                                    >
                                        Start Free Trial <span>→</span>
                                    </Link>
                                    <Link
                                        to="/contact"
                                        className="inline-flex items-center gap-3 px-7 py-4 text-sm font-semibold border border-neutral-300 dark:border-neutral-700 text-neutral-950 dark:text-white hover:border-neutral-950 dark:hover:border-white transition-colors"
                                    >
                                        Book a demo
                                    </Link>
                                </div>
                            </div>

                            <SavingsTicker />
                        </div>
                    </div>
                </section>

                {/* ── Console, immediately below the fold ── */}
                <section className="bg-white dark:bg-[#0c0c0e]">
                    <div className="mx-auto max-w-[1320px] px-6 md:px-10 pb-24 md:pb-32">
                        <ConsoleDashboard />
                        <p className="mt-4 text-xs text-neutral-400 dark:text-neutral-500">
                            Representative console data. Your numbers will vary. That's the point.
                        </p>
                    </div>
                </section>

                {/* ── Policies: beyond guardrails ── */}
                <section className="bg-white dark:bg-[#0c0c0e] border-t border-neutral-200 dark:border-neutral-800">
                    <div className="mx-auto max-w-[1320px] px-6 md:px-10 py-24 md:py-32">
                        <div className="grid grid-cols-12 gap-6 md:gap-10">
                            <div className="col-span-12 md:col-span-5">
                                <p className="editorial-label text-violet-700 dark:text-violet-400 mb-6">01 | Policies</p>
                                <h2 className="text-4xl md:text-5xl font-semibold leading-[1.02] tracking-[-0.03em] text-neutral-950 dark:text-white">
                                    Not guardrails.
                                    <br />
                                    Your rules.
                                </h2>
                                <p className="mt-6 text-base leading-relaxed text-neutral-500 dark:text-neutral-400 max-w-sm">
                                    Set separate input and output policies, per agent or across your
                                    whole fleet, written in plain English. Violations are corrected
                                    before the response leaves, not flagged after the damage is done.
                                </p>
                            </div>
                            <div className="col-span-12 md:col-span-6 md:col-start-7">
                                <div className="border border-neutral-200 dark:border-neutral-800">
                                    {POLICIES.map((p, i) => (
                                        <div
                                            key={p.rule}
                                            className={`flex items-start gap-4 p-5 ${i > 0 ? "border-t border-neutral-200 dark:border-neutral-800" : ""}`}
                                        >
                                            <span className={`editorial-label shrink-0 w-16 ${p.dir === "Input" ? "text-red-600 dark:text-red-400" : "text-violet-700 dark:text-violet-400"}`}>
                                                {p.dir}
                                            </span>
                                            <div className="flex-1">
                                                <p className="text-sm text-neutral-950 dark:text-white leading-relaxed">"{p.rule}"</p>
                                                <p className="text-xs font-mono text-neutral-400 dark:text-neutral-500 mt-1">{p.scope}</p>
                                            </div>
                                        </div>
                                    ))}
                                </div>
                            </div>
                        </div>
                    </div>
                </section>

                {/* ── Per-response tuning ── */}
                <section className="bg-white dark:bg-[#0c0c0e] border-t border-neutral-200 dark:border-neutral-800">
                    <div className="mx-auto max-w-[1320px] px-6 md:px-10 py-24 md:py-32">
                        <div className="grid grid-cols-12 gap-6 md:gap-10">
                            <div className="col-span-12 md:col-span-5 md:order-2 md:col-start-8">
                                <p className="editorial-label text-violet-700 dark:text-violet-400 mb-6">02 | Tuning</p>
                                <h2 className="text-4xl md:text-5xl font-semibold leading-[1.02] tracking-[-0.03em] text-neutral-950 dark:text-white">
                                    You set the dial. Per response.
                                </h2>
                                <p className="mt-6 text-base leading-relaxed text-neutral-500 dark:text-neutral-400 max-w-sm">
                                    Deterministic or creative. Cost saving or peak performance.
                                    Every agent gets its own tradeoff, and Guidera picks the model
                                    and parameters that honour it, on every single request.
                                </p>
                            </div>
                            <div className="col-span-12 md:col-span-6 md:order-1">
                                <div className="border border-neutral-200 dark:border-neutral-800">
                                    {TUNING.map((t, i) => (
                                        <div key={t.agent} className={`p-6 ${i > 0 ? "border-t border-neutral-200 dark:border-neutral-800" : ""}`}>
                                            <p className="text-sm font-mono text-neutral-950 dark:text-white mb-5">{t.agent}</p>
                                            <div className="space-y-5">
                                                <Slider left="Creative" right="Deterministic" value={t.axis1} accent="bg-violet-700 dark:bg-violet-500" animated={i === 0} />
                                                <Slider left="Performance" right="Cost saving" value={t.axis2} accent="bg-red-600 dark:bg-red-500" animated={i === 0} animateDelay={0.6} />
                                            </div>
                                        </div>
                                    ))}
                                </div>
                            </div>
                        </div>
                    </div>
                </section>

                {/* ── Playground (bento) ── */}
                <GuideraBentoSection />

                {/* ── Closing CTA ── */}
                <section className="bg-white dark:bg-[#0c0c0e] border-t border-neutral-200 dark:border-neutral-800">
                    <div className="mx-auto max-w-[1320px] px-6 md:px-10 py-24 md:py-32">
                        <p className="editorial-label text-neutral-400 dark:text-neutral-500 mb-8">
                            60%+ average cost reduction · 40+ models · Full audit trail
                        </p>
                        <h2 className="text-4xl md:text-6xl font-semibold leading-[1.0] tracking-[-0.03em] text-neutral-950 dark:text-white max-w-3xl">
                            See what your agents actually cost.
                        </h2>
                        <div className="mt-10 flex items-center gap-4 flex-wrap">
                            <Link
                                to="/contact"
                                className="inline-flex items-center gap-3 px-7 py-4 text-sm font-semibold bg-neutral-950 text-white dark:bg-white dark:text-neutral-950 hover:bg-violet-700 hover:text-white dark:hover:bg-violet-400 dark:hover:text-neutral-950 transition-colors"
                            >
                                Start Free Trial <span>→</span>
                            </Link>
                                                    </div>
                    </div>
                </section>
            </main>

            <EditorialFooter accent="crimson" />
        </div>
    );
};

export default Guidera;
