import type { FC } from 'react';
import { ArrowUp, MapPin, Phone, MessageSquare, ExternalLink } from 'lucide-react';
import { COMPANY_INFO, createWhatsAppUrl, DEFAULT_WHATSAPP_MESSAGE } from '../data/companyInfo';

export const Footer: FC = () => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const navLinks = [
    { label: 'Home', href: '#home' },
    { label: 'Curated Portfolio', href: '#portfolio' },
    { label: 'Interior Services', href: '#services' },
    { label: 'Design Philosophy', href: '#philosophy' },
    { label: 'Why Work With Us', href: '#why-us' },
    { label: 'Our 4-Step Process', href: '#process' },
    { label: 'Contact Studio', href: '#contact' },
  ];

  const serviceLinks = [
    'Complete Home Interiors',
    'Modular Kitchen Design',
    'Custom Furniture Design',
    'False Ceiling & Lighting',
    'Decorative Wall Panels',
    'Interior Renovation & Styling',
  ];

  return (
    <footer className="bg-[#141513] text-stone-300 border-t border-stone-800/80 pt-16 pb-12">
      <div className="container">
        {/* Main Footer Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-10 sm:gap-12 pb-14 border-b border-stone-800">
          {/* Column 1: Brand & Bio */}
          <div className="lg:col-span-5 flex flex-col">
            <div className="mb-4">
              <span
                className="text-2xl font-serif tracking-wider uppercase font-semibold text-white flex items-center gap-1.5"
                style={{ fontFamily: 'var(--font-serif)', letterSpacing: '0.12em' }}
              >
                BALAJI
                <span className="text-amber-300/80 italic font-light">Interiors</span>
              </span>
              <span className="text-xs tracking-widest uppercase font-sans text-stone-400 mt-1 block">
                Bespoke Interior Studio • Anand, Gujarat
              </span>
            </div>

            <p className="text-xs sm:text-sm text-stone-400 font-sans font-light leading-relaxed mb-6 max-w-sm">
              Thoughtful interior design, custom furniture, and refined architectural details for
              residences and commercial spaces in Anand and central Gujarat.
            </p>

            <div className="flex items-center gap-3">
              <a
                href={createWhatsAppUrl(DEFAULT_WHATSAPP_MESSAGE)}
                target="_blank"
                rel="noopener noreferrer"
                className="btn btn-whatsapp text-xs py-2 px-4 inline-flex items-center gap-2"
                style={{ textDecoration: 'none' }}
              >
                <MessageSquare size={14} />
                <span>WhatsApp +91 83209 77447</span>
              </a>
            </div>
          </div>

          {/* Column 2: Navigation Links */}
          <div className="lg:col-span-2">
            <h4 className="text-xs font-sans uppercase tracking-widest text-amber-200/90 font-semibold mb-4">
              Explore
            </h4>
            <ul className="flex flex-col gap-2.5 text-xs font-sans">
              {navLinks.map((link) => (
                <li key={link.label}>
                  <a
                    href={link.href}
                    className="text-stone-400 hover:text-white transition-colors"
                    style={{ textDecoration: 'none' }}
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Column 3: Services Links */}
          <div className="lg:col-span-2">
            <h4 className="text-xs font-sans uppercase tracking-widest text-amber-200/90 font-semibold mb-4">
              Services
            </h4>
            <ul className="flex flex-col gap-2.5 text-xs font-sans">
              {serviceLinks.map((serv) => (
                <li key={serv}>
                  <a
                    href="#services"
                    className="text-stone-400 hover:text-white transition-colors"
                    style={{ textDecoration: 'none' }}
                  >
                    {serv}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Column 4: Studio Location & Direct Contact */}
          <div className="lg:col-span-3">
            <h4 className="text-xs font-sans uppercase tracking-widest text-amber-200/90 font-semibold mb-4">
              Studio Location
            </h4>
            <div className="flex flex-col gap-3 text-xs font-sans text-stone-400">
              <div className="flex items-start gap-2">
                <MapPin size={14} className="text-amber-400 mt-0.5 flex-shrink-0" />
                <span>
                  1st Floor, Saral Chandra Complex, Balaji Interiors, Grid Road, opposite Vishal
                  Bakery, Anand, Gujarat 388001
                </span>
              </div>

              <div className="flex items-center gap-2 pt-2 border-t border-stone-800">
                <Phone size={14} className="text-amber-400 flex-shrink-0" />
                <a
                  href={`tel:${COMPANY_INFO.phoneRaw}`}
                  className="text-stone-300 hover:text-white transition-colors"
                  style={{ textDecoration: 'none' }}
                >
                  {COMPANY_INFO.phoneDisplay}
                </a>
              </div>

              <div className="pt-2">
                <a
                  href={COMPANY_INFO.mapsUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-1.5 text-amber-300/80 hover:text-amber-200 transition-colors"
                  style={{ textDecoration: 'none' }}
                >
                  <span>Open Directions on Google Maps</span>
                  <ExternalLink size={12} />
                </a>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Bar: Copyright & Attribution */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs font-sans text-stone-500">
          <div>
            <p>
              © {new Date().getFullYear()} Balaji Interior Designer. Anand, Gujarat, India. All
              rights reserved.
            </p>
          </div>

          <div className="flex items-center gap-6">
            <span className="demo-badge text-[10px]">Client Presentation Demo</span>
            <button
              type="button"
              onClick={scrollToTop}
              className="flex items-center gap-1.5 text-stone-400 hover:text-white transition-colors cursor-pointer"
              aria-label="Scroll to top"
            >
              <span>Back to Top</span>
              <ArrowUp size={13} />
            </button>
          </div>
        </div>
      </div>
    </footer>
  );
};
