/**
 * 查询字段枚举值定义
 */
export type TFieldOption = {
  label: string;
  value: string;
};

/**
 * 查询字段的定义
 */
export type TField = {
  key: string;
  label: string;
  type: 'bi' | 'bn' | 'bl';
  value?: string | number | boolean | string[] | number[] | boolean[];
  options?: TFieldOption[];
};

export type TFIeldValue = {
  type: 'bi' | 'bn' | 'bl';
  key: string;
  value: string | number | boolean | string[] | number[] | boolean[];
};

function isEmpty(v: any) {
  if (Array.isArray(v)) {
    return v.length === 0;
  }

  const ts = ['number', 'boolean'];
  if (ts.includes(typeof v)) return false;

  if (typeof v === 'string' && !!v) return false;

  return true;
}

/**
 * 收集字段值
 * @param fields
 * @returns
 */
export function collectFieldValue(fields: TField[]) {
  if (!Array.isArray(fields) || fields.length === 0) return [];

  return fields
    .filter((item) => {
      return !isEmpty(item.value);
    })
    .map(({ key, value, type }) => {
      return {
        key,
        value,
        type,
      };
    });
}
