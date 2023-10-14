module.exports = {
  root: true,
  extends: [
    'next',
    'prettier',
    'next/core-web-vitals',
    'eslint-config-prettier',
    'eslint:recommended',
    'plugin:react/recommended',
    'plugin:@typescript-eslint/recommended-type-checked',
    'plugin:@typescript-eslint/recommended',
  ],
  plugins: ['react', 'react-hooks', 'jest', '@typescript-eslint'],
  settings: { react: { version: 'detect' } },
  ignorePatterns: ['/public/'],
  parser: '@typescript-eslint/parser',
  parserOptions: {
    ecmaVersion: 11,
    sourceType: 'module',
    requireConfigFile: false,
    project: true,
  },
  rules: {
    '@typescript-eslint/no-unused-vars': ['error'],
    'no-var': 'error',
    'no-constant-condition': 'error',
    'no-dupe-args': 'error',
    'no-dupe-else-if': 'error',
    'no-console': ['error', {}],
    'no-debugger': 'error',
    'no-await-in-loop': 'error',
    'no-duplicate-imports': ['error', { includeExports: true }],
    'func-style': ['error', 'declaration', { allowArrowFunctions: true }],
    quotes: ['error', 'single'],
    'function-paren-newline': ['error', 'multiline-arguments'],
    'valid-jsdoc': 'error',
  },
}