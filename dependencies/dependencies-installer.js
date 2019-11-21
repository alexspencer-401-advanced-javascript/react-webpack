const installer = require('./installer');

module.exports = function dependenciesInstaller(path) {
  const packages = [
    'react',
    'react-dom',
    'react-router-dom',
    'react-redux',
    'redux',
    'redux-thunk'
  ];

  installer(path, packages, false);

};