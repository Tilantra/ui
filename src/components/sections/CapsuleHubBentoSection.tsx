import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { GitBranch, Terminal, Paperclip, RefreshCw, Users } from "lucide-react";
import { CodeBlock } from "@/components/ui/code-block";

// ─── Types ───────────────────────────────────────────────────────────────────

interface Props {
    showHeading?: boolean;
    hideMCP?: boolean;
}

// ─── Card B: Version Control ──────────────────────────────────────────────────

const VersionCard = ({ colSpanClass = "md:col-span-2" }: { colSpanClass?: string }) => (
    <div className={`${colSpanClass} rounded-[2rem] backdrop-blur-xl border border-slate-200 shadow-xl shadow-slate-200/40 dark:shadow-none dark:border-violet-500/20 bg-white/80 dark:bg-violet-900/10 p-6 flex flex-col gap-4`}>
        <div className="w-10 h-10 rounded-xl bg-violet-500/10 flex items-center justify-center">
            <GitBranch className="w-5 h-5 text-violet-500" />
        </div>
        <div>
            <h3 className="text-[15px] font-semibold text-slate-900 dark:text-white/80 mb-1 tracking-tight">
                Version history that actually matters
            </h3>
            <p className="text-sm text-slate-500 dark:text-white/35 leading-snug">
                Branch as a new capsule or stack versions as ideas evolve. Roll back to stable checkpoints. Tag the 'golden prompt' your team agreed on.
            </p>
        </div>
        <div className="flex flex-col gap-1 mt-auto">
            {[
                { tag: "v3 · current", label: "Added MCP config", active: true },
                { tag: "v2",           label: "Revised scope",    active: false },
                { tag: "v1",           label: "Initial capture",  active: false },
            ].map((v, i) => (
                <motion.div
                    key={i}
                    initial={{ opacity: 0, x: -8 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: i * 0.1 }}
                    className={`flex items-center gap-2.5 text-xs py-1.5 ${
                        v.active ? "text-violet-600 dark:text-violet-400" : "text-slate-400 dark:text-white/25"
                    }`}
                >
                    <div className={`w-6 h-6 rounded-md flex items-center justify-center text-[9px] font-bold border shrink-0 ${
                        v.active
                            ? "border-violet-400 bg-violet-50 dark:bg-violet-500/10 text-violet-600 dark:text-violet-400"
                            : "border-slate-300 dark:border-white/10"
                    }`}>
                        {v.active ? "✓" : "○"}
                    </div>
                    <div>
                        <div className="font-semibold leading-none">{v.tag}</div>
                        <div className="text-[10px] opacity-60 mt-0.5">{v.label}</div>
                    </div>
                </motion.div>
            ))}
        </div>
    </div>
);

// ─── Card C: Team Workspaces ──────────────────────────────────────────────────

const DEPT_COLOURS: Record<string, string> = {
    Engineering: "border-blue-200 dark:border-blue-500/20 bg-blue-50/50 dark:bg-blue-900/10 text-blue-700 dark:text-blue-400",
    Product:     "border-emerald-200 dark:border-emerald-500/20 bg-emerald-50/50 dark:bg-emerald-900/10 text-emerald-700 dark:text-emerald-400",
    Marketing:   "border-amber-200 dark:border-amber-500/20 bg-amber-50/50 dark:bg-amber-900/10 text-amber-700 dark:text-amber-400",
    Sales:       "border-rose-200 dark:border-rose-500/20 bg-rose-50/50 dark:bg-rose-900/10 text-rose-700 dark:text-rose-400",
};

const TeamsCard = ({ colSpanClass = "md:col-span-2" }: { colSpanClass?: string }) => (
    <div className={`${colSpanClass} rounded-[2rem] backdrop-blur-xl border border-slate-200 shadow-xl shadow-slate-200/40 dark:shadow-none dark:border-cyan-500/20 bg-white/80 dark:bg-cyan-900/10 p-6 flex flex-col gap-4`}>
        <div className="w-10 h-10 rounded-xl bg-cyan-500/10 flex items-center justify-center">
            <Users className="w-5 h-5 text-cyan-500" />
        </div>
        <div>
            <h3 className="text-[15px] font-semibold text-slate-900 dark:text-white/80 mb-1 tracking-tight">
                One team. One source of truth.
            </h3>
            <p className="text-sm text-slate-500 dark:text-white/35 leading-snug">
                Organize capsules by department. Everyone injects the same vetted context — not whatever they remember from last week's standup.
            </p>
        </div>
        <div className="mt-auto">
            <div className="flex flex-wrap gap-1.5 mb-3">
                {["Engineering", "Product", "Marketing", "Sales"].map((dept, i) => (
                    <motion.span
                        key={dept}
                        initial={{ opacity: 0, scale: 0.9 }}
                        whileInView={{ opacity: 1, scale: 1 }}
                        viewport={{ once: true }}
                        transition={{ delay: i * 0.07 }}
                        className={`text-xs px-2.5 py-1 rounded-lg border font-medium ${DEPT_COLOURS[dept]}`}
                    >
                        {dept}
                    </motion.span>
                ))}
            </div>
            <div className="p-3 rounded-xl border border-slate-200 dark:border-white/5 bg-white dark:bg-white/[0.02] text-xs shadow-sm dark:shadow-none">
                <div className="flex justify-between items-center">
                    <span className="font-semibold text-slate-700 dark:text-white/60">Auth Service Rewrite</span>
                    <span className="text-slate-400 dark:text-white/20">@alex</span>
                </div>
                <div className="flex gap-1.5 mt-1.5">
                    <span className="text-[10px] px-1.5 py-0.5 rounded bg-blue-100 dark:bg-blue-500/10 text-blue-600 dark:text-blue-400">Engineering</span>
                    <span className="text-[10px] px-1.5 py-0.5 rounded bg-slate-100 dark:bg-white/5 text-slate-400">v4</span>
                </div>
            </div>
        </div>
    </div>
);

// ─── Card D: MCP Integration ──────────────────────────────────────────────────

const MCP_CODE = `"capsule-service": {
  "url": "https://backend.tilantra.com/mcp",
  "headers": {
    "X-API-Key": "YOUR_API_KEY"
  }
}`;

const MCPCard = ({ colSpanClass = "md:col-span-3" }: { colSpanClass?: string }) => (
    <div className={`${colSpanClass} rounded-[2rem] backdrop-blur-xl border border-white/[0.07] bg-[hsl(224,28%,5%)] p-6 flex flex-col gap-4`}>
        <div className="w-10 h-10 rounded-xl bg-white/[0.07] flex items-center justify-center">
            <Terminal className="w-5 h-5 text-white/60" />
        </div>
        <div>
            <h3 className="text-[15px] font-semibold text-white/80 mb-1 tracking-tight">
                Your IDE already speaks Capsule Hub
            </h3>
            <p className="text-sm text-white/40 leading-snug">
                Connect via MCP and your agent codes against the exact spec — no re-explaining, no context loss.
            </p>
        </div>
        <div className="mt-auto">
            <CodeBlock code={MCP_CODE} language="json" />
            <div className="flex items-center gap-2 mt-4">
                <span className="text-xs text-white/30">Works in:</span>
                {["▸ Cursor", "⚡ Antigravity"].map((ide) => (
                    <span key={ide} className="text-xs px-2.5 py-1 rounded-lg border border-white/10 text-white/50 font-mono">
                        {ide}
                    </span>
                ))}
            </div>
        </div>
    </div>
);

// ─── Card E: Attachment Types ─────────────────────────────────────────────────

const FILE_TYPES = [
    { ext: ".pdf",    bg: "bg-red-50 dark:bg-red-900/20 border-red-200 dark:border-red-500/20 text-red-600 dark:text-red-400" },
    { ext: ".md",     bg: "bg-slate-50 dark:bg-slate-800/50 border-slate-200 dark:border-white/10 text-slate-600 dark:text-slate-300" },
    { ext: ".py",     bg: "bg-blue-50 dark:bg-blue-900/20 border-blue-200 dark:border-blue-500/20 text-blue-600 dark:text-blue-400" },
    { ext: ".ts",     bg: "bg-sky-50 dark:bg-sky-900/20 border-sky-200 dark:border-sky-500/20 text-sky-600 dark:text-sky-400" },
    { ext: ".png",    bg: "bg-emerald-50 dark:bg-emerald-900/20 border-emerald-200 dark:border-emerald-500/20 text-emerald-600 dark:text-emerald-400" },
    { ext: ".json",   bg: "bg-amber-50 dark:bg-amber-900/20 border-amber-200 dark:border-amber-500/20 text-amber-600 dark:text-amber-400" },
    { ext: ".csv",    bg: "bg-teal-50 dark:bg-teal-900/20 border-teal-200 dark:border-teal-500/20 text-teal-600 dark:text-teal-400" },
    { ext: ".txt",    bg: "bg-slate-50 dark:bg-slate-800/50 border-slate-200 dark:border-white/10 text-slate-500 dark:text-slate-400" },
    { ext: "+12 more",bg: "bg-violet-50 dark:bg-violet-900/20 border-violet-200 dark:border-violet-500/20 text-violet-600 dark:text-violet-400" },
];

const AttachmentsCard = ({ colSpanClass = "md:col-span-2" }: { colSpanClass?: string }) => (
    <div className={`${colSpanClass} rounded-[2rem] backdrop-blur-xl border border-slate-200 shadow-xl shadow-slate-200/40 dark:shadow-none dark:border-emerald-500/20 bg-white/80 dark:bg-emerald-900/10 p-6 flex flex-col gap-4`}>
        <div className="w-10 h-10 rounded-xl bg-emerald-500/10 flex items-center justify-center">
            <Paperclip className="w-5 h-5 text-emerald-500" />
        </div>
        <div>
            <h3 className="text-[15px] font-semibold text-slate-900 dark:text-white/80 mb-1 tracking-tight">
                Your Capsule is never just text
            </h3>
            <p className="text-sm text-slate-500 dark:text-white/35 leading-snug">
                Attach PDFs, code, images, and more alongside the chat. The next model sees the full picture.
            </p>
        </div>
        <div className="flex-1 mt-2 rounded-2xl border border-slate-200 dark:border-white/[0.04] bg-slate-50/80 dark:bg-black/20 p-5 flex flex-wrap content-start gap-2.5 relative overflow-hidden">
            {FILE_TYPES.map((ft, i) => (
                <motion.span
                    key={ft.ext}
                    initial={{ opacity: 0, scale: 0.85 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    viewport={{ once: true }}
                    transition={{ delay: i * 0.04 }}
                    className={`text-xs font-mono font-semibold px-3 py-1.5 rounded-lg border shadow-sm ${ft.bg}`}
                >
                    {ft.ext}
                </motion.span>
            ))}
        </div>
    </div>
);

// ─── Main Component ───────────────────────────────────────────────────────────

const CapsuleHubBentoSection = ({ showHeading = true, hideMCP = false }: Props) => {
    return (
        <div className="w-full">
            {showHeading && (
                <div className="text-center mb-10">
                    <h2 className="text-3xl md:text-5xl font-bold text-slate-900 dark:text-white mb-4" style={{ letterSpacing: "-0.03em" }}>
                        Powerful Context Management,{" "}
                        <span className="bg-gradient-to-r from-cyan-400 to-violet-500 bg-clip-text text-transparent">
                            One Extension
                        </span>
                    </h2>
                    <p className="text-slate-600 dark:text-slate-300 text-lg max-w-2xl mx-auto">
                        Everything you need to capture, organise, and reuse your best AI work — across every tool you use.
                    </p>
                </div>
            )}

            <div className="grid grid-cols-1 md:grid-cols-6 gap-4 max-w-6xl mx-auto">

                <VersionCard colSpanClass={hideMCP ? "md:col-span-2" : "md:col-span-3"} />
                <TeamsCard colSpanClass={hideMCP ? "md:col-span-2" : "md:col-span-3"} />
                
                {!hideMCP && <MCPCard colSpanClass="md:col-span-3" />}
                <AttachmentsCard colSpanClass={hideMCP ? "md:col-span-2" : "md:col-span-3"} />
            </div>
        </div>
    );
};

export default CapsuleHubBentoSection;
