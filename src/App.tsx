/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Marquee from './components/Marquee';
import About from './components/About';
import Services from './components/Services';
import Gallery from './components/Gallery';
import Team from './components/Team';
import Testimonials from './components/Testimonials';
import Booking from './components/Booking';
import Instagram from './components/Instagram';
import Footer from './components/Footer';

export default function App() {
  return (
    <div className="app-container">
      <Navbar />
      <Hero />
      <Marquee />
      <About />
      <Services />
      <Gallery />
      <Team />
      <Testimonials />
      <Booking />
      <Instagram />
      <Footer />
    </div>
  );
}
