<template>
  <article class="base-card">
    <header>
      <div class="left">
        <el-icon><icon-arrow-right /></el-icon>
        <span>{{ title }}</span>
      </div>

      <div class="right">
        <slot name="button-group" />
      </div>
    </header>
    <section>
      <slot />
    </section>
  </article>
</template>

<script lang="ts">
import { defineComponent } from 'vue';

export default defineComponent({
  name: 'BaseCard',
  props: {
    title: String,
  },
  setup(props, { slots }) {},
});
</script>

<style lang="scss" scoped>
.base-card {
  height: 100%;
  width: 100%;

  display: flex;
  flex-direction: column;

  > header {
    padding: 5px 0px;
    border-bottom: 1px solid #e8e8e8;

    display: flex;
    justify-content: space-between;
    align-items: center;

    .left {
      > i {
        color: orange;
        font-weight: bolder;
      }
      > span {
        padding: 0px 5px;
        color: #333;
        font-size: 14px;
        font-weight: bold;
      }
    }
  }

  > section {
    flex: 1;
    overflow: auto;
  }
}
</style>
