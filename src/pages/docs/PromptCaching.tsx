import React, { useEffect } from 'react';
import { useDocsOnThisPage } from '../Docs';

const ON_THIS_PAGE = [
    { label: 'Overview', anchor: 'prompt-caching-overview' },
    { label: 'The Problem', anchor: 'prompt-caching-problem' },
    { label: 'Our Solution: Intelligent Caching', anchor: 'prompt-caching-solution' },
    { label: 'How It Works', anchor: 'prompt-caching-how' },
    { label: 'Benefits', anchor: 'prompt-caching-benefits' },
];

const PromptCaching: React.FC = () => {
    const { setLinks } = useDocsOnThisPage();
    useEffect(() => {
        setLinks(ON_THIS_PAGE);
        return () => setLinks([]);
    }, [setLinks]);

    return (
        <div className="max-w-[900px] mx-auto text-foreground font-sans pb-12">
            <h1 id="prompt-caching-overview" className="text-primary font-extrabold text-4xl mb-6">Prompt Caching</h1>
            <p className="text-lg mb-8 leading-relaxed">
                Intelligent prompt caching reduces latency and cost for frequent prompts by serving instant responses for eligible requests—without ever risking privacy or compliance.
            </p>

            <h2 id="prompt-caching-problem" className="text-purple-600 dark:text-purple-400 font-bold text-2xl mt-10 mb-4 scroll-mt-24">The Problem</h2>
            <ul className="list-disc list-inside mb-8 ml-4 space-y-2 text-base">
                <li>Repeatedly generating the same or similar responses wastes time and money.</li>
                <li>Sensitive or dynamic prompts must never be cached.</li>
            </ul>

            <h2 id="prompt-caching-solution" className="text-purple-600 dark:text-purple-400 font-bold text-2xl mt-10 mb-4 scroll-mt-24">Our Solution: Intelligent Caching</h2>
            <ul className="list-disc list-inside mb-8 ml-4 space-y-2 text-base">
                <li><strong>Smart Eligibility:</strong> Only safe, repeatable prompts (like code or summaries) are cached.</li>
                <li><strong>Privacy-First:</strong> Prompts with dynamic or user-specific data are never cached.</li>
                <li><strong>Instant Responses:</strong> Cached results are served instantly, reducing latency and cost.</li>
            </ul>

            <h2 id="prompt-caching-how" className="text-purple-600 dark:text-purple-400 font-bold text-2xl mt-10 mb-4 scroll-mt-24">How It Works</h2>
            <ol className="list-decimal list-inside ml-4 mb-8 text-base space-y-2">
                <li><strong>Eligibility Check:</strong> The system determines if a prompt is safe to cache.</li>
                <li><strong>Cache Storage:</strong> Responses are stored and keyed by prompt and user.</li>
                <li><strong>Cache Retrieval:</strong> On repeat requests, cached responses are returned instantly.</li>
            </ol>

            <h2 id="prompt-caching-benefits" className="text-purple-600 dark:text-purple-400 font-bold text-2xl mt-10 mb-4 scroll-mt-24">Benefits</h2>
            <ul className="list-disc list-inside mb-8 ml-4 space-y-2 text-base">
                <li>Lightning-fast responses for common tasks.</li>
                <li>Lower compute costs.</li>
                <li>No risk of leaking sensitive or unique data.</li>
            </ul>
        </div>
    );
};

export default PromptCaching;
