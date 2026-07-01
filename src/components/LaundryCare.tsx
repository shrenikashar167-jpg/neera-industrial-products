import { useState } from 'react';
import { Sparkles, HeartPulse, Sun, Droplets, Scale, Calculator } from 'lucide-react';

interface DosageScheme {
  nirolN: number;
  nirolF: number;
  nirolO: number;
  nirolTS: number;
  fragrance: number;
}

const DOSAGE_DATA: Record<string, DosageScheme> = {
  whiteLinen: { nirolN: 200, nirolF: 250, nirolO: 300, nirolTS: 0, fragrance: 300 },
  whiteTowel: { nirolN: 300, nirolF: 300, nirolO: 300, nirolTS: 300, fragrance: 300 },
  spaTowel: { nirolN: 400, nirolF: 400, nirolO: 400, nirolTS: 400, fragrance: 300 },
  colourFabric: { nirolN: 0, nirolF: 400, nirolO: 0, nirolTS: 0, fragrance: 300 },
  colourSpaTowel: { nirolN: 0, nirolF: 400, nirolO: 0, nirolTS: 400, fragrance: 300 },
  allLinenRinse: { nirolN: 0, nirolF: 0, nirolO: 0, nirolTS: 0, fragrance: 300 },
};

const LINEN_TYPES = [
  { id: 'whiteLinen', label: 'White Linen (Sheets & Pillow Covers)' },
  { id: 'whiteTowel', label: 'White Towels' },
  { id: 'spaTowel', label: 'SPA Towels' },
  { id: 'colourFabric', label: 'Coloured Fabrics' },
  { id: 'colourSpaTowel', label: 'Coloured SPA Towels' },
  { id: 'allLinenRinse', label: 'All Linen (Last Rinse Only)' },
];

export default function LaundryCare() {
  const [selectedLinen, setSelectedLinen] = useState('whiteLinen');
  const [loadWeight, setLoadWeight] = useState(50); // default to 50kg

  const baseDosage = DOSAGE_DATA[selectedLinen];
  const scaleFactor = loadWeight / 50;

  const calculateDosage = (baseValue: number) => {
    if (baseValue === 0) return 'N/A';
    const computed = Math.round(baseValue * scaleFactor);
    return `${computed} g`;
  };

  return (
    <section className="py-28 bg-white relative overflow-hidden" id="laundry">
      <div className="max-w-7xl mx-auto px-6 md:px-12">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-20 items-center">
          
          {/* Left Column: Textile Care Brand Metrics */}
          <div className="space-y-8">
            <div className="space-y-4">
              <span className="text-brand-primary uppercase tracking-[0.2em] font-display font-semibold text-xs flex items-center gap-2">
                <Sparkles className="w-4 h-4 text-brand-primary animate-spin" style={{ animationDuration: '6s' }} />
                Textile Excellence
              </span>
              <h2 className="text-3xl md:text-4xl font-display font-bold text-brand-primary tracking-tight leading-[1.2]">
                Professional Laundry Care
              </h2>
              <p className="text-brand-md-grey font-sans text-sm md:text-base leading-relaxed">
                Advanced chemical formulations designed specifically for high-capacity industrial laundries and premium hospitality textiles. We engineer our formulas to ensure fabric tensile longevity is fully sustained alongside impeccable cleanliness.
              </p>
              <div className="w-16 h-1 bg-brand-primary rounded" />
            </div>

            {/* Three key specs */}
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 pt-4">
              <div className="p-4 bg-brand-light-bg rounded-2xl border border-brand-border/10 space-y-3 hover:shadow-md transition-shadow">
                <div className="w-10 h-10 bg-brand-primary/10 rounded-xl flex items-center justify-center text-brand-primary">
                  <Droplets className="w-5 h-5 text-brand-primary" />
                </div>
                <h5 className="font-display font-bold text-sm text-brand-primary">
                  Stain Removal
                </h5>
                <p className="text-brand-md-grey font-sans text-[11px] leading-relaxed">
                  Precision targeting of grease, blood, oil, and ink stains without affecting fabric core structures.
                </p>
              </div>

              <div className="p-4 bg-brand-light-bg rounded-2xl border border-brand-border/10 space-y-3 hover:shadow-md transition-shadow">
                <div className="w-10 h-10 bg-brand-primary/10 rounded-xl flex items-center justify-center text-brand-primary">
                  <HeartPulse className="w-5 h-5 text-brand-primary" />
                </div>
                <h5 className="font-display font-bold text-sm text-brand-primary">
                  Fiber Longevity
                </h5>
                <p className="text-brand-md-grey font-sans text-[11px] leading-relaxed">
                  pH-buffered agents that mitigate fiber rot and preserve luxury sheet thread counts.
                </p>
              </div>

              <div className="p-4 bg-brand-light-bg rounded-2xl border border-brand-border/10 space-y-3 hover:shadow-md transition-shadow">
                <div className="w-10 h-10 bg-brand-primary/10 rounded-xl flex items-center justify-center text-brand-primary">
                  <Sun className="w-5 h-5 text-brand-primary" />
                </div>
                <h5 className="font-display font-bold text-sm text-brand-primary">
                  Crisp Brightness
                </h5>
                <p className="text-brand-md-grey font-sans text-[11px] leading-relaxed">
                  Innovative clinical optical whitening molecules for that clean, like-new pristine finish.
                </p>
              </div>
            </div>
          </div>

          {/* Right Column: Physical Tilted Bottles of Nirol F and Nirol O */}
          <div className="relative grid grid-cols-2 gap-6 pt-8 max-w-md mx-auto lg:max-w-none">
            {/* Pink: Nirol F Card */}
            <div className="bg-brand-light-bg p-5 rounded-3xl border border-brand-border/30 shadow-lg transform -rotate-3 hover:rotate-0 hover:-translate-y-2 transition-all duration-300">
              <div className="bg-white rounded-2xl p-4 flex items-center justify-center aspect-square shadow-inner">
                <img
                  src="https://lh3.googleusercontent.com/aida-public/AB6AXuCrHL-OxnoXpq1JDOJmthE37FdkScwRl8if1t9T3g18i0Y_p2W7IvWiHKHqXF49wF_yS51yIlLgLYZJ1yFSsMnVr6VTJ3ZNA8pjh6mimjd2Jln8jWdcalcRLU7uaZxEuUXAG4mbcoecPwoBRKMQPcj6LtAXBBUPX7lRphEMhM2eHNliagscVwI4dfusMeTNpgzdDQGTEhpH_E6t6QpLI5JcG1ggYs2SXatC6pxn-OtpBPEwAAmnGU0XQaU2YEGtn8F6IaZgGa_V93Qv"
                  alt="Featured Nirol F Liquid Detergent"
                  className="max-h-[160px] object-contain drop-shadow-[0_8px_16px_rgba(0,0,0,0.1)]"
                />
              </div>
              <p className="text-center mt-4 font-display font-bold text-sm text-brand-primary">
                Nirol F
              </p>
              <div className="text-center text-[10px] text-brand-md-grey uppercase tracking-wider font-semibold font-sans mt-0.5">
                Premium Liquid Soap
              </div>
            </div>

            {/* Blue: Nirol O Card */}
            <div className="bg-brand-light-bg p-5 rounded-3xl border border-brand-border/30 shadow-lg transform translate-y-6 rotate-3 hover:rotate-0 hover:-translate-y-2 transition-all duration-300">
              <div className="bg-white rounded-2xl p-4 flex items-center justify-center aspect-square shadow-inner">
                <img
                  src="https://lh3.googleusercontent.com/aida-public/AB6AXuAu1j2rDfIUM9kEHTe-2buX5U89zvssHGb7hobU8bsPzZKFWBl79eQ9YkyPlptkR2aVYG2lEoBiZYQIo0AYdxPDKnll38-xmYWNT4QH1zjZAuiZZ3g_9bj1SlKIztQukwAmYgnT6Potb1QYNGkEXIjKb_a1OzRrgK9zKO4EpFix8BlJetBEJSIyoW5On8rdcEGBdrOOLoNnigz1xuaRtIUMt_LwQZaaQWgnt0g5q81iuGJbq6Q1Q-wCojAuTABLYhTA59z3SnIixTvX"
                  alt="Featured Nirol O Bleach and Sanitizer"
                  className="max-h-[160px] object-contain drop-shadow-[0_8px_16px_rgba(0,0,0,0.1)]"
                />
              </div>
              <p className="text-center mt-4 font-display font-bold text-sm text-brand-primary">
                Nirol O
              </p>
              <div className="text-center text-[10px] text-brand-md-grey uppercase tracking-wider font-semibold font-sans mt-0.5">
                Stabilized Oxygen Bleach
              </div>
            </div>
          </div>

        </div>

        {/* Interactive Dosage Calculator Section */}
        <div className="mt-24 pt-16 border-t border-brand-border/10">
          <div className="text-center max-w-2xl mx-auto mb-12 space-y-3">
            <span className="text-brand-primary uppercase tracking-[0.2em] font-display font-bold text-xs flex items-center justify-center gap-2">
              <Calculator className="w-4.5 h-4.5 text-brand-primary" />
              Laundry Dosage Calculator
            </span>
            <h3 className="text-2xl md:text-3xl font-display font-extrabold text-brand-primary tracking-tight">
              Chemical & Fragrance Dosage Chart
            </h3>
            <p className="text-xs text-brand-md-grey font-sans leading-relaxed">
              Based on our official laboratory formulation benchmarks for 50kgs of linen. Enter your load weight and select linen type below to compute recommended product ratios.
            </p>
          </div>

          <div className="bg-brand-light-bg rounded-[2rem] border border-brand-border/20 p-6 md:p-10 shadow-sm grid grid-cols-1 lg:grid-cols-12 gap-8 items-stretch">
            {/* Calculator controls */}
            <div className="lg:col-span-5 space-y-6 flex flex-col justify-center">
              <div className="space-y-2">
                <label className="text-brand-md-grey font-sans font-semibold text-[11px] uppercase tracking-wider block">
                  1. Select Type of Linen
                </label>
                <div className="space-y-2">
                  {LINEN_TYPES.map((type) => (
                    <button
                      key={type.id}
                      onClick={() => setSelectedLinen(type.id)}
                      className={`w-full py-2.5 px-4 rounded-xl font-sans font-semibold text-xs text-left transition-all flex items-center justify-between cursor-pointer border ${
                        selectedLinen === type.id
                          ? 'bg-brand-primary text-white border-brand-primary shadow-sm'
                          : 'bg-white text-brand-primary border-brand-border/30 hover:bg-brand-border/10'
                      }`}
                    >
                      {type.label}
                      {selectedLinen === type.id && <span className="w-1.5 h-1.5 rounded-full bg-brand-accent-teal" />}
                    </button>
                  ))}
                </div>
              </div>

              <div className="space-y-2">
                <div className="flex justify-between items-center">
                  <label className="text-brand-md-grey font-sans font-semibold text-[11px] uppercase tracking-wider">
                    2. Linen Load Weight
                  </label>
                  <span className="text-xs font-display font-bold text-brand-primary bg-white py-1 px-3 rounded-lg border border-brand-border/20 shadow-sm animate-pulse">
                    {loadWeight} kg
                  </span>
                </div>
                <div className="flex gap-4 items-center bg-white p-4 rounded-2xl border border-brand-border/20">
                  <Scale className="w-5 h-5 text-brand-md-grey shrink-0" />
                  <input
                    type="range"
                    min={5}
                    max={500}
                    step={5}
                    value={loadWeight}
                    onChange={(e) => setLoadWeight(Number(e.target.value))}
                    className="w-full accent-brand-accent-teal cursor-pointer"
                  />
                </div>
                <span className="text-[10px] text-brand-md-grey block text-right">
                  Adjust from 5kg to 500kg
                </span>
              </div>
            </div>

            {/* Calculator results */}
            <div className="lg:col-span-7 bg-white rounded-3xl border border-brand-border/10 p-6 md:p-8 flex flex-col justify-between shadow-sm">
              <div className="space-y-4">
                <h4 className="text-sm uppercase tracking-wider font-display font-bold text-brand-primary border-b border-brand-border/10 pb-3">
                  Recommended Formula Ratio
                </h4>
                
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  
                  {/* Nirol N Card */}
                  <div className="bg-brand-light-bg rounded-2xl p-4 border border-brand-border/10 flex items-center justify-between">
                    <div>
                      <p className="text-xs font-bold text-brand-primary">Nirol N</p>
                      <p className="text-[10px] text-brand-md-grey font-sans">Chef Coat & Oil spotter</p>
                    </div>
                    <span className={`font-display font-extrabold text-sm md:text-base ${baseDosage.nirolN === 0 ? 'text-brand-md-grey/30 font-normal' : 'text-brand-primary'}`}>
                      {calculateDosage(baseDosage.nirolN)}
                    </span>
                  </div>

                  {/* Nirol F Card */}
                  <div className="bg-brand-light-bg rounded-2xl p-4 border border-brand-border/10 flex items-center justify-between">
                    <div>
                      <p className="text-xs font-bold text-brand-primary">Nirol F</p>
                      <p className="text-[10px] text-brand-md-grey font-sans">Multipurpose Liquid</p>
                    </div>
                    <span className={`font-display font-extrabold text-sm md:text-base ${baseDosage.nirolF === 0 ? 'text-brand-md-grey/30 font-normal' : 'text-brand-primary'}`}>
                      {calculateDosage(baseDosage.nirolF)}
                    </span>
                  </div>

                  {/* Nirol O Card */}
                  <div className="bg-brand-light-bg rounded-2xl p-4 border border-brand-border/10 flex items-center justify-between">
                    <div>
                      <p className="text-xs font-bold text-brand-primary">Nirol O</p>
                      <p className="text-[10px] text-brand-md-grey font-sans">Oxygen Bleach</p>
                    </div>
                    <span className={`font-display font-extrabold text-sm md:text-base ${baseDosage.nirolO === 0 ? 'text-brand-md-grey/30 font-normal' : 'text-brand-primary'}`}>
                      {calculateDosage(baseDosage.nirolO)}
                    </span>
                  </div>

                  {/* Nirol TS Card */}
                  <div className="bg-brand-light-bg rounded-2xl p-4 border border-brand-border/10 flex items-center justify-between">
                    <div>
                      <p className="text-xs font-bold text-brand-primary">Nirol TS</p>
                      <p className="text-[10px] text-brand-md-grey font-sans">Specialty Builder</p>
                    </div>
                    <span className={`font-display font-extrabold text-sm md:text-base ${baseDosage.nirolTS === 0 ? 'text-brand-md-grey/30 font-normal' : 'text-brand-primary'}`}>
                      {calculateDosage(baseDosage.nirolTS)}
                    </span>
                  </div>

                </div>

                {/* Fragrance Card (Full Width) */}
                <div className="bg-brand-primary/5 rounded-2xl p-4 border border-brand-primary/10 flex items-center justify-between">
                  <div>
                    <p className="text-xs font-bold text-brand-primary">Fragrance Composition</p>
                    <p className="text-[10px] text-brand-md-grey font-sans">Applied in last rinse cycle</p>
                  </div>
                  <span className="font-display font-extrabold text-sm md:text-base text-brand-primary">
                    {calculateDosage(baseDosage.fragrance)}
                  </span>
                </div>
              </div>

              <div className="mt-6 pt-4 border-t border-brand-border/10 flex items-start gap-2">
                <span className="inline-block w-1.5 h-1.5 rounded-full bg-brand-accent-teal mt-1 shrink-0" />
                <p className="text-[10px] text-brand-md-grey leading-relaxed">
                  Calculated values are estimates. Real wash results may vary depending on water hardness, washing machine parameters, and soil levels.
                </p>
              </div>
            </div>
          </div>
        </div>

      </div>
    </section>
  );
}
