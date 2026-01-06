import React, { useEffect } from 'react';
import { useDocsOnThisPage } from '../Docs';

const ON_THIS_PAGE = [
    { label: 'Overview', anchor: 'uptime-optimization-overview' },
    { label: 'The Problem', anchor: 'uptime-optimization-problem' },
    { label: 'Our Solution: Always-On Reliability', anchor: 'uptime-optimization-solution' },
    { label: 'How It Works', anchor: 'uptime-optimization-how' },
    { label: 'Benefits', anchor: 'uptime-optimization-benefits' },
];

const UptimeOptimization: React.FC = () => {
    const { setLinks } = useDocsOnThisPage();
    useEffect(() => {
        setLinks(ON_THIS_PAGE);
        return () => setLinks([]);
    }, [setLinks]);

    return (
        <div className="max-w-[900px] mx-auto text-foreground font-sans pb-12">
            <h1 id="uptime-optimization-overview" className="text-primary font-extrabold text-4xl mb-6">Uptime Optimization</h1>
            <p className="text-lg mb-8 leading-relaxed">
                Always-on reliability ensures your AI features are available, responsive, and resilient to provider outages or slowdowns.
            </p>

            <h2 id="uptime-optimization-problem" className="text-purple-600 dark:text-purple-400 font-bold text-2xl mt-10 mb-4 scroll-mt-24">The Problem</h2>
            <ul className="list-disc list-inside mb-8 ml-4 space-y-2 text-base">
                <li>Downtime or slow responses can disrupt your business and frustrate users.</li>
            </ul>

            <h2 id="uptime-optimization-solution" className="text-purple-600 dark:text-purple-400 font-bold text-2xl mt-10 mb-4 scroll-mt-24">Our Solution: Always-On Reliability</h2>
            <ul className="list-disc list-inside mb-8 ml-4 space-y-2 text-base">
                <li><strong>Multi-Model Fallback:</strong> If the top model is slow or unavailable, the system instantly retries with the next-best.</li>
                <li><strong>Rate Limiting:</strong> Per-user rate limits prevent abuse and ensure fair access.</li>
                <li><strong>Real-Time Monitoring:</strong> The system tracks health and performance to keep everything running smoothly.</li>
            </ul>

            <h2 id="uptime-optimization-how" className="text-purple-600 dark:text-purple-400 font-bold text-2xl mt-10 mb-4 scroll-mt-24">How It Works</h2>
            <ol className="list-decimal list-inside ml-4 mb-8 text-base space-y-2">
                <li><strong>Model Health Checks:</strong> The system monitors model availability and performance.</li>
                <li><strong>Automatic Fallbacks:</strong> If a model fails, the next-best is used without delay.</li>
                <li><strong>Rate Limiting:</strong> Usage is managed to ensure fairness and stability.</li>
            </ol>

            <h2 id="uptime-optimization-benefits" className="text-purple-600 dark:text-purple-400 font-bold text-2xl mt-10 mb-4 scroll-mt-24">Benefits</h2>
            <ul className="list-disc list-inside mb-8 ml-4 space-y-2 text-base">
                <li>Your AI features are always available.</li>
                <li>Users never see an error due to provider downtime.</li>
                <li>Peace of mind for your business.</li>
            </ul>
        </div>
    );
};

export default UptimeOptimization;
