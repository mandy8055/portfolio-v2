'use client';

import { type ComponentProps, forwardRef } from 'react';
import { motion, type MotionProps } from 'framer-motion';
import { cn } from '@/lib/utils';

type ButtonVariant = 'primary' | 'secondary' | 'outline' | 'ghost';
type ButtonSize = 'sm' | 'md' | 'lg';

interface ButtonProps extends Omit<ComponentProps<'button'>, 'ref'> {
  variant?: ButtonVariant;
  size?: ButtonSize;
  animated?: boolean;
}

const variantStyles: Record<ButtonVariant, string> = {
  primary:
    'bg-blue-600 text-white hover:bg-blue-700 dark:bg-blue-500 dark:hover:bg-blue-600 shadow-lg shadow-blue-500/50',
  secondary:
    'bg-gray-600 text-white hover:bg-gray-700 dark:bg-gray-500 dark:hover:bg-gray-600',
  outline:
    'border-2 border-blue-600 text-blue-600 hover:bg-blue-50 dark:border-blue-400 dark:text-blue-400 dark:hover:bg-blue-950',
  ghost:
    'text-gray-700 hover:bg-gray-100 dark:text-gray-300 dark:hover:bg-gray-800',
};

const sizeStyles: Record<ButtonSize, string> = {
  sm: 'px-3 py-1.5 text-sm',
  md: 'px-4 py-2 text-base',
  lg: 'px-6 py-3 text-lg',
};

export const Button = forwardRef<HTMLButtonElement, ButtonProps>(
  (
    {
      variant = 'primary',
      size = 'md',
      animated = true,
      className,
      children,
      ...props
    },
    ref,
  ) => {
    const buttonClasses = cn(
      'inline-flex items-center justify-center font-medium rounded-lg transition-colors duration-200 disabled:opacity-50 disabled:cursor-not-allowed focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 dark:focus:ring-offset-gray-900',
      variantStyles[variant],
      sizeStyles[size],
      className,
    );

    if (animated) {
      return (
        <motion.button
          ref={ref}
          className={buttonClasses}
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
          transition={{ type: 'spring', stiffness: 400, damping: 17 }}
          {...(props as MotionProps)}
        >
          {children}
        </motion.button>
      );
    }

    return (
      <button ref={ref} className={buttonClasses} {...props}>
        {children}
      </button>
    );
  },
);

Button.displayName = 'Button';
