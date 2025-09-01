import { dirname } from 'path';
import { fileURLToPath } from 'url';
import { FlatCompat } from '@eslint/eslintrc';
import boundaries from 'eslint-plugin-boundaries';

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
    },
    settings: {
      'boundaries/include': ['src/**/*'],
      'boundaries/elements': [
        {
          type: 'app',
          pattern: 'app',
        },
        {
          type: 'features',
          pattern: 'features/*',
        },
        {
          type: 'shared',
          pattern: [
            'components/*',
            'hooks/*',
            'lib/*',
            'schemas/*',
            'store/*',
            'i18n/*',
          ],
        },
      ],
    },
    rules: {
      'boundaries/no-unknown-files': ['error'],
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
              from: ['app'],
              allow: ['shared', 'features'],
            },
          ],
        },
      ],
    },
  },
];

export default eslintConfig;