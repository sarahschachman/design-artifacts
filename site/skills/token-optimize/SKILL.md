# token-optimize

A five-mode skill for reducing token burn in Claude Code sessions. Install once, reach for specific modes when they earn their cost.

---

## Installation

1. Copy the plugin directory to `~/.claude/plugins/cache/local/token-optimize/1.0.0/`
2. Add to `~/.claude/plugins/installed_plugins.json`:
```json
"token-optimize@local": [{
  "scope": "user",
  "installPath": "~/.claude/plugins/cache/local/token-optimize/1.0.0",
  "version": "1.0.0",
  "installedAt": "<date>",
  "lastUpdated": "<date>",
  "gitCommitSha": "local"
}]
```
3. Add to `~/.claude/settings.json` under `enabledPlugins`: `"token-optimize@local": true`
4. The plugin directory needs:
   - `.claude-plugin/plugin.json` with `"name": "token-optimize"`
   - `commands/token-optimize.md` with the skill content below
   - `README.md`

---

## Token best practices

Apply these directly — no skill invocation needed for routine work.

### The big three

**1. Disable design MCPs for code-only work**
figma-console, claude-canvas, and framer add ~25–35k tokens *per request* when active. That's the single largest lever. Turn them off in Claude Code settings whenever you're not doing Figma/design work.

**2. Start fresh sessions per task**
Long sessions compound. Each tool call, file read, and response stays in context until compaction. One focused session per task is cheaper and produces better results than one sprawling session.

**3. Match the model to the task**

| Task | Model | Why |
|---|---|---|
| Grep, rename, quick lookup | Haiku 4.5 | Fast, cheap, no reasoning needed |
| Bug fix, feature, explanation, review | Sonnet 4.6 | Best cost/quality ratio |
| Multi-file refactor, architecture | Opus 4.8 | Worth it for deep reasoning |
| Long research, synthesis, design docs | Opus 4.8 / Fable 5 | Heavy context handling |
| Iterative UI work (many rounds) | Sonnet 4.6 | Many round-trips, keep cost low |

### Secondary habits

- **Don't quote code in prompts** — reference it as `file:line` instead. Claude already has the file.
- **Trim CLAUDE.md files** — they load on every session. Every line costs tokens forever.
- **Avoid `enableAllProjectMcpServers: true`** in settings unless you need it — it auto-loads every project-level MCP config.

---

## Modes

Invoke as `/token-optimize <mode>`. Each mode costs ~4,000 tokens to load — use them for tasks where the savings justify it.

### `audit` — diagnose a running session
Reads active MCP servers and memory files, estimates token cost of each, gives top 3 cut recommendations. **Worth running once at the start of a heavy session.**

### `compress` — shrink a prompt before sending
Takes your draft prompt and rewrites it to the same intent at 30–50% fewer tokens. Shows original vs. compressed with a diff of what was removed. **Only worth it for prompts > ~5 sentences.**

### `session` — configure before a big task
Describe the task you're about to do. Returns: which MCPs to disable, which memory files are relevant, model recommendation, and estimated token savings. **Best used before multi-step agentic tasks.**

### `concise` — strip a verbose response
Paste a long Claude response and get back just decisions, next steps, file paths, and commands — no preamble, no hedging, no restatements. **Use after `/deep-research` or long code reviews.**

### `model` — get a model recommendation
Describe a task in 1–2 sentences, get back the right model with cost tradeoff. **Use when you're unsure whether a task warrants Opus.**

---

## Skill instructions (command file content)

The following is the content of `commands/token-optimize.md` — the actual instructions Claude executes:

```markdown
---
description: Optimize token usage — audit context, compress prompts, configure sessions, recommend models, or reformat verbose output.
argument-hint: "[audit|compress|session|concise|model]"
---
# /token-optimize

Check args to determine mode. If no args or unrecognized arg, print the menu and stop.

Menu:
  audit     Diagnose what's burning tokens in the current session
  compress  Rewrite a prompt to say the same thing in fewer tokens
  session   Configure a new session before you start a task
  concise   Collapse a verbose response to just the actionable parts
  model     Get a model recommendation for a task you're about to run

Usage: /token-optimize <mode>

## audit
Read ~/.claude/settings.local.json. List every MCP server. Estimate tokens:
- Small (1–5 tools): ~500–1,500/request
- Medium (10–30 tools): ~3,000–8,000/request
- Large (50+ tools): ~10,000–20,000/request

Read ~/.claude/memory/MEMORY.md. For each linked file, measure chars ÷ 4 = ~tokens.

Output a table: source → est. tokens → recommendation. End with top 3 actions.

## compress
Input: everything in args after "compress".
Remove: filler openers, uncertainty hedges, prose that can be bullets, quoted code (replace with file:line), restatements of what Claude knows.
Output: original ~tokens, compressed ~tokens, % reduction, compressed version, what was removed.
If <20% compressible, say so and return unchanged.

## session
If no task in args, ask: "What task are you about to do? 1–2 sentences."
Classify: pure-code / design / data / research / mixed.
Output: MCPs to disable, MCPs to keep, relevant memory files, model recommendation, estimated savings.
Heuristics: figma/canvas/framer → design only; teachable-mcp → data only; pure-code → disable all non-code MCPs.

## concise
Input: everything after "concise", or ask user to paste.
Remove: "Let me explain", "Great question", "As I mentioned", "In summary", trailing restatements, preamble.
Keep: decisions, code changes, next steps, blockers, file paths, commands.
Convert prose lists to bullets.
Output: condensed version + count of what was removed.

## model
Input: task description in args, or ask for it.
Match against: grep/rename/lookup → Haiku; bug fix/feature/review → Sonnet; refactor/architecture → Opus; research/synthesis → Opus or Fable 5; iterative UI → Sonnet.
Output: recommended model, model ID, 1–2 sentence reason, cost tradeoff table, how to switch.
```
