const { write } = require('./writer');

module.exports = function gitignoreWriter(path) {
  const str = `node_modules
.env`;

  write(str, `${path}/.gitignore`);

};