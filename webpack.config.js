module.exports = {
  mode: "development",
  entry: './src/app.ts',
  devtool: 'inline-source-map',
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
        use: 'ts-loader',
        exclude: /node_modules/
      },
    ],
  },
};
