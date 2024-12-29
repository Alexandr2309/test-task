import { BuildOptions } from 'vite'

export const getBuildOptions = (): BuildOptions => ({
  sourcemap: true,
  outDir: 'dist',
})
