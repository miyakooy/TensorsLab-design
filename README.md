---
name: TensorsLab Design
description: High-fidelity UI prototypes, marketing pages, presentation decks, infographics. 为TensorsLab AI产品设计。AI产品原型/UI设计/营销页面/演示文稿. AI디자인/프론트엔드 プロトタイプ/マーケティングページ.
title: TensorsLab Design - AI Product Design Skill for Claude Code
keywords: AI design skill, Claude Code, frontend prototype, UI design, marketing page, presentation deck, infographic, HTML design, no-code design, AI产品设计, UI设计, prototyping, 프로토тип, プロトタイプ
language: en-US
---

# TensorsLab Design

**One prompt, deliverable design.**

High-fidelity prototypes, marketing pages, presentation decks, infographics — a design skill for TensorsLab AI products.

```
npx skills add miyakooy/TensorsLab--design -y
```

Then talk to your agent:

```
"Create a PPT for AI product manager, recommend 3 styles"
"Design a TensorsLab homepage, reference Vercel"
"Make a model comparison page with metrics"
```

---

## Quick Start

| Agent | Install Command |
|-------|---------------|
| Claude Code | `/plugin marketplace add miyakooy/TensorsLab--design` |
| Cursor / Codex / Cline | `npx skills add miyakooy/TensorsLab--design -y` |
| OpenClaw | `clawhub install miyakooy/TensorsLab--design` |
| Universal | `npx skills add miyakooy/TensorsLab--design -y` |

---

## Skills

| Skill | What it does | File |
|-------|-------------|------|
| interactive-prototype | App/Web prototypes with device frames | [assets/ios_frame.jsx](assets/ios_frame.jsx) |
| marketing-page | Landing, pricing, docs pages | [demos/hero.html](demos/hero.html) |
| presentation-deck | HTML deck + editable PPTX | [assets/deck_stage.js](assets/deck_stage.js) |
| infographic | PDF / PNG / SVG export | [demos/style.html](demos/style.html) |
| design-advisor | 2–3 directions + demo | [demos/design-canvas.html](demos/design-canvas.html) |
| design-review | 5-dimension review | [references/critique-guide.md](references/critique-guide.md) |

---

## Capabilities

| Capability | Deliverable | Time |
|------------|-----------|------|
| Interactive Prototype (App/Web) | Single HTML · Real device frame · Clickable | 10–15 min |
| Product Homepage | Landing, pricing, docs pages | 10–15 min |
| Presentation Deck | HTML deck + editable PPTX | 15–25 min |
| Infographics | PDF / PNG / SVG export | 8–12 min |
| Design Advisor | 2–3 directions + Demo | 5 min |
| 5-Dimension Review | Radar chart + Fix list | 3 min |

---

## Demo Gallery

- [Homepage Hero](demos/hero.html) — Modular homepage
- [Style Board](demos/style.html) — Visual style reference
- [Model Page](demos/model.html) — Product docs
- [Pricing](demos/pricing.html) — Pricing tiers
- [Design Canvas](demos/design-canvas.html) — Variant comparison
- [Device Frames](demos/frames.html) — iOS/Android/Browser
- [Deck Stage](demos/deck-stage.html) — Presentation deck
- [Motion](demos/motion.html) — Animation primitives

---

## Design Principles

### Junior Designer Workflow

Default: show assumptions first → wait for confirmation → dive deep.

1. List questions upfront before coding
2. Write assumptions + placeholders in HTML  
3. Show content → variants → tweaks at each step
4. Browser verify before delivery

### Anti-AI Slop

Avoid: purple gradients, emoji icons, rounded corners + left border accent, Inter for display titles.  
Use: CSS Grid + carefully chosen fonts and colors.

### Brand Assets Protocol

When working with specific brands:
1. Ask for brand guidelines
2. Scrape official pages for colors
3. Freeze to brand-spec.md

---

## Included Components

```
assets/
├── animations.jsx      # Motion primitives
├── ios_frame.jsx      # iPhone frame
├── android_frame.jsx  # Android frame
├── macos_window.jsx   # macOS window
├── browser_window.jsx # Browser frame
├── deck_stage.js      # Deck presentation
└── design_canvas.jsx # Variant comparison
```

---

## Operating Model

```
  RESEARCH        BUILD          VERIFY        EXPORT
  ─────────       ──────         ──────        ──────
  Brand assets    Prototype      Browser      PNG/PDF
  Style ref      Deck           Review       PPTX
  Directions    Infographic    Tweaks       HTML
```

---

## Limitations

- **No Figma-level editing**. Output is HTML.
- **Blank-brand designs score lower**. Brand assets improve quality.
- **3D / physics / particles out of scope**. 2D planar only.

This is an 80-point skill. For those who don't want to open a GUI, 80 points is enough.

---

## Related Skills

- [huashu-design](https://github.com/alchaincyf/huashu-design) — Similar skill, more animation features
- [Claude Design](https://claude.ai/design) — Official AI design tool

---

## License

MIT License. Personal use free. Commercial use requires permission.

---

## Changelog

- v1.0 (2026-04) — Initial release, 8 components
- v1.1 (2026-04) — Added pricing page, modular hero
- v1.2 (2026-04) — SEO bilingual, multilingual triggers
- v1.3 (2026-04) — Skills table, multi-agent install
