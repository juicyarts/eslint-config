![Check](https://github.com/juicyarts/eslint-config/workflows/Check/badge.svg?branch=master)

# @juicyarts/eslint-config

Centralized linting rules for javascript & typescript using eslint. Rules for react and vue projects that use typescript are also provided here.

## use

create or edit a eslint.rc file (or extend you eslint config wherever it may be..)

```javascript
// depending on the rules you want to use extend your configuraiton to use these rules
{
  // ...
  extends: [
    '@juicyarts/eslint-config/vue.typescript', // when using framework specific rules you don't need to add the typescript general rules since the fw specific ones already include these
    '@juicyarts/eslint-config/react.typescript', // when using framework specific rules you don't need to add the typescript general rules since the fw specific ones already include these
    '@juicyarts/eslint-config/typescript',
    '@juicyarts/eslint-config/jest',
    '@juicyarts/eslint-config/default',
  ],
  // ...
}
```

## typescript

### react

tbd

### vue

tbd

#### peer dependencies

```shell
# install peers
$ yarn add eslint-plugin-eslint-comments eslint-plugin-vue @typescript-eslint/eslint-plugin @vue/eslint-config-prettier @vue/eslint-config-typescript eslint-import-resolver-typescript eslint-plugin-import eslint-plugin-prettier eslint-plugin-vue --dev
```
