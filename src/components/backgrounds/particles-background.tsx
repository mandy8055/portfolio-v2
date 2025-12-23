'use client';

import { useEffect } from 'react';
import Particles, {
  initParticlesEngine,
  type IParticlesProps,
} from '@tsparticles/react';
import { loadSlim } from '@tsparticles/slim';
import { useTheme } from 'next-themes';

export function ParticlesBackground() {
  const { theme } = useTheme();

  useEffect(() => {
    initParticlesEngine(async (engine) => {
      await loadSlim(engine);
    });
  }, []);

  const options: IParticlesProps['options'] = {
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
          mode: 'grab',
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
        value: ['#14B8A6', '#06B6D4', '#0EA5E9', '#10B981', '#22D3EE'],
      },
      links: {
        color: theme === 'dark' ? '#ffffff' : '#1a1a1a',
        distance: 150,
        enable: true,
        opacity: 0.4,
        width: 1,
      },
      move: {
        direction: 'top' as const,
        enable: true,
        outModes: {
          default: 'out' as const,
        },
        random: false,
        speed: 0.5,
        straight: false,
      },
      number: {
        density: {
          enable: true,
        },
        value: 20,
      },
      opacity: {
        value: 0.8,
      },
      shape: {
        type: 'square',
      },
      size: {
        value: { min: 4, max: 10 },
      },
    },
    detectRetina: true,
  };

  return (
    <Particles
      id='tsparticles'
      options={options}
      className='absolute inset-0'
    />
  );
}
