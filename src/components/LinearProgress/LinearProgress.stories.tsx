import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';
import LinearProgress from './index';
import { buildArgTypes } from '../../storybook/utils';
import pkg from './package.json';

export default {
  title: 'Components/Progress/LinearProgress',
  component: LinearProgress,
  parameters: {
    pkg,
  },
  argTypes: buildArgTypes(['className', 'dir']),
} as ComponentMeta<typeof LinearProgress>;

const Template: ComponentStory<typeof LinearProgress> = (args) => {
  const [progress, setProgress] = React.useState(0);

  React.useEffect(() => {
    const timer = setInterval(() => {
      setProgress((oldProgress) => {
        if (oldProgress === 100) {
          return 0;
        }
        const diff = Math.random() * 10;
        return Math.min(oldProgress + diff, 100);
      });
    }, 500);

    return () => {
      clearInterval(timer);
    };
  }, []);

  return <LinearProgress value={progress} {...args} />
};

export const IndeterminateFlat = Template.bind({});

export const IndeterminateRound = Template.bind({});
IndeterminateRound.args = {
  shape: 'round'
}

export const DeterminateFlat = Template.bind({});
DeterminateFlat.args = {
  variant: 'determinate',
}

export const DeterminateRound = Template.bind({});
DeterminateRound.args = {
  variant: 'determinate',
  shape: 'round'
}
