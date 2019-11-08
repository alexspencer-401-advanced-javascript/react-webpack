const installer = require('./installer');

module.exports = function dependenciesInstaller(path) {
  const packages = [
    'react',
    'react-dom',
    'react-router-dom'
  ];

  installer(path, packages, false);

};