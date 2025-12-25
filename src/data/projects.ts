export interface Project {
  title: string;
  description: string;
  tags: string[];
  image?: string;
  github?: string;
  demo?: string;
  featured: boolean;
}

export const projects: Project[] = [
  {
    title: 'Data Structures Library',
    description:
      'A comprehensive collection of type-safe, zero-dependency data structure implementations for TypeScript/JavaScript. Published on both JSR and npm with >85% test coverage.',
    tags: ['TypeScript', 'Data Structures', 'JSR', 'npm', 'Deno'],
    featured: true,
    github: 'https://github.com/mandy8055/data-structures',
    demo: 'https://data-structures-docs.vercel.app',
  },
  {
    title: 'Smart Filters POC',
    description:
      'AI-powered natural language product filtering for e-commerce. Transform queries like "small family under $800" into precise product filters using HuggingFace AI.',
    tags: ['Next.js', 'TypeScript', 'HuggingFace', 'AI', 'Tailwind CSS'],
    featured: true,
    github: 'https://github.com/mandy8055/smart-filters-poc',
    demo: 'https://smart-filters-poc.vercel.app',
  },
  {
    title: 'AI Product Recommendation Engine',
    description:
      'AI-powered product recommendation engine using sentence-transformers and PyTorch. Generates embeddings from product features and calculates similarity scores.',
    tags: ['Python', 'AI/ML', 'PyTorch', 'GraphQL', 'TypeScript'],
    featured: true,
    github: 'https://github.com/mandy8055/ai-poc',
  },
  {
    title: 'Portfolio Website v2',
    description:
      'Modern portfolio website built with Next.js 16, featuring MDX blog support, animated components, and responsive design. Built with latest React 19 and TypeScript.',
    tags: ['Next.js', 'React', 'TypeScript', 'Tailwind CSS', 'MDX'],
    featured: true,
    github: 'https://github.com/mandy8055/portfolio-v2',
  },
  {
    title: 'Web Hands-On Projects',
    description:
      'Collection of 14+ vanilla JavaScript projects including quote generator, infinite scroll, music player, calculator, and more. Built with modern HTML5, CSS3, and vanilla JavaScript.',
    tags: ['JavaScript', 'HTML5', 'CSS3', 'Web APIs', 'DOM Manipulation'],
    featured: false,
    github: 'https://github.com/mandy8055/web_handsOn',
    demo: 'https://mandy8055.github.io/web_handsOn',
  },
  {
    title: 'Low Level Design Apps',
    description:
      'Monorepo of React applications implementing common low-level design patterns and problems. Built with TypeScript, Vite, and Tailwind CSS using Turborepo for efficient builds.',
    tags: ['React', 'TypeScript', 'Vite', 'Tailwind CSS', 'Turborepo'],
    featured: false,
    github: 'https://github.com/mandy8055/lld-apps',
    demo: 'https://lld-apps.vercel.app',
  },
];
