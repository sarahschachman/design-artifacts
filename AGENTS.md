# Design Artifacts Agent Instructions

## Design System

**CRITICAL: When creating ANY UI components, screens, or visual elements, you MUST reference `DESIGN.md` first.**

The Teachable Design System specification lives in `DESIGN.md` (root of this repository). This file contains:
- Design tokens (colors, typography, spacing, rounding)
- Component definitions and patterns
- Design philosophy and rationale
- Brand guidelines and usage rules

**Before generating any UI code:**
1. Read `DESIGN.md` to understand the design system
2. Use the exact color values, typography scales, and spacing tokens defined there
3. Follow the component patterns and design guidelines
4. Maintain consistency with the Teachable brand (Teachable Lemon #E6FF32, Obsidian text, etc.)

**Never:**
- Invent new colors, font sizes, or spacing values
- Create components that contradict the design system
- Use arbitrary values when design tokens exist

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
  (e.g. `explorations/<name>/`) and commit a **static build** into
  `site/prototypes/<name>/`; see that project's README for the build + gate steps.
  The static copy does not auto-update — rebuild it when the design changes.
- Everything in `site/` is fake-data only. `gate.js` (password `teachable`) is a
  deterrent, not real security.

## User Personas

User personas live in `docs/context/personas.md`. Read that file before any
user-facing design work (PRDs, vision, specs, copy, flows, prototypes). Don't
restate personas from memory — cite the file.

The three primary focus personas are **the Knowledge Business**, **the Service
Amplifier**, and **the Program Distributor**. The Course Curious and the Audience
Builder are documented but are *not* current focus areas.

To role-play a design against personas, use the `persona-panel` agent.
