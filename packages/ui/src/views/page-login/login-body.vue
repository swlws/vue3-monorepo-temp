<template>
  <div class="login-body">
    <header>
      <div class="app-title">{{ appTitle }}</div>
      <div class="desc">登录</div>
    </header>

    <section>
      <div>
        <el-input
          v-model="info.account"
          :placeholder="'请输入账号'"
          prefix-icon="el-icon-user-solid"
        />
      </div>
      <div>
        <el-input
          v-model="info.pwd"
          :placeholder="'请输入密码'"
          show-password
          prefix-icon="el-icon-lock"
        />
      </div>
    </section>

    <footer>
      <el-button @click="login" type="primary"> 登录 </el-button>
    </footer>
    <aside>
      <el-button type="text" @click="() => emit('update:mode', 'uppwd')">修改密码</el-button>
    </aside>
  </div>
</template>

<script lang="ts">
import { defineComponent, onBeforeUnmount, onMounted, PropType, reactive } from 'vue';

import { useEnv } from '@web/core';
const { getLoginAccount, getLoginPwd, getAppTitle } = useEnv;

export default defineComponent({
  props: {
    mode: String as PropType<'login' | 'uppwd'>,
    loginFn: {
      type: Function as PropType<(account: string, pwd: string) => void>,
      required: true,
    },
  },
  setup(props, { emit }) {
    const info = reactive({ account: getLoginAccount(), pwd: getLoginPwd() });

    const login = () => {
      if (!info.account || !info.pwd) return;

      props.loginFn(info.account, info.pwd);
    };

    const keyEvent = (ev: KeyboardEvent) => {
      ev.key === 'Enter' ? login() : void 0;
    };
    onMounted(() => {
      document.addEventListener('keyup', keyEvent);
    });
    onBeforeUnmount(() => {
      document.removeEventListener('keyup', keyEvent);
    });

    return {
      info,
      appTitle: getAppTitle(),
      login,
      emit,
    };
  },
});
</script>

<style lang="scss" scoped>
.login-body {
  background-color: #fff;

  position: absolute;
  top: 50%;
  left: 50%;
  transform: translateX(-50%) translateY(-50%);

  box-sizing: border-box;
  height: 450px;
  width: 400px;
  padding: 50px;

  border: 1px solid #e8e8e8;
  border-radius: 5px;
  box-shadow: 0px 0px 10px 0px #e8e8e8;

  > header {
    color: #666;
    text-align: center;

    > .app-title {
      font-size: 30px;
    }

    > .desc {
      font-size: 20px;
      margin: 10px 0px;
    }
  }

  > section {
    margin: 50px 0px 30px;
    > div {
      margin: 20px 0px;

      display: flex;
      align-items: center;

      > i {
        font-size: 2em;
      }
    }

    > div .el-input > input {
      color: #666;
      border: none;
      outline: none;
    }
  }

  > footer {
    text-align: center;
    button {
      cursor: pointer;
      width: 100%;
    }
  }
}
</style>
