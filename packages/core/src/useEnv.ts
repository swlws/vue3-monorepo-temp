/**
 * Mode
 * @returns
 */
export function getMode() {
  return import.meta.env.MODE;
}

/**
 * 开发环境
 * @returns
 */
export function isDev() {
  return import.meta.env.DEV;
}

/**
 * 生产环境
 * @returns
 */
export function isProd() {
  return import.meta.env.PROD;
}

/**
 * 获取应用名称
 *
 * @returns
 */
export function hasUseToken() {
  return import.meta.env.VITE_USE_TOKEN === 'true';
}

/**
 * 获取应用名称
 *
 * @returns
 */
export function getAppName() {
  let value = import.meta.env.VITE_APP_NAME;
  if (!value) {
    throw new Error(`The Environment Variable Does Not Exist: VITE_APP_NAME`);
  }

  return value;
}

/**
 * 获取应用标题
 *
 * @returns
 */
export function getAppTitle() {
  let value = import.meta.env.VITE_APP_TITLE;
  if (!value) {
    throw new Error(`The Environment Variable Does Not Exist: VITE_APP_TITLE`);
  }

  return value;
}

/**
 * REST接口的前缀
 *
 * @returns
 */
export function getHttpBaseUrl() {
  let value = import.meta.env.VITE_HTTP_BASE_URL;
  if (!value) {
    throw new Error(`The Environment Variable Does Not Exist: VITE_HTTP_BASE_URL`);
  }

  return value;
}

/**
 * 获取登录默认用户名
 * @returns
 */
export function getLoginAccount() {
  return import.meta.env.VITE_LOGIN_ACCOUNT;
}

/**
 * 获取登录默认密码
 * @returns
 */
export function getLoginPwd() {
  return import.meta.env.VITE_LOGIN_PWD;
}

/**
 * 获取登录客户端ID
 * @returns
 */
export function getClientId() {
  return import.meta.env.VITE_CLIENT_ID;
}

/**
 * 获取登录客户端密码
 * @returns
 */
export function getClientSecret() {
  return import.meta.env.VITE_CLIENT_SECRET;
}
