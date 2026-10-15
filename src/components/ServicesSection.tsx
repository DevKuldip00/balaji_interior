import { useState, type FC } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Plus, Minus, MessageSquare, CheckCircle2 } from 'lucide-react';
import { SERVICES_DATA } from '../data/servicesData';
import { createWhatsAppUrl } from '../data/companyInfo';

export const ServicesSection: FC = () => {
  const [expandedIndex, setExpandedIndex] = useState<number | null>(0); // First service open by default

  const toggleExpand = (idx: number) => {
    setExpandedIndex(expandedIndex === idx ? null : idx);
  };

  return (
    <section id="services" className="section section-dark">
      <div className="container">
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 sm:mb-16 gap-6">
          <div>
            <div className="section-tag" style={{ color: 'var(--color-bronze-light)' }}>
              Tailored Expertise
            </div>
            <h2 className="section-title text-white">
              Interior Services.{' '}
              <span
                className="block italic font-serif font-light"
                style={{ color: 'var(--color-taupe-light)' }}
              >
                Comprehensive residential & bespoke craft.
              </span>
            </h2>
            <p className="section-subtitle font-sans" style={{ color: 'rgba(245, 242, 236, 0.75)' }}>
              From initial 2D layout planning to final on-site carpentry and lighting installation,
              we deliver end-to-end craftsmanship tailored to homes in Anand and nearby regions.
            </p>
          </div>

          <div className="hidden sm:block">
            <span
              className="text-xs font-sans uppercase tracking-widest block text-right"
              style={{ color: 'var(--color-bronze-light)' }}
            >
              Services Index
            </span>
            <span className="text-sm font-serif italic text-stone-400 block text-right">
              01 through 06
            </span>
          </div>
        </div>

        {/* Services Accordion List with Editorial Typography */}
        <div className="border-t border-stone-800">
          {SERVICES_DATA.map((service, index) => {
            const isExpanded = expandedIndex === index;

            return (
              <motion.div
                key={service.number}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: '-40px' }}
                transition={{ duration: 0.5, delay: index * 0.08 }}
                className="border-b border-stone-800 transition-colors"
                style={{
                  backgroundColor: isExpanded ? 'rgba(38, 39, 36, 0.5)' : 'transparent',
                }}
              >
                {/* Header Row */}
                <button
                  type="button"
                  onClick={() => toggleExpand(index)}
                  className="w-full py-6 sm:py-8 flex items-center justify-between text-left cursor-pointer group focus:outline-none"
                  aria-expanded={isExpanded}
                >
                  <div className="flex items-baseline gap-4 sm:gap-8 md:gap-12 flex-1">
                    {/* Number */}
                    <span
                      className="font-serif text-2xl sm:text-3xl md:text-4xl font-light text-stone-500 group-hover:text-amber-200 transition-colors select-none w-10 sm:w-14"
                      style={{
                        color: isExpanded ? 'var(--color-bronze-light)' : 'rgba(166, 154, 137, 0.6)',
                      }}
                    >
                      {service.number}
                    </span>

                    {/* Title & Subtitle */}
                    <div className="flex-1 pr-4">
                      <h3
                        className="text-xl sm:text-2xl md:text-3xl font-serif text-white group-hover:text-amber-100 transition-colors"
                        style={{ fontFamily: 'var(--font-serif)' }}
                      >
                        {service.title}
                      </h3>
                      <p
                        className="text-xs sm:text-sm font-sans mt-1 line-clamp-1 hidden sm:block"
                        style={{ color: 'rgba(220, 215, 205, 0.65)' }}
                      >
                        {service.subtitle}
                      </p>
                    </div>
                  </div>

                  {/* Toggle Icon */}
                  <div
                    className="w-9 h-9 sm:w-11 sm:h-11 rounded-full border border-stone-700 flex items-center justify-center text-stone-400 group-hover:border-amber-400/50 group-hover:text-amber-200 transition-all ml-2 flex-shrink-0"
                    style={{
                      borderColor: isExpanded ? 'var(--color-bronze)' : 'rgba(255, 255, 255, 0.15)',
                      color: isExpanded ? 'var(--color-bronze-light)' : 'rgba(255, 255, 255, 0.6)',
                    }}
                  >
                    {isExpanded ? <Minus size={16} /> : <Plus size={16} />}
                  </div>
                </button>

                {/* Expanded Content Drawer */}
                <AnimatePresence>
                  {isExpanded && (
                    <motion.div
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: 'auto', opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      transition={{ duration: 0.35, ease: 'easeInOut' }}
                      className="overflow-hidden"
                    >
                      <div className="pb-8 pt-2 pl-4 sm:pl-16 md:pl-20 pr-4 sm:pr-8 grid grid-cols-1 lg:grid-cols-12 gap-8 text-stone-300">
                        {/* Description & Suited For */}
                        <div className="lg:col-span-7">
                          <p className="text-sm sm:text-base font-sans font-light leading-relaxed mb-5 text-stone-300">
                            {service.description}
                          </p>

                          <div className="p-3.5 bg-stone-900/60 border border-stone-800 rounded text-xs text-stone-400 font-sans">
                            <span className="font-semibold text-amber-200 uppercase tracking-wider block mb-1">
                              Best Suited For:
                            </span>
                            {service.suitedFor}
                          </div>
                        </div>

                        {/* Deliverables List & Inquiry CTA */}
                        <div className="lg:col-span-5 flex flex-col justify-between">
                          <div>
                            <span className="text-xs uppercase tracking-widest text-amber-300/80 font-sans font-semibold block mb-3">
                              What We Coordinate & Deliver:
                            </span>
                            <ul className="flex flex-col gap-2 text-xs sm:text-sm text-stone-300">
                              {service.deliverables.map((item, idx) => (
                                <li key={idx} className="flex items-start gap-2">
                                  <CheckCircle2
                                    size={14}
                                    className="text-amber-400 mt-0.5 flex-shrink-0"
                                  />
                                  <span>{item}</span>
                                </li>
                              ))}
                            </ul>
                          </div>

                          <div className="mt-6 pt-4 border-t border-stone-800/80 flex items-center justify-between">
                            <a
                              href={createWhatsAppUrl(
                                `Hello Balaji Interior Designer, I would like to inquire about your service: "${service.title}" for my property in Anand.`
                              )}
                              target="_blank"
                              rel="noopener noreferrer"
                              className="btn btn-whatsapp-editorial text-xs py-2 px-4 inline-flex items-center gap-2"
                              style={{ textDecoration: 'none' }}
                            >
                              <MessageSquare size={13} style={{ color: '#25D366' }} />
                              <span>Discuss {service.title}</span>
                            </a>

                            <span className="text-[11px] text-stone-500 font-sans italic hidden sm:inline">
                              Direct Anand On-Site Coordination
                            </span>
                          </div>
                        </div>
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
};
