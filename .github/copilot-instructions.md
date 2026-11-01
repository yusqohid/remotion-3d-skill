# GitHub Copilot Instructions

## Repository: 3D Assets for Remotion

### Architectural Guidelines
- **Deterministic 3D Rendering**: Remotion renders video offline frame-by-frame. Never suggest or write code using real-time timers (`Date.now()`, `Clock.getDelta()`, `requestAnimationFrame()`, or `setTimeout`).
- **State Calculation**: All 3D rotations, translations, scaling, and camera poses must be pure functions of `(frame, fps)` using `useCurrentFrame()` and `useVideoConfig()`.
- **Animations**: Use Remotion's built-in `spring()` and `interpolate()` helpers or deterministic math utilities in `@3d-assets/core`.
- **Props Validation**: All custom 3D components in `packages/assets` must have corresponding exported Zod schemas.

### Common Commands
- `npm run list-assets`: Display catalog of 3D components and props.
- `npm run typecheck`: Run TypeScript compiler validation.
- `npm run still`: Render a single still preview image.
- `npm run render`: Render final MP4 composition.
