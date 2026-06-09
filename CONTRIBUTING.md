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
