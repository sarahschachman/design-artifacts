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

## Token best practices (TL;DR)

Three rules that cover 90% of savings — no skill invocation needed:

1. **Disable design MCPs for code-only work.** figma-console, claude-canvas, and framer add ~25–35k tokens per request when active. Turn them off in Claude Code settings when you're not doing design work.
2. **Start fresh sessions per task.** Long sessions compound context. One focused session per task is cheaper than one sprawling session for everything.
3. **Match the model to the task.** Haiku for lookups/renames, Sonnet for standard dev work, Opus only for complex multi-file reasoning. Opus costs ~5–10× Sonnet.
