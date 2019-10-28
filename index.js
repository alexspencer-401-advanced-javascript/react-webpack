const fs = require('fs');

const args = process.argv;
const folder = args[args.length - 1];

if(folder !== '.') fs.mkdir(folder);
fs.mkdir(`${folder}/src`);

const webpackWriter = require('./writer/webpack-writer');
const travisWriter = require('./writer/travis-writer');
const srcIndexWriter = require('./writer/src-index-writer');
const packageJson = require('./writer/package-json-writer');
const gitignoreWriter = require('./writer/gitignore-writer');
const eslintWriter = require('./writer/eslint-writer');
const babelWriter = require('./writer/babel-writer');
const devDependenciesInstaller = require('./dependencies/dev-dependencies-installer');
const dependenciesInstaller = require('./dependencies/dependencies-installer');

webpackWriter(folder);
travisWriter(folder);
srcIndexWriter(folder);
packageJson(folder);
gitignoreWriter(folder);
eslintWriter(folder);
babelWriter(folder);
devDependenciesInstaller(folder);
dependenciesInstaller(folder);

