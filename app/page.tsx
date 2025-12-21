import { personalInfo } from '@/data/personal';
import { skillCategories } from '@/data/skills';
import { getAllBlogPosts } from '@/lib/blog';
import { Button } from '@/components/ui/button';
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Container } from '@/components/ui/Container';
import { Section, SectionTitle, SectionHeader } from '@/components/ui/Section';
import { Navbar } from '@/components/navbar';
import Link from 'next/link';

export default function Home() {
  const blogPosts = getAllBlogPosts();

  ret>
      <Navbar />
      <div className='min-h-screen bg-background
    <div className='min-h-screen bg-white dark:bg-gray-950'>
      {/* Hero Section */}
      <Section className='bg-linear-to-b from-blue-50 to-white dark:from-gray-900 dark:to-gray-950'>
        <Container>
          <div className='text-center'>
            <h1 className='text-5xl md:text-6xl font-bold text-gray-900 dark:text-white mb-4'>
              {personalInfo.name}
            </h1>
            <p className='text-xl md:text-2xl text-gray-600 dark:text-gray-400 mb-8'>
              {personalInfo.tagline}
            </p>
            <div className='flex gap-4 justify-center'>
              <Button size='lg'>View Projects</Button>
              <Button variant='outline' size='lg'>
                Contact Me
              </Button>
            </div>
          </div>
        </Container>
      </Section>

      {/* Skills Preview */}
      <Section>
        <Container>
          <SectionHeader>
            <SectionTitle>Tech Stack</SectionTitle>
          </SectionHeader>
          <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6'>
            {skillCategories.slice(0, 3).map((category) => (
              <Card key={category.name}>
                <CardHeader>
                  <CardTitle>{category.name}</CardTitle>
                  <CardDescription>
                    {category.skills.length} skills
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <div className='flex flex-wrap gap-2'>
                    {category.skills.slice(0, 5).map((skill) => (
                      <Badge key={skill.name} variant='secondary'>
                        {skill.name}
                      </Badge>
                    ))}
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </Container>
      </Section>

      {/* Blog Preview */}
      <Section className='bg-muted/50'>
        <Container>
          <SectionHeader>
            <SectionTitle>Latest Blog Posts</SectionTitle>
          </SectionHeader>
          <div className='grid grid-cols-1 md:grid-cols-2 gap-6'>
            {blogPosts.slice(0, 2).map((post) => (
              <Card key={post.slug}>
                <CardHeader>
                  <CardTitle>{post.title}</CardTitle>
                  <CardDescription>
                    {post.formattedDate} • {post.readingTime}
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <p className='text-muted-foreground mb-4'>
                    {post.description}
                  </p>
                  <div className='flex flex-wrap gap-2 mb-4'>
                    {post.tags.map((tag) => (
                      <Badge key={tag} variant='outline'>
                        {tag}
                      </Badge>
                    ))}
                  </div>
                  <Link
                    href={`/blog/${post.slug}`}
                    className='text-primary hover:underline'
                  >
                    Read more →
                  </Link>
                </CardContent>
              </Card>
            ))}
          </div>
        </Container>
      </Section>

      {/* Social Links */}
      <Section>
        <Container>
          <div className='text-center'>
            <h3 className='text-2xl font-bold mb-6 text-gray-900 dark:text-white'>
              Connect With Me
            </h3>
            <div className='flex gap-4 justify-center'>
              {personalInfo.social.map((link) => (
                <a
                  key={link.name}
                  href={link.url}
                  target='_blank'
                  rel='noopener noreferrer'
                  className='px-4 py-2 bg-gray-100 dark:bg-gray-800 rounded-lg hover:bg-gray-200 dark:hover:bg-gray-700 transition-colors'
                >
                  {link.name}
                </a>
              ))}
            </div>
          </div>
        </Container>
    </>
      </Section>
    </div>
  );
}
