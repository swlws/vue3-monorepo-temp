import { AxiosRequestConfig, AxiosResponse } from 'axios-business';
import { useEnv, useStorage, useLogger as logger } from '@web/core';
import refreshToken from './refreshToken';

const { getAppName } = useEnv;

// 缓存的App Name
let CACHE_APP_NAME: string;

/**
 * 请求拦截器
 * @param config
 * @returns
 */
export function requestInterceptor(config: AxiosRequestConfig) {
  let auth = config.headers.Authorization;
  if (auth) return config;

  try {
    CACHE_APP_NAME = CACHE_APP_NAME || getAppName();

    const { getValue } = useStorage(CACHE_APP_NAME);
    const token = getValue('token') || {};
    const accessToken = token.access_token;
    if (accessToken) {
      config.headers.Authorization = `Bearer ${accessToken}`;
    }
  } catch (e) {
    logger.error(e);
  }

  return config;
}

// 401处理的定时器
let TIMER_401: any;
/**
 * 相应拦截器
 * @param response
 * @returns
 */
export function responseInterceptor(response: AxiosResponse) {
  // 刷新token标志位
  const needRefreshToken = response.headers['x-refresh-token'] as boolean;
  if (needRefreshToken) {
    refreshToken();
  }

  const {
    config: { responseType },
    data,
  } = response;

  if (responseType === 'json') {
    const r0 = data.r0;
    if ([8010].includes(r0)) {
      clearTimeout(TIMER_401);
      TIMER_401 = setTimeout(() => {
        window.location.hash = '/';
      }, 300);
    }
  }

  return response;
}
