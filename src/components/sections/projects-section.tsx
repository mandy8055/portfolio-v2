'use client';

import Link from 'next/link';
import { projects } from '@/data/projects';
import { Container } from '@/components/ui/custom-container';
import {
  Section,
  SectionTitle,
  SectionHeader,
} from '@/components/ui/custom-section';
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { ExternalLink, ArrowRight } from 'lucide-react';
import { ScrollReveal } from '@/components/animations/scroll-reveal';
import { SimpleIcon } from '@/components/ui/simple-icon';
import { GradientText } from '@/components/animations/gradient-text';

export function ProjectsSection() {
  const featuredProjects = projects.filter((p) => p.featured).slice(0, 3);

  return (
    <Section id='projects' className='relative overflow-hidden z-10'>
      {/* Background Effects */}
      <div className='absolute inset-0 bg-linear-to-b from-transparent via-primary/5 to-transparent pointer-events-none' />

      <Container>
        <SectionHeader>
          <SectionTitle>
            Featured <GradientText animate={false}>Projects</GradientText>
          </SectionTitle>
          <p className='text-muted-foreground'>A selection of my best work</p>
        </SectionHeader>

        <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6'>
          {featuredProjects.map((project, index) => (
            <ScrollReveal key={project.title} delay={index * 0.1}>
              <Card className='h-full flex flex-col group hover:shadow-xl hover:shadow-primary/5 transition-all duration-300 hover:scale-[1.02]'>
                <CardHeader>
                  <CardTitle className='group-hover:text-primary transition-colors'>
                    {project.title}
                  </CardTitle>
                  <CardDescription>{project.description}</CardDescription>
                </CardHeader>
                <CardContent className='flex-1 flex flex-col justify-between'>
                  <div className='flex flex-wrap gap-2 mb-4'>
                    {project.tags.map((tag) => (
                      <Badge key={tag} variant='secondary'>
                        {tag}
                      </Badge>
                    ))}
                  </div>
                  <div className='flex gap-2'>
                    {project.github && (
                      <Button variant='outline' size='sm' asChild>
                        <a
                          href={project.github}
                          target='_blank'
                          rel='noopener noreferrer'
                        >
                          <SimpleIcon icon='Github' className='size-4 mr-2' />
                          Code
                        </a>
                      </Button>
                    )}
                    {project.demo && (
                      <Button size='sm' asChild>
                        <a
                          href={project.demo}
                          target='_blank'
                          rel='noopener noreferrer'
                        >
                          <ExternalLink className='size-4 mr-2' />
                          Demo
                        </a>
                      </Button>
                    )}
                  </div>
                </CardContent>
              </Card>
            </ScrollReveal>
          ))}
        </div>

        {/* View All Projects Button */}
        <div className='flex justify-center mt-12'>
          <Button size='lg' asChild>
            <Link href='/projects'>
              View All Projects
              <ArrowRight className='size-4 ml-2' />
            </Link>
          </Button>
        </div>
      </Container>
    </Section>
  );
}
