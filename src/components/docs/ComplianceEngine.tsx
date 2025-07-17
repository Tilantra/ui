import React, { useEffect } from 'react';
import { useDocsOnThisPage } from '../Docs';

const PURPLE = '#7c3aed';
const BLUE = '#2563eb';
const headingScrollMargin = { scrollMarginTop: 64 };

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
    <div style={{ maxWidth: 900, margin: '0 auto', color: '#222', fontFamily: 'inherit', padding: '2rem 0', background: '#fff' }}>
      <h1 id="compliance-overview" style={{ color: BLUE, fontWeight: 800, fontSize: '2.2rem', marginBottom: 18 }}>Compliance Engine</h1>
      <p style={{ fontSize: '1.13rem', marginBottom: 28 }}>
        The Compliance Engine is a two-stage, always-on safety net that ensures every interaction with Model Swap Router is secure, private, and policy-compliant—before and after the model is called.
      </p>
      <h2 id="compliance-challenge" style={{ ...headingScrollMargin, color: PURPLE, fontWeight: 700, fontSize: '1.18rem', marginTop: 36, marginBottom: 10 }}>The Compliance Challenge</h2>
      <ul style={{ margin: '0 0 24px 20px', color: '#222', fontSize: '1.05rem' }}>
        <li>AI systems can inadvertently leak sensitive data, violate privacy laws, or generate content that is non-compliant with company, legal, or ethical standards.</li>
        <li>Manual compliance checks are slow, error-prone, and not scalable for real-time applications.</li>
        <li>Regulatory requirements (GDPR, HIPAA, CCPA, etc.) and industry best practices demand robust, auditable controls.</li>
      </ul>
      <h2 id="compliance-what" style={{ ...headingScrollMargin, color: PURPLE, fontWeight: 700, fontSize: '1.18rem', marginTop: 36, marginBottom: 10 }}>What is the Compliance Engine?</h2>
      <p style={{ fontSize: '1.07rem', marginBottom: 18 }}>
        The Compliance Engine is a two-stage, always-on safety net that ensures every interaction with Model Swap Router is secure, private, and policy-compliant—before and after the model is called.
      </p>
      <h2 id="compliance-how" style={{ ...headingScrollMargin, color: PURPLE, fontWeight: 700, fontSize: '1.18rem', marginTop: 36, marginBottom: 10 }}>How the Compliance Engine Works</h2>
      <ol style={{ margin: '0 0 24px 24px', color: '#222', fontSize: '1.05rem', lineHeight: 1.7 }}>
        <li><b>Pre-Compliance (Before Model Call):</b>
          <ul style={{ margin: '8px 0 8px 20px' }}>
            <li><b>PII & Secrets Detection:</b> Every prompt is scanned for personally identifiable information (PII), secrets (API keys, passwords), and other sensitive data using advanced pattern recognition and AI-powered entity detection.</li>
            <li><b>Redaction:</b> Detected sensitive data is automatically redacted or replaced with placeholders before the prompt is sent to any external model, ensuring nothing private ever leaves your environment.</li>
            <li><b>Input Policy Enforcement:</b> Prompts are checked against your company’s input policies (e.g., no hate speech, no confidential data, no prohibited topics). Violations are flagged or blocked before any data is processed.</li>
          </ul>
        </li>
        <li><b>Post-Compliance (After Model Call):</b>
          <ul style={{ margin: '8px 0 8px 20px' }}>
            <li><b>Plagiarism & Copyright Checking:</b> Model outputs are checked for plagiarism using web search and semantic similarity, ensuring you never inadvertently publish or use copyrighted material.</li>
            <li><b>Named Entity Recognition (NER):</b> Outputs are scanned for sensitive entities (names, locations, organizations) to prevent accidental leaks.</li>
            <li><b>Output Policy Enforcement:</b> Responses are validated against your output policies (e.g., no PII, no offensive content, no regulatory violations). Any issues are flagged, and unsafe outputs are withheld or replaced.</li>
            <li><b>Restoration:</b> If redacted data is deemed safe, it is restored in the final output, maintaining both privacy and utility.</li>
          </ul>
        </li>
      </ol>
      <h2 id="compliance-risks" style={{ ...headingScrollMargin, color: PURPLE, fontWeight: 700, fontSize: '1.18rem', marginTop: 36, marginBottom: 10 }}>Types of Risks Mitigated</h2>
      <ul style={{ margin: '0 0 24px 20px', color: '#222', fontSize: '1.05rem' }}>
        <li><b>Data Leaks:</b> Prevents accidental exposure of PII, credentials, or confidential information.</li>
        <li><b>Policy Violations:</b> Blocks or flags content that could violate company, legal, or ethical standards.</li>
        <li><b>Copyright Infringement:</b> Detects and prevents the use of plagiarized or copyrighted material.</li>
        <li><b>Reputational Harm:</b> Ensures outputs are safe, professional, and aligned with your brand values.</li>
      </ul>
      <h2 id="compliance-policy" style={{ ...headingScrollMargin, color: PURPLE, fontWeight: 700, fontSize: '1.18rem', marginTop: 36, marginBottom: 10 }}>Policy Management & Customization</h2>
      <ul style={{ margin: '0 0 24px 20px', color: '#222', fontSize: '1.05rem' }}>
        <li><b>Custom Policies:</b> Define your own input and output policies to match your industry, geography, or company requirements.</li>
        <li><b>Auditability:</b> All compliance checks are logged, providing a clear audit trail for regulators or internal review.</li>
        <li><b>Real-Time Enforcement:</b> Compliance is enforced in real time, with no impact on user experience or latency.</li>
      </ul>
      <h2 id="compliance-examples" style={{ ...headingScrollMargin, color: PURPLE, fontWeight: 700, fontSize: '1.18rem', marginTop: 36, marginBottom: 10 }}>Compliance in Action: Example Scenarios</h2>
      <ul style={{ margin: '0 0 24px 20px', color: '#222', fontSize: '1.05rem' }}>
        <li><b>Healthcare:</b> PHI (Protected Health Information) is automatically detected and redacted before prompts are sent to any model, ensuring HIPAA compliance.</li>
        <li><b>Finance:</b> Sensitive account numbers or transaction data are flagged and blocked, preventing data leaks and regulatory breaches.</li>
        <li><b>Enterprise:</b> Company-specific policies (e.g., no discussion of unreleased products) are enforced on every prompt and response.</li>
        <li><b>Education:</b> Plagiarism checks ensure that generated content is original and safe for academic use.</li>
      </ul>
      <h2 id="compliance-benefits" style={{ ...headingScrollMargin, color: PURPLE, fontWeight: 700, fontSize: '1.18rem', marginTop: 36, marginBottom: 10 }}>Key Benefits</h2>
      <ul style={{ margin: '0 0 24px 20px', color: '#222', fontSize: '1.05rem' }}>
        <li><b>Trust & Safety:</b> Every interaction is protected by multiple layers of compliance.</li>
        <li><b>Regulatory Readiness:</b> Meet the strictest legal and industry standards with ease.</li>
        <li><b>Customizable:</b> Tailor compliance to your unique needs and policies.</li>
        <li><b>Invisible to Users:</b> All checks happen in real time, with no disruption to the user experience.</li>
      </ul>
    </div>
  );
};

export default ComplianceEngine; 