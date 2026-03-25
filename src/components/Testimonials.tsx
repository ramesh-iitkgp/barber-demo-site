import { Star } from 'lucide-react';
import { useState, useEffect, useRef } from 'react';

const testimonials = [
  {
    id: 1,
    quote: "The attention to detail here is unmatched. Marcus gave me the best haircut and beard trim I've ever had. The atmosphere is exactly what a premium barber shop should be.",
    author: "James Anderson",
    title: "Regular Client"
  },
  {
    id: 2,
    quote: "I've been looking for a barber who understands how to work with my hair texture for years. Julian nailed it on the first try. Highly recommend the hot towel shave as well.",
    author: "Michael Chen",
    title: "First-time Client"
  },
  {
    id: 3,
    quote: "More than just a haircut, it's an experience. The complimentary drink, the relaxing environment, and the professional service make it worth every penny.",
    author: "David Roberts",
    title: "Loyal Client"
  }
];

export default function Testimonials() {
  const [activeIndex, setActiveIndex] = useState(0);
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
    <section id="testimonials" className="testimonials" ref={sectionRef}>
      <div className="testimonial-bg-text">REVIEWS</div>
      
      <div className="testimonials-header reveal">
        <div className="section-tag" style={{ justifyContent: 'center' }}>
          <div className="section-tag-line"></div>
          <span className="section-tag-text">Client Stories</span>
          <div className="section-tag-line"></div>
        </div>
      </div>

      <div className="testimonial-slider reveal delay-1">
        {testimonials.map((testimonial, index) => (
          <div 
            key={testimonial.id} 
            className={`testimonial-item ${index === activeIndex ? 'active' : ''}`}
          >
            <div className="testimonial-stars">
              {[...Array(5)].map((_, i) => (
                <Star key={i} fill="currentColor" size={18} />
              ))}
            </div>
            <p className="testimonial-quote">"{testimonial.quote}"</p>
            <h4 className="testimonial-author-name">{testimonial.author}</h4>
            <p className="testimonial-author-title">{testimonial.title}</p>
          </div>
        ))}

        <div className="testimonial-nav">
          {testimonials.map((_, index) => (
            <button
              key={index}
              className={`testimonial-dot ${index === activeIndex ? 'active' : ''}`}
              onClick={() => setActiveIndex(index)}
              aria-label={`Go to slide ${index + 1}`}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
