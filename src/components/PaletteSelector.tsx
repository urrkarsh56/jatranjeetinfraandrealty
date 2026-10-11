import React from 'react';
import { Palette, Check, Sparkles, X } from 'lucide-react';
import { useTheme, PaletteId } from '../context/ThemeContext';

interface PaletteSelectorProps {
  isOpen: boolean;
  onClose: () => void;
}

export const PaletteSelectorModal: React.FC<PaletteSelectorProps> = ({ isOpen, onClose }) => {
  const { paletteId, setPaletteId, allPalettes } = useTheme();

  if (!isOpen) return null;

  return (
    <div
      className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 bg-black/80 backdrop-blur-md animate-fadeIn"
      onClick={onClose}
    >
      <div
        className="relative w-full max-w-xl rounded-3xl p-6 sm:p-8 text-left border shadow-2xl transition-all"
        style={{
          backgroundColor: 'var(--color-navy)',
          borderColor: 'var(--color-sand)',
          color: 'var(--color-cream)',
        }}
        onClick={(e) => e.stopPropagation()}
      >
        {/* Close Button */}
        <button
          onClick={onClose}
          className="absolute top-5 right-5 w-9 h-9 rounded-full flex items-center justify-center transition-colors border"
          style={{
            backgroundColor: 'var(--color-midnight)',
            borderColor: 'var(--color-sand)',
            color: 'var(--color-sand)',
          }}
          aria-label="Close palette selector"
        >
          <X className="w-4 h-4" />
        </button>

        {/* Header */}
        <div className="flex items-center gap-3 mb-2">
          <div
            className="w-10 h-10 rounded-2xl flex items-center justify-center border"
            style={{
              backgroundColor: 'var(--color-midnight)',
              borderColor: 'var(--color-sand)',
              color: 'var(--color-sand)',
            }}
          >
            <Palette className="w-5 h-5" />
          </div>
          <div>
            <h3 className="font-display text-xl sm:text-2xl font-bold" style={{ color: 'var(--color-cream)' }}>
              Brand Color Palette
            </h3>
            <p className="text-xs" style={{ color: 'var(--color-sand)' }}>
              Midnight Navy, Deep Navy, Steel Blue, Sage Green, Warm Sand & Cream
            </p>
          </div>
        </div>

        {/* Palettes List */}
        <div className="mt-6 space-y-3 max-h-[60vh] overflow-y-auto pr-1">
          {allPalettes.map((p) => {
            const isSelected = p.id === paletteId;
            return (
              <div
                key={p.id}
                className="w-full text-left p-4 rounded-2xl border transition-all flex items-center justify-between gap-4"
                style={{
                  backgroundColor: 'var(--color-midnight)',
                  borderColor: 'var(--color-sand)',
                }}
              >
                <div className="flex items-center gap-3.5 flex-1 min-w-0">
                  {/* Swatch Circle Row */}
                  <div className="flex -space-x-1.5 shrink-0">
                    <span
                      title="Midnight Navy #0D1B2A"
                      className="w-6 h-6 rounded-full border border-black/30 shadow-sm"
                      style={{ backgroundColor: '#0D1B2A' }}
                    />
                    <span
                      title="Deep Navy #1B263B"
                      className="w-6 h-6 rounded-full border border-black/30 shadow-sm"
                      style={{ backgroundColor: '#1B263B' }}
                    />
                    <span
                      title="Steel Blue #415A77"
                      className="w-6 h-6 rounded-full border border-black/30 shadow-sm"
                      style={{ backgroundColor: '#415A77' }}
                    />
                    <span
                      title="Sage Green #778D7A"
                      className="w-6 h-6 rounded-full border border-black/30 shadow-sm"
                      style={{ backgroundColor: '#778D7A' }}
                    />
                    <span
                      title="Warm Sand #D4C4A8"
                      className="w-6 h-6 rounded-full border border-black/30 shadow-sm"
                      style={{ backgroundColor: '#D4C4A8' }}
                    />
                    <span
                      title="Cream #F4F1DE"
                      className="w-6 h-6 rounded-full border border-black/30 shadow-sm"
                      style={{ backgroundColor: '#F4F1DE' }}
                    />
                  </div>

                  <div className="truncate">
                    <div className="font-display text-sm sm:text-base font-bold flex items-center gap-2">
                      <span style={{ color: 'var(--color-cream)' }}>
                        {p.name}
                      </span>
                      <span
                        className="text-[10px] font-mono uppercase px-2 py-0.5 rounded-full font-bold border"
                        style={{
                          backgroundColor: 'rgba(119, 141, 122, 0.25)',
                          borderColor: 'var(--color-sage)',
                          color: 'var(--color-cream)',
                        }}
                      >
                        Active
                      </span>
                    </div>
                    <div className="text-xs truncate mt-0.5" style={{ color: 'var(--color-sand)' }}>
                      {p.subtitle}
                    </div>
                  </div>
                </div>

                <div className="shrink-0 flex items-center">
                  <div
                    className="w-7 h-7 rounded-full flex items-center justify-center font-bold"
                    style={{
                      backgroundColor: 'var(--color-sage)',
                      color: 'var(--color-cream)',
                    }}
                  >
                    <Check className="w-4 h-4" />
                  </div>
                </div>
              </div>
            );
          })}
        </div>

        {/* Footer info */}
        <div
          className="mt-6 pt-4 border-t flex items-center justify-between text-xs"
          style={{
            borderColor: 'rgba(212, 196, 168, 0.2)',
            color: 'var(--color-sand)',
          }}
        >
          <div className="flex items-center gap-1.5">
            <Sparkles className="w-3.5 h-3.5" style={{ color: 'var(--color-sand)' }} />
            <span>Theme active across all components</span>
          </div>
          <button
            onClick={onClose}
            className="btn-primary px-5 py-2 rounded-full font-bold text-xs transition-opacity hover:opacity-90"
          >
            Done
          </button>
        </div>
      </div>
    </div>
  );
};
