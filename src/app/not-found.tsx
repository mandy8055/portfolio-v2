import Link from 'next/link';
import { Metadata } from 'next';
import { GradientText } from '@/components/animations/gradient-text';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';

export const metadata: Metadata = {
  title: '404 - Page Not Found | Manuj Sankrit',
  description:
    'This page seems to have swum away from the state championship...',
};

export default function NotFound() {
  return (
    <div className='min-h-screen flex items-center justify-center px-4'>
      <div className='max-w-2xl w-full text-center space-y-8 mb-4'>
        {/* Error Code with Tech Humor */}
        <div className='space-y-4'>
          <h1 className='text-8xl md:text-9xl font-bold'>
            <GradientText animate={false}>404</GradientText>
          </h1>
          <div className='text-xl md:text-2xl font-mono text-muted-foreground'>
            <span className='text-red-500'>Error:</span> Page Not Found
          </div>
        </div>

        {/* Witty Message */}
        <div className='space-y-4'>
          <h2 className='text-2xl md:text-3xl font-bold'>
            Houston, We Have a Problem 🚀
          </h2>
          <div className='space-y-3 text-muted-foreground text-lg'>
            <p>
              This page seems to have{' '}
              <span className='line-through'>failed JEE Mains</span> vanished
              from existence. Even my{' '}
              <strong>6.8k+ Stack Overflow reputation</strong> can't debug this
              one.
            </p>
            <p className='font-mono text-sm bg-secondary/50 p-4 rounded-lg border'>
              <span className='text-yellow-500'>if</span> (page.exists) {'{'}{' '}
              <br />
              &nbsp;&nbsp;<span className='text-blue-500'>
                return
              </span> content; <br />
              {'}'} <span className='text-yellow-500'>else</span> {'{'} <br />
              &nbsp;&nbsp;<span className='text-red-500'>throw</span>{' '}
              <span className='text-green-500'>new</span> NotFoundError();{' '}
              <br />
              &nbsp;&nbsp;
              <span className='text-gray-400'>
                // Guess we're here now 🤷‍♂️
              </span>{' '}
              <br />
              {'}'}
            </p>
            <p>
              I've searched through my <strong>Arctic Code Vault</strong>{' '}
              contributions, checked the <strong>CI/CD pipelines</strong>, even
              did a <strong>state-level dive</strong> into the database... but
              this page is swimming in uncharted waters.
            </p>
          </div>
        </div>

        {/* Fun Stats */}
        <div className='grid grid-cols-1 md:grid-cols-3 gap-4 pt-4'>
          <Card className='p-4 bg-secondary/30'>
            <CardContent className='p-0 space-y-1'>
              <div className='text-3xl font-bold text-theme-primary'>∅</div>
              <div className='text-sm text-muted-foreground'>Empty Set</div>
              <div className='text-xs text-muted-foreground'>No pages here</div>
            </CardContent>
          </Card>
          <Card className='p-4 bg-secondary/30'>
            <CardContent className='p-0 space-y-1'>
              <div className='text-3xl font-bold text-theme-secondary'>∞</div>
              <div className='text-sm text-muted-foreground'>Possibilities</div>
              <div className='text-xs text-muted-foreground'>Where to go?</div>
            </CardContent>
          </Card>
          <Card className='p-4 bg-secondary/30'>
            <CardContent className='p-0 space-y-1'>
              <div className='text-3xl font-bold text-theme-tertiary'>404</div>
              <div className='text-sm text-muted-foreground'>HTTP Status</div>
              <div className='text-xs text-muted-foreground'>Classic error</div>
            </CardContent>
          </Card>
        </div>

        {/* Philosophical Touch */}
        <blockquote className='border-l-4 border-theme-primary pl-4 italic text-muted-foreground'>
          "In the vast ocean of the internet, sometimes you swim to the wrong
          shore. But every 404 is just a redirect waiting to happen."
          <br />
          <span className='text-sm'>
            — Anonymous Developer (probably debugging at 3 AM)
          </span>
        </blockquote>

        {/* Call to Action */}
        <div className='flex flex-col sm:flex-row gap-4 justify-center pt-6'>
          <Button asChild size='lg'>
            <Link href='/'>← Swim Back Home</Link>
          </Button>
          <Button asChild variant='outline' size='lg'>
            <Link href='/blog'>Read My Blog</Link>
          </Button>
        </div>
      </div>
    </div>
  );
}
