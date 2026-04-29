import React, { useEffect, useState } from 'react';
import { useDocsOnThisPage } from '../Docs';
import { motion, AnimatePresence } from 'framer-motion';
import { CodeBlock } from '@/components/ui/code-block';

const ON_THIS_PAGE = [
    { label: 'What is MCP?', anchor: 'what-is-mcp' },
    { label: 'Example Workflow', anchor: 'example-workflow' },
    { label: 'Setup Instructions', anchor: 'setup-instructions' },
    { label: 'IDE Configuration', anchor: 'ide-config' },
];

const CapsuleHubMCP: React.FC = () => {
    const { setLinks } = useDocsOnThisPage();
    const [activeTab, setActiveTab] = useState<'cursor' | 'antigravity'>('cursor');

    useEffect(() => {
        setLinks(ON_THIS_PAGE);
        return () => setLinks([]);
    }, [setLinks]);

    const cursorConfig = `"capsule-service" : {
  "url": "https://backend.tilantra.com/mcp",
  "headers": {
    "X_API_KEY": "YOUR_API_KEY",
    "Content-Type": "application/json"
  }
}`;

    const antigravityConfig = `"capsule-service": {
  "serverUrl": "https://backend.tilantra.com/mcp/",
  "headers": {
    "X-API-Key": "",
    "Content-Type": "application/json"
  }
}`;

    return (
        <div className="max-w-[900px] mx-auto text-foreground font-sans pb-12">
            <h1 className="text-primary font-extrabold text-4xl mb-6">Capsule Hub MCP</h1>

            <section id="what-is-mcp" className="scroll-mt-24">
                <h2 className="text-purple-600 dark:text-purple-400 font-bold text-2xl mt-10 mb-4">What is MCP?</h2>
                <p className="text-base mb-6 leading-relaxed">
                    Model Context Protocol (MCP) is an open standard that enables AI models to connect with external tools and data sources.
                    With Capsule Hub MCP, you can <strong>connect your ideas to any IDE</strong>, bridging the gap between your research and your development environment.
                </p>
            </section>

            <section id="example-workflow" className="scroll-mt-24">
                <h2 className="text-purple-600 dark:text-purple-400 font-bold text-2xl mt-10 mb-4">Example Workflow</h2>
                <div className="bg-slate-50 dark:bg-slate-900/50 p-6 rounded-xl border border-slate-200 dark:border-slate-800 mb-8">
                    <p className="text-base leading-relaxed italic mb-4">
                        "I got an idea from ChatGPT and made a capsule out of it. I then came to Cursor and connected the MCP server."
                    </p>
                    <p className="text-base leading-relaxed">
                        Your MCP will automatically pick up the capsule, work on your code, and version it to <strong>v2</strong>.
                        You can now go to Claude, drop this v2 capsule, and ask for bug fixes or specific recommendations.
                    </p>
                </div>
            </section>

            <section id="setup-instructions" className="scroll-mt-24">
                <h2 className="text-purple-600 dark:text-purple-400 font-bold text-2xl mt-10 mb-4">Setup Instructions</h2>
                <div className="space-y-4 mb-8">
                    <p className="text-base leading-relaxed">
                        1. Login to <a href="https://capsulehub.tilantra.com" className="text-primary hover:underline font-semibold" target="_blank" rel="noreferrer">https://capsulehub.tilantra.com</a>.
                    </p>
                    <p className="text-base leading-relaxed">
                        2. Go to <strong>Settings</strong> and generate a token.
                    </p>
                    <p className="text-base leading-relaxed">
                        3. Your API key will be available there along with capsules you have generated.
                    </p>
                </div>
            </section>

            <section id="ide-config" className="scroll-mt-24">
                <h2 className="text-purple-600 dark:text-purple-400 font-bold text-2xl mt-10 mb-6">IDE Configuration</h2>

                {/* Tabs Navigation */}
                <div className="flex p-1 bg-slate-100 dark:bg-slate-800 rounded-lg mb-6 w-fit">
                    <button
                        onClick={() => setActiveTab('cursor')}
                        className={`px-6 py-2 rounded-md text-sm font-semibold transition-all ${activeTab === 'cursor'
                                ? 'bg-white dark:bg-slate-700 text-primary shadow-sm'
                                : 'text-slate-500 hover:text-slate-700 dark:text-slate-400 dark:hover:text-slate-200'
                            }`}
                    >
                        Cursor
                    </button>
                    <button
                        onClick={() => setActiveTab('antigravity')}
                        className={`px-6 py-2 rounded-md text-sm font-semibold transition-all ${activeTab === 'antigravity'
                                ? 'bg-white dark:bg-slate-700 text-primary shadow-sm'
                                : 'text-slate-500 hover:text-slate-700 dark:text-slate-400 dark:hover:text-slate-200'
                            }`}
                    >
                        Antigravity
                    </button>
                </div>

                <div className="min-h-[350px]">
                    <AnimatePresence mode="wait">
                        {activeTab === 'cursor' ? (
                            <motion.div
                                key="cursor"
                                initial={{ opacity: 0, y: 10 }}
                                animate={{ opacity: 1, y: 0 }}
                                exit={{ opacity: 0, y: -10 }}
                                transition={{ duration: 0.2 }}
                            >
                                <p className="text-base mb-4">
                                    If you are using Cursor, follow these steps:
                                </p>
                                <ol className="list-decimal list-inside space-y-2 mb-6 ml-4">
                                    <li>Go to <strong>Settings</strong></li>
                                    <li>Navigate to <strong>MCPs and Tools</strong></li>
                                    <li>Click <strong>Add MCP server</strong></li>
                                </ol>
                                <p className="text-sm font-semibold mb-2">Add this to your mcp-servers config:</p>
                                <CodeBlock language="json" code={cursorConfig} />
                            </motion.div>
                        ) : (
                            <motion.div
                                key="antigravity"
                                initial={{ opacity: 0, y: 10 }}
                                animate={{ opacity: 1, y: 0 }}
                                exit={{ opacity: 0, y: -10 }}
                                transition={{ duration: 0.2 }}
                            >
                                <p className="text-base mb-4">
                                    For Antigravity, follow these steps:
                                </p>
                                <ol className="list-decimal list-inside space-y-2 mb-6 ml-4">
                                    <li>Click on the <strong>3 dots</strong> on any agent</li>
                                    <li>Select <strong>MCP servers</strong></li>
                                    <li>Click <strong>View raw config</strong></li>
                                </ol>
                                <p className="text-sm font-semibold mb-2">Add this to your mcp-servers config:</p>
                                <CodeBlock language="json" code={antigravityConfig} />
                            </motion.div>
                        )}
                    </AnimatePresence>
                </div>
            </section>
        </div>
    );
};

export default CapsuleHubMCP;
