import React from 'react';
import { useParameter } from '@storybook/api';
import CodeBox from './CodeBox';
import useStyles from './styles';

type PackageType = {
  name: string;
  version: string;
  peerDependencies?: { [key: string]: string };
};

const NpmInstall = ({ active }: { active: boolean }) => {
  const pkg: PackageType | null = useParameter('pkg', null);
  const classes = useStyles();

  if (!pkg || !active) {
    return null;
  }
  const { name, version, peerDependencies } = pkg;
  const filteredPeerDependencies = peerDependencies
    ? Object.keys(peerDependencies).filter(
        (peerName) =>
          peerName !== 'react' &&
          peerName !== 'react-jss' &&
          peerName !== 'classnames'
      )
    : [];
  return (
    <div className={classes.container}>
      {name && (
        <>
          <h3 className={classes.title}>To install package:</h3>
          <CodeBox>
            npm install {name}@{version}
          </CodeBox>
        </>
      )}
      {!name && (
        <>
          <h3 className={classes.title}>To install package dependencies:</h3>
          <CodeBox>
            npm install {filteredPeerDependencies.join(' \\\n')}
          </CodeBox>
        </>
      )}
      {!!filteredPeerDependencies.length && name && (
        <>
          <h3 className={classes.title}>
            ⚠️ Make sure that all needed peer dependencies are also installed
            ⚠️:
          </h3>
          <CodeBox>
            npm install {filteredPeerDependencies.join(' \\\n')}
          </CodeBox>
        </>
      )}
    </div>
  );
};

export default NpmInstall;
