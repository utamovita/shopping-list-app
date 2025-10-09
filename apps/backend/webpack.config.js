const path = require('path');
const TsconfigPathsPlugin = require('tsconfig-paths-webpack-plugin');

module.exports = {
  entry: './src/main.ts',
  target: 'node',
  mode: 'production',
  module: {
    rules: [
      {
        test: /\.ts$/,
        use: 'ts-loader',
        exclude: /node_modules/,
      },
    ],
  },
  resolve: {
    extensions: ['.ts', '.js'],
    plugins: [
      new TsconfigPathsPlugin({
        configFile: './tsconfig.json',
      }),
    ],
  },
  output: {
    filename: 'index.js',
    path: path.resolve(__dirname, 'dist'),
  },
  ignoreWarnings: [
    {
      module: /node_modules\/@nestjs\/common\/utils\/load-package\.util\.js/,
      message:
        /Critical dependency: the request of a dependency is an expression/,
    },
    {
      module: /node_modules\/@nestjs\/core\/helpers\/load-adapter\.js/,
      message:
        /Critical dependency: the request of a dependency is an expression/,
    },
  ],
};
