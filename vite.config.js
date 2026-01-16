import { defineConfig } from 'vite';

export default defineConfig(({ command }) => ({
  base: command === 'build' ? '/bam-architect/' : '/', // Use repo name for build, root for dev
  build: {
    outDir: 'dist',
  }
}));
