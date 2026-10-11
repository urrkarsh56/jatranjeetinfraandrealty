import React, { useState, useEffect } from 'react';
import { Menu, X, Phone, Calendar, Palette, Shield } from 'lucide-react';
import { COMPANY_DETAILS } from '../data/properties';
import { useTheme } from '../context/ThemeContext';
import { PaletteSelectorModal } from './PaletteSelector';

interface NavbarProps {
  onOpenSiteVisit: () => void;
  onSelectCategory?: (category: string) => void;
}

export const Navbar: React.FC<NavbarProps> = ({ onOpenSiteVisit }) => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isPaletteModalOpen, setIsPaletteModalOpen] = useState(false);
  const { palette } = useTheme();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 30);
    };
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { label: 'Overview', href: '#hero' },
    { label: 'About', href: '#about' },
    { label: 'Founder', href: '#founder' },
    { label: 'Core Team', href: '#core-team' },
    { label: 'Services', href: '#services' },
    { label: 'Testimonials', href: '#testimonials' },
    { label: 'Contact', href: '#contact' },
  ];

  return (
    <>
      <header
        className={`fixed top-0 left-0 right-0 z-50 animate-page-fade transition-all duration-300 ${
          isScrolled
            ? 'backdrop-blur-md py-3.5 border-b shadow-sm'
            : 'backdrop-blur-sm py-4 lg:py-5 border-b'
        }`}
        style={{
          backgroundColor: 'var(--color-navy)',
          borderColor: 'rgba(212, 196, 168, 0.2)',
          color: 'var(--color-cream)',
          transitionTimingFunction: 'var(--ease-premium)',
        }}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between">
            {/* Brand Logo */}
            <a
              href="#hero"
              className="flex items-center gap-3 group focus:outline-none focus-visible:ring-2 rounded-full p-1"
            >
              <div
                className="relative w-11 h-11 sm:w-12 sm:h-12 rounded-full overflow-hidden border-2 group-hover:scale-105 transition-transform duration-300 shrink-0"
                style={{
                  borderColor: 'var(--color-sand)',
                  backgroundColor: 'var(--color-midnight)',
                  transitionTimingFunction: 'var(--ease-premium)',
                }}
              >
                <img
                  src="/src/assets/images/jay_ranjeet_logo_1791463807767.jpg"
                  alt="Jay Ranjeet Infra and Realty Official Logo"
                  width={48}
                  height={48}
                  className="w-full h-full object-cover"
                  referrerPolicy="no-referrer"
                />
              </div>
              <div className="flex flex-col text-left">
                <span
                  className="font-display text-lg sm:text-xl font-bold tracking-tight transition-colors"
                  style={{ color: 'var(--color-cream)' }}
                >
                  Jay Ranjeet
                </span>
                <span
                  className="text-[10px] tracking-[0.2em] uppercase font-semibold -mt-0.5"
                  style={{ color: 'var(--color-sand)' }}
                >
                  Infra and Realty
                </span>
              </div>
            </a>

            {/* Desktop Navigation */}
            <nav className="hidden xl:flex items-center gap-6">
              {navLinks.map((link) => (
                <a
                  key={link.label}
                  href={link.href}
                  className="text-sm font-medium luxury-link-underline py-1 opacity-90 hover:opacity-100"
                  style={{ color: 'var(--color-cream)' }}
                >
                  {link.label}
                </a>
              ))}
            </nav>

            {/* Desktop Actions: Site Visit */}
            <div className="hidden md:flex items-center gap-3">
            </div>

            {/* Mobile Hamburger button */}
            <div className="flex items-center gap-2 xl:hidden">
              <button
                onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
                className="p-3 rounded-xl border transition-colors"
                style={{
                  backgroundColor: 'var(--color-midnight)',
                  borderColor: 'var(--color-steel)',
                  color: 'var(--color-cream)',
                }}
                aria-label="Toggle navigation menu"
              >
                {isMobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
              </button>
            </div>
          </div>
        </div>

        {/* Mobile Menu Slide-out */}
        {isMobileMenuOpen && (
          <div
            className="xl:hidden border-b px-4 py-6 shadow-2xl transition-all"
            style={{
              backgroundColor: 'var(--color-midnight)',
              borderColor: 'var(--color-navy)',
            }}
          >
            <nav className="flex flex-col space-y-3">
              {navLinks.map((link) => (
                <a
                  key={link.label}
                  href={link.href}
                  onClick={() => setIsMobileMenuOpen(false)}
                  className="px-4 py-3.5 rounded-xl text-base font-semibold transition-colors flex items-center justify-between"
                  style={{
                    backgroundColor: 'var(--color-navy)',
                    color: 'var(--color-cream)',
                  }}
                >
                  <span>{link.label}</span>
                </a>
              ))}

              <div
                className="pt-4 border-t space-y-3"
                style={{ borderColor: 'rgba(212, 196, 168, 0.2)' }}
              >
                <button
                  onClick={() => {
                    setIsMobileMenuOpen(false);
                    onOpenSiteVisit();
                  }}
                  className="btn-primary w-full flex items-center justify-center gap-2 py-4 px-4 rounded-xl font-bold text-sm"
                >
                  <Calendar className="w-4 h-4" />
                  <span>Book Free Site Visit</span>
                </button>
              </div>
            </nav>
          </div>
        )}
      </header>

      {/* Palette Selector Modal */}
      <PaletteSelectorModal
        isOpen={isPaletteModalOpen}
        onClose={() => setIsPaletteModalOpen(false)}
      />
    </>
  );
};
