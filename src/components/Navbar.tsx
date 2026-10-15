import { useState, useEffect, type FC, type MouseEvent } from 'react';
import { MessageSquare, Phone, Menu, X, MapPin } from 'lucide-react';
import { COMPANY_INFO, createWhatsAppUrl, DEFAULT_WHATSAPP_MESSAGE } from '../data/companyInfo';

interface NavbarProps {
  onOpenConsultation?: () => void;
}

export const Navbar: FC<NavbarProps> = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 30) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { label: 'Home', href: '#home' },
    { label: 'Portfolio', href: '#portfolio' },
    { label: 'Services', href: '#services' },
    { label: 'Philosophy', href: '#philosophy' },
    { label: 'Why Us', href: '#why-us' },
    { label: 'Process', href: '#process' },
    { label: 'Contact', href: '#contact' },
  ];

  const handleLinkClick = (e: MouseEvent<HTMLAnchorElement>, href: string) => {
    e.preventDefault();
    setMobileMenuOpen(false);
    const target = document.querySelector(href);
    if (target) {
      target.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <>
      <header
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
          isScrolled ? 'nav-backdrop-scrolled py-3 sm:py-3.5' : 'nav-backdrop-top py-5 sm:py-6'
        }`}
        style={{
          color: isScrolled ? '#22221F' : '#FFFFFF',
        }}
      >
        <div className="container flex items-center justify-between">
          {/* Brand Wordmark */}
          <a
            href="#home"
            onClick={(e) => handleLinkClick(e, '#home')}
            className="flex flex-col group"
            style={{ textDecoration: 'none' }}
            aria-label="Balaji Interior Designer Homepage"
          >
            <span
              className="text-lg sm:text-xl md:text-2xl font-serif tracking-wider uppercase font-semibold leading-none flex items-center gap-1.5"
              style={{
                fontFamily: 'var(--font-serif)',
                letterSpacing: '0.12em',
                color: isScrolled ? '#22221F' : '#FFFFFF',
              }}
            >
              BALAJI
              <span
                style={{
                  color: isScrolled ? '#A88B67' : '#D6B992',
                  fontStyle: 'italic',
                  fontFamily: 'var(--font-serif)',
                  fontWeight: 400,
                }}
              >
                Interiors
              </span>
            </span>
            <span
              className="text-[10px] tracking-widest uppercase font-sans mt-0.5 flex items-center gap-1"
              style={{
                letterSpacing: '0.2em',
                color: isScrolled ? '#7A6F60' : 'rgba(245, 242, 236, 0.8)',
                fontSize: '0.68rem',
              }}
            >
              <MapPin size={9} style={{ color: '#A88B67' }} />
              Anand, Gujarat
            </span>
          </a>

          {/* Desktop Navigation Links */}
          <nav className="hidden lg:flex items-center gap-7 xl:gap-8" aria-label="Main Navigation">
            {navLinks.map((link) => (
              <a
                key={link.label}
                href={link.href}
                onClick={(e) => handleLinkClick(e, link.href)}
                className="text-xs uppercase tracking-widest font-sans font-medium transition-colors py-1"
                style={{
                  color: isScrolled ? '#22221F' : 'rgba(255, 255, 255, 0.92)',
                  textDecoration: 'none',
                  letterSpacing: '0.14em',
                }}
                onMouseEnter={(e) => {
                  e.currentTarget.style.color = '#A88B67';
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.color = isScrolled
                    ? '#22221F'
                    : 'rgba(255, 255, 255, 0.92)';
                }}
              >
                {link.label}
              </a>
            ))}
          </nav>

          {/* Right Action Items */}
          <div className="flex items-center gap-2 sm:gap-3 flex-shrink-0">
            <a
              href={`tel:${COMPANY_INFO.phoneRaw}`}
              className="hidden xl:flex items-center gap-1.5 text-xs font-sans tracking-wider uppercase px-2.5 py-1.5 transition-colors"
              style={{
                textDecoration: 'none',
                color: isScrolled ? '#22221F' : 'rgba(255, 255, 255, 0.95)',
              }}
              title="Call Balaji Interior Designer"
            >
              <Phone size={13} style={{ color: '#A88B67' }} />
              <span>{COMPANY_INFO.phoneDisplay}</span>
            </a>

            <a
              href={createWhatsAppUrl(DEFAULT_WHATSAPP_MESSAGE)}
              target="_blank"
              rel="noopener noreferrer"
              className="hidden sm:inline-flex btn btn-whatsapp-editorial text-xs py-2 px-3.5 shadow-sm"
              style={{
                textDecoration: 'none',
                backgroundColor: isScrolled ? '#22221F' : 'rgba(22, 23, 21, 0.85)',
                borderColor: '#A88B67',
                color: '#F5F2EC',
                minHeight: '40px',
              }}
            >
              <MessageSquare size={13} style={{ color: '#25D366' }} />
              <span>WhatsApp Inquiry</span>
            </a>

            {/* Mobile Menu Trigger */}
            <button
              type="button"
              className="lg:hidden p-1.5 sm:p-2 flex items-center justify-center transition-colors rounded hover:bg-white/10"
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              aria-label={mobileMenuOpen ? 'Close Navigation Menu' : 'Open Navigation Menu'}
              style={{
                color: isScrolled ? '#22221F' : '#FFFFFF',
              }}
            >
              {mobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>
      </header>

      {/* Mobile Drawer Navigation */}
      {mobileMenuOpen && (
        <div
          className="fixed inset-0 z-40 lg:hidden flex flex-col justify-between"
          style={{
            backgroundColor: '#1C1D1A',
            color: '#F5F2EC',
            paddingTop: '5.5rem',
            paddingBottom: '2.5rem',
            paddingLeft: '1.75rem',
            paddingRight: '1.75rem',
          }}
        >
          <div className="flex flex-col gap-5">
            <div className="pb-3 border-b border-stone-800">
              <span
                className="text-xs uppercase tracking-widest text-stone-400 font-sans block"
                style={{ letterSpacing: '0.2em' }}
              >
                Balaji Interior Studio
              </span>
              <span className="text-sm font-serif italic text-amber-200/80">
                1st Floor, Saral Chandra Complex, Anand
              </span>
            </div>

            <nav className="flex flex-col gap-4 mt-2">
              {navLinks.map((link) => (
                <a
                  key={link.label}
                  href={link.href}
                  onClick={(e) => handleLinkClick(e, link.href)}
                  className="text-2xl font-serif text-white hover:text-amber-200 transition-colors py-1 flex items-center justify-between"
                  style={{ textDecoration: 'none' }}
                >
                  <span>{link.label}</span>
                  <span style={{ fontSize: '0.9rem', color: '#A88B67' }}>→</span>
                </a>
              ))}
            </nav>
          </div>

          <div className="flex flex-col gap-3 pt-6 border-t border-stone-800">
            <a
              href={createWhatsAppUrl(DEFAULT_WHATSAPP_MESSAGE)}
              target="_blank"
              rel="noopener noreferrer"
              className="btn btn-whatsapp w-full justify-center text-sm py-3"
            >
              <MessageSquare size={16} />
              <span>Connect on WhatsApp</span>
            </a>

            <a
              href={`tel:${COMPANY_INFO.phoneRaw}`}
              className="btn btn-outline-light w-full justify-center text-sm py-3"
            >
              <Phone size={16} style={{ color: '#A88B67' }} />
              <span>Call +91 83209 77447</span>
            </a>

            <p className="text-center text-stone-400 text-xs mt-2">
              Grid Road, Opp. Vishal Bakery, Anand 388001
            </p>
          </div>
        </div>
      )}
    </>
  );
};
