import { defineConfig } from 'vite';
import vue from '@vitejs/plugin-vue';
import AutoImport from 'unplugin-auto-import/vite';
import Components from 'unplugin-vue-components/vite';
import { ElementPlusResolver } from 'unplugin-vue-components/resolvers';
import { useBasic, useBuild } from '../../vite.config';

// @ts-ignore
import path from 'path';

// https://vitejs.dev/config/
export default defineConfig({
  ...useBasic(),
  build: useBuild('client-demo'),
  plugins: [
    vue(), // ...
    AutoImport({
      resolvers: [ElementPlusResolver()],
    }),
    Components({
      resolvers: [ElementPlusResolver()],
    }),
  ],
  resolve: {
    alias: {
      '@st': path.resolve(__dirname, 'src'),
    },
  },
  server: {
    host: '0.0.0.0',
    port: 8081,
    cors: true,
    proxy: {
      '/api_st': {
        target: 'http://192.168.10.41:3001',
        // target: 'http://127.0.0.1:8080',
        changeOrigin: true,
      },
      '/api_svc': {
        target: 'http://192.168.10.41:3001',
        // target: 'http://127.0.0.1:8080',
        changeOrigin: true,
      },
      '/api_power': {
        target: 'http://192.168.10.41:3000',
        changeOrigin: true,
      },
    },
  },
});
