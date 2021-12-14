module.exports = {
  extends: [
    'plugin:@typescript-eslint/recommended', // 使用@ typescript-eslint / eslint-plugin中的推荐规则
    'prettier/@typescript-eslint', // 使用eslint-config-prettier禁用一些与Prettier冲突的ESLint规则
    'plugin:prettier/recommended' // 启用eslint-plugin-prettier和eslint-config-prettier，使编辑器显示错误提示，确保这项是扩展数组中的最后一个配置
  ],
  env: {
    browser: true,
    es2021: true,
    node: true
  },
  parser: '@typescript-eslint/parser', // 指定ESLint解析器
  parserOptions: {
    ecmaFeatures: {
      jsx: true
    },
    ecmaVersion: 13,
    sourceType: 'module'
  },
  plugins: ['react', '@typescript-eslint'],
  //0 忽略  1警告   2报错
  rules: {
    /* 定义但未使用变量 */
    'no-undef': 1,
    /* require报错 */
    '@typescript-eslint/no-var-requires': 0,
    /* ts每个函数都要声明显式的返回值 */
    '@typescript-eslint/explicit-module-boundary-types': 0
  }
};
