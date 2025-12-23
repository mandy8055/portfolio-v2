export interface SkillCategory {
  name: string;
  skills: Skill[];
}

export interface Skill {
  name: string;
  level: 'Beginner' | 'Intermediate' | 'Advanced' | 'Expert';
  logo: string;
  logoLight?: string; // Optional light theme variant
}

// All skills in a flat array for the showcase
export const allSkills: Skill[] = [
  // Frontend & Languages
  {
    name: 'JavaScript',
    level: 'Advanced',
    logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/javascript/javascript-original.svg',
  },
  {
    name: 'TypeScript',
    level: 'Advanced',
    logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/typescript/typescript-original.svg',
  },
  {
    name: 'React',
    level: 'Advanced',
    logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/react/react-original.svg',
  },
  {
    name: 'Next.js',
    level: 'Advanced',
    logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/nextjs/nextjs-original.svg',
  },
  {
    name: 'HTML5',
    level: 'Advanced',
    logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/html5/html5-original.svg',
  },
  {
    name: 'CSS3',
    level: 'Advanced',
    logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/css3/css3-original.svg',
  },
  {
    name: 'Tailwind CSS',
    level: 'Advanced',
    logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/tailwindcss/tailwindcss-original.svg',
  },
  {
    name: 'Redux',
    level: 'Advanced',
    logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/redux/redux-original.svg',
  },

  // Backend & Languages
  {
    name: 'Node.js',
    level: 'Intermediate',
    logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/nodejs/nodejs-original.svg',
  },
  {
    name: 'Java',
    level: 'Intermediate',
    logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/java/java-original.svg',
  },
  {
    name: 'Python',
    level: 'Intermediate',
    logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/python/python-original.svg',
  },

  // Databases
  // {
  //   name: 'MongoDB',
  //   level: 'Beginner',
  //   logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/mongodb/mongodb-original.svg',
  // },
  {
    name: 'PostgreSQL',
    level: 'Beginner',
    logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/postgresql/postgresql-original.svg',
  },
  {
    name: 'MySQL',
    level: 'Intermediate',
    logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/mysql/mysql-original.svg',
  },

  // Cloud & DevOps
  {
    name: 'AWS',
    level: 'Intermediate',
    logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/amazonwebservices/amazonwebservices-original-wordmark.svg',
  },
  {
    name: 'Azure',
    level: 'Intermediate',
    logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/azure/azure-original.svg',
  },
  {
    name: 'Docker',
    level: 'Intermediate',
    logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/docker/docker-original.svg',
  },
  {
    name: 'Git',
    level: 'Advanced',
    logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/git/git-original.svg',
  },
  {
    name: 'GitHub Actions',
    level: 'Advanced',
    logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/githubactions/githubactions-original.svg',
  },

  // Testing & Tools
  {
    name: 'Vitest',
    level: 'Advanced',
    logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/vitest/vitest-original.svg',
  },
  {
    name: 'Playwright',
    level: 'Beginner',
    logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/playwright/playwright-original.svg',
  },

  // Build Tools & Others
  {
    name: 'Webpack',
    level: 'Advanced',
    logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/webpack/webpack-original.svg',
  },
  {
    name: 'Vite',
    level: 'Advanced',
    logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/vitejs/vitejs-original.svg',
  },
  {
    name: 'npm',
    level: 'Expert',
    logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/npm/npm-original-wordmark.svg',
  },
  {
    name: 'pnpm',
    level: 'Expert',
    logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/pnpm/pnpm-original.svg',
  },
  {
    name: 'yarn',
    level: 'Expert',
    logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/yarn/yarn-original.svg',
  },
  {
    name: 'VS Code',
    level: 'Expert',
    logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/vscode/vscode-original.svg',
  },
  {
    name: 'IntelliJ',
    level: 'Beginner',
    logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/intellij/intellij-original.svg',
  },
  {
    name: 'Pycharm',
    level: 'Expert',
    logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/pycharm/pycharm-original.svg',
  },
  {
    name: 'Figma',
    level: 'Intermediate',
    logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/figma/figma-original.svg',
  },
  {
    name: 'Storybook',
    level: 'Advanced',
    logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/storybook/storybook-original.svg',
  },
  {
    name: 'Linux',
    level: 'Advanced',
    logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/linux/linux-original.svg',
  },
  {
    name: 'GraphQL',
    level: 'Intermediate',
    logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/graphql/graphql-plain.svg',
  },
  {
    name: 'Datadog',
    level: 'Intermediate',
    logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/datadog/datadog-original.svg',
  },
  // {
  //   name: 'Sass',
  //   level: 'Intermediate',
  //   logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/sass/sass-original.svg',
  // },
];

// Categorized skills for backward compatibility
export const skillCategories: SkillCategory[] = [
  {
    name: 'Frontend Development',
    skills: allSkills.filter((s) =>
      [
        'JavaScript',
        'TypeScript',
        'React',
        'Next.js',
        'HTML5',
        'CSS3',
        'Tailwind CSS',
        'Redux',
        'React Native',
        'Sass',
      ].includes(s.name),
    ),
  },
  {
    name: 'Backend Development',
    skills: allSkills.filter((s) =>
      ['Node.js', 'Express', 'Java', 'GraphQL'].includes(s.name),
    ),
  },
  {
    name: 'Databases',
    skills: allSkills.filter((s) =>
      ['MongoDB', 'PostgreSQL', 'MySQL'].includes(s.name),
    ),
  },
  {
    name: 'Cloud & DevOps',
    skills: allSkills.filter((s) =>
      ['AWS', 'Azure', 'Docker', 'Git', 'GitHub', 'GitHub Actions'].includes(
        s.name,
      ),
    ),
  },
  {
    name: 'Testing & Quality',
    skills: allSkills.filter((s) =>
      ['Jest', 'Vitest', 'Cypress'].includes(s.name),
    ),
  },
  {
    name: 'Tools & Build',
    skills: allSkills.filter((s) =>
      ['Webpack', 'Vite', 'npm', 'pnpm', 'VS Code', 'Figma', 'Linux'].includes(
        s.name,
      ),
    ),
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
