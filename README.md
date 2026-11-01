# 3D Animation Asset Library for Remotion & Antigravity Agent Skill

A production-grade, deterministic 3D animation library built with **Three.js**, **React Three Fiber**, and **Remotion**, paired with an **Antigravity Agent Skill** for automated 3D video directing and scene assembly.

Inspired by **Stylized Low-Poly Miniature Diorama Explainers** (architectural cutaways, technical callouts, friendly low-poly characters, and warm daylight staging) alongside modern **Tech Motion Graphics** (floating frosted glass cards, 3D animated bar charts, and rotating crypto tokens).

---

## 🌟 Key Features

1. **Deterministic Frame-Clock Engine (`@3d-assets/core`)**:
   - Zero frame-drift across offline video renders.
   - All 3D transformations, spring mechanics, and procedural noise are pure functions of `(frame, fps)`.
   - Never uses `requestAnimationFrame`, `Date.now()`, or asynchronous delta clocks.
2. **Curated 3D Asset Catalog (`@3d-assets/assets`)**:
   - **Characters**: `<LowPolyCharacter />` (with `casual`, `worker`, and `scooterRider` skins; `idle`, `walk`, `wave`, `point`, `ride` actions), `<Stickman3D />`.
   - **Metropolis Architecture & Diorama (Reference Matched)**:
     - `<CurtainWallSkyscraper />`: 28-story translucent glass skyscraper with internal white floor slabs, structural columns, entrance portal, and blue perimeter barrier.
     - `<ModernCurvedTower />`: Semi-cylindrical curved glass skyscraper with tiered crown.
     - `<SteppedCommercialBlock />`: Mid-rise contemporary commercial building with setback terrace gardens.
     - `<HighRiseTower />`: Modern glass/concrete high-rise with antenna mast.
     - `<MiniatureHouse />`: Charming residential houses with terracotta roofs (`cottage`, `townhouse`, `apartment`, `villa`).
     - `<DistantSkyline />`: Stepped and matrix silhouette towers for deep atmospheric perspective.
     - `<LollipopTree />`: Stylized round spherical trees on slender trunks.
   - **Vehicles & Infrastructure**:
     - `<LowPolyCar />` (Yellow city taxi with spinning wheels and headlights), `<LowPolyScooter />` (Scooter with rider and vibration physics), `<Streetlamp />`, `<TrafficLight />`, `<LowPolyCloud />`.
   - **Explainer & Structural Cutaways**: `<StructuralCutaway />` (concrete beam showing internal steel rebars and stirrups with dynamic load deflection), `<TechnicalCallout3D />` (3D anchored leader line and badge), `<ForceVectorArrow />` (downward/sway force arrows).
   - **Environments & Stages**: `<DioramaStage />`, `<UrbanCityDiorama />`, `<InfiniteCyberGrid />`.
   - **Motion Graphics**: `<FloatingGlassCard />`, `<Animated3DBarChart />`, `<CryptoToken3D />`.
3. **Camera Choreography (`@3d-assets/remotion`)**:
   - `<CinematicCamera />` supporting `handheldDrift` (organic micro-motion for explainers), `orbit` (turntable rotation), and `pushIn` (dolly zoom).
4. **Antigravity Agent Skill (`remotion-3d-assets`)**:
   - Packaged under `.agents/skills/remotion-3d-assets/`.
   - Allows AI agents to inspect the catalog, scaffold composition scenes, and render video outputs from natural language instructions.

---

## 📁 Repository Structure

```text
/home/light/Dev/3d-assets/
├── .agents/
│   └── skills/
│       └── remotion-3d-assets/       # Antigravity Agent Skill
│           ├── SKILL.md              # Skill contract & workflow
│           ├── references/           # Asset catalog & camera recipes
│           └── scripts/              # list-assets.ts & scaffold-scene.ts
│
├── packages/
│   ├── core/                         # Deterministic math, noise, lighting, materials
│   ├── assets/                       # Reusable 3D components (R3F)
│   └── remotion/                     # Remotion canvas container & camera rigs
│
├── apps/
│   └── studio/                       # Remotion Studio application & showcase scenes
│       └── src/
│           ├── Root.tsx              # Compositions (9:16 & 16:9)
│           └── scenes/               # DioramaExplainerScene & TechShowcaseScene
│
├── AGENTS.md                         # Agent development standards & frame contract
├── PRD.md                            # Product Requirements Document
├── remotion.config.ts                # Remotion & Webpack configuration
└── package.json
```

---

## 🚀 Quick Start

### 1. Inspect Available 3D Assets
```bash
npm run list-assets
```

### 2. Launch Remotion Studio Preview
```bash
npm run dev
```
Opens the interactive Remotion Studio in your browser, where you can scrub through frames in real-time, inspect both 9:16 vertical and 16:9 landscape compositions, and tweak props live.

### 3. Render a Still Preview Frame
```bash
# Render frame 30 of the Diorama Explainer (9:16)
npm run still -- DioramaExplainer out/preview-diorama.jpeg --frame=30

# Render frame 30 of the Tech Showcase (16:9)
npm run still -- TechShowcase out/preview-tech.jpeg --frame=30
```

### 4. Render Final Video MP4
```bash
npm run render -- DioramaExplainer out/DioramaExplainer.mp4
```

---

## 🤖 Using the Antigravity Agent Skill

When an AI agent is active in this repository or invoked with a prompt like:
> *"Create a 10-second 9:16 explainer video showing an engineer pointing to a sagging concrete beam with a downward load arrow"*

The agent automatically:
1. Consults `.agents/skills/remotion-3d-assets/references/asset-catalog.md`.
2. Scaffolds a new composition via `npx tsx .agents/skills/remotion-3d-assets/scripts/scaffold-scene.ts`.
3. Assembles the declarative components (`<DioramaStage />`, `<StructuralCutaway />`, `<LowPolyCharacter />`, `<TechnicalCallout3D />`).
4. Verifies the rendered frame via `npx remotion still ...` and outputs the final video.

---

## 📄 License
UNLICENSED - Created for proprietary 3D video assets & autonomous directing.
