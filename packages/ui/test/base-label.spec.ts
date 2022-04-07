import { assert, describe, expect, it } from 'vitest';
import { mount } from '@vue/test-utils';

import BaseLabel from '../src/components/BaseLabel/main';

describe('BaseBabel', () => {
  it('name', () => {
    assert.equal(BaseLabel.name, 'BaseLabel');
  });

  it('文本内容', () => {
    const content = 'xxxx';
    const wrapper = mount(BaseLabel, {
      props: {
        label: content,
      },
    });

    expect(wrapper.text()).toBe(content);
  });
});
