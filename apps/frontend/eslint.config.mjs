import { dirname } from 'path';
import { fileURLToPath } from 'url';
import { FlatCompat } from '@eslint/eslintrc';
import boundaries from 'eslint-plugin-boundaries';
import tseslint from '@typescript-eslint/eslint-plugin';

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

const compat = new FlatCompat({
  baseDirectory: __dirname,
});

const eslintConfig = [
  ...compat.extends('next/core-web-vitals'),
  {
    plugins: {
      boundaries,
      '@typescript-eslint': tseslint,
    },
    settings: {
      'boundaries/include': ['src/**/*'],
      'boundaries/elements': [
        {
          type: 'app',
          pattern: 'app/**',
        },
        {
          type: 'widgets',
          pattern: 'widgets/**/*',
        },
        {
          type: 'features',
          pattern: 'features/**/**/*',
        },
        {
          type: 'shared',
          pattern: 'shared/**/*',
        },
      ],
    },
    rules: {
      '@typescript-eslint/no-explicit-any': 'error',
      'boundaries/no-unknown-files': 'error',
      'boundaries/element-types': [
        'error',
        {
          default: 'disallow',
          rules: [
            {
              from: ['shared'],
              allow: ['shared'],
            },
            {
              from: ['features'],
              allow: ['shared', 'features'],
            },
            {
              from: ['widgets'],
              allow: ['features', 'shared'],
            },
            {
              from: ['app'],
              allow: ['widgets', 'features', 'shared'],
            },
          ],
        },
      ],
    },
  },
];

export default eslintConfig;