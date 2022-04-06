import { defineConfig } from 'vite';
import { useBasic, useCss, usePlugins, useBuild } from './base.config';
import path from 'path';

// 客户端名称
const CLIENT_NAME = 'client-demo';

const PROXY_MAP = {
  '/api_demo': {
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
      '@demo': path.resolve(__dirname, '..', 'projects', CLIENT_NAME, 'src'),
    },
  },
  plugins: usePlugins(),
  build: useBuild(CLIENT_NAME),
  server: {
    host: '0.0.0.0',
    port: 8082,
    cors: true,
    proxy: PROXY_MAP,
  },
});
