export type PropertyCategory = 'all' | 'plots' | 'flats' | 'villas' | 'commercial';

export interface Property {
  id: string;
  title: string;
  category: 'plots' | 'flats' | 'villas' | 'commercial';
  price: string;
  priceRaw: number; // in Lakhs for filtering
  size: string;
  location: string;
  city: string;
  status: 'Ready to Register' | 'Under Construction' | 'Newly Launched' | 'Ready to Move';
  description: string;
  image: string;
  additionalImages?: string[];
  reraNo: string;
  features: string[];
  specs: {
    label: string;
    value: string;
  }[];
  isFeatured?: boolean;
}

export interface ServiceItem {
  id: string;
  number: string;
  title: string;
  description: string;
  highlights: string[];
  icon: string;
}

export interface ProjectTimelineItem {
  id: string;
  title: string;
  type: string;
  location: string;
  status: 'Ready for Registry' | 'Under Development' | 'Pre-Launch' | 'Handover in Progress';
  progress: number;
  expectedDate: string;
  totalUnits: string;
  image: string;
  reraNo: string;
}

export interface Testimonial {
  id: string;
  name: string;
  role: string;
  propertyPurchased: string;
  quote: string;
  rating: number;
  location: string;
}
