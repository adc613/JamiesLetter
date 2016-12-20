var webpack = require('webpack');
var path = require('path');
var TARGET = process.env.npm_lifecycle_event;
process.env.BABEL_ENV = TARGET;
var root = path.resolve('./src/');


module.exports = {
  entry: [
    "./src/entry.jsx"
  ],
  resolve: {
    extensions: ['', '.js', '.jsx']
  },
  module: {
    loaders: [
      {
        test: /\.jsx?$/,
        //enables caching
        loader: 'babel',
        // parse only app files. Without this it will go through the entire 
        // project. In addition to being slow, that will most likely reult in
        // an error
        inlude: './src',
        excludee: /node_modules/,
      },
    ],
  },
  output: {
    path: path.resolve(__dirname, 'static'),
    publicPath: '/',
    filename: 'bundle.js'
  },
  plugins: [
    new webpack.NoErrorsPlugin()
  ],
  devServer: {
    host: '0.0.0.0',
    port: '8080',
    contentBase: 'static/'
  }
};
