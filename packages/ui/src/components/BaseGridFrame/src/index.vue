<template>
  <article class="bc-grid-frame">
    <header>
      <div>
        <base-field-group :fields="fieldCfgs" @change="fieldValueChange" />
      </div>
      <div>
        <slot />
      </div>
    </header>

    <section>
      <base-grid
        ref="gridRef"
        :columns="columns"
        :loadData="loadData"
        @row-click="(row:any) => emit('row-click', row)"
        @row-dblclick="(row:any) => emit('row-db-click', row)"
        v-model:selection="checkRows"
      />
    </section>
  </article>
</template>

<script lang="ts">
import { computed, defineComponent, PropType, Ref, ref, watch } from 'vue';

type PlainObject = Record<string, any>;

type TListRequestParmQuery = {
  key: string;
  value: string | number | boolean | string[] | number[] | boolean[];
  type: 'bi' | 'bl';
};

type TListRequestParm = {
  pageNum?: number;
  pageSize?: number;
  sort?: string;
  order?: 'asc' | 'desc';
  query: TListRequestParmQuery[];
  [key: string]: any;
};

export default defineComponent({
  name: 'BaseGridFrame',
  props: {
    fields: Array,
    columns: Array,
    dataLoader: Function,
    selection: Array,
    sortCfg: {
      type: Object as PropType<{ sort: string; order: 'desc' | 'asc' }>,
      default: () => ({}),
    },
  },
  setup(props, { emit }) {
    const gridRef = ref('');
    const fieldValue: Ref<any[]> = ref([]);

    let fields = ref(props.fields);
    const fieldCfgs = computed(() => {
      fields.value?.forEach((item) => {
        (item as any).value = undefined;
      });

      return fields.value;
    });

    const fieldValueChange = (v: any[]) => {
      fieldValue.value = v;
      (gridRef.value as any).reload();
    };

    const loadData = (param: TListRequestParm) => {
      param.query = fieldValue.value;
      let fn = props.dataLoader;

      let sortCfg = props.sortCfg;
      if (sortCfg.sort) {
        param.sort = sortCfg.sort || '';
        param.order = sortCfg.order || 'asc';
      }

      if (typeof fn !== 'function') return;
      return fn(param);
    };

    const updateRow = (index: number, info: PlainObject) => {
      const ref = gridRef.value as any;
      ref.updateRow(index, info);
    };

    const reload = () => {
      (gridRef.value as any).reload();
      emit('update:selection', []);
    };

    const checkRows = ref([]);
    watch(checkRows, () => {
      emit('update:selection', checkRows.value);
    });

    return {
      fieldCfgs,
      loadData,
      fieldValueChange,
      gridRef,
      updateRow,
      reload,
      checkRows,
      emit,
    };
  },
});
</script>

<style lang="scss" scoped>
.bc-grid-frame {
  height: 100%;
  display: flex;
  flex-direction: column;

  > header {
    margin: 0px 0px 10px 0px;
    padding: 10px 20px;

    background-color: #fff;
    box-shadow: 0px 0px 10px 0px #e8e8e8;

    display: flex;
    justify-content: space-between;
    align-items: center;
  }
  > section {
    flex: 1;
  }
}
</style>
