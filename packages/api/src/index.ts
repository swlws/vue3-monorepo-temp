import { ApiFunc, ApiModule, createApis } from 'axios-business';
import { requestInterceptor, responseInterceptor } from './interceptor';

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

function toFunc(modules: Record<string, ApiModule>) {
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

let apiCache: Map<string, ApiFunc> = new Map();
function generateApis(key: string, fn: () => Module) {
  if (apiCache.has(key)) return apiCache.get(key) || {};

  let funcs = toFunc(parseApiModule(fn()));
  apiCache.set(key, funcs);

  return funcs;
}

enum Keys {
  DEMO = 'demo',
  CM = 'cm',
}

export function useCmApi() {
  return generateApis(Keys.CM, () => {
    return import.meta.globEager('./common/*.ts');
  });
}

export function useDemoApi() {
  return generateApis(Keys.DEMO, () => {
    return import.meta.globEager('./client-demo/*.ts');
  });
}
