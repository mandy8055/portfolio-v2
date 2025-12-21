export interface SkillCategory {
  name: string;
  skills: Skill[];
}

export interface Skill {
  name: string;
  level: 'Beginner' | 'Intermediate' | 'Advanced' | 'Expert';
  icon?: string; // Lucide icon name or custom icon path
  color?: string; // Tailwind color class
}

export const skillCategories: SkillCategory[] = [
  {
    name: 'Frontend Development',
    skills: [
      { name: 'JavaScript', level: 'Expert', icon: 'Code2', color: 'yellow' },
      { name: 'TypeScript', level: 'Expert', icon: 'FileCode2', color: 'blue' },
      { name: 'React', level: 'Expert', icon: 'Atom', color: 'cyan' },
      { name: 'Next.js', level: 'Expert', icon: 'Triangle', color: 'black' },
      {
        name: 'React Native',
        level: 'Advanced',
        icon: 'Smartphone',
        color: 'cyan',
      },
      { name: 'Redux', level: 'Advanced', icon: 'Layers', color: 'purple' },
      { name: 'HTML/CSS', level: 'Expert', icon: 'Code', color: 'orange' },
      { name: 'Tailwind CSS', level: 'Expert', icon: 'Wind', color: 'cyan' },
      {
        name: 'Framer Motion',
        level: 'Advanced',
        icon: 'Sparkles',
        color: 'pink',
      },
    ],
  },
  {
    name: 'Backend Development',
    skills: [
      { name: 'Node.js', level: 'Advanced', icon: 'Server', color: 'green' },
      { name: 'Express', level: 'Advanced', icon: 'Zap', color: 'gray' },
      { name: 'Java', level: 'Advanced', icon: 'Coffee', color: 'red' },
    ],
  },
  {
    name: 'Cloud & DevOps',
    skills: [
      { name: 'AWS', level: 'Intermediate', icon: 'Cloud', color: 'orange' },
      { name: 'Azure', level: 'Intermediate', icon: 'CloudCog', color: 'blue' },
      {
        name: 'Docker',
        level: 'Intermediate',
        icon: 'Container',
        color: 'blue',
      },
      { name: 'Git', level: 'Advanced', icon: 'GitBranch', color: 'orange' },
      {
        name: 'GitHub Actions',
        level: 'Intermediate',
        icon: 'GitCommit',
        color: 'gray',
      },
    ],
  },
  {
    name: 'Testing & Quality',
    skills: [
      { name: 'Jest', level: 'Advanced', icon: 'TestTube', color: 'red' },
      { name: 'Cypress', level: 'Advanced', icon: 'Bug', color: 'green' },
      {
        name: 'React Testing Library',
        level: 'Advanced',
        icon: 'FlaskConical',
        color: 'red',
      },
      {
        name: 'Web Performance',
        level: 'Expert',
        icon: 'Gauge',
        color: 'green',
      },
    ],
  },
  {
    name: 'Programming Languages',
    skills: [
      { name: 'C', level: 'Intermediate', icon: 'Code2', color: 'blue' },
      { name: 'Java', level: 'Advanced', icon: 'Coffee', color: 'red' },
      { name: 'JavaScript', level: 'Expert', icon: 'Braces', color: 'yellow' },
      { name: 'TypeScript', level: 'Expert', icon: 'FileCode2', color: 'blue' },
    ],
  },
  {
    name: 'Tools & Others',
    skills: [
      { name: 'Linux', level: 'Advanced', icon: 'Terminal', color: 'gray' },
      { name: 'VS Code', level: 'Expert', icon: 'Code', color: 'blue' },
      { name: 'Figma', level: 'Intermediate', icon: 'Figma', color: 'purple' },
      { name: 'Biome', level: 'Advanced', icon: 'Sparkles', color: 'yellow' },
    ],
  },
];

// Tech Stack for the portfolio itself (meta section)
export const portfolioStack = {
  title: 'Built With',
  technologies: [
    { name: 'Next.js 15', url: 'https://nextjs.org/' },
    { name: 'React 19', url: 'https://react.dev/' },
    { name: 'TypeScript', url: 'https://www.typescriptlang.org/' },
    { name: 'Tailwind CSS 4', url: 'https://tailwindcss.com/' },
    { name: 'MDX', url: 'https://mdxjs.com/' },
    { name: 'Framer Motion', url: 'https://www.framer.com/motion/' },
    { name: 'Biome', url: 'https://biomejs.dev/' },
    { name: 'pnpm', url: 'https://pnpm.io/' },
    { name: 'Vercel', url: 'https://vercel.com/' },
  ],
};
