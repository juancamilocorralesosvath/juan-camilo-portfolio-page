# Juan Camilo Corrales Osvath — Personal Portfolio

Single-page portfolio built with Vite + React + TypeScript, implementing **Desktop A** and **Mobile A** from `portfolio-handoff/HANDOFF.md` (the full copy/design spec — see that file for content, tokens, and interaction details). Hero B and the States/System reference boards are explicitly out of scope.

## Commands

```bash
npm install       # install dependencies
npm run dev       # start the dev server with hot reload (http://localhost:5173)
npm run build     # type-check (tsc -b) + production build to dist/
npm run preview   # serve the dist/ build locally to sanity-check it
npm run lint      # run oxlint
```

## Project structure

```
src/
├── assets/images/     # real project assets (copied from portfolio-handoff/assets/)
├── styles/            # reset.css, tokens.css (design tokens), global.css
├── theme/             # ThemeContext — dark/light toggle, persisted in localStorage
├── hooks/             # useMediaQuery, useHoverPreview
├── data/content.ts    # all copy, links and lists, transcribed verbatim from HANDOFF.md
└── components/
    ├── ui/            # Button, Chip, Badge, SectionHeader, ThemeToggle,
    │                  # IndexRow/IndexList/HoverPreviewPanel (desktop hover-preview)
    ├── layout/Nav.tsx
    └── sections/      # Hero, Featured, SelectedWork, Craft, Experience, About, Contact
```

Each section renders one JSX tree; the Desktop A / Mobile A layout switch happens entirely in CSS at a `768px` breakpoint (mobile-first). The two design endpoints to check against are `portfolio-handoff/design-reference/desktop-a-full.png` (1440px) and `mobile-a-full.png` (390px).

## Notes

- "Download CV" links to the English CV (`public/cv/cv-juan-osvath-en.pdf`). The Spanish CV in the repo root is not wired into the site.
- The Selected Work / Craft hover-preview panel is desktop-only, gated on `(hover: hover) and (pointer: fine)` — not on viewport width.
