'use client';

import { motion } from 'framer-motion';

export default function BackgroundEffects() {
  return (
    <div className="fixed inset-0 -z-10 overflow-hidden bg-[hsl(var(--background))]">
      {/* Animated gradient orbs */}
      <motion.div
        animate={{
          scale: [1, 1.2, 1],
          opacity: [0.15, 0.1, 0.15],
          x: [0, 50, 0],
          y: [0, -25, 0],
        }}
        transition={{
          duration: 20,
          repeat: Infinity,
          ease: "linear"
        }}
        className="absolute top-20 left-[20%] w-[15rem] sm:w-[30rem] h-[15rem] sm:h-[30rem] bg-[var(--primary-color)] rounded-full blur-[50px] sm:blur-[100px]"
      />
      
      <motion.div
        animate={{
          scale: [1, 1.1, 1],
          opacity: [0.1, 0.05, 0.1],
          x: [0, -35, 0],
          y: [0, 50, 0],
        }}
        transition={{
          duration: 25,
          repeat: Infinity,
          ease: "linear"
        }}
        className="absolute top-[40%] right-[10%] w-[12rem] sm:w-[25rem] h-[12rem] sm:h-[25rem] bg-[var(--accent-color)] rounded-full blur-[50px] sm:blur-[100px]"
      />

      {/* Subtle grid pattern */}
      <div 
        className="absolute inset-0 bg-[linear-gradient(rgba(74,114,255,0.015)_1px,transparent_1px),linear-gradient(to_right,rgba(74,114,255,0.015)_1px,transparent_1px)] bg-[size:2rem_2rem] sm:bg-[size:4rem_4rem]"
        style={{
          maskImage: 'radial-gradient(circle at center, transparent 0%, black 100%)',
          WebkitMaskImage: 'radial-gradient(circle at center, transparent 0%, black 100%)',
        }}
      />
    </div>
  );
}
