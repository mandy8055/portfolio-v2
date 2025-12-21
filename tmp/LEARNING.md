# Portfolio Rebuild Learning Notes

## Project Setup

### Step 1: Package Manager Setup ✅

- **Date**: December 21, 2025
- **What**: Enforced pnpm as the package manager
- **How**:
  - Added `"packageManager": "pnpm@9.0.0"` field
  - Added `"preinstall": "npx only-allow pnpm"` script
- **Why**: Prevents accidental use of npm/yarn, ensures consistent dependencies
- **Learning**: The `only-allow` package blocks other package managers during install

---

## Tech Stack

### Core Technologies

- **Next.js 15**: Latest version with App Router
- **React 19**: Latest React features
- **TypeScript**: Type safety throughout
- **Tailwind CSS 4**: Latest utility-first CSS framework
- **Biome**: Fast linter/formatter (alternative to ESLint + Prettier)
- **pnpm**: Fast, disk-efficient package manager

### Key Dependencies

- **@next/mdx**: MDX support for blog posts
- **framer-motion**: Smooth animations
- **next-themes**: Dark mode support
- **gray-matter**: Parse MDX frontmatter
- **reading-time**: Calculate reading time for blog posts
- **date-fns**: Date formatting utilities
- **lucide-react**: Icon library

---

## Architecture Decisions

### Folder Structure

```
portfolio-manuj/
├── app/              # Next.js App Router pages
├── components/       # Reusable React components
│   ├── sections/    # Page sections (Hero, About, etc.)
│   └── ui/          # Base UI components (Button, Card, etc.)
├── content/         # MDX blog posts
│   └── blog/
├── data/            # TypeScript config files (personal, skills)
├── lib/             # Utility functions (blog helpers)
├── public/          # Static assets (images, resume)
├── types/           # TypeScript type definitions
└── tmp/             # Learning notes (gitignored)
```

### Why This Structure?

- **Separation of concerns**: Content separate from code
- **Reusability**: UI components can be shared across sections
- **Type safety**: Data files are TypeScript for IntelliSense
- **Scalability**: Easy to add new sections or blog posts

---

## Migration Plan

### From Jekyll to Next.js

1. ✅ Package manager enforcement
2. 🔄 Folder structure + learning docs
3. Personal data migration (`_config.yml` → `data/personal.ts`)
4. Skills data migration (`_data/*.yml` → `data/skills.ts`)
5. MDX blog setup (`lib/blog.ts` + blog utilities)
6. Core UI components (Button, Card, Container, Section)
7. Page sections (Hero, About, TechStack, Projects, Blog, Experience, Contact)
8. Dark mode + animations (next-themes + Framer Motion)

---

## Resources

### Documentation

- [Next.js 15 Docs](https://nextjs.org/docs)
- [Tailwind CSS 4 Docs](https://tailwindcss.com/docs)
- [MDX Docs](https://mdxjs.com/)
- [Framer Motion Docs](https://www.framer.com/motion/)
- [Biome Docs](https://biomejs.dev/)

### Key Concepts to Learn

- **App Router**: New routing paradigm in Next.js 13+
- **Server Components**: Default in App Router, faster performance
- **MDX**: Markdown + JSX for blog posts
- **TypeScript Generics**: For type-safe data structures
- **Tailwind Dark Mode**: Using `next-themes` with Tailwind

---

## Next Steps

- [ ] Add more learning notes as we progress
- [ ] Document any issues/solutions encountered
- [ ] Add code snippets for reference
