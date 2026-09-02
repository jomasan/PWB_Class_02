# Style Guide — PWB Class 02

A technical UI specification for this app. The aesthetic draws from creative-coding environments like **TouchDesigner** and **Max/MSP**: dark, dense, utilitarian, and built for parameter control — not marketing pages.

---

## Design Principles

1. **Information density over decoration** — small type, tight spacing, no wasted pixels
2. **Dark by default** — the 3D viewport and UI share a near-black palette; UI panels float above the canvas
3. **One accent color** — used sparingly for active states, values, focus, and 3D highlights; everything else is greyscale
4. **Monospace for data** — labels are sans-serif; numbers, values, and code use monospace
5. **Flat panels, sharp corners** — minimal border-radius (0–2px); no glassmorphism, gradients, or drop shadows on panels
6. **Quiet hierarchy** — contrast comes from size and opacity, not bold colors

---

## Color Palette

### CSS Variables

Use these tokens everywhere. Do not introduce additional accent colors.

```css
:root {
  /* Backgrounds */
  --bg-canvas:     #0a0a0a;   /* 3D viewport, deepest layer */
  --bg-app:        #111111;   /* app shell */
  --bg-panel:      #1a1a1a;   /* parameter panels, sidebars */
  --bg-input:      #141414;   /* sliders, fields, inset areas */
  --bg-hover:      #222222;   /* row / control hover */

  /* Borders */
  --border-subtle: #2a2a2a;   /* panel edges, dividers */
  --border-strong: #3a3a3a;   /* focused panels, active borders */

  /* Text */
  --text-primary:   #c8c8c8;  /* labels, body */
  --text-secondary: #707070;  /* hints, disabled, section headers */
  --text-muted:     #484848;  /* placeholders, de-emphasized */
  --text-value:     #e0e0e0;  /* numeric readouts, active values */

  /* Accent — the ONLY chromatic color */
  --accent:         #3dcc7a;  /* technical green — active states & highlights */
  --accent-dim:     rgba(61, 204, 122, 0.15);
  --accent-glow:    rgba(61, 204, 122, 0.4);

  /* Semantic (derived from accent + greyscale only) */
  --focus-ring:     var(--accent);
  --slider-track:   var(--border-subtle);
  --slider-fill:    var(--accent);
}
```

### Usage Rules

| Token | Use for |
|-------|---------|
| `--bg-canvas` | Three.js / WebGL background |
| `--bg-panel` | Side panels, parameter racks, modals |
| `--accent` | Active slider thumb, focused input border, selected tab, 3D object highlight, link hover |
| `--text-secondary` | Uppercase section labels (`CONTROLS`, `TRANSFORM`) |
| `--text-value` | Live numeric output next to sliders |

**Never use:** pure white (`#fff`), saturated blues/greens/purples, gradient headers, or colored body text.

---

## Typography

### Font Stack

```css
--font-ui:    'Inter', 'Helvetica Neue', system-ui, sans-serif;
--font-mono:  'JetBrains Mono', 'SF Mono', 'Consolas', monospace;
```

Load `JetBrains Mono` (or `IBM Plex Mono`) for value readouts if available; fall back to system monospace.

### Scale

All sizes are intentionally small. Base UI size is **11px**.

| Role | Size | Weight | Font | Case | Example |
|------|------|--------|------|------|---------|
| App title | 12px | 500 | `--font-ui` | as typed | `PWB Class 02` |
| Section label | 10px | 500 | `--font-ui` | UPPERCASE | `TRANSFORM` |
| Parameter label | 11px | 400 | `--font-ui` | as typed | `Rotation Y` |
| Value readout | 11px | 400 | `--font-mono` | — | `0.000` |
| Hint / footer | 10px | 400 | `--font-ui` | — | `Drag to orbit` |
| Code / path | 10px | 400 | `--font-mono` | — | `/project/scene` |

### Letter-spacing

- Section labels (uppercase): `0.08em`
- App title: `0.02em`
- Body: default

### Line Height

- UI default: `1.3` (tight)
- Multi-line hints: `1.4`

---

## Spacing & Layout

Use a **4px base grid**. Prefer multiples of 4.

| Token | Value | Use |
|-------|-------|-----|
| `--space-xs` | 4px | gap between label and control |
| `--space-sm` | 8px | inner panel padding (vertical) |
| `--space-md` | 12px | inner panel padding (horizontal) |
| `--space-lg` | 16px | gap between parameter rows |
| `--space-xl` | 24px | panel-to-panel separation |

### Panel Dimensions

- Side panel width: **200–240px** (fixed; do not stretch full width on desktop)
- Panel padding: `8px 12px`
- Parameter row height: **28–32px** (label + control on one line when possible)
- Border radius: **0px** or **2px** max

### Viewport

- Canvas fills 100% of the window behind all UI
- UI overlays use `pointer-events: none` on containers; re-enable on interactive panels
- No centered marketing layout; panels anchor to edges (top-left header, left or right parameter rack)

---

## Components

### App Header

Minimal bar — not a hero banner.

```
┌─────────────────────────────────────────┐
│ PWB Class 02                            │  ← 12px, --text-primary, no gradient
└─────────────────────────────────────────┘
```

- Background: `--bg-app` at 90% opacity, or transparent over canvas
- Bottom border: `1px solid var(--border-subtle)`
- Padding: `8px 12px`
- No logo lockup unless required; title text only

### Parameter Panel (Side Panel)

Modeled on TouchDesigner / Max inspector panels.

```
┌─ TRANSFORM ──────────────────┐
│                              │
│  Rotation Y    [====○----]   │
│                0.000         │  ← mono value, right-aligned or below
│                              │
│  Scale         [==○------]   │
│                1.000         │
│                              │
└──────────────────────────────┘
```

- Background: `--bg-panel`
- Border: `1px solid var(--border-subtle)`
- Section header: 10px uppercase, `--text-secondary`, bottom border `1px solid var(--border-subtle)`, padding-bottom `4px`, margin-bottom `8px`
- No rounded corners > 2px
- No backdrop blur

### Sliders

- Track height: **2–3px**, color `--slider-track`
- Fill / active portion: `--slider-fill` (`--accent`)
- Thumb: **8×8px** square or circle, `--accent`; no shadow
- Disabled: 40% opacity, `cursor: not-allowed`
- Label left, slider right — single row when space allows

### Buttons

- Height: **24px**
- Padding: `4px 10px`
- Font: 11px `--font-ui`
- Background: `--bg-input`
- Border: `1px solid var(--border-subtle)`
- Hover: `--bg-hover`, border `--border-strong`
- Active / primary: background `--accent-dim`, border `--accent`, text `--accent`

### Inputs (number, text)

- Height: **22px**
- Background: `--bg-input`
- Border: `1px solid var(--border-subtle)`
- Focus: border `--accent`, no glow (or 1px outline `--accent-dim`)
- Value font: `--font-mono`, 11px

### Dividers

- `1px solid var(--border-subtle)` — full width inside panels
- Never use dashed or colored dividers

---

## 3D Viewport

The canvas is part of the visual system, not separate from it.

| Property | Value |
|----------|-------|
| Background | `--bg-canvas` (`#0a0a0a`) |
| Object highlight | `--accent` or a desaturated variant for emissive accents |
| Grid / helpers | `#2a2a2a` if shown; keep subtle |
| Secondary lights | white or warm white only — no colored rim lights unless driven by a parameter |

Avoid purple/blue ambient tints in the default scene; neutral dark keeps focus on the accent in the UI.

---

## Interaction States

| State | Treatment |
|-------|-----------|
| Default | `--text-primary` on `--bg-panel` |
| Hover | `--bg-hover` background |
| Focus | `1px` border `--accent` |
| Active / selected | text or fill `--accent` |
| Disabled | 40% opacity, `--text-muted` |
| Dragging (canvas) | no UI change; cursor `grab` / `grabbing` on viewport |

Transitions: **80–120ms** ease on background and border only. No bouncy animations.

---

## Do / Don't

### Do

- Keep panels narrow and anchored to screen edges
- Show live numeric values beside controls (mono font)
- Use uppercase 10px labels for section grouping
- Match 3D background to `--bg-canvas`
- Use `--accent` for one purpose at a time per control (thumb OR border, not both competing)

### Don't

- Don't use font sizes above 14px in the UI
- Don't use card-style rounded panels (16px radius)
- Don't use gradients, blurs, or drop shadows on panels
- Don't add a second brand color (no blue links + green sliders)
- Don't center large hero text over the viewport
- Don't use icon-heavy toolbars — prefer text labels

---

## Reference Implementations

When in doubt, compare against:

- **TouchDesigner** — Parameter COMP panel, dark grey racks, orange active states, compact slider rows
- **Max/MSP** — Inspector sidebar, charcoal `#1e1e1e` objects, small Arial/Helvetica labels, tight vertical stacking

---

## File Conventions

| File | Purpose |
|------|---------|
| `src/styles/tokens.css` | CSS custom properties (future) |
| `src/styles/components.css` | panel, slider, button classes (future) |
| `STYLE-GUIDE.md` | this document — source of truth |

When adding new UI, define colors and sizes from the tokens above before writing component styles.

---

## Quick Copy — `:root` Block

```css
:root {
  --bg-canvas: #0a0a0a;
  --bg-app: #111111;
  --bg-panel: #1a1a1a;
  --bg-input: #141414;
  --bg-hover: #222222;
  --border-subtle: #2a2a2a;
  --border-strong: #3a3a3a;
  --text-primary: #c8c8c8;
  --text-secondary: #707070;
  --text-muted: #484848;
  --text-value: #e0e0e0;
  --accent: #3dcc7a;
  --accent-dim: rgba(61, 204, 122, 0.15);
  --accent-glow: rgba(61, 204, 122, 0.4);
  --font-ui: 'Inter', 'Helvetica Neue', system-ui, sans-serif;
  --font-mono: 'JetBrains Mono', 'SF Mono', Consolas, monospace;
  --space-xs: 4px;
  --space-sm: 8px;
  --space-md: 12px;
  --space-lg: 16px;
  --space-xl: 24px;
}
```

---

*One accent. Small type. Dark panels. Let the canvas breathe.*
