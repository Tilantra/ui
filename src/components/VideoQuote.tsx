import React, { useEffect } from 'react';


const VideoQuote: React.FC = () => {
  useEffect(() => {
    const elements = document.querySelectorAll('.fade-slide-up');
    const observer = new window.IntersectionObserver(
      entries => {
        entries.forEach(entry => {
          if (entry.isIntersecting) {
            entry.target.classList.add('visible');
          }
        });
      },
      { threshold: 0.15 }
    );
    elements.forEach(el => observer.observe(el));
    return () => observer.disconnect();
  }, []);

  return (
    <>
      <section className="fade-slide-up" style={{ background: '#fff', padding: '4rem 2rem', fontFamily: 'inherit' }}>
        <div style={{ display: 'flex', flexWrap: 'wrap', gap: '3rem', alignItems: 'center', justifyContent: 'center', maxWidth: 1200, margin: '0 auto' }}>
          <div className="fade-in" style={{ flex: '1 1 500px', minWidth: 400, maxWidth: 700 }}>
            <video width="100%" height="360" controls style={{ borderRadius: '0.5rem', boxShadow: '0 4px 24px rgba(124,58,237,0.07)' }}>
              <source src="./video3.mp4" type="video/mp4" />
              Your browser does not support the video tag.
            </video>
          </div>
          <div className="fade-in" style={{ flex: '1 1 350px', minWidth: 300, maxWidth: 500, textAlign: 'left' }}>
            <blockquote style={{ fontSize: '1.3rem', color: '#2563eb', fontStyle: 'italic', marginBottom: '1.2rem' }}>
              "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer posuere erat a ante."
            </blockquote>
            <div style={{ color: '#374151', fontWeight: 500 }}>- Tilantra Team</div>
          </div>
        </div>
      </section>
      <section className="fade-slide-up" style={{ background: '#fff', padding: '2.5rem 2rem 2.5rem 2rem', fontFamily: 'inherit', borderBottom: '1px solid #ece6fa' }}>
        {/* Trusted by leading companies section removed */}
      </section>
    </>
  );
};

export default VideoQuote; 