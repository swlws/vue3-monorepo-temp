import { Ref, ref } from 'vue';
import { PlainObject } from './types';

type TGridRequestParam = {
  pageNum: number;
  pageSize: number;
  query?: PlainObject[];
};

type TGridResponseData = {
  total: number;
  list: PlainObject[];
};

export type TLoadData = (param: TGridRequestParam) => Promise<TGridResponseData>;

export function initGrid(loadData?: TLoadData) {
  let data: Ref<PlainObject[]> = ref([]);
  const total = ref(0);
  const pageNum = ref(1);
  const pageSize = ref(20);

  const dgRef = ref();
  const scrollToTop = () => {
    let ref = dgRef.value as any;
    const elArr = ref.$el.getElementsByClassName('el-table__body-wrapper');
    if (elArr && elArr[0]) {
      elArr[0].scrollTo(0, 0);
    }
  };

  const reload = (num = 1, size = 20) => {
    if (typeof loadData !== 'function') return;
    pageNum.value = num;
    pageSize.value = size;

    const param = {
      pageNum: num,
      pageSize: size,
    };
    loadData(param).then((res: TGridResponseData) => {
      scrollToTop();
      if (!res) return;

      total.value = res.total;
      data.value = res.list;
    });
  };
  reload();

  return {
    dgRef,
    total,
    pageNum,
    pageSize,
    data,
    reload,
  };
}
