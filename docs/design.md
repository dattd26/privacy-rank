# PrivacyRank — Style Reference
> Analytic laboratory of digital sovereignty. A clean, clinical space of ice-blue, deep charcoal, and electric cobalt.

**Theme:** light

PrivacyRank operates in a highly-credible, conversion-oriented cyber security review register: an ice-white canvas, deep slate/charcoal type (#090d16), and a single electric cobalt (#1d4ed8) that activates for primary actions. Visual hierarchy is carved through strict typography and layout scale, pairing a 52px geometric heading with a precise 14–16px body copy. Components are designed to look like technical instrumentation: rounded cards (16px radius), crisp hairline borders (#e2e8f0), and a slate-tinted shadow system (rgba(15, 23, 42, *)) that makes cards float subtly above the clinical canvas. Feedback semantics are sharp: Cyber Jade (#10b981) for safety, security, and rating wins; Warning Amber (#f59e0b) for neutral stats; and Signal Crimson (#ef4444) reserved exclusively for cons, leaks, and critical security failures.

---

## Tokens — Colors

| Name | Value | Preview | Token | Role |
|------|-------|---------|-------|------|
| **Midnight Slate** | `#090d16` | ![](https://placehold.co/15x15/090d16/090d16.png) | `--color-midnight-slate` | Primary text, headlines, structural lines, nav — a deep near-black navy that anchors the page with maximum readability and authority |
| **Pure White** | `#ffffff` | ![](https://placehold.co/15x15/ffffff/ffffff.png) | `--color-pure-white` | Card surfaces, elevated panels, navigation background, active toggles |
| **Frost Canvas** | `#f8fafc` | ![](https://placehold.co/15x15/f8fafc/f8fafc.png) | `--color-frost-canvas` | Base page background, soft off-white canvas with a cool cast that lets white cards read as elevated |
| **Hairline Slate** | `#e2e8f0` | ![](https://placehold.co/15x15/e2e8f0/e2e8f0.png) | `--color-hairline-slate` | Structural dividers, card borders, table separators — clean, faint slate lines |
| **Cool Gray** | `#64748b` | ![](https://placehold.co/15x15/64748b/64748b.png) | `--color-cool-gray` | Secondary body text, captions, inactive states, icons |
| **Electric Cobalt** | `#1d4ed8` | ![](https://placehold.co/15x15/1d4ed8/1d4ed8.png) | `--color-electric-cobalt` | Primary accent color, active buttons, key links, brand indicators — solid royal blue that commands trust |
| **Cobalt Glare** | `#3b82f6` | ![](https://placehold.co/15x15/3b82f6/3b82f6.png) | `--color-cobalt-glare` | High-light stroke, subtle button borders, active text highlights |
| **Ice Wash** | `#eff6ff` | ![](https://placehold.co/15x15/eff6ff/eff6ff.png) | `--color-ice-wash` | Soft ice-blue wash background for tags, badges, and background highlights |
| **Cyber Jade** | `#10b981` | ![](https://placehold.co/15x15/10b981/10b981.png) | `--color-cyber-jade` | Positive badges, high-performance speeds, verified checkmarks, security wins, "Pros" lists |
| **Jade Wash** | `#ecfdf5` | ![](https://placehold.co/15x15/ecfdf5/ecfdf5.png) | `--color-jade-wash` | Light green wash for verified tags and positive status indicators |
| **Signal Crimson** | `#ef4444` | ![](https://placehold.co/15x15/ef4444/ef4444.png) | `--color-signal-crimson` | Negative badges, critical security warnings, IP leaks, "Cons" lists, discount flags |
| **Crimson Wash** | `#fef2f2` | ![](https://placehold.co/15x15/fef2f2/fef2f2.png) | `--color-crimson-wash` | Light red wash for cons, emergency notices, and alert blocks |
| **Warning Amber** | `#f59e0b` | ![](https://placehold.co/15x15/f59e0b/f59e0b.png) | `--color-warning-amber` | Rating scores, medium stats, caution notices |
| **Amber Wash** | `#fffbeb` | ![](https://placehold.co/15x15/fffbeb/fffbeb.png) | `--color-amber-wash` | Light amber wash background |


---

## Tokens — Typography

### Plus Jakarta Sans — Headline and Display font
A geometric sans-serif typeface with clean curves and wide proportions. It carries the brand voice in the hero headlines, section headers, and key product names. Tight tracking at large sizes creates a polished, premium aesthetic.
*   **Token**: `--font-plus-jakarta`
*   **Substitute**: Inter Display, Söhne, or Helvetica
*   **Weights**: 500 (Medium), 600 (Semi-Bold), 700 (Bold)
*   **Sizes**: 18px, 20px, 24px, 32px, 40px, 52px
*   **Letter Spacing**: 52px: -1.30px (-0.025em); 40px: -0.80px (-0.02em); 32px: -0.48px (-0.015em); 24px: -0.24px (-0.01em); default 0 below 20px.

### Inter — Body and Interface font
Our universal UI workhorse font. Used for every menu item, comparison table detail, description list, pros/cons bullet, and form field. Optimized for numeric and small text legibility.
*   **Token**: `--font-inter`
*   **Weights**: 400 (Regular), 500 (Medium), 600 (Semi-Bold)
*   **Sizes**: 11px, 12px, 13px, 14px, 15px, 16px
*   **Letter Spacing**: Default 0; uppercase badges: +0.08em to +0.12em for micro-readability.

### JetBrains Mono — Technical data and Rank indicators
Used for numeric values, speed rates, ping stats, server counts, and rank numbers. Gives the page an analytical, verified, and laboratory-tested vibe.
*   **Token**: `--font-jetbrains-mono`
*   **Weights**: 500 (Medium), 600 (Semi-Bold)
*   **Role**: Technical data, score counts, table numbers

### Type Scale

| Role | Size | Line Height | Letter Spacing | Token |
|------|------|-------------|----------------|-------|
| Caption / Micro | 11px | 1.50 | 0.88px | `--text-caption` |
| Badge / Tag | 12px | 1.20 | 1.20px | `--text-badge` |
| Body Small | 14px | 1.60 | — | `--text-body-sm` |
| Body Standard | 15px | 1.60 | — | `--text-body` |
| Body Large / Intro| 18px | 1.63 | -0.09px | `--text-body-lg` |
| Sub-heading | 20px | 1.45 | -0.10px | `--text-subheading` |
| Heading Small | 24px | 1.30 | -0.24px | `--text-heading-sm` |
| Heading Standard| 32px | 1.25 | -0.48px | `--text-heading` |
| Heading Large | 40px | 1.15 | -0.80px | `--text-heading-lg` |
| Display Hero | 52px | 1.10 | -1.30px | `--text-display` |

---

## Tokens — Spacing & Shapes

**Base unit**: 4px
**Density**: clean, structured, comfortable

### Spacing Scale

| Name | Value | Token |
|------|-------|-------|
| 4 | 4px | `--spacing-4` |
| 8 | 8px | `--spacing-8` |
| 12 | 12px | `--spacing-12` |
| 16 | 16px | `--spacing-16` |
| 20 | 20px | `--spacing-20` |
| 24 | 24px | `--spacing-24` |
| 32 | 32px | `--spacing-32` |
| 40 | 40px | `--spacing-40` |
| 48 | 48px | `--spacing-48` |
| 64 | 64px | `--spacing-64` |
| 80 | 80px | `--spacing-80` |
| 96 | 96px | `--spacing-96` |
| 128 | 128px | `--spacing-128` |

### Border Radius

| Element | Value | Token | Rationale |
|---------|-------|-------|-----------|
| Cards | 16px | `--radius-card` | Soft and professional framing |
| Buttons | 8px | `--radius-btn` | Crisp, solid, and reliable look |
| Inputs | 8px | `--radius-input`| Aligning with buttons for shape lock consistency |
| Badges / Pills | 9999px | `--radius-badge`| Fully rounded, capsule shape |
| Inner elements | 8px | `--radius-inner`| Nested cards or thumbnails |

### Shadows

| Name | Value | Token |
|------|-------|-------|
| Subtle Card | `rgba(15, 23, 42, 0.03) 0px 4px 12px -4px, rgba(0, 0, 0, 0.02) 0px 1px 2px 0px` | `--shadow-subtle` |
| Floating Card | `rgba(15, 23, 42, 0.08) 0px 12px 32px -8px, rgba(0, 0, 0, 0.03) 0px 4px 8px -2px` | `--shadow-floating` |
| Focus Glow | `rgba(29, 78, 216, 0.15) 0px 0px 0px 4px` | `--shadow-focus` |

---

## Components

### Primary Button
*   **Role**: Key transaction triggers (e.g., 'Get Deal', 'Compare VPNs').
*   **Details**: Filled background (Electric Cobalt #1d4ed8), white text (#ffffff), 8px border-radius, 12px 24px padding. Inter 15px weight 600. Active states scale down slightly (`active:scale-98`). Contrast ratio is >4.5:1. Never wraps on desktop.

### Secondary Button
*   **Role**: Neutral/optional actions (e.g., 'Read Full Review', 'Read Methodology').
*   **Details**: White background (#ffffff), 1px Hairline Slate (#e2e8f0) border, Midnight Slate (#090d16) text. 8px border-radius, 12px 24px padding. Inter 15px weight 500. Hovers translate upward slightly (`hover:-translate-y-px`) with shadow change.

### Navigation Pill (Active Filter)
*   **Role**: Toggles in lists (e.g., 'Windows', 'Mac', 'Streaming').
*   **Details**: Pill-shaped (9999px radius), Ice Wash (#eff6ff) background, Electric Cobalt (#1d4ed8) text, Inter 13px weight 500.

### VPN Comparison Card
*   **Role**: Row blocks listing each VPN in the main ranking.
*   **Details**: White (#ffffff) surface, 16px radius, 1px Hairline Slate (#e2e8f0) border, internal padding 24px. Shadow is `--shadow-subtle`.
    *   **Structure**:
        *   Left: Rank index (large JetBrains Mono '#090d16' in Circle) + Provider Logo + "Overall Score" badge (e.g., `9.8` in green circle).
        *   Center: Key features list (Inter 14px, checked bullets) + Pros list (Jade wash, Cyber Jade text) + Cons list (Crimson wash, Signal Crimson text).
        *   Right: Price highlight (JetBrains Mono '$2.99/mo') + "Get NordVPN - Save 74%" (Primary CTA) + "Read Review" (Secondary CTA).

### Bento Grid Cell
*   **Role**: Unique blocks inside the security features layout.
*   **Details**: 16px radius, White (#ffffff) background, 1px Hairline Slate (#e2e8f0) border, padding 32px.
    *   **Content Variation**: Cell 1 has an interactive encryption tool mockup; Cell 2 features a visual speed map; Cell 3 holds text and a verification seal badge; Cell 4 showcases a global server list count.

### Accordion Row (FAQ)
*   **Role**: Expandable FAQ list.
*   **Details**: Clean rows with a 1px Hairline Slate (#e2e8f0) bottom border, 16px vertical padding. Question uses Plus Jakarta Sans 18px weight 600 Midnight Slate. Answer expands below in Inter 14px Cool Gray.

### Header / Navbar
*   **Role**: Primary navigation header.
*   **Details**: Pure White (#ffffff) background, 72px height, sticky top. Thin bottom border in Hairline Slate. Left: **PrivacyRank** wordmark (Plus Jakarta Sans 20px weight 700 Midnight Slate, accompanied by a geometric cobalt-shield glyph). Center: 5 navigation links (Inter 14px weight 500 Midnight Slate). Right: Blue accent button "Compare Deals".

---

## Do's and Don'ts

### Do
*   **Do** keep the page background at Frost Canvas (#f8fafc) to allow white cards to pop cleanly.
*   **Do** use 8px border-radius consistently on all buttons, input fields, and nested card components (Shape Consistency Lock).
*   **Do** display rating scores using JetBrains Mono (e.g., `9.8/10`) to convey analytical accuracy.
*   **Do** restrict colorful pixels to 5%: 95% of the page is Slate/White/Gray neutrals, keeping Electric Cobalt as the primary decision color.
*   **Do** ensure all text elements pass WCAG AA contrast ratios (4.5:1 for body copy).
*   **Do** keep primary CTAs on a single line at all times (no wrapped text).

### Don't
*   **Don't** use pure black (#000000) for text; always use Midnight Slate (#090d16) to keep the layout feeling premium and soft.
*   **Don't** use generic AI gradients (violet-to-pink or blue-to-purple) on backgrounds or headers.
*   **Don't** mix border radii. If cards are 16px and buttons are 8px, do not introduce a 24px card or a pill button unless it is a Tag/Badge.
*   **Don't** place more than one primary CTA with the same intent on the page. Use secondary/outlined CTAs for auxiliary links.
*   **Don't** stack more than two alternating sections of left-image / right-text splits (No Zigzag Alternation). Break them up with bento columns or stats bands.
*   **Don't** put more than 3 lines of text in quote attribution/body.

---

## Surfaces & Elevation

*   **Surface 0 (Page Canvas)**: `#f8fafc` (Frost Canvas) - Base background.
*   **Surface 1 (Card/Container)**: `#ffffff` (Pure White) - Default surface for comparison blocks, navigation, footer, and active popups.
*   **Surface 2 (Nested Block)**: `#f8fafc` (Frost Canvas) or `#eff6ff` (Ice Wash) - Internal containers within a card (e.g., table headers, pros/cons groups).
*   **Elevation (Shadow - Card)**: `rgba(15, 23, 42, 0.03) 0px 4px 12px -4px, rgba(0, 0, 0, 0.02) 0px 1px 2px 0px`.
*   **Elevation (Shadow - Elevated Card)**: `rgba(15, 23, 42, 0.08) 0px 12px 32px -8px, rgba(0, 0, 0, 0.03) 0px 4px 8px -2px`.

---

## Quick Start (Tokens & Configuration)

### CSS Variables

```css
:root {
  /* Colors */
  --color-midnight-slate: #090d16;
  --color-pure-white: #ffffff;
  --color-frost-canvas: #f8fafc;
  --color-hairline-slate: #e2e8f0;
  --color-cool-gray: #64748b;
  --color-electric-cobalt: #1d4ed8;
  --color-cobalt-glare: #3b82f6;
  --color-ice-wash: #eff6ff;
  --color-cyber-jade: #10b981;
  --color-jade-wash: #ecfdf5;
  --color-signal-crimson: #ef4444;
  --color-crimson-wash: #fef2f2;
  --color-warning-amber: #f59e0b;
  --color-amber-wash: #fffbeb;

  /* Typography Fonts */
  --font-plus-jakarta: 'Plus Jakarta Sans', ui-sans-serif, system-ui, sans-serif;
  --font-inter: 'Inter', ui-sans-serif, system-ui, sans-serif;
  --font-jetbrains-mono: 'JetBrains Mono', ui-monospace, monospace;

  /* Typography Scales */
  --text-caption: 11px;
  --text-badge: 12px;
  --text-body-sm: 14px;
  --text-body: 15px;
  --text-body-lg: 18px;
  --text-subheading: 20px;
  --text-heading-sm: 24px;
  --text-heading: 32px;
  --text-heading-lg: 40px;
  --text-display: 52px;

  /* Borders & Spacing */
  --radius-card: 16px;
  --radius-btn: 8px;
  --radius-input: 8px;
  --radius-badge: 9999px;
  --radius-inner: 8px;

  /* Shadows */
  --shadow-subtle: rgba(15, 23, 42, 0.03) 0px 4px 12px -4px, rgba(0, 0, 0, 0.02) 0px 1px 2px 0px;
  --shadow-floating: rgba(15, 23, 42, 0.08) 0px 12px 32px -8px, rgba(0, 0, 0, 0.03) 0px 4px 8px -2px;
}
```

### Tailwind CSS v4 Theme Config

```css
@theme {
  --color-midnight-slate: #090d16;
  --color-pure-white: #ffffff;
  --color-frost-canvas: #f8fafc;
  --color-hairline-slate: #e2e8f0;
  --color-cool-gray: #64748b;
  --color-electric-cobalt: #1d4ed8;
  --color-cobalt-glare: #3b82f6;
  --color-ice-wash: #eff6ff;
  --color-cyber-jade: #10b981;
  --color-jade-wash: #ecfdf5;
  --color-signal-crimson: #ef4444;
  --color-crimson-wash: #fef2f2;
  --color-warning-amber: #f59e0b;
  --color-amber-wash: #fffbeb;

  --font-plus-jakarta: 'Plus Jakarta Sans', ui-sans-serif, system-ui, sans-serif;
  --font-inter: 'Inter', ui-sans-serif, system-ui, sans-serif;
  --font-jetbrains-mono: 'JetBrains Mono', ui-monospace, monospace;

  --radius-card: 16px;
  --radius-btn: 8px;
  --radius-input: 8px;
  --radius-badge: 9999px;

  --shadow-subtle: rgba(15, 23, 42, 0.03) 0px 4px 12px -4px, rgba(0, 0, 0, 0.02) 0px 1px 2px 0px;
  --shadow-floating: rgba(15, 23, 42, 0.08) 0px 12px 32px -8px, rgba(0, 0, 0, 0.03) 0px 4px 8px -2px;
}
```
