module.exports = {
  extends: [
    'airbnb',
    'plugin:eslint-comments/recommended',
    'plugin:@typescript-eslint/recommended',
    '@juicyarts/eslint-config/typescript',
  ],
  parser: '@typescript-eslint/parser',
  plugins: ['@typescript-eslint', 'import'],
  env: {
    browser: true,
    node: true,
  },
  parserOptions: {
    ecmaFeatures: {
      jsx: true,
    },
    ecmaVersion: 2018,
    useJSXTextNode: true,
    project: './tsconfig.json',
    tsconfigRootDir: './',
  },
  overrides: [
    {
      files: ['**/setup-tests.ts', '**/*.spec.ts', '**/*.spec.tsx'],
      rules: {
        '@typescript-eslint/no-explicit-any': [0],
        'react/jsx-no-literals': [0],
        '@typescript-eslint/explicit-function-return-type': [
          2,
          {
            allowExpressions: true,
          },
        ],
        'import/no-extraneous-dependencies': [
          2,
          {
            devDependencies: true,
          },
        ],
      },
    },
    {
      files: ['*.ts', '*.tsx'],
      rules: {
        '@typescript-eslint/camelcase': [2, { ignoreDestructuring: true }],
        'lines-between-class-members': [0],
        '@typescript-eslint/no-unused-vars': [2, { args: 'none' }],
        'react/jsx-curly-spacing': [2, 'always'],
        'padded-blocks': [0],
        'import/no-extraneous-dependencies': [1],
        'react/jsx-props-no-spreading': [2, { custom: 'ignore' }],
        // TODO: these are temporary workarounds for the usage of optional chaning!
        // see PRS in this github issue to check the current rule status
        // https://github.com/typescript-eslint/typescript-eslint/issues/1033#issuecomment-550039809
        'no-undef': [1],
        'no-restricted-globals': [1],
        'no-useless-catch': [1],
        '@typescript-eslint/no-use-before-define': [1],
        'react/jsx-filename-extension': [
          1,
          {
            extensions: ['.tsx'],
          },
        ],
      },
    },
  ],
  rules: {
    '@typescript-eslint/indent': 0,
    'max-len': [
      0,
      {
        code: 120,
        ignoreComments: true,
        ignoreTralingCommas: true,
        ignoreUrls: true,
        ignoreStrings: true,
        ignoreTemplateLiterals: true,
      },
    ],
  },
  settings: {
    'import/extensions': ['.ts', '.tsx'],
    'import/resolver': {
      typescript: {},
      node: {
        extensions: ['.ts', '.tsx'],
      },
    },
    'import/ignore': ['utils'],
  },
};
