import { computed, watch, ref, onMounted } from 'vue';
import { Router, useRouter } from 'vue-router';

import { lib, dom } from 'weblibext';
const { makeTree } = lib;
const { clickProxy } = dom;

/**
 * 菜单数据类型声明
 */
export type TMenuItem = {
  id: string;
  pid?: string;
  label: string;
  path?: string;
  is_menu?: boolean;
  component?: string;
  child?: TMenuItem[];
};

type TEmit = (event: any, ...args: any[]) => void;

/**
 * Menu业务处理
 *
 * @param data 菜单数据
 * @param ids 初始化选中的一级、二级、三级菜单的ID
 * @returns
 */
export function menu(data: TMenuItem[], ids = ['', '', ''], router: Router) {
  const oneId = ref(ids[0]);
  const twoId = ref(ids[1]);
  const threeId = ref(ids[2]);

  const treeMenu = makeTree(data.filter((item) => item.is_menu !== false));

  const firstLevelMenu = computed(() => {
    return treeMenu.map((item) => {
      const info = { ...item };
      Reflect.deleteProperty(info, 'child');

      return info;
    });
  });

  const secondLevelMenu = computed(() => {
    if (!Array.isArray(treeMenu) || treeMenu.length === 0) return [];

    const id = oneId.value || treeMenu[0].id;
    oneId.value = id;

    const data = treeMenu.find((item) => item.id === id)?.child || [];
    twoId.value = twoId.value || (data.length > 0 ? data[0].id : '');

    // if (!threeId.value) {
    //   const hasThreeLevel = data[0] && Array.isArray(data[0].child) && data[0].child.length > 0;
    //   threeId.value = hasThreeLevel ? data[0].child[0].id : '';
    // }

    return data;
  });

  let oldPath = '';
  const routeChange = (path: string) => {
    if (oldPath === path) return;

    oldPath = path;
    router.push(path);
  };

  watch(oneId, (v) => {
    let obj = treeMenu.find((item) => item.id === v);
    if (!obj) return;

    const twoLevel = obj.child;
    if (!Array.isArray(twoLevel) || twoLevel.length === 0) return;
    twoId.value = twoLevel[0].id;

    const threeLevel = twoLevel[0].child;
    if (Array.isArray(threeLevel) && threeLevel.length > 0) {
      threeId.value = threeLevel[0].id;
      routeChange(threeLevel[0].path);
    } else {
      threeId.value = '';
      routeChange(twoLevel[0].path);
    }
  });

  return {
    oneId,
    twoId,
    threeId,
    firstLevelMenu,
    secondLevelMenu,
    routeChange,
  };
}

function routeChange(emit: TEmit, path: string, twoId: string, threeId: string) {
  emit('route-change', path);
  emit('update:twoId', twoId);
  emit('update:threeId', threeId);
}

/**
 * 二级菜单处理业务
 * @param data
 * @param emit
 * @returns
 */
export function secondLevelMenu(data: TMenuItem, emit: TEmit) {
  const hasChild = computed(() => {
    return Array.isArray(data.child) && data.child.length > 0;
  });

  const secondClick = () => {
    const path = data.path;
    const id = data.id;

    if (!path) return;
    routeChange(emit, path, id, '');
  };

  return {
    hasChild,
    secondClick,
  };
}

/**
 * 三级菜单处理业务
 * @param emit
 * @returns
 */
export function threeLevelMenu(emit: TEmit) {
  const menuGroupRef = ref();
  const visible = ref(false);

  onMounted(() => {
    clickProxy(menuGroupRef.value as HTMLElement, (target) => {
      const id = target.dataset.id;
      const pid = target.dataset.pid;
      const path = target.dataset.path;

      if (!path || !id || !pid) return;
      routeChange(emit, path, pid, id);

      visible.value = false;
    });
  });

  return {
    menuGroupRef,
    visible,
  };
}
