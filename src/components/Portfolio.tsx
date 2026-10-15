import { useState, type FC } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Eye, ArrowUpRight, MessageSquare, MapPin } from 'lucide-react';
import type { ProjectItem } from '../types';
import { PROJECTS_DATA } from '../data/projectsData';
import { ProjectLightbox } from './ProjectLightbox';
import { createWhatsAppUrl } from '../data/companyInfo';

export const Portfolio: FC = () => {
  const [selectedCategory, setSelectedCategory] = useState<string>('All');
  const [activeLightboxProject, setActiveLightboxProject] = useState<ProjectItem | null>(null);

  const categories = [
    'All',
    'Living Spaces',
    'Kitchen & Dining',
    'Feature Walls',
    'Architectural Details',
  ];

  const filteredProjects =
    selectedCategory === 'All'
      ? PROJECTS_DATA
      : PROJECTS_DATA.filter((p) => p.category === selectedCategory);

  return (
    <section id="portfolio" className="section bg-[#F5F2EC]">
      <div className="container">
        {/* Editorial Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-10 sm:mb-14 gap-6">
          <div className="max-w-2xl">
            <div className="section-tag">Curated Portfolio</div>
            <h2 className="section-title">
              Craftsmanship in Anand.{' '}
              <span className="block italic text-stone-500 font-serif font-light">
                Executed spaces & bespoke details.
              </span>
            </h2>
            <p className="section-subtitle">
              Explore authentic interior projects delivered by Balaji Interior Designer. Each space
              demonstrates tailored spatial planning, precision joinery, and harmonious lighting.
            </p>
          </div>

          {/* Quick Portfolio Stats */}
          <div className="hidden sm:flex items-center gap-6 border-l border-stone-300 pl-6 py-2 flex-shrink-0">
            <div>
              <span className="block text-3xl font-serif text-[#A88B67] font-semibold leading-none mb-1">
                05
              </span>
              <span className="text-[11px] uppercase tracking-widest text-stone-500 font-sans">
                Real Projects
              </span>
            </div>
            <div>
              <span className="block text-3xl font-serif text-[#22221F] font-semibold leading-none mb-1">
                Anand
              </span>
              <span className="text-[11px] uppercase tracking-widest text-stone-500 font-sans">
                Gujarat Central Hub
              </span>
            </div>
          </div>
        </div>

        {/* Category Filter Pills */}
        <div className="flex flex-wrap items-center gap-2 sm:gap-2.5 mb-10 sm:mb-12 pb-4 border-b border-stone-300/70">
          {categories.map((cat) => {
            const isActive = selectedCategory === cat;
            return (
              <button
                key={cat}
                type="button"
                onClick={() => setSelectedCategory(cat)}
                className={`px-4 py-2 text-xs uppercase tracking-widest font-sans transition-all cursor-pointer rounded-sm border ${
                  isActive
                    ? 'bg-[#22221F] text-[#F5F2EC] border-[#22221F] font-semibold shadow-sm'
                    : 'bg-stone-200/60 text-stone-700 border-stone-300/80 hover:bg-stone-300/70 hover:text-stone-900'
                }`}
              >
                {cat}
                {cat === 'All' && ` (${PROJECTS_DATA.length})`}
              </button>
            );
          })}
        </div>

        {/* Responsive CSS Grid: 2 Columns on Desktop, 1 Column on Mobile */}
        <motion.div layout className="grid grid-cols-1 md:grid-cols-2 gap-8 lg:gap-10 items-start">
          <AnimatePresence>
            {filteredProjects.map((project, index) => {
              // Project 1 spans both columns on desktop for editorial emphasis
              const isHeroCard = project.id === 'contemporary-living-room' && selectedCategory === 'All';
              const colClass = isHeroCard ? 'md:col-span-2' : 'col-span-1';

              return (
                <motion.div
                  key={project.id}
                  layout
                  initial={{ opacity: 0, y: 25 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, margin: '-40px' }}
                  transition={{ duration: 0.5, delay: index * 0.08 }}
                  className={`${colClass} group flex flex-col bg-white border border-stone-300/70 rounded-sm overflow-hidden shadow-sm hover:shadow-md transition-shadow`}
                >
                  {/* Controlled Image Box with Fixed Aspect Ratio */}
                  <div
                    className="portfolio-img-box cursor-pointer"
                    onClick={() => setActiveLightboxProject(project)}
                  >
                    <div
                      className={`relative w-full ${
                        isHeroCard
                          ? 'aspect-[16/9] sm:aspect-[21/9]'
                          : 'aspect-[16/10]'
                      }`}
                    >
                      <img
                        src={project.image}
                        alt={project.title}
                        loading="lazy"
                        decoding="async"
                        className="w-full h-full object-cover object-center"
                      />

                      {/* Dark Gradient Overlay for Readability */}
                      <div className="absolute inset-0 bg-gradient-to-t from-black/75 via-black/20 to-transparent opacity-60 group-hover:opacity-75 transition-opacity" />

                      {/* Category Badge Pill on Top Left */}
                      <div className="absolute top-4 left-4 z-10">
                        <span className="px-3 py-1 bg-stone-950/85 backdrop-blur-md text-[10px] uppercase tracking-widest font-sans font-semibold text-amber-200 border border-white/15 rounded-sm">
                          {project.categoryLabel}
                        </span>
                      </div>

                      {/* Hover Center Indicator */}
                      <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity pointer-events-none">
                        <div className="px-4 py-2 bg-stone-900/90 backdrop-blur-md rounded text-white text-xs font-sans tracking-widest uppercase flex items-center gap-2 border border-white/20 shadow-lg">
                          <Eye size={14} className="text-amber-300" />
                          <span>View Project Details</span>
                        </div>
                      </div>

                      {/* Location Badge on Bottom Right */}
                      <div className="absolute bottom-3 right-3 z-10">
                        <span className="px-2.5 py-1 bg-black/60 backdrop-blur-sm text-[10px] font-sans text-stone-300 flex items-center gap-1 rounded-sm border border-white/10">
                          <MapPin size={10} className="text-amber-400" />
                          {project.locationLabel}
                        </span>
                      </div>
                    </div>
                  </div>

                  {/* Metadata Beneath the Image */}
                  <div className="p-5 sm:p-6 flex flex-col flex-1 justify-between">
                    <div>
                      {/* Project Title */}
                      <h3
                        className="text-xl sm:text-2xl font-serif text-[#22221F] group-hover:text-[#A88B67] transition-colors cursor-pointer mb-2 leading-snug"
                        style={{ fontFamily: 'var(--font-serif)' }}
                        onClick={() => setActiveLightboxProject(project)}
                      >
                        {project.title}
                      </h3>

                      {/* Short Description */}
                      <p className="text-xs sm:text-sm text-stone-600 font-sans font-light leading-relaxed mb-4">
                        {project.shortDescription}
                      </p>

                      {/* Executed Scope Chips */}
                      <div className="flex flex-wrap gap-1.5 mb-5">
                        {project.scope.map((item, idx) => (
                          <span
                            key={idx}
                            className="text-[10px] bg-stone-100 text-stone-700 border border-stone-200 px-2.5 py-1 rounded-sm font-sans"
                          >
                            {item}
                          </span>
                        ))}
                      </div>
                    </div>

                    {/* Action Row */}
                    <div className="pt-4 border-t border-stone-200/80 flex items-center justify-between gap-3">
                      <button
                        type="button"
                        onClick={() => setActiveLightboxProject(project)}
                        className="inline-flex items-center gap-1.5 text-xs uppercase tracking-wider font-sans font-medium text-stone-700 hover:text-[#A88B67] transition-colors cursor-pointer"
                      >
                        <span>Specifications</span>
                        <ArrowUpRight size={14} />
                      </button>

                      <a
                        href={createWhatsAppUrl(
                          `Hello Balaji Interior Designer, I would like to inquire about your project: "${project.title}".`
                        )}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center gap-1.5 text-emerald-700 hover:text-emerald-800 font-sans font-medium text-xs tracking-wider uppercase transition-colors"
                      >
                        <MessageSquare size={13} />
                        <span>Inquire on WhatsApp</span>
                      </a>
                    </div>
                  </div>
                </motion.div>
              );
            })}
          </AnimatePresence>
        </motion.div>

        {/* Authentic Project Verification Footer Banner */}
        <div className="mt-12 sm:mt-14 p-5 sm:p-6 bg-white border border-stone-300/80 rounded-sm flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4 text-xs font-sans text-stone-600">
          <div>
            <p className="font-semibold text-[#22221F] mb-0.5">Authentic Central Gujarat Photography</p>
            <p className="text-stone-500">
              All 5 projects shown above document real residential and commercial interiors executed
              by Balaji Interior Designer in Anand.
            </p>
          </div>

          <a
            href={createWhatsAppUrl(
              'Hello Balaji Interior Designer, I would like to discuss my interior floor plan at your Anand studio.'
            )}
            target="_blank"
            rel="noopener noreferrer"
            className="btn btn-primary text-xs py-2 px-5 whitespace-nowrap"
          >
            <span>Book Studio Consultation</span>
          </a>
        </div>
      </div>

      {/* Accessible Interactive Lightbox */}
      <ProjectLightbox
        project={activeLightboxProject}
        allProjects={PROJECTS_DATA}
        onClose={() => setActiveLightboxProject(null)}
        onSelectProject={(proj) => setActiveLightboxProject(proj)}
      />
    </section>
  );
};
