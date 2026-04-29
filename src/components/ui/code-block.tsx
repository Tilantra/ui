import React from 'react';
import { Highlight, themes } from 'prism-react-renderer';
import { useTheme } from './theme-provider';
import { Check, Copy } from 'lucide-react';

interface CodeBlockProps {
    code: string;
    language?: string;
    className?: string;
}

export const CodeBlock: React.FC<CodeBlockProps> = ({ code, language = 'typescript', className = '' }) => {
    const { theme } = useTheme();
    const [copied, setCopied] = React.useState(false);

    // Default to vsDark for dark mode, vsLight for light mode
    const selectedTheme = theme === 'dark' ? themes.vsDark : themes.vsLight;

    const copyToClipboard = () => {
        navigator.clipboard.writeText(code);
        setCopied(true);
        setTimeout(() => setCopied(false), 2000);
    };

    return (
        <div className={`relative my-6 rounded-lg bg-muted/10 border border-border shadow-sm overflow-hidden font-mono text-sm ${className}`}>
            <div className="absolute top-2 right-2 z-10 flex gap-2">
                <button
                    className="flex items-center justify-center w-8 h-8 rounded-md bg-card border border-border text-muted-foreground hover:text-foreground hover:bg-muted transition-colors shadow-sm"
                    onClick={copyToClipboard}
                    aria-label="Copy code"
                >
                    {copied ? <Check className="w-4 h-4 text-green-500" /> : <Copy className="w-4 h-4" />}
                </button>
            </div>
            <div className="p-4 overflow-x-auto">
                <Highlight code={code.trim()} language={language} theme={selectedTheme}>
                    {({ className, style, tokens, getLineProps, getTokenProps }: any) => (
                        <pre className={className} style={{ ...style, background: 'transparent', margin: 0, padding: 0 }}>
                            <code className="block min-w-full">
                                {tokens.map((line: any[], i: number) => (
                                    <div key={i} className="flex">
                                        <span className="w-8 text-right pr-4 text-muted-foreground select-none opacity-50 shrink-0">
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
