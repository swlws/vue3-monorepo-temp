/// <reference types="vite/client" />

declare module '*.vue' {
  import type { DefineComponent } from 'vue';
  // eslint-disable-next-line @typescript-eslint/no-explicit-any, @typescript-eslint/ban-types
  const component: DefineComponent<{}, {}, any>;
  export default component;
}

interface ImportMetaEnv {
  /**
   * WEB客户端ID
   */
  VITE_APP_NAME: string;
  /**
   * WEB客户端标头
   */
  VITE_APP_TITLE: string;
  /**
   * HTTP请求前缀
   */
  VITE_HTTP_BASE_URL: string;
  /**
   * 是否使用Token，true为使用、false为不使用
   */
  VITE_USE_TOKEN: string;
  /**
   * UAA，客户端ID
   */
  VITE_CLIENT_ID: string;
  /**
   * UAA，客户端密码
   */
  VITE_CLIENT_SECRET: string;
  /**
   * UAA，默认登录名
   */
  VITE_LOGIN_ACCOUNT: string;
  /**
   * UAA，默认登录密码
   */
  VITE_LOGIN_PWD: string;
}
