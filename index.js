module.exports = {
  root: true,
  env: {
    node: true,
    es6: true,
    browser: true,
  },

  extends: ['eslint:recommended'],
  overrides: [
    {
      files: ['*.js'],
      rules: {
        quotes: [2, 'single'],
      },
    },
  ],
};
