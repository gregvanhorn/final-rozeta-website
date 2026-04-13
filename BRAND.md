# Rozeta Labs — Brand & Design System

## Philosophy

Rozeta Labs uses **neo-brutalism** — a design movement that rejects the softness of modern SaaS in favor of raw, confident visual structure. Everything is built to feel like it was printed, stamped, or bolted together. No gradients, no rounded corners, no subtle drop-shadows. Every element has visible weight.

The underlying message: we are not another polished AI startup. We are a crew that builds real things for real businesses.

---

## Color Palette

| Role | Name | HSL | Hex |
|---|---|---|---|
| **Primary / Brand Yellow** | Rozeta Yellow | `hsl(47, 100%, 50%)` | `#FFCA00` |
| **Background** | Off-White Cream | `hsl(46, 100%, 96%)` | `#FFFAE8` |
| **Muted / Footer** | Warm Tan | `hsl(46, 50%, 88%)` | `#EDE8CF` |
| **Foreground / Text** | Near Black | `hsl(0, 0%, 5%)` | `#0D0D0D` |
| **Pure Black** | Black | `#000000` | `#000000` |
| **Accent Blue** | Electric Blue | `hsl(210, 100%, 56%)` | `#1A8AFF` |
| **Accent Pink** | Punch Pink | `hsl(0, 85%, 70%)` | `#F26060` |
| **Accent Purple** | Soft Purple | `hsl(260, 60%, 75%)` | `#A98FD9` |

### Usage Rules
- **Yellow** is the hero color. Use it for primary CTAs, highlights, icon backgrounds, and section accents.
- **Black** is used for all borders, shadows, and strong text. Never softened with opacity on structural elements.
- **Cream** (`#FFFAE8`) is the default page background — warm, not clinical white.
- **Blue** and **Pink** are section accent backgrounds for variety. Never use both in the same section.
- **Purple** appears only in Level 2 automation cards — use sparingly.
- Black text on Yellow: always readable. Yellow text on Black: always readable. These are the only two text-on-color combinations used.

---

## Typography

### Font Family
```
Primary: 'Space Grotesk', 'Inter', sans-serif
Mono:    'Fira Code', Menlo, monospace
```

### Rules
- **Always bold** (`font-bold`, `font-weight: 700`). There are no light or regular weight instances anywhere on the site.
- **Always uppercase** for headings, labels, badges, nav items, and buttons. Mixed-case is used only for body copy and card descriptions.
- **Tight tracking** (`tracking-tighter` or `tracking-tight`) on all headings. Wide tracking (`tracking-widest`) on small label badges only.
- **No italics** except for occasional small citation-style callouts inside cards.
- **Zero border-radius** — `--radius: 0rem`. Every element is hard-edged.

### Type Scale (Tailwind)
| Use | Class | Size |
|---|---|---|
| Hero headline | `text-7xl` / `text-8xl` | 72–96px |
| Section headline | `text-5xl` to `text-7xl` | 48–72px |
| Card headline | `text-xl` to `text-2xl` | 20–24px |
| Body / card description | `text-sm` to `text-lg` | 14–18px |
| Badge / label | `text-xs` | 12px |
| Button | `text-sm` | 14px |

---

## Border System

**The single most important rule: everything has a border.**

```css
border: 4px solid black;   /* standard — all cards, buttons, containers */
border: 2px solid black;   /* secondary dividers inside menus */
border-bottom: 4px solid black; /* section separators */
```

- Border width is always `4px` (Tailwind: `border-4`) on interactive and structural elements.
- Border color is always pure black (`#000000`) — never gray, never soft.
- Borders appear on: cards, buttons, nav, badges, sections, code blocks, callout boxes, iframes — everything.

---

## Shadow System

Shadows are **hard offset** (no blur) — they give depth without softness.

```css
/* Small — buttons, badges, small cards */
.shadow-neo-sm  { box-shadow: 3px 3px 0px 0px #000; }

/* Medium — primary cards, panels */
.shadow-neo-md  { box-shadow: 6px 6px 0px 0px #000; }

/* Large — hero elements, featured cards */
.shadow-neo-lg  { box-shadow: 8px 8px 0px 0px #000; }
```

### Interaction Pattern
On hover, cards translate up (`-translate-y-1` or `-translate-y-2`) and the shadow grows (`shadow-neo-md → shadow-neo-lg`).
On click/active, buttons translate down 2px and shadow disappears (`active:translate-x-[2px] active:translate-y-[2px] active:shadow-none`) — simulating a physical press.

---

## Background Textures

Three utility classes add visual texture to section backgrounds:

```css
/* Fine grid — used on light sections */
.bg-grid-neo {
  background-image:
    linear-gradient(rgba(0,0,0,0.07) 1px, transparent 1px),
    linear-gradient(90deg, rgba(0,0,0,0.07) 1px, transparent 1px);
  background-size: 40px 40px;
}

/* Halftone dots — used on yellow/colored sections */
.bg-halftone {
  background-image: radial-gradient(circle, rgba(0,0,0,0.15) 1px, transparent 1px);
  background-size: 12px 12px;
}

/* White dots — used on black/dark sections */
.bg-dots-neo {
  background-image: radial-gradient(circle, rgba(255,255,255,0.15) 1px, transparent 1px);
  background-size: 12px 12px;
}
```

Textures are always layered as `absolute inset-0` with `opacity-10` to `opacity-30` — never overwhelming.

---

## Layout Principles

- **Max width:** `max-w-7xl` (1280px) for most sections, `max-w-4xl` for single-column content like the booking page.
- **Section padding:** `py-24` vertically, `px-6` horizontally. Section backgrounds extend edge-to-edge; content is constrained inside.
- **Every section has a bottom border:** `border-b-4 border-black` — sections are stacked slabs, not flowing content.
- **Grid system:** 2-column (`md:grid-cols-2`) for cards, 3-column for process steps. Always gap-based, never gutter-less.
- **No border-radius anywhere.** If a Tailwind utility adds `rounded`, override with `rounded-none`.

---

## Component Patterns

### Buttons
```html
<!-- Primary CTA -->
<a class="border-4 border-black bg-[hsl(47,100%,50%)] px-6 py-3
          font-bold uppercase tracking-wide shadow-neo-sm
          hover:bg-yellow-400
          active:translate-x-[2px] active:translate-y-[2px] active:shadow-none">
  Get Started
</a>

<!-- Inverted (on dark backgrounds) -->
<a class="border-4 border-white bg-white px-6 py-3
          font-bold uppercase text-black shadow-[4px_4px_0_0_rgba(255,255,255,0.4)]">
  Learn More
</a>
```

### Badge / Label
```html
<div class="inline-block border-4 border-black bg-black
            px-4 py-2 text-xs font-bold tracking-widest uppercase
            text-[hsl(47,100%,50%)] shadow-neo-sm">
  Pricing
</div>
```

### Card
```html
<div class="border-4 border-black bg-white p-6 shadow-neo-md
            transition-all duration-200 hover:-translate-y-1 hover:shadow-neo-lg">
  ...
</div>
```

### Highlighted Headline Word
```html
<h2 class="text-5xl font-bold tracking-tighter uppercase">
  Not all automation
  <span class="inline-block border-4 border-black bg-[hsl(47,100%,50%)]
               px-3 shadow-neo-md -rotate-1">
    is created equal
  </span>
</h2>
```
Key technique: the yellow-highlighted word inside a headline uses `border-4 border-black` + `shadow-neo-md` + a slight rotation (`-rotate-1` or `rotate-1`) to feel stamped in.

---

## Logo

**Signal Waveform** — 5 vertical bars of increasing then decreasing height, centered in a yellow square with a black border. Represents AI signal processing / data flow.

```svg
<svg viewBox="0 0 20 20" fill="none">
  <line x1="3"    y1="8"  x2="3"    y2="12" stroke="black" stroke-width="2" stroke-linecap="round"/>
  <line x1="6.5"  y1="5"  x2="6.5"  y2="15" stroke="black" stroke-width="2" stroke-linecap="round"/>
  <line x1="10"   y1="1"  x2="10"   y2="19" stroke="black" stroke-width="2" stroke-linecap="round"/>
  <line x1="13.5" y1="5"  x2="13.5" y2="15" stroke="black" stroke-width="2" stroke-linecap="round"/>
  <line x1="17"   y1="8"  x2="17"   y2="12" stroke="black" stroke-width="2" stroke-linecap="round"/>
</svg>
```

**Icon container:**
```html
<div class="h-9 w-9 border-4 border-black bg-[hsl(47,100%,50%)] shadow-[3px_3px_0_0_#000]">
```

**Hover effect:** CSS glitch animation — red/cyan channel split at 3 steps, 0.5s duration.

**Wordmark:** "ROZETA LABS" in Space Grotesk Bold, uppercase, tight tracking, no special treatment beyond the font.

---

## Animation System

| Name | Behavior | Use |
|---|---|---|
| `rozeta-glitch` | RGB channel split on hover | Logo icon hover |
| `shadow-neo-pulse` | Shadow grows from 6px → 8px | Pulsing highlight elements |
| `stream-in` | Fade + slide left 8px | Content streaming in |
| `word-fade-out/in` | Opacity fade 0.25s | Hero rotating word swap |
| `typewriter-cursor` | Blinking 0.8s step-start | Cursor in hero headline |

---

## Voice & Copy Tone

- **Short, direct, declarative.** No hedging language.
- **Second person.** "Your business", "your team", "you don't".
- **Active voice always.** "We build" not "systems are built".
- **No jargon used without immediate explanation.** "Level 1 automation" is always followed by what that means.
- **Sentence fragments are encouraged** for labels and callouts. Full sentences for explanatory body copy.
- **No em dashes (—).** Use hyphens (-) instead. No ellipsis. No exclamation points.
- Numbers are always spelled as digits ("14 days", "50%", "$500/month") never as words.
