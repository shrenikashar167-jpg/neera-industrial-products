import { useState, FormEvent } from 'react';
import { Linkedin, Facebook, Instagram, Mail, CheckCircle2, Send, Shield } from 'lucide-react';
import logo from '../logo.png';
import { COMPANY_INFO } from '../data';

export default function Footer() {
  const [email, setEmail] = useState('');
  const [subscribed, setSubscribed] = useState(false);

  const handleSub = (e: FormEvent) => {
    e.preventDefault();
    if (email.trim() && email.includes('@')) {
      setSubscribed(true);
    }
  };

  const scrollToSub = (id: string) => {
    const el = document.getElementById(id);
    if (el) el.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <footer className="bg-brand-primary text-white rounded-t-[3rem] shadow-2xl pt-20 pb-8 px-6 md:px-12 relative overflow-hidden">
      {/* Decorative lines representing laboratory testing scales */}
      <div className="absolute top-0 left-0 right-0 h-1.5 bg-gradient-to-r from-brand-accent-teal via-brand-accent-pink to-brand-accent-purple" />

      <div className="max-w-7xl mx-auto">
        
        {/* Main Content Sections */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12 pb-16 border-b border-white/5">
          
          {/* Logo & Pitch */}
          <div className="space-y-6 md:col-span-1">
            <div className="flex items-center gap-3">
              <div className="bg-white p-1 rounded-lg border border-brand-border/20 flex items-center justify-center shadow-sm shrink-0">
                <img src={logo} alt="Neera Industrial Products Logo" className="w-24 h-9 object-contain" />
              </div>
              <span className="text-sm md:text-[15px] font-display font-bold text-white tracking-wider uppercase leading-tight">
                Neera Industrial Products
              </span>
            </div>
            <p className="text-brand-border/75 text-xs font-sans leading-relaxed">
              Engineering the Science Behind Clean since {COMPANY_INFO.established}. Dedicated to extreme purity, logistics reliability, and medical environmental protection workflows.
            </p>
            {/* Social icons */}
            <div className="flex gap-3 pt-2 flex-wrap">
              <a
                href="#"
                className="h-9 w-9 bg-white/5 border border-white/10 rounded-lg flex items-center justify-center hover:bg-brand-accent-teal/15 hover:border-brand-accent-teal/50 transition-all text-white/80 hover:text-brand-accent-teal"
                aria-label="LinkedIn Profile"
              >
                <Linkedin className="w-4 h-4" />
              </a>
              <a
                href="#"
                className="h-9 w-9 bg-white/5 border border-white/10 rounded-lg flex items-center justify-center hover:bg-brand-accent-teal/15 hover:border-brand-accent-teal/50 transition-all text-white/80 hover:text-brand-accent-teal"
                aria-label="Facebook Profile"
              >
                <Facebook className="w-4 h-4" />
              </a>
              <a
                href="#"
                className="h-9 w-9 bg-white/5 border border-white/10 rounded-lg flex items-center justify-center hover:bg-brand-accent-teal/15 hover:border-brand-accent-teal/50 transition-all text-white/80 hover:text-brand-accent-teal"
                aria-label="Instagram Profile"
              >
                <Instagram className="w-4 h-4" />
              </a>
              <a
                href="#"
                className="h-9 w-9 bg-white/5 border border-white/10 rounded-lg flex items-center justify-center hover:bg-brand-accent-teal/15 hover:border-brand-accent-teal/50 transition-all text-white/80 hover:text-brand-accent-teal"
                aria-label="WhatsApp Business"
              >
                <svg viewBox="0 0 24 24" className="w-4 h-4 fill-current" xmlns="http://www.w3.org/2000/svg">
                  <path d="M.057 24l1.687-6.163c-1.041-1.804-1.588-3.849-1.587-5.946C.06 5.348 5.397.01 12.008.01c3.202.001 6.212 1.246 8.477 3.514 2.266 2.268 3.507 5.28 3.505 8.484-.004 6.657-5.34 11.997-11.953 11.997-2.005-.001-3.973-.502-5.73-1.458L0 24zm6.59-4.846c1.6.95 3.188 1.449 4.625 1.451 5.437 0 9.862-4.386 9.865-9.778.001-2.611-1.015-5.067-2.86-6.918C16.374 2.056 13.908.97 11.272.969c-5.441 0-9.866 4.387-9.869 9.779A9.61 9.61 0 002.9 15.657l-.37 1.353-.997 3.642 3.76-.988.423-.27z" />
                </svg>
              </a>
              <a
                href={`mailto:${COMPANY_INFO.email}`}
                className="h-9 w-9 bg-white/5 border border-white/10 rounded-lg flex items-center justify-center hover:bg-brand-accent-teal/15 hover:border-brand-accent-teal/50 transition-all text-white/80 hover:text-brand-accent-teal"
                aria-label="Email Support"
              >
                <Mail className="w-4 h-4" />
              </a>
            </div>
          </div>

          {/* Product Catalog Direct Jumps */}
          <div className="space-y-6">
            <h6 className="text-brand-accent-teal font-display font-bold text-xs uppercase tracking-wider">
              Product Catalogue
            </h6>
            <ul className="space-y-3 font-sans text-xs text-brand-border/80">
              <li>
                <button
                  onClick={() => scrollToSub('products')}
                  className="hover:text-white hover:translate-x-1 duration-200 transition-all cursor-pointer block text-left"
                >
                  Spotting Agents
                </button>
              </li>
              <li>
                <button
                  onClick={() => scrollToSub('products')}
                  className="hover:text-white hover:translate-x-1 duration-200 transition-all cursor-pointer block text-left"
                >
                  Concentrated Liquid Detergents
                </button>
              </li>
              <li>
                <button
                  onClick={() => scrollToSub('products')}
                  className="hover:text-white hover:translate-x-1 duration-200 transition-all cursor-pointer block text-left"
                >
                  Heavy-Duty Industrial Cleaners
                </button>
              </li>
              <li>
                <button
                  onClick={() => scrollToSub('products')}
                  className="hover:text-white hover:translate-x-1 duration-200 transition-all cursor-pointer block text-left"
                >
                  Certified Specialty Chemicals
                </button>
              </li>
            </ul>
          </div>

          {/* Quick Corporate Links */}
          <div className="space-y-6">
            <h6 className="text-brand-accent-teal font-display font-bold text-xs uppercase tracking-wider">
              Quick Links
            </h6>
            <ul className="space-y-3 font-sans text-xs text-brand-border/80">
              <li>
                <button
                  onClick={() => scrollToSub('about')}
                  className="hover:text-white hover:translate-x-1 duration-200 transition-all cursor-pointer block text-left"
                >
                  Company Profile
                </button>
              </li>
              <li>
                <button
                  onClick={() => scrollToSub('contact')}
                  className="hover:text-white hover:translate-x-1 duration-200 transition-all cursor-pointer block text-left"
                >
                  Technical Chemistry Support
                </button>
              </li>
              <li>
                <button
                  onClick={() => scrollToSub('distribution')}
                  className="hover:text-white hover:translate-x-1 duration-200 transition-all cursor-pointer block text-left"
                >
                  Global Bulk Distribution
                </button>
              </li>
            </ul>
          </div>

          {/* Newsletter Input */}
          <div className="space-y-6">
            <h6 className="text-brand-accent-teal font-display font-bold text-xs uppercase tracking-wider">
              Stay Informed
            </h6>
            <p className="text-brand-border/80 text-xs font-sans leading-relaxed">
              Subscribe to the Neera Industrial Products Newsletter to receive notifications about breakthrough research and optimization benchmarks.
            </p>

            {subscribed ? (
              <div className="bg-brand-accent-teal/15 border border-brand-accent-teal/30 p-3.5 rounded-xl text-brand-accent-teal text-[11px] font-sans font-semibold flex items-center gap-2 animate-fadeIn">
                <CheckCircle2 className="w-4 h-4 text-brand-accent-teal shrink-0" />
                <span>Subscription activated successfully!</span>
              </div>
            ) : (
              <form onSubmit={handleSub} className="flex gap-2">
                <input
                  type="email"
                  required
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  className="bg-white/10 border border-white/20 rounded-xl px-4 py-2.5 w-full text-xs text-white placeholder-white/40 focus:ring-1 focus:ring-brand-accent-teal focus:border-brand-accent-teal focus:outline-none transition-all"
                  placeholder="name@corporation.com"
                />
                <button
                  type="submit"
                  className="bg-brand-accent-teal hover:bg-white text-brand-primary p-2.5 rounded-xl hover:scale-105 transition-all text-sm shrink-0 cursor-pointer"
                  aria-label="Subscribe"
                >
                  <Send className="w-4 h-4" />
                </button>
              </form>
            )}
          </div>

        </div>

        {/* Lower Metadata Credit */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-center">
          <p className="text-[10px] sm:text-xs font-display tracking-wider text-brand-border/60 uppercase">
            © 2026 Neera Industrial Products. All rights reserved. Engineering the Science Behind Clean.
          </p>

          <div className="flex items-center gap-2.5 text-[11px] text-brand-border/50">
            <div className="flex items-center gap-1.5 font-sans">
              <Shield className="w-3.5 h-3.5 text-brand-accent-teal" />
              Secure B2B Portal
            </div>
          </div>
        </div>

      </div>
    </footer>
  );
}
