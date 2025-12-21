import fs from 'node:fs';
import path from 'node:path';
import matter from 'gray-matter';
import { format } from 'date-fns';
import readingTime from 'reading-time';
import { compileMDX } from 'next-mdx-remote/rsc';
import rehypeHighlight from 'rehype-highlight';
import remarkGfm from 'remark-gfm';

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
  content: React.ReactElement;
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
export async function getBlogPost(slug: string): Promise<BlogPost | null> {
  try {
    const filePath = path.join(BLOG_PATH, `${slug}.mdx`);
    const fileContents = fs.readFileSync(filePath, 'utf8');

    // Calculate reading time from raw content
    const stats = readingTime(fileContents);

    // Compile MDX
    const { content, frontmatter } = await compileMDX<{
      title: string;
      description: string;
      date: string;
      author?: string;
      tags?: string[];
      published?: boolean;
    }>({
      source: fileContents,
      options: {
        parseFrontmatter: true,
        mdxOptions: {
          remarkPlugins: [remarkGfm],
          rehypePlugins: [rehypeHighlight],
        },
      },
    });

    return {
      slug,
      title: frontmatter.title || 'Untitled',
      description: frontmatter.description || '',
      date: frontmatter.date || new Date().toISOString(),
      formattedDate: format(
        new Date(frontmatter.date || new Date()),
        'MMMM dd, yyyy',
      ),
      author: frontmatter.author || 'Manuj Sankrit',
      tags: frontmatter.tags || [],
      readingTime: stats.text,
      content,
      published: frontmatter.published ?? true,
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

      // Read file and parse frontmatter only (no MDX compilation)
      try {
        const filePath = path.join(BLOG_PATH, `${slug}.mdx`);
        const fileContents = fs.readFileSync(filePath, 'utf8');
        const { data } = matter(fileContents);
        const stats = readingTime(fileContents);

        return {
          slug,
          title: data.title || 'Untitled',
          description: data.description || '',
          date: data.date || new Date().toISOString(),
          formattedDate: format(
            new Date(data.date || new Date()),
            'MMMM dd, yyyy',
          ),
          author: data.author || 'Manuj Sankrit',
          tags: data.tags || [],
          readingTime: stats.text,
          published: data.published ?? true,
        };
      } catch (error) {
        console.error(`Error reading blog post metadata: ${slug}`, error);
        return null;
      }
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
export async function getRelatedPosts(
  currentSlug: string,
  limit = 3,
): Promise<BlogPostMetadata[]> {
  const currentPost = await getBlogPost(currentSlug);
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
