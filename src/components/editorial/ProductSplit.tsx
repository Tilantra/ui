import { Link } from "react-router-dom";

type Card = {
    index: string;
    name: string;
    audience: string;
    headline: string;
    body: string;
    details: string[];
    cta: string;
    href: string;
    external: boolean;
    meta: string;
    /* visual identity — cards keep their own contrast in both themes */
    cardClass: string;
    accentClass: string;
    headlineClass: string;
    bodyClass: string;
    detailClass: string;
    ruleClass: string;
    ctaClass: string;
};

const CARDS: Card[] = [
    {
        index: "01",
        name: "CapsuleHub",
        audience: "For people & enterprises",
        headline: "For teams losing context across AI tools.",
        body: "Capture a conversation once. Carry it into ChatGPT, Claude, Cursor, anywhere you work next.",
        details: [
            "Capture from ChatGPT, Claude, Gemini and Gmail",
            "Inject context into any AI chat in one click",
            "Version, branch and share with your team",
        ],
        cta: "Explore CapsuleHub",
        href: "https://capsulehub.tilantra.com",
        external: true,
        meta: "Free | Enterprise pilots live",
        cardClass: "bg-neutral-950 text-white border border-neutral-800",
        accentClass: "text-orange-400",
        headlineClass: "text-white",
        bodyClass: "text-neutral-400",
        detailClass: "text-neutral-300 border-neutral-800",
        ruleClass: "bg-orange-500",
        ctaClass: "bg-white text-neutral-950 hover:bg-orange-400 hover:text-neutral-950",
    },
    {
        index: "02",
        name: "Guidera",
        audience: "For systems",
        headline: "For engineers running AI in production.",
        body: "One gateway that routes every request to the right model, enforces policy, and cuts cost.",
        details: [
            "40+ models behind a single API",
            "Compliance rules written in plain English",
            "60%+ average reduction in AI spend",
        ],
        cta: "Explore Guidera",
        href: "/guidera",
        external: false,
        meta: "Enterprise | Start free",
        cardClass: "bg-[#EDF0F3] text-neutral-950 border border-transparent dark:border-neutral-300",
        accentClass: "text-violet-700",
        headlineClass: "text-neutral-950",
        bodyClass: "text-neutral-600",
        detailClass: "text-neutral-700 border-neutral-300",
        ruleClass: "bg-violet-700",
        ctaClass: "bg-neutral-950 text-white hover:bg-violet-700",
    },
];

const CardInner = ({ card }: { card: Card }) => (
    <div className={`group relative flex flex-col justify-between min-h-[540px] lg:min-h-[72vh] p-8 md:p-12 ${card.cardClass} transition-transform duration-300 ease-out hover:-translate-y-1.5`}>
        {/* Top: index + audience — plain text, no icons */}
        <div className="flex items-start justify-between gap-4">
            <span className={`editorial-label ${card.accentClass}`}>
                {card.index} | {card.name}
            </span>
            <span className={`editorial-label text-right ${card.bodyClass}`}>{card.audience}</span>
        </div>

        {/* Middle: the routing question */}
        <div className="mt-16 mb-auto">
            <h2 className={`text-3xl md:text-4xl lg:text-[2.75rem] font-semibold leading-[1.05] tracking-[-0.03em] max-w-md ${card.headlineClass}`}>
                {card.headline}
            </h2>
            <p className={`mt-6 text-base md:text-lg leading-relaxed max-w-sm ${card.bodyClass}`}>
                {card.body}
            </p>

            {/* Clay-style reveal: details rise in on hover */}
            <ul className="mt-8 max-w-sm overflow-hidden">
                {card.details.map((d, i) => (
                    <li
                        key={d}
                        style={{ transitionDelay: `${i * 60}ms` }}
                        className={`border-t py-3 text-sm ${card.detailClass}
                            lg:translate-y-3 lg:opacity-0 lg:group-hover:translate-y-0 lg:group-hover:opacity-100
                            transition-all duration-500 ease-out`}
                    >
                        {d}
                    </li>
                ))}
            </ul>
        </div>

        {/* Bottom: CTA + meta */}
        <div className="mt-12 flex items-end justify-between gap-4 flex-wrap">
            <span className={`inline-flex items-center gap-3 px-6 py-3.5 text-sm font-semibold transition-colors duration-200 ${card.ctaClass}`}>
                {card.cta}
                <span className="inline-block transition-transform duration-200 group-hover:translate-x-1">→</span>
            </span>
            <span className={`editorial-label ${card.bodyClass}`}>{card.meta}</span>
        </div>

        {/* Accent rule that draws across the top on hover */}
        <span className={`absolute top-0 left-0 h-[3px] w-0 group-hover:w-full transition-all duration-500 ease-out ${card.ruleClass}`} />
    </div>
);

const ProductSplit = () => {
    return (
        <section id="products" className="bg-white dark:bg-[#0c0c0e]">
            <div className="mx-auto max-w-[1320px] px-6 md:px-10 pb-20 md:pb-28">
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-4">
                    {CARDS.map((card) =>
                        card.external ? (
                            <a key={card.name} href={card.href} target="_blank" rel="noreferrer" className="block">
                                <CardInner card={card} />
                            </a>
                        ) : (
                            <Link key={card.name} to={card.href} className="block">
                                <CardInner card={card} />
                            </Link>
                        )
                    )}
                </div>
            </div>
        </section>
    );
};

export default ProductSplit;
