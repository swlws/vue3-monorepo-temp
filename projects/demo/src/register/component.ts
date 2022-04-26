import { App } from 'vue';

import { BaseMenu, BaseLabel } from '@web/ui';

const components = [BaseMenu, BaseLabel];

// 全局注册
const install = (app: App) => {
  components.forEach((component) => {
    app.component(component.name, component);
  });
};

export default {
  install,
};
