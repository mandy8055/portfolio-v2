import { Container } from '@/components/ui/custom-container';
import {
  Section,
  SectionTitle,
  SectionHeader,
} from '@/components/ui/custom-section';
import { GradientText } from '@/components/animations/gradient-text';
import { ProjectsList } from '@/components/projects/projects-list';
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Projects',
  description:
    'Explore projects by Manuj Sankrit - Data Structures Library (npm/JSR), AI-powered product recommendations, Smart Filters POC, and more. Built with React, Next.js, TypeScript, Python, and modern web technologies.',
  keywords: [
    'React Projects',
    'Next.js Projects',
    'TypeScript Projects',
    'Open Source',
    'npm packages',
    'AI/ML Projects',
    'Web Development Portfolio',
  ],
  openGraph: {
    title: 'Projects by Manuj Sankrit | React & Next.js Developer',
    description:
      'Data Structures Library, AI POCs, and full-stack applications built with modern JavaScript',
  },
};

export default function ProjectsPage() {
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

          <ProjectsList />
        </Container>
      </Section>
    </div>
  );
}
