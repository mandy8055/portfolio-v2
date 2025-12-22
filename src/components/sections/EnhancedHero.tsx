'use client';

import { motion } from 'motion/react';
import Link from 'next/link';
import { personalInfo } from '@/data/personal';
import { Button } from '@/components/ui/button';
// Background Effects - Choose one or combine them!
import { ParticlesBackground } from '@/components/backgrounds/ParticlesBackground';
// Animations
import { Typewriter } from '@/components/animations/Typewriter';
import { GradientText } from '@/components/animations/GradientText';
import { FileText } from 'lucide-react';

export function EnhancedHero() {
  const roles = [
    'Full Stack Developer',
    'React/Next.js Expert',
    'Cloud Architect',
    'Tech Enthusiast',
  ];

  return (
    <section className='relative min-h-screen flex items-center justify-center overflow-hidden'>
      <div className='absolute inset-0 z-0'>
        <ParticlesBackground />
      </div>

      {/* Gradient Overlays - Reduced opacity to show particles */}
      <div className='absolute inset-0 bg-linear-to-b from-background/20 via-transparent to-background/40 pointer-events-none' />
      <div className='absolute inset-0 bg-linear-to-r from-teal-500/3 via-cyan-500/2 to-emerald-500/3 pointer-events-none' />

      {/* Content */}
      <div className='container mx-auto px-4 relative z-10'>
        <div className='flex flex-col items-center justify-center text-center max-w-5xl mx-auto'>
          {/* Greeting */}
          <motion.p
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className='text-muted-foreground text-lg md:text-xl mb-4'
          >
            Hello, I&apos;m
          </motion.p>

          {/* Name with Gradient */}
          <motion.h1
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className='text-5xl md:text-7xl lg:text-8xl font-bold mb-6'
          >
            <GradientText animate={true}>{personalInfo.name}</GradientText>
          </motion.h1>

          {/* Typewriter Tagline */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            className='text-xl md:text-3xl text-muted-foreground mb-8 min-h-10 flex items-center'
          >
            <Typewriter
              words={roles}
              loop={true}
              typingSpeed={100}
              delayBetweenWords={2000}
              className='font-medium'
            />
          </motion.div>

          {/* Bio */}
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.6 }}
            className='text-base md:text-lg text-muted-foreground max-w-2xl mb-12'
          >
            {personalInfo.tagline}
          </motion.p>

          {/* CTA Buttons */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.8 }}
            className='flex flex-wrap gap-4 justify-center mb-12'
          >
            <Button size='lg' asChild className='group'>
              <a
                href='#projects'
                onClick={(e) => {
                  e.preventDefault();
                  document
                    .getElementById('projects')
                    ?.scrollIntoView({ behavior: 'smooth' });
                }}
                className='cursor-pointer'
              >
                View Projects
                <motion.span
                  className='ml-2'
                  animate={{ x: [0, 5, 0] }}
                  transition={{ duration: 1.5, repeat: Infinity }}
                >
                  →
                </motion.span>
              </a>
            </Button>
            <Button variant='outline' size='lg' asChild>
              <a
                href='#contact'
                onClick={(e) => {
                  e.preventDefault();
                  document
                    .getElementById('contact')
                    ?.scrollIntoView({ behavior: 'smooth' });
                }}
                className='cursor-pointer'
              >
                Contact Me
              </a>
            </Button>
            <Button variant='ghost' size='lg' asChild>
              <Link href={personalInfo.resume} target='_blank'>
                <FileText className='size-4 mr-2' />
                Resume
              </Link>
            </Button>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
