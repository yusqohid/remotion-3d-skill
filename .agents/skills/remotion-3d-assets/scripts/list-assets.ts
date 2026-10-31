/**
 * CLI script for AI Agents to inspect all available 3D assets in the library.
 * Run with: npm run list-assets
 */

export interface AssetMeta {
  name: string;
  category: 'character' | 'explainer' | 'environment' | 'mograph' | 'camera';
  importPath: string;
  description: string;
  props: Record<string, string>;
}

export const ASSET_REGISTRY: AssetMeta[] = [
  {
    name: 'LowPolyCharacter',
    category: 'character',
    importPath: '@3d-assets/assets',
    description: 'Stylized low-poly humanoid character with customizable skins (casual, worker, scooterRider) and action poses.',
    props: {
      variant: "'casual' | 'worker' | 'scooterRider'",
      action: "'idle' | 'walk' | 'wave' | 'point' | 'ride'",
      scale: 'number (default: 1)',
      position: '[x, y, z] (default: [0, 0, 0])',
      rotationY: 'number (radians)',
      vestColor: 'hex string (e.g. #f97316)',
    },
  },
  {
    name: 'Stickman3D',
    category: 'character',
    importPath: '@3d-assets/assets',
    description: 'Minimalist 3D stickman with joints, limbs, and action poses (idle, walk, wave, point, jump).',
    props: {
      action: "'idle' | 'walk' | 'wave' | 'point' | 'jump'",
      color: 'hex string (default: #ffffff)',
      limbThickness: 'number (default: 0.06)',
      scale: 'number (default: 1)',
      position: '[x, y, z]',
    },
  },
  {
    name: 'StructuralCutaway',
    category: 'explainer',
    importPath: '@3d-assets/assets',
    description: 'Architectural/civil beam cross-section exposing internal rebar steel & stirrups (sengkang) with load sag animation.',
    props: {
      length: 'number (default: 6)',
      height: 'number (default: 0.8)',
      depth: 'number (default: 0.8)',
      showCutaway: 'boolean (default: true)',
      deflectionAmount: 'number (sagging depth under load)',
      startSagFrame: 'number (frame when load begins)',
      position: '[x, y, z]',
    },
  },
  {
    name: 'TechnicalCallout3D',
    category: 'explainer',
    importPath: '@3d-assets/assets',
    description: '3D-tracked leader line anchored to world coordinates, with anchor ring and title badge with spring entrance.',
    props: {
      title: 'string (badge text)',
      anchorPosition: '[x, y, z] (point being annotated)',
      badgeOffset: '[dx, dy, dz] (relative position of badge)',
      startFrame: 'number (entrance trigger frame)',
      badgeColor: 'hex string',
    },
  },
  {
    name: 'ForceVectorArrow',
    category: 'explainer',
    importPath: '@3d-assets/assets',
    description: 'Dynamic 3D directional arrow indicating force, tension, sway, or earthquake ground shake.',
    props: {
      direction: "'down' | 'up' | 'left' | 'right' | 'sway'",
      length: 'number (default: 1.2)',
      color: 'hex string',
      position: '[x, y, z]',
      animated: 'boolean (default: true)',
    },
  },
  {
    name: 'DioramaStage',
    category: 'environment',
    importPath: '@3d-assets/assets',
    description: 'Floating low-poly miniature ground chunk with soil layers, stylized trees, and picket fence.',
    props: {
      width: 'number (default: 12)',
      depth: 'number (default: 12)',
      groundColor: 'hex string',
      soilColor: 'hex string',
      showTrees: 'boolean (default: true)',
      showFence: 'boolean (default: true)',
      position: '[x, y, z]',
    },
  },
  {
    name: 'InfiniteCyberGrid',
    category: 'environment',
    importPath: '@3d-assets/assets',
    description: 'Perspective infinite glowing grid floor with animated forward velocity.',
    props: {
      size: 'number (default: 40)',
      divisions: 'number (default: 40)',
      colorCenterLine: 'hex string (default: #06b6d4)',
      colorGrid: 'hex string (default: #1e293b)',
      speed: 'number (default: 0.5)',
      position: '[x, y, z]',
    },
  },
  {
    name: 'FloatingGlassCard',
    category: 'mograph',
    importPath: '@3d-assets/assets',
    description: '3D frosted glass card with glowing border, title, chip node, and spring entrance.',
    props: {
      title: 'string',
      color: 'hex string',
      width: 'number (default: 3.6)',
      height: 'number (default: 2.2)',
      position: '[x, y, z]',
      startFrame: 'number (default: 5)',
    },
  },
  {
    name: 'Animated3DBarChart',
    category: 'mograph',
    importPath: '@3d-assets/assets',
    description: '3D data bar chart with staggered spring growth animation and glowing indicator caps.',
    props: {
      values: 'number[] (e.g. [4, 7, 5, 9, 12])',
      colors: 'string[] (hex colors)',
      position: '[x, y, z]',
      staggerDelay: 'number (frames between bars)',
    },
  },
  {
    name: 'CryptoToken3D',
    category: 'mograph',
    importPath: '@3d-assets/assets',
    description: 'Beveled 3D gold or neon coin with embossed emblem, continuous spin, and metallic shine.',
    props: {
      color: 'hex string (default: #fbbf24)',
      radius: 'number (default: 1.2)',
      thickness: 'number (default: 0.25)',
      rotationSpeed: 'number (default: 0.4)',
      position: '[x, y, z]',
    },
  },
  {
    name: 'CinematicCamera',
    category: 'camera',
    importPath: '@3d-assets/remotion',
    description: 'Frame-driven camera supporting static, orbit turntable, push-in, and subtle handheld micro-shake.',
    props: {
      mode: "'static' | 'orbit' | 'pushIn' | 'handheldDrift'",
      position: '[x, y, z]',
      target: '[x, y, z]',
      fov: 'number (default: 40)',
      orbitSpeed: 'number (default: 0.2)',
      shakeIntensity: 'number (default: 0.05)',
    },
  },
];

const main = () => {
  console.log('=== REMOTION 3D ASSET LIBRARY CATALOG ===\n');
  console.log(`Total Assets Available: ${ASSET_REGISTRY.length}\n`);

  ASSET_REGISTRY.forEach((asset, idx) => {
    console.log(`[${idx + 1}] <${asset.name} /> (${asset.category.toUpperCase()})`);
    console.log(`    Import:  import { ${asset.name} } from '${asset.importPath}';`);
    console.log(`    Summary: ${asset.description}`);
    console.log('    Props:');
    for (const [propName, propType] of Object.entries(asset.props)) {
      console.log(`      - ${propName}: ${propType}`);
    }
    console.log('');
  });
};

if (require.main === module) {
  main();
}
