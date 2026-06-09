# Contributing to design-artifacts

How we work in this repo once more than one person is editing it.

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
commit on `main`). Set it as the repo default in **Settings → General → Pull
Requests**, and enable "Automatically delete head branches" there too.

## When a PR is non-negotiable vs. nice-to-have

- **Always branch + PR** for the shared, machine-consumed files: anything under
  `docs/context/`, anything under `.claude/`, and `CLAUDE.md`. These are read by
  tooling and by other people's sessions — a second set of eyes prevents broken
  source-of-truth.
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
| `CLAUDE.md` | Convention — Claude Code auto-loads it from root | repo root |
| `DESIGN.md` | Convention — frontend-design tooling scans a fixed path | repo root |
| `CONTRIBUTING.md` | Convention — GitHub surfaces it only from root, `.github/`, or `docs/` | `.github/` |
| `personas.md` | Reference — `CLAUDE.md` points to it; the `persona-panel` agent reads it | `docs/context/` |
| PRDs, specs, vision, brand docs | Reference — humans cite them | the matching `docs/` subfolder |
| Prototypes & presentations (HTML you open/present) | Reference — but also **deployed** to Vercel | `site/prototypes/`, `site/presentations/` |
| `vercel.json`, deploy landing page | Convention — Vercel reads them from the deploy root | inside `site/` |

When adding a file, ask: *does a tool read it by a hardcoded path?* If yes, put it
where the tool looks. If no, file it for humans and add a pointer to it (often a line
in `CLAUDE.md`) so it's discoverable.

**Read vs. run.** Among reference files, mind the kind: `docs/` holds artifacts you
*read* (specs, PRDs, vision, brand, decks — markdown or PDF, doesn't matter), while
`site/` holds artifacts you *run* and *ship* (HTML prototypes and presentations you
open, click, and deploy). Both are peers at the top level; neither belongs at root.
Don't bury a runnable prototype inside the documents tree — and, just as important,
**never put anything internal inside `site/`**: it is the only directory Vercel
serves publicly (see "Deploying" below).

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

## Deploying prototypes & presentations

Prototypes and presentations are deployed to Vercel automatically through the GitHub
integration. You don't run any deploy command.

**The golden rule:** Vercel serves **only the `site/` directory** — that's set as the
project's Root Directory. Nothing outside `site/` is ever uploaded, which is exactly
what keeps internal docs (`personas.md`, `DESIGN.md`, etc.) off the public internet.
So:

- ✅ Anything you put in `site/` (prototypes, presentations, the landing page) becomes
  **publicly reachable by anyone with the link.** Links are unlisted (a random hash)
  but *not* password-protected on our plan — treat `site/` as public.
- 🚫 **Never put anything confidential in `site/`.** No real customer data, no
  unreleased-and-sensitive strategy. Prototypes should use fake/sample data.

**How a deploy happens:**

1. Add or edit a file under `site/` (e.g. `site/prototypes/my-prototype.html`) and add
   a link to it from `site/index.html`.
2. Open a PR. Vercel automatically builds a **preview deployment** and posts its URL as
   a comment — share that link for review.
3. Merge to `main`. Vercel deploys to the **production** URL.

**Only `site/` changes deploy.** The Vercel project has **Skip deployment** enabled
(Settings → Build and Deployment → Root Directory), so a commit that doesn't touch
`site/` produces **no deployment and no preview link** — by design. If you edit
`docs/`, `DESIGN.md`, `CLAUDE.md`, or this file and your PR has no Vercel preview,
that's expected, not a failure. Only changes inside `site/` build and deploy.

**Adding a new prototype/presentation — checklist:**

- [ ] File lives under `site/prototypes/` or `site/presentations/`
- [ ] It contains no confidential data
- [ ] It's linked from `site/index.html`
- [ ] PR opened → grab the preview URL from Vercel's comment to share

Static files need no build config; `site/vercel.json` only sets `cleanUrls` so links
drop the `.html`.
