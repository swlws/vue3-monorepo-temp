<template>
  <div class="login-page" v-if="show">
    <section>
      <transition-group name="right-left" mode="in-out">
        <LoginBody v-if="mode === 'login'" :loginFn="loginFn" v-model:mode="mode" />
        <PwdBody v-if="mode === 'uppwd'" :pwdFn="pwdChangeFn" v-model:mode="mode" />
      </transition-group>
    </section>

    <footer>
      <a href="/web/#/license">许可证</a>
      <span>{{ `@Copyright 2020-${new Date().getFullYear()}` }}</span>
    </footer>
  </div>
</template>

<script lang="ts">
import { ref, defineComponent } from 'vue';
import { useRouter } from 'vue-router';
import jwtDecode from 'jwt-decode';

import { ElMessage } from 'element-plus';
import LoginBody from './login-body.vue';
import PwdBody from './pwd-body.vue';

import { HttpResponse, useEnv, useToken } from '@web/core';
const { hasUseToken, getClientId, getClientSecret } = useEnv;
const { tokenExpire, updateToken } = useToken;

import { useCmApi as useApi } from '@web/api';
let apiModules = useApi();
let TOKEN_APIS = apiModules.token;

export default defineComponent({
  components: { LoginBody, PwdBody },
  setup() {
    const router = useRouter();
    const show = ref(false);

    // 启用Token，并且Token有效时，跳转至home
    if (hasUseToken() && !tokenExpire()) {
      router.push('/home');
    } else {
      show.value = true;
    }

    const loginFn = (username: string, pwd: string) => {
      router.push('/home');
      uaaLogin(username, pwd).then((data) => {
        if (data) {
          updateToken(data);

          router.push('/home');
        }
      });
    };

    const mode = ref('login');

    return {
      show,
      mode,
      loginFn,
      pwdChangeFn: changeUserPassword,
    };
  },
});

function uaaLogin(username: string, password: string) {
  if (!TOKEN_APIS) {
    throw new Error('Api Module Occur Error');
  }

  const param = {
    client_id: getClientId(),
    client_secret: getClientSecret(),
    username,
    password,
  };

  return TOKEN_APIS.uaaLogin(param).then((res: HttpResponse) => {
    if (res && res.r0 === 0) {
      return res.res;
    }

    ElMessage.error(res.r1);
    return undefined;
  });
}

function changeUserPassword(user_name: string, old_password: string, password: string) {
  if (!TOKEN_APIS) {
    throw new Error('Api Module Occur Error');
  }

  return uaaLogin(user_name, old_password)
    .then((data) => {
      if (data) {
        return data.access_token;
      }
      throw new Error('user validate error');
    })
    .then((access_token) => {
      let info: any = jwtDecode(access_token);
      let user_id = info.user_id;
      const param = { user_id, old_password, password };

      let auth = `Bearer ${access_token}`;
      return TOKEN_APIS.changeUserPassword(param, {
        headers: { Authorization: auth },
      }).then((res: HttpResponse) => {
        if (res && res.r0 === 0) {
          ElMessage.success('修改成功');
          return true;
        }

        ElMessage.error(res.r1);
        return false;
      });
    })
    .catch((e) => {
      console.log(e);
    });
}
</script>

<style lang="scss" scoped>
.login-page {
  height: 100%;
  display: flex;
  flex-direction: column;

  > section {
    flex: 1;
    overflow: auto;
    position: relative;
  }

  > footer {
    color: #666;
    font-size: 14px;
    text-align: center;

    padding: 20px 0px;
    border-top: 1px solid #e8e8e8;
    box-shadow: 0px 0px 10px 0px #e8e8e8;
  }
}

.right-left-enter-active {
  transition: all 0.3s ease-out;
}

.right-left-leave-active {
  transition: all 0.3s cubic-bezier(1, 0.5, 0.8, 1);
}

.right-left-enter-from,
.right-left-leave-to {
  transform: translateX(-50%) translateY(-50%) scale(0.1);
  opacity: 0;
}
</style>
