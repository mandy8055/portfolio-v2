'use client';

import { useState } from 'react';
import { Button } from '@/components/ui/button';
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { ExternalLink } from 'lucide-react';
import { projects } from '@/data/projects';
import { SimpleIcon } from '@/components/ui/simple-icon';
import { ScrollReveal } from '@/components/animations/scroll-reveal';

export function ProjectsList() {
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
    <>
      {/* Filter buttons */}
      <div className='flex flex-wrap justify-center gap-2 mb-12'>
        <Button
          variant={filter === 'all' ? 'default' : 'outline'}
          onClick={() => setFilter('all')}
          size='sm'
        >
          All Projects
        </Button>
        {allTags.map((tag) => (
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

      {/* Projects Grid */}
      <div className='grid grid-cols-1 md:grid-cols-2 gap-6'>
        {filteredProjects.map((project, index) => (
          <ScrollReveal key={project.title} delay={index * 0.1}>
            <Card className='h-full flex flex-col hover:shadow-lg transition-shadow'>
              <CardHeader>
                <CardTitle className='flex items-start justify-between gap-4'>
                  <span>{project.title}</span>
                </CardTitle>
                <CardDescription className='text-base'>
                  {project.description}
                </CardDescription>
              </CardHeader>
              <CardContent className='flex-1 flex flex-col gap-4'>
                <div className='space-y-3'>
                  <div className='flex flex-wrap gap-2'>
                    {project.tags.map((tag) => (
                      <Badge key={tag} variant='secondary'>
                        {tag}
                      </Badge>
                    ))}
                  </div>

                  <div className='flex gap-2 mt-auto'>
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
                          <SimpleIcon icon='Github' className='size-4 mr-2' />
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
                </div>
              </CardContent>
            </Card>
          </ScrollReveal>
        ))}
      </div>
    </>
  );
}
