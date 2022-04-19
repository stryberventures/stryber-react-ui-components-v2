const path = require('path');
const componentsMap = require('./export.config.json');

const componentsList = Object.keys(componentsMap);
const entry = {};
componentsList.forEach(dir => { entry[dir] = `./src/components/${dir}/index.tsx` });
const externals = componentsList.map(dir => `../${dir}`);

module.exports = {
  entry,
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
  externals: ['react', 'classnames', 'react-jss', ...externals],
  resolve: {
    extensions: ['.tsx', '.ts', '.js'],
  },
  output: {
    filename: '[name].js',
    libraryTarget: 'umd',
    path: path.resolve(__dirname, 'dist/'),
    clean: true,
  },
};
