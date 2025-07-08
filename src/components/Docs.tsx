import React from 'react';
import { Outlet, useLocation, useNavigate } from 'react-router-dom';

const sidebarLinks = [
  { section: 'Overview', items: ['Quickstart', 'FAQ', 'Principles', 'Models', 'Enterprise'] },
  { section: 'Features', items: [
    'Privacy and Logging', 'Model Routing', 'Provider Routing', 'Prompt Caching', 'Structured Outputs', 'Tool Calling', 'Message Transforms', 'Uptime Optimization', 'Web Search', 'Zero Completion Insurance', 'Provisioning API Keys'
  ] },
  { section: 'API Reference', items: [
    'Overview', 'Streaming', 'Limits', 'Authentication', 'Parameters', 'Errors', 'API Keys'
  ] },
  { section: 'Use Cases', items: [
    'BYOK', 'Crypto API', 'OAuth PKCE', 'MCP Servers', 'For Providers', 'Reasoning Tokens', 'Usage Accounting', 'User Tracking'
  ] },
  { section: 'Community', items: ['Frameworks', 'Discord'] },
];

const sidebarStyle: React.CSSProperties = {
  minWidth: 260,
  maxWidth: 300,
  background: '#fff',
  borderRight: '1px solid #eaecef',
  padding: '2.5rem 1.5rem 2.5rem 2.5rem',
  height: '100vh',
  position: 'sticky',
  top: 0,
  alignSelf: 'flex-start',
  overflowY: 'auto',
};

const activeLinkStyle: React.CSSProperties = {
  color: '#2563eb',
  fontWeight: 600,
  background: '#f1f5f9',
  borderRadius: '6px',
  padding: '0.25rem 0.5rem',
};

const slugify = (str: string) =>
  str.toLowerCase().replace(/\s+/g, '-').replace(/[^a-z0-9\-]/g, '');

const bannerStyle: React.CSSProperties = {
  width: '100%',
  background: '#fef08a',
  color: '#b45309',
  textAlign: 'center',
  fontWeight: 600,
  fontSize: '1.05rem',
  padding: '0.7rem 0',
  borderBottom: '1px solid #fde68a',
  letterSpacing: '0.01em',
  zIndex: 100,
};

const Docs: React.FC = () => {
  const location = useLocation();
  const navigate = useNavigate();
  // Determine the current section from the path
  const currentSection = location.pathname.split('/').pop()?.toLowerCase() || 'quickstart';

  return (
    <div style={{ minHeight: '100vh', background: '#f6f8fa', fontFamily: 'Inter, Segoe UI, Arial, sans-serif' }}>
      <div style={bannerStyle}>Docs being updated. Coming soon...</div>
      <div style={{ display: 'flex' }}>
        <aside style={sidebarStyle}>
          <div style={{ fontWeight: 700, fontSize: '1.25rem', marginBottom: '2.5rem', color: '#111', display: 'flex', alignItems: 'center', gap: 12 }}>
            <img src={process.env.PUBLIC_URL + '/logo-small.jpeg'} alt="Logo" style={{ width: 32, height: 32, borderRadius: 8, objectFit: 'cover', marginRight: 8 }} />
            Docs
          </div>
          <nav style={{ display: 'flex', flexDirection: 'column', gap: '2.2rem', fontSize: '1rem' }}>
            {sidebarLinks.map((section) => (
              <div key={section.section}>
                <div style={{ fontWeight: 600, color: '#6b7280', fontSize: '0.98rem', marginBottom: '0.5rem', textTransform: 'uppercase', letterSpacing: '0.03em' }}>{section.section}</div>
                <ul style={{ listStyle: 'none', padding: 0, margin: 0, display: 'flex', flexDirection: 'column', gap: '0.3rem' }}>
                  {section.items.map((item) => {
                    const slug = slugify(item);
                    const isActive = location.pathname.toLowerCase().includes(slug);
                    return (
                      <li key={item}>
                        <a
                          href={"/docs/" + slug}
                          style={isActive ? activeLinkStyle : { color: '#222', textDecoration: 'none', padding: '0.25rem 0.5rem', borderRadius: '6px', display: 'block' }}
                          onClick={e => {
                            e.preventDefault();
                            navigate(`/docs/${slug}`);
                          }}
                        >
                          {item}
                        </a>
                      </li>
                    );
                  })}
                </ul>
              </div>
            ))}
          </nav>
        </aside>
        <main style={{ flex: 1, padding: '3.5rem 2.5rem', maxWidth: 900, margin: '0 auto', background: '#fff', minHeight: '100vh', boxShadow: '0 0 0 1px #eaecef' }}>
          <Outlet />
        </main>
      </div>
    </div>
  );
};

export default Docs; 