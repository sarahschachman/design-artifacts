# Design Artifacts Agent Instructions

## Repository Context

`design-artifacts` is a repository of design documentation, specifications, personas, and brand guidelines for the Teachable/Fedora platform.

## Critical: Design System Compliance

**🚨 MANDATORY: When creating ANY UI components, screens, mockups, prototypes, or visual elements, you MUST reference `.claude/agents/DESIGN.md` FIRST.**

### Design System Location

The Fedora Design System specification lives at:
```
.claude/agents/DESIGN.md
```

This is the **single source of truth** for all visual design decisions.

### What's in DESIGN.md

- ✅ **Design tokens**: Colors, typography, spacing, border radius values
- ✅ **Component patterns**: Buttons, cards, inputs, badges, forms
- ✅ **Brand guidelines**: Teachable Mustard (#E7FF33), Obsidian text, typography rules
- ✅ **Design philosophy**: Professional clarity, educational empowerment
- ✅ **Do's and Don'ts**: Explicit rules for what to avoid

### Required Workflow for All UI Work

**Before writing any UI code:**

1. **READ** `.claude/agents/DESIGN.md` to understand the design system
2. **EXTRACT** the exact design tokens you need:
   - Colors: Use defined color tokens (primary, obsidian, grey-*, semantic colors)
   - Typography: Use defined typography scales (heading-lg, body-md, etc.)
   - Spacing: Use the 8px-based spacing scale (xs, sm, md, lg, xl, etc.)
   - Rounding: Use defined corner radius values (sm, md, lg, full)
3. **FOLLOW** component patterns defined in the `components:` section
4. **APPLY** the design philosophy and brand guidelines from the prose sections
5. **VALIDATE** against the "Do's and Don'ts" section

### Examples

**❌ WRONG - Inventing arbitrary values:**
```jsx
<button style={{
  backgroundColor: '#FFD700',  // ❌ Not a design token
  padding: '10px 15px',        // ❌ Not from spacing scale
  fontSize: '15px',            // ❌ Not from typography scale
  borderRadius: '6px'          // ❌ Not from rounding scale
}}>
  Click me
</button>
```

**✅ CORRECT - Using design tokens from DESIGN.md:**
```jsx
// Read DESIGN.md first, then use exact values:
<button style={{
  backgroundColor: '#E7FF33',  // ✅ {colors.primary} from DESIGN.md
  color: '#222222',            // ✅ {colors.obsidian} from DESIGN.md
  padding: '12px 20px',        // ✅ {spacing.md} {spacing.xl} from DESIGN.md
  fontSize: '14px',            // ✅ {typography.body-md.fontSize} from DESIGN.md
  fontWeight: 600,             // ✅ {typography.body-md-bold.fontWeight} from DESIGN.md
  borderRadius: '12px',        // ✅ {rounded.lg} from DESIGN.md
  height: '40px'               // ✅ {components.button-primary.height} from DESIGN.md
}}>
  Click me
</button>
```

### Never Do This

**🚫 NEVER:**
- Create components without reading DESIGN.md first
- Invent new colors, font sizes, or spacing values
- Use arbitrary CSS values when design tokens exist
- Create designs that contradict the design philosophy
- Ignore the "Do's and Don'ts" section
- Use pure black (#000000) for text (always use Obsidian #222222)
- Create new brand colors beyond the defined palette
- Use corner radii larger than 20px (conflicts with professional aesthetic)

### Validation

After creating UI components, verify:

1. ✅ All colors come from DESIGN.md color tokens
2. ✅ All font sizes come from typography scales
3. ✅ All spacing uses the 8px-based scale
4. ✅ Component follows patterns in `components:` section
5. ✅ Design aligns with "Brand & Style" philosophy
6. ✅ Nothing violates "Do's and Don'ts" rules

### Pro Tip

If you need a design token that doesn't exist in DESIGN.md:
1. **Stop** and ask the user if it should be added to the design system
2. **Don't** invent arbitrary values as a "temporary solution"
3. **Suggest** the closest existing token as an alternative

## User Personas

User personas live in `docs/context/personas.md`. Read that file before any user-facing design work (PRDs, vision, specs, copy, flows, prototypes).

**Primary focus personas:**
- ✅ The Knowledge Business
- ✅ The Service Amplifier
- ✅ The Program Distributor

**Documented but not current focus:**
- 🚫 The Course Curious
- 🚫 The Audience Builder

**To role-play designs against personas:** Use the `persona-panel` agent defined in `.claude/agents/persona-panel.md`

## Other Design Resources

- **DESIGN-SYSTEM-GUIDE.md**: Comprehensive guide on how Style Dictionary and DESIGN.md work together
- **docs/**: Product requirements, vision documents, specifications
- **.claude/agents/**: Specialized agents (persona-panel, etc.)

## Validation Tools

Lint the design system for issues:
```bash
npx @google/design.md lint .claude/agents/DESIGN.md
```

This checks for:
- WCAG contrast ratio compliance
- Broken token references
- Missing required tokens
- Design system consistency issues

## Questions?

If you're unsure about:
- Which design token to use → Read DESIGN.md sections on Colors, Typography, Spacing
- How to build a component → Read DESIGN.md "Components" section
- Design philosophy decisions → Read DESIGN.md "Brand & Style" section
- Whether something is allowed → Read DESIGN.md "Do's and Don'ts" section

**When in doubt, ask the user rather than inventing values.**

---

**Remember: DESIGN.md is not optional. It's the design system specification that ensures every UI element maintains brand consistency and professional quality.**
