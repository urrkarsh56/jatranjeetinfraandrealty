import React from 'react';

interface IconProps {
  className?: string;
  style?: React.CSSProperties;
}

export const RealEstateIcons = {
  // Cadastral plot boundary with corner pillars
  PlotBoundary: ({ className = "w-5 h-5", style }: IconProps) => (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" className={className} style={style}>
      <rect x="3" y="3" width="18" height="18" rx="2" strokeDasharray="3 3" />
      <circle cx="3" cy="3" r="2" fill="currentColor" />
      <circle cx="21" cy="3" r="2" fill="currentColor" />
      <circle cx="21" cy="21" r="2" fill="currentColor" />
      <circle cx="3" cy="21" r="2" fill="currentColor" />
      <path d="M9 3v18M3 12h18" strokeWidth="1" strokeOpacity="0.4" />
      <path d="M12 7l3 5-3 5" strokeWidth="1.2" />
    </svg>
  ),

  // Sub-Registrar stamp / Legal title deed seal
  TitleDeed: ({ className = "w-5 h-5", style }: IconProps) => (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" className={className} style={style}>
      <path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z" />
      <polyline points="14 2 14 8 20 8" />
      <path d="M8 13h8M8 17h5" strokeWidth="1.2" />
      <circle cx="16" cy="17" r="2.5" stroke="currentColor" strokeWidth="1.2" />
      <path d="M16 19.5v2.5" strokeWidth="1.2" />
    </svg>
  ),

  // Road alignment & 40ft blacktop cross-section
  RoadCrossSection: ({ className = "w-5 h-5", style }: IconProps) => (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" className={className} style={style}>
      <path d="M4 21L9 3M20 21L15 3" />
      <path d="M12 4v3M12 11v3M12 18v3" strokeDasharray="2 2" strokeWidth="1.75" />
      <line x1="2" y1="21" x2="22" y2="21" strokeWidth="1.5" />
    </svg>
  ),

  // Surveyor's compass / Vastu directional marker
  SurveyCompass: ({ className = "w-5 h-5", style }: IconProps) => (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" className={className} style={style}>
      <circle cx="12" cy="12" r="9" />
      <polygon points="12,4 15,12 12,10 9,12" fill="currentColor" fillOpacity="0.4" stroke="currentColor" />
      <polygon points="12,20 15,12 12,14 9,12" fill="currentColor" fillOpacity="0.8" stroke="currentColor" />
      <circle cx="12" cy="12" r="1.5" fill="currentColor" />
    </svg>
  ),

  // Architectural floor plan layout lines
  FloorPlan: ({ className = "w-5 h-5", style }: IconProps) => (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" className={className} style={style}>
      <rect x="3" y="3" width="18" height="18" strokeWidth="1.5" />
      <path d="M3 10h8v11M11 15h10M17 3v7" strokeWidth="1.5" />
      <path d="M7 10a4 4 0 0 1 4-4" strokeDasharray="2 2" strokeWidth="1" />
    </svg>
  ),

  // Water table / underground utility line
  UtilitiesLive: ({ className = "w-5 h-5", style }: IconProps) => (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" className={className} style={style}>
      <path d="M12 2v7M12 15v7M5 12h14" />
      <circle cx="12" cy="12" r="3" strokeWidth="1.5" />
      <path d="M4 6l3 3M20 6l-3 3M4 18l3-3M20 18l-3 3" strokeWidth="1" strokeOpacity="0.5" />
    </svg>
  ),

  // Perimeter fencing & boundary wall
  PerimeterFencing: ({ className = "w-5 h-5", style }: IconProps) => (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" className={className} style={style}>
      <path d="M4 4v16M10 4v16M16 4v16M20 4v16" strokeWidth="1.5" />
      <path d="M2 8h20M2 16h20" strokeWidth="1.2" />
      <path d="M4 4l3-2 3 2M10 4l3-2 3 2M16 4l2-2 2 2" strokeWidth="1.2" />
    </svg>
  ),

  // Checkmark in circle
  VerifiedStamp: ({ className = "w-5 h-5", style }: IconProps) => (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" className={className} style={style}>
      <circle cx="12" cy="12" r="9" />
      <path d="M8.5 12.5l2.5 2.5 5-5" strokeWidth="1.75" />
    </svg>
  )
};
