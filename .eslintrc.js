module.exports = {
  env: {
    browser: true,
    node: true,
    jquery: true
  },
  extends: ['tui', 'plugin:prettier/recommended'],
  plugins: [],
  globals: {'_': true},
  // add your custom rules here
  rules: {
    indent: [2, 2, {SwitchCase: 1, ignoreComments: false, ImportDeclaration: 1, flatTernaryExpressions: false}]
  }
};
