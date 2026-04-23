# Manual case migration notes

Some examples from the source design skill are tightly coupled to that project’s own brand identity, narrative, or demo library. Those should be rebuilt for TensorsLab rather than copied as-is.

## Must rebuild manually

- Any case study or showcase that visually depends on the original source project’s brand
- Any demo that references source-project-specific phrasing or identity
- Any landing page or launch animation that uses source-project-specific assets
- Any screenshot-based demo that cannot be re-created from TensorsLab assets

## Prefer automatic generation when possible

- Neutral layout patterns
- General slide deck scaffolds
- Animation primitives
- Device frames
- Generic critique / review frameworks

## If visual generation is unavailable

Tell the user exactly which assets are missing:

- Logo
- Brand colors
- Product screenshots
- Marketing hero image
- Case-study images
- Official illustrations

## Rebuild checklist

1. Remove source-project-specific wording
2. Replace assets with TensorsLab brand assets
3. Re-evaluate color, type, and tone against TensorsLab positioning
4. Confirm the example still works as a design showcase
5. Export a fresh demo if needed
