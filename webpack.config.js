const path = require('path');

module.exports = {
  entry: './src/js/app.js',
  mode: 'production',
  watch: true,
  output: {
    filename: 'wallet.js',
    path: path.resolve(__dirname, 'dist'),
  },
};
