'use client';

import { motion } from 'motion/react';
import { useMemo } from 'react';
import { useTheme } from 'next-themes';

export function FloatingOrbs() {
  const { theme } = useTheme();

  const orbs = useMemo(() => {
    return Array.from({ length: 8 }).map((_, i) => ({
      id: i,
      x: Math.random() * 100,
      y: Math.random() * 100,
      size: Math.random() * 300 + 150,
      duration: Math.random() * 20 + 20,
      delay: Math.random() * 5,
    }));
  }, []);

  const orbColor =
    theme === 'dark'
      ? 'rgba(139, 92, 246, 0.15)' // purple
      : 'rgba(139, 92, 246, 0.08)';

  return (
    <div className='absolute inset-0 overflow-hidden pointer-events-none'>
      {orbs.map((orb) => (
        <motion.div
          key={orb.id}
          className='absolute rounded-full blur-3xl'
          style={{
            left: `${orb.x}%`,
            top: `${orb.y}%`,
            width: orb.size,
            height: orb.size,
            background: orbColor,
          }}
          animate={{
            x: [0, 30, -20, 0],
            y: [0, -40, 20, 0],
            scale: [1, 1.2, 0.8, 1],
          }}
          transition={{
            duration: orb.duration,
            delay: orb.delay,
            repeat: Infinity,
            ease: 'easeInOut',
          }}
        />
      ))}
    </div>
  );
}
