import React, { useState, useMemo } from 'react';
import { Property, PropertyCategory } from '../types';
import { ALL_PROPERTIES, TAKSHIT_OMKARLOK_GATE_ALT } from '../data/properties';
import { MapPin } from 'lucide-react';
import { RealEstateIcons } from './RealEstateIcons';

interface PropertiesGridProps {
  onSelectProperty: (property: Property) => void;
  onEnquireProperty: (property: Property) => void;
}

const PLACEHOLDER_IMAGES = [
  { src: '/images/property/property-1.jpg', alt: 'Property 1' },
  { src: '/images/property/property-2.jpg', alt: 'Property 2' },
  { src: '/images/property/property-3.jpg', alt: 'Property 3' },
  { src: '/images/property/property-4.jpg', alt: 'Property 4' },
];

export const PropertiesGrid: React.FC<PropertiesGridProps> = ({
  onSelectProperty,
  onEnquireProperty,
}) => {
  const [activeCategory, setActiveCategory] = useState<PropertyCategory>('all');

  const categories: { label: string; value: PropertyCategory }[] = [
    { label: 'All Verified Parcels', value: 'all' },
    { label: 'Plotted Townships', value: 'plots' },
    { label: 'Luxury Duplex Villas', value: 'villas' },
    { label: 'Commercial Showrooms', value: 'commercial' },
    { label: 'Residential Flats', value: 'flats' },
  ];

  const filteredProperties = useMemo(() => {
    return ALL_PROPERTIES.filter((prop) => {
      return activeCategory === 'all' || prop.category === activeCategory;
    });
  }, [activeCategory]);

  const featuredAnchor = filteredProperties[0] || ALL_PROPERTIES[0];
  const secondaryInventory = filteredProperties.slice(1);

  return (
    <section
      id="properties"
      className="py-20 lg:py-28 relative transition-colors duration-300"
      style={{
        backgroundColor: 'var(--theme-bg-base)',
        color: 'var(--theme-text-main)',
      }}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header: Left-aligned, Clear Architectural Tone */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-12 text-left">
          <div className="space-y-3 reveal-item">
            <span
              className="text-xs font-mono tracking-wider uppercase block"
              style={{ color: 'var(--theme-accent-gold)' }}
            >
              Inventory Catalogue · RERA Approved
            </span>
            <h2
              className="font-display text-3xl sm:text-4xl lg:text-5xl font-bold tracking-tight"
              style={{ color: 'var(--theme-text-headline)' }}
            >
              Verified Properties Ready for Registry
            </h2>
            <p
              className="text-sm sm:text-base max-w-xl"
              style={{ color: 'var(--theme-text-muted)' }}
            >
              Filter current inventory by land parcel type. Each unit includes demarcated survey boundaries, sub-registrar clearance, and pre-approved home loan status.
            </p>
          </div>

          {/* Segmented Filter Pills */}
          <div
            className="flex flex-wrap items-center gap-1.5 p-1.5 rounded-full border shadow-theme-card reveal-item delay-100"
            style={{
              backgroundColor: 'var(--theme-bg-surface)',
              borderColor: 'var(--theme-border-subtle)',
            }}
          >
            {categories.map((cat) => (
              <button
                key={cat.value}
                onClick={() => setActiveCategory(cat.value)}
                className={`px-4 py-2 text-xs sm:text-sm font-semibold rounded-full transition-all ${
                  activeCategory === cat.value
                    ? 'shadow-sm font-bold'
                    : 'hover:opacity-100 opacity-80'
                }`}
                style={{
                  background: activeCategory === cat.value ? 'var(--theme-btn-gradient)' : 'transparent',
                  color: activeCategory === cat.value ? 'var(--theme-btn-text)' : 'var(--theme-text-main)',
                }}
              >
                {cat.label}
              </button>
            ))}
          </div>
        </div>

        {/* DOMINANT HERO ANCHOR PROPERTY: Asymmetric 2-Column Showcase */}
        {featuredAnchor && (
          <div
            className="mb-12 rounded-3xl border shadow-theme-card overflow-hidden grid grid-cols-1 lg:grid-cols-12 text-left reveal-item delay-200 luxury-card group"
            style={{
              backgroundColor: 'var(--theme-bg-surface)',
              borderColor: 'var(--theme-accent-border)',
            }}
          >
            {/* Visual media frame (55% width on desktop) */}
            <div
              className="luxury-img-wrapper lg:col-span-7 relative aspect-[16/10] lg:aspect-auto min-h-[320px]"
              style={{ backgroundColor: 'var(--theme-bg-base)' }}
            >
              <img
                src={featuredAnchor.image}
                alt={TAKSHIT_OMKARLOK_GATE_ALT}
                className="luxury-img is-revealed w-full h-full object-cover"
                loading="lazy"
                width={1068}
                height={723}
                referrerPolicy="no-referrer"
              />
              <div className="absolute inset-0 bg-gradient-to-t lg:bg-gradient-to-r from-black/70 via-transparent to-transparent pointer-events-none" />
              
              <div className="absolute top-4 left-4 flex flex-wrap gap-2">
                <span
                  className="px-3.5 py-1.5 rounded-full backdrop-blur-md border text-xs font-semibold"
                  style={{
                    backgroundColor: 'rgba(0, 0, 0, 0.75)',
                    borderColor: 'var(--theme-accent-border)',
                    color: 'var(--theme-accent-gold)',
                  }}
                >
                  {featuredAnchor.status}
                </span>
                <span className="px-3 py-1.5 rounded-full bg-black/70 backdrop-blur-md text-xs font-mono text-white/90">
                  RERA: {featuredAnchor.reraNo}
                </span>
              </div>

              <div className="absolute bottom-4 left-4 right-4 flex items-end justify-between lg:hidden text-white drop-shadow">
                <span
                  className="font-display text-2xl font-bold"
                  style={{ color: 'var(--theme-accent-gold)' }}
                >
                  {featuredAnchor.price}
                </span>
                <span className="font-mono text-xs bg-black/60 px-3 py-1 rounded-full">{featuredAnchor.size}</span>
              </div>
            </div>

            {/* Anchor Specifications Column (45% width on desktop) */}
            <div className="lg:col-span-5 p-6 sm:p-8 lg:p-10 flex flex-col justify-between space-y-6">
              <div className="space-y-4">
                <div className="hidden lg:flex items-center justify-between">
                  <span
                    className="font-mono text-xs"
                    style={{ color: 'var(--theme-accent-gold)' }}
                  >
                    Primary Featured Parcel
                  </span>
                  <span
                    className="font-display text-2xl font-bold"
                    style={{ color: 'var(--theme-accent-gold)' }}
                  >
                    {featuredAnchor.price}
                  </span>
                </div>

                <div>
                  <h3
                    className="font-display text-xl sm:text-2xl font-bold"
                    style={{ color: 'var(--theme-text-headline)' }}
                  >
                    {featuredAnchor.title}
                  </h3>
                  <p
                    className="text-xs sm:text-sm flex items-center gap-1.5 mt-1"
                    style={{ color: 'var(--theme-text-muted)' }}
                  >
                    <MapPin className="w-4 h-4 shrink-0" style={{ color: 'var(--theme-accent-gold)' }} />
                    <span>{featuredAnchor.location}</span>
                  </p>
                </div>

                <p
                  className="text-xs sm:text-sm leading-relaxed"
                  style={{ color: 'var(--theme-text-muted)' }}
                >
                  {featuredAnchor.description}
                </p>

                {/* Technical Specifications Grid with Real Estate SVG Icons */}
                <div
                  className="grid grid-cols-2 gap-3 pt-2 border-t text-xs"
                  style={{ borderColor: 'var(--theme-border-subtle)' }}
                >
                  {featuredAnchor.specs.map((sp, idx) => (
                    <div
                      key={idx}
                      className="p-3 rounded-xl border space-y-0.5"
                      style={{
                        backgroundColor: 'var(--theme-bg-base)',
                        borderColor: 'var(--theme-border-subtle)',
                      }}
                    >
                      <span
                        className="text-[10px] font-mono uppercase block"
                        style={{ color: 'var(--theme-accent-border)' }}
                      >
                        {sp.label}
                      </span>
                      <span
                        className="font-semibold truncate block"
                        style={{ color: 'var(--theme-accent-gold)' }}
                      >
                        {sp.value}
                      </span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Action Buttons */}
              <div className="pt-2 flex items-center gap-3">
                <button
                  onClick={() => onSelectProperty(featuredAnchor)}
                  className="luxury-btn-slide flex-1 py-3 px-4 rounded-full text-xs sm:text-sm font-semibold border text-center"
                  style={{
                    backgroundColor: 'var(--theme-bg-base)',
                    borderColor: 'var(--theme-border-subtle)',
                    color: 'var(--theme-text-main)',
                  }}
                >
                  Inspect property dossier
                </button>

                <button
                  onClick={() => onEnquireProperty(featuredAnchor)}
                  className="luxury-btn-slide flex-1 py-3 px-4 rounded-full text-xs sm:text-sm font-bold active:scale-95 text-center shadow-theme-card"
                  style={{
                    background: 'var(--theme-btn-gradient)',
                    color: 'var(--theme-btn-text)',
                  }}
                >
                  Enquire this parcel
                </button>
              </div>
            </div>
          </div>
        )}

        {/* SECONDARY INVENTORY: Compact 2-Column Architectural Layout */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 text-left mb-12">
          {secondaryInventory.map((property) => (
            <div
              key={property.id}
              className="rounded-2xl border overflow-hidden flex flex-col sm:flex-row group shadow-theme-card reveal-item delay-200 luxury-card"
              style={{
                backgroundColor: 'var(--theme-bg-surface)',
                borderColor: 'var(--theme-border-subtle)',
              }}
            >
              {/* Image Frame */}
              <div
                className="luxury-img-wrapper sm:w-5/12 relative aspect-[16/10] sm:aspect-auto min-h-[180px] shrink-0"
                style={{ backgroundColor: 'var(--theme-bg-base)' }}
              >
                <img
                  src={property.image}
                  alt={TAKSHIT_OMKARLOK_GATE_ALT}
                  loading="lazy"
                  width={1068}
                  height={723}
                  className="luxury-img is-revealed w-full h-full object-cover"
                  referrerPolicy="no-referrer"
                />
                <div
                  className="absolute top-2.5 left-2.5 px-2.5 py-1 rounded-full backdrop-blur-md text-[10px] font-semibold border"
                  style={{
                    backgroundColor: 'rgba(0, 0, 0, 0.75)',
                    borderColor: 'var(--theme-accent-border)',
                    color: 'var(--theme-accent-gold)',
                  }}
                >
                  {property.status}
                </div>
              </div>

              {/* Content Details */}
              <div className="p-5 sm:w-7/12 flex-1 flex flex-col justify-between space-y-3">
                <div>
                  <div className="flex items-start justify-between gap-2">
                    <h4
                      className="font-display text-base font-bold transition-colors"
                      style={{ color: 'var(--theme-text-headline)' }}
                    >
                      {property.title}
                    </h4>
                    <span
                      className="font-display text-sm font-bold whitespace-nowrap"
                      style={{ color: 'var(--theme-accent-gold)' }}
                    >
                      {property.price}
                    </span>
                  </div>

                  <p
                    className="text-[11px] flex items-center gap-1 mt-1 truncate"
                    style={{ color: 'var(--theme-text-dim)' }}
                  >
                    <MapPin className="w-3 h-3 shrink-0" style={{ color: 'var(--theme-accent-gold)' }} />
                    <span className="truncate">{property.location}</span>
                  </p>

                  <p
                    className="text-xs line-clamp-2 mt-2 leading-relaxed"
                    style={{ color: 'var(--theme-text-muted)' }}
                  >
                    {property.description}
                  </p>
                </div>

                <div
                  className="pt-2 border-t flex items-center justify-between text-xs"
                  style={{ borderColor: 'var(--theme-border-subtle)' }}
                >
                  <span
                    className="font-mono text-[11px]"
                    style={{ color: 'var(--theme-accent-gold)' }}
                  >
                    {property.size}
                  </span>
                  <div className="flex items-center gap-2">
                    <button
                      onClick={() => onSelectProperty(property)}
                      className="text-xs underline underline-offset-2 luxury-link-underline opacity-80 hover:opacity-100"
                      style={{ color: 'var(--theme-text-main)' }}
                    >
                      Details
                    </button>
                    <button
                      onClick={() => onEnquireProperty(property)}
                      className="luxury-btn-slide px-3.5 py-1.5 rounded-full text-[11px] font-bold shadow-sm"
                      style={{
                        background: 'var(--theme-btn-gradient)',
                        color: 'var(--theme-btn-text)',
                      }}
                    >
                      Enquire
                    </button>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
        
        {/* PROPERTY PHOTOS */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mt-12">
            {PLACEHOLDER_IMAGES.map((img, idx) => (
                <div key={idx} className="aspect-[4/3] rounded-2xl overflow-hidden border" style={{borderColor: 'var(--theme-border-subtle)'}}>
                    <img src={img.src} alt={img.alt} className="w-full h-full object-cover" loading="lazy" />
                </div>
            ))}
        </div>
        
        <div className="mt-8 text-center">
            <a 
                href="https://www.google.com/maps/search/?api=1&query=Opposite+Char+Pai+Dhaba+Indore+Madhya+Pradesh"
                target="_blank" 
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 text-sm font-semibold"
                style={{ color: 'var(--theme-text-main)' }}
            >
                <MapPin className="w-5 h-5" style={{ color: 'var(--theme-accent-gold)' }} />
                Opposite Char Pai Dhaba, Indore, Madhya Pradesh
            </a>
        </div>

      </div>
    </section>
  );
};

