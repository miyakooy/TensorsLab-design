---
name: TensorsLab Design
description: 高保真UI原型、营销页面、演示Deck、信息图表。为TensorsLab AI产品设计。AI产品原型/UI设计/营销页面/演示文稿. AI디자인/프론트엔드 プロトタイプ/マーケティングページ.
title: TensorsLab Design - AI产品设计Skill
keywords: AI设计skill, Claude Code, 前端原型, UI设计, 营销页面, 演示文稿, 信息图表, HTML设计, 无代码设计, AI产品设计, UI设计, prototyping, 프로토тип, プロトタイプ
language: zh-CN
---

# TensorsLab Design

**一句话 prompt，拿回一份能交付的设计。**

高保真原型、营销页面、演示Deck、信息图表——为TensorsLab产品设计一枚skill。

```
npx skills add miyakooy/TensorsLab--design -y
```

然后在agent里说话：

```
「做一份AI产品经理的演讲PPT，推荐3个风格方向」
「帮我设计TensorsLab主页，参考vercel的风格」
「做一个模型对比页，展示性能指标」
```

---

## 快速开始

| Agent | 安装命令 |
|-------|----------|
| Claude Code | `/plugin marketplace add miyakooy/TensorsLab--design` |
| Cursor / Codex / Cline | `npx skills add miyakooy/TensorsLab--design -y` |
| OpenClaw | `clawhub install miyakooy/TensorsLab--design` |
| 通用 | `npx skills add miyakooy/TensorsLab--design -y` |

---

## Skills

| Skill | 功能 | 文件 |
|-------|------|------|
| interactive-prototype | App/Web原型，真设备框 | [assets/ios_frame.jsx](assets/ios_frame.jsx) |
| marketing-page | 主页、定价页、文档页 | [demos/hero.html](demos/hero.html) |
| presentation-deck | Deck演示+可编辑PPTX | [assets/deck_stage.js](assets/deck_stage.js) |
| infographic | PDF/PNG/SVG导出 | [demos/style.html](demos/style.html) |
| design-advisor | 2-3个方向+Demo | [demos/design-canvas.html](demos/design-canvas.html) |
| design-review | 5维度评审 | [references/critique-guide.md](references/critique-guide.md) |

---

## 能力表

| 能力 | 交付物 | 耗时 |
|------|--------|------|
| 交互原型（App/Web）| 单文件HTML·真设备框·可点击 | 10-15分钟 |
| 产品主页/营销页 | 着陆页、定价页、文档页 | 10-15分钟 |
| 演讲幻灯片 | HTML deck+可编辑PPTX | 15-25分钟 |
| 信息图表 | PDF/PNG/SVG导出 | 8-12分钟 |
| 设计方向顾问 | 2-3个方向+Demo | 5分钟 |
| 5维度评审 | 雷达图+修复清单 | 3分钟 |

---

## Demo画廊

- [Homepage Hero](demos/hero.html) - 模块化首页
- [Style Board](demos/style.html) - 视觉风格参考
- [Model Page](demos/model.html) - 产品文档页
- [Pricing](demos/pricing.html) - 定价页
- [Design Canvas](demos/design-canvas.html) - 变体对比
- [Device Frames](demos/frames.html) - 设备框架
- [Deck Stage](demos/deck-stage.html) - 演示文稿
- [Motion](demos/motion.html) - 动效原语

---

## 设计原则

### Junior Designer工作流

先show假设，等确认，再深入。

1. 开工前列问题清单
2. HTML里写assumptions+placeholders
3. 内容→变体→微调，每步都show
4. 交付前浏览器验证

### 反AI slop

避免：紫渐变、emoji图标、圆角+左border accent。  
使用：CSS Grid + 精心选择的字体。

### 品牌资产协议

涉及具体品牌时：
1. 问有没有brand guidelines
2. 搜官方页抓色值
3. 固化到brand-spec.md

---

## 包含组件

```
assets/
├── animations.jsx      # 动效原语
├── ios_frame.jsx      # iPhone框
├── android_frame.jsx  # Android框
├── macos_window.jsx   # macOS窗口
├── browser_window.jsx # 浏览器框
├── deck_stage.js      # Deck演示
└── design_canvas.jsx # 变体对比
```

---

## 操作模型

```
  研究          构建          验证          导出
  ────         ────          ────          ────
 品牌资产      原型          浏览器        PNG/PDF
 风格参考      Deck         评审         PPTX
 方向探索     信息图表      微调         HTML
```

---

## 限制

- **不支持Figma级编辑**。产出HTML可截图、录屏。
- **空白品牌设计会掉分**。给品牌资产会更好。
- **3D/物理/粒子超出边界**。只做2D平面设计。

这是一枚80分的skill。不愿意开图形界面的人够用了。

---

## 相关Skills

- [huashu-design](https://github.com/alchaincyf/huashu-design) - 类似skill，更多动画功能
- [Claude Design](https://claude.ai/design) - 官方AI设计工具

---

## 许可证

MIT许可证。个人使用免费。商业使用需授权。

---

## 更新日志

- v1.0 (2026-04) - 初始版本，8个组件
- v1.1 (2026-04) - 添加定价页、模块化首页
- v1.2 (2026-04) - SEO双语、多语言触发词
- v1.3 (2026-04) - Skills表格、多agent安装
