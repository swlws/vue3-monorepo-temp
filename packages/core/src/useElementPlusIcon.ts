import { App } from 'vue';

import {
  Menu,
  Refresh,
  ArrowRight,
  Grid,
  Close,
  Remove,
  DocumentCopy,
  CirclePlus,
  Edit,
} from '@element-plus/icons-vue';
const icons = [Menu, Refresh, ArrowRight, Grid, Close, Remove, DocumentCopy, CirclePlus, Edit];

export default function install(app: App) {
  icons.forEach((component) => {
    app.component('Icon' + component.name, component);
  });
}
