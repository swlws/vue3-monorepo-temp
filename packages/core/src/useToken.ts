import jwtDecode from 'jwt-decode';

import { useStorage, useEnv } from './index';
const { getAppName } = useEnv;
const { setValue, getValue } = useStorage(getAppName());

export type Token = {
  access_token: string; // TOKEN
  expires_in: number; // 有效时长
  jti: string; //
  refresh_token: string; // 刷新使用的TOKEN
  scope: string; // 权限范围
  token_type: string; // 类型 bearer
};

export type TokenUser = {
  user_id: string;
  user_name: string;
  iat: number; // 过期时间
};

export function updateToken(token: Token) {
  if (!token) return;

  setValue('token', token);

  let info: any = jwtDecode(token.access_token);
  setValue('user', {
    user_id: info.user_id,
    user_name: info.user_name,
    iat: info.iat,
  });
}

/**
 * 清除Token
 *
 * @param state
 * @returns
 */
export function cleanToken() {
  setValue('token', {});
  setValue('user', {});
}

/**
 * 有效Token，且未过期
 * @param state
 * @returns
 */
export function tokenExpire() {
  const user = getValue('user') as TokenUser;
  if (!user) return true;

  let iat = user.iat;
  if (typeof iat !== 'number') return true;

  let dis = new Date().getTime() - new Date(iat * 1000).getTime();
  if (dis < 20 * 60 * 1000) return false;

  return true;
}
