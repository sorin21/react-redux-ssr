const path = require('path');
const merge = require('webpack-merge');
const baseConfig = require('./webpack.base.js');
const webpackNodeExternals = require('webpack-node-externals');

const config = {
  // Inform webpack that we're building a bundle
  // for nodeJS, rather than for the browser
  target: 'node',

  // Tell webpack the root file of our
  // server application
  entry: './src/index.js',

  // Tell webpack where to put the output file
  // that is generated
  output: {
    filename: 'bundle.js',
    path: path.resolve(__dirname, 'build')
  },
  // webpackNodeExternals tells to webpack to not bundle any libraries 
  // in the output bundle.js on the server, if that library exists inside node_modules folder
  // so anything that is in node_modules is not included in bundle
  externals: [webpackNodeExternals()]
};

module.exports = merge(baseConfig, config);
