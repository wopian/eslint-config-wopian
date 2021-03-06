# ESLint Config React

[![npm badge]][npm]
[![npm install badge]][npm]
[![contributors badge]][contributors]

[![travis badge]][travis]
[![david badge]][david]
[![david dev badge]][david dev]

Standard ESLint Config for my React projects

Also available for [JavaScript] and [Vue]

[JavaScript]:https://www.npmjs.com/package/eslint-config-wopian
[Vue]:https://www.npmjs.com/package/eslint-config-wopian-vue

## Requirements

- [ESLint] `>=7.0.0`
- Node `>=10.0.0`

## Installation

```shell
yarn add --dev eslint eslint-config-wopian-react
npm install --save-dev eslint eslint-config-wopian-react
```

## Usage

Create an `.eslintrc.*` file to configure rules. See: https://eslint.org/docs/user-guide/configuring

Example **.eslintrc.yml**

```yaml
extends: wopian-react
```

## Contributing

### Setup

This project uses Yarn Workspaces which has to be enabled globally:

```shell
yarn config set workspaces-experimental true
```

#### Install Dependencies

```shell
yarn
yarn bootstrap
```

## License

All code released under [MIT]

[eslint]: https://eslint.org

[mit]: https://github.com/wopian/eslint-config-wopian/blob/master/LICENSE.md

[npm]: https://www.npmjs.com/package/eslint-config-wopian-react
[npm badge]: https://img.shields.io/npm/v/eslint-config-wopian-react.svg?style=flat-square
[npm install badge]: https://img.shields.io/npm/dt/eslint-config-wopian-react.svg?style=flat-square

[travis]: https://travis-ci.org/wopian/eslint-config-wopian
[travis badge]: https://img.shields.io/travis/wopian/eslint-config-wopian/master.svg?style=flat-square&label=linux%20%26%20macOS

[david]: https://david-dm.org/wopian/eslint-config-wopian?path=packages/eslint-config-wopian-react
[david badge]: https://david-dm.org/wopian/eslint-config-wopian/status.svg?path=packages/eslint-config-wopian-react&style=flat-square
[david dev]: https://david-dm.org/wopian/eslint-config-wopian?type=dev
[david dev badge]: https://img.shields.io/david/dev/wopian/eslint-config-wopian.svg?style=flat-square

[contributors]: https://github.com/wopian/eslint-config-wopian/graphs/contributors
[contributors badge]: https://img.shields.io/github/contributors/wopian/eslint-config-wopian.svg?style=flat-square
