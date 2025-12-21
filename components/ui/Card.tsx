'use client';

import { type ReactNode } from 'react';
import { motion } from 'framer-motion';
import { cn } from '@/lib/utils';

interface CardProps {
  children: ReactNode;
  className?: string;
  hover?: boolean;
  animated?: boolean;
}

export function Card({
  children,
  className,
  hover = true,
  animated = true,
}: CardProps) {
  const cardClasses = cn(
    'rounded-xl border border-gray-200 bg-white dark:border-gray-800 dark:bg-gray-900 shadow-sm',
    hover && 'transition-shadow hover:shadow-lg dark:hover:shadow-gray-800/50',
    className,
  );

  if (animated) {
    return (
      <motion.div
        className={cardClasses}
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: '-100px' }}
        transition={{ duration: 0.5 }}
      >
        {children}
      </motion.div>
    );
  }

  return <div className={cardClasses}>{children}</div>;
}

interface CardHeaderProps {
  children: ReactNode;
  className?: string;
}

export function CardHeader({ children, className }: CardHeaderProps) {
  return <div className={cn('p-6 pb-4', className)}>{children}</div>;
}

interface CardTitleProps {
  children: ReactNode;
  className?: string;
}

export function CardTitle({ children, className }: CardTitleProps) {
  return (
    <h3
      className={cn(
        'text-xl font-semibold text-gray-900 dark:text-gray-100',
        className,
      )}
    >
      {children}
    </h3>
  );
}

interface CardDescriptionProps {
  children: ReactNode;
  className?: string;
}

export function CardDescription({ children, className }: CardDescriptionProps) {
  return (
    <p
      className={cn('mt-2 text-sm text-gray-600 dark:text-gray-400', className)}
    >
      {children}
    </p>
  );
}

interface CardContentProps {
  children: ReactNode;
  className?: string;
}

export function CardContent({ children, className }: CardContentProps) {
  return <div className={cn('p-6 pt-0', className)}>{children}</div>;
}

interface CardFooterProps {
  children: ReactNode;
  className?: string;
}

export function CardFooter({ children, className }: CardFooterProps) {
  return <div className={cn('p-6 pt-0', className)}>{children}</div>;
}
