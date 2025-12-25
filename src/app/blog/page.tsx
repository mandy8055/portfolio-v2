import { getAllBlogPosts, getAllTags } from '@/lib/blog';
import { Container } from '@/components/ui/custom-container';
import { BlogList } from '@/components/blog/blog-list';
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Blog',
  description:
    'Technical blog by Manuj Sankrit - Articles on React, Next.js, TypeScript, web performance, software architecture, and modern JavaScript development.',
  keywords: [
    'Tech Blog',
    'React Tutorials',
    'Next.js Articles',
    'TypeScript Tips',
    'Web Development Blog',
    'JavaScript Blog',
  ],
  openGraph: {
    title: 'Tech Blog | Manuj Sankrit',
    description:
      'Thoughts on React, Next.js, web development, and software engineering',
  },
};

export default function BlogPage() {
  const allPosts = getAllBlogPosts();
  const allTags = getAllTags();

  return (
    <div className='min-h-screen py-20'>
      <Container>
        <div className='mb-12'>
          <h1 className='text-4xl font-bold mb-4'>Blog</h1>
          <p className='text-muted-foreground text-lg'>
            Thoughts on web development, tech, and more
          </p>
        </div>

        <BlogList posts={allPosts} tags={allTags} />
      </Container>
    </div>
  );
}
