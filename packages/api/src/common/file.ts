import { useEnv } from '@web/core';
const { getHttpBaseUrl } = useEnv;
const BASE_URL = getHttpBaseUrl();

export default {
  /**
   * @api {post} /api_st/v1/file/start 001-通用导出文件
   * @apiVersion 0.0.1
   *
   * @apiDescription 通用导出文件
   * @apiGroup W-文件
   * @apiName startFile
   *
   * @apiParam {String} id 标识符，表示需要下载的文件是什么
   * <ul>
   *  <li>kb-version，为KB版本信息</li>
   * </ul>
   * @apiParam {Any} [body] 附加参数
   *
   * @apiUse HttpResponse
   * @apiSuccess {String} res 文件导出任务的标识符。不允许包含中文
   *
   */
  startFile: {
    url: `${BASE_URL}/v1/file/start`,
    method: 'post',
  },
  /**
   * @api {get} /api_st/v1/file/progress 002-探询导出任务是否完成
   * @apiVersion 0.0.1
   *
   * @apiDescription 探询导出任务是否完成
   * @apiGroup W-文件
   * @apiName processFile
   *
   * @apiParam {String} id 导出任务的标示符，即/file/start接口的返回值
   *
   * @apiUse HttpResponse
   * @apiSuccess {Boolean} res true为文件制作完成；false为未完成
   *
   */
  processFile: {
    url: `${BASE_URL}/v1/file/progress`,
    method: 'get',
  },
  /**
   * @api {get} /api_st/v1/file/end 003-下载需要导出的文件
   * @apiVersion 0.0.1
   *
   * @apiDescription 下载需要导出的文件
   * <h5>备注，需要修改添加响应头。示例：下载一个名称为device_list的excel文件</h5>
   * <p>Content-type为application/octet-stream</p>
   * <p>Content-Disposition为attachment; filename=device_list.xlsx</p>
   * @apiGroup W-文件
   * @apiName endFile
   *
   * @apiParam {String} id 导出任务的标示符，即/file/start接口的返回值
   *
   * @apiUse HttpResponse
   *
   */
  endFile: {
    url: `${BASE_URL}/v1/file/end`,
    method: 'blob',
  },
};
