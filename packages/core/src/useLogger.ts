import { isDev } from './useEnv';

const logger = console;

function position(all = false) {
  const stack = new Error().stack || '';
  const lines = stack.split('\n');

  if (all) {
    const arr = lines.slice(3);
    return arr.join('\n ');
  }

  return lines[3];
}

export function info(...args: any[]) {
  logger.info(...args, '\n', position(isDev()));
}

export function error(...args: any[]) {
  logger.error(...args);
}
