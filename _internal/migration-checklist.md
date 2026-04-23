# Internal reconstruction checklist

This checklist is for maintainers rebuilding an external design skill into TensorsLab Design.

## 1. Core goals

- [ ] Preserve the full design capability set
- [ ] Remove every source-project-specific identity trace
- [ ] Keep the repo clean-room and TensorsLab-native
- [ ] Avoid public references to the migration notes

## 2. What must stay

- [ ] HTML-first prototype workflow
- [ ] slide / deck workflow
- [ ] motion / export workflow
- [ ] variant canvas and tweak system
- [ ] critique and review workflow
- [ ] asset-first design process
- [ ] verification and export checks

## 3. What must be rebuilt

- [ ] README narrative
- [ ] SKILL narrative
- [ ] brand spec
- [ ] style catalog
- [ ] showcase gallery
- [ ] all source-project-branded demos
- [ ] all identity-heavy launch visuals

## 4. What may be adapted

- [ ] generic frame components
- [ ] deck mechanics
- [ ] export pipeline mechanics
- [ ] Playwright verification flow
- [ ] critique rubric structure
- [ ] junior designer workflow structure

## 5. What must be dropped

- [ ] source-project naming
- [ ] source-project-specific story framing
- [ ] source-project showcase captions
- [ ] any visual that still feels tied to the source project after relabeling

## 6. Asset handoff tasks

- [ ] TensorsLab logo
- [ ] TensorsLab brand colors
- [ ] TensorsLab font decision
- [ ] official screenshots from tensorslab.com
- [ ] official screenshots from docs.tensorslab.com
- [ ] TensorAI visual assets
- [ ] Tensor Studio visual assets

## 7. Migration execution checklist

- [ ] Classify every file as replicate / adapt / rebuild / drop
- [ ] Replace public references with neutral wording
- [ ] Move any migration rationale into `_internal/`
- [ ] Verify no public doc mentions the internal migration list
- [ ] Verify the public docs still describe the skill fully
- [ ] Run a clean-room pass on examples and showcase assets
- [ ] Confirm no source-project-specific demo remains

## 8. Release readiness

- [ ] Public docs read as a TensorsLab product
- [ ] Internal notes remain private-only in practice
- [ ] All required TensorsLab assets are either present or clearly marked missing
- [ ] The skill still covers every base design capability
