import React, { useEffect } from 'react';
import { useDocsOnThisPage } from '../Docs';
import CodeBlock from './CodeBlock';

const PURPLE = '#7c3aed';
const BLUE = '#2563eb';
const headingScrollMargin = { scrollMarginTop: 64 };

const ON_THIS_PAGE = [
  { label: 'Overview', anchor: 'provisioning-api-keys-overview' },
  { label: 'The Problem', anchor: 'provisioning-api-keys-problem' },
  { label: 'Our Solution: Secure, Self-Service API Key Management', anchor: 'provisioning-api-keys-solution' },
  { label: 'How It Works', anchor: 'provisioning-api-keys-how' },
  { label: 'Benefits', anchor: 'provisioning-api-keys-benefits' },
];

const ProvisioningAPIKeys: React.FC = () => {
  const { setLinks } = useDocsOnThisPage();
  useEffect(() => {
    setLinks(ON_THIS_PAGE);
    return () => setLinks([]);
  }, [setLinks]);

  return (
    <div style={{ maxWidth: 900, margin: '0 auto', color: '#222', fontFamily: 'inherit', padding: '2rem 0', background: '#fff' }}>
      <h1 id="provisioning-api-keys-overview" style={{ color: BLUE, fontWeight: 800, fontSize: '2.2rem', marginBottom: 18 }}>Provisioning API Keys</h1>
    <p style={{ fontSize: '1.13rem', marginBottom: 28 }}>
        Secure, self-service API key management makes onboarding, access control, and security effortless for users and teams of any size.
      </p>
      <h2 id="provisioning-api-keys-problem" style={{ ...headingScrollMargin, color: PURPLE, fontWeight: 700, fontSize: '1.18rem', marginTop: 36, marginBottom: 10 }}>The Problem</h2>
      <ul style={{ margin: '0 0 24px 20px', color: '#222', fontSize: '1.05rem' }}>
        <li>Managing access for users and teams can be complex and risky.</li>
      </ul>
      <h2 id="provisioning-api-keys-solution" style={{ ...headingScrollMargin, color: PURPLE, fontWeight: 700, fontSize: '1.18rem', marginTop: 36, marginBottom: 10 }}>Our Solution: Secure, Self-Service API Key Management</h2>
      <ul style={{ margin: '0 0 24px 20px', color: '#222', fontSize: '1.05rem' }}>
        <li><b>On-Demand Generation:</b> Users and companies can generate and manage API keys as needed.</li>
        <li><b>Automatic Expiry:</b> Tokens expire automatically for enhanced security.</li>
        <li><b>Easy Revocation:</b> Keys can be revoked or refreshed at any time.</li>
      </ul>
      <h2 id="provisioning-api-keys-how" style={{ ...headingScrollMargin, color: PURPLE, fontWeight: 700, fontSize: '1.18rem', marginTop: 36, marginBottom: 10 }}>How It Works</h2>
      <ol style={{ margin: '0 0 24px 24px', color: '#222', fontSize: '1.05rem', lineHeight: 1.7 }}>
        <li><b>Self-Service Portal:</b> Generate and manage keys via the API or dashboard.</li>
        <li><b>Secure Storage:</b> Tokens are stored securely and expire after a set period.</li>
        <li><b>Access Control:</b> Only authorized users can access your resources.</li>
      </ol>
      <h2 id="provisioning-api-keys-benefits" style={{ ...headingScrollMargin, color: PURPLE, fontWeight: 700, fontSize: '1.18rem', marginTop: 36, marginBottom: 10 }}>Benefits</h2>
    <ul style={{ margin: '0 0 24px 20px', color: '#222', fontSize: '1.05rem' }}>
        <li>Effortless onboarding for new users and teams.</li>
        <li>Enhanced security and control.</li>
        <li>Scalable for organizations of any size.</li>
    </ul>
  </div>
);
};

export default ProvisioningAPIKeys; 