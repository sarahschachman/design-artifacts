# Reference screens

Screenshots of the **real, currently-shipped Teachable admin** — ground-truth reference so
prototypes are built from reality, not just from `DESIGN.md`. This is *source knowledge*
(like `docs/context/personas.md`), distinct from the deployed prototypes in `site/`.

Pairs with the reusable chrome in [`site/admin-shell/`](../../site/admin-shell/): the shell is
the nav/layout *as code*; these screenshots are full-screen *compositions* the shell and
`DESIGN.md` can't capture.

## How agents should use this

Before composing a full admin screen, **Read the specific relevant screenshot here** and match
its real layout, information architecture, and patterns. `DESIGN.md` stays the source of truth
for tokens; these screens ground composition. (This is wired into `AGENTS.md`.)

## How to add a screen

1. Drop a PNG in this folder, named for the screen: `dashboard-home.png`, `course-editor.png`.
2. Add a row to the table below — **name · route · what it shows · date captured**.
3. **Scrub real data first.** No real customer names, emails, revenue, or PII — use a demo
   account. This repo is gated, but treat screenshots as if they could leak.

## Caveats

- These **go stale** as the product changes. The `date` column is how we tell. Treat them as
  *approximate* reference; when one looks dated, recapture it. `DESIGN.md` + `site/admin-shell/`
  are the maintained truth.
- Screenshots are *visual* reference — an agent infers from them, it can't pixel-copy. Anything
  that must be exact (the nav chrome) lives in `site/admin-shell/` as code.

## Index

_Empty for now — capture the high-leverage screens first and list them here._

| Screen | Route | Shows | Captured |
|--------|-------|-------|----------|
| _Dashboard home_ | `/admin/dashboard` | Default landing — nav, page header, key stats | _TODO_ |
| _Course editor_ | `/admin/courses/:id` | Curriculum builder layout | _TODO_ |
| _Students / Users_ | `/admin/users` | List/table page pattern | _TODO_ |
| _Settings_ | `/admin/settings` | Settings page pattern | _TODO_ |
