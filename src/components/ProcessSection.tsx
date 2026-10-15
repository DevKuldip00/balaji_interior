import type { FC } from 'react';
import { motion } from 'framer-motion';
import { MessageCircle, Compass, PenTool, Hammer } from 'lucide-react';
import { PROCESS_STEPS } from '../data/processData';

export const ProcessSection: FC = () => {
  const stepIcons = [MessageCircle, Compass, PenTool, Hammer];

  return (
    <section id="process" className="section" style={{ backgroundColor: 'var(--color-ivory-light)' }}>
      <div className="container">
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 sm:mb-16 gap-6">
          <div>
            <div className="section-tag">Structured Workflow</div>
            <h2 className="section-title text-charcoal">
              Our Process.{' '}
              <span className="block italic text-stone-500 font-serif font-light">
                Four transparent steps from concept to completion.
              </span>
            </h2>
            <p className="section-subtitle text-stone-600 font-sans">
              A collaborative, organized path where your ideas are translated into clear layouts,
              material selections, and well-executed interior spaces.
            </p>
          </div>

          <div className="hidden lg:block text-right">
            <span className="text-xs uppercase tracking-widest text-stone-400 font-sans block">
              Execution Model
            </span>
            <span className="text-sm font-serif italic text-bronze">
              Step-by-step alignment
            </span>
          </div>
        </div>

        {/* 4-Step Process Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 relative">
          {PROCESS_STEPS.map((step, index) => {
            const Icon = stepIcons[index];

            return (
              <motion.div
                key={step.number}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: '-40px' }}
                transition={{ duration: 0.5, delay: index * 0.12 }}
                className="bg-white border border-stone-200/90 rounded-sm p-6 sm:p-7 flex flex-col justify-between relative group hover:border-bronze hover:shadow-md transition-all"
                style={{
                  borderTop: '3px solid var(--color-bronze)',
                }}
              >
                <div>
                  {/* Step Number & Icon */}
                  <div className="flex items-center justify-between mb-5">
                    <span
                      className="font-serif text-3xl font-light text-stone-400 group-hover:text-bronze transition-colors select-none"
                      style={{ color: 'var(--color-bronze)' }}
                    >
                      {step.number}
                    </span>

                    <div
                      className="w-10 h-10 rounded-full flex items-center justify-center"
                      style={{
                        backgroundColor: 'rgba(156, 128, 91, 0.1)',
                        color: 'var(--color-bronze)',
                      }}
                    >
                      <Icon size={18} />
                    </div>
                  </div>

                  {/* Step Title & Tagline */}
                  <h3
                    className="text-2xl font-serif text-charcoal mb-1"
                    style={{ fontFamily: 'var(--font-serif)' }}
                  >
                    {step.name}
                  </h3>
                  <p className="text-xs text-bronze font-sans font-medium mb-4">
                    {step.tagline}
                  </p>

                  {/* Description */}
                  <p className="text-xs sm:text-sm text-stone-600 font-sans font-light leading-relaxed mb-6">
                    {step.description}
                  </p>
                </div>

                {/* Roles breakdown */}
                <div className="pt-4 border-t border-stone-100 flex flex-col gap-2.5 text-[11px] font-sans">
                  <div>
                    <span className="font-semibold text-charcoal uppercase tracking-wider block text-[10px]">
                      Your Input:
                    </span>
                    <span className="text-stone-500">{step.clientRole}</span>
                  </div>
                  <div>
                    <span className="font-semibold text-bronze uppercase tracking-wider block text-[10px]">
                      Our Focus:
                    </span>
                    <span className="text-stone-600">{step.ourRole}</span>
                  </div>
                </div>
              </motion.div>
            );
          })}
        </div>

        {/* Process Note */}
        <div className="mt-10 text-center text-xs text-stone-500 font-sans">
          <span>
            Every project begins with a relaxed, no-obligation conversation at our Anand studio or on-site.
          </span>
        </div>
      </div>
    </section>
  );
};
