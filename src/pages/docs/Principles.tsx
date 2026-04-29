import React, { useEffect } from 'react';
import { useDocsOnThisPage } from '../Docs';
import { CodeBlock } from '@/components/ui/code-block';

const ON_THIS_PAGE = [
    { label: 'Principles', anchor: 'principles' },
    { label: 'Configuration Example', anchor: 'configuration-example' },
];

const Principles: React.FC = () => {
    const { setLinks } = useDocsOnThisPage();
    useEffect(() => {
        setLinks(ON_THIS_PAGE);
        return () => setLinks([]);
    }, [setLinks]);

    const principles = [
        {
            title: 'Modularity',
            desc: 'Plug in new models, providers, and rules without code changes. Guidera is designed to be flexible and future-proof, so you can adapt to the rapidly evolving AI landscape.'
        },
        {
            title: 'Cost Efficiency',
            desc: 'Guidera scouts for the best prices, lowest latencies, and highest throughput across dozens of providers, letting you choose how to prioritize them.'
        },
        {
            title: 'Compliance-First',
            desc: 'All data is checked for PII, policy violations, and output risks. We help you meet your regulatory and ethical obligations.'
        },
        {
            title: 'Provider Agnosticism',
            desc: 'No lock-in. Use any supported LLM provider, or bring your own. Switch between models and providers without changing your code.'
        },
        {
            title: 'Enterprise Security',
            desc: 'All API calls are authenticated, data is encrypted, and logs are available for audit. Security is built into every layer of Guidera.'
        },
        {
            title: 'Real-World Insights',
            desc: 'Be the first to take advantage of new models. See real-world data of how often models are used for different purposes. Stay up to date in our Discord channel.'
        },
        {
            title: 'Consolidated Billing',
            desc: 'Simple and transparent billing, regardless of how many providers you use. All your usage and costs in one place.'
        },
        {
            title: 'Higher Availability',
            desc: 'Fallback providers and automatic, smart routing mean your requests still work even when providers go down.'
        },
        {
            title: 'Higher Rate Limits',
            desc: 'Guidera works directly with providers to offer better rate limits and more throughput.'
        },
    ];

    return (
        <div className="max-w-[900px] mx-auto text-foreground font-sans pb-12">
            <h1 id="principles" className="text-primary font-extrabold text-4xl mb-6">Principles</h1>
            <p className="text-lg mb-8 leading-relaxed text-muted-foreground">
                Guidera helps developers source and optimize AI usage. We believe the future is multi-model and multi-provider. Here are our core principles:
            </p>

            <ul className="space-y-6 mb-8">
                {principles.map((p) => (
                    <li key={p.title} className="rounded-xl border border-purple-200 bg-purple-50/50 dark:bg-purple-900/10 dark:border-purple-800 p-6 shadow-sm hover:shadow-md transition-shadow">
                        <div className="text-purple-600 dark:text-purple-400 font-bold text-lg mb-2">{p.title}</div>
                        <div className="text-foreground text-base leading-relaxed">{p.desc}</div>
                    </li>
                ))}
            </ul>

            <h2 id="configuration-example" className="text-purple-600 dark:text-purple-400 font-bold text-2xl mt-10 mb-4 scroll-mt-24">Configuration Example</h2>
            <CodeBlock language="typescript" code={`const client = new Guidera({
  apiKey: process.env.GUIDERA_API_KEY
});

// The interface remains the same, regardless of the underlying model
const response = await client.generate({
  prompt: "What is the capital of France?"
});`} />
        </div>
    );
};

export default Principles;
