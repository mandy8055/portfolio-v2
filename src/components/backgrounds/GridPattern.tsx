'use client';

import { useTheme } from 'next-themes';

export function GridPattern() {
  const { theme } = useTheme();

  return (
    <div className='absolute inset-0 pointer-events-none'>
      {/* Grid lines */}
      <div
        className='absolute inset-0'
        style={{
          backgroundImage:
            theme === 'dark'
              ? 'linear-gradient(rgba(255, 255, 255, 0.05) 1px, transparent 1px), linear-gradient(90deg, rgba(255, 255, 255, 0.05) 1px, transparent 1px)'
              : 'linear-gradient(rgba(0, 0, 0, 0.05) 1px, transparent 1px), linear-gradient(90deg, rgba(0, 0, 0, 0.05) 1px, transparent 1px)',
          backgroundSize: '50px 50px',
        }}
      />

      {/* Gradient fade from top and bottom */}
      <div className='absolute inset-0 bg-linear-to-b from-background via-transparent to-background' />
    </div>
  );
}
