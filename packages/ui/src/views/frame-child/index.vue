<template>
  <article class="home-frame" v-if="show">
    <aside>
      <el-page-header>
        <template #icon>
          <i class="icon el-icon-s-promotion" />
        </template>
        <template #title>
          <div class="title">位置</div>
        </template>
        <template #content>
          <div class="content">{{ pos }}</div>
        </template>
      </el-page-header>
    </aside>

    <section>
      <router-view></router-view>
    </section>
  </article>
</template>

<script lang="ts">
import { defineComponent, ref } from 'vue';
import { useRoute, useRouter } from 'vue-router';

import { useEnv, useToken } from '@web/core';
const { getAppName, hasUseToken } = useEnv;
const { tokenExpire } = useToken;

export default defineComponent({
  setup() {
    const show = ref(false);
    const route = useRoute();
    const router = useRouter();

    // 启用Token，并且Token无效时，返回首页
    // 启用Token时，首页一般为登陆页
    if (hasUseToken() && tokenExpire()) {
      router.push('/');
    } else {
      show.value = true;
    }

    const pos = ref(route.meta.title);

    return {
      show,
      pos,
    };
  },
});
</script>

<style lang="scss" scoped>
.home-frame {
  height: 100%;
  display: flex;
  flex-direction: column;

  > aside {
    background-color: #fff;
    padding: 10px;
    margin: 0px 0px 5px 0px;
    color: orange;
    .title {
      font-size: 14px;
    }
    .content {
      color: #999;
      font-size: 14px;
    }
  }

  > section {
    flex: 1;
    overflow: auto;

    box-sizing: border-box;
    padding: 10px;
  }
}
</style>
