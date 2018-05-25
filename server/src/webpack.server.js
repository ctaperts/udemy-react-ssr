const path = require('path');

module.exports ={
  // inform wp building bundle for nodejs rather
  // than the browser
  target: 'node',

  // tell wp the root
  entry: './src/index.js',

  // tell wp where to put the output file
  output: {
    filename: 'bundle.js',
    path: path.resolve(__dirname, 'build')
  },

  // tell wp to run babel on every file
  module: {
    rules: [
      {
        test: /\.js?$/,
        loader: 'babel-loader',
        exclude: /node_modules/,
        options: {
          presets: [
            'react',
            'stage-0',
            ['env', { targets: { browsers: ['last 2 versions'] }}]
          ]
        }
      }
    ]
  }
};
