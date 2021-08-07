const path = require('path');

module.exports = {
  entry: './src/js/app.js',
  mode: 'production',
  watch: true,
  output: {
    filename: 'wallet.js',
    path: path.resolve(__dirname, 'dist'),
    libraryTarget: 'var',
    library: 'Wallet',
  },
  module: {
    rules: [
      {
        test: /\.(js)$/,
        exclude: /node_modules/,
        use: 'babel-loader',
      },
    ],
  },
  externalsType: 'script',
  externals: {
    packageName: 'global@https://pay.google.com/gp/p/js/pay.js',
  },
};
