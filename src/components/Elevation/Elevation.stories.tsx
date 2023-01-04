import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';
import Elevation from './';
import Text from '../Text';
import pkg from './package.json';
import { buildExcludeArgTypes } from '../../storybook/utils';
import { createStyles } from '../Theme/index';


export default {
  title: 'Components/Elevation',
  component: Elevation,
  parameters: {
    pkg,
  },
  args: {
    variant: 'extraLight',
    component: 'div',
  },
  argTypes: buildExcludeArgTypes(['className']),
} as ComponentMeta<typeof Elevation>;

const Wrapper = ({ children }: any) => {
  return <div style={{ padding: 16, }}>{children}</div>
};

const Template: ComponentStory<typeof Elevation> = (args) => {
  const classes = useStyles();
  return (
    <Elevation
      className={classes.elevation}
      {...args}
    >
      {args.children}
    </Elevation>);
}

export const ExtraLight = Template.bind({});
ExtraLight.args = {
  variant: 'extraLight',
  component: 'section',
  children: <Wrapper><Text>Extra Light</Text></Wrapper>,
};

export const Light = Template.bind({});
Light.args = {
  variant: 'light',
  children: <Wrapper><Text>Light</Text></Wrapper>,
};

export const Medium = Template.bind({});
Medium.args = {
  variant: 'medium',
  children: <Wrapper><Text>Medium</Text></Wrapper>,
};

export const Heavy = Template.bind({});
Heavy.args = {
  variant: 'heavy',
  children: <Wrapper><Text>Heavy</Text></Wrapper>,
};

export const ExtraHeavy = Template.bind({});
ExtraHeavy.args = {
  variant: 'extraHeavy',
  children: <Wrapper><Text>Extra Heavy</Text></Wrapper>,
};

const useStyles = createStyles(() => ({
  elevation: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    width: 140,
    height: 140,
  },
}));
