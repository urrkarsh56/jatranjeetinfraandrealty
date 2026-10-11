import React, { useState } from 'react';
import { X, CheckCircle2, Car } from 'lucide-react';

interface SiteVisitModalProps {
  isOpen: boolean;
  onClose: () => void;
  defaultProperty?: string;
}

export const SiteVisitModal: React.FC<SiteVisitModalProps> = ({
  isOpen,
  onClose,
  defaultProperty = 'Emerald Meadows Plots',
}) => {
  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    date: '',
    pickupLocation: '',
    property: defaultProperty,
    passengers: '1-2 people',
  });

  const [isSubmitted, setIsSubmitted] = useState(false);

  if (!isOpen) return null;

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitted(true);
  };

  const handleReset = () => {
    setIsSubmitted(false);
    onClose();
  };

  return (
    <div
      className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 bg-black/85 backdrop-blur-md animate-fadeIn"
      onClick={onClose}
    >
      <div
        className="relative w-full max-w-lg rounded-3xl border shadow-theme-card p-6 sm:p-8 text-left"
        style={{
          backgroundColor: 'var(--color-navy)',
          borderColor: 'var(--color-sand)',
          color: 'var(--color-cream)',
        }}
        onClick={(e) => e.stopPropagation()}
      >
        <button
          onClick={onClose}
          className="absolute top-4 right-4 z-20 w-9 h-9 rounded-full border flex items-center justify-center transition-colors"
          style={{
            backgroundColor: 'var(--color-midnight)',
            borderColor: 'var(--color-sand)',
            color: 'var(--color-sand)',
          }}
          aria-label="Close modal"
        >
          <X className="w-5 h-5" />
        </button>

        <div
          className="flex items-center gap-2.5 text-xs font-mono uppercase tracking-wider mb-2"
          style={{ color: 'var(--color-sand)' }}
        >
          <Car className="w-4 h-4" />
          <span>Complimentary Chauffeur Service</span>
        </div>

        <h3
          className="font-display text-xl sm:text-2xl font-bold mb-1"
          style={{ color: 'var(--color-cream)' }}
        >
          Book Free Site Inspection Cab
        </h3>
        <p className="text-xs mb-6" style={{ color: 'var(--color-sand)' }}>
          We arrange doorstep AC vehicle pickup and drop for you and your family to tour our plotted townships and projects.
        </p>

        {isSubmitted ? (
          <div className="py-8 text-center space-y-4">
            <div
              className="w-12 h-12 rounded-full flex items-center justify-center mx-auto border"
              style={{
                backgroundColor: 'rgba(119, 141, 122, 0.2)',
                borderColor: 'var(--color-sage)',
                color: 'var(--color-sage)',
              }}
            >
              <CheckCircle2 className="w-6 h-6" />
            </div>
            <h4
              className="font-display text-lg font-bold"
              style={{ color: 'var(--color-cream)' }}
            >
              Site Visit Reserved!
            </h4>
            <p className="text-xs leading-relaxed" style={{ color: 'var(--color-cream)' }}>
              Thank you, <strong style={{ color: 'var(--color-sand)' }}>{formData.name}</strong>. Our logistics officer will contact you at <strong style={{ color: 'var(--color-sand)' }}>{formData.phone}</strong> to confirm the driver details and vehicle registration.
            </p>
            <button
              onClick={handleReset}
              className="btn-primary mt-4 px-6 py-2.5 rounded-full font-bold text-xs"
            >
              Done
            </button>
          </div>
        ) : (
          <form onSubmit={handleSubmit} className="space-y-4 text-xs">
            <div className="space-y-1">
              <label className="font-semibold" style={{ color: 'var(--color-cream)' }}>
                Full Name
              </label>
              <input
                type="text"
                required
                placeholder="Your Name"
                value={formData.name}
                onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                className="w-full px-4 py-2.5 rounded-2xl border text-xs focus:outline-none focus:border-[var(--color-sand)]"
                style={{
                  backgroundColor: 'var(--color-midnight)',
                  borderColor: 'var(--color-steel)',
                  color: 'var(--color-cream)',
                }}
              />
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
              <div className="space-y-1">
                <label className="font-semibold" style={{ color: 'var(--color-cream)' }}>
                  Phone Number
                </label>
                <input
                  type="tel"
                  required
                  placeholder="+91 98765 XXXXX"
                  value={formData.phone}
                  onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                  className="w-full px-4 py-2.5 rounded-2xl border text-xs focus:outline-none focus:border-[var(--color-sand)]"
                  style={{
                    backgroundColor: 'var(--color-midnight)',
                    borderColor: 'var(--color-steel)',
                    color: 'var(--color-cream)',
                  }}
                />
              </div>

              <div className="space-y-1">
                <label className="font-semibold" style={{ color: 'var(--color-cream)' }}>
                  Preferred Date
                </label>
                <input
                  type="date"
                  required
                  value={formData.date}
                  onChange={(e) => setFormData({ ...formData, date: e.target.value })}
                  className="w-full px-4 py-2.5 rounded-2xl border text-xs focus:outline-none focus:border-[var(--color-sand)]"
                  style={{
                    backgroundColor: 'var(--color-midnight)',
                    borderColor: 'var(--color-steel)',
                    color: 'var(--color-cream)',
                  }}
                />
              </div>
            </div>

            <div className="space-y-1">
              <label className="font-semibold" style={{ color: 'var(--color-cream)' }}>
                Pickup Location / Landmark
              </label>
              <input
                type="text"
                required
                placeholder="e.g. Near Metro Station / Home Address"
                value={formData.pickupLocation}
                onChange={(e) => setFormData({ ...formData, pickupLocation: e.target.value })}
                className="w-full px-4 py-2.5 rounded-2xl border text-xs focus:outline-none focus:border-[var(--color-sand)]"
                style={{
                  backgroundColor: 'var(--color-midnight)',
                  borderColor: 'var(--color-steel)',
                  color: 'var(--color-cream)',
                }}
              />
            </div>

            <div className="space-y-1">
              <label className="font-semibold" style={{ color: 'var(--color-cream)' }}>
                Property of Interest
              </label>
              <select
                value={formData.property}
                onChange={(e) => setFormData({ ...formData, property: e.target.value })}
                className="w-full px-4 py-2.5 rounded-2xl border text-xs focus:outline-none focus:border-[var(--color-sand)]"
                style={{
                  backgroundColor: 'var(--color-midnight)',
                  borderColor: 'var(--color-steel)',
                  color: 'var(--color-cream)',
                }}
              >
                <option value="Emerald Meadows Plots">Emerald Meadows Plots (Plotted Township)</option>
                <option value="The Ranjeet Crest Villa">The Ranjeet Crest Villa (Luxury 4 BHK)</option>
                <option value="Jay Ranjeet Horizon Central">Jay Ranjeet Horizon Central (Commercial)</option>
                <option value="Serene Enclave Phase II">Serene Enclave Phase II (Plots)</option>
                <option value="All Sites">Tour Multiple Locations</option>
              </select>
            </div>

            <button
              type="submit"
              className="btn-primary w-full mt-2 py-3.5 px-4 rounded-full font-bold shadow-theme-card transition-all text-xs flex items-center justify-center gap-2 active:scale-[0.98]"
            >
              <Car className="w-4 h-4" />
              <span>Confirm free vehicle reservation</span>
            </button>

            <p className="text-[10px] text-center opacity-75" style={{ color: 'var(--color-cream)' }}>
              Available Monday through Sunday · Sanitized AC Fleet · Zero charges
            </p>
          </form>
        )}
      </div>
    </div>
  );
};
