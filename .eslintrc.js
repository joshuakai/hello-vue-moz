module.exports = {
  root: true,
  env: {
    node: true
  },
  'extends': [
    'plugin:vue/vue3-essential',
    'eslint:recommended',
    '@vue/typescript/recommended'
  ],
  parserOptions: {
    ecmaVersion: 2020,
    parser: {
      'vue': 'espree'
    }
  },
  rules: {
    'no-console': process.env.NODE_ENV === 'production' ? 'warn' : 'off',
    'no-debugger': process.env.NODE_ENV === 'production' ? 'warn' : 'off',
    // disable the rule for all files
    // "@typescript-eslint/explicit-module-boundary-types": "off"
  },
  'overrides': [
    {
      'files': ['*.vue'],
      'rules': {
        '@typescript-eslint/explicit-module-boundary-types': 'off'
      }
    }
  ]
}
