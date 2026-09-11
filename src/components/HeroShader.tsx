import React from 'react';
import { motion } from 'motion/react';

export const HeroShader: React.FC = () => {
  return (
    <div className="absolute inset-0 overflow-hidden pointer-events-none" aria-hidden="true">
      {/* Primary Champagne Gold Caustic Blob: Top Left */}
      <motion.div
        className="absolute -top-[240px] -left-[180px] w-[580px] h-[580px] md:w-[740px] md:h-[740px] caustic-blob opacity-[0.16]"
        style={{
          background: 'radial-gradient(circle at 45% 45%, #F5C761 0%, #D97706 45%, transparent 75%)',
          filter: 'blur(95px)',
          mixBlendMode: 'screen',
        }}
        animate={{ y: [0, -35, 0], x: [0, 20, 0] }}
        transition={{ duration: 16, repeat: Infinity, ease: 'easeInOut' }}
      />

      {/* Emerald Teal Volumetric Bloom: Center Right */}
      <motion.div
        className="absolute top-[8%] -right-[120px] w-[460px] h-[460px] md:w-[620px] md:h-[620px] caustic-blob opacity-[0.14]"
        style={{
          background: 'radial-gradient(circle at 55% 45%, #10B981 0%, #065F46 50%, transparent 78%)',
          filter: 'blur(100px)',
          mixBlendMode: 'screen',
        }}
        animate={{ y: [0, 30, 0], x: [0, -25, 0] }}
        transition={{ duration: 18, repeat: Infinity, ease: 'easeInOut' }}
      />

      {/* Iridescent Violet-Cyan Node: Center/Bottom */}
      <motion.div
        className="absolute top-[48%] left-[25%] w-[500px] h-[500px] md:w-[680px] md:h-[680px] caustic-blob opacity-[0.12]"
        style={{
          background: 'radial-gradient(circle at 50% 50%, #8B5CF6 0%, #06B6D4 40%, #1E1B4B 70%, transparent 85%)',
          filter: 'blur(110px)',
          mixBlendMode: 'screen',
        }}
        animate={{ y: [0, -25, 0], x: [0, 30, 0] }}
        transition={{ duration: 20, repeat: Infinity, ease: 'easeInOut' }}
      />

      {/* Deep Burgundy/Plum Ambient Shadow Bleed: Bottom Right */}
      <motion.div
        className="absolute -bottom-[150px] right-[10%] w-[420px] h-[420px] md:w-[560px] md:h-[560px] caustic-blob opacity-[0.09]"
        style={{
          background: 'radial-gradient(circle at 50% 50%, #881337 0%, #4C0519 55%, transparent 80%)',
          filter: 'blur(105px)',
          mixBlendMode: 'screen',
        }}
        animate={{ y: [0, 20, 0], x: [0, -18, 0] }}
        transition={{ duration: 22, repeat: Infinity, ease: 'easeInOut' }}
      />

      {/* Subtle Micro-Telemetry Grid */}
      <div
        className="absolute inset-0 opacity-[0.025]"
        style={{
          backgroundImage: `
            linear-gradient(to right, rgba(245, 199, 97, 0.4) 1px, transparent 1px),
            linear-gradient(to bottom, rgba(16, 185, 129, 0.3) 1px, transparent 1px)
          `,
          backgroundSize: '80px 80px',
        }}
      />
    </div>
  );
};
