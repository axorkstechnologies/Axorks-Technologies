import React from 'react';
import { motion } from 'motion/react';
import { PROCESS_STEPS } from '../data/mockData';
import { Search, FileText, Code, Rocket } from 'lucide-react';

const ICON_MAP: Record<string, React.FC<{ className?: string }>> = {
  Search, FileText, Code, Rocket,
};

const STEP_COLORS = ['#F5C761', '#10B981', '#8B5CF6', '#F43F5E'];

export const Process: React.FC = () => {
  return (
    <section className="w-full px-4 lg:px-8 py-20 lg:py-28" id="process">
      <div className="max-w-7xl mx-auto">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-100px' }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <div className="text-xs uppercase text-[#F5C761] tracking-wider font-semibold font-mono-code">
            How We Work
          </div>
          <h2 className="mt-3 font-display-hero text-3xl md:text-4xl lg:text-[48px] text-[var(--text-primary)] font-bold tracking-tight">
            From Discovery to Deployment.
          </h2>
          <p className="mt-4 max-w-2xl mx-auto text-[var(--text-secondary)] text-base lg:text-lg">
            A transparent, milestone-based process. You know exactly what you're getting and what it costs — before we write a single line of code.
          </p>
        </motion.div>

        {/* Process Steps */}
        <div className="relative">
          {/* Desktop Connector Line */}
          <div className="hidden lg:block absolute top-[52px] left-[12.5%] right-[12.5%] h-[2px] process-line opacity-30" />

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 lg:gap-5">
            {PROCESS_STEPS.map((step, i) => {
              const IconComponent = ICON_MAP[step.icon] || Search;
              const color = STEP_COLORS[i];

              return (
                <motion.div
                  key={step.step}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, margin: '-80px' }}
                  transition={{ duration: 0.5, delay: i * 0.15 }}
                  className="relative"
                >
                  {/* Mobile Connector */}
                  {i < PROCESS_STEPS.length - 1 && (
                    <div className="sm:hidden absolute left-[26px] top-[56px] w-[2px] h-[calc(100%+24px)] opacity-20"
                      style={{ background: `linear-gradient(${color}, ${STEP_COLORS[i + 1]})` }}
                    />
                  )}

                  <div className="glass-card rounded-2xl p-6 relative z-10 h-full">
                    {/* Step Number Circle */}
                    <div
                      className="w-[52px] h-[52px] rounded-full flex items-center justify-center mb-5 relative"
                      style={{
                        border: `2px solid ${color}`,
                        boxShadow: `0 0 20px ${color}30`,
                      }}
                    >
                      <IconComponent className="w-5 h-5" style={{ color }} />
                      <span
                        className="absolute -top-1 -right-1 w-5 h-5 rounded-full flex items-center justify-center text-[10px] font-bold text-[var(--bg-primary)]"
                        style={{ backgroundColor: color }}
                      >
                        {step.step}
                      </span>
                    </div>

                    <h3 className="font-headline text-lg font-bold text-[var(--text-primary)] mb-2">
                      {step.title}
                    </h3>
                    <p className="text-sm text-[var(--text-secondary)] leading-relaxed">
                      {step.description}
                    </p>
                  </div>
                </motion.div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
};
