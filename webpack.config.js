const { resolve } = require('path')
//const webpack = require('webpack')
const nodeExternals = require('webpack-node-externals')

module.exports = {
  entry: './src/server.ts',
  node: {
    __filename: true,
    __dirname: true
  },
  target: 'node',
  output: {
    filename: 'server.js',
    path: resolve(`${__dirname}/dist`)

  },
  module: {
    rules: [
      {
        test: /\.tsx?$/,
        loader: 'ts-loader',
        exclude: /node_modules/
      }
    ]
  },
  resolve: {
    extensions: [".tsx", ".ts", ".js"]
  },
  externals: [nodeExternals()]
}
