import { Link } from "react-router-dom";

const footerLinks = {
    Product: [
        { name: "Features", href: "/#features" },
        { name: "Guidera", href: "/guidera" },
        { name: "Capsule Hub", href: "/capsule-hub" },
        { name: "Changelog", href: "/docs" },
    ],
    Resources: [
        { name: "Documentation", href: "/docs" },
        { name: "API Reference", href: "/docs" },
        { name: "Quickstart", href: "/docs/quickstart" },
        { name: "MCP Docs", href: "/docs/capsule-hub-mcp" },
    ],
    Company: [
        { name: "About", href: "/#about-us" },
        { name: "Contact", href: "/contact" },
        { name: "Careers", href: "/contact" },
    ],
    Legal: [
        { name: "Privacy Policy", href: "/docs/privacy-policy" },
        { name: "Terms of Service", href: "/docs/terms-of-service" },
        { name: "Security", href: "/docs" },
        { name: "Compliance", href: "/docs" },
    ],
};

const Footer = () => {
    return (
        <footer className="bg-background border-t border-slate-200 dark:border-white/[0.06]">
            {/* Top glow line */}
            <div className="h-px w-full bg-gradient-to-r from-transparent via-blue-500/20 to-transparent" />

            <div className="container mx-auto px-6 py-14">
                <div className="grid grid-cols-2 md:grid-cols-5 gap-10">
                    {/* Brand column */}
                    <div className="col-span-2 md:col-span-1">
                        <Link to="/" className="flex items-center h-7 overflow-hidden mb-4">
                            <img
                                src="/Tilantra_blueLOGO.png"
                                alt="Tilantra"
                                className="h-7 w-auto dark:hidden"
                            />
                            <img
                                src="/Tilantra-logo-white.png"
                                alt="Tilantra"
                                className="hidden dark:block"
                                style={{ height: '28px', width: 'auto', transform: 'scale(2)', transformOrigin: 'left center' }}
                            />
                        </Link>
                        <p className="text-sm text-slate-500 dark:text-white/25 leading-relaxed max-w-[180px]">
                            Enterprise AI orchestration, simplified.
                        </p>
                    </div>

                    {/* Link columns */}
                    {Object.entries(footerLinks).map(([category, links]) => (
                        <div key={category}>
                            <h4 className="text-xs font-semibold text-slate-600 dark:text-white/50 uppercase tracking-widest mb-4">{category}</h4>
                            <ul className="space-y-2.5">
                                {links.map((link) => (
                                    <li key={link.name}>
                                        <Link
                                            to={link.href}
                                            className="text-sm text-slate-500 dark:text-white/25 hover:text-slate-900 dark:hover:text-white/70 transition-colors duration-150"
                                        >
                                            {link.name}
                                        </Link>
                                    </li>
                                ))}
                            </ul>
                        </div>
                    ))}
                </div>

                {/* Bottom bar */}
                <div className="mt-12 pt-8 border-t border-slate-200 dark:border-white/[0.05] flex flex-col md:flex-row justify-between items-center gap-4">
                    <p className="text-xs text-slate-500 dark:text-white/20">
                        © 2026 Tilantra. All rights reserved.
                    </p>
                    <div className="flex items-center gap-5">
                        {/* LinkedIn */}
                        <a 
                            href="https://www.linkedin.com/company/tilantra/" 
                            target="_blank" 
                            rel="noopener noreferrer" 
                            aria-label="LinkedIn" 
                            className="text-slate-500 dark:text-white/20 hover:text-blue-500 dark:hover:text-white/60 transition-colors"
                        >
                            <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
                                <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 23.2 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
                            </svg>
                        </a>
                    </div>
                </div>
            </div>
        </footer>
    );
};

export default Footer;
