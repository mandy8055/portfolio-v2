'use client';

import { Container } from '@/components/ui/custom-container';
import {
  Section,
  SectionTitle,
  SectionHeader,
} from '@/components/ui/custom-section';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Briefcase, MapPin, Calendar } from 'lucide-react';
import { aboutMe } from '@/data/personal';
import { ScrollReveal } from '@/components/animations/scroll-reveal';
import { GradientText } from '@/components/animations/gradient-text';

export default function ExperiencePage() {
  return (
    <div className='min-h-screen bg-background pt-20'>
      <Section className='relative z-10'>
        <Container>
          <SectionHeader>
            <SectionTitle>
              Work <GradientText animate={false}>Experience</GradientText>
            </SectionTitle>
            <p className='text-muted-foreground max-w-3xl mx-auto'>
              My professional journey and career highlights
            </p>
          </SectionHeader>

          <div className='relative mt-12'>
            {/* Timeline line */}
            <div className='absolute left-0 md:left-1/2 top-0 bottom-0 w-0.5 bg-linear-to-b from-theme-primary via-theme-secondary to-theme-tertiary md:-translate-x-px' />

            {/* Experience items */}
            <div className='space-y-12'>
              {aboutMe.experience.map((exp, index) => (
                <ScrollReveal key={index} delay={index * 0.1}>
                  <div
                    className={`relative flex flex-col md:flex-row gap-8 ${
                      index % 2 === 0 ? 'md:flex-row-reverse' : ''
                    }`}
                  >
                    {/* Timeline dot */}
                    <div className='absolute left-0 md:left-1/2 top-8 w-4 h-4 bg-linear-to-br from-theme-primary to-theme-secondary rounded-full border-4 border-background -translate-x-1.75 md:-translate-x-2 z-10' />

                    {/* Spacer for alternating layout */}
                    <div className='hidden md:block md:w-1/2' />

                    {/* Content */}
                    <Card
                      className={`md:w-1/2 ml-8 md:ml-0 ${
                        index % 2 === 0 ? 'md:mr-8' : 'md:ml-8'
                      }`}
                    >
                      <CardHeader>
                        <div className='flex items-start justify-between gap-4 flex-wrap'>
                          <div>
                            <CardTitle className='text-2xl mb-2'>
                              {exp.title}
                            </CardTitle>
                            <p className='text-xl font-semibold text-primary mb-2'>
                              {exp.company}
                            </p>
                          </div>
                        </div>
                        <div className='flex flex-col gap-2 text-sm text-muted-foreground'>
                          <div className='flex items-center gap-2'>
                            <Calendar className='size-4' />
                            {exp.period}
                          </div>
                          {exp.location && (
                            <div className='flex items-center gap-2'>
                              <MapPin className='size-4' />
                              {exp.location}
                            </div>
                          )}
                        </div>
                      </CardHeader>
                      <CardContent className='space-y-4'>
                        <p className='text-muted-foreground'>
                          {exp.description}
                        </p>

                        {exp.highlights && exp.highlights.length > 0 && (
                          <div>
                            <h4 className='font-semibold mb-2 text-sm'>
                              Key Achievements:
                            </h4>
                            <ul className='space-y-1.5'>
                              {exp.highlights.map((highlight, idx) => (
                                <li
                                  key={idx}
                                  className='flex items-start gap-2 text-sm'
                                >
                                  <span className='text-theme-primary mt-1'>•</span>
                                  <span>{highlight}</span>
                                </li>
                              ))}
                            </ul>
                          </div>
                        )}

                        {exp.technologies && exp.technologies.length > 0 && (
                          <div>
                            <h4 className='font-semibold mb-2 text-sm'>
                              Technologies:
                            </h4>
                            <div className='flex flex-wrap gap-2'>
                              {exp.technologies.map((tech) => (
                                <Badge key={tech} variant='secondary'>
                                  {tech}
                                </Badge>
                              ))}
                            </div>
                          </div>
                        )}
                      </CardContent>
                    </Card>
                  </div>
                </ScrollReveal>
              ))}
            </div>
          </div>

          {/* Education Section */}
          <div className='mt-20'>
            <h2 className='text-3xl font-bold text-center mb-8'>
              <GradientText animate={false}>Education</GradientText>
            </h2>
            <div className='max-w-3xl mx-auto'>
              {aboutMe.education.map((edu, index) => (
                <ScrollReveal key={index}>
                  <Card>
                    <CardHeader>
                      <CardTitle className='flex items-center gap-2'>
                        <Briefcase className='size-5 text-theme-primary' />
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
