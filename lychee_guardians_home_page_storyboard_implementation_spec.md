# Lychee Guardians — Home Page Storyboard & Implementation Spec

> Purpose: Provide copy, layout, and interaction specs for the landing page, matching the “Lychee Quest” design system. Built to hand directly to devs.

---

## 0) Page Goals

- Hook non‑experts quickly (what is lychee?) while giving judges a fast path to science.
- Tell the problem → show our solutions → route users to Wet Lab, Dry Lab, and Human Practices.
- Keep playful, but transition to credible content below the fold.

KPI: homepage CTR to three hubs (Wet Lab / Dry Lab / HP) ≥ 60% combined; bounce < 35%.

---

## 1) Narrative Beats (top‑to‑bottom)

1. **Hero — “We are Lychee Guardians”**

   - Morphing title: `Lychee Guardians` → `We focus on Lychee`
   - Subline: "A playful quest to keep lychees fresh — with biology, data, and community."
   - CTAs: [Start the Quest] [What is a Lychee?]

2. **What are Lychees? (Character → Realistic)**

   - Left: mascot holds a lychee; Right: photo carousel of real lychees.
   - Bullets: *Sweet. Juicy. Fragrant. Transparent flesh.*
   - Micro fact chips: origin, seasonality, cultural notes.

3. **But… They Turn Bad Fast**

   - Fresh → brown time‑lapse slider.
   - One‑line stakes: “Hours matter. Freshness drops, price crashes, food waste rises.”

4. **So We’re Here!**

   - Panel with our team intro and mission line.
   - CTA: [See Human Practices →] (producers/consumers, surveys, expert feedback)

5. **Why Lychees Spoil (Fast)**

   - Three cards (with tiny animations): Rapid Metabolism • Pathogens • Enzymatic Oxidation.
   - One‑sentence explainer for each.

6. **Our Wet Lab Solutions**

   - Two highlight cards: **Melatonin** (anti‑oxidative/physiology) • **Edible Wax Coat** (barrier).
   - CTA: [Dive into Wet Lab →]

7. **Our Dry Lab Allies**

   - Icon tabs: **SynbioMCP** (AI assistant), **Lychee Recognition App** (dataset + model), **Drone System**, **BactaGenome** (bacterial genomics model).
   - CTA: [Explore Dry Lab →]

8. **Summary & Choose Your Path**

   - Short recap paragraph.
   - Three big gateway buttons: [Wet Lab] [Dry Lab] [Human Practices]

9. **Footer Quick Links**

   - Results • Team • Notebook • Parts • Safety • Attributions

---

## 2) Copy (approved baseline)

### 2.1 Hero

- H1: **Lychee Guardians**
- Morph H1: **We focus on Lychee**
- Tagline: *A playful quest to keep lychees fresh — with biology, data, and community.*
- Buttons: **Start the Quest** (scroll to What‑is section), **What is a Lychee?** (opens mini modal with 3 fast facts)

### 2.2 What are Lychees?

- Lead: *What are they?*
- Body: *Lychee (Litchi chinensis) is a tropical fruit with perfumed sweetness, translucent flesh, and a snap‑thin shell. If you’ve never tried one — think “rose‑grape” energy.*
- Fact Chips (examples): *South China origin • Peak season: May–July • Best chilled • Peel, don’t bite the seed*

### 2.3 But… They Turn Bad Fast

- Body: *Lychees can lose freshness within a day. Browning and off‑flavor means lower price — and more waste.*
- Caption under slider: *Drag to see the change from fresh → spoiled.*

### 2.4 So We’re Here!

- Body: *We’re the Lychee Guardians — students combining biology, engineering, and community work to slow spoilage and keep lychees delicious for longer.*
- CTA: **See how people shaped our project → Human Practices**

### 2.5 Why Lychees Spoil (Fast)

- Card 1: **Rapid Metabolism** — *After harvest, lychee is still “breathing,” burning sugars quickly.*
- Card 2: **Pathogen Invasion** — *Microbes attack the pericarp, accelerating decay.*
- Card 3: **Enzymatic Oxidation** — *Polyphenol oxidase turns the peel brown; flavor follows.*

### 2.6 Our Wet Lab Solutions

- Card A: **Melatonin** — *Exploring plant‑physiology tuning to reduce oxidative stress.*
- Card B: **Edible Wax Coat** — *A gentle barrier that slows water loss and microbial access.*
- Button: **Dive into Wet Lab →**

### 2.7 Our Dry Lab Allies

- Tab 1: **SynbioMCP** — *An AI buddy that helps iGEMers script and model without heavy CS background.*
- Tab 2: **Lychee Recognition** — *Dataset + model to assess lychee surface quality.*
- Tab 3: **Drone System** — *Field‑friendly application and sensing.*
- Tab 4: **BactaGenome** — *A specialized U‑Net Transformer for bacterial genomics.*
- Button: **Explore Dry Lab →**

### 2.8 Summary & Entrances

- Body: *From farms to labs to code, we’re building a kinder journey for lychees. Pick a path to see more.*
- Buttons: **Wet Lab** • **Dry Lab** • **Human Practices**

---

## 3) Layout & Components Map

- **Section 1 — Hero**

  - `.hero` (cream bg) → H1 morph, mascot bubble, CTAs row.
  - Components: `section-header`, `.btn.btn-primary`, `.btn.btn-ghost`, `.bubble`.

- **Section 2 — Lychee Intro**

  - Grid: 6/6 split (mascot → carousel). Facts as chips under carousel.
  - Components: `carousel`, `chip` badges, `.figure` frame.

- **Section 3 — Spoilage Slider**

  - Full‑width compare slider (fresh vs spoiled). Caption centered.
  - Components: `before-after` slider, `caption`.

- **Section 4 — Mission**

  - Centered copy, mascot float small, single CTA to HP.

- **Section 5 — Spoilage Causes**

  - Three `.card` in a responsive grid; icon per card; subtle hover pop.

- **Section 6 — Wet Lab**

  - Two highlight cards with mini diagrams; CTA button.

- **Section 7 — Dry Lab**

  - Icon tabs → single panel area that swaps content; CTA button.

- **Section 8 — Summary & Entrances**

  - Three big buttons (shield style) linking to hubs.

- **Section 9 — Footer**

  - Quick links row; small logo; social/contact.

---

## 4) Interaction Specs

- **Hero Morph**: 1.2s dissolve morph. On `prefers-reduced-motion`, show both titles stacked, no animation.
- **Carousel**: 3–5 slides; swipe on mobile; autoplay off by default; keyboard accessible.
- **Before/After Slider**: mouse/touch drag; keyboard left/right moves the handle; includes ARIA labels.
- **Card Hover**: translateY(-2px) + shadow `pop`.
- **Tabs**: arrow‑key navigable; 48px min targets; focus ring in gold.
- **CTA Buttons**: primary lychee‑500; hover raises 1px; focus outline gold‑400.

---

## 5) Routing / Links

- `#wet-lab` → `/wetlab/`
- `#dry-lab` → `/drylab/`
- `#hp` → `/human-practices/`
- Footer: `/results/`, `/team/`, `/notebook/`, `/parts/`, `/safety/`, `/attributions/`

---

## 6) HTML/CSS Snippets (drop‑in)

### 6.1 Hero

```html
<section class="hero" style="background:var(--color-cream-50)">
  <div class="container">
    <h1 class="pop-in title-1">Lychee Guardians</h1>
    <h2 class="pop-in title-2" aria-hidden="true">We focus on Lychee</h2>
    <p class="bubble mascot-float" aria-live="polite">Hi! I’ll guide you on our Quest 🍒</p>
    <div class="cta">
      <a class="btn btn-primary" href="#what">Start the Quest</a>
      <a class="btn btn-ghost" href="#what">What is a Lychee?</a>
    </div>
  </div>
</section>
```

### 6.2 Spoilage Causes (cards)

```html
<section id="causes" class="grid-3">
  <article class="card pop-in">
    <h3>Rapid Metabolism</h3>
    <p>After harvest, lychee is still “breathing,” burning sugars quickly.</p>
  </article>
  <article class="card pop-in" style="animation-delay:120ms">
    <h3>Pathogen Invasion</h3>
    <p>Microbes attack the pericarp, accelerating decay.</p>
  </article>
  <article class="card pop-in" style="animation-delay:240ms">
    <h3>Enzymatic Oxidation</h3>
    <p>Polyphenol oxidase turns the peel brown; flavor follows.</p>
  </article>
</section>
```

### 6.3 Section Entrances (final CTA row)

```html
<section class="cta-hub">
  <a class="btn btn-primary" href="/wetlab/">Wet Lab</a>
  <a class="btn btn-secondary" href="/drylab/">Dry Lab</a>
  <a class="btn btn-ghost" href="/human-practices/">Human Practices</a>
</section>
```

---

## 7) Assets Needed

- Fresh vs spoiled lychee photo pair (same angle/lighting) for slider.
- Mascot SVG (arms up pose, lab coat pose, drone pose).
- Icons: metabolism, microbe, oxidation, lab flask, DNA, drone, app/phone.
- Short looping textures (lychee skin, leaf curve) ≤10KB each.

---

## 8) Accessibility

- All interactive controls keyboard reachable; visible focus.
- Provide textual alt for each image; decorative textures marked `aria-hidden`.
- Reduced‑motion fallback for morph/slider.

---

## 9) Performance Budget

- JS on home ≤ 120KB gzipped; images below‑the‑fold lazy.
- Use AVIF/WebP; SVG for icons; shared CSS inlined ≤ 20KB.

---

## 10) QA Checklist (Home)

-

---

**End of home page spec.**

