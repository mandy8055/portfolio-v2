'use client';

import Link from 'next/link';
import { personalInfo } from '@/data/personal';
import { siStackoverflow, siGithub, siLeetcode, siX } from 'simple-icons';

interface SimpleIconProps {
  path: string;
  className?: string;
}

function SimpleIcon({ path, className }: SimpleIconProps) {
  return (
    <svg
      role='img'
      viewBox='0 0 24 24'
      xmlns='http://www.w3.org/2000/svg'
      fill='currentColor'
      className={className}
    >
      <path d={path} />
    </svg>
  );
}

const iconMap: Record<string, { type: 'simple'; data: any }> = {
  Github: { type: 'simple', data: siGithub },
  X: { type: 'simple', data: siX },
  Code2: { type: 'simple', data: siLeetcode },
  StackOverflow: { type: 'simple', data: siStackoverflow },
};

export function SocialSidebar() {
  return (
    <div className='fixed left-6 top-1/2 -translate-y-1/2 z-50 hidden lg:flex'>
      <div className='flex flex-col items-center gap-6'>
        {personalInfo.social.map((social) => {
          const iconConfig = iconMap[social.icon];

          if (!iconConfig) return null;

          return (
            <Link
              key={social.name}
              href={social.url}
              target='_blank'
              rel='noopener noreferrer'
              className='text-foreground/60 hover:text-teal-500 transition-all hover:-translate-y-1 hover:scale-110 transform duration-200'
              aria-label={social.name}
            >
              <SimpleIcon path={iconConfig.data.path} className='size-6' />
            </Link>
          );
        })}
        {/* Vertical line */}
        <div className='w-0.5 h-28 bg-linear-to-b from-foreground/40 to-transparent' />
      </div>
    </div>
  );
}
