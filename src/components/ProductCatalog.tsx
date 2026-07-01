import React, { useState } from 'react';
import { PRODUCTS, RAW_CHEMICALS } from '../data';
import { Product } from '../types';
import { ArrowUpRight, X, FlaskConical, Settings, Edit, Copy, RefreshCw } from 'lucide-react';
import { motion, AnimatePresence } from 'motion/react';

export default function ProductCatalog() {
  const [activeCategory, setActiveCategory] = useState<'All' | 'Fabric Care' | 'Industrial'>('All');
  const [selectedProduct, setSelectedProduct] = useState<Product | null>(null);

  // Stateful list of products with local storage overrides
  const [productsList, setProductsList] = useState<Product[]>(() => {
    try {
      const saved = localStorage.getItem('neera_products_overrides');
      if (saved) {
        return JSON.parse(saved);
      }
    } catch (e) {
      console.error('Failed to load product overrides:', e);
    }
    return PRODUCTS;
  });

  // Admin and Visual Editor states
  const [isEditMode, setIsEditMode] = useState(false);
  const [isAdminPanelOpen, setIsAdminPanelOpen] = useState(false);
  const [editingProduct, setEditingProduct] = useState<Product | null>(null);
  const [editFields, setEditFields] = useState<Product | null>(null);

  // Filter products by UI tabs
  const filteredProducts = productsList.filter((p) => {
    if (activeCategory === 'All') return true;
    if (activeCategory === 'Fabric Care') {
      return p.category === 'Fabric Care' || p.category === 'Multi-Purpose' || p.category === 'Specialty' || p.category === 'White Fabrics';
    }
    if (activeCategory === 'Industrial') {
      return p.category === 'Stain Removal' || p.category === 'Specialty' || p.category === 'White Fabrics';
    }
    return true;
  });

  // Save changes to state & local storage
  const handleSaveProductEdit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!editFields) return;
    const updated = productsList.map((p) => (p.id === editFields.id ? editFields : p));
    setProductsList(updated);
    localStorage.setItem('neera_products_overrides', JSON.stringify(updated));
    setEditingProduct(null);
    setEditFields(null);
  };

  // Reset all overrides
  const handleResetDefaults = () => {
    if (confirm('Are you sure you want to discard all browser-based product edits and reset to defaults?')) {
      localStorage.removeItem('neera_products_overrides');
      setProductsList(PRODUCTS);
      setIsEditMode(false);
      setIsAdminPanelOpen(false);
    }
  };

  // Copy code config to clipboard
  const handleExportConfig = () => {
    // Generate clean typescript format (removing dev paths or exporting clean JSON)
    const rawJson = JSON.stringify(productsList, null, 2);
    navigator.clipboard.writeText(rawJson)
      .then(() => alert('Code config copied to clipboard! You can paste this JSON directly to replace the PRODUCTS array in src/data.ts to make your changes permanent.'))
      .catch((err) => alert('Failed to copy config: ' + err));
  };

  return (
    <section className="py-24 bg-brand-light-bg overflow-hidden relative" id="products">
      <div className="max-w-7xl mx-auto px-6 md:px-12">
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 gap-8">
          <div className="space-y-3">
            <span className="text-brand-primary uppercase tracking-[0.2em] font-display font-bold text-xs">
              Product Catalogue
            </span>
            <h2 className="text-3xl md:text-4xl font-display font-extrabold text-brand-primary tracking-tight">
              Elegant Product Showcase
            </h2>
            <div className="w-16 h-1 bg-brand-primary rounded" />
          </div>

          {/* Filtering Tabs */}
          <div className="flex items-center gap-1.5 sm:gap-3 bg-white p-1.5 rounded-full border border-brand-border/30 shadow-sm w-full sm:w-auto justify-between sm:justify-start">
            {(['All', 'Fabric Care', 'Industrial'] as const).map((cat) => (
              <button
                key={cat}
                onClick={() => setActiveCategory(cat)}
                className={`py-2 px-3 sm:px-6 rounded-full font-display font-semibold text-[10px] sm:text-xs tracking-wider transition-all cursor-pointer whitespace-nowrap ${
                  activeCategory === cat
                    ? 'bg-brand-primary text-white shadow-md'
                    : 'text-brand-md-grey hover:text-brand-primary hover:bg-brand-light-bg'
                }`}
              >
                {cat === 'All' ? 'All' : cat}
              </button>
            ))}
          </div>
        </div>

        {/* Product Cards Grid / Swipeable Carousel on Mobile */}
        <div className="flex sm:grid sm:grid-cols-2 lg:grid-cols-4 gap-6 sm:gap-8 overflow-x-auto sm:overflow-visible pb-8 sm:pb-0 snap-x snap-mandatory [-ms-overflow-style:none] [scrollbar-width:none] [&::-webkit-scrollbar]:hidden">
          <AnimatePresence mode="popLayout">
            {filteredProducts.map((product) => (
              <motion.div
                layout
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, scale: 0.9 }}
                transition={{ duration: 0.4 }}
                key={product.id}
                className="bg-white border border-brand-border/20 rounded-2xl p-6 shadow-sm hover:shadow-xl sm:hover:-translate-y-1.5 transition-all duration-300 group flex flex-col h-full relative w-[80vw] sm:w-auto shrink-0 snap-start"
              >
                {/* Quick Edit Overlay Button */}
                {isEditMode && (
                  <button
                    onClick={(e) => {
                      e.stopPropagation();
                      setEditingProduct(product);
                      setEditFields(JSON.parse(JSON.stringify(product))); // Deep copy
                    }}
                    className="absolute top-3 right-3 bg-brand-primary text-white border border-white/20 p-2 rounded-xl hover:bg-brand-accent-teal hover:text-brand-primary transition-all duration-200 shadow-lg cursor-pointer z-20 flex items-center gap-1.5 text-[10px] font-display font-bold uppercase tracking-wider"
                  >
                    <Edit className="w-3.5 h-3.5 animate-pulse" />
                    Edit Specs
                  </button>
                )}

                {/* Visual Glassmorphic Container for the chemical items */}
                <div className="relative bg-brand-light-bg rounded-xl mb-6 overflow-hidden aspect-[3/4] flex items-center justify-center p-4 border border-brand-border/10">
                  {/* Category Pill Tag */}
                  <span className="absolute top-3 left-3 bg-white text-[9px] font-display uppercase tracking-widest text-brand-primary font-bold px-2 py-1 rounded shadow-sm border border-brand-border/10 z-10">
                    {product.category}
                  </span>

                  <img
                    src={product.image}
                    alt={product.name}
                    className="h-full max-h-[200px] object-contain group-hover:scale-105 transition-transform duration-500 rounded-lg drop-shadow-[0_10px_20px_rgba(0,30,64,0.12)]"
                  />
                </div>

                {/* Information Content */}
                <div className="flex-1 flex flex-col">
                  <h4 className="text-xl font-display font-bold text-brand-primary group-hover:text-brand-accent-teal transition-colors">
                    {product.name}
                  </h4>
                  <p className="mt-3 text-xs text-brand-md-grey line-clamp-3 font-sans leading-relaxed flex-grow">
                    {product.description}
                  </p>

                  <button
                    onClick={() => setSelectedProduct(product)}
                    className="w-full mt-6 pt-4 text-xs font-display font-bold text-brand-primary hover:text-brand-accent-teal border-t border-brand-border/10 flex items-center justify-between group-hover:translate-x-0.5 transition-all text-left cursor-pointer"
                  >
                    View Details
                    <ArrowUpRight className="w-4 h-4 text-brand-primary group-hover:text-brand-accent-teal" />
                  </button>
                </div>
              </motion.div>
            ))}
          </AnimatePresence>
        </div>

        {/* Mobile Swipe Indicator */}
        <div className="flex sm:hidden items-center justify-center gap-1.5 mt-4 text-brand-md-grey text-[10px] font-display uppercase tracking-widest animate-pulse">
          <span>Swipe left to view all</span>
          <svg className="w-3.5 h-3.5 animate-bounce-horizontal" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
            <path d="M5 12h14M12 5l7 7-7 7" />
          </svg>
        </div>

        {/* Industrial Raw Materials Grid Section */}
        <div className="mt-20 pt-16 border-t border-brand-border/10">
          <div className="text-center max-w-2xl mx-auto mb-12 space-y-3">
            <span className="text-brand-accent-teal uppercase tracking-[0.2em] font-display font-bold text-xs">
              Raw Materials & Commodities
            </span>
            <h3 className="text-2xl md:text-3xl font-display font-extrabold text-brand-primary tracking-tight">
              Extensively Marketed Industrial Chemicals
            </h3>
            <p className="text-xs text-brand-md-grey font-sans leading-relaxed">
              We manufacture, source, and distribute high-purity chemical raw materials for industrial synthesis, garment wash processing, and textile manufacturing.
            </p>
          </div>
          
          <div className="grid grid-rows-2 grid-flow-col sm:grid-flow-row sm:grid-rows-none gap-4 overflow-x-auto sm:overflow-visible pb-6 sm:pb-0 snap-x snap-mandatory [-ms-overflow-style:none] [scrollbar-width:none] [&::-webkit-scrollbar]:hidden sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
            {RAW_CHEMICALS.map((chem, idx) => (
              <div key={idx} className="bg-white border border-brand-border/10 rounded-2xl p-4 flex items-center gap-3 shadow-[0_2px_8px_rgba(0,0,0,0.02)] hover:shadow-md hover:border-brand-accent-teal/30 transition-all duration-200 snap-start w-[42vw] sm:w-auto shrink-0">
                <div className="w-8 h-8 rounded-lg bg-brand-accent-teal/10 flex items-center justify-center text-brand-accent-teal font-display font-bold text-xs shrink-0">
                  {idx + 1}
                </div>
                <span className="text-xs md:text-sm font-sans font-semibold text-brand-primary truncate">
                  {chem}
                </span>
              </div>
            ))}
          </div>

          {/* Mobile Swipe Indicator */}
          <div className="flex sm:hidden items-center justify-center gap-1.5 mt-4 text-brand-md-grey text-[10px] font-display uppercase tracking-widest animate-pulse">
            <span>Swipe left to view all</span>
            <svg className="w-3.5 h-3.5 animate-bounce-horizontal" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
              <path d="M5 12h14M12 5l7 7-7 7" />
            </svg>
          </div>

          <p className="text-center text-[10px] text-brand-md-grey/80 italic mt-8">
            * Note: We also custom-manufacture and market products for other specific industry requirements upon request.
          </p>
        </div>
      </div>

      {/* Lab Chemical Specification Modal (Overlay Modal) */}
      <AnimatePresence>
        {selectedProduct && (
          <div className="fixed inset-0 z-50 flex items-start sm:items-center justify-center p-4 sm:p-6 overflow-y-auto">
            {/* Backdrop Blur overlay */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setSelectedProduct(null)}
              className="fixed inset-0 bg-brand-primary/80 backdrop-blur-md"
            />

            {/* Modal Card Content */}
            <motion.div
              initial={{ opacity: 0, scale: 0.95, y: 20 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.95, y: 20 }}
              className="relative w-full max-w-2xl bg-white rounded-3xl border border-brand-border/10 p-6 md:p-8 shadow-[0_30px_70px_rgba(0,0,0,0.5)] z-10 my-8 sm:my-0"
              id="product-detail-modal"
            >
              {/* Close button */}
              <button
                onClick={() => setSelectedProduct(null)}
                className="absolute top-4 right-4 p-2.5 rounded-full bg-brand-light-bg hover:bg-brand-primary hover:text-white transition-all text-brand-primary cursor-pointer z-30 shadow-md"
                aria-label="Close details"
              >
                <X className="w-5 h-5" />
              </button>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-start mt-4">
                {/* Left image column */}
                <div className="bg-brand-light-bg rounded-2xl p-6 border border-brand-border/10 flex items-center justify-center">
                  <img
                    src={selectedProduct.image}
                    alt={selectedProduct.name}
                    className="max-h-[240px] md:max-h-[300px] object-contain drop-shadow-[0_15px_30px_rgba(0,30,64,0.15)]"
                  />
                </div>

                {/* Right specs column */}
                <div className="space-y-6">
                  <div>
                    <span className="bg-brand-border/20 text-brand-primary font-display font-semibold text-[10px] tracking-widest uppercase py-1 px-3.5 rounded-full">
                      {selectedProduct.category}
                    </span>
                    <h3 className="text-2xl font-display font-bold text-brand-primary mt-3">
                      {selectedProduct.name}
                    </h3>
                    <p className="text-xs text-brand-md-grey font-sans font-medium italic mt-1 bg-brand-light-bg/80 py-1.5 px-3 rounded border-l-2 border-brand-accent-teal inline-block">
                      {selectedProduct.tagline}
                    </p>
                  </div>

                  <p className="text-xs md:text-sm text-brand-md-grey leading-relaxed font-sans">
                    {selectedProduct.description}
                  </p>

                  {/* Laboratory specifications block */}
                  <div className="bg-brand-primary/5 rounded-2xl p-4 border border-brand-primary/10 space-y-3.5">
                    <h5 className="text-xs uppercase font-display font-bold text-brand-primary tracking-wider flex items-center gap-2">
                      <FlaskConical className="w-4 h-4 text-brand-primary" />
                      Laboratory Specifications
                    </h5>

                    <div className="grid grid-cols-1 gap-2 text-xs font-sans">
                      <div className="flex justify-between py-1 border-b border-brand-primary/10">
                        <span className="text-brand-md-grey font-medium">Chemical pH Factor:</span>
                        <span className="font-semibold text-brand-primary">{selectedProduct.specs.pH}</span>
                      </div>
                      <div className="flex justify-between py-1 border-b border-brand-primary/10">
                        <span className="text-brand-md-grey font-medium">Recommended Dilution:</span>
                        <span className="font-semibold text-brand-primary">{selectedProduct.specs.dilution}</span>
                      </div>
                      <div className="flex justify-between py-1 border-b border-brand-primary/10">
                        <span className="text-brand-md-grey font-medium">Visual Appearance:</span>
                        <span className="font-semibold text-brand-primary">{selectedProduct.specs.appearance}</span>
                      </div>
                      <div className="flex justify-between py-1 border-b border-brand-primary/10">
                        <span className="text-brand-md-grey font-medium">Fragrance Composition:</span>
                        <span className="font-semibold text-brand-primary">{selectedProduct.specs.fragrance}</span>
                      </div>
                      <div className="flex justify-between py-1">
                        <span className="text-brand-md-grey font-medium">Standard Packaging:</span>
                        <span className="font-semibold text-brand-primary">{selectedProduct.specs.packaging}</span>
                      </div>
                    </div>
                  </div>

                  {/* Request Sample CTA link */}
                  <div className="pt-2">
                    <a
                      href="#contact"
                      onClick={() => setSelectedProduct(null)}
                      className="w-full text-center bg-brand-primary hover:bg-brand-blue-container text-white py-3 px-5 rounded-xl font-display font-semibold text-xs transition-all flex items-center justify-center gap-2 cursor-pointer shadow-sm"
                    >
                      Request Sample
                    </a>
                  </div>
                </div>
              </div>
            </motion.div>
          </div>
        )}
      </AnimatePresence>

      {/* Visual Product Editor Modal Overlay */}
      <AnimatePresence>
        {editingProduct && editFields && (
          <div className="fixed inset-0 z-50 flex items-center justify-center p-4 overflow-y-auto">
            {/* Backdrop Blur overlay */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => {
                setEditingProduct(null);
                setEditFields(null);
              }}
              className="fixed inset-0 bg-brand-primary/80 backdrop-blur-md"
            />

            {/* Modal Card Content */}
            <motion.div
              initial={{ opacity: 0, scale: 0.95, y: 20 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.95, y: 20 }}
              className="relative w-full max-w-xl bg-white rounded-3xl border border-brand-border/10 p-6 md:p-8 shadow-[0_30px_70px_rgba(0,0,0,0.5)] z-10 max-h-[90vh] overflow-y-auto"
            >
              {/* Close Button */}
              <button
                onClick={() => {
                  setEditingProduct(null);
                  setEditFields(null);
                }}
                className="absolute top-4 right-4 p-2.5 rounded-full bg-brand-light-bg hover:bg-brand-primary hover:text-white transition-all text-brand-primary cursor-pointer"
              >
                <X className="w-5 h-5" />
              </button>

              <form onSubmit={handleSaveProductEdit} className="space-y-5 font-sans mt-4">
                <div>
                  <h3 className="text-xl font-display font-extrabold text-brand-primary">
                    Edit Specs: {editingProduct.name}
                  </h3>
                  <p className="text-xs text-brand-md-grey mt-0.5">
                    Modify product details. All changes save to your local browser storage.
                  </p>
                </div>

                <div className="space-y-4">
                  {/* Tagline input */}
                  <div className="space-y-1.5">
                    <label className="text-[11px] font-bold text-brand-md-grey uppercase tracking-wider block">Tagline</label>
                    <input
                      type="text"
                      required
                      value={editFields.tagline}
                      onChange={(e) => setEditFields({ ...editFields, tagline: e.target.value })}
                      className="w-full bg-brand-light-bg border border-brand-border/30 rounded-xl px-4 py-2.5 text-xs text-brand-primary font-semibold focus:ring-1 focus:ring-brand-primary outline-none"
                    />
                  </div>

                  {/* Description input */}
                  <div className="space-y-1.5">
                    <label className="text-[11px] font-bold text-brand-md-grey uppercase tracking-wider block">Description</label>
                    <textarea
                      rows={3}
                      required
                      value={editFields.description}
                      onChange={(e) => setEditFields({ ...editFields, description: e.target.value })}
                      className="w-full bg-brand-light-bg border border-brand-border/30 rounded-xl px-4 py-2.5 text-xs text-brand-primary font-medium focus:ring-1 focus:ring-brand-primary outline-none"
                    />
                  </div>

                  <div className="border-t border-brand-border/10 pt-4">
                    <h5 className="text-[11px] font-bold text-brand-primary uppercase tracking-wider mb-3">
                      Laboratory Specifications
                    </h5>

                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                      {/* pH Factor input */}
                      <div className="space-y-1.5">
                        <label className="text-[10px] font-bold text-brand-md-grey uppercase tracking-wider">pH Factor</label>
                        <input
                          type="text"
                          required
                          value={editFields.specs.pH}
                          onChange={(e) => setEditFields({
                            ...editFields,
                            specs: { ...editFields.specs, pH: e.target.value }
                          })}
                          className="w-full bg-brand-light-bg border border-brand-border/30 rounded-xl px-4 py-2 text-xs text-brand-primary font-medium focus:ring-1 focus:ring-brand-primary outline-none"
                        />
                      </div>

                      {/* Recommended Dilution input */}
                      <div className="space-y-1.5">
                        <label className="text-[10px] font-bold text-brand-md-grey uppercase tracking-wider">Recommended Dilution</label>
                        <input
                          type="text"
                          required
                          value={editFields.specs.dilution}
                          onChange={(e) => setEditFields({
                            ...editFields,
                            specs: { ...editFields.specs, dilution: e.target.value }
                          })}
                          className="w-full bg-brand-light-bg border border-brand-border/30 rounded-xl px-4 py-2 text-xs text-brand-primary font-medium focus:ring-1 focus:ring-brand-primary outline-none"
                        />
                      </div>

                      {/* Visual Appearance input */}
                      <div className="space-y-1.5">
                        <label className="text-[10px] font-bold text-brand-md-grey uppercase tracking-wider">Visual Appearance</label>
                        <input
                          type="text"
                          required
                          value={editFields.specs.appearance}
                          onChange={(e) => setEditFields({
                            ...editFields,
                            specs: { ...editFields.specs, appearance: e.target.value }
                          })}
                          className="w-full bg-brand-light-bg border border-brand-border/30 rounded-xl px-4 py-2 text-xs text-brand-primary font-medium focus:ring-1 focus:ring-brand-primary outline-none"
                        />
                      </div>

                      {/* Fragrance Composition input */}
                      <div className="space-y-1.5">
                        <label className="text-[10px] font-bold text-brand-md-grey uppercase tracking-wider">Fragrance Composition</label>
                        <input
                          type="text"
                          required
                          value={editFields.specs.fragrance}
                          onChange={(e) => setEditFields({
                            ...editFields,
                            specs: { ...editFields.specs, fragrance: e.target.value }
                          })}
                          className="w-full bg-brand-light-bg border border-brand-border/30 rounded-xl px-4 py-2 text-xs text-brand-primary font-medium focus:ring-1 focus:ring-brand-primary outline-none"
                        />
                      </div>
                    </div>

                    {/* Standard Packaging input */}
                    <div className="space-y-1.5 mt-4">
                      <label className="text-[10px] font-bold text-brand-md-grey uppercase tracking-wider block">Standard Packaging</label>
                      <input
                        type="text"
                        required
                        value={editFields.specs.packaging}
                        onChange={(e) => setEditFields({
                          ...editFields,
                          specs: { ...editFields.specs, packaging: e.target.value }
                        })}
                        className="w-full bg-brand-light-bg border border-brand-border/30 rounded-xl px-4 py-2 text-xs text-brand-primary font-medium focus:ring-1 focus:ring-brand-primary outline-none"
                      />
                    </div>
                  </div>
                </div>

                <div className="flex gap-3 pt-3 border-t border-brand-border/10">
                  <button
                    type="button"
                    onClick={() => {
                      setEditingProduct(null);
                      setEditFields(null);
                    }}
                    className="w-1/2 bg-brand-light-bg hover:bg-brand-border/20 text-brand-primary py-3 rounded-xl font-display font-bold text-xs transition-all cursor-pointer text-center"
                  >
                    Cancel
                  </button>
                  <button
                    type="submit"
                    className="w-1/2 bg-brand-primary hover:bg-brand-blue-container text-white py-3 rounded-xl font-display font-bold text-xs transition-all cursor-pointer text-center"
                  >
                    Save Changes
                  </button>
                </div>
              </form>
            </motion.div>
          </div>
        )}
      </AnimatePresence>

      {/* Floating Admin Settings Toggle Button & Panel Console */}
      <div className="fixed bottom-6 right-6 z-50 flex flex-col items-end gap-3 font-sans">
        <AnimatePresence>
          {isAdminPanelOpen && (
            <motion.div
              initial={{ opacity: 0, scale: 0.9, y: 15 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.9, y: 15 }}
              className="bg-brand-primary/95 backdrop-blur-xl border border-white/10 p-6 rounded-[2rem] shadow-2xl w-72 text-white space-y-4"
            >
              <div>
                <h4 className="font-display font-bold text-sm tracking-wide text-white">
                  Neera Console
                </h4>
                <p className="text-[10px] text-brand-border/60 mt-0.5">
                  Visual client-side content editor
                </p>
              </div>

              <div className="border-t border-white/10 pt-3.5 space-y-3">
                <div className="flex items-center justify-between">
                  <span className="text-xs font-semibold text-white/90">Visual Edit Mode</span>
                  <button
                    onClick={() => setIsEditMode(!isEditMode)}
                    className={`w-10 h-5.5 rounded-full p-0.5 transition-colors duration-200 focus:outline-none ${
                      isEditMode ? 'bg-brand-accent-teal' : 'bg-white/20'
                    }`}
                  >
                    <div
                      className={`bg-white w-4.5 h-4.5 rounded-full shadow-md transform transition-transform duration-200 ${
                        isEditMode ? 'translate-x-4.5' : 'translate-x-0'
                      }`}
                    />
                  </button>
                </div>

                <button
                  onClick={handleExportConfig}
                  className="w-full bg-white/10 hover:bg-white/15 border border-white/15 text-white py-2 px-4 rounded-xl text-xs font-semibold transition-all flex items-center justify-center gap-2 cursor-pointer"
                >
                  <Copy className="w-3.5 h-3.5 text-brand-accent-teal" />
                  Copy Code Config
                </button>

                <button
                  onClick={handleResetDefaults}
                  className="w-full bg-rose-600/20 hover:bg-rose-600/35 border border-rose-500/30 text-rose-300 py-2 px-4 rounded-xl text-xs font-semibold transition-all flex items-center justify-center gap-2 cursor-pointer"
                >
                  <RefreshCw className="w-3.5 h-3.5" />
                  Reset Defaults
                </button>
              </div>
            </motion.div>
          )}
        </AnimatePresence>

        <button
          onClick={() => setIsAdminPanelOpen(!isAdminPanelOpen)}
          className={`h-14 w-14 rounded-full flex items-center justify-center shadow-[0_10px_25px_rgba(0,0,0,0.3)] border transition-all duration-300 transform active:scale-95 cursor-pointer ${
            isAdminPanelOpen
              ? 'bg-brand-primary text-white border-white/10 rotate-90'
              : 'bg-brand-accent-teal text-brand-primary border-brand-accent-teal/30 hover:scale-105 shadow-[0_0_20px_rgba(0,155,158,0.3)]'
          }`}
          aria-label="Toggle developer console"
        >
          <Settings className="w-6 h-6 animate-spin" style={{ animationDuration: isAdminPanelOpen ? '0s' : '8s' }} />
        </button>
      </div>
    </section>
  );
}
