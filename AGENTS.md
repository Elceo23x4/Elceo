# AGENTS.md

## ELCEO repository guidance for Codex

This repository contains the ELCEO platform, a production-minded AI-powered market cognition web application.

You must treat this repository as a serious long-term product codebase, not as a prototype sandbox.

## What ELCEO is

ELCEO is:
- a real-time market cognition and decision-support platform
- a premium web experience for aspiring serious traders and experienced macro traders
- a depth-first launch product focused on Gold (XAU/USD), Nasdaq 100, S&P 500, DE30, BTC/USD, and selected USD pairs
- an event-driven system with deterministic calculations and explainable reasoning
- a web app with strong mobile responsiveness
- a dual-mode product with both dark and light themes
- a premium, cinematic, editorial, futuristic interface merged with a signature interaction language

ELCEO is not:
- a generic trading dashboard
- a buy/sell signal spam tool
- a template reskin
- a one-off landing page project
- a product where AI prose replaces real logic
- financial advice

## Non-negotiable engineering rules

1. Keep deterministic logic in code, not in vague prose.
2. Keep provider integrations behind adapters.
3. Keep raw provider payloads out of UI logic.
4. Use typed schemas and clear domain models.
5. Maintain admin governance and explainability.
6. Preserve the ELCEO product identity and do not regress to generic fintech UX.
7. Keep the design language coherent across the landing page and application shell.
8. Build with maintainability and extension in mind.
9. Do not hardcode secrets; use environment variables only.
10. Respect reduced-motion preferences while still preserving the signature interaction language.

## Required build approach

For any major task:
1. read the relevant docs in `/docs`
2. propose the affected files and approach
3. implement in coherent slices
4. keep tests updated for deterministic logic
5. explain assumptions clearly

## Priority documents

Read these in `/docs` before major implementation work:
- elceo-master-prompt.md
- elceo-master-prompt2.md
- elceo-execution-pack.md
- elceo-provider-pack.md
- elceo-formula-sheet.md
- elceo-codex-run-sequence.md

## Product principles

- accuracy-first over speed-first in cognition updates
- event-native architecture
- layered explanation
- confidence-weighted hybrid reasoning
- moderate chart annotation density with filters
- zones rather than plain lines for key levels
- deterministic scoring for risk, confidence, contradiction, ranking, and key-level significance
- free plan plus premium plan entitlements
- strong disclaimers and terms acceptance
- role-based admin with super admin, analyst admin, and support admin

## When coding UI

- respect the premium editorial aesthetic
- support dark and light mode
- use soft red as the main color family and green as the accent
- preserve custom-styled layered typography
- keep motion authored and state-driven
- do not make every component look the same
- make the interface visually rich but still legible and performant

## When coding market logic

- use deterministic formulas first
- use AI for interpretation and explanation on top of normalized evidence
- preserve contradiction instead of forcing false consensus
- expose score breakdowns, not just opaque totals
- label horizons explicitly: intraday, swing, and where useful structural

## What to avoid

- giant unstructured files
- leaking provider-specific logic everywhere
- chatty code comments without useful information
- coupling UI directly to raw data sources
- placeholder architecture that cannot scale
- removing tests from the calculation layer

