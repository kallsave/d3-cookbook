const fs = require('fs')
const path = require('path')
const webpack = require('webpack')

module.exports = {
  mode: 'development',
  entry: fs.readdirSync(__dirname).reduce((entrier, dir) => {
    const fullDir = path.join(__dirname, dir)
    if (fs.statSync(fullDir).isDirectory()) {
      const entry = path.join(fullDir, 'index.js')
      if (fs.existsSync(entry)) {
        entries[dir] = ['webpack-hot-middleware/client', entry]
      }
    }
    return entrier
  }, {}),
  output: {
    path: path.join(__dirname, '__build__'),
    filename: '[name].js',
    publicPath: '/__build__/'
  },
}


const a =

console.log(a)

