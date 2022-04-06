<template>
  <table class="base-table">
    <slot />
  </table>
</template>

<script lang="ts">
import { defineComponent } from 'vue';

export default defineComponent({
  name: 'BaseTable',
});
</script>

<style lang="scss">
.base-table {
  width: 100%;
  margin: 10px 0px;

  font-size: 14px;

  td {
    padding: 5px 3px;
  }
  tr td:first-child {
    width: 200px;
    text-align: right;
    font-weight: bold;
    vertical-align: top;
  }
}
</style>
