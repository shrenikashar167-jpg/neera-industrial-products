import { Product, IndustrySegment } from './types';

// Import local image assets
import nirolA from './assets/Nirol A.png';
import nirolB from './assets/Nirol B.png';
import nirolCC from './assets/Nirol CC.png';
import nirolEH from './assets/Nirol EH.png';
import nirolF from './assets/Nirol F.png';
import nirolO from './assets/Nirol O.png';
import nirolR from './assets/Nirol R.png';
import nirolSP from './assets/Nirol SP.png';
import freshScent from './assets/Fresh Scent.png';
import germicide from './assets/Germicide.png';

// New specific product assets
import aminoImg from './assets/Amino.png';
import neeraSoftTexImg from './assets/Neera Soft Tex.png';
import opPestImg from './assets/O.P.Pest.png';
import nirapolOwaImg from './assets/Nirapol [O.W.A].png';
import niralinShImg from './assets/Niralin SH.png';
import nirolDImg from './assets/Nirol D.png';
import nirolLeImg from './assets/Nirol L.E.png';
import nirolNImg from './assets/Nirol N.png';
import sodiumHypochloriteImg from './assets/Sodium Hypochlorite.png';
import laundriesTextiles from './assets/laundries_textiles.png';

export const COMPANY_INFO = {
  name: 'Neera Industrial Products',
  established: 1988,
  city: 'Mumbai',
  state: 'Maharashtra',
  tagline: 'A Tradition of Quality Cleaning!',
  slogan: 'Manufacturers of Quality Textile & Auxiliary Care!',
  email: 'neeraindustrialproducts@gmail.com',
  phone: '+91 9833163326',
  address: '148, Mayuresh HSG Society, Vallabh Bagh Lane, Near Saibaba Mandir, Pant Nagar, Ghatkopar East, Mumbai, Maharashtra - 400075'
};

export const PRODUCTS: Product[] = [
  {
    id: 'amino',
    name: 'Amino',
    tagline: 'Silicon Softener for Ready-Made Garments',
    description: 'High-performance amino-silicone softener that provides a premium silky hand-feel and elasticity to ready-made garments.',
    category: 'Fabric Care',
    image: aminoImg,
    specs: {
      pH: '6.0 - 7.0 (Mild Acid)',
      dilution: '1% to 2% on weight of fabric in bath',
      appearance: 'Translucent Liquid',
      fragrance: 'Neutral',
      packaging: '5L, 50L Containers'
    },
    safetySheetUrl: '#'
  },
  {
    id: 'nirapol-owa',
    name: 'Nirapol [O.W.A]',
    tagline: 'Optical Brightener for White Fabrics',
    description: 'Advanced optical brightening agent that absorbs ultraviolet light and emits visible blue light to make whites look incredibly bright.',
    category: 'Specialty',
    image: nirapolOwaImg,
    specs: {
      pH: '8.0 - 9.0 (Mildly Alkaline)',
      dilution: '0.1% to 0.3% of dry load weight',
      appearance: 'Pale Yellowish Liquid',
      fragrance: 'Slight Chemical',
      packaging: '5L, 25L'
    },
    safetySheetUrl: '#'
  },
  {
    id: 'nirol-a',
    name: 'Nirol A',
    tagline: 'Professional Ink Stain Remover',
    description: 'Highly targeted spotting agent used as an ink remover for cotton and terry cotton fabric types.',
    category: 'Stain Removal',
    image: nirolA,
    specs: {
      pH: '6.0 - 7.0 (Neutral-Mild Acid)',
      dilution: 'Apply directly as a spotting agent before main wash',
      appearance: 'Clear Colorless Liquid',
      fragrance: 'Mild Solvent',
      packaging: '1L, 5L Bottles'
    },
    safetySheetUrl: '#'
  },
  {
    id: 'nirol-b',
    name: 'Nirol B',
    tagline: 'Enzymatic Blood Stain Remover',
    description: 'Highly active enzymatic spotter designed to digest and completely remove blood stains from sheets and apparel.',
    category: 'Stain Removal',
    image: nirolB,
    specs: {
      pH: '8.0 - 9.0 (Mild Alkaline)',
      dilution: 'Apply directly as a spotting agent; allow 5 mins to digest',
      appearance: 'Clear Yellow Liquid',
      fragrance: 'Odorless',
      packaging: '1L, 5L Bottles'
    },
    safetySheetUrl: '#'
  },
  {
    id: 'nirol-cc',
    name: 'Nirol CC',
    tagline: 'Chef Clothes Stain Remover',
    description: 'Specifically formulated detergent booster used to remove persistent grease, gravy, and food stains on chef clothes.',
    category: 'Stain Removal',
    image: nirolCC,
    specs: {
      pH: '12.0 - 13.0 (Strongly Alkaline)',
      dilution: '1:10 to 1:20 dilution for soaking',
      appearance: 'Clear Yellow Fluid',
      fragrance: 'Strong Citric',
      packaging: '5L, 25L Carboys'
    },
    safetySheetUrl: '#'
  },
  {
    id: 'nirol-d',
    name: 'Nirol D',
    tagline: 'Fabric Colour Fixer',
    description: 'Specialty chemical color-fixing agent that prevents bleeding of reactive and direct dyes in colored fabrics during wet processing.',
    category: 'Specialty',
    image: nirolDImg,
    specs: {
      pH: '5.0 - 6.0 (Mildly Acidic)',
      dilution: '1% to 3% on weight of fabric in bath',
      appearance: 'Light Straw Liquid',
      fragrance: 'Neutral',
      packaging: '5L, 25L'
    },
    safetySheetUrl: '#'
  },
  {
    id: 'nirol-eh',
    name: 'Nirol EH',
    tagline: 'Premium Multipurpose Liquid Detergent',
    description: 'Multipurpose liquid detergent designed to clean both white and colored clothes, preventing color run and keeping fabrics bright.',
    category: 'Multi-Purpose',
    image: nirolEH,
    specs: {
      pH: '8.0 - 9.0 (Mild Alkaline)',
      dilution: '5ml to 10ml per kg of wash load',
      appearance: 'Clear Greenish Liquid',
      fragrance: 'Clean Linen',
      packaging: '5L, 25L Carboys'
    },
    safetySheetUrl: '#'
  },
  {
    id: 'nirol-f',
    name: 'Nirol F',
    tagline: 'Multipurpose Liquid & Shine Restorer',
    description: 'High quality multipurpose cleaning liquid that keeps shine in the fabric for a long-lasting period and removes deep-seated dirt.',
    category: 'Multi-Purpose',
    image: nirolF,
    specs: {
      pH: '8.5 - 9.5 (Mildly Alkaline)',
      dilution: '10ml to 15ml per kg of dry laundry weight',
      appearance: 'Deep Pink Viscous Emulsion',
      fragrance: 'Classic Clean Floral',
      packaging: '5L, 25L, 200L High-Purity Containers'
    },
    safetySheetUrl: '#'
  },
  {
    id: 'nirol-le',
    name: 'Nirol L.E',
    tagline: 'Spa Oil Odour Remover & Threading Revitalizer',
    description: 'Specialized formulation used to remove spa oil odour from towels and also makes its threading alive, maintaining fabric fluffiness.',
    category: 'Fabric Care',
    image: nirolLeImg,
    specs: {
      pH: '7.0 - 8.0 (Neutral)',
      dilution: '1:20 for pre-soak, or 5-8ml per kg wash load',
      appearance: 'Amber Clear Fluid',
      fragrance: 'Eucalyptus & Pine',
      packaging: '5L, 20L Carboys'
    },
    safetySheetUrl: '#'
  },
  {
    id: 'nirol-n',
    name: 'Nirol N',
    tagline: 'Chef Coat Stain Remover & Oil Degreaser',
    description: 'High-potency formulation specifically engineered for all white fabrics (chef coats) to remove stubborn oil stains and organic soils.',
    category: 'White Fabrics',
    image: nirolNImg,
    specs: {
      pH: '11.5 - 12.5 (Strong Alkaline)',
      dilution: '1:15 to 1:30 based on soil density',
      appearance: 'Clear Blue Liquid',
      fragrance: 'Mild Citric Freshness',
      packaging: '5L, 25L, 200L High-Density Drums'
    },
    safetySheetUrl: '#'
  },
  {
    id: 'nirol-o',
    name: 'Nirol O',
    tagline: 'Active-Oxygen Color-Safe Bleach & Sanitizer',
    description: 'Stabilized oxygen-based color-safe whitening agent and sanitizer for white clothes, protecting fabric fibers from tensile degradation.',
    category: 'Specialty',
    image: nirolO,
    specs: {
      pH: '4.0 - 5.5 (Acidic Stabilizer)',
      dilution: '5ml to 8ml per kg of wash load at 60°C - 80°C',
      appearance: 'Precipitation-Free Milky Off-white',
      fragrance: 'Odourless Bio-Base',
      packaging: '5L, 25L, 50L Safety Carboys'
    },
    safetySheetUrl: '#'
  },
  {
    id: 'nirol-r',
    name: 'Nirol R',
    tagline: 'Industrial Rust & Iron Stain Remover',
    description: 'Acidic rust remover designed to extract iron oxide stains and rust marks from white linens and industrial garments.',
    category: 'Stain Removal',
    image: nirolR,
    specs: {
      pH: '1.5 - 2.5 (Strongly Acidic)',
      dilution: 'Apply directly on rust spot and rinse immediately',
      appearance: 'Clear Liquid',
      fragrance: 'Acidic',
      packaging: '1L, 5L Bottles'
    },
    safetySheetUrl: '#'
  },
  {
    id: 'nirol-sp',
    name: 'Nirol SP',
    tagline: 'Machine Oil, Grease & Tar Spotting Agent',
    description: 'High-performance spotting agent designed to target and dissolve machine oil, grease, tar, and petroleum-based stains on garments.',
    category: 'Stain Removal',
    image: nirolSP,
    specs: {
      pH: '7.5 - 8.5 (Neutral)',
      dilution: 'Use neat directly as a spotting agent',
      appearance: 'Clear Colorless Solvent-Base',
      fragrance: 'Mild Hydrocarbon',
      packaging: '1L, 5L Bottles'
    },
    safetySheetUrl: '#'
  },
  {
    id: 'niralin-sh',
    name: 'Niralin SH',
    tagline: 'Concentrated Detergent Liquid Soap',
    description: 'High-active concentrated detergent liquid soap that penetrates deep into fabric fibers to suspend grease and dirt in suspension.',
    category: 'Multi-Purpose',
    image: niralinShImg,
    specs: {
      pH: '9.5 - 10.5 (Alkaline)',
      dilution: '1:50 to 1:100 based on washing machine capacity',
      appearance: 'Thick Golden Liquid',
      fragrance: 'Standard Floral',
      packaging: '5L, 25L, 200L High-Density Drums'
    },
    safetySheetUrl: '#'
  },
  {
    id: 'neera-soft-tex',
    name: 'Neera Soft Tex',
    tagline: 'Premium Fabric Softener & Anti-Static Agent',
    description: 'Cationic fabric softener that restores loft, eliminates static electricity, and makes towels feel extremely soft and comfortable.',
    category: 'Fabric Care',
    image: neeraSoftTexImg,
    specs: {
      pH: '5.5 - 6.5 (Neutral-Mild Acid)',
      dilution: '5ml to 10ml per kg of dry laundry weight',
      appearance: 'Milky Blue Emulsion',
      fragrance: 'Fresh Floral Breeze',
      packaging: '5L, 25L Carboys'
    },
    safetySheetUrl: '#'
  },
  {
    id: 'germicide',
    name: 'Germicide',
    tagline: 'Antibacterial Floor Cleaner Solution',
    description: 'Antibacterial floor cleaner solution that kills up to 99% of bacteria and pathogens, reducing bacterial activity for 4-6 hours post-application.',
    category: 'Specialty',
    image: germicide,
    specs: {
      pH: '7.5 - 8.5 (Neutral)',
      dilution: '1:50 for mopping / 1:100 for light cleaning',
      appearance: 'Milky White Disinfectant Emulsion',
      fragrance: 'Pine Fresh / Phenolic',
      packaging: '5L, 25L Carboys'
    },
    safetySheetUrl: '#'
  },
  {
    id: 'fresh-scent',
    name: 'Fresh Scent',
    tagline: 'Last-Rinse Perfuming Fluid',
    description: 'Concentrated aroma formulation used in the last rinse cycle to give a long-lasting, premium pleasant smell to fabrics.',
    category: 'Fabric Care',
    image: freshScent,
    specs: {
      pH: '6.0 - 7.0 (Neutral)',
      dilution: '2ml to 4ml per kg of dry laundry load',
      appearance: 'Milky White Emulsion',
      fragrance: 'Classic Linen & Lavender',
      packaging: '5L, 25L'
    },
    safetySheetUrl: '#'
  },
  {
    id: 'sodium-hypochlorite',
    name: 'Sodium Hypochlorite',
    tagline: 'Industrial Grade Bleaching & Sanitizing Agent',
    description: 'High-concentration sodium hypochlorite formulation designed specifically for professional bleaching, sanitizing, and stain removal on white fabrics.',
    category: 'White Fabrics',
    image: sodiumHypochloriteImg,
    specs: {
      pH: '12.0 - 13.0 (Strongly Alkaline)',
      dilution: '5ml to 10ml per kg of dry wash load',
      appearance: 'Pale Greenish-Yellow Liquid',
      fragrance: 'Characteristic Chlorine Odour',
      packaging: '5L, 20L Carboys, 50L Drums'
    },
    safetySheetUrl: '#'
  },
  {
    id: 'op-pest',
    name: 'O.P.Pest',
    tagline: 'Enzyme Wash Auxiliary for Garments',
    description: 'Specialty auxiliary chemical used for ready-made garments during enzyme wash cycles to enhance stone-wash effects and surface cleaning.',
    category: 'Specialty',
    image: opPestImg,
    specs: {
      pH: '6.5 - 7.5 (Neutral)',
      dilution: '1:50 to 1:100 in wash bath',
      appearance: 'Light Brownish Liquid',
      fragrance: 'Slightly Sweet',
      packaging: '25L, 50L Drums'
    },
    safetySheetUrl: '#'
  }
];

export const RAW_CHEMICALS = [
  'A.A.G',
  'Acid Slurry (A.Sullery)',
  'Bleaching Powder',
  'Caustic Flakes',
  'E.D.T.A',
  'Liquid Starch',
  'Maize Starch Powder',
  'Milky Starch',
  'Non-Ionic [Ethylene Oxide Conducted]',
  'Oxalic Acid',
  'Silicone Softener',
  'Soda Ash',
  'Sodium Hydrosulphide',
  'Sodium Hypochlorite',
  'Sodium Meta Silicate',
  'Super Powder 1 [Detergent for White Cloth]',
  'Super Powder 3 [All Type of Cloth]',
  'Super Powder 5 [All Type of Cloth]'
];

export const INDUSTRIES: IndustrySegment[] = [
  {
    id: 'laundries-textiles',
    title: 'Laundries & Textile Factories',
    description: 'High-performance washing auxiliaries, optical brighteners, and finishing softeners engineered for commercial laundry facilities and textile mills.',
    imageUrl: laundriesTextiles,
    details: [
      'Optimized for large-scale tunnel washers and high-throughput fabric finishing lines',
      'Ensures vibrant whites and prevents dye bleeding in high-volume mixed loads',
      'Provides premium silicone and amino-based softeners for superior garment hand-feel'
    ]
  },
  {
    id: 'hotels',
    title: 'Hotels & Hospitality',
    description: 'Premium fiber care and high-end room hygiene formulations designed to deliver five-star guest comfort.',
    imageUrl: 'https://lh3.googleusercontent.com/aida-public/AB6AXuCcviX2gpZnta73lW_5SUqv9LyBIhrbn2tJpHWpKMnuIyPUHJOxUyjsBPCyUgorzuFng9OllukGjqcf2aY7jXv2PfcreiWjSAA2cLxMwlziJ50Ff6vVzrawT8CiT4xbW6F2F43C8mMIk4oWbtaRXrEXtTluSaYw356RazzNxJXE_AQT6fgh3UxkKRodWgct96ciC4PYtRr05RFxnt9pQeb_tKgxTwFoRSfCYaOOdHrDFm42coMkcqXJeKYwxVmAPMBqu2MjAZksuB4G',
    details: [
      'Preserves crisp whiteness and thread density of high-luxury sheets',
      'Neutralizes static cling and optimizes towel absorbency',
      'Eco-certified formulations compliant with modern hospitality regulations'
    ]
  },
  {
    id: 'hospitals',
    title: 'Hospitals & Medical Centers',
    description: 'Antibacterial solutions designed for the highest level of sanitization and clinical safety constraints.',
    imageUrl: 'https://lh3.googleusercontent.com/aida-public/AB6AXuD5YlKZtkvKiy2N9Y1z-c5nUicG97n0EWriccMqvoSRkTugk_P96Js352rFuodUdujTI2AAdhLJYsFiaA2lESGmQGLij2kENN3PLGrWbkjn7k9qx3_iy1rVrU0GtCqffskzTNQ_e7jMi4BkzAD7GgVM6uWBLpimgE4a_sXbbDxcDQC7psIaS8U6EhW-lf6uuhUMzM0NTQZ74hJG6nWkWmvAN3avk6BCxQ_7hkqbcOJBHYIxnSWZcjYWdSVp1R7isYFbKfcdNyHbJk2r',
    details: [
      'Broad-spectrum pathogen and biofilm disinfection action',
      'Effective at low and high water temperature sanitizing protocols',
      'Hypoallergenic residues tested on professional patient garments'
    ]
  }
];

export const CAPABILITIES_MARQUEE = [
  'STAIN REMOVAL SOLUTIONS',
  'PREMIUM FABRIC CARE',
  'INDUSTRIAL DEGREASERS',
  'TEXTILE SOFTENERS',
  'OPTICAL BRIGHTENERS',
  'RAW CHEMICAL TRADING',
  'CUSTOM CHEMICAL R&D',
  'RELIABLE FREIGHT LOGISTICS'
];
