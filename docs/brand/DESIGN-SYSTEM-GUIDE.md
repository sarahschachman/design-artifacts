# Teachable Design System Guide

**A simple guide for designers working with the Teachable Design System.**

---

## What You Need to Know

The Teachable Design System is documented in a single file called **DESIGN.md**. This file contains:

- 🎨 **All design tokens** (colors, fonts, spacing, corner radii)
- 📐 **Component specifications** (buttons, inputs, cards, badges)
- 📝 **Design philosophy** (why we make certain design choices)
- ✅ **Guidelines** (Do's and Don'ts)

**Location:** [DESIGN.md on GitHub](https://github.com/sarahschachman/design-artifacts/blob/main/DESIGN.md)

---

## When Do I Use DESIGN.md?

### ✅ Use DESIGN.md when you're:
- Creating mockups or prototypes
- Designing new features or screens
- Working with AI tools (Claude, ChatGPT, etc.) to generate designs
- Onboarding new team members
- Making decisions about colors, typography, or spacing

### 📖 Read DESIGN.md to find:
- **Exact color values** → Example: Teachable Lemon is `#E7FF33`
- **Font sizes and styles** → Example: Headings use `Reckless-Light` at 32px
- **Spacing values** → Example: Use 24px between major sections
- **Component patterns** → Example: Primary buttons are 40px tall with 12px rounded corners
- **Design rationale** → Example: Why we use Obsidian (#222222) instead of pure black

---

## How to Update DESIGN.md

### When Should I Update It?

Update DESIGN.md when:
- ✅ You're making a major design system change (rebrand, new direction)
- ✅ You're adding new component patterns or guidelines
- ✅ You're documenting the "why" behind design decisions
- ✅ During quarterly design system reviews

**You don't need to update it for every small change!** Only document significant changes that should be shared across the team.

### How to Edit the File

**For Designers (No Coding Required):**

1. **Open the file on GitHub:** [DESIGN.md](https://github.com/sarahschachman/design-artifacts/blob/main/DESIGN.md)
2. **Click the pencil icon** (✏️) to edit
3. **Make your changes** in the editor
4. **Scroll down** and describe what you changed
5. **Click "Commit changes"**

**What to Edit:**

The file has two parts:

**Part 1: Design Tokens (YAML - Top Section)**
```yaml
colors:
  primary: "#E7FF33"           # Teachable Lemon
  obsidian: "#222222"          # Main text color

typography:
  heading-lg:
    fontSize: 32px
    fontWeight: 600
```

**Part 2: Design Rationale (Markdown - Bottom Section)**
```markdown
## Brand & Style

The Teachable Design System embodies the ethos of **Educational Empowerment**
through **Professional Clarity**...
```

---

## Common Tasks for Designers

### Adding a New Color

1. **Open DESIGN.md**
2. **Find the `colors:` section** at the top
3. **Add your new color:**
   ```yaml
   colors:
     accent-teal: "#00B8A9"
   ```
4. **Add an explanation in the prose section:**
   ```markdown
   ### Accent Colors
   - **Accent Teal (#00B8A9):** Used for informational callouts and highlights
   ```
5. **Save and commit**

### Updating Typography

1. **Open DESIGN.md**
2. **Find the `typography:` section**
3. **Update or add a typography scale:**
   ```yaml
   typography:
     heading-xl:
       fontFamily: Reckless-Light, Georgia, serif
       fontSize: 40px
       fontWeight: 300
   ```
4. **Save and commit**

### Documenting a New Component Pattern

1. **Open DESIGN.md**
2. **Find the `components:` section**
3. **Add your component:**
   ```yaml
   components:
     alert-info:
       backgroundColor: "{colors.info-lighter}"
       textColor: "{colors.info-dark}"
       padding: "{spacing.lg}"
       rounded: "{rounded.md}"
   ```
4. **Add usage notes in the prose section:**
   ```markdown
   ### Alerts

   Alerts communicate important information to users.

   - **Info Alert:** Light blue background for informational messages
   - **Warning Alert:** Light yellow background for cautionary messages
   ```
5. **Save and commit**

---

## Checking Your Design for Accessibility

DESIGN.md includes a built-in validator that checks for accessibility issues like color contrast.

**How to Validate (Ask a Developer for Help):**

```bash
npx @google/design.md lint DESIGN.md
```

**What it checks:**
- ✅ Color contrast meets WCAG AA standards (4.5:1 minimum)
- ✅ All design token references are valid
- ✅ No missing required fields

**Example output:**
```
✓ WCAG contrast check passed
⚠ Warning: textColor on backgroundColor has 3.9:1 contrast (below 4.5:1 minimum)
```

---

## Working with Developers

### What Designers Own: DESIGN.md

**DESIGN.md is the designer's file.** This is where you:
- Document design decisions
- Define colors, typography, spacing
- Explain the "why" behind design choices
- Set component patterns and guidelines

### What Developers Own: tokens.json

Developers have a separate file called `tokens.json` that they use to build the actual UI components. **You don't need to edit this file.**

**Note:** The technical implementation files mentioned in this guide (`tokens.json`, `packages/ui/`, build commands like `yarn build-tokens`) live in the product repository (mono-frontend), not in this design-artifacts repository.

### How They Work Together

Think of it like this:
- **DESIGN.md** = The design spec and documentation (what designers create)
- **tokens.json** = The code implementation (what developers build)

**Do they need to match perfectly?** No! They serve different purposes:
- Update DESIGN.md when you want to document design thinking
- Developers update tokens.json when they're building components

**Sync them quarterly** or before major releases to keep them aligned.

---

## Quick Reference

### Design Token Cheat Sheet

**Colors:**
- Primary action: `#E7FF33` (Teachable Lemon)
- Text: `#222222` (Obsidian)
- Background: `#fbfbfb` (Primary Container)
- Error: `#ca483d`
- Success: `#38ba5f`
- Warning: `#f8c821`

**Typography:**
- Display headings: Reckless-Light (32px, 300 weight)
- Body headings: System UI (24px, 600 weight)
- Body text: System UI (16px, 400 weight)
- Small text: System UI (12px, 400 weight)

**Spacing (8px grid):**
- Micro: 4px, 8px, 12px
- Component: 16px, 20px, 24px
- Section: 32px, 40px, 48px

**Corner Radius:**
- Small: 4px (badges)
- Medium: 8px (inputs)
- Large: 12px (buttons, cards)
- Full: 9999px (pills)

### Button Specifications

**Primary Button:**
- Background: `#E7FF33` (Teachable Lemon)
- Text: `#222222` (Obsidian)
- Height: 40px
- Padding: 12px vertical, 20px horizontal
- Corner radius: 12px
- Font: 14px, 600 weight

**Secondary Button:**
- Background: `#ffffff` (White)
- Text: `#222222` (Obsidian)
- Border: 1px solid `#e4e4e4`
- Height: 40px
- Corner radius: 12px

---

## Need Help?

- **Design system questions:** Post in `#design-systems` Slack channel
- **Can't find what you need in DESIGN.md?** Ask a design systems lead
- **Found an accessibility issue?** Run the validator (ask a developer) or flag it in Slack

---

## Resources

### Documentation

- [DESIGN.md Format Specification](https://github.com/google-labs-code/design.md/blob/main/docs/spec.md)
- [DESIGN.md Philosophy](https://github.com/google-labs-code/design.md/blob/main/PHILOSOPHY.md)
- [Style Dictionary Documentation](https://amzn.github.io/style-dictionary/)

### Tools

- [DESIGN.md CLI](https://www.npmjs.com/package/@google/design.md) - Lint, diff, and export
- [Teachable Storybook](https://uni.zeachable.cloud/) - Component documentation

### Internal

- [Teachable UI README](./README.md) - Package documentation
- [Contributing Guidelines](./CONTRIBUTING.md) - How to contribute
- [Design System Usage Script](../../tools/scripts/design-system/usage.mjs) - Adoption metrics

---

## Questions or Issues?

- **Design system questions:** Post in `#design-systems` Slack channel
- **Build issues:** Post in `#dev-frontend` Slack channel
- **DESIGN.md issues:** [Create an issue](https://github.com/google-labs-code/design.md/issues) on the spec repo

---

**Last Updated:** June 2026
**Maintained By:** Teachable Design Systems Team
