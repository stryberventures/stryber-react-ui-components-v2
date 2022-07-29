// This script can be used to deploy multiple packages
// - add components names to `components` array
// - run `node deploy.js`
const shell = require('shelljs');
const fs = require('fs');
const { buildDir } = require('./buildConstants');

const components = [
  // 'Button',
  // 'CheckBox',
  // 'Chip',
  // 'Dropdown',
  // 'Form',
  // 'Input',
  // 'InputPassword',
  // 'InputToggleLayout',
  // 'Multiselect',
  // 'NumberInput',
  // 'RadioButton',
  // 'Select',
  // 'Slider',
  // 'Switch',
  // 'TextArea',
  // 'TextLink',
  // 'Theme',
  // 'Tooltip',
];

components.forEach((name) => {
  try {
    if (fs.existsSync(`${buildDir}/${name}`)) {
      shell.cd(`${buildDir}/${name}`);
      console.log("\x1b[1m");
      shell.exec(`npm publish --access public`, (code) => {
        if (code !== 0) {
          throw Error(`Can not publish ${name}`);
        }
      });
      shell.cd('../../');
    } else {
      throw Error(`Directory ${buildDir}/${name} doesn't exist`);
    }
  } catch (e) {
    console.log('\x1b[31m', e);
  }
});
