import { useState, useEffect } from 'react';
import { Menu, X, ArrowRight } from 'lucide-react';
import logo from '../logo.png';

export default function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 30) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToSection = (id: string) => {
    setIsMobileMenuOpen(false);
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
  };

  return (
    <nav
      className={`fixed top-0 left-0 w-full z-50 transition-all duration-300 px-6 md:px-12 py-4 ${
        isScrolled
          ? 'bg-brand-primary/95 backdrop-blur-md shadow-md border-b border-white/10'
          : 'bg-brand-primary/40 backdrop-blur-sm border-b border-white/5'
      }`}
    >
      <div className="max-w-7xl mx-auto flex justify-between items-center">
        {/* Logo and Brand Title */}
        <div className="flex items-center gap-3 cursor-pointer shrink-0" onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}>
          <div className="bg-white p-1 rounded-lg border border-brand-border/20 flex items-center justify-center shadow-sm">
            <img src={logo} alt="Neera Industrial Products Logo" className="h-10 sm:h-11 md:h-12 w-auto object-contain" />
          </div>
          <span className="text-lg xl:text-xl font-display font-bold text-white tracking-wider hidden sm:block lg:hidden xl:block whitespace-nowrap">
            Neera Industrial Products
          </span>
        </div>

        {/* Desktop Links */}
        <div className="hidden lg:flex items-center gap-4 xl:gap-8">
          <button
            onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
            className="text-[13px] xl:text-sm font-sans font-medium text-white/90 hover:text-brand-accent-teal transition-colors cursor-pointer"
          >
            Home
          </button>
          <button
            onClick={() => scrollToSection('products')}
            className="text-[13px] xl:text-sm font-sans font-medium text-white/80 hover:text-brand-accent-teal transition-colors cursor-pointer"
          >
            Products
          </button>
          <button
            onClick={() => scrollToSection('about')}
            className="text-[13px] xl:text-sm font-sans font-medium text-white/80 hover:text-brand-accent-teal transition-colors cursor-pointer"
          >
            Scientific R&D
          </button>
          <button
            onClick={() => scrollToSection('laundry')}
            className="text-[13px] xl:text-sm font-sans font-medium text-white/80 hover:text-brand-accent-teal transition-colors cursor-pointer"
          >
            Laundry Care
          </button>
          <button
            onClick={() => scrollToSection('industries')}
            className="text-[13px] xl:text-sm font-sans font-medium text-white/80 hover:text-brand-accent-teal transition-colors cursor-pointer"
          >
            Industries
          </button>
          <button
            onClick={() => scrollToSection('contact')}
            className="text-[13px] xl:text-sm font-sans font-medium text-white/80 hover:text-brand-accent-teal transition-colors cursor-pointer"
          >
            Contact
          </button>
        </div>

        {/* Action Button */}
        <div className="hidden sm:flex items-center gap-4">
          <button
            onClick={() => scrollToSection('contact')}
            className="bg-brand-accent-teal text-brand-primary hover:bg-white hover:text-brand-primary font-sans font-semibold text-xs py-2 px-4 xl:py-2.5 xl:px-5 rounded-lg tracking-wider transition-all shadow-[0_0_15px_rgba(0,155,158,0.25)] active:scale-95 flex items-center gap-1.5 cursor-pointer"
          >
            Get Quote
            <ArrowRight className="w-3.5 h-3.5" />
          </button>
        </div>

        {/* Mobile Toggle */}
        <button
          onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          className="lg:hidden p-2 text-white/90 hover:text-brand-accent-teal transition-colors"
          aria-label="Toggle menu"
        >
          {isMobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
        </button>
      </div>

      {/* Mobile Drawer */}
      {isMobileMenuOpen && (
        <div className="lg:hidden absolute top-[73px] left-0 w-full bg-brand-primary border-b border-white/10 shadow-2xl py-6 px-6 flex flex-col gap-4 animate-fadeIn">
          <button
            onClick={() => {
              window.scrollTo({ top: 0, behavior: 'smooth' });
              setIsMobileMenuOpen(false);
            }}
            className="text-left py-2 text-white/90 border-b border-white/5 font-sans font-medium"
          >
            Home
          </button>
          <button
            onClick={() => scrollToSection('products')}
            className="text-left py-2 text-white/80 border-b border-white/5 font-sans font-medium"
          >
            Products
          </button>
          <button
            onClick={() => scrollToSection('about')}
            className="text-left py-2 text-white/80 border-b border-white/5 font-sans font-medium"
          >
            Scientific R&D
          </button>
          <button
            onClick={() => scrollToSection('laundry')}
            className="text-left py-2 text-white/80 border-b border-white/5 font-sans font-medium"
          >
            Laundry Care
          </button>
          <button
            onClick={() => scrollToSection('industries')}
            className="text-left py-2 text-white/80 border-b border-white/5 font-sans font-medium"
          >
            Industries
          </button>
          <button
            onClick={() => scrollToSection('contact')}
            className="text-left py-2 text-white/80 font-sans font-medium"
          >
            Contact
          </button>
          <button
            onClick={() => scrollToSection('contact')}
            className="w-full bg-brand-accent-teal text-brand-primary font-sans font-semibold text-center py-3 rounded-lg tracking-wider"
          >
            Get Quote
          </button>
        </div>
      )}
    </nav>
  );
}
