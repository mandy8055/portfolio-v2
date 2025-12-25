'use client';

import Image from 'next/image';
import { useState } from 'react';
import { useTheme } from 'next-themes';
import { allSkills, type Skill } from '@/data/skills';
import { GradientText } from '@/components/animations/gradient-text';

export function SkillsShowcase() {
  const { theme } = useTheme();

  return (
    <section className='py-16'>
      <div className='text-center mb-12'>
        <h2 className='text-4xl md:text-5xl font-bold mb-3'>
          <GradientText animate={false}>Technical Skills</GradientText>
        </h2>
        <p className='text-muted-foreground text-lg'>
          Technologies I work with
        </p>
      </div>

      <div className='w-full max-w-5xl mx-auto'>
        <div className='flex flex-wrap justify-center gap-6 md:gap-8 lg:gap-10'>
          {allSkills.map((skill) => (
            <SkillIcon key={skill.name} skill={skill} theme={theme} />
          ))}
        </div>
      </div>
    </section>
  );
}

// Individual skill icon component
function SkillIcon({
  skill,
  theme,
}: {
  skill: Skill;
  theme: string | undefined;
}) {
  const [imgError, setImgError] = useState(false);
  const isDark = theme === 'dark';

  // Use light variant if available and in light mode
  const logoUrl = !isDark && skill.logoLight ? skill.logoLight : skill.logo;

  return (
    <div className='flex flex-col items-center group'>
      <div className='relative'>
        {/* Glow effect on hover */}
        <div className='absolute inset-0 overflow-hidden'>
          <div className='absolute -right-2 top-1/2 transform -translate-y-1/2 w-16 h-16 bg-linear-to-r from-primary/30 to-transparent rounded-full blur-lg opacity-0 group-hover:opacity-100 transition-opacity duration-300' />
        </div>

        <div className='relative z-10'>
          {imgError ? (
            <div className='w-14 h-14 md:w-16 md:h-16 flex items-center justify-center bg-muted rounded-lg border border-border'>
              <span className='text-xs text-center px-1 font-medium'>
                {skill.name}
              </span>
            </div>
          ) : (
            <div className='w-14 h-14 md:w-16 md:h-16 flex items-center justify-center'>
              <Image
                src={logoUrl}
                alt={skill.name}
                width={64}
                height={64}
                className='object-contain transition-transform duration-300 group-hover:scale-110 drop-shadow-md'
                unoptimized
                onError={() => setImgError(true)}
              />
            </div>
          )}
        </div>
      </div>

      {/* Skill name appears on hover */}
      <span className='mt-2 text-sm text-muted-foreground opacity-0 group-hover:opacity-100 transition-opacity duration-300 font-medium'>
        {skill.name}
      </span>

      {/* Optional: Skill level indicator */}
      <span className='text-xs text-muted-foreground/60 opacity-0 group-hover:opacity-100 transition-opacity duration-300'>
        {skill.level}
      </span>
    </div>
  );
}
