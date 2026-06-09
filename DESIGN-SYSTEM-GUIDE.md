# Fedora Design System Guide

A comprehensive guide to understanding and working with the Fedora Design System documentation.

## Overview

The Fedora Design System uses two complementary systems to manage design tokens and documentation:

1. **Style Dictionary** (`tokens.json`) - For building SCSS variables
2. **DESIGN.md** - For design documentation and AI agent context

Both serve important but different purposes and are intentionally kept separate.

---

## System 1: Style Dictionary (Current Build Process)

### What It Is

Style Dictionary transforms our design tokens from JSON format into SCSS variables that components can use.

### Location

```
📁 packages/ui/src/shared-styles/design-tokens/
  └── json/
      └── tokens.json          # Source design tokens
  └── scss/
      └── _base.scss           # Generated SCSS variables
      └── _button.scss         # Component-specific tokens
      └── ...
```

### How to Use It

**Update tokens:**
```bash
# 1. Edit the source tokens
vim packages/ui/src/shared-styles/design-tokens/json/tokens.json

# 2. Rebuild SCSS files
yarn build-tokens
```

**Use in components:**
```scss
// Button.module.scss
@import '../shared-styles/design-tokens/scss/base';

.button {
  background-color: $color-brand-primary-100;
  padding: $space-12 $space-20;
  border-radius: $size-12;
}
```

### When to Update

- ✅ Adding new colors, spacing values, or typography scales
- ✅ Building or updating components
- ✅ Day-to-day component development
- ✅ Any time you need new design tokens in SCSS

---

## System 2: DESIGN.md (Design Documentation)

### What It Is

DESIGN.md is a comprehensive design system specification that combines:
- **Machine-readable tokens** (YAML frontmatter)
- **Human-readable rationale** (Markdown prose)

It's based on the [DESIGN.md format specification](https://github.com/google-labs-code/design.md) by Google Labs.

### Location

```
📁 Primary location (for AI agents):
  └── https://github.com/sarahschachman/design-artifacts/blob/main/.claude/agents/DESIGN.md

📁 Local copy (for reference):
  └── packages/ui/DESIGN.md
```

### Structure

```markdown
---
# YAML Frontmatter: Machine-readable tokens
name: Fedora Design System
colors:
  primary: "#E7FF33"
  obsidian: "#222222"
typography:
  heading-lg:
    fontFamily: system-ui
    fontSize: 32px
---

## Brand & Style
<!-- Human-readable design rationale -->
The design philosophy balances institutional trust with creative expression...

## Colors
<!-- Explanation of color strategy -->
The color strategy centers on a monochromatic grey foundation...
```

### How to Use It

**Read it for context:**
```bash
# View the design system documentation
cat packages/ui/DESIGN.md

# Or view online
open https://github.com/sarahschachman/design-artifacts/blob/main/.claude/agents/DESIGN.md
```

**Validate it:**
```bash
# Check for design system issues (contrast ratios, broken references, etc.)
npx @google/design.md lint packages/ui/DESIGN.md
```

**Update it:**
```bash
# Edit the file
vim packages/ui/DESIGN.md

# Validate your changes
npx @google/design.md lint packages/ui/DESIGN.md

# Commit to both repos if needed
git add DESIGN.md
git commit -m "Update design system documentation"
```

### When to Update

- ✅ Major design system changes (rebrand, new design direction)
- ✅ Updating design philosophy or brand guidelines
- ✅ Adding new component patterns or usage guidelines
- ✅ Quarterly or semi-annual design system reviews
- ✅ When onboarding new designers or developers

### Who Uses It

**Humans:**
- Designers learning the design system
- Developers understanding design rationale
- New team members during onboarding
- Product managers reviewing design decisions

**AI Agents:**
- Claude Code, GitHub Copilot, Cursor
- Any AI tool that generates UI code
- Automated design-to-code workflows

---

## How They Work Together

### Two Sources of Truth (By Design)

We intentionally keep these systems separate because they serve different purposes:

| Aspect | tokens.json | DESIGN.md |
|--------|-------------|-----------|
| **Purpose** | Build-time SCSS generation | Documentation & AI context |
| **Audience** | Build pipeline & developers | Humans & AI agents |
| **Update Frequency** | Daily/weekly (as needed) | Monthly/quarterly |
| **Format** | JSON (Style Dictionary) | YAML + Markdown |
| **Output** | SCSS variables | Design rationale + validation |

### Keeping Them In Sync

You don't need to keep them perfectly synchronized. Update each when it makes sense:

**When you change tokens.json:**
- Components get new SCSS variables immediately
- Update DESIGN.md only if it's a significant change worth documenting

**When you change DESIGN.md:**
- Documentation reflects new design direction
- Update tokens.json when you're ready to implement the changes in code

### Sync Checklist (Quarterly Review)

Run this checklist every quarter or before major releases:

```bash
# 1. Review tokens.json for any undocumented changes
git log -p packages/ui/src/shared-styles/design-tokens/json/tokens.json

# 2. Update DESIGN.md frontmatter to match current tokens
vim packages/ui/DESIGN.md

# 3. Update design rationale prose if design philosophy changed
# (Edit the markdown sections)

# 4. Validate the updated DESIGN.md
npx @google/design.md lint packages/ui/DESIGN.md

# 5. Commit changes
git add packages/ui/DESIGN.md
git commit -m "chore: sync DESIGN.md with current design tokens"
```

---

## Common Tasks

### Adding a New Color

**Step 1: Add to tokens.json**
```json
// packages/ui/src/shared-styles/design-tokens/json/tokens.json
{
  "base": {
    "color": {
      "accent": {
        "teal-100": {
          "value": "#00B8A9",
          "type": "color",
          "description": "Accent teal for callouts"
        }
      }
    }
  }
}
```

**Step 2: Rebuild tokens**
```bash
yarn build-tokens
```

**Step 3: Use in components**
```scss
.callout {
  border-left: 4px solid $color-accent-teal-100;
}
```

**Step 4: (Optional) Add to DESIGN.md**
Only if this is a significant addition worth documenting:
```yaml
colors:
  accent-teal: "#00B8A9"
```

### Updating Typography

**Step 1: Update tokens.json**
```json
{
  "base": {
    "font": {
      "size": {
        "20": {
          "value": "1.25rem"
        }
      }
    }
  }
}
```

**Step 2: Update DESIGN.md**
```yaml
typography:
  heading-xl:
    fontSize: 20px
    fontWeight: 600
```

### Validating Design Decisions

```bash
# Check for contrast issues, broken references, missing tokens
npx @google/design.md lint packages/ui/DESIGN.md

# Sample output:
# {
#   "findings": [
#     {
#       "severity": "warning",
#       "path": "components.badge-warning",
#       "message": "textColor (#957814) on backgroundColor (#fff7dc) has contrast ratio 3.94:1, below WCAG AA minimum of 4.5:1."
#     }
#   ],
#   "summary": {
#     "errors": 0,
#     "warnings": 1
#   }
# }
```

---

## DESIGN.md Advanced Usage

### Exporting to Other Formats

While we don't currently use these, DESIGN.md can export to various formats:

**Tailwind CSS v4:**
```bash
npx @google/design.md export --format css-tailwind DESIGN.md > theme.css
```

**Tailwind CSS v3:**
```bash
npx @google/design.md export --format json-tailwind DESIGN.md > tailwind.theme.json
```

**W3C Design Tokens (DTCG):**
```bash
npx @google/design.md export --format dtcg DESIGN.md > tokens.json
```

### Viewing the Specification

```bash
# See the full DESIGN.md format specification
npx @google/design.md spec

# See just the linting rules
npx @google/design.md spec --rules-only
```

### Comparing Versions

```bash
# Compare two versions to see what changed
npx @google/design.md diff DESIGN-old.md DESIGN-new.md
```

---

## FAQs

### Why do we have two systems instead of one?

**Short answer:** They serve different purposes and audiences.

**Long answer:**
- Style Dictionary is a mature, production-tested build tool that generates SCSS variables
- DESIGN.md is a documentation standard that AI agents can understand
- Combining them would require custom tooling and risk breaking our existing build process
- Keeping them separate is simpler and more maintainable

### Do I need to update both every time?

**No.** Update each when it makes sense:
- Update tokens.json for regular development work
- Update DESIGN.md for design system reviews and documentation

### How often should I sync them?

**Quarterly or before major releases.** Unless you're making significant design system changes, they don't need to be perfectly in sync.

### What if they get out of sync?

**It's okay!** They serve different purposes:
- tokens.json is the source of truth for component implementation
- DESIGN.md is the source of truth for design rationale and AI context

Run the quarterly sync checklist to bring them back together.

### Can I automate the sync?

**Yes, but we don't recommend it yet.**

Automation options:
- Script to generate DESIGN.md from tokens.json
- Script to extract tokens from DESIGN.md → tokens.json
- CI check that warns when they drift

We're keeping them manual for now because:
- The Fedora design system is relatively stable
- Manual updates force you to think about design decisions
- Automation adds complexity without clear ROI yet

If you find yourself syncing them weekly, then it's time to automate.

---

## Resources

### Documentation

- [DESIGN.md Format Specification](https://github.com/google-labs-code/design.md/blob/main/docs/spec.md)
- [DESIGN.md Philosophy](https://github.com/google-labs-code/design.md/blob/main/PHILOSOPHY.md)
- [Style Dictionary Documentation](https://amzn.github.io/style-dictionary/)

### Tools

- [DESIGN.md CLI](https://www.npmjs.com/package/@google/design.md) - Lint, diff, and export
- [Fedora Storybook](https://uni.zeachable.cloud/) - Component documentation

### Internal

- [Fedora UI README](./README.md) - Package documentation
- [Contributing Guidelines](./CONTRIBUTING.md) - How to contribute
- [Design System Usage Script](../../tools/scripts/design-system/usage.mjs) - Adoption metrics

---

## Questions or Issues?

- **Design system questions:** Post in `#design-systems` Slack channel
- **Build issues:** Post in `#dev-frontend` Slack channel
- **DESIGN.md issues:** [Create an issue](https://github.com/google-labs-code/design.md/issues) on the spec repo

---

**Last Updated:** June 2026
**Maintained By:** Fedora Design Systems Team
