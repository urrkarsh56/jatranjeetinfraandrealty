/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState } from 'react';
import { ThemeProvider } from './context/ThemeContext';
import { useScrollReveal } from './hooks/useScrollReveal';
import { Navbar } from './components/Navbar';
import { HeroSection } from './components/HeroSection';
import { AboutSection } from './components/AboutSection';
import { FounderSection } from './components/FounderSection';
import { CoFounderSection } from './components/CoFounderSection';
import { CoreTeamSection } from './components/CoreTeamSection';
import { ServicesSection } from './components/ServicesSection';
import { TestimonialsSlider } from './components/TestimonialsSlider';
import { ContactSection } from './components/ContactSection';
import { Footer } from './components/Footer';
import { PropertyModal } from './components/PropertyModal';
import { SiteVisitModal } from './components/SiteVisitModal';
import { FloatingActions } from './components/FloatingActions';
import { PaletteSelectorModal } from './components/PaletteSelector';
import { Property } from './types';

function AppContent() {
  useScrollReveal();

  const [selectedProperty, setSelectedProperty] = useState<Property | null>(null);
  const [isSiteVisitOpen, setIsSiteVisitOpen] = useState(false);
  const [isPaletteModalOpen, setIsPaletteModalOpen] = useState(false);
  const [siteVisitDefaultProp, setSiteVisitDefaultProp] = useState<string>('Emerald Meadows Plots');
  const [enquiryPropertyTitle, setEnquiryPropertyTitle] = useState<string>('');
  const [enquiryPropertyType, setEnquiryPropertyType] = useState<string>('plots');

  const handleOpenSiteVisit = (propertyName?: string) => {
    if (propertyName) {
      setSiteVisitDefaultProp(propertyName);
    }
    setIsSiteVisitOpen(true);
  };

  const handleEnquireProperty = (property: Property) => {
    setEnquiryPropertyTitle(property.title);
    setEnquiryPropertyType(property.category);
    
    // Smooth scroll to contact section
    const contactElem = document.getElementById('contact');
    if (contactElem) {
      contactElem.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const handleEnquireProject = (projectName: string) => {
    setEnquiryPropertyTitle(projectName);
    const contactElem = document.getElementById('contact');
    if (contactElem) {
      contactElem.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <div
      className="min-h-[100dvh] font-sans antialiased relative transition-colors duration-300 animate-page-fade"
      style={{
        backgroundColor: 'var(--color-cream)',
        color: 'var(--color-midnight)',
      }}
    >
      {/* Navigation Header */}
      <Navbar
        onOpenSiteVisit={() => handleOpenSiteVisit()}
      />

      {/* Main Sections */}
      <main>
        {/* Recreated Centered Professional Hero Section */}
        <HeroSection
          onOpenSiteVisit={() => handleOpenSiteVisit()}
        />

        {/* About Company & Verified Stats */}
        <AboutSection
          onOpenSiteVisit={() => handleOpenSiteVisit()}
        />

        {/* Founder Section */}
        <FounderSection />

        {/* Co-Founder Section */}
        <CoFounderSection />

        {/* Core Team Section */}
        <CoreTeamSection />

        {/* Services & Registry Guidance (Alternating Section) */}
        <ServicesSection
          onOpenSiteVisit={() => handleOpenSiteVisit()}
        />


        {/* Client Testimonials Slider */}
        <TestimonialsSlider />

        {/* Contact & Enquiry Form with Map */}
        <ContactSection
          key={enquiryPropertyTitle}
          initialPropertyTitle={enquiryPropertyTitle}
          initialPropertyType={enquiryPropertyType}
        />
      </main>

      {/* Footer */}
      <Footer />

      {/* Modals & Overlays */}
      <PropertyModal
        property={selectedProperty}
        onClose={() => setSelectedProperty(null)}
        onEnquire={handleEnquireProperty}
        onBookSiteVisit={() => {
          if (selectedProperty) {
            handleOpenSiteVisit(selectedProperty.title);
          } else {
            handleOpenSiteVisit();
          }
        }}
      />

      <SiteVisitModal
        isOpen={isSiteVisitOpen}
        onClose={() => setIsSiteVisitOpen(false)}
        defaultProperty={siteVisitDefaultProp}
      />

      <PaletteSelectorModal
        isOpen={isPaletteModalOpen}
        onClose={() => setIsPaletteModalOpen(false)}
      />

      {/* Floating Actions (WhatsApp, Mobile Sticky Call, Palette Trigger) */}
      <FloatingActions
        onOpenSiteVisit={() => handleOpenSiteVisit()}
        onOpenPalette={() => setIsPaletteModalOpen(true)}
      />
    </div>
  );
}

export default function App() {
  return (
    <ThemeProvider>
      <AppContent />
    </ThemeProvider>
  );
}
