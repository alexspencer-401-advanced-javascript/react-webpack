module.exports = function installer(path, packages, dev) {
  const { execSync } = require('child_process');
  let d;
  if(dev) d = '-D';
  else d = '';

  execSync(`npm i ${d} ${packages.join(' ')}`, {
    cwd: path,
    stdio: 'inherit'
  });
};