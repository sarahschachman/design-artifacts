# Contributing to design-artifacts

How we work in this repo once more than one person is editing it.

Internal repo — design prototypes, presentations, custom skills, and the
`DESIGN.md` design system, served as a static site from `site/` on Vercel (gated
by `gate.js`). Reference `DESIGN.md` for all UI — see `AGENTS.md`.

## The one rule

**`main` is always good and shareable. Never put work-in-progress on it.**

This matters more here than in most design repos because `main` is *live
infrastructure*, not just a folder of files. `CLAUDE.md`, `docs/context/personas.md`,
and everything under `.claude/` are read automatically by everyone's Claude sessions.
A half-finished edit on `main` becomes broken source-of-truth for the whole team's
tooling the moment it's pushed. Keep unfinished work on a branch until it's done.

## The workflow (GitHub Flow)

Every change is a short-lived branch that becomes a pull request.

```bash
# 1. Start from an up-to-date main
git checkout main
git pull

# 2. Branch for your change
git checkout -b sarah/refine-personas

# 3. Do the work, then commit (commit early and often — these are local)
git add -A
git commit -m "Refine Service Amplifier section"

# 4. Push the branch to GitHub
git push -u origin sarah/refine-personas

# 5. Open a pull request (a request to merge your branch into main)
gh pr create --fill        # or open the link GitHub prints after the push

# 6. After it's reviewed and merged on GitHub, clean up
git checkout main
git pull
git branch -d sarah/refine-personas
```

A **pull request** is a request to merge your branch into `main`. It gives the team
a place to see the diff, comment, and approve *before* the change lands. The merge is
the action; the PR is the reviewable wrapper around it.

## How to merge: Squash and merge

When you merge a PR on GitHub, use **Squash and merge**. It collapses the branch into
a single clean commit on `main`, so the history stays one-entry-per-change even if the
branch had messy work-in-progress commits (`wip`, `fix typo`, …). Prefer it over
"Create a merge commit" (adds graph noise) and "Rebase and merge" (lands every WIP
commit on `main`). It's the repo default, and head branches auto-delete on merge.

## When a PR is non-negotiable vs. nice-to-have

- **Always branch + PR** for the shared, machine-consumed files: anything under
  `docs/context/`, anything under `.claude/`, `CLAUDE.md`, `AGENTS.md`, and `DESIGN.md`.
  These are read by tooling and by other people's sessions — a second set of eyes
  prevents broken source-of-truth.
- **Lighter touch is fine** for fully independent additions (you add a deck, someone
  else adds a JTBD doc — different files, no overlap). A PR is still encouraged for
  visibility, but the coordination risk is low.

When in doubt, branch. "Always branch" is simpler to remember than "branch sometimes."

## Where files live

Placement follows one question: **is the file *discovered by convention* or *reached
by reference*?**

- **Discovered by convention** — a tool or platform looks for it at a fixed path you
  can't configure. Move it and it silently breaks. Put it exactly where its consumer
  expects.
- **Reached by reference** — a pointer, link, or person leads to it; nothing hardcodes
  its path. File it wherever makes semantic sense for humans, and add the pointer.

| File | Found by | Lives at |
| --- | --- | --- |
| `CLAUDE.md` / `AGENTS.md` | Convention — auto-loaded by AI tools from root | repo root |
| `DESIGN.md` | Convention — frontend-design tooling scans a fixed path | repo root |
| `CONTRIBUTING.md` | Convention — GitHub surfaces it from root, `.github/`, or `docs/` | **repo root** (kept here on purpose — it's where people and tools look, so it doesn't get accidentally re-created elsewhere) |
| `personas.md` | Reference — `CLAUDE.md`/`AGENTS.md` point to it; the `persona-panel` agent reads it | `docs/context/` |
| PRDs, specs, vision, brand docs | Reference — humans cite them | the matching `docs/` subfolder |
| Prototypes & presentations (HTML you open/present) | Reference — but also **deployed** to Vercel | `site/prototypes/`, `site/presentations/` |
| Built-app prototype source (`.tsx`, config) | Reference — compiled *into* `site/`, not served itself | `prototype-src/<name>/` |
| Skills (downloadable) | Reference — source + generated `.zip`, shipped via the site | `site/skills/<name>/` |
| `vercel.json`, deploy landing page | Convention — Vercel reads them from the deploy root | inside `site/` |

When adding a file, ask: *does a tool read it by a hardcoded path?* If yes, put it
where the tool looks. If no, file it for humans and add a pointer to it (often a line
in `CLAUDE.md`/`AGENTS.md`) so it's discoverable.

**Read vs. run.** Among reference files, mind the kind: `docs/` holds artifacts you
*read* (specs, PRDs, vision, brand, decks — markdown or PDF, doesn't matter), while
`site/` holds artifacts you *run* and *ship* (HTML prototypes, presentations, and
downloadable skills). Both are peers at the top level; neither belongs at root. Don't
bury a runnable prototype in the documents tree — and, just as important, **never put
anything internal inside `site/`**: it is the only directory Vercel serves publicly,
and the gate is only a deterrent (see "Deploying" below).

## Adding a prototype

1. Put the prototype under `site/prototypes/`.
2. **Add a card for it to the Prototypes section of `site/index.html` — in the
   same branch.**

Step 2 is the part that's easy to forget: the Vercel PR preview comment only links to
the site **index** (the deploy root, `site/`), never directly to your prototype. The
index card is what makes a new prototype reachable from the preview *before* it's
merged. Without it, the preview link just lands on an index that doesn't mention your
work.

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
  The CSS shell is **responsive** — below 768px the nav collapses to a hamburger drawer
  (matches `docs/screens/*-mobile.png`); copying the `.app` block + the small toggle
  script from `admin-shell.html` gets that for free.
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

## Adding a skill

Skills are custom Claude skills designers can download and install from the site's
**Skills** section.

1. Put the skill folder at `site/skills/<name>/` (its `SKILL.md` + any supporting
   files). It's reviewable in the PR.
2. Generate the downloadable zip from that folder:
   ```bash
   cd site/skills && zip -r <name>.zip <name> -x '*.DS_Store'
   ```
3. Add a `.skill-card` to the **Skills** section of `site/index.html` (copy an existing
   one): set the title, description, `data-owner`, the **Download** `href` to
   `skills/<name>.zip`, and the **View on GitHub** `href` to that skill's `SKILL.md`.
4. Open a PR.

**Don't publish internal skills here.** The site is a deterrent-gated *public* channel
and the repo is public, so any skill carrying internal infra IDs, queries, customer
data, or proprietary methodology does **not** belong here — keep those in a private
channel.

## Deploying prototypes, presentations & skills

Everything under `site/` deploys to Vercel automatically through the GitHub
integration. You don't run any deploy command.

**The golden rule:** Vercel serves **only the `site/` directory** — that's set as the
project's Root Directory. Nothing outside `site/` is ever uploaded, which keeps internal
docs (`personas.md`, `DESIGN.md`, etc.) off the public internet. So:

- 🔑 There's a **light client-side password gate** (`site/gate.js`, password `teachable`):
  each page loads it via `<script src="…/gate.js"></script>` and shows a password box
  before revealing content. It's a **deterrent, not security** — the password is in the
  JS and anyone can bypass it (view source, disable JS, fetch the file directly). Note
  the repo is public too, so the gate protects nothing on GitHub.
- 🚫 **Treat `site/` as effectively public — keep it fake-data only.** No real customer
  data, no unreleased-and-sensitive strategy. The gate just keeps casual visitors out.

**How a deploy happens:**

1. Add or edit a file under `site/` and link it from `site/index.html`.
2. Open a PR. Vercel automatically builds a **preview deployment** and posts its URL as
   a comment — share that link for review.
3. Merge to `main`. Vercel deploys to the **production** URL.

**Only `site/` changes deploy.** The Vercel project has **Skip deployment** enabled
(Settings → Build and Deployment → Root Directory), so a commit that doesn't touch
`site/` produces **no deployment and no preview link** — by design. If you edit
`docs/`, `DESIGN.md`, `CLAUDE.md`, or this file and your PR has no Vercel preview,
that's expected, not a failure.

**Adding something to the site — checklist:**

- [ ] Lives under `site/` (`site/prototypes/`, `site/presentations/`, or `site/skills/`)
- [ ] Contains no confidential data
- [ ] Linked from `site/index.html` (prototype/presentation card, or skill card)
- [ ] HTML pages load the password gate: `<script src="../gate.js"></script>` in the `<head>` (adjust the relative path to reach `site/gate.js`)
- [ ] Skills only: `.zip` regenerated from the source folder
- [ ] PR opened → grab the preview URL from Vercel's comment to share

Static files need no build config; `site/vercel.json` only sets `cleanUrls` so links
drop the `.html`.

## Branch naming

`<your-name>/<short-description>`, kebab-case. Examples:

- `sarah/refine-personas`
- `marcus/add-q3-vision-deck`
- `priya/fix-dashboard-spacing`

## Commit messages

- Summary line in the imperative ("Add…", "Refine…", "Fix…"), ~50 chars.
- Add a body when the *why* isn't obvious from the diff.
- Reference the source when you're importing facts (e.g. a Confluence page or a
  conversation with another team), so the provenance is traceable later.

## Keeping a branch up to date

If `main` moves while you're working and you need its latest changes:

```bash
git checkout main && git pull
git checkout your-branch
git merge main        # or: git rebase main, if you prefer linear history
```

Resolve any conflicts, commit, and push. Then your PR reflects the merge cleanly.
