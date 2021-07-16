module.exports = {
  extends: ['./packages/.eslintrc.js'],
  env: {
    node: true,
    es6: true,
  },
  rules: {
    '@typescript-eslint/no-var-requires': 0,
  },
};
