import { watchEffect, reactive } from 'vue';

type storeSchema = Record<string, any>;

const DEFAULT_NAMESPACE = '__default__';

export default function useStorage(namespace: string) {
  namespace = namespace || DEFAULT_NAMESPACE;

  const cache = reactive<storeSchema>({});

  try {
    const store = localStorage.getItem(namespace);
    cache.value = JSON.parse(store || '{}');
  } catch (e) {
    cache.value = {};
  }

  watchEffect(() => {
    localStorage.setItem(namespace, JSON.stringify(cache.value));
  });

  const setValue = (key: string, value: any) => {
    cache.value[key] = value;
  };
  const getValue = (key: string) => cache.value[key];

  return { setValue, getValue };
}
