const fs = require('fs');
const chalk = require('chalk');

function write(str, path) {
  fs.writeFileSync(path, str);
  const pathTarget = path.lastIndexOf('/');
  const result = path.slice(pathTarget + 1, pathTarget.length);
  console.log('Successfully created | ' + chalk.cyanBright.bold(result));
}

function writeJson(obj, path) {
  fs.writeFileSync(path, JSON.stringify(obj, null, 2));
  const pathTarget = path.lastIndexOf('/');
  const result = path.slice(pathTarget + 1, pathTarget.length);
  console.log('Successfully created | ' + chalk.cyanBright.bold(result));
}

module.exports = {
  write,
  writeJson
};