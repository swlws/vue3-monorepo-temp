import { THttpResponse } from '@web/core';
import { useCmApi as useApi } from '@web/api';
import FileDown from '../components/BaseDownFile/main';
import { AxiosResponse } from 'axios';
import { lib } from 'weblibext';
import { useRangeDown } from './useFileDownRange';

let apiModules = useApi();
let ASYNC_FLOW_APIS = apiModules.asyncflow;
// if (!ASYNC_FLOW_APIS) {
//   throw new Error('Api Module Occur Error');
// }

/**
 * 开始下载文件
 *
 * @param id 任务标识符，区分下载什么文件
 * @param body 参数
 * @returns 下载任务ID
 */
function startFile(id: string, body?: any): Promise<string | undefined> {
  return ASYNC_FLOW_APIS.postOneAsyncFlow({ id, body }).then((res: THttpResponse) => {
    if (res && res.r0 === 0) return res.res;

    return undefined;
  });
}

/**
 * 探询文件是否生成
 *
 * @param id 下载任务ID
 * @returns
 */
function processFile(id: string): Promise<boolean | undefined> {
  return ASYNC_FLOW_APIS.getOneAsyncFlowStatus({ id }).then((res: THttpResponse) => {
    if (res && res.r0 === 0) return res.res;

    return undefined;
  });
}

/**
 * 直接下载文件
 *
 * @param id
 * @returns
 */
function directDown(id: string): Promise<boolean> {
  return ASYNC_FLOW_APIS.downFile({ id }, { responseType: 'blob' }).then((res: AxiosResponse) => {
    if (!res) return false;

    let name = '';
    const disposition = res.headers['content-disposition'];
    if (disposition) {
      // @ts-ignore
      name = res.headers['content-disposition'].match(/filename=(.*)/)[1];
    }
    name = name || '未知';

    const type = res.headers['content-type'];
    lib.downFileByBlob(res.data, name, type);

    return true;
  });
}

/**
 * 下载文件
 *
 * @param id 下载任务ID
 * @returns
 */
function endFile(id: string): Promise<boolean> {
  // 先尝试使用range分片下载
  // 失败后，再直接下载
  return useRangeDown(id).then((flag) => {
    if (!flag) return directDown(id);
    return true;
  });
}

function askProgress(taskId: string) {
  let v = 10;
  return new Promise((resolve, reject) => {
    let status = false;
    const loop = () => {
      // 当状态不是下载中时，停止轮询
      if (FileDown.state() !== 1) {
        reject(false);
        return;
      }

      v += 10;
      if (v >= 50) v = 50;
      FileDown.update(v);

      if (status === true) {
        resolve(true);
        return;
      }

      processFile(taskId).then((flag) => {
        status = !!flag;
        setTimeout(loop, 1000);
      });
    };

    loop();
  });
}

export default function useFileDown(id: string, body?: any) {
  FileDown.init();

  startFile(id, body)
    .then((tid) => {
      if (!tid) {
        FileDown.fault();
        throw new Error('下载任务创建失败');
      }
      FileDown.update(10);
      return tid;
    })
    .then((tid) => {
      return askProgress(tid).then(() => tid);
    })
    .then((tid) => {
      return endFile(tid);
    })
    .then((flag) => {
      if (flag) {
        FileDown.update(100);
      }
    })
    .catch((err) => {
      FileDown.fault();
    });
}
