const { write } = require('./writer');

module.exports = function travisWriter(path) {

  const str = `language: node_js
node_js: node`;

  write(str, `${path}/.travis.yml`);

};
