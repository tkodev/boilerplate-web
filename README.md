# boilerplate-web

A **docs-first Next.js boilerplate**: the scaffold, tooling, and standards to start a new app, with the product pipeline left blank. Extracted from [tkodev-web-v5](https://github.com/tkodev/tkodev-web-v5), stripped of everything that made it a portfolio.

**Status: a working shell.** It builds, lints, types, and serves a single placeholder page. The design system, surfaces, and content are the new project's to write.

## Tech stack

Next.js App Router on Tailwind v4, with shadcn/Radix primitives, CVA variants, and Vitest; the authoritative stack table (versions included) is [docs/prd/05-architecture.md §Stack](docs/prd/05-architecture.md).

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
2. **Fill the PRD.** Work `docs/prd/` in numbered order (brief → observations → solution → design → architecture → plan); each stage derives from the ones before it. The `<angle-bracket>` prompts mark what to replace.
3. **Land the tokens.** Transcribe the design file into [docs/prd/04-design.md](docs/prd/04-design.md), then into `src/themes/theme.css`. A new named font-size ramp must also be registered with `cn()`'s twMerge extension in `src/utils/theme.ts`, or twMerge reads `text-h1` as a text color.
4. **Add primitives.** shadcn first (`pnpm dlx shadcn@latest add <name>`, landing in `src/components/atoms/`), reformatted to the house shape in the [components skill](.claude/skills/components/SKILL.md); `src/components/atoms/example.tsx` is that shape.
5. **Add assets.** Favicons and the OG image under `public/images/`, then wire them into `defaultMetadata`.

## What's in the box

| Area | What ships |
| --- | --- |
| Tooling | pnpm, TypeScript strict, ESLint 9 (`@tkodev/eslint-config-next` + jsx-a11y strict), Vitest (green with no tests), husky pre-commit/pre-push, GitHub Actions checks |
| App | Root layout with the persistent shell (underlay / header / main / footer / overlay), home placeholder, `error`, `not-found`, `sitemap` |
| Components | `example.tsx` (the house shape), the `templates/` shell: `header`, `footer`, `main`, `section`, `underlay`, `overlay` |
| Theme | `themes/theme.css`: stock shadcn neutral in two themes, the `dark:` variant rebound to the `.dark` class, radius/gap/font/easing tokens, `helpers.css` utilities |
| Fonts | Geist + Geist Mono via `next/font/local` |
| Docs | Standards vendored as skills in `.claude/skills/` / `.agents/skills/`; `docs/prd/` as blank templates |

Deliberately absent: the design system, product components, surfaces, content constants, and any licensed asset.

## Docs

Docs drive the implementation, read in numbered order: the rules (vendored as skills in [.claude/skills/](.claude/skills/) / [.agents/skills/](.agents/skills/)) split by topic, then the PRD ([docs/prd/](docs/prd/)) as a numbered pipeline ending in the plan (the live milestone list):

| Doc | What it owns |
| --- | --- |
| [.claude/skills/](.claude/skills/) | Rules by topic, vendored from the shared skills library: [process](.claude/skills/process/SKILL.md), [writing](.claude/skills/writing/SKILL.md), [nextjs](.claude/skills/nextjs/SKILL.md), [components](.claude/skills/components/SKILL.md), [data](.claude/skills/data/SKILL.md), [testing](.claude/skills/testing/SKILL.md), [performance](.claude/skills/performance/SKILL.md), [accessibility](.claude/skills/accessibility/SKILL.md), [seo](.claude/skills/seo/SKILL.md), [git](.claude/skills/git/SKILL.md) |
| [docs/prd/01-brief.md](docs/prd/01-brief.md) | The distilled intent: what the site is, who it's for, aesthetic, references |
| [docs/prd/02-observations.md](docs/prd/02-observations.md) | Research, risks, and the direction taken on each |
| [docs/prd/03-solution.md](docs/prd/03-solution.md) | The settled design: concept, surfaces, motion system |
| [docs/prd/04-design.md](docs/prd/04-design.md) | Design tokens (typography, color, radius, gap, fonts) |
| [docs/prd/05-architecture.md](docs/prd/05-architecture.md) | Stack, information architecture, repo structure, data layer, theming |
| [docs/prd/06-plan.md](docs/prd/06-plan.md) | The plan: the live milestone list (dependencies, status, scope) |

## Other

For AI-agent orientation, see [AGENTS.md](AGENTS.md).
