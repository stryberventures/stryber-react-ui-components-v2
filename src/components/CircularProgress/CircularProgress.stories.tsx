import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';
import CircularProgress from './index';
import { buildArgTypes } from '../../storybook/utils';
import pkg from './package.json';

export default {
  title: 'Components/Progress/CircularProgress',
  component: CircularProgress,
  parameters: {
    pkg,
  },
  argTypes: buildArgTypes(['dir', 'className']),
} as ComponentMeta<typeof CircularProgress>;

const Template: ComponentStory<typeof CircularProgress> = (args) => {
  const [progress, setProgress] = React.useState(0);

  React.useEffect(() => {
    const timer = setInterval(() => {
      setProgress((prevProgress) => (prevProgress >= 100 ? 0 : prevProgress + 10));
    }, 800);

    return () => {
      clearInterval(timer);
    };
  }, []);
  return <CircularProgress value={progress} {...args} />
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
  shape: 'round',
}
