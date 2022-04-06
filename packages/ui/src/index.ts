export * from './types/asset-rule.d';
import './style/ui.scss';

// 基础组件
import BaseCard from './components/BaseCard/main';
import BaseDownFile from './components/BaseDownFile/main';
import BaseFieldGroup from './components/BaseFieldGroup/main';
import BaseGrid from './components/BaseGrid/main';
import DataGrid from './components/BaseGrid/src/DataGrid.vue';
import BaseGridFrame from './components/BaseGridFrame/main';
import BaseHeader from './components/BaseHeader/main';
import BaseIpInput from './components/BaseIpInput/main';
import BaseLabel from './components/BaseLabel/main';
import BaseMenu from './components/BaseMenu/main';
import BaseTable from './components/BaseTable/main';

// 业务组件
import PageLogin from './views/page-login/index.vue';
import FrameMain from './views/frame-main/index.vue';
import FrameChild from './views/frame-child/index.vue';
import Page404 from './views/page-404/index.vue';

// 通过接口调用的业务组件
import useFileDown from './lib/useFileDown';

export {
  // 基础组件
  BaseCard,
  BaseDownFile,
  BaseFieldGroup,
  BaseGrid,
  DataGrid,
  BaseGridFrame,
  BaseHeader,
  BaseIpInput,
  BaseLabel,
  BaseMenu,
  BaseTable,
  // 业务组件
  PageLogin,
  FrameMain,
  FrameChild,
  Page404,
  // 通过接口调用的业务组件
  useFileDown,
};
