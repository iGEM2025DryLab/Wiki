# iGEM Wiki Architecture Plan

This document describes the architecture, workflow, and design considerations for our team’s iGEM 2025 Wiki. It balances **creativity and interactivity** with iGEM’s compliance requirements and long-term maintainability.

---

## 1. Hosting & Rules

- All assets (HTML, CSS, JS, fonts, images, videos) must be hosted **on iGEM’s GitLab Pages**—no external CDNs.
- Standard URL paths are required (e.g., `/team/`, `/project/description/`, `/project/results/`).
- The site must remain fully functional after **Wiki Freeze**, meaning no live API calls or externally loaded resources.

---

## 2. Tech Stack Overview

- **Framework:** [Astro](https://astro.build/)  
  - Static-first rendering for fast load times.  
  - Partial hydration (“islands”) for interactive components.  
- **Styling:** Tailwind CSS (lightweight, utility-first).  
- **Content:** Markdown/MDX as the single source of truth.  
- **Interactivity:** Svelte or React components embedded inside Astro.  
- **Animations:** GSAP / Web Animations API for micro-interactions; Lottie for vector animations.  
- **Repository:** Managed in iGEM GitLab, deployed via GitLab CI/CD to GitLab Pages.

---

## 3. Repository Layout

```
.
├─ astro.config.mjs
├─ package.json
├─ public/                  # static assets (logos, fonts, compressed images)
├─ src/
│  ├─ layouts/              # base page shells
│  ├─ components/           # nav, footer, cards, interactive widgets
│  │   └─ interactions/     # animation & creative components
│  ├─ pages/                # content pages, mirrors iGEM standard URLs
│  ├─ content/              # Markdown/MDX files (English, Chinese)
│  └─ data/                 # precomputed JSON (notebook index, timelines, etc.)
└─ static/                  # images, videos, lottie JSONs
```

---

## 4. Content Workflow

- Team members author in **Markdown/MDX** (`src/content/en/...`, `src/content/zh/...`).  
- Editors use **reusable components** for figures, timelines, and callouts.  
- A pre-build script converts front-matter into JSON for dynamic pages (e.g., lab notebook, project timeline).  
- Bilingual strategy: maintain parallel content trees (`/en/` and `/zh/`).

---

## 5. Interactivity & Creativity

We aim to go beyond static pages while staying lightweight and compliant:

- **Scrollytelling sections:** reveal figures step-by-step as the user scrolls.  
- **Interactive maps:** click nodes to explore pathways, devices, or collaborations.  
- **Notebook explorer:** searchable/filterable experiment log.  
- **Before/after figure sliders** and **lightbox galleries**.  
- **Mini quizzes / polls** for Human Practices & Education.  
- **Hero animations** (protein structures, device designs) with Three.js or Lottie.  

All interactions are **gracefully degradable**: the page remains readable with JS disabled.

---

## 6. CI/CD Pipeline

Example `.gitlab-ci.yml`:

```
image: node:20

cache:
  paths:
    - node_modules/

pages:
  stage: deploy
  script:
    - npm ci
    - npm run build
    - mkdir -p public
    - cp -r dist/* public/
  artifacts:
    paths:
      - public
  only:
    - main
```

Extras:
- Pre-build scripts for compressing images and generating JSON.
- **External content checker** to ensure no CDN or remote assets are used.

---

## 7. Performance & Accessibility

- Target <150 KB gzipped JS per page; code-split interactive components.  
- All fonts hosted locally in WOFF2 format.  
- Optimize images (`sharp`, `imagemin`).  
- Provide alt text for all images, captions for figures, and ARIA labels for components.  
- Respect `prefers-reduced-motion` for users sensitive to animation.  
- Ensure keyboard navigation and high-contrast color themes.

---

## 8. Benefits of This Architecture

- **Compliance:** Satisfies iGEM Wiki rules (self-hosted, static, accessible after freeze).  
- **Creativity:** Enables animations and interactive storytelling while keeping performance high.  
- **Maintainability:** Markdown-first authoring empowers all team members, not just developers.  
- **Future-proof:** Modern, modular design allows easy updates, even post-competition.

---

*Prepared for iGEM 2025 Team Wiki Development*
