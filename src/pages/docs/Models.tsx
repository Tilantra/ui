import React, { useEffect } from 'react';
import { useDocsOnThisPage } from '../Docs';

const ON_THIS_PAGE = [
    { label: 'Supported Models', anchor: 'supported-models' },
    { label: 'Model Access', anchor: 'model-access' },
    { label: 'How to Select a Model', anchor: 'how-to-select' },
    { label: 'Stats', anchor: 'stats' },
];

const MODEL_GROUPS = [
    {
        provider: 'Qwen',
        models: [
            { id: 'qwen3-large', name: 'Qwen3 Large', mapped: 'qwen3-235b-a22b-thinking' },
            { id: 'qwen3-small', name: 'Qwen3 Small', mapped: 'qwen3-32b-thinking' },
            { id: 'qwen3-medium', name: 'Qwen3 Medium', mapped: 'qwen3-30b-a3b-thinking' },
            { id: 'qwq', name: 'QWQ', mapped: 'qwq-32b' },
            { id: 'qwen2.5-max', name: 'Qwen2.5 Max', mapped: 'qwen2.5-max' },
            { id: 'qwen2.5', name: 'Qwen2.5', mapped: 'qwen2.5-72b-instruct-turbo' },
            { id: 'qwen2.5-7b', name: 'Qwen2.5 7B', mapped: 'qwen2.5-7b-instruct-turbo' },
        ],
    },
    {
        provider: 'Google',
        models: [
            { id: 'gemini2-flash', name: 'Gemini 2 Flash', mapped: 'gemini-2.0-flash-001' },
            { id: 'gemini2.5-pro', name: 'Gemini 2.5 Pro', mapped: 'gemini-2.5-pro-preview-05-06' },
            { id: 'gemini2.5-pro-old', name: 'Gemini 2.5 Pro (Old)', mapped: 'gemini-2.5-pro-preview-03-25' },
            { id: 'gemini2.5-flash', name: 'Gemini 2.5 Flash', mapped: 'gemini-2.5-flash-preview-05-20' },
            { id: 'gemini2.5-flash-old', name: 'Gemini 2.5 Flash (Old)', mapped: 'gemini-2.5-flash-preview-04-17' },
            { id: 'gemini2-flash-lite', name: 'Gemini 2 Flash Lite', mapped: 'gemini-2.0-flash-lite-001' },
            { id: 'learnlm2-flash', name: 'LearnLM 2 Flash', mapped: 'learnlm-2.0-flash-experimental' },
            { id: 'learnlm1.5-pro', name: 'LearnLM 1.5 Pro', mapped: 'learnlm-1.5-pro-experimental' },
        ],
    },
    {
        provider: 'Meta',
        models: [
            { id: 'llama3', name: 'Llama 3', mapped: 'llama-3.3-70b-instruct-turbo' },
            { id: 'llama4', name: 'Llama 4', mapped: 'llama4-maverick-instruct-basic' },
            { id: 'gemma3', name: 'Gemma 3', mapped: 'gemma-3-27b-it' },
        ],
    },
    {
        provider: 'OpenAI',
        models: [
            { id: 'o3-high', name: 'O3 High', mapped: 'o3-2025-04-16-high' },
            { id: 'o3-medium', name: 'O3 Medium', mapped: 'o3-2025-04-16-medium' },
            { id: 'o4-mini-high', name: 'O4 Mini High', mapped: 'o4-mini-2025-04-16-high' },
            { id: 'o4-mini-medium', name: 'O4 Mini Medium', mapped: 'o4-mini-2025-04-16-medium' },
            { id: 'gpt4', name: 'GPT-4', mapped: 'gpt-4.1-2025-04-14' },
            { id: 'gpt4-mini', name: 'GPT-4 Mini', mapped: 'gpt-4.1-mini-2025-04-14' },
            { id: 'gpt4-nano', name: 'GPT-4 Nano', mapped: 'gpt-4.1-nano-2025-04-14' },
            { id: 'gpt4.5', name: 'GPT-4.5', mapped: 'gpt-4.5-preview-2025-02-27' },
            { id: 'chatgpt4o', name: 'ChatGPT-4o', mapped: 'chatgpt-4o-latest-2025-03-27' },
            { id: 'gpt4o', name: 'GPT-4o', mapped: 'gpt-4o-2024-11-20' },
            { id: 'gpt4o-mini', name: 'GPT-4o Mini', mapped: 'gpt-4o-mini-2024-07-18' },
        ],
    },
    {
        provider: 'Grok',
        models: [
            { id: 'grok3', name: 'Grok 3', mapped: 'grok-3-beta' },
            { id: 'grok3-mini-high', name: 'Grok 3 Mini High', mapped: 'grok-3-mini-beta-high' },
        ],
    },
    {
        provider: 'DeepSeek',
        models: [
            { id: 'deepseek-v3', name: 'DeepSeek V3', mapped: 'deepseek-v3-0324' },
            { id: 'deepseek-r1', name: 'DeepSeek R1', mapped: 'deepseek-r1' },
            { id: 'deepseek-r1-llama', name: 'DeepSeek R1 Llama', mapped: 'deepseek-r1-distill-llama-70b' },
            { id: 'deepseek-r1-qwen', name: 'DeepSeek R1 Qwen', mapped: 'deepseek-r1-distill-qwen-32b' },
        ],
    },
    {
        provider: 'Anthropic',
        models: [
            { id: 'claude3-sonnet-thinking', name: 'Claude 3 Sonnet Thinking', mapped: 'claude-3-7-sonnet-20250219-thinking-64k' },
            { id: 'claude3-sonnet', name: 'Claude 3 Sonnet', mapped: 'claude-3-7-sonnet-20250219-base' },
            { id: 'claude4-opus-thinking', name: 'Claude 4 Opus Thinking', mapped: 'claude-4-opus-20250514-thinking-32k' },
            { id: 'claude4-sonnet-thinking', name: 'Claude 4 Sonnet Thinking', mapped: 'claude-4-sonnet-20250514-thinking-64k' },
            { id: 'claude4-opus', name: 'Claude 4 Opus', mapped: 'claude-4-opus-20250514-base' },
            { id: 'claude4-sonnet', name: 'Claude 4 Sonnet', mapped: 'claude-4-sonnet-20250514-base' },
            { id: 'claude3.5-sonnet', name: 'Claude 3.5 Sonnet', mapped: 'claude-3-5-sonnet-20241022' },
            { id: 'claude3.5-haiku', name: 'Claude 3.5 Haiku', mapped: 'claude-3-5-haiku-20241022' },
        ],
    },
    {
        provider: 'Microsoft',
        models: [
            { id: 'step2', name: 'Step 2', mapped: 'step-2-16k-202411' },
            { id: 'phi4', name: 'Phi 4', mapped: 'phi-4-reasoning-plus' },
        ],
    },
    {
        provider: 'Tencent',
        models: [
            { id: 'hunyuan', name: 'Hunyuan', mapped: 'hunyuan-turbos-20250313' },
        ],
    },
    {
        provider: 'Mistral',
        models: [
            { id: 'mistral-medium', name: 'Mistral Medium', mapped: 'mistral-medium-2505' },
            { id: 'mistral-small', name: 'Mistral Small', mapped: 'mistral-small-2503' },
            { id: 'mistral-large', name: 'Mistral Large', mapped: 'mistral-large-2411' },
        ],
    },
    {
        provider: 'Cohere',
        models: [
            { id: 'command-r-plus', name: 'Command R Plus', mapped: 'command-r-plus-08-2024' },
            { id: 'command-r', name: 'Command R', mapped: 'command-r-08-2024' },
        ],
    },
    {
        provider: 'Amazon',
        models: [
            { id: 'nova-pro', name: 'Nova Pro', mapped: 'amazon.nova-pro-v1:0' },
            { id: 'nova-lite', name: 'Nova Lite', mapped: 'amazon.nova-lite-v1:0' },
            { id: 'nova-micro', name: 'Nova Micro', mapped: 'amazon.nova-micro-v1:0' },
        ],
    },
    {
        provider: 'Dracarys',
        models: [
            { id: 'dracarys2', name: 'Dracarys2', mapped: 'dracarys2-72b-instruct' },
            { id: 'dracarys2-llama', name: 'Dracarys2 Llama', mapped: 'dracarys2-llama-3.1-70b-instruct' },
        ],
    },
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

const Models: React.FC = () => {
    const { setLinks } = useDocsOnThisPage();
    useEffect(() => {
        setLinks(ON_THIS_PAGE);
        return () => setLinks([]);
    }, [setLinks]);

    return (
        <div className="flex flex-col flex-1 w-full max-w-[1200px] mx-auto px-4 box-border pb-12 font-sans">
            <div className="flex-3 min-w-0 break-words text-base">
                <h1 className="text-primary font-extrabold text-4xl mb-6">Models</h1>
                <p className="text-lg text-muted-foreground mb-8 leading-relaxed">
                    Welcome to the heart of Guidera’s platform—our ever-growing collection of powerful AI models. Whether you’re building for scale, speed, or experimentation, Guidera makes it simple to access the world’s best language models with a single API key.<br /><br />
                    <strong className="text-foreground">Unified access, unlimited potential:</strong> With Guidera, you don’t need to juggle multiple accounts or integrations. One key unlocks every model we support, and we’re adding more all the time. Today, you can choose from over 40 models across leading providers like OpenAI, Google, Meta, Anthropic, and more. In the next two months, we’ll be expanding to support 100+ models—so you’re always ahead of the curve.<br /><br />
                    <strong className="text-foreground">Built for everyone:</strong> Whether you’re an individual exploring new ideas or an enterprise with strict requirements, Guidera adapts to your needs. Enjoy a generous trial period, flexible rate limits, and seamless upgrades as your usage grows. For teams, our enterprise controls let you specify exactly which models are available to your users, ensuring compliance and cost control.<br /><br />
                    <strong className="text-foreground">Explore the table below</strong> to see all currently available models, and check back often as our library continues to expand. If there’s a model you’d like to see, <a href="/docs/community" className="text-primary hover:underline">let us know</a>—we’re always listening!
                </p>

                {/* Supported Models */}
                <h2 id="supported-models" className="text-purple-600 dark:text-purple-400 font-bold text-2xl mt-10 mb-4 scroll-mt-24">Supported Models</h2>
                <div className="overflow-x-auto mb-10 rounded-lg border border-border shadow-sm">
                    <table className="min-w-[700px] w-full border-collapse text-base">
                        <thead>
                            <tr className="bg-muted/50">
                                <th className="p-3 text-left font-semibold border-b border-border">Provider</th>
                                <th className="p-3 text-left font-semibold border-b border-border">Model Name</th>
                                <th className="p-3 text-left font-semibold border-b border-border">Model ID</th>
                                <th className="p-3 text-left font-semibold border-b border-border">Mapped ID</th>
                            </tr>
                        </thead>
                        <tbody>
                            {MODEL_GROUPS.map((group) => (
                                group.models.map((model, idx) => (
                                    <tr key={model.id} className="bg-card hover:bg-muted/30 transition-colors border-b last:border-0 border-border">
                                        {idx === 0 && (
                                            <td rowSpan={group.models.length} className="p-3 align-top font-bold text-purple-600 dark:text-purple-400 bg-muted/20 border-r border-border">{group.provider}</td>
                                        )}
                                        <td className="p-3 border-r border-border">{model.name}</td>
                                        <td className="p-3 border-r border-border font-mono text-sm text-foreground">{model.id}</td>
                                        <td className="p-3 font-mono text-sm text-muted-foreground">{model.mapped}</td>
                                    </tr>
                                ))
                            ))}
                        </tbody>
                    </table>
                </div>

                {/* Model Access */}
                <h2 id="model-access" className="text-purple-600 dark:text-purple-400 font-bold text-2xl mt-10 mb-4 scroll-mt-24">Model Access</h2>
                <div className="text-base text-foreground mb-8 leading-relaxed">
                    <strong className="text-foreground">Enterprise users:</strong> When you register, you specify which models are allowed for your organization. Guidera will always route to the best model only out of those you have approved.<br /><br />
                    <strong className="text-foreground">Individual users:</strong> You get a trial period with access to all models, subject to a rate limit. After the trial, you can purchase a key to continue using your preferred models.
                </div>

                {/* How to Select a Model */}
                <h2 id="how-to-select" className="text-purple-600 dark:text-purple-400 font-bold text-2xl mt-10 mb-4 scroll-mt-24">How to Select a Model</h2>
                <div className="mb-6 text-sm">
                    <div className="mb-4">
                        <strong className="text-foreground text-base block mb-2">Enterprise users:</strong>
                        {codeBlock(`const response = await client.chat({
  models: ['gpt4o', 'llama3', 'claude3.5-sonnet'], // Only your allowed models
  messages: [
    { role: 'user', content: 'Hello!' }
  ]
});`)}
                    </div>
                    <div>
                        <strong className="text-foreground text-base block mb-2">Individual users:</strong>
                        {codeBlock(`const response = await client.chat({
  model: 'gpt4o',
  messages: [
    { role: 'user', content: 'Hello!' }
  ]
});`)}
                    </div>
                </div>

                {/* Stats */}
                <h2 id="stats" className="text-purple-600 dark:text-purple-400 font-bold text-2xl mt-10 mb-4 scroll-mt-24">Stats</h2>
                <ul className="list-disc list-inside mb-8 ml-4 space-y-2 text-base text-foreground">
                    <li>{MODEL_GROUPS.reduce((acc, g) => acc + g.models.length, 0)} models supported</li>
                    <li>All major providers: Qwen, Google, Meta, OpenAI, Grok, DeepSeek, Anthropic, Microsoft, Tencent, Mistral, Cohere, Amazon, Dracarys</li>
                    <li>Enterprise and individual user flows supported</li>
                    <li>Best-in-class routing and compliance</li>
                </ul>
            </div>
        </div>
    );
};

export default Models;
