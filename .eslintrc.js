// https://eslint.org/docs/user-guide/configuring

module.exports = {
  root: true,
  parserOptions: {
    parser: 'babel-eslint'
  },
  env: {
    browser: true
  },
  extends: [
    // https://github.com/vuejs/eslint-plugin-vue#priority-a-essential-error-prevention
    'plugin:vue/strongly-recommended',
    // https://github.com/standard/standard/blob/master/docs/RULES-en.md
    'standard'
  ],
  plugins: [
    'vue'
  ],
  rules: {
    'vue/html-indent': ['warn', 4],
    'indent': [
      'warn', 4, {
        'SwitchCase': 1
      }],
    'semi': ['warn', 'always'],
    'spaced-comment': 0,
    'space-before-function-paren': ['warn', 'never'],
    'vue/max-attributes-per-line': [
      'warn', {
        'singleline': 5,
        'multiline': {
          'max': 1,
          'allowFirstLine': false
        }
      }],
    'no-debugger': process.env.NODE_ENV === 'production' ? 'error' : 'off',
    'no-unused-vars': 0, //["warn", { "vars": "all", "args": "none", "ignoreRestSiblings": true }],
    'comma-dangle': ['warn', 'never'],
    'no-trailing-spaces': 'warn',
    'no-multiple-empty-lines': 'warn',
    'key-spacing': 'warn',
    'space-infix-ops': 'warn',
    'no-unreachable': 'warn',
    'no-mixed-operators': 'warn',
    'no-useless-escape': 'warn',
    'vue/singleline-html-element-content-newline': 0,
    'vue/html-closing-bracket-newline': 0,
    'vue/html-closing-bracket-spacing': 0,
    'object-curly-spacing': 0,
    'vue/multiline-html-element-content-newline': 0,
    'vue/no-unused-components': 'warn'
  }
};
