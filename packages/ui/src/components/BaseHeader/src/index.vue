<template>
  <div class="base-header" :style="style">
    <header>
      <slot />
    </header>
  </div>
</template>

<script lang="ts">
import { computed, defineComponent, StyleValue } from 'vue';

export default defineComponent({
  name: 'BaseHeader',
  props: {
    size: {
      type: Number,
      default: 14,
    },
  },
  setup(props) {
    const style = computed<StyleValue>(() => {
      return {
        color: '#666',
        fontSize: `${props.size}px`,
        fontWeight: 'bold',
      };
    });

    return {
      style,
    };
  },
});
</script>

<style lang="scss">
.base-header {
  box-sizing: border-box;

  width: 100%;
  padding: 10px 10px;
  margin: 0px;
  border-bottom: 1px solid #e8e8e8;

  > header {
    color: #2c3e50;
    font-weight: bolder;

    position: relative;
    padding: 0px 0px 0px 15px;

    &:before {
      content: ' ';
      height: 80%;
      width: 3px;
      background-color: #f76707;

      position: absolute;
      top: 10%;
      left: 0px;
    }
  }
}
</style>
