<template>
  <article class="base-field-group">
    <field-wrapper v-for="field in fields" :key="field.key" :field="field" />
  </article>
</template>

<script lang="ts">
import { defineComponent, PropType, watch } from 'vue';
import FieldWrapper from './FieldWrapper.vue';
import { collectFieldValue, TField } from './buss';
import { lib } from 'weblibext';

export default defineComponent({
  name: 'BaseFieldGroup',
  components: { FieldWrapper },
  props: {
    fields: {
      type: Array as PropType<TField[]>,
      default: () => [],
    },
  },
  emits: ['change'],
  setup(props, { emit }) {
    const changeEvent = lib.debounce(function () {
      const res = collectFieldValue(props.fields as TField[]);
      emit('change', res);
    });

    watch(() => props.fields, changeEvent, {
      deep: true,
    });
  },
});
</script>

<style lang="scss" scoped>
.base-field-group {
  display: flex;
  flex-wrap: wrap;

  > section {
    width: 200px;
    margin: 3px;
  }
}
</style>
