import { assert, describe, it } from 'vitest';
import useStorage from '../src/useStorage';

const { setValue, getValue } = useStorage('__test__');

describe('useStorage', () => {
  it('getMode', () => {
    const key = 'user';
    const content = { name: 'test', age: 10 };

    setValue(key, content);
    assert.deepEqual(getValue(key), content);
  });
});
