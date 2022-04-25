// import { getHttpBaseUrl } from '../../tool/env';

const BASE_URL = '/api_power';

export default {
  /**
   * @api {get} /api_power/uaa/oauth/user_token 001-UAA登录
   * @apiVersion 0.0.1
   *
   * @apiDescription UAA登录
   * @apiGroup Y-应用
   * @apiName uaaLogin
   *
   * @apiParam {String} client_id 客户端ID
   * @apiParam {String} client_secret 客户端密码
   * @apiParam {String} username 用户名
   * @apiParam {String} password 密码
   *
   * @apiSuccess {String} r0
   * @apiSuccess {String} r1
   * @apiSuccess {Object} res 响应体
   * @apiSuccess {String} res.access_token
   * @apiSuccess {String} res.token_type
   * @apiSuccess {String} res.id_token
   * @apiSuccess {String} res.refresh_token
   * @apiSuccess {String} res.expires_in
   * @apiSuccess {String} res.scope
   * @apiSuccess {String} res.jti
   *
   */
  uaaLogin: {
    url: `${BASE_URL}/uaa/oauth/user_token`,
    method: 'get',
  },
  /**
   * @api {get} /api_power/uaa/oauth/user_token 002-修改密码
   * @apiVersion 0.0.1
   *
   * @apiDescription 修改密码
   * @apiGroup Y-应用
   * @apiName changeUserPassword
   *
   * @apiParam {String} user_id 用户ID
   * @apiParam {String} old_password 旧密码
   * @apiParam {String} password 密码
   *
   * @apiSuccess {String} r0
   * @apiSuccess {String} r1
   *
   */
  changeUserPassword: {
    url: `${BASE_URL}/uaa/users/:user_id/password`,
    method: 'put',
  },
  /**
   * @api {post} /api_power/uaa/oauth/refresh_token 003-刷新token
   * @apiVersion 0.0.1
   *
   * @apiDescription 刷新token
   * @apiGroup Y-应用
   * @apiName refreshToken
   *
   * @apiParam {String} client_id 客户端ID
   * @apiParam {String} client_secret 客户端密码
   * @apiParam {String} token_type Token类型
   * @apiParam {String} refresh_token 刷新使用的Token
   *
   * @apiSuccess {String} r0
   * @apiSuccess {String} r1
   * @apiSuccess {Object} res 响应体
   * @apiSuccess {String} res.access_token
   * @apiSuccess {String} res.token_type
   * @apiSuccess {String} res.id_token
   * @apiSuccess {String} res.refresh_token
   * @apiSuccess {String} res.expires_in
   * @apiSuccess {String} res.scope
   * @apiSuccess {String} res.jti
   *
   */
  refreshToken: {
    url: `${BASE_URL}/uaa/oauth/refresh_token`,
    method: 'post',
  },
};
