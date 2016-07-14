// webpack.config.js

path = require('path')
webpack = require('webpack')

module.exports = {
  entry: __dirname + '/index.js',
  output: {
    path: path.join(__dirname, 'static/js'),
    filename: 'encoding-lang-sa.js',
    library: 'EncodingLangSa'
  },
  devtool: 'source-map',
  plugins: [
    new webpack.optimize.UglifyJsPlugin()
  ]
}
