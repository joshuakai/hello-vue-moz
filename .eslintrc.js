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
    ecmaVersion: 2020
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
