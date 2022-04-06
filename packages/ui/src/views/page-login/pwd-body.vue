<template>
  <div class="login-body">
    <header> 修改密码 </header>

    <section>
      <div>
        <el-input
          v-model="info.username"
          :placeholder="'请输入账号'"
          prefix-icon="el-icon-user-solid"
        />
      </div>
      <div>
        <el-input
          v-model="info.old_password"
          :placeholder="'请输入旧密码'"
          show-password
          prefix-icon="el-icon-lock"
        />
      </div>
      <div>
        <el-input
          v-model="info.password"
          :placeholder="'请输入新密码'"
          show-password
          prefix-icon="el-icon-lock"
        />
      </div>
      <div>
        <el-input
          v-model="info.password2"
          :placeholder="'再次输入密码'"
          show-password
          prefix-icon="el-icon-lock"
        />
      </div>
    </section>

    <footer>
      <el-button @click="changePwd" type="primary"> 修改密码 </el-button>
    </footer>

    <aside>
      <el-button type="text" @click="() => emit('update:mode', 'login')">返回</el-button>
    </aside>
  </div>
</template>

<script lang="ts">
import { ElMessage } from 'element-plus';
import { defineComponent, onBeforeUnmount, onMounted, PropType, reactive } from 'vue';

export default defineComponent({
  props: {
    mode: String as PropType<'login' | 'uppwd'>,
    pwdFn: {
      type: Function as PropType<
        (user_name: string, old_password: string, password: string) => Promise<any>
      >,
      required: true,
    },
  },
  setup(props, { emit }) {
    const info = reactive({
      username: '',
      old_password: '',
      password: '',
      password2: '',
    });

    const changePwd = () => {
      if (!info.username || !info.old_password || !info.password || !info.password2) return;
      if (info.password !== info.password2) {
        ElMessage.warning(`两次密码不一致`);
        return;
      }

      props.pwdFn(info.username, info.old_password, info.password).then((flag) => {
        if (flag) emit('update:mode', 'login');
      });
    };

    const keyEvent = (ev: KeyboardEvent) => {
      ev.key === 'Enter' ? changePwd() : void 0;
    };
    onMounted(() => {
      document.addEventListener('keyup', keyEvent);
    });
    onBeforeUnmount(() => {
      document.removeEventListener('keyup', keyEvent);
    });

    return {
      info,
      changePwd,
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
  height: 550px;
  width: 400px;
  padding: 50px;

  border: 1px solid #e8e8e8;
  border-radius: 5px;
  box-shadow: 0px 0px 10px 0px #e8e8e8;

  > header {
    color: #666;
    font-size: 30px;
    text-align: center;
  }

  > section {
    margin: 80px 0px 30px;
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
