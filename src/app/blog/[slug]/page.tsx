import { notFound } from 'next/navigation';
import Link from 'next/link';
import { format } from 'date-fns';
import { getAllBlogPosts, getBlogPost, getRelatedPosts } from '@/lib/blog';
import { Container } from '@/components/ui/container';
import { Badge } from '@/components/ui/badge';
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { ArrowLeft, Calendar, Clock } from 'lucide-react';

export async function generateStaticParams() {
  const posts = getAllBlogPosts();
  return posts.map((post) => ({
    slug: post.slug,
  }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const post = await getBlogPost(slug);

  if (!post) {
    return {
      title: 'Post Not Found',
    };
  }

  return {
    title: post.title,
    description: post.description,
  };
}

export default async function BlogPostPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const post = await getBlogPost(slug);

  if (!post) {
    notFound();
  }

  const relatedPosts = await getRelatedPosts(slug, 3);

  return (
    <div className='min-h-screen py-20'>
      <Container size='md'>
        <Button variant='ghost' size='sm' asChild className='mb-8'>
          <Link href='/blog'>
            <ArrowLeft className='size-4 mr-2' />
            Back to Blog
          </Link>
        </Button>

        <article>
          <header className='mb-8'>
            <div className='flex flex-wrap gap-2 mb-4'>
              {post.tags.map((tag) => (
                <Badge key={tag} variant='secondary'>
                  {tag}
                </Badge>
              ))}
            </div>
            <h1 className='text-4xl font-bold mb-4'>{post.title}</h1>
            <p className='text-xl text-muted-foreground mb-4'>
              {post.description}
            </p>
            <div className='flex items-center gap-4 text-sm text-muted-foreground'>
              <span className='flex items-center gap-1'>
                <Calendar className='size-3' />
                {format(new Date(post.date), 'MMMM d, yyyy')}
              </span>
              <span className='flex items-center gap-1'>
                <Clock className='size-3' />
                {post.readingTime}
              </span>
              <span>By {post.author}</span>
            </div>
          </header>

          <div className='prose prose-neutral dark:prose-invert max-w-none'>
            {post.content}
          </div>
        </article>

        {relatedPosts.length > 0 && (
          <div className='mt-16'>
            <h2 className='text-2xl font-bold mb-6'>Related Posts</h2>
            <div className='grid grid-cols-1 md:grid-cols-3 gap-6'>
              {relatedPosts.map((relatedPost) => (
                <Card key={relatedPost.slug}>
                  <CardHeader>
                    <CardTitle className='text-lg'>
                      <Link
                        href={`/blog/${relatedPost.slug}`}
                        className='hover:text-primary transition-colors'
                      >
                        {relatedPost.title}
                      </Link>
                    </CardTitle>
                    <CardDescription className='line-clamp-2'>
                      {relatedPost.description}
                    </CardDescription>
                  </CardHeader>
                  <CardContent>
                    <div className='text-sm text-muted-foreground'>
                      {format(new Date(relatedPost.date), 'MMM d, yyyy')}
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        )}
      </Container>
    </div>
  );
}
