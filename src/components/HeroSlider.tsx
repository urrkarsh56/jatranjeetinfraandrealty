import React, { useState, useEffect, useCallback } from 'react';
import { ChevronLeft, ChevronRight, Shield, MapPin } from 'lucide-react';
import { HERO_PROPERTIES, COMPANY_DETAILS, TAKSHIT_OMKARLOK_GATE_ALT } from '../data/properties';
import { RealEstateIcons } from './RealEstateIcons';

interface HeroSliderProps {
  onOpenSiteVisit: (propertyTitle?: string) => void;
}

export const HeroSlider: React.FC<HeroSliderProps> = ({ onOpenSiteVisit }) => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isPaused, setIsPaused] = useState(false);
  const [progress, setProgress] = useState(0);

  const SLIDE_DURATION = 7000;

  const handleNext = useCallback(() => {
    setCurrentIndex((prev) => (prev + 1) % HERO_PROPERTIES.length);
    setProgress(0);
  }, []);

  const handlePrev = useCallback(() => {
    setCurrentIndex((prev) => (prev - 1 + HERO_PROPERTIES.length) % HERO_PROPERTIES.length);
    setProgress(0);
  }, []);

  // Keyboard navigation
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'ArrowRight') handleNext();
      if (e.key === 'ArrowLeft') handlePrev();
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [handleNext, handlePrev]);

  // Timer & progress bar loop
  useEffect(() => {
    if (isPaused) return;

    const intervalTime = 50;
    const step = (intervalTime / SLIDE_DURATION) * 100;

    const timer = setInterval(() => {
      setProgress((prev) => {
        if (prev >= 100) {
          handleNext();
          return 0;
        }
        return prev + step;
      });
    }, intervalTime);

    return () => clearInterval(timer);
  }, [isPaused, handleNext]);

  const currentProperty = HERO_PROPERTIES[currentIndex];

  return (
    <section
      id="hero"
      aria-label="Hero Property Showcase"
      className="relative min-h-[92vh] lg:min-h-screen pt-28 pb-12 lg:pb-16 flex flex-col justify-between overflow-hidden transition-colors duration-300 section-dark"
      style={{
        backgroundColor: 'var(--color-midnight)',
      }}
      onMouseEnter={() => setIsPaused(true)}
      onMouseLeave={() => setIsPaused(false)}
    >
      {/* Background Cadastral Texture */}
      <div className="absolute inset-0 bg-grid-pattern opacity-40 pointer-events-none" />

      {/* Oversized Ghost-Text Watermark ("JAY RANJEET INFRA AND REALTY") */}
      <div
        aria-hidden="true"
        className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 select-none pointer-events-none text-[12vw] font-display font-black tracking-tighter opacity-[0.04] whitespace-nowrap"
        style={{ color: 'var(--color-sand)' }}
      >
        JAY RANJEET INFRA AND REALTY
      </div>

      {/* Main Container */}
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full flex-1 flex flex-col justify-between">
        
        {/* Top Operational Status Bar */}
        <div className="flex flex-wrap items-center justify-between gap-3 mb-6 lg:mb-8 pt-2">
          <div
            className="inline-flex items-center gap-3 px-4 py-2 rounded-full border text-xs font-medium shadow-theme-card backdrop-blur-md"
            style={{
              backgroundColor: 'var(--theme-bg-surface)',
              borderColor: 'var(--theme-border-subtle)',
              color: 'var(--theme-text-main)',
            }}
          >
            <div
              className="w-6 h-6 rounded-full overflow-hidden border shrink-0 shadow-theme-glow"
              style={{
                borderColor: 'var(--theme-accent-gold)',
                backgroundColor: 'var(--theme-bg-base)',
              }}
            >
              <img
                src="/src/assets/images/jay_ranjeet_logo_1791463807767.jpg"
                alt="Jay Ranjeet Infra and Realty Official Seal"
                className="w-full h-full object-cover"
                referrerPolicy="no-referrer"
              />
            </div>
            <span>{COMPANY_DETAILS.hindiTagline}</span>
          </div>

          <div
            className="hidden sm:flex items-center gap-2 text-xs font-mono"
            style={{ color: 'var(--theme-text-dim)' }}
          >
            <Shield className="w-3.5 h-3.5" style={{ color: 'var(--theme-accent-gold)' }} />
            <span>RERA Approved: {currentProperty.reraNo}</span>
            <span style={{ color: 'var(--theme-accent-border)' }}>/</span>
            <span>{currentProperty.khasraNo}</span>
          </div>
        </div>

        {/* Central Asymmetric Split Composition */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-8 items-center relative my-auto">
          
          {/* Left Column: Authentic Real Estate Copy & Purposeful Buttons */}
          <div className="lg:col-span-5 z-20 space-y-6 lg:pr-4 text-left">
            <div className="space-y-4">
              <div
                className="inline-flex items-center gap-2 text-xs font-mono"
                style={{ color: 'var(--theme-accent-gold)' }}
              >
                <span>Inventory {currentIndex + 1} of {HERO_PROPERTIES.length}</span>
                <span>—</span>
                <span className="font-semibold" style={{ color: 'var(--theme-text-muted)' }}>
                  {currentProperty.categoryLabel}
                </span>
              </div>

              <h1
                className="font-display text-4xl sm:text-5xl lg:text-6xl font-bold tracking-tight leading-[1.1] text-balance"
                style={{ color: 'var(--theme-text-headline)' }}
              >
                <span className="hero-headline-line-1">
                  Find verified land.
                </span>
                <br />
                <span className="hero-headline-line-2 font-light" style={{ color: 'var(--theme-text-main)' }}>
                  Build with permanent title clarity.
                </span>
              </h1>

              <p
                className="text-sm sm:text-base leading-relaxed max-w-prose reveal-item delay-100"
                style={{ color: 'var(--theme-text-muted)' }}
              >
                {currentProperty.tagline}
              </p>
            </div>

            {/* Action Buttons with Specific Verbs */}
            <div className="flex flex-wrap items-center gap-3 pt-2">
              <a
                href="#properties"
                className="btn-primary inline-flex items-center justify-center px-7 py-3.5 rounded-full font-bold text-sm sm:text-base focus:outline-none focus-visible:ring-2 active:scale-[0.98]"
              >
                See available plots
              </a>

              <button
                onClick={() => onOpenSiteVisit(currentProperty.title)}
                className="btn-secondary inline-flex items-center justify-center px-7 py-3.5 rounded-full border font-semibold text-sm sm:text-base focus:outline-none focus-visible:ring-2 active:scale-[0.98]"
              >
                Book a site visit
              </button>
            </div>

            {/* Factual Land Specifications Ledger */}
            <div
              className="pt-3 border-t grid grid-cols-2 gap-3 text-xs font-mono"
              style={{
                borderColor: 'var(--color-navy)',
                color: 'var(--color-cream)',
              }}
            >
              <div className="flex items-center gap-2">
                <RealEstateIcons.PlotBoundary className="w-4 h-4 shrink-0" style={{ color: 'var(--color-sand)' }} />
                <span>{currentProperty.dimensions}</span>
              </div>
              <div className="flex items-center gap-2">
                <RealEstateIcons.RoadCrossSection className="w-4 h-4 shrink-0" style={{ color: 'var(--color-sand)' }} />
                <span>{currentProperty.connectivity}</span>
              </div>
            </div>
          </div>

          {/* Right Column: Hero Property Showcase with Overlapping Accent Ring */}
          <div className="lg:col-span-7 relative z-10 flex items-center justify-center">
            
            {/* Signature Accent Ring behind main image */}
            <div
              aria-hidden="true"
              className="absolute w-[290px] h-[290px] sm:w-[380px] sm:h-[380px] md:w-[440px] md:h-[440px] lg:w-[480px] lg:h-[480px] rounded-full border-[6px] sm:border-[8px] -translate-y-2 pointer-events-none transition-all duration-700"
              style={{
                borderColor: 'var(--color-steel)',
                boxShadow: 'none',
              }}
            />

            {/* Main Featured Photo Frame */}
            <div className="relative w-full max-w-[540px] z-10 group">
              <div
                className="luxury-img-wrapper relative rounded-3xl border aspect-[16/11] sm:aspect-[16/10] transition-colors"
                style={{
                  backgroundColor: 'var(--color-navy)',
                  borderColor: 'var(--color-steel)',
                }}
              >
                <img
                  key={currentProperty.id}
                  src={currentProperty.image}
                  alt={TAKSHIT_OMKARLOK_GATE_ALT}
                  className="luxury-img is-revealed w-full h-full object-cover"
                  loading="eager"
                  fetchPriority="high"
                  width={1068}
                  height={723}
                  referrerPolicy="no-referrer"
                />
                
                {/* Legibility Gradient */}
                <div className="absolute inset-0 bg-gradient-to-t from-black/85 via-transparent to-black/30 pointer-events-none" />

                {/* Sub-Registrar Readiness Badge */}
                <div
                  className="absolute top-4 left-4 flex items-center gap-2 px-3.5 py-1.5 rounded-full backdrop-blur-md border text-xs font-semibold"
                  style={{
                    backgroundColor: 'rgba(0, 0, 0, 0.75)',
                    borderColor: 'var(--theme-accent-border)',
                    color: 'var(--theme-accent-gold)',
                  }}
                >
                  <RealEstateIcons.TitleDeed className="w-3.5 h-3.5" style={{ color: 'var(--theme-accent-gold)' }} />
                  <span>Immediate Sub-Registrar Execution</span>
                </div>

                {/* Bottom Overlay Card */}
                <div
                  className="absolute bottom-4 left-4 right-4 p-4 rounded-2xl backdrop-blur-md border flex items-center justify-between shadow-theme-card"
                  style={{
                    backgroundColor: 'rgba(0, 0, 0, 0.75)',
                    borderColor: 'var(--theme-border-subtle)',
                  }}
                >
                  <div className="text-left">
                    <h3
                      className="font-display text-base sm:text-lg font-bold truncate text-white"
                    >
                      {currentProperty.title}
                    </h3>
                    <p
                      className="text-xs flex items-center gap-1.5 mt-0.5 opacity-85"
                      style={{ color: 'var(--theme-text-muted)' }}
                    >
                      <MapPin className="w-3.5 h-3.5 shrink-0" style={{ color: 'var(--theme-accent-gold)' }} />
                      <span className="truncate">{currentProperty.location}</span>
                    </p>
                  </div>

                  <div className="text-right shrink-0 pl-3">
                    <span
                      className="text-[10px] uppercase font-mono tracking-wider block opacity-75"
                      style={{ color: 'var(--theme-text-muted)' }}
                    >
                      Base Price
                    </span>
                    <span
                      className="font-display text-lg sm:text-xl font-bold"
                      style={{ color: 'var(--theme-accent-gold)' }}
                    >
                      {currentProperty.price}
                    </span>
                  </div>
                </div>
              </div>
            </div>

            {/* Slider Switcher (Pill arrows on right edge) */}
            <div className="absolute right-0 sm:-right-4 lg:-right-6 top-1/2 -translate-y-1/2 flex flex-col gap-2 z-30">
              <button
                onClick={handlePrev}
                aria-label="Previous property slide"
                className="w-11 h-11 rounded-full border flex items-center justify-center shadow-theme-card transition-all active:scale-95 focus:outline-none focus-visible:ring-2"
                style={{
                  backgroundColor: 'var(--theme-bg-surface)',
                  borderColor: 'var(--theme-accent-border)',
                  color: 'var(--theme-accent-gold)',
                }}
              >
                <ChevronLeft className="w-5 h-5" />
              </button>
              <button
                onClick={handleNext}
                aria-label="Next property slide"
                className="w-11 h-11 rounded-full border flex items-center justify-center shadow-theme-card transition-all active:scale-95 focus:outline-none focus-visible:ring-2"
                style={{
                  backgroundColor: 'var(--theme-bg-surface)',
                  borderColor: 'var(--theme-accent-border)',
                  color: 'var(--theme-accent-gold)',
                }}
              >
                <ChevronRight className="w-5 h-5" />
              </button>
            </div>
          </div>
        </div>

        {/* Bottom Section: Specific Land Specs & Clean Progress Indicator */}
        <div
          className="mt-8 lg:mt-12 pt-6 border-t space-y-4"
          style={{ borderColor: 'var(--theme-border-subtle)' }}
        >
          {/* Thin Animated Progress Line */}
          <div
            className="w-full h-[3px] rounded-full overflow-hidden"
            style={{ backgroundColor: 'var(--theme-bg-surface)' }}
          >
            <div
              className="h-full transition-all duration-75 ease-linear rounded-full"
              style={{
                width: `${progress}%`,
                background: 'var(--theme-btn-gradient)',
              }}
              role="progressbar"
              aria-valuenow={Math.round(progress)}
              aria-valuemin={0}
              aria-valuemax={100}
            />
          </div>

          {/* Asymmetric Technical Details Row */}
          <div className="grid grid-cols-1 md:grid-cols-12 gap-4 items-center">
            
            {/* Technical Verification Highlights */}
            <div
              className="md:col-span-7 p-4 rounded-2xl border flex flex-col sm:flex-row sm:items-center justify-between gap-3 shadow-theme-card"
              style={{
                backgroundColor: 'var(--theme-bg-card)',
                borderColor: 'var(--theme-border-subtle)',
              }}
            >
              <div className="space-y-0.5 text-left">
                <span
                  className="text-[11px] font-mono uppercase tracking-wider block"
                  style={{ color: 'var(--theme-accent-gold)' }}
                >
                  Legal Verification Dossier
                </span>
                <p className="text-xs sm:text-sm font-medium" style={{ color: 'var(--theme-text-main)' }}>
                  {currentProperty.highlights[0]}
                </p>
                <p className="text-[11px]" style={{ color: 'var(--theme-text-dim)' }}>
                  {currentProperty.highlights[1]}
                </p>
              </div>

              <div
                className="shrink-0 sm:border-l sm:pl-4 text-left sm:text-right"
                style={{ borderColor: 'var(--theme-border-subtle)' }}
              >
                <span
                  className="text-[11px] font-mono block"
                  style={{ color: 'var(--theme-accent-gold)' }}
                >
                  Rate Card
                </span>
                <span
                  className="font-mono text-sm font-semibold whitespace-nowrap"
                  style={{ color: 'var(--theme-text-headline)' }}
                >
                  {currentProperty.priceSubtext}
                </span>
              </div>
            </div>

            {/* Slider Dots */}
            <div className="md:col-span-2 hidden lg:flex items-center justify-center gap-2">
              {HERO_PROPERTIES.map((prop, idx) => (
                <button
                  key={prop.id}
                  onClick={() => {
                    setCurrentIndex(idx);
                    setProgress(0);
                  }}
                  className={`h-2.5 transition-all rounded-full ${
                    currentIndex === idx ? 'w-8' : 'w-2.5 hover:scale-125'
                  }`}
                  style={{
                    backgroundColor: currentIndex === idx ? 'var(--theme-accent-gold)' : 'var(--theme-bg-surface)',
                    border: currentIndex === idx ? 'none' : '1px solid var(--theme-border-subtle)',
                  }}
                  aria-label={`Show ${prop.title}`}
                />
              ))}
            </div>

            {/* Free Chauffeur Site Inspection Action */}
            <div
              className="md:col-span-5 lg:col-span-3 p-4 rounded-2xl border flex items-center justify-between shadow-theme-card"
              style={{
                backgroundColor: 'var(--theme-bg-card)',
                borderColor: 'var(--theme-border-subtle)',
              }}
            >
              <div className="text-left">
                <span
                  className="text-[11px] font-mono uppercase block"
                  style={{ color: 'var(--theme-accent-gold)' }}
                >
                  Complimentary
                </span>
                <span
                  className="text-xs font-semibold block"
                  style={{ color: 'var(--theme-text-main)' }}
                >
                  Doorstep Inspection Cab
                </span>
              </div>

              <button
                onClick={() => onOpenSiteVisit(currentProperty.title)}
                className="shrink-0 text-xs font-bold px-4 py-2.5 rounded-full transition-all hover:scale-105 active:scale-95 shadow-theme-card"
                style={{
                  background: 'var(--theme-btn-gradient)',
                  color: 'var(--theme-btn-text)',
                }}
              >
                Schedule ride
              </button>
            </div>
          </div>
        </div>

      </div>
    </section>
  );
};
