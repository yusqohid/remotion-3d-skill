---
name: remotion-3d-assets
description: >-
  Compose, customize, and render deterministic 3D animation video assets using Three.js and Remotion.
  Use when the user requests 3D explainer videos, low-poly dioramas, motion graphics, structural cutaways,
  or 3D product showcase scenes for video rendering.
---

# Remotion 3D Animation Asset Skill (Claude Code Adapter)

This skill provides an automated workflow for composing, customizing, and rendering deterministic 3D video scenes in Remotion using the `@3d-assets` library.

---

## 1. Prime Directive: The Deterministic Frame Contract

> **Zero Frame-Drift Rule**: Never use `Date.now()`, `requestAnimationFrame()`, or `Clock.getDelta()`.
> All 3D transformations must be pure functions of `frame` and `fps` via Remotion hooks (`useCurrentFrame`, `useVideoConfig`, `spring`, `interpolate`).

---

## 2. Standard Workflow for Claude Code

When tasked with generating or modifying a 3D video scene:

### Step 1: Inspect the Asset Catalog
Read the available 3D components in `.agents/skills/remotion-3d-assets/references/asset-catalog.md` or run:
```bash
npm run list-assets
```

### Step 2: Choose a Composition Pattern
- **Explainer / Educational / Structural (9:16 Vertical)**: Use the **Diorama Explainer** template featuring `<LowPolyCharacter />`, `<StructuralCutaway />`, `<TechnicalCallout3D />`, and `<DioramaStage />`.
- **Tech / Fintech / Motion Graphics (16:9 Landscape)**: Use the **Tech Showcase** template featuring `<FloatingGlassCard />`, `<CryptoToken3D />`, `<Animated3DBarChart />`, and `<InfiniteCyberGrid />`.
- **Urban Metropolis Diorama**: Use `<UrbanCityDiorama />`, `<CurtainWallSkyscraper />`, `<MiniatureHouse />`, `<LowPolyCar />`, and `<LollipopTree />`.
- Consult `.agents/skills/remotion-3d-assets/references/composition-templates.md` for full blueprints.

### Step 3: Scaffold New Scene or Edit Existing
To quickly scaffold boilerplate code for a new scene:
```bash
npm run scaffold -- --name=MyNewScene --template=diorama-explainer --ratio=9:16
```
Register the new scene in `apps/studio/src/Root.tsx` under `<Composition />`.

### Step 4: Configure Cinematic Camera
Choose a movement recipe from `.agents/skills/remotion-3d-assets/references/camera-recipes.md`:
- `handheldDrift`: Organic micro-motion for explainers.
- `orbit`: Smooth 360-degree turntable rotation.
- `pushIn`: Dynamic dolly zoom towards the subject.

### Step 5: Verification & Frame Preview
Always test render a preview frame using Remotion CLI:
```bash
npm run still -- <CompositionId> out/preview.jpeg --frame=30
```

### Step 6: Render Final Video MP4
To render the full video:
```bash
npm run render -- <CompositionId> out/<CompositionId>.mp4
```
