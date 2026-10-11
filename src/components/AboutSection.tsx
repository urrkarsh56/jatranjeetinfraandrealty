import React from 'react';
import { COMPANY_DETAILS } from '../data/properties';

interface AboutSectionProps {
  onOpenSiteVisit: () => void;
}

export const AboutSection: React.FC<AboutSectionProps> = ({ onOpenSiteVisit }) => {
  return (
    <section
      id="about"
      className="py-20 lg:py-28 relative transition-colors duration-300 border-y"
      style={{
        backgroundColor: 'var(--theme-bg-surface)',
        borderColor: 'var(--theme-border-subtle)',
        color: 'var(--theme-text-main)',
      }}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Narrative Header */}
        <div className="max-w-4xl mb-16 text-left space-y-5">
          <span
            className="text-xs font-mono tracking-wider uppercase block reveal-item"
            style={{ color: 'var(--color-steel)' }}
          >
            Company Overview & Legal Framework
          </span>

          <h2
            className="font-display text-3xl sm:text-4xl lg:text-5xl font-bold tracking-tight leading-tight reveal-item delay-100"
            style={{ color: 'var(--color-midnight)' }}
          >
            Sixteen years of developing undisputed freehold land.
          </h2>

          <div
            className="space-y-4 text-sm sm:text-base leading-relaxed max-w-3xl reveal-item delay-200"
            style={{ color: 'var(--color-midnight)', opacity: 0.88 }}
          >
            <p>
              In regional real estate, title ambiguity is the greatest hazard families face. At{' '}
              <strong style={{ color: 'var(--color-midnight)', fontWeight: 700 }}>{COMPANY_DETAILS.name}</strong>,
              our founding directive has been singular: we never offer land for sale until our in-house advocates have completed a 30-year genealogy search at the registrar office.
            </p>
            <p>
              Every plotted layout, duplex residence, and commercial parcel is converted for non-agricultural use under statutory revenue laws, approved by statutory town planning authorities, and demarcated with permanent concrete boundary pillars before execution.
            </p>
          </div>
        </div>

        {/* Founder & Leadership Plaque with Official Medallion */}
        <div
          className="mt-14 p-6 sm:p-8 rounded-3xl border shadow-theme-card flex flex-col sm:flex-row items-center justify-between gap-6 reveal-item delay-200 luxury-card"
          style={{
            backgroundColor: 'var(--color-navy)',
            borderColor: 'var(--color-sand)',
          }}
        >
          <div className="flex items-center gap-5 text-left">
            <div
              className="relative w-16 h-16 sm:w-20 sm:h-20 rounded-full overflow-hidden border-2 shrink-0 shadow-theme-glow group-hover:scale-105 transition-transform duration-300"
              style={{
                borderColor: 'var(--color-sand)',
                backgroundColor: 'var(--color-midnight)',
              }}
            >
              <img
                src="/src/assets/images/jay_ranjeet_logo_1791463807767.jpg"
                alt="Jay Ranjeet Infra and Realty Official Seal"
                width={56}
                height={56}
                loading="lazy"
                className="w-full h-full object-cover"
                referrerPolicy="no-referrer"
              />
            </div>
            <div className="space-y-1">
              <span
                className="text-[11px] font-mono uppercase block"
                style={{ color: 'var(--color-sand)' }}
              >
                Leadership Guarantee
              </span>
              <p
                className="font-display text-base sm:text-lg font-bold max-w-xl"
                style={{ color: 'var(--color-cream)' }}
              >
                “Bring your personal bank valuer or advocate to inspect original registry records before paying token money.”
              </p>
              <p className="text-xs" style={{ color: 'var(--color-sand)', opacity: 0.85 }}>
                — Managing Director, Jay Ranjeet Infra and Realty
              </p>
            </div>
          </div>


        </div>

      </div>
    </section>
  );
};
