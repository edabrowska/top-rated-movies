// https://facebook.github.io/jest/docs/webpack.html

const path = require('path')

module.exports = {
  process (src, filename, config, options) {
    return 'module.exports = ' + JSON.stringify(path.basename(filename)) + ''
  },
}
