import { ApiFunc, ApiModule, createApis } from 'axios-business';
import { requestInterceptor, responseInterceptor } from './interceptor';
import { useEnv } from '@web/core';

const { getAppName } = useEnv;

type Module = Record<string, { [key: string]: any }>;

function parseApiModule(ms: Module) {
  let apis: Record<string, ApiModule> = {};
  Object.keys(ms).forEach((fileName) => {
    const arr: string[] = fileName.split('/');
    const moduleName = arr[arr.length - 1].replace('.ts', '');
    if (!moduleName) return;

    const componentConfig = ms[fileName];
    const defaultExport = componentConfig.default;
    if (!defaultExport) return;

    apis[moduleName] = defaultExport;
  });

  return apis;
}

function toFunc(type: string, modules: Record<string, ApiModule>) {
  let funcs = createApis({
    modules,
    timeout: 60 * 1000,
    interceptor: {
      request: requestInterceptor,
      response: responseInterceptor,
    },
  });

  return funcs;
}

let apiCache: ApiFunc;

export function useApi(): ApiFunc {
  if (apiCache) return apiCache;

  const type = getAppName();

  let ps;
  if (type === 'client-demo') {
    ps = import.meta.globEager('./client-demo/*.ts');
  } 

  if (!ps) return {};

  let funcs = toFunc(type, parseApiModule(ps));
  apiCache = funcs;

  return funcs;
}
