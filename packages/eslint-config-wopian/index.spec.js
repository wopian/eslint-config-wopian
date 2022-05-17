require('regenerator-runtime/runtime')
const { ESLint } = require('eslint')
const { resolve } = require('path')
const config = require('./')

const eslint = new ESLint({
  useEslintrc: false,
  overrideConfigFile: resolve(__dirname, '.eslintrc.json')
})

const printLintErrors = results => results[0].errorCount > 0 && console.warn(results[0].messages)

describe('wopian', () => {
  it('should be a valid ESLint config', async () => {
    expect.assertions(1)
    const code = 'const foo = 1\nconst bar = function () {}\nbar(foo)\n'
    const results = await eslint.lintText(code)
    printLintErrors(results)
    expect(results[0].errorCount).toBe(0)
  })

  it('should extend standard', () => {
    expect.assertions(1)
    expect(config.extends).toBe('standard')
  })

  it('should use babel to parse files', () => {
    expect.assertions(1)
    expect(config.parser).toBe('@babel/eslint-parser')
  })

  it('should use jest', () => {
    expect.assertions(2)
    expect(config.plugins).toEqual([ 'jest' ])
    expect(config.env.jest).toBe(true)
  })
})
