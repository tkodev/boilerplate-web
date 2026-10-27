# Architecture

How the app is shaped: stack, information architecture, repo structure, data layer, theming. What we're building lives in [01-brief.md](01-brief.md); tokens in [04-design.md](04-design.md); component anatomy in the design file.

## Stack

| Layer | Choice |
| --- | --- |
| Package manager | **pnpm** 11, Node ≥ 24 |
| Language | TypeScript, strict |
| Framework | Next.js **16**, **App Router** |
| Styling | **Tailwind v4** (CSS-first `@theme`) |
| Variants | **CVA** (`class-variance-authority`) + `cn()` = `twMerge(clsx(...))` |
| Primitives | **shadcn** (Radix underneath), themed to the project's tokens |
| Theming | Two themes: `:root` light, `.dark` scope ([04-design.md](04-design.md) §Color) |
| Motion | CSS animations first; add a motion library only for choreography CSS can't express |
| Icons | `lucide-react` (sole icon library) |
| Linting | **ESLint 9** flat config via [`@tkodev/eslint-config-next`](https://github.com/tkodev/eslint-config-next), extended with `eslint-plugin-jsx-a11y` (strict) so the accessibility floor is a lint error rather than a review note; no Biome, no standalone Prettier (the shared config runs it as a lint rule) |
| Testing | **Vitest**: `pnpm test` |
| Fonts | `next/font/local`: Geist, Geist Mono |
| Dates | `date-fns` / `date-fns-tz` |
| Analytics | `@vercel/analytics` + `@vercel/speed-insights`, wired in the root layout |

## Information architecture

### Route map

| Route | Page | Nav label | Index |
| --- | --- | --- | --- |
| `/` | Home | — | `H` |

<Section indices count from the surface's letter: each surface owns a letter, the
hero takes `.0`, each section below it increments. A surface holds its letter
whether or not it is built, so nothing renumbers when it lands.>

### Navigation

- **Header nav**: <the routes, and how the current one is marked>.

## Repo structure

The folder layout follows the Next.js folder-structure standard:

```text
.
├── AGENTS.md            # agent orientation
├── README.md            # human orientation
├── src/                 # nextjs application code
├── public/              # nextjs static assets
└── docs/
    ├── 01-standards/    # rules, split by topic
    └── 02-prd/          # the numbered product docs, read in order
```

## Data layer

**Source of truth:** `src/types/` + `src/constants/`. This repo owns its content directly.

The data model:

| Export | Shape | Notes |
| --- | --- | --- |
| `appdata` / `defaultMetadata` | site identity + root Metadata | `constants/system.ts` |
| `headerEntries` / `footerEntries` | `NavEntry[]` | `constants/layout.ts` |

## Theming architecture

`themes/theme.css` is the single CSS entry imported by `app/layout.tsx`: it pulls in Tailwind and `helpers.css`, defines both theme blocks (values from [04-design.md](04-design.md)), and declares the `@theme {}` blocks. The root is light and `.dark` scopes invert it; the `dark:` variant is rebound to that boundary (`@custom-variant dark (&:is(.dark, .dark *))`) so it follows the theme, not the visitor's OS. A project that inverts the default (a dark root with `.light` scopes) flips the variant with it.

## Motion

- **Motion tokens** live in the CSS `@theme` easing/animation tokens; if a JS motion layer lands, its durations and easings mirror them from one `constants/motion.ts` so no magic numbers scatter.

## Rendering model

- All pages are fully static; data is compile-time constants.
- One root `app/layout.tsx`: fonts on `<body>`, the persistent shell (anatomy owned by the components standard §Layout shell), metadata export, analytics.
