import { Property, ServiceItem, ProjectTimelineItem, Testimonial } from '../types';

/**
 * Primary photographic asset across the application:
 * The Takshit Omkarlok entrance gate photo.
 */
export const TAKSHIT_OMKARLOK_GATE_IMAGE = '/images/takshit-omkarlok-gate.jpg';
export const TAKSHIT_OMKARLOK_GATE_ALT = 'Takshit Omkarlok entrance gate';

export const HERO_PROPERTIES = [
  {
    id: 'hero-1',
    category: 'plots',
    categoryLabel: 'Residential Plotted Township',
    title: 'Emerald Meadows Phase 2',
    tagline: '1,200 to 2,400 sq ft freehold plots with 40-foot bitumen roads and immediate sub-registrar execution',
    price: '₹24.50 Lakh',
    priceSubtext: 'All-inclusive base price · ₹2,041/sq ft',
    size: '1,200 sq ft (30 × 40 ft)',
    location: 'Sector 14, Outer Ring Road Junction',
    city: '[City], State',
    image: TAKSHIT_OMKARLOK_GATE_IMAGE,
    reraNo: 'UPRERA/PRJ/2026/8941',
    khasraNo: 'Khasra 412/1 & 412/2',
    highlights: ['30-year clear title search on record', 'SBI & HDFC loan sanction available', '40 ft bitumen road with storm drains'],
    dimensions: '30 ft front × 40 ft depth',
    connectivity: '2.4 km from Outer Ring Road interchange'
  },
  {
    id: 'hero-2',
    category: 'villas',
    categoryLabel: 'Independent Duplex Villa',
    title: 'The Ranjeet Crest Residence',
    tagline: '4 BHK independent duplex on a 2,400 sq ft plot with private lawn and covered 2-car porch',
    price: '₹1.45 Crore',
    priceSubtext: 'Ready for possession · Zero GST on ready units',
    size: '3,150 sq ft built-up area',
    location: 'Palm Avenue, Sector 8 Corridor',
    city: '[City], State',
    image: TAKSHIT_OMKARLOK_GATE_IMAGE,
    reraNo: 'UPRERA/PRJ/2026/9022',
    khasraNo: 'Khasra 188/3',
    highlights: ['Corner plot facing east', 'Full structural RCC grade-M25 certificate', '18 minutes from airport via elevated corridor'],
    dimensions: '40 ft front × 60 ft depth',
    connectivity: '350 meters from Palm Avenue metro station'
  },
  {
    id: 'hero-3',
    category: 'commercial',
    categoryLabel: 'High-Street Retail Showrooms',
    title: 'Jay Ranjeet Horizon Central',
    tagline: '850 sq ft double-height ground-floor showroom facing the 100-foot commercial expressway',
    price: '₹78.20 Lakh',
    priceSubtext: 'Pre-leased inquiry options yielding 8.2% annual rent',
    size: '850 sq ft carpet area',
    location: 'Main Commercial Arterial Boulevard',
    city: '[City], State',
    image: TAKSHIT_OMKARLOK_GATE_IMAGE,
    reraNo: 'UPRERA/PRJ/2026/7710',
    khasraNo: 'Plot Commercial C-4',
    highlights: ['18-foot clear ceiling height', 'Two dedicated basement parking slots', 'Immediate registry in registrar book 1'],
    dimensions: '25 ft glass frontage',
    connectivity: 'Directly on 100 ft arterial highway'
  }
];

export const ALL_PROPERTIES: Property[] = [
  {
    id: 'prop-1',
    title: 'Emerald Meadows Phase 2 · Plot #48',
    category: 'plots',
    price: '₹24.50 Lakh',
    priceRaw: 24.5,
    size: '1,200 sq ft (30 × 40 ft)',
    location: 'Sector 14, Outer Ring Road Junction',
    city: '[City]',
    status: 'Ready to Register',
    description: 'Demarcated residential plot with permanent concrete boundary markers. Features a 40-foot wide asphalt road, underground power lines, dedicated transformer substation, and overhead municipal water connection.',
    image: TAKSHIT_OMKARLOK_GATE_IMAGE,
    reraNo: 'UPRERA/PRJ/2026/8941',
    features: ['Instant mutation in municipal records', '30-year non-encumbrance search completed', 'Park-facing with east orientation', 'Pre-approved loan by SBI & HDFC'],
    specs: [
      { label: 'Plot Dimensions', value: '30 ft × 40 ft' },
      { label: 'Road Width', value: '40 ft Bitumen' },
      { label: 'Facing', value: 'East Facing' },
      { label: 'Ownership', value: 'Freehold Title' }
    ],
    isFeatured: true
  },
  {
    id: 'prop-2',
    title: 'The Ranjeet Crest Villa #12',
    category: 'villas',
    price: '₹1.45 Crore',
    priceRaw: 145,
    size: '3,150 sq ft built-up area',
    location: 'Palm Avenue, Sector 8 Corridor',
    city: '[City]',
    status: 'Ready to Move',
    description: 'Architect-designed 4 BHK duplex constructed on a 2,400 sq ft freehold plot. Includes a double-height living room, 4 attached bathrooms with branded brass fixtures, private 600 sq ft rear lawn, and rooftop solar water setup.',
    image: TAKSHIT_OMKARLOK_GATE_IMAGE,
    reraNo: 'UPRERA/PRJ/2026/9022',
    features: ['4 Bedrooms with en-suite baths', 'Private rear garden & lawn', 'Covered parking for 2 SUVs', 'Occupancy certificate received'],
    specs: [
      { label: 'Plot Area', value: '2,400 sq ft' },
      { label: 'Super Built-up', value: '3,150 sq ft' },
      { label: 'Floors', value: 'G + 1 Duplex' },
      { label: 'Possession', value: 'Immediate' }
    ],
    isFeatured: true
  },
  {
    id: 'prop-3',
    title: 'Horizon Central · Unit G-04',
    category: 'commercial',
    price: '₹78.20 Lakh',
    priceRaw: 78.2,
    size: '850 sq ft carpet',
    location: 'Main Commercial Arterial Boulevard',
    city: '[City]',
    status: 'Under Construction',
    description: 'Ground-floor commercial showroom with 25 feet of full-glass frontage on the 100-foot main thoroughfare. Positioned next to the township entrance gate with steady residential foot traffic.',
    image: TAKSHIT_OMKARLOK_GATE_IMAGE,
    reraNo: 'UPRERA/PRJ/2026/7710',
    features: ['18 ft ceiling height allows mezzanine', '2 dedicated basement slots', '100% DG power backup', 'Dual side fire escape exits'],
    specs: [
      { label: 'Ceiling Height', value: '18 ft Clear' },
      { label: 'Frontage', value: '25 ft Toughened Glass' },
      { label: 'Floor', value: 'Ground Floor Corner' },
      { label: 'Handover', value: 'November 2026' }
    ],
    isFeatured: true
  },
  {
    id: 'prop-4',
    title: 'Serene Meadows · Plot #104',
    category: 'plots',
    price: '₹19.20 Lakh',
    priceRaw: 19.2,
    size: '1,000 sq ft (25 × 40 ft)',
    location: 'Kisan Path Bypass, 800m from Highway',
    city: '[City]',
    status: 'Ready to Register',
    description: 'Compact rectangular plot within a fully gated society. All interior roads are 30 ft interlocking pavers with solar street lights and automated boom barrier access.',
    image: TAKSHIT_OMKARLOK_GATE_IMAGE,
    reraNo: 'UPRERA/PRJ/2026/8123',
    features: ['Approved layout plan', 'Sub-registrar registry ready', 'Direct sewer line hookup', 'Borewell water tested potability'],
    specs: [
      { label: 'Dimensions', value: '25 ft × 40 ft' },
      { label: 'Road Width', value: '30 ft Interlocking' },
      { label: 'Facing', value: 'North-East Facing' },
      { label: 'Loan Approval', value: 'SBI, ICICI Bank' }
    ]
  },
  {
    id: 'prop-5',
    title: 'Skyline Court · Flat 6B',
    category: 'flats',
    price: '₹62.50 Lakh',
    priceRaw: 62.5,
    size: '1,450 sq ft super built-up',
    location: 'Golf Course Extension Corridor',
    city: '[City]',
    status: 'Ready to Move',
    description: '3 BHK flat on the 6th floor with uninterrupted views of the green belt. Features cross-ventilation, wooden flooring in master bedroom, and two wide balconies.',
    image: TAKSHIT_OMKARLOK_GATE_IMAGE,
    reraNo: 'UPRERA/PRJ/2026/6654',
    features: ['3 Bed, 3 Bath, 2 Balconies', 'Vastu-compliant entrance', '1 covered basement car park', 'Clubhouse & lap pool access'],
    specs: [
      { label: 'Carpet Area', value: '1,120 sq ft' },
      { label: 'Floor', value: '6th of 14 Floors' },
      { label: 'Maintenance', value: '₹2.80 / sq ft' },
      { label: 'Occupancy', value: 'OC Received' }
    ]
  },
  {
    id: 'prop-6',
    title: 'Greenwood Bungalow #07',
    category: 'villas',
    price: '₹1.18 Crore',
    priceRaw: 118,
    size: '2,600 sq ft built-up area',
    location: 'Eco City Green Belt, Sector 21',
    city: '[City]',
    status: 'Newly Launched',
    description: '3 BHK independent villa built with fly-ash acoustic bricks, underground rainwater harvesting pit, and terrace pergola for family evenings.',
    image: TAKSHIT_OMKARLOK_GATE_IMAGE,
    reraNo: 'UPRERA/PRJ/2026/9431',
    features: ['Plot size 1,800 sq ft', '15 ft high ceiling living room', 'Solar panel wiring complete', 'Possession by Dec 2026'],
    specs: [
      { label: 'Plot Area', value: '1,800 sq ft' },
      { label: 'Built-up', value: '2,600 sq ft' },
      { label: 'Bedrooms', value: '3 BHK + Study' },
      { label: 'Facing', value: 'North Facing' }
    ]
  }
];

export const COMPANY_FACTS = [
  { value: '16 Years', label: 'In Local Land Development', detail: 'Serving families across the regional corridor since 2010' },
  { value: '48 Projects', label: 'Delivered Without Title Disputes', detail: 'Zero pending court litigation across all registered parcels' },
  { value: '3,400+ Families', label: 'With Registered Mutation Records', detail: 'Every buyer holds official Sub-Registrar Book-1 deed' },
  { value: '2.4M sq ft', label: 'Land Developed with Infrastructure', detail: 'Including 40-50 ft bitumen roads, drainage, and power grids' }
];

export const LEGAL_VERIFICATION_CHECKLIST = [
  {
    title: '30-Year Title Search & Non-Encumbrance',
    description: 'Certified government search report verifying unbroken ownership from 1996 to present day, guaranteeing no mortgage liens or third-party claims.'
  },
  {
    title: 'Section 143 Non-Agricultural Conversion',
    description: 'Every residential plot is legally converted under revenue land laws for residential construction, with all government conversion taxes paid in full.'
  },
  {
    title: 'RERA & Town Planning Sanctions',
    description: 'Layout maps are approved by the statutory development authority with designated green parks, road setbacks, and transformer reserves.'
  },
  {
    title: 'Spot Sub-Registrar Execution',
    description: 'You sign and execute your sale deed directly at the tehsil sub-registrar office with biometric authentication and immediate receipt of Book 1 registration.'
  },
  {
    title: 'Surveyor Boundary Demarcation',
    description: 'Before handing over keys, our certified revenue patwari and surveyor install four permanent concrete boundary pillars marked with your plot number.'
  }
];

export const SERVICES: ServiceItem[] = [
  {
    id: 'srv-plotting',
    number: '01',
    title: 'Land Acquisition & Plotted Townships',
    description: 'We purchase large freehold land parcels, complete revenue conversions, lay 40–50 ft bitumen roads, install drainage lines, and deliver demarcated plots ready for home construction.',
    highlights: ['30-year search report provided with every plot', 'Concrete corner pillars with engraved plot numbers', '40 ft and 50 ft bitumen roads with storm gutters'],
    icon: 'PlotBoundary'
  },
  {
    id: 'srv-registry',
    number: '02',
    title: 'Legal Title Vetting & Sub-Registrar Registry',
    description: 'Our in-house advocates handle tehsil verification, revenue mutation, stamp duty calculations, and personally accompany you to the sub-registrar office for execution.',
    highlights: ['Zero involvement of unauthorized middlemen', 'Certified copies of Khasra and Khatauni provided', 'Assistance with municipal mutation within 45 days'],
    icon: 'TitleDeed'
  },
  {
    id: 'srv-construction',
    number: '03',
    title: 'Turnkey Villa Design & Construction',
    description: 'If you already own land or purchase our plot, our engineering crew handles structural blueprints, soil bearing tests, municipal approvals, and turnkey construction.',
    highlights: ['Structural grade-M25 concrete testing certificates', 'Milestone-linked payment schedules verified by site engineer', 'Strict 10-month delivery commitment with penalty clauses'],
    icon: 'FloorPlan'
  },
  {
    id: 'srv-commercial',
    number: '04',
    title: 'Commercial Retail & Highway Showrooms',
    description: 'We develop high-visibility commercial plots, ground-floor retail shops, and corporate suites on 80–100 ft arterial roadways with heavy residential catchment.',
    highlights: ['Wide parking ratios for customer vehicles', 'Clear 18 ft slab-to-slab double height clearances', 'High rental yield locations close to metro stations'],
    icon: 'RoadCrossSection'
  }
];

export const PROJECTS_TIMELINE: ProjectTimelineItem[] = [
  {
    id: 'proj-emerald',
    title: 'Emerald Meadows Phase 1 & 2',
    type: 'Plotted Township · 150 Residential Plots',
    location: 'Sector 14, Outer Ring Road Junction',
    status: 'Ready for Registry',
    progress: 95,
    expectedDate: 'Immediate Registry (48-hr execution)',
    totalUnits: '150 Plots (132 Sold)',
    image: TAKSHIT_OMKARLOK_GATE_IMAGE,
    reraNo: 'UPRERA/PRJ/2026/8941'
  },
  {
    id: 'proj-crest',
    title: 'The Ranjeet Crest Villas',
    type: 'Gated Villa Enclave · 36 Duplex Residences',
    location: 'Palm Avenue Corridor, Sector 8',
    status: 'Handover in Progress',
    progress: 88,
    expectedDate: 'Handover underway (Final touches)',
    totalUnits: '36 Units (31 Handed over)',
    image: TAKSHIT_OMKARLOK_GATE_IMAGE,
    reraNo: 'UPRERA/PRJ/2026/9022'
  },
  {
    id: 'proj-horizon',
    title: 'Horizon Central Retail Towers',
    type: 'Commercial Complex · 64 Retail + 48 Offices',
    location: 'Main Commercial Arterial Boulevard',
    status: 'Under Development',
    progress: 62,
    expectedDate: 'Structural slab complete · Handover Q1 2027',
    totalUnits: '112 Units (68 Booked)',
    image: TAKSHIT_OMKARLOK_GATE_IMAGE,
    reraNo: 'UPRERA/PRJ/2026/7710'
  }
];

export const TESTIMONIALS: Testimonial[] = [
  {
    id: 'test-1',
    name: 'Dr. Rajesh K. Sharma',
    role: 'Chief Medical Officer, District Civil Hospital',
    propertyPurchased: '2,400 sq ft Corner Plot (Plot #14), Emerald Meadows',
    quote: 'I purchased a 2,400 sq ft plot for my retirement bungalow. Sri Ranjeet personally handed over the 30-year non-encumbrance certificate and the registered mutation papers within three weeks of our visit to the sub-registrar.',
    rating: 5,
    location: '[City]'
  },
  {
    id: 'test-2',
    name: 'Sunita & Amit Verma',
    role: 'Senior Project Manager & High School Principal',
    propertyPurchased: '4 BHK Duplex (Villa #12), The Ranjeet Crest',
    quote: 'We inspected the structural steel test reports and concrete cube tests before paying the second milestone. The construction quality is genuine, and the 40 ft township road gives our children a safe place to ride their bicycles.',
    rating: 5,
    location: '[City]'
  },
  {
    id: 'test-3',
    name: 'Vikramaditya Singhania',
    role: 'Managing Partner, Singhania Logistics',
    propertyPurchased: '850 sq ft Ground Showroom, Horizon Central',
    quote: 'The 25-foot glass frontage right on the 100-foot expressway was the deciding factor. We leased the space to an optical clinic within 40 days of possession at an annual return of 8.4%. Clear commercial title with no municipal objections.',
    rating: 5,
    location: '[City]'
  }
];

export const COMPANY_DETAILS = {
  name: 'Jay Ranjeet Infra and Realty',
  hindiTagline: 'विश्वास और स्पष्ट विलेख · आपकी सुरक्षित भूमि, आपका स्थायी भविष्य',
  heroHeadline: 'Find verified land. Build with permanent title clarity.',
  heroSubtext: 'Directly registered freehold plots, standalone luxury duplex villas, and expressway commercial spaces with verified 30-year title reports and immediate sub-registrar execution.',
  phone: '+91 72099 99973',
  phoneAlt: '+91 72099 99973',
  email: 'contact@jayranjeetinfraandrealty.com',
  address: 'Jay Ranjeet Corporate Tower, Plot 18, Commercial Ring Road, [City] - 226010',
  city: '[City], State',
  reraNo: 'UPRERA/PRJ/2026/8941',
  subRegistrarJurisdiction: 'Tehsil Sub-Registrar Office, District Headquarters',
  workingHours: 'Mon - Sun: 9:00 AM - 7:30 PM (Site inspection vehicles available 7 days a week)'
};
