import { Link } from "react-router-dom";
import { useTheme } from "@/components/ui/theme-provider";

export type Accent = "orange" | "lime" | "crimson";

/* Color-comparison scaffold — pass accent="lime" or "crimson" per page to
   A/B the site's second color against the default orange. Once a winner
   is picked, collapse this back to a single hardcoded class. */
const ACCENT_TEXT: Record<Accent, string> = {
    orange: "group-hover:text-orange-600 dark:group-hover:text-orange-400",
    lime: "group-hover:text-lime-600 dark:group-hover:text-lime-400",
    crimson: "group-hover:text-red-600 dark:group-hover:text-red-400",
};
const ACCENT_TEXT_HOVER: Record<Accent, string> = {
    orange: "hover:text-orange-600 dark:hover:text-orange-400",
    lime: "hover:text-lime-600 dark:hover:text-lime-400",
    crimson: "hover:text-red-600 dark:hover:text-red-400",
};
const ACCENT_BG_HOVER: Record<Accent, string> = {
    orange: "hover:bg-orange-500 dark:hover:bg-orange-400",
    lime: "hover:bg-lime-500 dark:hover:bg-lime-400",
    crimson: "hover:bg-red-600 dark:hover:bg-red-500",
};

/* On the home page, intercept hash links and smooth-scroll.
   On other pages the plain href performs a full navigation to /#id. */
const scrollTo = (id: string) => (e: React.MouseEvent) => {
    const el = document.getElementById(id);
    if (el) {
        e.preventDefault();
        el.scrollIntoView({ behavior: "smooth" });
    }
};

/* Bold + accent on hover; the invisible bold twin reserves the width
   so neighbouring links don't shift when the weight changes. */
const NavLabel = ({ children, accent }: { children: string; accent: Accent }) => (
    <span className="grid">
        <span className={`col-start-1 row-start-1 group-hover:font-bold transition-colors ${ACCENT_TEXT[accent]}`}>
            {children}
        </span>
        <span className="col-start-1 row-start-1 font-bold invisible" aria-hidden>
            {children}
        </span>
    </span>
);

const navLinkClass = "group editorial-label text-neutral-500 dark:text-neutral-400";

const ThemeToggle = ({ accent }: { accent: Accent }) => {
    const { setTheme } = useTheme();
    /* ︎ forces the text-style glyph so the symbols render in
       currentColor instead of as yellow emoji */
    const btnClass =
        `items-center justify-center w-10 h-10 text-3xl leading-none text-neutral-500 dark:text-neutral-400 transition-colors ${ACCENT_TEXT_HOVER[accent]}`;
    return (
        <>
            <button
                onClick={() => setTheme("dark")}
                aria-label="Switch to dark mode"
                title="Switch to dark mode"
                className={`flex dark:hidden ${btnClass}`}
            >
                {"☽︎"}
            </button>
            <button
                onClick={() => setTheme("light")}
                aria-label="Switch to light mode"
                title="Switch to light mode"
                className={`hidden dark:flex ${btnClass}`}
            >
                {"☀︎"}
            </button>
        </>
    );
};

const EditorialHeader = ({ accent = "orange" }: { accent?: Accent }) => {
    return (
        <header className="sticky top-0 z-50 bg-white dark:bg-[#0c0c0e] border-b border-neutral-200 dark:border-neutral-800">
            <div className="mx-auto max-w-[1320px] px-6 md:px-10 h-16 flex items-center justify-between">
                <Link to="/" className="flex items-center shrink-0">
                    <img src="/Tilantra_blueLOGO.png" alt="Tilantra" className="h-9 w-auto dark:hidden" />
                    <img src="/Tilantra-logo-white-cropped.png" alt="Tilantra" className="hidden dark:block h-8 w-auto" />
                </Link>

                <nav className="flex items-center gap-6 md:gap-10">
                    <a href="/#products" onClick={scrollTo("products")} className={navLinkClass}>
                        <NavLabel accent={accent}>Products</NavLabel>
                    </a>
                    <a href="/#about" onClick={scrollTo("about")} className={`${navLinkClass} hidden sm:block`}>
                        <NavLabel accent={accent}>About</NavLabel>
                    </a>
                    <ThemeToggle accent={accent} />
                    <Link
                        to="/contact"
                        className={`editorial-label px-4 py-2 bg-neutral-950 text-white dark:bg-white dark:text-neutral-950 hover:text-white dark:hover:text-neutral-950 transition-colors ${ACCENT_BG_HOVER[accent]}`}
                    >
                        Contact
                    </Link>
                </nav>
            </div>
        </header>
    );
};

export default EditorialHeader;
