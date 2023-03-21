import * as esbuild from 'tsup';
import packageJSON from './package.json' assert { type: "json" };

const baseConfig = {
  entryPoints: ['./src/index.ts'],
  bundle: true,
  platform: 'node',
};

Promise.all([
  esbuild.build({
    ...baseConfig,
    format: 'esm',
    dts: true,
    outfile: packageJSON.module,
  }),
  esbuild.build({
    ...baseConfig,
    format: 'cjs',
    outfile: packageJSON.main
  })
])
