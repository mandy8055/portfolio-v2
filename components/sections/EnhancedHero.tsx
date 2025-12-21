'use client';

import { motion } from 'motion/react';
import Link from 'next/link';
import { personalInfo } from '@/data/personal';
import { Button } from '@/components/ui/button';
import { ParticlesBackground } from '@/components/backgrounds/ParticlesBackground';
import { ShootingStars } from '@/components/backgrounds/ShootingStars';
import { Typewriter } from '@/components/animations/Typewriter';
import { GradientText } from '@/components/animations/GradientText';
import { Github, Linkedin, Mail, FileText } from 'lucide-react';

export function EnhancedHero() {
  const roles = [
    'Full Stack Developer',
    'React/Next.js Expert',
    'Cloud Architect',
    'Tech Enthusiast',
  ];

  return (
    <section className='relative min-h-screen flex items-center justify-center overflow-hidden'>
      {/* Particle Background */}
      <div className='absolute inset-0 z-0'>
        <ParticlesBackground />
      </div>

      {/* Shooting Stars Effect */}
      <ShootingStars />

      {/* Gradient Overlays */}
      <div className='absolute inset-0 bg-linear-to-b from-background/50 via-transparent to-background/80 pointer-events-none' />
      <div className='absolute inset-0 bg-linear-to-r from-primary/5 via-transparent to-purple-500/5 pointer-events-none' />

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
              <Link href='#projects'>
                View Projects
                <motion.span
                  className='ml-2'
                  animate={{ x: [0, 5, 0] }}
                  transition={{ duration: 1.5, repeat: Infinity }}
                >
                  →
                </motion.span>
              </Link>
            </Button>
            <Button variant='outline' size='lg' asChild>
              <Link href='#contact'>Contact Me</Link>
            </Button>
            <Button variant='ghost' size='lg' asChild>
              <Link href={personalInfo.resume} target='_blank'>
                <FileText className='size-4 mr-2' />
                Resume
              </Link>
            </Button>
          </motion.div>

          {/* Social Links */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.6, delay: 1 }}
            className='flex gap-4'
          >
            {personalInfo.social.map((link, index) => (
              <motion.a
                key={link.name}
                href={link.url}
                target='_blank'
                rel='noopener noreferrer'
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 1 + index * 0.1 }}
                whileHover={{ scale: 1.1, y: -5 }}
                className='p-3 rounded-full bg-muted/50 backdrop-blur-sm border border-border/50 hover:border-primary/50 hover:bg-primary/10 transition-all'
              >
                {link.name === 'GitHub' && <Github className='size-5' />}
                {link.name === 'LinkedIn' && <Linkedin className='size-5' />}
                {link.name === 'Email' && <Mail className='size-5' />}
                <span className='sr-only'>{link.name}</span>
              </motion.a>
            ))}
          </motion.div>

          {/* Scroll Indicator */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.6, delay: 1.2 }}
            className='absolute bottom-8 left-1/2 -translate-x-1/2'
          >
            <motion.div
              animate={{ y: [0, 10, 0] }}
              transition={{ duration: 2, repeat: Infinity }}
              className='w-6 h-10 border-2 border-muted-foreground/30 rounded-full flex justify-center'
            >
              <motion.div
                animate={{ y: [0, 12, 0] }}
                transition={{ duration: 2, repeat: Infinity }}
                className='w-1 h-3 bg-muted-foreground/50 rounded-full mt-2'
              />
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
