<template>
  <el-popover placement="bottom" trigger="hover" v-if="hasChild" v-model:visible="visible">
    <section class="menu-body" ref="menuGroupRef" @mouseleave="visible = false">
      <div
        v-for="item in data.child"
        :key="item.id"
        class="item leaf-item"
        :class="{ 'three-checked': item.id === threeId }"
        :data-id="item.id"
        :data-pid="item.pid"
        :data-path="item.path"
      >
        <span>{{ item.label }} </span>
      </div>
    </section>

    <template #reference>
      <div
        class="menu-item"
        :class="{ 'two-checked': data.id === twoId }"
        @mouseenter="visible = true"
      >
        {{ data.label }}
      </div>
    </template>
  </el-popover>
  <div v-else class="menu-item" :class="{ 'two-checked': data.id === twoId }" @click="secondClick">
    {{ data.label }}
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue';
import { secondLevelMenu, threeLevelMenu, TMenuItem } from './menu';

export default defineComponent({
  name: 'MenuItem',
  props: {
    data: {
      type: Object,
      default: () => ({} as TMenuItem),
    },
    twoId: {
      type: String,
      default: '',
    },
    threeId: {
      type: String,
      default: '',
    },
  },
  emits: ['route-change', 'update:threeId', 'update:twoId'],
  setup(props, { emit }) {
    const { hasChild, secondClick } = secondLevelMenu(props.data as TMenuItem, emit);

    const { menuGroupRef, visible } = threeLevelMenu(emit);

    return {
      menuGroupRef,
      visible,
      hasChild,
      secondClick,
    };
  },
});
</script>

<style lang="scss" scoped>
.menu-item {
  cursor: pointer;
  margin: 0px 10px;
  color: #333;
  font-size: 14px;
  font-weight: bold;
}

.two-checked {
  color: #42b983;
}

.menu-body {
  .leaf-item {
    cursor: pointer;
    margin: 10px 5px;
    padding: 10px 5px;
    border-bottom: 1px solid #e8e8e8;

    font-size: 14px;
    padding: 0px 5px;
    color: #666;
  }

  .three-checked {
    color: #42b983;
    border-bottom: 1px solid #42b983;
  }
}
</style>
