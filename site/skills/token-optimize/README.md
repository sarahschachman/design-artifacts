# token-optimize — README

A Claude Code skill for reducing token burn across sessions. Covers session auditing, prompt compression, session setup, output reformatting, and model selection.

## When to use it

**Use the skill** (`/token-optimize <mode>`) when:
- Starting a heavy session and want to know what to disable first (`audit`)
- About to send a long, wordy prompt (`compress`)
- Kicking off a big multi-step task and unsure which MCPs to keep on (`session`)
- Got a wall-of-text response and want just the actionable parts (`concise`)
- Unsure whether to use Haiku, Sonnet, or Opus for a task (`model`)

**Skip the skill** and just apply the best practices below when:
- You're doing a quick task — the skill itself costs ~4,000 tokens to load
- You already know which model fits
- The prompt you're writing is short (< 3 sentences)

## Files

- `SKILL.md` — the installable Claude Code skill + token best practices reference

## How to install

Copy the `.claude-plugin` folder structure or drop `SKILL.md` content into your Claude Code skills directory. See `SKILL.md` for full setup instructions.

## Example output

### `/token-optimize model` — picking the right model

```
> /token-optimize model I need to refactor the entire authentication system
  across 15 files to use a new JWT library

## Model Recommendation

**Task:** Refactor the entire authentication system across 15 files to use a new JWT library
**Recommended:** Opus 4.8 (`claude-opus-4-8`)
**Why:** Multi-file refactor with cross-cutting concerns (auth touches session handling,
middleware, API boundaries) benefits from Opus's deeper reasoning — it's less likely to
miss a call site or introduce an inconsistency across 15 files.

**Cost tradeoff:**
- Haiku 4.5   — cheapest, fast, no deep reasoning
- Sonnet 4.6  — best cost/quality for most tasks
- Opus 4.8    — most capable, ~5-10x Sonnet cost  ← recommended here
- Fable 5     — narrative/synthesis, long context

**How to switch:** /model claude-opus-4-8 in Claude Code
```

---

### `/token-optimize compress` — tightening a wordy prompt

```
> /token-optimize compress I was wondering if you could maybe help me figure out
  why the sidebar component isn't rendering correctly on mobile. I think there might
  be some CSS issue but I'm not totally sure. The component is in
  app/components/Sidebar.tsx and the styles are in stylesheets/modules/sidebar.scss
  and it seems like the breakpoint isn't working properly but I could be wrong.

## Compressed Prompt

**Original:** ~88 tokens
**Compressed:** ~52 tokens  (~41% reduction)

---
Sidebar not rendering correctly on mobile. Breakpoint not applying.
Component: `app/components/Sidebar.tsx`, styles: `stylesheets/modules/sidebar.scss`.
---

**What was removed:**
- "I was wondering if you could maybe help me figure out" — filler opener
- "I think there might be some CSS issue but I'm not totally sure" — hedge, symptom
  already described by the breakpoint observation
- "it seems like" / "but I could be wrong" — uncertainty hedges, no information lost
```

---

### `/token-optimize audit` — diagnosing a session

```
> /token-optimize audit

## Token Audit

### MCP Servers (~tokens per request)
| Server        | Category | Est. tokens  | Keep?                         |
|---------------|----------|--------------|-------------------------------|
| figma-console | design   | ~15,000–20,000 | Only for Figma/design tasks |
| claude-canvas | design   | ~5,000–8,000 | Only for Figma plugin work    |
| framer        | design   | ~5,000–8,000 | Only for Framer projects      |
| teachable-mcp | data     | ~500–1,500   | Only for course/user queries  |

Total with all active: ~27,000–40,000 tokens just in tool schemas per request.

### Memory Files (~tokens loaded per session)
| File                        | ~tokens | Relevant today?               |
|-----------------------------|---------|-------------------------------|
| city-whispers-project.md    | ~493    | Only if working on City Whispers |
| city-whispers-design-rules.md | ~391  | Only if working on City Whispers |
| shivani-working-style.md    | ~256    | Always                        |

### Session Health
- Context window: ~65% used
- Compaction risk: medium-high
- Largest read this session: design-notebook.md (355 lines)

### Top 3 actions
1. Disable figma-console, claude-canvas, framer — saves ~28,000–35,000 tokens/request
   for pure code tasks
2. Start a fresh session — context is >65% used, compaction will kick in soon
3. Audit enableAllProjectMcpServers: true in settings.local.json — auto-loads all
   project MCP configs, worth checking what's being pulled in
```

---

### `/token-optimize session` — configuring before a task

```
> /token-optimize session I need to fix a bug in the lesson completion CSV export
  feature — it's a pure backend Ruby on Rails task, no UI changes

## Session Setup for: Fix bug in lesson completion CSV export (pure-code, Rails)

### MCP servers to disable
| Server        | Reason                                              |
|---------------|-----------------------------------------------------|
| figma-console | No design work                                      |
| claude-canvas | No Figma plugin work                                |
| framer        | No Framer work                                      |
| teachable-mcp | No course/user queries needed for a backend bug fix |

### MCP servers to keep
None needed for pure Rails debugging.

### Memory files relevant to this task
- shivani-working-style.md — always relevant

### Model recommendation
Sonnet 4.6 (`claude-sonnet-4-6`) — standard bug fix, well-scoped, no multi-file
architectural reasoning needed.

### Estimated savings
Disabling 4 MCPs saves ~27,000–38,000 tokens per request.
```

---

### `/token-optimize concise` — stripping a verbose response

```
> /token-optimize concise I've gone ahead and looked into the issue you mentioned
  with the sidebar component and I can see what's happening. So essentially what's
  going on is that the breakpoint in sidebar.scss is using a max-width media query
  of 768px but the component itself is actually being rendered inside a container
  that has its own overflow hidden applied to it, which means that the media query
  is technically firing correctly but the visual result isn't what you'd expect
  because the parent container is clipping the content before the styles can take
  effect. In summary, you'll want to either remove the overflow hidden from the
  parent container or switch to using a container query instead of a media query.
  I hope that helps clarify things!

## Concise version (~62% shorter)

`sidebar.scss` breakpoint fires correctly but parent container has `overflow: hidden`,
clipping the result.

**Fix:** Remove `overflow: hidden` from parent, or switch to a container query.

---
**Removed:** 3 sentences of preamble, 1 restatement ("In summary..."),
1 sign-off ("I hope that helps clarify things!")
```

---

### `/token-optimize` (no args) — the menu

```
> /token-optimize

Token Optimize — 5 modes

  audit     Diagnose what's burning tokens in the current session
  compress  Rewrite a prompt to say the same thing in fewer tokens
  session   Configure a new session before you start a task
  concise   Collapse a verbose response to just the actionable parts
  model     Get a model recommendation for a task you're about to run

Usage: /token-optimize <mode>
```

---

## Token best practices

### Session setup

**1. Use Claude Code Projects for repeated work**
Projects persist context (CLAUDE.md, memory, permissions) across sessions without reloading it each time. Create a project per repo or workstream — e.g. one for fedora, one for design-artifacts, one for City Whispers. Claude already knows the codebase and your preferences from the start instead of re-explaining every session.
→ Create via the Projects tab in Claude Code, or `claude --project <name>`.

**2. Start a fresh session per task**
Long sessions compound. Every tool call, file read, and response stays in context until compaction kicks in, which itself costs tokens to summarize. One focused session per task is cheaper and produces sharper results than one sprawling session covering multiple unrelated tasks.

**3. Disable MCPs you don't need**
Every active MCP server adds its full tool schema to every request — even if you never call it. figma-console, claude-canvas, and framer together add ~27,000–38,000 tokens per request. For pure code work, disable all design MCPs in Claude Code settings. Re-enable them only when you switch to design work.

**4. Keep CLAUDE.md files tight**
CLAUDE.md loads automatically on every session in that project. Every line costs tokens forever. Trim it to only what Claude genuinely needs: repo-specific commands, non-obvious conventions, things that would otherwise require re-explaining. Don't put things that are obvious from the code.

---

### Prompting

**5. Reference code by file path, not by quoting it**
Instead of pasting a block of code into your prompt, write `app/components/Sidebar.tsx:42`. Claude already has access to the file — quoting it just doubles the token cost.

**6. Remove filler and hedges from prompts**
Phrases like "I was wondering if you could", "maybe", "I think", "not totally sure" add tokens with no information. State the task directly. Use `/token-optimize compress` to clean up a prompt before sending it.

**7. Be specific about scope upfront**
Vague prompts lead to exploratory responses that read the whole codebase before answering. "Fix the CSV export bug" triggers more file reads than "the bug is in `app/exports/lesson_completion_exporter.rb` — header row is missing when the course has no students." Narrowing scope upfront costs nothing and saves many tool calls.

---

### Model selection

**8. Match the model to the task**

| Task | Model |
|---|---|
| Grep, rename, quick lookup | Haiku 4.5 |
| Bug fix, feature, explanation, review | Sonnet 4.6 |
| Multi-file refactor, architecture | Opus 4.8 |
| Long research, synthesis, design docs | Opus 4.8 or Fable 5 |
| Iterative UI work (many back-and-forths) | Sonnet 4.6 |

Opus costs ~5–10× Sonnet. Reserve it for tasks where deep cross-file reasoning is genuinely needed — not just "this feels complex."

**9. Use Haiku for exploration before committing to a solution**
If you're unsure where a bug lives or how a system works, ask Haiku first. It's fast and cheap for read-only investigation. Switch to Sonnet or Opus once you know exactly what needs to change.

---

### Memory and context

**10. Use memory files for stable facts, not task state**
Memory files load at session start. Put things that are always true: your role, how you like to collaborate, project background. Don't put in-progress task state or things that change week to week — stale memory is worse than no memory.

**11. Audit memory files periodically**
Run `/token-optimize audit` every few weeks. Memory files accumulate — old project context, outdated preferences, and project-specific details you don't need in every session all add up. Delete or archive anything no longer relevant.

**12. Use subagents for large independent tasks**
When a task involves reading many files or running many searches, Claude Code can spawn a subagent to handle it in a separate context window. This keeps your main session lean. Ask Claude to "use an agent" or "delegate this to a subagent" for broad codebase exploration.
