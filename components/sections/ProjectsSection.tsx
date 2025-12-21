'use client';

import { motion } from 'motion/react';
import { projects } from '@/data/projects';
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

export function ProjectsSection() {
  const featuredProjects = projects.filter((p) => p.featured);

  return (
    <Section id='projects'>
      <Container>
        <SectionHeader>
          <SectionTitle>Featured Projects</SectionTitle>
          <p className='text-muted-foreground'>
            A selection of projects I've worked on
          </p>
        </SectionHeader>

        <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6'>
          {featuredProjects.map((project, index) => (
            <motion.div
              key={project.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-100px' }}
              transition={{ delay: index * 0.1 }}
            >
              <Card className='h-full flex flex-col'>
                <CardHeader>
                  <CardTitle>{project.title}</CardTitle>
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
                          <Github className='size-4 mr-2' />
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
            </motion.div>
          ))}
        </div>
      </Container>
    </Section>
  );
}
