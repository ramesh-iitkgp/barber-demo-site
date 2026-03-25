import { Calendar, Clock, User, Phone } from 'lucide-react';
import { useEffect, useRef } from 'react';

export default function Booking() {
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
    <section id="booking" className="booking" ref={sectionRef}>
      <div className="booking-inner">
        <div className="booking-image reveal">
          <img 
            src="https://images.unsplash.com/photo-1521590832167-7bcbfaa6381f?auto=format&fit=crop&q=80&w=1000" 
            alt="Barber tools" 
            referrerPolicy="no-referrer"
          />
        </div>
        
        <div className="booking-form-wrapper reveal delay-1">
          <div className="section-tag">
            <div className="section-tag-line"></div>
            <span className="section-tag-text">Reservation</span>
          </div>
          <h2 className="section-title">
            Book Your <span className="italic">Chair</span>
          </h2>
          
          <form className="booking-form" onSubmit={(e) => e.preventDefault()}>
            <div className="form-row">
              <div className="form-group">
                <label>Name</label>
                <input type="text" placeholder="John Doe" required />
              </div>
              <div className="form-group">
                <label>Phone</label>
                <input type="tel" placeholder="+1 (555) 000-0000" required />
              </div>
            </div>
            
            <div className="form-row">
              <div className="form-group">
                <label>Service</label>
                <select required defaultValue="">
                  <option value="" disabled>Select a service</option>
                  <option value="classic">Classic Haircut</option>
                  <option value="shave">Hot Towel Shave</option>
                  <option value="beard">Beard Trim</option>
                  <option value="full">The Full Works</option>
                </select>
              </div>
              <div className="form-group">
                <label>Barber</label>
                <select defaultValue="any">
                  <option value="any">Any Available</option>
                  <option value="marcus">Marcus Thorne</option>
                  <option value="julian">Julian Hayes</option>
                  <option value="elias">Elias Vance</option>
                </select>
              </div>
            </div>
            
            <div className="form-row">
              <div className="form-group">
                <label>Date</label>
                <input type="date" required />
              </div>
              <div className="form-group">
                <label>Time</label>
                <input type="time" required />
              </div>
            </div>
            
            <button type="submit" className="btn-submit">
              CONFIRM BOOKING
            </button>
          </form>
        </div>
      </div>
    </section>
  );
}
