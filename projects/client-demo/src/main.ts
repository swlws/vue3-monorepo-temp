import { createApp } from 'vue';
import App from './App.vue';
import components from './register/component';
import router from './router/index';

import { useElementPlus, useElementPlusIcon, useEnv } from '@web/core';
const { getAppTitle } = useEnv;
document.title = getAppTitle();

const app = createApp(App);
app.use(useElementPlus);
app.use(useElementPlusIcon);
app.use(components);
app.use(router);
app.mount('#app');
