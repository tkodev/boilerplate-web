# Design

The design-token contract for typography, color, radius, gap, and fonts in code, transcribed from the design file. Directions proposed in [02-observations.md](02-observations.md) land here only when the design file adopts them and this doc is re-transcribed.

Design sources (node IDs are stable; fetch these when a value here needs verification):

| Token page | Node |
| --- | --- |
| Text tokens | <link> |
| Color tokens | <link> |
| Visual tokens (radius, gap) | <link> |

Base unit: **16px = 1rem**. Tokens land in CSS as custom properties consumed through Tailwind v4 `@theme` (see [05-architecture.md](05-architecture.md) §Theming).

## Fonts

| Font | Role | Weights used |
| --- | --- | --- |
| **Geist** | Body text, UI labels (the default) | variable |
| **Geist Mono** | Inline and block code | variable |

Loaded via `next/font/local`; CSS variables: `--font-geist-sans`, `--font-geist-mono`. A licensed face falls under the licensed-assets rule in the data standard.

## Typography

<The ramps. Each ramp is a table of token, size, line height, tracking; the default
step of each ramp is marked. A new named ramp is registered with `cn()`'s twMerge
extension in `utils/theme.ts`, or twMerge reads `text-h1` as a text color.>

### Body: Geist Regular

Line height 150% at token level; components override only when a design calls for tighter or looser leading.

| Token | Size |
| --- | --- |
| `xl` | 18px |
| `lg` | 16px |
| `md` | 14px |
| `sm` *(main)* | 12px |
| `xs` | 10px |

## Color

Semantic shadcn-shaped token set, in two themes (`:root` light + `.dark`). The brand
layer holds the raw values; the semantic layer is the only thing components consume.

| Token | Light | Dark | Usage |
| --- | --- | --- | --- |
| `background` | `#ffffff` | `#0a0a0a` | Page background |
| `foreground` | `#0a0a0a` | `#fafafa` | Primary text |
| `card` | `#ffffff` | `#171717` | Card surfaces |
| `card-foreground` | `#0a0a0a` | `#fafafa` | Text on card |
| `popover` | `#ffffff` | `#171717` | Popover surfaces |
| `popover-foreground` | `#0a0a0a` | `#fafafa` | Text on popover |
| `primary` | `#171717` | `#fafafa` | Primary action background |
| `primary-foreground` | `#fafafa` | `#171717` | Text on primary |
| `secondary` | `#f5f5f5` | `#262626` | Secondary elements |
| `secondary-foreground` | `#171717` | `#fafafa` | Text on secondary |
| `muted` | `#f5f5f5` | `#262626` | Subdued surfaces |
| `muted-foreground` | `#737373` | `#a3a3a3` | Captions, meta text |
| `accent` | `#f5f5f5` | `#262626` | Hover/highlight surfaces |
| `accent-foreground` | `#171717` | `#fafafa` | Text on accent |
| `destructive` | `#ef4444` | `#7f1d1d` | Destructive actions |
| `destructive-foreground` | `#fafafa` | `#fafafa` | Text on destructive |
| `border` | `#e5e5e5` | `#262626` | Hairlines, dividers |
| `input` | `#e5e5e5` | `#262626` | Form control borders |
| `ring` | `#0a0a0a` | `#d4d4d4` | Focus rings |

Stock neutral, pending the project's palette. Both themes ship; which one the root
carries, and whether a scope class inverts it, is [05-architecture.md](05-architecture.md) §Theming's concern.

### Chart

| Token | Light | Dark |
| --- | --- | --- |
| `chart-1` | `#2a9d90` | `#2662d9` |
| `chart-2` | `#e76e50` | `#e23670` |
| `chart-3` | `#274754` | `#e88c30` |
| `chart-4` | `#e8c468` | `#af57db` |
| `chart-5` | `#f4a462` | `#2eb88a` |

## Radius

| Token | Value |
| --- | --- |
| `radius-xs` | 4px / 0.25rem |
| `radius-sm` | 8px / 0.5rem |
| `radius-md` | 12px / 0.75rem |
| `radius-lg` | 16px / 1rem |
| `radius-xl` | 32px / 2rem |

## Gap

Spacing steps for flex/grid gaps and rhythm within components.

| Token | Value |
| --- | --- |
| `gap-xs` | 4px / 0.25rem |
| `gap-sm` | 8px / 0.5rem |
| `gap-md` | 16px / 1rem |
| `gap-lg` | 32px / 2rem |
| `gap-xl` | 64px / 4rem |

## Motion

<Durations and easings, once the design file tokenizes them. Until then the settled
motion grammar lives in [03-solution.md](03-solution.md) §The motion system and the
CSS easing tokens in `themes/theme.css` are the contract.>
