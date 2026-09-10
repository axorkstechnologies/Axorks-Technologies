import React from 'react';
import { motion } from 'motion/react';

export const HeroShader: React.FC = () => {
  return (
    <div className="absolute inset-0 overflow-hidden pointer-events-none" aria-hidden="true">
      {/* Gold Blob — top left */}
      <motion.div
        className="absolute -top-[200px] -left-[150px] w-[500px] h-[500px] md:w-[650px] md:h-[650px] liquid-blob opacity-[0.12]"
        style={{
          background: 'radial-gradient(circle at 40% 40%, #F5C761, #D97706 60%, transparent 80%)',
          filter: 'blur(80px)',
          mixBlendMode: 'screen',
        }}
        animate={{ y: [0, -30, 0], x: [0, 15, 0] }}
        transition={{ duration: 14, repeat: Infinity, ease: 'easeInOut' }}
      />

      {/* Emerald Blob — center right */}
      <motion.div
        className="absolute top-[10%] -right-[100px] w-[400px] h-[400px] md:w-[550px] md:h-[550px] liquid-blob-fast opacity-[0.10]"
        style={{
          background: 'radial-gradient(circle at 60% 50%, #10B981, #065F46 60%, transparent 80%)',
          filter: 'blur(90px)',
          mixBlendMode: 'screen',
        }}
        animate={{ y: [0, 25, 0], x: [0, -20, 0] }}
        transition={{ duration: 16, repeat: Infinity, ease: 'easeInOut' }}
      />

      {/* Violet Blob — bottom center */}
      <motion.div
        className="absolute -bottom-[100px] left-[20%] w-[450px] h-[450px] md:w-[580px] md:h-[580px] liquid-blob opacity-[0.10]"
        style={{
          background: 'radial-gradient(circle at 50% 60%, #8B5CF6, #4C1D95 60%, transparent 80%)',
          filter: 'blur(100px)',
          mixBlendMode: 'screen',
        }}
        animate={{ y: [0, -20, 0], x: [0, 25, 0] }}
        transition={{ duration: 18, repeat: Infinity, ease: 'easeInOut' }}
      />

      {/* Wine Accent — subtle */}
      <motion.div
        className="absolute top-[40%] left-[40%] w-[300px] h-[300px] md:w-[400px] md:h-[400px] liquid-blob-fast opacity-[0.06]"
        style={{
          background: 'radial-gradient(circle at 50% 50%, #881337, #4C0519 60%, transparent 80%)',
          filter: 'blur(100px)',
          mixBlendMode: 'screen',
        }}
        animate={{ y: [0, 15, 0], x: [0, -15, 0] }}
        transition={{ duration: 20, repeat: Infinity, ease: 'easeInOut' }}
      />

      {/* Subtle Grid Overlay */}
      <div
        className="absolute inset-0 opacity-[0.03]"
        style={{
          backgroundImage: `linear-gradient(rgba(245,199,97,0.3) 1px, transparent 1px), linear-gradient(90deg, rgba(245,199,97,0.3) 1px, transparent 1px)`,
          backgroundSize: '60px 60px',
        }}
      />
    </div>
  );
};
