import { Instagram, Twitter, Facebook } from 'lucide-react';
import { useEffect, useRef } from 'react';

const team = [
  {
    id: 1,
    name: 'Marcus Thorne',
    role: 'Master Barber / Founder',
    image: 'https://images.unsplash.com/photo-1618077360395-f3068be8e001?auto=format&fit=crop&q=80&w=800'
  },
  {
    id: 2,
    name: 'Julian Hayes',
    role: 'Senior Barber',
    image: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&q=80&w=800'
  },
  {
    id: 3,
    name: 'Elias Vance',
    role: 'Grooming Specialist',
    image: 'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?auto=format&fit=crop&q=80&w=800'
  }
];

export default function Team() {
  const sectionRef = useRef<HTMLElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('visible');
          }
        });
      },
      { threshold: 0.1 }
    );

    const elements = sectionRef.current?.querySelectorAll('.reveal');
    elements?.forEach((el) => observer.observe(el));

    return () => observer.disconnect();
  }, []);

  return (
    <section id="team" className="team" ref={sectionRef}>
      <div className="team-header reveal">
        <div>
          <div className="section-tag">
            <div className="section-tag-line"></div>
            <span className="section-tag-text">The Masters</span>
          </div>
          <h2 className="section-title">
            Meet Our <span className="italic">Barbers</span>
          </h2>
        </div>
        <button className="btn-outline">
          VIEW ALL TEAM <span className="iconify">→</span>
        </button>
      </div>

      <div className="team-grid reveal delay-1">
        {team.map((member) => (
          <div key={member.id} className="team-card">
            <div className="team-card-img">
              <img src={member.image} alt={member.name} referrerPolicy="no-referrer" />
            </div>
            <div className="team-card-info">
              <div>
                <h3 className="team-card-name">{member.name}</h3>
                <p className="team-card-role">{member.role}</p>
              </div>
              <div className="team-card-socials">
                <a href="#"><Instagram size={18} /></a>
                <a href="#"><Twitter size={18} /></a>
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
