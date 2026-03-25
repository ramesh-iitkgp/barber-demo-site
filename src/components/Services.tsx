import { ArrowRight, Scissors, Droplet, Wind, Sparkles } from 'lucide-react';
import { useEffect, useRef } from 'react';

const services = [
  {
    id: 1,
    name: 'Classic Haircut',
    desc: 'Traditional scissor or clipper cut tailored to your head shape and personal style.',
    price: '$45',
    duration: '45 MIN',
    icon: <Scissors className="service-icon" />
  },
  {
    id: 2,
    name: 'Hot Towel Shave',
    desc: 'Straight razor shave with hot towels, essential oils, and a relaxing facial massage.',
    price: '$35',
    duration: '30 MIN',
    icon: <Droplet className="service-icon" />
  },
  {
    id: 3,
    name: 'Beard Trim',
    desc: 'Detailed beard shaping, line-up, and conditioning treatment for a sharp look.',
    price: '$25',
    duration: '20 MIN',
    icon: <Wind className="service-icon" />
  },
  {
    id: 4,
    name: 'The Full Works',
    desc: 'Premium haircut, hot towel shave, facial scrub, and styling for the ultimate grooming experience.',
    price: '$85',
    duration: '90 MIN',
    icon: <Sparkles className="service-icon" />
  }
];

export default function Services() {
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
    <section id="services" className="services" ref={sectionRef}>
      <div className="services-header reveal">
        <div>
          <div className="section-tag">
            <div className="section-tag-line"></div>
            <span className="section-tag-text">Our Expertise</span>
          </div>
          <h2 className="section-title">
            Grooming <span className="italic">Menu</span>
          </h2>
        </div>
        <div className="services-header-right">
          <p>
            We offer a comprehensive range of premium grooming services designed to make you look and feel your absolute best.
          </p>
        </div>
      </div>

      <div className="services-grid reveal delay-1">
        {services.map((service) => (
          <div key={service.id} className="service-card">
            {service.icon}
            <h3 className="service-name">{service.name}</h3>
            <p className="service-desc">{service.desc}</p>
            <div className="service-price-row">
              <span className="service-price">{service.price}</span>
              <span className="service-duration">{service.duration}</span>
            </div>
            <ArrowRight className="service-arrow" />
          </div>
        ))}
      </div>
    </section>
  );
}
