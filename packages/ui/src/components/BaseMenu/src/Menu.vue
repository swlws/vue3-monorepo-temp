<template>
  <el-popover placement="bottom-start" trigger="hover" width="500px" v-model:visible="visible">
    <section class="menu-body" ref="bodyRef" @mouseleave="visible = false">
      <div
        v-for="item in data"
        :key="item.id"
        class="item"
        :class="{ checked: item.id === checkedId }"
        :data-id="item.id"
      >
        <el-icon><icon-menu /></el-icon>

        <span>{{ item.label }}</span>
      </div>
    </section>

    <template #reference>
      <div class="menu-title" @mouseenter="visible = true">
        <!-- <i class="el-icon-s-grid"></i> -->
        <el-icon><icon-grid /></el-icon>
        <div></div>
        <span class="title">{{ menuName }}</span>
      </div>
    </template>
  </el-popover>
</template>

<script lang="ts">
import { computed, defineComponent, onMounted, ref } from 'vue';
import { TMenuItem } from './menu';
import { dom } from 'weblibext';

export default defineComponent({
  name: 'Menu',
  props: {
    data: {
      type: Array,
      default: () => [] as TMenuItem[],
    },
    checkedId: {
      type: String,
      default: '',
    },
  },
  setup(props, { emit }) {
    const visible = ref(false);
    const bodyRef = ref(null);

    onMounted(() => {
      dom.clickProxy(bodyRef.value as any, (target) => {
        emit('update:checkedId', target.dataset.id);

        visible.value = false;
      });
    });

    const menuName = computed(() => {
      let data = props.data as TMenuItem[];
      let obj = data.find((item) => item.id === props.checkedId);
      return obj?.label;
    });

    return {
      visible,
      bodyRef,
      menuName,
    };
  },
});
</script>

<style lang="scss" scoped>
.menu-body {
  width: 100%;
  display: grid;
  grid-template-columns: repeat(3, 1fr);

  > .item {
    cursor: pointer;
    padding: 10px 5px;
    margin: 10px 5px;
    border: 1px solid #e8e8e8;
    box-shadow: 0px 5px 10px 0px #e8e8e8;

    display: flex;
    align-items: center;

    > i {
      font-size: 20px;
      margin: 0px 10px;
    }

    &.checked {
      color: #42b983;
      border: 1px solid #42b983;
    }
  }
}

.menu-title {
  cursor: pointer;
  padding: 10px;

  display: flex;
  align-items: center;

  > i {
    font-size: 20px;
    padding: 0px 8px 0px 0px;
    margin: 0px 8px 0px 0px;

    position: relative;
    &::after {
      content: ' ';

      width: 3px;
      height: 100%;

      background-color: #ff6a00;

      position: absolute;
      top: 0px;
      right: 0px;
    }
  }

  > span {
    color: #333;
    font-size: 16px;
    font-weight: bolder;
  }
}
</style>
