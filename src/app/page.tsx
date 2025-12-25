import type { Metadata } from 'next';
import { EnhancedHero } from '@/components/sections/enhanced-hero';
import { AboutSection } from '@/components/sections/about-section';
import { ProjectsSection } from '@/components/sections/projects-section';

export const metadata: Metadata = {
  title: 'Home',
  description:
    'Portfolio of Manuj Sankrit - Senior Software Engineer, Arctic Code Vault Contributor, and open-source enthusiast. Specializing in React, Next.js, TypeScript, and modern web development.',
  openGraph: {
    title: 'Manuj Sankrit | Senior Software Engineer',
    description: 'Arctic Code Vault Contributor | React & Next.js Specialist',
  },
};

export default function Home() {
  return (
    <div className='min-h-screen bg-background'>
      {/* Enhanced Hero Section */}
      <EnhancedHero />

      {/* Main Sections */}
      <AboutSection />
      <ProjectsSection />
    </div>
  );
}
