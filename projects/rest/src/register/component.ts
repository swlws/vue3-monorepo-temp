import { App } from 'vue';

const components: any[] = [];

// 全局注册
const install = (app: App) => {
  components.forEach((component) => {
    app.component(component.name, component);
  });
};

export default {
  install,
};
