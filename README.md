# Michael Hoon - Portfolio Website

Personal portfolio website showcasing my AI and data engineering work.

**Live Site:** [michaelhoon.dev](https://michaelhoon.dev)

## 🚀 Tech Stack

- **Framework:** Astro 5.x
- **Language:** TypeScript
- **Styling:** CSS (with custom properties)
- **Gallery:** Fancybox
- **Search:** Pagefind
- **Deployment:** Vercel
- **Analytics:** Vercel Web Analytics

## 🏗️ Project Structure

```
src/
├── assets/         # Static assets optimized by Astro
│   └── photos/     # Photography gallery images
├── components/     # Reusable Astro components
├── content/        # Content collections
│   ├── projects/   # Project MDX files
│   ├── posts/      # Blog posts
│   └── other/      # Other content
├── layouts/        # Page layouts
├── pages/          # Route pages
├── scripts/        # Client-side scripts
└── styles/         # Global CSS styles
```

## 🔧 Local Development

```bash
npm install
npm run dev
```

Visit `http://localhost:4321`

## 📝 Adding Content

### Adding a New Project

1. Create `src/content/projects/my-project.mdx`
2. Add frontmatter:

```yaml
---
title: "Project Title"
description: "Brief description"
date: 2025-01-15
image: ~/assets/project-image.jpg
link: https://github.com/yourusername/repo
info:
  - text: "GitHub"
    icon: { type: "simple-icons", name: "github" }
    link: https://github.com/yourusername/repo
  - text: "Tech Stack"
    icon: { type: "lucide", name: "code" }
---
```

3. Write content in Markdown/MDX

### Adding Photos to Gallery

- **Optimized:** Place in `src/assets/photos/`
- **Direct serve:** Place in `public/photos/`
- **Naming:** Use format `YYYY-MM-DD-description.jpg` for automatic date sorting

Example: `2025-01-15-sunset-landscape.jpg`

## 🚢 Deployment

Automatically deploys to Vercel on push to `main` branch.

### Manual Deploy
```bash
npm run build
npm run preview
```

## 🧪 Development Scripts

```bash
npm run dev         # Start development server
npm run build       # Build for production
npm run preview     # Preview production build
npm run lint        # Run linter
npm run format      # Format code
npm run type-check  # Check TypeScript types
```

## 📄 License

© 2025 Michael Hoon. All rights reserved.

## 🤝 Based On

Built with the [Spectre theme](https://github.com/louisescher/spectre) for Astro.