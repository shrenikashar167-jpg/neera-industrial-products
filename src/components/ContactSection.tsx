import { useState, FormEvent } from 'react';
import { MapPin, Phone, Mail, Send, CheckCircle2, AlertCircle } from 'lucide-react';
import { InquiryFormInput } from '../types';
import { COMPANY_INFO } from '../data';
import { motion } from 'motion/react';

export default function ContactSection() {
  const [formData, setFormData] = useState<InquiryFormInput>({
    fullName: '',
    companyName: '',
    email: '',
    phone: '',
    requirement: 'Bulk Liquid Detergents',
    message: '',
  });

  const [error, setError] = useState<string | null>(null);
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [loading, setLoading] = useState(false);

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault();
    setError(null);

    // Basic client validation
    if (!formData.fullName.trim() || !formData.companyName.trim()) {
      setError('Please provide your full name and company name first.');
      return;
    }
    if (!formData.email.trim() || !formData.email.includes('@')) {
      setError('Please enter a valid work email address.');
      return;
    }
    if (!formData.phone.trim()) {
      setError('Please enter a contact phone number.');
      return;
    }

    setLoading(true);

    // Speed simulation representing real backend integration
    setTimeout(() => {
      setLoading(false);
      setIsSubmitted(true);
    }, 900);
  };

  const handleReset = () => {
    setFormData({
      fullName: '',
      companyName: '',
      email: '',
      phone: '',
      requirement: 'Bulk Liquid Detergents',
      message: '',
    });
    setIsSubmitted(false);
    setError(null);
  };

  return (
    <section className="py-28 bg-brand-light-bg overflow-hidden" id="contact">
      <div className="max-w-7xl mx-auto px-6 md:px-12 grid grid-cols-1 lg:grid-cols-2 gap-20">
        
        {/* Left Column: Coordinates & Information */}
        <motion.div
          initial={{ opacity: 0, x: -40 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true, amount: 0.15 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="space-y-12"
        >
          <div className="space-y-4">
            <h2 className="text-3xl md:text-4xl font-display font-extrabold text-brand-primary tracking-tight">
              Get in Touch
            </h2>
            <p className="text-brand-md-grey font-sans text-sm md:text-base leading-relaxed">
              Request a sample package, request our Material Safety Data Sheets (MSDS), or consult directly with an expert chemical formulator today.
            </p>
            <div className="w-16 h-1 bg-brand-primary rounded" />
          </div>

          {/* Contact Methods list */}
          <div className="space-y-6">
            <div className="flex items-start gap-4">
              <div className="bg-white p-3 rounded-xl border border-brand-border/20 text-brand-primary shrink-0 shadow-sm">
                <MapPin className="w-5 h-5 text-brand-primary" />
              </div>
              <div className="font-sans">
                <p className="text-brand-primary font-bold text-sm">Global Headquarters</p>
                <p className="text-brand-md-grey text-xs leading-relaxed mt-0.5">
                  {COMPANY_INFO.address}
                </p>
              </div>
            </div>

            <div className="flex items-start gap-4">
              <div className="bg-white p-3 rounded-xl border border-brand-border/20 text-brand-primary shrink-0 shadow-sm">
                <Phone className="w-5 h-5 text-brand-primary" />
              </div>
              <div className="font-sans">
                <p className="text-brand-primary font-bold text-sm">Direct Contact</p>
                <p className="text-brand-md-grey text-xs leading-relaxed mt-0.5">
                  Direct Line: {COMPANY_INFO.phone}
                </p>
              </div>
            </div>

            <div className="flex items-start gap-4">
              <div className="bg-white p-3 rounded-xl border border-brand-border/20 text-brand-primary shrink-0 shadow-sm">
                <Mail className="w-5 h-5 text-brand-primary" />
              </div>
              <div className="font-sans">
                <p className="text-brand-primary font-bold text-sm">Corporate Email</p>
                <p className="text-brand-md-grey text-xs leading-relaxed mt-0.5">
                  {COMPANY_INFO.email}
                </p>
              </div>
            </div>
          </div>

          {/* Live embedded Google Map targeting Mumbai HQ */}
          <div className="rounded-3xl overflow-hidden shadow-md border border-brand-border/30 h-64 hover:shadow-xl transition-all duration-350">
            <iframe
              src={`https://maps.google.com/maps?q=${encodeURIComponent(COMPANY_INFO.address)}&t=&z=14&ie=UTF8&iwloc=&output=embed`}
              width="100%"
              height="100%"
              frameBorder="0"
              scrolling="no"
              marginHeight={0}
              marginWidth={0}
              title="Neera Mumbai Headquarters Map Location"
              className="w-full h-full border-0 grayscale hover:grayscale-0 transition-all duration-750"
            />
          </div>
        </motion.div>

        {/* Right Column: Dynamic Inquiry Form */}
        <motion.div
          initial={{ opacity: 0, x: 40 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true, amount: 0.15 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
        >
          {isSubmitted ? (
            /* Success State */
            <div className="bg-white p-8 md:p-12 rounded-[2rem] shadow-xl border border-brand-border/25 flex flex-col items-center text-center space-y-6">
              <div className="w-16 h-16 bg-emerald-100 rounded-full flex items-center justify-center border border-emerald-300">
                <CheckCircle2 className="w-10 h-10 text-emerald-600" />
              </div>
              <div className="space-y-2">
                <h3 className="text-2xl font-display font-bold text-brand-primary">Inquiry Registered</h3>
                <p className="text-brand-md-grey font-sans text-xs max-w-sm">
                  Thank you! Your sample requirement for <strong className="text-brand-primary">{formData.requirement}</strong> is transmitted successfully. A Neera specialist will verify your email <strong className="text-brand-primary">{formData.email}</strong> and context within 4 business hours.
                </p>
              </div>
              <button
                onClick={handleReset}
                className="bg-brand-primary hover:bg-brand-blue-container text-white py-3.5 px-8 rounded-xl font-display font-bold text-xs transition-all cursor-pointer"
              >
                Submit New Inquiry
              </button>
            </div>
          ) : (
            /* Standard state form */
            <form onSubmit={handleSubmit} className="bg-white p-8 md:p-12 rounded-[2rem] space-y-6 shadow-xl border border-brand-border/20">
              
              <div className="text-left">
                <h4 className="text-xl font-display font-bold text-brand-primary">Commercial Inquiry</h4>
                <p className="text-xs text-brand-md-grey font-sans mt-1">Specify your clinical and industrial fabric care requirements.</p>
              </div>

              {error && (
                <div className="bg-rose-50 border border-rose-200 text-rose-700 py-3 px-4 rounded-xl text-xs flex items-center gap-2 font-medium">
                  <AlertCircle className="w-4 h-4 text-rose-600 shrink-0" />
                  <span>{error}</span>
                </div>
              )}

              <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
                <div className="space-y-1.5">
                  <label className="text-brand-md-grey font-sans font-semibold text-[11px] uppercase tracking-wider ml-1">Full Name</label>
                  <input
                    type="text"
                    required
                    value={formData.fullName}
                    onChange={(e) => setFormData({ ...formData, fullName: e.target.value })}
                    className="w-full bg-brand-light-bg border border-brand-border/30 rounded-xl px-4 py-3 text-xs focus:ring-2 focus:ring-brand-primary focus:border-brand-primary focus:outline-none transition-all text-brand-primary font-medium"
                    placeholder="John Doe"
                  />
                </div>
                <div className="space-y-1.5">
                  <label className="text-brand-md-grey font-sans font-semibold text-[11px] uppercase tracking-wider ml-1">Company Name</label>
                  <input
                    type="text"
                    required
                    value={formData.companyName}
                    onChange={(e) => setFormData({ ...formData, companyName: e.target.value })}
                    className="w-full bg-brand-light-bg border border-brand-border/30 rounded-xl px-4 py-3 text-xs focus:ring-2 focus:ring-brand-primary focus:border-brand-primary focus:outline-none transition-all text-brand-primary font-medium"
                    placeholder="Industries Corp"
                  />
                </div>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
                <div className="space-y-1.5">
                  <label className="text-brand-md-grey font-sans font-semibold text-[11px] uppercase tracking-wider ml-1">Work Email</label>
                  <input
                    type="email"
                    required
                    value={formData.email}
                    onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                    className="w-full bg-brand-light-bg border border-brand-border/30 rounded-xl px-4 py-3 text-xs focus:ring-2 focus:ring-brand-primary focus:border-brand-primary focus:outline-none transition-all text-brand-primary font-medium"
                    placeholder="john@company.com"
                  />
                </div>
                <div className="space-y-1.5">
                  <label className="text-brand-md-grey font-sans font-semibold text-[11px] uppercase tracking-wider ml-1">Phone Number</label>
                  <input
                    type="tel"
                    required
                    value={formData.phone}
                    onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                    className="w-full bg-brand-light-bg border border-brand-border/30 rounded-xl px-4 py-3 text-xs focus:ring-2 focus:ring-brand-primary focus:border-brand-primary focus:outline-none transition-all text-brand-primary font-medium"
                    placeholder="+91 90000 00000"
                  />
                </div>
              </div>

              <div className="space-y-1.5">
                <label className="text-brand-md-grey font-sans font-semibold text-[11px] uppercase tracking-wider ml-1">Requirement Details</label>
                <select
                  value={formData.requirement}
                  onChange={(e) => setFormData({ ...formData, requirement: e.target.value })}
                  className="w-full bg-brand-light-bg border border-brand-border/30 rounded-xl px-4 py-3 text-xs focus:ring-2 focus:ring-brand-primary focus:border-brand-primary focus:outline-none transition-all text-brand-primary font-semibold"
                >
                  <option value="Bulk Liquid Detergents">Bulk Liquid Detergents</option>
                  <option value="Fabric Care Solutions">Fabric Care Solutions</option>
                  <option value="Industrial Cleaners">Industrial Cleaners</option>
                  <option value="Custom Formulation">Custom Formulation Model</option>
                </select>
              </div>

              <div className="space-y-1.5">
                <label className="text-brand-md-grey font-sans font-semibold text-[11px] uppercase tracking-wider ml-1">Message</label>
                <textarea
                  rows={4}
                  value={formData.message}
                  onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                  className="w-full bg-brand-light-bg border border-brand-border/30 rounded-xl px-4 py-3 text-xs focus:ring-2 focus:ring-brand-primary focus:border-brand-primary focus:outline-none transition-all text-brand-primary font-medium"
                  placeholder="Tell us about your specific industrial volumes or required dilutions..."
                />
              </div>

              <button
                type="submit"
                disabled={loading}
                className="w-full bg-brand-primary hover:bg-brand-blue-container text-white py-4 rounded-xl font-display font-semibold text-xs transition-all shadow-md active:scale-95 flex items-center justify-center gap-2 cursor-pointer disabled:opacity-50"
              >
                {loading ? (
                  <span className="inline-block border-2 border-white/30 border-t-white h-4.5 w-4.5 animate-spin rounded-full" />
                ) : (
                  <>
                    <Send className="w-4 h-4 text-white" />
                    Submit Inquiry
                  </>
                )}
              </button>
            </form>
          )}
        </motion.div>

      </div>
    </section>
  );
}
