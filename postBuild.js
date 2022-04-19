// This script clones components directories from webpack build (dist/) to build/ directory,
// clones package.json from src/components/ to build/
// moves modules (compiled sources) from the webpack build to each folder as index.js
// replaces paths to subcomponents according to export.config.json

const fs = require('fs-extra');
const replace = require('replace-in-file');
const componentsMap = require('./export.config.json');

const buildDir = 'build';
const webpackBuildDir = 'dist';
const componentsList = Object.keys(componentsMap);

async function postBuild() {
  try {
    await moveComponentsFiles();
    await replacePaths();
    await fs.remove(webpackBuildDir);
    console.log('\x1b[32m', 'postBuild.js: Build is ready for deployment');
  } catch (e) {
    console.log('\x1b[31m','postBuild.js: Error', e);
  }
}

async function moveComponentsFiles() {
  componentsList.forEach(dir => {
    fs.copySync(`${webpackBuildDir}/components/${dir}`, `${buildDir}/${dir}`);
    fs.copySync(`src/components/${dir}/package.json`, `${buildDir}/${dir}/package.json`);
    fs.copySync(`${webpackBuildDir}/${dir}.js`, `${buildDir}/${dir}/index.js`);
  });
}

async function replacePaths() {
  const from = Object.keys(componentsMap).map(key => new RegExp(`../${key}`, 'g'));
  const to = Object.values(componentsMap).map(value => `@gaia.${value}`);

  await replace({
    from,
    to,
    files: 'build/**/index.js',
  })
}

postBuild();
