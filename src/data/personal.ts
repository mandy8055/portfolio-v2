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
  name: "Manuj Sankrit",
  role: "Senior Software Engineer",
  tagline: "Senior Software Engineer at B/S/H",
  email: "msankrit8055@gmail.com",
  location: "India",
  social: [
    {
      name: "GitHub",
      url: "https://github.com/mandy8055",
      icon: "Github",
    },
    {
      name: "LinkedIn",
      url: "https://www.linkedin.com/in/manuj-sankrit-b82175117/",
      icon: "LinkedIn",
    },
    {
      name: "X",
      url: "https://x.com/mandy8055",
      icon: "X",
    },
    {
      name: "Stack Overflow",
      url: "https://stackoverflow.com/users/19090048",
      icon: "StackOverflow",
    },
    {
      name: "LeetCode",
      url: "https://leetcode.com/mandy8055",
      icon: "LeetCode",
    },
  ],
  resume: "/resume-manuj-sankrit.pdf",
};

// About Me Content
export const aboutMe = {
  bio: `Part student, part athlete, part programmer - I'm not just switching roles, I'm debugging life's challenges one commit at a time. Architecting and designing scalable solutions with React & Next.js, while orchestrating CI/CD pipelines and Docker systems. Open-source evangelist and a lifelong learner who codes by day and conquers challenges by night.`,

  highlights: [
    "Arctic Code Vault Contributor (GitHub Archive Program)",
    "GATE Qualified (Computer Science & Engineering)",
    "Cracked JEE Mains",
    "State-level Swimming Championship Medalist",
  ],

  certifications: [
    "AWS Certified Cloud Practitioner",
    "Non-Functional Requirements Web Specialist",
    "Oracle Certified Professional: Java SE Programmer",
    "HackerRank Certified",
  ],

  awards: [
    {
      title: "Core Values Award",
      organization: "Publicis Sapient",
      date: "October 2022",
    },
    {
      title: "Star of the Month",
      organization: "Publicis Sapient",
      date: "February 2023",
    },
    {
      title: "Q2 World Leading Award",
      organization: "Publicis Sapient",
      date: "January 2023",
    },
  ],

  hobbies: [
    "Running & Fitness",
    "Playing Guitar",
    "Swimming (State Championship Medalist)",
    "Technical Writing & Blogging",
  ],

  experience: [
    {
      title: "UI Lead",
      company: "Publicis Sapient",
      period: "June 2021 - Present",
      location: "India · Remote",
      description:
        "Leading UI development teams in building enterprise-grade applications. Architecting scalable React and Next.js solutions, establishing coding standards, and mentoring developers.",
      highlights: [
        "Led frontend architecture for multiple high-impact client projects",
        "Mentored team of 8+ developers on React best practices",
        "Reduced page load time by 60% through performance optimization",
        "Implemented CI/CD pipelines and automated testing workflows",
      ],
      technologies: [
        "React",
        "Next.js",
        "TypeScript",
        "Node.js",
        "AWS",
        "GraphQL",
      ],
    },
    {
      title: "Senior Software Engineer",
      company: "Publicis Sapient",
      period: "January 2019 - May 2021",
      location: "India",
      description:
        "Developed and maintained complex web applications for Fortune 500 clients. Focused on performance optimization, accessibility, and modern web standards.",
      highlights: [
        "Built reusable component libraries used across multiple projects",
        "Implemented server-side rendering with Next.js",
        "Achieved 95+ Lighthouse scores across all metrics",
        "Collaborated with UX designers to create pixel-perfect interfaces",
      ],
      technologies: ["React", "Redux", "JavaScript", "SASS", "Jest", "Webpack"],
    },
  ],

  education: [
    {
      degree: "B.Tech in Computer Science & Engineering",
      institution: "DIT University",
      achievement: "GATE Qualified",
    },
  ],
};

export const roles = [
  "Full Stack Developer",
  "React/Next.js Expert",
  "Cloud Architect",
  "Tech Enthusiast",
  "Open Source Evangelist",
];
