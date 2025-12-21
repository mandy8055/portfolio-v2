'use client';

import { useCallback, useMemo } from 'react';
import Particles from '@tsparticles/react';
import { loadSlim } from '@tsparticles/slim';
import { useTheme } from 'next-themes';

export function ParticlesBackground() {
  const { theme } = useTheme();

  const particlesInit = useCallback(async (engine: any) => {
    await loadSlim(engine);
  }, []);

  const options = useMemo(
    () => ({
      background: {
        opacity: 0,
      },
      fpsLimit: 120,
      interactivity: {
        events: {
          onClick: {
            enable: true,
            mode: 'push',
          },
          onHover: {
            enable: true,
            mode: 'repulse',
          },
        },
        modes: {
          push: {
            quantity: 4,
          },
          repulse: {
            distance: 100,
            duration: 0.4,
          },
        },
      },
      particles: {
        color: {
          value: theme === 'dark' ? '#ffffff' : '#000000',
        },
        links: {
          color: theme === 'dark' ? '#ffffff' : '#000000',
          distance: 150,
          enable: true,
          opacity: theme === 'dark' ? 0.15 : 0.2,
          width: 1,
        },
        move: {
          direction: 'none' as const,
          enable: true,
          outModes: {
            default: 'bounce' as const,
          },
          random: false,
          speed: 1,
          straight: false,
        },
        number: {
          density: {
            enable: true,
          },
          value: 80,
        },
        opacity: {
          value: 0.3,
        },
        shape: {
          type: 'circle',
        },
        size: {
          value: { min: 1, max: 3 },
        },
      },
      detectRetina: true,
    }),
    [theme],
  );

  return (
    <Particles
      id='tsparticles'
      particlesLoaded={particlesInit}
      options={options as any}
      className='absolute inset-0'
    />
  );
}
