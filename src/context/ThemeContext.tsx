import React, { createContext, useContext, useState, useEffect } from 'react';

/**
 * COLOR PALETTE
 * - Midnight Navy: #0D1B2A
 * - Deep Navy:     #1B263B
 * - Steel Blue:    #415A77
 * - Sage Green:    #778D7A
 * - Warm Sand:     #D4C4A8
 * - Cream:         #F4F1DE
 */

export type PaletteId = 'architectural';

export interface PaletteConfig {
  id: PaletteId;
  name: string;
  subtitle: string;
  primaryColor: string;
  secondaryColor: string;
  surfaceColor: string;
  baseColor: string;
  variables: Record<string, string>;
}

export const PALETTES: Record<PaletteId, PaletteConfig> = {
  architectural: {
    id: 'architectural',
    name: 'Architectural Palette',
    subtitle: 'Midnight Navy, Deep Navy, Steel Blue, Sage Green, Warm Sand & Cream',
    primaryColor: '#0D1B2A',
    secondaryColor: '#415A77',
    surfaceColor: '#1B263B',
    baseColor: '#F4F1DE',
    variables: {
      '--color-midnight': '#0D1B2A',
      '--color-navy': '#1B263B',
      '--color-steel': '#415A77',
      '--color-sage': '#778D7A',
      '--color-sand': '#D4C4A8',
      '--color-cream': '#F4F1DE',

      '--theme-bg-base': 'var(--color-cream)',
      '--theme-bg-surface': 'var(--color-cream)',
      '--theme-bg-card': 'var(--color-navy)',
      '--theme-bg-elevated': 'var(--color-navy)',
      '--theme-bg-alt': 'var(--color-cream)',
      '--theme-text-alt': 'var(--color-cream)',
      '--theme-text-main': 'var(--color-midnight)',
      '--theme-text-muted': 'var(--color-steel)',
      '--theme-text-dim': 'var(--color-steel)',
      '--theme-text-headline': 'var(--color-midnight)',
      '--theme-accent-gold': 'var(--color-sand)',
      '--theme-accent-border': 'var(--color-sand)',
      '--theme-border-subtle': 'rgba(65, 90, 119, 0.25)',
      '--theme-hero-gradient': 'var(--color-midnight)',
      '--theme-pill-gradient': 'var(--color-midnight)',
      '--theme-btn-gradient': 'var(--color-steel)',
      '--theme-btn-text': 'var(--color-cream)',
      '--theme-shadow-card': '0 4px 20px -2px rgba(13, 27, 42, 0.08)',
      '--theme-shadow-btn': '0 4px 14px -2px rgba(13, 27, 42, 0.16)',
      '--theme-shadow-glow': 'none',

      /* Backwards-compatibility aliases for legacy classes */
      '--blue-900': 'var(--color-midnight)',
      '--blue-800': 'var(--color-navy)',
      '--blue-700': 'var(--color-steel)',
      '--blue-600': 'var(--color-sage)',
      '--blue-400': 'var(--color-sand)',
      '--blue-200': 'var(--color-sand)',
      '--blue-50': 'var(--color-cream)',
    },
  },
};

interface ThemeContextType {
  palette: PaletteConfig;
  paletteId: PaletteId;
  setPaletteId: (id: PaletteId) => void;
  allPalettes: PaletteConfig[];
}

const ThemeContext = createContext<ThemeContextType>({
  palette: PALETTES.architectural,
  paletteId: 'architectural',
  setPaletteId: () => {},
  allPalettes: Object.values(PALETTES),
});

export const ThemeProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [paletteId, setPaletteIdState] = useState<PaletteId>('architectural');

  const currentPalette = PALETTES.architectural;

  const setPaletteId = (id: PaletteId) => {
    setPaletteIdState('architectural');
  };

  useEffect(() => {
    const root = document.documentElement;
    root.setAttribute('data-palette', 'architectural');

    // Apply CSS variables to root
    Object.entries(currentPalette.variables).forEach(([key, value]) => {
      root.style.setProperty(key, value);
    });

    document.body.style.backgroundColor = 'var(--color-cream)';
    document.body.style.color = 'var(--color-midnight)';
  }, [paletteId, currentPalette]);

  return (
    <ThemeContext.Provider
      value={{
        palette: currentPalette,
        paletteId,
        setPaletteId,
        allPalettes: Object.values(PALETTES),
      }}
    >
      {children}
    </ThemeContext.Provider>
  );
};

export const useTheme = () => useContext(ThemeContext);
