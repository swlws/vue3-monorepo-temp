<template>
  <el-input-number
    v-model="field.value"
    controls-position="right"
    :placeholder="placeholder"
    size="small"
  ></el-input-number>
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
