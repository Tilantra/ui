import { Link } from "react-router-dom";
import type { Accent } from "./EditorialHeader";

const footerLink =
    "editorial-label text-neutral-400 dark:text-neutral-500 hover:text-neutral-950 dark:hover:text-white transition-colors";

/* Same comparison scaffold as EditorialHeader — collapse once a color wins. */
const ACCENT_TEXT: Record<Accent, string> = {
    orange: "group-hover:text-orange-600 dark:group-hover:text-orange-400",
    lime: "group-hover:text-lime-600 dark:group-hover:text-lime-400",
    crimson: "group-hover:text-red-600 dark:group-hover:text-red-400",
};

const EditorialFooter = ({ accent = "orange" }: { accent?: Accent }) => {
    return (
        <footer className="bg-white dark:bg-[#0c0c0e]">
            {/* Closing routing prompt — the page's one job, restated */}
            <div className="border-t border-neutral-200 dark:border-neutral-800">
                <div className="mx-auto max-w-[1320px] px-6 md:px-10 py-20 md:py-28">
                    <p className="editorial-label text-neutral-400 dark:text-neutral-500 mb-8 text-center">Still deciding?</p>
                    <div className="flex flex-col md:flex-row items-center justify-center gap-8 md:gap-28">
                        <a
                            href="https://capsulehub.tilantra.com"
                            target="_blank"
                            rel="noreferrer"
                            className="group flex items-baseline gap-4"
                        >
                            <span className={`text-2xl md:text-4xl text-neutral-300 dark:text-neutral-600 group-hover:-translate-x-2 transition-all ${ACCENT_TEXT[accent]}`}>
                                ←
                            </span>
                            <span className={`text-3xl md:text-5xl font-semibold tracking-[-0.03em] text-neutral-950 dark:text-white transition-colors ${ACCENT_TEXT[accent]}`}>
                                I work with AI
                            </span>
                        </a>
                        <Link to="/guidera" className="group flex items-baseline gap-4">
                            <span className="text-3xl md:text-5xl font-semibold tracking-[-0.03em] text-neutral-950 dark:text-white group-hover:text-violet-700 dark:group-hover:text-violet-400 transition-colors">
                                I ship AI
                            </span>
                            <span className="text-2xl md:text-4xl text-neutral-300 dark:text-neutral-600 group-hover:text-violet-700 dark:group-hover:text-violet-400 group-hover:translate-x-2 transition-all">
                                →
                            </span>
                        </Link>
                    </div>
                </div>
            </div>

            {/* Bottom bar */}
            <div className="border-t border-neutral-200 dark:border-neutral-800">
                <div className="mx-auto max-w-[1320px] px-6 md:px-10 py-8 flex flex-col md:flex-row items-start md:items-center justify-between gap-4">
                    <div className="flex items-center gap-8 flex-wrap">
                        <img src="/Tilantra_blueLOGO.png" alt="Tilantra" className="h-5 w-auto dark:hidden" />
                        <img src="/Tilantra-logo-white-cropped.png" alt="Tilantra" className="hidden dark:block h-5 w-auto" />
                        <a href="https://capsulehub.tilantra.com" target="_blank" rel="noreferrer" className={footerLink}>
                            CapsuleHub
                        </a>
                        <Link to="/guidera" className={footerLink}>
                            Guidera
                        </Link>
                        <Link to="/contact" className={footerLink}>
                            Contact
                        </Link>
                        <a
                            href="https://www.linkedin.com/company/tilantra/"
                            target="_blank"
                            rel="noopener noreferrer"
                            className={footerLink}
                        >
                            LinkedIn
                        </a>
                        <Link to="/privacy-policy" className={footerLink}>
                            Privacy
                        </Link>
                    </div>
                    <p className="editorial-label text-neutral-300 dark:text-neutral-600">© 2026 Tilantra</p>
                </div>
            </div>
        </footer>
    );
};

export default EditorialFooter;
