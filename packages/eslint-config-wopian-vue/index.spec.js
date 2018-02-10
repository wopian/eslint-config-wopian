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

  it('should extend wopian and vue', () => {
    expect(config.extends).toEqual([ 'wopian', 'plugin:vue/recommended' ])
  })

  it('should use html', () => {
    expect(config.plugins).toEqual([ 'html' ])
  })
})
