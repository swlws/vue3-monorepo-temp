import { useCmApi as useApi } from '@web/api';
import { AxiosResponse } from 'axios';
import { lib } from 'weblibext';
import { THttpResponse } from '@web/core';
import FileDown from '../components/BaseDownFile/main';

let apiModules = useApi();
let ASYNC_FLOW_APIS = apiModules.asyncflow;
// if (!ASYNC_FLOW_APIS) {
//   throw new Error("Api Module Occur Error");
// }

const CHUNK_SIZE = 50 * 1000 * 1000;

type TFile = { size: number };
function fileInfo(id: string): Promise<TFile> {
  return ASYNC_FLOW_APIS.fileInfo({ id }).then((res: THttpResponse) => {
    if (res && res.r0 === 0) return res.res;

    return {};
  });
}

/**
 * 使用ArrayBuffer下载数据
 *
 * @param id 任务ID
 * @param start 开始位置
 * @param end 结束位置
 * @returns
 */
function chunkDown(id: string, start: number, end: number) {
  return ASYNC_FLOW_APIS.downFile(
    { id },
    {
      headers: { Range: `bytes: ${start}-${end}` },
      responseType: 'arraybuffer',
    },
  ).then((res: AxiosResponse) => {
    let name = '';
    const disposition = res.headers['content-disposition'];
    if (disposition) {
      // @ts-ignore
      name = res.headers['content-disposition'].match(/filename=(.*)/)[1];
    }
    name = name || '未知';

    const type: string = res.headers['content-type'];

    return {
      name,
      type,
      data: res.data as ArrayBuffer,
    };
  });
}

/**
 * 并发Promise
 *
 * @param poolLimit 并发最大数
 * @param array 参数
 * @param iteratorFn 回调函数
 * @returns
 */
async function threadPool(poolLimit: number, array: any[], iteratorFn: (...args: any[]) => any) {
  const ret = []; // 存储所有的异步任务
  const executing: any[] = []; // 存储正在执行的异步任务
  for (const item of array) {
    // 调用iteratorFn函数创建异步任务
    const p = Promise.resolve().then(() => iteratorFn(item, array));
    ret.push(p); // 保存新的异步任务

    // 当poolLimit值小于或等于总任务个数时，进行并发控制
    if (poolLimit <= array.length) {
      // 当任务完成后，从正在执行的任务数组中移除已完成的任务
      const e: any = p.then(() => executing.splice(executing.indexOf(e), 1));
      executing.push(e); // 保存正在执行的异步任务
      if (executing.length >= poolLimit) {
        await Promise.race(executing); // 等待较快的任务执行完成
      }
    }
  }
  return Promise.all(ret);
}

/**
 * 合并ArrayBuffer数据
 *
 * @param arr
 * @returns
 */
function mergeData(arr: ArrayBuffer[]) {
  if (!arr.length) return null;
  let totalLength = arr.reduce((acc, item) => acc + item.byteLength, 0);

  let result = new Uint8Array(totalLength);
  let length = 0;
  for (let item of arr) {
    let tmp = new Uint8Array(item);

    result.set(tmp, length);
    length += item.byteLength;
  }

  return result;
}

/**
 * 使用range分块下载文件
 *
 * @param id
 * @param total
 * @returns
 */
export async function useRangeDown(id: string): Promise<boolean> {
  let total = 0;
  try {
    let info = await fileInfo(id);
    total = info.size;

    if (!total) throw new Error(`File Size Is ${total}`);
  } catch (err) {
    return Promise.resolve(false);
  }

  let chunks = Math.ceil(total / CHUNK_SIZE);

  // 动画进度
  let v = 50;
  let s = Math.ceil(40 / chunks);

  return threadPool(3, [...new Array(chunks).keys()], (i) => {
    let start = i * CHUNK_SIZE;
    let end = (i + 1) * CHUNK_SIZE > total ? total : (i + 1) * CHUNK_SIZE;

    // 修改动画进度
    v += s;
    if (v >= 90) v = 90;
    FileDown.update(v);

    return chunkDown(id, start, end);
  }).then((data) => {
    if (Array.isArray(data) && data.length >= 1) {
      let { name, type } = data[0];

      let content = mergeData(data.map((item) => item.data));
      lib.downFileByBlob(content, name, type);
    }

    return true;
  });
}
