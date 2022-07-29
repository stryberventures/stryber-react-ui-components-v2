const path = require('path');
const { entry, externals } = require('./preBuild');
const { webpackBuildDir } = require('./buildConstants');

module.exports = {
  entry,
  externals,
  mode: 'production',
  module: {
    rules: [
      {
        test: /\.tsx?$/,
        use: 'ts-loader',
        exclude: /node_modules/,
      },
    ],
  },
  resolve: {
    extensions: ['.tsx', '.ts', '.js'],
  },
  output: {
    filename: '[name].js',
    libraryTarget: 'umd',
    path: path.resolve(__dirname, `${webpackBuildDir}/`),
    clean: true,
  },
};
