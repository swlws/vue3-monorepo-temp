<template>
  <h1>{{ title }} </h1>
  <section> 这是一个非菜单页面 </section>
</template>

<script lang="ts" setup>
import { ref } from 'vue';

const title = ref('hello world');
</script>

<style lang="scss" scoped>
h1,
section {
  text-align: center;
}
</style>
