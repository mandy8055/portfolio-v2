'use client';

import { motion } from 'motion/react';
import { useMemo } from 'react';
import { useTheme } from 'next-themes';

export function DotMatrix() {
  const { theme } = useTheme();

  const dots = useMemo(() => {
    const cols = 20;
    const rows = 15;
    return Array.from({ length: cols * rows }).map((_, i) => ({
      id: i,
      x: (i % cols) * (100 / cols),
      y: Math.floor(i / cols) * (100 / rows),
      delay: Math.random() * 2,
    }));
  }, []);

  const dotColor = theme === 'dark' ? 'bg-white/20' : 'bg-black/20';

  return (
    <div className='absolute inset-0 overflow-hidden pointer-events-none'>
      {dots.map((dot) => (
        <motion.div
          key={dot.id}
          className={`absolute w-1 h-1 rounded-full ${dotColor}`}
          style={{
            left: `${dot.x}%`,
            top: `${dot.y}%`,
          }}
          animate={{
            opacity: [0.2, 0.8, 0.2],
            scale: [1, 1.5, 1],
          }}
          transition={{
            duration: 3,
            delay: dot.delay,
            repeat: Infinity,
            ease: 'easeInOut',
          }}
        />
      ))}
    </div>
  );
}
