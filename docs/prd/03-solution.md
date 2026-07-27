# Solution

The settled design: the design surfaces described at concept level, read through
the research in [02-observations.md](02-observations.md). The structure lives in
[05-architecture.md](05-architecture.md); the token contract in [04-design.md](04-design.md).
A concept not yet in the design file is marked **direction**: research, not contract
([process](../01-standards/process.md) §The PRD).

## The concept

<The concept in one phrase, then the sentence that unpacks it.>

The layers, top to bottom:

| Layer | What it is |
| --- | --- |
| <layer> | <what it is> |

## Design frames

| Frame | Link |
| --- | --- |
| <surface> | <design file node link> |

## Surfaces

<What is global (overlays, shells) versus per-route. Routes and navigation live in
[05-architecture.md](05-architecture.md) §Information architecture.>

## Pages

### <Surface>: <its one-phrase concept>

<What it is, then its sections as a list. Each surface gets one signature
interaction, never two.>

## The motion system

Motion is a grammar, not garnish:

- **Sequences**: <the choreographed moments>.
- **Entrances**: <how content arrives; values defined once and imported>.
- **Ambient**: <what keeps the site feeling on at rest>.
- **Micro**: <hover, expand/collapse timings>.

## Edge cases

- **Reduced motion**: <the static equivalent of every motion moment>.
- **Mobile**: <how each surface recomposes; hover-only metadata needs a
  visible-by-default equivalent>.
- **Media failure**: <the fallback, never a black hole>.
- **Slow connections**: <what degrades and how>.

## Why this shape

<The hardest risks from [02-observations.md](02-observations.md), and the line from
each risk to the shape chosen. The layers are separable: the site functions with
the presentation layer stripped, which is what the reduced-motion path proves.>
