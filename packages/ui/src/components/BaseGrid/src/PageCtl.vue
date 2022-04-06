<template>
  <el-pagination
    class="pagination"
    size="mini"
    :page-sizes="pageSizes"
    :current-page="pageNum"
    :page-size="pageSize"
    :total="total"
    layout="prev, pager, next,sizes, jumper"
    @size-change="sizeChangeEvent"
    @current-change="currentChangeEvent"
  ></el-pagination>
</template>

<script lang="ts">
import { defineComponent, reactive } from 'vue';

export default defineComponent({
  props: {
    total: Number,
    pageNum: Number,
    pageSize: Number,
  },
  setup(props, { emit }) {
    const pageSizes = reactive([10, 20, 50, 100, 200]);

    const sizeChangeEvent = (pageSize: number) => {
      emit('update:page-size', pageSize);
      emit('update:page-num', 1);

      emit('change', 1, pageSize);
    };

    const currentChangeEvent = (pageNum: number) => {
      emit('update:page-num', pageNum);
      emit('change', pageNum, props.pageSize);
    };

    return {
      pageSizes,
      sizeChangeEvent,
      currentChangeEvent,
    };
  },
});
</script>
