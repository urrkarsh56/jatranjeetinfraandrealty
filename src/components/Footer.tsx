import React from 'react';
import { COMPANY_DETAILS } from '../data/properties';
import { ShieldCheck, ArrowUp } from 'lucide-react';

export const Footer: React.FC = () => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer
      className="border-t pt-16 pb-24 lg:pb-12 text-xs transition-colors duration-300 section-dark"
      style={{
        backgroundColor: 'var(--color-midnight)',
        borderColor: 'var(--color-navy)',
        color: 'var(--color-cream)',
      }}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Main Footer Grid */}
        <div
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-10 pb-12 border-b text-left reveal-item"
          style={{ borderColor: 'var(--color-navy)' }}
        >
          {/* Brand Info */}
          <div className="lg:col-span-5 space-y-4">
            <div className="flex items-center gap-3">
              <div
                className="relative w-12 h-12 rounded-full overflow-hidden border-2 shrink-0 hover:scale-105 transition-transform duration-300"
                style={{
                  borderColor: 'var(--color-sand)',
                  backgroundColor: 'var(--color-midnight)',
                }}
              >
                <img
                  src="/src/assets/images/jay_ranjeet_logo_1791463807767.jpg"
                  alt="Jay Ranjeet Infra and Realty Official Logo"
                  width={48}
                  height={48}
                  loading="lazy"
                  className="w-full h-full object-cover"
                  referrerPolicy="no-referrer"
                />
              </div>
              <div>
                <span
                  className="font-display text-lg font-bold block"
                  style={{ color: 'var(--color-cream)' }}
                >
                  Jay Ranjeet
                </span>
                <span
                  className="text-[10px] tracking-[0.2em] uppercase font-semibold block -mt-1"
                  style={{ color: 'var(--color-sand)' }}
                >
                  Infra and Realty
                </span>
              </div>
            </div>

            <p className="text-xs leading-relaxed max-w-sm" style={{ color: 'var(--color-cream)', opacity: 0.85 }}>
              Dedicated to delivering RERA-compliant plotted developments, luxury private residences, and commercial assets with absolute title safety and lifetime customer trust.
            </p>

            <div className="pt-1 flex items-center gap-3 text-xs" style={{ color: 'var(--color-sand)' }}>
              <ShieldCheck className="w-4 h-4" />
              <span className="font-mono">RERA Reg. No: {COMPANY_DETAILS.reraNo}</span>
            </div>
          </div>

          {/* Quick Links */}
          <div className="lg:col-span-2 space-y-3">
            <h4
              className="text-xs uppercase font-mono tracking-widest font-bold"
              style={{ color: 'var(--color-cream)' }}
            >
              Explore
            </h4>
            <ul className="space-y-2">
              <li><a href="#hero" className="luxury-link-underline hover:text-[var(--color-cream)]" style={{ color: 'var(--color-sand)' }}>Overview</a></li>
              <li><a href="#about" className="luxury-link-underline hover:text-[var(--color-cream)]" style={{ color: 'var(--color-sand)' }}>Company Story</a></li>
              <li><a href="#founder" className="luxury-link-underline hover:text-[var(--color-cream)]" style={{ color: 'var(--color-sand)' }}>Meet Bharat Nagori</a></li>
              <li><a href="#core-team" className="luxury-link-underline hover:text-[var(--color-cream)]" style={{ color: 'var(--color-sand)' }}>Core Team</a></li>
              <li><a href="#services" className="luxury-link-underline hover:text-[var(--color-cream)]" style={{ color: 'var(--color-sand)' }}>Services & Registry</a></li>
            </ul>
          </div>

          {/* Property Portfolios */}
          <div className="lg:col-span-2 space-y-3">
            <h4
              className="text-xs uppercase font-mono tracking-widest font-bold"
              style={{ color: 'var(--color-cream)' }}
            >
              Portfolios
            </h4>
            <ul className="space-y-2">
              <li><a href="#services" className="luxury-link-underline hover:text-[var(--color-cream)]" style={{ color: 'var(--color-sand)' }}>Residential Plots</a></li>
              <li><a href="#services" className="luxury-link-underline hover:text-[var(--color-cream)]" style={{ color: 'var(--color-sand)' }}>Independent Villas</a></li>
              <li><a href="#services" className="luxury-link-underline hover:text-[var(--color-cream)]" style={{ color: 'var(--color-sand)' }}>Modern Apartments</a></li>
              <li><a href="#services" className="luxury-link-underline hover:text-[var(--color-cream)]" style={{ color: 'var(--color-sand)' }}>Commercial High-Street</a></li>
              <li><a href="#services" className="luxury-link-underline hover:text-[var(--color-cream)]" style={{ color: 'var(--color-sand)' }}>Farmhouse Plots</a></li>
            </ul>
          </div>

          {/* Contact Summary */}
          <div className="lg:col-span-3 space-y-3">
            {/* Contact Summary - Removed Head Office section as per request */}
            <p className="text-xs font-bold" style={{ color: 'var(--color-cream)' }}>
              Call Bharat Nagori:{' '}
              <a href="tel:+917209999973" className="luxury-link-underline tracking-wider font-mono" style={{ color: 'var(--color-sand)' }}>
                +91 72099 99973
              </a>
            </p>
            <p className="text-xs" style={{ color: 'var(--color-cream)', opacity: 0.85 }}>
              Email: {COMPANY_DETAILS.email}
            </p>
            <p className="text-xs font-bold" style={{ color: 'var(--color-cream)' }}>
              Write to us:{' '}
              <a 
                href="mailto:jairanjeetinfraandrealty@gmail.com" 
                className="luxury-link-underline break-words" 
                style={{ color: 'var(--color-sand)' }}
              >
                jairanjeetinfraandrealty@gmail.com
              </a>
            </p>
            <p className="text-xs font-bold" style={{ color: 'var(--color-cream)' }}>
              Follow us:{' '}
              <a 
                href="https://www.instagram.com/jay_ranjeet_infra_and_realty/" 
                target="_blank" 
                rel="noopener noreferrer"
                aria-label="Follow Jay Ranjeet Infra and Realty on Instagram"
                className="luxury-link-underline break-words" 
                style={{ color: 'var(--color-sand)' }}
              >
                @jay_ranjeet_infra_and_realty
              </a>
            </p>
            <p className="text-xs font-bold" style={{ color: 'var(--color-cream)' }}>
              Address:{' '}
              <a 
                href="https://www.google.com/maps/search/?api=1&query=The+Black+Monster+Gym+Indore+Madhya+Pradesh" 
                target="_blank" 
                rel="noopener noreferrer"
                aria-label="View Jay Ranjeet Infra and Realty office location on Google Maps"
                className="luxury-link-underline break-words" 
                style={{ color: 'var(--color-sand)', display: 'block', minHeight: '44px' }}
              >
                The Black Monster Gym, Indore, Madhya Pradesh
              </a>
            </p>

            </div>
          </div>

        {/* Legal Disclaimer & RERA Information */}
        <div
          className="py-6 border-b space-y-2 text-[11px] leading-relaxed text-left"
          style={{
            borderColor: 'var(--color-navy)',
            color: 'var(--color-cream)',
            opacity: 0.85,
          }}
        >
          <p>
            <strong style={{ color: 'var(--color-cream)' }}>Disclaimer & Statutory Disclosures:</strong>{' '}
            All property representations, architectural renderings, floor dimensions, and project specifications displayed on this portal are for indicative and informational purposes. Real estate acquisitions are subject to official sale deeds, statutory sanctioned layouts, and sub-registrar verification under Real Estate (Regulation and Development) Act (RERA). Prospective buyers are invited to review primary legal title search dossiers and original sanction records at our corporate office prior to execution.
          </p>
        </div>

        {/* Bottom Bar: Copyright & Back to Top */}
        <div className="pt-6 flex flex-col sm:flex-row items-center justify-between gap-4">
          <p className="text-[11px] text-center sm:text-left" style={{ color: 'var(--color-cream)', opacity: 0.85 }}>
            © 2026 Jay Ranjeet Infra and Realty. All rights reserved. Managed by Founder Bharat Nagori.
          </p>

          <button
            onClick={scrollToTop}
            className="flex items-center gap-1.5 text-xs transition-colors px-3.5 py-1.5 rounded-full border shadow-sm"
            style={{
              backgroundColor: 'var(--color-navy)',
              borderColor: 'var(--color-steel)',
              color: 'var(--color-cream)',
            }}
          >
            <span>Back to top</span>
            <ArrowUp className="w-3.5 h-3.5" />
          </button>
        </div>

      </div>
    </footer>
  );
};
