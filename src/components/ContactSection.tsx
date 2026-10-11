import React, { useState } from 'react';
import { CheckCircle2, AlertCircle } from 'lucide-react';

interface ContactSectionProps {
  initialPropertyTitle?: string;
  initialPropertyType?: string;
}

const CATEGORY_NAMES: Record<string, string> = {
  plots: 'Plotted Residential Township',
  villas: 'Independent Duplex Villa',
  commercial: 'Commercial High-Street Showroom',
  flats: 'Residential Flat',
};

export const ContactSection: React.FC<ContactSectionProps> = ({
  initialPropertyTitle = '',
  initialPropertyType = 'plots',
}) => {
  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    email: '',
    propertyType: initialPropertyType || 'plots',
    plotSizePreference: '1,200 sq ft (30 × 40 ft)',
    timeframe: 'Immediate Registry (within 30 days)',
    message: initialPropertyTitle ? `I am requesting the survey map, rate card, and legal search report for ${initialPropertyTitle}.` : '',
  });

  const [isSubmitting, setIsSubmitting] = useState(false);
  const [errorMessage, setErrorMessage] = useState('');
  const [successMessage, setSuccessMessage] = useState('');
  const [lastWhatsAppUrl, setLastWhatsAppUrl] = useState('');

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setErrorMessage('');
    setSuccessMessage('');

    const trimmedName = formData.name.trim();
    const trimmedPhone = formData.phone.trim();

    // 1. Validate Full Name
    if (!trimmedName) {
      setErrorMessage('Please enter your full name.');
      return;
    }

    // 2. Validate Direct Mobile Number
    if (!trimmedPhone) {
      setErrorMessage('Please enter your direct mobile number.');
      return;
    }

    // Must be a valid 10-digit Indian number (allowing +91, 91 prefix, spaces, dashes)
    const cleanDigits = trimmedPhone.replace(/[\s\-\(\)\+]/g, '');
    let indianDigits = cleanDigits;

    if (cleanDigits.startsWith('91') && cleanDigits.length === 12) {
      indianDigits = cleanDigits.slice(2);
    } else if (cleanDigits.startsWith('0') && cleanDigits.length === 11) {
      indianDigits = cleanDigits.slice(1);
    }

    const isValidIndianMobile = /^[6-9]\d{9}$/.test(indianDigits);
    if (!isValidIndianMobile) {
      setErrorMessage('Please enter a valid 10-digit Indian mobile number (e.g. +91 72099 99973).');
      return;
    }

    setIsSubmitting(true);

    // 3. Collect field values and build message
    const categoryDisplay = CATEGORY_NAMES[formData.propertyType] || formData.propertyType;
    const requirementsDisplay = formData.message.trim() ? formData.message.trim() : 'Not specified';

    const message = `New Enquiry - Jay Ranjeet Infra and Realty

Name: ${trimmedName}
Mobile: ${trimmedPhone}
Parcel Category: ${categoryDisplay}
Plot Size: ${formData.plotSizePreference}
Timeframe: ${formData.timeframe}
Requirements: ${requirementsDisplay}`;

    // 4. Encode message and construct WhatsApp URL
    const targetUrl = `https://wa.me/917209999973?text=${encodeURIComponent(message)}`;
    setLastWhatsAppUrl(targetUrl);

    // 5. Send email in background using FormSubmit
    fetch('https://formsubmit.co/ajax/jairanjeetinfraandrealty@gmail.com', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        'Accept': 'application/json',
      },
      body: JSON.stringify({
        subject: 'New Enquiry from Website',
        message: message.replace(/\n/g, '<br>'),
      }),
    }).catch(console.error);

    // 6. Open WhatsApp in new tab; fallback to location.href if popup blocked
    let popup: Window | null = null;
    try {
      popup = window.open(targetUrl, '_blank', 'noopener,noreferrer');
    } catch {
      popup = null;
    }

    if (!popup || popup.closed || typeof popup.closed === 'undefined') {
      window.location.href = targetUrl;
    }

    // 7. Show success message and reset the form
    setSuccessMessage('Opening WhatsApp... your enquiry is ready to send');
    setFormData({
      name: '',
      phone: '',
      email: '',
      propertyType: 'plots',
      plotSizePreference: '1,200 sq ft (30 × 40 ft)',
      timeframe: 'Immediate Registry (within 30 days)',
      message: '',
    });

    setIsSubmitting(false);
  };

  return (
    <section
      id="contact"
      className="py-20 lg:py-28 relative transition-colors duration-300 border-t section-alt"
      style={{
        backgroundColor: 'var(--color-cream)',
        borderColor: 'rgba(65, 90, 119, 0.2)',
        color: 'var(--color-midnight)',
      }}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="max-w-3xl mb-16 space-y-3 text-left reveal-item">
          <span
            className="text-xs font-mono tracking-wider uppercase block"
            style={{ color: 'var(--color-steel)' }}
          >
            Direct Office Consultation & Inquiries
          </span>
          <h2
            className="font-display text-3xl sm:text-4xl lg:text-5xl font-bold tracking-tight"
            style={{ color: 'var(--color-midnight)' }}
          >
            Consult Our In-House Property Desk
          </h2>
          <p
            className="text-sm sm:text-base leading-relaxed"
            style={{ color: 'var(--color-midnight)', opacity: 0.85 }}
          >
            Inquire about specific plot numbers, calculate stamp duty and registration expenses, or schedule an in-person deed inspection at our corporate office.
          </p>
          <div className="pt-2 flex items-center gap-2">
            <span style={{ color: 'var(--color-steel)' }}>📧</span>
            <a 
              href="mailto:jairanjeetinfraandrealty@gmail.com" 
              className="text-sm font-semibold luxury-link-underline" 
              style={{ color: 'var(--color-midnight)' }}
            >
              jairanjeetinfraandrealty@gmail.com
            </a>
          </div>
          <div className="pt-2 flex items-center gap-2">
            <span style={{ color: 'var(--color-steel)' }}>📸</span>
            <a 
              href="https://www.instagram.com/jay_ranjeet_infra_and_realty/" 
              target="_blank" 
              rel="noopener noreferrer"
              aria-label="Follow Jay Ranjeet Infra and Realty on Instagram"
              className="text-sm font-semibold luxury-link-underline" 
              style={{ color: 'var(--color-midnight)' }}
            >
              Instagram: @jay_ranjeet_infra_and_realty
            </a>
          </div>
          <div className="pt-2 flex items-center gap-2">
            <span style={{ color: 'var(--color-steel)' }}>📍</span>
            <a 
              href="https://www.google.com/maps/search/?api=1&query=The+Black+Monster+Gym+Indore+Madhya+Pradesh" 
              target="_blank" 
              rel="noopener noreferrer"
              aria-label="View Jay Ranjeet Infra and Realty office location on Google Maps"
              className="text-sm font-semibold luxury-link-underline break-words" 
              style={{ color: 'var(--color-midnight)', minHeight: '44px', display: 'flex', alignItems: 'center' }}
            >
              The Black Monster Gym, Indore, Madhya Pradesh
            </a>
          </div>

          {/* Map Embed */}
          <div className="mt-8 rounded-3xl overflow-hidden border" style={{ borderColor: 'var(--color-sand)' }}>
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3680.123456789!2d75.8577!3d22.7196!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3962fc...%3A0x...!2sThe+Black+Monster+Gym!5e0!3m2!1sen!2sin!4v1600000000000!5m2!1sen!2sin"
              width="100%"
              height="300"
              style={{ border: 0 }}
              allowFullScreen
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
            ></iframe>
          </div>
        </div>

        {/* Inquiry Form */}
        <div className="max-w-3xl text-left">
          {/* Detailed Land Inquiry Form Card */}
          <div
            className="rounded-3xl p-6 sm:p-8 lg:p-10 border shadow-theme-card reveal-item delay-100 luxury-card"
            style={{
              backgroundColor: 'var(--color-navy)',
              borderColor: 'var(--color-sand)',
            }}
          >
            <div className="mb-6">
              <h3
                className="font-display text-xl sm:text-2xl font-bold"
                style={{ color: 'var(--color-cream)' }}
              >
                Request Official Land Dossier
              </h3>
              <p className="text-xs sm:text-sm mt-1" style={{ color: 'var(--color-sand)' }}>
                Receive certified survey dimensions, sanctioned layout map, and government rate card within 30 minutes.
              </p>
            </div>

            <form onSubmit={handleSubmit} className="space-y-4 text-xs">
              {errorMessage && (
                <div className="p-3.5 rounded-xl bg-rose-500/10 border border-rose-500/30 text-rose-300 text-xs flex items-center gap-2 animate-fadeIn">
                  <AlertCircle className="w-4 h-4 shrink-0" />
                  <span>{errorMessage}</span>
                </div>
              )}

              {successMessage && (
                <div
                  className="p-3.5 sm:p-4 rounded-2xl border flex items-center justify-between gap-3 animate-fadeIn text-xs"
                  style={{
                    backgroundColor: 'rgba(119, 141, 122, 0.2)',
                    borderColor: 'var(--color-sage)',
                    color: 'var(--color-cream)',
                  }}
                >
                  <div className="flex items-center gap-2.5">
                    <CheckCircle2 className="w-5 h-5 shrink-0" style={{ color: 'var(--color-sage)' }} />
                    <span className="font-medium">{successMessage}</span>
                  </div>
                  {lastWhatsAppUrl && (
                    <a
                      href={lastWhatsAppUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="font-bold underline shrink-0 hover:opacity-80"
                      style={{ color: 'var(--color-sand)' }}
                    >
                      Open WhatsApp
                    </a>
                  )}
                </div>
              )}

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div className="space-y-1.5">
                  <label className="font-semibold" style={{ color: 'var(--color-cream)' }}>
                    Full Name *
                  </label>
                  <input
                    type="text"
                    required
                    placeholder="e.g. Ramesh Chandra"
                    value={formData.name}
                    onChange={(e) => {
                      setFormData({ ...formData, name: e.target.value });
                      if (errorMessage) setErrorMessage('');
                    }}
                    className="w-full px-4 py-3 rounded-2xl border text-sm focus:outline-none focus:border-[var(--color-sand)]"
                    style={{
                      backgroundColor: 'var(--color-midnight)',
                      borderColor: 'var(--color-steel)',
                      color: 'var(--color-cream)',
                    }}
                  />
                </div>

                <div className="space-y-1.5">
                  <label className="font-semibold" style={{ color: 'var(--color-cream)' }}>
                    Direct Mobile Number *
                  </label>
                  <input
                    type="tel"
                    required
                    placeholder="+91 98765 XXXXX"
                    value={formData.phone}
                    onChange={(e) => {
                      setFormData({ ...formData, phone: e.target.value });
                      if (errorMessage) setErrorMessage('');
                    }}
                    className="w-full px-4 py-3 rounded-2xl border text-sm focus:outline-none focus:border-[var(--color-sand)]"
                    style={{
                      backgroundColor: 'var(--color-midnight)',
                      borderColor: 'var(--color-steel)',
                      color: 'var(--color-cream)',
                    }}
                  />
                </div>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div className="space-y-1.5">
                  <label className="font-semibold" style={{ color: 'var(--color-cream)' }}>
                    Parcel Category
                  </label>
                  <select
                    value={formData.propertyType}
                    onChange={(e) => setFormData({ ...formData, propertyType: e.target.value })}
                    className="w-full px-4 py-3 rounded-2xl border text-sm focus:outline-none focus:border-[var(--color-sand)]"
                    style={{
                      backgroundColor: 'var(--color-midnight)',
                      borderColor: 'var(--color-steel)',
                      color: 'var(--color-cream)',
                    }}
                  >
                    <option value="plots">Plotted Residential Township</option>
                    <option value="villas">Independent Duplex Villa</option>
                    <option value="commercial">Commercial High-Street Showroom</option>
                    <option value="flats">Residential Flat</option>
                  </select>
                </div>

                <div className="space-y-1.5">
                  <label className="font-semibold" style={{ color: 'var(--color-cream)' }}>
                    Plot Size Preference
                  </label>
                  <select
                    value={formData.plotSizePreference}
                    onChange={(e) => setFormData({ ...formData, plotSizePreference: e.target.value })}
                    className="w-full px-4 py-3 rounded-2xl border text-sm focus:outline-none focus:border-[var(--color-sand)]"
                    style={{
                      backgroundColor: 'var(--color-midnight)',
                      borderColor: 'var(--color-steel)',
                      color: 'var(--color-cream)',
                    }}
                  >
                    <option value="1,000 sq ft (25 × 40 ft)">1,000 sq ft (25 × 40 ft)</option>
                    <option value="1,200 sq ft (30 × 40 ft)">1,200 sq ft (30 × 40 ft)</option>
                    <option value="1,800 sq ft (30 × 60 ft)">1,800 sq ft (30 × 60 ft)</option>
                    <option value="2,400 sq ft (40 × 60 ft)">2,400 sq ft (40 × 60 ft)</option>
                    <option value="Commercial Carpet (500–2000 sq ft)">Commercial Carpet (500–2,000 sq ft)</option>
                  </select>
                </div>
              </div>

              <div className="space-y-1.5">
                <label className="font-semibold" style={{ color: 'var(--color-cream)' }}>
                  Execution Timeframe
                </label>
                <select
                  value={formData.timeframe}
                  onChange={(e) => setFormData({ ...formData, timeframe: e.target.value })}
                  className="w-full px-4 py-3 rounded-2xl border text-sm focus:outline-none focus:border-[var(--color-sand)]"
                  style={{
                    backgroundColor: 'var(--color-midnight)',
                    borderColor: 'var(--color-steel)',
                    color: 'var(--color-cream)',
                  }}
                >
                  <option value="Immediate Registry (within 30 days)">Immediate Registry (within 30 days)</option>
                  <option value="Bank Loan Financed (30-60 days)">Bank Loan Financed (30–60 days)</option>
                  <option value="Planning Construction in 6-12 Months">Planning Construction in 6–12 Months</option>
                </select>
              </div>

              <div className="space-y-1.5">
                <label className="font-semibold" style={{ color: 'var(--color-cream)' }}>
                  Specific Requirements or Preferred Facing
                </label>
                <textarea
                  rows={3}
                  placeholder="e.g. Need east-facing plot near park, or require copy of Khasra map..."
                  value={formData.message}
                  onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                  className="w-full px-4 py-3 rounded-2xl border text-sm focus:outline-none focus:border-[var(--color-sand)] resize-none"
                  style={{
                    backgroundColor: 'var(--color-midnight)',
                    borderColor: 'var(--color-steel)',
                    color: 'var(--color-cream)',
                  }}
                />
              </div>

              <button
                type="submit"
                disabled={isSubmitting}
                className="btn-primary w-full py-3.5 px-6 rounded-full font-bold text-sm active:scale-[0.99] disabled:opacity-50"
              >
                {isSubmitting ? 'Opening WhatsApp...' : 'Submit inquiry for official rate card'}
              </button>

              <p className="text-[11px] text-center font-mono" style={{ color: 'var(--color-cream)', opacity: 0.75 }}>
                Your details are protected under legal privacy standards. Zero broker calls.
              </p>
            </form>
          </div>
        </div>

      </div>
    </section>
  );
};
