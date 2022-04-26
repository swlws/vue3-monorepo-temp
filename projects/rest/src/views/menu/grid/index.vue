<template>
  <section class="page-grid">
    <div v-for="i in rows * cols" :key="i" :style="{ backgroundColor: colors[i] }"></div>
  </section>

  <footer>
    <span @click="setColors">Reset Color</span>
    <span @click="fullScreen">Full Screen</span>
    <span @click="exitFullScreen">Exist Full Screen</span>
  </footer>
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

function fullScreen() {
  const ele = document.body as any;
  if (ele.requestFullscreen) {
    ele.requestFullscreen();
  } else if (ele.mozRequestFullScreen) {
    ele.mozRequestFullScreen();
  } else if (ele.webkitRequestFullscreen) {
    ele.webkitRequestFullscreen();
  } else if (ele.msRequestFullscreen) {
    ele.msRequestFullscreen();
  }
}

function exitFullScreen() {
  const ele = document as any;
  if (ele.exitFullScreen) {
    ele.exitFullScreen();
  } else if (ele.mozCancelFullScreen) {
    ele.mozCancelFullScreen();
  } else if (ele.webkitExitFullscreen) {
    ele.webkitExitFullscreen();
  } else if (ele.msExitFullscreen) {
    ele.msExitFullscreen();
  }
}
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
  position: fixed;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);

  user-select: none;

  background-color: #fff;
  border-radius: 5px;
  padding: 20px;

  opacity: 0.5;
  transition: all 0.3s;
  &:hover {
    opacity: 1;
  }

  > span {
    padding: 10px;
    font-size: 12px;
    text-align: center;

    transition: all 0.3s;
    &:hover {
      cursor: pointer;
      color: #009afe;
    }
  }
}
</style>
