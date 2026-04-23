# Design styles

This file is the style catalog for TensorsLab Design.

It is the replacement for the source project’s style fallback library: when the user does not know the exact visual direction, the skill should offer a small set of clearly different options instead of guessing one average style.

## What “design style reference” means

A style reference is a short, usable design recipe. It should tell the agent:

- what visual family it belongs to
- what kind of project it fits
- which typography direction to use
- which color mood to prefer
- what to avoid

It should be concrete enough that the skill can make a decision, not just inspire vaguely.

## Recommended style buckets for TensorsLab

### 1. Industrial system style

Use for:

- infrastructure products
- pricing pages
- developer docs
- model catalog pages

Traits:

- dense but controlled layouts
- clear hierarchy
- strong grid
- restrained accent colors

### 2. Product launch style

Use for:

- new feature announcements
- launch videos
- hero pages
- social promo cards

Traits:

- bold focal point
- high contrast
- polished motion cues
- concise messaging

### 3. Editorial / presentation style

Use for:

- pitch decks
- thought-leadership slides
- case-study decks
- internal strategy presentations

Traits:

- article-like structure
- generous spacing
- readable text-first composition
- light visual rhythm

### 4. Technical explainer style

Use for:

- explainers
- product architecture visuals
- workflow diagrams
- documentation graphics

Traits:

- diagram-driven
- annotated structure
- minimal decoration
- data clarity

### 5. Showcase / gallery style

Use for:

- showcase pages
- portfolio-like product displays
- side-by-side comparisons
- variant exploration

Traits:

- carefully spaced cards
- strong object framing
- rich previews
- easy scanability

## What each entry should contain

Each style entry should eventually include:

- name
- recommended use cases
- tone keywords
- layout rules
- typography guidance
- color guidance
- motion guidance
- anti-patterns
- an example prompt phrase

## TensorsLab defaults

Until the brand spec is filled, the safe defaults are:

- green / blue / white palette
- industrial clarity
- high trust / high throughput tone
- minimal clutter
- strong information hierarchy

## Fallback rule

If the user is unsure, recommend 3 styles from different buckets:

- one safe / operational choice
- one bold / marketing choice
- one editorial / distinctive choice
