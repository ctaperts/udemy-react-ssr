const path = require('path');
const merge = require('webpack-merge');
const { commonLoaders } = require('./webpack.base.js');
const webpackNodeExternals = require('webpack-node-externals');

module.exports = {
  // inform webpack we are building a bundle for nodejs
  // rather than for the browser
  target: 'node',

  // tell webpack the root file of our
  // server app
  entry: './src/index.js',

  // tell webpack where to put the output file
  // that is generated
  output: {
    filename: 'bundle.js',
    path: path.resolve(__dirname, 'build')
  },

  externals: [webpackNodeExternals()],
  module: {
    rules: commonLoaders.concat([
      {
        test: /\.scss$/,
        use: [
          {
            loader: 'isomorphic-style-loader',
          },
          {
            loader: 'css-loader',
            options: {
              modules: true,
              importLoaders: 1,
              localIdentName: '[name]__[local]___[hash:base64:5]',
              sourceMap: true
            }
          },
          {
            loader: 'sass-loader'
          }
        ]
      }
    ])
  }
};
