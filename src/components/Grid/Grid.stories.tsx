import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';
import Grid from './';
import pkg from './package.json';
import { buildExcludeArgTypes } from '../../storybook/utils';
import { toRem } from '../Theme';
import { defaultGaps, defaultColumns } from '../Theme/defaultTheme';

export default {
  title: 'Components/Grid',
  component: Grid,
  parameters: {
    pkg,
  },
  argTypes: buildExcludeArgTypes(['className']),
  args: {
    ...defaultColumns,
    gap: defaultGaps,
    columns: defaultColumns,
  },
} as ComponentMeta<typeof Grid>;


const Template: ComponentStory<typeof Grid> = (args) => {
  return (
    <div style={{ boxSizing: 'border-box' }}>
      <Grid
        {...args}
        container
        withMargins
        component={'main'}
        style={{ backgroundColor: 'rgba(85,85,85,0.15)', }}
      >
        <Grid
          container
          gap={{ xs: toRem(0), md: toRem(10), xl: `${toRem(20)} ${toRem(40)}`, }}
          columns={{ xs: 2, sm: 2, md: 4, lg: 8, xl: 8 }}
          item
          xs={2}
          sm={2}
          md={8}
          style={{ padding: `${toRem(4)}`, border: '1px solid crimson', height: 120, backgroundColor: 'rgba(85,85,85,0.15)' }}
        >
          <Grid
            style={{ border: '1px solid black', display: 'flex', alignItems: 'center', justifyContent: 'center' }}
            item
            xs={2}
            md={2}
          >
            xs={2}, md={2}
          </Grid>
          <Grid
            style={{ border: '1px solid black', display: 'flex', alignItems: 'center', justifyContent: 'center' }}
            item
            xs={1}
            md={2}
          >
            xs={1}, md={2}
          </Grid>
          <Grid
            style={{ border: '1px solid black', display: 'flex', alignItems: 'center', justifyContent: 'center' }}
            item
            xs={1}
            md={2}
          >
            xs={1}, md={2}
          </Grid>
          <Grid
            style={{ border: '1px solid black', display: 'flex', alignItems: 'center', justifyContent: 'center' }}
            item
            xs={2}
            md={2}
          >
            xs={2}, md={2}
          </Grid>
        </Grid>
        <Grid
          container
          item
          gap={toRem(30)}
          columns={{ xs: 1, sm: 1, md: 4 }}
          xs={2}
          sm={2}
          md={4}
          style={{ padding: `${toRem(4)}`, border: '1px solid crimson', backgroundColor: 'rgba(85,85,85,0.15)' }}
        >
          <Grid
            item
            xs={2}
            style={{ display: 'flex', padding: `${toRem(4)}`, border: '1px solid black', backgroundColor: 'rgb(255,255,255)' }}
          >
            <div style={{ flexGrow: 1, padding: toRem(10), backgroundColor: 'rgba(79,79,79,0.15)' }}>Flex item</div>
            <div style={{ flexGrow: 1, padding: toRem(10), backgroundColor: 'rgba(168,127,127,0.15)' }}>Flex item</div>
          </Grid>
          <Grid
            item
            xs={2}
            style={{ display: 'flex', padding: `${toRem(4)}`, border: '1px solid black', backgroundColor: 'rgb(255,255,255)' }}
          >
            <div style={{ flexGrow: 1, padding: toRem(10), backgroundColor: 'rgba(79,79,79,0.15)' }}>Flex item</div>
            <div style={{ flexGrow: 1, padding: toRem(10), backgroundColor: 'rgba(168,127,127,0.15)' }}>Flex item</div>
          </Grid>
        </Grid>
      </Grid>
    </div>
  );
}

export const StandardGrid = Template.bind({});
