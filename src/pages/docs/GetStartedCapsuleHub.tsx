import React, { useEffect } from 'react';
import { useDocsOnThisPage } from '../Docs';

const ON_THIS_PAGE = [
    { label: 'Registration', anchor: 'capsule-registration' },
    { label: 'Browser Extension', anchor: 'capsule-extension' },
    { label: 'Using Capsules', anchor: 'capsule-usage' },
];

const GetStartedCapsuleHub: React.FC = () => {
    const { setLinks } = useDocsOnThisPage();
    useEffect(() => {
        setLinks(ON_THIS_PAGE);
        return () => setLinks([]);
    }, [setLinks]);

    return (
        <div className="max-w-[900px] mx-auto text-foreground font-sans pb-12">
            <h1 className="text-primary font-extrabold text-4xl mb-6">Getting Started with Capsule Hub</h1>

            <h2 id="capsule-registration" className="text-purple-600 dark:text-purple-400 font-bold text-2xl mt-10 mb-4 scroll-mt-24">Registration</h2>
            <p className="text-base mb-6 leading-relaxed">
                First, register as a user at <a href="https://guidera.tilantra.com/login" className="text-primary hover:underline font-semibold" target="_blank" rel="noreferrer">https://guidera.tilantra.com/login</a>.
            </p>

            <h2 id="capsule-extension" className="text-purple-600 dark:text-purple-400 font-bold text-2xl mt-10 mb-4 scroll-mt-24">Browser Extension</h2>
            <p className="text-base mb-6 leading-relaxed">
                After registering, download the browser extension from the Chrome Web Store:
            </p>
            <p className="mb-6">
                <a href="https://chromewebstore.google.com/detail/capsule-hub-by-tilantra/" className="inline-flex items-center justify-center px-6 py-3 border border-transparent text-base font-medium rounded-md text-white bg-primary hover:bg-primary/90 transition-colors" target="_blank" rel="noreferrer">
                    Download Extension
                </a>
            </p>

            <h2 id="capsule-usage" className="text-purple-600 dark:text-purple-400 font-bold text-2xl mt-10 mb-4 scroll-mt-24">Using Capsules</h2>
            <ul className="list-disc list-inside mb-8 ml-4 space-y-4 text-base">
                <li>
                    <strong>Generate & Inject:</strong> You can generate a capsule from an existing chat and simply drag and drop the capsule to Claude, Gemini, or DeepSeek.
                </li>
                <li>
                    <strong>Versioning:</strong> You can version capsules as well, allowing you to track changes and manage updates to your context libraries.
                </li>
            </ul>
        </div>
    );
};

export default GetStartedCapsuleHub;
