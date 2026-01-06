import { useState } from "react";
import { Link, useLocation } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Menu, X } from "lucide-react";

const Header = () => {
    const [isMenuOpen, setIsMenuOpen] = useState(false);
    const location = useLocation();

    const navLinks = [
        { name: "Product", href: "/#hero" },
        {
            name: "Solutions",
            href: "/#solutions", // Fallback or main link
            dropdown: [
                { name: "Guidera", href: "/guidera" },
                { name: "Capsule Hub", href: "/capsule-hub" }
            ]
        },
        { name: "Docs", href: "/docs" },
    ];

    const isActive = (href: string) => {
        if (href.startsWith("/#")) return false;
        return location.pathname === href;
    };

    const handleNavClick = (e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
        if (href.startsWith("/#") && location.pathname === "/") {
            const id = href.substring(2);
            const element = document.getElementById(id);
            if (element) {
                e.preventDefault();
                element.scrollIntoView({ behavior: "smooth" });
                window.history.pushState(null, "", href);
            }
        }
        setIsMenuOpen(false);
    };

    return (
        <header className="fixed top-0 left-0 right-0 z-50 bg-background/80 backdrop-blur-xl border-b border-border/50">
            <div className="container mx-auto px-6">
                <div className="flex items-center justify-between h-16">
                    {/* Logo */}
                    <Link to="/" className="flex items-center gap-2">
                        <div className="w-8 h-8 rounded-lg bg-gradient-to-br from-primary to-secondary flex items-center justify-center">
                            <span className="text-primary-foreground font-bold text-sm">T</span>
                        </div>
                        <span className="font-semibold text-lg text-foreground">Tilantra</span>
                    </Link>

                    {/* Desktop Navigation */}
                    <nav className="hidden md:flex items-center gap-1">
                        {navLinks.map((link) => {
                            if (link.dropdown) {
                                return (
                                    <div key={link.name} className="relative group">
                                        <button className="px-4 py-2 rounded-lg text-sm font-medium transition-colors text-muted-foreground hover:text-foreground hover:bg-muted flex items-center gap-1">
                                            {link.name}
                                        </button>
                                        <div className="absolute top-full left-0 pt-2 w-48 opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-200">
                                            <div className="bg-card border border-border rounded-lg shadow-lg overflow-hidden p-1">
                                                {link.dropdown.map((item) => (
                                                    <Link
                                                        key={item.name}
                                                        to={item.href}
                                                        className="block px-4 py-2 text-sm text-muted-foreground hover:text-foreground hover:bg-muted rounded-md transition-colors"
                                                    >
                                                        {item.name}
                                                    </Link>
                                                ))}
                                            </div>
                                        </div>
                                    </div>
                                );
                            }

                            const isHashLink = link.href.startsWith("/#");
                            return isHashLink ? (
                                <a
                                    key={link.name}
                                    href={link.href}
                                    onClick={(e) => handleNavClick(e, link.href)}
                                    className="px-4 py-2 rounded-lg text-sm font-medium transition-colors text-muted-foreground hover:text-foreground hover:bg-muted"
                                >
                                    {link.name}
                                </a>
                            ) : (
                                <Link
                                    key={link.name}
                                    to={link.href}
                                    className={`px-4 py-2 rounded-lg text-sm font-medium transition-colors ${isActive(link.href)
                                        ? "text-primary bg-primary/10"
                                        : "text-muted-foreground hover:text-foreground hover:bg-muted"
                                        }`}
                                >
                                    {link.name}
                                </Link>
                            );
                        })}
                    </nav>

                    {/* Desktop CTA */}
                    <div className="hidden md:flex items-center gap-3">
                        <Link to="/contact">
                            <Button variant="hero" size="sm">
                                Contact Us
                            </Button>
                        </Link>
                    </div>

                    {/* Mobile Menu Button */}
                    <button
                        className="md:hidden p-2 rounded-lg hover:bg-muted transition-colors"
                        onClick={() => setIsMenuOpen(!isMenuOpen)}
                    >
                        {isMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
                    </button>
                </div>

                {/* Mobile Navigation */}
                {isMenuOpen && (
                    <div className="md:hidden py-4 border-t border-border/50 animate-fade-in">
                        <nav className="flex flex-col gap-2">
                            {navLinks.map((link) => {
                                if (link.dropdown) {
                                    return (
                                        <div key={link.name} className="flex flex-col">
                                            <div className="px-4 py-3 rounded-lg text-sm font-medium text-foreground bg-muted/50">
                                                {link.name}
                                            </div>
                                            <div className="pl-6 flex flex-col gap-1 mt-1">
                                                {link.dropdown.map((item) => (
                                                    <Link
                                                        key={item.name}
                                                        to={item.href}
                                                        className="px-4 py-2 rounded-lg text-sm font-medium text-muted-foreground hover:text-foreground hover:bg-muted transition-colors"
                                                        onClick={() => setIsMenuOpen(false)}
                                                    >
                                                        {item.name}
                                                    </Link>
                                                ))}
                                            </div>
                                        </div>
                                    );
                                }
                                const isHashLink = link.href.startsWith("/#");
                                return isHashLink ? (
                                    <a
                                        key={link.name}
                                        href={link.href}
                                        onClick={(e) => handleNavClick(e, link.href)}
                                        className="px-4 py-3 rounded-lg text-sm font-medium transition-colors text-muted-foreground hover:text-foreground hover:bg-muted"
                                    >
                                        {link.name}
                                    </a>
                                ) : (
                                    <Link
                                        key={link.name}
                                        to={link.href}
                                        className={`px-4 py-3 rounded-lg text-sm font-medium transition-colors ${isActive(link.href)
                                            ? "text-primary bg-primary/10"
                                            : "text-muted-foreground hover:text-foreground hover:bg-muted"
                                            }`}
                                        onClick={() => setIsMenuOpen(false)}
                                    >
                                        {link.name}
                                    </Link>
                                );
                            })}
                            <div className="flex flex-col gap-2 mt-4 pt-4 border-t border-border/50">
                                <Link to="/contact">
                                    <Button variant="hero" className="w-full">
                                        Contact Us
                                    </Button>
                                </Link>
                            </div>
                        </nav>
                    </div>
                )}
            </div>
        </header>
    );
};

export default Header;
