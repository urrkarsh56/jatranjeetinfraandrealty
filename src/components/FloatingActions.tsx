import React from 'react';
import { Phone, Calendar, MessageCircle } from 'lucide-react';
import { COMPANY_DETAILS } from '../data/properties';

interface FloatingActionsProps {
  onOpenSiteVisit: () => void;
  onOpenPalette?: () => void;
}

export const FloatingActions: React.FC<FloatingActionsProps> = ({
  onOpenSiteVisit,
}) => {
  const whatsappNumber = '917209999973';
  const whatsappUrl = `https://wa.me/${whatsappNumber}?text=Hi%2C%20I%20want%20to%20know%20more`;

  return (
    <>
      {/* Floating WhatsApp Button */}
      <aside aria-label="Quick contact links" className="fixed bottom-20 sm:bottom-6 right-5 z-40">
        <a
          href={whatsappUrl}
          target="_blank"
          rel="noopener noreferrer"
          className="group flex items-center gap-2.5 px-4 py-3 sm:py-3.5 rounded-full bg-[#25D366] hover:bg-[#20ba59] text-white shadow-theme-card hover:scale-105 active:scale-95 transition-all focus:outline-none focus-visible:ring-2 border border-white/20"
          aria-label="Chat on WhatsApp (opens in a new tab)"
        >
          <MessageCircle className="w-5 h-5 fill-white text-[#25D366]" />
          <span className="text-xs font-bold tracking-wide hidden sm:inline">
            WhatsApp Us
          </span>
        </a>
      </aside>

      {/* Sticky Bottom Bar on Mobile */}
      <aside
        aria-label="Mobile quick actions"
        className="fixed bottom-0 left-0 right-0 z-40 backdrop-blur-lg border-t p-3 sm:hidden shadow-lg"
        style={{
          backgroundColor: 'var(--color-navy)',
          borderColor: 'rgba(212, 196, 168, 0.2)',
        }}
      >
        <div className="grid grid-cols-2 gap-2.5">
          <a
            href={`tel:${COMPANY_DETAILS.phone.replace(/[^0-9+]/g, '')}`}
            className="flex items-center justify-center gap-2 py-3 px-4 rounded-full border text-xs font-semibold shadow-sm active:scale-95 transition-all"
            style={{
              backgroundColor: 'var(--color-midnight)',
              borderColor: 'var(--color-steel)',
              color: 'var(--color-cream)',
            }}
          >
            <Phone className="w-4 h-4" style={{ color: 'var(--color-sand)' }} />
            <span>Call Bharat</span>
          </a>

          <button
            onClick={onOpenSiteVisit}
            className="btn-primary flex items-center justify-center gap-2 py-3 px-4 rounded-full text-xs font-bold shadow-sm active:scale-95"
          >
            <Calendar className="w-4 h-4" />
            <span>Site Visit</span>
          </button>
        </div>
      </aside>
    </>
  );
};
