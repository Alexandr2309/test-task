import autoprefixer from 'autoprefixer'
import { CSSOptions } from 'vite'

export const getCSSOptions = (): CSSOptions => ({
  postcss: {
    plugins: [
      autoprefixer({}),
    ],
  },
})