import { defineConfig } from 'vite';
import { useBasic, useCss, usePlugins, useBuild } from './base.config';
import path from 'path';

// 客户端名称
const NAME = 'rest';

const PROXY_MAP = {
  '/api_rest': {
    target: 'http://localhost:8080',
    changeOrigin: true,
  },
};
console.log(`\nProxy Mapping:`);
console.log(PROXY_MAP);

export default defineConfig({
  ...useBasic(),
  css: useCss(),
  resolve: {
    alias: {
      '@rest': path.resolve(__dirname, '..', 'projects', NAME, 'src'),
    },
  },
  plugins: usePlugins(),
  build: useBuild(NAME),
  server: {
    host: '0.0.0.0',
    port: 8083,
    cors: true,
    proxy: PROXY_MAP,
  },
});
