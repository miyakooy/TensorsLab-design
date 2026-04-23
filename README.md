# TensorsLab Design

**一句话 prompt，拿回一份能交付的设计。**

高保真原型、营销页面、演示 Deck、信息图表——给 TensorsLab 的产品设计一枚 skill。

```
npx skills add miyakooy/TensorsLab--design -y
```

然后在 agent 里说话：

```
「做一份 AI 产品经理的演讲 PPT，推荐 3 个风格方向」
「帮我设计 TensorsLab 主页，参考 vercel 的风格」
「做一个模型对比页，展示性能指标」
```

---

## 能力表

| 能力 | 交付物 | 典型耗时 |
|------|--------|----------|
| 交互原型（App/Web）| 单文件 HTML · 真设备框 · 可点击 | 10–15 min |
| 产品主页 / 营销页 | 品牌化着陆页、定价页、文档页 | 10–15 min |
| 演讲幻灯片 | HTML deck + 可编辑 PPTX | 15–25 min |
| 信息图表 | 可导 PDF / PNG / SVG | 8–12 min |
| 设计方向顾问 | 2–3 个差异化方向 + Demo | 5 min |
| 5 维度评审 | 雷达图 + 修复清单 | 3 min |

---

## 设计原则

### Junior Designer 工作流

默认模式：先 show 假设，等确认，再深入。

- 开工前列问题清单，一次性发给用户
- HTML 里先写 assumptions + placeholders
- 填充内容 → 变体 → 微调，每步都 show 一次
- 交付前浏览器过一遍

### 反 AI slop

避免紫渐变、emoji 图标、圆角+左 border accent、Inter 做标题。用 CSS Grid + 精心选择的字体和色彩。

### 品牌资产

涉及具体品牌时：
1. 问用户有没有 brand guidelines
2. 搜官方页抓色值
3. 固化到 `brand-spec.md`

---

## 包含组件

```
assets/
├── animations.jsx      # 动效原语
├── ios_frame.jsx        # iPhone 框
├── android_frame.jsx   # Android 框
├── macos_window.jsx     # macOS 窗口
├── browser_window.jsx   # 浏览器框
├── deck_stage.js       # Deck 演示
└── design_canvas.jsx   # 变体对比
```

---

## 限制

- **不支持 Figma 级复杂编辑**。产出 HTML，可截图、录屏、导图。
- **完全空白的品牌从零设计质量会掉分**。给品牌资产会更好。
- **3D / 物理模拟 / 粒子系统超出边界**。做 2D 平面设计。

这是一枚 80 分的 skill。对不愿意开图形界面的人来说，80 分够用了。

---

## 装了怎么用

```bash
npx skills add miyakooy/TensorsLab--design -y
```

然后直接说话下需求。Demo 画廊：

- [Homepage Hero](demos/hero.html) — 模块化首页
- [Style Board](demos/style.html) — 视觉风格参考
- [Model Page](demos/model.html) — 产品文档页
- [Pricing](demos/pricing.html) — 定价页
- [Design Canvas](demos/design-canvas.html) — 变体对比

---

# English Version

**Type a prompt, get a deliverable design.**

Hi-fi prototypes, marketing pages, presentation decks, infographics — a design skill for TensorsLab products.

```
npx skills add miyakooy/TensorsLab--design -y
```

Then talk to your agent:

```
"Create a PPT for AI product manager, recommend 3 styles"
"Design a TensorsLab homepage, reference Vercel"
"Make a model comparison page with performance metrics"
```

---

## Capabilities

| Capability | Deliverable | Typical Time |
|-----------|-----------|-------------|
| Interactive Prototype (App/Web)| Single HTML · Real device frame · Clickable | 10–15 min |
| Product Homepage | Landing, pricing, docs pages | 10–15 min |
| Presentation Deck | HTML deck + Editable PPTX | 15–25 min |
| Infographics | PDF / PNG / SVG export | 8–12 min |
| Design Advisor | 2–3 directions + Demo | 5 min |
| 5-Dimension Review | Radar chart + Fix list | 3 min |

---

## Design Principles

### Junior Designer Workflow

Default: show assumptions first, wait for confirmation, then dive deep.

- List questions upfront before coding
- Write assumptions + placeholders in HTML
- Show content → variants → tweaks at each step
- Browser verify before delivery

### Anti-AI Slop

Avoid purple gradients, emoji icons, rounded corners + left border accent, Inter for display titles. Use CSS Grid + carefully chosen fonts and colors.

### Brand Assets

When working with specific brands:
1. Ask for brand guidelines
2. Scrape official pages for colors
3. Freeze to brand-spec.md

---

## Included Components

```
assets/
├── animations.jsx      # Motion primitives
├── ios_frame.jsx        # iPhone frame
├── android_frame.jsx   # Android frame
├── macos_window.jsx     # macOS window
├── browser_window.jsx   # Browser frame
├── deck_stage.js       # Deck presentation
└── design_canvas.jsx   # Variant comparison
```

---

## Limitations

- **No Figma-level editing**. Output is HTML — screenshot, record, or export as image.
- **Blank-brand designs score lower**. Brand assets improve quality.
- **3D / physics / particles out of scope**. 2D平面 design only.

This is an 80-point skill. For those who don't want to open a GUI, 80 points is enough.

---

## How to Install

```bash
npx skills add miyakooy/TensorsLab--design -y
```

Then just talk to your agent. Demo gallery:

- [Homepage Hero](demos/hero.html) — Modular homepage
- [Style Board](demos/style.html) — Visual style reference
- [Model Page](demos/model.html) — Product docs page
- [Pricing](demos/pricing.html) — Pricing tier page
- [Design Canvas](demos/design-canvas.html) — Variant comparison
