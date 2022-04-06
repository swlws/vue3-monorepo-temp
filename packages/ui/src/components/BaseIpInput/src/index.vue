<template>
  <section class="com-ip-input">
    <div v-for="(key, index) in ['a', 'b', 'c', 'd']" :key="key" class="item">
      <el-input
        v-model.number="info[key]"
        @input="(s:any) => changeEvent(key, s)"
        @focus="focusEvent(index)"
        :ref="setRefs"
      ></el-input>

      <span class="split"> ・ </span>
    </div>
  </section>
</template>

<script lang="ts">
import { defineComponent, reactive, watch } from 'vue';

function keyControl() {
  // refs数据存在BUG，当数据流变化时，refs的数量4倍的增长
  // 正常期望值，应该是4个
  let refs: any[] = [];
  const setRefs = (el: any) => {
    if (refs.length >= 4) return;
    refs.push(el);
  };

  let i = 0;
  const nextItem = () => {
    let len = refs.length;

    let m = (i + 1) % len;
    if (m === 0) return;
    i = m;

    refs[i].focus();
  };

  const focusEvent = (index: number) => {
    i = index;
  };

  return {
    setRefs,
    nextItem,
    focusEvent,
  };
}

function formatNumber(a: any) {
  let t = Number(a);
  return isNaN(t) ? undefined : t;
}

export default defineComponent({
  name: 'BaseIpInput',
  props: {
    value: String,
  },
  setup(props, { emit }) {
    const { setRefs, nextItem, focusEvent } = keyControl();
    const info: Record<string, number | undefined> = reactive({
      a: undefined,
      b: undefined,
      c: undefined,
      d: undefined,
    });

    watch(
      () => props.value,
      () => {
        let str = props.value;
        if (!str) return;

        let arr = str.split('.');

        info.a = formatNumber(arr[0]);
        info.b = formatNumber(arr[1]);
        info.c = formatNumber(arr[2]);
        info.d = formatNumber(arr[3]);
      },
    );

    function changeEvent(key: string, char: string) {
      console.log(char);
      if (char.includes('.')) {
        nextItem();
      }

      let t = info;
      let v = t[key] || 0;
      if (v < 1) t[key] = undefined;
      if (v > 255) t[key] = 255;

      if (String(v).length >= 3) {
        nextItem();
      }

      emit('update:value', `${info.a}.${info.b}.${info.c}.${info.d}`);
    }

    return {
      info,
      changeEvent,
      setRefs,
      nextItem,
      focusEvent,
    };
  },
});
</script>

<style lang="scss" scoped>
.com-ip-input {
  display: flex;
  align-items: center;

  .item {
    display: flex;
    align-items: center;

    .split {
      font-size: 2em;
    }

    .el-input {
      width: 100px;
      text-align: center;
    }

    &:last-child .split {
      display: none;
    }
  }
}
</style>
