import { useEffect, useRef, useState } from "react";
import { useInView } from "framer-motion";

const FACTS = [
    { value: "90,000+", label: "Users", numeric: 90000, suffix: "+" },
    { value: "72", label: "Countries", numeric: 72 },
    { value: "New & Notable", label: "Chrome Web Store" },
    { value: "Pilots live", label: "Enterprise" },
];

const valueClass =
    "text-2xl md:text-[1.7rem] font-semibold tracking-[-0.02em] text-neutral-950 dark:text-white whitespace-nowrap";

/* Counts up from 0 once the strip scrolls into view; text-only facts render as-is */
const CountUp = ({ to, suffix = "" }: { to: number; suffix?: string }) => {
    const ref = useRef<HTMLDivElement>(null);
    const inView = useInView(ref, { once: true, margin: "-80px" });
    const [value, setValue] = useState(0);

    useEffect(() => {
        if (!inView) return;
        const duration = 1200;
        const start = performance.now();
        let frame: number;
        const tick = (now: number) => {
            const progress = Math.min((now - start) / duration, 1);
            const eased = 1 - Math.pow(1 - progress, 3);
            setValue(Math.round(to * eased));
            if (progress < 1) frame = requestAnimationFrame(tick);
        };
        frame = requestAnimationFrame(tick);
        return () => cancelAnimationFrame(frame);
    }, [inView, to]);

    return (
        <div ref={ref} className={valueClass}>
            {value.toLocaleString()}
            {suffix}
        </div>
    );
};

const CredibilityStrip = () => {
    return (
        <section className="bg-white dark:bg-[#0c0c0e] border-y border-neutral-200 dark:border-neutral-800">
            <div className="mx-auto max-w-[1320px] px-6 md:px-10">
                <div className="grid grid-cols-2 md:grid-cols-4">
                    {FACTS.map((f, i) => (
                        <div
                            key={f.label}
                            className={`py-10 md:py-12 px-2 md:px-8 ${i > 0 ? "md:border-l md:border-neutral-200 dark:md:border-neutral-800" : ""}`}
                        >
                            {f.numeric !== undefined ? (
                                <CountUp to={f.numeric} suffix={f.suffix} />
                            ) : (
                                <div className={valueClass}>{f.value}</div>
                            )}
                            <div className="editorial-label text-neutral-400 dark:text-neutral-500 mt-2">{f.label}</div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default CredibilityStrip;
