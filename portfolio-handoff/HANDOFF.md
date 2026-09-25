# Portfolio — implementation handoff for Claude Code

**Scope of this handoff: Desktop Version A and Mobile Version A only** (the "Hero A" full-page layouts — arch-photo hero, the design's main/default flow). Hero B (the big-type cutout-photo variant) and the States/System reference boards from the design file are **not** in scope here; they exist only as design references for a possible future iteration. Don't build them.

This document has everything needed to hand-code the real site: copy, links, layout structure, design tokens, interaction specs, and the actual image assets (in `assets/`, alongside this file). No placeholder content — every string below is final copy.

**Visual reference**: `design-reference/desktop-a-full.png` and `design-reference/mobile-a-full.png` are full-page screenshots of the actual design (dark theme, default state — no hover, no light mode) at their real dimensions (1440×7350 and 390×10500). Use them to match spacing, proportions and visual style pixel-for-pixel; the prose below describes structure and behavior the screenshots can't show (hover states, the light theme, the theme toggle).

---

## 1. Stack notes

No framework is prescribed. The person's other projects use React / Next.js / TypeScript, so that's a reasonable default, but this doc is framework-agnostic: it describes DOM structure, not JSX. Two real breakpoints only — desktop (design was built at 1440px) and mobile (design was built at 390px, i.e. modern-phone width). A fluid/responsive implementation between those is fine as long as both endpoints match this spec.

Fonts: Google Fonts, loaded via `<link>`:
`https://fonts.googleapis.com/css2?family=Instrument+Sans:wght@400;500;600&family=Instrument+Serif:ital@0;1&display=swap`

---

## 2. Design tokens

### 2.1 Color — dark (default) and light

The site ships with a working light/dark toggle (see §4.1). Implement colors as CSS custom properties so both themes are just a variable swap.

| Token (suggested CSS var) | Dark (default) | Light |
|---|---|---|
| `--bg` | `#14110F` | `#F7F1E6` |
| `--surface` | `#1B1714` | `#FFFFFF` |
| `--surface-2` | `#262019` | `#F0E7D6` |
| `--line` | `#2E2822` | `#E3D8C4` |
| `--line-strong` | `#42392F` | `#CBBA9C` |
| `--text` | `#F2ECE4` | `#1B1714` |
| `--text-2` | `#CFC6BA` | `#4A4136` |
| `--muted` | `#A99F93` | `#7C7161` |
| `--dim` | `#6F675D` | `#A9A08D` |
| `--accent` | `#E9A23B` (fixed — does not change with theme) | `#E9A23B` |

Accent is a single warm saffron used sparingly: primary button fill, the "open to remote" status dot, one italic word per major headline, link hover, current-role marker on the timeline. Never introduce a second accent color.

### 2.2 Typography

Two families only: **Instrument Serif** (400, italic available) for display/headline moments, **Instrument Sans** (400/500/600) for everything else (UI, body, nav, buttons). Fallbacks: `'Iowan Old Style', Georgia, serif` for the serif; `system-ui, -apple-system, 'Segoe UI', sans-serif` for the sans.

| Token | Family | Desktop size / line-height | Mobile size / line-height | Tracking | Used for |
|---|---|---|---|---|---|
| `display-xl` | Serif 400 | 96px / 1.0 | 52px / 1.0 | −2% | Hero name (h1) |
| `display-l` | Serif 400 | 72px / 1.04 | 44px / 1.04 | −2% | Section titles (h2) |
| `display-m` | Serif 400 | 48px / 1.1 | 34px / 1.1 | −1.5% | About title |
| `title` | Serif 400 | 32px / 1.15 | 28px / 1.15 | −1% | Card/role titles (h3) |
| `lead` | Sans 400 | 20px / 1.6 | 18px / 1.6 | 0 | Intro paragraphs |
| `body` | Sans 400 | 16px / 1.65 | 16px / 1.65 | 0 | Card copy, timeline entries |
| `small` | Sans 400 | 14px / 1.55 | 14px / 1.55 | 0 | Nav, footer, meta |
| `label` | Sans 600 | 12px / 1.3 | same | +14%, uppercase | Eyebrow labels ("Selected work", "Craft", etc.) |
| `button` | Sans 600 | 15px / 1 | same | 0 | Button/link labels |

### 2.3 Spacing scale

4, 8, 12, 16, 24, 32, 48, 64, 96, 128, 160 (px). Desktop section padding is 128px top/bottom, 120px sides. Mobile section padding is 88px top/bottom, 24px sides.

### 2.4 Radii

999 (pills/buttons/chips), 32 (featured panel), 28 (project/craft cards, mobile featured panel), 14 (browser-frame screenshots), 12 (mobile icon buttons).

### 2.5 Shadows / depth

Cards and floating elements use a soft, dark, large-blur shadow regardless of theme: `0 28px 56px -20px rgba(0,0,0,.7)` on hover states, `0 40px 80px -24px rgba(0,0,0,.7)` under browser-frame screenshots.

---

## 3. Assets manifest

All files are in `assets/`, already cropped/graded and ready to use as-is (no further editing needed).

| File | Used for | Notes |
|---|---|---|
| `photo-hero.jpg` | Hero A portrait, both desktop and mobile | Real photo, warm-graded, portrait crop. Desktop container ≈460×600 (arch-topped mask, `border-radius: 230px 230px 20px 20px`), mobile ≈332×420 (`border-radius: 166px 166px 18px 18px`). `object-fit: cover; object-position: top center`. Add a subtle bottom gradient overlay: `linear-gradient(180deg, rgba(233,162,59,0) 55%, rgba(20,17,15,.55) 100%)`. |
| `pastoral-logo.png` | PastoralApp brand mark, if used in a badge/chip | Transparent PNG. |
| `pastoral-landing-desktop.jpg` | Featured/PastoralApp section, desktop only | Real screenshot of pastoralapp.io landing page. |
| `pastoral-dashboard-desktop.jpg` | Featured/PastoralApp section, desktop only | Real screenshot of the web dashboard. |
| `pastoral-mobile-home.jpg` | Featured/PastoralApp section, mobile only | Real native-app screenshot ("Mi camino" home). |
| `pastoral-mobile-course.jpg` | Featured/PastoralApp section, mobile only | Real native-app screenshot (course/video screen). |
| `project-gym.jpg` | Selected Work hover-preview, "Gym Management Web App" | Real screenshot of the live app. |
| `project-har.jpg` | Selected Work hover-preview, "Human Activity Recognition" | Real screenshot of the live app. |
| `craft-apple-style.jpg` | Craft hover-preview, "Apple-style product page" | Real screenshot. |
| `craft-coinpulse.jpg` | Craft hover-preview, "CoinPulse" | Real screenshot. |

---

## 4. Global behavior

### 4.1 Theme toggle

A sun/moon icon button sits in the nav (desktop: in the nav bar next to "Contact"; mobile: next to the hamburger menu button). Clicking it toggles a `data-theme="light" | "dark"` attribute (default `dark`) on the root element, which flips all the CSS custom properties in §2.1. Persist the choice in `localStorage` so it survives a reload. No page transition/flash needed beyond a simple CSS transition on `background-color`/`color` (150–250ms ease is enough).

Icon: sun (circle + rays) when in light mode is available to switch back to dark; moon (crescent) when in dark mode. Button: 40×40px circle, `1px solid var(--line-strong)` border, transparent background, icon colored `var(--text)`.

### 4.2 Hover-preview index rows (desktop only — Selected Work + Craft)

On desktop, "Selected Work" and "Craft" are NOT card grids — they're a stacked list of "index rows" (numbered, title, dashed rule, meta, arrow icon), styled like a table of contents. On mouse hover over a row:
- A floating preview panel (420×300px) appears near the cursor, containing the project's screenshot (420×264px, `object-fit: cover; object-position: top center`, in a small browser-chrome frame with 3 dots) and a caption bar below it with the project title + meta.
- The panel follows the cursor with a small offset (`cursor.x + 34px`, vertically centered on cursor y), clamped so it never goes off-screen (16px margin on all sides).
- Fade/scale transition: opacity 0→1 and scale .96→1, ~280ms ease, `pointer-events: none` on the panel so it never blocks clicks.
- Each row itself has a hover state: title/arrow nudge slightly (`translate(4px, -4px)` on the arrow icon), border/accent tint appears, ~400ms cubic-bezier(.2,.7,.2,1).
- The whole row is a real `<a href="...">` (project URL, opens the live site), not a div+onclick.

On **mobile**, skip the floating-preview mechanic entirely — no hover state exists on touch. Just render the same index rows as plain tappable rows (number, title, meta, arrow), each linking out to the project URL. No preview image on mobile.

### 4.3 Accessibility baseline

Real `<button>` / `<a href>` elements only (never `div` + `onClick`). `aria-label` on icon-only buttons (menu button, theme toggle). Minimum 44×44px touch targets on mobile. Maintain contrast: body text is designed for ≥7:1 against its background in both themes — don't substitute lighter grays without rechecking.

---

## 5. Page structure — Desktop A (1440px design width)

Sections in order, each a `<section>`:

### 5.1 Nav (`<header>`, sticky or static — designer used static)
- Left: wordmark "Juan Camilo" + accent-colored period (Serif 400, 26px).
- Right: nav links (Work, Craft, Experience, About — all `#`-anchor links to the matching section id), theme toggle, "Contact" pill button (links to `#contact`).
- Height 96px, `justify-content: space-between`, side padding 120px.

### 5.2 Hero A (`id="top"`, height 960px)
- Full-width flex row, vertically centered, padding-bottom 56px.
- Left column (680px):
  - "Open to remote work" status badge: pill, `1px solid var(--line-strong)`, small accent dot with a soft glow (`box-shadow: 0 0 0 4px accent-at-33%`), text "Open to remote work".
  - H1: "Juan Camilo" / "Corrales Osvath" (two lines, `display-xl`).
  - Role line (italic serif, 34px): "Software Engineer & Product Builder" — the `&` is accent-colored.
  - Position paragraph (`lead`, max-width 540px, color `text-2`):
    > "I take products from zero to production. One is live on Google Play. I also lead teams, negotiate with vendors and manage budgets."
  - "Download CV" primary button (accent fill, ink text) — link to the actual CV file once the person supplies one; placeholder `#` for now.
  - Row of three ghost buttons: Email (`mailto:juancorralesosvath@gmail.com`), LinkedIn (`https://www.linkedin.com/in/juan-osvath-frontend-react-nextjs/`), GitHub (`https://github.com/juancamilocorralesosvath`).
- Right: the hero photo (`photo-hero.jpg`, arch-topped mask, 460×600, offset with a thin accent-tinted outline behind it at +20px/+20px) with a small floating credential card overlapping its bottom-left edge: "ICESI · Cali" (label style) + "Software Engineering. Dean's List every semester." (500 15px sans).

### 5.3 Featured — PastoralApp (`id="featured"`, padding 96px 120px 144px)
- Rounded panel (32px radius), `surface` background, `1px solid line` border, 880px tall, with three faint concentric circle outlines decorating the right side and a soft accent-tinted glow circle behind the screenshots.
- Left (540px): "Featured product" label + "Live on Google Play" badge, "PastoralApp" title (Serif 400, 112px), lead paragraph:
  > "A platform for religious communities to organize their processes and follow the formation of every member."
  Then a definition list:
  - Role — "Co-founder. I built the frontend and the backend, end to end."
  - With my partner — "Brand, logo and business model, defined together."
  - Stack — chips: React, JavaScript, Node.js
  Then "Visit pastoralapp.io" primary button → `https://www.pastoralapp.io/`.
- Right: two overlapping browser-frame screenshots — `pastoral-landing-desktop.jpg` (540px wide, rotated −3°, positioned top-left) and `pastoral-dashboard-desktop.jpg` (540px wide, rotated +2°, positioned lower-right, overlapping the first).

### 5.4 Selected Work (`id="work"`, padding 128px 120px)
- Header: label "Selected work", H2 "Built to be *used*." (the word "used" in accent italic), sub: "Two projects, from the first requirement to a working product. Hover a title to preview it."
- Index rows (see §4.2), in order:
  1. **Gym Management Web App** — meta "Next.js · Zustand · NestJS" — links to `https://gym-mvp-front.vercel.app/` — preview image `project-gym.jpg`.
  2. **Human Activity Recognition** — meta "Label Studio · EDA · validation" — links to `https://har-project-fj2u.onrender.com/` — preview image `project-har.jpg`.

### 5.5 Craft (`id="craft"`, `surface` background with top/bottom hairline borders, padding 128px 120px)
- Header: label "Craft", H2 "Interface *experiments*", sub: "Exercises, not products. I rebuild interfaces I admire to practise the details. Both are live — hover to preview, click to open."
- Index rows:
  1. **Apple-style product page** — meta "tubular-dasik-0cb64e.netlify.app" — links to `https://tubular-dasik-0cb64e.netlify.app/` — preview image `craft-apple-style.jpg`.
  2. **CoinPulse** — meta "coinpulse-sandy.vercel.app" — links to `https://coinpulse-sandy.vercel.app/` — preview image `craft-coinpulse.jpg`.

### 5.6 Experience (`id="experience"`, two-column grid: 360px label column + timeline, padding 128px 120px)
- Header: label "Experience", H2 "Where I've *worked*."
- Vertical timeline (left border rule), three entries, each with a date label, role (h3), company, and bullet lines (rendered as short dash + text, not `<li>` bullets — matches the visual style, but real `<ul>`/`<li>` with custom markers is fine semantically):
  1. **Aug 2025 – Aug 2026 · Junior Software Developer · Adenium CST**
     - Worked in a production codebase under the mentorship of a senior team.
     - Built and refactored components and modules.
     - Fixed bugs reported by QA and wrote unit tests to prevent regressions.
     - Used Git branching and pull requests, and documented what I shipped.
     - Took part in Scrum ceremonies and code reviews.
  2. **Feb 2021 – Aug 2021 · Full-Stack Developer · DataHome**
     - Built frontend in React and TypeScript and endpoints in Python, with a remote team.
     - Improved the UI/UX of 3 key modules.
     - Delivered 10 features and refactored legacy code.
  3. **2025 – Present · Leader · University Catholic Movement** *(current — this entry's timeline dot is accent-colored, the other two are neutral)*
     - Lead a university group for a year and direct its work teams.
     - Plan and run retreats and events for 50–100 people.
     - Negotiate with venue providers and control budgets and costs.

### 5.7 About + Stack (`id="about"`, two-column grid, padding 128px 120px)
- Left: label "About", H2 "Clean code, *shipped*.", two paragraphs:
  > "I'm a Software Engineering student at ICESI in Cali, and I've made the Dean's List every semester. I care about code that reads well: Clean Code and SOLID are how I work, not items on a checklist. I also care about what the code is for. I took my own product from zero to Google Play, and I've worked inside a production codebase under a senior team."

  > "Away from the editor, I lead a university group. I direct teams, plan events for up to 100 people, negotiate with vendors and answer for the budget. It taught me ownership, and I bring it to every project."

  Then an "Education" row: "B.Sc. Software Engineering, ICESI. Dean's List every semester."
- Right: label "Stack", grouped rows of chips:
  - Languages — JavaScript, TypeScript, Python, Java, Scala
  - Backend — Node.js, NestJS, REST APIs, ORMs
  - Frontend — React, Next.js
  - Data — PostgreSQL, MongoDB, SQL
  - Tools — Git/GitHub, Docker, Postman, Unit testing, Agile/Scrum
  - Spoken — Spanish (native), English (C2)

### 5.8 Contact / Footer (`id="contact"`, padding 128px 120px 0, flex column filling remaining height)
- Label "Contact", H2 "Have a role in mind? *Let's talk.*"
- Large email link (Serif italic, 44px): `juancorralesosvath@gmail.com` with an arrow icon, underlined with a faint accent rule.
- Buttons: "Download CV" (primary), LinkedIn, GitHub (ghost).
- Right-aligned availability block: label "Availability", "Cali, Colombia", note: "Open to remote work. I'm on GMT-5, so my day lines up with US hours and overlaps with Europe's afternoon."
- Footer bar (top hairline border): "© 2026 Juan Camilo Corrales Osvath" + "Back to top" link (→ `#top`) with an up-arrow icon.

---

## 6. Page structure — Mobile A (390px design width)

Same sections, same order, same copy as desktop — only layout changes:

- **Nav**: 64px header, wordmark left, theme toggle + hamburger menu button right (menu behavior/drawer content wasn't specced further — a simple slide-down or off-canvas menu with the same links is fine).
- **Hero**: badge, then stacked H1, then italic role line, then the photo card (332×420, same arch mask, credential card overlapping bottom-left), then the position paragraph, then a full-width "Download CV" button, then a 3-column grid of Email/LinkedIn/GitHub pill buttons.
- **Featured/PastoralApp**: single rounded panel (28px radius) with badge, title (60px), lead paragraph, definition rows (stacked label-over-value instead of two-column), full-width CTA button, then the two mobile app screenshots (`pastoral-mobile-home.jpg`, `pastoral-mobile-course.jpg`) as overlapping phone-bezel mockups (190×396, offset diagonally) below the text — not the desktop web screenshots.
- **Selected Work / Craft**: plain tappable index rows, no hover-preview (see §4.2). Same copy, same links, same images available as `<img>` thumbnails if you want a compact inline preview per row (optional — the original design omits an inline image on mobile and relies on the row link alone; either is acceptable).
- **Experience / About+Stack**: single column, stacked (label block, then content block), same copy as desktop.
- **Contact**: stacked layout — label, heading, email link, full-width Download CV button, 2-column LinkedIn/GitHub row, availability block, footer bar.

---

## 7. Content quick-reference (all final strings)

- Email: `juancorralesosvath@gmail.com`
- LinkedIn: `https://www.linkedin.com/in/juan-osvath-frontend-react-nextjs/`
- GitHub: `https://github.com/juancamilocorralesosvath`
- PastoralApp: `https://www.pastoralapp.io/`
- Gym Management Web App: `https://gym-mvp-front.vercel.app/`
- Human Activity Recognition: `https://har-project-fj2u.onrender.com/`
- Apple-style product page: `https://tubular-dasik-0cb64e.netlify.app/`
- CoinPulse: `https://coinpulse-sandy.vercel.app/`
- Location line: "Cali, Colombia" / "Open to remote work. I'm on GMT-5, so my day lines up with US hours and overlaps with Europe's afternoon."
- Footer: "© 2026 Juan Camilo Corrales Osvath"

"Download CV" currently links to `#` — swap in the real CV file URL when available.

---

## 8. Explicitly out of scope for this pass

- Hero B (large-type, cutout-photo variant) — reference only, not built.
- The States/System documentation boards — reference only, informed the tokens above but shouldn't be built as pages.
- Any content beyond what's listed here (no new sections, no copy changes) without checking back with the person first.
