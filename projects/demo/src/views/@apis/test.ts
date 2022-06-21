import { ElMessage } from 'element-plus';

import { HttpResponse, useLogger } from '@web/core';
import { useDemoApi as useApi } from '@web/api';
let apiModules = useApi();
let APIS = apiModules.test;

const logger = useLogger;

if (!APIS) {
  throw new Error('Api Module Occur Error');
}

/**
 * 测试GET请求
 */
export function testGet() {
  return APIS.testGet()
    .then((res: HttpResponse) => {
      if (res && res.r0 === 0) return res.res;

      return undefined;
    })
    .catch((err) => {
      logger.error(err);
      ElMessage.error(err);
      return undefined;
    });
}

/**
 * 测试POST请求
 */
export function testPost() {
  APIS.testPost()
    .then((res: HttpResponse) => {
      if (res && res.r0 === 0) return res.res;

      return undefined;
    })
    .catch((err) => {
      logger.error(err);
      ElMessage.error(err);
      return undefined;
    });
}

/**
 * 测试PUT请求
 */
export function testPut() {
  APIS.testPut()
    .then((res: HttpResponse) => {
      if (res && res.r0 === 0) return res.res;

      return undefined;
    })
    .catch((err) => {
      logger.error(err);
      ElMessage.error(err);
      return undefined;
    });
}

/**
 * 测试DELETE请求
 */
export function testDel() {
  APIS.testDel()
    .then((res: HttpResponse) => {
      if (res && res.r0 === 0) return res.res;

      return undefined;
    })
    .catch((err) => {
      logger.error(err);
      ElMessage.error(err);
      return undefined;
    });
}
