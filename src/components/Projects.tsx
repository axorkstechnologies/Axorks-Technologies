import React, { useState } from 'react';
import { motion } from 'motion/react';
import { PROJECTS } from '../data/mockData';
import { ArrowRight } from 'lucide-react';

const ACCENT_MAP: Record<string, { text: string; border: string; bg: string }> = {
  gold: { text: 'text-[#F5C761]', border: 'border-[#F5C761]/30', bg: 'bg-[#F5C761]' },
  emerald: { text: 'text-[#10B981]', border: 'border-[#10B981]/30', bg: 'bg-[#10B981]' },
  violet: { text: 'text-[#8B5CF6]', border: 'border-[#8B5CF6]/30', bg: 'bg-[#8B5CF6]' },
  wine: { text: 'text-[#F43F5E]', border: 'border-[#881337]/30', bg: 'bg-[#881337]' },
};

interface ProjectCardProps {
  project: typeof PROJECTS[0];
  index: number;
}

const ProjectCard: React.FC<ProjectCardProps> = ({ project, index }) => {
  const [activeImage, setActiveImage] = useState(0);
  const accent = ACCENT_MAP[project.accent] || ACCENT_MAP.gold;
  const isReversed = index % 2 === 1;

  return (
    <motion.div
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: '-100px' }}
      transition={{ duration: 0.6, delay: 0.1 }}
      className="rounded-2xl chromatic-border glass-card overflow-hidden transition-all duration-300 hover:border-[var(--border-glow)]"
    >
      <div className={`grid grid-cols-1 lg:grid-cols-12`}>
        {/* Image Section */}
        <div className={`lg:col-span-7 relative ${isReversed ? 'lg:order-last' : 'lg:order-first'}`}>
          {/* Main Image */}
          <div className="relative min-h-[280px] sm:min-h-[340px] lg:min-h-[420px] overflow-hidden bg-[var(--bg-primary)]">
            <img
              src={project.images[activeImage].src}
              alt={project.images[activeImage].alt}
              className="w-full h-full object-cover transition-all duration-700 hover:scale-[1.03]"
              loading="lazy"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-[var(--bg-card)] via-transparent to-transparent pointer-events-none opacity-60" />

            {/* Badges */}
            <div className="absolute bottom-4 left-4 flex flex-wrap items-center gap-2">
              <span className={`px-3 py-1 rounded-full glass-card ${accent.border} font-mono-code text-[11px] ${accent.text} uppercase font-medium`}>
                {project.categoryBadge}
              </span>
              <span className="px-3 py-1 rounded-full glass-card border-white/10 font-mono-code text-[11px] text-[var(--text-primary)] uppercase">
                {project.statusBadge}
              </span>
            </div>
          </div>

          {/* Thumbnail Gallery */}
          {project.images.length > 1 && (
            <div className="flex gap-2 p-3 overflow-x-auto gallery-scroll bg-[var(--bg-card)]/80">
              {project.images.map((img, imgIdx) => (
                <button
                  key={imgIdx}
                  onClick={() => setActiveImage(imgIdx)}
                  className={`shrink-0 w-16 h-12 sm:w-20 sm:h-14 rounded-lg overflow-hidden border-2 transition-all cursor-pointer ${
                    activeImage === imgIdx
                      ? `${accent.border} shadow-lg scale-105`
                      : 'border-transparent opacity-60 hover:opacity-100'
                  }`}
                >
                  <img src={img.src} alt={img.alt} className="w-full h-full object-cover" loading="lazy" />
                </button>
              ))}
            </div>
          )}
        </div>

        {/* Content Section */}
        <div className="lg:col-span-5 p-6 sm:p-8 lg:p-10 flex flex-col justify-between">
          <div>
            <h3 className={`font-display-hero text-2xl sm:text-3xl font-bold ${accent.text}`}>
              {project.title}
            </h3>
            <p className="mt-1 text-sm text-[var(--text-muted)] font-medium">
              {project.tagline}
            </p>

            <p className="mt-4 text-sm sm:text-base text-[var(--text-secondary)] leading-relaxed">
              {project.description}
            </p>

            {/* Metrics */}
            <div className={`mt-6 grid grid-cols-2 gap-4 p-4 rounded-xl bg-[var(--bg-primary)]/60 border ${accent.border}`}>
              {project.metrics.map((metric, mIdx) => (
                <div key={mIdx}>
                  <div className={`font-display-hero text-xl sm:text-2xl font-bold ${mIdx === 0 ? accent.text : 'text-[var(--text-primary)]'}`}>
                    {metric.value}
                  </div>
                  <div className="text-[11px] text-[var(--text-muted)] mt-0.5 uppercase tracking-wider">
                    {metric.label}
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Tags & CTA */}
          <div className="mt-6 pt-4 border-t border-[var(--border-subtle)]">
            <div className="flex flex-wrap gap-2 mb-4">
              {project.tags.map((tag) => (
                <span key={tag} className="px-2.5 py-1 rounded-md bg-[var(--bg-tertiary)] text-[var(--text-muted)] font-mono-code text-[10px] uppercase tracking-wider">
                  {tag}
                </span>
              ))}
            </div>
            <button className={`inline-flex items-center gap-1.5 text-xs uppercase tracking-wider font-semibold ${accent.text} hover:underline cursor-pointer group`}>
              <span>View Case Study</span>
              <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
            </button>
          </div>
        </div>
      </div>
    </motion.div>
  );
};

export const Projects: React.FC = () => {
  return (
    <section className="w-full bg-[var(--bg-secondary)]/30 py-20 lg:py-28 px-4 lg:px-8 border-y border-[var(--border-subtle)]" id="work">
      <div className="max-w-7xl mx-auto">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-100px' }}
          transition={{ duration: 0.6 }}
          className="mb-16"
        >
          <div className="text-xs uppercase text-[#F5C761] tracking-wider font-semibold font-mono-code">
            Selected Work
          </div>
          <h2 className="mt-3 font-display-hero text-3xl md:text-4xl lg:text-[48px] text-[var(--text-primary)] font-bold tracking-tight">
            Products &amp; Platforms We Built.
          </h2>
          <p className="mt-4 max-w-2xl text-[var(--text-secondary)] text-base lg:text-lg">
            Real systems. Real screenshots. Built end-to-end by our team.
          </p>
        </motion.div>

        {/* Project Cards */}
        <div className="space-y-12 lg:space-y-16">
          {PROJECTS.map((project, i) => (
            <ProjectCard key={project.id} project={project} index={i} />
          ))}
        </div>
      </div>
    </section>
  );
};
