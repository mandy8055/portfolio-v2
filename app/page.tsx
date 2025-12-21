import { personalInfo } from '@/data/personal';
import { Button } from '@/components/ui/button';
import { Container } from '@/components/ui/Container';
import { Section } from '@/components/ui/Section';
import { Navbar } from '@/components/navbar';
import { AboutSection } from '@/components/sections/AboutSection';
import { ProjectsSection } from '@/components/sections/ProjectsSection';
import { ContactSection } from '@/components/sections/ContactSection';
import Link from 'next/link';

export default function Home() {
  return (
    <>
      <Navbar />
      <div className='min-h-screen bg-background'>
        {/* Hero Section */}
        <Section className='bg-linear-to-b from-muted/50 to-background'>
          <Container>
            <div className='text-center'>
              <h1 className='text-5xl md:text-6xl font-bold mb-4'>
                {personalInfo.name}
              </h1>
              <p className='text-xl md:text-2xl text-muted-foreground mb-8'>
                {personalInfo.tagline}
              </p>
              <div className='flex gap-4 justify-center'>
                <Button size='lg' asChild>
                  <Link href='#projects'>View Projects</Link>
                </Button>
                <Button variant='outline' size='lg' asChild>
                  <Link href='#contact'>Contact Me</Link>
                </Button>
              </div>
            </div>
          </Container>
        </Section>

        {/* Main Sections */}
        <AboutSection />
        <ProjectsSection />
        <ContactSection />
      </div>
    </>
  );
}
