import { useState, useEffect, type FC } from 'react';
import { MessageSquare, Phone } from 'lucide-react';
import { COMPANY_INFO, createWhatsAppUrl, DEFAULT_WHATSAPP_MESSAGE } from '../data/companyInfo';

export const FloatingActions: FC = () => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      // Show only after scrolling down 300px
      if (window.scrollY > 300) {
        setIsVisible(true);
      } else {
        setIsVisible(false);
      }
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  if (!isVisible) return null;

  return (
    <div
      className="fixed bottom-4 left-4 right-4 sm:hidden z-40 flex items-center gap-2 p-2 rounded-full shadow-2xl border border-stone-700/80"
      style={{
        backgroundColor: 'rgba(26, 27, 24, 0.94)',
        backdropFilter: 'blur(12px)',
        WebkitBackdropFilter: 'blur(12px)',
      }}
    >
      <a
        href={`tel:${COMPANY_INFO.phoneRaw}`}
        className="flex-1 py-2.5 px-3 rounded-full bg-stone-800 text-stone-200 text-xs font-sans font-medium flex items-center justify-center gap-1.5 transition-colors"
        style={{ textDecoration: 'none' }}
      >
        <Phone size={13} style={{ color: 'var(--color-bronze-light)' }} />
        <span>Call Studio</span>
      </a>

      <a
        href={createWhatsAppUrl(DEFAULT_WHATSAPP_MESSAGE)}
        target="_blank"
        rel="noopener noreferrer"
        className="flex-1 py-2.5 px-3 rounded-full bg-[#25D366] text-white text-xs font-sans font-semibold flex items-center justify-center gap-1.5 shadow-md"
        style={{ textDecoration: 'none' }}
      >
        <MessageSquare size={13} />
        <span>WhatsApp</span>
      </a>
    </div>
  );
};
