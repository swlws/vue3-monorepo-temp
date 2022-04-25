import { useEnv } from '@web/core';
const { getHttpBaseUrl } = useEnv;
const BASE_URL = getHttpBaseUrl();

export default {
  /**
   * @api {post} /api_sds/v1/async/flow 001-创建异步任务流程
   * @apiVersion 0.0.1
   *
   * @apiDescription 创建异步任务流程
   * @apiGroup A-ASYNC_FLOW
   * @apiName postOneAsyncFlow
   *
   * @apiParam {String} id 异步流程的标识符（前后端共同指定）
   *
   * @apiUse HttpResponse
   * @apiSuccess {String} res 流程ID
   *
   */
  postOneAsyncFlow: {
    url: `${BASE_URL}/v1/async/flow`,
    method: 'post',
  },
  /**
   * @api {get} /api_sds/v1/async/flow/:id 002-获取异步流程的执行状态
   * @apiVersion 0.0.1
   *
   * @apiDescription 获取异步流程的执行状态
   * @apiGroup A-ASYNC_FLOW
   * @apiName getOneAsyncFlowStatus
   *
   * @apiParam {String} id 异步流程的ID（上一个接口返回的值）
   *
   * @apiUse HttpResponse
   *
   */
  getOneAsyncFlowStatus: {
    url: `${BASE_URL}/v1/async/flow/:id`,
    method: 'get',
  },
  /**
   * @api {get} /api_sds/v1/async/flow/file/:id/size 003-获取文件的大小
   * @apiVersion 0.0.1
   *
   * @apiDescription 获取文件的大小
   * @apiGroup A-ASYNC_FLOW
   * @apiName fileSize
   *
   * @apiParam {String} id 导出任务的标示符，即/file/start接口的返回值
   *
   * @apiUse HttpResponse
   * @apiSuccess {Object} res
   * @apiSuccess {Number} res.size 文件大小，单位为bytes
   */
  fileInfo: {
    url: `${BASE_URL}/v1/async/flow/file/:id/size`,
    method: 'get',
  },
  /**
   * @api {get} /api_sds/v1/async/flow/file/:id 004-使用异步流程过程中产生的信息下载文件
   * @apiVersion 0.0.1
   *
   * @apiDescription 使用异步流程过程中产生的信息下载文件
   * @apiGroup A-ASYNC_FLOW
   * @apiName downFile
   *
   * @apiParam {String} id 异步流程的ID（上一个接口返回的值）
   *
   * @apiUse HttpResponse
   *
   */
  downFile: {
    url: `${BASE_URL}/v1/async/flow/file/:id`,
    method: 'get',
  },
};
