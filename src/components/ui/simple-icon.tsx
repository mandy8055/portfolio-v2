import { type SimpleIcon as SimpleIconType } from 'simple-icons';
import {
  siGithub as Github,
  siX as X,
  siStackoverflow as StackOverflow,
  siLeetcode as LeetCode,
} from 'simple-icons';

export type SimpleIconProps = {
  icon: string;
  className?: string;
};

const iconRegistry: Record<string, SimpleIconType> = {
  Github,
  X,
  StackOverflow,
  LeetCode,
};

/**
 * Generic wrapper component for simple-icons
 * Follows DRY principle and provides consistent icon rendering
 */
export function SimpleIcon({ icon, className }: SimpleIconProps) {
  const iconData = iconRegistry[icon];

  if (!iconData) {
    console.warn(`Icon "${icon}" not found in registry`);
    return null;
  }

  return (
    <svg
      role='img'
      viewBox='0 0 24 24'
      xmlns='http://www.w3.org/2000/svg'
      fill='currentColor'
      className={className}
      aria-label={iconData.title}
    >
      <title>{iconData.title}</title>
      <path d={iconData.path} />
    </svg>
  );
}

export const IconNames = Object.keys(iconRegistry) as Array<
  keyof typeof iconRegistry
>;

export { iconRegistry };
