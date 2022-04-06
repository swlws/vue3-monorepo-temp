<template>
  <el-table
    class="base-grid"
    :data="data"
    :highlight-current-row="true"
    style="width: 100%"
    :height="height"
    tooltip-effect="light"
    @select="(data: any) => emit('select', data)"
    @select-all="(data: any) => emit('select-all', data)"
    @row-click="(row: any) => emit('row-click', row)"
    @row-dblclick="(row: any) => emit('row-db-click', row)"
    @sort-change="
      (data: any ) => emit('sort-change', data.column, data.prop, data.order)
    "
  >
    <template v-for="(item, index) of columns" :key="index">
      <component
        :is="'el-table-column'"
        :type="item.type"
        :label="item.label"
        :prop="item.prop"
        :align="item.align"
        :header-align="item.headerAlign"
        :formatter="item.formatter"
        :sortable="item.sortable"
        :show-overflow-tooltip="true"
        :min-width="item.width"
      ></component>
    </template>

    <template #empty>无数据</template>
  </el-table>
</template>

<script lang="ts">
import { defineComponent } from 'vue';

export default defineComponent({
  name: 'BaseGrid',
  props: {
    columns: {
      type: Array as () => Record<string, any>[],
      default: () => [],
    },
    data: {
      type: Array,
      default: () => [],
    },
    height: {
      type: [String, Number],
      default: '100%',
    },
  },
  setup(props, { emit }) {
    return {
      emit,
    };
  },
});
</script>

<style scoped lang="scss">
.base-grid {
  height: 90%;
  width: 100%;

  .el-table th {
    height: 40px;
    color: #666666;
    background-color: #f6f6f8;
  }

  .hover-row,
  tr.hover-row > td {
    background-color: #d3ebff;
  }
  .current-row {
    background-color: #4ea6ed;
  }
}
@media screen and (-ms-high-contrast: active), (-ms-high-contrast: none) {
  .data-grid-body-wrap {
    position: absolute;
  }
}
</style>
