<template>
  <h1>{{ title }} </h1>

  <section>
    <span>标签组件：</span>
    <base-label label="menu" />
    <base-label label="test" />
    <base-label label="welcome" />
  </section>

  <section>
    <el-button @click="doPostTest">Send Post Http Request</el-button>
    <el-button @click="doDelTest">Send Delete Http Request</el-button>
    <el-button @click="doPutTest">Send Put Http Request</el-button>
    <el-button @click="doGetTest">Send Get Http Request</el-button>
  </section>

  <footer>
    <router-link :to="{ path: '/demo/page/child' }">非菜单页面</router-link>
  </footer>
</template>

<script lang="ts" setup>
import { testGet, testPost, testDel, testPut } from '@demo/views/@apis/test';
import { ref } from 'vue';

const title = ref('welcome the demo menu page');

const doGetTest = () => {
  testGet();
};

const doPostTest = () => {
  testPost();
};

const doDelTest = () => {
  testDel();
};

const doPutTest = () => {
  testPut();
};
</script>

<style lang="scss" scoped>
h1,
section,
footer {
  text-align: center;
  margin: 10px 0;
}
</style>
