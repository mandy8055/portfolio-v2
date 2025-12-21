'use client';

import { useState } from 'react';
import { motion } from 'motion/react';
import { Container } from '@/components/ui/Container';
import { Section, SectionTitle, SectionHeader } from '@/components/ui/Section';
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { ExternalLink, Github } from 'lucide-react';
import { projects } from '@/data/projects';
import { ScrollReveal } from '@/components/animations/ScrollReveal';
import { GradientText } from '@/components/animations/GradientText';

export default function ProjectsPage() {
  const [filter, setFilter] = useState<string>('all');

  // Get all unique tags
  const allTags = Array.from(
    new Set(projects.flatMap((project) => project.tags)),
  );

  // Filter projects
  const filteredProjects =
    filter === 'all'
      ? projects
      : projects.filter((project) => project.tags.includes(filter));

  return (
    <div className='min-h-screen bg-background pt-20'>
      <Section className='relative z-10'>
        <Container>
          <SectionHeader>
            <SectionTitle>
              All <GradientText animate={false}>Projects</GradientText>
            </SectionTitle>
            <p className='text-muted-foreground max-w-3xl mx-auto'>
              A comprehensive collection of my work and side projects
            </p>
          </SectionHeader>

          {/* Filter buttons */}
          <div className='flex flex-wrap justify-center gap-2 mb-12'>
            <Button
              variant={filter === 'all' ? 'default' : 'outline'}
              onClick={() => setFilter('all')}
              size='sm'
            >
              All Projects ({projects.length})
            </Button>
            {allTags.slice(0, 8).map((tag) => (
              <Button
                key={tag}
                variant={filter === tag ? 'default' : 'outline'}
                onClick={() => setFilter(tag)}
                size='sm'
              >
                {tag}
              </Button>
            ))}
          </div>

          {/* Projects grid */}
          <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6'>
            {filteredProjects.map((project, index) => (
              <ScrollReveal key={project.title} delay={index * 0.05}>
                <Card className='h-full flex flex-col group hover:shadow-xl hover:shadow-teal-500/5 transition-all duration-300 hover:scale-[1.02]'>
                  <CardHeader>
                    <CardTitle className='group-hover:text-teal-500 transition-colors'>
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
                        <Button
                          variant='outline'
                          size='sm'
                          asChild
                          className='flex-1'
                        >
                          <a
                            href={project.github}
                            target='_blank'
                            rel='noopener noreferrer'
                          >
                            <Github className='size-4 mr-2' />
                            Code
                          </a>
                        </Button>
                      )}
                      {project.demo && (
                        <Button size='sm' asChild className='flex-1'>
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

          {filteredProjects.length === 0 && (
            <div className='text-center py-12'>
              <p className='text-muted-foreground'>
                No projects found with the selected filter.
              </p>
            </div>
          )}
        </Container>
      </Section>
    </div>
  );
}
