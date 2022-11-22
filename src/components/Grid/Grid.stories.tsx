import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';
import Grid from './';
import pkg from './package.json';
import { buildExcludeArgTypes } from '../../storybook/utils';
import toRem from '../../utils/toRem';

export default {
  title: 'Components/Grid',
  component: Grid,
  parameters: {
    pkg,
  },
  argTypes: buildExcludeArgTypes(['className']),
  args: {
    xs: 12,
    gap: toRem(10),
    columns: 12,
  },
} as ComponentMeta<typeof Grid>;

const Template: ComponentStory<typeof Grid> = (args) => {
  return (
    <Grid
      container
      component={'main'}
      gap={toRem(20)}
      {...args}
    >
      <Grid
        item
        xs={9}
        sm={12}
        md={6}
        xl={6}
        style={{ border: '1px solid black', height: 120 }}
      >
        xs={9}, sm={12}, md={6}, xl={6}
      </Grid>
      <Grid
        container
        columns={6}
        gap={toRem(4)}
        item
        xs={3}
        md={6}
        xl={6}
        style={{ padding: `${toRem(4)}`, border: '1px solid black', height: 120 }}
      >
        <Grid
          style={{ border: '1px solid black' }}
          item
          xs={6}
          md={3}
        >
          xs={3}, md={3}
        </Grid>
        <Grid
          style={{ border: '1px solid black' }}
          item
          xs={6}
          md={3}
        >
          xs={6}, md={3}
        </Grid>
        <Grid
          style={{ border: '1px solid black' }}
          item
          xs={6}
          md={2}
        >
          xs={6}, md={2}
        </Grid>
        <Grid
          style={{ border: '1px solid black' }}
          item
          xs={6}
          md={4}
        >
          xs={6}, md={4}
        </Grid>
      </Grid>
      <Grid
        item
        xs={6}
        md={12}
        xl={8}
        style={{ border: '1px solid black', height: 120 }}
      >
        xs={6}, md={12}, xl={8}
      </Grid>
    </Grid>
  );
}

export const StandardGrid = Template.bind({});
