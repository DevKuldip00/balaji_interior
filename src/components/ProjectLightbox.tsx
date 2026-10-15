import { useEffect, useCallback, type FC } from 'react';
import { X, ChevronLeft, ChevronRight, MessageSquare, MapPin, Sparkles, CheckCircle2 } from 'lucide-react';
import type { ProjectItem } from '../types';
import { createWhatsAppUrl } from '../data/companyInfo';

interface ProjectLightboxProps {
  project: ProjectItem | null;
  allProjects: ProjectItem[];
  onClose: () => void;
  onSelectProject: (project: ProjectItem) => void;
}

export const ProjectLightbox: FC<ProjectLightboxProps> = ({
  project,
  allProjects,
  onClose,
  onSelectProject,
}) => {
  const currentIndex = project ? allProjects.findIndex((p) => p.id === project.id) : -1;

  const handleNext = useCallback(() => {
    if (currentIndex >= 0) {
      const nextIndex = (currentIndex + 1) % allProjects.length;
      onSelectProject(allProjects[nextIndex]);
    }
  }, [currentIndex, allProjects, onSelectProject]);

  const handlePrev = useCallback(() => {
    if (currentIndex >= 0) {
      const prevIndex = (currentIndex - 1 + allProjects.length) % allProjects.length;
      onSelectProject(allProjects[prevIndex]);
    }
  }, [currentIndex, allProjects, onSelectProject]);

  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (!project) return;
      if (e.key === 'Escape') onClose();
      if (e.key === 'ArrowRight') handleNext();
      if (e.key === 'ArrowLeft') handlePrev();
    };

    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [project, onClose, handleNext, handlePrev]);

  useEffect(() => {
    if (project) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = '';
    }
    return () => {
      document.body.style.overflow = '';
    };
  }, [project]);

  if (!project) return null;

  const whatsappMessage = `Hello Balaji Interior Designer, I saw your project "${project.title}" on your website and would like to discuss something similar for my home in Anand.`;

  return (
    <div
      role="dialog"
      aria-modal="true"
      aria-labelledby="lightbox-project-title"
      className="fixed inset-0 z-50 flex items-center justify-center p-3 sm:p-6 md:p-8"
      style={{
        backgroundColor: 'rgba(14, 15, 13, 0.92)',
        backdropFilter: 'blur(16px)',
        WebkitBackdropFilter: 'blur(16px)',
      }}
      onClick={onClose}
    >
      {/* Modal Dialog Card */}
      <div
        className="relative w-full max-w-6xl max-h-[92vh] bg-[#1E1F1C] border border-stone-800 text-stone-100 rounded-sm shadow-2xl flex flex-col lg:flex-row overflow-hidden"
        style={{
          boxShadow: '0 25px 60px -15px rgba(0, 0, 0, 0.7)',
        }}
        onClick={(e) => e.stopPropagation()}
      >
        {/* Top Floating Controls on Mobile / Tablet */}
        <div className="absolute top-4 right-4 z-20 flex items-center gap-2">
          <button
            type="button"
            onClick={onClose}
            className="w-10 h-10 rounded-full bg-stone-900/80 hover:bg-stone-800 border border-stone-700 text-white flex items-center justify-center transition-all cursor-pointer"
            aria-label="Close project view"
          >
            <X size={20} />
          </button>
        </div>

        {/* Left Side: High-Resolution Photographic Display */}
        <div className="relative w-full lg:w-3/5 bg-black flex items-center justify-center min-h-[320px] sm:min-h-[420px] lg:min-h-[560px] overflow-hidden group">
          <img
            src={project.image}
            alt={project.title}
            className="w-full h-full object-contain max-h-[58vh] lg:max-h-[82vh] p-2 sm:p-4 select-none"
            loading="eager"
          />

          {/* Navigation Arrows */}
          <button
            type="button"
            onClick={handlePrev}
            className="absolute left-3 top-1/2 -translate-y-1/2 w-11 h-11 rounded-full bg-stone-900/75 hover:bg-stone-800 border border-stone-700/80 text-white flex items-center justify-center transition-all cursor-pointer opacity-90 hover:opacity-100 hover:scale-105"
            aria-label="Previous project"
          >
            <ChevronLeft size={22} />
          </button>

          <button
            type="button"
            onClick={handleNext}
            className="absolute right-3 top-1/2 -translate-y-1/2 w-11 h-11 rounded-full bg-stone-900/75 hover:bg-stone-800 border border-stone-700/80 text-white flex items-center justify-center transition-all cursor-pointer opacity-90 hover:opacity-100 hover:scale-105"
            aria-label="Next project"
          >
            <ChevronRight size={22} />
          </button>

          {/* Project Index Tracker */}
          <div className="absolute bottom-4 left-4 px-3 py-1 bg-stone-900/80 backdrop-blur-md rounded border border-stone-700/60 text-[11px] font-sans tracking-widest text-stone-300">
            {String(currentIndex + 1).padStart(2, '0')} / {String(allProjects.length).padStart(2, '0')}
          </div>
        </div>

        {/* Right Side: Architectural Specification Sheet */}
        <div className="w-full lg:w-2/5 p-6 sm:p-8 flex flex-col justify-between overflow-y-auto max-h-[48vh] lg:max-h-[85vh] bg-[#1E1F1C]">
          <div>
            {/* Category & Location Badges */}
            <div className="flex flex-wrap items-center gap-2 mb-3">
              <span className="text-[11px] uppercase tracking-widest font-sans font-semibold text-amber-300/90 border border-amber-300/30 px-2.5 py-0.5 rounded">
                {project.categoryLabel}
              </span>
              <span className="text-[11px] font-sans text-stone-400 flex items-center gap-1">
                <MapPin size={11} className="text-amber-400" />
                {project.locationLabel}
              </span>
            </div>

            {/* Title */}
            <h2
              id="lightbox-project-title"
              className="text-2xl sm:text-3xl font-serif text-white mb-4 leading-snug"
              style={{ fontFamily: 'var(--font-serif)' }}
            >
              {project.title}
            </h2>

            {/* Description */}
            <p className="text-sm text-stone-300 leading-relaxed mb-6 font-sans font-light">
              {project.fullDescription}
            </p>

            <div className="w-full h-px bg-stone-800 mb-6" />

            {/* Scope Deliverables */}
            <div className="mb-5">
              <h4 className="text-xs uppercase tracking-widest text-amber-200/80 font-sans font-semibold mb-2.5 flex items-center gap-1.5">
                <Sparkles size={12} className="text-amber-400" />
                Executed Scope & Craft
              </h4>
              <ul className="grid grid-cols-1 gap-2 text-xs text-stone-300">
                {project.scope.map((item, idx) => (
                  <li key={idx} className="flex items-start gap-2">
                    <CheckCircle2 size={13} className="text-emerald-400 mt-0.5 flex-shrink-0" />
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </div>

            {/* Materials Palette */}
            <div className="mb-5">
              <h4 className="text-xs uppercase tracking-widest text-stone-400 font-sans font-semibold mb-2">
                Materials & Finishes
              </h4>
              <div className="flex flex-wrap gap-1.5">
                {project.materials.map((mat, idx) => (
                  <span
                    key={idx}
                    className="text-[11px] bg-stone-900 text-stone-300 border border-stone-800 px-2.5 py-1 rounded"
                  >
                    {mat}
                  </span>
                ))}
              </div>
            </div>

            {/* Lighting Style */}
            <div className="mb-6">
              <h4 className="text-xs uppercase tracking-widest text-stone-400 font-sans font-semibold mb-1">
                Lighting Atmosphere
              </h4>
              <p className="text-xs text-stone-300 italic">{project.lightingStyle}</p>
            </div>
          </div>

          {/* Action Call to Action */}
          <div className="pt-4 border-t border-stone-800 flex flex-col gap-2.5">
            <a
              href={createWhatsAppUrl(whatsappMessage)}
              target="_blank"
              rel="noopener noreferrer"
              className="btn btn-whatsapp w-full justify-center text-xs sm:text-sm py-3"
              style={{ textDecoration: 'none' }}
            >
              <MessageSquare size={16} />
              <span>Inquire About This Style on WhatsApp</span>
            </a>

            <p className="text-[11px] text-center text-stone-400 font-sans">
              Connect directly with Balaji Interior Designer • Anand, Gujarat
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};
