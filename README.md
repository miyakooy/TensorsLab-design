# TensorsLab Design

TensorsLab Design is a **design-only** skill package inspired by the workflow structure of `huashu-design`, adapted for TensorsLab’s brand and product communication needs.

## Clean-room guarantee

This repository is being reconstructed as a clean-room TensorsLab design skill:

- keep the complete design capability set
- remove huashu-specific identity, voice, and showcase artifacts
- replace all visuals, examples, and language with TensorsLab-native material
- preserve generic mechanics only when they are not identity-bearing
- rebuild anything that still feels like huashu after the brand label is removed

## What this skill is for

- High-fidelity UI / app / web prototypes
- Presentation decks and pitch visuals
- Motion graphics and launch videos
- Infographics and data visualization
- Brand-driven visual exploration
- Design critique and visual QA

## What this skill is not for

- Backend systems
- Product infrastructure
- Model orchestration
- General TensorsLab business logic
- Internal operations tooling

## Key differences from huashu-design

- Same design-first workflow structure
- TensorsLab brand language and product context
- Optional use of `vison-skills` for visual generation / editing tasks
- Focused on TensorsLab marketing, product, and sales design deliverables

## Suggested workflow

1. Collect brand assets and references
2. Decide whether the task is prototype / deck / animation / infographic
3. Pick design direction(s)
4. Produce variants and early placeholders
5. Refine
6. Verify
7. Export

## Manual asset note

Some examples from the original `huashu-design` repo are tightly coupled to that project’s brand or case library. Those should be **reworked**, not copied directly.

If a needed asset cannot be generated automatically, the skill should explicitly tell the user which items must be provided manually:

- Logo
- Product screenshots
- Brand guidelines
- Official product imagery
- Case-study photos or illustrations

## Repository layout

```text
TensorsLab--design/
├── SKILL.md
├── README.md
├── assets/
├── references/
├── scripts/
└── demos/
```


## Manual case migration

See `references/manual-case-migration.md` for examples that should be rebuilt instead of copied directly from huashu-design.
