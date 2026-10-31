import path from 'path';
import { Config } from '@remotion/cli/config';

Config.setVideoImageFormat('jpeg');
Config.setChromiumOpenGlRenderer('angle');
Config.setEntryPoint('./apps/studio/src/index.ts');
Config.setBrowserExecutable('/usr/bin/chromium');

const rootDir = process.cwd();

Config.overrideWebpackConfig((currentConfiguration) => {
  return {
    ...currentConfiguration,
    resolve: {
      ...currentConfiguration.resolve,
      alias: {
        ...(currentConfiguration.resolve?.alias ?? {}),
        '@3d-assets/core': path.resolve(rootDir, 'packages/core/src/index.ts'),
        '@3d-assets/assets': path.resolve(rootDir, 'packages/assets/src/index.ts'),
        '@3d-assets/remotion': path.resolve(rootDir, 'packages/remotion/src/index.ts'),
      },
    },
  };
});
