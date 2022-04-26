import { createApp } from 'vue';
import App from './App.vue';

import { useEnv } from '@web/core';
const { getAppTitle } = useEnv;
document.title = getAppTitle();

const app = createApp(App);

app.mount('#app');
