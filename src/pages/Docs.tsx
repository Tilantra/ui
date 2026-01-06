import { createContext, useContext, useState, useEffect } from 'react';
import { Outlet, useLocation } from 'react-router-dom';
import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";

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

    if (!links || links.length === 0) return null;

    return (
        <div style={{
            width: 240,
            flexShrink: 0,
            position: 'sticky',
            top: 100,
            alignSelf: 'flex-start',
            maxHeight: 'calc(100vh - 100px)',
            overflowY: 'auto',
            paddingLeft: 24,
            borderLeft: '1px solid #e5e7eb',
            display: 'none', // Hidden on mobile by default, handled by media queries ideally
            // We'll use a responsive generic approach below
        }} className="hidden lg:block">
            <h4 style={{ fontSize: '0.9rem', fontWeight: 600, color: '#111', marginBottom: 16, textTransform: 'uppercase', letterSpacing: '0.05em' }}>
                On This Page
            </h4>
            <ul style={{ listStyle: 'none', padding: 0, margin: 0 }}>
                {links.map((link) => (
                    <li key={link.anchor} style={{ marginBottom: 10 }}>
                        <a
                            href={`#${link.anchor}`}
                            style={{
                                textDecoration: 'none',
                                color: '#6b7280',
                                fontSize: '0.92rem',
                                display: 'block',
                                transition: 'color 0.2s'
                            }}
                            onMouseEnter={(e) => e.currentTarget.style.color = '#2563eb'}
                            onMouseLeave={(e) => e.currentTarget.style.color = '#6b7280'}
                        >
                            {link.label}
                        </a>
                    </li>
                ))}
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
            <div className="min-h-screen bg-background flex flex-col">
                <Header />
                <div className="flex-1">
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
