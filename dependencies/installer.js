const chalk = require('chalk');

module.exports = function installer(path, packages, dev) {
  const { execSync } = require('child_process');
  let d;
  if(dev) {
    d = '-D';
    console.log(chalk.greenBright.bold('Installing Dev Dependencies'));
  }
  else {
    d = '';
    console.log(chalk.greenBright.bold('Installing Dependencies'));
  }

  execSync(`npm i ${d} ${packages.join(' ')}`, {
    cwd: path,
    stdio: 'inherit'
  });
  console.log(chalk.greenBright.bold('Package install complete'));
};