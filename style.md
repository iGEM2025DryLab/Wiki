# Lychee Guardians – “Lychee Quest” Design System & Front‑End Implementation Guide

> A practical spec for developers and coding agents to implement a consistent, playful, yet credible iGEM wiki UI.

---

## 0) Product Principles

- **Playful First Impression, Serious Depth**: comic/mascot for intros → clean layouts for scientific content.
- **Fast & Lightweight**: CSS animations only; avoid heavy libraries. Target Lighthouse perf ≥ 90 on desktop/mobile.
- **Accessible**: WCAG AA contrast, keyboard-focusable interactions, reduced-motion support.
- **Composable**: components are atomic, documented, and reusable across Home, Wet Lab, Dry Lab, HP, Results, Team, Notebook.

---

## 1) Brand & Look

### 1.1 Palette (design tokens)

- `--color-lychee-500: #E63946;` (Primary / hero / CTA)
- `--color-leaf-500: #4CAF50;` (Accents / success / highlights)
- `--color-gold-400: #FFB703;` (Accent / dividers / highlights)
- `--color-ink-900: #2E2E38;` (Primary text on light)
- `--color-cream-50: #FFF8F0;` (Default background)
- `--color-ink-50: #101014;` (Dark bg)
- `--color-lychee-100: #FFE4E7;` (Soft surface)
- `--color-leaf-100: #E8F5E9;` (Soft surface)
- **States**
  - Hover intensify: use 8–12% darker on hover; 16–20% darker on active.
  - Focus ring: `outline: 3px solid var(--color-gold-400); outline-offset: 2px;`

### 1.2 Typography

- **Headings (Hero/Playful)**: Baloo 2 / Nunito ExtraBold
- **Body (Scientific)**: Inter / Roboto / Lato
- **Narrative Accents**: Caveat (for mascot speech bubbles, not for long copy)
- **Scale** (clamp-based; use CSS variables)
  - `--font-size-hero: clamp(2.2rem, 4vw, 3.5rem);`
  - `--font-size-h1: clamp(1.8rem, 3vw, 2.6rem);`
  - `--font-size-h2: clamp(1.5rem, 2.2vw, 2rem);`
  - `--font-size-body: 1rem;`
  - Line-height: 1.5–1.7 for paragraphs.

### 1.3 Iconography & Motifs

- Rounded shapes, subtle lychee-skin dot textures, leaf curves, shield/guardian icon for achievements.
- Mascot appears as a **guide** at section intros; use speech bubbles.

---

## 2) Theming & Tokens

### 2.1 CSS Variables (root)

```css
:root {
  /* Colors */
  --color-lychee-500: #E63946;
  --color-lychee-600: #C62F3B;
  --color-leaf-500: #4CAF50;
  --color-leaf-600: #3F9D44;
  --color-gold-400: #FFB703;
  --color-ink-900: #2E2E38;
  --color-ink-700: #545463;
  --color-cream-50: #FFF8F0;
  --color-surface: #FFFFFF;

  /* Typography */
  --font-display: 'Baloo 2', 'Nunito', system-ui, sans-serif;
  --font-body: 'Inter', system-ui, -apple-system, Segoe UI, Roboto, sans-serif;
  --font-accent: 'Caveat', system-ui, sans-serif;

  /* Radius & Shadow */
  --radius-lg: 1rem; /* 16px */
  --radius-xl: 1.25rem; /* 20px */
  --shadow-soft: 0 6px 20px rgba(0,0,0,0.08);
  --shadow-pop: 0 10px 30px rgba(230,57,70,0.2);

  /* Spacing (8pt grid) */
  --space-1: .25rem; /* 4 */
  --space-2: .5rem;  /* 8 */
  --space-3: .75rem; /* 12 */
  --space-4: 1rem;   /* 16 */
  --space-6: 1.5rem; /* 24 */
  --space-8: 2rem;   /* 32 */
  --space-12: 3rem;  /* 48 */

  /* Motion */
  --ease-pop: cubic-bezier(.17,.67,.27,1.2);
  --dur-fast: 160ms;
  --dur-med: 280ms;
  --dur-slow: 480ms;
}

@media (prefers-reduced-motion: reduce) {
  :root { --dur-fast: 0ms; --dur-med: 0ms; --dur-slow: 0ms; }
}
```

### 2.2 Dark Mode (optional, progressive enhancement)

```css
@media (prefers-color-scheme: dark) {
  :root {
    --color-surface: #191A1F;
    --color-ink-900: #EEEFF3;
    --color-ink-700: #C9CBD6;
    --color-cream-50: #101014;
    --shadow-soft: 0 6px 20px rgba(0,0,0,0.35);
    --shadow-pop: 0 10px 30px rgba(230,57,70,0.25);
  }
}
```

---

## 3) Tailwind Setup (if using Tailwind)

Add to `tailwind.config.js`:

```js
export default {
  content: ["./**/*.{html,md,mdx,js,ts,vue,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        lychee: { 500: "#E63946", 600: "#C62F3B", 100: "#FFE4E7" },
        leaf: { 500: "#4CAF50", 600: "#3F9D44", 100: "#E8F5E9" },
        gold: { 400: "#FFB703" },
        cream: { 50: "#FFF8F0" },
        ink: { 900: "#2E2E38", 700: "#545463" }
      },
      borderRadius: {
        lg: "1rem",
        xl: "1.25rem",
      },
      boxShadow: {
        soft: "0 6px 20px rgba(0,0,0,0.08)",
        pop: "0 10px 30px rgba(230,57,70,0.2)",
      },
      fontFamily: {
        display: ["Baloo 2", "Nunito", "system-ui", "sans-serif"],
        body: ["Inter", "system-ui", "sans-serif"],
        accent: ["Caveat", "system-ui", "sans-serif"],
      },
      transitionTimingFunction: {
        pop: "cubic-bezier(.17,.67,.27,1.2)",
      },
    }
  }
}
```

---

## 4) Components (spec + usage)

### 4.1 Buttons

**Variants**: `primary`, `secondary`, `ghost`.

```css
.btn {
  display:inline-flex; align-items:center; gap:.5rem; font:600 1rem var(--font-body);
  padding:.65rem 1rem; border-radius:var(--radius-xl); transition:transform var(--dur-fast) var(--ease-pop), box-shadow var(--dur-fast);
}
.btn-primary { background:var(--color-lychee-500); color:white; box-shadow:var(--shadow-pop); }
.btn-primary:hover { transform:translateY(-1px); }
.btn-primary:active { transform:translateY(0); }
.btn-secondary { background:var(--color-leaf-500); color:white; }
.btn-ghost { background:transparent; color:var(--color-ink-900); border:1px solid rgba(0,0,0,.06); }
.btn:focus-visible{ outline:3px solid var(--color-gold-400); outline-offset:2px; }
```

### 4.2 Cards

- Rounded, soft shadow; used for experiment summaries, results highlights.

```css
.card { background:var(--color-surface); border-radius:var(--radius-lg); box-shadow:var(--shadow-soft); padding:var(--space-6); }
.card--accent { border:2px solid var(--color-lychee-100); }
```

### 4.3 Section Header (with comic intro option)

```html
<header class="section-header">
  <h2 class="title">Wet Lab</h2>
  <p class="kicker">How we protected lychees in the lab</p>
</header>
```

```css
.section-header .title { font-family:var(--font-display); font-size:var(--font-size-h1); color:var(--color-ink-900); }
.section-header .kicker { color:var(--color-ink-700); margin-top:var(--space-2); }
```

### 4.4 Comic Bubble (mascot speech)

```css
.bubble { font-family:var(--font-accent); background:var(--color-lychee-100); border-radius:24px; padding:.75rem 1rem; position:relative; }
.bubble:after { content:""; position:absolute; left:16px; bottom:-8px; width:0; height:0; border-left:10px solid transparent; border-right:10px solid transparent; border-top:10px solid var(--color-lychee-100); }
```

### 4.5 Nav Bar

- Sticky top bar; active underline uses gold.

```css
.nav { position:sticky; top:0; background:var(--color-cream-50); border-bottom:1px solid rgba(0,0,0,.06); backdrop-filter:saturate(140%) blur(6px); }
.nav a { display:inline-block; padding: .9rem 1rem; color:var(--color-ink-900); font-weight:600; }
.nav a[aria-current="page"] { box-shadow: inset 0 -3px 0 var(--color-gold-400); }
```

### 4.6 Tooltip

```css
.tooltip{ position:relative; }
.tooltip:hover .tip{ opacity:1; transform:translateY(0); }
.tip{ position:absolute; background:#000; color:#fff; padding:.35rem .5rem; border-radius:.4rem; opacity:0; transform:translateY(6px); transition: all var(--dur-fast) var(--ease-pop); }
```

### 4.7 Data Figure Frame

- Uniform framing for charts/images.

```css
.figure { background:var(--color-surface); border-radius:var(--radius-lg); box-shadow:var(--shadow-soft); padding:var(--space-4); border:1px solid rgba(0,0,0,.06); }
.figure .caption{ color:var(--color-ink-700); font-size:.9rem; margin-top:.5rem; }
```

---

## 5) Motion & Interaction

### 5.1 Keyframes

```css
@keyframes float {
  0% { transform: translateY(0); }
  50% { transform: translateY(-6px); }
  100% { transform: translateY(0); }
}
@keyframes pop {
  0% { transform: scale(.96); opacity:.8; }
  100% { transform: scale(1); opacity:1; }
}
.mascot-float { animation: float 4s ease-in-out infinite; }
.pop-in { animation: pop var(--dur-med) var(--ease-pop) both; }
```

### 5.2 Page Transitions

- Use `pop-in` on hero elements on first paint.
- On section change, slide content in 12–16px; respect `prefers-reduced-motion`.

### 5.3 Hover/Active/Focus Behavior

- Minimum 44×44px targets on touch.
- Always visible focus style.

---

## 6) Layout System

- **Grid**: 12‑column responsive; max content width 1200–1280px.
- **Section spacing**: top/bottom `var(--space-12)`; inner gaps `var(--space-6)`.
- **Hero**: full‑bleed, cream background; “Lychee Guardians → We focus on Lychee” morph text.

**Hero morph spec**

- Frame 1: “Lychee Guardians” (display font, lychee‑500)
- Morph: letters dissolve → lychee icon → “We focus on Lychee” (leaf‑500 highlight on “Lychee”)
- Duration \~1.2s; then CTA buttons appear with `pop-in`.

---

## 7) Page Templates

### 7.1 Home

- **Hero** (title morph + mascot float)
- **What is a lychee?** mini‑carousel (3–5 slides; cultural/facts)
- **The Problem** micro‑comic (3 panels)
- **Our Science** quick cards → link to Wet/Dry Lab
- **Start the Quest** CTA row (Problem | Science | People)

### 7.2 Section Main (Wet Lab / Dry Lab / HP)

- **Comic Intro strip** (2–3 panels; mascot bubble)
- **Key Objectives** (icon list)
- **Highlights** (cards)
- **Deep Dive** (tabs or accordions)
- **Outcome / Next Step** (CTA to Results / Notebook)

### 7.3 Results/Achievements

- Medal checklist grid; hover reveals criteria & evidence link
- Key charts in uniform `.figure` frames

### 7.4 Team

- Profile grid with rounded cards; fun fact line
- Behind‑the‑scenes gallery (lightbox)

---

## 8) Accessibility & Content Rules

- Contrast ratio AA for text/icons on backgrounds.
- Provide alt text for mascot & decorative images; `role="img"` with `aria-label` when needed.
- Keyboard nav: all actionable elements focusable; skip‑to‑content link.
- Motion: honor `prefers-reduced-motion`.
- Copy tone: playful on intros; neutral scientific language for methods/results.

---

## 9) Assets & Naming

- `assets/mascot/` – SVG + PNG @1x @2x
- `assets/textures/` – lychee-skin subtle PNG (≤10KB), leaf‑curve SVGs
- `assets/icons/` – shield.svg, leaf.svg, dna.svg, drone.svg, lab.svg
- `assets/fonts/` – host via Google Fonts or locally if offline

---

## 10) Code Conventions

- BEM‑ish utility approach: semantic classes + small utility helpers.
- Keep inline styles out; prefer CSS vars and utility classes for theme.
- Components live in `components/` with README snippet and demo markup.

---

## 11) Example Markup Snippets

### 11.1 Hero

```html
<section class="hero" style="background:var(--color-cream-50)">
  <div class="container">
    <h1 class="pop-in" style="font-family:var(--font-display); color:var(--color-lychee-500)">Lychee Guardians</h1>
    <p class="bubble mascot-float">Hi! I’ll guide you on our Quest 🍒</p>
    <div class="cta
```
