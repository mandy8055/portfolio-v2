export interface SocialLink {
  name: string;
  url: string;
  icon: string; // Lucide icon name
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
  role: "UI Lead",
  tagline: "UI Lead at Publicis Sapient | React & Next.js Expert",
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
      url: "https://www.linkedin.com/in/manuj-sankrit-b82175117",
      icon: "Linkedin",
    },
    {
      name: "Stack Overflow",
      url: "https://stackoverflow.com/users/19090048",
      icon: "StackOverflow",
    },
    {
      name: "LeetCode",
      url: "https://leetcode.com/mandy8055",
      icon: "Code2",
    },
  ],
  resume: "/resume-manuj-sankrit.pdf",
};

// About Me Content
export const aboutMe = {
  bio: `Seasoned UI Lead at Publicis Sapient with expertise in building scalable, performant web applications. 
  Passionate about React, Next.js, and modern web technologies. Arctic Code Vault Contributor and GATE qualified 
  with multiple certifications in AWS, Oracle Java, and Web Performance.`,
  
  highlights: [
    "Arctic Code Vault Contributor (GitHub Archive Program)",
    "GATE Qualified (Computer Science & Engineering)",
    "Gold Medalist in B.Tech",
    "JEE Cleared",
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
      period: "Present",
      description: "Leading UI development teams, architecting scalable React applications, and mentoring developers.",
    },
  ],

  education: [
    {
      degree: "B.Tech in Computer Science & Engineering",
      institution: "Gold Medalist",
      achievement: "GATE Qualified, JEE Cleared",
    },
  ],
};
