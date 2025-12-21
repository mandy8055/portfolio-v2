'use client';

import { useState, useMemo } from 'react';
import Link from 'next/link';
import { format } from 'date-fns';
import { getAllBlogPosts, getAllTags } from '@/lib/blog';
import { Container } from '@/components/ui/Container';
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { ArrowRight, Calendar, Clock, Search } from 'lucide-react';

export default function BlogPage() {
  const allPosts = getAllBlogPosts();
  const allTags = getAllTags();
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedTag, setSelectedTag] = useState<string | null>(null);

  const filteredPosts = useMemo(() => {
    return allPosts.filter((post) => {
      const matchesSearch =
        searchQuery === '' ||
        post.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
        post.description.toLowerCase().includes(searchQuery.toLowerCase());

      const matchesTag = !selectedTag || post.tags.includes(selectedTag);

      return matchesSearch && matchesTag;
    });
  }, [allPosts, searchQuery, selectedTag]);

  return (
    <div className='min-h-screen py-20'>
      <Container>
        <div className='mb-12'>
          <h1 className='text-4xl font-bold mb-4'>Blog</h1>
          <p className='text-muted-foreground text-lg'>
            Thoughts on web development, tech, and more
          </p>
        </div>

        {/* Search and Filter */}
        <div className='mb-8 space-y-4'>
          <div className='relative'>
            <Search className='absolute left-3 top-1/2 -translate-y-1/2 size-4 text-muted-foreground' />
            <input
              type='text'
              placeholder='Search articles...'
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className='w-full pl-10 pr-4 py-2 border rounded-md bg-background'
            />
          </div>

          <div className='flex flex-wrap gap-2'>
            <Button
              variant={selectedTag === null ? 'default' : 'outline'}
              size='sm'
              onClick={() => setSelectedTag(null)}
            >
              All
            </Button>
            {allTags.map((tag) => (
              <Button
                key={tag}
                variant={selectedTag === tag ? 'default' : 'outline'}
                size='sm'
                onClick={() => setSelectedTag(tag)}
              >
                {tag}
              </Button>
            ))}
          </div>
        </div>

        {/* Blog Posts Grid */}
        {filteredPosts.length === 0 ? (
          <Card>
            <CardContent className='py-12 text-center'>
              <p className='text-muted-foreground'>
                No posts found. Try adjusting your search or filters.
              </p>
            </CardContent>
          </Card>
        ) : (
          <div className='grid grid-cols-1 md:grid-cols-2 gap-6'>
            {filteredPosts.map((post) => (
              <Card key={post.slug} className='flex flex-col'>
                <CardHeader>
                  <div className='flex items-center gap-4 text-sm text-muted-foreground mb-2'>
                    <span className='flex items-center gap-1'>
                      <Calendar className='size-3' />
                      {format(new Date(post.date), 'MMM d, yyyy')}
                    </span>
                    <span className='flex items-center gap-1'>
                      <Clock className='size-3' />
                      {post.readingTime}
                    </span>
                  </div>
                  <CardTitle>
                    <Link
                      href={`/blog/${post.slug}`}
                      className='hover:text-primary transition-colors'
                    >
                      {post.title}
                    </Link>
                  </CardTitle>
                  <CardDescription>{post.description}</CardDescription>
                </CardHeader>
                <CardContent className='flex-1 flex flex-col justify-between'>
                  <div className='flex flex-wrap gap-2 mb-4'>
                    {post.tags.map((tag) => (
                      <Badge key={tag} variant='secondary'>
                        {tag}
                      </Badge>
                    ))}
                  </div>
                  <Button variant='ghost' size='sm' asChild className='w-fit'>
                    <Link href={`/blog/${post.slug}`}>
                      Read More
                      <ArrowRight className='size-4 ml-2' />
                    </Link>
                  </Button>
                </CardContent>
              </Card>
            ))}
          </div>
        )}
      </Container>
    </div>
  );
}
