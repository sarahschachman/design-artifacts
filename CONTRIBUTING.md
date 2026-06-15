# Contributing

Internal repo — design prototypes, presentations, and the `DESIGN.md` design
system, served as a static site from `site/` on Vercel (gated by `gate.js`).

## Adding a prototype

1. Put the prototype under `site/prototypes/`.
2. **Add a card for it to the Prototypes section of `site/index.html` — in the
   same branch.**

Step 2 is the part that's easy to forget, and the reason this doc exists: the
Vercel PR preview comment only links to the site **index** (the deploy root,
`site/`), never directly to your prototype. The index card is what makes a new
prototype reachable from the preview *before* it's merged. Without it, the
preview link just lands on an index that doesn't mention your work.

### The index card

Copy an existing `<a class="card">` in the Prototypes grid and set:

- `href` → the path under `prototypes/` (e.g. `prototypes/quiz-builder`)
- `data-owner="<creator first name>"` → the pill color is auto-assigned
- a one-line description of what it is

### Static HTML vs a built app

- **Static HTML prototype:** a self-contained `.html` (or folder) in
  `site/prototypes/`, with `gate.js` referenced in the `<head>`.
- **Built app** (e.g. a Vite design notebook): keep the source *outside* `site/`
  (e.g. `explorations/<name>/`) and commit a **static build** into
  `site/prototypes/<name>/`, with `gate.js` injected into the built `index.html`.
  The static copy doesn't auto-update — rebuild it when the design changes. See
  the project's own README for build steps
  (e.g. `explorations/quiz-builder/README.md`).

### Fonts

Prototypes default to the brand display serif **Reckless** and fall back to
**Fraunces** for anyone who doesn't have Reckless installed locally (most
designers do). Use `DESIGN.md`'s display stack verbatim for headings:

```
'Reckless-Light', 'Reckless', 'Fraunces', Palatino, Garamond, Georgia, serif
```

Reckless is licensed and has no free webfont, so **load Fraunces as a webfont**
(e.g. Google Fonts) — that's the guaranteed fallback. Don't load Reckless; it
renders from each viewer's local install. See `DESIGN.md` → Typography.

### Ground rules

- Everything in `site/` is **fake-data only**. `gate.js` (password `teachable`)
  is a deterrent, not real security.
- Reference `DESIGN.md` for all UI — see `AGENTS.md`.
