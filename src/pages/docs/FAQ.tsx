import React, { useState, useEffect } from 'react';
import { useDocsOnThisPage } from '../Docs';
import { ChevronDown, ChevronRight } from 'lucide-react';

const ON_THIS_PAGE = [
    { label: 'Getting Started', anchor: 'getting-started' },
    { label: 'Pricing and Fees', anchor: 'pricing-and-fees' },
    { label: 'Models and Providers', anchor: 'models-and-providers' },
    { label: 'API Technical Specifications', anchor: 'api-technical-specifications' },
    { label: 'Privacy and Data Logging', anchor: 'privacy-and-data-logging' },
    { label: 'Credit and Billing Systems', anchor: 'credit-and-billing-systems' },
    { label: 'Account Management', anchor: 'account-management' },
];

const faqs = [
    {
        section: 'Getting Started',
        qas: [
            {
                q: 'Why should I use Guidera?',
                a: 'Guidera provides a unified API to access all the major LLM models on the market. It allows you to aggregate billing in one place and track all your usage with built-in analytics. Guidera passes through the pricing of the underlying providers, pools their uptime, and offers unified API and fallbacks for better reliability.'
            },
            {
                q: 'How do I get started with Guidera?',
                a: 'Create an account and add credits on the Credits page. Credits are deposits you use for LLM inference. When you use the API or chat interface, the request cost is deducted from your credits. Each model and provider has a different price per million tokens. Once you have credits, you can use the chat room or create API keys to start using the API.'
            },
            {
                q: 'How do I get support?',
                a: 'The best way to get support is to join our Discord and post in the #help forum.'
            },
            {
                q: 'How do I get billed for my usage on Guidera?',
                a: 'For each model, pricing is displayed per million tokens, with different prices for prompt and completion tokens. Some models charge per request (e.g., for images or reasoning tokens). All details are visible on the models page. Usage is calculated and deducted from your credits, and you can review your complete usage history in the Activity tab. Add usage: {include: true} to your chat request to get usage info in the response.'
            },
        ]
    },
    {
        section: 'Pricing and Fees',
        qas: [
            {
                q: 'What are the fees for using Guidera?',
                a: 'Guidera charges a 5.5% ($0.80 minimum) fee when you purchase credits. There is no markup on inference pricing; you pay the same rate as the provider.'
            },
            {
                q: 'Is there a fee for using my own provider keys (BYOK)?',
                a: 'Yes, using your own provider API keys incurs a 5% fee of what the same model/provider would cost on Guidera. This is deducted from your Guidera credits.'
            },
        ]
    },
    {
        section: 'Models and Providers',
        qas: [
            {
                q: 'What LLM models does Guidera support?',
                a: 'Guidera provides access to a wide variety of LLM models, including frontier models from major AI labs. Visit the models browser or use the models API for a complete list.'
            },
            {
                q: 'How frequently are new models added?',
                a: 'Guidera adds models as quickly as possible, often partnering with labs for early releases. If a model is missing, let us know on Discord.'
            },
            {
                q: 'What are model variants?',
                a: 'Variants are suffixes added to the model slug to change behavior (e.g., :free, :beta, :extended, :thinking, :online, :nitro, :floor). See the models API for details.'
            },
            {
                q: 'I am an inference provider, how can I get listed on Guidera?',
                a: 'See our requirements on the Providers page or contact us via email.'
            },
            {
                q: 'What is the expected latency/response time for different models?',
                a: 'Each model shows latency and token throughput for all providers. Use the :nitro variant to optimize for speed.'
            },
            {
                q: 'How does model fallback work if a provider is unavailable?',
                a: 'If a provider returns an error, Guidera will automatically fall back to the next provider. This happens transparently and allows production apps to be much more resilient.'
            },
        ]
    },
    {
        section: 'API Technical Specifications',
        qas: [
            {
                q: 'What authentication methods are supported?',
                a: 'Guidera uses cookie-based authentication for the web interface and chatroom, API keys (passed as Bearer tokens) for accessing the completions API and other core endpoints, and provisioning API keys for programmatically managing API keys.'
            },
            {
                q: 'How are rate limits calculated?',
                a: 'For free models, rate limits are determined by the credits you have purchased. If you have at least 10 credits, your free model rate limit will be 1000 requests per day. Otherwise, you are limited to 50 free model API requests per day.'
            },
            {
                q: 'What API endpoints are available?',
                a: 'Guidera implements the OpenAI API specification for /completions and /chat/completions endpoints, allowing you to use any model with the same request/response format. Additional endpoints like /api/v1/models are also available.'
            },
            {
                q: 'What are the supported formats?',
                a: 'The API supports text and images. Images can be passed as URLs or base64 encoded images. PDF and other file types are coming soon.'
            },
            {
                q: 'How does streaming work?',
                a: 'Streaming uses server-sent events (SSE) for real-time token delivery. Set stream: true in your request to enable streaming responses.'
            },
            {
                q: 'What SDK support is available?',
                a: 'Guidera is a drop-in replacement for OpenAI. Any SDKs that support OpenAI by default also support Guidera.'
            },
        ]
    },
    {
        section: 'Privacy and Data Logging',
        qas: [
            {
                q: 'What data is logged during API use?',
                a: 'We log basic request metadata (timestamps, model used, token counts). Prompt and completion are not logged by default. We do zero logging of your prompts/completions, even if an error occurs, unless you opt-in to logging them.'
            },
            {
                q: 'What data is logged during Chatroom use?',
                a: 'All conversations in the chatroom are stored locally on your device. Conversations will not sync across devices.'
            },
            {
                q: 'What third-party sharing occurs?',
                a: 'Guidera is a proxy that sends your requests to the model provider for completion. We work with all providers to, when possible, ensure that prompts and completions are not logged or used for training.'
            },
        ]
    },
    {
        section: 'Credit and Billing Systems',
        qas: [
            {
                q: 'What purchase options exist?',
                a: 'Guidera uses a credit system where the base currency is US dollars. Users can top up their balance manually or set up auto top up.'
            },
            {
                q: 'Do credits expire?',
                a: 'Unused credits may expire after one year of purchase.'
            },
            {
                q: 'My credits haven\'t showed up in my account',
                a: 'If you paid using Stripe, credits can be delayed up to one hour. If they still have not appeared, contact us on Discord.'
            },
            {
                q: 'What\'s the refund policy?',
                a: 'Refunds for unused credits may be requested within 24 hours from the time of purchase. Platform fees are non-refundable. Cryptocurrency payments are never refundable.'
            },
            {
                q: 'How to monitor credit usage?',
                a: 'The Activity page allows users to view their historic usage and filter by model, provider, and API key. There is also a credits API for live balance information.'
            },
            {
                q: 'What free tier options exist?',
                a: 'All new users receive a small free allowance to test Guidera. Free models have low rate limits and are not suitable for production use.'
            },
            {
                q: 'How do volume discounts work?',
                a: 'Guidera does not currently offer volume discounts, but you can reach out if you have an exceptional use case.'
            },
            {
                q: 'What payment methods are accepted?',
                a: 'We accept all major credit cards, AliPay, and cryptocurrency payments in USDC. PayPal support is coming soon.'
            },
            {
                q: 'How does Guidera make money?',
                a: 'We charge a small fee when purchasing credits. We never mark-up the pricing of the underlying providers.'
            },
        ]
    },
    {
        section: 'Account Management',
        qas: [
            {
                q: 'How can I delete my account?',
                a: 'Go to the Settings page and click Manage Account. In the modal, select the Security tab and choose Delete Account. Unused credits will be lost.'
            },
            {
                q: 'How does team access work?',
                a: 'Team management is coming soon! For now, you can use provisioning API keys to share credits with your team.'
            },
            {
                q: 'What analytics are available?',
                a: 'Our activity dashboard provides real-time usage metrics. For specific reports, contact us.'
            },
            {
                q: 'How can I contact support?',
                a: 'Join our Discord and post in the #help forum.'
            },
        ]
    },
];

const codeBlock = (code: string) => (
    <div className="relative my-4 rounded-lg bg-secondary/10 p-4 font-mono text-sm overflow-x-auto">
        <pre className="whitespace-pre-wrap break-words m-0 bg-transparent text-secondary-foreground">{code}</pre>
        <button
            className="absolute top-2 right-2 rounded-md bg-background border border-border px-3 py-1 text-xs font-semibold text-primary shadow-sm hover:bg-muted transition-colors"
            onClick={() => navigator.clipboard.writeText(code)}
        >
            Copy
        </button>
    </div>
);

const FAQ: React.FC = () => {
    const [open, setOpen] = useState<{ [key: string]: boolean }>({});
    const { setLinks } = useDocsOnThisPage();

    useEffect(() => {
        setLinks(ON_THIS_PAGE);
        return () => setLinks([]);
    }, [setLinks]);

    const toggle = (section: string, idx: number) => {
        setOpen((prev) => ({ ...prev, [`${section}-${idx}`]: !prev[`${section}-${idx}`] }));
    };

    return (
        <div className="max-w-[900px] mx-auto text-foreground font-sans pb-12">
            <h1 className="text-primary font-extrabold text-4xl mb-6">Frequently Asked Questions</h1>

            {faqs.map((section) => (
                <div key={section.section} className="mb-10">
                    <h2
                        id={section.section.toLowerCase().replace(/\s/g, '-')}
                        className="text-purple-600 dark:text-purple-400 font-bold text-2xl mt-8 mb-4 scroll-mt-24"
                    >
                        {section.section}
                    </h2>
                    <div className="rounded-xl border border-border bg-card shadow-sm p-6 space-y-4">
                        {section.qas.map((qa, idx) => (
                            <div key={qa.q} className="border-b border-border last:border-0 pb-4 last:pb-0">
                                <button
                                    onClick={() => toggle(section.section, idx)}
                                    className="flex w-full items-center text-left text-lg font-semibold text-foreground hover:text-primary transition-colors py-2 focus:outline-none"
                                    aria-expanded={!!open[`${section.section}-${idx}`]}
                                >
                                    <span className="mr-3 text-muted-foreground">
                                        {open[`${section.section}-${idx}`] ? <ChevronDown className="w-5 h-5" /> : <ChevronRight className="w-5 h-5" />}
                                    </span>
                                    {qa.q}
                                </button>
                                {open[`${section.section}-${idx}`] && (
                                    <div className="ml-8 mt-2 text-base leading-relaxed text-muted-foreground">
                                        {qa.a.includes('usage: {include: true}')
                                            ? codeBlock('usage: {include: true}')
                                            : qa.a}
                                    </div>
                                )}
                            </div>
                        ))}
                    </div>
                </div>
            ))}

            <div className="mt-12 text-muted-foreground text-base">
                <strong className="text-foreground">Still have questions?</strong> See the <a href="/docs/api-reference" className="text-purple-600 hover:underline">API Reference</a> or <a href="/docs/community" className="text-purple-600 hover:underline">Community</a> page, or contact support.
            </div>
        </div>
    );
};

export default FAQ;
