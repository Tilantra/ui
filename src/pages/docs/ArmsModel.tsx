import React, { useEffect } from 'react';
import { useDocsOnThisPage } from '../Docs';


const ON_THIS_PAGE = [
    { label: 'Overview', anchor: 'arms-overview' },
    { label: 'The Challenge of Model Selection', anchor: 'arms-challenge' },
    { label: 'What is ARMS Routing?', anchor: 'arms-what' },
    { label: 'How ARMS Works', anchor: 'arms-how' },
    { label: 'Real-World Scenarios', anchor: 'arms-scenarios' },
    { label: 'Key Benefits', anchor: 'arms-benefits' },
];

const codeBlock = (code: string) => (
    <div className="relative my-6 rounded-lg bg-muted/10 p-4 font-mono text-sm overflow-x-auto shadow-sm border border-border">
        <pre className="whitespace-pre-wrap break-words m-0 bg-transparent text-foreground">{code}</pre>
        <button
            className="absolute top-2 right-2 rounded-md bg-card border border-border px-3 py-1 text-xs font-semibold text-primary shadow-sm hover:bg-muted transition-colors"
            onClick={() => navigator.clipboard.writeText(code)}
        >
            Copy
        </button>
    </div>
);

const ArmsModel: React.FC = () => {
    const { setLinks } = useDocsOnThisPage();
    useEffect(() => {
        setLinks(ON_THIS_PAGE);
        return () => setLinks([]);
    }, [setLinks]);

    return (
        <div className="max-w-[900px] mx-auto text-foreground font-sans pb-12">
            <h1 id="arms-overview" className="text-primary font-extrabold text-4xl mb-6">ARMS Routing (Automatic Routing Model System)</h1>
            <p className="text-lg mb-8 leading-relaxed">
                <strong>ARMS</strong> is the intelligent core of Model Swap Router, making real-time decisions about which model to use for every request—so you always get the best possible outcome, without the guesswork. It is designed for reliability, security, and seamless integration into your workflows.
            </p>

            <h2 id="arms-challenge" className="text-purple-600 dark:text-purple-400 font-bold text-2xl mt-10 mb-4 scroll-mt-24">The Challenge of Model Selection</h2>
            <ul className="list-disc list-inside mb-8 ml-4 space-y-2 text-base">
                <li>The LLM landscape is vast and rapidly evolving. Each provider (OpenAI, Anthropic, Google, Mistral, etc.) offers multiple models, each with unique strengths, weaknesses, and pricing.</li>
                <li>Manually choosing the best model for every prompt is not only time-consuming, but also requires deep technical knowledge and constant monitoring of model updates, outages, and pricing changes.</li>
                <li>The wrong model choice can lead to higher costs, slower responses, or subpar results for your users.</li>
            </ul>

            <h2 id="arms-what" className="text-purple-600 dark:text-purple-400 font-bold text-2xl mt-10 mb-4 scroll-mt-24">What is ARMS Routing?</h2>
            <p className="text-base mb-6 leading-relaxed">
                <strong>ARMS (Automatic Routing Model System)</strong> acts as your AI operations expert, making real-time decisions about which model to use for every request. You always get the best possible outcome, without the guesswork.
            </p>

            <h2 id="arms-how" className="text-purple-600 dark:text-purple-400 font-bold text-2xl mt-10 mb-4 scroll-mt-24">How ARMS Works</h2>
            <ol className="list-decimal list-inside ml-4 mb-8 text-base space-y-4">
                <li>
                    <strong>Deep Prompt Understanding:</strong> Every incoming prompt is analyzed using advanced machine learning to determine its intent and task type (e.g., coding, summarization, reasoning, story generation, data analysis, etc.). This classification leverages semantic understanding to accurately match prompts to the most suitable model category.
                </li>
                <li>
                    <strong>Dynamic Model Ranking:</strong> For each task type, ARMS maintains a live ranking of all available models, factoring in:
                    <ul className="list-disc list-inside ml-6 mt-2 space-y-1">
                        <li><strong>Performance:</strong> How well each model performs on similar tasks, based on historical data and real-world benchmarks.</li>
                        <li><strong>Cost:</strong> Real-time token pricing for both input and output, so you never overpay.</li>
                        <li><strong>User Preferences:</strong> Your cost-performance tradeoff parameter lets you prioritize speed, quality, or savings.</li>
                        <li><strong>Access Rights:</strong> Only models you are authorized to use are considered.</li>
                    </ul>
                    <div className="mt-2 ml-6 text-muted-foreground">These rankings are updated continuously, ensuring ARMS always has the latest information.</div>
                </li>
                <li>
                    <strong>Smart Model Selection & Fallback:</strong> ARMS selects the top-ranked model for your prompt and initiates the request. If the chosen model is slow, unavailable, or returns an error, ARMS automatically retries with the next-best model—ensuring your users never experience downtime or degraded service. This fallback logic is seamless and invisible to the end user.
                </li>
                <li>
                    <strong>Real-Time Streaming & Feedback:</strong> As your request is processed, ARMS streams progress updates and partial results back to you. This means users see immediate feedback, even for long-running or complex tasks, improving perceived performance and trust.
                </li>
            </ol>

            <h2 id="arms-scenarios" className="text-purple-600 dark:text-purple-400 font-bold text-2xl mt-10 mb-4 scroll-mt-24">Real-World Scenarios</h2>
            <ul className="list-disc list-inside mb-8 ml-4 space-y-2 text-base">
                <li><strong>Coding Help:</strong> ARMS routes code generation prompts to models with the best track record for programming tasks, while balancing cost if you’re running at scale.</li>
                <li><strong>Business Summaries:</strong> For summarization, ARMS picks models known for concise, accurate outputs, and can switch to a cheaper model if cost is a concern.</li>
                <li><strong>Creative Writing:</strong> Story prompts are routed to models that excel at creativity and narrative flow.</li>
                <li><strong>Enterprise Use:</strong> If a provider is experiencing an outage or latency spike, ARMS automatically reroutes to another provider, so your business never stops.</li>
            </ul>

            <h2 id="arms-benefits" className="text-purple-600 dark:text-purple-400 font-bold text-2xl mt-10 mb-4 scroll-mt-24">Key Benefits</h2>
            <ul className="list-disc list-inside mb-8 ml-4 space-y-2 text-base">
                <li><strong>Peace of Mind:</strong> You never have to worry about model selection, outages, or cost overruns.</li>
                <li><strong>Optimal Results:</strong> Every prompt gets the best available model, every time.</li>
                <li><strong>Scalability:</strong> ARMS handles thousands of requests in parallel, adapting to your needs in real time.</li>
                <li><strong>Transparency:</strong> Progress and results are streamed live, so you’re always in the loop.</li>
            </ul>

            <div className="mt-8 rounded-lg border border-purple-200 bg-purple-50 dark:bg-purple-900/10 dark:border-purple-800 p-5 text-base">
                <strong className="text-foreground">Tip:</strong> Use the <span className="text-purple-600 dark:text-purple-400 font-mono">cp_tradeoff_parameter</span> to control the balance between cost and performance for every request.
                {codeBlock('response = guidera_client.generate(\n  prompt="...",\n  prefs={},\n  cp_tradeoff_parameter=0.7,\n  compliance_enabled=True\n)')}
            </div>
        </div>
    );
};

export default ArmsModel;
