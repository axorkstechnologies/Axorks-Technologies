import React, { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { PROJECTS } from '../data/mockData';
import { ArrowRight, Maximize2, X, ExternalLink, Activity, Sparkles, CheckCircle2 } from 'lucide-react';

const ACCENT_COLORS: Record<string, {
  color: string;
  glow: string;
  badgeBg: string;
}> = {
  emerald: {
    color: '#10B981',
    glow: 'rgba(16, 185, 129, 0.25)',
    badgeBg: 'rgba(16, 185, 129, 0.15)',
  },
  gold: {
    color: '#F5C761',
    glow: 'rgba(245, 199, 97, 0.25)',
    badgeBg: 'rgba(245, 199, 97, 0.15)',
  },
  violet: {
    color: '#8B5CF6',
    glow: 'rgba(139, 92, 246, 0.25)',
    badgeBg: 'rgba(139, 92, 246, 0.15)',
  },
  wine: {
    color: '#BE123C',
    glow: 'rgba(190, 18, 60, 0.25)',
    badgeBg: 'rgba(190, 18, 60, 0.15)',
  },
};

export const Projects: React.FC = () => {
  // Active screenshot index per project card
  const [selectedImages, setSelectedImages] = useState<Record<string, number>>({
    agrotrace: 0,
    'ipmi-os': 0,
    mediverse: 0,
    fume: 0,
  });

  // Modal lightbox for detailed screenshot inspection
  const [lightboxImage, setLightboxImage] = useState<{ src: string; alt: string; title: string } | null>(null);

  const handleSelectImage = (projectId: string, index: number) => {
    setSelectedImages((prev) => ({ ...prev, [projectId]: index }));
  };

  return (
    <section className="w-full py-24 lg:py-32 px-4 sm:px-6 lg:px-8 relative bg-[var(--bg-secondary)]/40 border-y border-white/[0.06]" id="work">
      {/* Ambient Caustic Glow */}
      <div className="absolute top-1/3 right-1/4 w-[500px] h-[500px] bg-[radial-gradient(circle,_var(--tw-gradient-stops))] from-[#F5C761]/8 via-transparent to-transparent pointer-events-none blur-3xl" />

      <div className="max-w-7xl mx-auto relative z-10">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-100px' }}
          transition={{ duration: 0.6 }}
          className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-16 sm:mb-20"
        >
          <div>
            <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full glass-2 border-[#10B981]/30 text-xs uppercase text-[#10B981] tracking-widest font-semibold font-mono-code mb-3">
              <Activity className="w-3.5 h-3.5" />
              <span>Verified Proof of Work</span>
            </div>
            <h2 className="font-display-hero text-3xl sm:text-4xl lg:text-[52px] text-[var(--text-primary)] font-extrabold tracking-tight">
              Selected Work &amp;{' '}
              <span className="bg-gradient-to-r from-[#F5C761] via-[#10B981] to-[#8B5CF6] bg-clip-text text-transparent">
                Delivered Architectures.
              </span>
            </h2>
          </div>

          <div className="font-mono-code text-xs text-[var(--text-muted)] flex items-center gap-2">
            <span className="w-2.5 h-2.5 rounded-full bg-[#10B981] animate-ping" />
            <span>Real Production Screenshots • Zero Mock Data</span>
          </div>
        </motion.div>

        {/* 4 Spatial Case Study Cards */}
        <div className="space-y-16 lg:space-y-24 spatial-stage">
          {PROJECTS.map((project, index) => {
            const currentImgIndex = selectedImages[project.id] ?? 0;
            const currentImage = project.images[currentImgIndex];
            const accent = ACCENT_COLORS[project.accent] || ACCENT_COLORS.gold;
            const isReversed = index % 2 === 1;

            return (
              <motion.div
                key={project.id}
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: '-100px' }}
                transition={{ duration: 0.7, delay: 0.1 }}
                className="glass-2 holographic-edge rounded-3xl overflow-hidden spatial-card shadow-[0_24px_64px_rgba(0,0,0,0.7)]"
              >
                <div className="grid grid-cols-1 lg:grid-cols-12 gap-0">
                  {/* ─── Media Viewport (7 Cols) ──────────────────────────────── */}
                  <div className={`lg:col-span-7 flex flex-col justify-between p-4 sm:p-6 bg-[#030712]/70 ${
                    isReversed ? 'lg:order-last' : 'lg:order-first'
                  }`}>
                    {/* Main Image Frame with Zoom Overlay */}
                    <div className="relative aspect-[16/10] sm:aspect-[16/9] w-full rounded-2xl overflow-hidden bg-[#050A14] group cursor-pointer"
                      onClick={() => setLightboxImage({ src: currentImage.src, alt: currentImage.alt, title: project.title })}
                    >
                      <img
                        src={currentImage.src}
                        alt={currentImage.alt}
                        className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                        loading="lazy"
                      />

                      {/* Depth Vignettes */}
                      <div className="absolute inset-0 bg-gradient-to-t from-[#030712]/90 via-transparent to-transparent pointer-events-none" />

                      {/* Top Badges */}
                      <div className="absolute top-3.5 left-3.5 flex flex-wrap items-center gap-2">
                        <span
                          className="px-3 py-1 rounded-full text-[10px] font-mono-code uppercase font-bold backdrop-blur-xl border"
                          style={{
                            backgroundColor: accent.badgeBg,
                            color: accent.color,
                            borderColor: `${accent.color}40`,
                          }}
                        >
                          {project.categoryBadge}
                        </span>
                        <span className="px-3 py-1 rounded-full text-[10px] font-mono-code uppercase font-semibold text-white/90 bg-[#030712]/80 backdrop-blur-xl border border-white/10">
                          {project.statusBadge}
                        </span>
                      </div>

                      {/* Magnify Hint Button */}
                      <div className="absolute bottom-3.5 right-3.5 w-9 h-9 rounded-xl glass-2 border-white/20 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300 text-white shadow-lg">
                        <Maximize2 className="w-4 h-4" />
                      </div>
                    </div>

                    {/* Screenshot Thumbnails Row */}
                    <div className="mt-4 pt-3 border-t border-white/[0.06] flex items-center gap-2 overflow-x-auto gallery-scroll pb-1">
                      <span className="text-[10px] font-mono-code text-[var(--text-muted)] uppercase shrink-0 mr-1">
                        Screens ({project.images.length}):
                      </span>
                      {project.images.map((img, imgIdx) => (
                        <button
                          key={imgIdx}
                          onClick={() => handleSelectImage(project.id, imgIdx)}
                          className={`shrink-0 w-16 sm:w-20 aspect-[16/10] rounded-lg overflow-hidden border-2 transition-all cursor-pointer relative ${
                            currentImgIndex === imgIdx
                              ? 'scale-105 shadow-[0_0_15px_rgba(245,199,97,0.3)]'
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

                  {/* ─── Case Study Specs & Metrics (5 Cols) ─────────────────── */}
                  <div className="lg:col-span-5 p-6 sm:p-8 lg:p-10 flex flex-col justify-between">
                    <div>
                      {/* Eyebrow and Title */}
                      <div className="flex items-center justify-between gap-2 mb-2">
                        <span className="text-[11px] font-mono-code uppercase tracking-wider text-[var(--text-muted)]">
                          DEPLOYED SYSTEM 0{index + 1}
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

                      {/* Proven Operational Metrics */}
                      <div
                        className="mt-6 grid grid-cols-2 gap-3 p-4 rounded-2xl bg-[#030712]/80 border"
                        style={{ borderColor: `${accent.color}30` }}
                      >
                        {project.metrics.map((metric, mIdx) => (
                          <div key={mIdx}>
                            <div
                              className="font-display-hero text-2xl sm:text-3xl font-extrabold tracking-tight"
                              style={{ color: mIdx === 0 ? accent.color : '#F8FAFC' }}
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

                    {/* Architecture Tags & Contact Trigger */}
                    <div className="mt-8 pt-6 border-t border-white/[0.08]">
                      <div className="flex flex-wrap gap-1.5 mb-5">
                        {project.tags.map((tag) => (
                          <span
                            key={tag}
                            className="px-2.5 py-1 rounded-md bg-white/[0.04] border border-white/[0.06] text-[var(--text-muted)] font-mono-code text-[10px] uppercase tracking-wider"
                          >
                            {tag}
                          </span>
                        ))}
                      </div>

                      <div className="flex items-center justify-between">
                        <span className="text-xs font-mono-code text-[#F5C761]">
                          Production Verified
                        </span>

                        <a
                          href="#contact"
                          className="inline-flex items-center gap-1.5 text-xs font-headline font-bold uppercase tracking-wider group cursor-pointer"
                          style={{ color: accent.color }}
                        >
                          <span>Commission Similar System</span>
                          <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
                        </a>
                      </div>
                    </div>
                  </div>
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>

      {/* ─── Lightbox Modal for Ultra-Detailed Screenshot Inspection ────────── */}
      <AnimatePresence>
        {lightboxImage && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-50 bg-[#030712]/95 backdrop-blur-3xl flex items-center justify-center p-4 sm:p-8"
            onClick={() => setLightboxImage(null)}
          >
            <div
              className="relative max-w-6xl w-full max-h-[90vh] glass-2 rounded-3xl overflow-hidden p-2 sm:p-4 shadow-[0_32px_100px_rgba(0,0,0,0.9)]"
              onClick={(e) => e.stopPropagation()}
            >
              <div className="flex items-center justify-between pb-3 px-2 border-b border-white/[0.08] mb-3">
                <div>
                  <h4 className="font-headline font-bold text-base text-[var(--text-primary)]">
                    {lightboxImage.title} // ARCHITECTURE INSPECTION
                  </h4>
                  <p className="text-xs text-[var(--text-muted)] font-mono-code">
                    {lightboxImage.alt}
                  </p>
                </div>
                <button
                  onClick={() => setLightboxImage(null)}
                  className="w-9 h-9 rounded-xl glass-2 border-white/20 flex items-center justify-center text-[var(--text-primary)] hover:text-[#F5C761] transition-colors cursor-pointer"
                  aria-label="Close modal"
                >
                  <X className="w-5 h-5" />
                </button>
              </div>

              <div className="relative rounded-2xl overflow-hidden max-h-[78vh] flex items-center justify-center bg-black/50">
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
