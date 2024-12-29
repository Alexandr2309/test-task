import path from "path"
import { defineConfig } from "vite"
import { getPlugins } from "./config/build/getPlugins";
import { getBuildOptions } from "./config/build/getBuildOptions";
import { getOptimizeDeps } from "./config/build/getOptimizeDeps";

export default defineConfig({
  plugins: getPlugins(),
  build: getBuildOptions(),
  optimizeDeps: getOptimizeDeps(),
  server: {
    port:  5173,
  },
  resolve: {
    alias: {
      "@": path.resolve(__dirname, "./src"),
    },
  },
})
