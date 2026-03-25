import { MapPin, Phone, Mail, Instagram, Twitter, Facebook } from 'lucide-react';

export default function Footer() {
  return (
    <footer className="footer">
      <div className="footer-top">
        <div className="footer-col">
          <h2 className="footer-brand-name">
            GENTLEMAN'S <span className="gold">&</span> CO.
          </h2>
          <p className="footer-brand-desc">
            A premium grooming destination for the modern gentleman, combining traditional techniques with contemporary style.
          </p>
          <div className="footer-socials">
            <a href="#"><Instagram size={18} /></a>
            <a href="#"><Twitter size={18} /></a>
            <a href="#"><Facebook size={18} /></a>
          </div>
        </div>

        <div className="footer-col">
          <h3 className="footer-col-title">LINKS</h3>
          <ul>
            <li><a href="#about">Our Story</a></li>
            <li><a href="#services">Services</a></li>
            <li><a href="#gallery">Portfolio</a></li>
            <li><a href="#team">The Masters</a></li>
            <li><a href="#booking">Book Now</a></li>
          </ul>
        </div>

        <div className="footer-col">
          <h3 className="footer-col-title">HOURS</h3>
          <ul>
            <li><span style={{ color: 'var(--gray)' }}>Mon - Fri:</span> 9AM - 8PM</li>
            <li><span style={{ color: 'var(--gray)' }}>Saturday:</span> 9AM - 6PM</li>
            <li><span style={{ color: 'var(--gray)' }}>Sunday:</span> Closed</li>
          </ul>
        </div>

        <div className="footer-col">
          <h3 className="footer-col-title">CONTACT</h3>
          <div className="footer-contact-item">
            <MapPin />
            <p>123 Heritage Street<br />New York, NY 10012</p>
          </div>
          <div className="footer-contact-item">
            <Phone />
            <p>+1 (555) 123-4567</p>
          </div>
          <div className="footer-contact-item">
            <Mail />
            <p>hello@gentlemansco.com</p>
          </div>
        </div>
      </div>

      <div className="footer-bottom">
        <p>&copy; {new Date().getFullYear()} Gentleman's & Co. All rights reserved.</p>
        <div className="footer-bottom-links">
          <p><a href="#">Privacy Policy</a></p>
          <p><a href="#">Terms of Service</a></p>
        </div>
      </div>
    </footer>
  );
}
