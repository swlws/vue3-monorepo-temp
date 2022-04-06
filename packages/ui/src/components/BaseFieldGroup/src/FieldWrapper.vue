<template>
  <section v-if="componentName" class="group-item">
    <component :is="componentName" :field="field"></component>
  </section>
</template>

<script lang="ts">
import { computed, defineComponent } from 'vue';
import FieldInput from './component/FieldInput.vue';
import FieldNumber from './component/FieldNumber.vue';
import FieldSelect from './component/FieldSelect.vue';
import { TField } from './buss';

export default defineComponent({
  components: {
    FieldInput,
    FieldNumber,
    FieldSelect,
  },
  props: {
    field: {
      type: Object,
      default: () => ({} as TField),
    },
  },
  setup(props) {
    const componentName = computed(() => {
      const field = props.field as TField;
      const type = field.type;

      let res = '';
      switch (type) {
        case 'bi':
          res = 'FieldInput';
          break;
        case 'bn':
          res = 'FieldNumber';
          break;
        case 'bl':
          res = 'FieldSelect';
          break;
        default:
          break;
      }

      return res;
    });

    return {
      componentName,
    };
  },
});
</script>

<style lang="scss" scoped></style>
