import { resolve } from 'path'
import { defineConfig } from 'vite'

const root = resolve(__dirname,"src")
const outDir = resolve(__dirname, "dist")

export default defineConfig({
    root: root,
    build: {
      outDir,
      emptyOutDir: true,
      rollupOptions: {
        input: {
          main: resolve(root, 'index.html'),
          login: resolve(root, 'pages/login.html'),
        },
      },
    },
  })