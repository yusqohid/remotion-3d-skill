# CLAUDE.md — Claude Code Guidelines

## Overview
This repository is a deterministic 3D animation video library powered by Three.js, React Three Fiber, and Remotion. It features an integrated Multi-Agent Skill for automated 3D scene directing, composition, and video rendering.

---

## Essential Commands

```bash
# Typecheck TypeScript across workspace
npm run typecheck

# Launch interactive Remotion Studio preview
npm run dev

# Inspect all available 3D components and prop types
npm run list-assets

# Scaffold a new scene boilerplate
npm run scaffold -- --name=MyNewScene --template=diorama-explainer --ratio=9:16

# Render a still preview frame
npm run still -- <CompositionId> out/preview.jpeg --frame=30

# Render full video MP4
npm run render -- <CompositionId> out/<CompositionId>.mp4
```

---

## Prime Directive: The Deterministic Frame Contract

> **CRITICAL**: Never use real-time clocks or asynchronous tick handlers for animation. Remotion renders frames deterministically offline.

### Forbidden APIs:
- ❌ `Date.now()`, `performance.now()`
- ❌ `requestAnimationFrame()`
- ❌ `THREE.Clock.getDelta()`, `THREE.Clock.getElapsedTime()`
- ❌ `Math.random()` during render cycles (use seeded noise or deterministic hash of `frame`)
- ❌ `setTimeout`, `setInterval`

### Required Pattern:
Every 3D property (position, rotation, scale, material, camera pose) must be a pure function of frame:
```typescript
import { useCurrentFrame, useVideoConfig, spring, interpolate } from 'remotion';

const frame = useCurrentFrame();
const { fps } = useVideoConfig();
const rotationY = (frame / 60) * Math.PI * 2;
```

---

## Agent Skill & References
For in-depth recipes and asset catalog, consult:
- `AGENTS.md` - Core development standards & conventional commits
- `.agents/skills/remotion-3d-assets/SKILL.md` - Main agent workflow
- `.agents/skills/remotion-3d-assets/references/asset-catalog.md` - Detailed asset properties
- `.agents/skills/remotion-3d-assets/references/composition-templates.md` - Scene composition blueprints
- `.agents/skills/remotion-3d-assets/references/camera-recipes.md` - Cinematic camera presets
