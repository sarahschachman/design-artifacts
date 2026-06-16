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

Real captures from the Teachable admin (`sarah-schachman-s-school`), 2026-06-15.

### Desktop

| File | Route | Shows |
|------|-------|-------|
| `admin-home.png` | `/admin-app/home` | Dashboard landing — stats overview, "continue where you left off", setup checklist, tips, right-side live-feed rail |
| `courses-list.png` | `/admin-app/courses` | All-courses index |
| `course-create-step1.png` | `/admin-app/create/courses/step-1` | New-course creation flow, step 1 |
| `course-setup.png` | `/admin-app/courses/:id/setup` | Single-course setup/overview |
| `course-curriculum.png` | `/admin-app/courses/:id/curriculum` | Curriculum builder — sections & lessons |
| `lesson-editor.png` | `/admin-app/courses/:id/curriculum/lessons/:lessonId` | Lesson editor |
| `upsell-funnel.png` | `/admin-app/courses/:id/upsell/funnel` | Upsell / order-bump funnel config |
| `apps.png` | `/admin-app/apps` | Apps directory (where an AI Tutor app would live) |
| `students-list.png` | `/admin-app/users/students` | Students list — table page pattern (search, saved filters, sortable columns) |

### Mobile (iPhone 12 Pro)

| File | Route | Shows |
|------|-------|-------|
| `upsell-funnel-mobile.png` | `/admin-app/courses/:id/upsell/funnel` | **Mobile nav pattern** — hamburger (☰) opens the nav as a full-height dark two-tier drawer (icon rail + section panel) overlaying content |
| `students-list-mobile.png` | `/admin-app/users/students` | Same mobile nav drawer, over the students list |

> **Top bar:** the slim top bar (school switcher, notifications) is **Home-only** — it shows
> on `admin-home.png` but not the other screens, so it's a page-level element, not global
> chrome. The shell's nav is the global chrome.
>
> _Captures are from a personal **test/demo school** — no real student data._
