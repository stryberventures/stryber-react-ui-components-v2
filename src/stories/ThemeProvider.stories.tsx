import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';
import { ThemeProvider } from '../components/ThemeProvider';
import { Button } from '../components/Button';
import { defaultTheme } from '../constants/defaultTheme';

export default {
  title: 'Components/ThemeProvider',
  component: ThemeProvider,
  parameters: {
    componentSubtitle: `Component which enables support of custom themes. To use a custom theme wrap your root
     component with ThemeProvider and pass the theme as a property.`
  },
  // argTypes: {
  //   something: { control: 'color', defaultValue: '#003CB8' },
  //   theme: {
  //     primary: {
  //       main: { control: 'color', defaultValue: '#003CB8' },
  //       dark: { control: 'color', defaultValue: '#003CB8' },
  //       light: { control: 'color', defaultValue: '#003CB8' },
  //       contrast: { control: 'color', defaultValue: '#003CB8' },
  //     },
  //   },
  // },
} as ComponentMeta<typeof ThemeProvider>;

const Template: ComponentStory<typeof ThemeProvider> = (args) => (
  <ThemeProvider {...args}>
    <Button type="primary" label={'Primary'}/>
    <h1> </h1>
    <Button type="secondary" label={'Secondary'}/>
    <h1> </h1>
    <Button type="ghost" label={'Ghost'}/>
  </ThemeProvider>
);

export const Theme = Template.bind({});
Theme.args = {
  theme: defaultTheme
};
