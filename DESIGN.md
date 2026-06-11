---
version: alpha
name: Fedora Design System
description: A comprehensive design system for Teachable's learning platform, built on principles of clarity, professionalism, and user empowerment.
colors:
  # Primary Colors (required)
  primary: "#E7FF33"
  on-primary: "#222222"

  # Brand Colors
  brand-primary: "#E7FF33"
  brand-primary-light: "#F0FF7E"
  brand-primary-lighter: "#FAFFD6"
  brand-primary-dark: "#C4D92B"
  brand-primary-darker: "#545D13"

  # Neutral Greys
  obsidian: "#222222"
  grey-90: "#383838"
  grey-80: "#4e4e4e"
  grey-70: "#646464"
  grey-60: "#7a7a7a"
  grey-50: "#919191"
  grey-40: "#a7a7a7"
  grey-30: "#bdbdbd"
  grey-20: "#d3d3d3"
  grey-12: "#e4e4e4"
  grey-9: "#ebebeb"
  grey-6: "#f2f2f2"
  grey-3: "#f8f8f8"
  grey-2: "#fbfbfb"
  white: "#ffffff"
  black: "#000000"

  # Semantic Colors
  error-primary: "#ca483d"
  error-dark: "#aa3228"
  error-light: "#ffcac5"
  error-lighter: "#ffe2df"

  success-primary: "#38ba5f"
  success-dark: "#227039"
  success-light: "#d7f1df"
  success-lighter: "#ebf8ef"

  warning-primary: "#f8c821"
  warning-dark: "#957814"
  warning-light: "#fef4d3"
  warning-lighter: "#fff7dc"

  info-primary: "#608fff"
  info-dark: "#1c4774"
  info-light: "#dfe9ff"
  info-lighter: "#eff4ff"

  # Container Colors
  container-primary: "#fbfbfb"
  container-brand: "#faffd6"
  container-legacy: "#ffffff"

typography:
  # Display Typography
  display-lg:
    fontFamily: Reckless-Light, Palatino, Garamond, Georgia, serif
    fontSize: 48px
    fontWeight: 300
    lineHeight: 1.25

  display-md:
    fontFamily: Reckless-Light, Palatino, Garamond, Georgia, serif
    fontSize: 32px
    fontWeight: 300
    lineHeight: 1.25

  display-sm:
    fontFamily: Reckless-Light, Palatino, Garamond, Georgia, serif
    fontSize: 24px
    fontWeight: 300
    lineHeight: 1.25

  # Body Typography
  heading-lg:
    fontFamily: system-ui, -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif
    fontSize: 32px
    fontWeight: 600
    lineHeight: 1.25

  heading-md:
    fontFamily: system-ui, -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif
    fontSize: 24px
    fontWeight: 600
    lineHeight: 1.25

  heading-sm:
    fontFamily: system-ui, -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif
    fontSize: 18px
    fontWeight: 600
    lineHeight: 1.25

  body-lg:
    fontFamily: system-ui, -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif
    fontSize: 16px
    fontWeight: 400
    lineHeight: 1.5

  body-lg-bold:
    fontFamily: system-ui, -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif
    fontSize: 16px
    fontWeight: 600
    lineHeight: 1.5

  body-md:
    fontFamily: system-ui, -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif
    fontSize: 14px
    fontWeight: 400
    lineHeight: 1.5

  body-md-bold:
    fontFamily: system-ui, -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif
    fontSize: 14px
    fontWeight: 600
    lineHeight: 1.5

  body-sm:
    fontFamily: system-ui, -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif
    fontSize: 12px
    fontWeight: 400
    lineHeight: 1.5

  body-sm-bold:
    fontFamily: system-ui, -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif
    fontSize: 12px
    fontWeight: 600
    lineHeight: 1.5

  # Labels & Forms
  label:
    fontFamily: system-ui, -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif
    fontSize: 14px
    fontWeight: 400
    lineHeight: 1.0

  table-header:
    fontFamily: system-ui, -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif
    fontSize: 12px
    fontWeight: 600
    lineHeight: 1.0
    letterSpacing: 0.5px

rounded:
  none: 0px
  sm: 4px
  md: 6px
  lg: 8px
  xl: 16px
  full: 9999px

spacing:
  none: 0px
  xxs: 2px
  xs: 4px
  sm: 8px
  md: 12px
  lg: 16px
  xl: 20px
  2xl: 24px
  3xl: 32px
  4xl: 40px
  5xl: 48px
  6xl: 60px
  7xl: 72px

components:
  button-primary:
    backgroundColor: "{colors.brand-primary}"
    textColor: "{colors.obsidian}"
    typography: "{typography.body-md-bold}"
    rounded: "{rounded.md}"
    padding: "{spacing.md} {spacing.xl}"
    height: 40px

  button-primary-hover:
    backgroundColor: "{colors.brand-primary-dark}"

  button-secondary:
    backgroundColor: "{colors.white}"
    textColor: "{colors.obsidian}"
    typography: "{typography.body-md-bold}"
    rounded: "{rounded.md}"
    padding: "{spacing.md} {spacing.xl}"
    height: 40px

  button-secondary-hover:
    backgroundColor: "{colors.grey-6}"

  card-primary:
    backgroundColor: "{colors.white}"
    rounded: "{rounded.sm}"
    padding: "{spacing.2xl}"

  input-field:
    backgroundColor: "{colors.white}"
    textColor: "{colors.obsidian}"
    typography: "{typography.body-lg}"
    rounded: "{rounded.sm}"
    padding: "{spacing.md} {spacing.lg}"
    height: 40px

  badge-info:
    backgroundColor: "{colors.info-lighter}"
    textColor: "{colors.info-dark}"
    typography: "{typography.body-sm-bold}"
    rounded: "{rounded.sm}"
    padding: "{spacing.xs} {spacing.md}"

  badge-success:
    backgroundColor: "{colors.success-lighter}"
    textColor: "{colors.success-dark}"
    typography: "{typography.body-sm-bold}"
    rounded: "{rounded.sm}"
    padding: "{spacing.xs} {spacing.md}"

  badge-warning:
    backgroundColor: "{colors.warning-light}"
    textColor: "{colors.obsidian}"
    typography: "{typography.body-sm-bold}"
    rounded: "{rounded.sm}"
    padding: "{spacing.xs} {spacing.md}"

  badge-error:
    backgroundColor: "{colors.error-lighter}"
    textColor: "{colors.error-dark}"
    typography: "{typography.body-sm-bold}"
    rounded: "{rounded.sm}"
    padding: "{spacing.xs} {spacing.md}"
---

## Brand & Style

The Fedora Design System embodies the ethos of **Educational Empowerment** through **Professional Clarity**. It serves the dual audience of course creators building their teaching businesses and students engaging with learning content.

The design philosophy balances **institutional trust** with **creative expression**. The brand personality is confident, supportive, and human-centric—a platform that gets out of the way to let teachers teach and students learn.

The chosen aesthetic is **Modern Professional** with moments of playful energy. The signature "Teachable Lemon" (#E7FF33) serves as an optimistic accent against a foundation of neutral greys, providing visual energy without overwhelming the educational content.

## Colors

The color strategy centers on a **monochromatic grey foundation** punctuated by the iconic **Teachable Lemon** as the primary brand color. This creates a professional canvas that allows course content to shine while maintaining strong brand recognition.

### Brand Colors

- **Teachable Lemon (#E7FF33):** The signature brand color that drives all primary actions, highlights, and brand moments. This vibrant yellow-green evokes energy, optimism, and forward momentum—the feeling of unlocking knowledge and possibility. **Accessibility Note:** When using Teachable Lemon on white backgrounds, always add a black (#000000) border to improve contrast and definition. This ensures the bright yellow remains accessible and clearly defined. Avoid overusing this combination—reserve it for primary actions only.
- **Obsidian (#222222):** The primary text color across the UI. A near-black grey that provides excellent readability while feeling slightly warmer and less harsh than pure black.

### Neutral Greys

A comprehensive 16-step neutral scale (white, black, and grey-2 through grey-100) provides nuanced tonal layers for backgrounds, borders, disabled states, and secondary UI elements. This scale enables subtle visual hierarchy without relying on heavy shadows or decorative elements.

- **Light greys (2-20):** Used for backgrounds, containers, and subtle dividers
- **Mid greys (30-60):** Used for borders, inactive elements, and helper text
- **Dark greys (70-100):** Used for secondary text, icons, and important UI chrome

### Semantic Colors

Error, success, warning, and info colors follow a consistent scale pattern (10, 20, 80, 100, 120, 140) allowing for tinted backgrounds, borders, and foreground text while maintaining WCAG AA contrast requirements.

- **Error Red:** Used for destructive actions, form validation errors, and critical alerts
- **Success Green:** Used for confirmations, completed states, and positive feedback
- **Warning Yellow:** Used for cautionary messages and important notices that require attention
- **Info Blue:** Used for informational messages, tips, and neutral notifications

## Typography

The typography system employs a **dual-font strategy** that separates display moments from functional UI:

### Display Typography (Reckless-Light)

**Reckless-Light** is a refined serif used exclusively for large headings and hero moments. Its elegant letterforms and light weight create an aspirational, editorial quality—evoking premium publications and timeless design. This font signals important content and brand moments.

- **Display Large (48px):** Page heroes, marketing moments, feature announcements
- **Display Medium (32px):** Section headers, onboarding flows
- **Display Small (24px):** Card titles, prominent labels

**Important:** Reckless-Light should never be used below 18px or for body text. Its delicate strokes become illegible at small sizes.

### System Typography

**System font stack** (system-ui, -apple-system, BlinkMacSystemFont, Segoe UI, Roboto) handles all functional UI text. This ensures optimal rendering on every platform, maintains performance by avoiding custom font loading for UI elements, and provides excellent legibility at all sizes.

- **Headings (32px, 24px, 18px at 600 weight):** Used for content hierarchy within pages
- **Body text (16px, 14px, 12px):** Available in regular (400) and bold (600) weights
- **Labels and form elements (14px, 12px):** Optimized for compact UI elements

### Typographic Scale

Font sizes follow a purposeful scale:
- **Display:** 48px, 32px, 24px
- **Body:** 18px, 16px, 14px, 12px, 11px, 10px

Line heights are standardized:
- **125% (1.25)** for headings and display text
- **150% (1.5)** for body text and reading content
- **100% (1.0)** for compact UI elements like labels and table headers

## Layout & Spacing

The layout system is built on an **8px base grid** that governs all spacing, sizing, and positioning decisions. This creates a consistent visual rhythm and ensures pixel-perfect alignment across all components.

### Spacing Scale

All spacing values derive from a 4px base unit, with a 2px half-step (`xxs`) for fine adjustments:
- **Micro spacing (0-12px):** Internal component padding, tight groupings
- **Component spacing (16-32px):** Between related elements, card padding
- **Section spacing (40-72px):** Vertical separation between major sections

### Container Strategy

Content is housed in distinct container types:
- **Primary Container (#fbfbfb):** The default surface for most UI—a warm off-white that reduces eye strain compared to pure white
- **Brand Container (#faffd6):** A tinted yellow surface for featured content and brand moments
- **Legacy Container (#ffffff):** Pure white for specific contexts requiring maximum contrast

### Responsive Behavior

The system employs a **mobile-first, fluid layout** approach. Components are designed to adapt gracefully across viewport sizes without requiring breakpoint-specific overrides for most cases.

## Elevation & Depth

Depth in the Fedora Design System is achieved through **subtle tonal layers** rather than dramatic shadows. The design language is intentionally flat, allowing educational content to remain the focus.

### Elevation Levels

- **Level 0 (Page background):** Container-primary (#fbfbfb)
- **Level 1 (Standard cards):** White (#ffffff) with minimal border
- **Level 2 (Modals, dropdowns):** White with subtle 8px spread shadow at 5% opacity

Shadows are used sparingly and always soft:
```css
box-shadow: 0 2px 8px rgba(0, 0, 0, 0.05);
```

Heavy drop shadows, glows, and multi-layer shadow stacks are explicitly avoided—they conflict with the professional, content-forward aesthetic.

## Shapes

The shape language uses **modest corner radii** to create a modern, approachable feel without becoming overly playful or casual.

### Corner Radius Scale

- **None (0px):** Reserved for specific geometric needs (e.g., selected tree rows)
- **Small (4px):** The default — badges, inputs, cards, and most containers
- **Medium (6px):** Buttons
- **Large (8px):** Larger surfaces such as empty states
- **Extra Large (16px):** Chips and prominent containers
- **Full (9999px):** Circular icon buttons and avatars (badges are *not* pills)

### Consistency Rules

- Primary action buttons use 6px radius
- Input fields and form controls use 4px radius
- Cards and containers use 4px radius
- Badges use 4px radius — lightly rounded rectangles, not pills (full/circular radius is reserved for icon buttons and avatars)

Corner radii should never exceed 20px in standard UI. Excessive rounding creates a consumer-grade, toy-like appearance that conflicts with the professional positioning.

## Components

### Buttons

Buttons are the primary drivers of action in the interface. They use generous padding, clear typography, and the signature Teachable Lemon for primary actions.

- **Primary Button:** Teachable Lemon background, obsidian text, 40px height
- **Secondary Button:** White background, obsidian text, subtle grey border
- **Hover states:** Slight darkening of the background color (never introduce new colors on hover)
- **Sizing:** All standard buttons maintain a consistent 40px height for easy touch targeting

### Forms & Inputs

Form elements prioritize clarity and ease of use. Input fields have generous internal padding (12px vertical, 16px horizontal) and use the body-lg typography size (16px) to prevent zoom issues on mobile devices.

- **Text inputs:** 40px height, 4px corner radius, grey-12 border
- **Labels:** 14px regular weight, grey-80 color, positioned above inputs
- **Helper text:** 12px regular weight, grey-70 color, 4px spacing below input
- **Error states:** Red-120 text, red-10 background tint on input

### Cards & Containers

Cards provide visual grouping and hierarchy. They use white backgrounds on the primary container color, with 24px internal padding and 4px corner radius.

- **Standard Card:** White background, 1px grey-12 border, 24px padding
- **Interactive Card:** Add subtle hover state (grey-6 background)
- **Brand Card:** Use container-brand background for promotional content

### Badges & Labels

Badges communicate status, categories, and metadata. They use semantic colors with tinted backgrounds and are lightly rounded rectangles (4px radius), not pills.

- **Info Badge:** Info-lighter background, info-dark text
- **Success Badge:** Success-lighter background, success-dark text
- **Warning Badge:** Warning-lighter background, warning-dark text
- **Error Badge:** Error-lighter background, error-dark text

All badges use 12px bold text with 4-12px horizontal padding, maintaining accessibility with 4.5:1 contrast ratios.

## Do's and Don'ts

### Colors

- **Do** use Teachable Lemon exclusively for primary actions—the single most important thing on each screen
- **Do** rely on the neutral grey scale for most UI chrome and hierarchy
- **Do** add a black (#000000) border when using Teachable Lemon on white backgrounds for accessibility (improves contrast and definition)
- **Don't** create new brand colors or introduce accent colors beyond the defined palette
- **Don't** use pure black (#000000) for text—always use Obsidian (#222222) or lighter
- **Don't** overuse Teachable Lemon on white backgrounds—use sparingly to maintain accessibility and visual hierarchy

### Typography

- **Do** use Reckless-Light for display headings and brand moments
- **Do** use the system font stack for all functional UI and body text
- **Don't** use Reckless-Light below 18px—it becomes illegible
- **Don't** mix font weights within a single text block (no bold words in regular paragraphs)
- **Don't** use more than three font sizes on a single screen

### Spacing

- **Do** use values from the 8px spacing scale exclusively
- **Do** maintain generous whitespace—when in doubt, add more space
- **Don't** use arbitrary spacing values (5px, 15px, 23px)
- **Don't** cram elements together—educational interfaces need breathing room

### Components

- **Do** maintain consistent component heights (40px for buttons and inputs)
- **Do** use semantic color badges only for their intended purposes
- **Don't** create one-off component variations—extend the design system instead
- **Don't** stack multiple shadows or create complex elevation hierarchies

### Overall Philosophy

- **Do** prioritize content over chrome—the design should be invisible
- **Do** maintain WCAG AA contrast ratios (4.5:1 minimum for body text)
- **Don't** introduce decorative elements, illustrations, or ornamentation without purpose
- **Don't** use animations longer than 250ms—keep interactions snappy and professional
