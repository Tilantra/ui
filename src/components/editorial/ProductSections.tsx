import { Link } from "react-router-dom";

const CAPSULE_FEATURES = [
    {
        n: "01",
        title: "Capture",
        body: "Save any conversation from ChatGPT, Claude, Gemini or Gmail as a Capsule: goals, decisions and attachments, structured.",
    },
    {
        n: "02",
        title: "Inject",
        body: "Drop a Capsule into any AI chat and pick up exactly where you left off. No re-explaining, ever.",
    },
    {
        n: "03",
        title: "Version",
        body: "Branch ideas, roll back, tag the prompt that worked. Your context has a history now.",
    },
    {
        n: "04",
        title: "Share",
        body: "Team workspaces and an MCP server that pipes context straight into Cursor and other IDEs.",
    },
];

const GUIDERA_FEATURES = [
    {
        n: "01",
        title: "Route",
        body: "Every request scored and sent to the optimal model. 40+ models across all major providers, behind one API.",
    },
    {
        n: "02",
        title: "Enforce",
        body: "Set input and output policies per use case. PII redaction, policy checks and moderation run before anything leaves.",
    },
    {
        n: "03",
        title: "Tune",
        body: "Choose the tradeoff per response: deterministic or creative, performance or cost saving. You set the dial.",
    },
    {
        n: "04",
        title: "Audit",
        body: "Every model call logged with cost and latency. Budget alerts for finance, complete trails for legal.",
    },
];

/* Integration proof, not decoration — logos forced monochrome to hold the palette */
const WORKS_WITH = [
    { name: "ChatGPT", logo: "/ChatgptLogo.png" },
    { name: "Claude", logo: "/ClaudeLogo.png" },
    { name: "Gemini", logo: "/GeminiLogo.png" },
    { name: "Gmail", logo: "/GmailLogo.png" },
    { name: "Perplexity", logo: "/perplexity-color.png" },
    { name: "Antigravity", logo: "/antigravity-color.png" },
];

const WorksWithRow = () => (
    <div className="mt-10 pt-8 border-t border-neutral-200 dark:border-neutral-800 flex items-center gap-x-8 gap-y-4 flex-wrap">
        <span className="editorial-label text-neutral-400 dark:text-neutral-500">Works with</span>
        {WORKS_WITH.map((t) => (
            <span key={t.name} className="flex items-center gap-2">
                <img
                    src={t.logo}
                    alt={t.name}
                    className="h-5 w-5 object-contain grayscale opacity-80 dark:invert"
                />
                <span className="text-sm text-neutral-500 dark:text-neutral-400">{t.name}</span>
            </span>
        ))}
        <span className="text-sm text-neutral-400 dark:text-neutral-500">+ Cursor, via MCP</span>
    </div>
);

const FeatureList = ({ features, accent }: { features: typeof CAPSULE_FEATURES; accent: string }) => (
    <div>
        {features.map((f) => (
            <div key={f.n} className="grid grid-cols-12 gap-4 py-7 border-t border-neutral-200 dark:border-neutral-800">
                <span className={`col-span-2 sm:col-span-1 text-sm font-medium tabular-nums ${accent}`}>{f.n}</span>
                <span className="col-span-10 sm:col-span-3 text-lg font-semibold tracking-[-0.01em] text-neutral-950 dark:text-white">
                    {f.title}
                </span>
                <p className="col-span-12 sm:col-span-8 text-[0.95rem] leading-relaxed text-neutral-500 dark:text-neutral-400">
                    {f.body}
                </p>
            </div>
        ))}
    </div>
);

const primaryBtn =
    "inline-flex items-center gap-3 px-7 py-4 text-sm font-semibold bg-neutral-950 text-white dark:bg-white dark:text-neutral-950 transition-colors";
const secondaryBtn =
    "inline-flex items-center gap-3 px-7 py-4 text-sm font-semibold border border-neutral-300 dark:border-neutral-700 text-neutral-950 dark:text-white hover:border-neutral-950 dark:hover:border-white transition-colors";

const ProductSections = () => {
    return (
        <>
            {/* ── CapsuleHub — intro column left, features right-heavy ── */}
            <section className="bg-white dark:bg-[#0c0c0e] border-t border-neutral-200 dark:border-neutral-800">
                <div className="mx-auto max-w-[1320px] px-6 md:px-10 py-24 md:py-32">
                    <div className="grid grid-cols-12 gap-6 md:gap-10 mb-16">
                        <div className="col-span-12 md:col-span-5">
                            <p className="editorial-label text-orange-600 dark:text-orange-400 mb-6">01 | CapsuleHub</p>
                            <h2 className="text-4xl md:text-5xl font-semibold leading-[1.02] tracking-[-0.03em] text-neutral-950 dark:text-white">
                                Your context,
                                <br />
                                made portable.
                            </h2>
                        </div>
                        <div className="col-span-12 md:col-span-4 md:col-start-8 flex flex-col justify-end">
                            <p className="text-base leading-relaxed text-neutral-500 dark:text-neutral-400">
                                Most people waste hours re-explaining the same project to every new
                                chat. CapsuleHub ends that: capture once, work anywhere. Free for
                                individuals, with enterprise pilots live today.
                            </p>
                        </div>
                    </div>

                    <FeatureList features={CAPSULE_FEATURES} accent="text-orange-600 dark:text-orange-400" />

                    <WorksWithRow />

                    <div className="mt-12 flex items-center gap-4 flex-wrap">
                        <a
                            href="https://capsulehub.tilantra.com"
                            target="_blank"
                            rel="noreferrer"
                            className={`${primaryBtn} hover:bg-orange-500 hover:text-white dark:hover:bg-orange-400 dark:hover:text-neutral-950`}
                        >
                            Explore CapsuleHub <span>→</span>
                        </a>
                        <a
                            href="https://chromewebstore.google.com/detail/capsule-hub-by-tilantra/"
                            target="_blank"
                            rel="noreferrer"
                            className={secondaryBtn}
                        >
                            Get the extension
                        </a>
                    </div>
                </div>
            </section>

            {/* ── Guidera — mirrored: intro column right, features left-heavy ── */}
            <section className="bg-white dark:bg-[#0c0c0e] border-t border-neutral-200 dark:border-neutral-800">
                <div className="mx-auto max-w-[1320px] px-6 md:px-10 py-24 md:py-32">
                    <div className="grid grid-cols-12 gap-6 md:gap-10 mb-16">
                        <div className="col-span-12 md:col-span-4 md:order-2 md:col-start-9">
                            <p className="editorial-label text-violet-700 dark:text-violet-400 mb-6">02 | Guidera</p>
                            <h2 className="text-4xl md:text-5xl font-semibold leading-[1.02] tracking-[-0.03em] text-neutral-950 dark:text-white">
                                The control layer for production AI.
                            </h2>
                        </div>
                        <div className="col-span-12 md:col-span-4 md:order-1 flex flex-col justify-end">
                            <p className="text-base leading-relaxed text-neutral-500 dark:text-neutral-400">
                                As AI scales across products and regions, costs spike and compliance
                                becomes a liability. Guidera sits between your app and every model,
                                and fixes both.
                            </p>
                        </div>
                    </div>

                    <FeatureList features={GUIDERA_FEATURES} accent="text-violet-700 dark:text-violet-400" />

                    {/* Plain-text proof line — no icon tiles */}
                    <p className="mt-14 editorial-label text-neutral-400 dark:text-neutral-500">
                        60%+ average cost reduction · 99.9% uptime SLA · 45ms P99 latency
                    </p>

                    <div className="mt-8 flex items-center gap-4 flex-wrap">
                        <Link
                            to="/guidera"
                            className={`${primaryBtn} hover:bg-violet-700 hover:text-white dark:hover:bg-violet-400 dark:hover:text-neutral-950`}
                        >
                            Explore Guidera <span>→</span>
                        </Link>
                        <Link to="/contact" className={secondaryBtn}>
                            Book a demo
                        </Link>
                    </div>
                </div>
            </section>
        </>
    );
};

export default ProductSections;
