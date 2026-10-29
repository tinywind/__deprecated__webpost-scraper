import { defineConfig } from 'vite';

export default defineConfig({
  base: './',
  cacheDir: '.tmp/vite-cache',
  oxc: { jsx: { runtime: 'automatic' } },
  build: { outDir: 'build' },
});
