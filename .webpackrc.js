var path = require('path');
module.exports = {
  devServer: {
    historyApiFallback: true,    
  },
  entry: {"block":"src/Block/index.js"},
  output: {
    library: 'blocks',
    path: path.resolve(__dirname, 'library'),
  }
};