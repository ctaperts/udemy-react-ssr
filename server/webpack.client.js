const path = require('path');
const merge = require('webpack-merge');
const { commonLoaders } = require('./webpack.base.js');

module.exports = {
  // tell webpack the root file of our
  // server app
  entry: './src/client/client.js',

  // tell webpack where to put the output file
  // that is generated
  output: {
    filename: 'bundle.js',
    path: path.resolve(__dirname, 'public')
  },
  module: {
    rules: commonLoaders.concat([
      {
        test: /\.scss$/,
        use: [
          {
            loader: 'style-loader',
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

