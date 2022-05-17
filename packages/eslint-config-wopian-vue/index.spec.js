require('regenerator-runtime/runtime')
const { ESLint } = require('eslint')
const { resolve } = require('path')
const config = require('./')

const eslint = new ESLint({
  useEslintrc: false,
  overrideConfigFile: resolve(__dirname, '.eslintrc.json')
})

const printLintErrors = results => results[0].errorCount > 0 && console.warn(results[0].messages)

describe('wopian-vue', () => {
  it('should be a valid ESLint config', async () => {
    expect.assertions(1)
    const code = 'const foo = 1\nconst bar = function () {}\nbar(foo)\n'
    const results = await eslint.lintText(code)
    printLintErrors(results)
    expect(results[0].errorCount).toBe(0)
  })

  it('should extend wopian and vue', () => {
    expect.assertions(1)
    expect(config.extends).toEqual([ 'wopian', 'plugin:vue/recommended' ])
  })

  it('should use html', () => {
    expect.assertions(1)
    expect(config.plugins).toEqual([ 'html' ])
  })
})
