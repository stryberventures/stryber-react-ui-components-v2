import React, { useEffect, useState } from 'react';
import useStyles from './styles'
import CheckBox from '../../../components/CheckBox';
import CodeBox from '../../addons/NpmInstall/CodeBox';

const ComponentsSelector = () => {
  const classes = useStyles();
  const [allData, setAllData] = useState<string[]>([]);
  const [installData, setInstallData] = useState<string[]>([]);
  const components: string[] = [];

  const context = require.context('../../../components', true, /package.json$/);

  context.keys().forEach((key: string) => {
    const fileLink = key.replace('./', '');
    const name = fileLink.substring(0, fileLink.indexOf('/'));
    components.push(name);
  });

  const removeDuplicates = (arr: string[]) => arr.filter((item, index) => arr.indexOf(item) == index);
  const componentsFiltered = removeDuplicates(components);

  const handleChange = (e: React.BaseSyntheticEvent) => {
    jsonFile(e.target.name).then(r => {
      const pkgData = [];
      pkgData.push(`${r.name}@${r.version}`);
      if (Object.entries(r.peerDependencies)[0]) {
        Object.entries(r.peerDependencies).map( item => {
          const version = `${item[1]}`.replace('>=', '@');
          pkgData.push(`${item[0]}${version}`);
        });
      }
      if (e.target.checked) {
        setAllData([...allData, ...pkgData]);
      } else {
        const filtered = allData.join()
          .replace(pkgData.join(), '')
          .replace(',,', ',')
          .replace(/^,/, '')
          .replace(/,$/, '')
          .split(',')
          .filter( i => i)
        setAllData([...filtered]);
      }
    });
  }
  useEffect(() => setInstallData(removeDuplicates(allData)), [allData]);
  const jsonFile = async (name: string) => await import(`../../../components/${name}/package.json`);

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
