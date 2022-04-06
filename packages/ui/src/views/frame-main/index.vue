<template>
  <article class="home-frame" v-if="show">
    <base-menu :data="menuData" />

    <aside v-if="useToken">
      <i class="el-icon-user-solid"></i>
      <span class="user">{{ userName }}</span>
      <span class="logout" @click="logout">注销</span>
    </aside>

    <section>
      <router-view v-slot="{ Component }">
        <transition name="menu-page" mode="out-in">
          <component :is="Component" />
        </transition>
      </router-view>
    </section>
  </article>
</template>

<script lang="ts">
import { computed, defineComponent } from 'vue';
// import store from '~/store/store';
import { useRouter } from 'vue-router';
import { ref } from 'vue';

import { useEnv, useToken, useStorage } from '@web/core';
const { getAppName, hasUseToken } = useEnv;
const { tokenExpire, cleanToken } = useToken;
const { getValue } = useStorage(getAppName());

export default defineComponent({
  props: {
    menuData: {
      type: Array,
      default: () => [],
    },
  },
  setup(props) {
    const show = ref(false);
    const router = useRouter();

    // 启用Token，并且Token无效时，返回首页
    // 启用Token时，首页一般为登陆页
    if (hasUseToken() && tokenExpire()) {
      router.push('/');
    } else {
      show.value = true;
    }

    const userName = computed(() => {
      let user = getValue('user');
      if (!user) return '';

      return user.user_name;
    });

    const logout = () => {
      cleanToken();

      router.push('/');
    };

    return {
      show,
      menuData: props.menuData,
      userName,
      useToken: hasUseToken(),
      logout,
    };
  },
});
</script>

<style lang="scss" scoped>
.home-frame {
  height: 100%;
  display: flex;
  flex-direction: column;

  > section {
    flex: 1;
    overflow: auto;

    box-sizing: border-box;
    padding: 10px;
  }

  > aside {
    position: fixed;
    top: 10px;
    right: 15px;

    > .user {
      padding: 0 0 0 5px;
    }

    > .logout {
      font-size: 12px;
      &:hover {
        cursor: pointer;
        color: orange;
      }
      &::before {
        content: ' ';
        border-left: 1px solid #333;
        margin: 0 0 0 10px;
        padding: 0 0 0 10px;
      }
    }
  }
}

.menu-page-enter-active {
  transition: all 0.3s ease-out;
}

.menu-page-leave-active {
  transition: all 0.3s cubic-bezier(1, 0.5, 0.8, 1);
}

.menu-page-enter-from,
.menu-page-leave-to {
  transform: translateX(0%) translateY(10%);
  opacity: 0;
}
</style>
