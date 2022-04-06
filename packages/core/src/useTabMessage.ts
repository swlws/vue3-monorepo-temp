type PlainObject = Record<string, any>;

/**
 * 事件映射
 */
const eventMap: PlainObject = {};

window.addEventListener('message', (ev) => {
  let { data } = ev;

  if (Object.prototype.toString.call(data) !== '[object Object]') return;

  let { key, args = [] } = data;
  let fn = eventMap[key];
  if (typeof fn === 'function') {
    if (!Array.isArray(args)) args = [args];
    fn(...args);
  }
});

/**
 * 注册Tab页事件
 *
 * @param key
 * @param fn
 */
export function registerTabEvent(key: string, fn: (...args: any[]) => void) {
  eventMap[key] = fn;
}

type TMessage = { key: string; args?: any[] };
/**
 * 发送消息
 *
 * @param data
 * @returns
 */
export function sendTabMessage(data: TMessage) {
  let opener = window.opener;
  if (!opener) return;

  opener.postMessage(data, '/');
}
