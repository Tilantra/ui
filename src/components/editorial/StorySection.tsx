const StorySection = () => {
    return (
        <section id="about" className="bg-white dark:bg-[#0c0c0e]">
            <div className="mx-auto max-w-[1320px] px-6 md:px-10 py-24 md:py-36">
                <div className="grid grid-cols-12 gap-6 md:gap-10">
                    {/* Left rail — label + pull quote, sticky on desktop */}
                    <div className="col-span-12 md:col-span-5">
                        <div className="md:sticky md:top-28">
                            <p className="editorial-label text-neutral-400 dark:text-neutral-500 mb-10">
                                About / Why Tilantra exists
                            </p>
                            <p className="editorial-serif text-3xl md:text-[2.6rem] leading-[1.15] text-neutral-950 dark:text-white italic max-w-sm">
                                “We were tired of explaining ourselves to machines that never remembered us.”
                            </p>
                        </div>
                    </div>

                    {/* Right column — the story */}
                    <div className="col-span-12 md:col-span-6 md:col-start-7">
                        <div className="space-y-7 text-[1.05rem] leading-[1.8] text-neutral-600 dark:text-neutral-400">
                            <p>
                                Tilantra started with a habit we couldn't shake. Every morning, one
                                of us would open a fresh chat and type the same three paragraphs:
                                what the project was, what we'd decided, what mattered. That same
                                month we shipped our first real AI feature and watched the bill
                                triple in ten days. Nothing was broken. Every request simply went
                                to the biggest, most expensive model, whether it needed to or not.
                            </p>
                            <p>
                                Both turned out to be the same problem: tools that are brilliant in
                                the moment and careless with everything around it. Your context,
                                your money, your rules. So we built the layer that
                                cares. <span className="text-neutral-950 dark:text-white font-medium">CapsuleHub</span>{" "}
                                remembers for people. <span className="text-neutral-950 dark:text-white font-medium">Guidera</span>{" "}
                                decides for systems. The intelligence is already here. What's
                                missing is the infrastructure that makes it dependable.
                            </p>
                        </div>

                        <div className="mt-12 pt-8 border-t border-neutral-200 dark:border-neutral-800">
                            <p className="editorial-label text-neutral-400 dark:text-neutral-500">
                                The Tilantra founding team
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default StorySection;
