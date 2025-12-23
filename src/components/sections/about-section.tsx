'use client';

import { motion } from 'motion/react';
import { aboutMe } from '@/data/personal';
import { Container } from '@/components/ui/custom-container';
import {
  Section,
  SectionTitle,
  SectionHeader,
} from '@/components/ui/custom-section';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Award, BookOpen, Briefcase, Trophy } from 'lucide-react';
import { ScrollReveal } from '@/components/animations/scroll-reveal';
import { GradientText } from '@/components/animations/gradient-text';

export function AboutSection() {
  return (
    <Section id='about' className='relative z-10'>
      <Container>
        <SectionHeader>
          <SectionTitle>
            About <GradientText animate={false}>Me</GradientText>
          </SectionTitle>
          <p className='text-muted-foreground max-w-3xl mx-auto'>
            {aboutMe.bio}
          </p>
        </SectionHeader>

        <div className='grid grid-cols-1 md:grid-cols-2 gap-6 mt-12'>
          {/* Highlights */}
          <ScrollReveal delay={0.1}>
            <Card className='h-full'>
              <CardHeader>
                <CardTitle className='flex items-center gap-2'>
                  <Trophy className='size-5 text-primary' />
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
                      <span className='text-primary mt-1'>•</span>
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
                  <Award className='size-5 text-primary' />
                  Certifications
                </CardTitle>
              </CardHeader>
              <CardContent>
                <ul className='space-y-2'>
                  {aboutMe.certifications.map((cert) => (
                    <li key={cert} className='flex items-start gap-2 text-sm'>
                      <span className='text-primary mt-1'>•</span>
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
                  <Trophy className='size-5 text-primary' />
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
                  <BookOpen className='size-5 text-primary' />
                  Interests & Hobbies
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className='flex flex-wrap gap-2'>
                  {aboutMe.hobbies.map((hobby) => (
                    <Badge key={hobby} variant='secondary'>
                      {hobby}
                    </Badge>
                  ))}
                </div>
              </CardContent>
            </Card>
          </ScrollReveal>
        </div>

        {/* Experience Timeline */}
        <div className='mt-12'>
          <h3 className='text-2xl font-bold mb-6 text-center'>Experience</h3>
          <div className='space-y-4'>
            {aboutMe.experience.map((exp, index) => (
              <motion.div
                key={exp.title}
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
              >
                <Card>
                  <CardHeader>
                    <div className='flex items-start justify-between'>
                      <div>
                        <CardTitle className='flex items-center gap-2'>
                          <Briefcase className='size-5 text-primary' />
                          {exp.title}
                        </CardTitle>
                        <p className='text-sm text-muted-foreground mt-1'>
                          {exp.company} • {exp.period}
                        </p>
                      </div>
                    </div>
                  </CardHeader>
                  <CardContent>
                    <p className='text-sm text-muted-foreground'>
                      {exp.description}
                    </p>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>
      </Container>
    </Section>
  );
}
