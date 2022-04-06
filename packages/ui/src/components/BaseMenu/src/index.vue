<template>
  <article class="base-menu">
    <header>
      <main-menu v-model:checkedId="oneId" :data="firstLevelMenu" />
    </header>

    <section>
      <menu-item
        v-for="item in secondLevelMenu"
        :key="item.id"
        :data="item"
        v-model:two-id="twoId"
        v-model:three-id="threeId"
        @route-change="routeChange"
      />
    </section>
  </article>
</template>

<script lang="ts">
import { defineComponent } from 'vue';
import { useRoute, useRouter } from 'vue-router';
import { menu, TMenuItem } from './menu';
import MainMenu from './Menu.vue';
import MenuItem from './MenuItem.vue';

/**
 * 刷新时，初始化菜单ID
 */
function currentRouteInfo(data: any[]) {
  const route = useRoute();
  const match = route.matched.slice(-1)[0];
  if (!match) return ['', '', ''];

  const path = match.path;
  const obj = data.find((item) => item.path === path);
  if (!obj) return ['', '', ''];

  const ids = [obj.pid, obj.id];
  const tmp = data.find((item) => item.id === obj.pid);
  if (tmp && tmp.pid) {
    ids.unshift(tmp.pid);
  }

  return ids;
}

export default defineComponent({
  name: 'BaseMenu',
  components: {
    MainMenu,
    MenuItem,
  },
  props: {
    data: {
      type: Array,
      default: () => [] as TMenuItem[],
    },
  },
  setup(props) {
    const ids = currentRouteInfo(props.data);
    const router = useRouter();

    const { oneId, twoId, threeId, firstLevelMenu, secondLevelMenu, routeChange } = menu(
      props.data as TMenuItem[],
      ids,
      router,
    );

    return {
      oneId,
      twoId,
      threeId,
      firstLevelMenu,
      secondLevelMenu,
      routeChange,
    };
  },
});
</script>

<style lang="scss" scoped>
.base-menu {
  display: flex;
  border-bottom: 1px solid #333;

  > section {
    margin: 0px 30px;
    display: flex;
    align-items: center;
  }
}
</style>
