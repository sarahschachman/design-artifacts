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

### Two kinds of prototype

- **Static HTML** (e.g. the dashboard prototypes) — a self-contained `.html` file
  with inline styles/scripts, in `site/prototypes/`, with `gate.js` in the `<head>`.
  The file you edit *is* the file the browser runs: source = deployed artifact, no
  build step.
- **Built app** (e.g. a Vite design notebook — interactive, multi-direction) — a
  React/TypeScript app. The browser can't run `.tsx` directly, so it's **compiled**:
  source → a minified bundle.

### Where built-app source lives, and why (`prototype-src/`)

A built app is inherently **two things**, and they live in two places:

| | What | Where | Editable? | Served? |
|---|---|---|---|---|
| **Source** | the `.tsx`/config you edit | `prototype-src/<name>/` | ✅ | ❌ (needs compiling) |
| **Build** | the compiled, minified bundle | `site/prototypes/<name>/` | ❌ (machine-generated) | ✅ |

Think of `prototype-src/` as the **`src/`** for these prototypes and
`site/prototypes/<name>/` as their committed **`build/`**. The source lives *outside*
`site/` on purpose:

1. **`site/` is the deploy root** — Vercel serves everything under it. Source/config
   (`.tsx`, `package.json`, `node_modules`) aren't deployable; you don't put the recipe
   inside the served output.
2. **`index.html` collision** — a Vite app needs `index.html` as its *dev entry*
   (points at `/src/main.tsx`); the build *produces* a different `index.html` (points
   at hashed `/assets/…`). They can't both be `site/prototypes/<name>/index.html`, so
   source and build can't share that folder.

**Practical notes:**
- `node_modules/` and `dist/` are gitignored, so git only holds the source + the
  committed build — not the heavy stuff.
- The committed build **doesn't auto-update** — rebuild it when the design changes
  (steps in each project's README, e.g. `prototype-src/quiz-builder/README.md`).
- `gate.js` is injected into the built `index.html` during that copy step.

### Grounding (admin shell + reference screens)

Prototypes of admin UI should sit in the **real Teachable admin chrome**, not a
re-invented one.

- **Admin shell** — [`site/admin-shell/`](site/admin-shell/) is the canonical two-tier
  nav + layout as code (from `mono-frontend/packages/ui`). Static prototypes `<link>`
  `admin-shell.css` and copy the `.app` block from `admin-shell.html`; React notebooks
  port it into an `<AdminShell>` wrapper. Open `admin-shell.html` for the bare chrome.
- **Reference screens** — `docs/screens/` holds screenshots of the real admin. Consult the
  relevant one before composing a full screen so the layout/IA matches reality.
  (`DESIGN.md` stays the source of truth for tokens; the screens ground composition.)

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
