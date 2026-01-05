import React, { useEffect } from 'react';
import { useDocsOnThisPage } from '../Docs';

const BLUE = '#2563eb';
const PURPLE = '#7c3aed';
const headingScrollMargin = { scrollMarginTop: 64 };

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
    <div style={{ maxWidth: 900, margin: '0 auto', color: '#222', fontFamily: 'inherit', padding: '2rem 0', background: '#fff' }}>
      <h1 id="privacy-overview" style={{ color: BLUE, fontWeight: 800, fontSize: '2.2rem', marginBottom: 18 }}>Privacy Policy for Capsule Hub</h1>
      <p style={{ fontSize: '1.13rem', marginBottom: 28, fontWeight: 600 }}>
        Effective Date: January 5, 2026
      </p>

      <h2 id="privacy-introduction" style={{ ...headingScrollMargin, color: PURPLE, fontWeight: 700, fontSize: '1.5rem', marginTop: 36, marginBottom: 15 }}>1. Introduction</h2>
      <p style={{ fontSize: '1.07rem', marginBottom: 18, lineHeight: 1.6 }}>
        Capsule Hub ("we," "our," or "us") is dedicated to protecting your privacy. This Privacy Policy explains how we collect, use, and safeguard your information when you use our Chrome Extension, Capsule Hub. Our core mission is to provide a seamless context transfer between AI platforms while maintaining the highest standards of data integrity.
      </p>

      <h2 id="privacy-collection" style={{ ...headingScrollMargin, color: PURPLE, fontWeight: 700, fontSize: '1.5rem', marginTop: 36, marginBottom: 15 }}>2. Information We Collect</h2>
      
      <h3 style={{ fontSize: '1.2rem', fontWeight: 600, marginBottom: 10 }}>2.1 Personal Information</h3>
      <ul style={{ margin: '0 0 24px 20px', color: '#222', fontSize: '1.05rem', lineHeight: 1.6 }}>
        <li><strong>Authentication Data</strong>: When you sign in to use Capsule Hub, we collect credentials (such as tokens) necessary to authenticate your account with the Tilantra backend.</li>
        <li><strong>Account Identifiers</strong>: We may store your email or user ID to manage your "Team" memberships and capsule ownership.</li>
      </ul>

      <h3 style={{ fontSize: '1.2rem', fontWeight: 600, marginBottom: 10 }}>2.2 User Content (Chat Data)</h3>
      <ul style={{ margin: '0 0 24px 20px', color: '#222', fontSize: '1.05rem', lineHeight: 1.6 }}>
        <li><strong>Capsule Content</strong>: When you explicitly trigger the "Generate Capsule" feature, our extension reads the text content of your active conversation on supported AI platforms (e.g., ChatGPT, Claude, Gemini). This content is stored as a "Capsule" for your future use.</li>
        <li><strong>Injection Context</strong>: When you use the "Drop" feature, we access the target chat interface solely to facilitate the insertion of your saved capsule content.</li>
      </ul>

      <h3 style={{ fontSize: '1.2rem', fontWeight: 600, marginBottom: 10 }}>2.3 Technical Information</h3>
      <ul style={{ margin: '0 0 24px 20px', color: '#222', fontSize: '1.05rem', lineHeight: 1.6 }}>
        <li><strong>App Usage Data</strong>: We may collect non-identifiable data about how you interact with the extension (e.g., frequency of capsule generation) to improve our service.</li>
        <li><strong>Platform Metadata</strong>: We detect which AI platform you are currently using (e.g., chatgpt.com) to provide the appropriate integration logic.</li>
      </ul>

      <h2 id="privacy-usage" style={{ ...headingScrollMargin, color: PURPLE, fontWeight: 700, fontSize: '1.5rem', marginTop: 36, marginBottom: 15 }}>3. How We Use Your Information</h2>
      <p style={{ fontSize: '1.07rem', marginBottom: 18, lineHeight: 1.6 }}>
        We use the collected information strictly for the following purposes:
      </p>
      <ul style={{ margin: '0 0 24px 20px', color: '#222', fontSize: '1.05rem', lineHeight: 1.6 }}>
        <li><strong>Core Functionality</strong>: To generate, store, and inject conversation context (Capsules) as requested by you.</li>
        <li><strong>Team Collaboration</strong>: To allow you to filter and share capsules with designated team members.</li>
        <li><strong>Personalization</strong>: To remember your preferences, such as team selection and search settings.</li>
        <li><strong>Security</strong>: To protect your account and ensure your capsules are only accessible by you or your authorized team.</li>
      </ul>

      <h2 id="privacy-storage" style={{ ...headingScrollMargin, color: PURPLE, fontWeight: 700, fontSize: '1.5rem', marginTop: 36, marginBottom: 15 }}>4. Data Storage and Security</h2>
      
      <h3 style={{ fontSize: '1.2rem', fontWeight: 600, marginBottom: 10 }}>4.1 Storage Locations</h3>
      <ul style={{ margin: '0 0 24px 20px', color: '#222', fontSize: '1.05rem', lineHeight: 1.6 }}>
        <li><strong>Tilantra Backend</strong>: Your generated capsules and authentication tokens are stored securely on our central servers.</li>
        <li><strong>Local Storage</strong>: We use browser local storage to save temporary UI states and session preferences for a faster user experience.</li>
      </ul>

      <h3 style={{ fontSize: '1.2rem', fontWeight: 600, marginBottom: 10 }}>4.2 Security Measures</h3>
      <p style={{ fontSize: '1.07rem', marginBottom: 18, lineHeight: 1.6 }}>
        We implement industry-standard encryption and security protocols to protect your data during transmission and at rest. However, no method of transmission over the internet is 100% secure, and we cannot guarantee absolute security.
      </p>

      <h2 id="privacy-sharing" style={{ ...headingScrollMargin, color: PURPLE, fontWeight: 700, fontSize: '1.5rem', marginTop: 36, marginBottom: 15 }}>5. Third-Party Sharing</h2>
      <ul style={{ margin: '0 0 24px 20px', color: '#222', fontSize: '1.05rem', lineHeight: 1.6 }}>
        <li><strong>No Sale of Data</strong>: We do not sell, trade, or rent your personal information or chat content to third parties.</li>
        <li><strong>LLM Platforms</strong>: We interact with AI platforms (OpenAI, Anthropic, Google) only to read content for your capsules or inject content at your request. We do not provide your Tilantra account data to these third parties.</li>
        <li><strong>Legal Requirements</strong>: We may disclose information if required by law or in response to valid requests by public authorities.</li>
      </ul>

      <h2 id="privacy-rights" style={{ ...headingScrollMargin, color: PURPLE, fontWeight: 700, fontSize: '1.5rem', marginTop: 36, marginBottom: 15 }}>6. User Rights and Controls</h2>
      <ul style={{ margin: '0 0 24px 20px', color: '#222', fontSize: '1.05rem', lineHeight: 1.6 }}>
        <li><strong>Access and Delete</strong>: You can view and manage your library of capsules directly through the extension popup.</li>
        <li><strong>Account Management</strong>: You can manage your team associations and account settings through the Tilantra dashboard.</li>
        <li><strong>Data Portability</strong>: Your capsules are stored for your benefit to be moved between different AI models.</li>
      </ul>

      <h2 id="privacy-children" style={{ ...headingScrollMargin, color: PURPLE, fontWeight: 700, fontSize: '1.5rem', marginTop: 36, marginBottom: 15 }}>7. Children's Privacy</h2>
      <p style={{ fontSize: '1.07rem', marginBottom: 18, lineHeight: 1.6 }}>
        Our extension is not intended for use by children under the age of 13. We do not knowingly collect personal information from children.
      </p>

      <h2 id="privacy-changes" style={{ ...headingScrollMargin, color: PURPLE, fontWeight: 700, fontSize: '1.5rem', marginTop: 36, marginBottom: 15 }}>8. Changes to This Privacy Policy</h2>
      <p style={{ fontSize: '1.07rem', marginBottom: 18, lineHeight: 1.6 }}>
        We may update our Privacy Policy from time to time. We will notify you of any changes by posting the new Privacy Policy on this page and updating the extension version.
      </p>

      <h2 id="privacy-contact" style={{ ...headingScrollMargin, color: PURPLE, fontWeight: 700, fontSize: '1.5rem', marginTop: 36, marginBottom: 15 }}>9. Contact Us</h2>
      <p style={{ fontSize: '1.07rem', marginBottom: 18, lineHeight: 1.6 }}>
        If you have any questions about this Privacy Policy, please contact us at:
      </p>
      <ul style={{ margin: '0 0 24px 20px', color: '#222', fontSize: '1.05rem', lineHeight: 1.6 }}>
        <li><strong>Email</strong>: <a href="mailto:tech@tilantra.com" style={{ color: BLUE }}>tech@tilantra.com</a></li>
        <li><strong>Website</strong>: <a href="https://tilantra.com" target="_blank" rel="noopener noreferrer" style={{ color: BLUE }}>tilantra.com</a></li>
      </ul>

      <div style={{ marginTop: 48, borderTop: '1px solid #eaecef', paddingTop: 24, color: '#666', fontSize: '1rem' }}>
        © 2026 Tilantra. All rights reserved.
      </div>
    </div>
  );
};

export default PrivacyPolicy;
