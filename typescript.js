module.exports = {
  extends: ['@juicyarts/eslint-config'],
  overrides: [
    {
      files: ['*.js'],
      rules: {
        '@typescript-eslint/explicit-function-return-type': 'off',
        '@typescript-eslint/no-var-requires': 'off',
        'import/no-extraneous-dependencies': [0],
      },
    },
    {
      files: ['*.ts', '*.tsx'],
      plugins: ['@typescript-eslint', 'import'],
      rules: {
        '@typescript-eslint/camelcase': [2, { ignoreDestructuring: true }],
        '@typescript-eslint/no-unused-vars': [2, { args: 'none' }],
        '@typescript-eslint/no-use-before-define': [1],
        'import/no-extraneous-dependencies': [1],
        'lines-between-class-members': [0],
        'padded-blocks': [0],
        'no-undef': [1],
        'no-restricted-globals': [1],
        'no-useless-catch': [1],
      },
    },
    {
      files: [
        '**/*.interface.ts',
        '**/*.definitions.ts',
        '**/*.mock.ts',
        '**/utils/**',
        '**/*.utils.ts',
        '**/*.util.ts',
      ],
      rules: {
        'import/prefer-default-export': 0,
      },
    },
  ],
  settings: {
    'import/extensions': ['.ts', '.tsx'],
    'import/parsers': {
      '@typescript-eslint/parser': ['.ts', '.tsx'],
    },
    'import/resolver': {
      typescript: {},
      node: {
        extensions: ['.ts', '.tsx'],
      },
    },
    'import/ignore': ['utils'],
  },
};
