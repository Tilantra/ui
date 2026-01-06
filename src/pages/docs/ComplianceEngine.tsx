import React, { useEffect } from 'react';
import { useDocsOnThisPage } from '../Docs';

const ON_THIS_PAGE = [
    { label: 'Overview', anchor: 'compliance-overview' },
    { label: 'The Compliance Challenge', anchor: 'compliance-challenge' },
    { label: 'What is the Compliance Engine?', anchor: 'compliance-what' },
    { label: 'How the Compliance Engine Works', anchor: 'compliance-how' },
    { label: 'Types of Risks Mitigated', anchor: 'compliance-risks' },
    { label: 'Policy Management & Customization', anchor: 'compliance-policy' },
    { label: 'Compliance in Action: Example Scenarios', anchor: 'compliance-examples' },
    { label: 'Key Benefits', anchor: 'compliance-benefits' },
];

const ComplianceEngine: React.FC = () => {
    const { setLinks } = useDocsOnThisPage();
    useEffect(() => {
        setLinks(ON_THIS_PAGE);
        return () => setLinks([]);
    }, [setLinks]);

    return (
        <div className="max-w-[900px] mx-auto text-foreground font-sans pb-12">
            <h1 id="compliance-overview" className="text-primary font-extrabold text-4xl mb-6">Compliance Engine</h1>
            <p className="text-lg mb-8 leading-relaxed">
                The Compliance Engine is a two-stage, always-on safety net that ensures every interaction with Model Swap Router is secure, private, and policy-compliant—before and after the model is called.
            </p>

            <h2 id="compliance-challenge" className="text-purple-600 dark:text-purple-400 font-bold text-2xl mt-10 mb-4 scroll-mt-24">The Compliance Challenge</h2>
            <ul className="list-disc list-inside mb-8 ml-4 space-y-2 text-base">
                <li>AI systems can inadvertently leak sensitive data, violate privacy laws, or generate content that is non-compliant with company, legal, or ethical standards.</li>
                <li>Manual compliance checks are slow, error-prone, and not scalable for real-time applications.</li>
                <li>Regulatory requirements (GDPR, HIPAA, CCPA, etc.) and industry best practices demand robust, auditable controls.</li>
            </ul>

            <h2 id="compliance-what" className="text-purple-600 dark:text-purple-400 font-bold text-2xl mt-10 mb-4 scroll-mt-24">What is the Compliance Engine?</h2>
            <p className="text-base mb-6 leading-relaxed">
                The Compliance Engine is a two-stage, always-on safety net that ensures every interaction with Model Swap Router is secure, private, and policy-compliant—before and after the model is called.
            </p>

            <h2 id="compliance-how" className="text-purple-600 dark:text-purple-400 font-bold text-2xl mt-10 mb-4 scroll-mt-24">How the Compliance Engine Works</h2>
            <ol className="list-decimal list-inside ml-4 mb-8 text-base space-y-4">
                <li>
                    <strong>Pre-Compliance (Before Model Call):</strong>
                    <ul className="list-disc list-inside ml-6 mt-2 space-y-1">
                        <li><strong>PII & Secrets Detection:</strong> Every prompt is scanned for personally identifiable information (PII), secrets (API keys, passwords), and other sensitive data using advanced pattern recognition and AI-powered entity detection.</li>
                        <li><strong>Redaction:</strong> Detected sensitive data is automatically redacted or replaced with placeholders before the prompt is sent to any external model, ensuring nothing private ever leaves your environment.</li>
                        <li><strong>Input Policy Enforcement:</strong> Prompts are checked against your company’s input policies (e.g., no hate speech, no confidential data, no prohibited topics). Violations are flagged or blocked before any data is processed.</li>
                    </ul>
                </li>
                <li>
                    <strong>Post-Compliance (After Model Call):</strong>
                    <ul className="list-disc list-inside ml-6 mt-2 space-y-1">
                        <li><strong>Plagiarism & Copyright Checking:</strong> Model outputs are checked for plagiarism using web search and semantic similarity, ensuring you never inadvertently publish or use copyrighted material.</li>
                        <li><strong>Named Entity Recognition (NER):</strong> Outputs are scanned for sensitive entities (names, locations, organizations) to prevent accidental leaks.</li>
                        <li><strong>Output Policy Enforcement:</strong> Responses are validated against your output policies (e.g., no PII, no offensive content, no regulatory violations). Any issues are flagged, and unsafe outputs are withheld or replaced.</li>
                        <li><strong>Restoration:</strong> If redacted data is deemed safe, it is restored in the final output, maintaining both privacy and utility.</li>
                    </ul>
                </li>
            </ol>

            <h2 id="compliance-risks" className="text-purple-600 dark:text-purple-400 font-bold text-2xl mt-10 mb-4 scroll-mt-24">Types of Risks Mitigated</h2>
            <ul className="list-disc list-inside mb-8 ml-4 space-y-2 text-base">
                <li><strong>Data Leaks:</strong> Prevents accidental exposure of PII, credentials, or confidential information.</li>
                <li><strong>Policy Violations:</strong> Blocks or flags content that could violate company, legal, or ethical standards.</li>
                <li><strong>Copyright Infringement:</strong> Detects and prevents the use of plagiarized or copyrighted material.</li>
                <li><strong>Reputational Harm:</strong> Ensures outputs are safe, professional, and aligned with your brand values.</li>
            </ul>

            <h2 id="compliance-policy" className="text-purple-600 dark:text-purple-400 font-bold text-2xl mt-10 mb-4 scroll-mt-24">Policy Management & Customization</h2>
            <ul className="list-disc list-inside mb-8 ml-4 space-y-2 text-base">
                <li><strong>Custom Policies:</strong> Define your own input and output policies to match your industry, geography, or company requirements.</li>
                <li><strong>Auditability:</strong> All compliance checks are logged, providing a clear audit trail for regulators or internal review.</li>
                <li><strong>Real-Time Enforcement:</strong> Compliance is enforced in real time, with no impact on user experience or latency.</li>
            </ul>

            <h2 id="compliance-examples" className="text-purple-600 dark:text-purple-400 font-bold text-2xl mt-10 mb-4 scroll-mt-24">Compliance in Action: Example Scenarios</h2>
            <ul className="list-disc list-inside mb-8 ml-4 space-y-2 text-base">
                <li><strong>Healthcare:</strong> PHI (Protected Health Information) is automatically detected and redacted before prompts are sent to any model, ensuring HIPAA compliance.</li>
                <li><strong>Finance:</strong> Sensitive account numbers or transaction data are flagged and blocked, preventing data leaks and regulatory breaches.</li>
                <li><strong>Enterprise:</strong> Company-specific policies (e.g., no discussion of unreleased products) are enforced on every prompt and response.</li>
                <li><strong>Education:</strong> Plagiarism checks ensure that generated content is original and safe for academic use.</li>
            </ul>

            <h2 id="compliance-benefits" className="text-purple-600 dark:text-purple-400 font-bold text-2xl mt-10 mb-4 scroll-mt-24">Key Benefits</h2>
            <ul className="list-disc list-inside mb-8 ml-4 space-y-2 text-base">
                <li><strong>Trust & Safety:</strong> Every interaction is protected by multiple layers of compliance.</li>
                <li><strong>Regulatory Readiness:</strong> Meet the strictest legal and industry standards with ease.</li>
                <li><strong>Customizable:</strong> Tailor compliance to your unique needs and policies.</li>
                <li><strong>Invisible to Users:</strong> All checks happen in real time, with no disruption to the user experience.</li>
            </ul>
        </div>
    );
};

export default ComplianceEngine;
