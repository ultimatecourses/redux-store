module.exports = {
  entry: './src/app.ts',
  output: {
    filename: 'app.js',
    path: __dirname + '/dist/',
  },
  devServer: {
    port: 8000,
  },
  resolve: {
    extensions: ['.ts', '.js'],
  },
  module: {
    rules: [
      {
        test: /\.ts$/,
        use: 'awesome-typescript-loader',
      },
    ],
  },
};
