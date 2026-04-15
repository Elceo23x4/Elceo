# ELCEO

ELCEO is a production-minded market cognition platform with deterministic scoring and explainable, event-driven reasoning.

## Workspace structure

```text
apps/
  web/                      # Next.js application shell and routes
packages/
  config/                   # Deterministic runtime config, roles, plans, topics
  motion/                   # Motion tokens, variants, and reusable primitives
  providers/                # Provider adapter boundaries and composites
  schemas/                  # Zod schemas for runtime validation
  types/                    # Shared domain types and service contracts
services/                   # (planned) ingestion/reasoning/analytics workers
docs/                       # Product and execution guidance
```

## Package purpose

- `packages/motion`: Shared motion design language with reusable Reveal/Stagger/Parallax primitives and reduced-motion helpers.
- `packages/config`: Versioned deterministic config for assets, scoring weights, decay windows, roles, provider priority, plans, and Kafka topics.
- `packages/types`: Shared domain model contracts for identity, events, cognition, auth, plans, provider interfaces, and Kafka envelopes.
- `packages/schemas`: Zod schemas for environment, UTC timestamps, identity, event objects, and cognition payloads.
- `packages/providers`: Integration boundaries for market, macro, news, geopolitics, extraction, and macro context adapters.

## Service purpose (slice 1 scaffolding)

- `services/ingestion` (planned): source polling, normalization, and dedupe.
- `services/reasoning` (planned): deterministic scoring orchestration and contradiction-aware explanations.
- `services/chart-intelligence` (planned): H4 zones and annotation generation.
- `services/analytics` (planned): journal and performance aggregation.
- `services/admin-jobs` (planned): audits, source health, and maintenance jobs.

## Deterministic logic vs provider logic

ELCEO separates deterministic cognition logic from external providers:

- Deterministic policy/config lives in `packages/config`.
- Domain contracts live in `packages/types` and runtime guards in `packages/schemas`.
- Provider-specific I/O boundaries live in `packages/providers` adapters.
- UI/services consume normalized types and schemas rather than raw provider payloads.

This keeps core scoring, decay, contradiction, and ranking explainable and stable while provider implementations can evolve independently.

## Running tests/checks

This slice currently provides scaffolding boundaries, so run checks as you expand deterministic modules:

```bash
# Typecheck (once tsconfig/workspace scripts exist)
pnpm -r typecheck

# Unit tests for deterministic logic modules
pnpm -r test
```

## What is mocked in slice 1

- Provider adapters currently return empty arrays/default values by design.
- Composite adapters perform simple ordered fallback across mocked providers.
- Web routes are scaffold pages to establish route structure.
- Admin shell is minimal layout scaffolding for future governance features.

Slice 1 currently establishes structural boundaries and contracts needed for deterministic logic expansion in subsequent slices.
