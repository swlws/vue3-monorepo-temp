import { createRouter, createWebHashHistory } from 'vue-router';
import { menuRouters, singlePageRouters } from './routes';

import { FrameMain, FrameChild, Page404, PageLogin } from '@web/ui';

import menuData from './menu';

const router = createRouter({
  history: createWebHashHistory(),
  routes: [
    // {
    //   path: '/',
    //   component: PageLogin,
    // },
    {
      path: '/',
      component: FrameMain,
      children: menuRouters(),
      props: () => {
        return {
          menuData,
        };
      },
    },
    {
      path: '/child',
      component: FrameChild,
      children: singlePageRouters(),
    },
    {
      path: '/:catchAll(.*)',
      component: Page404,
    },
  ],
});

export default router;
