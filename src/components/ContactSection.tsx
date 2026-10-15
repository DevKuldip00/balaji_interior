import React, { useState } from 'react';
import { motion } from 'framer-motion';
import {
  MessageSquare,
  Phone,
  MapPin,
  Clock,
  Send,
  Navigation,
  CheckCircle2,
  AlertCircle,
  ExternalLink,
} from 'lucide-react';
import { COMPANY_INFO, createWhatsAppUrl, DEFAULT_WHATSAPP_MESSAGE } from '../data/companyInfo';
import type { InquiryFormData } from '../types';

export const ContactSection: React.FC = () => {
  const [formData, setFormData] = useState<InquiryFormData>({
    fullName: '',
    phone: '',
    projectType: 'Complete Home Interiors',
    locationArea: 'Anand City',
    message: '',
  });

  const [formSubmitted, setFormSubmitted] = useState(false);
  const [formError, setFormError] = useState<string | null>(null);

  const projectTypes = [
    'Complete Home Interiors',
    'Modular Kitchen Design',
    'Custom Furniture Design',
    'False Ceiling & Lighting',
    'Decorative Wall Panels / Moulding',
    'Interior Renovation & Styling',
  ];

  const locationAreas = [
    'Anand City (Grid Road / Station Area)',
    'Vallabh Vidyanagar',
    'Karamsad',
    'Borsad',
    'Mogar / Vassad',
    'Nadiad / Other nearby area',
  ];

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setFormError(null);

    // Validation
    if (!formData.fullName.trim()) {
      setFormError('Please enter your full name.');
      return;
    }

    const cleanPhone = formData.phone.replace(/\D/g, '');
    if (cleanPhone.length < 10) {
      setFormError('Please enter a valid 10-digit phone number.');
      return;
    }

    setFormSubmitted(true);
  };

  const handleSendToWhatsAppDirectly = () => {
    const formattedMsg = `Hello Balaji Interior Designer,
I would like to inquire about an interior design project:
- Name: ${formData.fullName}
- Phone: ${formData.phone}
- Project Type: ${formData.projectType}
- Location: ${formData.locationArea}
- Requirements: ${formData.message || 'I would like to discuss floor planning and consultation.'}`;

    window.open(createWhatsAppUrl(formattedMsg), '_blank', 'noopener,noreferrer');
  };

  return (
    <section id="contact" className="section" style={{ backgroundColor: 'var(--color-ivory)' }}>
      <div className="container">
        {/* Section Header */}
        <div className="max-w-3xl mb-12 sm:mb-16">
          <div className="section-tag">Start a Conversation</div>
          <h2 className="section-title text-charcoal">
            Let's design a space that feels like yours.
          </h2>
          <p className="section-subtitle text-stone-600 font-sans">
            Planning a new home, a kitchen upgrade, or a complete interior transformation? Tell us
            what you have in mind. We welcome you to visit our studio or connect directly on
            WhatsApp.
          </p>
        </div>

        {/* Two-Column Grid: Contact Information & Inquiry Form */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 sm:gap-12 items-start">
          {/* Left Column: Direct Reach & Studio Details */}
          <div className="lg:col-span-5 flex flex-col gap-8">
            {/* Direct Connect Buttons */}
            <div className="flex flex-col gap-3">
              <a
                href={createWhatsAppUrl(DEFAULT_WHATSAPP_MESSAGE)}
                target="_blank"
                rel="noopener noreferrer"
                className="btn btn-whatsapp text-sm py-3.5 px-6 flex items-center justify-center gap-2.5 shadow-md"
                style={{ textDecoration: 'none' }}
              >
                <MessageSquare size={18} />
                <span>Chat Instantly on WhatsApp</span>
              </a>

              <a
                href={`tel:${COMPANY_INFO.phoneRaw}`}
                className="btn btn-outline text-sm py-3.5 px-6 flex items-center justify-center gap-2.5"
                style={{ textDecoration: 'none' }}
              >
                <Phone size={18} style={{ color: 'var(--color-bronze)' }} />
                <span>Call {COMPANY_INFO.phoneDisplay}</span>
              </a>
            </div>

            {/* Studio Address Card */}
            <div className="bg-white border border-stone-200/90 rounded-sm p-6 sm:p-7 shadow-sm">
              <div className="flex items-start gap-3.5 mb-5">
                <div
                  className="w-10 h-10 rounded-sm flex items-center justify-center flex-shrink-0 mt-0.5"
                  style={{
                    backgroundColor: 'rgba(156, 128, 91, 0.12)',
                    color: 'var(--color-bronze-dark)',
                  }}
                >
                  <MapPin size={20} />
                </div>
                <div>
                  <h4 className="text-base font-serif font-semibold text-charcoal mb-1">
                    Studio Location
                  </h4>
                  <p className="text-xs sm:text-sm text-stone-600 font-sans leading-relaxed">
                    1st Floor, Saral Chandra Complex, Balaji Interiors, Grid Road, opposite Vishal
                    Bakery, Anand, Gujarat 388001, India.
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-3.5 pt-4 border-t border-stone-100">
                <div
                  className="w-10 h-10 rounded-sm flex items-center justify-center flex-shrink-0 mt-0.5"
                  style={{
                    backgroundColor: 'rgba(156, 128, 91, 0.12)',
                    color: 'var(--color-bronze-dark)',
                  }}
                >
                  <Clock size={20} />
                </div>
                <div>
                  <h4 className="text-base font-serif font-semibold text-charcoal mb-1">
                    Studio Hours
                  </h4>
                  <p className="text-xs sm:text-sm text-stone-600 font-sans leading-relaxed">
                    {COMPANY_INFO.businessHours}
                  </p>
                </div>
              </div>

              {/* Google Maps Directions Link */}
              <div className="mt-6 pt-4 border-t border-stone-100">
                <a
                  href={COMPANY_INFO.mapsUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 text-xs uppercase tracking-wider font-sans font-semibold text-bronze hover:text-charcoal transition-colors"
                  style={{ textDecoration: 'none', color: 'var(--color-bronze)' }}
                >
                  <Navigation size={14} />
                  <span>Get Directions on Google Maps</span>
                  <ExternalLink size={12} />
                </a>
              </div>
            </div>

            {/* Embedded Interactive Map Container */}
            <div className="rounded-sm overflow-hidden border border-stone-300 shadow-sm bg-stone-200 h-56 sm:h-64 relative">
              <iframe
                title="Balaji Interior Designer Studio Location Map"
                src={COMPANY_INFO.mapsEmbedUrl}
                width="100%"
                height="100%"
                style={{ border: 0 }}
                allowFullScreen={false}
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
              />
            </div>
          </div>

          {/* Right Column: Inquiry Form */}
          <div className="lg:col-span-7 bg-white border border-stone-200/90 rounded-sm p-6 sm:p-10 shadow-sm">
            <div className="mb-6 pb-4 border-b border-stone-100">
              <h3
                className="text-2xl font-serif text-charcoal mb-1"
                style={{ fontFamily: 'var(--font-serif)' }}
              >
                Project Inquiry
              </h3>
              <p className="text-xs text-stone-500 font-sans">
                Tell us about your home or upcoming interior requirements in Anand.
              </p>
            </div>

            {/* Honest Demo Mode Notice */}
            <div className="mb-6 p-3.5 bg-amber-50/70 border border-amber-200/80 rounded text-xs text-stone-600 font-sans flex items-start gap-2.5">
              <AlertCircle size={15} className="text-amber-700 mt-0.5 flex-shrink-0" />
              <div>
                <span className="font-semibold text-stone-800">Direct Consultation Preview: </span>
                <span>
                  This form organizes your details and enables one-click forwarding to the designer’s
                  WhatsApp for immediate discussion.
                </span>
              </div>
            </div>

            {formError && (
              <div className="mb-6 p-3 bg-red-50 border border-red-200 text-red-700 text-xs rounded font-sans">
                {formError}
              </div>
            )}

            {formSubmitted ? (
              <motion.div
                initial={{ opacity: 0, scale: 0.98 }}
                animate={{ opacity: 1, scale: 1 }}
                className="p-6 bg-stone-50 border border-stone-200 rounded text-center flex flex-col items-center"
              >
                <div className="w-12 h-12 rounded-full bg-emerald-100 text-emerald-700 flex items-center justify-center mb-3">
                  <CheckCircle2 size={24} />
                </div>
                <h4 className="text-xl font-serif text-charcoal mb-2">
                  Inquiry Structured Successfully
                </h4>
                <p className="text-xs sm:text-sm text-stone-600 font-sans max-w-md mb-6 leading-relaxed">
                  Thank you, <strong>{formData.fullName}</strong>. Since this is a live client
                  portfolio demo without a database backend, you can forward this exact structured
                  inquiry to Balaji Interior Designer on WhatsApp right now:
                </p>

                {/* Structured Summary Box */}
                <div className="w-full p-4 bg-white border border-stone-200 text-left text-xs font-sans text-stone-700 mb-6 rounded">
                  <p>
                    <strong>Property / Scope:</strong> {formData.projectType}
                  </p>
                  <p>
                    <strong>Location:</strong> {formData.locationArea}
                  </p>
                  <p>
                    <strong>Phone:</strong> {formData.phone}
                  </p>
                  {formData.message && (
                    <p className="mt-1">
                      <strong>Notes:</strong> {formData.message}
                    </p>
                  )}
                </div>

                <button
                  type="button"
                  onClick={handleSendToWhatsAppDirectly}
                  className="btn btn-whatsapp w-full sm:w-auto text-sm py-3 px-8 flex items-center justify-center gap-2 mb-3"
                >
                  <MessageSquare size={16} />
                  <span>Send to Balaji Interior Designer via WhatsApp</span>
                </button>

                <button
                  type="button"
                  onClick={() => setFormSubmitted(false)}
                  className="text-xs text-stone-500 hover:text-charcoal underline mt-2 font-sans"
                >
                  Edit Inquiry Details
                </button>
              </motion.div>
            ) : (
              <form onSubmit={handleSubmit} className="flex flex-col gap-4">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  {/* Full Name */}
                  <div className="form-group mb-0">
                    <label className="form-label" htmlFor="inquiry-name">
                      Full Name *
                    </label>
                    <input
                      id="inquiry-name"
                      type="text"
                      required
                      placeholder="e.g. Ramesh Patel"
                      value={formData.fullName}
                      onChange={(e) => setFormData({ ...formData, fullName: e.target.value })}
                      className="form-input"
                    />
                  </div>

                  {/* Phone Number */}
                  <div className="form-group mb-0">
                    <label className="form-label" htmlFor="inquiry-phone">
                      Phone Number *
                    </label>
                    <input
                      id="inquiry-phone"
                      type="tel"
                      required
                      placeholder="e.g. 98765 43210"
                      value={formData.phone}
                      onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                      className="form-input"
                    />
                  </div>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  {/* Project Type */}
                  <div className="form-group mb-0">
                    <label className="form-label" htmlFor="inquiry-type">
                      Project Type
                    </label>
                    <select
                      id="inquiry-type"
                      value={formData.projectType}
                      onChange={(e) => setFormData({ ...formData, projectType: e.target.value })}
                      className="form-select"
                    >
                      {projectTypes.map((pt) => (
                        <option key={pt} value={pt}>
                          {pt}
                        </option>
                      ))}
                    </select>
                  </div>

                  {/* Location Area */}
                  <div className="form-group mb-0">
                    <label className="form-label" htmlFor="inquiry-location">
                      Location in Anand Region
                    </label>
                    <select
                      id="inquiry-location"
                      value={formData.locationArea}
                      onChange={(e) => setFormData({ ...formData, locationArea: e.target.value })}
                      className="form-select"
                    >
                      {locationAreas.map((loc) => (
                        <option key={loc} value={loc}>
                          {loc}
                        </option>
                      ))}
                    </select>
                  </div>
                </div>

                {/* Message */}
                <div className="form-group mb-0">
                  <label className="form-label" htmlFor="inquiry-message">
                    Project Details / Preferred Requirements (Optional)
                  </label>
                  <textarea
                    id="inquiry-message"
                    rows={4}
                    placeholder="Describe your floor plan, number of rooms, preferred finishes, or timeline..."
                    value={formData.message}
                    onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                    className="form-textarea"
                  />
                </div>

                {/* Submit Actions */}
                <div className="pt-2 flex flex-col sm:flex-row items-center justify-between gap-4">
                  <button
                    type="submit"
                    className="btn btn-primary w-full sm:w-auto text-xs sm:text-sm py-3 px-8 flex items-center justify-center gap-2"
                  >
                    <span>Format Inquiry</span>
                    <Send size={14} />
                  </button>

                  <button
                    type="button"
                    onClick={handleSendToWhatsAppDirectly}
                    className="btn btn-whatsapp text-xs sm:text-sm py-3 px-6 w-full sm:w-auto flex items-center justify-center gap-2"
                  >
                    <MessageSquare size={16} />
                    <span>Inquire via WhatsApp Directly</span>
                  </button>
                </div>
              </form>
            )}
          </div>
        </div>
      </div>
    </section>
  );
};
