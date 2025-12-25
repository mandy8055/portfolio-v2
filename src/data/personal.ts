export interface SocialLink {
  name: string;
  url: string;
  icon: string;
}

export interface PersonalInfo {
  name: string;
  role: string;
  tagline: string;
  email: string;
  location: string;
  social: SocialLink[];
  resume: string;
}

export const personalInfo: PersonalInfo = {
  name: 'Manuj Sankrit',
  role: 'Senior Software Engineer',
  tagline: 'Senior Software Engineer at B/S/H',
  email: 'manuj.sankrit1996@gmail.com',
  location: 'India',
  social: [
    {
      name: 'GitHub',
      url: 'https://github.com/mandy8055',
      icon: 'Github',
    },
    {
      name: 'LinkedIn',
      url: 'https://www.linkedin.com/in/manuj-sankrit-b82175117/',
      icon: 'LinkedIn',
    },
    {
      name: 'X',
      url: 'https://x.com/mandy8055',
      icon: 'X',
    },
    {
      name: 'Stack Overflow',
      url: 'https://stackoverflow.com/users/19090048',
      icon: 'StackOverflow',
    },
    {
      name: 'LeetCode',
      url: 'https://leetcode.com/mandy8055',
      icon: 'LeetCode',
    },
  ],
  resume: '/resume-manuj-sankrit.pdf',
};

// About Me Content
export const aboutMe = {
  bio: `Part student, part athlete, part programmer - I'm not just switching roles, I'm debugging life's challenges one commit at a time. Architecting and designing scalable solutions with React & Next.js, while orchestrating CI/CD pipelines and Docker systems. Open-source evangelist and a lifelong learner who codes by day and conquers challenges by night.`,

  highlights: [
    'Arctic Code Vault Contributor (GitHub Archive Program)',
    '2x GATE Exam Qualifier (2020, 2021)',
    'Active Stack Overflow Contributor (6.8k+ rep)',
    'State-level Swimming Championship Medalist',
    'Cracked JEE Mains',
  ],

  certifications: [
    'AWS Certified Cloud Practitioner (08/2023 - 08/2026)',
    'NFR Web Specialist L1 (05/2023 - Present)',
    'Oracle Certified Java Professional (07/2016 - Present)',
    'Hackerrank Problem Solving (09/2020 - Present)',
  ],

  awards: [
    {
      title: 'Core Values Award',
      organization: 'Publicis Sapient',
      date: '2022',
    },
    {
      title: 'Star of the Month',
      organization: 'Publicis Sapient',
      date: '2023',
    },
    {
      title: 'Q2 World Leading Award',
      organization: 'Suncorp Group Ltd.',
      date: '2023',
    },
  ],

  hobbies: [
    'Running & Fitness',
    'Playing Guitar',
    'Swimming (State Championship Medalist)',
    'Technical Writing & Blogging',
  ],

  experience: [
    {
      title: 'Senior Software Engineer',
      company: 'B/S/H',
      period: 'May 2025 - Present',
      location: 'India',
      description:
        'Building scalable full-stack applications with React, Next.js, and Node.js. Optimizing CI/CD pipelines, and monitoring performance through DataDog and SpeedCurve.',
      highlights: [
        'Reduced TBT by 20% and page load by 25% through lazy hydration and async updates',
        'Delivered spin-speed optimization features, enhancing user engagement',
        'Monitored app performance using DataDog and SpeedCurve, enabling proactive optimizations',
        'Enhanced screen reader compatibility and performed a11y audits, raising scores by 25%',
        'Streamlined CI/CD pipelines, cutting deployment times by more than 50%',
      ],
      technologies: [
        'React',
        'Next.js',
        'TypeScript',
        'Node.js',
        'DataDog',
        'SpeedCurve',
        'Docker',
        'Storybook',
        'GraphQL',
        'Vitest',
        'GitHub Actions',
      ],
    },
    {
      title: 'Experience Engineer',
      company: 'Publicis Sapient',
      period: 'Nov 2021 - Sept 2024',
      location: 'India · Remote',
      description:
        'Led UI architecture design and Next.js migrations for critical client applications. Architected cloud-based solutions on AWS and Azure, established CI/CD pipelines.',
      highlights: [
        'Led UI architecture design for application revamp using React.js and TypeScript best practices',
        'Spearheaded Next.js migration for 3 critical client applications, reducing Time to First Contentful Paint by 62%',
        'Improved SEO rankings by 28% across all pages through Next.js migration',
        'Established semantic release in CI/CD pipeline using GitHub Actions and Jenkins, reducing deployment time by 40%',
        'Optimized React application performance through code-splitting and lazy loading, improving load times by 18%',
        'Participated in Agile ceremonies and mentored junior developers',
      ],
      technologies: [
        'React',
        'TypeScript',
        'Redux',
        'GraphQL',
        'Node.js',
        'Jenkins',
        'AWS',
        'Azure',
        'GitHub Actions',
      ],
    },
    {
      title: 'Project Engineer',
      company: 'Wipro',
      period: 'Nov 2017 - April 2019',
      location: 'India',
      description:
        'Supported migration of client application from Mainframes to MERN stack. Improved database performance through optimization techniques.',
      highlights: [
        'Supported migration of client application from Mainframes to MERN stack',
        'Converted 85% of legacy functionality while reducing operational costs by $120K annually',
        'Improved database performance through normalization and indexing, reducing query response time by 50%',
      ],
      technologies: [
        'MongoDB',
        'Express.js',
        'React',
        'Node.js',
        'MySQL',
        'JavaScript',
        'Java',
      ],
    },
  ],

  funFacts: [
    '🌌 My code is literally frozen in the Arctic (Arctic Code Vault Contributor)',
    '🏊 I debug pool lanes before debugging code (State Championship Medalist)',
    '💬 6.8k+ Stack Overflow rep - Professional answer-giver',
    '🎸 I play guitar badly, but enthusiastically',
    "🏃‍♂️ Run like I'm being chased by production bugs",
    '📚 Read self-help books while procrastinating on actual help',
  ],

  dayJob: 'Architecting scalable web applications',
  nightShift: 'Conquering LeetCode problems like they owe me money',
  weekendVibe:
    'A mix of running, guitar riffs, and pretending my side projects will be done "soon"',

  devWisdom:
    "Debugging is like being a detective in a crime movie where you're also the murderer.",

  education: [
    {
      degree: 'B.Tech in Computer Science & Engineering',
      institution: 'DIT University',
      achievement: 'GATE Qualified',
    },
  ],
};

export const roles = [
  'Full Stack Developer',
  'React/Next.js Expert',
  'Cloud Architect',
  'Tech Enthusiast',
  'Open Source Evangelist',
];
