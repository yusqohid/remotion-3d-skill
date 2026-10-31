# Product Requirements Document (PRD)

## Project: 3D Animation Asset Library for Remotion & Agent Skill
- **Repository**: `3d-assets`
- **Owner**: Development & AI Directing Team
- **Status**: Draft / Approved for Execution
- **Version**: 1.0.0
- **Target Stack**: TypeScript, Three.js, React Three Fiber, Remotion (`@remotion/three`), Antigravity Agent Skill

---

## 1. Executive Summary & Problem Statement

### 1.1 Background
[Remotion](https://www.remotion.dev/) provides a powerful programmatic video creation workflow using React, rendering video frame-by-frame deterministically. While 2D graphics and SVG animations are straightforward in Remotion, incorporating **3D animations** using Three.js poses significant hurdles:
- Standard Three.js animations rely on real-time asynchronous clocks (`requestAnimationFrame`, `Date.now()`, `Clock.getDelta()`), causing desynchronization, stuttering, and non-deterministic visual glitches when rendered offline frame-by-frame.
- Creating 3D scenes from scratch requires boilerplate: setting up cameras, lights, canvas contexts, materials, and procedural rigging.
- Autonomous AI agents (like Antigravity) lack a structured, declarative library of 3D motion graphic primitives and scene recipes to assemble high-fidelity 3D video content from natural language prompts.

### 1.2 Objective
Develop a production-grade, modular **3D Animation Asset Library** tailored for Remotion and autonomous AI agents:
1. Provide a deterministic frame-driven animation engine for Three.js.
2. Deliver a curated collection of reusable 3D assets (Procedural Characters, Motion Graphics, Staging/Environments, Cinematic Cameras, and VFX Transitions).
3. Provide an interactive Remotion Studio workspace for real-time previewing and offline MP4 rendering.
4. Package the system as an **Antigravity Agent Skill** (`remotion-3d-assets`) enabling AI agents to autonomously scaffold, customize, and render 3D video compositions.

---

## 2. Goals & Non-Goals

### 2.1 Goals
- **100% Deterministic Rendering**: Every 3D transform, material property, camera position, and particle state is purely a function of $( \text{frame}, \text{fps}, \text{durationInFrames} )$.
- **Declarative React Three Fiber (R3F) Integration**: Seamless `<ThreeCanvas>` components ready to embed inside Remotion `<Composition>` elements.
- **Rich Reusable Asset Catalog**:
  - *Characters*: Procedural Stickman 3D and Minimalist Robot Mascot with animated state rigs (idle, walk, point, wave).
  - *Motion Graphics*: Floating Glass Cards, Animated 3D Bar/Pie Charts, Crypto/Brand 3D Tokens, Hologram Rings.
  - *Environments*: Infinite Cyber Grids, Studio Showrooms, Ambient Lighting Rigs, Particle Fields.
  - *Cinematic Camera Rigs*: Target tracking, orbital turntables, dynamic push-in/pull-back, and handheld micro-shakes.
  - *VFX*: 3D Voxel shatter/dissolve and portal warp transitions.
- **Agent Skill & Automation**: Standardized Agent Skill under `.agents/skills/remotion-3d-assets/` with JSON/Zod schemas, reference catalogs, and CLI scaffolding scripts.
- **Type-Safety & Ergonomics**: Full TypeScript types with runtime validation via Zod schemas for all component props.

### 2.2 Non-Goals
- Real-time interactive 3D web games or input-driven physics sandboxes.
- Heavy photorealistic character facial capture / inverse kinematics (IK) beyond procedural video-oriented animation.
- Replacing Remotion itself; this library is designed as an asset layer built specifically to integrate with Remotion.

---

## 3. User Personas & Use Cases

| Persona | Primary Goal | Typical Workflow |
| :--- | :--- | :--- |
| **Motion Designer / Video Developer** | Build programmatic 3D explainer videos and marketing clips fast without manual Blender keyframing. | Imports 3D components into Remotion composition, tweaks props/timings, previews in Remotion Studio, renders to MP4. |
| **AI Coding / Directing Agent (Antigravity)** | Autonomously generate 3D animated video assets from high-level user briefs. | Reads `asset-catalog.md` in skill, scaffolds scene compositions, adjusts camera and animation curves, validates render via CLI. |
| **Content Creator / Marketer** | Request 3D visuals (e.g., *"Show a rotating glowing coin with a 3D bar chart rising behind it"*). | Interacts with AI agent via chat prompt; receives rendered video clip and reproducible code composition. |

---

## 4. Functional Requirements

### 4.1 Core Deterministic Animation Engine (`@3d-assets/core`)
- **FR-1.1 Frame-Clock Synchronizer**: Utility functions connecting Three.js object properties to Remotion's frame clock (`useCurrentFrame`, `useVideoConfig`).
- **FR-1.2 Deterministic Easing & Springs**:
  - `spring3D({ frame, fps, config })` returning scalar progress with spring physics.
  - Vector3 & Euler interpolation helpers: `interpolateVector3`, `interpolateEuler`, `bezierCurve3D`.
- **FR-1.3 Procedural Looping & Phasing**: Deterministic trigonometric and Perlin/Simplex noise generators taking `frame` as seed, eliminating random jumps across renders.
- **FR-1.4 Studio Lighting Presets**: Three-point lighting rigs, key/fill/rim lights, colored studio spotlights, ambient occlusion approximations.
- **FR-1.5 Material Library**: PBR material presets optimized for video: Frosted Glass / Glassmorphism, Brushed Metallic, Neon Emissive Glow, and Cel-shaded / Toon.

### 4.2 3D Asset Catalog (`@3d-assets/assets`)
- **FR-2.1 Character Rigs**:
  - `<Stickman3D />`: Low-overhead procedural stickman mesh with parameterized poses: `walk`, `wave`, `point`, `idleBounce`, `jump`.
  - `<MascotBot />`: Stylized robotic mascot with emissive eyes and floating appendages.
- **FR-2.2 Motion Graphics & Data Visualizers**:
  - `<FloatingGlassCard />`: 3D card with frosted glass material, border glow, title/icon mesh, and spring entrance.
  - `<Animated3DBarChart />`: 3D data bars with sequential/staggered growth animation, customizable color palettes, and value labels.
  - `<CryptoToken3D />`: 3D beveled coin with customizable embossed logo, edge grooves, and continuous spin + tilt bob.
  - `<HologramRing />`: Multi-layered concentric cybernetic rings with counter-rotations and pulse waves.
- **FR-2.3 Stages & Environments**:
  - `<StudioStage />`: Cylindrical podium with bevels, floor reflections, and dramatic downlights.
  - `<InfiniteCyberGrid />`: Vanishing perspective grid plane with customizable line thickness and neon glow.
  - `<ParticleUniverse />`: Deterministic swirling dust/star particles with noise displacement.
- **FR-2.4 Camera Choreography**:
  - `<CinematicCamera />`: Frame-driven camera supporting camera cuts, smooth pan/tilt, target tracking, zoom push-ins, and realistic handheld micro-vibration.
- **FR-2.5 3D Transitions & FX**:
  - `<VoxelShatter />`: Disintegrates any mesh into small 3D cubes propelled outward and fading out.
  - `<WarpTunnel />`: Warp-speed hyperdrive tunnel effect for fast scene transitions.

### 4.3 Remotion Integration & Showcase Studio (`apps/studio`)
- **FR-3.1 Remotion Compatibility**: Full compatibility with `@remotion/three` and `@react-three/fiber` v8/v9.
- **FR-3.2 Interactive Preview Studio**: A Remotion Studio application configured with 1080p (16:9) and 1080x1920 (9:16 Shorts/Reels) composition canvases.
- **FR-3.3 Template Compositions**:
  - `ProductShowcase`: Stage + 3D Card + Token + Cinematic Orbit.
  - `DataStory`: Stickman explaining an animated rising 3D Bar Chart.
  - `TechTeaser`: Cyber Grid + Hologram Rings + Warp Transition.

### 4.4 Agent Skill (`.agents/skills/remotion-3d-assets`)
- **FR-4.1 Skill Contract (`SKILL.md`)**: Complete definition conforming to the Antigravity Customization Specification, declaring triggers, inputs, and outputs.
- **FR-4.2 Asset Catalog Reference**: Machine-readable markdown catalog detailing component names, import paths, prop types, and visual effect previews.
- **FR-4.3 Automation CLI Scripts**:
  - `scripts/list-assets.ts`: Returns JSON summary of all available components.
  - `scripts/scaffold-scene.ts`: Generates a ready-to-run Remotion composition TSX file based on selected components and options.

---

## 5. Non-Functional Requirements

- **NFR-1 Determinism & Repeatability**: Multiple renders of the same scene at any frame $N$ must produce bit-for-bit or pixel-identical images.
- **NFR-2 Performance & Frame Budget**: Lightweight geometry and efficient shaders ensuring rendering times under 100ms per frame on standard CPU/SwiftShader or GPU instances.
- **NFR-3 Code Quality & Modularity**: Zero cyclic dependencies, clean separation between pure Three.js math and React Three Fiber presentation components.
- **NFR-4 Extensibility**: Adding a new 3D asset must only require conforming to the standard `AssetProps` interface and registering in the central catalog.
- **NFR-5 Developer Experience**: Zero-config local development with instant hot-reload via `npm run dev` (Remotion Studio).

---

## 6. Architecture & Data Flow

```
+-------------------------------------------------------------+
|                     User / Agent Prompt                     |
+-------------------------------------------------------------+
                               |
                               v
+-------------------------------------------------------------+
|        Agent Skill: .agents/skills/remotion-3d-assets/       |
|  - Reads asset-catalog.md                                   |
|  - Executes scaffold-scene.ts                               |
+-------------------------------------------------------------+
                               |
                               v
+-------------------------------------------------------------+
|            Remotion Composition (TypeScript / TSX)          |
|  <Composition                                               |
|    component={My3DScene}                                    |
|    durationInFrames={300} fps={30} width={1920} height={1080}|
|  />                                                         |
+-------------------------------------------------------------+
                               |
                               v
+-------------------------------------------------------------+
|                      <ThreeCanvas />                        |
|  Driven strictly by Remotion's frame clock (useCurrentFrame)|
+-------------------------------------------------------------+
         |                      |                      |
         v                      v                      v
+------------------+  +-------------------+  +----------------+
|  Environment &   |  |   3D Asset(s)     |  |   Cinematic    |
|  Lighting Rig    |  |  (Stickman, Cards)|  |   Camera Rig   |
+------------------+  +-------------------+  +----------------+
```

---

## 7. Delivery Milestones

| Milestone | Deliverables | Verification Criteria |
| :--- | :--- | :--- |
| **M1: Scaffolding & Core Engine** | Workspace structure, dependencies, deterministic math & frame drivers, lighting presets. | Unit tests pass for deterministic frame interpolation functions. |
| **M2: Asset Library Buildout** | Characters, Motion Graphics, Stage/Environments, and Camera Rig components. | All 3D assets render cleanly without WebGL errors or console warnings. |
| **M3: Remotion Studio Showcase** | Studio app running with catalog preview compositions (16:9 & 9:16). | `npm run dev` displays interactive gallery; `npx remotion still` renders frames. |
| **M4: Agent Skill Package** | `.agents/skills/remotion-3d-assets/` with `SKILL.md`, catalog docs, and scaffolding scripts. | Agent can inspect catalog and generate functional Remotion composition. |
| **M5: End-to-End Render Validation**| Full MP4 video render test via Remotion CLI and complete documentation. | Rendered MP4 output verified for smoothness, audio-video sync, and visual quality. |

---

## 8. Definition of Done (DoD)
1. Complete TypeScript source code committed with conventional commits.
2. `PRD.md` and `AGENTS.md` fully documented in the repository root.
3. Successful build (`npm run build`) and type check (`tsc --noEmit`) without errors.
4. Working Remotion preview studio with sample compositions.
5. Functional Antigravity Agent Skill ready for prompt-based 3D video generation.
