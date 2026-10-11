import React from 'react';
import { RealEstateIcons } from './RealEstateIcons';

export const WhyChooseUs: React.FC = () => {
  const comparisonRows = [
    {
      parameter: 'Title Ownership & Search',
      marketRisk: 'Power-of-attorney agreements or unchecked ancestral land with disputed heirs.',
      jayRanjeetGuarantee: 'Mandatory 30-year genealogy title search certificate verified by registered advocates prior to listing.',
      icon: 'TitleDeed'
    },
    {
      parameter: 'Land Revenue Conversion',
      marketRisk: 'Agricultural land sold as plots without statutory non-agricultural sanctions.',
      jayRanjeetGuarantee: 'Legally converted under Section 143 for residential/commercial construction with conversion tax paid.',
      icon: 'PlotBoundary'
    },
    {
      parameter: 'Town Planning & RERA',
      marketRisk: 'Unsanctioned layouts risking demolition notices or road acquisition cuts.',
      jayRanjeetGuarantee: 'Statutory development authority approval with active RERA registration and public project files.',
      icon: 'VerifiedStamp'
    },
    {
      parameter: 'Roads & Infrastructure',
      marketRisk: 'Narrow 20-foot dirt paths with no storm drainage or utility rights-of-way.',
      jayRanjeetGuarantee: 'Engineered 40-foot and 50-foot bitumen roads, underground cable channels, and municipal stormwater gutters.',
      icon: 'RoadCrossSection'
    },
    {
      parameter: 'On-Site Demarcation',
      marketRisk: 'Chalk marks or temporary flags that wash away during rains leading to boundary disputes.',
      jayRanjeetGuarantee: 'Certified government revenue surveyor installs four permanent concrete corner pillars engraved with plot ID.',
      icon: 'PerimeterFencing'
    }
  ];

  return (
    <section
      id="why-us"
      className="py-20 lg:py-28 relative transition-colors duration-300 border-t section-alt"
      style={{
        backgroundColor: 'var(--blue-200)',
        borderColor: 'rgba(77, 121, 168, 0.35)',
        color: 'var(--blue-800)',
      }}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="max-w-3xl mb-16 space-y-3 text-left reveal-item">
          <span
            className="text-xs font-mono tracking-wider uppercase block"
            style={{ color: 'var(--blue-800)' }}
          >
            Comparative Due Diligence
          </span>
          <h2
            className="font-display text-3xl sm:text-4xl lg:text-5xl font-bold tracking-tight"
            style={{ color: 'var(--blue-900)' }}
          >
            Common Land Hazards vs. Our Statutory Guarantees
          </h2>
          <p
            className="text-sm sm:text-base leading-relaxed"
            style={{ color: 'var(--blue-800)' }}
          >
            Before investing in any regional plot or commercial parcel, compare our verifiable documentation protocol against customary market transactions.
          </p>
        </div>

        {/* Structured Comparative Table Ledger */}
        <div
          className="rounded-3xl border shadow-sm overflow-hidden text-left reveal-item delay-100 luxury-card"
          style={{
            backgroundColor: 'var(--blue-50)',
            borderColor: 'var(--blue-400)',
          }}
        >
          {/* Table Header */}
          <div
            className="grid grid-cols-1 md:grid-cols-12 border-b text-xs font-mono font-semibold"
            style={{
              backgroundColor: 'var(--blue-200)',
              borderColor: 'var(--blue-400)',
            }}
          >
            <div
              className="md:col-span-3 p-4 sm:p-5 uppercase tracking-wider"
              style={{ color: 'var(--blue-900)' }}
            >
              Legal Parameter
            </div>
            <div
              className="md:col-span-4 p-4 sm:p-5 uppercase tracking-wider border-t md:border-t-0 md:border-l"
              style={{
                borderColor: 'var(--blue-400)',
                color: 'var(--blue-800)',
              }}
            >
              Customary Market Hazards
            </div>
            <div
              className="md:col-span-5 p-4 sm:p-5 uppercase tracking-wider border-t md:border-t-0 md:border-l"
              style={{
                borderColor: 'var(--blue-400)',
                color: 'var(--blue-900)',
              }}
            >
              Jay Ranjeet Infra and Realty Legal Guarantee
            </div>
          </div>

          {/* Table Rows */}
          <div
            className="divide-y"
            style={{ borderColor: 'var(--blue-200)' }}
          >
            {comparisonRows.map((row, idx) => (
              <div
                key={idx}
                className="grid grid-cols-1 md:grid-cols-12 text-xs sm:text-sm items-center hover:bg-white/50 transition-all"
              >
                {/* Parameter */}
                <div className="md:col-span-3 p-4 sm:p-5 font-display font-bold flex items-center gap-2.5">
                  <span
                    className="w-1.5 h-1.5 rounded-full shrink-0"
                    style={{ backgroundColor: 'var(--blue-700)' }}
                  />
                  <span style={{ color: 'var(--blue-900)' }}>{row.parameter}</span>
                </div>

                {/* Common Market Risk */}
                <div
                  className="md:col-span-4 p-4 sm:p-5 border-t md:border-t-0 md:border-l leading-relaxed"
                  style={{
                    borderColor: 'var(--blue-200)',
                    color: 'var(--blue-800)',
                  }}
                >
                  <span
                    className="md:hidden text-[11px] font-mono block mb-1"
                    style={{ color: 'var(--blue-700)' }}
                  >
                    Standard Market Hazard:
                  </span>
                  {row.marketRisk}
                </div>

                {/* Jay Ranjeet Infra and Realty Guarantee */}
                <div
                  className="md:col-span-5 p-4 sm:p-5 font-medium border-t md:border-t-0 md:border-l leading-relaxed flex items-start gap-2.5"
                  style={{
                    backgroundColor: 'rgba(255, 255, 255, 0.4)',
                    borderColor: 'var(--blue-200)',
                    color: 'var(--blue-900)',
                  }}
                >
                  <RealEstateIcons.VerifiedStamp
                    className="w-4 h-4 shrink-0 mt-0.5"
                    style={{ color: 'var(--blue-700)' }}
                  />
                  <div>
                    <span
                      className="md:hidden text-[11px] font-mono block mb-1"
                      style={{ color: 'var(--blue-700)' }}
                    >
                      Jay Ranjeet Infra and Realty Standard:
                    </span>
                    <span>{row.jayRanjeetGuarantee}</span>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Closing Title Inspection Guarantee */}
        <div
          className="mt-10 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs font-mono"
          style={{ color: 'var(--blue-800)' }}
        >
          <p>
            All original revenue deeds, khasra registers, and naksha maps are open for verification at our head office.
          </p>
          <a
            href="#contact"
            className="text-xs font-bold underline underline-offset-4 hover:opacity-100 transition-opacity"
            style={{ color: 'var(--blue-700)' }}
          >
            Request title dossier copies
          </a>
        </div>

      </div>
    </section>
  );
};
