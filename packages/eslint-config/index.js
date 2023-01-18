module.exports = {
  extends: [
    'eslint:recommended', // Eslint recommended configuration by eslint.
    'plugin:@typescript-eslint/recommended', // Turns on rules from TypeScript-specific plugin.
    'turbo', // turborepo
    'plugin:prettier/recommended', // Turns off all rules that are unnecessary or might conflict with Prettier.
  ],
  plugins: [
    '@typescript-eslint',
    'simple-import-sort', // Plugin for sorting imports in file.
  ],
  rules: {
    'no-console': 'warn',
    '@typescript-eslint/no-explicit-any': 'off',
    '@typescript-eslint/ban-types': 'off',
    '@typescript-eslint/no-non-null-assertion': 'off',
    '@typescript-eslint/no-empty-interface': 'off',
    'simple-import-sort/imports': 'error',
    'simple-import-sort/exports': 'error',

    'padding-line-between-statements': [
      'warn',
      { blankLine: 'always', prev: '*', next: 'return' },
      { blankLine: 'always', prev: ['const', 'let', 'var'], next: '*' },
      {
        blankLine: 'any',
        prev: ['const', 'let', 'var'],
        next: ['const', 'let', 'var'],
      },
    ],

    '@typescript-eslint/no-unused-vars': [
      'warn',
      {
        argsIgnorePattern: '^_',
        varsIgnorePattern: '^_',
        caughtErrorsIgnorePattern: '^_',
      },
    ],

    'prettier/prettier': ['warn', {}],
  },
  env: {
    es2021: true,
    browser: true,
    node: true,
  },
  parser: '@typescript-eslint/parser',
  parserOptions: {
    ecmaVersion: 2021, // ECMAScript version supported in the project.
    sourceType: 'module', // set to `module` because we use ECMAScript modules.
    ecmaFeatures: {
      jsx: true, // enable jsx for Solid.
    },
  },
  settings: {
    'import/parsers': {
      '@typescript-eslint/parser': ['.ts', '.tsx'], // use typescript-eslint parser for .ts|tsx files.
    },
  },
  overrides: [
    // override "no-empty-function" for test files
    {
      files: ['*.test.ts'],
      rules: {
        'no-empty-function': 'off',
        '@typescript-eslint/no-empty-function': 'off',
      },
    },
    // override "simple-import-sort" config
    {
      files: ['*.js', '*.jsx', '*.ts', '*.tsx'],
      rules: {
        'simple-import-sort/imports': [
          'error',
          {
            groups: [
              // `solid` first, `acme` second
              ['^solid', '^acme'],
              // Packages starting with `@`
              ['^@'],
              // Packages starting with a character
              ['^[a-z]'],
              // Packages starting with `@/`
              ['^@/'],
              // Side effect imports
              ['^\\u0000'],
              // Imports starting with `../`
              ['^\\.\\.(?!/?$)', '^\\.\\./?$'],
              // Imports starting with `./`
              ['^\\./(?=.*/)(?!/?$)', '^\\.(?!/?$)', '^\\./?$'],
              // Style imports
              ['^.+\\.s?css$'],
              // Types last
              ['^'],
              ['^\\.'],
              ['^.+\\u0000$'],
            ],
          },
        ],
      },
    },
  ],
}
