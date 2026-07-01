/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import Navbar from './components/Navbar';
import Hero from './components/Hero';
import CapabilitiesMarquee from './components/CapabilitiesMarquee';
import Stats from './components/Stats';
import ProductCatalog from './components/ProductCatalog';
import ResearchSection from './components/ResearchSection';
import LaundryCare from './components/LaundryCare';
import Logistics from './components/Logistics';
import Industries from './components/Industries';
import FaqSection from './components/FaqSection';
import ContactSection from './components/ContactSection';
import Footer from './components/Footer';

export default function App() {
  return (
    <div className="bg-brand-light-bg min-h-screen text-brand-primary font-sans antialiased selection:bg-brand-accent-teal/30 selection:text-brand-primary overflow-x-hidden">
      {/* 1. Sticky Navigation Bar */}
      <Navbar />

      {/* 2. Hero Header showcasing fluid animations, particles, and bottles */}
      <Hero />

      {/* 3. Capabilities Marquee Loops */}
      <CapabilitiesMarquee />

      {/* 4. Counting Statistics Ticker */}
      <Stats />

      {/* 5. Target-filtered Elegant Product Catalog with chemical MSDS modal overlay */}
      <ProductCatalog />

      {/* 6. Scientific Lab and QA Value Section */}
      <ResearchSection />

      {/* 7. Textile Laundry Solutions and tilted focus bottles */}
      <LaundryCare />

      {/* 8. Global Bulk Chemical distribution details */}
      <Logistics />

      {/* 9. Specializedserviced environments: Hotels, Hospitals, Manufacturing */}
      <Industries />

      {/* 9.5. Interactive Frequently Asked Questions */}
      <FaqSection />

      {/* 10. Sample & Inquiry form + liveHQ location embed */}
      <ContactSection />

      {/* 11. Custom subscription footer of certified standards */}
      <Footer />
    </div>
  );
}
