# Git Commit Guidelines

## Commit Message Format

```
<type>(<scope>): <subject>

<body>

<footer>
```

### Types

- **feat**: New feature
- **fix**: Bug fix
- **docs**: Documentation only
- **style**: Code style (formatting, no logic change)
- **refactor**: Code refactoring
- **test**: Adding tests
- **chore**: Maintenance tasks

### Examples

```bash
feat(setup): enforce pnpm package manager

Added packageManager field and preinstall script to ensure
only pnpm is used for dependency management.

feat(docs): create tmp folder with learning notes

Added tmp/ to .gitignore and created LEARNING.md to document
the migration process from Jekyll to Next.js.

feat(data): migrate personal info from Jekyll config

Created data/personal.ts with name, role, email, and social
links from Jekyll _config.yml.
```

---

## Checkpoints (Steps to Commit)

### ✅ Step 1: Package Manager Setup

```bash
git add package.json
git commit -m "feat(setup): enforce pnpm package manager"
```

### ✅ Step 2: Learning Folder

```bash
git add .gitignore tmp/
git commit -m "feat(docs): create tmp folder with learning notes"
```

### ⏳ Step 3: Personal Data Migration

```bash
git add data/personal.ts
git commit -m "feat(data): migrate personal info from Jekyll config"
```

### ⏳ Step 4: Skills Data Migration

```bash
git add data/skills.ts
git commit -m "feat(data): migrate skills data to TypeScript"
```

### ⏳ Step 5: MDX Blog Infrastructure

```bash
git add lib/blog.ts content/blog/ mdx-components.tsx
git commit -m "feat(blog): setup MDX blog infrastructure"
```

### ⏳ Step 6: Core UI Components

```bash
git add components/ui/
git commit -m "feat(components): create core UI components"
```

### ⏳ Step 7: Page Sections

```bash
git add components/sections/
git commit -m "feat(sections): create main page sections"
```

### ⏳ Step 8: Dark Mode & Animations

```bash
git add app/layout.tsx components/theme-provider.tsx
git commit -m "feat(theme): add dark mode and animations support"
```

---

## Tips

- Commit after each major step
- Keep commits focused and atomic
- Write descriptive commit messages
- Reference issue numbers if applicable
