<template>
  <div class="base-down-file" @click.self="clickBack">
    <transition name="slide-fade">
      <div class="content" v-if="visible">
        <i :class="stateInfo.icon"></i>

        <div class="desc">{{ stateInfo.msg }}</div>
        <el-progress
          :percentage="progress"
          :stroke-width="20"
          :text-inside="true"
          color="green"
        ></el-progress>
      </div>
    </transition>
  </div>
</template>

<script lang="ts">
import { computed, ref } from 'vue';
import { ElProgress } from 'element-plus';

export default {
  components: { ElProgress },
  props: {
    doClose: {
      type: Function as () => {},
    },
  },
  setup(props: any) {
    const visible = ref(false);
    const state = ref(1); // 1为下载中；2为下载结束；3为故障
    const progress = ref(0);

    let timer: any;
    const doUpdate = (v: number) => {
      // 故障时，不再更新进度
      if (state.value === 3) return;

      if (v < 0) v = 0;
      if (v > 100) v = 100;

      let dis = v - progress.value;
      let inter = ~~(300 / dis);

      clearInterval(timer);
      timer = setInterval(() => {
        if (progress.value >= 100) {
          progress.value = 100;

          // 完成
          state.value = 2;
          setTimeout(clickBack, 300);
        }

        if (progress.value >= v || progress.value >= 100) {
          clearInterval(timer);
          return;
        }

        progress.value++;
      }, inter);
    };

    const stateInfo = computed(() => {
      let v = state.value;
      if (v === 1)
        return {
          icon: 'el-icon-loading green',
          msg: '下载中...',
        };
      if (v === 2) {
        return {
          icon: 'el-icon-success green',
          msg: '下载成功',
        };
      }
      if (v === 3) {
        return {
          icon: 'el-icon-warning orange',
          msg: '发生异常，请重试！',
        };
      }

      return {};
    });

    const clickBack = () => {
      let fn = props.doClose;

      typeof fn === 'function' ? fn() : void 0;
    };

    const doFault = () => {
      state.value = 3;
      clearInterval(timer);
    };

    return {
      visible,
      state,
      stateInfo,
      progress,
      clickBack,

      doUpdate, // 供外部调用
      doFault, // 供外部调用
    };
  },
};
</script>
<style lang="scss" scoped>
.base-down-file {
  position: fixed;
  top: 0px;
  left: 0px;

  width: 100%;
  height: 100%;
  background-color: rgba(0, 0, 0, 0.1);

  > .content {
    position: relative;
    top: 30%;
    left: 50%;
    transform: translateX(-50%) translateY(-50%);

    width: 400px;
    padding: 40px 20px;

    background-color: #fff;
    border-radius: 5px;

    text-align: center;
    > i {
      font-size: 5em;
    }

    > .desc {
      margin: 10px 0px;
      color: #666;
      font-size: 14px;
    }
  }
}

.green {
  color: green;
}
.orange {
  color: orange;
}

/* 可以设置不同的进入和离开动画   */
/* 设置持续时间和动画函数        */
.slide-fade-enter-active {
  transition: all 0.3s ease-out;
}

.slide-fade-leave-active {
  transition: all 0.3s cubic-bezier(1, 0.5, 0.8, 1);
}

.slide-fade-enter-from,
.slide-fade-leave-to {
  transform: translateX(-50%) translateY(0);
  opacity: 0;
}
</style>
