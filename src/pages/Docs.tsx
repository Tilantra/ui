import { createContext, useContext, useState, useEffect } from 'react';
import { Outlet, useLocation } from 'react-router-dom';
import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import { motion } from "framer-motion";

// --- Context Definition ---
interface LinkItem {
    label: string;
    anchor: string;
}

interface DocsContextType {
    links: LinkItem[];
    setLinks: (links: LinkItem[]) => void;
}

const DocsContext = createContext<DocsContextType>({
    links: [],
    setLinks: () => { },
});

export const useDocsOnThisPage = () => useContext(DocsContext);

// --- Sidebar Component ---
const RightSidebar = () => {
    const { links } = useDocsOnThisPage();
    const [activeId, setActiveId] = useState<string>('');

    useEffect(() => {
        if (!links.length) return;
        
        const observer = new IntersectionObserver(
            (entries) => {
                entries.forEach((entry) => {
                    if (entry.isIntersecting) {
                        setActiveId(entry.target.id);
                    }
                });
            },
            { rootMargin: '-20% 0px -60% 0px' }
        );

        links.forEach((link) => {
            const el = document.getElementById(link.anchor);
            if (el) observer.observe(el);
        });

        return () => observer.disconnect();
    }, [links]);

    if (!links || links.length === 0) return null;

    return (
        <div className="hidden lg:block sticky top-32 self-start w-64 max-h-[calc(100vh-120px)] overflow-y-auto p-6 rounded-3xl bg-white/70 dark:bg-white/[0.03] backdrop-blur-xl border border-slate-200 dark:border-white/10 shadow-xl custom-scrollbar z-50">
            <h4 className="text-sm font-bold text-slate-900 dark:text-white/90 mb-4 uppercase tracking-widest pl-2">
                On This Page
            </h4>
            <ul className="flex flex-col gap-2 relative border-l border-slate-200 dark:border-white/10 ml-2 pl-4">
                {links.map((link) => {
                    const isActive = activeId === link.anchor;
                    return (
                        <li key={link.anchor} className="relative">
                            {isActive && (
                                <motion.div 
                                    layoutId="activeIndicator"
                                    className="absolute -left-[17px] top-0 bottom-0 w-[2px] bg-cyan-400 shadow-[0_0_10px_rgba(34,211,238,0.8)]"
                                    transition={{ type: "spring", stiffness: 300, damping: 30 }}
                                />
                            )}
                            <a
                                href={`#${link.anchor}`}
                                onClick={(e) => {
                                    e.preventDefault();
                                    document.getElementById(link.anchor)?.scrollIntoView({ behavior: 'smooth' });
                                }}
                                className={`block text-sm transition-all duration-200 ${isActive ? 'text-cyan-400 font-bold' : 'text-slate-500 dark:text-white/40 hover:text-slate-900 dark:hover:text-white/80'}`}
                            >
                                {link.label}
                            </a>
                        </li>
                    );
                })}
            </ul>
        </div>
    );
};

const Docs = () => {
    const [links, setLinks] = useState<LinkItem[]>([]);
    const location = useLocation();

    // Scroll to top on route change
    useEffect(() => {
        window.scrollTo(0, 0);
    }, [location.pathname]);

    return (
        <DocsContext.Provider value={{ links, setLinks }}>
            <div className="min-h-screen bg-transparent text-foreground flex flex-col relative overflow-hidden">
                <div className="absolute top-0 right-0 -z-10 w-[600px] h-[600px] bg-cyan-900/10 rounded-full blur-[120px] -mr-64 -mt-64" />
                <div className="absolute bottom-0 left-0 -z-10 w-[600px] h-[600px] bg-blue-900/10 rounded-full blur-[120px] -ml-64 -mb-64" />
                <Header />
                <div className="flex-1 relative z-10">
                    {/* If we are on the landing page (no sidebar usually), we just render Outlet.
                        If we are on a doc page, the layout might need to accommodate the sidebar. 
                        We can use a flex container for the main content area. */}

                    <div className="flex justify-center">
                        {/* Content Wrapper */}
                        <div className="w-full max-w-[1400px] flex items-start gap-10 px-6 pt-24 pb-16">

                            {/* Main Content Area */}
                            <main className="flex-1 w-full min-w-0">
                                <Outlet />
                            </main>

                            {/* Right Sidebar - only renders if there are links */}
                            <RightSidebar />
                        </div>
                    </div>
                </div>
                <Footer />
            </div>
        </DocsContext.Provider>
    );
};

export default Docs;
