import { defineConfig } from 'vitest/config';
import vue from '@vitejs/plugin-vue';

export default defineConfig({
  // @ts-ignore
  plugins: [vue()],
  test: {
    // ...
    environment: 'jsdom',
  },
});
