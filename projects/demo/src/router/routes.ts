import { RouteRecordRaw } from 'vue-router';

/**
 * 菜单的路由
 *
 * @returns
 */
export function menuRouters(): Array<RouteRecordRaw> {
  let routerList: Array<RouteRecordRaw> = [];
  const modules = import.meta.glob('../views/menu/**/index.vue');

  Object.keys(modules).forEach((key) => {
    const nameMatch = key.match(/^\.\.\/views\/menu\/(.+)\/index\.vue/);

    if (!nameMatch) return;
    let name = nameMatch[1];

    routerList.push({
      path: `/${name.replace(/-/g, '/')}`,
      component: modules[key],
    });
  });

  return routerList;
}

const _import = (path: string) => () => import(`../views/pages/${path}/index.vue`);

/**
 * 单页面的路由
 *
 * @returns
 */
export function singlePageRouters() {
  return [
    {
      path: '/demo/page/child',
      component: _import('demo-helloworld'),
      meta: {
        title: 'hello world',
      },
    },
  ];
}
