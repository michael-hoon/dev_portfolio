# Michael Hoon - Portfolio Website

Personal portfolio website showcasing my AI and data engineering work, project writeups, learning notes, and photography.

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
├── assets/               # Static assets optimized by Astro
│   └── photos/           # Photography gallery images
├── components/           # Reusable Astro components
├── content/              # Content collections (see src/content.config.ts)
│   ├── posts/            # Project write-ups and learning notes (MDX)
│   ├── assets/           # Images referenced by posts/
│   ├── other/            # Static content pages (About)
│   ├── info.json         # Quick-info list on the homepage
│   ├── socials.json      # Social links
│   ├── tags.json         # Tag registry (referenced by posts)
│   └── work.json         # Work experience entries
├── data/                 # Plain data files consumed directly (not collections)
│   └── photo-alt.json    # Optional alt text for photography, by filename
├── layouts/              # Page layouts
├── pages/                # Route pages
├── scripts/              # Client-side scripts
└── styles/               # Global CSS styles
```

## 🔧 Local Development

```bash
npm install
npm run dev
```

Visit `http://localhost:4321`

## 📝 Adding Content

### Adding a Project or Note

Posts live in `src/content/posts/` as a single collection with a `type` field:

- `type: project` — something you built (has `image`, `link`, `info`)
- `type: note` — a learning write-up (no image/info required)

`/projects` and `/writing` are filtered views over this same collection, keyed off `type`.

1. Create `src/content/posts/my-post.mdx`
2. Add frontmatter:

```yaml
---
type: project # or "note"
title: "Project Title"
description: "Brief description"
date: 2025-01-15
image: ../assets/my-project/cover.jpg
link: https://github.com/yourusername/repo
info:
  - text: "GitHub"
    icon: { type: "simple-icons", name: "github" }
    link: https://github.com/yourusername/repo
tags:
  - some-tag # must already exist in src/content/tags.json
draft: false # set true to keep it out of production builds
---
```

3. Write content in Markdown/MDX. Referenced images go in `src/content/assets/<post-name>/`.

### Adding Photos to the Gallery

Place images in `src/assets/photos/`, named `YYYY-MM-DD[-n].jpg` — the gallery and homepage strip sort by the date in the filename, newest first.

Alt text is optional and off by default (`alt=""`, valid for decorative images). To caption a specific photo, add an entry to `src/data/photo-alt.json` keyed by filename:

```json
{
  "2025-01-15-sunset-landscape.jpg": "Sunset over the harbour"
}
```

## 🚢 Deployment

Automatically deploys to Vercel on push to `main`/`master`. `postbuild` runs Pagefind indexing and syncs the generated search index into the Vercel output directory (`scripts/sync-pagefind.mjs`) — see that file if search stops returning results after a deploy.

### Manual Deploy
```bash
npm run build
npm run preview
```

## 🧪 Development Scripts

```bash
npm run dev      # Start development server
npm run build    # Build for production (also runs Pagefind indexing via postbuild)
npm run preview  # Preview production build
npm run lint     # Run Biome lint/format checks
npm run format   # Auto-format with Biome
npm run check    # Type-check .astro files with astro check
```

CI (`.github/workflows/ci.yml`) runs `lint`, `check`, and `build` on every PR.

## 📄 License

© 2025–2026 Michael Hoon. All rights reserved.

## 🤝 Based On

Built with the [Spectre theme](https://github.com/louisescher/spectre) for Astro.
