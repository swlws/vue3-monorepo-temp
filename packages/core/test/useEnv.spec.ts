import { assert, describe, expect, it } from 'vitest';
import { getMode } from '../src/useEnv';

describe('useEnv', () => {
  it('getMode', () => {
    expect(getMode(), '文本内容').toBe('test');
  });
});
