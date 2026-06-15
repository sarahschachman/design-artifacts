# design-artifacts

Internal design prototypes, presentations, and the `DESIGN.md` design system —
served as a static site from `site/` on Vercel (gated by `gate.js`).

## Adding a prototype

Put it under `site/prototypes/`, then **add a card to the Prototypes section of
`site/index.html` in the same branch**.

This matters: the Vercel PR preview comment only links to the site **index** (the
deploy root), never directly to your prototype. So the index card is what makes a
new prototype reachable from the preview *before* it's merged — without it, the
preview link just lands on an index that doesn't mention your work.

See `AGENTS.md` → **Prototypes** for the full conventions (owner pills, the
`gate.js` deterrent, and how to ship a built app like a Vite design notebook as a
static prototype).
