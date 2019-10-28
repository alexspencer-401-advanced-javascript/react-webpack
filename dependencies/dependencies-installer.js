const installer = require('./installer');

module.exports = function dependenciesInstaller(path) {
  const packages = [
    'react',
    'react-dom'
  ];

  installer(path, packages, false);

};