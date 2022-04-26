<template>
  <section class="page-grid">
    <div v-for="i in rows * cols" :key="i" :style="{ backgroundColor: colors[i] }"></div>
  </section>

  <footer @click="setColors"> Reset </footer>
</template>

<script setup lang="ts">
import { ref, reactive } from 'vue';

const size = 50;
const rows = ref(size);
const cols = ref(size);
const colors: string[] = reactive([]);

const color = () => {
  const r = Math.floor(Math.random() * 256);
  const g = Math.floor(Math.random() * 256);
  const b = Math.floor(Math.random() * 256);
  return `rgb(${r}, ${g}, ${b})`;
};

const setColors = () => {
  colors.length = 0;
  for (let i = 0; i < rows.value * cols.value; i++) {
    colors.push(color());
  }
};

setColors();
</script>

<style lang="scss" scoped>
$size: 50;

.page-grid {
  display: grid;
  grid-template-rows: repeat($size, 1fr);
  grid-template-columns: repeat($size, 1fr);

  height: 100vh;

  > div {
    font-size: 12px;
    user-select: none;
  }
}

footer {
  width: 100px;
  height: 100px;

  position: fixed;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);

  background-color: #fff;
  border-radius: 50%;

  display: flex;
  justify-content: center;
  align-items: center;
  user-select: none;

  opacity: 0.1;
  transition: all 0.3s;

  &:hover {
    cursor: pointer;
    opacity: 1;
  }
}
</style>
