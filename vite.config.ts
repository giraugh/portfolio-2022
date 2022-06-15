import { defineConfig } from 'vite'
import solidPlugin from 'vite-plugin-solid'
import tsconfigPaths from 'vite-tsconfig-paths'
const path = require('path')

export default defineConfig({
  plugins: [tsconfigPaths(), solidPlugin()],
  build: {
    target: 'esnext',
    polyfillDynamicImport: false,
  },
  resolve: {
    alias: { '@': path.resolve(__dirname, './src') }
  }
})
