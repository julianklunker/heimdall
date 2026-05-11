---
name: Nebula
colors:
  surface: '#121414'
  surface-dim: '#121414'
  surface-bright: '#383939'
  surface-container-lowest: '#0d0e0f'
  surface-container-low: '#1b1c1c'
  surface-container: '#1f2020'
  surface-container-high: '#292a2a'
  surface-container-highest: '#343535'
  on-surface: '#e3e2e2'
  on-surface-variant: '#c4c7c8'
  inverse-surface: '#e3e2e2'
  inverse-on-surface: '#303031'
  outline: '#8e9192'
  outline-variant: '#444748'
  surface-tint: '#c6c6c7'
  primary: '#ffffff'
  on-primary: '#2f3131'
  primary-container: '#e2e2e2'
  on-primary-container: '#636565'
  inverse-primary: '#5d5f5f'
  secondary: '#ffb5a0'
  on-secondary: '#5f1500'
  secondary-container: '#d73b00'
  on-secondary-container: '#fffbff'
  tertiary: '#ffffff'
  on-tertiary: '#313030'
  tertiary-container: '#e5e2e1'
  on-tertiary-container: '#656464'
  error: '#ffb4ab'
  on-error: '#690005'
  error-container: '#93000a'
  on-error-container: '#ffdad6'
  primary-fixed: '#e2e2e2'
  primary-fixed-dim: '#c6c6c7'
  on-primary-fixed: '#1a1c1c'
  on-primary-fixed-variant: '#454747'
  secondary-fixed: '#ffdbd1'
  secondary-fixed-dim: '#ffb5a0'
  on-secondary-fixed: '#3b0900'
  on-secondary-fixed-variant: '#862200'
  tertiary-fixed: '#e5e2e1'
  tertiary-fixed-dim: '#c8c6c5'
  on-tertiary-fixed: '#1c1b1b'
  on-tertiary-fixed-variant: '#474646'
  background: '#121414'
  on-background: '#e3e2e2'
  surface-variant: '#343535'
typography:
  display-xl:
    fontFamily: Geist Sans
    fontSize: 64px
    fontWeight: '700'
    lineHeight: '1.1'
    letterSpacing: -0.04em
  headline-lg:
    fontFamily: Geist Sans
    fontSize: 32px
    fontWeight: '600'
    lineHeight: '1.2'
    letterSpacing: -0.02em
  headline-md:
    fontFamily: Geist Sans
    fontSize: 24px
    fontWeight: '500'
    lineHeight: '1.3'
    letterSpacing: -0.01em
  body-lg:
    fontFamily: Geist Sans
    fontSize: 18px
    fontWeight: '400'
    lineHeight: '1.6'
    letterSpacing: '0'
  body-md:
    fontFamily: Geist Sans
    fontSize: 16px
    fontWeight: '400'
    lineHeight: '1.6'
    letterSpacing: '0'
  mono-label:
    fontFamily: JetBrains Mono
    fontSize: 14px
    fontWeight: '500'
    lineHeight: '1.4'
    letterSpacing: 0.05em
  mono-code:
    fontFamily: JetBrains Mono
    fontSize: 13px
    fontWeight: '400'
    lineHeight: '1.5'
    letterSpacing: '0'
rounded:
  sm: 0.125rem
  DEFAULT: 0.25rem
  md: 0.375rem
  lg: 0.5rem
  xl: 0.75rem
  full: 9999px
spacing:
  base: 4px
  xs: 8px
  sm: 16px
  md: 24px
  lg: 48px
  xl: 80px
  gutter: 24px
  margin: 40px
---

## Brand & Style

This design system embodies a "Deep Space Tech" aesthetic, blending high-utility minimalism with ethereal visual depth. It targets a sophisticated technical audience that values precision and forward-thinking innovation.

The design style is a hybrid of **Minimalism** and **Glassmorphism**. It relies on a stark, high-contrast foundational layer (pure blacks and whites) to establish authority, while using translucent glass layers and animated noise-based shader backgrounds to create a sense of infinite digital space. The energy of the brand is concentrated in a singular, high-saturation orange accent, representing the "spark" of innovation within the void.

## Colors

The palette is strictly curated to maintain a premium, late-night engineering atmosphere.

*   **Core Palette:** The background is an absolute black (#000000) to maximize OLED efficiency and contrast. Primary text and key structural elements use pure white (#FFFFFF).
*   **Signature Accent:** High-saturation Orange (#FF5722) is used exclusively for primary actions, critical status indicators, and "moments of energy." It should never be used for large surfaces.
*   **Glass Layers:** Translucent grays and whites with low alpha channels (3-8%) create the "glass" surfaces.
*   **Functional Grays:** A scale of neutral grays facilitates hierarchy in secondary and tertiary text.

## Typography

This design system utilizes a dual-font strategy to balance human-centric clarity with technical precision.

*   **Geist Sans:** Used for all prose, headings, and primary interface labels. It provides a clean, neutral, and modern character.
*   **JetBrains Mono:** Used for technical metadata, data points, IDs, and code snippets. This "technical layer" should often be styled in uppercase for labels or secondary neutral colors to differentiate from narrative content.
*   **Optical Sizing:** Large display type should use tighter letter-spacing and heavier weights, while small mono labels should use increased letter-spacing for legibility.

## Layout & Spacing

The layout philosophy follows a **fixed-grid** model for desktop (12 columns, 1200px max-width) and a **fluid-grid** model for mobile.

*   **Spaciousness:** The design prioritizes "breathability." Large gaps (Section margins of 80px+) are used to separate distinct concepts.
*   **The 4px Grid:** All components, padding, and margins must be increments of 4px.
*   **Alignment:** Hard-left alignment is preferred for all technical data to maintain a "structured terminal" feel.

## Elevation & Depth

Depth is conveyed through light and transparency rather than shadows.

*   **Tonal Layering:** Objects closer to the user are lighter. The base layer is #000000. Elevated cards use a subtle white tint at 3-5% opacity.
*   **Backdrop Blur:** All elevated "glass" surfaces must implement a `backdrop-filter: blur(20px)`. This creates a sense of physical material between the user and the animated background.
*   **Glow Effects:** Instead of traditional drop shadows, primary elements (like the orange action buttons) may use a subtle, color-matched outer glow (`box-shadow: 0 0 20px rgba(255, 87, 34, 0.3)`) to simulate light emission in a dark space.
*   **Inner Borders:** Use 1px solid borders with 10% white opacity on glass elements to define edges against the dark background.

## Shapes

The shape language is "Soft-Precision." While the aesthetic is technical, avoid aggressive sharp corners for primary containers to maintain a premium feel.

*   **Base Radius:** 4px (0.25rem) for small components like inputs and tags.
*   **Large Radius:** 8px (0.5rem) for cards and modals.
*   **Exceptions:** Interactive buttons use the base radius to maintain a crisp, engineered look. Circular shapes are reserved solely for avatars or specific status pips.

## Components

*   **Buttons:** Primary buttons are Solid Orange (#FF5722) with Black text. Secondary buttons are Ghost-style with 1px White borders (20% opacity) and White text.
*   **Cards:** Use a semi-transparent background (`rgba(255, 255, 255, 0.04)`) with a 1px top-edge highlight to simulate light hitting the glass.
*   **Inputs:** Minimalist bottom-border only or very subtle ghost containers. Focus state should trigger a transition to a pure white border and a subtle orange glow.
*   **Chips/Tags:** Use Geist Mono in all-caps, 10px or 12px size. Background should be a dark gray (10% white) to keep them secondary.
*   **Technical Details:** Any data-heavy list should use a "Data Row" component: Geist Mono for values, Geist Sans for labels, separated by a subtle 5% white dashed line.
*   **Background Shaders:** Implement a subtle "Star-field" or "Purple/Blue Noise" shader behind the main content area, set to a very slow animation speed (0.05x) to provide life without distraction.