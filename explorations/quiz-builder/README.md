# Quiz Builder — design-notebook exploration

A divergent UX exploration of a **Teachable creator's assessment-quiz builder**, used to
pressure-test how far [`DESIGN.md`](../../DESIGN.md) carries on its own. Every screen here is
styled *only* from the tokens/guidelines in `DESIGN.md` — no extra design system — so the
prototype doubles as a test of that file.

**Scenario:** a creator who sells French-learning courses builds a placement quiz that assesses
a learner's French level, captures their email, and recommends the right course.

> Local exploration only — fake data, not deployed. It lives outside `site/`, so it isn't part
> of the Vercel build.

## Run it

```bash
cd explorations/quiz-builder
npm install
npm run dev          # → http://localhost:5173
```

**Navigate:** `←` / `→` move between iterations · **History** (top bar) opens the filmstrip of
all of them · **States** flips the active iteration through its scenarios (empty, mid-build,
published, etc.).

## What's in here

Two divergent groups, explored in sequence:

**Group 1 — the builder shell** (which overall layout?)
- **A · Guided step-rail** — opinionated left rail walks the creator step by step. ✅ *picked.*
- **B · Canvas blocks** — flexible, Notion-ish stack of blocks.
- **C · Builder + live preview** — config left, live learner-facing preview right.

**Group 2 — the scoring model** (how do answers actually produce a course recommendation?),
built on the picked direction A:
- **2a · Points + bands** — each answer is worth points; score bands map ranges → course.
- **2b · Tag to a level** — no math; each answer is tagged to a level, a rule breaks ties.
- **2c · Branching logic** — each answer routes to the next question or jumps to a result.

## Structure

Each iteration is a self-contained folder under `src/iterations/` (`definition.ts`,
`Content.tsx`, `controls.tsx`); they're registered in `src/iterations/index.ts`. The rest of
`src/` is the shared notebook harness — you shouldn't need to touch it.
