const fs = require('fs-extra');

const postBuild = async () => {
  try {
    await fs.copy('build_rollup/components', 'build/');
    const components = await fs.readdir('build_rollup/components');
    components.forEach((dir) => {
      fs.copy(`src/components/${dir}/package.json`, `build/${dir}/package.json`)
    });
    await fs.remove('build_rollup');
    console.log('\x1b[32m', 'postBuild.js: Build is ready for deployment');
  } catch (e) {
    console.log('\x1b[31m','postBuild.js: Error', e);
  }
}

postBuild();
