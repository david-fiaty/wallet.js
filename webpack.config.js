const path = require('path');

module.exports = {
  entry: './src/js/wallet.js',
  mode: 'production',
  watch: true,
  output: {
    filename: 'main.js',
    path: path.resolve(__dirname, 'dist'),
  },
};
