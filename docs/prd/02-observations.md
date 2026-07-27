# Observations

Research findings and risks paired with the direction taken, structured by the
**priority frame** and subject to the directions-are-research rule, both defined
in [../01-standards/process.md](../01-standards/process.md) §The PRD. Where a direction
conflicts with the token contract, [04-design.md](04-design.md) wins. Settled
design lives in [03-solution.md](03-solution.md).

## 1. The Problem

<One or two sentences. The hard part, named.>

## 2. The Hardest Failure Mode

### Risk: <what breaks worst>

<What it is and why it is the worst case: design around this first.>

**Direction.** <The rule that answers it, applied concretely.>

## 3. What the research found

### <The current state / the prior version>

- <Finding.>

### <The design file, audited <DATE>>

**Bespoke (protect and amplify):**

- <What is already load-bearing and must survive.>

**Template (rebuild):**

- <What is stock and must go.>

### <The reference sites>

<The common thread across the references, then the standout technique adopted from
each, pointing at [03-solution.md](03-solution.md) for where it lands.>

## 4. Key Design Decisions

### Risk: <the tension>

<Both instincts, stated fairly, and why they conflict.>

**Direction.** <The load-bearing choice everything else hangs off.>

## 5. What to Prototype First

<The riskiest slice, validated early: this names the proving surface
([../01-standards/process.md](../01-standards/process.md) §Milestones).>

## Low Priority Features

*Deliberately deferred: noted, not built.*

- **<Feature>**: <why it is deferred rather than cut.>
