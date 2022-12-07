import React, { useState } from 'react';
import useStyles from './styles'
import CheckBox from '../CheckBox';
import CodeBox from '../../storybook/addons/NpmInstall/CodeBox';

const ComponentsSelector = () => {
  const classes = useStyles();

  const context = require.context('../../components', true, /package.json$/);
  const components: string[] = [];

  context.keys().forEach((key: string) => {
    const fileLink = key.replace('./', '');
    const name = fileLink.substring(0, fileLink.indexOf('/'));
    components.push(name);
  });
  const componentsFiltered = components.filter((item, index) => components.indexOf(item) === index);
  const [installData, setInstallData] = useState<string[]>([])

  const handleChange = (e: React.BaseSyntheticEvent) => {
    jsonFile(e.target.name).then(r => {
      if (e.target.checked) {
        setInstallData([...installData, `${r.name}@${r.version}`])
      } else {
        setInstallData(installData.filter(value => value !== `${r.name}@${r.version}`))
      }
    });
  }
  const jsonFile = async (name: string) => await import(`../../components/${name}/package.json`);

  return (
    <div className={classes.selectorContainer}>
      <div>
        {componentsFiltered && componentsFiltered.map((item, index) => (
          <div key={index} className={classes.itemContainer}>
            <CheckBox label={item} name={item} size='small' onChange={handleChange}/>
          </div>
        ))}
      </div>
      <div className={classes.codeBoxContainer}>
        <h3 className={classes.title}>To install selected:</h3>
        <CodeBox>
        npm install{' '}
          {installData.join(' \\\n')}
        </CodeBox>
      </div>
    </div>
  )
}

export default ComponentsSelector;
