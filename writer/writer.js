const fs = require('fs');

function write(str, path) {
  fs.writeFileSync(path, str);
  const pathTarget = path.lastIndexOf('/');
  const result = path.slice(pathTarget + 1, pathTarget.length);
  console.log(result + ' created');
}

function writeJson(obj, path) {
  fs.writeFileSync(path, JSON.stringify(obj));
  const pathTarget = path.lastIndexOf('/');
  const result = path.slice(pathTarget + 1, pathTarget.length);
  console.log(result + ' created');
}

module.exports = {
  write,
  writeJson
};