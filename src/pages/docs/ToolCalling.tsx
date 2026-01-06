import React, { useEffect } from 'react';
import { useDocsOnThisPage } from '../Docs';

const ON_THIS_PAGE = [
    { label: 'Overview', anchor: 'tool-calling-overview' },
    { label: 'The Problem', anchor: 'tool-calling-problem' },
    { label: 'Our Solution: Seamless Tool Integration', anchor: 'tool-calling-solution' },
    { label: 'How It Works', anchor: 'tool-calling-how' },
    { label: 'Benefits', anchor: 'tool-calling-benefits' },
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

const ToolCalling: React.FC = () => {
    const { setLinks } = useDocsOnThisPage();
    useEffect(() => {
        setLinks(ON_THIS_PAGE);
        return () => setLinks([]);
    }, [setLinks]);

    return (
        <div className="max-w-[900px] mx-auto text-foreground font-sans pb-12">
            <h1 id="tool-calling-overview" className="text-primary font-extrabold text-4xl mb-6">Tool Calling</h1>
            <p className="text-lg mb-8 leading-relaxed">
                Some tasks require more than just text generation—they need real-world actions or up-to-date information. Tool Calling enables seamless integration with external APIs and tools directly in your workflow.
            </p>

            <h2 id="tool-calling-problem" className="text-purple-600 dark:text-purple-400 font-bold text-2xl mt-10 mb-4 scroll-mt-24">The Problem</h2>
            <ul className="list-disc list-inside mb-8 ml-4 space-y-2 text-base">
                <li>Some tasks require more than just text generation—they need real-world actions or up-to-date information.</li>
            </ul>

            <h2 id="tool-calling-solution" className="text-purple-600 dark:text-purple-400 font-bold text-2xl mt-10 mb-4 scroll-mt-24">Our Solution: Seamless Tool Integration</h2>
            <ul className="list-disc list-inside mb-8 ml-4 space-y-2 text-base">
                <li><strong>Automatic Tool Detection:</strong> The system recognizes when a prompt requires a tool (e.g., web search, code execution).</li>
                <li><strong>Effortless Invocation:</strong> Tools are called automatically, with no extra work for you.</li>
                <li><strong>Richer Results:</strong> Users get actionable, up-to-date answers.</li>
            </ul>

            <h2 id="tool-calling-how" className="text-purple-600 dark:text-purple-400 font-bold text-2xl mt-10 mb-4 scroll-mt-24">How It Works</h2>
            <ol className="list-decimal list-inside ml-4 mb-8 text-base space-y-4">
                <li><strong>Prompt Analysis:</strong> The system detects tool requirements in your prompt.</li>
                <li><strong>Tool Invocation:</strong> Supported models call the necessary tools.</li>
                <li><strong>Result Integration:</strong> Tool results are combined with model output and returned to you.</li>
            </ol>

            <div className="my-8 rounded-lg border border-purple-200 bg-purple-50/50 dark:bg-purple-900/10 dark:border-purple-800 p-5 text-base">
                <strong className="text-foreground block mb-2">Example:</strong>
                {codeBlock(`response = guidera_client.generate(
  prompt="What is the weather in Paris right now?",
  prefs={},
  cp_tradeoff_parameter=0.7,
  compliance_enabled=True
)
# The system will automatically call a weather API and return the result with the model output.`)}
            </div>

            <h2 id="tool-calling-benefits" className="text-purple-600 dark:text-purple-400 font-bold text-2xl mt-10 mb-4 scroll-mt-24">Benefits</h2>
            <ul className="list-disc list-inside mb-8 ml-4 space-y-2 text-base">
                <li>Unlock new capabilities for your users.</li>
                <li>Always provide the most relevant, actionable answers.</li>
                <li>No manual integration required.</li>
            </ul>
        </div>
    );
};

export default ToolCalling;
