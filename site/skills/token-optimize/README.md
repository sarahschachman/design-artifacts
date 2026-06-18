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

## Token best practices (TL;DR)

Three rules that cover 90% of savings — no skill invocation needed:

1. **Disable design MCPs for code-only work.** figma-console, claude-canvas, and framer add ~25–35k tokens per request when active. Turn them off in Claude Code settings when you're not doing design work.
2. **Start fresh sessions per task.** Long sessions compound context. One focused session per task is cheaper than one sprawling session for everything.
3. **Match the model to the task.** Haiku for lookups/renames, Sonnet for standard dev work, Opus only for complex multi-file reasoning. Opus costs ~5–10× Sonnet.
