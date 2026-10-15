import type { FC } from 'react';
import { motion } from 'framer-motion';
import { LayoutGrid, Sliders, Sparkles, Layers, MapPin, CheckCircle } from 'lucide-react';
import { WHY_US_POINTS } from '../data/processData';

export const WhyUsSection: FC = () => {
  const icons = [LayoutGrid, Sliders, Sparkles, Layers, MapPin];

  return (
    <section id="why-us" className="section" style={{ backgroundColor: 'var(--color-ivory)' }}>
      <div className="container">
        {/* Section Header */}
        <div className="text-center max-w-2xl mx-auto mb-14 sm:mb-18">
          <div className="section-tag justify-center">The Practical Value</div>
          <h2 className="section-title text-charcoal">
            Why Work With Us.{' '}
            <span className="block italic text-stone-500 font-serif font-light">
              Clear planning. Honest craftsmanship.
            </span>
          </h2>
          <p className="section-subtitle mx-auto text-stone-600 font-sans">
            Investing in interior design is about creating a home that functions smoothly every day
            while reflecting your personal aesthetic. Here is the tangible value we bring to every
            project.
          </p>
          <div className="arch-line arch-line-center mt-6" />
        </div>

        {/* Feature Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
          {WHY_US_POINTS.map((point, index) => {
            const IconComp = icons[index % icons.length];
            return (
              <motion.div
                key={point.id}
                initial={{ opacity: 0, y: 25 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: '-40px' }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="luxury-card p-6 sm:p-8 rounded-sm flex flex-col justify-between"
              >
                <div>
                  {/* Icon & Counter */}
                  <div className="flex items-center justify-between mb-6">
                    <div
                      className="w-12 h-12 rounded-sm flex items-center justify-center"
                      style={{
                        backgroundColor: 'rgba(156, 128, 91, 0.12)',
                        color: 'var(--color-bronze-dark)',
                      }}
                    >
                      <IconComp size={22} />
                    </div>
                    <span className="font-serif text-lg text-stone-400 font-light">
                      0{index + 1}
                    </span>
                  </div>

                  {/* Title */}
                  <h3
                    className="text-xl sm:text-2xl font-serif text-charcoal mb-3"
                    style={{ fontFamily: 'var(--font-serif)' }}
                  >
                    {point.title}
                  </h3>

                  {/* Description */}
                  <p className="text-sm text-stone-600 font-sans font-light leading-relaxed mb-4">
                    {point.description}
                  </p>
                </div>

                {/* Practical Highlight Box */}
                <div className="pt-4 border-t border-stone-100 flex items-start gap-2 text-xs text-stone-700 bg-stone-50 p-3 rounded-sm">
                  <CheckCircle size={14} className="text-emerald-600 mt-0.5 flex-shrink-0" />
                  <span>{point.detail}</span>
                </div>
              </motion.div>
            );
          })}
        </div>

        {/* Grounded Honesty Pledge Banner */}
        <div className="mt-12 text-center p-6 bg-stone-200/50 border border-stone-300 rounded-sm max-w-3xl mx-auto text-xs text-stone-600 font-sans leading-relaxed">
          <p className="font-semibold text-charcoal mb-1">Our Transparent Design Promise</p>
          <p>
            We believe in honest consultations and straightforward scopes. We do not make inflated
            claims—our focus is on reliable local coordination, precision carpentry, and interiors
            that stand the test of time.
          </p>
        </div>
      </div>
    </section>
  );
};
