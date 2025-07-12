import React, { useEffect } from 'react';
import { useDocsOnThisPage } from '../Docs';

const PURPLE = '#7c3aed';
const BLUE = '#2563eb';
const headingScrollMargin = { scrollMarginTop: 64 };

const ON_THIS_PAGE = [
  { label: 'Overview', anchor: 'zero-completion-insurance-overview' },
  { label: 'The Problem', anchor: 'zero-completion-insurance-problem' },
  { label: 'Our Solution: Guaranteed Responses', anchor: 'zero-completion-insurance-solution' },
  { label: 'How It Works', anchor: 'zero-completion-insurance-how' },
  { label: 'Benefits', anchor: 'zero-completion-insurance-benefits' },
];

const ZeroCompletionInsurance: React.FC = () => {
  const { setLinks } = useDocsOnThisPage();
  useEffect(() => {
    setLinks(ON_THIS_PAGE);
    return () => setLinks([]);
  }, [setLinks]);

  return (
    <div style={{ maxWidth: 900, margin: '0 auto', color: '#222', fontFamily: 'inherit', padding: '2rem 0', background: '#fff' }}>
      <h1 id="zero-completion-insurance-overview" style={{ color: BLUE, fontWeight: 800, fontSize: '2.2rem', marginBottom: 18 }}>Zero Completion Insurance</h1>
      <p style={{ fontSize: '1.13rem', marginBottom: 28 }}>
        Even the best systems can encounter unexpected failures. Zero Completion Insurance guarantees your users are never left without a response.
      </p>
      <h2 id="zero-completion-insurance-problem" style={{ ...headingScrollMargin, color: PURPLE, fontWeight: 700, fontSize: '1.18rem', marginTop: 36, marginBottom: 10 }}>The Problem</h2>
      <ul style={{ margin: '0 0 24px 20px', color: '#222', fontSize: '1.05rem' }}>
        <li>Even the best systems can encounter unexpected failures.</li>
      </ul>
      <h2 id="zero-completion-insurance-solution" style={{ ...headingScrollMargin, color: PURPLE, fontWeight: 700, fontSize: '1.18rem', marginTop: 36, marginBottom: 10 }}>Our Solution: Guaranteed Responses</h2>
      <ul style={{ margin: '0 0 24px 20px', color: '#222', fontSize: '1.05rem' }}>
        <li><b>Friendly Fallbacks:</b> If all models fail, users receive a clear, informative message.</li>
        <li><b>Error Transparency:</b> Users are told what happened and invited to try again.</li>
      </ul>
      <h2 id="zero-completion-insurance-how" style={{ ...headingScrollMargin, color: PURPLE, fontWeight: 700, fontSize: '1.18rem', marginTop: 36, marginBottom: 10 }}>How It Works</h2>
      <ol style={{ margin: '0 0 24px 24px', color: '#222', fontSize: '1.05rem', lineHeight: 1.7 }}>
        <li><b>Failure Detection:</b> The system recognizes when all models have failed.</li>
        <li><b>Fallback Messaging:</b> A default, user-friendly message is returned.</li>
      </ol>
      <h2 id="zero-completion-insurance-benefits" style={{ ...headingScrollMargin, color: PURPLE, fontWeight: 700, fontSize: '1.18rem', marginTop: 36, marginBottom: 10 }}>Benefits</h2>
      <ul style={{ margin: '0 0 24px 20px', color: '#222', fontSize: '1.05rem' }}>
        <li>Users are never left without a response.</li>
        <li>Maintains a professional, trustworthy experience.</li>
      </ul>
    </div>
  );
};

export default ZeroCompletionInsurance; 