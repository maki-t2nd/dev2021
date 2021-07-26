const mode = 'development';
const enableSouceMap = 'source-map';
const webpack = require('webpack');

const config = {
  mode: mode,
  module: {
    rules: [{
      test: /\.js$/,
      exclude: /node_modules/,
      use: {
        loader: 'babel-loader',
        options: {
          presets: [
            "@babel/preset-env",
          ]
        }
      }
    }]
  },
  target: ["web", "es5"],
  devtool: enableSouceMap,
  resolve: {
    extensions: [ '.js' ],
  },
  plugins: [
    new webpack.ProvidePlugin({
      $: 'jquery',
      jQuery: 'jquery'
    })
  ]
};

module.exports = [{
  ...config,
  ...{
    entry: {
      main: [ `./src/js/main.js` ],
    },
    output: {
      libraryTarget: 'window',
      path: __dirname + `/_site/js/`,
      filename: 'main.js',
    },
  },
}];
