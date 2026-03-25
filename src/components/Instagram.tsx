import { Instagram as InstagramIcon } from 'lucide-react';
import { useEffect, useRef } from 'react';

const images = [
  "https://images.unsplash.com/photo-1593702275687-f8b402bf1fb5?auto=format&fit=crop&q=80&w=400",
  "https://images.unsplash.com/photo-1621605815971-fbc98d665033?auto=format&fit=crop&q=80&w=400",
  "https://images.unsplash.com/photo-1532710093739-9470ac1d4e5b?auto=format&fit=crop&q=80&w=400",
  "https://images.unsplash.com/photo-1502823403499-6ccfcf4fb453?auto=format&fit=crop&q=80&w=400",
  "https://images.unsplash.com/photo-1517832606299-7ae9b620a186?auto=format&fit=crop&q=80&w=400",
  "https://images.unsplash.com/photo-1599351431202-1e0f0137899a?auto=format&fit=crop&q=80&w=400"
];

export default function Instagram() {
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
    <section className="instagram" ref={sectionRef}>
      <div className="instagram-header reveal">
        <div className="section-tag" style={{ justifyContent: 'center' }}>
          <div className="section-tag-line"></div>
          <span className="section-tag-text">Follow Us</span>
          <div className="section-tag-line"></div>
        </div>
        <a href="#" className="instagram-handle">
          <InstagramIcon size={16} /> @GENTLEMANS_BARBER
        </a>
      </div>

      <div className="instagram-grid reveal delay-1">
        {images.map((img, index) => (
          <div key={index} className="instagram-item">
            <img src={img} alt={`Instagram ${index + 1}`} referrerPolicy="no-referrer" />
          </div>
        ))}
      </div>
    </section>
  );
}
