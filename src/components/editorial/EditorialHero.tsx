import RotatingText, { RotatingPhrase } from "@/components/editorial/RotatingText";

const PHRASES: RotatingPhrase[] = [
    { text: "AI-native era.", className: "text-violet-700 dark:text-violet-400" },
    { text: "age of agents.", className: "text-violet-700 dark:text-violet-400" },
    { text: "work of tomorrow.", className: "text-violet-700 dark:text-violet-400" },
];

const EditorialHero = () => {
    return (
        <section className="relative bg-white dark:bg-[#0c0c0e]">
            {/* Vertical spine label — anchors the hero's empty right edge */}
            <p className="hidden lg:block absolute right-10 top-1/2 -translate-y-1/2 editorial-label text-neutral-300 dark:text-neutral-700 [writing-mode:vertical-rl] select-none">
                One company | Two products
            </p>
            <div className="mx-auto max-w-[1320px] px-6 md:px-10 pt-24 md:pt-36 pb-16 md:pb-24">
                <div className="grid grid-cols-12 gap-6">
                    {/* Offset start column — deliberate asymmetry */}
                    <div className="col-span-12 md:col-span-10 md:col-start-1">
                        <div className="flex items-center gap-4 mb-8">
                            <span className="h-[3px] w-10 bg-orange-500" />
                            <p className="editorial-label text-neutral-400 dark:text-neutral-500">
                                Tilantra | Est. 2025
                            </p>
                        </div>
                        <h1 className="editorial-serif italic text-[clamp(2.8rem,7.5vw,6.5rem)] leading-[1.06] tracking-[-0.01em] text-neutral-950 dark:text-white">
                            We build infrastructure
                            <br />
                            for the{" "}
                            <RotatingText phrases={PHRASES} />
                        </h1>
                    </div>

                    {/* Sub-line aligned left under the headline */}
                    <div className="col-span-12 md:col-span-5 mt-10 md:mt-16">
                        <p className="text-lg leading-relaxed text-neutral-500 dark:text-neutral-400">
                            Two products. One for people working with AI, one for
                            systems running on it. Find yours below.
                        </p>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default EditorialHero;
