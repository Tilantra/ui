import { useLocation, Link } from "react-router-dom";
import { useEffect } from "react";
import EditorialHeader from "@/components/editorial/EditorialHeader";
import EditorialFooter from "@/components/editorial/EditorialFooter";

const NotFound = () => {
    const location = useLocation();

    useEffect(() => {
        console.error("404 Error: User attempted to access non-existent route:", location.pathname);
    }, [location.pathname]);

    return (
        <div className="editorial min-h-screen flex flex-col">
            <EditorialHeader />
            <main className="flex-1 flex items-center">
                <div className="mx-auto max-w-[1320px] w-full px-6 md:px-10 py-24">
                    <div className="flex items-center gap-4 mb-8">
                        <span className="h-[3px] w-10 bg-orange-500" />
                        <p className="editorial-label text-neutral-400 dark:text-neutral-500">
                            404 | Page not found
                        </p>
                    </div>
                    <h1 className="editorial-serif text-[clamp(2.8rem,7vw,6rem)] leading-[1.02] text-neutral-950 dark:text-white max-w-3xl">
                        This page doesn't exist.
                    </h1>
                    <p className="mt-8 text-lg leading-relaxed text-neutral-500 dark:text-neutral-400 max-w-md">
                        The address may have changed, or it never was. Everything
                        we build lives one click from home.
                    </p>
                    <div className="mt-10 flex items-center gap-4 flex-wrap">
                        <Link
                            to="/"
                            className="inline-flex items-center gap-3 px-7 py-4 text-sm font-semibold bg-neutral-950 text-white dark:bg-white dark:text-neutral-950 hover:bg-violet-700 hover:text-white dark:hover:bg-violet-400 dark:hover:text-neutral-950 transition-colors"
                        >
                            Back to home <span>→</span>
                        </Link>
                        <Link
                            to="/contact"
                            className="inline-flex items-center gap-3 px-7 py-4 text-sm font-semibold border border-neutral-300 dark:border-neutral-700 text-neutral-950 dark:text-white hover:border-neutral-950 dark:hover:border-white transition-colors"
                        >
                            Contact us
                        </Link>
                    </div>
                </div>
            </main>
            <EditorialFooter />
        </div>
    );
};

export default NotFound;
