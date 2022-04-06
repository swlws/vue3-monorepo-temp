/**
 * 空对象
 */
export type PlainObject = Record<string, any>;

/**
 * Http响应结果
 */
export type HttpResponse = {
  r0: number;
  r1: string;
  res?: any;
};

export type THttpResponse = {
  r0: number;
  r1: '';
  res?: any;
};

/**
 * 数据表格查询项
 */
export type TListRequestParmQuery = {
  key: string;
  value: string | number | boolean | string[] | number[] | boolean[];
  type: 'bi' | 'bl';
};

/**
 * 数据表格请求体
 */
export type TListRequestParm = {
  pageNum?: number;
  pageSize?: number;
  sort?: string;
  order?: 'asc' | 'desc';
  query: TListRequestParmQuery[];
  [key: string]: any;
};
