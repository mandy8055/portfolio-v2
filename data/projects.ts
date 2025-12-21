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
    title: 'E-Commerce Platform',
    description:
      'Built a scalable e-commerce platform using Next.js, TypeScript, and Stripe. Features include product catalog, cart management, checkout, and admin dashboard.',
    tags: ['Next.js', 'TypeScript', 'Stripe', 'Prisma', 'PostgreSQL'],
    featured: true,
    github: 'https://github.com/mandy8055',
    demo: 'https://example.com',
  },
  {
    title: 'Real-Time Chat Application',
    description:
      'Developed a real-time chat app with WebSocket integration, featuring group chats, file sharing, and message notifications.',
    tags: ['React', 'Node.js', 'Socket.io', 'MongoDB', 'Redis'],
    featured: true,
    github: 'https://github.com/mandy8055',
  },
  {
    title: 'Task Management Dashboard',
    description:
      'Created a comprehensive task management system with drag-and-drop functionality, team collaboration, and analytics.',
    tags: ['React', 'TypeScript', 'Tailwind', 'Firebase'],
    featured: true,
    github: 'https://github.com/mandy8055',
    demo: 'https://example.com',
  },
  {
    title: 'Portfolio CMS',
    description:
      'Built a headless CMS for portfolio websites with MDX support, media management, and SEO optimization.',
    tags: ['Next.js', 'Sanity.io', 'MDX', 'Vercel'],
    featured: false,
    github: 'https://github.com/mandy8055',
  },
  {
    title: 'Weather Forecast App',
    description:
      'Weather application with location-based forecasts, interactive maps, and weather alerts.',
    tags: ['React Native', 'OpenWeather API', 'Redux'],
    featured: false,
    github: 'https://github.com/mandy8055',
  },
  {
    title: 'Code Snippet Manager',
    description:
      'Developer tool for organizing and sharing code snippets with syntax highlighting and tagging.',
    tags: ['Vue.js', 'Node.js', 'Prism.js', 'MongoDB'],
    featured: false,
    github: 'https://github.com/mandy8055',
  },
];
