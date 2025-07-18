import React, { createContext, useContext, useState } from 'react';
import { Outlet, useLocation, useNavigate } from 'react-router-dom';

const sidebarLinks = [
  { section: 'Overview', items: ['Quickstart', 'FAQ', 'Principles', 'Models', 'Enterprise'] },
  { section: 'Features', items: [
    'ARMS Routing', 'Compliance Engine', 'Prompt Caching', 'Structured Outputs', 'Tool Calling', 'Message Transforms', 'Uptime Optimization', 'Zero Completion Insurance', 'Provisioning API Keys'
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
  zIndex: 100,
  transition: 'transform 0.3s',
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

// Context for On This Page links
export const DocsOnThisPageContext = createContext({
  links: [] as { label: string; anchor: string }[],
  setLinks: (_: { label: string; anchor: string }[]) => {},
});

export const useDocsOnThisPage = () => useContext(DocsOnThisPageContext);

const rightSidebarOuterStyle: React.CSSProperties = {
  minWidth: 260,
  maxWidth: 320,
  background: '#f6f8fa',
  borderLeft: '1px solid #ece6fa',
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'flex-start',
  padding: 0,
  position: 'relative',
  minHeight: '100vh',
  overflow: 'visible',
  zIndex: 90,
};

const rightSidebarInnerStyle: React.CSSProperties = {
  position: 'sticky',
  top: 40,
  alignSelf: 'flex-start',
  width: '100%',
  padding: '0',
  fontSize: '0.97rem',
  color: '#222',
  background: 'transparent',
  zIndex: 2,
  display: 'flex',
  flexDirection: 'column',
  height: 'calc(100vh - 40px)',
};

const onThisPageHeadingStyle: React.CSSProperties = {
  position: 'sticky',
  top: 0,
  background: '#f6f8fa',
  fontWeight: 700,
  marginBottom: 12,
  color: '#2563eb',
  zIndex: 3,
  padding: '2.5rem 1.5rem 0.5rem 1.5rem',
};

const onThisPageListStyle: React.CSSProperties = {
  flex: 1,
  overflowY: 'auto',
  padding: '0 1.5rem 2.5rem 1.5rem',
  margin: 0,
};

const hamburgerButtonStyle: React.CSSProperties = {
  background: 'none',
  border: 'none',
  fontSize: 28,
  color: '#222',
  cursor: 'pointer',
  padding: 0,
  marginRight: 16,
  display: 'flex',
  alignItems: 'center',
  zIndex: 200,
  position: 'fixed',
  top: 18,
  left: 18,
  backgroundColor: '#fff',
  borderRadius: 8,
  boxShadow: '0 2px 8px 0 rgba(40,40,80,0.07)',
  height: 48,
  minWidth: 48,
  justifyContent: 'center',
};

const fabButtonStyle: React.CSSProperties = {
  position: 'fixed',
  left: 18,
  bottom: 22,
  width: 40,
  height: 40,
  background: '#fff',
  border: '1.5px solid #e5e7eb',
  borderRadius: '50%',
  boxShadow: '0 2px 8px 0 rgba(40,40,80,0.10)',
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
  zIndex: 200,
  cursor: 'pointer',
  padding: 0,
};

const mobileSidebarOverlay: React.CSSProperties = {
  position: 'fixed',
  top: 0,
  left: 0,
  width: '100vw',
  height: '100vh',
  background: 'rgba(0,0,0,0.18)',
  zIndex: 199,
  display: 'block',
};

const Docs: React.FC = () => {
  const location = useLocation();
  const navigate = useNavigate();
  const [onThisPageLinks, setOnThisPageLinks] = useState<{ label: string; anchor: string }[]>([]);
  const [sidebarOpen, setSidebarOpen] = useState(false);

  // Responsive breakpoints
  const [windowWidth, setWindowWidth] = React.useState(window.innerWidth);
  React.useEffect(() => {
    const handleResize = () => setWindowWidth(window.innerWidth);
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  // Determine breakpoints
  const isMobile = windowWidth < 800;
  const isTablet = windowWidth < 1100;

  // Determine the current section from the path
  const currentSection = location.pathname.split('/').pop()?.toLowerCase() || 'quickstart';

  return (
    <DocsOnThisPageContext.Provider value={{ links: onThisPageLinks, setLinks: setOnThisPageLinks }}>
      <div style={{ minHeight: '100vh', background: '#f6f8fa', fontFamily: 'Inter, Segoe UI, Arial, sans-serif', fontSize: '0.97rem' }}>
        <div style={bannerStyle}>Docs being updated. Coming soon...</div>
        <div style={{ display: 'flex', flexDirection: 'row', maxWidth: 1600, margin: '0 auto', width: '100%' }}>
          {/* Hamburger for mobile */}
          {isMobile && (
            <button
              style={fabButtonStyle}
              aria-label="Open contents menu"
              title="Contents"
              onClick={() => setSidebarOpen(true)}
            >
              <svg width="22" height="22" viewBox="0 0 22 22" fill="none" xmlns="http://www.w3.org/2000/svg">
                <rect y="4" width="22" height="3" rx="1.2" fill="#222" />
                <rect y="9.5" width="22" height="3" rx="1.2" fill="#222" />
                <rect y="15" width="22" height="3" rx="1.2" fill="#222" />
              </svg>
            </button>
          )}
          {/* Sidebar: visible on desktop/tablet, or as overlay on mobile */}
          {(!isMobile || sidebarOpen) && (
            <>
              {isMobile && sidebarOpen && (
                <div style={mobileSidebarOverlay} onClick={() => setSidebarOpen(false)} />
              )}
              <aside
                style={{
                  ...sidebarStyle,
                  position: isMobile ? 'fixed' : 'sticky',
                  left: isMobile ? 0 : undefined,
                  top: isMobile ? 0 : 0,
                  height: isMobile ? '100vh' : '100vh',
                  zIndex: 200,
                  transform: isMobile && !sidebarOpen ? 'translateX(-110%)' : 'translateX(0)',
                  boxShadow: isMobile ? '2px 0 16px 0 rgba(40,40,80,0.13)' : undefined,
                  maxWidth: 300,
                  minWidth: 220,
                  width: 260,
                  background: '#fff',
                  transition: 'transform 0.3s',
                  display: 'flex',
                  flexDirection: 'column',
                }}
              >
                <div style={{ fontWeight: 700, fontSize: '1.25rem', marginBottom: '2.5rem', color: '#111', display: 'flex', alignItems: 'center', gap: 12 }}>
                  <img src={process.env.PUBLIC_URL + '/logo-small.jpeg'} alt="Logo" style={{ width: 32, height: 32, borderRadius: 8, objectFit: 'cover', marginRight: 8 }} />
                  Docs
                </div>
                <div style={{ fontWeight: 700, fontSize: '1.1rem', color: '#2563eb', marginBottom: 18, marginLeft: 2, letterSpacing: '0.01em', display: isMobile ? 'block' : 'none' }}>Contents</div>
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
                                  setSidebarOpen(false);
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
            </>
          )}
          {/* Main content always full width on mobile/tablet, shrinks only for sidebars on desktop */}
          <main
            style={{
              flex: 3,
              padding: '1.7rem 2.1rem 2.5rem 2.1rem',
              maxWidth: 900,
              margin: '0 auto',
              background: '#fff',
              minHeight: '100vh',
              boxShadow: '0 0 0 1px #eaecef',
              position: 'relative',
              width: '100%',
              zIndex: 1,
              transition: 'width 0.2s',
            }}
          >
            <Outlet />
          </main>
          {/* Right sticky sidebar for On This Page in a separate grey section, only on desktop */}
          {!isTablet && (
            <div style={rightSidebarOuterStyle}>
              <nav style={rightSidebarInnerStyle} aria-label="On this page">
                {onThisPageLinks.length > 0 && (
                  <>
                    <div style={onThisPageHeadingStyle}>On this page</div>
                    <ul style={{ ...onThisPageListStyle, listStyle: 'none' }}>
                      {onThisPageLinks.map((item) => (
                        <li key={item.anchor}>
                          <a href={`#${item.anchor}`} style={{ color: '#2563eb', textDecoration: 'none', fontSize: '0.98rem' }}>{item.label}</a>
                        </li>
                      ))}
                    </ul>
                  </>
                )}
              </nav>
            </div>
          )}
        </div>
      </div>
    </DocsOnThisPageContext.Provider>
  );
};

export default Docs; 