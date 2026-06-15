---
version: alpha
name: Teachable Design System
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

  # ── Brand palette (Teachable Brand Kit) ──
  # Primary
  lemon: "#E6FF32"
  light-lemon: "#F8FFC6"
  navy: "#1C4774"
  # Neutral
  charcoal: "#4E4E4E"
  warm-gray: "#D1CECB"
  cool-beige: "#F6F2EE"
  # Secondary
  bordeaux: "#711014"
  cabernet: "#480601"
  olive: "#465F01"
  # Tertiary
  turquoise: "#B6F2E8"
  peach: "#FFE3BE"
  violet: "#E5CCFF"
  # Tints & shades (100 lightest → 800 darkest)
  lemon-100: "#FAFFD6"
  lemon-200: "#F5FFAD"
  lemon-300: "#F0FF84"
  lemon-400: "#EBFF5B"
  lemon-500: "#B8CC28"
  lemon-600: "#8A991E"
  lemon-700: "#5C6614"
  lemon-800: "#2E330A"
  navy-100: "#D2DAE3"
  navy-200: "#A4B5C7"
  navy-300: "#7791AC"
  navy-400: "#496C90"
  navy-500: "#16395D"
  navy-600: "#112B46"
  navy-700: "#0B1C2E"
  navy-800: "#060E17"
  warm-gray-100: "#F6F5F5"
  warm-gray-200: "#EDEBEA"
  warm-gray-300: "#E3E2E0"
  warm-gray-400: "#DAD8D5"
  warm-gray-500: "#A7A5A2"
  warm-gray-600: "#7D7C7A"
  warm-gray-700: "#545251"
  warm-gray-800: "#2A2929"
  bordeaux-100: "#E3CFD0"
  bordeaux-200: "#C69FA1"
  bordeaux-300: "#AA7072"
  bordeaux-400: "#8D4043"
  bordeaux-500: "#5A0D10"
  bordeaux-600: "#440A0C"
  bordeaux-700: "#2D0608"
  bordeaux-800: "#170304"
  olive-100: "#DADFCC"
  olive-200: "#B5BF99"
  olive-300: "#909F67"
  olive-400: "#6B7F34"
  olive-500: "#384C01"
  olive-600: "#2A3901"
  olive-700: "#1C2600"
  olive-800: "#0E1300"
  turquoise-100: "#F0FCFA"
  turquoise-200: "#E2FAF6"
  turquoise-300: "#D3F7F1"
  turquoise-400: "#C5F5ED"
  turquoise-500: "#92C2BA"
  turquoise-600: "#6D918B"
  turquoise-700: "#49615D"
  turquoise-800: "#24302E"
  peach-100: "#FFF9F2"
  peach-200: "#FFF4E5"
  peach-300: "#FFEED8"
  peach-400: "#FFE9CB"
  peach-500: "#CCB698"
  peach-600: "#998872"
  peach-700: "#665B4C"
  peach-800: "#332D26"
  violet-100: "#FAF5FF"
  violet-200: "#F5EBFF"
  violet-300: "#EFE0FF"
  violet-400: "#EAD6FF"
  violet-500: "#B7A3CC"
  violet-600: "#897A99"
  violet-700: "#5C5266"
  violet-800: "#2E2933"

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

gradients:
  lemon-to-light-lemon: "linear-gradient(154deg, #E6FF32, #F8FFC6)"
  turquoise-to-light-lemon: "linear-gradient(154deg, #B6F2E8, #F8FFC6)"
  peach-to-violet: "linear-gradient(154deg, #FFE3BE, #E5CCFF)"
  bordeaux-to-cabernet: "linear-gradient(154deg, #711014, #480601)"
  olive-to-dark-olive: "linear-gradient(158deg, #465F01, #1C2600)"
  navy-to-light-navy: "linear-gradient(154deg, #1C4774, #7791AC)"
  light-lemon-to-cool-beige: "linear-gradient(154deg, #F8FFC6, #F6F2EE)"
  light-lemon-to-warm-gray: "linear-gradient(154deg, #F8FFC6, #D1CECB)"
  warm-gray-to-cool-beige: "linear-gradient(153deg, #D1CECB, #F6F2EE)"
  charcoal-to-warm-gray: "linear-gradient(180deg, #4E4E4E, #D1CECB)"
  black-to-charcoal: "linear-gradient(154deg, #000000, #4E4E4E)"

components:
  anchor:
    textColor: "#000000"
  button-primary:
    backgroundColor: "#E7FF33"
    textColor: "#222222"
    borderColor: "#222222"
    rounded: "{rounded.md}"
    height: 40px
  button-secondary:
    backgroundColor: "#ffffff"
    textColor: "#222222"
    borderColor: "#222222"
    rounded: "{rounded.md}"
    height: 40px
  button-trial:
    backgroundColor: "linear-gradient(225deg, #000 0%, #199A76 100%)"
    textColor: "#ffffff"
    borderColor: "#E7FF33"
    rounded: "{rounded.md}"
    height: 40px
  button-upgrade:
    backgroundColor: "#ffffff"
    textColor: "#222222"
    borderColor: "#E7FF33"
    rounded: "{rounded.md}"
    height: 40px
  button-danger-outline:
    backgroundColor: "#ffffff"
    textColor: "#aa3228"
    borderColor: "#aa3228"
    rounded: "{rounded.md}"
    height: 40px
  button-text:
    textColor: "#222222"
    rounded: "{rounded.md}"
    height: 40px
  breadcrumbs:
    textColor: "#7a7a7a"
  cap-limit-bar:
    textColor: "#646464"
  color-picker-input:
    backgroundColor: "#f8f8f8"
    height: 64px
  date-picker-input:
    backgroundColor: "#ffffff"
    borderColor: "#222222"
    rounded: 5px
    height: 40px
  divider:
    borderColor: "#e4e4e4"
    height: 1px
  field-error:
    textColor: "#ca483d"
  input:
    backgroundColor: "#ffffff"
    textColor: "#383838"
    borderColor: "#7a7a7a"
    rounded: "{rounded.sm}"
    height: 40px
  input-success:
    backgroundColor: "#ffffff"
    textColor: "#E7FF33"
    borderColor: "#E7FF33"
    rounded: "{rounded.sm}"
    height: 40px
  list:
    backgroundColor: "#ffffff"
    borderColor: "#d3d3d3"
    rounded: "{rounded.sm}"
  notification:
    textColor: "#4e4e4e"
    rounded: "{rounded.sm}"
  notification-info:
    backgroundColor: "#eff4ff"
    textColor: "#4e4e4e"
    borderColor: "#608fff"
    rounded: "{rounded.sm}"
  notification-alert:
    backgroundColor: "#fff7dc"
    textColor: "#4e4e4e"
    borderColor: "#f8c821"
    rounded: "{rounded.sm}"
  notification-success:
    backgroundColor: "#ebf8ef"
    textColor: "#4e4e4e"
    borderColor: "#38ba5f"
    rounded: "{rounded.sm}"
  notification-upsell:
    backgroundColor: "#f2f2f2"
    textColor: "#4e4e4e"
    rounded: "{rounded.sm}"
  notification-trial:
    backgroundColor: "linear-gradient(225deg, #000 0%, #199A76 100%)"
    textColor: "#ffffff"
    borderColor: "#E7FF33"
    rounded: "{rounded.sm}"
  notification-primary:
    backgroundColor: "#FAFFD6"
    textColor: "#222222"
    borderColor: "#E7FF33"
    rounded: "{rounded.sm}"
  input-number:
    borderColor: "#646464"
  modal:
    backgroundColor: "#ffffff"
    rounded: "{rounded.sm}"
  tabs:
    textColor: "#222222"
    rounded: "4px 4px 0 0"
  upload-pane:
    backgroundColor: "#f8f8f8"
    borderColor: "#e4e4e4"
    rounded: "{rounded.sm}"
  upload-pane-upload-button:
    backgroundColor: "#f8f8f8"
    borderColor: "#222222"
    rounded: "{rounded.sm}"
  badge-neutral:
    backgroundColor: "#e4e4e4"
    textColor: "#222222"
    rounded: "{rounded.sm}"
  badge-positive:
    backgroundColor: "#bfd2ff"
    textColor: "#222222"
    rounded: "{rounded.sm}"
  badge-negative:
    backgroundColor: "#ffcac5"
    textColor: "#222222"
    rounded: "{rounded.sm}"
  badge-warning:
    backgroundColor: "#fef4d3"
    textColor: "#222222"
    rounded: "{rounded.sm}"
  banner:
    backgroundColor: "#ffffff"
    height: 50px
  banner-default:
    backgroundColor: "#eff4ff"
    borderColor: "#dfe9ff"
    height: 50px
  banner-warning:
    backgroundColor: "#ffe2df"
    borderColor: "#ffcac5"
    height: 50px
  card:
    borderColor: "#e4e4e4"
    rounded: "{rounded.sm}"
  card-white:
    backgroundColor: "#ffffff"
    borderColor: "#e4e4e4"
    rounded: "{rounded.sm}"
  card-grey:
    backgroundColor: "#fbfbfb"
    borderColor: "#e4e4e4"
    rounded: "{rounded.sm}"
  checkbox:
    textColor: "#222222"
    borderColor: "#222222"
    rounded: 2px
    height: 18px
  chip:
    backgroundColor: "#ffffff"
    textColor: "#222222"
    borderColor: "#e4e4e4"
    rounded: "{rounded.xl}"
  container:
    backgroundColor: "#ffffff"
    borderColor: "#e4e4e4"
    rounded: "{rounded.sm}"
  label:
    textColor: "#646464"
  tag:
    textColor: "#222222"
    rounded: 10px
  tag-destructive:
    backgroundColor: "#f46b5f"
    textColor: "#222222"
    rounded: 10px
  tag-informative:
    backgroundColor: "#80a5ff"
    textColor: "#222222"
    rounded: 10px
  tag-success:
    backgroundColor: "#60c87f"
    textColor: "#222222"
    rounded: 10px
  tag-warning:
    backgroundColor: "#f9d34d"
    textColor: "#222222"
    rounded: 10px
  empty-state:
    backgroundColor: "#f8f8f8"
    textColor: "#222222"
    borderColor: "#e4e4e4"
    rounded: "{rounded.lg}"
  pagination:
    textColor: "#646464"
  search-input:
    borderColor: "#d3d3d3"
    rounded: "{rounded.sm}"
  switch:
    backgroundColor: "#bdbdbd"
    rounded: 20px
    height: 30px
  toast:
    backgroundColor: "#222222"
    textColor: "#ffffff"
    rounded: "{rounded.sm}"
  toast-success:
    backgroundColor: "#222222"
    textColor: "#ffffff"
    rounded: "{rounded.sm}"
  range-slider-label:
    backgroundColor: "#222222"
    textColor: "#ffffff"
    rounded: "{rounded.sm}"
    height: 32px
  tooltip-primary:
    backgroundColor: "#222222"
    textColor: "#ffffff"
    rounded: "{rounded.sm}"
  tooltip-secondary:
    textColor: "#222222"
    rounded: "{rounded.sm}"
  table:
    backgroundColor: "#f8f8f8"
    borderColor: "#e4e4e4"
  page-header:
    backgroundColor: "#ffffff"
  action-list:
    borderColor: "#d3d3d3"
  loader:
    backgroundColor: "#E7FF33"
---

## Brand & Style

The Teachable Design System embodies the ethos of **Educational Empowerment** through **Professional Clarity**. It serves the dual audience of course creators building their teaching businesses and students engaging with learning content.

The design philosophy balances **institutional trust** with **creative expression**. The brand personality is confident, supportive, and human-centric—a platform that gets out of the way to let teachers teach and students learn.

The chosen aesthetic is **Modern Professional** with moments of playful energy. The signature "Teachable Lemon" (#E7FF33) serves as an optimistic accent against a foundation of neutral greys, providing visual energy without overwhelming the educational content.

## Colors

The color strategy centers on a **monochromatic grey foundation** punctuated by the iconic **Teachable Lemon** as the primary brand color. This creates a professional canvas that allows course content to shine while maintaining strong brand recognition.

### Color hierarchy

Color usage follows a **70 / 20 / 10** balance — Primary & Neutral dominate, Secondary supports, and Tertiary accents.

#### Primary + Neutral — 70%
These **are** the Teachable brand — leaned on for all major marketing and brand communications because they create the strongest visual recognition. **Teachable Lemon** appears in every single standalone communication.
Use for: key web & product imagery, backgrounds & UI, campaigns, sales decks, event touch-points, data visualization, and swag.

#### Secondary — 20%
Secondary colors **support** the palette and should appear regularly. They provide visual pacing while Primary and Neutral remain visually dominant.
Use for: graphic elements & data visualization, social media, and event sub-branding.

#### Tertiary — 10%
Tertiary colors add **flexibility and energy** — the expressive end of the brand, e.g. at events, used alongside other colors for cohesion. Use for: graphic elements & data visualization, social media, event sub-branding, and seasonal or specialty assets. *Too many pastels can read as juvenile — use with care, in combination with the Primary, Neutral, and Secondary palettes.*

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

### Brand Palette

Beyond the functional product tokens above, the **Teachable Brand Kit** defines the fuller brand identity — used for marketing, illustration, and expressive surfaces. It is organized into **Primary** (Lemon, Light Lemon, Navy), **Neutral** (Charcoal, Warm Gray, Cool Beige), **Secondary** (Bordeaux, Cabernet, Olive), and **Tertiary** (Turquoise, Peach, Violet) families, each with an 8-step tint & shade ramp (`<family>-100` lightest → `<family>-800` darkest).

- **Lemon (#E6FF32)** is the canonical brand value. Note the product UI token (`brand-primary` / `primary`, #E7FF33) is a hair off from it — treat **#E6FF32** as the source of truth for brand work.
- **Secondary & Tertiary** colors bring warmth and range to editorial and data contexts — use them as accents, not as primary UI chrome.
- Reserve the deep shades (**600–800**) for text and contrast; use the light tints (**100–300**) for backgrounds and fills.

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

Depth in the Teachable Design System is achieved through **subtle tonal layers** rather than dramatic shadows. The design language is intentionally flat, allowing educational content to remain the focus.

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

## Gradients

The brand uses soft, two-stop **linear gradients** for expressive surfaces — hero backgrounds, feature cards, and brand moments. They run on a consistent diagonal between two adjacent brand colors. Keep gradients to large surfaces, and never set body text on the busiest part of one.

## Logo

The Teachable identity comes in two lockups: the full **wordmark** and the **mark** — the standalone "t" symbol, used in compact spaces like avatars, app icons, and favicons. Both ship in three colorways — **Black**, **White**, and **Lemon** — chosen for contrast against the surface behind them.

- **Black** on light or cream surfaces (the default lockup).
- **White** on dark surfaces — Navy, Charcoal, or photography.
- **Lemon** on dark surfaces when a brand-forward accent is wanted — never on white (insufficient contrast).
- **Clear space:** keep padding around the wordmark at least the height of the lowercase "t" on every side. Don't crowd it.
- **Don't** recolor, stretch, rotate, add effects, or place the wordmark on a low-contrast background.

## Maintaining this file

`DESIGN.md` is the source of truth for the design system. Two practical notes:

- **Validate changes before committing:** `npx @google/design.md lint DESIGN.md` checks WCAG AA contrast (4.5:1 minimum for body text), that every token reference resolves, and that required fields are present.
- **Relationship to the product code:** the live UI is built from `tokens.json` in the product repo (mono-frontend, `packages/ui/…`), not from this file. They serve different purposes — `DESIGN.md` is the design spec, `tokens.json` is the implementation — and don't need to match exactly; reconcile them periodically (e.g. before major releases). This is also why the brand value and the product token differ slightly: **#E6FF32** (canonical brand Lemon) vs **#E7FF33** (the product `brand-primary` token).
