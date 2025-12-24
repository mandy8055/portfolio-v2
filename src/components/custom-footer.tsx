'use client';

import { useState, useEffect } from 'react';
import Link from 'next/link';
import { personalInfo } from '@/data/personal';
import { ArrowUp } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { SimpleIcon } from '@/components/ui/simple-icon';

export function Footer() {
  const currentYear = new Date().getFullYear();
  const [showScrollTop, setShowScrollTop] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setShowScrollTop(window.scrollY > 400);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className='relative z-10 border-t bg-background'>
      <div className='container mx-auto px-4 py-12'>
        <div className='grid grid-cols-1 md:grid-cols-3 gap-8 mb-8'>
          {/* Brand/Name */}
          <div>
            <h3 className='text-xl font-bold mb-4'>{personalInfo.name}</h3>
            <p className='text-muted-foreground text-sm mb-4'>
              {personalInfo.tagline}
            </p>
            <p className='text-muted-foreground text-sm'>
              Building exceptional web experiences with modern technologies.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className='font-semibold mb-4'>Quick Links</h4>
            <ul className='space-y-2'>
              <li>
                <Link
                  href='/about'
                  className='text-sm text-muted-foreground hover:text-theme-primary transition-colors'
                >
                  About
                </Link>
              </li>
              <li>
                <Link
                  href='/experience'
                  className='text-sm text-muted-foreground hover:text-theme-primary transition-colors'
                >
                  Experience
                </Link>
              </li>
              <li>
                <Link
                  href='/projects'
                  className='text-sm text-muted-foreground hover:text-theme-primary transition-colors'
                >
                  Projects
                </Link>
              </li>
              <li>
                <Link
                  href='/blog'
                  className='text-sm text-muted-foreground hover:text-theme-primary transition-colors'
                >
                  Blog
                </Link>
              </li>
              <li>
                <Link
                  href='/#contact'
                  className='text-sm text-muted-foreground hover:text-theme-primary transition-colors'
                >
                  Contact
                </Link>
              </li>
            </ul>
          </div>

          {/* Connect */}
          <div>
            <h4 className='font-semibold mb-4'>Connect</h4>
            <div className='flex gap-4 mb-4'>
              {personalInfo.social.map((social) => (
                <Link
                  key={social.name}
                  href={social.url}
                  target='_blank'
                  rel='noopener noreferrer'
                  className='text-foreground/60 hover:text-theme-primary transition-all hover:-translate-y-1 transform duration-200'
                  aria-label={social.name}
                >
                  <SimpleIcon icon={social.icon} className='size-5' />
                </Link>
              ))}
            </div>
            <p className='text-sm text-muted-foreground'>
              Email:{' '}
              <a
                href={`mailto:${personalInfo.email}`}
                className='hover:text-theme-primary transition-colors'
              >
                {personalInfo.email}
              </a>
            </p>
          </div>
        </div>

        {/* Scroll to Top Button */}
        {showScrollTop && (
          <Button
            onClick={scrollToTop}
            size='icon'
            className='cursor-pointer fixed bottom-8 right-8 z-50 rounded-full shadow-lg bg-theme-primary hover:bg-theme-primary-hover text-white'
            aria-label='Scroll to top'
          >
            <ArrowUp className='size-5' />
          </Button>
        )}
        {/* Bottom Bar */}
        <div className='pt-8 border-t border-border'>
          <div className='flex flex-col md:flex-row justify-between items-center gap-4'>
            <p className='text-sm text-muted-foreground'>
              © {currentYear} {personalInfo.name}. All rights reserved.
            </p>
            <p className='text-sm text-muted-foreground'>
              Built with ❤️ using{' '}
              <span className='text-foreground font-medium'>Next.js</span> &{' '}
              <span className='text-foreground font-medium'>Tailwind CSS</span>
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
}
