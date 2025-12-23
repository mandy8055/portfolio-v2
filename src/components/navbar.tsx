'use client';

import Link from 'next/link';
import { useRouter, usePathname } from 'next/navigation';
import { ThemeToggle } from '@/components/theme-toggle';
import { Container } from '@/components/ui/container';
import { Button } from '@/components/ui/button';
import { personalInfo } from '@/data/personal';

export function Navbar() {
  const router = useRouter();
  const pathname = usePathname();

  const handleContactClick = (e: React.MouseEvent<HTMLAnchorElement>) => {
    e.preventDefault();
    if (pathname !== '/') {
      router.push('/#contact');
      setTimeout(() => {
        document
          .getElementById('contact')
          ?.scrollIntoView({ behavior: 'smooth' });
      }, 100);
    } else {
      document
        .getElementById('contact')
        ?.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <nav className='sticky top-0 z-50 w-full border-b bg-background/95 backdrop-blur supports-backdrop-filter:bg-background/60 shadow-sm'>
      <Container>
        <div className='flex h-16 items-center justify-between'>
          <div className='flex items-center gap-8'>
            <Link
              href='/'
              className='text-xl font-bold hover:text-teal-500 transition-colors'
            >
              {personalInfo.name.split(' ')[0]}
            </Link>
            <div className='hidden md:flex items-center gap-6'>
              <Link
                href='/about'
                className='text-sm font-medium text-muted-foreground hover:text-teal-500 transition-colors relative group'
              >
                About
                <span className='absolute -bottom-1 left-0 w-0 h-0.5 bg-teal-500 transition-all group-hover:w-full'></span>
              </Link>
              <Link
                href='/experience'
                className='text-sm font-medium text-muted-foreground hover:text-teal-500 transition-colors relative group'
              >
                Experience
                <span className='absolute -bottom-1 left-0 w-0 h-0.5 bg-teal-500 transition-all group-hover:w-full'></span>
              </Link>
              <Link
                href='/projects'
                className='text-sm font-medium text-muted-foreground hover:text-teal-500 transition-colors relative group'
              >
                Projects
                <span className='absolute -bottom-1 left-0 w-0 h-0.5 bg-teal-500 transition-all group-hover:w-full'></span>
              </Link>
              {/* UNCOMMENT THIS WHEN READY TO ACTIVATE BLOG (2026) - See tmp/BLOG_SETUP_GUIDE.md */}

              {/* <Link
                href='/blog'
                className='text-sm font-medium text-muted-foreground hover:text-teal-500 transition-colors relative group'
              >
                Blog
                <span className='absolute -bottom-1 left-0 w-0 h-0.5 bg-teal-500 transition-all group-hover:w-full'></span>
              </Link> */}

              <a
                href='#contact'
                onClick={handleContactClick}
                className='text-sm font-medium text-muted-foreground hover:text-teal-500 transition-colors cursor-pointer relative group'
              >
                Contact
                <span className='absolute -bottom-1 left-0 w-0 h-0.5 bg-teal-500 transition-all group-hover:w-full'></span>
              </a>
            </div>
          </div>
          <div className='flex items-center gap-2'>
            <Button
              variant='outline'
              size='sm'
              asChild
              className='hover:bg-teal-500 hover:text-white hover:border-teal-500 transition-colors'
            >
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
