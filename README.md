# boilerplate-web

A **docs-first Next.js boilerplate**: the scaffold, tooling, and standards to start a new app, with the product pipeline left blank. Extracted from [tkodev-web-v5](https://github.com/tkodev/tkodev-web-v5), stripped of everything that made it a portfolio.

**Status: a working shell.** It builds, lints, types, and serves a single placeholder page. The design system, surfaces, and content are the new project's to write.

## Tech stack

Next.js App Router on Tailwind v4, with shadcn/Radix primitives, CVA variants, and Vitest; the authoritative stack table (versions included) is [docs/02-prd/05-architecture.md §Stack](docs/02-prd/05-architecture.md).

## Getting started

```bash
pnpm install      # install deps
pnpm dev          # local dev server
pnpm build        # production build
pnpm start        # production start
pnpm lint:check   # eslint checking
pnpm lint:fix     # eslint autofix
pnpm type:check   # typescript checking
pnpm test         # vitest
```

## Starting a new project from this

1. **Rename.** `package.json` `name`, then `src/constants/system.ts` (`appdata`: title, siteName, description, url) and the brand string in `src/components/templates/header.tsx`.
2. **Fill the PRD.** Work `docs/02-prd/` in numbered order (brief → observations → solution → design → architecture → plan); each stage derives from the ones before it. The `<angle-bracket>` prompts mark what to replace.
3. **Land the tokens.** Transcribe the design file into [docs/02-prd/04-design.md](docs/02-prd/04-design.md), then into `src/themes/theme.css`. A new named font-size ramp must also be registered with `cn()`'s twMerge extension in `src/utils/theme.ts`, or twMerge reads `text-h1` as a text color.
4. **Add primitives.** shadcn first (`pnpm dlx shadcn@latest add <name>`, landing in `src/components/atoms/`), reformatted to the house shape in [docs/01-standards/components.md](docs/01-standards/components.md); `src/components/atoms/example.tsx` is that shape.
5. **Add assets.** Favicons and the OG image under `public/images/`, then wire them into `defaultMetadata`.

## What's in the box

| Area | What ships |
| --- | --- |
| Tooling | pnpm, TypeScript strict, ESLint 9 (`@tkodev/eslint-config-next` + jsx-a11y strict), Vitest (green with no tests), husky pre-commit/pre-push, GitHub Actions checks |
| App | Root layout with the persistent shell (underlay / header / main / footer / overlay), home placeholder, `error`, `not-found`, `sitemap` |
| Components | `example.tsx` (the house shape), the `templates/` shell: `header`, `footer`, `main`, `section`, `underlay`, `overlay` |
| Theme | `themes/theme.css`: stock shadcn neutral in two themes, the `dark:` variant rebound to the `.dark` class, radius/gap/font/easing tokens, `helpers.css` utilities |
| Fonts | Geist + Geist Mono via `next/font/local` |
| Docs | `docs/01-standards/` as-is; `docs/02-prd/` as blank templates |

Deliberately absent: the design system, product components, surfaces, content constants, and any licensed asset.

## Docs

Docs drive the implementation, read in numbered order: the rules ([docs/01-standards/](docs/01-standards/)) split by topic, then the PRD ([docs/02-prd/](docs/02-prd/)) as a numbered pipeline ending in the plan (the live milestone list):

| Doc | What it owns |
| --- | --- |
| [docs/01-standards/](docs/01-standards/) | Rules by topic: [process](docs/01-standards/process.md), [writing](docs/01-standards/writing.md), [nextjs](docs/01-standards/nextjs.md), [components](docs/01-standards/components.md), [data](docs/01-standards/data.md), [testing](docs/01-standards/testing.md), [performance](docs/01-standards/performance.md), [accessibility](docs/01-standards/accessibility.md), [seo](docs/01-standards/seo.md), [git](docs/01-standards/git.md) |
| [docs/02-prd/01-brief.md](docs/02-prd/01-brief.md) | The distilled intent: what the site is, who it's for, aesthetic, references |
| [docs/02-prd/02-observations.md](docs/02-prd/02-observations.md) | Research, risks, and the direction taken on each |
| [docs/02-prd/03-solution.md](docs/02-prd/03-solution.md) | The settled design: concept, surfaces, motion system |
| [docs/02-prd/04-design.md](docs/02-prd/04-design.md) | Design tokens (typography, color, radius, gap, fonts) |
| [docs/02-prd/05-architecture.md](docs/02-prd/05-architecture.md) | Stack, information architecture, repo structure, data layer, theming |
| [docs/02-prd/06-plan.md](docs/02-prd/06-plan.md) | The plan: the live milestone list (dependencies, status, scope) |

## Other

For AI-agent orientation, see [AGENTS.md](AGENTS.md) (CLAUDE.md symlinks to it).
