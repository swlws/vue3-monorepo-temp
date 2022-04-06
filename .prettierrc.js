module.exports = {
  // 单行最多100个字符
  printWidth: 100,
  // 一个tab代表2个空格数
  tabWidth: 2,
  // 不使用tab缩进，否则使用空格
  useTabs: false,
  // 末尾分号
  semi: true,
  //
  vueIndentScriptAndStyle: false,
  // 使用单引号代替双引号
  singleQuote: true,
  // 对象的 key 仅在必要时用引号
  quoteProps: 'as-needed',
  // 大括号内的首尾需要空格 { foo: bar }
  bracketSpacing: true,
  // 尾随逗号
  trailingComma: 'all',
  // 箭头函数，只有一个参数的时候，也需要括号
  arrowParens: 'always',
  // 不需要自动在文件开头插入 @prettier
  insertPragma: false,
  // 不需要写文件开头的 @prettier
  requirePragma: false,
  // 折行标准
  proseWrap: 'never',
  htmlWhitespaceSensitivity: 'strict',
  // 换行符使用 lf
  endOfLine: 'lf',
  // jsx 标签的反尖括号需要换行
  jsxBracketSameLine: false,
  // 每个文件格式化的范围是文件的全部内容
  rangeStart: 0,
  rangeEnd: Infinity,
};
