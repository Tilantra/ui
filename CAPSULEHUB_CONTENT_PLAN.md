# Tilantra — Full Site Content & Implementation Plan
### Agent-ready spec: exact copy, exact code patterns, exact animations

---

## Guiding Principle

The hero is about **Tilantra as a company**. Products (Guidera and Capsule Hub) are introduced after the hero. Every section below the hero can be product-specific. The hero cannot.

The visual centrepiece of the new hero is a **Live Operations Feed** — a continuously scrolling log of AI events flowing through the Tilantra platform. It makes the product feel real, in-production, and at scale without screenshots or stock images. No other enterprise AI company does this.

---

## File Change Index

| File | Action | Priority |
|---|---|---|
| `src/components/sections/HeroSection.tsx` | Full rewrite | P0 |
| `src/components/sections/SolutionsSection.tsx` | Replace cards with tabbed showcase | P0 |
| `src/components/sections/CapsuleHubSpotlightSection.tsx` | **CREATE** | P0 |
| `src/pages/Index.tsx` | Import new section | P0 |
| `src/components/sections/UseCasesSection.tsx` | Add product toggle + CapsuleHub cases | P1 |
| `src/components/sections/FeaturesSection.tsx` | Add product toggle + CapsuleHub features | P1 |
| `src/pages/CapsuleHub.tsx` | Full revamp | P1 |
| `src/components/sections/CapsuleHubBentoSection.tsx` | **CREATE** | P1 |
| `src/components/sections/CTASection.tsx` | Update copy + add CapsuleHub CTA | P2 |
| `src/components/layout/Header.tsx` | Products dropdown | P2 |
| `src/pages/docs/GetStartedCapsuleHub.tsx` | Expand content | P3 |

---

## Landing Page Section Order (Index.tsx)

```tsx
// src/pages/Index.tsx — final import list and render order

import HeroSection from "@/components/sections/HeroSection";
import AboutUsSection from "@/components/sections/AboutUsSection";
import SolutionsSection from "@/components/sections/SolutionsSection";
import CapsuleHubSpotlightSection from "@/components/sections/CapsuleHubSpotlightSection"; // NEW
import UseCasesSection from "@/components/sections/UseCasesSection";
import FeaturesSection from "@/components/sections/FeaturesSection";
import CTASection from "@/components/sections/CTASection";

const Index = () => (
  <div className="min-h-screen bg-transparent">
    <Header />
    <main>
      <HeroSection />
      <AboutUsSection />
      <SolutionsSection />
      <CapsuleHubSpotlightSection />
      <UseCasesSection />
      <FeaturesSection />
      <CTASection />
    </main>
    <Footer />
  </div>
);
```

---

## SECTION 1 — HeroSection (Full Rewrite)

**File:** `src/components/sections/HeroSection.tsx`

### Concept

Replace the current centered layout with a **split layout**: text on the left, a live activity feed panel on the right. The GridGlowCanvas stays as the full-bleed background — it already looks great.

The feed panel shows a continuously scrolling log of anonymized AI operations flowing through Tilantra in real time: model routes, cache hits, compliance blocks, capsule injections. Each entry type is colour-coded. This communicates scale, breadth, and production-readiness in 3 seconds of looking.

### Layout

```
<section> full-viewport, flex items-center, overflow-hidden
  <GridGlowCanvas />           ← existing, no changes
  <vignette div />             ← existing, no changes

  <div container grid lg:grid-cols-[1fr_500px] gap-16 items-center pt-32 pb-20>
    <LeftColumn />             ← all text, CTAs, stats
    <RightColumn />            ← live feed panel (hidden on mobile: hidden lg:block)
  </div>
</section>
```

---

### Left Column — full spec

```tsx
<AnimatedGroup className="flex flex-col items-start w-full" preset="slide">

  {/* 1. Eyebrow pill */}
  <div className="inline-flex items-center gap-2.5 px-4 py-1.5 rounded-full border border-white/10 bg-white/[0.04] backdrop-blur-sm mb-8">
    <span className="flex items-center gap-1.5">
      <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-pulse" />
      <span className="text-xs text-white/50 font-medium">Enterprise AI Infrastructure</span>
    </span>
    <span className="text-white/15 text-xs">·</span>
    <span className="text-xs text-white/40">SOC2 Compliant</span>
  </div>

  {/* 2. Headline — 2 lines */}
  <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold leading-[1.06] tracking-tight mb-6 text-white text-left">
    <TextEffect per="word" preset="fade">
      Run AI at enterprise scale.
    </TextEffect>
    <div className="mt-1">
      <span className="bg-gradient-to-r from-cyan-400 via-blue-400 to-violet-500 bg-clip-text text-transparent">
        <TextEffect per="char" preset="fade" delay={0.3}>
          Without the chaos.
        </TextEffect>
      </span>
    </div>
  </h1>

  {/* 3. Sub-headline */}
  <p className="text-lg md:text-xl text-white/45 mb-8 max-w-lg leading-relaxed text-left">
    <TextEffect per="word" preset="blur" delay={0.7}>
      The infrastructure layer between your teams and every AI model. We handle the routing, the compliance, and the context — so you can focus on what AI makes possible.
    </TextEffect>
  </p>

  {/* 4. Capability bullets — 3 lines, staggered in */}
  <div className="flex flex-col gap-3 mb-10">
    {[
      { icon: "↗", color: "text-blue-400", text: "Smart routing across 40+ models — cost optimised, latency aware, always on" },
      { icon: "◈", color: "text-amber-400", text: "Enterprise compliance built in — PII redaction, policy rules, full audit trail" },
      { icon: "⬡", color: "text-violet-400", text: "Context that travels — capture from any AI, inject anywhere, share with your team" },
    ].map((item, i) => (
      <motion.div
        key={i}
        initial={{ opacity: 0, x: -16 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ delay: 1.0 + i * 0.12, duration: 0.5, ease: [0.16, 1, 0.3, 1] }}
        className="flex items-start gap-3"
      >
        <span className={`${item.color} text-sm mt-[3px] shrink-0 font-mono`}>{item.icon}</span>
        <span className="text-sm text-white/40 leading-relaxed">{item.text}</span>
      </motion.div>
    ))}
  </div>

  {/* 5. CTAs — primary + secondary */}
  <div className="flex items-center gap-3 flex-wrap mb-12">
    {/* Primary — keep existing rainbow glow button exactly as-is */}
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

    {/* Secondary — changed from "View Docs" to scroll-to-products */}
    <button
      onClick={() => document.getElementById("solutions")?.scrollIntoView({ behavior: "smooth" })}
      className="inline-flex items-center gap-2 px-6 py-3 text-sm font-medium text-white/50 rounded-full hover:text-white hover:bg-white/[0.06] backdrop-blur-md border border-white/5 transition-all duration-200"
    >
      Explore our products
      <ChevronDown className="w-4 h-4" />
    </button>
  </div>

  {/* 6. Animated stat strip — replace old static trust indicators */}
  <motion.div
    initial={{ opacity: 0 }}
    animate={{ opacity: 1 }}
    transition={{ delay: 1.5, duration: 0.6 }}
    className="flex items-center gap-8"
  >
    {[
      { end: 60, suffix: "%+", label: "Cost reduction", color: "text-emerald-400", decimals: 0 },
      { end: 40, suffix: "+",  label: "AI models",      color: "text-blue-400",    decimals: 0 },
      { end: 99.9, suffix: "%", label: "Uptime SLA",    color: "text-white/60",    decimals: 1 },
      { end: 0, suffix: "",    label: "Compliance leaks", color: "text-white/60",  decimals: 0 },
    ].map((stat, i) => (
      <div key={i} className="flex flex-col items-start">
        <div className={`text-xl font-bold tabular-nums ${stat.color}`} style={{ letterSpacing: "-0.04em" }}>
          <CountUp
            end={stat.end}
            decimals={stat.decimals}
            duration={2.4}
            enableScrollSpy={false}  // fire on load, not scroll — it's the hero
            delay={1.6}
          />
          {stat.suffix}
        </div>
        <div className="text-[11px] text-white/25 mt-0.5">{stat.label}</div>
      </div>
    ))}
  </motion.div>

</AnimatedGroup>
```

**Imports needed in HeroSection.tsx:**
```tsx
import { Link } from "react-router-dom";
import { ArrowRight, ChevronDown } from "lucide-react";
import { motion } from "framer-motion";
import { AnimatedGroup } from "@/components/ui/animated-group";
import { TextEffect } from "@/components/ui/text-effect";
import CountUp from "react-countup";
```

---

### Right Column — Live Operations Feed

The feed panel is a self-contained component defined inside HeroSection.tsx for locality. It is **desktop-only** (`hidden lg:block`).

#### Feed data

```tsx
const FEED_ITEMS = [
  { type: "route",   icon: "↗", label: "Routed",        detail: "gpt-4o → gemini-flash",        meta: "saved $0.14 · 9ms"  },
  { type: "cache",   icon: "⚡", label: "Cache hit",     detail: "Prompt reused",                 meta: "saved $0.22 · 2.4k tokens" },
  { type: "comply",  icon: "◈", label: "Blocked",        detail: "Policy: competitor mention",    meta: "auto-corrected"     },
  { type: "capsule", icon: "⬡", label: "Capsule",        detail: "\"Auth Spec v3\" → Cursor",     meta: "@alex · Engineering" },
  { type: "route",   icon: "↗", label: "Routed",         detail: "claude-3.5 → haiku",            meta: "saved $0.31 · 7ms"  },
  { type: "comply",  icon: "◈", label: "PII redacted",   detail: "3 email addresses removed",     meta: "before delivery"    },
  { type: "capsule", icon: "⬡", label: "Team sync",      detail: "\"Q2 Brief\" → Marketing",      meta: "6 members notified" },
  { type: "route",   icon: "↗", label: "Routed",         detail: "gpt-4-turbo → mistral-7b",      meta: "saved $0.48 · 11ms" },
  { type: "cache",   icon: "⚡", label: "Cache hit",      detail: "Prompt reused",                 meta: "saved $0.19 · 1.8k tokens" },
  { type: "comply",  icon: "◈", label: "Escalated",      detail: "Medical advice query",          meta: "routed to human"    },
  { type: "capsule", icon: "⬡", label: "Capsule",        detail: "\"Competitor Research v2\"",    meta: "→ Claude for synthesis" },
  { type: "route",   icon: "↗", label: "Routed",         detail: "gemini-pro → llama-3.1",        meta: "saved $0.27 · 6ms"  },
  { type: "cache",   icon: "⚡", label: "Cache hit",      detail: "Prompt reused",                 meta: "saved $0.34 · 3.1k tokens" },
  { type: "comply",  icon: "◈", label: "Blocked",        detail: "Policy: profanity filter",      meta: "sanitised response" },
  { type: "capsule", icon: "⬡", label: "MCP inject",    detail: "\"Sprint Spec\" → Cursor IDE",  meta: "@priya · Engineering" },
  { type: "route",   icon: "↗", label: "Routed",         detail: "gpt-4o-mini → deepseek-r1",    meta: "saved $0.09 · 5ms"  },
];

const TYPE_STYLES = {
  route:   { row: "text-blue-400",   badge: "bg-blue-500/10 text-blue-400 border-blue-500/20"   },
  cache:   { row: "text-emerald-400", badge: "bg-emerald-500/10 text-emerald-400 border-emerald-500/20" },
  comply:  { row: "text-amber-400",  badge: "bg-amber-500/10 text-amber-400 border-amber-500/20"   },
  capsule: { row: "text-violet-400", badge: "bg-violet-500/10 text-violet-400 border-violet-500/20" },
};
```

#### Feed component

```tsx
const LiveFeed = () => {
  // Requests-per-minute counter that increments ~847 times/min = ~14/sec
  const [rpm, setRpm] = useState(823);
  useEffect(() => {
    const t = setInterval(() => {
      setRpm(prev => prev + Math.floor(Math.random() * 4 + 1));
    }, 800);
    return () => clearInterval(t);
  }, []);

  // Duplicate the list so the seamless loop works
  const doubled = [...FEED_ITEMS, ...FEED_ITEMS];

  // Each row is ~36px tall. Total height of one full list = 36 * 17 = ~612px
  const singleListHeight = 36 * FEED_ITEMS.length;

  return (
    <div className="relative w-full max-w-[480px] rounded-2xl border border-white/10 bg-[hsl(224,28%,5%)]/90 backdrop-blur-xl overflow-hidden shadow-2xl shadow-black/40">

      {/* Header bar */}
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
        <span className="text-[10px] text-white/20 uppercase tracking-widest w-[68px]">Type</span>
        <span className="text-[10px] text-white/20 uppercase tracking-widest flex-1">Event</span>
        <span className="text-[10px] text-white/20 uppercase tracking-widest text-right">Outcome</span>
      </div>

      {/* Scrolling feed — 320px tall window */}
      <div className="h-[320px] overflow-hidden relative">
        {/* Top fade */}
        <div className="absolute top-0 left-0 right-0 h-10 bg-gradient-to-b from-[hsl(224,28%,5%)] to-transparent z-10 pointer-events-none" />
        {/* Bottom fade */}
        <div className="absolute bottom-0 left-0 right-0 h-10 bg-gradient-to-t from-[hsl(224,28%,5%)] to-transparent z-10 pointer-events-none" />

        <motion.div
          animate={{ y: [0, -singleListHeight] }}
          transition={{ duration: 22, repeat: Infinity, ease: "linear" }}
        >
          {doubled.map((item, i) => {
            const styles = TYPE_STYLES[item.type];
            return (
              <div
                key={i}
                className="flex items-center gap-3 px-4 h-9 border-b border-white/[0.03] hover:bg-white/[0.02] transition-colors"
              >
                {/* Type badge */}
                <div className={`flex items-center gap-1.5 px-2 py-0.5 rounded-md border text-[10px] font-semibold w-[68px] shrink-0 ${styles.badge}`}>
                  <span className="font-mono">{item.icon}</span>
                  <span>{item.label}</span>
                </div>

                {/* Event detail */}
                <span className="text-xs text-white/50 flex-1 truncate font-mono">
                  {item.detail}
                </span>

                {/* Outcome meta */}
                <span className={`text-[11px] font-mono shrink-0 ${styles.row}`}>
                  {item.meta}
                </span>
              </div>
            );
          })}
        </motion.div>
      </div>

      {/* Footer totals bar */}
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
```

#### Floating metric cards

Two small cards float **outside** the feed panel edges, overlapping it slightly. Position them with `absolute` inside a `relative` wrapper that contains the panel.

```tsx
{/* Wrapper */}
<div className="relative hidden lg:flex items-center justify-end">

  <LiveFeed />

  {/* Float card — top left, peeking out */}
  <motion.div
    initial={{ opacity: 0, scale: 0.9, x: 20 }}
    animate={{ opacity: 1, scale: 1, x: 0 }}
    transition={{ delay: 1.8, duration: 0.5, type: "spring" }}
    className="absolute -top-6 -left-10 px-4 py-3 rounded-xl border border-emerald-500/20 bg-emerald-500/[0.08] backdrop-blur-xl"
  >
    <div className="text-2xl font-bold text-emerald-400 tabular-nums" style={{ letterSpacing: "-0.04em" }}>-61%</div>
    <div className="text-[11px] text-white/35 mt-0.5">avg AI cost</div>
    <div className="text-[11px] text-white/20">this month</div>
  </motion.div>

  {/* Float card — bottom right, peeking out */}
  <motion.div
    initial={{ opacity: 0, scale: 0.9, x: -20 }}
    animate={{ opacity: 1, scale: 1, x: 0 }}
    transition={{ delay: 2.0, duration: 0.5, type: "spring" }}
    className="absolute -bottom-6 -right-10 px-4 py-3 rounded-xl border border-blue-500/20 bg-blue-500/[0.08] backdrop-blur-xl"
  >
    <div className="text-2xl font-bold text-blue-400 tabular-nums" style={{ letterSpacing: "-0.04em" }}>0</div>
    <div className="text-[11px] text-white/35 mt-0.5">policy leaks</div>
    <div className="text-[11px] text-white/20">past 90 days</div>
  </motion.div>

</div>
```

#### Bottom section glow — update colour

Replace the existing blue glow bleed at the bottom of HeroSection with a wider, dual-colour version that hints at both products:

```tsx
{/* Dual-colour glow bleed — blue (Guidera) on left, violet (Capsule Hub) on right */}
<div className="absolute bottom-0 left-1/3 -translate-x-1/2 w-[400px] h-[180px] bg-gradient-to-t from-blue-600/12 to-transparent rounded-t-full blur-3xl pointer-events-none" />
<div className="absolute bottom-0 right-1/3 translate-x-1/2 w-[400px] h-[180px] bg-gradient-to-t from-violet-600/12 to-transparent rounded-t-full blur-3xl pointer-events-none" />
```

---

## SECTION 2 — SolutionsSection (Major Revamp)

**File:** `src/components/sections/SolutionsSection.tsx`

### Concept

Replace the two flat product cards with a **full-width tabbed showcase**. A tab row at the top selects the product; the panel below animates in with deep content: headline, description, stats, feature list, visual, and CTAs.

State: `const [active, setActive] = useState<"guidera" | "capsule-hub">("guidera");`

### Product data

```tsx
const PRODUCTS = {
  guidera: {
    label: "Guidera",
    logo: "/GuideraLogo.png",
    tag: "AI Gateway",
    tagColor: "bg-blue-500/10 text-blue-500 border-blue-500/20 dark:text-blue-400",
    headline: "The Intelligent Control Layer for Enterprise AI",
    body: "As teams scale GenAI across products, models, and regions, costs spike, outputs drift, and compliance becomes a liability. Guidera is the gateway that fixes all three — routing every request to the optimal model, enforcing guardrails before they breach, and giving finance full cost visibility without slowing engineering down.",
    stats: [
      { value: "60%+", label: "Lower AI costs" },
      { value: "40+",  label: "Models, one API" },
      { value: "99.9%", label: "Uptime SLA" },
    ],
    features: [
      "ARMS intelligent routing — cost/performance tradeoff per request",
      "No-code compliance rules — write policies in plain English",
      "Real-time PII redaction and content moderation",
      "Secure prompt caching — 70% token savings on repeated prompts",
      "Live cost and latency dashboard with budget alerts",
      "Full audit trail for every model call, SOC2 ready",
    ],
    accentClass: "from-blue-500 to-cyan-400",
    glowClass: "bg-blue-500/10",
    tabActive: "bg-blue-50 dark:bg-blue-500/10 border-blue-200 dark:border-blue-500/20 text-blue-600 dark:text-blue-400",
    primaryCta: { label: "Explore Guidera", href: "/guidera" },
    secondaryCta: { label: "Read the docs", href: "/docs/quickstart" },
    visual: "guidera", // see visual spec below
  },
  "capsule-hub": {
    label: "Capsule Hub",
    logo: "/CapsuleHubLogo.png",
    tag: "Context Layer",
    tagColor: "bg-violet-500/10 text-violet-500 border-violet-500/20 dark:text-violet-400",
    headline: "Never Start From Zero Again",
    body: "Most teams waste hours re-explaining the same project context to every new AI chat. Capsule Hub turns those scattered conversations into portable Capsules — structured bundles of goals, decisions, and attachments that travel between tools. Capture once in ChatGPT, inject into Claude, pipe into Cursor via MCP, share to your team. Context loss is over.",
    stats: [
      { value: "1-click", label: "Context capture" },
      { value: "6",       label: "Supported tools" },
      { value: "Free",    label: "To get started" },
    ],
    features: [
      "Capture from ChatGPT, Claude, Gemini, and Gmail with one click",
      "Drag-and-drop injection into any supported AI chat",
      "Version control — branch ideas, roll back, tag the golden prompt",
      "Team workspaces by department with transparent ownership",
      "MCP server for Cursor and Antigravity IDE integration",
      "Dynamic context — AI filters only the relevant prior messages",
    ],
    accentClass: "from-cyan-400 to-violet-500",
    glowClass: "bg-violet-500/10",
    tabActive: "bg-violet-50 dark:bg-violet-500/10 border-violet-200 dark:border-violet-500/20 text-violet-600 dark:text-violet-400",
    primaryCta: { label: "Explore Capsule Hub", href: "/capsule-hub" },
    secondaryCta: { label: "Get the extension", href: "https://chromewebstore.google.com/detail/capsule-hub-by-tilantra/", external: true },
    visual: "capsule-hub", // see visual spec below
  },
};
```

### Tab row

```tsx
<div className="flex items-center gap-2 mb-10">
  {Object.entries(PRODUCTS).map(([key, p]) => (
    <button
      key={key}
      onClick={() => setActive(key as "guidera" | "capsule-hub")}
      className={`px-5 py-2.5 rounded-full text-sm font-medium border transition-all duration-200 ${
        active === key
          ? p.tabActive
          : "border-transparent text-slate-500 dark:text-white/35 hover:text-slate-900 dark:hover:text-white"
      }`}
    >
      {p.label}
    </button>
  ))}
</div>
```

### Panel layout

```
<AnimatePresence mode="wait">
  <motion.div key={active} initial={{ opacity:0, y:16 }} animate={{ opacity:1, y:0 }}
    exit={{ opacity:0, y:-8 }} transition={{ duration:0.3, ease:[0.16,1,0.3,1] }}>

    <div className="grid lg:grid-cols-[1fr_420px] gap-12 items-center p-8 md:p-12
      rounded-3xl border border-slate-200 dark:border-white/[0.07]
      bg-white/70 dark:bg-white/[0.02] backdrop-blur-xl">

      <LeftText />    ← logo, headline, body, stats, features, CTAs
      <RightVisual /> ← product-specific visual
    </div>

  </motion.div>
</AnimatePresence>
```

### Left text column

```tsx
// Logo + tag
<div className="flex items-center gap-3 mb-5">
  <img src={product.logo} alt={product.label} className="h-8 object-contain" />
  <span className={`text-xs font-medium px-2.5 py-1 rounded-full border ${product.tagColor}`}>
    {product.tag}
  </span>
</div>

// Headline
<h3 className="text-3xl md:text-4xl font-bold text-slate-900 dark:text-white leading-tight mb-4"
  style={{ letterSpacing: "-0.03em" }}>
  {product.headline}
</h3>

// Body
<p className="text-slate-600 dark:text-white/45 text-base leading-relaxed mb-6">
  {product.body}
</p>

// Stats row
<div className="flex gap-8 mb-6">
  {product.stats.map(s => (
    <div key={s.label}>
      <div className={`text-2xl font-bold bg-gradient-to-r ${product.accentClass} bg-clip-text text-transparent`}>
        {s.value}
      </div>
      <div className="text-xs text-slate-500 dark:text-white/30 mt-0.5">{s.label}</div>
    </div>
  ))}
</div>

// Feature list — 2-col grid
<ul className="grid grid-cols-1 gap-2 mb-8">
  {product.features.map(f => (
    <li key={f} className="flex items-start gap-2.5 text-sm text-slate-600 dark:text-white/45">
      <CheckCircle2 className={`w-4 h-4 shrink-0 mt-0.5 ${active === "guidera" ? "text-blue-500" : "text-violet-500"}`} />
      {f}
    </li>
  ))}
</ul>

// CTAs
<div className="flex gap-3 flex-wrap">
  <Link to={product.primaryCta.href}
    className={`px-6 py-3 rounded-full text-sm font-semibold text-white bg-gradient-to-r ${product.accentClass} hover:opacity-90 transition-all shadow-lg`}>
    {product.primaryCta.label} →
  </Link>
  {product.secondaryCta.external ? (
    <a href={product.secondaryCta.href} target="_blank" rel="noreferrer"
      className="px-6 py-3 rounded-full text-sm font-medium text-slate-600 dark:text-white/50 border border-slate-200 dark:border-white/10 hover:bg-slate-100 dark:hover:bg-white/[0.05] transition-all">
      {product.secondaryCta.label}
    </a>
  ) : (
    <Link to={product.secondaryCta.href}
      className="px-6 py-3 rounded-full text-sm font-medium text-slate-600 dark:text-white/50 border border-slate-200 dark:border-white/10 hover:bg-slate-100 dark:hover:bg-white/[0.05] transition-all">
      {product.secondaryCta.label}
    </Link>
  )}
</div>
```

### Right visual — Guidera

Show the 3 stacked GuideraPage screenshots using the same stacked-hover pattern from `Guidera.tsx`. Exact copy of that component, just smaller (`max-w-[380px]`).

### Right visual — Capsule Hub

An animated workflow diagram showing the "capture → capsule → inject" flow. Pure divs, no images.

```tsx
const CapsuleFlowVisual = () => {
  // Three source tools on the left, one capsule in the centre, three targets on right
  const sources = [
    { label: "ChatGPT", emoji: "🤖", color: "border-emerald-300/40 dark:border-emerald-500/20 bg-emerald-50/50 dark:bg-emerald-900/10 text-emerald-700 dark:text-emerald-400" },
    { label: "Gemini",  emoji: "✦",  color: "border-blue-300/40 dark:border-blue-500/20 bg-blue-50/50 dark:bg-blue-900/10 text-blue-700 dark:text-blue-400" },
    { label: "Gmail",   emoji: "📧", color: "border-red-300/40 dark:border-red-500/20 bg-red-50/50 dark:bg-red-900/10 text-red-700 dark:text-red-400" },
  ];
  const targets = [
    { label: "Claude",  emoji: "◈",  color: "border-amber-300/40 dark:border-amber-500/20 bg-amber-50/50 dark:bg-amber-900/10 text-amber-700 dark:text-amber-400" },
    { label: "Cursor",  emoji: "▸",  color: "border-slate-300/40 dark:border-slate-500/20 bg-slate-50/50 dark:bg-slate-800/30 text-slate-700 dark:text-slate-300" },
    { label: "Team",    emoji: "👥", color: "border-violet-300/40 dark:border-violet-500/20 bg-violet-50/50 dark:bg-violet-900/10 text-violet-700 dark:text-violet-400" },
  ];

  return (
    <div className="relative w-full h-56 flex items-center justify-between px-4 gap-4">

      {/* Source column */}
      <div className="flex flex-col gap-3">
        {sources.map((s, i) => (
          <motion.div
            key={s.label}
            initial={{ opacity: 0, x: -16 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: i * 0.1, duration: 0.4 }}
            className={`flex items-center gap-2 px-3 py-2 rounded-xl border text-xs font-semibold ${s.color}`}
          >
            <span>{s.emoji}</span> {s.label}
          </motion.div>
        ))}
      </div>

      {/* SVG connecting lines — left side (sources → capsule) */}
      {/* Use absolute SVG spanning the width, drawn with 3 <path> elements curving to centre */}
      {/* Lines animated with stroke-dashoffset: 200→0 over 1.5s, staggered by 0.2s */}
      {/* Stroke: stroke-width="1" stroke="rgba(139,92,246,0.3)" stroke-dasharray="4 3" */}

      {/* Centre capsule node */}
      <motion.div
        animate={{
          scale: [1, 1.06, 1],
          boxShadow: [
            "0 0 0 0 rgba(139,92,246,0)",
            "0 0 0 16px rgba(139,92,246,0.12)",
            "0 0 0 0 rgba(139,92,246,0)",
          ],
        }}
        transition={{ duration: 2.8, repeat: Infinity, ease: "easeInOut" }}
        className="flex flex-col items-center justify-center w-20 h-20 rounded-2xl bg-gradient-to-br from-cyan-500 to-violet-600 shadow-xl text-white shrink-0"
      >
        <span className="text-xl leading-none">⬡</span>
        <span className="text-[9px] font-bold mt-1 tracking-wider">CAPSULE</span>
      </motion.div>

      {/* Target column */}
      <div className="flex flex-col gap-3">
        {targets.map((t, i) => (
          <motion.div
            key={t.label}
            initial={{ opacity: 0, x: 16 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.5 + i * 0.1, duration: 0.4 }}
            className={`flex items-center gap-2 px-3 py-2 rounded-xl border text-xs font-semibold ${t.color}`}
          >
            <span>{t.emoji}</span> {t.label}
          </motion.div>
        ))}
      </div>

      {/* "Capture once, inject anywhere" label below visual */}
      <div className="absolute -bottom-6 left-0 right-0 text-center text-[11px] text-slate-400 dark:text-white/25 italic">
        Capture once · Inject anywhere
      </div>

    </div>
  );
};
```

**SVG connecting lines spec (add as absolute-positioned SVG inside the relative wrapper):**

```tsx
<svg className="absolute inset-0 w-full h-full pointer-events-none" preserveAspectRatio="none">
  {/* Left lines — source nodes curve to capsule centre */}
  {[0, 1, 2].map(i => (
    <motion.path
      key={`left-${i}`}
      d={`M 72 ${68 + i * 52} Q 160 ${140} 180 140`}  // approximate coords, adjust to match layout
      fill="none"
      stroke="rgba(139,92,246,0.25)"
      strokeWidth="1"
      strokeDasharray="4 3"
      initial={{ pathLength: 0, opacity: 0 }}
      animate={{ pathLength: 1, opacity: 1 }}
      transition={{ delay: i * 0.15, duration: 0.8, ease: "easeOut" }}
    />
  ))}
  {/* Right lines — capsule centre curves to target nodes */}
  {[0, 1, 2].map(i => (
    <motion.path
      key={`right-${i}`}
      d={`M 220 140 Q 260 ${68 + i * 52} 340 ${68 + i * 52}`}
      fill="none"
      stroke="rgba(139,92,246,0.25)"
      strokeWidth="1"
      strokeDasharray="4 3"
      initial={{ pathLength: 0, opacity: 0 }}
      animate={{ pathLength: 1, opacity: 1 }}
      transition={{ delay: 0.5 + i * 0.15, duration: 0.8, ease: "easeOut" }}
    />
  ))}
</svg>
```

---

## SECTION 3 — CapsuleHubSpotlightSection (New File)

**File:** `src/components/sections/CapsuleHubSpotlightSection.tsx`

This is the landing page's dedicated CapsuleHub moment — between SolutionsSection and UseCasesSection. A visitor who scrolls past the solutions tab without clicking into Capsule Hub still gets a full picture here.

### Section wrapper

```tsx
<section className="py-20 bg-transparent relative overflow-hidden">
  {/* Background glows */}
  <div className="absolute top-1/4 right-0 w-[500px] h-[500px] bg-violet-300/8 dark:bg-violet-800/10 rounded-full blur-[120px] -z-10" />
  <div className="absolute bottom-0 left-0 w-[400px] h-[400px] bg-cyan-300/8 dark:bg-cyan-800/10 rounded-full blur-[100px] -z-10" />
  <div className="absolute inset-0 bg-[radial-gradient(ellipse_60%_40%_at_50%_70%,rgba(139,92,246,0.04),transparent)] pointer-events-none" />

  <div className="container mx-auto px-6">
    <ScrollReveal>
      <SectionHeader />
      <ThreeStepStrip />
      <BentoGrid />
      <PlatformsRow />
      <SectionCTA />
    </ScrollReveal>
  </div>
</section>
```

### Section header

```tsx
<ScrollRevealItem className="text-center mb-16">
  {/* Eyebrow */}
  <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full border border-violet-200 dark:border-violet-500/20 bg-violet-50/50 dark:bg-violet-500/5 mb-6">
    <span className="w-1.5 h-1.5 rounded-full bg-violet-500 animate-pulse" />
    <span className="text-xs font-semibold text-violet-600 dark:text-violet-400 uppercase tracking-widest">
      Capsule Hub · Context Layer
    </span>
  </div>

  {/* Headline */}
  <h2 className="text-4xl md:text-6xl font-bold mb-5" style={{ letterSpacing: "-0.03em" }}>
    <span className="text-slate-900 dark:text-white">Stop re-explaining yourself.</span>
    <br />
    <span className="bg-gradient-to-r from-cyan-400 via-violet-400 to-purple-400 bg-clip-text text-transparent">
      Capture once. Inject anywhere.
    </span>
  </h2>

  {/* Subline */}
  <p className="text-lg text-slate-600 dark:text-white/40 max-w-2xl mx-auto leading-relaxed">
    Every AI chat starts cold. You re-explain the same project background, the same constraints,
    the same decisions — over and over. Capsule Hub ends that loop.
  </p>
</ScrollRevealItem>
```

### 3-Step "How It Works" strip

```tsx
const STEPS = [
  {
    num: "01",
    icon: Zap,
    iconColor: "text-cyan-500",
    iconBg: "bg-cyan-500/10",
    title: "Capture",
    body: "Click the Capsule Hub extension inside any AI chat — ChatGPT, Claude, Gemini, or Gmail. One click extracts the goals, decisions, constraints, and attachments into a Capsule.",
    tag: "Browser extension",
    tagColor: "bg-cyan-500/10 text-cyan-600 dark:text-cyan-400 border-cyan-500/20",
  },
  {
    num: "02",
    icon: Package,
    iconColor: "text-violet-500",
    iconBg: "bg-violet-500/10",
    title: "Organise",
    body: "Capsule lands in a searchable library. Tag it, version it, attach files, and push it to your team workspace. Everyone pulls from the same vetted context — not from memory.",
    tag: "Cloud library",
    tagColor: "bg-violet-500/10 text-violet-600 dark:text-violet-400 border-violet-500/20",
  },
  {
    num: "03",
    icon: Rocket,
    iconColor: "text-purple-500",
    iconBg: "bg-purple-500/10",
    title: "Inject",
    body: "Drag the Capsule into any AI chat — context loads instantly. Or connect via MCP so your IDE agent codes against the exact spec without re-explaining a single line.",
    tag: "Drag & drop · MCP",
    tagColor: "bg-purple-500/10 text-purple-600 dark:text-purple-400 border-purple-500/20",
  },
];

// Layout: grid grid-cols-1 md:grid-cols-3 gap-6 max-w-5xl mx-auto mb-20

// Each card:
// rounded-3xl border border-slate-200 dark:border-white/[0.07]
// bg-white/70 dark:bg-white/[0.02] backdrop-blur-xl p-8 relative overflow-hidden

// Step number — absolute top-right watermark:
// text-7xl font-black text-slate-100 dark:text-white/[0.03] select-none

// Animation: initial={{ opacity:0, y:24 }}, delay: index * 0.12

// Connector dashes between cards (desktop only):
// Absolute horizontal dashed line at icon centre height, behind the grid, spanning gap
// border-t border-dashed border-slate-200 dark:border-white/[0.07]
// Positioned with: absolute top-[52px] left-[calc(33.33%+12px)] right-[calc(33.33%+12px)]
// Use pointer-events-none
```

### Bento grid

`grid grid-cols-1 md:grid-cols-4 gap-4 max-w-6xl mx-auto mb-20`

All bento cards share base style:
```
rounded-[2rem] backdrop-blur-xl border p-6 flex flex-col
```

#### Card A — Interactive Playground (md:col-span-2 md:row-span-2, tall)

**Title bar:**
```
[⬡ violet circle] Capsule Hub Playground
                   Pick a scenario. See your Capsule built.
```

**State:** `const [scenario, setScenario] = useState<number | null>(null);`
**State:** `const [phase, setPhase] = useState<"idle"|"extracting"|"ready">("idle");`

When a scenario chip is clicked:
1. Set `phase = "extracting"`. Show spinner + "Extracting context…" in right panel.
2. After 900ms: set `phase = "ready"`. Animate capsule card in.

**Scenario chips (horizontal scroll row, bottom of card):**

```tsx
const SCENARIOS = [
  {
    source: "ChatGPT", emoji: "🤖",
    chipLabel: "Product requirements session",
    capsuleTitle: "Sprint 23 — Auth Rewrite",
    points: [
      "Goal: replace JWT with OAuth2 + PKCE",
      "Constraint: zero-downtime migration",
      "Decision: Rust axum, keep Python gateway",
    ],
  },
  {
    source: "Gmail", emoji: "📧",
    chipLabel: "Client feedback thread",
    capsuleTitle: "Acme Corp — Q2 Feedback",
    points: [
      "Blocker: onboarding > 15 min for non-technical users",
      "Request: CSV export on all reports by July",
      "Tone: positive on speed, frustrated with docs",
    ],
  },
  {
    source: "Gemini", emoji: "✦",
    chipLabel: "Competitor research deep dive",
    capsuleTitle: "AI Gateway Landscape",
    points: [
      "Gap: no competitor combines MCP + compliance",
      "Pricing opportunity: $800/mo vs avg $1,200",
      "Positioning: lead with compliance, not cost",
    ],
  },
];
```

**Left sub-panel (top half of card):** A mock chat preview for the selected scenario — 2–3 message bubbles showing user prompt + AI response in minimal style (gray/white bubbles). When no scenario selected, show placeholder with Package icon + "Select a scenario below".

**Right sub-panel:** When `phase === "extracting"`:
```tsx
<div className="flex items-center gap-2 text-violet-500">
  <motion.div animate={{ rotate: 360 }} transition={{ duration: 1, repeat: Infinity, ease: "linear" }}>
    <RefreshCw className="w-4 h-4" />
  </motion.div>
  <span className="text-xs font-bold uppercase tracking-widest">Extracting context…</span>
</div>
```

When `phase === "ready"`, animate in the capsule card:
```tsx
<motion.div
  initial={{ opacity: 0, scale: 0.94, y: 12 }}
  animate={{ opacity: 1, scale: 1, y: 0 }}
  transition={{ type: "spring", stiffness: 280, damping: 22 }}
  className="rounded-xl border border-violet-200 dark:border-violet-500/20 bg-violet-50/50 dark:bg-violet-900/10 p-4"
>
  {/* Header row */}
  <div className="flex items-center justify-between mb-3">
    <div className="flex items-center gap-2">
      <span className="text-violet-500">⬡</span>
      <span className="text-sm font-bold text-slate-900 dark:text-white">
        {scenario?.capsuleTitle}
      </span>
    </div>
    <span className="text-[10px] px-2 py-0.5 rounded-md bg-violet-500/10 text-violet-500 font-bold border border-violet-500/20">v1</span>
  </div>

  {/* Context bullets */}
  <ul className="space-y-1.5 mb-4">
    {scenario?.points.map((p, i) => (
      <li key={i} className="flex items-start gap-2 text-xs text-slate-600 dark:text-white/55">
        <span className="text-violet-400 mt-0.5 shrink-0">·</span>
        {p}
      </li>
    ))}
  </ul>

  {/* Inject row */}
  <div className="border-t border-violet-200/50 dark:border-white/[0.06] pt-3">
    <p className="text-[10px] text-slate-400 dark:text-white/25 uppercase tracking-widest mb-2">
      Inject into →
    </p>
    <div className="flex gap-2 flex-wrap">
      {["◈ Claude", "▸ Cursor", "✦ Gemini"].map(tool => (
        <InjectButton key={tool} label={tool} />
      ))}
    </div>
  </div>
</motion.div>
```

`InjectButton`: on click shows "✓ Injected" in emerald for 1.5s then resets.

**Card style:** `bg-white/70 dark:bg-[hsl(224,28%,7%)]/70 border-slate-200 dark:border-white/10`

---

#### Card B — Version Control (md:col-span-1)

**Icon:** GitBranch, violet  
**Title:** `"Version history that actually matters"`  
**Body:** `"Branch as a new capsule or stack versions as ideas evolve. Roll back to stable checkpoints. Tag the 'golden prompt' your team agreed on."`

**Visual — version tag stack:**

```tsx
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
    className={`flex items-center gap-2.5 text-xs py-1.5 ${v.active ? "text-violet-600 dark:text-violet-400" : "text-slate-400 dark:text-white/25"}`}
  >
    <div className={`w-6 h-6 rounded-md flex items-center justify-center text-[9px] font-bold border shrink-0 ${
      v.active
        ? "border-violet-400 bg-violet-50 dark:bg-violet-500/10 text-violet-600 dark:text-violet-400"
        : "border-slate-200 dark:border-white/10"
    }`}>
      {v.active ? "✓" : String.fromCharCode(9675)}
    </div>
    <div>
      <div className="font-semibold leading-none">{v.tag}</div>
      <div className="text-[10px] opacity-60 mt-0.5">{v.label}</div>
    </div>
  </motion.div>
))}
```

**Card style:** `border-violet-100 dark:border-violet-500/20 bg-violet-50/30 dark:bg-violet-900/10`

---

#### Card C — Team Workspaces (md:col-span-1)

**Icon:** Users, cyan  
**Title:** `"One team. One source of truth."`  
**Body:** `"Organize capsules by department. Everyone injects the same vetted context — not whatever they remember from last week's standup."`

**Visual — department chips + sample capsule entry:**

```tsx
// Department chips
{["Engineering", "Product", "Marketing", "Sales"].map((dept, i) => (
  <motion.span
    key={dept}
    initial={{ opacity: 0, scale: 0.9 }}
    whileInView={{ opacity: 1, scale: 1 }}
    viewport={{ once: true }}
    transition={{ delay: i * 0.07 }}
    className="text-xs px-2.5 py-1 rounded-lg border font-medium [various colours per dept]"
  >
    {dept}
  </motion.span>
))}

// Sample capsule row
<div className="mt-4 p-3 rounded-xl border border-slate-100 dark:border-white/5 bg-white/50 dark:bg-white/[0.02] text-xs">
  <div className="flex justify-between items-center">
    <span className="font-semibold text-slate-700 dark:text-white/60">Auth Service Rewrite</span>
    <span className="text-slate-400 dark:text-white/20">@alex</span>
  </div>
  <div className="flex gap-1.5 mt-1.5">
    <span className="text-[10px] px-1.5 py-0.5 rounded bg-blue-100 dark:bg-blue-500/10 text-blue-600 dark:text-blue-400">Engineering</span>
    <span className="text-[10px] px-1.5 py-0.5 rounded bg-slate-100 dark:bg-white/5 text-slate-400">v4</span>
  </div>
</div>
```

Dept chip colours: Engineering=blue, Product=emerald, Marketing=amber, Sales=rose.

**Card style:** `border-cyan-100 dark:border-cyan-500/20 bg-cyan-50/30 dark:bg-cyan-900/10`

---

#### Card D — MCP Integration (md:col-span-2)

**Icon:** Terminal, dark/slate (card is intentionally dark regardless of mode)  
**Title:** `"Your IDE already speaks Capsule Hub"`  
**Body:** `"Connect via MCP and your agent codes against the exact spec — no re-explaining, no context loss."`

Show the existing `<CodeBlock>` component:

```json
"capsule-service": {
  "url": "https://backend.tilantra.com/mcp",
  "headers": { "X-API-Key": "YOUR_API_KEY" }
}
```

Below the code block:
```tsx
<div className="flex items-center gap-2 mt-4">
  <span className="text-xs text-white/30">Works in:</span>
  {["▸ Cursor", "⚡ Antigravity"].map(ide => (
    <span key={ide} className="text-xs px-2.5 py-1 rounded-lg border border-white/10 text-white/50 font-mono">{ide}</span>
  ))}
</div>
```

**Card style:** Intentionally dark: `bg-[hsl(224,28%,5%)] border-white/[0.07]`. All text uses `text-white/80` and `text-white/40`.

---

#### Card E — Attachment Types (md:col-span-2)

**Icon:** Paperclip, emerald  
**Title:** `"Your Capsule is never just text"`  
**Body:** `"Attach PDFs, code, images, and more alongside the chat. The next model sees the full picture."`

**File type pill grid:**

```tsx
const FILE_TYPES = [
  { ext: ".pdf",  bg: "bg-red-50 dark:bg-red-900/20 border-red-200 dark:border-red-500/20 text-red-600 dark:text-red-400" },
  { ext: ".md",   bg: "bg-slate-50 dark:bg-slate-800/50 border-slate-200 dark:border-white/10 text-slate-600 dark:text-slate-300" },
  { ext: ".py",   bg: "bg-blue-50 dark:bg-blue-900/20 border-blue-200 dark:border-blue-500/20 text-blue-600 dark:text-blue-400" },
  { ext: ".ts",   bg: "bg-sky-50 dark:bg-sky-900/20 border-sky-200 dark:border-sky-500/20 text-sky-600 dark:text-sky-400" },
  { ext: ".png",  bg: "bg-emerald-50 dark:bg-emerald-900/20 border-emerald-200 dark:border-emerald-500/20 text-emerald-600 dark:text-emerald-400" },
  { ext: ".json", bg: "bg-amber-50 dark:bg-amber-900/20 border-amber-200 dark:border-amber-500/20 text-amber-600 dark:text-amber-400" },
  { ext: ".csv",  bg: "bg-teal-50 dark:bg-teal-900/20 border-teal-200 dark:border-teal-500/20 text-teal-600 dark:text-teal-400" },
  { ext: ".txt",  bg: "bg-slate-50 dark:bg-slate-800/50 border-slate-200 dark:border-white/10 text-slate-500 dark:text-slate-400" },
  { ext: "+12 more", bg: "bg-violet-50 dark:bg-violet-900/20 border-violet-200 dark:border-violet-500/20 text-violet-600 dark:text-violet-400" },
];

// Layout: flex flex-wrap gap-2 mt-4
// Each pill: text-xs font-mono font-semibold px-3 py-1.5 rounded-lg border
// Animation: whileInView, stagger delay: index * 0.04
```

**Card style:** `border-emerald-100 dark:border-emerald-500/20 bg-emerald-50/30 dark:bg-emerald-900/10`

---

### Platforms row

```tsx
const PLATFORMS = [
  { name: "ChatGPT",    emoji: "🤖", note: "Official + Plus" },
  { name: "Claude",     emoji: "◈",  note: "claude.ai" },
  { name: "Gemini",     emoji: "✦",  note: "Gemini + AI Studio" },
  { name: "Gmail",      emoji: "📧", note: "Thread capture" },
  { name: "Cursor",     emoji: "▸",  note: "via MCP" },
  { name: "Antigravity",emoji: "⚡", note: "via MCP" },
];

// Label above: "Works inside the tools you already use"
// text-sm text-slate-500 dark:text-white/30 uppercase tracking-widest text-center mb-8

// Layout: grid grid-cols-3 md:grid-cols-6 gap-3 max-w-3xl mx-auto mb-14

// Each badge:
<motion.div
  whileHover={{ y: -3 }}
  className="flex flex-col items-center gap-2 p-4 rounded-2xl border border-slate-100 dark:border-white/[0.06]
    bg-white/60 dark:bg-white/[0.02] backdrop-blur-sm
    hover:border-violet-200 dark:hover:border-violet-500/20 transition-all group cursor-default"
>
  <span className="text-2xl">{platform.emoji}</span>
  <span className="text-sm font-semibold text-slate-700 dark:text-white/60
    group-hover:text-violet-600 dark:group-hover:text-violet-400 transition-colors">
    {platform.name}
  </span>
  <span className="text-[10px] text-slate-400 dark:text-white/25">{platform.note}</span>
</motion.div>
```

### Section CTA

```tsx
<ScrollRevealItem className="text-center mt-4">
  <Link
    to="/capsule-hub"
    className="inline-flex items-center gap-2 px-8 py-4 rounded-full text-base font-semibold text-white
      bg-gradient-to-r from-cyan-500 to-violet-600
      hover:opacity-90 hover:scale-[1.02] transition-all
      shadow-lg shadow-violet-500/20"
  >
    Explore Capsule Hub
    <ArrowRight className="w-4 h-4" />
  </Link>
  <p className="text-sm text-slate-500 dark:text-white/25 mt-3">
    Free Chrome extension · Works in 60 seconds
  </p>
</ScrollRevealItem>
```

---

## SECTION 4 — UseCasesSection (Add Product Toggle)

**File:** `src/components/sections/UseCasesSection.tsx`

Add at the top of the component (above the section heading):

```tsx
const [product, setProduct] = useState<"guidera" | "capsule-hub">("guidera");

// Reset active tab when product changes
useEffect(() => { setActive(0); }, [product]);
```

**Product toggle UI** — insert as the first element inside `<ScrollReveal>`, above the section heading:

```tsx
<ScrollRevealItem className="flex justify-center mb-10">
  <div className="inline-flex items-center gap-1 p-1 rounded-full border border-slate-200 dark:border-white/[0.07] bg-white/50 dark:bg-white/[0.02] backdrop-blur-sm">
    {[
      { key: "guidera",     label: "Guidera",      activeClass: "bg-blue-50 dark:bg-blue-500/10 text-blue-600 dark:text-blue-400 border border-blue-200 dark:border-blue-500/20" },
      { key: "capsule-hub", label: "Capsule Hub",  activeClass: "bg-violet-50 dark:bg-violet-500/10 text-violet-600 dark:text-violet-400 border border-violet-200 dark:border-violet-500/20" },
    ].map(tab => (
      <button
        key={tab.key}
        onClick={() => setProduct(tab.key as any)}
        className={`px-5 py-2 rounded-full text-sm font-medium transition-all duration-200 ${
          product === tab.key
            ? tab.activeClass
            : "text-slate-500 dark:text-white/35 hover:text-slate-900 dark:hover:text-white border border-transparent"
        }`}
      >
        {tab.label}
      </button>
    ))}
  </div>
</ScrollRevealItem>
```

**Dynamic heading** — replace hardcoded heading with:

```tsx
<AnimatePresence mode="wait">
  <motion.div key={product} initial={{ opacity:0, y:8 }} animate={{ opacity:1, y:0 }} exit={{ opacity:0, y:-8 }}
    transition={{ duration:0.2 }}>
    <h2 className="text-3xl md:text-5xl font-bold" style={{ letterSpacing: "-0.03em" }}>
      <span className="headline-gradient">Why </span>
      <span className={product === "guidera"
        ? "gradient-text"
        : "bg-gradient-to-r from-cyan-400 to-violet-500 bg-clip-text text-transparent"
      }>
        {product === "guidera" ? "Guidera" : "Capsule Hub"}
      </span>
    </h2>
    <p className="mt-3 text-slate-600 dark:text-white/35 text-base max-w-xl mx-auto">
      {product === "guidera"
        ? "Real AI failures that Guidera's compliance and routing layer would have prevented."
        : "Real workflows where teams lose hours every week — and how Capsule Hub eliminates the friction."}
    </p>
  </motion.div>
</AnimatePresence>
```

**Wrap the tab list + content panel** in `<AnimatePresence mode="wait">` keyed on `product` so the entire panel swaps when toggling.

**CapsuleHub cases data:**

```tsx
const capsuleHubCases = [
  {
    company: "Engineering",
    icon: Terminal,
    incident: "The Spec That Got Lost Between Tools",
    what: "A senior engineer spent three days re-explaining a complex auth migration spec across ChatGPT, Figma, and their IDE. Every new session started cold. By the time the code landed in review, it had drifted from the original requirements because each hop introduced a subtle misremembering.",
    how: [
      "Capture the requirements session from ChatGPT as a Capsule with one click",
      "Drop into Figma conversations to align design — same context, no re-typing",
      "Connect via MCP so Cursor codes against the exact spec from the first line",
      "Version the Capsule as decisions evolve — the IDE always sees the latest state",
    ],
  },
  {
    company: "Marketing",
    icon: Megaphone,
    incident: "When Everyone Had a Different Version of the Story",
    what: "A growth-stage startup's marketing, sales, and product teams were all pitching the product differently. Positioning lived in Notion, Slack threads, and people's memories. Launch messaging was inconsistent, and no one could agree on what the product actually did.",
    how: [
      "Create one team Capsule with approved positioning, key claims, and competitor talking points",
      "All team members inject the same vetted context into their AI writing tools",
      "Update once when messaging changes — one place, one version of truth",
      "Tag stable releases so 'the launch brief' is always findable and never overwritten",
    ],
  },
  {
    company: "AI / Automation",
    icon: Cpu,
    incident: "Three Agents, Zero Shared Memory",
    what: "A team built a multi-agent pipeline: planner → coder → reviewer. Each agent started from a static system prompt with no memory of prior decisions. The reviewer kept re-flagging issues the planner had already resolved. Every run re-litigated the same ground.",
    how: [
      "Planner produces a Capsule containing decisions, constraints, and rationale from each run",
      "Coding agent consumes it via MCP — receives the exact spec the planner intended",
      "Reviewer agent receives the updated Capsule — context includes what changed and why",
      "The Capsule ID and version act as a deterministic shared reference across all agents",
    ],
  },
  {
    company: "Sales",
    icon: ShoppingCart,
    incident: "Every RFP Started From Scratch",
    what: "Solutions engineers spent 40% of their RFP time re-researching the same product capabilities, pricing rationale, and security answers. Different SEs gave different answers to identical questions. Proposals were inconsistent and sometimes contradicted each other.",
    how: [
      "Capture discovery call and RFP-answer sessions as versioned Capsules",
      "All SEs inject the same fact base into their proposal-writing AI tools",
      "Update once when pricing or capabilities change — everyone pulls the latest automatically",
      "Role-based team folders ensure only verified answers reach proposals",
    ],
  },
  {
    company: "Research",
    icon: Search,
    incident: "Hours of Research, Lost at Tab Close",
    what: "A product researcher ran a 2-hour deep-dive across Gemini and Perplexity — competitive landscape, user pain points, market sizing. When they opened a new Claude session to write the strategy brief, they had to reconstruct everything from memory and fragmented notes.",
    how: [
      "Capture the Gemini research session as a Capsule the moment the session is complete",
      "Drop it into Claude to write the brief — full context available instantly, no reconstruction",
      "Attach PDF source documents to the Capsule so no evidence is lost",
      "Share to the Product team workspace so PMs build on the same foundation, not their own version",
    ],
  },
];
```

**Active tab colours for CapsuleHub panel:**
- Tab active: `bg-violet-50 dark:bg-violet-500/10 border-violet-200 dark:border-violet-500/20 text-violet-600 dark:text-violet-300`
- Tab icon active: `text-violet-500 dark:text-violet-400`
- Prevention box bg: `bg-violet-500/[0.06] border border-violet-500/[0.12]`
- Prevention label: `text-xs font-semibold text-violet-400 uppercase tracking-widest`
- Label text: `"How Capsule Hub fixes this"` (not "prevents")

---

## SECTION 5 — FeaturesSection (Add Product Toggle)

**File:** `src/components/sections/FeaturesSection.tsx`

Same toggle pill as UseCasesSection (copy the exact JSX). Insert before the bento grid.

```tsx
const [product, setProduct] = useState<"guidera" | "capsule-hub">("guidera");
```

**Dynamic heading:**
```tsx
<h2>
  <span className="headline-gradient">Powering </span>
  <span className={product === "guidera" ? "gradient-text" : "bg-gradient-to-r from-cyan-400 to-violet-500 bg-clip-text text-transparent"}>
    {product === "guidera" ? "Innovation" : "Context"}
  </span>
</h2>
```

**Capsule Hub features:**
```tsx
const capsuleHubFeatures = [
  {
    icon: Zap,
    title: "One-Click Capture",
    description: "Click the extension in any supported AI chat. Context is extracted and saved as a Capsule instantly — goals, decisions, constraints, attachments.",
    metric: "1 click",
    tags: ["Capture", "UX"],
    status: "Live",
    colSpan: 2,
    hero: true,
  },
  {
    icon: Move,        // import Move from lucide-react
    title: "Drag & Drop Injection",
    description: "Open your library overlay, drag a Capsule into the chat input. Context loads instantly — no copy-paste chains.",
    metric: "Zero copy-paste",
    tags: ["Inject", "UX"],
    status: "Live",
  },
  {
    icon: GitBranch,   // import GitBranch from lucide-react
    title: "Version Control",
    description: "Branch Capsules as ideas mature. Roll back to stable checkpoints. Tag the golden prompt your team agreed on.",
    metric: "Full history",
    tags: ["Versions"],
    status: "Pro+",
  },
  {
    icon: Users,
    title: "Team Workspaces",
    description: "Organize by department. Transparent ownership. Share the 'golden prompt' so everyone injects the same vetted context.",
    metric: "Role-based",
    tags: ["Teams"],
    status: "Pro+",
  },
  {
    icon: Terminal,
    title: "MCP Integration",
    description: "Connect Capsules to Cursor and Antigravity via MCP. Your agent codes against the exact spec without re-explaining.",
    metric: "IDE-native",
    tags: ["Dev", "MCP"],
    status: "Live",
  },
  {
    icon: Sparkles,    // import Sparkles from lucide-react
    title: "Dynamic Context",
    description: "AI-powered semantic filtering — only the most relevant prior messages are injected. Not a dump of everything.",
    metric: "AI-filtered",
    tags: ["AI", "Context"],
    status: "Elite",
    colSpan: 3,
  },
];
```

**Hero card accent (CapsuleHub):**
```
border-violet-200 dark:border-violet-500/30
bg-violet-50 dark:bg-violet-500/5
shadow-[0_0_30px_rgba(139,92,246,0.08)] dark:shadow-[0_0_30px_rgba(139,92,246,0.15)]
```
Icon colour: `text-violet-500 dark:text-violet-400`

**Wrap grid in `<AnimatePresence mode="wait">` keyed on `product`.**

---

## SECTION 6 — CTASection (Minor Update)

**File:** `src/components/sections/CTASection.tsx`

**Headline second line — add company breadth:**
```tsx
// Current second line:
<span className="gradient-text">the right way.</span>

// Replace with:
<>
  <span className="gradient-text">the right way.</span>
  <br />
  <span className="text-slate-500 dark:text-white/20 text-2xl md:text-3xl font-medium">
    Guidera for control. Capsule Hub for context.
  </span>
</>
```

**Body copy:**
```
Two products. One AI operations stack. Tilantra eliminates compliance risk and context loss so your teams ship faster without the risk.
```

**Add a second CTA button** between the primary and secondary:
```tsx
<a
  href="https://chromewebstore.google.com/detail/capsule-hub-by-tilantra/"
  target="_blank"
  rel="noreferrer"
  className="inline-flex items-center gap-2 px-6 py-3 text-sm font-medium
    text-violet-600 dark:text-violet-400
    rounded-lg border border-violet-200 dark:border-violet-500/20
    hover:bg-violet-50 dark:hover:bg-violet-500/[0.08]
    transition-all duration-200"
>
  <Package className="w-4 h-4" />
  Get Capsule Hub Free
</a>
```

**Trust badges — update to 4 items covering both products:**
```
SOC2 Compliant  ·  99.9% Uptime SLA  ·  6 AI platforms  ·  Free to start
```

---

## SECTION 7 — Header (Products Dropdown)

**File:** `src/components/layout/Header.tsx`

Replace the `{ name: "Product", href: "/#hero" }` nav item with a hover dropdown component.

```tsx
// Add to state:
const [productsOpen, setProductsOpen] = useState(false);
const productsRef = useRef<HTMLDivElement>(null);

// Replace Product nav link with:
<div ref={productsRef} className="relative"
  onMouseEnter={() => setProductsOpen(true)}
  onMouseLeave={() => setProductsOpen(false)}>

  <button className="group relative inline-flex items-center gap-1 text-sm text-slate-500 dark:text-white/45 hover:text-slate-900 dark:hover:text-white transition-colors">
    Products
    <ChevronDown className={`w-3 h-3 transition-transform duration-200 ${productsOpen ? "rotate-180" : ""}`} />
  </button>

  <AnimatePresence>
    {productsOpen && (
      <motion.div
        initial={{ opacity: 0, y: 6, scale: 0.97 }}
        animate={{ opacity: 1, y: 0, scale: 1 }}
        exit={{ opacity: 0, y: 4, scale: 0.97 }}
        transition={{ duration: 0.15 }}
        className="absolute top-full left-1/2 -translate-x-1/2 mt-3 w-80 p-2
          rounded-2xl border border-white/15 dark:border-white/10
          bg-white/95 dark:bg-[hsl(224,28%,7%)]/95 backdrop-blur-xl
          shadow-2xl shadow-black/20"
      >
        {/* Guidera */}
        <Link to="/guidera" onClick={() => setProductsOpen(false)}
          className="flex items-start gap-3 p-3 rounded-xl hover:bg-slate-50 dark:hover:bg-white/[0.04] transition-all group">
          <div className="w-9 h-9 rounded-xl bg-blue-500/10 flex items-center justify-center shrink-0">
            <img src="/GuideraLogo.png" alt="Guidera" className="h-5 object-contain" />
          </div>
          <div>
            <div className="text-sm font-semibold text-slate-900 dark:text-white group-hover:text-blue-600 dark:group-hover:text-blue-400 transition-colors">
              Guidera
            </div>
            <div className="text-xs text-slate-500 dark:text-white/30 leading-snug mt-0.5">
              AI gateway — routing, compliance & cost control
            </div>
          </div>
        </Link>

        <div className="my-1 h-px bg-slate-100 dark:bg-white/[0.06] mx-3" />

        {/* Capsule Hub */}
        <Link to="/capsule-hub" onClick={() => setProductsOpen(false)}
          className="flex items-start gap-3 p-3 rounded-xl hover:bg-violet-50/50 dark:hover:bg-violet-500/[0.06] transition-all group">
          <div className="w-9 h-9 rounded-xl bg-violet-500/10 flex items-center justify-center shrink-0">
            <img src="/CapsuleHubLogo.png" alt="Capsule Hub" className="h-5 object-contain" />
          </div>
          <div>
            <div className="text-sm font-semibold text-slate-900 dark:text-white group-hover:text-violet-600 dark:group-hover:text-violet-400 transition-colors">
              Capsule Hub
            </div>
            <div className="text-xs text-slate-500 dark:text-white/30 leading-snug mt-0.5">
              Context layer — capture once, inject into any AI
            </div>
          </div>
        </Link>
      </motion.div>
    )}
  </AnimatePresence>
</div>
```

---

## SECTION 8 — CapsuleHub Product Page Revamp

**File:** `src/pages/CapsuleHub.tsx`

### New page structure

```tsx
<div className="min-h-screen bg-transparent">
  <Header />
  <main>
    <HeroSplit />          // replaces current hero + carousel
    <NarrativeSection />   // new
    <CapsuleHubBentoSection />  // new component
    <UseCasesTabSection /> // new
    <PricingSection />     // existing, minor additions
    <PageCTA />            // new
  </main>
  <Footer />
</div>
```

### Hero — split layout

**Background:** `bg-slate-50 dark:bg-[hsl(224,28%,3%)] pt-24 pb-48 relative overflow-hidden`

**Violet glow at bottom:**
```tsx
<div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-[600px] h-[200px] bg-gradient-to-t from-violet-600/15 via-cyan-600/5 to-transparent rounded-t-full blur-3xl pointer-events-none" />
```

**Grid:** `grid grid-cols-1 lg:grid-cols-2 gap-16 items-center`

**Left column copy:**
- Eyebrow: violet pill — "Context Layer"
- H1 line 1 (gradient): `"Capsule Hub:"`
- H1 line 2 (white/dark): `"Never Start From Zero Again"`
- Subline: `"Turn any AI chat into a portable Capsule. Inject it anywhere with drag and drop. Pipe it to your IDE via MCP. Share it with your team. Context loss is over."`
- CTA 1 (filled gradient): `"Get the Extension — Free"` → Chrome Web Store
- CTA 2 (outlined): `"MCP Docs"` → `/docs/capsule-hub-mcp`
- Trust row: `Chrome Extension · ChatGPT · Claude · Gemini · MCP Ready · Free to start`
- Hover caption area: `min-h-[5rem]` showing caption for hovered screenshot

**Right column — stacked screenshots:**

Exact same component pattern as `Guidera.tsx` `images` + hover animation. Use:
```tsx
const images = [
  { src: "/CapsuleHub1.png", label: "Capsule Library: Your full context history — searchable, versioned, and team-ready." },
  { src: "/CapsuleHub2.png", label: "Capture in Action: One click extracts context from any AI chat into a portable Capsule." },
  { src: "/CapsuleHub3.png", label: "Team Workspace: Shared capsules organized by department, with transparent ownership." },
];

const offsets = [
  { x: -55, y: -45, rotate: -7, scale: 0.94 },
  { x: 0,   y: 0,   rotate: 0,  scale: 1    },
  { x: 55,  y: 45,  rotate: 7,  scale: 0.94 },
];
// Same spring config as Guidera: stiffness: 300, damping: 25
// isHovered → ring-4 ring-violet-500/30 ring-offset-4 ring-offset-slate-900
```

### Narrative section

```tsx
<section className="py-20 bg-transparent relative z-10">
  <div className="container mx-auto px-6 max-w-4xl text-center">
    <h2 className="text-3xl font-bold text-slate-900 dark:text-white mb-6">
      The Bridge for Your AI Workflows
    </h2>
    <p className="text-lg text-slate-600 dark:text-slate-300 leading-relaxed mb-8 text-left">
      Every AI chat starts cold. You open ChatGPT for requirements, Claude for writing, Cursor for coding — and each session begins with the same exhausting preamble: here's the project, here's the context, here's what we decided last time. Capsule Hub ends that loop. It turns the best output from any AI conversation into a portable Capsule — a structured bundle of goals, decisions, constraints, and attachments that travels with you between tools.
    </p>
    <p className="text-lg text-slate-600 dark:text-slate-300 leading-relaxed text-left">
      Capture with one click in your browser. Inject with drag-and-drop into any supported AI. Pipe directly into your IDE via MCP so your coding agent starts exactly where your planning session ended. Version it as the project evolves. Share it to a team workspace so everyone pulls from the same vetted context — not from memory. Capsule Hub is the context supply chain your AI stack was missing.
    </p>
  </div>
</section>
```

### CapsuleHubBentoSection

**New file:** `src/components/sections/CapsuleHubBentoSection.tsx`

This is the **same bento grid** as defined in Section 3 of this plan (Cards A–E: playground, version control, teams, MCP, attachments). The component is shared — imported on both the landing page (`CapsuleHubSpotlightSection.tsx` renders it inline) and the product page (`CapsuleHub.tsx` imports it directly).

Component heading (shown on the product page, hidden in the spotlight section which has its own heading):

```tsx
interface Props { showHeading?: boolean; }

// If showHeading (default true):
<div className="text-center mb-10">
  <h2 className="text-3xl md:text-5xl font-bold text-slate-900 dark:text-white mb-4">
    Powerful Context Management,{" "}
    <span className="bg-gradient-to-r from-cyan-400 to-violet-500 bg-clip-text text-transparent">
      One Extension
    </span>
  </h2>
  <p className="text-slate-600 dark:text-slate-300 text-lg max-w-2xl mx-auto">
    Everything you need to capture, organise, and reuse your best AI work — across every tool you use.
  </p>
</div>
```

### Use cases tab section (product page only)

Render the same tab panel as UseCasesSection but CapsuleHub-only (no product toggle, starts directly in CapsuleHub mode). Copy the AnimatePresence + tab list + content panel pattern. Use violet accent colours throughout. Heading: `"Real workflows. Zero re-explaining."` Use all 5 CapsuleHub cases from Section 4.

### Pricing section — additions to existing

Add a CTA button inside each tier card:

- **Basic (Free):** `<a href="https://capsulehub.tilantra.com">Get started free →</a>` — outlined, slate
- **Pro ($5/mo):** `<a href="https://capsulehub.tilantra.com">Start Pro →</a>` — filled primary
- **Elite ($15/mo):** `<a href="https://capsulehub.tilantra.com">Start Elite →</a>` — outlined emerald
- **Enterprise:** `<Link to="/contact">Talk to us →</Link>` — outlined slate

Add below the pricing grid:
```tsx
<p className="text-center text-xs text-slate-400 dark:text-white/25 mt-8">
  Works inside ChatGPT · Claude · Gemini · Cursor · Gmail · Antigravity
</p>
```

### Page CTA

```tsx
<section className="py-20 bg-transparent">
  <div className="container mx-auto px-6 text-center max-w-2xl">
    <h2 className="text-3xl font-bold text-slate-900 dark:text-white mb-4">
      Ready to stop starting from zero?
    </h2>
    <p className="text-slate-600 dark:text-white/40 mb-8 text-base leading-relaxed">
      Install the extension, capture your first Capsule in 60 seconds,
      and inject it into any AI tool. It's free.
    </p>
    <a
      href="https://chromewebstore.google.com/detail/capsule-hub-by-tilantra/"
      target="_blank" rel="noreferrer"
      className="inline-flex items-center gap-2 px-8 py-4 rounded-full text-base font-semibold text-white
        bg-gradient-to-r from-cyan-500 to-violet-600
        shadow-lg shadow-violet-500/20
        hover:opacity-90 hover:scale-[1.02] transition-all"
    >
      Get Capsule Hub — It's Free
      <ArrowRight className="w-5 h-5" />
    </a>
    <p className="text-xs text-slate-400 dark:text-white/20 mt-4">
      Chrome extension · No credit card required
    </p>
  </div>
</section>
```

---

## New Lucide Icons Required

Add these imports wherever they appear. All are in `lucide-react`:

| Icon | Used in |
|---|---|
| `ChevronDown` | HeroSection (secondary CTA), Header (dropdown) |
| `Package` | CapsuleHubSpotlightSection step 02, empty state |
| `Rocket` | CapsuleHubSpotlightSection step 03 |
| `GitBranch` | Bento Card B, FeaturesSection |
| `Terminal` | Bento Card D, UseCasesSection (Engineering tab) |
| `Paperclip` | Bento Card E |
| `Move` | FeaturesSection CapsuleHub features |
| `Sparkles` | FeaturesSection CapsuleHub features |
| `Search` | UseCasesSection (Research tab) |
| `Cpu` | UseCasesSection (AI/Automation tab) |
| `RefreshCw` | Bento Card A playground loading state |

---

## Animation Quick Reference

```tsx
// Scroll-triggered reveal (standard)
initial={{ opacity: 0, y: 20 }}
whileInView={{ opacity: 1, y: 0 }}
viewport={{ once: true }}
transition={{ duration: 0.5, delay: index * 0.1 }}

// Panel swap (AnimatePresence mode="wait")
initial={{ opacity: 0, y: 16 }}
animate={{ opacity: 1, y: 0 }}
exit={{ opacity: 0, y: -8 }}
transition={{ duration: 0.3, ease: [0.16, 1, 0.3, 1] }}

// Card hover lift
whileHover={{ y: -5, scale: 1.02 }}

// Capsule node pulse
animate={{ scale: [1,1.06,1], boxShadow: ["0 0 0 0 rgba(139,92,246,0)", "0 0 0 16px rgba(139,92,246,0.12)", "0 0 0 0 rgba(139,92,246,0)"] }}
transition={{ duration: 2.8, repeat: Infinity }}

// Playground capsule card entrance
initial={{ opacity: 0, scale: 0.94, y: 12 }}
animate={{ opacity: 1, scale: 1, y: 0 }}
transition={{ type: "spring", stiffness: 280, damping: 22 }}

// Loading spinner
animate={{ rotate: 360 }}
transition={{ duration: 1, repeat: Infinity, ease: "linear" }}

// Live feed scroll
animate={{ y: [0, -singleListHeight] }}
transition={{ duration: 22, repeat: Infinity, ease: "linear" }}

// Staggered list items — apply delay: index * 0.05 to each item in map()

// Float card spring entrance
initial={{ opacity: 0, scale: 0.9 }}
animate={{ opacity: 1, scale: 1 }}
transition={{ delay: 1.8, type: "spring", stiffness: 260, damping: 20 }}
```

---

## Colour Tokens Summary

| Purpose | Light | Dark | Tailwind |
|---|---|---|---|
| CapsuleHub primary | violet-600 | violet-400 | `text-violet-600 dark:text-violet-400` |
| CapsuleHub gradient | cyan-400 → violet-500 | same | `from-cyan-400 to-violet-500` |
| CapsuleHub glow | violet-500/10 | violet-500/10 | `bg-violet-500/10` |
| CapsuleHub border | violet-200 | violet-500/20 | `border-violet-200 dark:border-violet-500/20` |
| CapsuleHub card bg | violet-50/30 | violet-900/10 | `bg-violet-50/30 dark:bg-violet-900/10` |
| Guidera primary | blue-500 | blue-400 / cyan-400 | existing `gradient-text` |
| Feed: route | — | blue-400 | `text-blue-400` |
| Feed: cache | — | emerald-400 | `text-emerald-400` |
| Feed: comply | — | amber-400 | `text-amber-400` |
| Feed: capsule | — | violet-400 | `text-violet-400` |
