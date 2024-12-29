import { DepOptimizationOptions } from 'vite'

export const getOptimizeDeps = (): DepOptimizationOptions => ({
  esbuildOptions: {
    define: {
      global: 'globalThis',
    },
  },
})
