import React, { useEffect } from 'react';

const teamMembers = [
  {
    name: 'Aibhinav Upadhyay',
    role: 'Co-Founder',
    img: '/aibhi_pic.jpg',
    linkedin: 'https://www.linkedin.com/in/aibhinav-upadhyay-69b872175/',
  },
  {
    name: 'Mahika Kushwaha',
    role: 'Co-Founder',
    img: '/Mahika_pic.jpg',
    linkedin: 'https://www.linkedin.com/in/mahikakushwaha/',
  },
  {
    name: 'Rohit Lahori',
    role: 'Co-Founder',
    img: '/rohit_pic-2.jpg',
    linkedin: 'https://www.linkedin.com/in/rohit-lahori-a11ab9215/',
  },
  {
    name: 'Shivang Patel',
    role: 'Co-Founder',
    img: '/shivang_pic.jpg',
    linkedin: 'https://www.linkedin.com/in/shivang2303/',
  },
];

const TeamSection: React.FC = () => {
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
    <section style={{ background: '#fff', padding: '4rem 2rem', fontFamily: 'inherit', textAlign: 'center' }}>
      <h2 className="fade-slide-up" style={{ fontSize: '2.2rem', fontWeight: 700, color: '#2563eb', marginBottom: '2.5rem', letterSpacing: '0.04em' }}>
        MEET OUR TEAM
      </h2>
      <div style={{ display: 'flex', justifyContent: 'center', gap: '3rem', flexWrap: 'wrap' }}>
        {teamMembers.map(member => (
          <div key={member.name} className="fade-slide-up stat-card" style={{ background: '#f6f8fa', borderRadius: '1.2rem', boxShadow: '0 2px 12px rgba(80,60,120,0.07)', padding: '2rem 1.5rem', minWidth: 220, maxWidth: 260, textAlign: 'center' }}>
            <div style={{ width: 120, height: 120, borderRadius: '50%', overflow: 'hidden', margin: '0 auto 1.2rem auto', border: '4px solid #ece6fa', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
              <img
                src={member.img}
                alt={member.name}
                style={{
                  width: member.name === 'Rohit Lahori' ? '120%' : '100%',
                  height: member.name === 'Rohit Lahori' ? '120%' : '100%',
                  objectFit: 'cover',
                  borderRadius: '50%',
                  transform:
                    member.name === 'Mahika Kushwaha'
                      ? 'scale(2.5)'
                      : member.name === 'Rohit Lahori'
                      ? 'scale(1.5)'
                      : 'scale(1)',
                  objectPosition:
                    member.name === 'Mahika Kushwaha'
                      ? 'center 20%'
                      : member.name === 'Rohit Lahori'
                      ? 'center -50%'
                      : 'center',
                  transition: 'transform 0.3s',
                  display: 'block',
                  margin: '0 auto',
                }}
              />
            </div>
            <div style={{ fontWeight: 700, fontSize: '1.15rem', color: '#222', marginBottom: '0.5rem' }}>{member.name}</div>
            <div style={{ color: '#7c3aed', fontWeight: 500, fontSize: '1.05rem' }}>{member.role}</div>
            <a href={member.linkedin} target="_blank" rel="noopener noreferrer" style={{ display: 'inline-flex', alignItems: 'center', justifyContent: 'center', marginTop: 8 }}>
              <svg xmlns="http://www.w3.org/2000/svg" width="28" height="28" viewBox="0 0 24 24" style={{ marginRight: 4 }}>
                <circle cx="12" cy="12" r="12" fill="#0A66C2" />
                <text x="12" y="17" textAnchor="middle" fontFamily="Arial, Helvetica, sans-serif" fontWeight="bold" fontSize="13" fill="#fff">in</text>
              </svg>
            </a>
          </div>
        ))}
      </div>
    </section>
  );
};

export default TeamSection; 