import { useEffect, useRef } from 'react';

export default function Hero() {
  const heroImgRef = useRef<HTMLImageElement>(null);

  useEffect(() => {
    const handleScroll = () => {
      const scrolled = window.scrollY;
      if (heroImgRef.current && scrolled < window.innerHeight) {
        heroImgRef.current.style.transform = `scale(1.05) translateY(${scrolled * 0.15}px)`;
      }
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <section className="hero">
      <div className="hero-content">
        <div className="hero-tag">
          <span className="hero-tag-line"></span>
          <span className="hero-tag-text">Est. 2018 -- Premium Grooming</span>
        </div>

        <h1 className="hero-title">
          <span>WHERE CRAFT</span>
          <span>MEETS </span>
          <span className="title-stroke">&amp; TRADITION</span>
        </h1>

        <p className="hero-desc">
          Step into a world where every cut tells a story. Our master barbers blend time-honored techniques with contemporary artistry to craft your signature look.
        </p>

        <div className="hero-actions">
          <a href="#booking" className="btn-primary">
            <span>Reserve Your Chair</span>
            <svg xmlns="http://www.w3.org/2000/svg" aria-hidden="true" role="img" width="1em" height="1em" viewBox="0 0 24 24" className="iconify iconify--solar"><path fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M4 12h16m0 0l-6-6m6 6l-6 6"></path></svg>
          </a>
          <a href="#services" className="btn-outline">
            <span>Explore Services</span>
            <svg xmlns="http://www.w3.org/2000/svg" aria-hidden="true" role="img" width="1em" height="1em" viewBox="0 0 24 24" className="iconify iconify--solar"><path fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M4 12h16m0 0l-6-6m6 6l-6 6"></path></svg>
          </a>
        </div>
      </div>

      <div className="hero-image">
        <img ref={heroImgRef} src="https://images.unsplash.com/photo-1621605815971-fbc98d665033?w=1200&q=85&auto=format&fit=crop" alt="Master barber at work" loading="eager" />
      </div>
    </section>
  );
}
