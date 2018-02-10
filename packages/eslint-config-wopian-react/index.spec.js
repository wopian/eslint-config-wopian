const { CLIEngine } = require('eslint')
const config = require('./')

const cli = new CLIEngine({
  useEslintrc: false,
  configFile: `${__dirname}/.eslintrc.json`
})

describe('wopian-react', () => {
  it('should be a valid ESLint config', () => {
    const code = 'var foo = 1\nvar bar = function () {}\nbar(foo)\n'
    expect(cli.executeOnText(code).errorCount).toBe(0)
  })

  it('should extend wopian and standard-jsx', () => {
    expect(config.extends).toEqual([ 'wopian', 'standard-jsx' ])
  })
})
