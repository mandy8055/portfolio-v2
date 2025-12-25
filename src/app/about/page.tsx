import { Container } from '@/components/ui/custom-container';
import {
  Section,
  SectionTitle,
  SectionHeader,
} from '@/components/ui/custom-section';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Award, BookOpen, Trophy, Heart, Sparkles } from 'lucide-react';
import { aboutMe } from '@/data/personal';
import { ScrollReveal } from '@/components/animations/scroll-reveal';
import { GradientText } from '@/components/animations/gradient-text';
import { SkillsShowcase } from '@/components/sections/skills-showcase';
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'About Me',
  description:
    'Learn about Manuj Sankrit - Senior Software Engineer, Arctic Code Vault Contributor, 2x GATE Qualifier, and State Championship swimmer. Passionate about React, Next.js, and open-source development.',
  keywords: [
    'About Manuj Sankrit',
    'Software Engineer',
    'Arctic Code Vault',
    'Stack Overflow',
    'GATE Qualifier',
    'React Developer',
    'AWS Certified',
  ],
  openGraph: {
    title: 'About Manuj Sankrit | Arctic Code Vault Contributor',
    description:
      '2x GATE Qualifier | AWS Certified | State Championship Swimmer',
  },
};

export default function AboutPage() {
  return (
    <div className='min-h-screen bg-background pt-20'>
      <Section className='relative z-10'>
        <Container>
          <SectionHeader>
            <SectionTitle>
              About <GradientText animate={false}>Me</GradientText>
            </SectionTitle>
            <p className='text-muted-foreground max-w-3xl mx-auto text-lg'>
              {aboutMe.bio}
            </p>
          </SectionHeader>

          {/* Skills Showcase */}
          <SkillsShowcase />

          {/* Highlights, Certifications, Awards */}
          <div className='grid grid-cols-1 md:grid-cols-2 gap-6 mt-12'>
            {/* Highlights */}
            <ScrollReveal delay={0.1}>
              <Card className='h-full'>
                <CardHeader>
                  <CardTitle className='flex items-center gap-2'>
                    <Trophy className='size-5 text-theme-primary' />
                    Highlights & Achievements
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <ul className='space-y-2'>
                    {aboutMe.highlights.map((highlight) => (
                      <li
                        key={highlight}
                        className='flex items-start gap-2 text-sm'
                      >
                        <span className='text-theme-primary mt-1'>•</span>
                        <span>{highlight}</span>
                      </li>
                    ))}
                  </ul>
                </CardContent>
              </Card>
            </ScrollReveal>

            {/* Certifications */}
            <ScrollReveal delay={0.2}>
              <Card className='h-full'>
                <CardHeader>
                  <CardTitle className='flex items-center gap-2'>
                    <Award className='size-5 text-theme-secondary' />
                    Certifications
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <ul className='space-y-2'>
                    {aboutMe.certifications.map((cert) => (
                      <li key={cert} className='flex items-start gap-2 text-sm'>
                        <span className='text-theme-secondary mt-1'>•</span>
                        <span>{cert}</span>
                      </li>
                    ))}
                  </ul>
                </CardContent>
              </Card>
            </ScrollReveal>

            {/* Awards */}
            <ScrollReveal delay={0.3}>
              <Card className='h-full'>
                <CardHeader>
                  <CardTitle className='flex items-center gap-2'>
                    <Trophy className='size-5 text-theme-tertiary' />
                    Awards
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <div className='space-y-3'>
                    {aboutMe.awards.map((award) => (
                      <div key={award.title}>
                        <p className='font-medium text-sm'>{award.title}</p>
                        <p className='text-xs text-muted-foreground'>
                          {award.organization} • {award.date}
                        </p>
                      </div>
                    ))}
                  </div>
                </CardContent>
              </Card>
            </ScrollReveal>

            {/* Hobbies */}
            <ScrollReveal delay={0.4}>
              <Card className='h-full'>
                <CardHeader>
                  <CardTitle className='flex items-center gap-2'>
                    <Heart className='size-5 text-pink-500' />
                    Hobbies & Interests
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <ul className='space-y-2'>
                    {aboutMe.hobbies.map((hobby) => (
                      <li
                        key={hobby}
                        className='flex items-start gap-2 text-sm'
                      >
                        <span className='text-pink-500 mt-1'>•</span>
                        <span>{hobby}</span>
                      </li>
                    ))}
                  </ul>
                </CardContent>
              </Card>
            </ScrollReveal>
          </div>

          {/* FUN FACTS SECTION */}
          <div className='mt-8'>
            <ScrollReveal delay={0.5}>
              <Card className='h-full md:col-span-2 bg-linear-to-br from-theme-primary/5 to-theme-secondary/5 border border-theme-primary/10'>
                <CardHeader>
                  <CardTitle className='flex items-center gap-2'>
                    <Sparkles className='size-5 text-yellow-500' />
                    Plot Twist: I'm Not Just Code
                  </CardTitle>
                </CardHeader>
                <CardContent className='space-y-6'>
                  {/* Day/Night/Weekend Grid */}
                  <div className='grid md:grid-cols-3 gap-4'>
                    <div className='text-center p-4 rounded-lg bg-background/50 border border-theme-primary/20 hover:bg-background/80 transition-colors'>
                      <p className='font-semibold text-sm mb-2 text-theme-primary'>
                        <span className='inline-block text-2xl drop-shadow-sm brightness-110 contrast-125 dark:brightness-100 dark:contrast-100'>
                          ☀️
                        </span>{' '}
                        Day Job
                      </p>
                      <p className='text-sm text-muted-foreground'>
                        {aboutMe.dayJob}
                      </p>
                    </div>
                    <div className='text-center p-4 rounded-lg bg-background/50 border border-theme-secondary/20 hover:bg-background/80 transition-colors'>
                      <p className='font-semibold text-sm mb-2 text-theme-secondary'>
                        <span className='inline-block text-2xl drop-shadow-sm brightness-110 contrast-125 dark:brightness-100 dark:contrast-100'>
                          🌙
                        </span>{' '}
                        Night Shift
                      </p>
                      <p className='text-sm text-muted-foreground'>
                        {aboutMe.nightShift}
                      </p>
                    </div>
                    <div className='text-center p-4 rounded-lg bg-background/50 border border-theme-tertiary/20 hover:bg-background/80 transition-colors'>
                      <p className='font-semibold text-sm mb-2 text-theme-tertiary'>
                        <span className='inline-block text-2xl drop-shadow-sm brightness-110 contrast-125 dark:brightness-100 dark:contrast-100'>
                          🎉
                        </span>{' '}
                        Weekends
                      </p>
                      <p className='text-sm text-muted-foreground'>
                        {aboutMe.weekendVibe}
                      </p>
                    </div>
                  </div>

                  {/* Fun Facts List */}
                  <div>
                    <h4 className='font-semibold mb-3 text-sm'>
                      Fun Facts About Me:
                    </h4>
                    <ul className='grid md:grid-cols-2 gap-3'>
                      {aboutMe.funFacts.map((fact) => (
                        <li
                          key={fact}
                          className='flex items-start gap-2 text-sm p-3 rounded-lg bg-background/30 hover:bg-background/60 transition-colors'
                        >
                          <span className='text-yellow-500 mt-0.5 text-lg inline-block drop-shadow-sm brightness-110 contrast-125 dark:brightness-100 dark:contrast-100'>
                            ✨
                          </span>
                          <span>{fact}</span>
                        </li>
                      ))}
                    </ul>
                  </div>

                  {/* Dev Wisdom Quote */}
                  <div className='pt-4 border-t border-border/50'>
                    <p className='text-sm text-muted-foreground italic text-center'>
                      <span className='inline-block text-base drop-shadow-sm brightness-110 contrast-125 dark:brightness-100 dark:contrast-100'>
                        💬
                      </span>{' '}
                      "{aboutMe.devWisdom}"{' '}
                      <span className='inline-block text-base drop-shadow-sm brightness-110 contrast-125 dark:brightness-100 dark:contrast-100'>
                        🕵️‍♂️
                      </span>
                    </p>
                  </div>
                </CardContent>
              </Card>
            </ScrollReveal>
          </div>

          {/* Education */}
          <div className='mt-12'>
            <h2 className='text-3xl font-bold text-center mb-8'>
              <GradientText animate={false}>Education</GradientText>
            </h2>
            <div className='max-w-3xl mx-auto'>
              {aboutMe.education.map((edu, index) => (
                <ScrollReveal key={index}>
                  <Card>
                    <CardHeader>
                      <CardTitle className='flex items-center gap-2'>
                        <BookOpen className='size-5 text-theme-primary' />
                        {edu.degree}
                      </CardTitle>
                    </CardHeader>
                    <CardContent>
                      <p className='font-semibold text-primary mb-2'>
                        {edu.institution}
                      </p>
                      <p className='text-sm text-muted-foreground'>
                        {edu.achievement}
                      </p>
                    </CardContent>
                  </Card>
                </ScrollReveal>
              ))}
            </div>
          </div>
        </Container>
      </Section>
    </div>
  );
}
