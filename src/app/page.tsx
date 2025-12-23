import { EnhancedHero } from '@/components/sections/enhanced-hero';
import { AboutSection } from '@/components/sections/about-section';
import { ProjectsSection } from '@/components/sections/projects-section';
import { ContactSection } from '@/components/sections/contact-section';

export default function Home() {
  return (
    <div className='min-h-screen bg-background'>
      {/* Enhanced Hero Section */}
      <EnhancedHero />

      {/* Main Sections */}
      <AboutSection />
      <ProjectsSection />
      <ContactSection />
    </div>
  );
}
