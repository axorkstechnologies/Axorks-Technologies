import React from 'react';
import { motion } from 'motion/react';
import { TEAM_MEMBERS } from '../data/mockData';
import { User } from 'lucide-react';

const ACCENT_COLORS: Record<string, string> = {
  gold: '#F5C761',
  emerald: '#10B981',
  violet: '#8B5CF6',
  wine: '#881337',
  cyan: '#06B6D4',
};

export const Team: React.FC = () => {
  return (
    <section className="w-full px-4 lg:px-8 py-20 lg:py-28" id="team">
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
            Our Team
          </div>
          <h2 className="mt-3 font-display-hero text-3xl md:text-4xl lg:text-[48px] text-[var(--text-primary)] font-bold tracking-tight">
            The People Who Build Your Product.
          </h2>
          <p className="mt-4 max-w-2xl mx-auto text-[var(--text-secondary)] text-base lg:text-lg">
            Direct access to senior engineers and leadership. No middlemen, no account managers — you talk to the people who actually write the code and ship the product.
          </p>
        </motion.div>

        {/* Team Grid */}
        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-4 lg:gap-5">
          {TEAM_MEMBERS.map((member, i) => {
            const accentColor = ACCENT_COLORS[member.accent] || ACCENT_COLORS.gold;

            return (
              <motion.div
                key={member.id}
                initial={{ opacity: 0, y: 25 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: '-60px' }}
                transition={{ duration: 0.5, delay: i * 0.06 }}
                className="group glass-card rounded-2xl overflow-hidden transition-all duration-300 hover:border-white/[0.12]"
              >
                {/* Photo / Placeholder */}
                <div className="relative aspect-[4/5] overflow-hidden bg-[var(--bg-tertiary)]">
                  {member.image ? (
                    <img
                      src={member.image}
                      alt={`${member.name} — ${member.role} at AXORKS Technologies`}
                      className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                      loading="lazy"
                    />
                  ) : (
                    <div
                      className="w-full h-full flex items-center justify-center"
                      style={{
                        background: `linear-gradient(135deg, ${accentColor}15 0%, ${accentColor}05 100%)`,
                      }}
                    >
                      <div
                        className="w-20 h-20 sm:w-24 sm:h-24 rounded-full flex items-center justify-center"
                        style={{
                          border: `2px solid ${accentColor}40`,
                          background: `${accentColor}10`,
                        }}
                      >
                        <User className="w-10 h-10 sm:w-12 sm:h-12 opacity-40" style={{ color: accentColor }} />
                      </div>
                    </div>
                  )}
                  <div className="absolute inset-0 bg-gradient-to-t from-[var(--bg-card)] via-transparent to-transparent opacity-80 pointer-events-none" />
                </div>

                {/* Info */}
                <div className="p-4 relative -mt-8 z-10">
                  <h3 className="font-headline text-sm sm:text-base font-bold text-[var(--text-primary)] leading-tight">
                    {member.name}
                  </h3>
                  <p className="mt-0.5 text-[11px] sm:text-xs font-medium uppercase tracking-wider" style={{ color: accentColor }}>
                    {member.role}
                  </p>
                  <p className="mt-2 text-[11px] sm:text-xs text-[var(--text-muted)] leading-relaxed line-clamp-2">
                    {member.description}
                  </p>
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
};
