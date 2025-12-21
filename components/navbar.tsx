'use client';

import Link from 'next/link';
import { ThemeToggle } from '@/components/theme-toggle';
import { Container } from '@/components/ui/Container';
import { Button } from '@/components/ui/button';
import { personalInfo } from '@/data/personal';

export function Navbar() {
  return (
    <nav className='sticky top-0 z-50 w-full border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60'>
      <Container>
        <div className='flex h-16 items-center justify-between'>
          <div className='flex items-center gap-8'>
            <Link href='/' className='text-xl font-bold'>
              {personalInfo.name.split(' ')[0]}
            </Link>
            <div className='hidden md:flex items-center gap-6'>
              <Link
                href='/#about'
                className='text-sm font-medium text-muted-foreground hover:text-foreground transition-colors'
              >
                About
              </Link>
              <Link
                href='/#skills'
                className='text-sm font-medium text-muted-foreground hover:text-foreground transition-colors'
              >
                Skills
              </Link>
              <Link
                href='/#projects'
                className='text-sm font-medium text-muted-foreground hover:text-foreground transition-colors'
              >
                Projects
              </Link>
              <Link
                href='/blog'
                className='text-sm font-medium text-muted-foreground hover:text-foreground transition-colors'
              >
                Blog
              </Link>
              <Link
                href='/#contact'
                className='text-sm font-medium text-muted-foreground hover:text-foreground transition-colors'
              >
                Contact
              </Link>
            </div>
          </div>
          <div className='flex items-center gap-2'>
            <Button variant='ghost' size='sm' asChild>
              <Link href={personalInfo.resume} target='_blank'>
                Resume
              </Link>
            </Button>
            <ThemeToggle />
          </div>
        </div>
      </Container>
    </nav>
  );
}
