'use client';

import { motion } from 'motion/react';
import { useTheme } from 'next-themes';

export function SpotlightEffect() {
  const { theme } = useTheme();

  return (
    <div className='absolute inset-0 overflow-hidden pointer-events-none'>
      {/* Animated spotlight */}
      <motion.div
        className='absolute w-200 h-200 rounded-full'
        style={{
          background:
            theme === 'dark'
              ? 'radial-gradient(circle, rgba(139, 92, 246, 0.15) 0%, transparent 70%)'
              : 'radial-gradient(circle, rgba(139, 92, 246, 0.08) 0%, transparent 70%)',
          filter: 'blur(40px)',
        }}
        animate={{
          x: ['-20%', '120%'],
          y: ['-20%', '120%'],
        }}
        transition={{
          duration: 20,
          repeat: Infinity,
          repeatType: 'reverse',
          ease: 'easeInOut',
        }}
      />

      {/* Second spotlight */}
      <motion.div
        className='absolute w-150 h-150 rounded-full'
        style={{
          background:
            theme === 'dark'
              ? 'radial-gradient(circle, rgba(236, 72, 153, 0.1) 0%, transparent 70%)'
              : 'radial-gradient(circle, rgba(236, 72, 153, 0.05) 0%, transparent 70%)',
          filter: 'blur(40px)',
        }}
        animate={{
          x: ['120%', '-20%'],
          y: ['120%', '-20%'],
        }}
        transition={{
          duration: 25,
          repeat: Infinity,
          repeatType: 'reverse',
          ease: 'easeInOut',
        }}
      />
    </div>
  );
}
