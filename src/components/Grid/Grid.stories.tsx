import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';
import Grid from './';
import pkg from './package.json';
import { buildExcludeArgTypes } from '../../storybook/utils';
import { useGrid } from '../../hooks/useGrid';
import toRem from '../../utils/toRem';

export default {
  title: 'Components/Grid',
  component: Grid,
  parameters: {
    pkg,
  },
  argTypes: buildExcludeArgTypes(['className']),
} as ComponentMeta<typeof Grid>;

const Template: ComponentStory<typeof Grid> = (args) => {
  const { breakpoint } = useGrid();
  return (
    <>
      <h1>breakpoint: {breakpoint}</h1>
      <Grid
        container
        component={'main'}
        gap={toRem(20)}
      >
        <Grid
          item
          xs={9}
          sm={12}
          md={6}
          xl={6}
          style={{ border: '1px solid black', height: 120 }}
        >
          1
        </Grid>
        <Grid
          item
          xs={3}
          md={6}
          xl={6}
          style={{ border: '1px solid black', height: 120 }}
        >
          2
        </Grid>
        <Grid
          item
          xs={6}
          md={12}
          xl={8}
          style={{ border: '1px solid black', height: 120 }}
        >
          3
        </Grid>
      </Grid>
    </>
  );
}

export const StandardGrid = Template.bind({});
