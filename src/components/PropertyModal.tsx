import React from 'react';
import { Property } from '../types';
import { TAKSHIT_OMKARLOK_GATE_ALT } from '../data/properties';
import { X, MapPin, Shield, Check } from 'lucide-react';

interface PropertyModalProps {
  property: Property | null;
  onClose: () => void;
  onEnquire: (property: Property) => void;
  onBookSiteVisit: () => void;
}

export const PropertyModal: React.FC<PropertyModalProps> = ({
  property,
  onClose,
  onEnquire,
  onBookSiteVisit,
}) => {
  if (!property) return null;

  return (
    <div
      className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 bg-black/85 backdrop-blur-md animate-fadeIn"
      onClick={onClose}
    >
      <div
        className="relative w-full max-w-3xl max-h-[90vh] overflow-y-auto rounded-3xl border shadow-theme-card text-left"
        style={{
          backgroundColor: 'var(--color-navy)',
          borderColor: 'var(--color-sand)',
          color: 'var(--color-cream)',
        }}
        onClick={(e) => e.stopPropagation()}
      >
        {/* Close button */}
        <button
          onClick={onClose}
          className="absolute top-4 right-4 z-20 w-10 h-10 rounded-full border flex items-center justify-center transition-colors focus:outline-none"
          style={{
            backgroundColor: 'var(--color-midnight)',
            borderColor: 'var(--color-sand)',
            color: 'var(--color-sand)',
          }}
          aria-label="Close modal"
        >
          <X className="w-5 h-5" />
        </button>

        {/* Hero image in modal */}
        <div
          className="relative aspect-[16/9] w-full overflow-hidden"
          style={{ backgroundColor: 'var(--color-midnight)' }}
        >
          <img
            src={property.image}
            alt={TAKSHIT_OMKARLOK_GATE_ALT}
            width={1068}
            height={723}
            loading="lazy"
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/85 via-transparent to-black/30 pointer-events-none" />
          
          <div className="absolute top-4 left-4 flex items-center gap-2">
            <span
              className="px-3.5 py-1 rounded-full backdrop-blur-md text-xs font-semibold border shadow-theme-card"
              style={{
                backgroundColor: 'rgba(13, 27, 42, 0.85)',
                borderColor: 'var(--color-sand)',
                color: 'var(--color-sand)',
              }}
            >
              {property.status}
            </span>
          </div>

          <div className="absolute bottom-4 left-4 right-4 flex items-end justify-between">
            <div>
              <h2
                className="font-display text-2xl sm:text-3xl font-bold drop-shadow-md"
                style={{ color: 'var(--color-cream)' }}
              >
                {property.title}
              </h2>
              <p
                className="text-xs sm:text-sm flex items-center gap-1 mt-1 opacity-90"
                style={{ color: 'var(--color-sand)' }}
              >
                <MapPin className="w-3.5 h-3.5" style={{ color: 'var(--color-sand)' }} />
                <span>{property.location}, {property.city}</span>
              </p>
            </div>

            <div className="text-right">
              <span className="text-[10px] uppercase block opacity-75" style={{ color: 'var(--color-sand)' }}>
                Price
              </span>
              <span
                className="font-display text-2xl sm:text-3xl font-bold"
                style={{ color: 'var(--color-cream)' }}
              >
                {property.price}
              </span>
            </div>
          </div>
        </div>

        {/* Modal content body */}
        <div className="p-6 sm:p-8 space-y-6">
          
          {/* Quick specs pill row */}
          <div className="grid grid-cols-2 sm:grid-cols-4 gap-3">
            {property.specs.map((sp, idx) => (
              <div
                key={idx}
                className="p-3.5 rounded-2xl border shadow-theme-card"
                style={{
                  backgroundColor: 'var(--color-midnight)',
                  borderColor: 'var(--color-steel)',
                }}
              >
                <span
                  className="text-[10px] uppercase block font-mono"
                  style={{ color: 'var(--color-sand)' }}
                >
                  {sp.label}
                </span>
                <span
                  className="text-xs sm:text-sm font-semibold block mt-0.5 truncate"
                  style={{ color: 'var(--color-cream)' }}
                >
                  {sp.value}
                </span>
              </div>
            ))}
          </div>

          {/* Description */}
          <div className="space-y-2">
            <h3
              className="font-display text-base font-bold"
              style={{ color: 'var(--color-cream)' }}
            >
              Property Overview
            </h3>
            <p
              className="text-xs sm:text-sm leading-relaxed"
              style={{ color: 'var(--color-cream)', opacity: 0.85 }}
            >
              {property.description}
            </p>
          </div>

          {/* Features and Infrastructure */}
          <div className="space-y-3">
            <h3
              className="font-display text-base font-bold"
              style={{ color: 'var(--color-cream)' }}
            >
              Site Infrastructure & Survey Clearances
            </h3>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5">
              {property.features.map((feat, idx) => (
                <div
                  key={idx}
                  className="flex items-center gap-2.5 text-xs p-2.5 rounded-xl border"
                  style={{
                    backgroundColor: 'var(--color-midnight)',
                    borderColor: 'var(--color-steel)',
                    color: 'var(--color-cream)',
                  }}
                >
                  <span
                    className="w-5 h-5 rounded-full flex items-center justify-center shrink-0 font-bold"
                    style={{
                      background: 'var(--color-sage)',
                      color: 'var(--color-cream)',
                    }}
                  >
                    <Check className="w-3 h-3" />
                  </span>
                  <span>{feat}</span>
                </div>
              ))}
            </div>
          </div>

          {/* RERA and Legal Status */}
          <div
            className="p-4 rounded-2xl border flex items-center justify-between shadow-theme-card"
            style={{
              backgroundColor: 'var(--color-midnight)',
              borderColor: 'var(--color-steel)',
            }}
          >
            <div className="flex items-center gap-3">
              <Shield className="w-6 h-6 shrink-0" style={{ color: 'var(--color-sand)' }} />
              <div>
                <span
                  className="text-xs font-semibold block"
                  style={{ color: 'var(--color-cream)' }}
                >
                  Statutory Registration Authority
                </span>
                <span className="text-xs font-mono opacity-85" style={{ color: 'var(--color-sand)' }}>
                  {property.reraNo}
                </span>
              </div>
            </div>
            <span
              className="text-[11px] px-3 py-1 rounded-full border font-semibold font-mono"
              style={{
                backgroundColor: 'rgba(119, 141, 122, 0.2)',
                borderColor: 'var(--color-sage)',
                color: 'var(--color-sage)',
              }}
            >
              Book 1 Sub-Registrar Ready
            </span>
          </div>

          {/* Actions */}
          <div
            className="pt-4 border-t flex flex-col sm:flex-row gap-3"
            style={{ borderColor: 'rgba(212, 196, 168, 0.2)' }}
          >
            <button
              onClick={() => {
                onClose();
                onEnquire(property);
              }}
              className="btn-primary flex-1 py-3.5 px-6 rounded-full text-xs sm:text-sm font-bold flex items-center justify-center gap-2 transition-all shadow-theme-card active:scale-[0.98]"
            >
              <span>Request official rate card & deed</span>
            </button>

            <button
              onClick={() => {
                onClose();
                onBookSiteVisit();
              }}
              className="flex-1 py-3.5 px-6 rounded-full text-xs sm:text-sm font-semibold flex items-center justify-center gap-2 border transition-all shadow-theme-card active:scale-[0.98]"
              style={{
                backgroundColor: 'var(--color-midnight)',
                borderColor: 'var(--color-sand)',
                color: 'var(--color-cream)',
              }}
            >
              <span>Book free chauffeur site visit</span>
            </button>
          </div>

        </div>
      </div>
    </div>
  );
};
