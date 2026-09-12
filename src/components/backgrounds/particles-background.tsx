'use client';

import { useEffect, useState } from 'react';
import Particles, {
  ParticlesProvider,
  useParticlesProvider,
  type IParticlesProps,
} from '@tsparticles/react';
import { loadSlim } from '@tsparticles/slim';
import { useTheme } from 'next-themes';

function ParticlesRenderer() {
  const { theme } = useTheme();
  const { loaded } = useParticlesProvider();
  const [colors, setColors] = useState(['#f97316', '#fb923c', '#fbbf24']);

  useEffect(() => {
    // Read theme colors from CSS variables once on mount
    const computedStyle = getComputedStyle(document.documentElement);
    const primary = computedStyle.getPropertyValue('--theme-primary').trim() || '#f97316';
    const secondary = computedStyle.getPropertyValue('--theme-secondary').trim() || '#fb923c';
    const tertiary = computedStyle.getPropertyValue('--theme-tertiary').trim() || '#fbbf24';
    setColors([primary, secondary, tertiary]);
  }, []);

  if (!loaded) {
    return null;
  }

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
      paint: {
        fill: {
          enable: true,
          color: {
            value: colors,
          },
        },
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

export function ParticlesBackground() {
  return (
    <ParticlesProvider init={loadSlim}>
      <ParticlesRenderer />
    </ParticlesProvider>
  );
}
