module.exports = {
  env: {
    browser: true,
    commonjs: true,
    es2021: true,
  },
  extends: 'airbnb-base',
  overrides: [],
  parserOptions: {
    ecmaVersion: 'latest',
  },
  rules: {
    'valid-jsdoc': 'off',
    'max-len': 'off',
    eqeqeq: 'off',
    camelcase: 'off',
    'no-bitwise ': 'off',
    'prefer-regex-literals': 'off',
    'space-before-function-paren': [
      'error',
      {
        anonymous: 'never',
        named: 'never',
        asyncArrow: 'always',
      },
    ],
    'import/no-import-module-exports': 'off',
  },
};
