import { useState, useEffect } from 'react';

export default function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileNavActive, setIsMobileNavActive] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 80);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const toggleMobileNav = () => {
    setIsMobileNavActive(!isMobileNavActive);
    document.body.style.overflow = !isMobileNavActive ? 'hidden' : '';
  };

  const closeMobileNav = () => {
    setIsMobileNavActive(false);
    document.body.style.overflow = '';
  };

  return (
    <>
      <nav className={`nav ${isScrolled ? 'scrolled' : ''}`} id="nav">
        <a href="#" className="nav-logo">
          BLADE <span className="logo-ampersand">&amp;</span> CO.
        </a>

        <ul className="nav-links">
          <li><a href="#about">Our Story</a></li>
          <li><a href="#services">Services</a></li>
          <li><a href="#gallery">Gallery</a></li>
          <li><a href="#team">Barbers</a></li>
          <li><a href="#testimonials">Reviews</a></li>
        </ul>

        <a href="#booking" className="nav-cta">Book Now</a>

        <div className={`nav-hamburger ${isMobileNavActive ? 'active' : ''}`} id="hamburger" onClick={toggleMobileNav}>
          <span></span>
          <span></span>
          <span></span>
        </div>
      </nav>

      <div className={`mobile-nav ${isMobileNavActive ? 'active' : ''}`} id="mobileNav">
        <a href="#about" onClick={closeMobileNav}>Our Story</a>
        <a href="#services" onClick={closeMobileNav}>Services</a>
        <a href="#gallery" onClick={closeMobileNav}>Gallery</a>
        <a href="#team" onClick={closeMobileNav}>Barbers</a>
        <a href="#testimonials" onClick={closeMobileNav}>Reviews</a>
        <a href="#booking" onClick={closeMobileNav}>Book Now</a>
      </div>
    </>
  );
}
