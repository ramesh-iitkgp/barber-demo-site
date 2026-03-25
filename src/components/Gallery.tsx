import { useEffect, useRef } from 'react';

const images = [
  "https://images.unsplash.com/photo-1585747860715-2ba37e788b70?auto=format&fit=crop&q=80&w=1000",
  "https://images.unsplash.com/photo-1503951914875-452162b0f3f1?auto=format&fit=crop&q=80&w=1000",
  "https://images.unsplash.com/photo-1599351431202-1e0f0137899a?auto=format&fit=crop&q=80&w=1000",
  "https://images.unsplash.com/photo-1622286342621-4bd786c2447c?auto=format&fit=crop&q=80&w=1000",
  "https://images.unsplash.com/photo-1512496015851-a1fbaf692a9c?auto=format&fit=crop&q=80&w=1000"
];

export default function Gallery() {
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
    <section id="gallery" className="gallery" ref={sectionRef}>
      <div className="gallery-header reveal">
        <div className="section-tag" style={{ justifyContent: 'center' }}>
          <div className="section-tag-line"></div>
          <span className="section-tag-text">Portfolio</span>
          <div className="section-tag-line"></div>
        </div>
        <h2 className="section-title">
          Our <span className="italic">Work</span>
        </h2>
      </div>

      <div className="gallery-grid reveal delay-1">
        {images.map((img, index) => (
          <div key={index} className="gallery-item">
            <img src={img} alt={`Gallery ${index + 1}`} referrerPolicy="no-referrer" />
            <div className="gallery-overlay">
              <span className="gallery-overlay-text">VIEW LOOK</span>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
