'use client';

import { motion } from 'motion/react';
import { useMemo } from 'react';
import { useTheme } from 'next-themes';

export function ShootingStars() {
  const { theme } = useTheme();

  const stars = useMemo(() => {
    return Array.from({ length: 20 }).map((_, i) => ({
      id: i,
      x: Math.random() * 100,
      y: Math.random() * 100,
      delay: Math.random() * 5,
      duration: Math.random() * 2 + 1,
    }));
  }, []);

  // Theme-aware gradient colors
  const gradientClass =
    theme === 'dark'
      ? 'bg-gradient-to-r from-transparent via-white to-transparent'
      : 'bg-gradient-to-r from-transparent via-gray-800 to-transparent';

  return (
    <div className='absolute inset-0 overflow-hidden pointer-events-none'>
      {stars.map((star) => (
        <motion.div
          key={star.id}
          className={`absolute h-0.5 w-25 ${gradientClass}`}
          style={{
            left: `${star.x}%`,
            top: `${star.y}%`,
            rotate: 45,
          }}
          initial={{ opacity: 0, x: 0, y: 0 }}
          animate={{
            opacity: [0, 1, 0],
            x: [0, -100],
            y: [0, 100],
          }}
          transition={{
            duration: star.duration,
            delay: star.delay,
            repeat: Infinity,
            repeatDelay: 8,
            ease: 'linear',
          }}
        />
      ))}
    </div>
  );
}
