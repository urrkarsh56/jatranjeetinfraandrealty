import React, { useState } from 'react';
import { TESTIMONIALS } from '../data/properties';
import { ChevronLeft, ChevronRight, Star } from 'lucide-react';
import { RealEstateIcons } from './RealEstateIcons';

export const TestimonialsSlider: React.FC = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const handlePrev = () => {
    setCurrentIndex((prev) => (prev - 1 + TESTIMONIALS.length) % TESTIMONIALS.length);
  };

  const handleNext = () => {
    setCurrentIndex((prev) => (prev + 1) % TESTIMONIALS.length);
  };

  const current = TESTIMONIALS[currentIndex];

  return (
    <section
      id="testimonials"
      className="py-20 lg:py-28 relative transition-colors duration-300"
      style={{
        backgroundColor: 'var(--color-cream)',
        color: 'var(--color-midnight)',
      }}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-6 mb-12 text-left">
          <div className="space-y-3 reveal-item">
            <span
              className="text-xs font-mono tracking-wider uppercase block"
              style={{ color: 'var(--color-steel)' }}
            >
              Verified Buyer Records
            </span>
            <h2
              className="font-display text-3xl sm:text-4xl lg:text-5xl font-bold tracking-tight"
              style={{ color: 'var(--color-midnight)' }}
            >
              Experiences of Registered Landowners
            </h2>
            <p
              className="text-sm sm:text-base max-w-lg"
              style={{ color: 'var(--color-midnight)', opacity: 0.85 }}
            >
              Conversations with families and commercial operators who completed their sub-registrar registry with us.
            </p>
          </div>

          {/* Slider Controls */}
          <div className="flex items-center gap-3 reveal-item delay-100">
            <button
              onClick={handlePrev}
              aria-label="Previous buyer dossier"
              className="w-11 h-11 rounded-full border flex items-center justify-center transition-all focus:outline-none focus-visible:ring-2 active:scale-95 shadow-theme-card luxury-card"
              style={{
                backgroundColor: 'var(--color-cream)',
                borderColor: 'var(--color-sand)',
                color: 'var(--color-steel)',
              }}
            >
              <ChevronLeft className="w-5 h-5" />
            </button>
            <button
              onClick={handleNext}
              aria-label="Next buyer dossier"
              className="w-11 h-11 rounded-full border flex items-center justify-center transition-all focus:outline-none focus-visible:ring-2 active:scale-95 shadow-theme-card luxury-card"
              style={{
                backgroundColor: 'var(--color-cream)',
                borderColor: 'var(--color-sand)',
                color: 'var(--color-steel)',
              }}
            >
              <ChevronRight className="w-5 h-5" />
            </button>
          </div>
        </div>

        {/* Verified Case Record Card (Deep Navy card with Cream text and Warm Sand accents) */}
        <div
          className="rounded-3xl border p-8 sm:p-10 lg:p-12 shadow-theme-card text-left reveal-item delay-200 luxury-card"
          style={{
            backgroundColor: 'var(--color-navy)',
            borderColor: 'var(--color-sand)',
          }}
        >
          <div className="max-w-4xl space-y-6">
            
            {/* Verification Metadata Strip */}
            <div
              className="flex flex-wrap items-center justify-between gap-3 pb-4 border-b text-xs font-mono"
              style={{ borderColor: 'rgba(212, 196, 168, 0.25)' }}
            >
              <div className="flex items-center gap-2" style={{ color: 'var(--color-sand)' }}>
                <RealEstateIcons.TitleDeed className="w-4 h-4" />
                <span className="font-bold">Sub-Registrar Mutation Executed</span>
              </div>
              <div className="flex items-center gap-1.5">
                {[...Array(5)].map((_, i) => (
                  <Star
                    key={i}
                    className="w-3.5 h-3.5"
                    style={{ color: 'var(--color-sand)', fill: 'var(--color-sand)' }}
                  />
                ))}
              </div>
            </div>

            {/* Quote Body */}
            <blockquote
              className="font-display text-lg sm:text-xl lg:text-2xl font-medium leading-relaxed"
              style={{ color: 'var(--color-cream)' }}
            >
              “{current.quote}”
            </blockquote>

            {/* Buyer Profile & Registered Asset Tag */}
            <div
              className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 pt-4 border-t"
              style={{ borderColor: 'rgba(212, 196, 168, 0.25)' }}
            >
              <div>
                <h3
                  className="font-display text-base font-bold"
                  style={{ color: 'var(--color-cream)' }}
                >
                  {current.name}
                </h3>
                <p className="text-xs" style={{ color: 'var(--color-sand)', opacity: 0.85 }}>
                  {current.role}
                </p>
              </div>

              <div
                className="p-2.5 rounded-xl border text-xs font-mono"
                style={{
                  backgroundColor: 'var(--color-midnight)',
                  borderColor: 'rgba(212, 196, 168, 0.3)',
                  color: 'var(--color-sand)',
                }}
              >
                <span className="block text-[10px] uppercase opacity-75" style={{ color: 'var(--color-cream)' }}>
                  Registered Asset:
                </span>
                <span>{current.propertyPurchased}</span>
              </div>
            </div>

          </div>
        </div>

        {/* Index Numbers */}
        <div
          className="flex items-center justify-center gap-2 mt-6 font-mono text-xs"
          style={{ color: 'var(--color-steel)' }}
        >
          <span>Record {currentIndex + 1} of {TESTIMONIALS.length}</span>
        </div>

      </div>
    </section>
  );
};
