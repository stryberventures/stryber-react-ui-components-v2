import React from 'react';
import * as Icons from '.';
import pkg from './package.json';
import Text from '../Text';

export default {
  title: 'Components/Icons',
  parameters: {
    pkg,
  },
};

export const AllIcons = () => {
  const getIconsArr = () => {
    const iconsArr = [];
    for (const key in Icons) {
      iconsArr.push({ name: key, Icon: Icons[key as keyof typeof Icons] });
    }
    return iconsArr;
  };
  return (
    <>
      <Text style={{ fontSize: 24, fontWeight: '700', color: '#000000' }}>
      All Icons:
      </Text>
      {getIconsArr().map(({ name, Icon }, index) => (
        <div
          key={index}
          style={{
            display: 'flex',
            alignItems: 'center',
            padding: '10px 0',
          }}
        >
          <span style={{ marginRight: '5px' }}>{name}:</span>
          <Icon fill="#000000" width='15px' height='15px' />
        </div>
      ))}
    </>
  )
}
