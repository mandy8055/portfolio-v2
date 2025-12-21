import fs from 'node:fs';
import path from 'node:path';
import matter from 'gray-matter';
import { format } from 'date-fns';
import readingTime from 'reading-time';

// Types
export interface BlogPost {
  slug: string;
  title: string;
  description: string;
  date: string;
  formattedDate: string;
  author: string;
  tags: string[];
  readingTime: string;
  content: string;
  published: boolean;
}

export interface BlogPostMetadata {
  slug: string;
  title: string;
  description: string;
  date: string;
  formattedDate: string;
  author: string;
  tags: string[];
  readingTime: string;
  published: boolean;
}

const BLOG_PATH = path.join(process.cwd(), 'content/blog');

/**
 * Get all MDX files from the blog directory
 */
export function getBlogFiles(): string[] {
  if (!fs.existsSync(BLOG_PATH)) {
    return [];
  }
  return fs.readdirSync(BLOG_PATH).filter((file) => file.endsWith('.mdx'));
}

/**
 * Get a single blog post by slug
 */
export function getBlogPost(slug: string): BlogPost | null {
  try {
    const filePath = path.join(BLOG_PATH, `${slug}.mdx`);
    const fileContents = fs.readFileSync(filePath, 'utf8');
    const { data, content } = matter(fileContents);

    // Calculate reading time
    const stats = readingTime(content);

    return {
      slug,
      title: data.title || 'Untitled',
      description: data.description || '',
      date: data.date || new Date().toISOString(),
      formattedDate: format(new Date(data.date || new Date()), 'MMMM dd, yyyy'),
      author: data.author || 'Manuj Sankrit',
      tags: data.tags || [],
      readingTime: stats.text,
      content,
      published: data.published ?? true,
    };
  } catch (error) {
    console.error(`Error reading blog post: ${slug}`, error);
    return null;
  }
}

/**
 * Get all blog posts with metadata only (no content)
 */
export function getAllBlogPosts(): BlogPostMetadata[] {
  const files = getBlogFiles();

  const posts = files
    .map((filename) => {
      const slug = filename.replace(/\.mdx$/, '');
      const post = getBlogPost(slug);
      if (!post) return null;

      // Remove content to reduce memory usage
      const { content, ...metadata } = post;
      return metadata;
    })
    .filter((post): post is BlogPostMetadata => post !== null)
    .filter((post) => post.published) // Only return published posts
    .sort((a, b) => new Date(b.date).getTime() - new Date(a.date).getTime()); // Sort by date (newest first)

  return posts;
}

/**
 * Get all unique tags from all blog posts
 */
export function getAllTags(): string[] {
  const posts = getAllBlogPosts();
  const tagsSet = new Set<string>();

  for (const post of posts) {
    for (const tag of post.tags) {
      tagsSet.add(tag);
    }
  }

  return Array.from(tagsSet).sort();
}

/**
 * Get blog posts filtered by tag
 */
export function getBlogPostsByTag(tag: string): BlogPostMetadata[] {
  const posts = getAllBlogPosts();
  return posts.filter((post) => post.tags.includes(tag));
}

/**
 * Search blog posts by query (searches in title, description, and tags)
 */
export function searchBlogPosts(query: string): BlogPostMetadata[] {
  const posts = getAllBlogPosts();
  const lowerQuery = query.toLowerCase();

  return posts.filter(
    (post) =>
      post.title.toLowerCase().includes(lowerQuery) ||
      post.description.toLowerCase().includes(lowerQuery) ||
      post.tags.some((tag) => tag.toLowerCase().includes(lowerQuery)),
  );
}

/**
 * Get related posts based on shared tags
 */
export function getRelatedPosts(
  currentSlug: string,
  limit = 3,
): BlogPostMetadata[] {
  const currentPost = getBlogPost(currentSlug);
  if (!currentPost) return [];

  const allPosts = getAllBlogPosts();

  // Calculate relevance score based on shared tags
  const scoredPosts = allPosts
    .filter((post) => post.slug !== currentSlug)
    .map((post) => {
      const sharedTags = post.tags.filter((tag) =>
        currentPost.tags.includes(tag),
      );
      return { post, score: sharedTags.length };
    })
    .filter(({ score }) => score > 0)
    .sort((a, b) => b.score - a.score);

  return scoredPosts.slice(0, limit).map(({ post }) => post);
}
