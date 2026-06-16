# AI Tutor Setup — design-notebook exploration

A divergent UX exploration of **setting up an AI tutor (chatbot) in the Teachable admin** —
trained on the creator's own course content. Every screen is styled *only* from
[`DESIGN.md`](../../DESIGN.md), so it doubles as a test of that file.

**Scenario:** a creator who sells French-learning courses sets up an AI tutor (**Madame
Claude**) trained on their courses, so learners can ask questions and get answers drawn —
with citations — from the actual lessons.

> Local exploration only — fake data, not deployed from here. It lives outside `site/`, so
> it isn't part of the Vercel build until a static copy is committed (see below).

## Run it

```bash
cd prototype-src/ai-tutor-setup
npm install
npm run dev          # → http://localhost:5173
```

**Navigate:** `←` / `→` between directions · **History** (top bar) for the filmstrip ·
**States** to flip the active direction through its scenarios.

## The three directions

- **A · Setup + live test chat** — config left (which courses it's trained on, persona &
  rules), a live test chat right where the creator interrogates the tutor against their own
  content, with source citations.
- **B · Guided wizard** — a step-rail (Content sources → Personality → Placement → Publish),
  one focused panel per step, including where the tutor appears for learners.
- **C · Setup → learner view** — compact admin config + a live learner lesson with the tutor
  docked in the sidebar, answering from the course.

## Structure

Each direction is a self-contained folder under `src/iterations/` (`definition.ts`,
`Content.tsx`, `controls.tsx`), registered in `src/iterations/index.ts`. The rest of `src/`
is the shared notebook harness.

## Shared preview link

A static build is committed to `site/prototypes/ai-tutor-setup/` so the design-artifacts
Vercel deploy serves it (gated, password `teachable`) at `…/prototypes/ai-tutor-setup`.

### Updating the shared build

```bash
cd prototype-src/ai-tutor-setup
npm run build                                   # base is baked in via vite.config.ts
rm -rf ../../site/prototypes/ai-tutor-setup
mkdir -p ../../site/prototypes/ai-tutor-setup
cp -r dist/* ../../site/prototypes/ai-tutor-setup/
perl -0pi -e 's#(<head>)#$1\n    <script src="/gate.js"></script>#' \
  ../../site/prototypes/ai-tutor-setup/index.html
```

Then commit `site/prototypes/ai-tutor-setup/` and push.
