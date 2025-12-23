'use client';

import type { ReactNode } from 'react';
import { motion } from 'motion/react';
import { cn } from '@/lib/utils';

interface SectionProps {
  children: ReactNode;
  className?: string;
  id?: string;
  animated?: boolean;
}

export function Section({
  children,
  className,
  id,
  animated = true,
}: SectionProps) {
  if (animated) {
    return (
      <motion.section
        id={id}
        className={cn('py-16 md:py-24', className)}
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true, margin: '-100px' }}
        transition={{ duration: 0.6 }}
      >
        {children}
      </motion.section>
    );
  }

  return (
    <section id={id} className={cn('py-16 md:py-24', className)}>
      {children}
    </section>
  );
}

interface SectionHeaderProps {
  children: ReactNode;
  className?: string;
  centered?: boolean;
}

export function SectionHeader({
  children,
  className,
  centered = true,
}: SectionHeaderProps) {
  return (
    <div className={cn('mb-12', centered && 'text-center', className)}>
      {children}
    </div>
  );
}

interface SectionTitleProps {
  children: ReactNode;
  className?: string;
}

export function SectionTitle({ children, className }: SectionTitleProps) {
  return (
    <h2
      className={cn(
        'text-3xl font-bold tracking-tight text-gray-900 dark:text-gray-100 sm:text-4xl md:text-5xl',
        className,
      )}
    >
      {children}
    </h2>
  );
}

interface SectionDescriptionProps {
  children: ReactNode;
  className?: string;
}

export function SectionDescription({
  children,
  className,
}: SectionDescriptionProps) {
  return (
    <p
      className={cn(
        'mt-4 text-lg text-gray-600 dark:text-gray-400 max-w-3xl mx-auto',
        className,
      )}
    >
      {children}
    </p>
  );
}
