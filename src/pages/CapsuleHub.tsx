import { useState } from "react";
import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import { motion, AnimatePresence } from "framer-motion";
import { Link } from "react-router-dom";
import { ArrowRight, Check, Terminal, Megaphone, ShoppingCart, Search, Cpu } from "lucide-react";
import { ScrollReveal, ScrollRevealItem } from "@/components/ui/scroll-reveal";
import CapsuleHubBentoSection from "@/components/sections/CapsuleHubBentoSection";

// ─── Stacked screenshots ──────────────────────────────────────────────────────

const IMAGES = [
  { src: "/CapsuleHub1.png", label: "Capsule Library: Your full context history — searchable, versioned, and team-ready." },
  { src: "/CapsuleHub2.png", label: "Capture in Action: One click extracts context from any AI chat into a portable Capsule." },
  { src: "/CapsuleHub3.png", label: "Team Workspace: Shared capsules organized by department, with transparent ownership." },
];
const OFFSETS = [
  { x: -55, y: -45, rotate: -7, scale: 0.94 },
  { x: 0,   y: 0,   rotate: 0,  scale: 1    },
  { x: 55,  y: 45,  rotate: 7,  scale: 0.94 },
];

const StackedScreenshots = () => {
  const [hovered, setHovered] = useState<number | null>(null);
  return (
    <div className="relative h-80 flex items-center justify-center">
      {IMAGES.map((img, i) => {
        const base = OFFSETS[i];
        const isHov = hovered === i;
        return (
          <motion.div
            key={img.src}
            style={{ zIndex: isHov ? 10 : i + 1 }}
            animate={{ x: isHov ? 0 : base.x, y: isHov ? -8 : base.y, rotate: isHov ? 0 : base.rotate, scale: isHov ? 1.04 : base.scale }}
            transition={{ type: "spring", stiffness: 300, damping: 25 }}
            onHoverStart={() => setHovered(i)}
            onHoverEnd={() => setHovered(null)}
            className={`absolute w-56 rounded-xl overflow-hidden shadow-2xl border cursor-pointer ${isHov ? "ring-4 ring-violet-500/30 ring-offset-4 ring-offset-slate-900 border-violet-400/30" : "border-white/10"}`}
          >
            <img src={img.src} alt={img.label} className="w-full h-full object-cover" />
          </motion.div>
        );
      })}
      {hovered !== null && (
        <motion.p
          key={hovered}
          initial={{ opacity: 0, y: 4 }} animate={{ opacity: 1, y: 0 }}
          className="absolute -bottom-10 left-0 right-0 text-center text-[11px] text-white/30 italic px-4"
        >
          {IMAGES[hovered].label}
        </motion.p>
      )}
    </div>
  );
};

// ─── Use cases ────────────────────────────────────────────────────────────────

const capsuleHubCases = [
  { company: "Engineering", icon: Terminal, incident: "The Spec That Got Lost Between Tools", what: "A senior engineer spent three days re-explaining a complex auth migration spec across ChatGPT, Figma, and their IDE. Every new session started cold. By the time the code landed in review, it had drifted from the original requirements because each hop introduced a subtle misremembering.", how: ["Capture the requirements session from ChatGPT as a Capsule with one click", "Drop into Figma conversations to align design — same context, no re-typing", "Connect via MCP so Cursor codes against the exact spec from the first line", "Version the Capsule as decisions evolve — the IDE always sees the latest state"] },
  { company: "Marketing", icon: Megaphone, incident: "When Everyone Had a Different Version of the Story", what: "A growth-stage startup's marketing, sales, and product teams were all pitching the product differently. Positioning lived in Notion, Slack threads, and people's memories. Launch messaging was inconsistent, and no one could agree on what the product actually did.", how: ["Create one team Capsule with approved positioning, key claims, and competitor talking points", "All team members inject the same vetted context into their AI writing tools", "Update once when messaging changes — one place, one version of truth", "Tag stable releases so 'the launch brief' is always findable and never overwritten"] },
  { company: "AI / Automation", icon: Cpu, incident: "Three Agents, Zero Shared Memory", what: "A team built a multi-agent pipeline: planner → coder → reviewer. Each agent started from a static system prompt with no memory of prior decisions. The reviewer kept re-flagging issues the planner had already resolved. Every run re-litigated the same ground.", how: ["Planner produces a Capsule containing decisions, constraints, and rationale from each run", "Coding agent consumes it via MCP — receives the exact spec the planner intended", "Reviewer agent receives the updated Capsule — context includes what changed and why", "The Capsule ID and version act as a deterministic shared reference across all agents"] },
  { company: "Sales", icon: ShoppingCart, incident: "Every RFP Started From Scratch", what: "Solutions engineers spent 40% of their RFP time re-researching the same product capabilities, pricing rationale, and security answers. Different SEs gave different answers to identical questions. Proposals were inconsistent and sometimes contradicted each other.", how: ["Capture discovery call and RFP-answer sessions as versioned Capsules", "All SEs inject the same fact base into their proposal-writing AI tools", "Update once when pricing or capabilities change — everyone pulls the latest automatically", "Role-based team folders ensure only verified answers reach proposals"] },
  { company: "Research", icon: Search, incident: "Hours of Research, Lost at Tab Close", what: "A product researcher ran a 2-hour deep-dive across Gemini and Perplexity — competitive landscape, user pain points, market sizing. When they opened a new Claude session to write the strategy brief, they had to reconstruct everything from memory and fragmented notes.", how: ["Capture the Gemini research session as a Capsule the moment the session is complete", "Drop it into Claude to write the brief — full context available instantly, no reconstruction", "Attach PDF source documents to the Capsule so no evidence is lost", "Share to the Product team workspace so PMs build on the same foundation, not their own version"] },
];

const UseCasesTab = () => {
  const [active, setActive] = useState(0);
  const current = capsuleHubCases[active];
  const Icon = current.icon;
  return (
    <div className="flex flex-col lg:flex-row gap-6 max-w-5xl mx-auto">
      <div className="flex flex-row lg:flex-col gap-1 overflow-x-auto lg:overflow-visible lg:w-52 shrink-0 pb-2 lg:pb-0">
        {capsuleHubCases.map((c, i) => {
          const TabIcon = c.icon;
          return (
            <button key={c.company} onClick={() => setActive(i)}
              className={`flex items-center gap-2.5 px-3 py-2.5 rounded-lg text-left text-sm font-medium whitespace-nowrap transition-all duration-200 border ${active === i ? "bg-violet-50 dark:bg-violet-500/10 border-violet-200 dark:border-violet-500/20 text-violet-600 dark:text-violet-300" : "border-transparent text-slate-500 dark:text-white/35 hover:text-slate-800 dark:hover:text-white/70 hover:bg-slate-100 dark:hover:bg-white/[0.04]"}`}
            >
              <TabIcon className={`w-3.5 h-3.5 shrink-0 ${active === i ? "text-violet-400" : "text-slate-400 dark:text-white/25"}`} />
              {c.company}
            </button>
          );
        })}
      </div>
      <div className="flex-1 border border-slate-200 dark:border-white/[0.07] rounded-2xl bg-white/70 dark:bg-[hsl(224,24%,6%)] overflow-hidden min-h-[340px]">
        <AnimatePresence mode="wait">
          <motion.div key={active} initial={{ opacity: 0, y: 10 }} animate={{ opacity: 1, y: 0 }} exit={{ opacity: 0, y: -8 }} transition={{ duration: 0.25 }} className="p-8 h-full">
            <div className="flex items-start gap-3 mb-5">
              <div className="w-9 h-9 rounded-lg bg-violet-500/10 border border-violet-500/15 flex items-center justify-center shrink-0">
                <Icon className="w-4 h-4 text-violet-400" />
              </div>
              <div>
                <p className="text-xs text-slate-500 dark:text-white/30 uppercase tracking-widest mb-1">{current.company}</p>
                <h3 className="text-lg font-bold text-slate-900 dark:text-white leading-snug">{current.incident}</h3>
              </div>
            </div>
            <p className="text-sm text-slate-600 dark:text-white/45 leading-relaxed mb-6 border-l-2 border-slate-200 dark:border-white/[0.06] pl-4">{current.what}</p>
            <div className="rounded-xl bg-violet-500/[0.06] border border-violet-500/[0.12] p-5">
              <p className="text-xs font-semibold text-violet-400 uppercase tracking-widest mb-3">How Capsule Hub fixes this</p>
              <ul className="space-y-2">
                {current.how.map((point, i) => (
                  <li key={i} className="flex items-start gap-2.5 text-sm text-slate-600 dark:text-white/55">
                    <span className="w-1.5 h-1.5 rounded-full bg-violet-500 dark:bg-violet-400 mt-1.5 shrink-0" />
                    {point}
                  </li>
                ))}
              </ul>
            </div>
          </motion.div>
        </AnimatePresence>
      </div>
    </div>
  );
};

// ─── Pricing ──────────────────────────────────────────────────────────────────

const tiers = [
  { name: "Basic", price: "$0", sub: "Essential tools for individual creators.", cta: { label: "Get started free →", href: "https://capsulehub.tilantra.com", style: "border border-slate-200 dark:border-white/10 text-slate-600 dark:text-white/50 hover:bg-slate-50 dark:hover:bg-white/[0.04]" }, items: [{ text: "5 Capsules", check: true }, { text: "Team workspaces", check: false }, { text: "Version control", check: false }, { text: "MCP Support", check: true }], highlight: false },
  { name: "Pro", price: "$5", sub: "Perfect for professionals part of a team.", cta: { label: "Start Pro →", href: "https://capsulehub.tilantra.com", style: "bg-gradient-to-r from-cyan-500 to-violet-600 text-white hover:opacity-90" }, items: [{ text: "15 Capsules", check: true }, { text: "Join team workspaces", check: true }, { text: "Version control (Basic & Pro)", check: true }, { text: "MCP + Attachments", check: true }], highlight: true },
  { name: "Elite", price: "$15", sub: "Advanced control for team leaders.", cta: { label: "Start Elite →", href: "https://capsulehub.tilantra.com", style: "border border-emerald-500/30 text-emerald-600 dark:text-emerald-400 hover:bg-emerald-50 dark:hover:bg-emerald-500/[0.06]" }, items: [{ text: "Unlimited Capsules", check: true }, { text: "Create & join workspaces", check: true }, { text: "Version control (All)", check: true }, { text: "MCP + Attachments + Dynamic Context", check: true }], highlight: false },
  { name: "Enterprise", price: "Custom", sub: "Dedicated infrastructure for scale.", cta: { label: "Talk to us →", href: "/contact", style: "border border-slate-200 dark:border-white/10 text-slate-600 dark:text-white/50 hover:bg-slate-50 dark:hover:bg-white/[0.04]", internal: true }, items: [{ text: "Everything in Elite", check: true }, { text: "Dedicated enterprise nodes", check: true }, { text: "Advanced access controls", check: true }, { text: "Priority SLA & Support", check: true }], highlight: false, dark: true },
];

// ─── Main Page ────────────────────────────────────────────────────────────────

const CapsuleHub = () => (
  <div className="min-h-screen bg-transparent">
    <Header />
    <main>

      {/* ── Hero Split ── */}
      <section className="bg-slate-50 dark:bg-[hsl(224,28%,3%)] pt-24 pb-48 relative overflow-hidden">
        <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-[600px] h-[200px] bg-gradient-to-t from-violet-600/15 via-cyan-600/5 to-transparent rounded-t-full blur-3xl pointer-events-none" />
        <div className="container mx-auto px-6">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            {/* Left */}
            <div className="flex flex-col items-start">
              <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full border border-violet-200 dark:border-violet-500/20 bg-violet-50/50 dark:bg-violet-500/5 mb-6">
                <span className="w-1.5 h-1.5 rounded-full bg-violet-500 animate-pulse" />
                <span className="text-xs font-semibold text-violet-600 dark:text-violet-400 uppercase tracking-widest">Context Layer</span>
              </div>
              <h1 className="text-4xl md:text-6xl font-bold leading-tight mb-6" style={{ letterSpacing: "-0.03em" }}>
                <span className="bg-gradient-to-r from-cyan-400 to-violet-500 bg-clip-text text-transparent">Capsule Hub:</span>
                <br />
                <span className="text-slate-900 dark:text-white">Never Start From Zero Again</span>
              </h1>
              <p className="text-lg text-slate-600 dark:text-white/50 mb-8 leading-relaxed">
                Turn any AI chat into a portable Capsule. Inject it anywhere with drag and drop. Pipe it to your IDE via MCP. Share it with your team. Context loss is over.
              </p>
              <div className="flex gap-3 flex-wrap mb-8">
                <a href="https://chromewebstore.google.com/detail/capsule-hub-by-tilantra/" target="_blank" rel="noreferrer"
                  className="inline-flex items-center gap-2 px-6 py-3 rounded-full text-sm font-semibold text-white bg-gradient-to-r from-cyan-500 to-violet-600 hover:opacity-90 transition-all shadow-lg shadow-violet-500/20">
                  Get the Extension — Free <ArrowRight className="w-4 h-4" />
                </a>
                <Link to="/docs/capsule-hub-mcp"
                  className="inline-flex items-center gap-2 px-6 py-3 rounded-full text-sm font-medium text-slate-600 dark:text-white/50 border border-slate-200 dark:border-white/10 hover:bg-slate-100 dark:hover:bg-white/[0.05] transition-all">
                  MCP Docs
                </Link>
              </div>
              <div className="flex flex-wrap gap-3 text-xs text-slate-400 dark:text-white/25">
                {["Chrome Extension", "ChatGPT", "Claude", "Gemini", "MCP Ready", "Free to start"].map(t => (
                  <span key={t} className="flex items-center gap-1.5"><span className="w-1 h-1 rounded-full bg-slate-300 dark:bg-white/20" />{t}</span>
                ))}
              </div>
            </div>
            {/* Right */}
            <div className="flex items-center justify-center">
              <StackedScreenshots />
            </div>
          </div>
        </div>
      </section>

      {/* ── Narrative ── */}
      <section className="py-20 bg-transparent relative z-10">
        <div className="container mx-auto px-6 max-w-4xl text-center">
          <h2 className="text-3xl font-bold text-slate-900 dark:text-white mb-6">The Bridge for Your AI Workflows</h2>
          <p className="text-lg text-slate-600 dark:text-slate-300 leading-relaxed mb-8 text-left">
            Every AI chat starts cold. You open ChatGPT for requirements, Claude for writing, Cursor for coding — and each session begins with the same exhausting preamble: here's the project, here's the context, here's what we decided last time. Capsule Hub ends that loop. It turns the best output from any AI conversation into a portable Capsule — a structured bundle of goals, decisions, constraints, and attachments that travels with you between tools.
          </p>
          <p className="text-lg text-slate-600 dark:text-slate-300 leading-relaxed text-left">
            Capture with one click in your browser. Inject with drag-and-drop into any supported AI. Pipe directly into your IDE via MCP so your coding agent starts exactly where your planning session ended. Version it as the project evolves. Share it to a team workspace so everyone pulls from the same vetted context — not from memory. Capsule Hub is the context supply chain your AI stack was missing.
          </p>
        </div>
      </section>

      {/* ── Bento ── */}
      <section className="py-20 bg-transparent">
        <div className="container mx-auto px-6">
          <CapsuleHubBentoSection showHeading={true} />
        </div>
      </section>

      {/* ── Use Cases ── */}
      <section className="py-16 bg-transparent">
        <div className="container mx-auto px-6">
          <ScrollReveal>
            <ScrollRevealItem className="text-center mb-14">
              <h2 className="text-3xl md:text-5xl font-bold" style={{ letterSpacing: "-0.03em" }}>
                <span className="text-slate-900 dark:text-white">Why </span>
                <span className="bg-gradient-to-r from-cyan-400 to-violet-500 bg-clip-text text-transparent">Capsule Hub</span>
              </h2>
              <p className="mt-3 text-slate-600 dark:text-white/35 text-base max-w-xl mx-auto">
                Real workflows where teams lose hours every week — and how Capsule Hub eliminates the friction.
              </p>
            </ScrollRevealItem>
            <UseCasesTab />
          </ScrollReveal>
        </div>
      </section>

      {/* ── Pricing ── */}
      <section className="py-20 bg-transparent">
        <div className="container mx-auto px-6">
          <ScrollReveal>
            <ScrollRevealItem className="text-center mb-16">
              <h2 className="text-4xl md:text-5xl font-extrabold text-slate-900 dark:text-white tracking-tight mb-4">Simple, transparent pricing</h2>
              <p className="text-lg text-slate-600 dark:text-white/40 max-w-2xl mx-auto">Choose the perfect tier for you or your team.</p>
            </ScrollRevealItem>
            <div className="grid md:grid-cols-2 xl:grid-cols-4 gap-6 max-w-6xl mx-auto">
              {tiers.map(tier => (
                <ScrollRevealItem key={tier.name}
                  className={`p-6 rounded-3xl flex flex-col relative transition-all duration-300 ${tier.highlight ? "border-2 border-violet-500 bg-white dark:bg-[hsl(224,28%,7%)] shadow-2xl" : tier.dark ? "border border-slate-200 dark:border-white/10 bg-slate-900 shadow-xl" : "border border-slate-200 dark:border-white/[0.07] bg-white/70 dark:bg-white/[0.02] hover:shadow-xl hover:-translate-y-1"}`}
                >
                  {tier.highlight && <div className="absolute -top-3 right-6 px-3 py-0.5 bg-violet-500 text-white text-[10px] font-bold tracking-wider rounded-full uppercase shadow-sm">Popular</div>}
                  <div className="flex justify-between items-start mb-3">
                    <div>
                      <h3 className={`text-lg font-bold mb-1 ${tier.highlight ? "text-violet-600 dark:text-violet-400" : tier.dark ? "text-white" : "text-slate-900 dark:text-white"}`}>{tier.name}</h3>
                      <p className={`text-xs ${tier.dark ? "text-slate-400" : "text-slate-500 dark:text-white/35"}`}>{tier.sub}</p>
                    </div>
                    <div className="text-right">
                      <span className={`text-2xl font-extrabold ${tier.dark ? "text-white" : "text-slate-900 dark:text-white"}`}>{tier.price}</span>
                      {tier.price !== "Custom" && <span className={`text-xs ml-1 ${tier.dark ? "text-slate-400" : "text-slate-500"}`}>/mo</span>}
                    </div>
                  </div>
                  <div className={`w-full h-px mb-4 ${tier.dark ? "bg-slate-700" : "bg-slate-100 dark:bg-white/[0.06]"}`} />
                  <ul className="space-y-3 mb-5 flex-grow">
                    {tier.items.map(item => (
                      <li key={item.text} className={`flex gap-2.5 items-start ${!item.check ? "opacity-40" : ""}`}>
                        {item.check
                          ? <Check className={`w-4 h-4 shrink-0 mt-0.5 ${tier.highlight ? "text-violet-500" : tier.dark ? "text-blue-400" : "text-slate-400"}`} />
                          : <div className="w-4 h-4 shrink-0" />}
                        <span className={`text-sm ${!item.check ? "line-through" : ""} ${tier.dark ? "text-white" : tier.highlight ? "text-slate-700 dark:text-slate-200" : "text-slate-600 dark:text-white/50"}`}>{item.text}</span>
                      </li>
                    ))}
                  </ul>
                  {"internal" in tier.cta && tier.cta.internal ? (
                    <Link to={tier.cta.href} className={`w-full text-center px-4 py-2.5 rounded-full text-sm font-semibold transition-all ${tier.cta.style}`}>{tier.cta.label}</Link>
                  ) : (
                    <a href={tier.cta.href} target="_blank" rel="noreferrer" className={`w-full text-center px-4 py-2.5 rounded-full text-sm font-semibold transition-all ${tier.cta.style}`}>{tier.cta.label}</a>
                  )}
                </ScrollRevealItem>
              ))}
            </div>
            <ScrollRevealItem className="text-center mt-8">
              <p className="text-xs text-slate-400 dark:text-white/25">Works inside ChatGPT · Claude · Gemini · Cursor · Gmail · Antigravity</p>
            </ScrollRevealItem>
          </ScrollReveal>
        </div>
      </section>

      {/* ── Page CTA ── */}
      <section className="py-20 bg-transparent">
        <div className="container mx-auto px-6 text-center max-w-2xl">
          <h2 className="text-3xl font-bold text-slate-900 dark:text-white mb-4">Ready to stop starting from zero?</h2>
          <p className="text-slate-600 dark:text-white/40 mb-8 text-base leading-relaxed">
            Install the extension, capture your first Capsule in 60 seconds, and inject it into any AI tool. It's free.
          </p>
          <a href="https://chromewebstore.google.com/detail/capsule-hub-by-tilantra/" target="_blank" rel="noreferrer"
            className="inline-flex items-center gap-2 px-8 py-4 rounded-full text-base font-semibold text-white bg-gradient-to-r from-cyan-500 to-violet-600 shadow-lg shadow-violet-500/20 hover:opacity-90 hover:scale-[1.02] transition-all">
            Get Capsule Hub — It's Free
            <ArrowRight className="w-5 h-5" />
          </a>
          <p className="text-xs text-slate-400 dark:text-white/20 mt-4">Chrome extension · No credit card required</p>
        </div>
      </section>

    </main>
    <Footer />
  </div>
);

export default CapsuleHub;
