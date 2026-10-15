import type { FC, MouseEvent } from 'react';
import { motion } from 'framer-motion';
import { MessageSquare, Compass, MapPin } from 'lucide-react';

export const Hero: FC = () => {
  const handleScrollToProjects = (e: MouseEvent) => {
    e.preventDefault();
    const portfolio = document.getElementById('portfolio');
    if (portfolio) {
      portfolio.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const handleScrollToContact = (e: MouseEvent) => {
    e.preventDefault();
    const contact = document.getElementById('contact');
    if (contact) {
      contact.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section
      id="home"
      className="relative w-full min-h-screen flex items-center justify-center overflow-hidden bg-[#181917]"
      style={{ minHeight: '100svh' }}
    >
      {/* Background Interior Photograph with Controlled Cropping & Depth */}
      <div className="absolute inset-0 z-0 overflow-hidden pointer-events-none">
        <img
          src="/images/projects/contemporary-living-room.jpg"
          alt="Contemporary living room interior designed by Balaji Interior Designer in Anand"
          fetchPriority="high"
          decoding="async"
          className="w-full h-full object-cover object-center"
          style={{
            filter: 'brightness(0.62) contrast(1.08)',
          }}
        />

        {/* Sophisticated Architectural Dark Vignette Overlay for Crisp Typography Legibility */}
        <div
          className="absolute inset-0"
          style={{
            background:
              'linear-gradient(180deg, rgba(18, 19, 17, 0.72) 0%, rgba(18, 19, 17, 0.45) 45%, rgba(18, 19, 17, 0.88) 100%)',
          }}
        />

        {/* Center Radial Softening */}
        <div
          className="absolute inset-0"
          style={{
            background:
              'radial-gradient(circle at 50% 50%, rgba(0, 0, 0, 0) 30%, rgba(18, 19, 17, 0.6) 100%)',
          }}
        />
      </div>

      {/* Main Centered Hero Content */}
      <div className="container relative z-10 pt-28 pb-24 sm:pt-32 sm:pb-28 flex flex-col items-center text-center text-white">
        {/* Location & Studio Pill */}
        <motion.div
          initial={{ opacity: 0, y: 15 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.1 }}
          className="inline-flex items-center gap-2 px-3.5 py-1.5 mb-6 border border-amber-200/25 bg-stone-950/50 backdrop-blur-md rounded-full text-xs font-sans tracking-widest text-amber-100 uppercase"
        >
          <MapPin size={12} className="text-amber-300" />
          <span>Anand, Gujarat</span>
          <span className="text-amber-200/40">•</span>
          <span className="text-stone-300">Interior Studio</span>
        </motion.div>

        {/* Editorial Headline with Controlled Breaks */}
        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.75, delay: 0.2 }}
          className="text-4xl sm:text-6xl md:text-7xl font-serif font-normal tracking-tight text-white max-w-4xl mx-auto leading-[1.1] mb-5 sm:mb-6"
          style={{ fontFamily: 'var(--font-serif)' }}
        >
          Beautiful spaces.{' '}
          <span className="block italic text-amber-100/95 font-light">
            Designed around you.
          </span>
        </motion.h1>

        {/* Subtle Bronze Accent Line */}
        <motion.div
          initial={{ scaleX: 0 }}
          animate={{ scaleX: 1 }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="w-12 h-0.5 bg-amber-400/50 mb-6"
        />

        {/* Supporting Copy with Controlled Readable Max-Width */}
        <motion.p
          initial={{ opacity: 0, y: 15 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.45 }}
          className="text-base sm:text-lg md:text-xl text-stone-200 max-w-xl mx-auto font-sans font-light leading-relaxed mb-8 sm:mb-10"
        >
          Thoughtful interior design, bespoke furniture, and refined details for homes that feel
          uniquely yours.
        </motion.p>

        {/* Dual Actions with Consistent Heights & Spacing */}
        <motion.div
          initial={{ opacity: 0, y: 15 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.6 }}
          className="flex flex-col sm:flex-row items-center justify-center gap-4 w-full sm:w-auto"
        >
          <a
            href="#portfolio"
            onClick={handleScrollToProjects}
            className="btn btn-bronze w-full sm:w-auto text-xs sm:text-sm py-3 px-8 flex items-center justify-center gap-2 group"
          >
            <span>Explore Our Projects</span>
            <Compass
              size={15}
              className="transform group-hover:rotate-45 transition-transform duration-300"
            />
          </a>

          <a
            href="#contact"
            onClick={handleScrollToContact}
            className="btn btn-outline-light w-full sm:w-auto text-xs sm:text-sm py-3 px-8 flex items-center justify-center gap-2"
          >
            <MessageSquare size={15} className="text-amber-200" />
            <span>Discuss Your Home</span>
          </a>
        </motion.div>

        {/* Subtitle Attribution */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.8, delay: 0.8 }}
          className="mt-8 sm:mt-12 text-[10px] sm:text-[11px] text-stone-300/80 font-sans tracking-wider uppercase flex flex-wrap items-center justify-center gap-1.5 px-3 max-w-full text-center"
        >
          <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 flex-shrink-0" />
          <span>Real Residential & Commercial Craftsmanship in Anand</span>
        </motion.div>
      </div>

      {/* Refined Scroll Indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.8, delay: 0.9 }}
        className="absolute bottom-5 left-1/2 transform -translate-x-1/2 z-10 flex flex-col items-center pointer-events-auto"
      >
        <a
          href="#portfolio"
          onClick={handleScrollToProjects}
          className="flex flex-col items-center gap-1.5 text-stone-400 hover:text-white transition-colors group"
          aria-label="Scroll down to projects"
        >
          <span className="text-[10px] uppercase tracking-widest font-sans font-medium text-stone-300 group-hover:text-amber-200 transition-colors">
            Scroll to explore
          </span>
          <div className="w-4 h-7 border border-white/25 rounded-full flex justify-center pt-1 group-hover:border-amber-300/60 transition-colors">
            <motion.div
              animate={{ y: [0, 6, 0] }}
              transition={{ repeat: Infinity, duration: 1.8, ease: 'easeInOut' }}
              className="w-1 h-1.5 bg-amber-300/90 rounded-full"
            />
          </div>
        </a>
      </motion.div>
    </section>
  );
};
