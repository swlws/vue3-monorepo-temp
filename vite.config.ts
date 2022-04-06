import { BuildOptions, CSSOptions, UserConfigExport } from 'vite';

/**
 * 基础配置
 *
 * @returns
 */
export function useBasic(): UserConfigExport {
  return {
    root: process.cwd(), // default
    base: './',
    publicDir: 'public', // default
    cacheDir: 'node_modules/.vite', // default
    // 定义全局常量替换方式
    define: {},
    envDir: './env', // 环境变量的存储路径
    logLevel: 'info', // default
    clearScreen: false, // 默认值为true。调试时设置为false，可以看到更多信息
  };
}

/**
 * CSS
 *
 * @returns
 */
export function useCss(): CSSOptions {
  return {
    preprocessorOptions: {
      scss: {
        // additionalData: `@import "src/assets/style/index.scss";`,
      },
    },
  };
}
import { resolve } from 'path';
/**
 * 构建配置
 *
 * @returns
 */
export function useBuild(client: string): BuildOptions {
  console.log('---->', resolve(__dirname));

  return {
    outDir: resolve(__dirname, 'dist', client),
    assetsDir: 'static',
    emptyOutDir: false,
    target: 'esnext', // default
    cssCodeSplit: true, // default
    sourcemap: false, // default
    // 最小化混淆。terser速度慢、文件体积小；esbuild速度快、文件体积大
    minify: 'terser',
    terserOptions: {
      compress: {
        keep_infinity: true,
        // 去除打印
        drop_console: true,
      },
    },
    // 设置为false，提高构建性能
    brotliSize: false,
    // chunk 大小警告的限制（以 kbs 为单位）。
    chunkSizeWarningLimit: 500,
    rollupOptions: {
      output: {
        manualChunks: {
          vue: ['vue', 'vue-router'],
          'element-plus': ['element-plus'],
          libs: ['weblibext'],
          // axios: ["axios", "axios-business"],
          web: ['@web/core', '@web/api', '@web/ui'],
        },
      },
    },
  };
}
