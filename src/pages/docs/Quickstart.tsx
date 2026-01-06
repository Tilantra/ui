import React, { useEffect, useState } from 'react';
import { useDocsOnThisPage } from '../Docs';
import { Link } from 'react-router-dom';
import { Highlight, themes } from 'prism-react-renderer';

const ON_THIS_PAGE = [
    { label: 'Overview', anchor: 'quickstart-overview' },
    { label: 'Why this matters', anchor: 'quickstart-why-matters' },
    { label: 'Key Capabilities', anchor: 'quickstart-capabilities' },
    { label: 'Getting Started', anchor: 'quickstart-getting-started' },
    { label: 'SDK Usage Example', anchor: 'quickstart-sdk-example' },
    { label: 'Customization Options', anchor: 'quickstart-customization' },
    { label: 'Support & Contact', anchor: 'quickstart-support' },
];

const codeTabs = [
    {
        label: 'Python',
        language: 'python',
        code: `import guidera\nsdk_key = "YOUR_SDK_KEY"\nguidera_client = guidera.Client()\n\nresponse = guidera_client.generate(\n    prompt="your prompt here",\n    prefs={},\n    cp_tradeoff_parameter=0,  # optional, defaults to 0.7\n    compliance_enabled=True   # optional, defaults to False\n)\nprint(response)`
    },
    {
        label: 'TypeScript',
        language: 'typescript',
        code: `import { Guidera } from 'guidera';\n\nconst guideraClient = new Guidera({ apiKey: 'YOUR_SDK_KEY' });\n\nconst response = await guideraClient.generate({\n  prompt: 'your prompt here',\n  prefs: {},\n  cp_tradeoff_parameter: 0, // optional, defaults to 0.7\n  compliance_enabled: true  // optional, defaults to false\n});\nconsole.log(response);`
    },
    {
        label: 'Shell',
        language: 'bash',
        code: `curl -X POST "http://tilantra-client/generate" \\
  -H "Content-Type: application/json" \\
  -H "Authorization: Bearer Toekn" \\
  -d '{\n    "prompt": "Your prompt here",\n    "prefs": {},\n    "cp_tradeoff_parameter": 1,\n    "compliance_enabled": true\n  }'`
    }
];

const installTabs = [
    {
        label: 'Python',
        language: 'bash',
        code: 'pip install guidera',
    },
    {
        label: 'TypeScript',
        language: 'bash',
        code: 'npm install guidera',
    },
];

const InstallTabsBlock: React.FC = () => {
    const [tab, setTab] = useState(0);
    const { language, code } = installTabs[tab];
    return (
        <div className="my-6 rounded-lg border border-border bg-card shadow-sm overflow-hidden font-mono text-sm">
            {/* Tab Header */}
            <div className="flex bg-muted/50 border-b border-border px-3 pt-2 gap-2">
                {installTabs.map((t, i) => (
                    <button
                        key={t.label}
                        onClick={() => setTab(i)}
                        className={`px-4 py-1.5 rounded-t-lg text-sm font-semibold transition-colors focus:outline-none ${tab === i
                                ? 'bg-card text-foreground'
                                : 'text-muted-foreground hover:text-foreground'
                            }`}
                    >
                        {t.label}
                    </button>
                ))}
                <button
                    className="ml-auto text-muted-foreground hover:text-foreground p-1.5"
                    title="Copy to clipboard"
                    onClick={() => navigator.clipboard.writeText(code)}
                >
                    <svg width="16" height="16" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <rect x="6" y="6" width="9" height="9" rx="2" stroke="currentColor" strokeWidth="1.5" fill="none" />
                        <rect x="3" y="3" width="9" height="9" rx="2" stroke="currentColor" strokeWidth="1.5" fill="none" />
                    </svg>
                </button>
            </div>
            {/* Content */}
            <div className="p-4 bg-muted/10 overflow-auto">
                <Highlight code={code} language={language} theme={themes.vsLight}>
                    {({ className, style, tokens, getLineProps, getTokenProps }) => (
                        <pre className={className} style={{ ...style, background: 'transparent', margin: 0, padding: 0 }}>
                            <code className="block min-w-full">
                                {tokens.map((line: any[], i: number) => (
                                    <div key={i} className="flex">
                                        <span className="w-8 text-right pr-3 text-muted-foreground select-none opacity-50 shrink-0">
                                            {i + 1}
                                        </span>
                                        <span {...getLineProps({ line, key: i })} className="block">
                                            {line.map((token: any, key: number) => (
                                                <span key={key} {...getTokenProps({ token, key })} />
                                            ))}
                                        </span>
                                    </div>
                                ))}
                            </code>
                        </pre>
                    )}
                </Highlight>
            </div>
        </div>
    );
};

const IDECodeBlock: React.FC = () => {
    const [tab, setTab] = useState(0);
    const { language, code } = codeTabs[tab];

    return (
        <div className="my-6 rounded-lg border border-border bg-card shadow-sm overflow-hidden font-mono text-sm">
            <div className="flex bg-muted/50 border-b border-border px-3 pt-2 gap-2">
                {codeTabs.map((t, i) => (
                    <button
                        key={t.label}
                        onClick={() => setTab(i)}
                        className={`px-4 py-1.5 rounded-t-lg text-sm font-semibold transition-colors focus:outline-none ${tab === i
                                ? 'bg-card text-foreground'
                                : 'text-muted-foreground hover:text-foreground'
                            }`}
                    >
                        {t.label}
                    </button>
                ))}
                <button
                    className="ml-auto text-muted-foreground hover:text-foreground p-1.5"
                    title="Copy to clipboard"
                    onClick={() => navigator.clipboard.writeText(code)}
                >
                    <svg width="16" height="16" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <rect x="6" y="6" width="9" height="9" rx="2" stroke="currentColor" strokeWidth="1.5" fill="none" />
                        <rect x="3" y="3" width="9" height="9" rx="2" stroke="currentColor" strokeWidth="1.5" fill="none" />
                    </svg>
                </button>
            </div>
            <div className="p-4 bg-muted/10 overflow-auto">
                <Highlight code={code} language={language} theme={themes.vsLight}>
                    {({ className, style, tokens, getLineProps, getTokenProps }: any) => (
                        <pre className={className} style={{ ...style, background: 'transparent', margin: 0, padding: 0 }}>
                            <code className="block min-w-full">
                                {tokens.map((line: any[], i: number) => (
                                    <div key={i} className="flex">
                                        <span className="w-8 text-right pr-3 text-muted-foreground select-none opacity-50 shrink-0">
                                            {i + 1}
                                        </span>
                                        <span {...getLineProps({ line, key: i })} className="block">
                                            {line.map((token: any, key: number) => (
                                                <span key={key} {...getTokenProps({ token, key })} />
                                            ))}
                                        </span>
                                    </div>
                                ))}
                            </code>
                        </pre>
                    )}
                </Highlight>
            </div>
        </div>
    );
};

const Quickstart: React.FC = () => {
    const { setLinks } = useDocsOnThisPage();
    useEffect(() => {
        setLinks(ON_THIS_PAGE);
        return () => setLinks([]);
    }, [setLinks]);

    return (
        <div className="max-w-[900px] mx-auto text-foreground font-sans pb-12">
            <h1 id="quickstart-overview" className="text-primary font-extrabold text-4xl mb-6">Quickstart</h1>
            <p className="text-lg mb-8 leading-relaxed">
                Welcome! This guide will help you get started with Guidera, a high-performance orchestration layer that replaces fragmented LLM access, eliminates compliance risk, and optimizes cost-performance through a single API.
            </p>
            <div className="text-lg mb-8 text-muted-foreground">
                <strong className="text-foreground">One contract. Every model. Complete trust.</strong><br />
                Companies plug into us—we handle the rest.
            </div>

            <h2 id="quickstart-why-matters" className="text-purple-600 dark:text-purple-400 font-bold text-2xl mt-10 mb-4 scroll-mt-24">Why this matters</h2>
            <p className="text-base mb-6 leading-relaxed">
                Companies are burning $28K+/mo on LLMs with no control or governance. Legal and infra gaps are slowing enterprise AI—we turn chaos into one clean, intelligent pipe.
            </p>

            <h2 id="quickstart-capabilities" className="text-purple-600 dark:text-purple-400 font-bold text-2xl mt-10 mb-4 scroll-mt-24">Key Capabilities</h2>
            <ul className="list-disc list-inside mb-8 ml-4 space-y-2 text-base">
                <li>
                    Intelligent automatic routing model system: <Link to="/docs/arms-routing" className="text-primary hover:underline font-semibold">ARMS</Link>
                </li>
                <li>
                    Enterprise-grade<Link to="/docs/compliance-engine" className="text-primary hover:underline font-semibold"> compliance</Link> (PII, policy, copyright, and more)
                </li>
                <li>
                    Lightning-fast prompt<Link to="/docs/prompt-caching" className="text-primary hover:underline font-semibold"> caching</Link>
                </li>
                <li>
                    Structured, machine-readable <Link to="/docs/structured-outputs" className="text-primary hover:underline font-semibold">outputs</Link>
                </li>
                <li>
                    Self-service <Link to="/docs/provisioning-api-keys" className="text-primary hover:underline font-semibold">API key provisioning</Link>
                </li>
            </ul>

            <h2 id="quickstart-getting-started" className="text-purple-600 dark:text-purple-400 font-bold text-2xl mt-10 mb-4 scroll-mt-24">Getting Started</h2>
            <ol className="list-decimal list-inside ml-4 mb-6 text-base font-medium">
                <li>Install the SDK</li>
            </ol>
            <InstallTabsBlock />

            <ol start={2} className="list-decimal list-inside ml-4 mb-6 text-base font-medium">
                <li>Connect and generate a response</li>
            </ol>
            <IDECodeBlock />

            <h2 id="quickstart-customization" className="text-purple-600 dark:text-purple-400 font-bold text-2xl mt-10 mb-4 scroll-mt-24">Customization Options</h2>
            <ul className="list-disc list-inside mb-8 ml-4 space-y-2 text-base">
                <li><strong>prefs:</strong> Pass model preferences out of the ones registered to give that model a higher priority over others.</li>
                <li><strong>cp_tradeoff_parameter:</strong> Control the balance between cost and performance (0 = lowest cost, 1 = highest performance).</li>
                <li><strong>compliance_enabled:</strong> Enable or disable compliance checks per request.</li>
            </ul>

            <h2 id="quickstart-support" className="text-purple-600 dark:text-purple-400 font-bold text-2xl mt-10 mb-4 scroll-mt-24">Support & Contact</h2>
            <p className="text-base mb-6 leading-relaxed">
                For integration help, feature requests, or support, contact the product team or refer to in-code docstrings and comments.<br />
                You can also <a href="/#contact-footer" className="text-primary hover:underline font-semibold">contact us here</a>.
            </p>

            <div className="mt-12 text-muted-foreground text-base">
                <strong className="text-foreground">Guidera: The future of LLM orchestration, today.</strong>
            </div>
        </div>
    );
};

export default Quickstart;
