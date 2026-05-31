import js from '@eslint/js';
import tseslint from 'typescript-eslint';
import prettierConfig from 'eslint-config-prettier';

export default tseslint.config(
  { ignores: ['src/tailwind.config.js'] },
  js.configs.recommended,
  ...tseslint.configs.recommended,
  prettierConfig,
  {
    rules: {
      'no-console': 'off',
      'no-debugger': 'off',
      'no-await-in-loop': 'off',
      'no-param-reassign': ['error', { props: false }],

      'prefer-const': ['error', { destructuring: 'all' }],

      'no-unused-vars': 'off',
      '@typescript-eslint/no-unused-vars': [
        'warn',
        {
          ignoreRestSiblings: true,
          argsIgnorePattern: '^_|res|next|err',
          varsIgnorePattern: '^_',
        },
      ],

      'no-restricted-syntax': [
        'error',
        'ForInStatement',
        'LabeledStatement',
        'WithStatement',
      ],

      'no-unused-expressions': [
        'error',
        {
          allowTaggedTemplates: true,
          allowShortCircuit: true,
          allowTernary: true,
        },
      ],

      'no-shadow': [
        'error',
        {
          hoist: 'all',
          allow: ['resolve', 'reject', 'done', 'next', 'err', 'error'],
        },
      ],
    },
  },
);
