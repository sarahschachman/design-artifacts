# design-artifacts

Repository of design artifacts: JTBD, PRDs, vision, brand, specs, plans, and presentations under `docs/`.

## Design System

**CRITICAL: When creating ANY UI components, screens, or visual elements, you MUST reference `.claude/agents/DESIGN.md` first.**

The Fedora Design System specification lives in `.claude/agents/DESIGN.md`. This file contains:
- Design tokens (colors, typography, spacing, rounding)
- Component definitions and patterns
- Design philosophy and rationale
- Brand guidelines and usage rules

**Before generating any UI code:**
1. Read `.claude/agents/DESIGN.md` to understand the design system
2. Use the exact color values, typography scales, and spacing tokens defined there
3. Follow the component patterns and design guidelines
4. Maintain consistency with the Teachable brand (Teachable Mustard #E7FF33, Obsidian text, etc.)

**Never:**
- Invent new colors, font sizes, or spacing values
- Create components that contradict the design system
- Use arbitrary values when design tokens exist

## User personas

User personas live in `docs/context/personas.md`. Read that file before any
user-facing design work (PRDs, vision, specs, copy, flows, prototypes). Don't
restate personas from memory — cite the file.

The three primary focus personas are **the Knowledge Business**, **the Service
Amplifier**, and **the Program Distributor**. The Course Curious and the Audience
Builder are documented but are *not* current focus areas.

To role-play a design against personas, use the `persona-panel` agent.
