<template>
  <div class="wrapper" v-if="show">
    <p v-if="mode === 'single'" class="base-label" :style="singleStyle">
      <span> {{ label }} </span>
    </p>
    <p v-else class="base-label multiple" :style="multipleStyle">
      <span class="left">{{ left }}: </span>
      <span class="right" :style="rightStyle">{{ right }}</span>
    </p>
  </div>
</template>

<script lang="ts">
import { computed, defineComponent } from 'vue';

export default defineComponent({
  name: 'BaseLabel',
  props: {
    label: String,
    color: {
      type: String,
      default: '#009afe',
    },
    left: String,
    right: [String, Number],
  },
  setup(props) {
    const mode = computed(() => {
      return props.label ? 'single' : 'multiple';
    });

    const show = computed(() => {
      return props.label || props.right;
    });

    const singleStyle = computed(() => {
      return {
        borderColor: `${props.color} `,
        color: `${props.color} `,
      };
    });

    const multipleStyle = computed(() => {
      return {
        borderColor: `${props.color} `,
      };
    });

    const rightStyle = computed(() => {
      return {
        color: `${props.color} `,
      };
    });

    return { mode, show, singleStyle, multipleStyle, rightStyle };
  },
});
</script>

<style lang="scss" scoped>
.wrapper {
  display: inline-block;
  margin: 0 10px 0 0;

  > p {
    margin: 3px 3px 3px 0;
    line-height: 16px;
  }
}

.base-label {
  font-size: 12px;
  border: 1px solid transparent;
  border-radius: 3px;
  padding: 0px;

  > span {
    padding: 0px 5px;
  }
}

.multiple {
  font-size: 12px;

  > .left {
    color: #999;
  }
}
</style>
