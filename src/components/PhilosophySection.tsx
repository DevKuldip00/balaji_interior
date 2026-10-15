import type { FC } from 'react';
import { motion } from 'framer-motion';
import { Sparkles, Compass, Lightbulb, ShieldCheck } from 'lucide-react';

export const PhilosophySection: FC = () => {
  const principles = [
    {
      title: 'Functional Harmony',
      description:
        'A room must serve your daily routines effortlessly. We design storage, circulation paths, and furniture dimensions that feel natural and intuitive.',
      icon: Compass,
    },
    {
      title: 'Material Tactility',
      description:
        'From rich natural wood and textured fluted panels to sleek quartz and matte lacquers, we combine materials that feel pleasant to touch and withstand daily wear.',
      icon: Sparkles,
    },
    {
      title: 'Atmospheric Lighting',
      description:
        'Lighting defines the soul of an interior. We balance concealed warm coves, task lighting for work surfaces, and gentle accent spotlights.',
      icon: Lightbulb,
    },
  ];

  return (
    <section id="philosophy" className="section overflow-hidden bg-[#FAF8F5]">
      <div className="container">
        {/* Split Editorial Layout */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
          {/* Left Column: Editorial Typography & Principles */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: '-60px' }}
            transition={{ duration: 0.7 }}
            className="lg:col-span-6 flex flex-col"
          >
            <div className="section-tag">Design Philosophy</div>

            <h2
              className="text-3xl sm:text-4xl md:text-5xl font-serif text-charcoal mb-6 leading-[1.15]"
              style={{ fontFamily: 'var(--font-serif)' }}
            >
              Every detail matters.{' '}
              <span className="block italic text-stone-500 font-light">
                Every space tells a story.
              </span>
            </h2>

            <div className="w-16 h-px bg-bronze mb-6" style={{ backgroundColor: 'var(--color-bronze)' }} />

            <p className="text-base sm:text-lg text-stone-700 font-sans font-light leading-relaxed mb-8">
              We bring together thoughtful planning, functional layouts, materials, lighting, and
              furniture to create interiors that feel harmonious, personal, and practical.
            </p>

            {/* Principles Stack */}
            <div className="flex flex-col gap-6 pt-4 border-t border-stone-300">
              {principles.map((p, idx) => {
                const IconComponent = p.icon;
                return (
                  <div key={idx} className="flex items-start gap-4">
                    <div
                      className="w-10 h-10 rounded-full flex items-center justify-center flex-shrink-0 mt-1"
                      style={{
                        backgroundColor: 'rgba(156, 128, 91, 0.12)',
                        color: 'var(--color-bronze-dark)',
                      }}
                    >
                      <IconComponent size={18} />
                    </div>
                    <div>
                      <h4 className="text-base font-serif font-semibold text-charcoal mb-1">
                        {p.title}
                      </h4>
                      <p className="text-xs sm:text-sm text-stone-600 font-sans font-light leading-relaxed">
                        {p.description}
                      </p>
                    </div>
                  </div>
                );
              })}
            </div>
          </motion.div>

          {/* Right Column: Visual Architectural Showcase featuring real project photo */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: '-60px' }}
            transition={{ duration: 0.7, delay: 0.15 }}
            className="lg:col-span-6 flex flex-col relative"
          >
            {/* Layered Composition with Photo */}
            <div className="relative">
              {/* Decorative Frame Underlay */}
              <div
                className="absolute -top-4 -right-4 w-full h-full border border-amber-900/15 rounded-sm -z-0 hidden sm:block"
                style={{ borderColor: 'rgba(156, 128, 91, 0.3)' }}
              />

              {/* Main Image Container */}
              <div
                className="relative z-10 overflow-hidden rounded-sm bg-stone-900 shadow-xl"
                style={{
                  border: '1px solid rgba(166, 154, 137, 0.3)',
                }}
              >
                <div className="aspect-[4/5] sm:aspect-[4/4.5] w-full relative">
                  <img
                    src="/images/projects/feather-feature-wall.jpg"
                    alt="Sculptural feature wall with illuminated feather artwork in Anand"
                    loading="lazy"
                    decoding="async"
                    className="w-full h-full object-cover object-center"
                  />

                  {/* Gradient Lighting overlay */}
                  <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-transparent to-transparent" />

                  {/* Floating Caption on Image */}
                  <div className="absolute bottom-6 left-6 right-6 p-4 bg-stone-950/80 backdrop-blur-md rounded border border-stone-800 text-stone-200">
                    <span className="text-[10px] uppercase tracking-widest text-amber-300 font-sans font-semibold block mb-1">
                      Craft Highlight • Feature Wall
                    </span>
                    <p className="text-xs font-serif italic text-stone-100">
                      “Backlit 3D bas-relief feather wall panel with fluted acoustic reeding,
                      executed for an Anand client.”
                    </p>
                  </div>
                </div>
              </div>
            </div>

            {/* Micro Quote Banner Below */}
            <div className="mt-6 flex items-center justify-between px-2 text-xs text-stone-500 font-sans">
              <span className="flex items-center gap-1.5">
                <ShieldCheck size={14} className="text-emerald-600" />
                Grounded in practical, livable design
              </span>
              <span>Anand Studio, Saral Chandra Complex</span>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};
