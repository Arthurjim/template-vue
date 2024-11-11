module.exports = {
  root: true,
  env: {
    browser: true,
    node: true
  },
  extends: ['eslint:recommended', 'plugin:vue/vue3-recommended', 'prettier', 'plugin:@typescript-eslint/recommended'],
  plugins: ['vue', '@typescript-eslint', 'prettier'],
  parserOptions: {
    ecmaVersion: 2020,
    sourceType: 'module'
  },
  rules: {
    'prettier/prettier': [
      'error',
      {
        trailingComma: 'none',
        printWidth: 120,
        semi: false,
        singleQuote: true,
        tabWidth: 2
      }
    ],
    'vue/require-default-prop': 0,
    'vue/html-indent': ['error', 2],
    'vue/singleline-html-element-content-newline': 0,
    'vue/component-name-in-template-casing': ['error', 'PascalCase'],
    'vue/multi-word-component-names': 'off',
    quotes: ['error', 'single'],
    semi: ['error', 'never'],
    'eol-last': ['error', 'always'],
    'comma-dangle': ['error', 'never'],
    'no-console': 'error'
  },
  overrides: [
    {
      files: ['*.ts', '*.tsx'],
      parser: '@typescript-eslint/parser',
      plugins: ['@typescript-eslint'],
      extends: ['plugin:@typescript-eslint/recommended'],
      rules: {
        'prettier/prettier': [
          'error',
          {
            trailingComma: 'none',
            printWidth: 120,
            semi: false,
            singleQuote: true,
            tabWidth: 2
          }
        ],
        'eol-last': ['error', 'always'],
        'comma-dangle': ['error', 'never']
      }
    },
    {
      files: ['*.vue'],
      parser: 'vue-eslint-parser',
      parserOptions: {
        parser: '@typescript-eslint/parser',
        ecmaVersion: 2020,
        sourceType: 'module'
      }
    },
    {
      files: ['src/utils/log/Logger.ts'],
      rules: {
        'no-console': 'off'
      }
    }
  ],
  globals: {
    _: true,
    defineProps: 'readonly',
    defineEmits: 'readonly',
    defineExpose: 'readonly',
    withDefaults: 'readonly'
  }
}
