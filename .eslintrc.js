module.exports = {
  // https://github.com/vuejs/vue-eslint-parser
  // parser: 'vue-eslint-parser',
  parser: 'babel-parser',
  env: {
    browser: true,
    node: true,
    es2021: true,
  },
  extends: [
    // https://github.com/vuejs/eslint-plugin-vue
    'plugin:vue/vue3-recommended',
    // ts-eslint
    'plugin:@typescript-eslint/recommended',
    'prettier',
    // https://github.com/prettier/eslint-plugin-prettier
    'plugin:prettier/recommended',
  ],
  parserOptions: {
    parser: '@typescript-eslint/parser',
    ecmaVersion: 2020,
    sourceType: 'module',
    ecmaFeatures: {
      jsx: true,
    },
  },
  rules: {
    'prettier/prettier': ['error', { vueIndentScriptAndStyle: false }],
  },
};
