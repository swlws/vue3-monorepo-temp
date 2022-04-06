import { h, render, ComponentPublicInstance, ref } from 'vue';
import DownFileConstructor from './index.vue';

type DownFileComponent = ComponentPublicInstance<{
  visible: boolean;
  state: number;
  doUpdate: (v: number) => void;
  doFault: () => void;
}>;

let vm: DownFileComponent | undefined | null = null;

function initInstance() {
  if (vm) return vm;

  const props: any = {};
  props.doClose = close;

  const container = document.createElement('div') as any;
  const vnode = h(DownFileConstructor, props);
  render(vnode, container);
  document.body.appendChild(container.firstElementChild);
  const instance = vnode.component;

  if (!instance) return null;

  vm = instance.proxy as DownFileComponent;

  vm.visible = true;

  return vm;
}

function update(v: number) {
  if (!vm) return;

  vm.doUpdate(v);
}

function close() {
  if (!vm) return;
  vm.visible = false;

  setTimeout(() => {
    if (!vm) return;

    vm.$el.remove();
    vm = null;
  }, 300);
}

function fault() {
  if (!vm) return;

  vm.doFault();
}

function state() {
  if (!vm) return -1;

  return vm.state;
}

export default {
  init: initInstance,
  update,
  close,
  fault,
  state,
};
