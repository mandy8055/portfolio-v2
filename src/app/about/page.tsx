'use client';

import { Container } from '@/components/ui/custom-container';
import {
  Section,
  SectionTitle,
  SectionHeader,
} from '@/components/ui/custom-section';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Award, BookOpen, Trophy, Code2, Heart } from 'lucide-react';
import { aboutMe } from '@/data/personal';
import { ScrollReveal } from '@/components/animations/scroll-reveal';
import { GradientText } from '@/components/animations/gradient-text';

export default function AboutPage() {
  const skills = {
    frontend: [
      'React',
      'Next.js',
      'TypeScript',
      'JavaScript',
      'HTML5',
      'CSS3',
      'Tailwind CSS',
      'SASS',
    ],
    backend: [
      'Node.js',
      'Express',
      'GraphQL',
      'REST APIs',
      'MongoDB',
      'PostgreSQL',
    ],
    tools: [
      'Git',
      'Docker',
      'AWS',
      'CI/CD',
      'Jest',
      'Webpack',
      'Vite',
      'Figma',
    ],
  };

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

          {/* Skills Section */}
          <div className='mt-12'>
            <h2 className='text-3xl font-bold text-center mb-8'>
              <GradientText animate={false}>Skills & Expertise</GradientText>
            </h2>
            <div className='grid grid-cols-1 md:grid-cols-3 gap-6'>
              <ScrollReveal delay={0.1}>
                <Card>
                  <CardHeader>
                    <CardTitle className='flex items-center gap-2'>
                      <Code2 className='size-5 text-teal-500' />
                      Frontend
                    </CardTitle>
                  </CardHeader>
                  <CardContent>
                    <div className='flex flex-wrap gap-2'>
                      {skills.frontend.map((skill) => (
                        <Badge key={skill} variant='secondary'>
                          {skill}
                        </Badge>
                      ))}
                    </div>
                  </CardContent>
                </Card>
              </ScrollReveal>

              <ScrollReveal delay={0.2}>
                <Card>
                  <CardHeader>
                    <CardTitle className='flex items-center gap-2'>
                      <Code2 className='size-5 text-cyan-500' />
                      Backend
                    </CardTitle>
                  </CardHeader>
                  <CardContent>
                    <div className='flex flex-wrap gap-2'>
                      {skills.backend.map((skill) => (
                        <Badge key={skill} variant='secondary'>
                          {skill}
                        </Badge>
                      ))}
                    </div>
                  </CardContent>
                </Card>
              </ScrollReveal>

              <ScrollReveal delay={0.3}>
                <Card>
                  <CardHeader>
                    <CardTitle className='flex items-center gap-2'>
                      <Code2 className='size-5 text-emerald-500' />
                      Tools & Others
                    </CardTitle>
                  </CardHeader>
                  <CardContent>
                    <div className='flex flex-wrap gap-2'>
                      {skills.tools.map((skill) => (
                        <Badge key={skill} variant='secondary'>
                          {skill}
                        </Badge>
                      ))}
                    </div>
                  </CardContent>
                </Card>
              </ScrollReveal>
            </div>
          </div>

          {/* Highlights, Certifications, Awards */}
          <div className='grid grid-cols-1 md:grid-cols-2 gap-6 mt-12'>
            {/* Highlights */}
            <ScrollReveal delay={0.1}>
              <Card className='h-full'>
                <CardHeader>
                  <CardTitle className='flex items-center gap-2'>
                    <Trophy className='size-5 text-teal-500' />
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
                        <span className='text-teal-500 mt-1'>•</span>
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
                    <Award className='size-5 text-cyan-500' />
                    Certifications
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <ul className='space-y-2'>
                    {aboutMe.certifications.map((cert) => (
                      <li key={cert} className='flex items-start gap-2 text-sm'>
                        <span className='text-cyan-500 mt-1'>•</span>
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
                    <Trophy className='size-5 text-emerald-500' />
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
                        <BookOpen className='size-5 text-teal-500' />
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
