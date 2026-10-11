import React from 'react';

export const FounderSection: React.FC = () => {
  return (
    <section
      id="founder"
      aria-labelledby="founder-title"
      className="founder-section"
    >
      {/* Decorative low-opacity watermark behind content */}
      <div className="founder-watermark" aria-hidden="true">
        FOUNDER
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 founder-container">
        <div className="founder-grid">
          {/* Left Column (roughly 2/3 width): Eyebrow & Huge Two-Line Name */}
          <div className="founder-col-left">
            {/* Oversized Eyebrow Label with 64px Gold Line */}
            <div className="founder-eyebrow-container reveal-item">
              <span className="founder-eyebrow">FOUNDER</span>
              <span className="founder-eyebrow-line" aria-hidden="true" />
            </div>

            {/* Huge Name Display as H2 broken into two lines */}
            <h2 id="founder-title" className="founder-name">
              <span className="founder-line-reveal founder-line-1 reveal-item">
                Bharat
              </span>
              <span className="founder-line-reveal founder-line-2 reveal-item">
                Nagori
              </span>
            </h2>
          </div>

          {/* Right Column (narrow side column): Role & Phone separated by 1px gold divider */}
          <div className="founder-col-right reveal-item delay-200">
            <div className="founder-role">
              Founder
            </div>
            <a
              href="tel:+917209999973"
              className="founder-phone-link focus:outline-none focus-visible:ring-2 focus-visible:ring-[var(--color-sage)] focus-visible:ring-offset-2 focus-visible:ring-offset-[var(--color-midnight)]"
              aria-label="Call Bharat Nagori, Founder, at +91 72099 99973"
            >
              +91 72099 99973
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};
