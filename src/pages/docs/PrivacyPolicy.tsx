import React, { useEffect } from 'react';
import { useDocsOnThisPage } from '../Docs';

const ON_THIS_PAGE = [
    { label: 'Introduction', anchor: 'privacy-introduction' },
    { label: 'Information We Collect', anchor: 'privacy-collection' },
    { label: 'How We Use Your Information', anchor: 'privacy-usage' },
    { label: 'Data Storage and Security', anchor: 'privacy-storage' },
    { label: 'Third-Party Sharing', anchor: 'privacy-sharing' },
    { label: 'User Rights and Controls', anchor: 'privacy-rights' },
    { label: 'Children\'s Privacy', anchor: 'privacy-children' },
    { label: 'Changes to This Policy', anchor: 'privacy-changes' },
    { label: 'Contact Us', anchor: 'privacy-contact' },
];

const PrivacyPolicy: React.FC = () => {
    const { setLinks } = useDocsOnThisPage();
    useEffect(() => {
        setLinks(ON_THIS_PAGE);
        return () => setLinks([]);
    }, [setLinks]);

    return (
        <div className="max-w-[900px] mx-auto text-foreground font-sans pb-12">
            <h1 id="privacy-overview" className="text-primary font-extrabold text-4xl mb-6">Privacy Policy for Capsule Hub</h1>
            <p className="text-lg font-semibold text-muted-foreground mb-8">
                Effective Date: January 5, 2026
            </p>

            <h2 id="privacy-introduction" className="text-purple-600 dark:text-purple-400 font-bold text-2xl mt-12 mb-4 scroll-mt-24">1. Introduction</h2>
            <p className="text-base mb-6 leading-relaxed">
                Capsule Hub ("we," "our," or "us") is dedicated to protecting your privacy. This Privacy Policy explains how we collect, use, and safeguard your information when you use our Chrome Extension, Capsule Hub. Our core mission is to provide a seamless context transfer between AI platforms while maintaining the highest standards of data integrity.
            </p>

            <h2 id="privacy-collection" className="text-purple-600 dark:text-purple-400 font-bold text-2xl mt-12 mb-4 scroll-mt-24">2. Information We Collect</h2>

            <h3 className="text-xl font-semibold mb-3 mt-6">2.1 Personal Information</h3>
            <ul className="list-disc list-inside mb-6 ml-4 space-y-2 text-base">
                <li><strong>Authentication Data</strong>: When you sign in to use Capsule Hub, we collect credentials (such as tokens) necessary to authenticate your account with the Tilantra backend.</li>
                <li><strong>Account Identifiers</strong>: We may store your email or user ID to manage your "Team" memberships and capsule ownership.</li>
            </ul>

            <h3 className="text-xl font-semibold mb-3 mt-6">2.2 User Content (Chat Data)</h3>
            <ul className="list-disc list-inside mb-6 ml-4 space-y-2 text-base">
                <li><strong>Capsule Content</strong>: When you explicitly trigger the "Generate Capsule" feature, our extension reads the text content of your active conversation on supported AI platforms (e.g., ChatGPT, Claude, Gemini). This content is stored as a "Capsule" for your future use.</li>
                <li><strong>Injection Context</strong>: When you use the "Drop" feature, we access the target chat interface solely to facilitate the insertion of your saved capsule content.</li>
            </ul>

            <h3 className="text-xl font-semibold mb-3 mt-6">2.3 Technical Information</h3>
            <ul className="list-disc list-inside mb-6 ml-4 space-y-2 text-base">
                <li><strong>App Usage Data</strong>: We may collect non-identifiable data about how you interact with the extension (e.g., frequency of capsule generation) to improve our service.</li>
                <li><strong>Platform Metadata</strong>: We detect which AI platform you are currently using (e.g., chatgpt.com) to provide the appropriate integration logic.</li>
            </ul>

            <h2 id="privacy-usage" className="text-purple-600 dark:text-purple-400 font-bold text-2xl mt-12 mb-4 scroll-mt-24">3. How We Use Your Information</h2>
            <p className="text-base mb-6 leading-relaxed">
                We use the collected information strictly for the following purposes:
            </p>
            <ul className="list-disc list-inside mb-8 ml-4 space-y-2 text-base">
                <li><strong>Core Functionality</strong>: To generate, store, and inject conversation context (Capsules) as requested by you.</li>
                <li><strong>Team Collaboration</strong>: To allow you to filter and share capsules with designated team members.</li>
                <li><strong>Personalization</strong>: To remember your preferences, such as team selection and search settings.</li>
                <li><strong>Security</strong>: To protect your account and ensure your capsules are only accessible by you or your authorized team.</li>
            </ul>

            <h2 id="privacy-storage" className="text-purple-600 dark:text-purple-400 font-bold text-2xl mt-12 mb-4 scroll-mt-24">4. Data Storage and Security</h2>

            <h3 className="text-xl font-semibold mb-3 mt-6">4.1 Storage Locations</h3>
            <ul className="list-disc list-inside mb-6 ml-4 space-y-2 text-base">
                <li><strong>Tilantra Backend</strong>: Your generated capsules and authentication tokens are stored securely on our central servers.</li>
                <li><strong>Local Storage</strong>: We use browser local storage to save temporary UI states and session preferences for a faster user experience.</li>
            </ul>

            <h3 className="text-xl font-semibold mb-3 mt-6">4.2 Security Measures</h3>
            <p className="text-base mb-6 leading-relaxed">
                We implement industry-standard encryption and security protocols to protect your data during transmission and at rest. However, no method of transmission over the internet is 100% secure, and we cannot guarantee absolute security.
            </p>

            <h2 id="privacy-sharing" className="text-purple-600 dark:text-purple-400 font-bold text-2xl mt-12 mb-4 scroll-mt-24">5. Third-Party Sharing</h2>
            <ul className="list-disc list-inside mb-8 ml-4 space-y-2 text-base">
                <li><strong>No Sale of Data</strong>: We do not sell, trade, or rent your personal information or chat content to third parties.</li>
                <li><strong>LLM Platforms</strong>: We interact with AI platforms (OpenAI, Anthropic, Google) only to read content for your capsules or inject content at your request. We do not provide your Tilantra account data to these third parties.</li>
                <li><strong>Legal Requirements</strong>: We may disclose information if required by law or in response to valid requests by public authorities.</li>
            </ul>

            <h2 id="privacy-rights" className="text-purple-600 dark:text-purple-400 font-bold text-2xl mt-12 mb-4 scroll-mt-24">6. User Rights and Controls</h2>
            <ul className="list-disc list-inside mb-8 ml-4 space-y-2 text-base">
                <li><strong>Access and Delete</strong>: You can view and manage your library of capsules directly through the extension popup.</li>
                <li><strong>Account Management</strong>: You can manage your team associations and account settings through the Tilantra dashboard.</li>
                <li><strong>Data Portability</strong>: Your capsules are stored for your benefit to be moved between different AI models.</li>
            </ul>

            <h2 id="privacy-children" className="text-purple-600 dark:text-purple-400 font-bold text-2xl mt-12 mb-4 scroll-mt-24">7. Children's Privacy</h2>
            <p className="text-base mb-6 leading-relaxed">
                Our extension is not intended for use by children under the age of 13. We do not knowingly collect personal information from children.
            </p>

            <h2 id="privacy-changes" className="text-purple-600 dark:text-purple-400 font-bold text-2xl mt-12 mb-4 scroll-mt-24">8. Changes to This Privacy Policy</h2>
            <p className="text-base mb-6 leading-relaxed">
                We may update our Privacy Policy from time to time. We will notify you of any changes by posting the new Privacy Policy on this page and updating the extension version.
            </p>

            <h2 id="privacy-contact" className="text-purple-600 dark:text-purple-400 font-bold text-2xl mt-12 mb-4 scroll-mt-24">9. Contact Us</h2>
            <p className="text-base mb-6 leading-relaxed">
                If you have any questions about this Privacy Policy, please contact us at:
            </p>
            <ul className="list-disc list-inside mb-8 ml-4 space-y-2 text-base">
                <li><strong>Email</strong>: <a href="mailto:tech@tilantra.com" className="text-primary hover:underline">tech@tilantra.com</a></li>
                <li><strong>Website</strong>: <a href="https://tilantra.com" target="_blank" rel="noopener noreferrer" className="text-primary hover:underline">tilantra.com</a></li>
            </ul>

            <div className="mt-12 border-t border-border pt-8 text-muted-foreground text-sm">
                © 2026 Tilantra. All rights reserved.
            </div>
        </div>
    );
};

export default PrivacyPolicy;
