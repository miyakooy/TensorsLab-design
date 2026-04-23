# Case migration map

This file classifies original-source examples for TensorsLab migration.

## Clean-room rules

These rules are mandatory across the whole reconstruction:

1. Preserve **capabilities**, not identity.
2. Reuse **generic mechanics** only when they do not carry source-project-specific narrative or styling.
3. Replace every external-project-specific showcase, demo, and voice with TensorsLab-native material.
4. If a reused pattern still evokes huashu after the label is removed, rebuild it.
5. Keep the full feature set, but remove the original project’s visual and verbal fingerprints.

## Buckets

### Replicate

Patterns that are generic and safe to reuse as-is:

- HTML deck structure
- motion timeline scaffolds
- design canvas comparison layouts
- critique and review structure
- export pipeline concepts

### Adapt

Patterns that can be reused after replacing brand language, visuals, and examples:

- fallbacks for vague requests
- junior designer workflow
- brand asset protocol
- style recommendation flow
- showcase gallery mechanics

### Rebuild

Patterns that should be recreated specifically for TensorsLab:

- any source-project-branded demo
- any original launch animation that is tied to that source project
- any source-project-specific showcase art
- any identity-heavy gallery example
- any example that relies on source-project narrative cues

## Decision rule

If a sample still feels tied to the source project after the brand text is removed, rebuild it.

## Module-level guidance

| Module | Action | Notes |
|---|---|---|
| `SKILL.md` | Rebuild | Rewrite voice, prompts, triggers, and brand language for TensorsLab |
| `README.md` | Rebuild | Make the repo read like a TensorsLab product, not a derivative note |
| `assets/animations.jsx` | Adapt | Keep the animation contract; replace implementation with TensorsLab-native primitives |
| `assets/ios_frame.jsx` | Adapt | Keep the frame contract; no source-project-specific styling or sample content |
| `assets/android_frame.jsx` | Adapt | Same as iOS frame |
| `assets/macos_window.jsx` | Adapt | Same as iOS frame |
| `assets/browser_window.jsx` | Adapt | Same as iOS frame |
| `assets/deck_stage.js` | Adapt | Keep slide mechanics; rewrite any identity-specific UI text |
| `assets/deck_index.html` | Adapt | Keep deck assembly mechanics |
| `assets/design_canvas.jsx` | Adapt | Keep comparison grid mechanics |
| `assets/showcases/*` | Rebuild | All showcase imagery and examples must be TensorsLab-native |
| `references/design-styles.md` | Rebuild | Use a TensorsLab-specific style catalog |
| `references/slide-decks.md` | Rebuild | Make the deck guidance TensorsLab-native |
| `references/editable-pptx.md` | Adapt | Keep export rules; rewrite examples and wording |
| `references/critique-guide.md` | Adapt | Keep rubric shape; rewrite examples and terminology |
| `references/video-export.md` | Adapt | Keep export behavior; rewrite motion examples |
| `references/react-setup.md` | Replicate | This is generic implementation guidance |
| `references/verification.md` | Replicate | This is generic verification guidance |
| `references/brand-spec.md` | Rebuild | Must be TensorsLab-specific |
| `references/workflow.md` | Rebuild | Must match TensorsLab conversation flow |
| `references/design-context.md` | Rebuild | Must match TensorsLab fallback logic |
| `references/scene-templates.md` | Rebuild | Must use TensorsLab-specific deliverable templates |
| `references/content-guidelines.md` | Rebuild | Must use TensorsLab-specific copy rules |
| `references/audio-design-rules.md` | Adapt | Keep audio policy, but rewrite delivery examples |
| `references/sfx-library.md` | Adapt | Keep categories, but rewrite naming and examples |
| `scripts/*` | Replicate/Adapt | Preserve export mechanics, but remove any source-project-only references and sample data |
