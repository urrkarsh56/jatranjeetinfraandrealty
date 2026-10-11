import React from 'react';
import { SERVICES } from '../data/properties';
import { RealEstateIcons } from './RealEstateIcons';

interface ServicesSectionProps {
  onOpenSiteVisit: () => void;
}

export const ServicesSection: React.FC<ServicesSectionProps> = ({ onOpenSiteVisit }) => {
  const getIcon = (iconKey: string) => {
    switch (iconKey) {
      case 'PlotBoundary':
        return <RealEstateIcons.PlotBoundary className="w-6 h-6" style={{ color: 'var(--color-sand)' }} />;
      case 'TitleDeed':
        return <RealEstateIcons.TitleDeed className="w-6 h-6" style={{ color: 'var(--color-sand)' }} />;
      case 'FloorPlan':
        return <RealEstateIcons.FloorPlan className="w-6 h-6" style={{ color: 'var(--color-sand)' }} />;
      case 'RoadCrossSection':
        return <RealEstateIcons.RoadCrossSection className="w-6 h-6" style={{ color: 'var(--color-sand)' }} />;
      default:
        return <RealEstateIcons.VerifiedStamp className="w-6 h-6" style={{ color: 'var(--color-sand)' }} />;
    }
  };

  return (
    <section
      id="services"
      className="py-20 lg:py-28 relative transition-colors duration-300 border-y section-alt"
      style={{
        backgroundColor: 'var(--color-cream)',
        borderColor: 'rgba(65, 90, 119, 0.2)',
      }}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="max-w-3xl mb-16 space-y-3 text-left reveal-item">
          <span
            className="text-xs font-mono font-bold tracking-wider uppercase block"
            style={{ color: 'var(--color-steel)' }}
          >
            End-to-End Real Estate Operations
          </span>
          <h2
            className="font-display text-3xl sm:text-4xl lg:text-5xl font-bold tracking-tight"
            style={{ color: 'var(--color-midnight)' }}
          >
            Title Vetting, Land Plotting & Turnkey Delivery
          </h2>
          <p
            className="text-sm sm:text-base leading-relaxed max-w-2xl"
            style={{ color: 'var(--color-midnight)', opacity: 0.85 }}
          >
            We handle the complete statutory journey so you receive clear ownership documents without engaging unregulated tehsildar intermediaries or brokers.
          </p>
        </div>

        {/* Structured Architectural Ledger */}
        <div
          className="border-t-2 divide-y reveal-item delay-100"
          style={{
            borderColor: 'var(--color-steel)',
          }}
        >
          {SERVICES.map((service) => (
            <div
              key={service.id}
              className="py-8 lg:py-10 grid grid-cols-1 md:grid-cols-12 gap-6 lg:gap-10 items-start text-left"
              style={{
                borderColor: 'rgba(65, 90, 119, 0.2)',
              }}
            >
              {/* Service title & real estate symbol (4 cols) */}
              <div className="md:col-span-4 flex items-start gap-4">
                <div
                  className="w-12 h-12 rounded-2xl flex items-center justify-center shrink-0 border"
                  style={{
                    backgroundColor: 'var(--color-navy)',
                    borderColor: 'var(--color-sand)',
                  }}
                >
                  {getIcon(service.icon)}
                </div>
                <div>
                  <h3
                    className="font-display text-lg sm:text-xl font-bold leading-snug"
                    style={{ color: 'var(--color-midnight)' }}
                  >
                    {service.title}
                  </h3>
                  <span
                    className="text-xs font-mono block mt-1"
                    style={{ color: 'var(--color-steel)' }}
                  >
                    Statutory Deliverables Included
                  </span>
                </div>
              </div>

              {/* Service Detailed Scope (5 cols) */}
              <div
                className="md:col-span-5 text-xs sm:text-sm leading-relaxed"
                style={{ color: 'var(--color-midnight)', opacity: 0.85 }}
              >
                <p>{service.description}</p>
              </div>

              {/* Verified Output Checklist (3 cols) */}
              <div className="md:col-span-3 space-y-2">
                <span
                  className="text-[11px] font-mono uppercase font-bold block"
                  style={{ color: 'var(--color-midnight)' }}
                >
                  Mandatory Records Provided:
                </span>
                {service.highlights.map((item, idx) => (
                  <div
                    key={idx}
                    className="flex items-start gap-2 text-xs"
                    style={{ color: 'var(--color-midnight)' }}
                  >
                    <RealEstateIcons.VerifiedStamp
                      className="w-3.5 h-3.5 shrink-0 mt-0.5"
                      style={{ color: 'var(--color-sage)' }}
                    />
                    <span>{item}</span>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
};
