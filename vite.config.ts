import tailwindcss from '@tailwindcss/vite';
import react from '@vitejs/plugin-react';
import path from 'path';
import { defineConfig, loadEnv } from 'vite';

export default defineConfig(({ mode }) => {
  const env = loadEnv(mode, '.', '');
  const manualChunks = (id: string) => {
    if (!id.includes('node_modules')) {
      return undefined;
    }

    if (id.includes('@google/genai')) {
      return 'ai-vendor';
    }

    if (id.includes('/three/')) {
      return 'three-core';
    }

    if (
      id.includes('@react-three') ||
      id.includes('three-stdlib') ||
      id.includes('camera-controls') ||
      id.includes('meshline')
    ) {
      return 'three-react';
    }

    if (id.includes('motion') || id.includes('framer-motion')) {
      return 'motion-vendor';
    }

    if (id.includes('react-router-dom') || id.includes('@remix-run/router')) {
      return 'router-vendor';
    }

    if (id.includes('/react/') || id.includes('/react-dom/')) {
      return 'react-vendor';
    }

    return undefined;
  };

  return {
    plugins: [react(), tailwindcss()],
    define: {
      'process.env.GEMINI_API_KEY': JSON.stringify(env.GEMINI_API_KEY),
    },
    resolve: {
      alias: {
        '@': path.resolve(__dirname, '.'),
      },
      dedupe: ['react', 'react-dom'],
    },
    server: {
      // HMR is disabled in AI Studio via DISABLE_HMR env var.
      // Do not modify this: file watching is disabled to prevent flickering during agent edits.
      hmr: process.env.DISABLE_HMR !== 'true',
    },
    build: {
      chunkSizeWarningLimit: 750,
      rollupOptions: {
        output: {
          manualChunks,
        },
      },
    },
  };
});
