import { useEffect } from 'react';

export default function About() {
  useEffect(() => {
    const statNumbers = document.querySelectorAll('.stat-number');
    const statsObserver = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          const el = entry.target;
          const text = el.textContent || '';
          const match = text.match(/(\d+)/);
          if (match) {
            const target = parseInt(match[0]);
            const suffix = text.replace(match[0], '');
            let current = 0;
            const increment = target / 60;
            const timer = setInterval(() => {
              current += increment;
              if (current >= target) {
                current = target;
                clearInterval(timer);
              }
              el.textContent = Math.floor(current) + suffix;
            }, 25);
          }
          statsObserver.unobserve(el);
        }
      });
    }, { threshold: 0.5 });

    statNumbers.forEach(el => statsObserver.observe(el));
    return () => statsObserver.disconnect();
  }, []);

  return (
    <section className="about" id="about">
      <div className="about-images reveal">
        <img className="about-img-main" src="https://images.unsplash.com/photo-1503951914875-452162b0f3f1?w=800&q=85&auto=format&fit=crop" alt="Barbershop interior" />
        <img className="about-img-secondary" src="https://images.unsplash.com/photo-1599351431202-1e0f0137899a?w=600&q=85&auto=format&fit=crop" alt="Barber tools" />
        <div className="about-accent">B&amp;C</div>
      </div>

      <div className="about-content">
        <div className="section-tag reveal">
          <span className="section-tag-line"></span>
          <span className="section-tag-text">Our Story</span>
        </div>

        <h2 className="section-title reveal reveal-delay-1">
          MORE THAN A<br/>BARBERSHOP.<br/>A <span className="italic">Legacy.</span>
        </h2>

        <p className="about-text reveal reveal-delay-2">
          Founded in the heart of the city, Blade &amp; Co. was born from a passion for authentic craftsmanship and the belief that every man deserves a grooming experience that goes beyond the ordinary. Our shop is a sanctuary -- a place where tradition is honored, conversation flows freely, and every detail matters.
        </p>

        <p className="about-text reveal reveal-delay-3">
          From the warm towels to the final brush of talc, every visit is choreographed to perfection. We don't just cut hair; we build confidence, one client at a time.
        </p>

        <div className="about-stats reveal reveal-delay-4">
          <div>
            <div className="stat-number">7+</div>
            <div className="stat-label">Years of Excellence</div>
          </div>
          <div>
            <div className="stat-number">15K+</div>
            <div className="stat-label">Happy Clients</div>
          </div>
          <div>
            <div className="stat-number">6</div>
            <div className="stat-label">Master Barbers</div>
          </div>
        </div>
      </div>
    </section>
  );
}
