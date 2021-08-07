const path = require('path');
const dotenv = require('dotenv-webpack');

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
  resolve: {
    alias: {
        'psp': path.join(__dirname, 'src/js/psp'),
    }
  },
  plugins: [
    new dotenv()
  ]
};
