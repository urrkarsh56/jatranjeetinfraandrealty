import React, { useState, useEffect, useCallback } from 'react';
import { HERO_PROPERTIES, TAKSHIT_OMKARLOK_GATE_ALT } from '../data/properties';

interface HeroSectionProps {
  onOpenSiteVisit: (propertyTitle?: string) => void;
}

export const HeroSection: React.FC<HeroSectionProps> = ({ onOpenSiteVisit }) => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const handleNext = useCallback(() => {
    setCurrentIndex((prev) => (prev + 1) % HERO_PROPERTIES.length);
  }, []);

  const handlePrev = useCallback(() => {
    setCurrentIndex((prev) => (prev - 1 + HERO_PROPERTIES.length) % HERO_PROPERTIES.length);
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

  // Subtle background property transition timer
  useEffect(() => {
    const timer = setInterval(() => {
      handleNext();
    }, 8000);
    return () => clearInterval(timer);
  }, [handleNext]);

  const currentProperty = HERO_PROPERTIES[currentIndex];

  return (
    <section
      id="hero"
      aria-labelledby="hero-title"
      className="hero-centered-section"
    >
      {/* Full-bleed AI-generated hero image with flat --blue-900 overlay at 58% opacity */}
      <div className="hero-bg-media">
        <img
          src="/images/ai-generated-hero-gate.jpg"
          alt="AI-generated Takshit Omkarlok grand entrance gate and masterplanned township"
          loading="eager"
          fetchPriority="high"
          width={1920}
          height={1080}
          referrerPolicy="no-referrer"
        />
        <div className="hero-bg-overlay" />
      </div>

      {/* Content Container (max-width 960px, 24px mobile padding, 64px vertical padding) */}
      <div className="hero-content-container">
        {/* Eyebrow: Uppercase, 12px, 0.2em letter spacing, --blue-400 on dark, 24px below */}
        <span className="hero-eyebrow hero-anim-1">
          {currentProperty.categoryLabel}
        </span>

        {/* Headline: Only h1, serif font, clamp(2.75rem, 7vw, 6rem), 1.05 line-height, text-wrap: balance */}
        <h1 id="hero-title" className="hero-headline hero-anim-2">
          Find verified land.
          <br />
          Build with permanent title clarity.
        </h1>

        {/* Supporting text: Body font, 18-20px, line-height 1.6, max-width 600px, 80% opacity */}
        <p className="hero-supporting-text hero-anim-3">
          {currentProperty.tagline}
        </p>

        {/* Button row: Centered, 16px gap, stacked on mobile */}
        <div className="hero-button-row hero-anim-4">
          <a href="#services" className="hero-btn-primary">
            See available plots
          </a>
          <button
            onClick={() => onOpenSiteVisit(currentProperty.title)}
            className="hero-btn-secondary"
          >
            Book a site visit
          </button>
        </div>

        {/* Trust line */}
        <div className="hero-trust-line hero-anim-5">
          <span>RERA Approved: {currentProperty.reraNo}</span>
          <span>·</span>
          <span>{currentProperty.khasraNo}</span>
        </div>
      </div>
    </section>
  );
};
