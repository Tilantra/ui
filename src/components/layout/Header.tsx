import { useState, useEffect, useRef } from "react";
import { Link, useLocation } from "react-router-dom";
import { ThemeToggle } from "@/components/ui/theme-toggle";
import { motion, AnimatePresence } from "framer-motion";
import { ChevronDown } from "lucide-react";

const AnimatedNavLink = ({ href, children, onClick }: { href: string; children: React.ReactNode; onClick?: (e: React.MouseEvent<HTMLAnchorElement>) => void }) => (
    <a
        href={href}
        onClick={onClick}
        className="group relative inline-block overflow-hidden text-sm"
        style={{ height: "1.25rem", lineHeight: "1.25rem" }}
    >
        <div className="flex flex-col transition-transform duration-300 ease-out group-hover:-translate-y-1/2">
            <span className="block text-slate-500 dark:text-white/45 h-5">{children}</span>
            <span className="block text-slate-900 dark:text-white h-5">{children}</span>
        </div>
    </a>
);

const Header = () => {
    const [isOpen, setIsOpen] = useState(false);
    const [productsOpen, setProductsOpen] = useState(false);
    const [shape, setShape] = useState<"rounded-full" | "rounded-xl">("rounded-full");
    const shapeRef = useRef<ReturnType<typeof setTimeout> | null>(null);
    const location = useLocation();

    useEffect(() => {
        if (shapeRef.current) clearTimeout(shapeRef.current);
        if (isOpen) {
            setShape("rounded-xl");
        } else {
            shapeRef.current = setTimeout(() => setShape("rounded-full"), 300);
        }
        return () => { if (shapeRef.current) clearTimeout(shapeRef.current); };
    }, [isOpen]);

    const handleHashClick = (e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
        if (href.startsWith("/#") && location.pathname === "/") {
            const id = href.substring(2);
            const el = document.getElementById(id);
            if (el) {
                e.preventDefault();
                el.scrollIntoView({ behavior: "smooth" });
            }
        }
        setIsOpen(false);
    };

    const navLinks = [
        { name: "Solutions", href: "/#solutions" },
        { name: "Docs",      href: "/docs" },
    ];

    return (
        <header
            className={`fixed top-5 left-1/2 -translate-x-1/2 z-50 flex flex-col items-center
                pl-5 pr-5 py-2.5 backdrop-blur-xl
                border border-white/10 ring-1 ring-white/5 bg-background/40 shadow-[0_4px_30px_rgba(0,0,0,0.1)]
                w-[calc(100%-2rem)] sm:w-auto
                transition-[border-radius] duration-300 ${shape}`}
        >
            <div className="flex items-center justify-between w-full gap-x-6 sm:gap-x-10">
                {/* Logo — clip-path locks height without cutting horizontally */}
                <Link
                    to="/"
                    className="h-8 min-w-[94px] flex items-center shrink-0"
                    style={{ clipPath: 'inset(0 -500px)' }}
                    onClick={() => setIsOpen(false)}
                >
                    {/* Light Mode */}
                    <img
                        src="/Tilantra_blueLOGO.png"
                        alt="Tilantra"
                        className="h-8 w-auto dark:hidden brightness-200"
                    />
                    {/* Dark Mode — scale up visually; clip-path prevents height change */}
                    <img
                        src="/Tilantra-logo-white.png"
                        alt="Tilantra"
                        className="hidden dark:block"
                        style={{ height: '32px', width: 'auto', transform: 'scale(2)', transformOrigin: 'left center' }}
                    />
                </Link>

                {/* Desktop nav */}
                <nav className="hidden sm:flex items-center gap-6">
                    {/* Products dropdown */}
                    <div className="relative"
                        onMouseEnter={() => setProductsOpen(true)}
                        onMouseLeave={() => setProductsOpen(false)}
                    >
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
                                    className="absolute top-full left-1/2 -translate-x-1/2 mt-3 w-80 p-2 rounded-2xl border border-white/15 dark:border-white/10 bg-white/95 dark:bg-[hsl(224,28%,7%)]/95 backdrop-blur-xl shadow-2xl shadow-black/20"
                                >
                                    <Link to="/guidera" onClick={() => setProductsOpen(false)}
                                        className="flex items-start gap-3 p-3 rounded-xl hover:bg-slate-50 dark:hover:bg-white/[0.04] transition-all group/item"
                                    >
                                        <div className="w-9 h-9 rounded-xl bg-blue-500/10 flex items-center justify-center shrink-0">
                                            <img src="/GuideraLogo.png" alt="Guidera" className="h-5 object-contain" />
                                        </div>
                                        <div>
                                            <div className="text-sm font-semibold text-slate-900 dark:text-white group-hover/item:text-blue-600 dark:group-hover/item:text-blue-400 transition-colors">Guidera</div>
                                            <div className="text-xs text-slate-500 dark:text-white/30 leading-snug mt-0.5">AI gateway — routing, compliance &amp; cost control</div>
                                        </div>
                                    </Link>
                                    <div className="my-1 h-px bg-slate-100 dark:bg-white/[0.06] mx-3" />
                                    <Link to="/capsule-hub" onClick={() => setProductsOpen(false)}
                                        className="flex items-start gap-3 p-3 rounded-xl hover:bg-violet-50/50 dark:hover:bg-violet-500/[0.06] transition-all group/item"
                                    >
                                        <div className="w-9 h-9 rounded-xl bg-violet-500/10 flex items-center justify-center shrink-0">
                                            <img src="/CapsuleHubLogo.png" alt="Capsule Hub" className="h-5 object-contain" />
                                        </div>
                                        <div>
                                            <div className="text-sm font-semibold text-slate-900 dark:text-white group-hover/item:text-violet-600 dark:group-hover/item:text-violet-400 transition-colors">Capsule Hub</div>
                                            <div className="text-xs text-slate-500 dark:text-white/30 leading-snug mt-0.5">Context layer — capture once, inject into any AI</div>
                                        </div>
                                    </Link>
                                </motion.div>
                            )}
                        </AnimatePresence>
                    </div>

                    {navLinks.map((link) => (
                        <AnimatedNavLink
                            key={link.name}
                            href={link.href}
                            onClick={(e) => handleHashClick(e, link.href)}
                        >
                            {link.name}
                        </AnimatedNavLink>
                    ))}
                </nav>

                {/* Desktop CTAs */}
                <div className="hidden sm:flex items-center gap-2">
                    <ThemeToggle />
                    <Link
                        to="/book-demo"
                        className="px-4 py-1.5 text-sm text-slate-600 dark:text-white/50 hover:text-slate-900 dark:hover:text-white border border-slate-200 hover:border-slate-300 dark:border-white/10 rounded-full hover:bg-slate-50 dark:hover:bg-white/[0.06] transition-all duration-200"
                    >
                        Book Demo
                    </Link>
                    <Link
                        to="/contact"
                        className="px-4 py-1.5 text-sm font-medium text-white bg-gradient-to-br from-blue-500 to-cyan-500 rounded-full hover:from-blue-400 hover:to-cyan-400 transition-all duration-200"
                    >
                        Contact Us
                    </Link>
                </div>

                {/* Mobile toggle */}
                <button
                    className="sm:hidden flex items-center justify-center w-8 h-8 text-slate-500 hover:text-slate-900 dark:text-white/50 dark:hover:text-white focus:outline-none"
                    onClick={() => setIsOpen(!isOpen)}
                    aria-label={isOpen ? "Close menu" : "Open menu"}
                >
                    {isOpen ? (
                        <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                        </svg>
                    ) : (
                        <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
                        </svg>
                    )}
                </button>
            </div>

            {/* Mobile menu */}
            <div className={`sm:hidden flex flex-col items-center w-full transition-all ease-in-out duration-300 overflow-hidden ${isOpen ? "max-h-64 opacity-100 pt-4" : "max-h-0 opacity-0 pt-0 pointer-events-none"}`}>
                <nav className="flex flex-col items-center gap-3 text-sm w-full pb-2">
                    {navLinks.map((link) => (
                        <a
                            key={link.name}
                            href={link.href}
                            onClick={(e) => handleHashClick(e, link.href)}
                            className="text-slate-500 hover:text-slate-900 dark:text-white/50 dark:hover:text-white transition-colors py-1"
                        >
                            {link.name}
                        </a>
                    ))}
                </nav>
                <div className="flex flex-col gap-2 w-full pt-3 border-t border-white/[0.06]">
                    <div className="flex justify-center mb-2">
                        <ThemeToggle />
                    </div>
                    <Link
                        to="/book-demo"
                        onClick={() => setIsOpen(false)}
                        className="text-center px-4 py-2 text-sm text-slate-600 dark:text-white/60 border border-slate-200 dark:border-white/10 rounded-lg hover:bg-slate-50 dark:hover:bg-white/[0.06] transition-all"
                    >
                        Book Demo
                    </Link>
                    <Link
                        to="/contact"
                        onClick={() => setIsOpen(false)}
                        className="text-center px-4 py-2 text-sm font-medium text-white bg-gradient-to-br from-blue-500 to-cyan-500 rounded-lg hover:from-blue-400 hover:to-cyan-400 transition-all"
                    >
                        Contact Us
                    </Link>
                </div>
            </div>
        </header>
    );
};

export default Header;
