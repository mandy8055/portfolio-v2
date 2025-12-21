'use client';

import { motion } from 'motion/react';

interface GradientTextProps {
  children: string;
  className?: string;
  animate?: boolean;
}

export function GradientText({
  children,
  className = '',
  animate = true,
}: GradientTextProps) {
  if (!animate) {
    return (
      <span
        className={`bg-linear-to-r from-primary via-purple-500 to-pink-500 bg-clip-text text-transparent ${className}`}
      >
        {children}
      </span>
    );
  }

  return (
    <motion.span
      className={`inline-block bg-linear-to-r from-primary via-purple-500 to-pink-500 bg-clip-text text-transparent ${className}`}
      style={{
        backgroundSize: '200% auto',
      }}
      animate={{
        backgroundPosition: ['0% 50%', '100% 50%', '0% 50%'],
      }}
      transition={{
        duration: 5,
        ease: 'linear',
        repeat: Infinity,
      }}
    >
      {children}
    </motion.span>
  );
}
