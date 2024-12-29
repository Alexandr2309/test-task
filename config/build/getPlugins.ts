import { PluginOption } from "vite";
import react from "@vitejs/plugin-react";
import svgr from 'vite-plugin-svgr'

export const getPlugins = (): PluginOption[] => {
  return [
    react(),
    svgr()
  ]
}