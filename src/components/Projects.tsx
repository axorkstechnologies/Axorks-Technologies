import React, { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { PROJECTS } from '../data/mockData';
import { ArrowRight, Maximize2, X, Activity, CheckCircle2 } from 'lucide-react';

const ACCENT_COLORS: Record<string, {
  color: string;
  glow: string;
  badgeBg: string;
}> = {
  emerald: {
    color: 'var(--emerald)',
    glow: 'rgba(16, 185, 129, 0.25)',
    badgeBg: 'rgba(16, 185, 129, 0.15)',
  },
  gold: {
    color: 'var(--gold)',
    glow: 'rgba(245, 199, 97, 0.25)',
    badgeBg: 'rgba(245, 199, 97, 0.15)',
  },
  violet: {
    color: 'var(--violet)',
    glow: 'rgba(139, 92, 246, 0.25)',
    badgeBg: 'rgba(139, 92, 246, 0.15)',
  },
  wine: {
    color: 'var(--wine)',
    glow: 'rgba(190, 18, 60, 0.25)',
    badgeBg: 'rgba(190, 18, 60, 0.15)',
  },
};

export const Projects: React.FC = () => {
  const [selectedImages, setSelectedImages] = useState<Record<string, number>>({
    agrotrace: 0,
    'ipmi-os': 0,
    mediverse: 0,
    fume: 0,
  });

  const [lightboxImage, setLightboxImage] = useState<{ src: string; alt: string; title: string } | null>(null);

  const handleSelectImage = (projectId: string, index: number) => {
    setSelectedImages((prev) => ({ ...prev, [projectId]: index }));
  };

  return (
    <section className="w-full py-20 lg:py-28 px-4 sm:px-6 lg:px-8 relative bg-[var(--bg-secondary)]/40 border-y border-[var(--glass-border)]" id="work">
      <div className="max-w-7xl mx-auto relative z-10">
        {/* Section Header — Proof Through Work */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-16 sm:mb-20">
          <div>
            <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full glass-2 border-[var(--emerald)]/30 text-xs uppercase text-[var(--emerald)] tracking-widest font-semibold font-mono-code mb-3">
              <Activity className="w-3.5 h-3.5" />
              <span>Proof Through Work</span>
            </div>
            <h2 className="font-display-hero text-3xl sm:text-4xl lg:text-[48px] text-[var(--text-primary)] font-extrabold tracking-tight">
              Platforms We Have Designed, Built &amp; Deployed.
            </h2>
          </div>

          <div className="font-mono-code text-xs text-[var(--text-muted)] flex items-center gap-2">
            <span className="w-2.5 h-2.5 rounded-full bg-[#10B981] animate-ping" />
            <span>Real Production Systems • Click Any Screenshot to Expand</span>
          </div>
        </div>

        {/* 4 Case Study Cards */}
        <div className="space-y-16 lg:space-y-24 spatial-stage">
          {PROJECTS.map((project, index) => {
            const currentImgIndex = selectedImages[project.id] ?? 0;
            const currentImage = project.images[currentImgIndex];
            const accent = ACCENT_COLORS[project.accent] || ACCENT_COLORS.gold;
            const isReversed = index % 2 === 1;

            return (
              <div
                key={project.id}
                className="glass-2 holographic-edge rounded-3xl overflow-hidden spatial-card shadow-[0_24px_64px_rgba(0,0,0,0.12)] dark:shadow-[0_24px_64px_rgba(0,0,0,0.7)]"
              >
                <div className="grid grid-cols-1 lg:grid-cols-12 gap-0">
                  {/* Media Viewport (7 Cols) */}
                  <div className={`lg:col-span-7 flex flex-col justify-between p-4 sm:p-6 bg-[var(--bg-card)]/40 ${
                    isReversed ? 'lg:order-last' : 'lg:order-first'
                  }`}>
                    {/* Main Image Frame */}
                    <div
                      className="relative aspect-[16/10] sm:aspect-[16/9] w-full rounded-2xl overflow-hidden bg-black/10 dark:bg-[#050A14] group cursor-pointer border border-[var(--glass-border)]"
                      onClick={() => setLightboxImage({ src: currentImage.src, alt: currentImage.alt, title: project.title })}
                    >
                      <img
                        src={currentImage.src}
                        alt={currentImage.alt}
                        className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                        loading="lazy"
                      />

                      <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent pointer-events-none" />

                      {/* Status Badges */}
                      <div className="absolute top-3.5 left-3.5 flex flex-wrap items-center gap-2">
                        <span
                          className="px-3 py-1 rounded-full text-[10px] font-mono-code uppercase font-bold backdrop-blur-xl border"
                          style={{
                            backgroundColor: accent.badgeBg,
                            color: accent.color,
                            borderColor: accent.color,
                          }}
                        >
                          {project.categoryBadge}
                        </span>
                        <span className="px-3 py-1 rounded-full text-[10px] font-mono-code uppercase font-semibold text-white bg-black/70 backdrop-blur-xl border border-white/20">
                          {project.statusBadge}
                        </span>
                      </div>

                      {/* Expand Button */}
                      <div className="absolute bottom-3.5 right-3.5 w-9 h-9 rounded-xl glass-2 border-white/20 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300 text-white shadow-lg">
                        <Maximize2 className="w-4 h-4" />
                      </div>
                    </div>

                    {/* Screenshot Selector Thumbnails */}
                    <div className="mt-4 pt-3 border-t border-[var(--glass-border)] flex items-center gap-2 overflow-x-auto gallery-scroll pb-1">
                      <span className="text-[10px] font-mono-code text-[var(--text-muted)] uppercase shrink-0 mr-1">
                        Screens ({project.images.length}):
                      </span>
                      {project.images.map((img, imgIdx) => (
                        <button
                          key={imgIdx}
                          onClick={() => handleSelectImage(project.id, imgIdx)}
                          className={`shrink-0 w-16 sm:w-20 aspect-[16/10] rounded-lg overflow-hidden border-2 transition-all cursor-pointer relative ${
                            currentImgIndex === imgIdx
                              ? 'scale-105 shadow-md'
                              : 'opacity-50 hover:opacity-100 border-transparent'
                          }`}
                          style={{
                            borderColor: currentImgIndex === imgIdx ? accent.color : 'transparent',
                          }}
                          aria-label={`View screenshot ${imgIdx + 1}`}
                        >
                          <img
                            src={img.src}
                            alt={img.alt}
                            className="w-full h-full object-cover"
                            loading="lazy"
                          />
                        </button>
                      ))}
                    </div>
                  </div>

                  {/* Case Study Details & Measurable Metrics (5 Cols) */}
                  <div className="lg:col-span-5 p-6 sm:p-8 lg:p-10 flex flex-col justify-between">
                    <div>
                      <div className="flex items-center justify-between gap-2 mb-2">
                        <span className="text-[11px] font-mono-code uppercase tracking-wider text-[var(--text-muted)]">
                          DELIVERED PLATFORM 0{index + 1}
                        </span>
                        <CheckCircle2 className="w-4 h-4" style={{ color: accent.color }} />
                      </div>

                      <h3
                        className="font-display-hero text-2xl sm:text-3xl lg:text-4xl font-extrabold tracking-tight"
                        style={{ color: accent.color }}
                      >
                        {project.title}
                      </h3>

                      <p className="mt-1 text-sm font-headline font-semibold text-[var(--text-primary)]">
                        {project.tagline}
                      </p>

                      <p className="mt-4 text-sm text-[var(--text-secondary)] leading-relaxed font-normal">
                        {project.description}
                      </p>

                      {/* Real Verified Metrics */}
                      <div
                        className="mt-6 grid grid-cols-2 gap-3 p-4 rounded-2xl bg-[var(--bg-primary)]/80 border border-[var(--glass-border)]"
                      >
                        {project.metrics.map((metric, mIdx) => (
                          <div key={mIdx}>
                            <div
                              className="font-display-hero text-2xl sm:text-3xl font-extrabold tracking-tight"
                              style={{ color: mIdx === 0 ? accent.color : 'var(--text-primary)' }}
                            >
                              {metric.value}
                            </div>
                            <div className="text-[11px] text-[var(--text-muted)] uppercase tracking-wider font-mono-code mt-0.5">
                              {metric.label}
                            </div>
                          </div>
                        ))}
                      </div>
                    </div>

                    {/* Tags & Action Link */}
                    <div className="mt-8 pt-6 border-t border-[var(--glass-border)]">
                      <div className="flex flex-wrap gap-1.5 mb-5">
                        {project.tags.map((tag) => (
                          <span
                            key={tag}
                            className="px-2.5 py-1 rounded-md bg-[var(--bg-tertiary)]/70 border border-[var(--glass-border)] text-[var(--text-secondary)] font-mono-code text-[10px] uppercase tracking-wider font-medium"
                          >
                            {tag}
                          </span>
                        ))}
                      </div>

                      <div className="flex items-center justify-between">
                        <span className="text-xs font-mono-code text-[var(--gold)] font-medium">
                          Live in Production
                        </span>

                        <a
                          href="#contact"
                          className="inline-flex items-center gap-1.5 text-xs font-headline font-bold uppercase tracking-wider group cursor-pointer"
                          style={{ color: accent.color }}
                        >
                          <span>Build a Similar Platform</span>
                          <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
                        </a>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>

      {/* Lightbox Modal */}
      <AnimatePresence>
        {lightboxImage && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-50 bg-black/85 backdrop-blur-xl flex items-center justify-center p-4 sm:p-8"
            onClick={() => setLightboxImage(null)}
          >
            <div
              className="relative max-w-6xl w-full max-h-[90vh] glass-2 rounded-3xl overflow-hidden p-2 sm:p-4 shadow-[0_32px_100px_rgba(0,0,0,0.9)]"
              onClick={(e) => e.stopPropagation()}
            >
              <div className="flex items-center justify-between pb-3 px-2 border-b border-[var(--glass-border)] mb-3">
                <div>
                  <h4 className="font-headline font-bold text-base text-[var(--text-primary)]">
                    {lightboxImage.title} // SCREENSHOT INSPECTION
                  </h4>
                  <p className="text-xs text-[var(--text-muted)] font-mono-code">
                    {lightboxImage.alt}
                  </p>
                </div>
                <button
                  onClick={() => setLightboxImage(null)}
                  className="w-9 h-9 rounded-xl glass-2 border-[var(--glass-border)] flex items-center justify-center text-[var(--text-primary)] hover:text-[var(--gold)] transition-colors cursor-pointer"
                  aria-label="Close image modal"
                >
                  <X className="w-5 h-5" />
                </button>
              </div>

              <div className="relative rounded-2xl overflow-hidden max-h-[78vh] flex items-center justify-center bg-black/40">
                <img
                  src={lightboxImage.src}
                  alt={lightboxImage.alt}
                  className="max-w-full max-h-[78vh] object-contain rounded-xl"
                />
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
};
