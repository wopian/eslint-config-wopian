const { CLIEngine } = require('eslint')
const config = require('./')

const cli = new CLIEngine({
  useEslintrc: false,
  configFile: `${__dirname}/.eslintrc.json`
})

describe('wopian', () => {
  it('should be a valid ESLint config', () => {
    expect.assertions(1)
    const code = 'var foo = 1\nvar bar = function () {}\nbar(foo)\n'
    expect(cli.executeOnText(code).errorCount).toBe(0)
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
