import { App } from 'vue';
import Component from './src/downfile';

type SFCWithInstall<T> = T & { install(app: App): void };

const _Component: SFCWithInstall<typeof Component> = Component as SFCWithInstall<typeof Component>;

_Component.install = (app: App): void => {
  app.config.globalProperties.$downFile = _Component;
};

export default _Component;
