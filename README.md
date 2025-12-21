# Manuj Sankrit - Portfolio Website

> Modern, animated portfolio built with Next.js 16, React 19, TypeScript, and Tailwind CSS 4

A sleek, performant portfolio website featuring particle effects, smooth animations, and a clean design inspired by modern web development trends.

## ✨ Features

### 🎨 Design & UI

- **Particle.js Background** - Interactive particles with teal/cyan/emerald color scheme
- **Smooth Animations** - Motion-powered animations throughout
- **Dark/Light Mode** - Theme toggle with system preference support
- **Responsive Design** - Mobile-first approach, works on all devices
- **Modern Navigation** - Sticky navbar with animated underlines
- **Vertical Social Sidebar** - Fixed social media links using Simple Icons

### 📄 Pages & Sections

- **Enhanced Hero** - Typewriter effect, gradient text, particle background
- **About Page** - Skills, certifications, awards, education
- **Experience Page** - Timeline layout with work history
- **Projects Page** - Filterable project showcase with all projects
- **Contact Section** - Contact form with smooth scroll navigation
- **Blog (Ready)** - MDX-based blog system (commented out, ready for 2026)

### 🚀 Technical Highlights

- **Next.js 16** with App Router and React 19
- **TypeScript 5** with strict mode
- **Tailwind CSS 4** with new syntax
- **MDX Support** for blog posts
- **Reading Time Calculation** for blog posts
- **Scroll Animations** with ScrollReveal component
- **Smooth Scrolling** throughout the site
- **SEO Optimized** with proper metadata

### 🎯 Interactive Elements

- **Scroll to Top Button** - Appears after scrolling 400px
- **Hover Effects** - Scale, shadow, and color transitions
- **Interactive Particles** - Hover and click interactions
- **Animated Gradients** - Dynamic text gradients

## 🛠️ Tech Stack

- **Framework:** Next.js 16.1.0 (Turbopack)
- **UI Library:** React 19.2.3
- **Language:** TypeScript 5
- **Styling:** Tailwind CSS 4
- **Animations:** Motion 12.23.26 (formerly framer-motion)
- **Theme:** next-themes 0.4.6
- **Particles:** tsparticles 3.9.1
- **Icons:** Lucide React + Simple Icons
- **Components:** shadcn/ui (Button, Card, Badge)
- **MDX:** @next/mdx 16.1.0
- **Utilities:** gray-matter, reading-time, date-fns
- **Code Quality:** Biome 2.2.0
- **Package Manager:** pnpm 10.7.0 (enforced)

## 📦 Installation

### Prerequisites

- Node.js 18+
- pnpm 10.7.0 or higher

### Setup

```bash
# Clone the repository
git clone <your-repo-url>
cd portfolio-manuj

# Install dependencies (will enforce pnpm)
pnpm install

# Run development server
pnpm dev
```

Open [http://localhost:3000](http://localhost:3000) to see your portfolio.

## 📝 Content Configuration

### Personal Information

Edit `data/personal.ts` to update:

- Name, role, tagline
- Email and location
- Social media links
- Resume link
- About me content
- Experience history
- Certifications and awards
- Education details

### Projects

Edit `data/projects.ts` to add/modify:

- Project title and description
- Technologies used
- GitHub and demo links
- Featured flag

### Blog (For 2026)

Blog is fully set up but commented out. See `tmp/BLOG_SETUP_GUIDE.md` for activation instructions.

When ready:

1. Uncomment blog link in `components/navbar.tsx`
2. Uncomment blog link in `components/Footer.tsx`
3. Create MDX files in `content/blog/`

## 🎨 Color Theme

Current color scheme: **Teal/Cyan/Emerald**

- Primary: Teal-500 (#14B8A6)
- Accent: Cyan-500 (#06B6D4)
- Secondary: Emerald-500 (#10B981)

To change: Update colors in:

- `components/backgrounds/ParticlesBackground.tsx`
- `components/animations/GradientText.tsx`
- Hover effects throughout components

## 🚀 Scripts

```bash
# Development
pnpm dev          # Start dev server with Turbopack

# Production
pnpm build        # Build for production
pnpm start        # Start production server

# Code Quality
pnpm lint         # Run Biome linter
pnpm format       # Format code with Biome
```

## 📁 Project Structure

```
portfolio-manuj/
├── app/                      # Next.js App Router pages
│   ├── about/               # About page
│   ├── blog/                # Blog pages (MDX)
│   │   └── [slug]/         # Dynamic blog post routes
│   ├── experience/          # Experience timeline page
│   ├── projects/            # All projects page
│   ├── layout.tsx           # Root layout
│   ├── page.tsx             # Homepage
│   └── globals.css          # Global styles
├── components/              # React components
│   ├── animations/          # Animation components
│   │   ├── GradientText.tsx
│   │   ├── ScrollReveal.tsx
│   │   └── Typewriter.tsx
│   ├── backgrounds/         # Background effects
│   │   ├── ParticlesBackground.tsx
│   │   └── ShootingStars.tsx
│   ├── sections/            # Page sections
│   │   ├── AboutSection.tsx
│   │   ├── ContactSection.tsx
│   │   ├── EnhancedHero.tsx
│   │   └── ProjectsSection.tsx
│   ├── ui/                  # shadcn/ui components
│   ├── Footer.tsx
│   ├── navbar.tsx
│   └── SocialSidebar.tsx
├── content/blog/            # MDX blog posts
├── data/                    # Data files
│   ├── personal.ts          # Personal information
│   └── projects.ts          # Projects data
├── lib/                     # Utility functions
│   └── blog.ts              # Blog utilities
├── public/                  # Static assets
├── tmp/                     # Temporary/guide files
│   └── BLOG_SETUP_GUIDE.md # Blog activation guide
├── types/                   # TypeScript types
├── biome.json              # Biome configuration
├── next.config.ts          # Next.js configuration
├── tailwind.config.ts      # Tailwind configuration
└── tsconfig.json           # TypeScript configuration
```

## 🎯 Key Components

### ParticlesBackground

Interactive particle effect with:

- 30 particles (optimized for performance)
- Upward floating motion
- Teal/cyan/emerald colors
- Interactive on hover/click

### EnhancedHero

Main landing section with:

- Typewriter effect for roles
- Animated gradient name
- Particle background
- CTA buttons with smooth scrolling

### SocialSidebar

Fixed vertical sidebar with:

- Social media icons (Simple Icons)
- Centered positioning
- Teal hover effects
- Animated line decoration

### Footer

Comprehensive footer with:

- 3-column layout (Brand, Quick Links, Connect)
- Social media links
- Scroll-to-top button
- Copyright and credits

## 🌐 Deployment

### Vercel (Recommended)

[![Deploy with Vercel](https://vercel.com/button)](https://vercel.com/new)

1. Push code to GitHub
2. Import project in Vercel
3. Deploy automatically

### Environment Variables

No environment variables required for basic functionality.

For future email integration:

```env
SENDGRID_API_KEY=your_key_here
```

## 📱 Browser Support

- Chrome (latest)
- Firefox (latest)
- Safari (latest)
- Edge (latest)

## 🤝 Contributing

This is a personal portfolio, but feel free to:

- Report bugs
- Suggest features
- Use as inspiration for your own portfolio

## 📄 License

MIT License - Feel free to use this as a template for your own portfolio!

## 🙏 Acknowledgments

- Icons by [Lucide](https://lucide.dev) and [Simple Icons](https://simpleicons.org)
- Built with [shadcn/ui](https://ui.shadcn.com)

## 📧 Contact

- **Email:** msankrit8055@gmail.com
- **GitHub:** [@mandy8055](https://github.com/mandy8055)
- **LinkedIn:** [Manuj Sankrit](https://www.linkedin.com/in/manuj-sankrit-b82175117)

---

**Built with 💜 using Next.js and Tailwind CSS**
