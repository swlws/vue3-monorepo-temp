<template>
  <el-select v-model="field.value" multiple collapse-tags :placeholder="placeholder" size="small">
    <el-option
      v-for="item in field.options"
      :key="item.value"
      :label="item.label"
      :value="item.value"
    >
    </el-option>
  </el-select>
</template>

<script lang="ts">
import { computed, defineComponent } from 'vue';
import { TField } from '../buss';

export default defineComponent({
  props: {
    field: {
      type: Object,
      default: () => ({} as TField),
    },
  },
  setup(props) {
    const placeholder = computed(() => {
      const field = props.field as TField;
      return `${field.label}`;
    });

    return {
      placeholder,
    };
  },
});
</script>
