import React, { useEffect } from 'react';
import { useDocsOnThisPage } from '../Docs';
import { CodeBlock } from '@/components/ui/code-block';

const ON_THIS_PAGE = [
    { label: 'Overview', anchor: 'message-transforms-overview' },
    { label: 'The Problem', anchor: 'message-transforms-problem' },
    { label: 'Our Solution: Automated Prompt Optimization', anchor: 'message-transforms-solution' },
    { label: 'How It Works', anchor: 'message-transforms-how' },
    { label: 'Benefits', anchor: 'message-transforms-benefits' },
];

const MessageTransforms: React.FC = () => {
    const { setLinks } = useDocsOnThisPage();
    useEffect(() => {
        setLinks(ON_THIS_PAGE);
        return () => setLinks([]);
    }, [setLinks]);

    return (
        <div className="max-w-[900px] mx-auto text-foreground font-sans pb-12">
            <h1 id="message-transforms-overview" className="text-primary font-extrabold text-4xl mb-6">Message Transforms</h1>
            <p className="text-lg mb-8 leading-relaxed">
                Automated prompt optimization and message transforms ensure higher quality outputs, fewer errors, and compliance with your requirements—no prompt engineering expertise needed.
            </p>

            <h2 id="message-transforms-problem" className="text-purple-600 dark:text-purple-400 font-bold text-2xl mt-10 mb-4 scroll-mt-24">The Problem</h2>
            <ul className="list-disc list-inside mb-8 ml-4 space-y-2 text-base">
                <li>Poorly structured prompts can lead to suboptimal results or compliance issues.</li>
            </ul>

            <h2 id="message-transforms-solution" className="text-purple-600 dark:text-purple-400 font-bold text-2xl mt-10 mb-4 scroll-mt-24">Our Solution: Automated Prompt Optimization</h2>
            <ul className="list-disc list-inside mb-8 ml-4 space-y-2 text-base">
                <li><strong>Expert Rewriting:</strong> Prompts are analyzed and, if needed, rewritten using best-in-class templates.</li>
                <li><strong>Sensitive Data Handling:</strong> Sensitive information is redacted and restored as needed.</li>
                <li><strong>Task-Specific Templates:</strong> Prompts are matched to optimal templates for each task type.</li>
            </ul>

            <h2 id="message-transforms-how" className="text-purple-600 dark:text-purple-400 font-bold text-2xl mt-10 mb-4 scroll-mt-24">How It Works</h2>
            <ol className="list-decimal list-inside ml-4 mb-8 text-base space-y-4">
                <li><strong>Prompt Analysis:</strong> The system reviews your prompt for structure and content.</li>
                <li><strong>Transformation:</strong> If improvements are needed, the prompt is rewritten automatically.</li>
                <li><strong>Restoration:</strong> Sensitive data is handled securely throughout the process.</li>
            </ol>

            <div className="my-8 rounded-lg border border-purple-200 bg-purple-50/50 dark:bg-purple-900/10 dark:border-purple-800 p-5 text-base">
                <strong className="text-foreground block mb-2">Example:</strong>
                <CodeBlock language="python" code={`response = guidera_client.generate(
    prompt="Format this as JSON...",
    prefs={"provider": "anthropic"} # Guidera seamlessly translates standard system/user messages to Claude's format
)`} />
            </div>

            <h2 id="message-transforms-benefits" className="text-purple-600 dark:text-purple-400 font-bold text-2xl mt-10 mb-4 scroll-mt-24">Benefits</h2>
            <ul className="list-disc list-inside mb-8 ml-4 space-y-2 text-base">
                <li>Higher quality outputs.</li>
                <li>Fewer errors and compliance issues.</li>
                <li>No need to be a prompt engineering expert.</li>
            </ul>
        </div>
    );
};

export default MessageTransforms;
