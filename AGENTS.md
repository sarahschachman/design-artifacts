# Design Artifacts Agent Instructions

## Design System

**CRITICAL: When creating ANY UI components, screens, or visual elements, you MUST reference `DESIGN.md` first.**

`DESIGN.md` (repo root) is the **single source of truth** for the design system —
its name, design tokens (colors, typography, spacing, rounding), component
patterns, brand guidelines, and the rationale behind them.

Read those facts *from* `DESIGN.md` — don't restate brand values (color hexes,
the system's name, etc.) here or anywhere else. Duplicating them just creates
copies that drift out of date.

**Before generating any UI code:**
1. Read `DESIGN.md` and use its exact color values, typography scales, spacing
   tokens, and component patterns.
2. Follow its brand guidelines and usage rules.

**Never:**
- Invent colors, font sizes, or spacing values, or use arbitrary values when a
  token exists in `DESIGN.md`.
- Create components that contradict `DESIGN.md`.

## Prototypes

Full contributor guide: **`CONTRIBUTING.md`**. Key points for agents:

Prototypes live under `site/prototypes/` and are linked from the **Prototypes**
section of `site/index.html`.

**Always add the index card in the same branch/PR that adds the prototype.**
Vercel's preview comment can only link to the deploy root (`site/`, the project's
Root Directory), so the index is the only way a prototype is reachable from the PR
preview *before* merge. A prototype with no index card is effectively invisible in
review — the preview link just lands on an index that doesn't mention it.

Each card (copy an existing `<a class="card">` in the Prototypes grid):
- `href` → the prototype path under `prototypes/` (e.g. `prototypes/quiz-builder`)
- `data-owner="<creator first name>"` → pill color is auto-assigned
- a one-line description of what it is

Conventions:
- **Static HTML prototype:** a self-contained `.html` (or folder) in
  `site/prototypes/`, with `gate.js` referenced in the `<head>`.
- **Built app** (e.g. a Vite design notebook): keep the source *outside* `site/`
  (e.g. `prototype-src/<name>/`) and commit a **static build** into
  `site/prototypes/<name>/`; see that project's README for the build + gate steps.
  The static copy does not auto-update — rebuild it when the design changes.
- Everything in `site/` is fake-data only. `gate.js` (password `teachable`) is a
  deterrent, not real security.

### Grounding: admin shell & reference screens

Prototypes of admin UI should sit in the **real admin chrome**, not a re-invented
one:

- **Admin shell** — `site/admin-shell/` is the canonical Teachable two-tier nav +
  layout, as code (transcribed from `mono-frontend/packages/ui`). Static prototypes
  `<link>` `admin-shell.css` and copy the `.app` block from `admin-shell.html`;
  React notebooks port it into an `<AdminShell>` wrapper. Open `admin-shell.html`
  to see the bare chrome.
- **Reference screens** — before composing a full admin screen, **Read the specific
  relevant screenshot in `docs/screens/`** and match the real layout/IA. (Source
  knowledge, like personas — `DESIGN.md` stays normative for tokens; the screens
  ground composition.) They may lag the live product — see `docs/screens/README.md`.

## User Personas

User personas live in `docs/context/personas.md`. Read that file before any
user-facing design work (PRDs, vision, specs, copy, flows, prototypes). Don't
restate personas from memory — cite the file.

The three primary focus personas are **the Knowledge Business**, **the Service
Amplifier**, and **the Program Distributor**. The Course Curious and the Audience
Builder are documented but are *not* current focus areas.

To role-play a design against personas, use the `persona-panel` agent.

## Recommended tools

Recommended skills, plugins, and MCPs for design work live in
`docs/recommended-tools.md` (General / Design / Research). Consult it when picking
tools — and when a relevant one isn't installed, suggest it to the user rather than
reinventing the capability.
