module.exports = {
  root: true,
  env: {
    node: true
  },
  'extends': [
    'plugin:vue/essential',
    '@vue/standard'
  ],
  rules: {
    'no-console': process.env.NODE_ENV === 'production' ? 'error' : 'off',
    'no-debugger': process.env.NODE_ENV === 'production' ? 'error' : 'off',
    // 语句末尾使用分号（默认）
    'semi': ['error', 'always'],
    'quotes': ['error', 'single'],
    'indent': ['error', 2],
    // 函数名或 function 关键字与左括号之间使用一致的空格
    'space-before-function-paren': ['error', { 'anonymous': 'always', 'named': 'never', 'asyncArrow': 'always' }]
  },
  parserOptions: {
    parser: 'babel-eslint'
  }
};
