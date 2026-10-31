/**
 * CLI Scaffolding Script for Remotion 3D Scenes.
 * Usage:
 *   npx tsx .agents/skills/remotion-3d-assets/scripts/scaffold-scene.ts --name=MyNewScene --template=diorama-explainer --ratio=9:16
 */

import * as fs from 'fs';
import * as path from 'path';

interface ScaffoldOptions {
  name: string;
  template: 'diorama-explainer' | 'tech-showcase' | 'custom';
  ratio: '9:16' | '16:9';
  outputDir: string;
}

const parseArgs = (): ScaffoldOptions => {
  const args = process.argv.slice(2);
  const options: ScaffoldOptions = {
    name: 'Generated3DScene',
    template: 'diorama-explainer',
    ratio: '9:16',
    outputDir: path.resolve(process.cwd(), 'apps/studio/src/scenes'),
  };

  for (const arg of args) {
    if (arg.startsWith('--name=')) {
      options.name = arg.replace('--name=', '').trim();
    } else if (arg.startsWith('--template=')) {
      options.template = arg.replace('--template=', '').trim() as any;
    } else if (arg.startsWith('--ratio=')) {
      options.ratio = arg.replace('--ratio=', '').trim() as any;
    } else if (arg.startsWith('--out=')) {
      options.outputDir = path.resolve(process.cwd(), arg.replace('--out=', '').trim());
    }
  }

  return options;
};

const generateSceneCode = (opts: ScaffoldOptions): string => {
  if (opts.template === 'tech-showcase') {
    return `import React from 'react';
import { ThreeCanvasContainer, CinematicCamera } from '@3d-assets/remotion';
import { StudioLighting } from '@3d-assets/core';
import {
  InfiniteCyberGrid,
  FloatingGlassCard,
  CryptoToken3D,
  Animated3DBarChart,
  Stickman3D,
} from '@3d-assets/assets';

export const ${opts.name}: React.FC = () => {
  return (
    <ThreeCanvasContainer clearColor="#0b0f19" shadows={true}>
      <StudioLighting keyColor="#ffffff" fillColor="#64748b" rimColor="#06b6d4" />

      <CinematicCamera
        mode="orbit"
        position={[0, 4, 9]}
        target={[0, 1.2, 0]}
        orbitSpeed={0.15}
        orbitRadius={9}
      />

      <InfiniteCyberGrid size={32} divisions={32} />

      <FloatingGlassCard position={[-3, 1.8, 0]} title="3D ENGINE" color="#06b6d4" />
      <CryptoToken3D position={[0, 1.5, 0]} rotationSpeed={0.4} />
      <Animated3DBarChart position={[3, 0, 0]} values={[4, 6, 8, 12]} />
      <Stickman3D position={[0, 0, 2]} action="wave" />
    </ThreeCanvasContainer>
  );
};
`;
  }

  // Default: Diorama Explainer
  return `import React from 'react';
import { ThreeCanvasContainer, CinematicCamera } from '@3d-assets/remotion';
import { DioramaSunlight } from '@3d-assets/core';
import {
  DioramaStage,
  StructuralCutaway,
  LowPolyCharacter,
  TechnicalCallout3D,
  ForceVectorArrow,
} from '@3d-assets/assets';

export const ${opts.name}: React.FC = () => {
  return (
    <ThreeCanvasContainer clearColor="#e8dfd5">
      <DioramaSunlight intensity={1.3} sunPosition={[7, 12, 8]} />

      <CinematicCamera
        mode="handheldDrift"
        position={[0, 4.2, 8.8]}
        target={[0, 1.2, 0]}
        fov={40}
        shakeIntensity={0.05}
      />

      <DioramaStage width={9} depth={9} position={[0, -0.8, 0]} showTrees={true} showFence={true} />

      <StructuralCutaway
        position={[0, 1.5, 0]}
        length={5.2}
        showCutaway={true}
        deflectionAmount={0.3}
        startSagFrame={20}
      />

      <LowPolyCharacter
        variant="worker"
        action="point"
        position={[-2.1, 0.9, 0.5]}
        scale={0.85}
        rotationY={0.6}
      />

      <ForceVectorArrow direction="down" position={[0, 2.9, 0]} length={1.0} />

      <TechnicalCallout3D
        title="INSPECTION PIN"
        anchorPosition={[0.8, 1.25, 0.3]}
        badgeOffset={[1.2, 1.3, 0]}
        startFrame={15}
        badgeColor="#2563eb"
      />
    </ThreeCanvasContainer>
  );
};
`;
};

const run = () => {
  const opts = parseArgs();
  const filePath = path.join(opts.outputDir, `${opts.name}.tsx`);

  fs.mkdirSync(opts.outputDir, { recursive: true });
  fs.writeFileSync(filePath, generateSceneCode(opts), 'utf-8');

  console.log(`[SUCCESS] Scaffolder generated scene component:`);
  console.log(`  File:     ${filePath}`);
  console.log(`  Template: ${opts.template}`);
  console.log(`  Ratio:    ${opts.ratio}`);
};

if (require.main === module) {
  run();
}
